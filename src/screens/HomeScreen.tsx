import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Dimensions, Animated, Alert, ActivityIndicator, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { ContentService } from '../services/ContentService';
import { AIService } from '../services/AIService';
import { LanguageCourse } from '../data/mockData';
import { Mascot } from '../components/Mascot';
import { HomeScreenSkeleton } from '../components/SkeletonLoader';
import SoundManager from '../utils/SoundManager';

const { width } = Dimensions.get('window');

import { HexagonNode } from '../components/HexagonNode';

const SegmentedRing = ({ size = 96, strokeWidth = 8, progress = 0 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress * circumference);
  return (
    <View style={{ position: 'absolute', width: size, height: size, alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
      <Svg width={size} height={size}>
        <Circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth={strokeWidth} fill="none" />
        <Circle cx={size/2} cy={size/2} r={radius} stroke="#4CD964" strokeWidth={strokeWidth} fill="none" strokeDasharray={`${circumference} ${circumference}`} strokeDashoffset={strokeDashoffset} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      </Svg>
    </View>
  );
};

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
  textSub: '#B8C1D1',
  textMuted: '#5A6A88',
  streak: '#FF9600'
};

const DAILY_GOAL = 50;

// ─── 7 WORLDS CONFIGURATION ───
const WORLDS = [
  {
    id: 1, title: 'Tropikal Okyanus', subtitle: 'KISIM 1',
    bgGrad: ['#001F3F', '#0074D9'], bannerGrad: ['#003366', '#00509E'],
    nodeColor: '#0074D9', activeNodeColor: '#00B4D8',
    decos: ['🌴', '🐢', '⛵', '🦜', '🦀', '🌺', '🐙', '🫧'],
    cityBlocks: ['#0074D980', '#00A8E880', '#00B4D880'],
    icon: 'droplet',
    musicTrack: 'ocean_theme'
  },
  {
    id: 2, title: 'Büyülü Orman', subtitle: 'KISIM 2',
    bgGrad: ['#0A1C10', '#183D22'], bannerGrad: ['#132A13', '#31572C'],
    nodeColor: '#2D6A4F', activeNodeColor: '#52B788',
    decos: ['🍄', '🦊', '🦉', '🌸', '🦋', '🌿', '🐿️', '🪻'],
    cityBlocks: ['#52B78880', '#74C69D80', '#95D5B280'],
    icon: 'leaf',
    musicTrack: 'forest_theme'
  },
  {
    id: 3, title: 'Antik Çöl', subtitle: 'KISIM 3',
    bgGrad: ['#2C1A0B', '#5A3D22'], bannerGrad: ['#3A2411', '#724B2C'],
    nodeColor: '#D68C45', activeNodeColor: '#F4A261',
    decos: ['🐪', '🦂', '☀️', '🏺', '🌵', '🗿', '🐍', '🪙'],
    cityBlocks: ['#E76F5180', '#F4A26180', '#E9C46A80'],
    icon: 'sun',
    musicTrack: 'desert_theme'
  },
  {
    id: 4, title: 'Buzul Krallığı', subtitle: 'KISIM 4',
    bgGrad: ['#0D1B2A', '#1B263B'], bannerGrad: ['#14253A', '#293C5A'],
    nodeColor: '#457B9D', activeNodeColor: '#A8DADC',
    decos: ['🐧', '❄️', '🏔️', '🌨️', '🐻', '💎', '🦭', '🧊'],
    cityBlocks: ['#A8DADC80', '#457B9D80', '#1D355780'],
    icon: 'snowflake',
    musicTrack: 'frozen_theme'
  },
  {
    id: 5, title: 'Siber Şehir', subtitle: 'KISIM 5',
    bgGrad: ['#0B1022', '#141D32'], bannerGrad: ['#1A0A2E', '#2D1657'],
    nodeColor: '#8A2ECC', activeNodeColor: '#B84DFF',
    decos: ['🤖', '🚀', '💻', '⚡', '🛸', '🌐', '🎮', '👾'],
    cityBlocks: ['#3B82F680', '#8B5CF680', '#EC489980', '#6366F180', '#E040FB80'],
    icon: 'zap',
    musicTrack: 'cyber_theme'
  },
  {
    id: 6, title: 'Galaksi', subtitle: 'KISIM 6',
    bgGrad: ['#050117', '#120438'], bannerGrad: ['#0B0320', '#250B63'],
    nodeColor: '#5A189A', activeNodeColor: '#7B68EE',
    decos: ['🪐', '🌟', '☄️', '🛰️', '👽', '🌙', '🔭', '✨'],
    cityBlocks: ['#7B68EE80', '#9D4EDD80', '#C77DFF80'],
    icon: 'star',
    musicTrack: 'galaxy_theme'
  },
  {
    id: 7, title: 'Ejderha Krallığı', subtitle: 'KISIM 7',
    bgGrad: ['#1F0303', '#4A0808'], bannerGrad: ['#2E0606', '#690B0B'],
    nodeColor: '#9D0208', activeNodeColor: '#E63946',
    decos: ['🐉', '🏰', '⚔️', '🛡️', '👑', '🔥', '🦅', '💀'],
    cityBlocks: ['#E6394680', '#D6282880', '#9D020880'],
    icon: 'shield',
    musicTrack: 'dragon_theme'
  }
];

const CHECKPOINT_TYPES = [
  { type: 'Treasure', emoji: '🎁', title: 'Hazine Avı' },
  { type: 'Boss', emoji: '👹', title: 'Büyük Sınav' },
  { type: 'Story', emoji: '📜', title: 'Gizli Hikaye' }
];

const STREAK_EMOJIS = [
  '🕯️', // 1. gün: Küçük bir kıvılcım
  '🪔', // 2. gün: Yanan lamba
  '🧨', // 3. gün: Isınma (Çatapat)
  '💥', // 4. gün: Patlama
  '🎇', // 5. gün: Kıvılcımlar
  '🎆', // 6. gün: Havai Fişek
  '🔥', // 7. gün: Ateş (Alev Topu)
  '☄️', // 8. gün: Kuyruklu Yıldız
  '🚀', // 9. gün: Roket (Yükseliş)
  '☀️', // 10. gün: Güneş
  '🌟', // 11. gün: Parlayan Yıldız
  '⚡', // 12. gün: Şimşek
  '🌪️', // 13. gün: Kasırga
  '🌋', // 14. gün: Yanardağ
  '🌌', // 15. gün: Galaksi (Zirve)
];

const HomeScreen: React.FC<any> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { activeLanguage } = useLanguageStore();
  const { progress, claimUnitReward } = useProgressStore();

  const [courseData, setCourseData] = useState<LanguageCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [showFabs, setShowFabs] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  
  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const activeNodeRef = useRef<View>(null);
  const scrollYRef = useRef(0);

  // Animations
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const xpAnim = useRef(new Animated.Value(0)).current;
  const fabScale = useRef(new Animated.Value(1)).current;

  // Safe Progress Extraction
  const langProgress = progress?.languages?.[activeLanguage] || { totalXp: 0, dailyXp: 0, completedLessons: [], level: 1 };
  const completedLevels = langProgress.completedLessons || [];
  const totalXp = langProgress.totalXp || 0;
  const dailyXp = langProgress.dailyXp || 0;
  const userLevel = langProgress.level || Math.floor(totalXp / 100) + 1;
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

  const allNodes = useMemo(() => {
    if (!courseData) return [];
    return courseData.units.flatMap(u => u.levels);
  }, [courseData]);

  // Determine active node index
  const activeNodeIndex = Math.max(0, allNodes.findIndex(n => !completedLevels.includes(n.id)));
  
  // Calculate Active World
  const activeWorldIndex = Math.floor(activeNodeIndex / 10) % WORLDS.length;

  useEffect(() => {
    // Active Node Pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.15, duration: 1500, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1500, useNativeDriver: true })
      ])
    ).start();

    // Floating Decorations
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: 10, duration: 2500, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 2500, useNativeDriver: true })
      ])
    ).start();
    
    // Animate XP bar
    Animated.timing(xpAnim, {
      toValue: Math.min((dailyXp / DAILY_GOAL) * 100, 100),
      duration: 1000,
      useNativeDriver: false,
    }).start();

  }, [dailyXp, activeWorldIndex]);


  if (loading || !courseData) {
    return <HomeScreenSkeleton />;
  }

  const handleNodePress = (status: string, lessonId: string, title: string) => {
    if (status !== 'locked') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      navigation.navigate('Lesson' as never, { lessonId, title } as never);
    }
  };

  const scrollToTop = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.sequence([
      Animated.timing(fabScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.spring(fabScale, { toValue: 1, friction: 3, useNativeDriver: true })
    ]).start();
    
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const scrollToActiveNode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.sequence([
      Animated.timing(fabScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.spring(fabScale, { toValue: 1, friction: 3, useNativeDriver: true })
    ]).start();

    if (activeNodeRef.current && scrollViewRef.current) {
      activeNodeRef.current.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (left, top, width, height) => {
          const screenCenter = Dimensions.get('window').height / 2;
          const targetScrollY = Math.max(0, top - screenCenter + 100);
          scrollViewRef.current?.scrollTo({ y: targetScrollY, animated: true });
        },
        () => {}
      );
    }
  };

  const handleAIPractice = async () => {
    if (!hasMistakes) {
      Alert.alert("Harika Gidiyorsun! 🎉", "Şu an üzerinde çalışman gereken belirgin bir zayıf noktan yok. Konulara devam et!");
      return;
    }
    setIsGeneratingQuiz(true);
    const customQuestions = await AIService.generateWeaknessQuiz(userMistakes, activeLanguage);
    setIsGeneratingQuiz(false);
    setIsAIPanelOpen(false);
    
    if (customQuestions && customQuestions.length > 0) {
      // @ts-ignore
      navigation.navigate('Lesson', { 
        lessonId: 'ai_practice', 
        customQuestions,
        isAIPractice: true
      });
    } else {
      Alert.alert("Hata", "Ders oluşturulurken bir hata oluştu. Lütfen bağlantını kontrol et ve tekrar dene.");
    }
  };

  const renderTopDashboard = () => {
    let currentSum = 0;
    let activeUnitIndex = 0;
    for(let i=0; i<courseData.units.length; i++){
       currentSum += courseData.units[i].levels.length;
       if(activeNodeIndex < currentSum) {
          activeUnitIndex = i;
          break;
       }
    }

    return (
    <View style={[styles.dashboard, { paddingTop: insets.top + 10, paddingBottom: 10 }]}>
      <View style={styles.topBar}>
        <View style={styles.flagAvatarRow}>
          <TouchableOpacity onPress={() => setIsLangDropdownOpen(!isLangDropdownOpen)}>
            <Text style={{ fontSize: 28, marginLeft: 10 }}>🇬🇧</Text>
          </TouchableOpacity>
          <View style={{ marginLeft: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>{activeUnitIndex + 1}</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statPill}>
            <Text style={{ fontSize: 16 }}>
              {streak > 0 ? STREAK_EMOJIS[(streak - 1) % 15] : '🕯️'}
            </Text>
            <Text style={[styles.statValue, { color: BRAND.streak }]}>{streak}</Text>
          </View>
          <View style={styles.statPill}>
            <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
            <Text style={[styles.statValue, { color: BRAND.accent }]}>{progress?.gems || 0}</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={{ fontSize: 16 }}>❤️</Text>
            <Text style={[styles.statValue, { color: BRAND.danger }]}>{progress?.hearts || 0}</Text>
          </View>
        </View>
      </View>
    </View>
    );
  };

  const renderDailyGoal = () => (
    <View style={styles.challengeCard}>
      <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.2)']} style={styles.cardGradient} />
      <View style={styles.cardHeader}>
        <Text style={{ fontSize: 22 }}>🎯</Text>
        <Text style={styles.cardTitle}>Günlük Hedef</Text>
        <Text style={styles.cardReward}>+50 💎</Text>
      </View>
      <View style={styles.cardBarBg}>
        <View style={[styles.cardBarFill, { width: `${Math.min((dailyXp / DAILY_GOAL) * 100, 100)}%` }]} />
      </View>
      <Text style={styles.cardFooterText}>{DAILY_GOAL - dailyXp > 0 ? `${DAILY_GOAL - dailyXp} XP kaldı` : 'Hedef Tamamlandı!'}</Text>
    </View>
  );

  // ─── UNIT BANNER COLOR PALETTE (rotating per unit) ───
  const UNIT_COLORS = [
    { bannerGrad: ['#3B82F6', '#2563EB'], nodeActive: '#3B82F6', nodeShadow: '#2563EB' },
    { bannerGrad: ['#8B5CF6', '#7C3AED'], nodeActive: '#8B5CF6', nodeShadow: '#7C3AED' },
    { bannerGrad: ['#F59E0B', '#D97706'], nodeActive: '#F59E0B', nodeShadow: '#D97706' },
    { bannerGrad: ['#EF4444', '#DC2626'], nodeActive: '#EF4444', nodeShadow: '#DC2626' },
    { bannerGrad: ['#06B6D4', '#0891B2'], nodeActive: '#06B6D4', nodeShadow: '#0891B2' },
    { bannerGrad: ['#EC4899', '#DB2777'], nodeActive: '#EC4899', nodeShadow: '#DB2777' },
    { bannerGrad: ['#14B8A6', '#0D9488'], nodeActive: '#14B8A6', nodeShadow: '#0D9488' },
    { bannerGrad: ['#F97316', '#EA580C'], nodeActive: '#F97316', nodeShadow: '#EA580C' },
  ];

  const UNITS_PER_KISIM = 10;

  const renderWorldSections = () => {
    let runningNodeIndex = 0;
    const totalUnits = courseData.units.length;
    const kisimCount = Math.ceil(totalUnits / UNITS_PER_KISIM);
    const sections: React.ReactNode[] = [];

    for (let kisimIdx = 0; kisimIdx < kisimCount; kisimIdx++) {
      const kisimStart = kisimIdx * UNITS_PER_KISIM;
      const kisimEnd = Math.min(kisimStart + UNITS_PER_KISIM, totalUnits);
      const kisimUnits = courseData.units.slice(kisimStart, kisimEnd);
      const unitElements: React.ReactNode[] = [];

      for (let uIdx = 0; uIdx < kisimUnits.length; uIdx++) {
        const unit = kisimUnits[uIdx];
        const globalUnitIndex = kisimStart + uIdx;
        const unitColor = UNIT_COLORS[globalUnitIndex % UNIT_COLORS.length];

        let forcedLevels = unit.levels.slice(0, 6);
        while (forcedLevels.length < 6) {
          forcedLevels.push({ id: `mock-${unit.id}-${forcedLevels.length}`, name: 'Ders', icon: 'star', type: 'lesson' as const });
        }

        const startIndex = runningNodeIndex;
        runningNodeIndex += forcedLevels.length;
        const isCurrentUnit = activeNodeIndex >= startIndex && activeNodeIndex < runningNodeIndex;
        const isUnitCompleted = activeNodeIndex >= runningNodeIndex;

        unitElements.push(
          <View key={unit.id}>
            {/* ÜNİTE BANNER */}
            <View style={styles.bannerContainer}>
              <LinearGradient colors={unitColor.bannerGrad} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bannerGradient}>
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerSubtitle}>{(kisimIdx + 1) + '. KISIM, ' + (uIdx + 1) + '. ÜNİTE'}</Text>
                  <Text style={styles.bannerTitle}>{unit.description}</Text>
                  <View style={styles.bannerProgressBg}>
                    <View style={[styles.bannerProgressFill, { width: isCurrentUnit ? '45%' : (isUnitCompleted ? '100%' : '0%'), backgroundColor: '#FFF' }]} />
                  </View>
                </View>
                <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                  <FontAwesome5 name="list" size={18} color="#FFF" />
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* WINDING PATH */}
            <View style={styles.pathContainer}>
              {forcedLevels.map((node, i) => {
                const globalIndex = startIndex + i;
                const isCompleted = completedLevels.includes(node.id);
                const isActive = globalIndex === activeNodeIndex;
                const isLocked = globalIndex > activeNodeIndex;

                let nodeContent;
                let nodeColor = '#3A4651';
                let shadowColor = '#1F2937';
                let progressValue = 0;

                const steps = [
                  { name: 'Etap 1', icon: 'layer-group' },
                  { name: 'Etap 2', icon: 'layer-group' },
                  { name: 'Etap 3', icon: 'layer-group' },
                  { name: 'AI Challenge', icon: 'robot' },
                  { name: 'Ünite Finali', icon: 'trophy' },
                  { name: 'Ünite Ödülü', icon: 'gift' }
                ];
                const currentStep = steps[i % steps.length];
                const iconName = currentStep.icon;
                const displayName = currentStep.name;
                const isFinalNode = (i % steps.length === 5);
                const isAINode = (i % steps.length === 3);
                const isFinaleNode = (i % steps.length === 4);

                if (isFinalNode) {
                  nodeColor = '#FFC800';
                  shadowColor = '#D29C00';
                  nodeContent = <FontAwesome5 name="trophy" size={28} color="#FFF" />;
                } else if (isCompleted) {
                  nodeColor = unitColor.nodeActive;
                  shadowColor = unitColor.nodeShadow;
                  progressValue = 4;
                  nodeContent = <FontAwesome5 name={isAINode ? 'robot' : isFinaleNode ? 'trophy' : 'check'} size={28} color="#FFF" />;
                } else if (isActive) {
                  nodeColor = unitColor.nodeActive;
                  shadowColor = unitColor.nodeShadow;
                  progressValue = 2;
                  nodeContent = <FontAwesome5 name={iconName} size={28} color="#FFF" />;
                } else {
                  nodeContent = <FontAwesome5 name={iconName} size={28} color="#3A4651" />;
                }

                // Kusursuz bir oval (Sinüs dalgası) görünümü için 6 adımlık tam tur. 
                // Etap 1 en solda başlıyor.
                const ZIGZAG = [-120, -60, 30, 100, 30, -60];
                const zigOffset = ZIGZAG[i % ZIGZAG.length];

                        const computedLessonId = `eng_u${globalUnitIndex + 1}_l${i + 1}`;
                        
                        return (
                          <View 
                            key={node.id} 
                            ref={isActive ? activeNodeRef : null}
                            style={{ alignItems: 'center', marginVertical: isActive ? -10 : -16, transform: [{ translateX: zigOffset }] }}
                          >
                            <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                              <HexagonNode
                                size={80}
                                color={nodeColor}
                                shadowColor={shadowColor}
                                isLocked={isLocked}
                                progress={progressValue}
                                isActive={isActive}
                                onPress={() => handleNodePress(isLocked ? 'locked' : isActive ? 'active' : 'completed', computedLessonId, displayName)}
                              >
                                {nodeContent}
                              </HexagonNode>
                              {isActive && (
                                <TouchableOpacity
                                  style={{ position: 'absolute', top: -45, zIndex: 10, backgroundColor: '#FFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, borderWidth: 2, borderColor: '#E5E5E5' }}
                                  onPress={() => handleNodePress('active', computedLessonId, displayName)}
                                >
                                  <Text style={{ fontWeight: 'bold', color: unitColor.nodeActive, fontSize: 13 }}>BAŞLAT</Text>
                                  <View style={{ position: 'absolute', bottom: -6, left: '50%', marginLeft: -6, width: 10, height: 10, backgroundColor: '#FFF', transform: [{ rotate: '45deg' }], borderBottomWidth: 2, borderRightWidth: 2, borderColor: '#E5E5E5' }} />
                                </TouchableOpacity>
                              )}
                            </View>
                    {!isFinalNode && (
                      <View style={styles.nodeLabelBox}>
                        <Text style={[styles.nodeLabel, isLocked && { color: BRAND.textMuted }]}>{displayName}</Text>
                      </View>
                    )}
                    {i < forcedLevels.length - 1 && (
                      <View style={{ width: 4, height: 4, backgroundColor: isCompleted ? unitColor.nodeActive : '#1E2D4A', marginVertical: 0, borderRadius: 2 }} />
                    )}
                  </View>
                );
              })}
            </View>

            {/* Hediye Kutusu Ödülü (Ayrı Buton) */}
            <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 50 }}>
              <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => {
                  const isUnitCompleted = activeNodeIndex > (globalUnitIndex * 6 + 5);
                  if (!isUnitCompleted) {
                    Alert.alert("Henüz kilitli!", "Bu ödülü almak için önce ünitedeki tüm dersleri tamamlamalısın.");
                    return;
                  }
                  
                  const rewardId = `eng_u${globalUnitIndex + 1}_reward`;
                  const isRewardClaimed = progress.languages[activeLanguage]?.completedLessons?.includes(rewardId);
                  
                  if (!isRewardClaimed) {
                    claimUnitReward(globalUnitIndex, activeLanguage);
                    Alert.alert("Tebrikler! 🎉", "100 Lingo Mücevheri kazandın! 💎");
                  } else {
                    Alert.alert("Zaten alındı", "Bu ünitenin ödülünü daha önce aldın.");
                  }
                }}
                style={{
                  width: 80, height: 80,
                  alignItems: 'center', justifyContent: 'center',
                  opacity: activeNodeIndex > (globalUnitIndex * 6 + 5) ? (progress.languages[activeLanguage]?.completedLessons?.includes(`eng_u${globalUnitIndex + 1}_reward`) ? 0.6 : 1) : 0.4
                }}
              >
                <Text style={{ fontSize: 56 }}>{progress.languages[activeLanguage]?.completedLessons?.includes(`eng_u${globalUnitIndex + 1}_reward`) ? '📦' : '🎁'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }

      const kisimAllCompleted = activeNodeIndex >= runningNodeIndex;
      const isNextKisim = kisimIdx < kisimCount - 1;

      sections.push(
        <View key={`kisim-${kisimIdx}`} style={styles.worldSection}>
          {unitElements}
          {isNextKisim && (
            <View style={{ alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20 }}>
              <View style={{ backgroundColor: '#141D32', borderRadius: 20, padding: 28, alignItems: 'center', width: '90%', borderWidth: 1, borderColor: '#1E2D4A' }}>
                <View style={{ backgroundColor: 'rgba(59,130,246,0.15)', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20, marginBottom: 12 }}>
                  <Text style={{ color: '#94A3B8', fontSize: 12, fontWeight: '700', letterSpacing: 1 }}>SIRADAKİ</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                  <FontAwesome5 name="lock" size={18} color="#5A6A88" style={{ marginRight: 8 }} />
                  <Text style={{ color: '#FFF', fontSize: 22, fontWeight: '800' }}>{(kisimIdx + 2) + '. Kısım'}</Text>
                </View>
                <Text style={{ color: '#94A3B8', fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 16 }}>
                  Daha ileri seviye kelime, ifade ve{'\n'}dil bilgisi konseptlerini öğren
                </Text>
                <TouchableOpacity style={{ backgroundColor: kisimAllCompleted ? '#3B82F6' : '#1E2D4A', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 12 }}>
                  <Text style={{ color: kisimAllCompleted ? '#FFF' : '#5A6A88', fontWeight: '800', fontSize: 14 }}>BURAYA ATLA!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      );
    }

    return sections;
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BRAND.bg} translucent={false} />

      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          scrollYRef.current = y;
          if (y > 300 && !showFabs) setShowFabs(true);
          else if (y <= 300 && showFabs) setShowFabs(false);
        }}
        scrollEventThrottle={16}
      >
        {/* ─── SCROLLING DASHBOARD ─── */}
        {renderTopDashboard()}

        {/* ─── WORLD MAP SECTIONS ─── */}
        {renderWorldSections()}
        
      </ScrollView>

      {/* Language Dropdown Overlay */}
      {isLangDropdownOpen && (
        <TouchableOpacity style={{ position: 'absolute', top: 110, left: 16, backgroundColor: BRAND.card, padding: 15, borderRadius: 12, zIndex: 999, borderWidth: 1, borderColor: BRAND.border, width: 150 }} onPress={() => setIsLangDropdownOpen(false)}>
           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
             <Text style={{ fontSize: 20, marginRight: 10 }}>🇬🇧</Text>
             <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>English</Text>
           </View>
           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             <Text style={{ fontSize: 20, marginRight: 10 }}>🇹🇷</Text>
             <Text style={{ color: '#94A3B8', fontSize: 16 }}>Türkçe</Text>
           </View>
        </TouchableOpacity>
      )}

      {/* ─── FLOATING ACTION BUTTONS (JUMP TO TOP / JUMP TO ACTIVE) ─── */}
      <View style={styles.navigationFabContainer}>
        {showFabs && (
          <>
            <Animated.View style={{ transform: [{ scale: fabScale }] }}>
              <TouchableOpacity style={styles.navFabButton} onPress={scrollToTop}>
                <FontAwesome5 name="arrow-up" size={18} color="#FFF" />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ scale: fabScale }] }}>
              <TouchableOpacity style={[styles.navFabButton, { backgroundColor: '#1E2D4A', borderWidth: 2, borderColor: '#3B82F6', padding: 0 }]} onPress={scrollToActiveNode}>
                <LottieView
                  source={require('../../assets/mascots/bulunanders.json')}
                  autoPlay
                  loop
                  style={{ width: 50, height: 50 }}
                />
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
      </View>

      {/* ─── FLOATING AI CRYSTAL BUTTON ─── */}
      <View style={[styles.floatingMascotContainer, { right: 20, bottom: 30 }]}>
        <TouchableOpacity 
          style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setIsAIPanelOpen(true)}
        >
          {/* Hexagon/Crystal Base */}
          <View style={{ position: 'absolute', width: 70, height: 70, backgroundColor: 'rgba(45, 212, 191, 0.2)', borderRadius: 35, borderWidth: 2, borderColor: '#2DD4BF', transform: [{ rotate: '45deg' }] }} />
          {/* Inner Mascot */}
          <Mascot mascotId="classic" size={50} animationState="action" />
        </TouchableOpacity>
      </View>

      {/* AI ANALYSIS MODAL (Placeholder inside HomeScreen for now) */}
      {isAIPanelOpen && (
        <View style={[StyleSheet.absoluteFill, { zIndex: 1000 }]}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} onPress={() => setIsAIPanelOpen(false)} />
          <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', backgroundColor: '#0F172A', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25, borderWidth: 1, borderColor: '#1E293B' }}>
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
               <Mascot mascotId="classic" size={60} animationState="happy" />
               <View style={{ marginLeft: 15 }}>
                 <Text style={{ color: '#FFF', fontSize: 22, fontWeight: 'bold' }}>AI Koç Analizi</Text>
                 <Text style={{ color: '#2DD4BF', fontSize: 14 }}>Genel Başarı: %85</Text>
               </View>
             </View>
             <ScrollView>
               <View style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 15, marginBottom: 10 }}>
                 <Text style={{ color: '#FFF', fontWeight: 'bold', marginBottom: 5 }}>Zayıf Yönlerin</Text>
                 <Text style={{ color: '#94A3B8' }}>
                   {hasMistakes 
                     ? `Şu an ${mistakeKeys.length} farklı kelime veya konuda hatan görünüyor. Özelleştirilmiş bir ders ile bunları hemen telafi edebiliriz.`
                     : `Şu an harika gidiyorsun, kayıtlı hiçbir hatan yok!`
                   }
                 </Text>
               </View>
               <View style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 15, marginBottom: 10 }}>
                 <Text style={{ color: '#FFF', fontWeight: 'bold', marginBottom: 5 }}>Güçlü Yönlerin</Text>
                 <Text style={{ color: '#94A3B8' }}>Genel olarak çözdüğün derslerde çok istikrarlısın. Aynen böyle devam et!</Text>
               </View>
               
               <TouchableOpacity 
                 style={{ backgroundColor: hasMistakes ? '#3B82F6' : '#1E293B', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 20, opacity: isGeneratingQuiz ? 0.7 : 1 }} 
                 onPress={handleAIPractice}
                 disabled={isGeneratingQuiz}
               >
                 {isGeneratingQuiz ? (
                   <ActivityIndicator color="#FFF" />
                 ) : (
                   <Text style={{ color: hasMistakes ? '#FFF' : '#64748B', fontWeight: 'bold', fontSize: 16 }}>
                     {hasMistakes ? 'Zayıf Yönlerimi Çalış' : 'Zayıf Yön Bulunamadı'}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BRAND.bg,
  },
  navigationFabContainer: {
    position: 'absolute',
    right: 20,
    bottom: 130, // Just above the AI Mascot
    gap: 12,
    alignItems: 'center',
    zIndex: 99,
  },
  navFabButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND.card,
    borderWidth: 2,
    borderColor: BRAND.border,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  dashboard: {
    backgroundColor: BRAND.bg,
    paddingHorizontal: 16,
    paddingBottom: 16,
    zIndex: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flagAvatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: BRAND.secondary,
    overflow: 'hidden',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  statValue: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  notifBadge: {
    position: 'absolute',
    top: 4,
    right: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: BRAND.danger,
    borderWidth: 2,
    borderColor: BRAND.card,
  },
  xpSection: {
    gap: 10,
  },
  xpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  levelTitle: {
    color: BRAND.text,
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  levelSubtitle: {
    color: BRAND.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  xpBarBg: {
    height: 8,
    backgroundColor: BRAND.card,
    borderRadius: 4,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  scrollContent: {
    paddingBottom: 100,
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
    padding: 16,
    paddingVertical: 12,
    minHeight: 80,
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
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeInner: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
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
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeLabel: {
    color: BRAND.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
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
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  floatingMascotContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  decoEmoji: {
    position: 'absolute',
    fontSize: 28,
    opacity: 0.4,
  },
  bgParticle: {
    position: 'absolute',
    zIndex: 1,
  }
});

export default HomeScreen;
