import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Mascot } from '../components/Mascot';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const { width } = Dimensions.get('window');
const TOTAL_STEPS = 5;

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(0);

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

  useEffect(() => { animateIn(); }, [step]);

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  };

  const pages = [
    {
      title: "Welcome to LinguaPlay",
      desc: "Ben Lingo! Yeni nesil dil öğrenme macerasına hoş geldin.",
      mascotState: "wave" as any,
    },
    {
      title: "Dünyaları Keşfet",
      desc: "Her dil bir dünya! Dersleri tamamla, XP ve Elmas kazan, Liglerde yüksel.",
      mascotState: "celebrate" as any,
    },
    {
      title: "Oyunlar & AI Eğitmen",
      desc: "Sıkıcı testleri unut! Mini oyunlarla pratik yap ve AI Öğretmen'inle gerçek sohbetler et.",
      mascotState: "happy" as any,
    },
    {
      title: "Koleksiyonunu Genişlet",
      desc: "Yeni dünyaları bitirerek benim için yeni kostümler ve efsanevi hallerimi aç!",
      mascotState: "excited" as any,
    },
    {
      title: "Maceraya Başla!",
      desc: "Hazırsan hemen ilk dilini seç ve maceraya başlayalım!",
      mascotState: "point" as any,
    }
  ];

  const renderContent = () => {
    const page = pages[step];
    
    if (step === 4) {
      return (
        <View style={styles.stepContainer}>
          <View style={[styles.bigMascotCircle, { width: 160, height: 160 }]}>
            <Mascot mascotId="professor" size={100} animationState="celebrate" animated />
          </View>
          <Text style={styles.finalTitle}>{page.title}</Text>
          <Text style={styles.finalDesc}>{page.desc}</Text>

          <TouchableOpacity 
            style={styles.finalBtnPrimary}
            onPress={() => navigation.replace('LanguageSelection' as any)}
            activeOpacity={0.8}
          >
            <Text style={styles.finalBtnTextPri}>Başla</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.stepContainer}>
        <View style={styles.mascotContainer}>
          <Mascot mascotId="professor" size={100} animationState={page.mascotState} animated />
        </View>
        <View style={styles.chatBubble}>
          <Text style={styles.pageTitle}>{page.title}</Text>
          <Text style={styles.chatText}>{page.desc}</Text>
          <View style={styles.chatTail} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={[styles.progressBarBg, { marginLeft: 0 }]}>
          <Animated.View style={[styles.progressBarFill, { width: `${((step + 1) / TOTAL_STEPS) * 100}%` }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateX: slideAnim }] }]}>
        {renderContent()}
      </Animated.View>

      {step < TOTAL_STEPS - 1 && (
        <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
          <TouchableOpacity 
            style={styles.nextBtn}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextBtnText}>Devam Et</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16, backgroundColor: colors.background },
  progressBarBg: { flex: 1, height: 12, backgroundColor: colors.surface, borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
  
  content: { flex: 1, justifyContent: 'center' },
  stepContainer: { flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', paddingBottom: 40 },
  
  mascotContainer: { alignItems: 'center', marginBottom: 24 },
  chatBubble: { width: '100%', backgroundColor: colors.surface, padding: 24, borderRadius: 24, borderWidth: 1, borderColor: colors.border, position: 'relative', alignItems: 'center' },
  pageTitle: { color: colors.text, fontSize: 24, fontWeight: '900', marginBottom: 12, textAlign: 'center' },
  chatText: { color: colors.textLight, fontSize: 16, lineHeight: 24, fontWeight: '500', textAlign: 'center' },
  chatTail: { position: 'absolute', top: -10, alignSelf: 'center', width: 20, height: 20, backgroundColor: colors.surface, transform: [{ rotate: '45deg' }], borderTopWidth: 1, borderLeftWidth: 1, borderColor: colors.border },

  bigMascotCircle: { borderRadius: 100, backgroundColor: colors.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: colors.primary, marginBottom: 32, shadowColor: colors.primary, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 20, elevation: 10 },
  finalTitle: { color: colors.text, fontSize: 32, fontWeight: '900', marginBottom: 12, textAlign: 'center' },
  finalDesc: { color: colors.textLight, fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 40, lineHeight: 24 },
  
  finalBtnPrimary: { width: '100%', backgroundColor: colors.primary, paddingVertical: 18, borderRadius: 20, alignItems: 'center', marginBottom: 16, shadowColor: colors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  finalBtnTextPri: { color: '#FFF', fontSize: 18, fontWeight: '800' },

  footer: { paddingHorizontal: 20, paddingTop: 16, backgroundColor: colors.background },
  nextBtn: { backgroundColor: colors.primary, paddingVertical: 18, borderRadius: 20, alignItems: 'center', shadowColor: colors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  nextBtnText: { color: '#FFF', fontSize: 18, fontWeight: '800' },
});

export default OnboardingScreen;
