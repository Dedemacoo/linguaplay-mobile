import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'ReasonSelection'>;

const REASONS = [
  { id: 'travel', icon: '✈️', title: 'Seyahat' },
  { id: 'school', icon: '🎓', title: 'Okul / Eğitim' },
  { id: 'brain', icon: '🧠', title: 'Beyin Pratiği' },
  { id: 'career', icon: '💼', title: 'Kariyer' },
  { id: 'culture', icon: '🌍', title: 'Kültür' },
  { id: 'other', icon: '✨', title: 'Diğer' },
];

const ReasonSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleSelectReason = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('GoalSelection');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity 
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: colors.text, fontSize: 24, marginTop: -2 }}>←</Text>
        </TouchableOpacity>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '40%', backgroundColor: colors.primary }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text style={[styles.title, { color: colors.text }]}>Dili neden öğreniyorsun?</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {REASONS.map((reason) => (
            <TouchableOpacity
              key={reason.id}
              style={[styles.reasonCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
              onPress={handleSelectReason}
              activeOpacity={0.8}
            >
              <Text style={styles.reasonIcon}>{reason.icon}</Text>
              <Text style={[styles.reasonTitle, { color: colors.text }]}>{reason.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16 },
  backBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  progressBarBg: { flex: 1, height: 12, borderRadius: 6, backgroundColor: '#E5E5E5', overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 6 },
  content: { flex: 1, paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: '900', marginBottom: 24, textAlign: 'center', marginTop: 10 },
  scrollContent: { paddingBottom: 40, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  reasonCard: {
    width: '48%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 16,
    borderBottomWidth: 4, // 3D effect
  },
  reasonIcon: { fontSize: 40, marginBottom: 12 },
  reasonTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

export default ReasonSelectionScreen;
