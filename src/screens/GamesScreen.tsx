import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  Animated, Platform, StatusBar, Dimensions, TextInput,
  ActivityIndicator, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { VocabularyService, WordPair } from '../services/VocabularyService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import SoundManager from '../utils/SoundManager';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

const { width } = Dimensions.get('window');

const WEEK_QUIZ_KEY = '@lingum_weekly_quiz_v2_';
const LANG_LABELS: Record<string, string> = {
  kurdish: 'Kürtçe', english: 'İngilizce', french: 'Fransızca',
  spanish: 'İspanyolca', german: 'Almanca', turkish: 'Türkçe',
};
const LANG_FLAGS: Record<string, string> = {
  kurdish: '☀️', english: '🇬🇧', french: '🇫🇷',
  spanish: '🇪🇸', german: '🇩🇪', turkish: '🇹🇷',
};
const LANG_CODES: Record<string, string> = {
  english: 'en-US', french: 'fr-FR', spanish: 'es-ES',
  german: 'de-DE', kurdish: 'tr-TR', turkish: 'tr-TR',
};

// ─── Kategori Seçici ─────────────────────────────────────────────────────────
const CategoryPicker: React.FC<{
  selected: string;
  onSelect: (cat: string) => void;
  colors: any;
}> = ({ selected, onSelect, colors }) => {
  const categories = VocabularyService.getCategories();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingVertical: 4 }}>
      {categories.map(cat => (
        <TouchableOpacity
          key={cat.id}
          style={[
            styles.catChip,
            { backgroundColor: selected === cat.id ? colors.primary : colors.surface, borderColor: selected === cat.id ? colors.primary : colors.border },
          ]}
          onPress={() => onSelect(cat.id)}
        >
          <Text style={{ fontSize: 16 }}>{cat.icon}</Text>
          <Text style={[styles.catChipText, { color: selected === cat.id ? '#FFF' : colors.text }]}>{cat.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// ─── Kart Eşleştirme ─────────────────────────────────────────────────────────
const CardMatchGame: React.FC<{ lang: string; category: string; colors: any; onExit: () => void }> = ({ lang, category, colors, onExit }) => {
  const [cards, setCards] = useState<{ id: string; text: string; pairId: string; isNative: boolean; flipped: boolean; matched: boolean }[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pairs, setPairs] = useState<WordPair[]>([]);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const p = await VocabularyService.getWordPairs(lang, category, 8);
      setPairs(p);
      const cardList = p.flatMap((pair, i) => [
        { id: `n${i}`, text: pair.turkish, pairId: `p${i}`, isNative: true, flipped: false, matched: false },
        { id: `f${i}`, text: pair.foreign, pairId: `p${i}`, isNative: false, flipped: false, matched: false },
      ]).sort(() => Math.random() - 0.5);
      setCards(cardList);
      setIsLoading(false);
    })();
  }, [lang, category]);

  useEffect(() => {
    if (isLoading || gameOver) return;
    timerRef.current = setInterval(() => setTimeLeft(t => {
      if (t <= 1) { clearInterval(timerRef.current); setGameOver(true); return 0; }
      return t - 1;
    }), 1000);
    return () => clearInterval(timerRef.current);
  }, [isLoading, gameOver]);

  // 15. saniyede geri sayım sesini çal
  useEffect(() => {
    if (timeLeft === 15) {
      SoundManager.init().then(() => SoundManager.playCountdown());
    }
  }, [timeLeft]);

  useEffect(() => {
    if (gameOver) {
      SoundManager.stopCountdown();
    }
  }, [gameOver]);

  useEffect(() => {
    return () => {
      SoundManager.stopCountdown();
    };
  }, []);

  const flipCard = useCallback((cardId: string) => {
    if (selected.length >= 2) return;
    const card = cards.find(c => c.id === cardId);
    if (!card || card.flipped || card.matched) return;
    Haptics.selectionAsync();

    const newSelected = [...selected, cardId];
    setCards(prev => prev.map(c => c.id === cardId ? { ...c, flipped: true } : c));
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves(m => m + 1);
      const [aCard, bCard] = newSelected.map(id => cards.find(c => c.id === id)!);
      if (aCard?.pairId === bCard?.pairId && aCard?.id !== bCard?.id) {
        setTimeout(() => {
          setCards(prev => prev.map(c => newSelected.includes(c.id) ? { ...c, matched: true } : c));
          setSelected([]);
          setMatchedCount(p => {
            const next = p + 1;
            if (next >= pairs.length) { clearInterval(timerRef.current); setWon(true); setGameOver(true); }
            return next;
          });
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }, 350);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => newSelected.includes(c.id) ? { ...c, flipped: false } : c));
          setSelected([]);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }, 800);
      }
    }
  }, [cards, selected, pairs.length]);

  if (isLoading) return (
    <View style={[styles.loadingBox, { backgroundColor: colors.background }]}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={[styles.loadingText, { color: colors.textLight }]}>Kelimeler yükleniyor...</Text>
    </View>
  );

  if (gameOver) return (
    <View style={[styles.gameOver, { backgroundColor: colors.background }]}>
      <Text style={{ fontSize: 64 }}>{won ? '🎉' : '⏰'}</Text>
      <Text style={[styles.gameOverTitle, { color: colors.text }]}>{won ? 'Harika!' : 'Süre Doldu!'}</Text>
      <Text style={[styles.gameOverSub, { color: colors.textLight }]}>{matchedCount}/{pairs.length} çift · {moves} hamle</Text>
      <TouchableOpacity style={[styles.exitBtn, { backgroundColor: colors.primary }]} onPress={onExit}>
        <Text style={styles.exitBtnText}>Oyunlara Dön</Text>
      </TouchableOpacity>
    </View>
  );

  // Hesaplama: 16px sol/sağ padding (32px), 8px boşluklar (3x8=24px).
  const cardW = Math.floor((width - 32 - 24) / 4);
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.gameTopBar}>
        <View style={[styles.statPill, { backgroundColor: colors.primary + '20' }]}>
          <Text style={[styles.statPillText, { color: colors.primary }]}>🎯 {matchedCount}/{pairs.length}</Text>
        </View>
        <View style={[styles.statPill, { backgroundColor: timeLeft <= 5 ? colors.error + '20' : timeLeft <= 15 ? '#FFC80020' : colors.surface }]}>
          <Text style={[styles.statPillText, { color: timeLeft <= 5 ? colors.error : timeLeft <= 15 ? '#FFC800' : colors.text, fontWeight: '800' }]}>⏱ {timeLeft}s</Text>
        </View>
        <View style={[styles.statPill, { backgroundColor: colors.surface }]}>
          <Text style={[styles.statPillText, { color: colors.text }]}>👟 {moves}</Text>
        </View>
      </View>
      <View style={styles.cardGrid}>
        {cards.map(card => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.cardTile,
              {
                width: cardW,
                height: cardW * 1.1,
                backgroundColor: card.matched
                  ? colors.success + '25'
                  : card.flipped
                    ? (card.isNative ? colors.primary + '20' : colors.secondary + '20')
                    : colors.surface,
                borderColor: card.matched
                  ? colors.success
                  : card.flipped
                    ? (card.isNative ? colors.primary : colors.secondary)
                    : colors.border,
                borderBottomWidth: card.matched ? 3 : 2,
              },
            ]}
            onPress={() => flipCard(card.id)}
            disabled={card.matched || (card.flipped && !selected.includes(card.id))}
          >
            {card.flipped || card.matched ? (
              <Text style={[styles.cardTileText, { color: card.matched ? colors.success : colors.text }]} numberOfLines={2}>
                {card.text}
              </Text>
            ) : (
              <Text style={{ fontSize: 26 }}>?</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.cardLegend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
          <Text style={[styles.legendText, { color: colors.textLight }]}>Türkçe</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: colors.secondary }]} />
          <Text style={[styles.legendText, { color: colors.textLight }]}>{LANG_LABELS[lang]}</Text>
        </View>
      </View>
    </View>
  );
};

// ─── Dinleme Oyunu ────────────────────────────────────────────────────────────
const ListeningGame: React.FC<{ lang: string; category: string; colors: any; onExit: () => void }> = ({ lang, category, colors, onExit }) => {
  const [pairs, setPairs] = useState<WordPair[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120);
  const timerRef = useRef<any>(null);
  const TOTAL = 10;

  useEffect(() => {
    (async () => {
      const p = await VocabularyService.getWordPairs(lang, category, TOTAL);
      setPairs(p);
      setIsLoading(false);
    })();
  }, [lang, category]);

  useEffect(() => {
    if (isLoading || isFinished) return;
    timerRef.current = setInterval(() => setTimeLeft(t => {
      if (t <= 1) { clearInterval(timerRef.current); setIsFinished(true); return 0; }
      return t - 1;
    }), 1000);
    return () => clearInterval(timerRef.current);
  }, [isLoading, isFinished]);

  const current = pairs[currentIdx];

  const speakCurrent = useCallback(() => {
    if (!current?.foreign) return;
    Speech.stop();
    // Use default rate to prevent audio crackling/artifacts on Android
    setTimeout(() => Speech.speak(current.foreign, { language: LANG_CODES[lang] || 'en-US', pitch: 1.0 }), 100);
  }, [current, lang]);

  useEffect(() => { if (!isLoading && current) speakCurrent(); }, [currentIdx, isLoading]);

  const checkAnswer = () => {
    if (!answer.trim() || !current || feedback) return;
    const norm = (s: string) => s.trim().toLowerCase().replace(/[àáâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóôö]/g, 'o').replace(/[ùúûü]/g, 'u');
    const correct = norm(answer) === norm(current.foreign);
    Haptics.notificationAsync(correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error);
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      setFeedback(null);
      setAnswer('');
      if (currentIdx + 1 >= Math.min(pairs.length, TOTAL)) setIsFinished(true);
      else setCurrentIdx(i => i + 1);
    }, 1400);
  };

  if (isLoading) return (
    <View style={[styles.loadingBox, { backgroundColor: colors.background }]}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={[styles.loadingText, { color: colors.textLight }]}>Kelimeler yükleniyor...</Text>
    </View>
  );

  if (isFinished) {
    const pct = Math.round((score / Math.min(pairs.length, TOTAL)) * 100);
    return (
      <View style={[styles.gameOver, { backgroundColor: colors.background }]}>
        <Text style={{ fontSize: 60 }}>{pct >= 70 ? '🏆' : '📚'}</Text>
        <Text style={[styles.gameOverTitle, { color: colors.text }]}>Tamamlandı!</Text>
        <Text style={[styles.gameOverSub, { color: colors.textLight }]}>{score}/{Math.min(pairs.length, TOTAL)} doğru — %{pct}</Text>
        <TouchableOpacity style={[styles.exitBtn, { backgroundColor: colors.primary }]} onPress={onExit}>
          <Text style={styles.exitBtnText}>Oyunlara Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!current) return null;

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.listeningContent, { paddingBottom: 60 }]} keyboardShouldPersistTaps="handled">
      <View style={[styles.listenProgressBar, { backgroundColor: colors.border }]}>
        <View style={[styles.listenProgressFill, { backgroundColor: colors.primary, width: `${(currentIdx / Math.min(pairs.length, TOTAL)) * 100}%` as any }]} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Text style={[styles.listenCounter, { color: colors.textLight, marginBottom: 0 }]}>{currentIdx + 1} / {Math.min(pairs.length, TOTAL)}</Text>
        <View style={[styles.statPill, { backgroundColor: timeLeft <= 15 ? colors.error + '20' : colors.surface, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }]}>
          <Text style={{ color: timeLeft <= 15 ? colors.error : colors.text, fontWeight: 'bold' }}>⏱ {timeLeft}s</Text>
        </View>
      </View>

      <View style={[styles.listenHintBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.listenHintLabel, { color: colors.textLight }]}>Türkçe:</Text>
        <Text style={[styles.listenHintWord, { color: colors.text }]}>{current.turkish}</Text>
      </View>

      <TouchableOpacity style={[styles.speakBtn, { backgroundColor: colors.primary }]} onPress={speakCurrent}>
        <Text style={{ fontSize: 40 }}>🔊</Text>
        <Text style={[styles.speakBtnText]}>Dinle</Text>
      </TouchableOpacity>

      <TextInput
        style={[styles.listenInput, {
          backgroundColor: colors.surface,
          borderColor: feedback === 'correct' ? colors.success : feedback === 'wrong' ? colors.error : colors.border,
          color: colors.text,
        }]}
        value={answer}
        onChangeText={setAnswer}
        placeholder={`${LANG_LABELS[lang]} kelimesini yaz...`}
        placeholderTextColor={colors.textLight}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={checkAnswer}
        editable={!feedback}
      />

      {feedback && (
        <View style={[styles.feedbackBox, { backgroundColor: feedback === 'correct' ? colors.success + '20' : colors.error + '20' }]}>
          <Text style={{ fontSize: 22 }}>{feedback === 'correct' ? '✅' : '❌'}</Text>
          <Text style={{ color: feedback === 'correct' ? colors.success : colors.error, fontWeight: 'bold', fontSize: 15 }}>
            {feedback === 'correct' ? 'Doğru!' : `Yanlış — Cevap: "${current.foreign}"`}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.checkBtn, { backgroundColor: answer.trim() && !feedback ? colors.primary : colors.border }]}
        onPress={checkAnswer}
        disabled={!answer.trim() || !!feedback}
      >
        <Text style={styles.checkBtnText}>Kontrol Et ✓</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// ─── Konuşma Pratiği (Duyduğunu Söyle) ───────────────────────────────────────
const SpeakingGame: React.FC<{ lang: string; category: string; colors: any; onExit: () => void }> = ({ lang, category, colors, onExit }) => {
  const [pairs, setPairs] = useState<WordPair[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [resultState, setResultState] = useState<'idle' | 'correct' | 'wrong' | null>(null);
  const timerRef = useRef<any>(null);

  // STT events — hook düzeyinde çağrılmalı
  useSpeechRecognitionEvent('result', (event) => {
    const text = event.results?.[0]?.transcript || '';
    setTranscript(text);
    if (text) {
      setIsRecording(false);
      ExpoSpeechRecognitionModule.stop();
      evaluateAnswer(text);
    }
  });
  useSpeechRecognitionEvent('error', () => {
    setIsRecording(false);
    setTranscript('');
  });

  useEffect(() => {
    (async () => {
      const p = await VocabularyService.getWordPairs(lang, category, 20);
      setPairs(p);
      setIsLoading(false);
    })();
  }, [lang, category]);

  useEffect(() => {
    if (isLoading || gameOver) return;
    timerRef.current = setInterval(() => setTimeLeft(t => {
      if (t <= 1) { clearInterval(timerRef.current); setGameOver(true); return 0; }
      return t - 1;
    }), 1000);
    return () => clearInterval(timerRef.current);
  }, [isLoading, gameOver]);

  const current = pairs[currentIdx];

  const evaluateAnswer = (spoken: string) => {
    if (!current) return;
    const normalize = (s: string) => s.toLowerCase().trim().replace(/[^a-züğışöç]/g, '');
    const spokenNorm = normalize(spoken);
    const foreignNorm = normalize(current.foreign);
    const isCorrect = spokenNorm.includes(foreignNorm) || foreignNorm.includes(spokenNorm) ||
      (foreignNorm.length > 2 && levenshteinSimilarity(spokenNorm, foreignNorm) > 0.7);

    setResultState(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      setScore(s => s + 1);
      setTimeLeft(t => t + 2);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Speech.speak(current.foreign, { language: LANG_CODES[lang] || 'en-US', rate: 0.8 });
    }
    setTimeout(() => {
      setResultState(null);
      setTranscript('');
      if (currentIdx + 1 >= pairs.length) {
        setGameOver(true);
        clearInterval(timerRef.current);
      } else {
        setCurrentIdx(i => i + 1);
      }
    }, 1400);
  };

  const startRecording = async () => {
    if (isRecording || resultState) return;
    const { status } = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (status !== 'granted') return;
    setTranscript('');
    setIsRecording(true);
    ExpoSpeechRecognitionModule.start({
      lang: LANG_CODES[lang] || 'en-US',
      interimResults: false,
    });
  };

  const stopRecording = () => {
    if (!isRecording) return;
    ExpoSpeechRecognitionModule.stop();
    setIsRecording(false);
  };

  if (isLoading) return (
    <View style={[styles.loadingBox, { backgroundColor: colors.background }]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );

  if (gameOver) return (
    <View style={[styles.gameOver, { backgroundColor: colors.background }]}>
      <Text style={{ fontSize: 60 }}>🗣️</Text>
      <Text style={[styles.gameOverTitle, { color: colors.text }]}>Süre Doldu!</Text>
      <Text style={[styles.gameOverSub, { color: colors.textLight }]}>{score} kelime bildin!</Text>
      <TouchableOpacity style={[styles.exitBtn, { backgroundColor: colors.primary }]} onPress={onExit}>
        <Text style={styles.exitBtnText}>Oyunlara Dön</Text>
      </TouchableOpacity>
    </View>
  );

  if (!current) return null;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 22, alignItems: 'center' }}>
      <View style={[styles.statPill, {
        backgroundColor: timeLeft <= 5 ? colors.error + '20' : timeLeft <= 15 ? '#FFC80020' : colors.surface,
        alignSelf: 'center', marginBottom: 20,
      }]}>
        <Text style={[styles.statPillText, { color: timeLeft <= 5 ? colors.error : timeLeft <= 15 ? '#FFC800' : colors.text, fontSize: 20, fontWeight: '800' }]}>⏱ {timeLeft}s</Text>
      </View>

      <Text style={{ fontSize: 14, color: colors.textLight, marginBottom: 10, textAlign: 'center' }}>Bu kelimeyi {LANG_LABELS[lang]} söyle:</Text>
      <View style={[styles.listenHintBox, { backgroundColor: colors.surface, borderColor: colors.border, paddingVertical: 40, width: '100%' }]}>
        <Text style={[styles.listenHintWord, { color: colors.text, fontSize: 32, textAlign: 'center' }]}>{current.turkish}</Text>
        <TouchableOpacity
          onPress={() => Speech.speak(current.turkish, { language: 'tr-TR', rate: 0.85 })}
          style={{ marginTop: 14, alignSelf: 'center', padding: 8, backgroundColor: colors.primary + '20', borderRadius: 20 }}
        >
          <Text style={{ fontSize: 14, color: colors.primary }}>🔊 Türkçe telaffuzu duy</Text>
        </TouchableOpacity>
      </View>

      {/* Sonuç göstergesi */}
      {resultState && (
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <Text style={{ fontSize: 42 }}>{resultState === 'correct' ? '✅' : '❌'}</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: resultState === 'correct' ? colors.success : colors.error, marginTop: 4 }}>
            {resultState === 'correct' ? 'Harika!' : current.foreign}
          </Text>
        </View>
      )}

      {/* Mikrofon butonu */}
      {!resultState && (
        <View style={{ marginTop: 'auto', width: '100%', alignItems: 'center', gap: 12 }}>
          {transcript !== '' && (
            <Text style={{ color: colors.textLight, fontSize: 14 }}>🎤 "{transcript}"</Text>
          )}
          <TouchableOpacity
            onPressIn={startRecording}
            onPressOut={stopRecording}
            style={{
              width: 80, height: 80, borderRadius: 40,
              backgroundColor: isRecording ? colors.error : colors.primary,
              justifyContent: 'center', alignItems: 'center',
              shadowColor: isRecording ? colors.error : colors.primary,
              shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 16,
              elevation: 12,
            }}
          >
            <Text style={{ fontSize: 32 }}>{isRecording ? '⏹' : '🎤'}</Text>
          </TouchableOpacity>
          <Text style={{ color: colors.textLight, fontSize: 12 }}>
            {isRecording ? 'Dinliyorum... Bırak' : 'Bas & Söyle'}
          </Text>
        </View>
      )}
    </View>
  );
};

// Levenshtein benzerlik skoru (0-1)
function levenshteinSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i-1] === a[j-1]
        ? matrix[i-1][j-1]
        : Math.min(matrix[i-1][j-1]+1, matrix[i][j-1]+1, matrix[i-1][j]+1);
    }
  }
  return 1 - matrix[b.length][a.length] / Math.max(a.length, b.length, 1);
}

// ─── Haftalık Quiz ────────────────────────────────────────────────────────────
const WeeklyQuiz: React.FC<{ lang: string; colors: any; onExit: () => void }> = ({ lang, colors, onExit }) => {
  const [lastWeek, setLastWeek] = useState<string | null>(null);
  const [questions, setQuestions] = useState<{ q: string; options: string[]; correct: number }[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canPlayState, setCanPlayState] = useState(true);
  const timerRef = useRef<any>(null);

  const thisWeek = () => {
    const d = new Date();
    const week = Math.floor(d.getTime() / (7 * 24 * 60 * 60 * 1000));
    return `${d.getFullYear()}_w${week}`;
  };

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(`${WEEK_QUIZ_KEY}${lang}`);
      setLastWeek(saved);
      if (saved === thisWeek()) {
        setCanPlayState(false);
        setIsLoading(false);
        return;
      }

      // API'den karışık kelimeler getir ve quiz oluştur
      const pairs = await VocabularyService.getMixedPairs(lang, 20);
      const quiz: { q: string; options: string[]; correct: number }[] = [];

      for (const pair of pairs.slice(0, 15)) {
        // Yanlış seçenekler için diğer çevirilerden al
        const wrongOptions = pairs
          .filter(p => p.foreign !== pair.foreign)
          .map(p => p.foreign)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        const options = VocabularyService.shuffle([pair.foreign, ...wrongOptions]);
        const correct = options.indexOf(pair.foreign);

        quiz.push({
          q: `"${pair.turkish}" kelimesinin ${LANG_LABELS[lang]} karşılığı nedir?`,
          options,
          correct,
        });
      }

      setQuestions(quiz);
      setIsLoading(false);
    })();
  }, [lang]);

  useEffect(() => {
    if (isLoading || isFinished || !canPlayState) return;
    timerRef.current = setInterval(() => setTimeLeft(t => {
      if (t <= 1) {
        clearInterval(timerRef.current);
        AsyncStorage.setItem(`${WEEK_QUIZ_KEY}${lang}`, thisWeek());
        setIsFinished(true);
        return 0;
      }
      return t - 1;
    }), 1000);
    return () => clearInterval(timerRef.current);
  }, [isLoading, isFinished, canPlayState]);

  const canPlay = canPlayState;

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentIdx].correct) {
      setScore(s => s + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    setTimeout(() => {
      if (currentIdx + 1 >= questions.length) {
        AsyncStorage.setItem(`${WEEK_QUIZ_KEY}${lang}`, thisWeek());
        setIsFinished(true);
      } else {
        setCurrentIdx(i => i + 1);
        setSelected(null);
      }
    }, 1100);
  };

  if (isLoading) return (
    <View style={[styles.loadingBox, { backgroundColor: colors.background }]}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={[styles.loadingText, { color: colors.textLight }]}>Quiz hazırlanıyor...</Text>
    </View>
  );

  if (!canPlay) return (
    <View style={[styles.gameOver, { backgroundColor: colors.background }]}>
      <Text style={{ fontSize: 60 }}>📅</Text>
      <Text style={[styles.gameOverTitle, { color: colors.text }]}>Bu Hafta Tamamlandı!</Text>
      <Text style={[styles.gameOverSub, { color: colors.textLight }]}>Haftalık quiz'i zaten tamamladın.{'\n'}Gelecek hafta tekrar gel! 💪</Text>
      <TouchableOpacity style={[styles.exitBtn, { backgroundColor: colors.primary }]} onPress={onExit}>
        <Text style={styles.exitBtnText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );

  if (isFinished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <View style={[styles.gameOver, { backgroundColor: colors.background }]}>
        <Text style={{ fontSize: 60 }}>{pct >= 80 ? '🏆' : pct >= 50 ? '📚' : '💪'}</Text>
        <Text style={[styles.gameOverTitle, { color: colors.text }]}>Haftalık Quiz!</Text>
        <View style={[styles.quizResultBadge, { backgroundColor: pct >= 70 ? colors.success + '20' : colors.error + '20', borderColor: pct >= 70 ? colors.success : colors.error }]}>
          <Text style={[styles.quizResultScore, { color: pct >= 70 ? colors.success : colors.error }]}>{score}/{questions.length}</Text>
          <Text style={[styles.quizResultPct, { color: pct >= 70 ? colors.success : colors.error }]}>%{pct}</Text>
        </View>
        <TouchableOpacity style={[styles.exitBtn, { backgroundColor: colors.primary }]} onPress={onExit}>
          <Text style={styles.exitBtnText}>Oyunlara Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const q = questions[currentIdx];
  return (
    <View style={[styles.quizScreen, { backgroundColor: colors.background }]}>
      <View style={[styles.quizProgressBar, { backgroundColor: colors.border }]}>
        <View style={[styles.quizProgressFill, { backgroundColor: colors.primary, width: `${(currentIdx / questions.length) * 100}%` as any }]} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Text style={[styles.quizCounter, { color: colors.textLight, marginBottom: 0 }]}>{currentIdx + 1} / {questions.length}</Text>
        <View style={[styles.statPill, { backgroundColor: timeLeft <= 30 ? colors.error + '20' : colors.surface, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }]}>
          <Text style={{ color: timeLeft <= 30 ? colors.error : colors.text, fontWeight: 'bold' }}>⏱ {timeLeft}s</Text>
        </View>
      </View>

      <View style={[styles.quizQuestionBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.quizQuestion, { color: colors.text }]}>{q.q}</Text>
      </View>

      <View style={styles.quizOptions}>
        {q.options.map((opt, idx) => {
          let bg = colors.surface;
          let border = colors.border;
          let textColor = colors.text;
          if (selected !== null) {
            if (idx === q.correct) { bg = colors.success + '25'; border = colors.success; textColor = colors.success; }
            else if (idx === selected) { bg = colors.error + '25'; border = colors.error; textColor = colors.error; }
          }
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.quizOption, { backgroundColor: bg, borderColor: border }]}
              onPress={() => handleAnswer(idx)}
              disabled={selected !== null}
            >
              <View style={[styles.quizOptionBadge, { backgroundColor: idx === q.correct && selected !== null ? colors.success : colors.border }]}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 13 }}>{idx + 1}</Text>
              </View>
              <Text style={[styles.quizOptionText, { color: textColor }]}>{opt}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// ─── Ana Oyunlar Ekranı ───────────────────────────────────────────────────────
type GameId = 'menu' | 'cardmatch' | 'listening' | 'speaking' | 'weeklyquiz';

const GamesScreen: React.FC<any> = () => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [activeGame, setActiveGame] = useState<GameId>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string>('animals');
  const [fadeAnim] = useState(new Animated.Value(1));

  const langLabel = LANG_LABELS[activeLanguage] || activeLanguage;
  const langFlag = LANG_FLAGS[activeLanguage] || '🌍';

  // Tema uyumlu tab bar stili — MainTabNavigator'daki stil ile aynı
  const themedTabBarStyle = {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
    height: 60 + (insets.bottom > 0 ? insets.bottom : 10),
    paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
    paddingTop: 8,
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -3 },
  };

  // Tab bar'ı gizle/göster
  useEffect(() => {
    if (activeGame !== 'menu') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: themedTabBarStyle });
    }
  }, [activeGame, colors.surface, colors.border, insets.bottom]);

  // Ekran unmount olunca tab bar'ı geri getir
  useEffect(() => {
    return () => {
      navigation.setOptions({ tabBarStyle: themedTabBarStyle });
    };
  }, []);

  const launchGame = (gameId: GameId) => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      setActiveGame(gameId);
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }).start();
    });
  };

  const exitGame = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
      setActiveGame('menu');
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }).start();
    });
  };

  const games = [
    { id: 'cardmatch' as GameId, icon: '🃏', title: 'Kart Eşleştirme', desc: 'Türkçe ve yabancı kelimeleri eşleştir', color: '#00D2FF', hasCat: true },
    { id: 'speaking' as GameId, icon: '🗣️', title: 'Duyduğunu Söyle', desc: 'Pratik yap ve doğru telaffuz et (+2s kazan)', color: '#FF9F43', hasCat: true },
    { id: 'listening' as GameId, icon: '🎧', title: 'Duyduğunu Yaz', desc: 'Sesi duy ve doğru yaz', color: '#FF6B6B', hasCat: true },
    { id: 'weeklyquiz' as GameId, icon: '📝', title: 'Haftalık Quiz', desc: '15 sorudan oluşan haftalık sınav', color: '#FFC800', hasCat: false, badge: 'HAFTALIK' },
  ];

  const gameTitle = activeGame === 'cardmatch' ? '🃏 Kart Eşleştirme'
    : activeGame === 'speaking' ? '🗣️ Duyduğunu Söyle'
    : activeGame === 'listening' ? '🎧 Duyduğunu Yaz'
    : '📝 Haftalık Quiz';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" />

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {activeGame === 'menu' ? (
          <>
            {/* Header */}
            <View style={[styles.gamesHeader, { backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border }]}>
              <View>
                <Text style={[styles.gamesHeaderTitle, { color: colors.text }]}>🎮 Oyunlar</Text>
                <Text style={[styles.gamesHeaderSub, { color: colors.textLight }]}>{langFlag} {langLabel} · Aktif dil</Text>
              </View>
            </View>

            <FlatList
              data={games}
              keyExtractor={g => g.id}
              contentContainerStyle={styles.gamesListContent}
              ListHeaderComponent={() => (
                <>
                  <Text style={[styles.sectionLabel, { color: colors.textLight }]}>KATEGORİ SEÇ</Text>
                  <CategoryPicker selected={selectedCategory} onSelect={setSelectedCategory} colors={colors} />

                  {/* AI Destekli Özellikler */}
                  <Text style={[styles.sectionLabel, { color: colors.textLight, marginTop: 20 }]}>🤖 AI DESTEKLİ</Text>
                  <TouchableOpacity
                    style={[styles.gameCard, { backgroundColor: '#8B5CF620', borderColor: '#8B5CF6' }]}
                    onPress={() => (navigation as any).navigate('AIChat')}
                    activeOpacity={0.82}
                  >
                    <View style={[styles.gameCardIconBox, { backgroundColor: '#8B5CF630' }]}>
                      <Text style={{ fontSize: 38 }}>✨</Text>
                    </View>
                    <View style={styles.gameCardInfo}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <Text style={[styles.gameCardTitle, { color: colors.text }]}>Arjin'e Sor</Text>
                        <View style={[styles.gameBadge, { backgroundColor: '#8B5CF6' }]}>
                          <Text style={styles.gameBadgeText}>YENİ</Text>
                        </View>
                      </View>
                      <Text style={[styles.gameCardDesc, { color: colors.textLight }]}>AI koçumuz Arjin ile {langLabel} pratik yap</Text>
                    </View>
                    <Text style={[styles.gameArrow, { color: '#8B5CF6' }]}>▶</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.gameCard, { backgroundColor: '#22C55E20', borderColor: '#22C55E' }]}
                    onPress={() => (navigation as any).navigate('Speaking')}
                    activeOpacity={0.82}
                  >
                    <View style={[styles.gameCardIconBox, { backgroundColor: '#22C55E30' }]}>
                      <Text style={{ fontSize: 38 }}>🎙️</Text>
                    </View>
                    <View style={styles.gameCardInfo}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <Text style={[styles.gameCardTitle, { color: colors.text }]}>Telaffuz Pratiği</Text>
                        <View style={[styles.gameBadge, { backgroundColor: '#22C55E' }]}>
                          <Text style={styles.gameBadgeText}>YENİ</Text>
                        </View>
                      </View>
                      <Text style={[styles.gameCardDesc, { color: colors.textLight }]}>Kelimeleri dinle, tekrarla, AI puanlasın</Text>
                    </View>
                    <Text style={[styles.gameArrow, { color: '#22C55E' }]}>▶</Text>
                  </TouchableOpacity>

                  <Text style={[styles.sectionLabel, { color: colors.textLight, marginTop: 20 }]}>OYUNLAR</Text>
                </>
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.gameCard, { backgroundColor: item.color + '12', borderColor: item.color }]}
                  onPress={() => launchGame(item.id)}
                  activeOpacity={0.82}
                >
                  <View style={[styles.gameCardIconBox, { backgroundColor: item.color + '28' }]}>
                    <Text style={{ fontSize: 38 }}>{item.icon}</Text>
                  </View>
                  <View style={styles.gameCardInfo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <Text style={[styles.gameCardTitle, { color: colors.text }]}>{item.title}</Text>
                      {item.badge && (
                        <View style={[styles.gameBadge, { backgroundColor: item.color }]}>
                          <Text style={styles.gameBadgeText}>{item.badge}</Text>
                        </View>
                      )}
                    </View>
                    <Text style={[styles.gameCardDesc, { color: colors.textLight }]}>{item.desc}</Text>
                    {item.hasCat && (
                      <Text style={[styles.gameCardCat, { color: item.color }]}>
                        {VocabularyService.getCategories().find(c => c.id === selectedCategory)?.icon}{' '}
                        {VocabularyService.getCategories().find(c => c.id === selectedCategory)?.label}
                      </Text>
                    )}
                  </View>
                  <Text style={[styles.gameArrow, { color: item.color }]}>▶</Text>
                </TouchableOpacity>
              )}
            />
          </>
        ) : (
          <>
            {/* Oyun içi nav */}
            <View style={[styles.gameNav, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
              <TouchableOpacity style={styles.gameNavBack} onPress={exitGame}>
                <Text style={{ fontSize: 22, color: colors.primary }}>←</Text>
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={[styles.gameNavTitle, { color: colors.text }]}>{gameTitle}</Text>
                <Text style={[styles.gameNavSub, { color: colors.textLight }]}>
                  {langFlag} {langLabel}
                  {activeGame !== 'weeklyquiz' && ` · ${VocabularyService.getCategories().find(c => c.id === selectedCategory)?.icon} ${VocabularyService.getCategories().find(c => c.id === selectedCategory)?.label}`}
                </Text>
              </View>
            </View>

            {activeGame === 'cardmatch' && (
              <CardMatchGame lang={activeLanguage} category={selectedCategory} colors={colors} onExit={exitGame} />
            )}
            {activeGame === 'speaking' && (
              <SpeakingGame lang={activeLanguage} category={selectedCategory} colors={colors} onExit={exitGame} />
            )}
            {activeGame === 'listening' && (
              <ListeningGame lang={activeLanguage} category={selectedCategory} colors={colors} onExit={exitGame} />
            )}
            {activeGame === 'weeklyquiz' && (
              <WeeklyQuiz lang={activeLanguage} colors={colors} onExit={exitGame} />
            )}
          </>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gamesHeader: { paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 10 : 20, paddingBottom: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  gamesHeaderTitle: { fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  gamesHeaderSub: { fontSize: 13, marginTop: 3 },
  // Categories
  catChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5 },
  catChipText: { fontSize: 13, fontWeight: '700' },
  // Games list
  gamesListContent: { padding: 16, paddingBottom: 30 },
  sectionLabel: { fontSize: 11, fontWeight: 'bold', letterSpacing: 1.2, marginBottom: 10 },
  gameCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20, 
    borderRadius: 24, 
    borderWidth: 1.5, 
    borderBottomWidth: 5, 
    gap: 16, 
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  gameCardIconBox: { width: 72, height: 72, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  gameCardInfo: { flex: 1 },
  gameCardTitle: { fontSize: 18, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  gameCardDesc: { fontSize: 14, marginTop: 4, lineHeight: 20 },
  gameCardCat: { fontSize: 12, fontWeight: '700', marginTop: 5 },
  gameBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  gameBadgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  gameArrow: { fontSize: 20 },
  // Game nav
  gameNav: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: 1, gap: 10 },
  gameNavBack: { padding: 6 },
  gameNavTitle: { fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  gameNavSub: { fontSize: 12, marginTop: 1 },
  // Loading
  loadingBox: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 14 },
  loadingText: { fontSize: 15 },
  // Game over
  gameOver: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, gap: 14 },
  gameOverTitle: { fontSize: 28, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  gameOverSub: { fontSize: 16, textAlign: 'center', lineHeight: 23 },
  exitBtn: { paddingHorizontal: 32, paddingVertical: 15, borderRadius: 25, marginTop: 10 },
  exitBtnText: { color: '#FFF', fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 17 },
  // Card match
  gameTopBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 14, alignItems: 'center' },
  statPill: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  statPillText: { fontSize: 15, fontWeight: '700' },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, paddingTop: 10, gap: 8, justifyContent: 'center' },
  cardTile: { borderRadius: 12, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', padding: 6 },
  cardTileText: { fontSize: 12, textAlign: 'center', fontWeight: '700' },
  cardLegend: { flexDirection: 'row', justifyContent: 'center', gap: 20, paddingVertical: 10 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: { fontSize: 12 },
  // Listening
  listeningContent: { padding: 22, alignItems: 'center', paddingBottom: 40 },
  listenProgressBar: { width: '100%', height: 6, borderRadius: 3, marginBottom: 14, overflow: 'hidden' },
  listenProgressFill: { height: '100%', borderRadius: 3 },
  listenCounter: { fontSize: 13, marginBottom: 16 },
  listenHintBox: { width: '100%', borderRadius: 16, borderWidth: 1, padding: 18, marginBottom: 24, alignItems: 'center' },
  listenHintLabel: { fontSize: 12, marginBottom: 4 },
  listenHintWord: { fontSize: 22, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  speakBtn: { width: 120, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 28, gap: 4 },
  speakBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  listenInput: { width: '100%', borderRadius: 16, borderWidth: 2, padding: 16, fontSize: 17, textAlign: 'center', marginBottom: 16 },
  feedbackBox: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 14, marginBottom: 16, width: '100%', justifyContent: 'center' },
  checkBtn: { width: '100%', paddingVertical: 16, borderRadius: 25, alignItems: 'center' },
  checkBtnText: { color: '#FFF', fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 17 },
  // Quiz
  quizScreen: { flex: 1, padding: 20 },
  quizProgressBar: { height: 6, borderRadius: 3, marginBottom: 14, overflow: 'hidden' },
  quizProgressFill: { height: '100%', borderRadius: 3 },
  quizCounter: { fontSize: 13, marginBottom: 12, textAlign: 'center' },
  quizQuestionBox: { borderRadius: 18, borderWidth: 1, borderBottomWidth: 3, padding: 22, marginBottom: 20, alignItems: 'center' },
  quizQuestion: { fontSize: 18, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center', lineHeight: 26 },
  quizOptions: { gap: 10 },
  quizOption: { flexDirection: 'row', alignItems: 'center', borderRadius: 16, borderWidth: 1.5, borderBottomWidth: 3, padding: 14, gap: 12 },
  quizOptionBadge: { width: 26, height: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center' },
  quizOptionText: { fontSize: 16, flex: 1, fontWeight: '600' },
  quizResultBadge: { borderRadius: 20, borderWidth: 2, paddingHorizontal: 40, paddingVertical: 20, alignItems: 'center', gap: 4 },
  quizResultScore: { fontSize: 36, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  quizResultPct: { fontSize: 18, fontWeight: '700' },
});

export default GamesScreen;
