import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { languagesData } from '../data/mockData';
import { useLanguageStore } from '../store/useLanguageStore';

type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

const LanguageSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  const { setActiveLanguage } = useLanguageStore();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleSelectLanguage = (langKey: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setActiveLanguage(langKey as any);
    navigation.navigate('ReasonSelection');
  };

  const getFlagEmoji = (langKey: string) => {
    switch (langKey) {
      case 'english': return '🇺🇸';
      case 'spanish': return '🇪🇸';
      case 'turkish': return '🇹🇷';
      case 'kurdish': return '☀️'; // Generic representation for Kurdish since no official flag emoji
      case 'german': return '🇩🇪';
      case 'french': return '🇫🇷';
      default: return '🌍';
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '20%', backgroundColor: colors.primary }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text style={[styles.title, { color: colors.text }]}>Hangi dili öğrenmek istersin?</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {Object.keys(languagesData).map((langKey) => {
            const lang = languagesData[langKey];
            return (
              <TouchableOpacity
                key={langKey}
                style={[styles.langCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={() => handleSelectLanguage(langKey)}
                activeOpacity={0.8}
              >
                <Text style={styles.flagEmoji}>{getFlagEmoji(langKey)}</Text>
                <View style={styles.langInfo}>
                  <Text style={[styles.langTitle, { color: colors.text }]}>{lang.title}</Text>
                  <Text style={[styles.langDesc, { color: colors.textLight }]}>{lang.description}</Text>
                </View>
                <Text style={[styles.arrow, { color: colors.border }]}>❯</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 16 },
  progressBarBg: { height: 12, borderRadius: 6, backgroundColor: '#E5E5E5', overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 6 },
  content: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: '900', marginBottom: 24, textAlign: 'center', marginTop: 10 },
  scrollContent: { paddingBottom: 40 },
  langCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 16,
    borderBottomWidth: 4, // 3D effect
  },
  flagEmoji: { fontSize: 40, marginRight: 16 },
  langInfo: { flex: 1 },
  langTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  langDesc: { fontSize: 14 },
  arrow: { fontSize: 24, fontWeight: 'bold' },
});

export default LanguageSelectionScreen;
