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
import { useProgressStore } from '../store/useProgressStore';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'Matchmaking'>;

export const MatchmakingScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const { user } = useAuth();
  const { activeLanguage } = useLanguageStore();
  const { progress } = useProgressStore();
  
  const [statusText, setStatusText] = useState('Rakip Aranıyor...');
  const [isCanceled, setIsCanceled] = useState(false);
  const [matchFailed, setMatchFailed] = useState(false);
  const activeBattleId = React.useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const startMatchmaking = async () => {
      if (!user) return;
      
      if (!progress.isPremium) {
        const today = new Date().toISOString().split('T')[0];
        const key = `@quiz_battle_usage_${today}`;
        const usedStr = await AsyncStorage.getItem(key);
        const used = usedStr ? parseInt(usedStr, 10) : 0;
        if (used >= 3) {
          Alert.alert(
            'Günlük Limit Doldu',
            'Bugünlük ücretsiz savaş hakkınız bitti. Sınırsız savaş için Premium\'a geçebilir veya haklarınızı yenilemek için 2 reklam izleyebilirsiniz.',
            [
              { text: 'Vazgeç', style: 'cancel', onPress: () => navigation.goBack() },
              { text: 'Reklam İzle (Hak Sıfırla)', onPress: () => {
                  import('../services/AdService').then(({ AdService }) => {
                    AdService.showRewarded(async () => {
                      const adKey = `@quiz_ad_reset_${today}`;
                      const cStr = await AsyncStorage.getItem(adKey);
                      let c = cStr ? parseInt(cStr, 10) : 0;
                      c += 1;
                      if (c >= 2) {
                        await AsyncStorage.setItem(key, '0');
                        await AsyncStorage.setItem(adKey, '0');
                        Alert.alert('Tebrikler!', 'Savaş hakkınız sıfırlandı, yeniden eşleşme arayabilirsiniz!', [{ text: 'Tamam', onPress: () => navigation.goBack() }]);
                      } else {
                        await AsyncStorage.setItem(adKey, c.toString());
                        Alert.alert('Harika!', `Sıfırlama için son ${2 - c} reklam kaldı. Yeniden tıklayınız.`, [{ text: 'Tamam', onPress: () => navigation.goBack() }]);
                      }
                    }, () => navigation.goBack());
                  });
              }},
              { text: 'Premium\'a Geç', onPress: () => { navigation.goBack(); navigation.navigate('Premium' as never); } }
            ]
          );
          return;
        }
        await AsyncStorage.setItem(key, (used + 1).toString());
      }
      
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
        
        activeBattleId.current = battleId;

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
      if (activeBattleId.current) {
        BattleService.cancelMatch(activeBattleId.current);
      }
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
            if (activeBattleId.current) {
              BattleService.cancelMatch(activeBattleId.current);
            }
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
