import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { BattleService, BattleState } from '../services/BattleService';
import SoundManager from '../utils/SoundManager';

import * as Haptics from 'expo-haptics';
type Props = NativeStackScreenProps<RootStackParamList, 'QuizBattle'>;

const { width } = Dimensions.get('window');

const QuizBattleScreen: React.FC<Props> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const { battleId } = route.params as any;
  const { addGems  } = useProgressStore();
  const { user } = useAuth();

  const [battle, setBattle] = useState<BattleState | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [gameTimeLeft, setGameTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const [rewardGiven, setRewardGiven] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isStarted, setIsStarted] = useState(false);
  const [flash, setFlash] = useState<null | 'correct' | 'wrong'>(null);
  const [hasPlayedCountdown, setHasPlayedCountdown] = useState(false);

  const timerRef = useRef<any>(null);
  const flashAnim = useRef(new Animated.Value(0)).current;

  // --- Determine which player I am ---
  const isPlayer1 = battle?.player1?.uid === user?.uid;
  const myScore = battle ? (isPlayer1 ? battle.player1.score : battle.player2?.score ?? 0) : 0;
  const opponentScore = battle ? (isPlayer1 ? battle.player2?.score ?? 0 : battle.player1.score) : 0;
  const myName = battle ? (isPlayer1 ? battle.player1.name : battle.player2?.name ?? '???') : '...';
  const opponentName = battle ? (isPlayer1 ? battle.player2?.name ?? 'Bekleniyor...' : battle.player1.name) : '...';
  const opponentAvatar = battle ? (isPlayer1 ? battle.player2?.avatar ?? '⏳' : battle.player1.avatar) : '⏳';

  const questions = battle?.questions || [];
  const currentQ = questions[currentQIndex];

  // --- Subscribe to Firestore real-time battle state ---
  useEffect(() => {
    if (!battleId) return;
    const unsub = BattleService.listenToBattle(battleId, (state) => {
      setBattle(state);
      if (state.status === 'finished' && !isFinished) {
        setIsFinished(true);
      }
    });
    return () => unsub();
  }, [battleId]);

  // --- Countdown before game starts ---
  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(t);
    } else if (!isStarted) {
      setIsStarted(true);
    }
  }, [countdown]);

  // --- Sync timer with server endTime ---
  useEffect(() => {
    if (!isStarted || isFinished || !battle?.endTime) return;

    const tick = () => {
      const remaining = Math.max(0, Math.ceil((battle.endTime! - Date.now()) / 1000));
      setGameTimeLeft(remaining);
      if (remaining <= 0) {
        setIsFinished(true);
        BattleService.finishBattle(battleId);
      }
    };

    timerRef.current = setInterval(tick, 500);
    return () => clearInterval(timerRef.current);
  }, [isStarted, isFinished, battle?.endTime]);

  useEffect(() => {
    if (gameTimeLeft <= 10 && gameTimeLeft > 0 && !hasPlayedCountdown) {
      SoundManager.playCountdown();
      setHasPlayedCountdown(true);
    }
    if (gameTimeLeft > 10 && hasPlayedCountdown) {
      setHasPlayedCountdown(false);
    }
  }, [gameTimeLeft, hasPlayedCountdown]);

  // --- Reward on finish ---
  useEffect(() => {
    if (isFinished && !rewardGiven) {
      if (myScore > opponentScore) addGems(10);
      setRewardGiven(true);
    }
  }, [isFinished, myScore, opponentScore, rewardGiven]);

  const triggerFlash = (type: 'correct' | 'wrong') => {
    setFlash(type);
    Animated.sequence([
      Animated.timing(flashAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      Animated.timing(flashAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start(() => setFlash(null));
  };

  const handleOptionPress = async (option: string) => {
    if (isAnswered || !currentQ || isFinished) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const correct = option === currentQ.options[currentQ.correctIndex];
    triggerFlash(correct ? 'correct' : 'wrong');

    if (correct) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      SoundManager.playCorrect();
      const playerNum = isPlayer1 ? 1 : 2;
      await BattleService.updateScore(battleId, playerNum, 20);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      SoundManager.playWrong();
    }

    setTimeout(() => {
      setCurrentQIndex(i => (i + 1) % questions.length);
      setSelectedOption(null);
      setIsAnswered(false);
    }, 800);
  };

  // --- Countdown screen ---
  if (!isStarted || (battle?.status === 'waiting') || !battle?.player2) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]}>
        <View style={styles.center}>
          <Text style={styles.vsText}>DÜELLO BAŞLIYOR</Text>
          <View style={styles.playersContainer}>
            <View style={styles.player}>
              <Text style={styles.avatar}>🧑‍💻</Text>
              <Text style={styles.playerName}>{myName}</Text>
            </View>
            <Text style={styles.vsBadge}>VS</Text>
            <View style={styles.player}>
              <Text style={styles.avatar}>{opponentAvatar}</Text>
              <Text style={styles.playerName}>{opponentName}</Text>
            </View>
          </View>
          {battle?.status === 'waiting' ? (
            <Text style={styles.countdown}>Rakip Bekleniyor...</Text>
          ) : (
            <Text style={styles.countdown}>{countdown || '⚡ HAZIR!'}</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }

  // --- Result screen ---
  if (isFinished) {
    const iWon = myScore > opponentScore;
    const isDraw = myScore === opponentScore;
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        {iWon && <ConfettiCannon count={150} origin={{ x: width / 2, y: 0 }} fallSpeed={2500} fadeOut />}
        <View style={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{isDraw ? '🤝' : iWon ? '🏆' : '😔'}</Text>
          <Text style={[styles.resultTitle, { color: colors.text }]}>
            {isDraw ? 'Berabere!' : iWon ? 'Kazandın!' : 'Kaybettin!'}
          </Text>

          <View style={styles.scoreBoard}>
            <View style={styles.scoreCol}>
              <Text style={[styles.scoreName, { color: colors.text }]}>{myName} (Sen)</Text>
              <Text style={[styles.scoreVal, { color: iWon ? '#58CC02' : colors.error }]}>{myScore}</Text>
            </View>
            <Text style={[styles.scoreDash, { color: colors.textLight }]}>–</Text>
            <View style={styles.scoreCol}>
              <Text style={[styles.scoreName, { color: colors.text }]}>{opponentName}</Text>
              <Text style={[styles.scoreVal, { color: !iWon && !isDraw ? '#58CC02' : colors.error }]}>{opponentScore}</Text>
            </View>
          </View>

          {iWon && (
            <View style={[styles.gemReward, { backgroundColor: colors.surface }]}>
              <Text style={{ fontSize: 24 }}>💎</Text>
              <Text style={[styles.gemText, { color: colors.primary }]}>+10 Elmas Kazandın!</Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.doneBtn, { backgroundColor: colors.primary }]}
            onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs')}
          >
            <Text style={styles.doneBtnText}>TAMAM</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // --- Game screen ---
  const bgFlash = flash === 'correct' ? '#58CC0220' : flash === 'wrong' ? '#FF4B4B20' : 'transparent';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: bgFlash, opacity: flashAnim }]} pointerEvents="none" />

      {/* Top bar: scores + timer */}
      <View style={[styles.topBar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        {/* My score */}
        <View style={styles.scoreBlock}>
          <Text style={[styles.scoreLabel, { color: colors.textLight }]}>Sen</Text>
          <Text style={[styles.scoreNum, { color: colors.primary }]}>{myScore}</Text>
        </View>

        {/* Timer */}
        <View style={[styles.timerBox, { backgroundColor: gameTimeLeft <= 10 ? colors.error : colors.primary }]}>
          <Text style={styles.timerText}>{gameTimeLeft}s</Text>
        </View>

        {/* Opponent score */}
        <View style={styles.scoreBlock}>
          <Text style={[styles.scoreLabel, { color: colors.textLight }]}>{opponentName}</Text>
          <Text style={[styles.scoreNum, { color: colors.error }]}>{opponentScore}</Text>
        </View>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
        {currentQ && (
          <>
            <Text style={[styles.questionText, { color: colors.text }]}>{currentQ.prompt}</Text>
            <View style={styles.optionsGrid}>
              {(currentQ.options || []).map((opt: string, i: number) => {
                const isSelected = selectedOption === opt;
                const isCorrect = currentQ.correctIndex === i;
                let bg = colors.surface;
                let borderC = colors.border;
                if (isAnswered && isSelected) {
                  bg = isCorrect ? '#58CC0230' : '#FF4B4B30';
                  borderC = isCorrect ? '#58CC02' : '#FF4B4B';
                }
                return (
                  <TouchableOpacity
                    key={i}
                    style={[styles.optionBtn, { backgroundColor: bg, borderColor: borderC }]}
                    onPress={() => handleOptionPress(opt)}
                    activeOpacity={0.7}
                    disabled={isAnswered}
                  >
                    <Text style={[styles.optionText, { color: colors.text }]}>{opt}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  vsText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', letterSpacing: 2, marginBottom: 30 },
  playersContainer: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 40 },
  player: { alignItems: 'center', gap: 8 },
  avatar: { fontSize: 48 },
  playerName: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  vsBadge: { color: '#FFFFFF', fontSize: 28, fontWeight: '900' },
  countdown: { color: '#FFFFFF', fontSize: 64, fontWeight: '900' },
  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1,
  },
  scoreBlock: { alignItems: 'center', minWidth: 80 },
  scoreLabel: { fontSize: 12, marginBottom: 2 },
  scoreNum: { fontSize: 24, fontWeight: '900' },
  timerBox: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  timerText: { color: '#FFF', fontSize: 20, fontWeight: '900' },
  questionContainer: { flex: 1, padding: 20, justifyContent: 'center' },
  questionText: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: 30, lineHeight: 26 },
  optionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center' },
  optionBtn: {
    width: (width - 52) / 2, paddingVertical: 18, paddingHorizontal: 10,
    borderRadius: 16, borderWidth: 2, alignItems: 'center', justifyContent: 'center',
    minHeight: 70,
  },
  optionText: { fontSize: 15, fontWeight: '600', textAlign: 'center' },
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  resultEmoji: { fontSize: 80, marginBottom: 16 },
  resultTitle: { fontSize: 32, fontWeight: '900', marginBottom: 30 },
  scoreBoard: { flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 24 },
  scoreCol: { alignItems: 'center' },
  scoreName: { fontSize: 14, marginBottom: 4 },
  scoreVal: { fontSize: 40, fontWeight: '900' },
  scoreDash: { fontSize: 28, fontWeight: '300' },
  gemReward: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, borderRadius: 16, marginBottom: 32 },
  gemText: { fontSize: 18, fontWeight: '700' },
  doneBtn: { paddingVertical: 16, paddingHorizontal: 60, borderRadius: 30 },
  doneBtnText: { color: '#FFF', fontSize: 18, fontWeight: '900', letterSpacing: 1 },
});

export default QuizBattleScreen;
