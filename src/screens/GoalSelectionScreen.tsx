import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'GoalSelection'>;

const GOALS = [
  { id: 'relaxed', title: 'Rahat', desc: 'Günde 5 dk', icon: '☕' },
  { id: 'normal', title: 'Normal', desc: 'Günde 10 dk', icon: '🚶' },
  { id: 'serious', title: 'Ciddi', desc: 'Günde 15 dk', icon: '🏃' },
  { id: 'intense', title: 'Çılgın', desc: 'Günde 20 dk', icon: '🔥' },
];

const GoalSelectionScreen: React.FC<Props> = ({ navigation }) => {
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

  const handleSelectGoal = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('PathSelection');
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
          <View style={[styles.progressBarFill, { width: '60%', backgroundColor: colors.primary }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text style={[styles.title, { color: colors.text }]}>Günlük hedefin nedir?</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {GOALS.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[styles.goalCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
              onPress={handleSelectGoal}
              activeOpacity={0.8}
            >
              <Text style={styles.goalIcon}>{goal.icon}</Text>
              <View style={styles.goalInfo}>
                <Text style={[styles.goalTitle, { color: colors.text }]}>{goal.title}</Text>
                <Text style={[styles.goalDesc, { color: colors.textLight }]}>{goal.desc}</Text>
              </View>
              <Text style={[styles.arrow, { color: colors.border }]}>❯</Text>
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
  scrollContent: { paddingBottom: 40 },
  goalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 16,
    borderBottomWidth: 4, // 3D effect
  },
  goalIcon: { fontSize: 32, marginRight: 16 },
  goalInfo: { flex: 1 },
  goalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  goalDesc: { fontSize: 16 },
  arrow: { fontSize: 24, fontWeight: 'bold' },
});

export default GoalSelectionScreen;
