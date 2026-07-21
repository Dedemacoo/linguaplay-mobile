import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { STREAK_EMOJIS } from './constants';
import { LanguageKey } from '../../store/useLanguageStore';

export const LANG_FLAGS: Record<LanguageKey, string> = {
  english: '🇬🇧', turkish: '🇹🇷', kurdish: '🇬🇭', french: '🇫🇷',
  spanish: '🇪🇸', german: '🇩🇪', italian: '🇮🇹', japanese: '🇯🇵',
  korean: '🇰🇷', russian: '🇷🇺', chinese: '🇨🇳', arabic: '🇸🇦',
  portuguese: '🇧🇷', dutch: '🇳🇱',
};

export const LANG_LABELS: Record<LanguageKey, string> = {
  english: 'İngilizce', turkish: 'Türkçe', kurdish: 'Kürtçe', french: 'Fransızca',
  spanish: 'İspanyolca', german: 'Almanca', italian: 'İtalyanca', japanese: 'Japonca',
  korean: 'Korece', russian: 'Rusça', chinese: 'Çince', arabic: 'Arapça',
  portuguese: 'Portekizce', dutch: 'Felemenkçe',
};

interface DashboardProps {
  colors: any;
  streak: number;
  gems: number;
  hearts: number;
  activeUnitIndex: number;
  activeLanguage: LanguageKey;
  onLangPress: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  colors,
  streak,
  gems,
  hearts,
  activeUnitIndex,
  activeLanguage,
  onLangPress
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.dashboard, { backgroundColor: colors.bg, paddingTop: insets.top + 10, paddingBottom: 10 }]}>
      <View style={styles.topBar}>
        <View style={styles.flagAvatarRow}>
          <TouchableOpacity onPress={onLangPress}>
            <Text style={{ fontSize: 28, marginLeft: 10 }}>{LANG_FLAGS[activeLanguage] || '🌍'}</Text>
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
            <Text style={[styles.statValue, { color: colors.streak }]}>{streak}</Text>
          </View>
          <View style={styles.statPill}>
            <Image source={require('../../../assets/icons/lingo_coin.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
            <Text style={[styles.statValue, { color: colors.accent }]}>{gems}</Text>
          </View>
          <View style={styles.statPill}>
            <Text style={{ fontSize: 16 }}>❤️</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{hearts}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    paddingHorizontal: 16,
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
  },
});
