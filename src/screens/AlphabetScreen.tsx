import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { alphabetData } from '../data/alphabetData';
import { TTSAudioService } from '../services/AudioService';

type Props = NativeStackScreenProps<RootStackParamList, 'Alphabet'>;

const AlphabetScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  
  const currentAlphabet = alphabetData[activeLanguage] || alphabetData['english'];

  const playSound = (text: string) => {
    const langMap: Record<string, string> = {
      english: 'en-US', spanish: 'es-ES', french: 'fr-FR', german: 'de-DE',
      italian: 'it-IT', turkish: 'tr-TR', kurdish: 'tr-TR'
    };
    TTSAudioService.play(text, langMap[activeLanguage] || 'en-US');
  };

  const getLanguageName = (lang: string) => {
    switch (lang) {
      case 'turkish': return 'Türkçe';
      case 'kurdish': return 'Kürtçe (Kurmancî)';
      case 'english': return 'İngilizce';
      case 'spanish': return 'İspanyolca';
      case 'french': return 'Fransızca';
      case 'german': return 'Almanca';
      case 'italian': return 'İtalyanca';
      default: return 'Alfabe';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArea}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{getLanguageName(activeLanguage)} Alfabe</Text>
          <Text style={styles.headerSub}>{currentAlphabet.length} Harf</Text>
        </View>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        <Text style={[styles.tip, { color: colors.textLight, backgroundColor: colors.surface }]}>
          🔊 Bir harfe dokun ve okunuşunu duy!
        </Text>

        {currentAlphabet.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => playSound(item.letter)}
            activeOpacity={0.7}
          >
            <View style={[styles.letterBadge, { backgroundColor: colors.primary + '20' }]}>
              <Text style={[styles.letter, { color: colors.primary }]}>{item.letter}</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={[styles.sound, { color: colors.text }]}>Ses: /{item.sound}/</Text>
              {item.example && (
                <Text style={[styles.example, { color: colors.textLight }]}>Örnek: {item.example}</Text>
              )}
            </View>
            <Text style={styles.speakerIcon}>🔊</Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 55,
    paddingHorizontal: 15,
    paddingBottom: 18,
  },
  backArea: {
    width: 44,
    alignItems: 'flex-start',
  },
  backBtn: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
  },
  headerSub: {
    fontSize: 13,
    color: '#FFF',
    opacity: 0.85,
    marginTop: 2,
  },
  grid: {
    padding: 12,
  },
  tip: {
    textAlign: 'center',
    fontSize: 14,
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
    fontWeight: '600',
    overflow: 'hidden',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderBottomWidth: 3,
    marginBottom: 10,
  },
  letterBadge: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  cardInfo: {
    flex: 1,
  },
  sound: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 3,
  },
  example: {
    fontSize: 13,
  },
  speakerIcon: {
    fontSize: 20,
  },
});

export default AlphabetScreen;
