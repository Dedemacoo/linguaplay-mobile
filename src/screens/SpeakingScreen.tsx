import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Animated,
  Dimensions, ActivityIndicator, Alert, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { AIService } from '../services/AIService';
import { VocabularyService, WordPair } from '../services/VocabularyService';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { Mascot } from '../components/Mascot';

import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';
const { width } = Dimensions.get('window');

const LANG_LABELS: Record<string, string> = {
  kurdish: 'Kürtçe', english: 'İngilizce', french: 'Fransızca',
  spanish: 'İspanyolca', german: 'Almanca', turkish: 'Türkçe',
};
const LANG_CODES: Record<string, string> = {
  english: 'en-US', french: 'fr-FR', spanish: 'es-ES',
  german: 'de-DE', kurdish: 'tr-TR', turkish: 'tr-TR',
};

/**
 * SpeakingScreen — Telaffuz Pratiği
 *
 * Akış:
 * 1. Rastgele kelime göster
 * 2. Kullanıcı "Dinle" butonuyla kelimenin doğru telaffuzunu duyar
 * 3. Kullanıcı "Tekrarla" butonuyla kendi telaffuzunu girer (simülasyon)
 * 4. AI puanlar ve geri bildirim verir
 *
 *
 * EAS Build sonrası `expo-speech-recognition` ile gerçek cihazlarda çalışır.
 * Expo Go'da ise fallback mekanizması veya simülasyon devam edebilir.
 */
const SpeakingScreen: React.FC<any> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const { addXp } = useProgressStore();
  const langLabel = LANG_LABELS[activeLanguage] || activeLanguage;
  const langCode = LANG_CODES[activeLanguage] || 'en-US';

  const [words, setWords] = useState<WordPair[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isScoring, setIsScoring] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const currentWord = words[currentIndex];
  const totalWords = words.length;

  // Load words
  useEffect(() => {
    (async () => {
      const pairs = await VocabularyService.getWordPairs(activeLanguage, 'all', 10);
      setWords(pairs);
      setIsLoading(false);
    })();
  }, [activeLanguage]);

  // Pulse animation for mic
  useEffect(() => {
    if (isSpeaking) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.3, duration: 600, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isSpeaking, isRecording]);

  // --- STT Events ---
  useSpeechRecognitionEvent('start', () => setIsRecording(true));
  useSpeechRecognitionEvent('end', () => {
    setIsRecording(false);
    if (transcript.trim() && !isScoring && !showResult) {
      processPronunciation(transcript.trim());
    }
  });
  useSpeechRecognitionEvent('result', (event: any) => {
    const text = event.results[0]?.transcript || '';
    setTranscript(text);
  });
  useSpeechRecognitionEvent('error', (event: any) => {
    console.log('[STT Error]', event.error, event.message);
    setIsRecording(false);
    // Eğer STT desteklenmiyorsa simüle et
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      Alert.alert('Hata', 'Mikrofon izni reddedildi veya ses tanıma desteklenmiyor.');
    }
  });

  const requestMicrophone = async () => {
    const permResult = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    const status = (permResult as any).status ?? (permResult.granted ? 'granted' : 'denied');
    return status === 'granted';
  };

  const listenToWord = () => {
    if (!currentWord) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSpeaking(true);
    Speech.speak(currentWord.foreign, {
      language: langCode,
      rate: 0.75,
      onDone: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const startRecording = async () => {
    if (!currentWord) return;
    
    const hasPermission = await requestMicrophone();
    if (!hasPermission) {
      simulatePronunciation();
      return;
    }

    try {
      ExpoSpeechRecognitionModule.start({
        lang: langCode,
        interimResults: true,
        maxAlternatives: 1,
      });
    } catch (e) {
      console.log('STT Error', e);
      simulatePronunciation();
    }
  };

  const processPronunciation = async (spokenText: string) => {
    setIsScoring(true);
    const result = await AIService.scorePronunciation(
      currentWord.foreign,
      spokenText,
      langLabel
    );

    setScore(result.score);
    setFeedback(result.feedback);
    setShowResult(true);
    setIsScoring(false);
    setTotalScore(prev => prev + result.score);
    setAttempts(prev => prev + 1);

    // Animate result
    Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 60, useNativeDriver: true }).start();

    if (result.score >= 70) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
  };

  const simulatePronunciation = async () => {
    if (!currentWord) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    processPronunciation(currentWord.foreign);
  };

  const nextWord = () => {
    Haptics.selectionAsync();
    setShowResult(false);
    scaleAnim.setValue(0);

    if (currentIndex < totalWords - 1) {
      setCurrentIndex(prev => prev + 1);
      Animated.timing(progressAnim, {
        toValue: (currentIndex + 1) / totalWords,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // Ders bitti
      const avgScore = Math.round(totalScore / Math.max(attempts, 1));
      const xpEarned = Math.round(avgScore / 10);
      addXp(xpEarned, activeLanguage);
      navigation.replace('SpeakingResult', { avgScore, xpEarned, totalWords });
    }
  };

  const getScoreColor = (s: number) => {
    if (s >= 90) return '#22C55E';
    if (s >= 70) return '#F59E0B';
    if (s >= 50) return '#F97316';
    return '#EF4444';
  };

  const getScoreEmoji = (s: number) => {
    if (s >= 90) return '🌟';
    if (s >= 70) return '👍';
    if (s >= 50) return '💪';
    return '🔄';
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.textLight }]}>Kelimeler hazırlanıyor...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentWord) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.center}>
          <Mascot mascotId="professor" size={120} animationState="sad" animated />
          <Text style={[styles.emptyText, { color: colors.text }]}>Kelime bulunamadı</Text>
          <TouchableOpacity style={[styles.backBtn, { backgroundColor: colors.primary }]} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: colors.primary, fontSize: 24 }}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>🎙️ Telaffuz Pratiği</Text>
        <Text style={[styles.counter, { color: colors.textLight }]}>{currentIndex + 1}/{totalWords}</Text>
      </View>

      {/* Progress bar */}
      <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
        <Animated.View style={[styles.progressFill, {
          backgroundColor: colors.primary,
          width: progressAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
        }]} />
      </View>

      {/* Word Card */}
      <View style={styles.cardSection}>
        <View style={[styles.wordCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.turkishWord, { color: colors.textLight }]}>{currentWord.turkish}</Text>
          <Text 
            style={[styles.foreignWord, { color: colors.text }]}
            adjustsFontSizeToFit
            numberOfLines={4}
          >
            {currentWord.foreign}
          </Text>
          {currentWord.phonetic && (
            <Text style={[styles.phonetic, { color: colors.primary }]}>[{currentWord.phonetic}]</Text>
          )}
        </View>
      </View>

      {/* Result or Actions */}
      {showResult ? (
        <Animated.View style={[styles.resultSection, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={{ fontSize: 48 }}>{getScoreEmoji(score)}</Text>
          <Text style={[styles.scoreText, { color: getScoreColor(score) }]}>{score}/100</Text>
          <Text style={[styles.feedbackText, { color: colors.text }]}>{feedback}</Text>
          <TouchableOpacity
            style={[styles.nextBtn, { backgroundColor: colors.primary }]}
            onPress={nextWord}
          >
            <Text style={styles.nextBtnText}>
              {currentIndex < totalWords - 1 ? 'Sonraki Kelime →' : 'Sonuçları Gör 🎉'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <View style={styles.actionsSection}>
          {transcript !== '' && !showResult && (
            <Text style={[styles.transcriptText, { color: colors.textLight }]}>"{transcript}"</Text>
          )}

          {/* Listen button */}
          <TouchableOpacity
            style={[styles.listenBtn, { backgroundColor: colors.surface, borderColor: colors.primary }]}
            onPress={listenToWord}
            disabled={isSpeaking}
          >
            <Animated.Text style={[styles.listenIcon, isSpeaking && { transform: [{ scale: pulseAnim }] }]}>
              {isSpeaking ? '🔊' : '👂'}
            </Animated.Text>
            <Text style={[styles.listenLabel, { color: colors.text }]}>
              {isSpeaking ? 'Dinleniyor...' : 'Önce Dinle'}
            </Text>
          </TouchableOpacity>

          {/* Speak / Record button */}
          <TouchableOpacity
            style={[styles.micBtn, { backgroundColor: isRecording ? '#EF4444' : colors.primary }]}
            onPress={isRecording ? () => ExpoSpeechRecognitionModule.stop() : startRecording}
            disabled={isScoring}
          >
            {isScoring ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <>
                <Animated.Text style={[styles.micIcon, isRecording && { transform: [{ scale: pulseAnim }] }]}>
                  🎙️
                </Animated.Text>
                <Text style={styles.micLabel}>{isRecording ? 'Dinleniyor...' : 'Şimdi Tekrarla'}</Text>
              </>
            )}
          </TouchableOpacity>

          <Text style={[styles.hintText, { color: colors.textLight }]}>
            💡 Kelimeyi dinle, sonra mikrofona basarak tekrarla
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  loadingText: { fontSize: 15, marginTop: 12 },
  emptyText: { fontSize: 18, fontWeight: '600' },
  backBtn: { borderRadius: 12, paddingHorizontal: 24, paddingVertical: 12 },
  backBtnText: { color: '#FFF', fontWeight: '700', fontSize: 15 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1,
  },
  headerTitle: { fontSize: 17, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  counter: { fontSize: 14, fontWeight: '600' },
  progressBar: { height: 4 },
  progressFill: { height: 4, borderRadius: 2 },
  cardSection: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  wordCard: {
    width: width - 48, borderRadius: 24, padding: 32, alignItems: 'center',
    borderWidth: 1, gap: 12,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  turkishWord: { fontSize: 18, fontWeight: '500', textAlign: 'center', marginBottom: 8 },
  foreignWord: { fontSize: 32, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center', lineHeight: 40 },
  phonetic: { fontSize: 16, fontWeight: '500' },
  resultSection: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 40, gap: 12 },
  scoreText: { fontSize: 48, fontWeight: '900' },
  feedbackText: { fontSize: 16, textAlign: 'center', lineHeight: 24 },
  nextBtn: { borderRadius: 16, paddingHorizontal: 32, paddingVertical: 16, marginTop: 12 },
  nextBtnText: { color: '#FFF', fontWeight: '800', fontSize: 16 },
  actionsSection: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 40, gap: 16 },
  listenBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 12, width: width - 48,
    borderRadius: 18, paddingVertical: 18, paddingHorizontal: 24, borderWidth: 2,
  },
  listenIcon: { fontSize: 28 },
  listenLabel: { fontSize: 16, fontWeight: '700' },
  micBtn: {
    width: width - 48, borderRadius: 18, paddingVertical: 20,
    alignItems: 'center', gap: 4,
    shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  micIcon: { fontSize: 32 },
  micLabel: { color: '#FFF', fontSize: 16, fontWeight: '800' },
  hintText: { fontSize: 13, textAlign: 'center', marginTop: 4 },
  transcriptText: { fontSize: 16, fontStyle: 'italic', marginBottom: 8 },
});

export default SpeakingScreen;
