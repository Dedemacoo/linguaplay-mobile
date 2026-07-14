import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Platform, Alert, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { BRAND } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { Mascot } from '../components/Mascot';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const { width } = Dimensions.get('window');
const TOTAL_STEPS = 5;

const languages = [
  { key: 'english', title: 'İngilizce', flag: '🇬🇧', subtitle: 'Dünya Dili' },
  { key: 'spanish', title: 'İspanyolca', flag: '🇪🇸', subtitle: 'Sıcak Akdeniz' },
  { key: 'french', title: 'Fransızca', flag: '🇫🇷', subtitle: 'Aşkın Dili' },
  { key: 'german', title: 'Almanca', flag: '🇩🇪', subtitle: 'Kariyer İçin' },
  { key: 'kurdish', title: 'Kürtçe', flag: '☀️', subtitle: 'Mezopotamya' },
  { key: 'turkish', title: 'Türkçe', flag: '🇹🇷', subtitle: 'Anadilimiz' },
  { key: 'italian', title: 'İtalyanca', flag: '🇮🇹', subtitle: 'Sanat Dili' },
  { key: 'japanese', title: 'Japonca', flag: '🇯🇵', subtitle: 'Uzak Doğu' },
] as const;

const motivations = [
  { id: 'connect', title: 'Yeni insanlarla tanışmak', icon: '🤝' },
  { id: 'career', title: 'Kariyerimi güçlendirmek', icon: '💼' },
  { id: 'productive', title: 'Beynimi zinde tutmak', icon: '🧠' },
  { id: 'travel', title: 'Seyahatlere hazırlanmak', icon: '✈️' },
  { id: 'fun', title: 'Sadece eğlenmek', icon: '🎉' },
  { id: 'education', title: 'Eğitimimi desteklemek', icon: '📖' },
];

const promises = [
  { icon: '💬', title: 'Gerçek İletişim', desc: 'Sadece ezber değil, konuşma odaklı', color: BRAND.primary },
  { icon: '🎮', title: 'Oyun Gibi', desc: 'Sıkıcı dersler yok, macera var', color: BRAND.secondary },
  { icon: '🏆', title: 'Görünür İlerleme', desc: 'Her gün ne kadar geliştiğini gör', color: BRAND.gold },
];

const dailyGoals = [
  { id: '5', title: 'Günde 5 dakika', label: 'Rahat', icon: '☕' },
  { id: '10', title: 'Günde 10 dakika', label: 'Orta', icon: '🚶' },
  { id: '15', title: 'Günde 15 dakika', label: 'Ciddi', icon: '🏃' },
  { id: '20', title: 'Günde 20+ dakika', label: 'Yoğun', icon: '🔥' },
];

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  
  const [step, setStep] = useState(0);
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    slideAnim.setValue(width);
    fadeAnim.setValue(0);
    Animated.parallel([
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  };

  useEffect(() => { animateIn(); }, [step]);

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  };

  const getTargetLangName = () => languages.find(l => l.key === activeLanguage)?.title || 'İngilizce';

  const toggleMotivation = (id: string) => {
    Haptics.selectionAsync();
    setSelectedMotivations(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  // ── Step 0: Language ──
  const renderLanguageStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={110} emotion="happy" animated />
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Hoş geldin! Ben Lingo. 🐬 Yeni bir dil macerasına hazır mısın? Hangi dili öğrenmek istersin?</Text>
          <View style={styles.chatTail} />
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        {languages.map((lang) => {
          const isSelected = activeLanguage === lang.key;
          return (
            <TouchableOpacity
              key={lang.key}
              style={[
                styles.optionBtn,
                isSelected && styles.optionBtnActive
              ]}
              onPress={() => {
                Haptics.selectionAsync();
                setActiveLanguage(lang.key as any);
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.optionIcon}>{lang.flag}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionTitle, isSelected && { color: BRAND.primary }]}>{lang.title}</Text>
                <Text style={styles.optionSubtitle}>{lang.subtitle}</Text>
              </View>
              {isSelected && <Text style={{ fontSize: 20 }}>🎯</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  // ── Step 1: Motivation ──
  const renderMotivationStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={110} emotion="thinking" animated />
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Neden {getTargetLangName()} öğrenmek istiyorsun? (Birden fazla seçebilirsin)</Text>
          <View style={styles.chatTail} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        {motivations.map((m) => {
          const isSelected = selectedMotivations.includes(m.id);
          return (
            <TouchableOpacity
              key={m.id}
              style={[styles.optionBtn, isSelected && styles.optionBtnActive]}
              onPress={() => toggleMotivation(m.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionIcon}>{m.icon}</Text>
              <Text style={[styles.optionTitle, isSelected && { color: BRAND.primary }]}>{m.title}</Text>
              <View style={[styles.checkbox, isSelected && styles.checkboxActive]}>
                {isSelected && <Text style={{ color: '#FFF', fontSize: 12 }}>✓</Text>}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  // ── Step 2: Course Preview ──
  const renderPromisesStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={110} emotion="celebrate" animated />
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Harika bir seçim! LinguaPlay ile {getTargetLangName()} öğrenmek çok eğlenceli olacak. 🎉</Text>
          <View style={styles.chatTail} />
        </View>
      </View>

      <View style={styles.promisesContainer}>
        {promises.map((p, index) => (
          <View key={index} style={styles.promiseCard}>
            <View style={[styles.promiseIconWrap, { backgroundColor: p.color + '22' }]}>
              <Text style={{ fontSize: 28 }}>{p.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.promiseTitle}>{p.title}</Text>
              <Text style={styles.promiseDesc}>{p.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  // ── Step 3: Daily Goal ──
  const renderGoalStep = () => (
    <View style={styles.stepContainer}>
      <View style={styles.mascotContainer}>
        <Mascot size={110} emotion="excited" animated />
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Başarı düzenlilik ister! Günlük hedefin ne olsun?</Text>
          <View style={styles.chatTail} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
        {dailyGoals.map((g) => {
          const isSelected = selectedGoal === g.id;
          return (
            <TouchableOpacity
              key={g.id}
              style={[styles.optionBtn, isSelected && styles.optionBtnActive]}
              onPress={() => { Haptics.selectionAsync(); setSelectedGoal(g.id); }}
              activeOpacity={0.8}
            >
              <Text style={styles.optionIcon}>{g.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.optionTitle, isSelected && { color: BRAND.primary }]}>{g.title}</Text>
              </View>
              <Text style={[styles.goalLabel, isSelected && { color: BRAND.primary }]}>{g.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  // ── Step 4: Final Path ──
  const renderPathStep = () => (
    <View style={styles.stepContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
        <View style={styles.bigMascotCircle}>
          <Mascot size={140} emotion="celebrate" animated />
        </View>
        <Text style={styles.finalTitle}>Maceraya Başla!</Text>
        <Text style={styles.finalDesc}>LinguaPlay dünyasına adım atmaya hazırsın. Nasıl başlamak istersin?</Text>

        <TouchableOpacity 
          style={styles.finalBtnPrimary}
          onPress={() => navigation.replace('Register')}
          activeOpacity={0.8}
        >
          <Text style={styles.finalBtnTextPri}>Yeni Hesap Oluştur</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.finalBtnSecondary}
          onPress={() => navigation.replace('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.finalBtnTextSec}>Zaten Bir Hesabım Var</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const canProceed = () => {
    if (step === 0) return !!activeLanguage;
    if (step === 1) return selectedMotivations.length > 0;
    if (step === 3) return !!selectedGoal;
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity 
          style={styles.backBtn}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            if (step > 0) setStep(step - 1);
            else navigation.goBack();
          }}
        >
          <Text style={{ color: BRAND.text, fontSize: 24, marginTop: -2 }}>←</Text>
        </TouchableOpacity>

        <View style={styles.progressBarBg}>
          <Animated.View style={[styles.progressBarFill, { width: `${((step + 1) / TOTAL_STEPS) * 100}%` }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]}>
        {step === 0 && renderLanguageStep()}
        {step === 1 && renderMotivationStep()}
        {step === 2 && renderPromisesStep()}
        {step === 3 && renderGoalStep()}
        {step === 4 && renderPathStep()}
      </Animated.View>

      {step < TOTAL_STEPS - 1 && (
        <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
          <TouchableOpacity 
            style={[styles.nextBtn, !canProceed() && styles.nextBtnDisabled]}
            onPress={handleNext}
            disabled={!canProceed()}
            activeOpacity={0.8}
          >
            <Text style={styles.nextBtnText}>Devam Et</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BRAND.bg },
  
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16, backgroundColor: BRAND.bg },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: BRAND.surface, justifyContent: 'center', alignItems: 'center' },
  progressBarBg: { flex: 1, height: 12, backgroundColor: BRAND.surface, borderRadius: 6, marginLeft: 16, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: BRAND.primary, borderRadius: 6 },
  
  content: { flex: 1 },
  stepContainer: { flex: 1, paddingHorizontal: 20 },
  
  mascotContainer: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, marginBottom: 24 },
  chatBubble: { flex: 1, backgroundColor: BRAND.surface, padding: 16, borderRadius: 20, marginLeft: 12, borderWidth: 1, borderColor: BRAND.border, position: 'relative' },
  chatText: { color: BRAND.text, fontSize: 15, lineHeight: 22, fontWeight: '600' },
  chatTail: { position: 'absolute', left: -8, top: 20, width: 16, height: 16, backgroundColor: BRAND.surface, transform: [{ rotate: '45deg' }], borderLeftWidth: 1, borderBottomWidth: 1, borderColor: BRAND.border },

  scrollList: { paddingBottom: 40, gap: 12 },
  
  optionBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: BRAND.card, padding: 16, borderRadius: 18, borderWidth: 2, borderColor: 'transparent' },
  optionBtnActive: { backgroundColor: BRAND.primary + '15', borderColor: BRAND.primary },
  optionIcon: { fontSize: 32, marginRight: 16 },
  optionTitle: { color: BRAND.text, fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  optionSubtitle: { color: BRAND.textSub, fontSize: 13, marginTop: 2, fontWeight: '500' },
  
  checkbox: { width: 24, height: 24, borderRadius: 8, borderWidth: 2, borderColor: BRAND.border, justifyContent: 'center', alignItems: 'center' },
  checkboxActive: { backgroundColor: BRAND.primary, borderColor: BRAND.primary },
  
  goalLabel: { color: BRAND.textSub, fontSize: 14, fontWeight: '800' },

  promisesContainer: { gap: 16 },
  promiseCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: BRAND.card, padding: 20, borderRadius: 20, borderWidth: 1, borderColor: BRAND.border },
  promiseIconWrap: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  promiseTitle: { color: BRAND.text, fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 4 },
  promiseDesc: { color: BRAND.textSub, fontSize: 13, lineHeight: 18 },

  bigMascotCircle: { width: 200, height: 200, borderRadius: 100, backgroundColor: BRAND.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: BRAND.primary, marginBottom: 32, shadowColor: BRAND.primary, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 20, elevation: 10 },
  finalTitle: { color: BRAND.text, fontSize: 32, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 12 },
  finalDesc: { color: BRAND.textSub, fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 40, lineHeight: 24 },
  
  finalBtnPrimary: { width: '100%', backgroundColor: BRAND.primary, paddingVertical: 18, borderRadius: 20, alignItems: 'center', marginBottom: 16, shadowColor: BRAND.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  finalBtnTextPri: { color: '#FFF', fontSize: 18, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  finalBtnSecondary: { width: '100%', backgroundColor: BRAND.surface, paddingVertical: 18, borderRadius: 20, alignItems: 'center', borderWidth: 2, borderColor: BRAND.border },
  finalBtnTextSec: { color: BRAND.text, fontSize: 18, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },

  footer: { paddingHorizontal: 20, paddingTop: 16, backgroundColor: BRAND.bg, borderTopWidth: 1, borderTopColor: BRAND.border },
  nextBtn: { backgroundColor: BRAND.primary, paddingVertical: 18, borderRadius: 20, alignItems: 'center', shadowColor: BRAND.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  nextBtnDisabled: { backgroundColor: BRAND.surface, shadowOpacity: 0, elevation: 0 },
  nextBtnText: { color: '#FFF', fontSize: 18, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
});

export default OnboardingScreen;
