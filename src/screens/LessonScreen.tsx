import { Mascot } from '../components/Mascot';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Modal, Alert } from 'react-native';
import { LessonScreenSkeleton } from '../components/SkeletonLoader';
import ConfettiCannon from 'react-native-confetti-cannon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TTSAudioService } from '../services/AudioService';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { lessonsByLanguage, Question, LessonContent } from '../data/lessonContent';
import SoundManager from '../utils/SoundManager';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

const { width } = Dimensions.get('window');

// ── Mascot Speech Bubble Component ──
const MascotBubble: React.FC<{ message: string; colors: any }> = ({ message, colors }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [message]);

  return (
    <Animated.View style={[styles.mascotContainer, { transform: [{ scale: scaleAnim }] }]}>
      <Mascot size={60} style={{ marginRight: 10 }} />
      <View style={[styles.speechBubble, { backgroundColor: colors.surface }]}>
        <Text style={[styles.speechText, { color: colors.text }]}>{message}</Text>
        <View style={[styles.speechTail, { borderTopColor: colors.surface }]} />
      </View>
    </Animated.View>
  );
};

// ── Combo Badge Component ──
const ComboBadge: React.FC<{ combo: number; colors: any }> = ({ combo, colors }) => {
  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (combo > 1) {
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: 1.4, duration: 150, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: 1, friction: 3, useNativeDriver: true }),
      ]).start();
    }
  }, [combo]);

  if (combo < 2) return null;

  const comboColor = combo >= 4 ? '#FF9600' : combo >= 3 ? '#FFC800' : colors.primary;

  return (
    <Animated.View style={[styles.comboBadge, { transform: [{ scale: bounceAnim }] }]}>
      <Text style={[styles.comboText, { color: comboColor }]}>KOMBO x{combo} 🔥</Text>
    </Animated.View>
  );
};

// ── Achievement Popup ──
const AchievementPopup: React.FC<{ title: string; visible: boolean; onDismiss: () => void; onPressOverlay: () => void }> = ({ title, visible, onDismiss, onPressOverlay }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 30, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();

      timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(scaleAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
          Animated.timing(opacityAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        ]).start(() => onDismiss());
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.achievementOverlay, { opacity: opacityAnim }]}>
      <TouchableOpacity 
        activeOpacity={1} 
        style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }} 
        onPress={() => { onDismiss(); onPressOverlay(); }}
      >
        <Animated.View style={[styles.achievementContent, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.achievementEmoji}>🏆</Text>
          <Text style={styles.achievementTitle}>{title}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};


const LessonScreen: React.FC<Props> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const { progress, addXp, completeLesson, loseHeart, gainHeart, refillHearts, trackMistake } = useProgressStore();

  const lessonId = (route.params as any)?.lessonId;

  const getMistakeCategory = (question: Question): string => {
    switch (question.type) {
      case 'listen':
        return 'listening';
      case 'constructSentence':
        return 'writing';
      case 'fillBlank':
      case 'translate':
        return 'grammar';
      case 'flashcard':
      case 'multipleChoice':
      case 'imageChoice':
        return 'vocabulary';
      default:
        return 'vocabulary';
    }
  };
  const fromOnboarding = (route.params as any)?.fromOnboarding;
  const isPlacementTest = (route.params as any)?.isPlacementTest;
  
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [allLessons, setAllLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Import ContentService dynamically to avoid circular deps if any
  const { ContentService } = require('../services/ContentService');

  useEffect(() => {
    let mounted = true;
    const loadContent = async () => {
      setLoading(true);
      if (isPlacementTest) {
        const lessons = await ContentService.getAllLessonsData(activeLanguage);
        if (mounted) {
          setAllLessons(lessons);
          setCurrentLesson({
            id: 'placement',
            title: 'Seviye Belirleme',
            description: 'Seviyeni ölçüyoruz',
            icon: '🧭',
            xpReward: 0,
            questions: lessons.map((l: LessonContent) => l.questions[Math.floor(Math.random() * l.questions.length)]).filter(Boolean).sort(() => Math.random() - 0.5).slice(0, 30),
          });
          setLoading(false);
        }
      } else {
        // Fallback array just to find the index (if needed)
        const lessons = await ContentService.getAllLessonsData(activeLanguage);
        const lessonObj = lessonId ? await ContentService.getLessonData(lessonId, activeLanguage) : lessons[0];
        if (mounted) {
          setAllLessons(lessons);
          setCurrentLesson(lessonObj || lessons[0]);
          setLoading(false);
        }
      }
    };
    loadContent();
    return () => { mounted = false; };
  }, [lessonId, isPlacementTest, activeLanguage]);
    
  const currentLessonIndex = !isPlacementTest && currentLesson ? allLessons.findIndex(l => l.id === currentLesson.id) : -1;
  
  const langProgress = progress.languages?.[activeLanguage] || { totalXp: 0, level: 1, completedLessons: [] };
  
  const isLocked = !isPlacementTest && currentLessonIndex > 0 && 
                   !langProgress.completedLessons.includes(currentLesson?.id || '') && 
                   !langProgress.completedLessons.includes(allLessons[currentLessonIndex - 1]?.id || '');

  const questions = currentLesson?.questions || [];
  const totalQuestions = questions.length;
  // Seviye belirleme testi için doğru cevap sayacı
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hearts, setHearts] = useState(progress.hearts);
  const [earnedXp, setEarnedXp] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [progressAnim] = useState(new Animated.Value(0));
  const [shakeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [showHeartModal, setShowHeartModal] = useState(false);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [initialLevel] = useState(langProgress.level);
  
  // New features
  const [showFirstSentence, setShowFirstSentence] = useState(false);
  const [firstSentenceDone, setFirstSentenceDone] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // ── NEW: Combo & Achievement state ──
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState('');
  const [showMascot, setShowMascot] = useState(false);
  const [mascotMessage, setMascotMessage] = useState('');
  
  // ── NEW: constructSentence state ──
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isSentenceHintRevealed, setIsSentenceHintRevealed] = useState(false);
  const [retriesLeft, setRetriesLeft] = useState(1);

  const currentQuestion: Question | undefined = questions[currentIndex];
  const progressValue = totalQuestions > 0 ? (currentIndex / totalQuestions) : 0;

  // Initialize SoundManager
  useEffect(() => {
    SoundManager.init();
    return () => {
      SoundManager.unload();
    };
  }, []);



  // Show mascot at lesson start
  useEffect(() => {
    if (currentIndex === 0 && !isChecked) {
      setShowMascot(true);
      setMascotMessage('Hadi başlayalım! Hazır mısın? 💪');
      const timer = setTimeout(() => setShowMascot(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progressValue,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  // Reset selectedWords when question changes
  useEffect(() => {
    setSelectedWords([]);
    setIsSentenceHintRevealed(false);
    setRetriesLeft(1);
    
    // Auto-play audio for flashcards when they appear
    if (currentQuestion?.type === 'flashcard' && currentQuestion?.audioText) {
      // Small delay to ensure view is ready and not jarring
      const timer = setTimeout(() => {
        playSound(currentQuestion.audioText!, currentQuestion.audioLang || 'tr');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentQuestion]);

  const playSound = async (text: string, lang: string = 'tr') => {
    // Stop any currently playing speech
    await TTSAudioService.stop();
    // Use our new caching AI TTS service
    await TTSAudioService.play(text, lang);
  };


  const triggerAchievement = (text: string) => {
    setAchievementText(text);
    setShowAchievement(true);
  };

  const handleCheck = (instantIndex?: number) => {
    if (!currentQuestion) return;

    // For instant tap: resolve which index to check against
    const resolvedIndex = instantIndex ?? selectedIndex;
    
    if (currentQuestion.type === 'constructSentence') {
      if (selectedWords.length === 0) return;
    } else if (currentQuestion.type === 'flashcard') {
      // no validation needed for flashcard
    } else {
      if (resolvedIndex === null || resolvedIndex === undefined) return;
    }

    let correct = false;
    if (currentQuestion.type === 'constructSentence') {
      correct = selectedWords.join(' ') === (currentQuestion.correctAnswer || []).join(' ');
    } else if (currentQuestion.type === 'flashcard') {
      correct = true;
    } else {
      correct = resolvedIndex === currentQuestion.correctIndex;
    }

    // Sync selectedIndex state so the UI highlights correctly on instant tap
    if (instantIndex !== undefined) {
      setSelectedIndex(instantIndex);
    }
    
    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
      setIsCorrect(true);
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.1, duration: 150, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
      ]).start();
      
      if (!isPlacementTest) {
        setEarnedXp(prev => prev + Math.floor(currentLesson.xpReward / totalQuestions));
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      SoundManager.playCorrect();

      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      
      // Combo bonus XP (sadece normal derslerde)
      const comboBonus = newCombo >= 4 ? 6 : newCombo >= 3 ? 4 : newCombo >= 2 ? 3 : 3;
      if (!isPlacementTest) {
        setEarnedXp(prev => prev + comboBonus);
        
        // 4 Doğru seri yapınca +1 Can!
        if (newCombo > 0 && newCombo % 4 === 0) {
          gainHeart();
          setHearts(prev => Math.min(20, prev + 1));
          // Gösterişli bildirim veya Mascot pop-up yapabiliriz ama şimdilik alert/toast yerine triggerAchievement kullanabiliriz:
          triggerAchievement("4 Doğru Seri! +1 Can ❤️");
        }
      }

      // Play correct answer audio
      if (currentQuestion.audioText) {
        playSound(currentQuestion.audioText, currentQuestion.audioLang);
      }

      // Achievements
      if (currentQuestion.type === 'constructSentence' && !firstSentenceDone) {
        setFirstSentenceDone(true);
        setShowFirstSentence(true);
        setTimeout(() => setShowFirstSentence(false), 3000);
      }
      if (newCombo === 3) {
        triggerAchievement('KOMBO USTASI! 🔥');
      }
      if (newCombo === 5) {
        triggerAchievement('DURDURULAMAZ! ⚡');
      }
    } else {
      if (currentQuestion.type === 'constructSentence' && retriesLeft > 0) {
        setRetriesLeft(0);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        SoundManager.playWrong();
        triggerAchievement('Neredeyse! Bir hakkın daha var 🔄');
        Animated.sequence([
          Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true })
        ]).start();
        return; // Let user retry without moving to error screen
      }

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      SoundManager.playWrong();
      
      setCombo(0); // Reset combo on wrong answer

      // Hata takibi (Arjin'in Raporu için)
      // Eğitsel olarak yanlış yapılan sorunun tipine veya anahtar kelimesine göre takip edilebilir
      // Şimdilik sorunun prompt'unu veya correctAnswer'ı track ediyoruz
      const mistakeKey = currentQuestion.type === 'translate' ? currentQuestion.prompt : 
                         currentQuestion.type === 'multipleChoice' ? currentQuestion.options[currentQuestion.correctIndex] : 
                         currentQuestion.prompt;
      trackMistake(mistakeKey, getMistakeCategory(currentQuestion), activeLanguage);
      
      if (!isPlacementTest && !progress.isPremium) {
        const newHearts = hearts - 1;
        setHearts(newHearts);
        loseHeart();
      }

      // Shake animation for wrong answer
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();

      // Show mascot encouragement on wrong answer
      setShowMascot(true);
      setMascotMessage('Sorun değil, tekrar dene! 😊');
      setTimeout(() => setShowMascot(false), 2500);

      if (!isPlacementTest && hearts <= 0) {
        setShowHeartModal(true);
        return;
      }
    }
    setIsChecked(true);
  };

  const handleContinue = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < totalQuestions) {
      setCurrentIndex(nextIndex);
      setSelectedIndex(null);
      setSelectedWords([]);
      setIsChecked(false);
      
      Animated.timing(progressAnim, {
        toValue: nextIndex / totalQuestions,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // Ders bitti (veya yerleştirme testi bitti)
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setLessonComplete(true);
      // Play lesson complete sound if available
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      if (isPlacementTest) {
        // Seviye belirleme mantığı: doğru cevap sayısına göre ders aç
        // correctAnswersCount henüz son sorunun sonucunu içermiyor olabilir
        // bu yüzden burada güncel değeri kullanıyoruz
        const finalCorrect = correctAnswersCount;
        if (finalCorrect > 0) {
          for (let i = 0; i < finalCorrect && i < allLessons.length; i++) {
            completeLesson(allLessons[i].id, 0, activeLanguage);
          }
        }
      } else {
        const bonusXp = hearts === 5 ? 5 : 0;
        const isNewCompletion = !langProgress.completedLessons.includes(currentLesson.id);
        
        if (isNewCompletion) {
          completeLesson(currentLesson.id, earnedXp + bonusXp, activeLanguage);
          SoundManager.playComplete();
        } else {
          addXp(earnedXp + bonusXp, activeLanguage);
        }
      }
    }
  };

  if (loading || !currentLesson) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <LessonScreenSkeleton />
      </SafeAreaView>
    );
  }

  if (!currentQuestion && !lessonComplete) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.emptyState}>
          <Text style={{ color: colors.text, fontSize: 18 }}>Bu ders henüz hazır değil.</Text>
          <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs')} style={[styles.backButton, { backgroundColor: colors.primary }]}>
            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>GERİ DÖN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Locked State ──
  if (isLocked) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.emptyState}>
          <Text style={{ fontSize: 60, marginBottom: 20 }}>🔒</Text>
          <Text style={{ color: colors.text, fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 15 }}>Ders Kilitli</Text>
          <Text style={{ color: colors.textLight, fontSize: 16, textAlign: 'center', paddingHorizontal: 40, lineHeight: 24 }}>
            Bu derse girebilmek için önce önceki dersleri tamamlamalısın.
          </Text>
          <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs')} style={[styles.backButton, { backgroundColor: colors.primary, marginTop: 30 }]}>
            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>GERİ DÖN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Placement Test veya Ders sonuç bilgileri ──
  const placementPct = totalQuestions > 0 ? Math.round((correctAnswersCount / totalQuestions) * 100) : 0;
  const placementLevel = correctAnswersCount <= 2 ? 'Başlangıç' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.4) ? 'Temel' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.7) ? 'Orta' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.9) ? 'İleri' 
    : 'Uzman';
  const placementEmoji = correctAnswersCount <= 2 ? '🌱' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.4) ? '📗' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.7) ? '📘' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.9) ? '🚀' 
    : '👑';
  const placementColor = correctAnswersCount <= 2 ? '#58CC02' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.4) ? '#00B4D8' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.7) ? '#7B61FF' 
    : correctAnswersCount <= Math.floor(totalQuestions * 0.9) ? '#FF6B6B' 
    : '#FFC800';
  const placementMessage = correctAnswersCount === 0 
    ? 'Endişelenme! Temellerden başlayarak harika bir yolculuk seni bekliyor. 🌟'
    : correctAnswersCount <= 2 
    ? 'İyi başlangıç! İlk derslerden başlayarak hızla ilerlemeye hazır ol. 💪'
    : correctAnswersCount <= Math.floor(totalQuestions * 0.4) 
    ? 'Temel bilgilerin sağlam! Sana uygun seviyeden devam ediyoruz. 📚'
    : correctAnswersCount <= Math.floor(totalQuestions * 0.7) 
    ? 'Etkileyici! Orta seviye derslerle hemen devam edebilirsin. 🔥'
    : correctAnswersCount <= Math.floor(totalQuestions * 0.9) 
    ? 'Çok iyi! İleri seviye içerikler seni bekliyor. 🚀'
    : 'Muhteşem! Neredeyse tüm soruları bildin. Uzmansın! 👑';

  // ── Lesson Complete Screen ──
  if (lessonComplete) {
    // ── Seviye Belirleme Sonucu ──
    if (isPlacementTest) {
      return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
          <ConfettiCannon count={100} origin={{ x: width / 2, y: 0 }} fallSpeed={2500} fadeOut />
          <View style={styles.completeContainer}>
            {/* Mascot */}
            <MascotBubble message={placementMessage} colors={colors} />

            <Text style={[styles.completeTitle, { color: colors.text }]}>Seviye Belirleme Tamamlandı!</Text>

            {/* Büyük seviye göstergesi */}
            <View style={[styles.rewardCard, { 
              backgroundColor: placementColor + '15', 
              borderColor: placementColor, 
              borderWidth: 2, 
              borderBottomWidth: 5,
              paddingVertical: 24, 
              paddingHorizontal: 32,
              alignSelf: 'center',
              marginBottom: 20,
              width: 'auto',
              minWidth: 250,
            }]}>
              <Text style={{ fontSize: 48 }}>{placementEmoji}</Text>
              <Text style={[styles.rewardValue, { color: placementColor, fontSize: 28 }]}>{placementLevel}</Text>
              <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Belirlenen Seviye</Text>
            </View>

            {/* İstatistik kartları */}
            <View style={styles.rewardContainer}>
              <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Text style={styles.rewardEmoji}>✅</Text>
                <Text style={[styles.rewardValue, { color: colors.primary }]}>{correctAnswersCount}/{totalQuestions}</Text>
                <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Doğru Cevap</Text>
              </View>
              <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Text style={styles.rewardEmoji}>📊</Text>
                <Text style={[styles.rewardValue, { color: placementColor }]}>%{placementPct}</Text>
                <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Başarı Oranı</Text>
              </View>
              <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Text style={styles.rewardEmoji}>🔓</Text>
                <Text style={[styles.rewardValue, { color: '#58CC02' }]}>{Math.min(correctAnswersCount, allLessons.length)}</Text>
                <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Açılan Ders</Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.continueBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]}
              onPress={() => {
                if (fromOnboarding) {
                  navigation.replace('Age');
                } else {
                  navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs');
                }
              }}
            >
              <Text style={styles.continueBtnText}>DEVAM ET</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    // ── Normal Ders Tamamlanma Ekranı ──
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ConfettiCannon count={150} origin={{ x: width / 2, y: 0 }} fallSpeed={2500} fadeOut />
        
        {/* Level Up Modal */}
        <Modal visible={showLevelUpModal} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
              <Text style={styles.modalEmoji}>⭐</Text>
              <Text style={[styles.modalTitle, { color: colors.text }]}>Seviye Atladın!</Text>
              <Text style={[styles.modalText, { color: colors.primary, fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }]}>
                Seviye {Math.floor((langProgress.totalXp + earnedXp + (currentLesson?.xpReward || 10)) / 100) + 1}
              </Text>
              <TouchableOpacity
                style={[styles.modalBtn, { backgroundColor: colors.primary }]}
                onPress={() => setShowLevelUpModal(false)}
              >
                <Text style={styles.modalBtnText}>Harika!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.completeContainer}>
          <MascotBubble message="Tebrikler! Harika iş çıkardın! 🎉" colors={colors} />
          <Text style={[styles.completeTitle, { color: colors.text }]}>Ders Tamamlandı!</Text>

          <View style={styles.rewardContainer}>
            <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.rewardEmoji}>🎯</Text>
              <Text style={[styles.rewardValue, { color: colors.primary }]}>
                {`${totalQuestions > 0 ? Math.round((correctAnswersCount / totalQuestions) * 100) : 0}%`}
              </Text>
              <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Doğruluk</Text>
            </View>
            <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.rewardEmoji}>🔥</Text>
              <Text style={[styles.rewardValue, { color: '#FF9600' }]}>x{maxCombo}</Text>
              <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Maks Kombo</Text>
            </View>
            <View style={[styles.rewardCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={styles.rewardEmoji}>❤️</Text>
              <Text style={[styles.rewardValue, { color: colors.error }]}>{hearts}</Text>
              <Text style={[styles.rewardLabel, { color: colors.textLight }]}>Kalan Can</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.continueBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]}
            onPress={() => {
              if (fromOnboarding) {
                (navigation as any).replace('Age');
              } else {
                navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs');
              }
            }}
          >
            <Text style={styles.continueBtnText}>DEVAM ET</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Main Quiz UI ──
  if (!currentQuestion) return null;
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Achievement Popup */}
      <AchievementPopup 
        title={achievementText} 
        visible={showAchievement} 
        onDismiss={() => setShowAchievement(false)} 
        onPressOverlay={handleContinue}
      />

      {/* Header with Combo */}
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <TouchableOpacity 
          style={styles.closeArea} 
          onPress={() => {
            if (isPlacementTest) {
              navigation.canGoBack() ? navigation.goBack() : navigation.navigate(fromOnboarding ? 'Onboarding' as never : 'MainTabs' as never);
            } else {
              Alert.alert(
                'Dersi Bitir?',
                'İlerlemen kaydedilmeyecek. Çıkmak istediğine emin misin?',
                [
                  { text: 'İptal', style: 'cancel' },
                  { text: 'Çık', style: 'destructive', onPress: () => navigation.canGoBack() ? navigation.goBack() : navigation.navigate(fromOnboarding ? 'Onboarding' as never : 'MainTabs' as never) }
                ]
              );
            }
          }}
        >
          <Text style={[styles.closeBtn, { color: colors.textLight }]}>{isPlacementTest ? '←' : '✖'}</Text>
        </TouchableOpacity>
        <View style={styles.progressCol}>
          <ComboBadge combo={combo} colors={colors} />
          <View style={[styles.progressBarContainer, { backgroundColor: colors.border }]}>
            <Animated.View
              style={[
                styles.progressBarFill,
                {
                  backgroundColor: colors.primary,
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
        </View>
        {!isPlacementTest && (
          <Text style={styles.hearts}>❤️ {hearts}</Text>
        )}
      </View>

      {/* Out of Hearts Modal */}
      <Modal visible={showHeartModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={styles.modalEmoji}>💔</Text>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Canın Bitti!</Text>
            <Text style={[styles.modalText, { color: colors.textLight }]}>
              Derslere devam etmek için canlarını doldur veya sürenin dolmasını bekle.
            </Text>
            <TouchableOpacity
              style={[styles.modalBtn, { backgroundColor: colors.primary }]}
              onPress={() => {
                if (refillHearts(50)) {
                  setHearts(5);
                  setShowHeartModal(false);
                } else {
                  alert('Yeterli elmasın yok!');
                }
              }}
            >
              <Text style={styles.modalBtnText}>💎 50 ile Doldur</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalBtnOutline, { borderColor: colors.textLight }]}
              onPress={() => {
                setShowHeartModal(false);
                navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs');
              }}
            >
              <Text style={[styles.modalBtnOutlineText, { color: colors.textLight }]}>Dersi Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Mascot Bubble (appears contextually) */}
      {showMascot && (
        <View style={styles.mascotOverlay}>
          <MascotBubble message={mascotMessage} colors={colors} />
        </View>
      )}

      {/* Main Card */}
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateX: shakeAnim }, { scale: scaleAnim }] }]}>
        {currentQuestion.type === 'flashcard' ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.questionTitle, { color: colors.text, textAlign: 'center', marginBottom: 20 }]}>Yeni Kelime Öğren</Text>
            <LinearGradient 
              colors={[colors.surface, colors.background]}
              style={{ 
                padding: 40, 
                borderRadius: 28, 
                alignItems: 'center', 
                width: '100%',
                borderWidth: 3,
                borderColor: colors.primary + '40',
                shadowColor: colors.primary,
                shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.15,
                shadowRadius: 25,
                elevation: 12,
              }}
            >
              <View style={{
                backgroundColor: colors.primary + '15',
                width: 120, height: 120, borderRadius: 60,
                justifyContent: 'center', alignItems: 'center',
                marginBottom: 20
              }}>
                <Text style={{fontSize: 70}}>{currentQuestion.imageOptions ? currentQuestion.imageOptions[0] : '💡'}</Text>
              </View>
              
              <Text style={{fontSize: 40, fontWeight: '900', color: colors.primary, marginBottom: 8, letterSpacing: 1}}>{currentQuestion.audioText}</Text>
              <Text style={{fontSize: 22, fontWeight: '600', color: colors.textLight, textAlign: 'center', marginBottom: 30}}>{currentQuestion.prompt}</Text>
              
              <TouchableOpacity 
                style={{
                  backgroundColor: colors.primary,
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: colors.primary,
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  elevation: 8,
                }}
                onPress={() => {
                  Haptics.selectionAsync();
                  playSound(currentQuestion.audioText || '', currentQuestion.audioLang || 'tr');
                }}
                activeOpacity={0.8}
              >
                <Text style={{ fontSize: 32 }}>🔊</Text>
              </TouchableOpacity>
              
              <Text style={{fontSize: 14, color: colors.textLight, marginTop: 15, fontWeight: '500'}}>Sesi dinle ve kelimeyi öğren!</Text>
            </LinearGradient>
          </View>
        ) : currentQuestion.type === 'constructSentence' ? (
          <View style={styles.constructContainer}>
            <Text style={[styles.questionTitle, { color: colors.text, marginBottom: 20 }]}>{currentQuestion.prompt}</Text>
            
            <View style={styles.constructHeader}>
              <Text style={{fontSize: 80}}>💜</Text>
              <View style={[styles.constructBubble, { borderColor: colors.border, backgroundColor: colors.surface }]}>
                 <TouchableOpacity
                  style={[styles.constructSpeakerBtn, { backgroundColor: colors.info }]}
                  onPress={() => playSound(currentQuestion.audioText || '', currentQuestion.audioLang || 'en')}
                >
                  <Text style={styles.constructSpeakerIcon}>🔊</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                  {(currentIndex >= totalQuestions - 2 && !isSentenceHintRevealed) ? (
                    <View style={{ alignItems: 'flex-start', gap: 6, marginVertical: 4 }}>
                      <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>
                        🇹🇷 {currentQuestion.prompt.replace('Şu cümleyi çevir: ', '').replace(/['"]/g, '').trim()}
                      </Text>
                      <TouchableOpacity 
                        onPress={() => setIsSentenceHintRevealed(true)}
                        style={{ paddingHorizontal: 15, paddingVertical: 6, backgroundColor: colors.border, borderRadius: 8 }}
                      >
                        <Text style={{ color: colors.text, fontSize: 13, fontWeight: '600' }}>Cevabı Görmek İçin Tıkla 👁️</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    currentQuestion.audioText?.split(' ').map((word, i) => {
                      const hasTooltip = currentQuestion.tooltips && currentQuestion.tooltips[word];
                      return (
                        <View key={i} style={{ position: 'relative' }}>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                              if (hasTooltip) {
                                setActiveTooltip(activeTooltip === word ? null : word);
                              } else {
                                playSound(word, currentQuestion.audioLang || 'en');
                              }
                            }}
                          >
                            <Text style={[styles.constructText, { color: colors.text, marginRight: 5 }, hasTooltip && styles.tooltipWord]}>
                              {word}
                            </Text>
                          </TouchableOpacity>
                          
                          {activeTooltip === word && hasTooltip && (
                            <View style={[styles.tooltipContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                              {currentQuestion.tooltips![word].map((trans, ti) => (
                                <Text key={ti} style={[styles.tooltipText, { color: colors.text }]}>{trans}</Text>
                              ))}
                            </View>
                          )}
                        </View>
                      );
                    })
                  )}
                </View>
                <View style={[styles.constructBubbleTail, {borderRightColor: colors.border}]} />
                <View style={[styles.constructBubbleTailInner, {borderRightColor: colors.surface}]} />
              </View>
            </View>

            <View style={[styles.answerBox, {borderBottomColor: colors.border}]}>
               {selectedWords.map((word, idx) => (
                  <TouchableOpacity 
                    key={idx} 
                    style={[styles.wordChip, {backgroundColor: colors.surface, borderColor: colors.border}]} 
                    onPress={() => !isChecked && setSelectedWords(prev => prev.filter((_, i) => i !== idx))}
                  >
                    <Text style={[styles.wordText, {color: colors.text}]}>{word}</Text>
                  </TouchableOpacity>
               ))}
            </View>

            <View style={styles.wordBank}>
               {currentQuestion.options.map((word, idx) => {
                  const isSelected = selectedWords.includes(word);
                  return (
                    <TouchableOpacity 
                      key={idx} 
                      style={[
                        styles.wordChip, 
                        {
                          backgroundColor: isSelected ? colors.border : colors.surface, 
                          borderColor: isSelected ? colors.border : colors.border,
                          elevation: isSelected ? 0 : 2,
                        }
                      ]} 
                      onPress={() => !isChecked && !isSelected && setSelectedWords(prev => [...prev, word])}
                      disabled={isSelected || isChecked}
                    >
                      <Text style={[styles.wordText, {color: isSelected ? colors.border : colors.text}]}>{word}</Text>
                    </TouchableOpacity>
                  );
               })}
            </View>
          </View>
        ) : (
          <>
            <View style={styles.questionHeader}>
              <Text style={[styles.questionTitle, { color: colors.text }]}>{currentQuestion.prompt}</Text>
              <TouchableOpacity 
                style={[styles.speakBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={() => {
                  const langMap: Record<string, string> = {
                    english: 'en-US', spanish: 'es-ES', french: 'fr-FR', german: 'de-DE',
                    italian: 'it-IT', turkish: 'tr-TR', kurdish: 'tr-TR'
                  };
                  Haptics.selectionAsync();
                  TTSAudioService.play(currentQuestion.audioText || currentQuestion.prompt || '', langMap[activeLanguage] || 'en-US');
                }}
              >
                <Text style={{ fontSize: 24 }}>🔊</Text>
              </TouchableOpacity>
            </View>

            <View style={currentQuestion.type === 'imageChoice' ? styles.imageOptionsGrid : styles.options}>
              {currentQuestion.options.map((option, index) => {
                let btnStyle: any = { backgroundColor: colors.surface, borderColor: colors.border };

                if (isChecked) {
                  if (index === currentQuestion.correctIndex) {
                    btnStyle = { backgroundColor: '#D7FFB8', borderColor: colors.primary };
                  } else if (index === selectedIndex && !isCorrect) {
                    btnStyle = { backgroundColor: '#FFDFE0', borderColor: colors.error };
                  }
                } else if (selectedIndex === index) {
                  btnStyle = { backgroundColor: colors.info + '20', borderColor: colors.info };
                }

                if (currentQuestion.type === 'imageChoice') {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[styles.imageOptionBtn, btnStyle]}
                      onPress={() => { if (!isChecked) handleCheck(index); }}
                      disabled={isChecked}
                    >
                      <Text style={styles.imageOptionEmoji}>{currentQuestion.imageOptions?.[index] || '❓'}</Text>
                      <Text style={[styles.imageOptionText, { color: colors.text }]}>{option}</Text>
                      <View style={styles.imageOptionNumberBox}>
                        <Text style={styles.imageOptionNumber}>{index + 1}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }

                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.optionBtn, btnStyle]}
                    onPress={() => { if (!isChecked) handleCheck(index); }}
                    disabled={isChecked}
                  >
                    <Text style={[styles.optionNumber, { color: colors.textLight }]}>{index + 1}</Text>
                    <Text style={[styles.optionText, { color: colors.text }]}>{option}</Text>
                    {isChecked && index === currentQuestion.correctIndex && (
                      <Text style={styles.checkmark}>✅</Text>
                    )}
                    {isChecked && index === selectedIndex && !isCorrect && (
                      <Text style={styles.checkmark}>❌</Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}
      </Animated.View>

      {/* Footer */}
      <View style={[styles.footer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
        {isChecked && (
          <View style={[styles.feedbackBar, { backgroundColor: isCorrect ? '#D7FFB8' : '#FFDFE0' }]}>
            <View style={styles.feedbackRow}>
              <Text style={[styles.feedbackIcon]}>{isCorrect ? '✅' : '😔'}</Text>
              <View>
                <Text style={[styles.feedbackText, { color: isCorrect ? '#58A700' : '#EA2B2B' }]}>
                  {isCorrect ? 'Harika!' : 'Yanlış!'}
                </Text>
                {!isCorrect && currentQuestion && (
                  <Text style={[styles.feedbackAnswer, { color: '#EA2B2B' }]}>
                    Doğru cevap: {currentQuestion.type === 'constructSentence' 
                      ? currentQuestion.correctAnswer?.join(' ') 
                      : currentQuestion.options[currentQuestion.correctIndex]}
                  </Text>
                )}
              </View>
              {isCorrect && currentQuestion?.type === 'constructSentence' && (
                <TouchableOpacity onPress={() => setShowShareModal(true)} style={styles.shareBtn}>
                  <Text style={styles.shareIcon}>📤</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {/* For constructSentence: show KONTROL ET first, then DEVAM ET.
            For flashcard: show ANLADIM immediately.
            For other types: instantly check on option tap, only show DEVAM ET after. */}
        {(currentQuestion?.type === 'constructSentence' || currentQuestion?.type === 'flashcard' || isChecked) && (
          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => { 
              if (isChecked) { 
                handleContinue(); 
              } else { 
                handleCheck(); 
              } 
            }}
            disabled={currentQuestion?.type === 'constructSentence' && selectedWords.length === 0 && !isChecked}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={
                isChecked
                  ? (isCorrect ? [colors.primary, '#00B8CC'] : [colors.error, '#CC0044'])
                  : (selectedWords.length > 0 || currentQuestion?.type === 'flashcard' ? [colors.primary, '#00B8CC'] : [colors.border, colors.border])
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.actionBtn,
                {
                  borderBottomColor: isChecked
                    ? (isCorrect ? '#00A3B5' : '#AA0033')
                    : (selectedWords.length > 0 || currentQuestion?.type === 'flashcard' ? '#00A3B5' : 'rgba(0,0,0,0.1)'),
                },
              ]}
            >
              <Text style={[styles.actionBtnText, { color: selectedWords.length > 0 || isChecked || currentQuestion?.type === 'flashcard' ? '#FFF' : colors.textLight }]}>
                {isChecked ? 'DEVAM ET' : (currentQuestion?.type === 'flashcard' ? 'ANLADIM' : 'KONTROL ET')}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>

      {/* First Sentence Overlay */}
      {showFirstSentence && (
        <View style={styles.firstSentenceOverlay}>
          <Animated.View style={styles.firstSentenceBadge}>
            <Text style={styles.firstSentenceText}>İLK CÜMLENİ KURDUN</Text>
          </Animated.View>
        </View>
      )}

      {/* Share Modal */}
      <Modal visible={showShareModal} transparent animationType="slide">
        <View style={styles.shareModalBg}>
          <View style={[styles.shareModalContent, { backgroundColor: colors.surface }]}>
            <View style={styles.shareModalHeader}>
              <TouchableOpacity onPress={() => setShowShareModal(false)}>
                <Text style={[styles.closeShareBtn, { color: colors.textLight }]}>✖</Text>
              </TouchableOpacity>
              <Text style={[styles.shareModalTitle, { color: colors.textLight }]}>BU CÜMLEYİ PAYLAŞ</Text>
              <View style={{ width: 20 }} />
            </View>
            
            <View style={[styles.shareCard, { backgroundColor: colors.background, borderColor: colors.border }]}>
              <View style={styles.shareFlag}><Text>🇺🇸</Text></View>
              <Text style={[styles.shareTargetText, { color: colors.text }]}>{currentQuestion.audioText}</Text>
              <Text style={[styles.shareNativeText, { color: colors.textLight }]}>
                {currentQuestion.correctAnswer?.join(' ')}
              </Text>
              <View style={styles.shareMascotRow}>
                <Text style={{color: colors.primary, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 18}}>Lingum</Text>
                <Mascot size={80} />
              </View>
            </View>

            <View style={styles.shareOptionsRow}>
              {[
                { icon: '📰', label: 'Bülten', bg: '#58CC02' },
                { icon: '💬', label: 'Mesajlar', bg: '#4CD964' },
                { icon: '🟢', label: 'WhatsApp', bg: '#25D366' },
                { icon: '📸', label: 'Instagram', bg: '#C13584' },
                { icon: '⬇️', label: 'Kaydet', bg: '#4B4B4B' },
                { icon: '•••', label: 'Daha fazla', bg: '#4B4B4B' },
              ].map((opt, i) => (
                <View key={i} style={styles.shareOptItem}>
                  <View style={[styles.shareOptIconBox, { backgroundColor: opt.bg }]}>
                    <Text style={{ fontSize: 24, color: '#FFF' }}>{opt.icon}</Text>
                  </View>
                  <Text style={[styles.shareOptLabel, { color: colors.text }]}>{opt.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
  },
  closeArea: {
    padding: 5,
  },
  closeBtn: {
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  progressCol: {
    flex: 1,
    marginHorizontal: 12,
  },
  progressBarContainer: {
    height: 14,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 10,
  },
  hearts: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FF4B4B',
  },
  // ── Combo ──
  comboBadge: {
    alignSelf: 'center',
    marginBottom: 6,
  },
  comboText: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
  // ── Mascot ──
  mascotContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  mascotEmoji: {
    fontSize: 50,
    marginRight: 10,
  },
  speechBubble: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  speechText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  speechTail: {
    position: 'absolute',
    bottom: -8,
    left: 15,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  mascotOverlay: {
    position: 'absolute',
    top: 80,
    left: 15,
    right: 15,
    zIndex: 100,
  },
  // ── Achievement ──
  achievementOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  achievementContent: {
    alignItems: 'center',
  },
  achievementEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  achievementTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  typeTag: {
    marginBottom: 15,
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    flex: 1,
    marginRight: 15,
  },
  speakBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speakerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 25,
    gap: 8,
  },
  speakerIcon: {
    fontSize: 20,
  },
  speakerText: {
    fontSize: 15,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  options: {
    gap: 12,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  optionNumber: {
    fontSize: 15,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginRight: 12,
    width: 20,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '600',
    flex: 1,
  },
  checkmark: {
    fontSize: 18,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
  },
  feedbackBar: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  feedbackIcon: {
    fontSize: 24,
  },
  feedbackText: {
    fontSize: 17,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  feedbackAnswer: {
    fontSize: 15,
    marginTop: 2,
  },
  actionBtn: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  actionBtnText: {
    fontSize: 17,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  // ── Completion Screen ──
  completeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  completeTitle: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 30,
  },
  rewardContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 50,
  },
  rewardCard: {
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    width: 105,
    borderWidth: 1,
    borderBottomWidth: 4,
  },
  rewardEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  rewardValue: {
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  rewardLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  continueBtn: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 14,
    borderBottomWidth: 4,
  },
  continueBtnText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  // ── Modals ──
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',
  },
  modalEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  modalBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  modalBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  modalBtnOutline: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  modalBtnOutlineText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  // ── New Image Choice Styles ──
  imageTag: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  audioPromptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },
  speakerBtnLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  speakerIconLarge: {
    fontSize: 28,
  },
  audioPromptText: {
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  imageOptionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
  },
  imageOptionBtn: {
    width: (width - 75) / 2, // 2 columns with padding
    aspectRatio: 0.85,
    borderWidth: 2,
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageOptionEmoji: {
    fontSize: 60,
    marginVertical: 10,
  },
  imageOptionText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
  },
  imageOptionNumberBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOptionNumber: {
    fontSize: 12,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#aaa',
  },
  // ── New Construct Sentence Styles ──
  constructContainer: {
    width: '100%',
  },
  constructHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  constructBubble: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 16,
    padding: 15,
    marginLeft: 15,
    position: 'relative',
  },
  constructSpeakerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 8,
  },
  constructSpeakerIcon: {
    fontSize: 18,
  },
  constructText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  constructBubbleTail: {
    position: 'absolute',
    left: -12,
    top: 30,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: 'transparent',
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
  },
  constructBubbleTailInner: {
    position: 'absolute',
    left: -8,
    top: 32,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: 'transparent',
  },
  answerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 60,
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 30,
    gap: 10,
  },
  wordBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  wordChip: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  // ── Tooltip ──
  tooltipWord: {
    textDecorationColor: '#C864F1',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  tooltipContainer: {
    position: 'absolute',
    top: 30,
    left: -10,
    zIndex: 999,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    minWidth: 100,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  tooltipText: {
    fontSize: 14,
    lineHeight: 22,
  },
  // ── First Sentence Overlay ──
  firstSentenceOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 300,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  firstSentenceBadge: {
    transform: [{ rotate: '-8deg' }],
  },
  firstSentenceText: {
    fontSize: 38,
    fontWeight: '900',
    color: '#58CC02',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 2,
    textAlign: 'center',
  },
  // ── Share Button ──
  shareBtn: {
    marginLeft: 'auto',
    padding: 8,
  },
  shareIcon: {
    fontSize: 24,
  },
  // ── Share Modal ──
  shareModalBg: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  shareModalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 40,
  },
  shareModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  closeShareBtn: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  shareModalTitle: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 13,
    letterSpacing: 1,
  },
  shareCard: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  shareFlag: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  shareTargetText: {
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 6,
  },
  shareNativeText: {
    fontSize: 16,
    marginBottom: 20,
  },
  shareMascotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  shareOptionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    gap: 10,
  },
  shareOptItem: {
    alignItems: 'center',
    width: 70,
  },
  shareOptIconBox: {
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  shareOptLabel: {
    fontSize: 11,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
    letterSpacing: 1,
  },
});

export default LessonScreen;
