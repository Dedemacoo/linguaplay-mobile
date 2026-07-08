import { Mascot } from '../components/Mascot';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { lessonsByLanguage } from '../data/lessonContent';
import { NotificationService } from '../services/NotificationService';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const { width } = Dimensions.get('window');
const TOTAL_STEPS = 5;

const languages = [
  { key: 'kurdish', title: 'Kürtçe (Kurmancî)', flag: '☀️' },
  { key: 'english', title: 'İngilizce', flag: '🇬🇧' },
  { key: 'spanish', title: 'İspanyolca', flag: '🇪🇸' },
  { key: 'french', title: 'Fransızca', flag: '🇫🇷' },
  { key: 'german', title: 'Almanca', flag: '🇩🇪' },
  { key: 'italian', title: 'İtalyanca', flag: '🇮🇹' },
  { key: 'japanese', title: 'Japonca', flag: '🇯🇵' },
  { key: 'korean', title: 'Korece', flag: '🇰🇷' },
  { key: 'russian', title: 'Rusça', flag: '🇷🇺' },
  { key: 'chinese', title: 'Çince', flag: '🇨🇳' },
  { key: 'arabic', title: 'Arapça', flag: '🇸🇦' },
  { key: 'turkish', title: 'Türkçe', flag: '🇹🇷' },
  { key: 'portuguese', title: 'Portekizce', flag: '🇵🇹' },
  { key: 'dutch', title: 'Felemenkçe', flag: '🇳🇱' },
] as const;

const motivations = [
  { id: 'connect', title: 'Bağlantı oluşturmak için', icon: '🤝' },
  { id: 'career', title: 'Kariyerimi güçlendirmek için', icon: '💼' },
  { id: 'productive', title: 'Daha üretken olmak için', icon: '🧠' },
  { id: 'travel', title: 'Seyahate hazırlanmak için', icon: '✈️' },
  { id: 'fun', title: 'Eğlencesine', icon: '🎉' },
  { id: 'education', title: 'Eğitimimi desteklemek için', icon: '📖' },
  { id: 'other', title: 'Diğer', icon: '💬' },
];

const promises = [
  { icon: '💬', title: 'Korkusuzca konuş', desc: 'Stressiz konuşma ve dinleme egzersizleri', color: '#C864F1' },
  { icon: '🅰️', title: 'Kelime hazneni geliştirme', desc: 'Yaygın kelimeler ve kullanışlı ifadeler', color: '#1CB0F6' },
  { icon: '⏰', title: 'Öğrenim alışkanlığı edin', desc: 'Akıllı bildirimler, eğlenceli mücadeleler ve daha fazlası', color: '#FF9600' },
];

const dailyGoals = [
  { id: '5', title: 'Günde 5 dakika', label: 'Rahat' },
  { id: '10', title: 'Günde 10 dakika', label: 'Orta' },
  { id: '15', title: 'Günde 15 dakika', label: 'Ciddi' },
  { id: '20', title: 'Günde 20 dakika', label: 'Yoğun' },
];

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
const minutes = ['00', '15', '30', '45'];

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  
  const [step, setStep] = useState(0);
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [pathSelection, setPathSelection] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    slideAnim.setValue(width);
    fadeAnim.setValue(0);
    Animated.parallel([
      Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  };

  useEffect(() => {
    animateIn();
  }, [step]);

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  };

  const getTargetLangName = () => {
    return languages.find(l => l.key === activeLanguage)?.title || 'Kürtçe';
  };

  const toggleMotivation = (id: string) => {
    setSelectedMotivations(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // ── Step 0: Dil Seçimi ──
  const renderLanguageStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={150} />
        <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.chatText, { color: colors.text }]}>Öğrenmek istediğin dili seç.</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        {languages.map((lang) => {
          const supportedLanguages = ['kurdish', 'english', 'french', 'turkish', 'spanish', 'german', 'italian'];
          const isSupported = supportedLanguages.includes(lang.key);
          const isSelected = activeLanguage === lang.key;

          return (
            <TouchableOpacity
              key={lang.key}
              style={[
                styles.optionBtn,
                { backgroundColor: isSelected ? colors.primary + '20' : colors.surface },
                { borderColor: isSelected ? colors.primary : colors.border },
                isSelected && { borderBottomWidth: 4 },
                !isSupported && { opacity: 0.4 } // Soluk görünüm
              ]}
              onPress={() => {
                Haptics.selectionAsync();
                setActiveLanguage(lang.key as any);
              }}
              activeOpacity={0.7}
              disabled={!isSupported} // Tıklanmayı engelle
            >
              <Text style={styles.optionIcon}>{lang.flag}</Text>
              <Text style={[styles.optionTitle, { color: isSelected ? colors.primary : colors.text }]}>
                {lang.title} {!isSupported && '(Yakında)'}
              </Text>
              {isSelected && <Text style={{ fontSize: 18 }}>✅</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  // ── Step 1: Motivasyon Seçimi ──
  const renderMotivationStep = () => {
    let mascotText = `Neden ${getTargetLangName()} öğrenmek istiyorsun?`;
    if (selectedMotivations.includes('education')) {
      mascotText = 'Hadi artık şu sınavlardan 100 alalım!';
    } else if (selectedMotivations.length > 0) {
      mascotText = 'Harika bir hedef!';
    }

    return (
      <View style={styles.stepContainer}>
        <View style={styles.mascotContainer}>
          <Mascot size={150} />
          <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.chatText, { color: colors.text }]}>{mascotText}</Text>
          </View>
        </View>

      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        {motivations.map((mot) => {
          const isSelected = selectedMotivations.includes(mot.id);
          return (
            <TouchableOpacity
              key={mot.id}
              style={[
                styles.optionBtn,
                { backgroundColor: isSelected ? colors.primary + '20' : colors.surface },
                { borderColor: isSelected ? colors.primary : colors.border },
                isSelected && { borderBottomWidth: 4 }
              ]}
              onPress={() => {
                Haptics.selectionAsync();
                toggleMotivation(mot.id);
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.optionIcon}>{mot.icon}</Text>
              <Text style={[styles.optionTitle, { color: isSelected ? colors.primary : colors.text }]}>{mot.title}</Text>
              {isSelected && (
                <View style={[styles.checkCircle, { backgroundColor: colors.info }]}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
    );
  };

  // ── Step 2: Günlük Hedef Seçimi (Image 1) ──
  const renderDailyGoalStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={150} />
        <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.chatText, { color: colors.text }]}>Günlük öğrenme hedefin ne?</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        {dailyGoals.map((goal) => {
          const isSelected = selectedGoal === goal.id;
          return (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.optionBtn,
                { backgroundColor: isSelected ? colors.primary + '20' : colors.surface, flexDirection: 'row', justifyContent: 'space-between' },
                { borderColor: isSelected ? colors.primary : colors.border },
                isSelected && { borderBottomWidth: 4 }
              ]}
              onPress={() => {
                Haptics.selectionAsync();
                setSelectedGoal(goal.id);
              }}
              activeOpacity={0.7}
            >
              <Text style={[styles.optionTitle, { color: isSelected ? colors.primary : colors.text }]}>{goal.title}</Text>
              <Text style={[styles.goalLabel, { color: isSelected ? colors.primary : colors.textLight }]}>{goal.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  // ── Step 3: Hedef Onayı (Image 2) ──
  const renderGoalConfirmationStep = () => {
    // 5 dakika = 50 kelime
    // 10 dakika = 100 kelime vb.
    const words = (parseInt(selectedGoal || '5') / 5) * 50;
    
    return (
      <View style={[styles.stepContainer, { justifyContent: 'center', paddingBottom: 100 }]}>
        <View style={[styles.mascotContainer, { alignSelf: 'center' }]}>
          <Mascot size={150} />
          <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.chatText, { color: colors.text }]}>
              Bu, ilk haftanda <Text style={{ color: '#C864F1', fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>{words} kelime</Text> demek!
            </Text>
          </View>
        </View>
      </View>
    );
  };


  // ── Step 4: Yol Seçimi (Nereden Başlamak İstersin) ──
  const renderPathSelectionStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={150} />
        <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.chatText, { color: colors.text }]}>Nereden başlamak istersin?</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity
          style={[styles.pathBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => { 
            Haptics.selectionAsync(); 
            navigation.navigate('Reminder'); 
          }}
          activeOpacity={0.7}
        >
          <View style={[styles.pathIconBox, { backgroundColor: '#FFC800' }]}>
            <Text style={{ fontSize: 24 }}>📖</Text>
          </View>
          <View style={styles.pathTextCol}>
            <Text style={[styles.pathTitle, { color: colors.text }]}>Sil baştan başla</Text>
            <Text style={[styles.pathDesc, { color: colors.textLight }]}>{getTargetLangName()} kursunun en kolay dersine gir</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pathBtn, { backgroundColor: colors.surface, borderColor: colors.border, marginTop: 15 }]}
          onPress={() => { 
            Haptics.selectionAsync(); 
            navigation.replace('Lesson', { lessonId: undefined, fromOnboarding: true, isPlacementTest: true }); 
          }}
          activeOpacity={0.7}
        >
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>TAVSİYE EDİLEN</Text>
          </View>
          <View style={[styles.pathIconBox, { backgroundColor: '#1CB0F6' }]}>
            <Text style={{ fontSize: 24 }}>🧭</Text>
          </View>
          <View style={styles.pathTextCol}>
            <Text style={[styles.pathTitle, { color: colors.text }]}>Seviyemi bul</Text>
            <Text style={[styles.pathDesc, { color: colors.textLight }]}>Öğrenmeye nereden başlaman gerektiğini bırak Lingum önersin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0: return renderLanguageStep();
      case 1: return renderMotivationStep();
      case 2: return renderDailyGoalStep();
      case 3: return renderGoalConfirmationStep();
      case 4: return renderPathSelectionStep();
      default: return null;
    }
  };

  const isNextDisabled = () => {
    if (step === 0) return !activeLanguage;
    if (step === 1) return selectedMotivations.length === 0;
    if (step === 2) return !selectedGoal;
    return false;
  };

  const getButtonText = () => {
    if (step === 2) return 'KARARLIYIM';
    return 'DEVAM ET';
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.progressHeader}>
          {step > 0 && (
            <TouchableOpacity onPress={() => setStep(step - 1)} style={styles.backBtn}>
              <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>←</Text>
            </TouchableOpacity>
          )}
          <View style={[styles.progressBarBg, { backgroundColor: colors.surface }]}>
            <Animated.View style={[
              styles.progressBarFill, 
              { backgroundColor: colors.primary, width: `${((step + 1) / TOTAL_STEPS) * 100}%` }
            ]} />
          </View>
        </View>

        <Animated.View style={[styles.contentWrapper, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]}>
          {renderStepContent()}
        </Animated.View>

        {step !== 4 && (
          <View style={styles.footer}>
            <TouchableOpacity 
              style={[
                styles.button, 
                { backgroundColor: isNextDisabled() ? colors.surface : colors.primary, 
                  borderBottomColor: isNextDisabled() ? colors.surface : colors.primaryDark 
                }
              ]} 
              onPress={handleNext}
              disabled={isNextDisabled()}
              activeOpacity={0.8}
            >
              <Text style={[styles.buttonText, { color: isNextDisabled() ? colors.textLight : '#FFF' }]}>
                {getButtonText()}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    paddingBottom: 20,
    height: 80,
  },
  backBtn: {
    marginRight: 15,
  },
  progressBarBg: {
    flex: 1,
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  contentWrapper: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mascotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  chatBubble: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginLeft: 15,
  },
  chatText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  scrollList: {
    paddingBottom: 20,
    gap: 12,
  },
  listContainer: {
    gap: 12,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    borderWidth: 2,
  },
  optionIcon: {
    fontSize: 26,
    marginRight: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    flex: 1,
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    color: '#FFF',
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 16,
  },
  bigTitle: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  ageInputContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  ageInput: {
    borderWidth: 2,
    borderRadius: 12,
    width: '100%',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20,
  },
  // ── Reminder ──
  reminderCard: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  reminderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  reminderRadio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderRadioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  reminderSub: {
    fontSize: 14,
    marginTop: 2,
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 10,
    height: 200,
    overflow: 'hidden',
  },
  timeColumn: {
    flex: 1,
    maxHeight: 200,
  },
  timeColumnContent: {
    alignItems: 'center',
    paddingVertical: 75,
  },
  timeItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  timeItemSelected: {
    backgroundColor: 'rgba(88, 204, 2, 0.15)',
    borderRadius: 10,
  },
  timeText: {
    fontSize: 20,
  },
  timeTextSelected: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  timeSep: {
    fontSize: 32,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginHorizontal: 10,
  },
  // ── Promise ──
  promiseList: {
    gap: 25,
    marginTop: 20,
  },
  promiseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  promiseIconBg: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promiseIcon: {
    fontSize: 24,
  },
  promiseTextContainer: {
    flex: 1,
  },
  promiseTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 4,
  },
  promiseDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 30,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  socialAuthBox: {
    marginTop: 30,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  socialBtn: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  socialBtnText: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#4A90E2',
    fontSize: 16,
  },
  // ── New Styles ──
  goalLabel: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 14,
  },
  permissionCard: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  permissionIconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  permissionTitle: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  permissionDesc: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  permissionBtnRow: {
    flexDirection: 'row',
    gap: 15,
    width: '100%',
  },
  permBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  pathBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
  },
  pathIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  pathTextCol: {
    flex: 1,
  },
  pathTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 4,
  },
  pathDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  recommendedBadge: {
    position: 'absolute',
    top: -12,
    right: 15,
    backgroundColor: '#1CB0F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  recommendedText: {
    color: '#FFF',
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 10,
    letterSpacing: 1,
  },
  premiumHeader: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  premiumTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
    lineHeight: 32,
  },
  premiumMascotContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  premiumTable: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tableCol1: {
    flex: 2,
    justifyContent: 'center',
  },
  tableCol2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCol3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  tableRowText: {
    fontSize: 15,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  tableRowVal: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  tableBottomRow: {
    height: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: '66.66%',
  },
});

export default OnboardingScreen;
