import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Easing, TextInput, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeColors, BRAND } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { AIService, ChatMessage } from '../services/AIService';
import { Mascot } from '../components/Mascot';

const ExpoSpeechRecognitionModule = { requestPermissionsAsync: async () => ({ granted: true }), start: () => {}, stop: () => {} };
const useSpeechRecognitionEvent = (e: any, cb: any) => {};

import { NativeStackScreenProps } from '@react-navigation/native-stack';

const QUICK_ACTIONS = [
  { id: 'speak', label: 'Konuşma', icon: '🎙️', color: '#0A84FF' },
  { id: 'roleplay', label: 'Rol Yapma', icon: '🎭', color: '#BF5AF2' },
  { id: 'grammar', label: 'Dilbilgisi', icon: '📚', color: '#28a745' },
  { id: 'vocab', label: 'Kelime', icon: '🔤', color: '#FFD60A' },
  { id: 'translate', label: 'Çeviri', icon: '🌍', color: '#FF453A' },
  { id: 'mistakes', label: 'Hatalar', icon: '✍️', color: '#FF9F0A' },
];

const SCENARIOS = [
  { id: 'restaurant', title: 'Restoranda', desc: 'Yemek siparişi ver ve hesabı öde', icon: '🍔' },
  { id: 'airport', title: 'Havalimanında', desc: 'Check-in yap ve kapını bul', icon: '✈️' },
  { id: 'hotel', title: 'Otel Girişi', desc: 'Oda rezerve et ve havlu iste', icon: '🏨' },
  { id: 'business', title: 'İş Toplantısı', desc: 'Kendini resmi olarak tanıt', icon: '💼' },
];

const AITutorScreen = ({ route }: any) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  const { progress } = useProgressStore();

  const checkpointId = route?.params?.checkpointId;
  const isCheckpoint = !!checkpointId;

  const langProg = progress.languages[activeLanguage] || {};
  
  // Set initial state for checkpoint
  const [viewState, setViewState] = useState<'menu' | 'chat'>(isCheckpoint ? 'chat' : 'menu');
  const [activeScenario, setActiveScenario] = useState<{id: string, title: string, desc: string, icon: string} | null>(
    isCheckpoint ? { id: checkpointId, title: 'Aşama Sonu Sınavı', desc: 'Öğrendiklerini kullanarak görevleri tamamla.', icon: '🤖' } : null
  );
  const totalMistakes = Object.values(langProg.mistakes || {}).reduce((sum, m) => sum + m.count, 0);
  const weakWordsList = Object.entries(langProg.weakWords || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(w => w[0]);
  const weakWordsStr = weakWordsList.length > 0 ? weakWordsList.join(', ') : 'Henüz tespit edilmedi';
  
  // Completed lessons serve as "Strong Topics" conceptually
  const strongCount = (langProg.completedLessons || []).length;
  const strongStr = strongCount > 0 ? `${strongCount} Tamamlanan Ders` : 'Henüz veri yok';

  // State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(
    isCheckpoint ? [{ id: '1', role: 'ai', text: 'Merhaba! Aşama sonu sınavına hoş geldin. Öğrendiğin kelimeleri kullanarak benimle konuşmalısın. Hazırsan başlayalım. (Hello! Welcome to the milestone test. Let us begin if you are ready.)' }] : []
  );
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [micTranscript, setMicTranscript] = useState('');

  useSpeechRecognitionEvent('result', (event: any) => {
    const transcript = event.results[0]?.transcript;
    if (transcript) {
      setMicTranscript(transcript);
    }
  });
  
  // Modals
  const [showRolePlay, setShowRolePlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Animations
  const lingoFloat = useRef(new Animated.Value(0)).current;
  const lingoScale = useRef(new Animated.Value(1)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  // Lingo Breathing & Floating Animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lingoFloat, { toValue: -10, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(lingoFloat, { toValue: 0, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(lingoScale, { toValue: 1.05, duration: 1500, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(lingoScale, { toValue: 1, duration: 1500, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
      ])
    ).start();
  }, []);

  // Initialize checkpoint mode if active (Handled by initial state now)
  // Voice Pulse Animation
  useEffect(() => {
    if (isRecording) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(waveAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
          Animated.timing(waveAnim, { toValue: 0, duration: 600, useNativeDriver: true })
        ])
      ).start();
    } else {
      waveAnim.setValue(0);
      Animated.timing(waveAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start();
    }
  }, [isRecording]);

  const handleAction = (actionId: string, text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (actionId === 'roleplay') {
      setShowRolePlay(true);
      return;
    }
    
    // Start chat
    setViewState('chat');
    const newUserMsg = { id: Date.now().toString(), role: 'user' as const, text };
    setChatMessages([newUserMsg]);
    fetchAIResponse([newUserMsg]);
  };

  const fetchAIResponse = async (currentMessages: {id: string, role: 'user'|'ai', text: string}[]) => {
    setIsTyping(true);
    try {
      const history: ChatMessage[] = currentMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));
      
      const reply = await AIService.chat(history, activeLanguage);
      
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setChatMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'ai', 
        text: reply 
      }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'ai', 
        text: "Üzgünüm, şu an bağlantı kuramıyorum. Lütfen daha sonra tekrar dene! 🐬" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setChatMessages([]);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const text = inputText;
    setInputText('');
    if (viewState === 'menu') setViewState('chat');
    
    const newUserMsg = { id: Date.now().toString(), role: 'user' as const, text };
    setChatMessages(prev => {
      const newMessages = [...prev, newUserMsg];
      fetchAIResponse(newMessages);
      return newMessages;
    });
  };

  const renderHome = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
      {/* Animated Lingo */}
      <View style={styles.lingoContainer}>
        <Animated.View style={[styles.lingoWrap, { transform: [{ translateY: lingoFloat }, { scale: lingoScale }] }]}>
          <Mascot mascotId="classic" size={120} animated={true} animationState="happy" />
        </Animated.View>
        <Text style={styles.lingoTitle}>Merhaba! Ben Lingo.</Text>
        <Text style={styles.lingoSubtitle}>Bugün ne öğrenmek istersin?</Text>
      </View>

      {/* Adaptive Learning Recommends */}
      <View style={styles.adaptiveCard}>
        <LinearGradient colors={['rgba(10,132,255,0.2)', 'rgba(0,0,0,0.5)']} style={styles.adaptiveInner}>
          <Text style={{ fontSize: 24, marginBottom: 5 }}>✨</Text>
          <Text style={styles.adaptiveTitle}>Günlük Hedef</Text>
          <Text style={styles.adaptiveDesc}>Zayıf olduğun 10 kelimeyi tekrar et ve kahve sipariş etme pratiği yap.</Text>
          <TouchableOpacity style={styles.adaptiveBtn} onPress={() => handleAction('objective', 'Günlük hedefime başla')}>
            <Text style={styles.adaptiveBtnText}>Öğrenmeye Başla</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Quick Actions Grid */}
      <Text style={styles.sectionTitle}>Hızlı İşlemler</Text>
      <View style={styles.grid}>
        {QUICK_ACTIONS.map(action => (
          <TouchableOpacity 
            key={action.id} 
            style={styles.actionCard}
            onPress={() => handleAction(action.id, `Hadi ${action.label} pratiği yapalım`)}
          >
            <View style={[styles.iconWrap, { backgroundColor: action.color + '22' }]}>
              <Text style={{ fontSize: 24 }}>{action.icon}</Text>
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Memory Visualization */}
      <Text style={styles.sectionTitle}>Yapay Zeka Hafızası</Text>
      <View style={styles.memoryContainer}>
        <View style={styles.memoryRow}>
          <Text style={styles.memoryLabel}>Güçlü Yönler</Text>
          <Text style={styles.memoryGood}>{strongStr}</Text>
        </View>
        <View style={styles.memoryRow}>
          <Text style={styles.memoryLabel}>Zayıf Kelimeler</Text>
          <Text style={styles.memoryBad}>{weakWordsStr}</Text>
        </View>
        <View style={styles.memoryRow}>
          <Text style={styles.memoryLabel}>Toplam Hata</Text>
          <Text style={styles.memoryNeutral}>{totalMistakes} adet</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderChat = () => (
    <ScrollView style={styles.chatScroll} contentContainerStyle={{ padding: 20, paddingBottom: 150 }}>
      {chatMessages.length === 0 ? (
        <View style={{ alignItems: 'center', marginTop: 40, opacity: 0.8 }}>
          <Mascot mascotId="classic" size={100} animated={true} animationState="idle" />
          <Text style={{ color: '#94A3B8', fontSize: 16, marginTop: 15 }}>Lingo seni dinliyor...</Text>
        </View>
      ) : (
        <Text style={styles.chatDate}>Bugün</Text>
      )}
      
      {chatMessages.map(msg => {
        const isUser = msg.role === 'user';
        return (
          <View key={msg.id} style={[styles.msgRow, isUser ? styles.msgUserRow : styles.msgAiRow]}>
            {!isUser && (
              <View style={{ marginRight: 8, marginBottom: 5 }}>
                <Mascot mascotId="classic" size={40} animated={true} animationState="idle" />
              </View>
            )}
            <View style={[styles.msgBubble, isUser ? styles.msgBubbleUser : styles.msgBubbleAi]}>
              <Text style={[styles.msgText, { color: isUser ? '#FFF' : '#E2E8F0' }]}>{msg.text}</Text>
            </View>
          </View>
        );
      })}

      {isTyping && (
        <View style={[styles.msgRow, styles.msgAiRow]}>
          <View style={{ marginRight: 8, marginBottom: 5 }}>
            <Mascot mascotId="classic" size={40} animated={true} animationState="thinking" />
          </View>
          <View style={[styles.msgBubble, styles.msgBubbleAi, { width: 60, alignItems: 'center' }]}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>•••</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LinearGradient colors={['#0F172A', '#020617']} style={StyleSheet.absoluteFillObject} />

      {/* HEADER */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity 
          onPress={() => {
            if (isCheckpoint) {
              navigation.goBack();
            } else {
              viewState === 'chat' ? setViewState('menu') : navigation.goBack();
            }
          }} 
          style={styles.headerBtn}
        >
          <Text style={{ fontSize: 24, color: '#FFF' }}>❌</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{isCheckpoint ? 'Sınav' : 'Lingo AI'}</Text>
        {isCheckpoint ? (
          <TouchableOpacity 
            onPress={() => {
              const { completeLesson, addGems } = useProgressStore.getState();
              completeLesson(activeLanguage, checkpointId);
              addGems(50); // Boss fight reward
              navigation.navigate('MainTabs' as never);
            }} 
            style={styles.headerBtn}
          >
            <Text style={{ fontSize: 16, color: '#0A84FF', fontWeight: 'bold' }}>Sınavı Bitir</Text>
          </TouchableOpacity>
        ) : viewState === 'chat' ? (
          <TouchableOpacity onPress={clearChat} style={styles.headerBtn}>
            <Text style={{ fontSize: 20, color: '#FF453A' }}>🗑️</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowSettings(true)} style={styles.headerBtn}>
            <Text style={{ fontSize: 24, color: '#FFF' }}>⚙️</Text>
          </TouchableOpacity>
        )}
      </View>

      {activeLanguage !== 'english' ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Animated.View style={[styles.lingoWrap, { transform: [{ translateY: lingoFloat }, { scale: lingoScale }], marginBottom: 30 }]}>
            <Mascot mascotId="classic" size={120} animated={true} animationState="sad" />
          </Animated.View>
          <Text style={{ fontSize: 28, color: '#FFF', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Çok Yakında!</Text>
          <Text style={{ fontSize: 16, color: '#94A3B8', textAlign: 'center', lineHeight: 24 }}>Lingo AI şu an sadece İngilizce için aktif. Diğer diller üzerinde çalışıyoruz!</Text>
        </View>
      ) : (
        <>
          {/* MAIN CONTENT */}
          {viewState === 'menu' ? renderHome() : renderChat()}

          {/* BOTTOM INPUT BAR */}
          <View style={[styles.inputBar, { paddingBottom: insets.bottom || 20 }]}>
            <TouchableOpacity 
              style={[styles.micBtn, isRecording && styles.micBtnActive]}
              onPressIn={() => { 
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); 
                setMicTranscript('');
                // ExpoSpeechRecognitionModule.start({ 
                //   lang: activeLanguage === 'kurdish' ? 'tr-TR' : 'en-US',
                //   interimResults: true,
                //   maxAlternatives: 1
                // });
                setIsRecording(true); 
              }}
              onPressOut={() => { 
                setIsRecording(false); 
                // ExpoSpeechRecognitionModule.stop();
                if (micTranscript.trim()) {
                  setInputText(prev => (prev ? prev + ' ' + micTranscript.trim() : micTranscript.trim()));
                  setMicTranscript('');
                }
              }}
            >
              {isRecording && (
                <Animated.View style={[styles.waveAnim, { 
                  transform: [{ scale: waveAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
                  opacity: waveAnim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] })
                }]} />
              )}
              <Feather name="mic" size={24} color={isRecording ? "#FF453A" : "#A0AEC0"} />
            </TouchableOpacity>
            
            <View style={[styles.inputWrap, { borderColor: inputText.trim() || micTranscript ? '#0A84FF' : 'rgba(255,255,255,0.1)' }]}>
              <TextInput
                style={styles.input}
                placeholder="Lingo'ya yaz..."
                placeholderTextColor="#64748B"
                value={isRecording && micTranscript ? micTranscript : inputText}
                onChangeText={setInputText}
                multiline
              />
              <TouchableOpacity 
                style={[styles.sendBtn, { backgroundColor: inputText.trim() ? '#0A84FF' : 'rgba(255,255,255,0.1)' }]} 
                onPress={sendMessage}
                disabled={!inputText.trim()}
              >
                <Feather name="arrow-up" size={20} color={inputText.trim() ? "#FFF" : "#64748B"} style={{ fontWeight: 'bold' }} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {/* ROLE PLAY MODAL */}
      <Modal visible={showRolePlay} animationType="slide" transparent>
        <View style={styles.modalBg}>
          <View style={[styles.modalBox, { paddingBottom: insets.bottom || 20 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Senaryo Seç</Text>
              <TouchableOpacity onPress={() => setShowRolePlay(false)}>
                <Text style={{ fontSize: 24, color: '#FFF' }}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ maxHeight: 400 }}>
              {SCENARIOS.map(s => (
                <TouchableOpacity 
                  key={s.id} 
                  style={styles.scenarioCard}
                  onPress={() => {
                    setShowRolePlay(false);
                    handleAction('scenario', `Hadi rol yapalım: ${s.title}`);
                  }}
                >
                  <Text style={{ fontSize: 40, marginRight: 15 }}>{s.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.scenarioTitle}>{s.title}</Text>
                    <Text style={styles.scenarioDesc}>{s.desc}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* SETTINGS MODAL */}
      <Modal visible={showSettings} animationType="slide" transparent>
        <View style={styles.modalBg}>
          <View style={[styles.modalBox, { paddingBottom: insets.bottom || 20 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Yapay Zeka Ayarları</Text>
              <TouchableOpacity onPress={() => setShowSettings(false)}>
                <Text style={{ fontSize: 24, color: '#FFF' }}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={{ gap: 20 }}>
              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Kişilik</Text>
                <Text style={styles.settingValue}>Arkadaş Canlısı ✨</Text>
              </View>
              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Ses</Text>
                <Text style={styles.settingValue}>Kadın 🗣️</Text>
              </View>
              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Öğrenme Hızı</Text>
                <Text style={styles.settingValue}>Uyarlanabilir 🚀</Text>
              </View>
              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Yapay Zeka Hafızası</Text>
                <Text style={[styles.settingValue, { color: '#28a745' }]}>Açık</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  headerBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },

  lingoContainer: { alignItems: 'center', marginVertical: 30 },
  lingoWrap: { width: 120, height: 120, borderRadius: 60, backgroundColor: 'rgba(10,132,255,0.2)', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#0A84FF', shadowColor: '#0A84FF', shadowOpacity: 0.5, shadowRadius: 20, elevation: 10 },
  lingoMascot: { fontSize: 60 },
  lingoTitle: { fontSize: 24, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', marginTop: 20 },
  lingoSubtitle: { fontSize: 16, color: '#94A3B8', marginTop: 5 },

  adaptiveCard: { borderRadius: 24, overflow: 'hidden', marginBottom: 30 },
  adaptiveInner: { padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 24 },
  adaptiveTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  adaptiveDesc: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 5, marginBottom: 15, lineHeight: 20 },
  adaptiveBtn: { backgroundColor: '#0A84FF', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  adaptiveBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },

  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 15, marginLeft: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 30 },
  actionCard: { width: '48%', backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  iconWrap: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  actionLabel: { color: '#FFF', fontWeight: '700', fontSize: 14, flex: 1 },

  memoryContainer: { backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 20, padding: 15, gap: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  memoryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 },
  memoryLabel: { color: '#94A3B8', fontSize: 14, fontWeight: '600' },
  memoryGood: { color: '#28a745', fontWeight: 'bold', fontSize: 14 },
  memoryBad: { color: '#FF453A', fontWeight: 'bold', fontSize: 14 },
  memoryNeutral: { color: '#FFD60A', fontWeight: 'bold', fontSize: 14 },

  chatScroll: { flex: 1 },
  chatDate: { textAlign: 'center', color: '#64748B', fontSize: 12, marginVertical: 10 },
  msgRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 15 },
  msgUserRow: { justifyContent: 'flex-end' },
  msgAiRow: { justifyContent: 'flex-start' },
  msgAvatar: { fontSize: 24, marginRight: 8, marginBottom: 5 },
  msgBubble: { maxWidth: '75%', padding: 15, borderRadius: 24 },
  msgBubbleUser: { backgroundColor: '#0A84FF', borderBottomRightRadius: 5 },
  msgBubbleAi: { backgroundColor: 'rgba(255,255,255,0.1)', borderBottomLeftRadius: 5, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  msgText: { fontSize: 16, lineHeight: 24 },

  inputBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 10, backgroundColor: '#020617', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)' },
  micBtn: { width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  micBtnActive: { backgroundColor: 'rgba(255,69,58,0.3)' },
  waveAnim: { position: 'absolute', width: 50, height: 50, borderRadius: 25, backgroundColor: '#FF453A' },
  inputWrap: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 25, paddingLeft: 18, paddingRight: 6, paddingVertical: 4, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  input: { flex: 1, color: '#FFF', fontSize: 16, paddingVertical: 10, maxHeight: 100 },
  sendBtn: { width: 38, height: 38, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginLeft: 8 },

  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'flex-end' },
  modalBox: { backgroundColor: '#0F172A', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  scenarioCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 20, marginBottom: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  scenarioTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  scenarioDesc: { fontSize: 14, color: '#94A3B8', marginTop: 4 },

  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 16 },
  settingLabel: { fontSize: 16, color: '#FFF', fontWeight: '600' },
  settingValue: { fontSize: 16, color: '#0A84FF', fontWeight: 'bold' }
});

export default AITutorScreen;
