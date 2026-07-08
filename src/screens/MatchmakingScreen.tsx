import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { BattleService } from '../services/BattleService';
import { useAuth } from '../context/AuthContext';
import { useLanguageStore } from '../store/useLanguageStore';
import { ContentService } from '../services/ContentService';

type Props = NativeStackScreenProps<RootStackParamList, 'Matchmaking'>;

export const MatchmakingScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { user } = useAuth();
  const { activeLanguage } = useLanguageStore();
  
  const [statusText, setStatusText] = useState('Rakip Aranıyor...');
  const [isCanceled, setIsCanceled] = useState(false);

  useEffect(() => {
    let mounted = true;

    const startMatchmaking = async () => {
      if (!user) return;
      
      try {
        // Fetch all questions to build a pool
        const lessons = await ContentService.getAllLessonsData(activeLanguage);
        const questionsPool = lessons.flatMap(l => l.questions).filter(q => q && q.type !== 'flashcard'); // filter out flashcards for duel

        const userProfile = {
          uid: user.uid,
          name: user.displayName || 'Oyuncu',
          avatar: '🧑‍💻' // Could fetch from context if available
        };

        const battleId = await BattleService.findOrCreateMatch(
          userProfile,
          questionsPool,
          (matchedBattleId) => {
            if (mounted && !isCanceled) {
              setStatusText('Rakip Bulundu! Hazırlanıyor...');
              setTimeout(() => {
                navigation.replace('QuizBattle', { battleId: matchedBattleId } as any); // params updated below
              }, 1500);
            }
          },
          () => {
            if (mounted && !isCanceled) {
              setStatusText('Rakip bulunamadı. Lütfen tekrar dene.');
            }
          }
        );

      } catch (e) {
        console.error('Matchmaking error:', e);
        if (mounted) setStatusText('Bir hata oluştu.');
      }
    };

    startMatchmaking();

    return () => {
      mounted = false;
      setIsCanceled(true);
      // Ideally, if user cancels, we should remove them from the queue in Firestore if they are waiting
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.primary }]}>DÜELLO</Text>
        
        {statusText === 'Rakip Aranıyor...' && (
          <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
        )}

        <Text style={[styles.status, { color: colors.text }]}>{statusText}</Text>
        
        <TouchableOpacity 
          style={[styles.cancelBtn, { borderColor: colors.border }]} 
          onPress={() => {
            setIsCanceled(true);
            navigation.goBack();
          }}
        >
          <Text style={[styles.cancelText, { color: colors.textLight }]}>İptal Et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MatchmakingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 40,
    letterSpacing: 2,
  },
  loader: {
    marginBottom: 20,
    transform: [{ scale: 1.5 }],
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  cancelBtn: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 1,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
  }
});
