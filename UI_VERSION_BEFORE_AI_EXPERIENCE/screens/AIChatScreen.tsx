import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList,
  TextInput, KeyboardAvoidingView, Platform, ActivityIndicator,
  Animated, Alert, Keyboard, ScrollView
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BRAND } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { AIService, ChatMessage } from '../services/AIService';
import { Mascot } from '../components/Mascot';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from '../utils/SpeechMock';
import { LinearGradient } from 'expo-linear-gradient';

const LANG_LABELS: Record<string, string> = {
  kurdish: 'Kürtçe', english: 'İngilizce', french: 'Fransızca',
  spanish: 'İspanyolca', german: 'Almanca', turkish: 'Türkçe',
  japanese: 'Japonca', korean: 'Korece', arabic: 'Arapça',
};

const LANG_CODES: Record<string, string> = {
  english: 'en-US', french: 'fr-FR', spanish: 'es-ES',
  german: 'de-DE', kurdish: 'tr-TR', turkish: 'tr-TR',
  japanese: 'ja-JP', korean: 'ko-KR', arabic: 'ar',
};

const STARTER_PROMPTS = [
  'Kendini tanıt',
  'Bugünkü planların neler?',
  'En sevdiğin yemek ne?',
  'Nerede yaşıyorsun?',
];

interface Message extends ChatMessage {
  id: string;
  timestamp: number;
  isLoading?: boolean;
}

const AIChatScreen: React.FC<any> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { activeLanguage } = useLanguageStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [voiceMode, setVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  
  const flatListRef = useRef<FlatList>(null);
  const inputRef = useRef<TextInput>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const micPulse = useRef(new Animated.Value(1)).current;

  const langLabel = LANG_LABELS[activeLanguage] || activeLanguage;
  const langCode = LANG_CODES[activeLanguage] || 'en-US';

  // STT events
  useSpeechRecognitionEvent('result', (event) => {
    const text = event.results?.[0]?.transcript || '';
    setVoiceTranscript(text);
  });
  useSpeechRecognitionEvent('end', () => {
    setIsRecording(false);
    Animated.spring(micPulse, { toValue: 1, useNativeDriver: true }).start();
  });
  useSpeechRecognitionEvent('error', () => {
    setIsRecording(false);
    setVoiceTranscript('');
    Animated.spring(micPulse, { toValue: 1, useNativeDriver: true }).start();
  });

  // Welcome message from Lingo
  useEffect(() => {
    const welcomeMsg: Message = {
      id: 'welcome',
      role: 'assistant',
      content: `Merhaba! Ben Lingo, senin ${langLabel} öğretmenin ve en yakın arkadaşınım! 🐬✨\n\nPratik yapmaya hazır mısın? Konuşmaya başlamak için bir şeyler yaz veya aşağıdaki konulardan birini seç.`,
      timestamp: Date.now(),
    };
    setMessages([welcomeMsg]);
  }, [langLabel]);

  // Loading pulse
  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 0.5, duration: 600, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isLoading]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const userMsg: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    };
    setInputText('');
    setVoiceTranscript('');
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);

    const chatHistory: ChatMessage[] = messages
      .filter(m => m.id !== 'welcome' && !m.isLoading)
      .concat(userMsg)
      .map(m => ({ role: m.role, content: m.content }));

    const reply = await AIService.chat(chatHistory, langLabel);

    const aiMsg: Message = {
      id: `ai_${Date.now()}`,
      role: 'assistant',
      content: reply,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);

    if (voiceMode) {
      const foreignText = reply.split('(')[0].trim();
      playText(foreignText, aiMsg.id);
    }
  }, [messages, isLoading, langLabel, voiceMode, langCode]);

  const startVoiceRecording = async () => {
    if (isLoading || isRecording) return;
    const { status } = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('İzin Gerekli', 'Sesli sohbet için mikrofon izni gereklidir.');
      return;
    }
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setIsRecording(true);
    setVoiceTranscript('');
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(micPulse, { toValue: 1.2, duration: 500, useNativeDriver: true }),
        Animated.timing(micPulse, { toValue: 1, duration: 500, useNativeDriver: true })
      ])
    ).start();

    ExpoSpeechRecognitionModule.start({ lang: langCode, interimResults: true });
  };

  const stopVoiceRecording = () => {
    if (!isRecording) return;
    ExpoSpeechRecognitionModule.stop();
    setIsRecording(false);
    Animated.spring(micPulse, { toValue: 1, useNativeDriver: true }).start();
    
    if (voiceTranscript.trim()) {
      sendMessage(voiceTranscript);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const playText = async (text: string, msgId: string) => {
    if (isSpeaking && speakingMsgId === msgId) {
      Speech.stop();
      setIsSpeaking(false);
      setSpeakingMsgId(null);
      return;
    }
    
    Speech.stop();
    setIsSpeaking(true);
    setSpeakingMsgId(msgId);
    
    const textToSpeak = text.split('(')[0].trim();
    
    Speech.speak(textToSpeak, {
      language: langCode,
      rate: 0.85,
      pitch: 1.1,
      onDone: () => {
        setIsSpeaking(false);
        setSpeakingMsgId(null);
      },
      onError: () => {
        setIsSpeaking(false);
        setSpeakingMsgId(null);
        Alert.alert('Hata', 'Ses oynatılamadı.');
      }
    });
  };

  const toggleVoiceMode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setVoiceMode(!voiceMode);
    if (voiceMode && isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      setSpeakingMsgId(null);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.role === 'user';

    return (
      <View style={[styles.messageWrapper, isUser ? styles.messageWrapperUser : styles.messageWrapperAi]}>
        {!isUser && (
          <View style={styles.mascotAvatar}>
            <Mascot size={28} emotion="happy" />
          </View>
        )}
        
        <View style={{ flex: 1, alignItems: isUser ? 'flex-end' : 'flex-start' }}>
          <View style={[
            styles.messageBubble, 
            isUser ? styles.messageBubbleUser : styles.messageBubbleAi
          ]}>
            <Text style={[styles.messageText, isUser ? styles.messageTextUser : styles.messageTextAi]}>
              {item.content}
            </Text>
          </View>
          
          {!isUser && item.id !== 'welcome' && (
            <TouchableOpacity 
              style={styles.speakerBtn}
              onPress={() => playText(item.content, item.id)}
            >
              <Text style={{ fontSize: 16 }}>{isSpeaking && speakingMsgId === item.id ? '⏸️' : '🔊'}</Text>
              <Text style={styles.speakerText}>Dinle</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* ── PREMIUM HEADER ── */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>Lingo</Text>
          <Text style={styles.headerSub}>{langLabel} Pratiği</Text>
        </View>

        <TouchableOpacity 
          style={[styles.voiceModeBtn, voiceMode && styles.voiceModeBtnActive]}
          onPress={toggleVoiceMode}
        >
          <Text style={{ fontSize: 16 }}>{voiceMode ? '🎙️' : '⌨️'}</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardAvoid} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.chatList}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            isLoading ? (
              <View style={[styles.messageWrapper, styles.messageWrapperAi]}>
                <View style={styles.mascotAvatar}>
                  <Mascot size={28} emotion="thinking" animated />
                </View>
                <Animated.View style={[styles.messageBubble, styles.messageBubbleAi, { opacity: pulseAnim }]}>
                  <Text style={[styles.messageText, styles.messageTextAi]}>Lingo yazıyor...</Text>
                </Animated.View>
              </View>
            ) : null
          )}
        />

        {messages.length === 1 && !voiceMode && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.starterScroll} contentContainerStyle={{ paddingHorizontal: 16 }}>
            {STARTER_PROMPTS.map((prompt, i) => (
              <TouchableOpacity key={i} style={styles.starterChip} onPress={() => sendMessage(prompt)}>
                <Text style={styles.starterText}>{prompt}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {/* ── INPUT AREA ── */}
        <View style={styles.inputArea}>
          {voiceMode ? (
            <View style={styles.voiceInputArea}>
              <Text style={styles.voiceInstruction}>
                {isRecording ? "Seni dinliyorum..." : "Konuşmak için mikrofona basılı tut"}
              </Text>
              {isRecording && <Text style={styles.transcriptPreview} numberOfLines={1}>{voiceTranscript || "..."}</Text>}
              
              <TouchableOpacity 
                activeOpacity={0.7}
                onPressIn={startVoiceRecording}
                onPressOut={stopVoiceRecording}
                disabled={isLoading}
              >
                <Animated.View style={[
                  styles.micButton, 
                  isRecording && styles.micButtonRecording,
                  { transform: [{ scale: micPulse }] }
                ]}>
                  <Text style={{ fontSize: 32 }}>🎙️</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.textInputWrap}>
              <TextInput
                ref={inputRef}
                style={styles.textInput}
                placeholder="Lingo'ya bir şeyler yaz..."
                placeholderTextColor={BRAND.textMuted}
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxLength={200}
                editable={!isLoading}
              />
              <TouchableOpacity 
                style={[styles.sendBtn, (!inputText.trim() || isLoading) && styles.sendBtnDisabled]}
                onPress={() => sendMessage(inputText)}
                disabled={!inputText.trim() || isLoading}
              >
                <Text style={styles.sendBtnIcon}>↑</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

// ═══════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BRAND.bg },

  // Header
  header: {
    backgroundColor: BRAND.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.border,
  },
  backBtn: {
    width: 40, height: 40,
    borderRadius: 20,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
  },
  backBtnText: { color: BRAND.text, fontSize: 24, fontWeight: '600', marginTop: -2 },
  headerTitleWrap: { alignItems: 'center' },
  headerTitle: { color: BRAND.text, fontSize: 18, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  headerSub: { color: BRAND.accent, fontSize: 12, fontWeight: '700' },
  voiceModeBtn: {
    width: 40, height: 40,
    borderRadius: 20,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1, borderColor: BRAND.border,
  },
  voiceModeBtnActive: {
    backgroundColor: BRAND.secondary + '33',
    borderColor: BRAND.secondary,
  },

  // Chat Area
  keyboardAvoid: { flex: 1 },
  chatList: { padding: 16, paddingBottom: 20 },
  
  messageWrapper: { flexDirection: 'row', marginBottom: 20, maxWidth: '90%' },
  messageWrapperAi: { alignSelf: 'flex-start' },
  messageWrapperUser: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
  
  mascotAvatar: {
    width: 38, height: 38,
    borderRadius: 19,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
    marginRight: 10, alignSelf: 'flex-end',
    borderWidth: 1, borderColor: BRAND.border,
  },
  
  messageBubble: {
    paddingHorizontal: 16, paddingVertical: 12,
    borderRadius: 22,
  },
  messageBubbleAi: {
    backgroundColor: BRAND.card,
    borderBottomLeftRadius: 6,
    borderWidth: 1, borderColor: BRAND.border,
  },
  messageBubbleUser: {
    backgroundColor: BRAND.secondary,
    borderBottomRightRadius: 6,
  },
  
  messageText: { fontSize: 15, lineHeight: 22, fontWeight: '500' },
  messageTextAi: { color: BRAND.text },
  messageTextUser: { color: '#FFF' },
  
  speakerBtn: {
    flexDirection: 'row', alignItems: 'center',
    marginTop: 6, paddingHorizontal: 4, gap: 4,
  },
  speakerText: { color: BRAND.accent, fontSize: 12, fontWeight: '700' },

  // Starters
  starterScroll: { maxHeight: 40, marginBottom: 12 },
  starterChip: {
    backgroundColor: BRAND.card,
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: 16, marginRight: 8,
    borderWidth: 1, borderColor: BRAND.border,
  },
  starterText: { color: BRAND.accent, fontSize: 13, fontWeight: '600' },

  // Input Area
  inputArea: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    backgroundColor: BRAND.surface,
    borderTopWidth: 1, borderTopColor: BRAND.border,
  },
  textInputWrap: {
    flexDirection: 'row', alignItems: 'flex-end',
    backgroundColor: BRAND.card,
    borderRadius: 24,
    borderWidth: 1, borderColor: BRAND.border,
    paddingHorizontal: 12, paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    color: BRAND.text,
    fontSize: 15,
    maxHeight: 100, minHeight: 36,
    paddingHorizontal: 8, paddingTop: 8, paddingBottom: 8,
  },
  sendBtn: {
    width: 38, height: 38,
    borderRadius: 19,
    backgroundColor: BRAND.primary,
    justifyContent: 'center', alignItems: 'center',
    marginLeft: 8,
  },
  sendBtnDisabled: { backgroundColor: BRAND.card, opacity: 0.5 },
  sendBtnIcon: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },

  // Voice Mode
  voiceInputArea: { alignItems: 'center', paddingVertical: 10 },
  voiceInstruction: { color: BRAND.textSub, fontSize: 14, fontWeight: '600', marginBottom: 12 },
  transcriptPreview: { color: BRAND.text, fontSize: 15, marginBottom: 16, fontStyle: 'italic', opacity: 0.8 },
  micButton: {
    width: 80, height: 80,
    borderRadius: 40,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: BRAND.secondary,
    shadowColor: BRAND.secondary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4, shadowRadius: 10, elevation: 8,
  },
  micButtonRecording: {
    backgroundColor: BRAND.secondary + '44',
    borderColor: BRAND.primary,
    shadowColor: BRAND.primary,
  },
});

export default AIChatScreen;
