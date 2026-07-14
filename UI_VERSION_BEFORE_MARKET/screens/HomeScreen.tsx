import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Dimensions, Animated, NativeSyntheticEvent, NativeScrollEvent, Modal, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { ContentService } from '../services/ContentService';
import { LanguageCourse } from '../data/mockData';
import { Mascot } from '../components/Mascot';
import { HomeScreenSkeleton } from '../components/SkeletonLoader';
import { OrganicParticles } from '../components/OrganicParticles';

const { width, height } = Dimensions.get('window');

// ─── BRAND COLORS ───
const BRAND = {
  bg: '#0B1022',
  surface: 'rgba(17, 26, 46, 0.8)',
  card: '#141D32',
  border: '#1E2D4A',
  primary: '#4CD964',
  primaryDark: '#2D8A3A',
  secondary: '#B84DFF',
  secondaryDark: '#8A2ECC',
  accent: '#00D9FF',
  gold: '#FFD54A',
  danger: '#FF5A5F',
  text: '#FFFFFF',
  textSub: '#A0ABC0',
  textMuted: '#718096',
  textLight: '#E2E8F0',
  streak: '#FF8C00'
};

// DAILY_GOAL is now dynamic via state
const WORLD_HEIGHT = 1600; // Approximate height of each world section

// ─── 7 WORLDS CONFIGURATION ───
const WORLDS = [
  {
    id: 1, title: 'Tropikal Okyanus', subtitle: 'KISIM 1',
    bgGrad: ['#001F3F', '#0074D9'], bannerGrad: ['#003366', '#00509E'],
    nodeColor: '#0074D9', activeNodeColor: '#00B4D8',
    decos: ['🫧', '💧', '🐚', '🐟', '🌊'],
    cityBlocks: ['#0074D980', '#00A8E880', '#00B4D880'],
    icon: 'droplet'
  },
  {
    id: 2, title: 'Büyülü Orman', subtitle: 'KISIM 2',
    bgGrad: ['#0A1C10', '#183D22'], bannerGrad: ['#132A13', '#31572C'],
    nodeColor: '#2D6A4F', activeNodeColor: '#52B788',
    decos: ['🍃', '🍂', '🌸', '🦋', '🍄'],
    cityBlocks: ['#52B78880', '#74C69D80', '#95D5B280'],
    icon: 'leaf'
  },
  {
    id: 3, title: 'Antik Çöl', subtitle: 'KISIM 3',
    bgGrad: ['#2C1A0B', '#5A3D22'], bannerGrad: ['#3A2411', '#724B2C'],
    nodeColor: '#D68C45', activeNodeColor: '#F4A261',
    decos: ['✨', '☀️', '🏜️', '🏺', '💨'],
    cityBlocks: ['#E76F5180', '#F4A26180', '#E9C46A80'],
    icon: 'sun'
  },
  {
    id: 4, title: 'Buzul Krallığı', subtitle: 'KISIM 4',
    bgGrad: ['#0D1B2A', '#1B263B'], bannerGrad: ['#14253A', '#293C5A'],
    nodeColor: '#457B9D', activeNodeColor: '#A8DADC',
    decos: ['❄️', '🌨️', '🧊', '💎', '🌬️'],
    cityBlocks: ['#A8DADC80', '#457B9D80', '#1D355780'],
    icon: 'snowflake'
  },
  {
    id: 5, title: 'Siber Şehir', subtitle: 'KISIM 5',
    bgGrad: ['#0B1022', '#141D32'], bannerGrad: ['#1A0A2E', '#2D1657'],
    nodeColor: '#8A2ECC', activeNodeColor: '#B84DFF',
    decos: ['⚡', '🛸', '💠', '👾', '🚀'],
    cityBlocks: ['#3B82F680', '#8B5CF680', '#EC489980', '#6366F180', '#E040FB80'],
    icon: 'zap'
  },
  {
    id: 6, title: 'Galaksi', subtitle: 'KISIM 6',
    bgGrad: ['#050117', '#120438'], bannerGrad: ['#0B0320', '#250B63'],
    nodeColor: '#5A189A', activeNodeColor: '#7B68EE',
    decos: ['🌟', '☄️', '✨', '🪐', '👽'],
    cityBlocks: ['#7B68EE80', '#9D4EDD80', '#C77DFF80'],
    icon: 'star'
  },
  {
    id: 7, title: 'Ejderha Krallığı', subtitle: 'KISIM 7',
    bgGrad: ['#1F0303', '#4A0808'], bannerGrad: ['#2E0606', '#690B0B'],
    nodeColor: '#9D0208', activeNodeColor: '#E63946',
    decos: ['🔥', '🦅', '⚔️', '💀', '🛡️'],
    cityBlocks: ['#E6394680', '#D6282880', '#9D020880'],
    icon: 'shield'
  }
];


const WORLD_IMAGES = [
  require('../../assets/worlds/world1.jpg'),
  require('../../assets/worlds/world2.jpg'),
  require('../../assets/worlds/world3.jpg'),
  require('../../assets/worlds/world4.jpg'),
  require('../../assets/worlds/world5.jpg'),
  require('../../assets/worlds/world6.jpg'),
  require('../../assets/worlds/world7.jpg'),
];

const CHECKPOINT_TYPES = [
  { type: 'Treasure', emoji: '🎁', title: 'Hazine Avı' },
  { type: 'Boss', emoji: '👹', title: 'Büyük Sınav' },
  { type: 'Story', emoji: '📜', title: 'Gizli Hikaye' }
];

const HomeScreen: React.FC<any> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { activeLanguage } = useLanguageStore();
  const { progress } = useProgressStore();
  const { user } = useAuth();
  const userName = user?.displayName ? user.displayName.split(' ')[0] : 'Yolcu';
  
  const [courseData, setCourseData] = useState<LanguageCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [visibleWorldIndex, setVisibleWorldIndex] = useState(0);

  // Dynamic Daily XP Goal
  const [dailyGoal, setDailyGoal] = useState(500);

  useEffect(() => {
    const loadDailyGoal = async () => {
      const goalStr = await AsyncStorage.getItem('@daily_goal');
      if (goalStr) {
        setDailyGoal(parseInt(goalStr, 10));
      }
    };
    loadDailyGoal();
  }, []);
  
  const scrollRef = useRef<ScrollView>(null);
  
  // Animations
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const xpAnim = useRef(new Animated.Value(0)).current;

  // Safe Progress Extraction
  const langProgress = progress?.languages?.[activeLanguage] || { totalXp: 0, dailyXp: 0, completedLessons: [], level: 1 };
  const completedLevels = langProgress.completedLessons || [];
  const totalXp = langProgress.totalXp || 0;
  const dailyXp = langProgress.dailyXp || 0;
  const userLevel = langProgress.level || Math.floor(totalXp / 100) + 1;
  const streak = progress?.languages?.[activeLanguage]?.streak || 0;

  useEffect(() => {
    let mounted = true;
    
    ContentService.getCourseData(activeLanguage).then(data => {
      if (mounted) {
        setCourseData(data);
        setLoading(false);
      }
    });
    return () => { 
      mounted = false; 
    };
  }, [activeLanguage]);

  const allNodes = useMemo(() => {
    if (!courseData) return [];
    return courseData.units.flatMap(u => u.levels);
  }, [courseData]);

  // Determine active node index
  const activeNodeIndex = Math.max(0, allNodes.findIndex(n => !completedLevels.includes(n.id)));
  
  useEffect(() => {
    // Initial World setup based on active node
    const initialWorld = Math.floor(activeNodeIndex / 10) % WORLDS.length;
    setVisibleWorldIndex(initialWorld);
  }, [activeNodeIndex]);

  useEffect(() => {
    // Active Node Pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.15, duration: 1500, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1500, useNativeDriver: true })
      ])
    ).start();

    // Animate XP bar
    Animated.timing(xpAnim, {
      toValue: Math.min((dailyXp / dailyGoal) * 100, 100),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [dailyXp, dailyGoal]);

  useEffect(() => {
    // Determine active node index
  }, [visibleWorldIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setShowScrollTop(yOffset > 300);
    
    // Find which world is currently visible based on scroll position (approximate 800px per world)
    const newVisibleWorldIndex = Math.floor(yOffset / 800);
    if (newVisibleWorldIndex !== visibleWorldIndex && newVisibleWorldIndex >= 0 && newVisibleWorldIndex < WORLDS.length) {
      setVisibleWorldIndex(newVisibleWorldIndex);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };


  if (loading || !courseData) {
    return <HomeScreenSkeleton />;
  }

  const handleNodePress = (status: string, node: any) => {
    if (status !== 'locked') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      (navigation as any).navigate('Lesson', { title: node.name, lessonId: node.id });
    }
  };

  const renderTopDashboard = () => (
    <View style={[styles.dashboard, { paddingTop: insets.top + 10 }]}>
      <LinearGradient 
        colors={['rgba(18,18,18,0.8)', 'rgba(18,18,18,0.4)', 'transparent']} 
        style={StyleSheet.absoluteFill} 
        pointerEvents="none"
      />
      <View style={styles.topBar}>
        <View style={styles.flagAvatarRow}>
          <TouchableOpacity style={styles.flagCircle}>
            <Text style={{ fontSize: 22 }}>🇬🇧</Text>
          </TouchableOpacity>
          <View style={styles.welcomeTextGroup}>
            <Text style={styles.welcomeText}>Merhaba, {userName}!</Text>
            <View style={styles.headerXpRow}>
              <Text style={styles.headerXpLabel}>İlerleme</Text>
              <View style={styles.headerXpBarBg}>
                <Animated.View style={[styles.headerXpBarFill, { 
                  width: xpAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) 
                }]}>
                  <LinearGradient colors={['#4CD964', '#7AE82C']} start={{x:0, y:0}} end={{x:1, y:0}} style={StyleSheet.absoluteFill} />
                </Animated.View>
              </View>
              <Text style={styles.headerXpText}>{dailyXp}/{dailyGoal} XP</Text>
            </View>
          </View>
        </View>
      </View>
        
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statsScroll}>
        <View style={styles.statPill}>
          <Text style={{ fontSize: 16 }}>🔥</Text>
          <Text style={[styles.statValue, { color: BRAND.streak }]}>{streak}</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={{ fontSize: 16 }}>💎</Text>
          <Text style={[styles.statValue, { color: BRAND.accent }]}>{progress?.gems || 0}</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={{ fontSize: 16 }}>❤️</Text>
          <Text style={[styles.statValue, { color: BRAND.danger }]}>{progress?.hearts || 0}</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={{ fontSize: 16 }}>🪙</Text>
          <Text style={[styles.statValue, { color: BRAND.gold }]}>1.2K</Text>
        </View>
      </ScrollView>
    </View>
  );

  const renderWorldSections = () => {
    const worldChunks = [];
    for (let i = 0; i < allNodes.length; i += 10) {
      worldChunks.push(allNodes.slice(i, i + 10));
    }

    return worldChunks.map((chunkNodes, chunkIndex) => {
      if (chunkIndex >= WORLDS.length) return null; // Cap at 7 worlds for now
      
      const worldTheme = WORLDS[chunkIndex];
      const isCurrentWorld = Math.floor(activeNodeIndex / 10) === chunkIndex;
      // Optimize: Only render complex particles if this world is currently visible on screen
      const isVisible = Math.abs(visibleWorldIndex - chunkIndex) <= 1;

      return (
        <ImageBackground key={chunkIndex} source={WORLD_IMAGES[chunkIndex % 7]} style={styles.worldSection} resizeMode="cover">
          <LinearGradient colors={['rgba(11, 16, 34, 0.4)', 'rgba(11, 16, 34, 0.8)']} style={StyleSheet.absoluteFill} />

          {/* ORGANIC BACKGROUND DECORATIONS */}
          {isVisible && (
            <OrganicParticles emojis={worldTheme.decos} count={10} />
          )}

          {/* WORLD BANNER */}
          <View style={styles.bannerContainer}>
            <LinearGradient colors={worldTheme.bannerGrad as any} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.bannerGradient}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerSubtitle}>{worldTheme.subtitle}</Text>
                <Text style={styles.bannerTitle}>{worldTheme.title}</Text>
                <View style={styles.bannerProgressBg}>
                  <View style={[styles.bannerProgressFill, { width: isCurrentWorld ? '45%' : (chunkIndex < Math.floor(activeNodeIndex / 10) ? '100%' : '0%'), backgroundColor: worldTheme.activeNodeColor }]} />
                </View>
              </View>
              <View style={styles.bannerGraphic}>
                <View style={styles.buildingContainer}>
                  {worldTheme.cityBlocks.map((c, idx) => (
                    <View key={idx} style={[styles.building, { height: 40 + (idx * 15), backgroundColor: c }]} />
                  ))}
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* WINDING PATH */}
          <View style={styles.pathContainer}>
            {chunkNodes.map((node, i) => {
              const globalIndex = chunkIndex * 10 + i;
              const isCompleted = completedLevels.includes(node.id);
              const isActive = globalIndex === activeNodeIndex;
              const isLocked = globalIndex > activeNodeIndex;
              const isCheckpoint = (i === 9);

              // 6. SHARP ZIG-ZAG PATH
              const cycle = i % 4;
              const offsetX = cycle === 0 ? 0 : cycle === 1 ? 80 : cycle === 2 ? 0 : -80;
              const nextCycle = (i + 1) % 4;
              const nextOffsetX = nextCycle === 0 ? 0 : nextCycle === 1 ? 80 : nextCycle === 2 ? 0 : -80;
              
              let nodeContent;
              let btnStyle: any = [styles.nodeBtn];
              let innerStyle: any = [styles.nodeInner];

              // 5. PROFESSIONAL NODE SHAPES
              if (isCheckpoint) {
                // YILDIZ / BÜYÜK ROZET (Checkpoint)
                const cp = CHECKPOINT_TYPES[chunkIndex % CHECKPOINT_TYPES.length];
                btnStyle.push({ backgroundColor: BRAND.gold + '90', width: 90, height: 90, borderRadius: 45 });
                innerStyle.push({ backgroundColor: BRAND.gold, borderColor: '#FFF', borderWidth: 3, borderRadius: 45 });
                nodeContent = (
                  <>
                    <FontAwesome5 name="star" size={28} color="#FFF" solid />
                    <Text style={styles.checkpointLabel}>{cp.title}</Text>
                  </>
                );
              } else if (isActive) {
                // DİKDÖRTGEN (Active)
                btnStyle.push({ backgroundColor: worldTheme.nodeColor + '90', width: 110, height: 75, borderRadius: 24 });
                innerStyle.push({ backgroundColor: worldTheme.activeNodeColor, borderWidth: 3, borderColor: '#FFF', borderRadius: 24 });
                nodeContent = <Feather name={worldTheme.icon as any} size={36} color="#FFF" />;
              } else if (isCompleted) {
                // YUVARLAK (Completed)
                btnStyle.push({ backgroundColor: BRAND.primaryDark + '90', width: 65, height: 65, borderRadius: 32.5 });
                innerStyle.push({ backgroundColor: BRAND.primaryDark, borderColor: 'rgba(255,255,255,0.4)', borderWidth: 1.5, borderRadius: 32.5 });
                nodeContent = <Ionicons name="checkmark-sharp" size={28} color="#FFF" />;
              } else {
                // KARE (Locked)
                btnStyle.push({ backgroundColor: 'rgba(255,255,255,0.15)', width: 65, height: 65, borderRadius: 16 });
                innerStyle.push({ backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)', borderRadius: 16 });
                nodeContent = <FontAwesome5 name="lock" size={20} color={'rgba(255,255,255,0.5)'} />;
              }

              return (
                <View key={node.id} style={{ alignItems: 'center', marginVertical: isActive ? 25 : 18, transform: [{ translateX: offsetX }] }}>
                  
                  {isActive && (
                    <Animated.View style={[styles.activeAura, { backgroundColor: worldTheme.activeNodeColor + '50', transform: [{ scale: pulseAnim }], width: 130, height: 95, borderRadius: 32 }]} />
                  )}

                  <Animated.View style={isActive ? { transform: [{ scale: pulseAnim }] } : {}}>
                    <TouchableOpacity 
                      style={btnStyle}
                      activeOpacity={isLocked ? 1 : 0.8}
                      onPress={() => handleNodePress(isLocked ? 'locked' : isActive ? 'active' : 'completed', node)}
                    >
                      <View style={innerStyle}>
                        {nodeContent}
                      </View>
                    </TouchableOpacity>
                  </Animated.View>

                  {!isCheckpoint && (
                    <View style={[styles.nodeLabelBox, isActive && { backgroundColor: worldTheme.nodeColor + '80' }]}>
                      <Text style={[styles.nodeLabel, isLocked && { color: BRAND.textMuted }]}>{node.name}</Text>
                    </View>
                  )}

                  {i < chunkNodes.length - 1 && (
                    <View style={[styles.dotsContainer, { transform: [{ translateX: -offsetX }] }]}>
                       {[1,2,3].map(dotIndex => {
                         const fraction = dotIndex * 0.25;
                         const dotX = offsetX + (nextOffsetX - offsetX) * fraction;
                         return (
                           <View key={dotIndex} style={[styles.dot, { 
                             backgroundColor: isCompleted ? BRAND.primaryDark : (isLocked ? 'rgba(255,255,255,0.1)' : worldTheme.activeNodeColor),
                             transform: [{ translateX: dotX }] 
                           }]} />
                         );
                       })}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </ImageBackground>
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      
      <ScrollView 
        ref={scrollRef}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ marginTop: insets.top + 100 }}>
          {/* DAILY GOAL REMOVED - Space added for breathing room below the header */}
        </View>

        {/* ─── WORLD MAP SECTIONS ─── */}
        {renderWorldSections()}
      </ScrollView>

      {/* ─── FIXED DASHBOARD OVERLAY ─── */}
      {renderTopDashboard()}

      {/* ─── SCROLL TO TOP FAB ─── */}
      {showScrollTop && (
        <TouchableOpacity 
          style={styles.scrollTopBtn}
          onPress={scrollToTop}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-up" size={24} color="#FFF" />
        </TouchableOpacity>
      )}

      {/* ─── FLOATING LINGO AI ASSISTANT ─── */}
      <TouchableOpacity 
        style={styles.floatingAiBtn}
        onPress={() => setShowAnalysis(true)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[BRAND.secondary, BRAND.secondaryDark]}
          style={styles.floatingAiBg}
        >
          <Mascot size={32} emotion="excited" />
        </LinearGradient>
      </TouchableOpacity>

      {/* ─── LINGO ANALYSIS MODAL ─── */}
      <Modal visible={showAnalysis} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.analysisModalContainer}>
            <View style={styles.modalHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Mascot size={45} emotion="happy" />
                <View>
                  <Text style={styles.modalTitle}>Haftalık Analiz</Text>
                  <Text style={styles.modalSubtitle}>Senin için hazırladım, {userName}!</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setShowAnalysis(false)} style={styles.closeBtn}>
                <Feather name="x" size={24} color={BRAND.text} />
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.analysisScroll} showsVerticalScrollIndicator={false}>
              <View style={styles.analysisCard}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Text style={{ fontSize: 20 }}>🏆</Text>
                  <Text style={styles.analysisCardTitle}>Harika İlerliyorsun!</Text>
                </View>
                <Text style={styles.analysisCardText}>Bu hafta hedefinden {dailyXp} XP fazlasını kazandın. Dil becerilerinde belirgin bir hızlanma var.</Text>
              </View>

              <View style={[styles.analysisCard, { borderLeftColor: BRAND.danger }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Text style={{ fontSize: 20 }}>💡</Text>
                  <Text style={styles.analysisCardTitle}>Gelişim Alanı: Kelime</Text>
                </View>
                <Text style={styles.analysisCardText}>Yeni kelimeleri öğrenirken tekrarlara biraz daha ağırlık verebilirsin. Hatalarının %40'ı kelime eşleştirmelerinde olmuş.</Text>
              </View>

              <View style={[styles.analysisCard, { borderLeftColor: BRAND.accent }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Text style={{ fontSize: 20 }}>🔥</Text>
                  <Text style={styles.analysisCardTitle}>Seriyi Bozma</Text>
                </View>
                <Text style={styles.analysisCardText}>Serin tam {streak} gün oldu! Yarına da gelip bu harika zinciri sürdürmeyi unutma.</Text>
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.actionBtn} onPress={() => setShowAnalysis(false)}>
              <Text style={styles.actionBtnText}>Anladım, Teşekkürler Lingo!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BRAND.bg,
  },
  dashboard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 24,
    zIndex: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flagAvatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginRight: 16,
  },
  flagCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: BRAND.border,
  },
  statsScroll: {
    alignItems: 'center',
    gap: 8,
    paddingRight: 20,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRAND.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BRAND.border,
    gap: 6,
  },
  statValue: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  welcomeTextGroup: {
    justifyContent: 'center',
  },
  welcomeText: {
    color: BRAND.text,
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerXpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
  headerXpLabel: {
    color: BRAND.textMuted,
    fontSize: 12,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerXpBarBg: {
    height: 8,
    width: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  headerXpBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  headerXpText: {
    color: BRAND.primary,
    fontSize: 12,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  scrollContent: {
    paddingBottom: 120, // Extra padding for the floating button
  },
  challengeCard: {
    borderRadius: 20,
    padding: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: BRAND.border,
    backgroundColor: BRAND.card,
  },
  cardGradient: {
    position: 'absolute',
    left: 0, right: 0, top: 0, bottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cardTitle: {
    color: BRAND.text,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
    flex: 1,
  },
  cardReward: {
    color: BRAND.accent,
    fontSize: 15,
    fontWeight: '800',
  },
  cardBarBg: {
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  cardBarFill: {
    height: '100%',
    backgroundColor: BRAND.primary,
    borderRadius: 4,
  },
  cardFooterText: {
    color: BRAND.textSub,
    fontSize: 13,
    fontWeight: '700',
  },
  worldSection: {
    paddingVertical: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  bannerContainer: {
    marginHorizontal: 16,
    marginBottom: 30,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  bannerGradient: {
    flexDirection: 'row',
    padding: 24,
    height: 150,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 2,
  },
  bannerSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 12,
  },
  bannerProgressBg: {
    height: 6,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 3,
    width: '70%',
  },
  bannerProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  bannerGraphic: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 160,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buildingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginRight: 10,
    opacity: 0.85,
  },
  building: {
    width: 22,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  pathContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  nodeBtn: {
    width: 82,
    height: 82,
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeInner: {
    width: '100%',
    height: '100%',
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeAura: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    top: -17,
  },
  completeBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: BRAND.primaryDark,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0B1022',
  },
  nodeLabelBox: {
    marginTop: 12,
    backgroundColor: 'rgba(20, 29, 50, 0.7)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  nodeLabel: {
    color: BRAND.text,
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  checkpointLabel: {
    position: 'absolute',
    bottom: -25,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    width: 120,
    textAlign: 'center',
  },
  dotsContainer: {
    height: 45,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 6,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  floatingAiBtn: {
    position: 'absolute',
    bottom: 105,
    right: 20,
    shadowColor: BRAND.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    zIndex: 20,
  },
  floatingAiBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BRAND.secondary,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  floatingAiText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 0.5,
  },
  scrollTopBtn: {
    position: 'absolute',
    bottom: 175,
    right: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BRAND.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    zIndex: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  analysisModalContainer: {
    backgroundColor: BRAND.bg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    height: '75%',
    borderTopWidth: 1,
    borderColor: BRAND.border,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  modalSubtitle: {
    color: BRAND.textLight,
    fontSize: 14,
    marginTop: 2,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: BRAND.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  analysisScroll: {
    flex: 1,
  },
  analysisCard: {
    backgroundColor: BRAND.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: BRAND.primary,
  },
  analysisCardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 6,
  },
  analysisCardText: {
    color: BRAND.textLight,
    fontSize: 14,
    lineHeight: 20,
  },
  actionBtn: {
    backgroundColor: BRAND.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  actionBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  }
});

export default HomeScreen;
