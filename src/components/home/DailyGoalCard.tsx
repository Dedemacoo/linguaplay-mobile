import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface DailyGoalCardProps {
  colors: any;
  dailyXp: number;
  xpAnim: Animated.Value;
  dailyGoal: number;
}

export const DailyGoalCard: React.FC<DailyGoalCardProps> = ({
  colors,
  dailyXp,
  xpAnim,
  dailyGoal
}) => {
  const width = xpAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={[styles.challengeCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.2)']} style={styles.cardGradient} />
      <View style={styles.cardHeader}>
        <Text style={{ fontSize: 22 }}>🎯</Text>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Günlük Hedef</Text>
        <Text style={[styles.cardReward, { color: colors.accent }]}>+50 💎</Text>
      </View>
      <View style={styles.cardBarBg}>
        <Animated.View style={[styles.cardBarFill, { width, backgroundColor: colors.primary }]} />
      </View>
      <Text style={[styles.cardFooterText, { color: colors.textSub }]}>
        {dailyGoal - dailyXp > 0 ? `${dailyGoal - dailyXp} XP kaldı` : 'Hedef Tamamlandı!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  challengeCard: {
    borderRadius: 20,
    padding: 16,
    overflow: 'hidden',
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 10,
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
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
  },
  cardReward: {
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
    borderRadius: 4,
  },
  cardFooterText: {
    fontSize: 13,
    fontWeight: '700',
  },
});
