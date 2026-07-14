import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { BRAND } from '../theme/colors';
import { BattleService } from '../services/BattleService';
import { useAuth } from '../context/AuthContext';
import { useLanguageStore } from '../store/useLanguageStore';
import { ContentService } from '../services/ContentService';
import { Mascot } from '../components/Mascot';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Matchmaking'>;

export const MatchmakingScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const { user } = useAuth();
  const { activeLanguage } = useLanguageStore();
  
  const [statusText, setStatusText] = useState('Rakip Aranıyor...');
  const [isCanceled, setIsCanceled] = useState(false);
  const [matchFailed, setMatchFailed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const startMatchmaking = async () => {
      if (!user) return;
      
      try {
        const lessons = await ContentService.getAllLessonsData(activeLanguage);
        const questionsPool = lessons.flatMap(l => l.questions).filter(q => q && q.type !== 'flashcard');

        const userProfile = {
          uid: user.uid,
          name: user.displayName || 'Oyuncu',
          avatar: '🧑‍💻'
        };

        const battleId = await BattleService.findOrCreateMatch(
          userProfile,
          questionsPool,
          (matchedBattleId) => {
            if (mounted && !isCanceled) {
              setStatusText('Rakip Bulundu! Hazırlanıyor...');
              setTimeout(() => {
                navigation.replace('QuizBattle', { battleId: matchedBattleId } as any);
              }, 1500);
            }
          },
          () => {
            if (mounted && !isCanceled) {
              setStatusText('Rakip bulunamadı. Lütfen tekrar dene.');
              setMatchFailed(true);
            }
          }
        );

      } catch (e) {
        console.error('Matchmaking error:', e);
        if (mounted) {
          setStatusText('Bir hata oluştu.');
          setMatchFailed(true);
        }
      }
    };

    startMatchmaking();

    return () => {
      mounted = false;
      setIsCanceled(true);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>DÜELLO</Text>
        
        <View style={styles.mascotContainer}>
          <Mascot size={150} />
        </View>

        {statusText === 'Rakip Aranıyor...' && (
          <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
        )}

        <Text style={styles.status}>{statusText}</Text>
        
        <TouchableOpacity 
          style={styles.cancelBtn} 
          onPress={() => {
            setIsCanceled(true);
            navigation.goBack();
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.cancelText}>{matchFailed ? 'Geri Dön' : 'İptal Et'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MatchmakingScreen;

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 40,
    letterSpacing: 2,
    color: colors.error,
    textShadowColor: 'rgba(255, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  mascotContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    marginBottom: 30,
    shadowColor: colors.error,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  loader: {
    marginBottom: 20,
    transform: [{ scale: 1.5 }],
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    color: colors.text,
    fontWeight: '700',
  },
  cancelBtn: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  cancelText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textLight,
  }
});
