import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar, Dimensions, Alert, Modal, ActivityIndicator } from 'react-native';
import { HomeScreenSkeleton } from '../components/SkeletonLoader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { LanguageCourse } from '../data/mockData';
import { ContentService } from '../services/ContentService';
import { ParticleBackground } from '../components/ParticleBackground';
import { LinearGradient } from 'expo-linear-gradient';
import { AIService } from '../services/AIService';

type Props = any;

const { width } = Dimensions.get('window');

const fallbackLangData = {
  title: 'Yakında',
  description: 'Bu dil için içerikler hazırlanıyor.',
  units: [
    {
      id: 'placeholder-u',
      title: 'Ünite 1',
      description: 'Çok Yakında',
      color: '#58CC02',
      levels: [
        { id: 'placeholder', name: 'Çok Yakında', icon: '🚧', type: 'lesson' }
      ]
    }
  ]
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const { progress, updateLastReportDate, saveReportSnapshot } = useProgressStore();
  
  const [currentLangData, setCurrentLangData] = useState<LanguageCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    ContentService.getCourseData(activeLanguage).then(data => {
      if (mounted) {
        // use fallback if null
        setCurrentLangData(data || { ...fallbackLangData, title: activeLanguage.charAt(0).toUpperCase() + activeLanguage.slice(1) } as any);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [activeLanguage]);

  const langProgress = progress.languages?.[activeLanguage] || { totalXp: 0, dailyXp: 0, streak: 0, level: 1, completedLessons: [], lastActiveDate: '', weakWords: {}, lastReportDate: null };

  const [reportLoading, setReportLoading] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [aiReport, setAiReport] = useState('');

  const lastReportDate = langProgress.lastReportDate ? new Date(langProgress.lastReportDate) : null;
  const now = new Date();
  const diffTime = lastReportDate ? Math.abs(now.getTime() - lastReportDate.getTime()) : null;
  const diffDays = diffTime !== null ? Math.floor(diffTime / (1000 * 60 * 60 * 24)) : null;
  const daysUntilNext = diffDays !== null ? 7 - diffDays : 0;

  const currentMistakes = langProgress.mistakes || {};
  const currentMistakeCount = Object.values(currentMistakes).reduce((sum, item) => sum + item.count, 0);
  const previousMistakeCount = Object.values(langProgress.previousReportSnapshot || {}).reduce((sum, item) => sum + item, 0);
  const categoryCounts = Object.values(currentMistakes).reduce((acc: Record<string, number>, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.count;
    return acc;
  }, {});
  const topCategory = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category)
    .shift() || 'Henüz veri yok';

  const canGetReport = !lastReportDate
    ? currentMistakeCount >= 20
    : daysUntilNext <= 0 || currentMistakeCount >= 50;

  const progressPercent = previousMistakeCount > 0
    ? Math.round(((previousMistakeCount - currentMistakeCount) / previousMistakeCount) * 100)
    : 0;

  const handleGetReport = async () => {
    if (!canGetReport) {
      const message = !lastReportDate
        ? 'İlk rapor için en az 20 yeni hata kaydetmelisin.'
        : `Yeni rapor için ${Math.max(daysUntilNext, 0)} gün daha ya da 50 yeni hata gerekiyor.`;
      Alert.alert('Arjin diyor ki', message);
      return;
    }
    
    setReportLoading(true);
    setReportModalVisible(true);

    const report = await AIService.analyzeProgress(currentMistakes, activeLanguage, langProgress.previousReportSnapshot || {});
    setAiReport(report);
    saveReportSnapshot(activeLanguage);
    updateLastReportDate(new Date().toISOString(), activeLanguage);
    setReportLoading(false);
  };

  const handleLevelPress = (level: any) => {
    navigation.navigate('Lesson', { lessonId: level.id });
  };

  const isLessonCompleted = (levelId: string) => langProgress.completedLessons.includes(levelId);

  // Zigzag positions for Duolingo-style path
  const getNodePosition = (index: number): number => {
    const positions = [0, 1, 2, 1, 0, -1, 0, 1, 2, 1];
    const pos = positions[index % positions.length];
    return pos * 45; // horizontal offset
  };

  if (loading || !currentLangData) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['top']}>
        <HomeScreenSkeleton />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['top']}>
      <ParticleBackground />
      {/* Header bar */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View style={styles.headerLeft}>
          <View style={[styles.flagContainer, { borderColor: colors.border }]}>
            <Text style={styles.flagText}>
              {activeLanguage === 'kurdish' ? '☀️' : activeLanguage === 'turkish' ? '🇹🇷' : activeLanguage === 'english' ? '🇬🇧' : activeLanguage === 'french' ? '🇫🇷' : '🌐'}
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <View style={styles.statItem}>
            <Text style={[styles.statEmoji]}>🔥</Text>
            <Text style={[styles.statVal, { color: '#FF9600' }]}>{langProgress.streak}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statEmoji]}>💎</Text>
            <Text style={[styles.statVal, { color: colors.info }]}>{progress.gems}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statEmoji]}>❤️</Text>
            <Text style={[styles.statVal, { color: colors.error }]}>{progress.hearts}</Text>
          </View>
        </View>
      </View>

      {/* Daily progress */}
      <View style={[styles.dailyBar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View style={styles.dailyRow}>
          <Text style={[styles.dailyLabel, { color: colors.text }]}>
            {currentLangData.title}
          </Text>
          <Text style={[styles.dailyXp, { color: colors.primary }]}>
            Seviye {langProgress.level} • {langProgress.dailyXp}/50 XP
          </Text>
        </View>
        <View style={[styles.dailyProgressBg, { backgroundColor: colors.border }]}>
          <View 
            style={[
              styles.dailyProgressFill, 
              { 
                backgroundColor: colors.primary,
                width: `${Math.min((langProgress.dailyXp / 50) * 100, 100)}%`,
              }
            ]} 
          />
        </View>
      </View>

      {/* Rapor Modal */}
      <Modal
        visible={reportModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setReportModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, { backgroundColor: colors.surface }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>✨ Arjin'in Analizi</Text>
              <TouchableOpacity onPress={() => setReportModalVisible(false)}>
                <Text style={{ fontSize: 22, color: colors.textLight }}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalScroll} showsVerticalScrollIndicator={false}>
              {reportLoading ? (
                <View style={{ padding: 30, alignItems: 'center' }}>
                  <ActivityIndicator size="large" color={colors.primary} />
                  <Text style={{ marginTop: 14, color: colors.textLight, textAlign: 'center' }}>Arjin verilerini analiz ediyor...</Text>
                </View>
              ) : (
                <Text style={[styles.modalText, { color: colors.text }]}>{aiReport}</Text>
              )}
            </ScrollView>
            {!reportLoading && (
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.primary }]}
                onPress={() => setReportModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Harika, Teşekkürler!</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>

      {/* Learning Path */}
      <ScrollView contentContainerStyle={styles.pathContainer} showsVerticalScrollIndicator={false}>
        {/* Alphabet Strip */}
        <TouchableOpacity
          style={[styles.alphabetStrip, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate('Alphabet' as never)}
          activeOpacity={0.75}
        >
          <Text style={styles.alphabetStripEmoji}>🔤</Text>
          <Text style={[styles.alphabetStripText, { color: colors.text }]}>Sesleri Öğren</Text>
          <Text style={[styles.alphabetStripSub, { color: colors.textLight }]}>Harfler & telaffuz</Text>
          <Text style={{ marginLeft: 'auto', fontSize: 16, color: colors.primary, fontWeight: 'bold' }}>→</Text>
        </TouchableOpacity>

        {/* Yakında banner — 1 üniteli ve "🚧" içeriyorsa göster */}
        {currentLangData.units.length === 1 && currentLangData.units[0]?.levels?.[0]?.icon === '🚧' && (
          <View style={[styles.alphabetStrip, { backgroundColor: colors.surface, borderColor: colors.border, marginBottom: 12 }]}>
            <Text style={styles.alphabetStripEmoji}>🌍</Text>
            <Text style={[styles.alphabetStripText, { color: colors.text }]}>{currentLangData.title} — Yakında!</Text>
            <Text style={[styles.alphabetStripSub, { color: colors.textLight }]}>İçerikler hazırlanıyor.</Text>
          </View>
        )}

        {currentLangData.units.map((unit: any, unitIndex: number) => (
          <View key={unit.id} style={styles.unitContainer}>
            {/* Section title */}
            <View style={[styles.sectionHeader, { backgroundColor: unit.color, borderBottomColor: unit.color + 'CC' }]}>
              <View>
                <Text style={styles.sectionTitle}>{unit.title}</Text>
                <Text style={styles.sectionSub}>{unit.description}</Text>
              </View>
            </View>

            {/* Path nodes */}
            <View style={styles.pathNodes}>
              {unit.levels.map((level: any, index: number) => {
                const completed = isLessonCompleted(level.id);
                // A lesson is next if it's the very first of the first unit, OR if the previous lesson in the app is completed.
                // To keep it simple, we just check if it's the first uncompleted lesson.
                const allFlatLevels = currentLangData.units.flatMap((u: any) => u.levels);
                const flatIndex = allFlatLevels.findIndex((l: any) => l.id === level.id);
                const isNext = !completed && (flatIndex === 0 || isLessonCompleted(allFlatLevels[flatIndex - 1]?.id));
                const isLocked = !completed && !isNext;
                const offset = getNodePosition(index);

                return (
                  <View key={level.id} style={styles.nodeRow}>
                    {/* Connecting dotted line */}
                    {index > 0 && (
                      <View style={[styles.connector, { borderColor: completed ? unit.color : colors.border }]} />
                    )}
                    
                    <View style={[styles.nodeWrapper, { marginLeft: offset + (width / 2 - 50) }]}>
                      {/* Tüm node alanı tıklanabilir (yukarıdan aşağıya: BAŞLA + yuvarlak + isim) */}
                      <TouchableOpacity
                        onPress={() => !isLocked && handleLevelPress(level)}
                        disabled={isLocked}
                        activeOpacity={0.75}
                        style={{ alignItems: 'center' }}
                      >
                        {/* Lesson geometric node */}
                        <View
                          style={{
                            shadowColor: isNext ? unit.color : 'transparent',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: isNext ? 0.9 : 0,
                            shadowRadius: 14,
                            elevation: isNext ? 12 : 0,
                            transform: [{ rotate: '45deg' }],
                            marginVertical: 10,
                          }}
                        >
                          <LinearGradient
                            colors={
                              completed ? [colors.warning, '#B8860B'] :
                              isNext ? [unit.color, '#00B8CC'] :
                              [colors.border, '#1C2636']
                            }
                            style={[
                              styles.node,
                              {
                                borderWidth: isNext ? 2.5 : 1,
                                borderColor: isNext ? '#FFFFFF66' : 'transparent',
                              }
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                          >
                            <Text style={[styles.nodeIcon, { transform: [{ rotate: '-45deg' }] }]}>
                              {isLocked ? '🔒' : level.icon}
                            </Text>
                          </LinearGradient>
                        </View>

                        <Text style={[
                          styles.nodeName, 
                          { color: isLocked ? colors.textLight : colors.text }
                        ]}>{level.name}</Text>

                        {completed && (
                          <View style={[styles.completeBadge, { backgroundColor: unit.color + '20' }]}>
                            <Text style={[styles.completeBadgeText, { color: unit.color }]}>✓ Bitti</Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Arjin Floating Bubble */}
      <TouchableOpacity
        style={[
          styles.arjinBubble,
          { backgroundColor: colors.surface, opacity: 0.7 },
        ]}
        onPress={() => Alert.alert('Çok Yakında', 'Arjin yapay zeka analiz sistemi çok yakında devrede olacak!')}
        activeOpacity={0.8}
      >
        <Text style={styles.arjinBubbleEmoji}>🔒</Text>
        <Text style={[styles.arjinBubbleLabel, { color: colors.textLight }]}>Yakında</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  unitContainer: {
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 4,
  },
  flagText: {
    fontSize: 22,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 18,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statEmoji: {
    fontSize: 16,
  },
  statVal: {
    fontSize: 15,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  dailyBar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  dailyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  dailyLabel: {
    fontSize: 14,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  dailyXp: {
    fontSize: 13,
    fontWeight: '700',
  },
  dailyProgressBg: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  dailyProgressFill: {
    height: '100%',
    borderRadius: 4,
  },

  pathContainer: {
    paddingTop: 6,
    paddingBottom: 30,
  },  alphabetStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 14,
    marginTop: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  alphabetStripEmoji: {
    fontSize: 20,
  },
  alphabetStripText: {
    fontSize: 14,
    fontWeight: '700',
  },
  alphabetStripSub: {
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 16,
    borderBottomWidth: 4,
    gap: 12,
    marginBottom: 30,
  },
  sectionEmoji: {
    fontSize: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
  },
  sectionSub: {
    fontSize: 13,
    color: '#FFF',
    opacity: 0.85,
    marginTop: 2,
  },
  pathNodes: {
    alignItems: 'flex-start',
  },
  nodeRow: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  connector: {
    width: 3,
    height: 25,
    borderLeftWidth: 3,
    borderStyle: 'dashed',
    marginBottom: 5,
  },
  nodeWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  node: {
    width: 74,
    height: 74,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  nodeIcon: {
    fontSize: 32,
  },
  nodeName: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
  },
  completeBadge: {
    marginTop: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  completeBadgeText: {
    fontSize: 11,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  startBadge: {
    marginTop: 6,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 12,
  },
  startBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    paddingBottom: 32,
    maxHeight: '82%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  modalScroll: {
    maxHeight: 420,
    marginBottom: 16,
  },
  modalText: {
    fontSize: 15,
    lineHeight: 24,
  },
  modalButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  modalButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arjinBubble: {
    position: 'absolute',
    right: 18,
    bottom: 28,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  arjinBubbleActive: {
    shadowOpacity: 0.45,
    elevation: 16,
  },
  arjinBubbleEmoji: {
    fontSize: 22,
  },
  arjinBubbleLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 1,
    letterSpacing: 0.5,
  },
  arjinBubbleDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF3B30',
    borderWidth: 1.5,
    borderColor: '#FFF',
  },
});

export default HomeScreen;
