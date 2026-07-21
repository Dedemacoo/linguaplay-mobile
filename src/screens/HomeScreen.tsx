import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, Animated, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { useLanguageStore, LanguageKey } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { ContentService } from '../services/ContentService';
import { AIService } from '../services/AIService';
import { LanguageCourse } from '../data/mockData';
import { Mascot } from '../components/Mascot';
import { HomeScreenSkeleton } from '../components/SkeletonLoader';
import { useThemeColors } from '../theme/colors';
import { useTheme } from '../context/ThemeContext';

// Refactored Components
import { Dashboard, LANG_FLAGS, LANG_LABELS } from '../components/home/Dashboard';
import { usePreferencesStore } from '../store/usePreferencesStore';
import { WorldSection } from '../components/home/WorldSection';
import { getHomeStyles } from './homeStyles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ALL_LANGUAGES: LanguageKey[] = [
  'english', 'turkish', 'kurdish', 'french', 'spanish', 'german',
  'italian', 'japanese', 'korean', 'russian', 'chinese', 'arabic',
  'portuguese', 'dutch'
];

const HomeScreen: React.FC = () => {
  const colors = useThemeColors();
  const styles = useMemo(() => getHomeStyles(colors), [colors]);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  const { dailyGoal } = usePreferencesStore();
  const { progress, claimUnitReward } = useProgressStore();

  const [courseData, setCourseData] = useState<LanguageCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [showFabs, setShowFabs] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  
  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const activeNodeY = useRef(0);
  const activeUnitId = useRef<string>('');
  const unitYPositions = useRef<{[key: string]: number}>({});
  const scrollYRef = useRef(0);

  // Animations
  const xpAnim = useRef(new Animated.Value(0)).current;
  const fabScale = useRef(new Animated.Value(1)).current;
  const dropdownAnim = useRef(new Animated.Value(0)).current;
  const dropdownOpacity = useRef(new Animated.Value(0)).current;

  // Safe Progress Extraction
  const langProgress = progress?.languages?.[activeLanguage] || { totalXp: 0, dailyXp: 0, completedLessons: [], level: 1 };
  const completedLevels = langProgress.completedLessons || [];
  const dailyXp = langProgress.dailyXp || 0;
  const streak = progress?.languages?.[activeLanguage]?.streak || 0;
  const userMistakes = langProgress.mistakes || {};
  const mistakeKeys = Object.keys(userMistakes);
  const hasMistakes = mistakeKeys.length > 0;

  useEffect(() => {
    let mounted = true;
    ContentService.getCourseData(activeLanguage).then(data => {
      if (mounted) {
        setCourseData(data);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [activeLanguage]);

  const activeNodeIndex = useMemo(() => {
    if (!courseData) return 0;
    const langPrefix = activeLanguage === 'kurdish' ? 'kur' : activeLanguage === 'english' ? 'eng' : activeLanguage.substring(0,3);
    
    let index = 0;
    for (let uIdx = 0; uIdx < courseData.units.length; uIdx++) {
      for (let lIdx = 0; lIdx < 6; lIdx++) {
        const computedLessonId = `${langPrefix}_u${uIdx + 1}_l${lIdx + 1}`;
        const isLegacyCompleted = completedLevels.includes(computedLessonId);
        const partsCompleted = [1, 2, 3, 4].filter(p => completedLevels.includes(`${computedLessonId}_${p}`)).length;
        
        if (!isLegacyCompleted && partsCompleted < 4) {
          return index;
        }
        index++;
      }
    }
    return index;
  }, [courseData, activeLanguage, completedLevels]);
  
  useEffect(() => {
    Animated.timing(xpAnim, {
      toValue: Math.min((dailyXp / dailyGoal) * 100, 100),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [dailyXp, dailyGoal]);

  // Dropdown animation
  const toggleDropdown = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (isLangDropdownOpen) {
      Animated.parallel([
        Animated.timing(dropdownAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
        Animated.timing(dropdownOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start(() => setIsLangDropdownOpen(false));
    } else {
      setIsLangDropdownOpen(true);
      Animated.parallel([
        Animated.spring(dropdownAnim, { toValue: 1, friction: 8, tension: 65, useNativeDriver: true }),
        Animated.timing(dropdownOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  };

  const selectLanguage = (lang: LanguageKey) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActiveLanguage(lang);
    Animated.parallel([
      Animated.timing(dropdownAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      Animated.timing(dropdownOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start(() => setIsLangDropdownOpen(false));
  };

  if (loading || !courseData) {
    return <HomeScreenSkeleton />;
  }

  const handleNodePress = (status: string, lessonId: string, title: string, nextPart?: number) => {
    if (status !== 'locked') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      const finalLessonId = nextPart ? `${lessonId}_${nextPart}` : lessonId;
      navigation.navigate('Lesson' as never, { lessonId: finalLessonId, title } as never);
    }
  };

  const scrollToTop = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const scrollToActiveNode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (scrollViewRef.current) {
      const screenCenter = SCREEN_HEIGHT / 2;
      const absoluteY = (unitYPositions.current[activeUnitId.current] || 0) + activeNodeY.current;
      const targetScrollY = Math.max(0, absoluteY - screenCenter + 100);
      scrollViewRef.current?.scrollTo({ y: targetScrollY, animated: true });
    }
  };

  const handleAIPractice = async () => {
    if (!hasMistakes) {
      Alert.alert("Harika Gidiyorsun! 🎉", "Şu an üzerinde çalışman gereken bir zayıf noktan yok.");
      return;
    }
    setIsGeneratingQuiz(true);
    const customQuestions = await AIService.generateWeaknessQuiz(userMistakes, activeLanguage);
    setIsGeneratingQuiz(false);
    setIsAIPanelOpen(false);
    
    if (customQuestions && customQuestions.length > 0) {
      navigation.navigate('Lesson' as never, {
        lessonId: 'ai_practice', 
        customQuestions,
        isAIPractice: true
      } as never);
    }
  };

  const dropdownScale = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });
  const dropdownTranslateY = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />

      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          scrollYRef.current = y;
          setShowFabs(y > 300);
        }}
        scrollEventThrottle={16}
      >
        <Dashboard
          colors={colors}
          streak={streak}
          gems={progress?.gems || 0}
          hearts={progress?.hearts || 0}
          activeUnitIndex={Math.floor(activeNodeIndex / 6)}
          activeLanguage={activeLanguage}
          onLangPress={toggleDropdown}
        />

        <WorldSection
          courseData={courseData}
          completedLevels={completedLevels}
          activeNodeIndex={activeNodeIndex}
          colors={colors}
          handleNodePress={handleNodePress}
          activeLanguage={activeLanguage}
          claimUnitReward={claimUnitReward}
          progress={progress}
          unitYPositions={unitYPositions}
          activeNodeY={activeNodeY}
          activeUnitId={activeUnitId}
        />
      </ScrollView>

      {/* Language Dropdown - Animated */}
      {isLangDropdownOpen && (
        <>
          <TouchableOpacity 
            style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 998 }]} 
            activeOpacity={1}
            onPress={() => {
              Animated.parallel([
                Animated.timing(dropdownAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
                Animated.timing(dropdownOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
              ]).start(() => setIsLangDropdownOpen(false));
            }} 
          />
          <Animated.View style={{
            position: 'absolute',
            top: insets.top + 55,
            left: 12,
            backgroundColor: colors.surface,
            borderRadius: 16,
            zIndex: 999,
            borderWidth: 1,
            borderColor: colors.border,
            width: 220,
            maxHeight: 420,
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 15,
            opacity: dropdownOpacity,
            transform: [{ scale: dropdownScale }, { translateY: dropdownTranslateY }],
            overflow: 'hidden',
          }}>
            {/* Header */}
            <View style={{ padding: 14, borderBottomWidth: 1, borderBottomColor: colors.border }}>
              <Text style={{ color: colors.text, fontSize: 15, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>
                🌍 Öğrenilen Dil
              </Text>
            </View>
            
            <ScrollView style={{ maxHeight: 360 }} showsVerticalScrollIndicator={false}>
              {ALL_LANGUAGES.map((lang, index) => {
                const isActive = lang === activeLanguage;
                return (
                  <TouchableOpacity 
                    key={lang}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 14,
                      backgroundColor: isActive ? colors.primary + '15' : 'transparent',
                      borderBottomWidth: index < ALL_LANGUAGES.length - 1 ? 1 : 0,
                      borderBottomColor: colors.border + '40',
                    }}
                    onPress={() => selectLanguage(lang)}
                  >
                    <Text style={{ fontSize: 24, marginRight: 12 }}>{LANG_FLAGS[lang]}</Text>
                    <Text style={{
                      color: isActive ? colors.primary : colors.text,
                      fontSize: 15,
                      fontWeight: isActive ? 'bold' : '500',
                      flex: 1,
                    }}>
                      {LANG_LABELS[lang]}
                    </Text>
                    {isActive && (
                      <FontAwesome5 name="check-circle" size={16} color={colors.primary} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </Animated.View>
        </>
      )}

      {/* Floating Buttons */}
      <View style={styles.navigationFabContainer}>
        {showFabs && (
          <>
            <TouchableOpacity style={styles.navFabButton} onPress={scrollToTop}>
              <FontAwesome5 name="arrow-up" size={18} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navFabButton, { borderColor: '#3B82F6' }]} onPress={scrollToActiveNode}>
              <LottieView source={require('../../assets/mascots/bulunanders.json')} autoPlay loop style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.floatingMascotContainer}>
        <TouchableOpacity onPress={() => setIsAIPanelOpen(true)}>
          <Mascot mascotId="classic" size={70} animationState="action" />
        </TouchableOpacity>
      </View>

      {/* AI Panel Modal */}
      {isAIPanelOpen && (
        <View style={StyleSheet.absoluteFill}>
          <TouchableOpacity style={styles.aiModalBg} onPress={() => setIsAIPanelOpen(false)} />
          <View style={styles.aiModalContent}>
             <View style={styles.aiModalHeader}>
               <Mascot mascotId="classic" size={60} animationState="happy" />
               <View style={styles.aiModalHeaderText}>
                 <Text style={styles.aiModalTitle}>AI Koç Analizi</Text>
                 <Text style={styles.aiModalSubtitle}>Gelişimini takip ediyorum!</Text>
               </View>
             </View>
             <ScrollView>
               <View style={styles.aiInfoCard}>
                 <Text style={styles.aiInfoTitle}>Zayıf Yönlerin</Text>
                 <Text style={styles.aiInfoText}>
                   {hasMistakes 
                     ? `${mistakeKeys.length} konuda hatan var. Hemen telafi edelim mi?`
                     : `Harika gidiyorsun, kayıtlı hatan yok!`
                   }
                 </Text>
               </View>
               <TouchableOpacity
                 style={[styles.aiActionButton, { backgroundColor: hasMistakes ? '#3B82F6' : '#1E293B' }]}
                 onPress={handleAIPractice}
                 disabled={isGeneratingQuiz}
               >
                 {isGeneratingQuiz ? <ActivityIndicator color="#FFF" /> : (
                   <Text style={[styles.aiActionButtonText, { color: hasMistakes ? '#FFF' : '#64748B' }]}>
                     Zayıf Yönlerimi Çalış
                   </Text>
                 )}
               </TouchableOpacity>
             </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
