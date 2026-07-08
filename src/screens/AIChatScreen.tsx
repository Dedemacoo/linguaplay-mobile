import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList,
  TextInput, KeyboardAvoidingView, Platform, ActivityIndicator,
  Animated, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { AIService, ChatMessage } from '../services/AIService';
import { VocabularyService } from '../services/VocabularyService';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

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
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const { progress } = useProgressStore();
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

  // Başlangıç mesajı
  useEffect(() => {
    const welcomeMsg: Message = {
      id: 'welcome',
      role: 'assistant',
      content: `Merhaba! Ben Arjin, senin ${langLabel} konuşma koçunum! ✨\n\nKonuşmaya başlamak için bir şeyler yaz veya aşağıdaki başlangıç konularından birini seç.`,
      timestamp: Date.now(),
    };
    setMessages([welcomeMsg]);
  }, []);

  // Pulsing animation for loading dots
  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 0.4, duration: 500, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
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
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Scroll to bottom
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);

    // Build context for AI
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);

    // Sesli modda AI yanıtını otomatik oku
    if (voiceMode) {
      const foreignText = reply.split('(')[0].trim();
      Speech.speak(foreignText, { language: langCode, rate: 0.85 });
    }
  }, [messages, isLoading, langLabel, voiceMode, langCode]);

  // Sesli kayıt başlat
  const startVoiceRecording = async () => {
    if (isLoading || isRecording) return;
    const { status } = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('İzin Gerekli', 'Sesli sohbet için mikrofon izni gereklidir.');
      return;
    }
    setVoiceTranscript('');
    setIsRecording(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(micPulse, { toValue: 1.3, duration: 500, useNativeDriver: true }),
        Animated.timing(micPulse, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ).start();
    ExpoSpeechRecognitionModule.start({
      lang: 'tr-TR', // Kullanıcı Türkçe soruyor, AI hedef dilde cevaplıyor
      interimResults: true,
    });
  };

  // Sesli kaydı durdur ve gönder
  const stopVoiceRecording = () => {
    ExpoSpeechRecognitionModule.stop();
    setIsRecording(false);
    Animated.spring(micPulse, { toValue: 1, useNativeDriver: true }).start();
    if (voiceTranscript.trim()) {
      sendMessage(voiceTranscript.trim());
      setVoiceTranscript('');
    }
  };

  const speakMessage = async (text: string, msgId: string) => {
    if (isSpeaking && speakingMsgId === msgId) {
      Speech.stop();
      setIsSpeaking(false);
      setSpeakingMsgId(null);
      return;
    }
    Haptics.selectionAsync();
    Speech.stop();
    setSpeakingMsgId(msgId);
    setIsSpeaking(true);
    // Extract only the foreign language part (before the parenthesis)
    const foreignText = text.split('(')[0].trim();
    Speech.speak(foreignText, {
      language: langCode,
      rate: 0.85,
      onDone: () => { setIsSpeaking(false); setSpeakingMsgId(null); },
      onError: () => { setIsSpeaking(false); setSpeakingMsgId(null); },
    });
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.role === 'user';
    const isThisSpeaking = speakingMsgId === item.id;

    return (
      <View style={[styles.msgRow, isUser && styles.msgRowUser]}>
        {!isUser && <Text style={styles.aiAvatar}>✨</Text>}
        <View style={[
          styles.bubble,
          isUser
            ? [styles.userBubble, { backgroundColor: colors.primary }]
            : [styles.aiBubble, { backgroundColor: colors.surface }],
        ]}>
          <Text style={[styles.bubbleText, { color: isUser ? '#FFF' : colors.text }]}>
            {item.content}
          </Text>
          {!isUser && (
            <TouchableOpacity
              style={styles.speakBtn}
              onPress={() => speakMessage(item.content, item.id)}
            >
              <Text style={{ fontSize: 16 }}>{isThisSpeaking ? '⏹️' : '🔊'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ color: colors.primary, fontSize: 24 }}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>✨ Arjin</Text>
          <Text style={[styles.headerSub, { color: colors.textLight }]}>{langLabel} Konuşma Koçu</Text>
        </View>
        {/* Sesli mod toggle */}
        <TouchableOpacity
          onPress={() => { setVoiceMode(v => !v); Haptics.selectionAsync(); }}
          style={[styles.voiceModeBtn, { backgroundColor: voiceMode ? colors.primary : colors.surface, borderColor: colors.border }]}
        >
          <Text style={{ fontSize: 18 }}>{voiceMode ? '🎙️' : '💬'}</Text>
        </TouchableOpacity>
        <View style={[styles.activeDot, { backgroundColor: '#22C55E', marginLeft: 8 }]} />
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messageList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {/* Loading indicator */}
      {isLoading && (
        <View style={[styles.loadingRow, { backgroundColor: colors.surface }]}>
          <Text style={styles.aiAvatar}>✨</Text>
          <Animated.View style={[styles.loadingBubble, { opacity: pulseAnim }]}>
            <Text style={{ color: colors.textLight }}>● ● ●</Text>
          </Animated.View>
        </View>
      )}

      {/* Starter prompts */}
      {messages.length <= 1 && (
        <View style={styles.starterRow}>
          {STARTER_PROMPTS.map(prompt => (
            <TouchableOpacity
              key={prompt}
              style={[styles.starterChip, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}
              onPress={() => sendMessage(prompt)}
            >
              <Text style={[styles.starterText, { color: colors.primary }]}>{prompt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        {/* Sesli mod aktifken transcript göster */}
        {voiceMode && isRecording && (
          <View style={[styles.transcriptBar, { backgroundColor: colors.primary + '15', borderTopColor: colors.primary + '30' }]}>
            <Text style={{ color: colors.primary, fontSize: 13 }}>
              🎤 {voiceTranscript || 'Dinliyorum...'}
            </Text>
          </View>
        )}
        <View style={[styles.inputRow, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
          {voiceMode ? (
            /* Sesli mod: büyük mikrofon butonu */
            <View style={{ flex: 1, alignItems: 'center', paddingVertical: 6 }}>
              <Animated.View style={{ transform: [{ scale: micPulse }] }}>
                <TouchableOpacity
                  onPressIn={startVoiceRecording}
                  onPressOut={stopVoiceRecording}
                  style={[
                    styles.bigMicBtn,
                    { backgroundColor: isRecording ? colors.error : colors.primary },
                  ]}
                >
                  <Text style={{ fontSize: 28 }}>{isRecording ? '⏹' : '🎤'}</Text>
                </TouchableOpacity>
              </Animated.View>
              <Text style={{ color: colors.textLight, fontSize: 11, marginTop: 4 }}>
                {isRecording ? 'Bırak → Gönder' : 'Bas & Konuş'}
              </Text>
            </View>
          ) : (
            /* Metin modu */
            <>
              <TextInput
                ref={inputRef}
                style={[styles.input, { color: colors.text, backgroundColor: colors.background }]}
                placeholder={`${langLabel}'de bir şeyler yaz...`}
                placeholderTextColor={colors.textLight}
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxLength={300}
                onSubmitEditing={() => sendMessage(inputText)}
              />
              <TouchableOpacity
                style={[styles.sendBtn, { backgroundColor: colors.primary, opacity: inputText.trim() ? 1 : 0.4 }]}
                onPress={() => sendMessage(inputText)}
                disabled={!inputText.trim() || isLoading}
              >
                <Text style={styles.sendIcon}>➤</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16,
    paddingVertical: 12, borderBottomWidth: 1,
  },
  backBtn: { padding: 4, marginRight: 8 },
  headerCenter: { flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  headerSub: { fontSize: 12, marginTop: 1 },
  activeDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#22C55E' },
  messageList: { padding: 16, paddingBottom: 8, gap: 12 },
  msgRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, marginBottom: 4 },
  msgRowUser: { flexDirection: 'row-reverse' },
  aiAvatar: { fontSize: 28, marginBottom: 4 },
  bubble: { maxWidth: '78%', borderRadius: 18, padding: 12 },
  userBubble: { borderBottomRightRadius: 4 },
  aiBubble: { borderBottomLeftRadius: 4 },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  speakBtn: { alignSelf: 'flex-end', marginTop: 6 },
  loadingRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 8 },
  loadingBubble: { padding: 12, borderRadius: 16 },
  starterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 16, paddingVertical: 12 },
  starterChip: { borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1 },
  starterText: { fontSize: 13, fontWeight: '600' },
  inputRow: {
    flexDirection: 'row', alignItems: 'flex-end', gap: 10,
    paddingHorizontal: 16, paddingVertical: 10, borderTopWidth: 1,
  },
  input: {
    flex: 1, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10,
    fontSize: 15, maxHeight: 100,
  },
  sendBtn: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  sendIcon: { color: '#FFF', fontSize: 18 },
  voiceModeBtn: {
    width: 38, height: 38, borderRadius: 19,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 1,
  },
  transcriptBar: {
    paddingHorizontal: 16, paddingVertical: 8,
    borderTopWidth: 1,
  },
  bigMicBtn: {
    width: 64, height: 64, borderRadius: 32,
    justifyContent: 'center', alignItems: 'center',
    shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 12,
    elevation: 8,
  },
});

export default AIChatScreen;
