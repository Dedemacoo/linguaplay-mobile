import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, StatusBar, ActivityIndicator,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { ChatService, ChatMessage } from '../services/ChatService';
import * as Haptics from 'expo-haptics';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;

const formatTime = (ts: any): string => {
  if (!ts) return '';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
};

const ChatRoomScreen: React.FC<Props> = ({ navigation, route }) => {
  const { chatId, otherUid, otherName, otherAvatar } = route.params;
  const colors = useThemeColors();
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const sendScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const unsub = ChatService.subscribeToMessages(chatId, (msgs) => {
      setMessages(msgs);
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    });
    return unsub;
  }, [chatId]);

  const handleSend = async () => {
    if (!inputText.trim() || !user) return;
    const text = inputText.trim();
    setInputText('');
    setSending(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Send button bounce animation
    Animated.sequence([
      Animated.timing(sendScale, { toValue: 0.85, duration: 80, useNativeDriver: true }),
      Animated.spring(sendScale, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();

    try {
      await ChatService.sendMessage(chatId, user.uid, text);
    } catch (err) {
      console.warn('Message send failed:', err);
    } finally {
      setSending(false);
    }
  };

  const renderMessage = ({ item, index }: { item: ChatMessage; index: number }) => {
    const isMe = item.senderId === user?.uid;
    const prevItem = index > 0 ? messages[index - 1] : null;
    const showAvatar = !isMe && (!prevItem || prevItem.senderId !== item.senderId);

    return (
      <View style={[styles.msgRow, isMe ? styles.msgRowMe : styles.msgRowOther]}>
        {!isMe && (
          <View style={styles.avatarSlot}>
            {showAvatar ? (
              <View style={[styles.msgAvatar, { backgroundColor: colors.primary + '20' }]}>
                <Text style={{ fontSize: 18 }}>{otherAvatar}</Text>
              </View>
            ) : (
              <View style={styles.avatarPlaceholder} />
            )}
          </View>
        )}
        <View style={[
          styles.bubble,
          isMe
            ? [styles.bubbleMe, { backgroundColor: colors.primary }]
            : [styles.bubbleOther, { backgroundColor: colors.surface, borderColor: colors.border }],
        ]}>
          <Text style={[styles.bubbleText, { color: isMe ? '#FFF' : colors.text }]}>
            {item.text}
          </Text>
          <Text style={[styles.bubbleTime, { color: isMe ? 'rgba(255,255,255,0.65)' : colors.textLight }]}>
            {formatTime(item.timestamp)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={[styles.backArrow, { color: colors.text }]}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={[styles.headerAvatar, { backgroundColor: colors.primary + '20' }]}>
            <Text style={{ fontSize: 22 }}>{otherAvatar}</Text>
          </View>
          <View>
            <Text style={[styles.headerName, { color: colors.text }]}>{otherName}</Text>
            <Text style={[styles.headerStatus, { color: colors.textLight }]}>Çevrimiçi</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.duelHeaderBtn}
          onPress={() => navigation.navigate('QuizBattle' as any, { opponentName: otherName, opponentAvatar: otherAvatar })}
        >
          <Text style={{ fontSize: 16 }}>⚔️</Text>
          <Text style={styles.duelHeaderText}>Düello</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyChat}>
            <Text style={{ fontSize: 50 }}>💬</Text>
            <Text style={[styles.emptyChatText, { color: colors.textLight }]}>
              Henüz mesaj yok.{'\n'}İlk mesajı sen gönder!
            </Text>
          </View>
        )}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
      />

      {/* Input */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.inputBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
          <TextInput
            style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Mesaj yaz..."
            placeholderTextColor={colors.textLight}
            multiline
            maxLength={500}
            onSubmitEditing={handleSend}
          />
          <Animated.View style={{ transform: [{ scale: sendScale }] }}>
            <TouchableOpacity
              style={[styles.sendBtn, { backgroundColor: inputText.trim() ? colors.primary : colors.border }]}
              onPress={handleSend}
              disabled={!inputText.trim() || sending}
            >
              {sending ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.sendIcon}>➤</Text>
              )}
            </TouchableOpacity>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  backBtn: {
    padding: 10,
    marginRight: 5,
  },
  backArrow: {
    fontSize: 26,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerStatus: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
  },
  duelHeaderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },
  duelHeaderText: { fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 13 },
  messagesContent: { paddingHorizontal: 12, paddingVertical: 16, flexGrow: 1 },
  msgRow: { flexDirection: 'row', marginBottom: 4, alignItems: 'flex-end' },
  msgRowMe: { justifyContent: 'flex-end' },
  msgRowOther: { justifyContent: 'flex-start' },
  avatarSlot: { width: 38, marginRight: 6 },
  avatarPlaceholder: { width: 38 },
  msgAvatar: { width: 34, height: 34, borderRadius: 17, justifyContent: 'center', alignItems: 'center' },
  bubble: {
    maxWidth: '75%', paddingHorizontal: 14, paddingVertical: 9,
    borderRadius: 18, borderBottomWidth: 2,
  },
  bubbleMe: { borderBottomRightRadius: 4, borderBottomWidth: 2, borderBottomColor: 'rgba(0,0,0,0.15)' },
  bubbleOther: { borderBottomLeftRadius: 4, borderWidth: 1 },
  bubbleText: { fontSize: 15, lineHeight: 21 },
  bubbleTime: { fontSize: 10, marginTop: 4, textAlign: 'right' },
  emptyChat: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 80, gap: 12 },
  emptyChatText: { fontSize: 15, textAlign: 'center', lineHeight: 22 },
  inputBar: {
    flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 12,
    paddingVertical: 10, borderTopWidth: 1, gap: 10,
  },
  input: {
    flex: 1, borderRadius: 22, borderWidth: 1, paddingHorizontal: 16,
    paddingVertical: 10, fontSize: 15, maxHeight: 120,
  },
  sendBtn: {
    width: 46, height: 46, borderRadius: 23, justifyContent: 'center', alignItems: 'center',
  },
  sendIcon: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default ChatRoomScreen;
