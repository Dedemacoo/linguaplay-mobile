import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import * as Haptics from 'expo-haptics';

const { width } = Dimensions.get('window');

const SpeakingResultScreen: React.FC<any> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const { avgScore = 0, xpEarned = 0, totalWords = 0 } = route.params || {};

  const getGrade = () => {
    if (avgScore >= 90) return { emoji: '🌟', title: 'Mükemmel!', color: '#22C55E', desc: 'Telaffuzun harika!' };
    if (avgScore >= 70) return { emoji: '👏', title: 'İyi İş!', color: '#F59E0B', desc: 'Biraz daha pratik ile mükemmelleşecek!' };
    if (avgScore >= 50) return { emoji: '💪', title: 'Fena Değil', color: '#F97316', desc: 'Pratik yapmaya devam et!' };
    return { emoji: '🔄', title: 'Tekrar Dene', color: '#EF4444', desc: 'Her deneme seni ileriye taşır!' };
  };

  const grade = getGrade();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={{ fontSize: 80 }}>{grade.emoji}</Text>
        <Text style={[styles.title, { color: grade.color }]}>{grade.title}</Text>
        <Text style={[styles.desc, { color: colors.textLight }]}>{grade.desc}</Text>

        <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textLight }]}>Ortalama Puan</Text>
            <Text style={[styles.statValue, { color: grade.color }]}>{avgScore}/100</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textLight }]}>Kelime Sayısı</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{totalWords}</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textLight }]}>Kazanılan XP</Text>
            <Text style={[styles.statValue, { color: colors.primary }]}>+{xpEarned} XP ⭐</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.retryBtn, { borderColor: colors.primary }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              navigation.replace('Speaking');
            }}
          >
            <Text style={[styles.retryText, { color: colors.primary }]}>🔄 Tekrar Dene</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.homeBtn, { backgroundColor: colors.primary }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              navigation.navigate('MainTabs');
            }}
          >
            <Text style={styles.homeText}>Ana Sayfa →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, gap: 16 },
  title: { fontSize: 32, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold' },
  desc: { fontSize: 16, textAlign: 'center' },
  statsCard: { width: width - 48, borderRadius: 20, padding: 20, marginTop: 8 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  statLabel: { fontSize: 15, fontWeight: '500' },
  statValue: { fontSize: 18, fontWeight: '800' },
  divider: { height: 1 },
  buttons: { width: width - 48, gap: 12, marginTop: 12 },
  retryBtn: { borderWidth: 2, borderRadius: 16, paddingVertical: 16, alignItems: 'center' },
  retryText: { fontWeight: '700', fontSize: 16 },
  homeBtn: { borderRadius: 16, paddingVertical: 16, alignItems: 'center' },
  homeText: { color: '#FFF', fontWeight: '800', fontSize: 16 },
});

export default SpeakingResultScreen;
