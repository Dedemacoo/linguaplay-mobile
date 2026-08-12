import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Animated, Easing, TextInput, KeyboardAvoidingView, Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { AIService, ChatMessage, parseTTSAndDisplay, checkAILimit, incrementAIUsage, watchAdToResetLimit } from '../services/AIService';
import { Mascot } from '../components/Mascot';
import { AICoreVisualizer } from '../components/AICoreVisualizer';
import { setIdleMascotEnabled } from '../components/IdleMascot';
import { Alert } from 'react-native';
import { AdService } from '../services/AdService';

// ──────────── TYPES ────────────
type Persona = {
  id: string; name: string; role: string; avatar: string;
  colors: [string, string]; greeting: string; gender?: 'male' | 'female';
  voiceConfig?: { language: string; pitch: number; rate: number };
};

type VoiceSession = 'idle' | 'listening' | 'thinking' | 'speaking';

// ──────────── CONSTANTS ────────────
const AI_PERSONAS: Persona[] = [
  { id: 'emma', name: 'Emma', role: 'Günlük Kahve Sohbeti', avatar: '👩‍🏫', colors: ['#EC4899', '#8B5CF6'], greeting: "Hello! I'm Emma. Let's practice together! Repeat after me: 'Could I get a coffee, please?'", gender: 'female', voiceConfig: { language: 'en-US', pitch: 1.1, rate: 0.95 } },
  { id: 'albert', name: 'Prof. Albert', role: 'Bilge & Sabırlı Öğretmen', avatar: '👨‍🏫', colors: ['#3B82F6', '#1E40AF'], greeting: "Welcome! I'm Professor Albert. Let's begin. Repeat after me: 'I want to improve my English speaking skills.'", gender: 'male', voiceConfig: { language: 'en-GB', pitch: 0.7, rate: 0.8 } },
  { id: 'marco', name: 'Chef Marco', role: 'İtalyan Şef & Garson', avatar: '👨‍🍳', colors: ['#F59E0B', '#D97706'], greeting: "Buon giorno! I'm Chef Marco. Let's practice ordering! Repeat after me: 'I would like to see the menu, please.'", gender: 'male', voiceConfig: { language: 'en-US', pitch: 1.0, rate: 0.9 } },
  { id: 'jack', name: 'Korsan Jack', role: 'Maceracı Korsan Kaptan', avatar: '🏴‍☠️', colors: ['#EF4444', '#B91C1C'], greeting: "Ahoy! I'm Captain Jack. Let's sail through language! Repeat after me: 'We are searching for the hidden treasure!'", gender: 'male', voiceConfig: { language: 'en-GB', pitch: 0.6, rate: 0.85 } },
  { id: 'cyberbot', name: 'Cyber Bot 3000', role: 'Futuristik Teknoloji Botu', avatar: '🤖', colors: ['#06B6D4', '#0891B2'], greeting: "System online. I'm Cyber Bot 3000. Let's begin. Repeat after me: 'Technology will transform our daily lives.'", gender: 'female', voiceConfig: { language: 'en-US', pitch: 0.2, rate: 0.95 } },
];

const LANGUAGE_MIC_MAP: Record<string, string> = {
  english: 'en-US', german: 'de-DE', spanish: 'es-ES', french: 'fr-FR',
  italian: 'it-IT', kurdish: 'ku', arabic: 'ar', russian: 'ru-RU',
  japanese: 'ja-JP', chinese: 'zh-CN', portuguese: 'pt-PT', dutch: 'nl-NL', korean: 'ko-KR',
};

// ──────────── COMPONENT ────────────
const AITutorScreen = ({ route }: any) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { activeLanguage } = useLanguageStore();
  const chatScrollRef = useRef<ScrollView>(null);

  const checkpointId = route?.params?.checkpointId;
  const isCheckpoint = !!checkpointId;

  const [viewState, setViewState] = useState<'menu' | 'chat'>(isCheckpoint ? 'chat' : 'menu');
  const [activePersona, setActivePersona] = useState<Persona | null>(null);
  const [chatMessages, setChatMessages] = useState<any[]>(
    isCheckpoint ? [{ id: '1', role: 'ai', text: 'Merhaba! Aşama sonu sınavına hoş geldin. Hazırsan başlayalım.', display_text: 'Merhaba! Aşama sonu sınavına hoş geldin.' }] : []
  );
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // ── Voice Session ──
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [voiceSession, setVoiceSession] = useState<VoiceSession>('idle');
  const [voiceSubtitle, setVoiceSubtitle] = useState('');
  const [voiceUserText, setVoiceUserText] = useState('');
  const voiceTranscriptRef = useRef('');
  const soundRef = useRef<Audio.Sound | null>(null);
  const voiceActiveRef = useRef(false); // tracks if voice loop is still running

  // Animations
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const pulseLoop = useRef<Animated.CompositeAnimation | null>(null);

  // ── Pulse animation ──
  useEffect(() => {
    if (voiceSession === 'listening') {
      pulseLoop.current = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.35, duration: 700, useNativeDriver: true, easing: Easing.inOut(Easing.ease) }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 700, useNativeDriver: true, easing: Easing.inOut(Easing.ease) }),
        ])
      );
      pulseLoop.current.start();
    } else {
      pulseLoop.current?.stop();
      pulseAnim.setValue(1);
    }
  }, [voiceSession]);

  // ── Speech Recognition Events ──
  useSpeechRecognitionEvent('result', (event: any) => {
    const transcript = event.results[0]?.transcript;
    if (transcript && voiceActiveRef.current) {
      voiceTranscriptRef.current = transcript;
      setVoiceUserText(transcript);
    }
  });

  useSpeechRecognitionEvent('end', () => {
    if (!voiceActiveRef.current) return;
    const text = voiceTranscriptRef.current.trim();
    voiceTranscriptRef.current = '';
    setVoiceSession('thinking');
    if (text) {
      handleVoiceTurn(text);
    } else {
      // No speech detected → restart listening
      setTimeout(() => {
        if (voiceActiveRef.current) startListening();
      }, 800);
    }
  });

  useSpeechRecognitionEvent('error', () => {
    if (!voiceActiveRef.current) return;
    setTimeout(() => {
      if (voiceActiveRef.current) startListening();
    }, 1000);
  });

  // ──────────────────────────────────────────────────────────────
  // VOICE FLOW CONTROL
  // ──────────────────────────────────────────────────────────────

  const startListening = useCallback(async () => {
    if (!voiceActiveRef.current) return;
    voiceTranscriptRef.current = '';
    setVoiceUserText('');
    setVoiceSession('listening');
    try {
      await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      const micLang = LANGUAGE_MIC_MAP[activeLanguage] || 'en-US';
      ExpoSpeechRecognitionModule.start({ lang: micLang, interimResults: true });
    } catch (e) {
      console.log('Mic error:', e);
      if (voiceActiveRef.current) setTimeout(() => startListening(), 1500);
    }
  }, [activeLanguage]);

  const stopListening = () => {
    try { ExpoSpeechRecognitionModule.stop(); } catch (_) {}
  };

  const speakAndThenListen = useCallback(async (ttsText: string) => {
    if (!voiceActiveRef.current) return;
    setVoiceSession('speaking');

    const doListen = () => {
      if (voiceActiveRef.current) {
        setTimeout(() => startListening(), 600);
      }
    };

    if (activeLanguage === 'kurdish') {
      await playKurdishAudio(ttsText, activePersona?.gender || 'female');
      doListen();
    } else {
      const voiceCfg = activePersona?.voiceConfig || { language: 'en-US', pitch: 1, rate: 0.88 };
      Speech.speak(ttsText, {
        language: voiceCfg.language,
        pitch: voiceCfg.pitch,
        rate: voiceCfg.rate,
        onDone: doListen,
        onError: doListen,
      });
    }
  }, [activeLanguage, activePersona]);

  const handleVoiceTurn = useCallback(async (userText: string) => {
    if (!voiceActiveRef.current) return;

    const { progress } = useProgressStore.getState();
    const limit = await checkAILimit(progress.isPremium, true);
    if (!limit.allowed) {
      stopListening();
      setVoiceSession('idle');
      Alert.alert(
        'Günlük Limit Doldu',
        'Sesli pratik hakkınız bitti. Sınırsız pratik için Premium\'a geçebilir veya haklarınızı yenilemek için 2 reklam izleyebilirsiniz.',
        [
          { text: 'Vazgeç', style: 'cancel' },
          { text: 'Reklam İzle (Hak Sıfırla)', onPress: () => {
              AdService.showRewarded(async () => {
                const res = await watchAdToResetLimit(true);
                if (res.success) {
                  Alert.alert('Tebrikler!', 'Haklarınız sıfırlandı, sohbete devam edebilirsiniz!');
                } else {
                  Alert.alert('Harika!', `Sıfırlama için son ${res.adsRemaining} reklam kaldı. Lütfen tekrar tıkla.`);
                }
              }, () => {});
          }},
          { text: 'Premium\'a Geç', onPress: () => navigation.navigate('Premium' as never) }
        ]
      );
      return;
    }

    const userMsg = { id: Date.now().toString(), role: 'user', text: userText };
    let currentMessages: any[] = [];
    setChatMessages(prev => {
      currentMessages = [...prev, userMsg];
      return currentMessages;
    });

    setVoiceSession('thinking');
    setVoiceSubtitle('Düşünüyor...');

    try {
      const history: ChatMessage[] = [
        ...currentMessages.map((m: any) => ({
          role: m.role === 'user' ? 'user' as const : 'assistant' as const,
          content: m.text
        }))
      ];
      const personaPrompt = activePersona ? `${activePersona.name} - ${activePersona.role}` : undefined;
      const rawReply = await AIService.chat(history, activeLanguage, 'beginner', personaPrompt);
      const parsed = parseTTSAndDisplay(rawReply);

      const aiMsg = { id: (Date.now() + 1).toString(), role: 'ai', text: parsed.display_text };
      setChatMessages(prev => [...prev, aiMsg]);
      setVoiceSubtitle(parsed.display_text);

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      await incrementAIUsage(true);
      await speakAndThenListen(parsed.tts_text);
    } catch {
      setVoiceSubtitle('Bağlantı hatası...');
      if (voiceActiveRef.current) setTimeout(() => startListening(), 2000);
    }
  }, [activeLanguage, activePersona, speakAndThenListen, startListening]);

  // ── Toggle Voice Mode ──
  const startVoiceMode = useCallback(async () => {
    voiceActiveRef.current = true;
    setIsVoiceMode(true);
    setVoiceSubtitle('');
    setVoiceUserText('');
    setIdleMascotEnabled(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    // Speak greeting first then start listening loop
    if (activePersona) {
      const rawReply = await AIService.chat(
        [{ role: 'assistant', content: activePersona.greeting }],
        activeLanguage, 'beginner',
        `${activePersona.name} - ${activePersona.role}`
      ).catch(() => null);

      let greetingTTS = activePersona.greeting;
      if (rawReply) {
        const parsed = parseTTSAndDisplay(rawReply);
        greetingTTS = parsed.tts_text;
        setVoiceSubtitle(parsed.display_text);
      }
      await speakAndThenListen(greetingTTS);
    } else {
      startListening();
    }
  }, [activePersona, activeLanguage, speakAndThenListen, startListening]);

  const stopVoiceMode = useCallback(async () => {
    voiceActiveRef.current = false;
    stopListening();
    Speech.stop();
    if (soundRef.current) {
      try {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
      } catch (_) {}
      soundRef.current = null;
    }
    setVoiceSession('idle');
    setVoiceSubtitle('');
    setVoiceUserText('');
    setIsVoiceMode(false);
    setIdleMascotEnabled(true);
  }, []);

  useEffect(() => {
    return () => { voiceActiveRef.current = false; };
  }, []);

  // ──────────────────────────────────────────────────────────────
  // KURDISH TTS
  // ──────────────────────────────────────────────────────────────

  const playKurdishAudio = async (text: string, gender: 'male' | 'female'): Promise<void> => {
    return new Promise(async (resolve) => {
      try {
        if (soundRef.current) { await soundRef.current.unloadAsync(); soundRef.current = null; }
        const speakerId = gender === 'female' ? 'kurmanji_2' : 'kurmanji_1';
        const KURDISH_TTS_KEY = process.env.EXPO_PUBLIC_KURDISH_TTS_KEY;
        if (!KURDISH_TTS_KEY) { resolve(); return; }

        const response = await fetch('https://www.kurdishtts.com/api/tts-proxy', {
          method: 'POST',
          headers: { 'x-api-key': KURDISH_TTS_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({ speaker_id: speakerId, model_version: 'v4', text })
        });

        if (!response.ok) { resolve(); return; }

        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = async () => {
          const base64data = (reader.result as string).split(',')[1];
          // @ts-ignore
          const fileUri = FileSystem.cacheDirectory + 'kurdish_tts.wav';
          // @ts-ignore
          await FileSystem.writeAsStringAsync(fileUri, base64data, { encoding: FileSystem.EncodingType.Base64 });
          await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
          const { sound } = await Audio.Sound.createAsync({ uri: fileUri }, { shouldPlay: true });
          soundRef.current = sound;
          sound.setOnPlaybackStatusUpdate((status: any) => {
            if (status.didJustFinish) { sound.unloadAsync(); soundRef.current = null; resolve(); }
          });
        };
        reader.onerror = () => resolve();
        reader.readAsDataURL(blob);
      } catch { resolve(); }
    });
  };

  // ──────────────────────────────────────────────────────────────
  // TEXT CHAT
  // ──────────────────────────────────────────────────────────────

  const fetchAIResponse = async (currentMessages: any[]) => {
    setIsTyping(true);
    try {
      const history: ChatMessage[] = currentMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));
      const personaPrompt = activePersona ? `${activePersona.name} - ${activePersona.role}` : undefined;
      const rawReply = await AIService.chat(history, activeLanguage, 'beginner', personaPrompt);
      const parsed = parseTTSAndDisplay(rawReply);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      await incrementAIUsage(false);
      setChatMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: parsed.display_text }]);
    } catch {
      setChatMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: 'Bağlantı hatası oluştu. Lütfen tekrar dene.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const sendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const { progress } = useProgressStore.getState();
    const limit = await checkAILimit(progress.isPremium, false);
    if (!limit.allowed) {
      Alert.alert(
        'Günlük Limit Doldu',
        'Metin mesajı hakkınız bitti. Sınırsız pratik için Premium\'a geçebilir veya haklarınızı yenilemek için 2 reklam izleyebilirsiniz.',
        [
          { text: 'Vazgeç', style: 'cancel' },
          { text: 'Reklam İzle (Hak Sıfırla)', onPress: () => {
              AdService.showRewarded(async () => {
                const res = await watchAdToResetLimit(false);
                if (res.success) {
                  Alert.alert('Tebrikler!', 'Haklarınız sıfırlandı, sohbete devam edebilirsiniz!');
                } else {
                  Alert.alert('Harika!', `Sıfırlama için son ${res.adsRemaining} reklam kaldı. Lütfen tekrar tıkla.`);
                }
              }, () => {});
          }},
          { text: 'Premium\'a Geç', onPress: () => navigation.navigate('Premium' as never) }
        ]
      );
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setInputText('');
    const newUserMsg = { id: Date.now().toString(), role: 'user' as const, text };
    setChatMessages(prev => {
      const newMessages = [...prev, newUserMsg];
      fetchAIResponse(newMessages);
      return newMessages;
    });
  };

  const selectPersona = (persona: Persona) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setActivePersona(persona);
    setViewState('chat');
    setChatMessages([{ id: Date.now().toString(), role: 'ai', text: persona.greeting }]);
  };

  // ──────────────────────────────────────────────────────────────
  // RENDER FUNCTIONS
  // ──────────────────────────────────────────────────────────────

  const renderHome = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingBottom: 50, paddingTop: 30 }}>
      <Text style={styles.mainTitle}>🎓 AI Eğitmenler</Text>
      <Text style={styles.mainSubtitle}>Pratik yapmak istediğin eğitmeni seç:</Text>
      <View style={{ gap: 14, marginTop: 12 }}>
        {AI_PERSONAS.map(p => (
          <TouchableOpacity key={p.id} activeOpacity={0.85} onPress={() => selectPersona(p)}>
            <LinearGradient colors={p.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.personaCard}>
              <View style={styles.personaAvatar}>
                <Text style={{ fontSize: 30 }}>{p.avatar}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.personaName}>{p.name}</Text>
                <Text style={styles.personaRole}>{p.role}</Text>
              </View>
              <Feather name="chevron-right" size={22} color="rgba(255,255,255,0.7)" />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderChat = () => (
    <ScrollView
      ref={chatScrollRef}
      style={styles.chatScroll}
      contentContainerStyle={{ padding: 20, paddingBottom: 110 }}
      onContentSizeChange={() => chatScrollRef.current?.scrollToEnd({ animated: true })}
      onLayout={() => chatScrollRef.current?.scrollToEnd({ animated: true })}
    >
      <Text style={styles.chatDate}>Bugün</Text>
      {chatMessages.map((msg: any) => {
        const isUser = msg.role === 'user';
        return (
          <View key={msg.id} style={[styles.msgRow, isUser ? styles.msgUserRow : styles.msgAiRow]}>
            {!isUser && (
              <View style={styles.avatarCircle}>
                <Text style={{ fontSize: 18 }}>{activePersona?.avatar || '🤖'}</Text>
              </View>
            )}
            <View style={[styles.msgBubble, isUser ? styles.msgBubbleUser : styles.msgBubbleAi]}>
              {!isUser && (
                <Text style={{ color: activePersona?.colors[0] || '#7C3AED', fontWeight: '800', marginBottom: 4, fontSize: 12 }}>
                  {activePersona?.name || 'Lingo AI'}
                </Text>
              )}
              <Text style={[styles.msgText, { color: isUser ? '#FFF' : '#E2E8F0' }]}>{msg.text}</Text>
            </View>
          </View>
        );
      })}

      {isTyping && (
        <View style={[styles.msgRow, styles.msgAiRow]}>
          <View style={styles.avatarCircle}>
            <Text style={{ fontSize: 18 }}>{activePersona?.avatar || '🤖'}</Text>
          </View>
          <View style={[styles.msgBubble, styles.msgBubbleAi, { paddingHorizontal: 20 }]}>
            <TypingDots />
          </View>
        </View>
      )}
    </ScrollView>
  );

  const renderVoiceMode = () => {
    const coreState = voiceSession === 'speaking' ? 'speaking' : voiceSession === 'listening' ? 'listening' : voiceSession === 'thinking' ? 'thinking' : 'idle';
    const statusLabel = voiceSession === 'listening' ? '🎙️ Seni dinliyorum...' : voiceSession === 'thinking' ? '🧠 Düşünüyor...' : voiceSession === 'speaking' ? '🗣️ Konuşuyor...' : 'Hazır';
    const statusColor = voiceSession === 'listening' ? '#34D399' : voiceSession === 'thinking' ? '#FBBF24' : voiceSession === 'speaking' ? '#60A5FA' : '#94A3B8';

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
        {/* Status badge */}
        <View style={[styles.statusBadge, { borderColor: statusColor + '60', backgroundColor: statusColor + '18' }]}>
          <Text style={[styles.statusLabel, { color: statusColor }]}>{statusLabel}</Text>
        </View>

        {/* AI Core Visualizer */}
        <AICoreVisualizer state={coreState} gender={activePersona?.gender || 'female'} size={170} />

        {/* Subtitles area */}
        <View style={styles.subtitleArea}>
          {voiceUserText ? (
            <View style={styles.userSpeechBubble}>
              <Feather name="mic" size={12} color="#60A5FA" />
              <Text style={styles.userSpeechText}>"{voiceUserText}"</Text>
            </View>
          ) : null}
          {voiceSubtitle ? (
            <View style={styles.aiSubtitleBubble}>
              <Text style={styles.aiSubtitleText}>{voiceSubtitle}</Text>
            </View>
          ) : null}
        </View>

        {/* Stop button */}
        <TouchableOpacity style={styles.stopVoiceBtn} onPress={stopVoiceMode}>
          <Feather name="phone-off" size={26} color="#FFF" />
          <Text style={{ color: '#FFF', fontWeight: '800', marginLeft: 10, fontSize: 16 }}>Sohbeti Bitir</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // ──────────────────────────────────────────────────────────────
  // MAIN RENDER
  // ──────────────────────────────────────────────────────────────

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LinearGradient colors={['#0F172A', '#020617']} style={StyleSheet.absoluteFillObject} />

      {/* HEADER */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity
          onPress={() => {
            if (isVoiceMode) { stopVoiceMode(); return; }
            if (viewState === 'chat') { setViewState('menu'); setActivePersona(null); } else { navigation.goBack(); }
          }}
          style={styles.headerBtn}
        >
          <Feather name={isVoiceMode ? 'x-circle' : viewState === 'chat' ? 'arrow-left' : 'arrow-left'} size={22} color="#FFF" />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.headerTitle}>
            {isVoiceMode ? '🎙️ Sesli Sohbet' : activePersona ? activePersona.name : '🎓 AI Eğitmenler'}
          </Text>
          {activePersona && !isVoiceMode && (
            <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 1 }}>{activePersona.role}</Text>
          )}
        </View>

        {viewState === 'chat' && !isVoiceMode ? (
          <TouchableOpacity onPress={() => setChatMessages([])} style={styles.headerBtn}>
            <Feather name="trash-2" size={20} color="#FF453A" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 34 }} />
        )}
      </View>

      {/* CONTENT */}
      {isVoiceMode ? (
        renderVoiceMode()
      ) : (
        <>
          {viewState === 'menu' ? renderHome() : renderChat()}

          {viewState === 'chat' && (
            <View style={[styles.inputBar, { paddingBottom: insets.bottom || 16 }]}>
              {/* Voice mode start button */}
              <TouchableOpacity style={styles.voiceToggleBtn} onPress={startVoiceMode}>
                <LinearGradient colors={['#7C3AED', '#4F46E5']} style={styles.voiceToggleBtnInner}>
                  <Feather name="mic" size={20} color="#FFF" />
                </LinearGradient>
              </TouchableOpacity>

              <View style={[styles.inputWrap, { borderColor: inputText.trim() ? '#7C3AED' : 'rgba(255,255,255,0.1)' }]}>
                <TextInput
                  style={styles.input}
                  placeholder="Mesaj yaz..."
                  placeholderTextColor="#64748B"
                  value={inputText}
                  onChangeText={setInputText}
                  multiline
                  onSubmitEditing={() => sendMessage()}
                  returnKeyType="send"
                />
                <TouchableOpacity
                  style={[styles.sendBtn, { backgroundColor: inputText.trim() ? '#7C3AED' : 'rgba(255,255,255,0.08)' }]}
                  onPress={() => sendMessage()}
                  disabled={!inputText.trim()}
                >
                  <Feather name="arrow-up" size={18} color={inputText.trim() ? '#FFF' : '#64748B'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
    </KeyboardAvoidingView>
  );
};

// ──────────── Typing dots ────────────
const TypingDots = () => {
  const dot1 = useRef(new Animated.Value(0.3)).current;
  const dot2 = useRef(new Animated.Value(0.3)).current;
  const dot3 = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    const anim = (dot: Animated.Value, delay: number) =>
      Animated.loop(Animated.sequence([
        Animated.delay(delay),
        Animated.timing(dot, { toValue: 1, duration: 350, useNativeDriver: true }),
        Animated.timing(dot, { toValue: 0.3, duration: 350, useNativeDriver: true }),
      ]));
    Animated.parallel([anim(dot1, 0), anim(dot2, 160), anim(dot3, 320)]).start();
  }, []);
  return (
    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 2 }}>
      {[dot1, dot2, dot3].map((d, i) => (
        <Animated.View key={i} style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: '#94A3B8', opacity: d }} />
      ))}
    </View>
  );
};

// ──────────── STYLES ────────────
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 18, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)',
    backgroundColor: 'rgba(15,23,42,0.95)',
  },
  headerBtn: { padding: 6, width: 34, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },

  mainTitle: { fontSize: 26, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 4 },
  mainSubtitle: { fontSize: 15, color: '#94A3B8', marginBottom: 8 },

  personaCard: { borderRadius: 20, padding: 18, flexDirection: 'row', alignItems: 'center', gap: 14 },
  personaAvatar: {
    width: 56, height: 56, borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.18)', borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.28)', justifyContent: 'center', alignItems: 'center',
  },
  personaName: { color: '#FFF', fontSize: 18, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold' },
  personaRole: { color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: '600', marginTop: 2 },

  chatScroll: { flex: 1 },
  chatDate: { textAlign: 'center', color: '#475569', fontSize: 12, marginVertical: 12 },
  msgRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 14 },
  msgUserRow: { justifyContent: 'flex-end' },
  msgAiRow: { justifyContent: 'flex-start' },
  avatarCircle: {
    width: 36, height: 36, borderRadius: 18, marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center',
  },
  msgBubble: { maxWidth: '76%', padding: 14, borderRadius: 22 },
  msgBubbleUser: { backgroundColor: '#7C3AED', borderBottomRightRadius: 5 },
  msgBubbleAi: { backgroundColor: 'rgba(255,255,255,0.07)', borderBottomLeftRadius: 5, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  msgText: { fontSize: 15.5, lineHeight: 23 },

  inputBar: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingTop: 10,
    backgroundColor: 'rgba(15,23,42,0.97)', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)',
  },
  voiceToggleBtn: { marginRight: 10 },
  voiceToggleBtnInner: { width: 46, height: 46, borderRadius: 23, justifyContent: 'center', alignItems: 'center' },
  inputWrap: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 24,
    paddingLeft: 16, paddingRight: 6, paddingVertical: 4,
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.1)',
  },
  input: { flex: 1, color: '#F1F5F9', fontSize: 15.5, paddingVertical: 9, maxHeight: 110 },
  sendBtn: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginLeft: 6 },

  // Voice mode
  statusBadge: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 18,
    borderRadius: 24, marginBottom: 32, borderWidth: 1,
  },
  statusLabel: { fontSize: 15, fontWeight: '700' },
  subtitleArea: { width: '100%', marginTop: 28, gap: 10, minHeight: 100, alignItems: 'center' },
  userSpeechBubble: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: 'rgba(96,165,250,0.12)', borderWidth: 1, borderColor: 'rgba(96,165,250,0.3)',
    borderRadius: 18, paddingHorizontal: 16, paddingVertical: 10, width: '100%',
  },
  userSpeechText: { color: '#93C5FD', fontSize: 14.5, fontWeight: '500', flex: 1 },
  aiSubtitleBubble: {
    backgroundColor: 'rgba(255,255,255,0.07)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 18, paddingHorizontal: 18, paddingVertical: 12, width: '100%',
  },
  aiSubtitleText: { color: '#E2E8F0', fontSize: 15, lineHeight: 22, textAlign: 'center' },
  stopVoiceBtn: {
    position: 'absolute', bottom: 40, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#EF4444', paddingHorizontal: 28, paddingVertical: 14,
    borderRadius: 30, shadowColor: '#EF4444', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45, shadowRadius: 12, elevation: 10,
  },
});

export default AITutorScreen;
