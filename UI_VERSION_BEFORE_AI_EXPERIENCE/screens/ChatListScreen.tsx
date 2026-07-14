import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
  ActivityIndicator, RefreshControl, Platform, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import * as Haptics from 'expo-haptics';
import { Mascot } from '../components/Mascot';
import { BRAND } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { ChatService, ChatConversation } from '../services/ChatService';
import { FriendService, FriendProfile } from '../services/FriendService';

const formatLastTime = (ts: any): string => {
  if (!ts) return '';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'Şimdi';
  if (diffMins < 60) return `${diffMins}dk`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}sa`;
  return d.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' });
};

const ChatListScreen: React.FC<any> = ({ navigation }) => {
  const colors = useThemeColors();
  const { user } = useAuth();
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!user) return;

    // Gerçek zamanlı sohbet dinleme
    const unsub = ChatService.subscribeToMyChats(user.uid, (chats) => {
      setConversations(chats);
      setIsLoading(false);
    });

    // Arkadaş listesi yükle
    FriendService.getFriends(user.uid).then(setFriends).catch(() => {});

    return unsub;
  }, [user]);

  const onRefresh = async () => {
    if (!user) return;
    setRefreshing(true);
    const f = await FriendService.getFriends(user.uid);
    setFriends(f);
    setRefreshing(false);
  };

  const openChat = async (friend: FriendProfile) => {
    if (!user) return;
    const myData = { name: 'Ben', avatar: '🙋' }; // fallback
    const chatId = await ChatService.createOrGetChat(
      user.uid, myData.name, myData.avatar,
      friend.uid, friend.name, friend.avatar,
    );
    navigation.navigate('ChatRoom', {
      chatId,
      otherUid: friend.uid,
      otherName: friend.name,
      otherAvatar: friend.avatar,
    });
  };

  const openExistingChat = (conv: ChatConversation) => {
    if (!user) return;
    const otherUid = conv.participants.find(p => p !== user.uid) || '';
    navigation.navigate('ChatRoom', {
      chatId: conv.id,
      otherUid,
      otherName: conv.participantNames[otherUid] || 'Arkadaş',
      otherAvatar: conv.participantAvatars[otherUid] || '🙋',
    });
  };

  // Arkadaşlardan henüz sohbet başlatılmamış olanlar
  const friendsWithoutChat = friends.filter(f =>
    !conversations.some(c => c.participants.includes(f.uid))
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.surface} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>💬 Mesajlar</Text>
        <TouchableOpacity 
          style={[styles.newChatBtn, { backgroundColor: colors.primary + '20' }]} 
          onPress={() => navigation.navigate('Friends')}
        >
          <Text style={[styles.newChatBtnText, { color: colors.primary }]}>👥 Arkadaşlarım</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
          data={[...conversations]}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={() => (
            <>
              {/* Arkadaşlar bölümü — henüz sohbet açılmayanlar */}
              {friendsWithoutChat.length > 0 && (
                <View style={styles.section}>
                  <Text style={[styles.sectionTitle, { color: colors.textLight }]}>ARKADAŞLAR</Text>
                  {friendsWithoutChat.map(friend => (
                    <TouchableOpacity
                      key={friend.uid}
                      style={[styles.friendRow, { backgroundColor: colors.surface, borderColor: colors.border }]}
                      onPress={() => openChat(friend)}
                    >
                      <View style={[styles.avatarCircle, { backgroundColor: colors.primary + '20' }]}>
                        <Text style={{ fontSize: 24 }}>{friend.avatar}</Text>
                      </View>
                      <View style={styles.rowInfo}>
                        <Text style={[styles.rowName, { color: colors.text }]}>{friend.name}</Text>
                        <Text style={[styles.rowSub, { color: colors.textLight }]}>Sohbet başlat</Text>
                      </View>
                      <Text style={[styles.startBtn, { color: colors.primary }]}>→</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {conversations.length > 0 && (
                <Text style={[styles.sectionTitle, { color: colors.textLight, paddingHorizontal: 16, marginTop: 8 }]}>
                  SON MESAJLAR
                </Text>
              )}
            </>
          )}
          renderItem={({ item }) => {
            const otherUid = item.participants.find(p => p !== user?.uid) || '';
            const name = item.participantNames[otherUid] || 'Arkadaş';
            const avatar = item.participantAvatars[otherUid] || '🙋';
            return (
              <TouchableOpacity
                style={[styles.convRow, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={() => openExistingChat(item)}
              >
                <View style={[styles.avatarCircle, { backgroundColor: colors.primary + '15' }]}>
                  <Text style={{ fontSize: 26 }}>{avatar}</Text>
                </View>
                <View style={styles.rowInfo}>
                  <Text style={[styles.rowName, { color: colors.text }]}>{name}</Text>
                  <Text style={[styles.rowSub, { color: colors.textLight }]} numberOfLines={1}>
                    {item.lastMessage || 'Sohbet başlat...'}
                  </Text>
                </View>
                <Text style={[styles.timeText, { color: colors.textLight }]}>
                  {formatLastTime(item.lastMessageTime)}
                </Text>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            friends.length === 0 ? (
              <View style={styles.empty}>
                <View style={styles.mascotCircle}>
                  <Mascot size={120} emotion="thinking" animated />
                </View>
                <Text style={[styles.emptyTitle, { color: BRAND.text }]}>Sohbet bulunamadı</Text>
                <Text style={[styles.emptyDesc, { color: BRAND.textSub }]}>
                  Lig ekranından arkadaş ekleyerek sohbet başlatabilirsin!
                </Text>
                <TouchableOpacity
                  style={[styles.goLeagueBtn, { backgroundColor: colors.primary }]}
                  onPress={() => navigation.navigate('Lig' as any)}
                >
                  <Text style={styles.goLeagueBtnText}>🏆 Lig'e Git</Text>
                </TouchableOpacity>
              </View>
            ) : null
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 15 : 10,
    paddingBottom: 18,
  },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  newChatBtn: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20 },
  newChatBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  listContent: { paddingBottom: 30 },
  section: { paddingHorizontal: 16, marginBottom: 8 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', letterSpacing: 1.2, marginBottom: 10, marginTop: 16 },
  friendRow: {
    flexDirection: 'row', alignItems: 'center', padding: 14,
    borderRadius: 16, borderWidth: 1, marginBottom: 8, borderBottomWidth: 2,
  },
  convRow: {
    flexDirection: 'row', alignItems: 'center', padding: 14,
    borderRadius: 16, borderWidth: 1, marginHorizontal: 16, marginBottom: 8, borderBottomWidth: 2,
  },
  avatarCircle: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  rowInfo: { flex: 1, marginLeft: 12 },
  rowName: { fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  rowSub: { fontSize: 13, marginTop: 2 },
  timeText: { fontSize: 12 },
  startBtn: { fontSize: 22, fontWeight: 'bold' },
  empty: { flex: 1, alignItems: 'center', paddingTop: 80, paddingHorizontal: 20 },
  mascotCircle: { width: 160, height: 160, borderRadius: 80, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 16, fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  emptyDesc: { fontSize: 15, textAlign: 'center', lineHeight: 22 },
  goLeagueBtn: { paddingHorizontal: 30, paddingVertical: 14, borderRadius: 25, marginTop: 10 },
  goLeagueBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16, fontFamily: 'SpaceGrotesk_700Bold' },
});

export default ChatListScreen;
