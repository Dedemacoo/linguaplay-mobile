import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList, Platform, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { FriendService, FriendProfile, FriendRequest } from '../services/FriendService';
import { ChatService } from '../services/ChatService';
import { DuelService, DuelRequest } from '../services/DuelService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const FriendsScreen: React.FC<any> = ({ navigation }) => {
  const colors = useThemeColors();
  const { user } = useAuth();
  
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [incomingRequests, setIncomingRequests] = useState<FriendRequest[]>([]);
  const [incomingDuelRequests, setIncomingDuelRequests] = useState<DuelRequest[]>([]);
  
  const [friendsLoading, setFriendsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchFriends = useCallback(async () => {
    if (!user) return;
    try {
      const [list, reqs, dReqs] = await Promise.all([
        FriendService.getFriends(user.uid),
        FriendService.getIncomingRequests(user.uid),
        DuelService.getIncomingRequests(user.uid).catch(() => [])
      ]);
      // Rank friends by XP (the user asked: "show who is the first in the friends section")
      const sortedList = [...list].sort((a, b) => b.xp - a.xp);
      setFriends(sortedList);
      setIncomingRequests(reqs);
      setIncomingDuelRequests(dReqs);
    } catch { }
    setFriendsLoading(false);
  }, [user]);

  useEffect(() => { fetchFriends(); }, [fetchFriends]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFriends();
    setRefreshing(false);
  };

  const handleAcceptDuel = async (req: DuelRequest) => {
    setActionLoading(req.id);
    try {
      await DuelService.acceptDuel(req.id);
      setIncomingDuelRequests(prev => prev.filter(r => r.id !== req.id));
      navigation.navigate('QuizBattle' as any, { opponentName: req.fromName, opponentAvatar: req.fromAvatar });
    } catch (e) {
      Alert.alert('Hata', 'Kabul edilemedi.');
    }
    setActionLoading(null);
  };

  const handleRejectDuel = async (req: DuelRequest) => {
    setActionLoading(req.id);
    try {
      await DuelService.rejectDuel(req.id);
      setIncomingDuelRequests(prev => prev.filter(r => r.id !== req.id));
    } catch (e) {}
    setActionLoading(null);
  };

  const handleAcceptRequest = async (req: FriendRequest) => {
    if (!user) return;
    setActionLoading(req.id);
    try {
      await FriendService.acceptFriendRequest(req.id, req.from, user.uid);
      setIncomingRequests(prev => prev.filter(r => r.id !== req.id));
      await fetchFriends();
    } catch (e) {
      Alert.alert('Hata', 'İstek kabul edilemedi.');
    }
    setActionLoading(null);
  };

  const handleRejectRequest = async (req: FriendRequest) => {
    setActionLoading(req.id);
    try {
      await FriendService.rejectFriendRequest(req.id);
      setIncomingRequests(prev => prev.filter(r => r.id !== req.id));
    } catch (e) {}
    setActionLoading(null);
  };

  const handleRemoveFriend = async (friendUid: string) => {
    if (!user) return;
    setActionLoading('remove_' + friendUid);
    try {
      await FriendService.removeFriend(user.uid, friendUid);
      setFriends(prev => prev.filter(f => f.uid !== friendUid));
    } catch (e) {
      Alert.alert('Hata', 'Arkadaş silinemedi.');
    }
    setActionLoading(null);
  };

  const handleOpenChat = async (friend: FriendProfile) => {
    if (!user) return;
    try {
      const myDoc = await getDoc(doc(db, 'users', user.uid));
      const myData = myDoc.data() || {};
      const chatId = await ChatService.createOrGetChat(
        user.uid, myData.name || 'Sen', myData.avatar || '🙋',
        friend.uid, friend.name, friend.avatar,
      );
      navigation.navigate('ChatRoom' as any, {
        chatId,
        otherUid: friend.uid,
        otherName: friend.name,
        otherAvatar: friend.avatar,
      });
    } catch (err) {
      Alert.alert('Hata', 'Sohbet açılamadı.');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
      
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>👥 Arkadaşlar</Text>
      </View>

      {friendsLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item) => item.uid}
          contentContainerStyle={[styles.listContent, { paddingTop: 20 }]}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
          ListEmptyComponent={() => (
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 60, gap: 14 }}>
              <Text style={{ fontSize: 56 }}>👥</Text>
              <Text style={[styles.name, { color: colors.text, textAlign: 'center' }]}>Henüz arkadaşın yok</Text>
              <Text style={{ color: colors.textLight, textAlign: 'center', fontSize: 14, lineHeight: 20 }}>
                Lig sıralamasındaki kişilere{'\n'}arkadaşlık isteği gönderebilirsin!
              </Text>
              <TouchableOpacity
                style={[styles.addBtn, { backgroundColor: colors.primary, paddingHorizontal: 24, marginTop: 10 }]}
                onPress={() => navigation.navigate('Lig' as any)}
              >
                <Text style={styles.addBtnText}>🏆 Lig'e Bak</Text>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 20 }}>
              {incomingDuelRequests.length > 0 && (
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginBottom: 10, paddingHorizontal: 5 }}>Gelen Düello İstekleri ({incomingDuelRequests.length})</Text>
                  {incomingDuelRequests.map(req => (
                    <View key={req.id} style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.error }]}>
                      <View style={[styles.friendAvatar, { backgroundColor: colors.error + '20' }]}>
                        <Text style={{ fontSize: 26 }}>{req.fromAvatar || '🙋'}</Text>
                      </View>
                      <View style={styles.cardInfo}>
                        <Text style={[styles.name, { color: colors.text }]}>{req.fromName}</Text>
                        <Text style={{ color: colors.error, fontSize: 13, marginTop: 2, fontWeight: 'bold' }}>⚔️ Sana meydan okudu!</Text>
                      </View>
                      {actionLoading === req.id ? (
                        <ActivityIndicator size="small" color={colors.primary} />
                      ) : (
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                          <TouchableOpacity style={[styles.chatBtn, { backgroundColor: colors.border, borderColor: colors.border }]} onPress={() => handleRejectDuel(req)}>
                            <Text style={{ fontSize: 16 }}>❌</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.chatBtn, { backgroundColor: colors.error, borderColor: '#CC2222' }]} onPress={() => handleAcceptDuel(req)}>
                            <Text style={{ fontSize: 16 }}>⚔️</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {incomingRequests.length > 0 && (
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginBottom: 10, paddingHorizontal: 5 }}>Gelen İstekler ({incomingRequests.length})</Text>
                  {incomingRequests.map(req => (
                    <View key={req.id} style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                      <View style={[styles.friendAvatar, { backgroundColor: colors.primary + '20' }]}>
                        <Text style={{ fontSize: 26 }}>{req.fromAvatar || '🙋'}</Text>
                      </View>
                      <View style={styles.cardInfo}>
                        <Text style={[styles.name, { color: colors.text }]}>{req.fromName}</Text>
                        <Text style={{ color: colors.textLight, fontSize: 13, marginTop: 2 }}>Seni eklemek istiyor</Text>
                      </View>
                      {actionLoading === req.id ? (
                        <ActivityIndicator size="small" color={colors.primary} />
                      ) : (
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                          <TouchableOpacity 
                            style={[styles.chatBtn, { backgroundColor: colors.error + '20', borderColor: colors.error }]}
                            onPress={() => handleRejectRequest(req)}
                          >
                            <Text style={{ fontSize: 16 }}>❌</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={[styles.chatBtn, { backgroundColor: colors.success + '20', borderColor: colors.success }]}
                            onPress={() => handleAcceptRequest(req)}
                          >
                            <Text style={{ fontSize: 16 }}>✅</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {friends.length > 0 && (
                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginTop: 5, paddingHorizontal: 5 }}>Sıralama (Arkadaşlar) ({friends.length})</Text>
              )}
            </View>
          )}
          renderItem={({ item, index }) => (
            <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              {/* RANK BADGE */}
              <View style={[styles.rankBadge, { backgroundColor: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : colors.surface, borderColor: colors.border }]}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: index < 3 ? '#FFF' : colors.textLight }}>
                  #{index + 1}
                </Text>
              </View>

              <View style={[styles.friendAvatar, { backgroundColor: colors.primary + '20' }]}>
                <Text style={{ fontSize: 26 }}>{item.avatar}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
                <Text style={{ color: colors.primary, fontSize: 13, marginTop: 2, fontWeight: 'bold' }}>{item.xp.toLocaleString()} XP</Text>
              </View>

              {actionLoading === 'remove_' + item.uid ? (
                <ActivityIndicator size="small" color={colors.error} style={{ marginLeft: 10 }} />
              ) : (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <TouchableOpacity 
                    style={[styles.chatBtn, { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}
                    onPress={() => handleOpenChat(item)}
                  >
                    <Text style={{ fontSize: 18 }}>💬</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.chatBtn, { backgroundColor: colors.error + '20', borderColor: colors.error }]}
                    onPress={() => {
                      Alert.alert(
                        'Arkadaşı Sil',
                        `${item.name} listenden silinecek. Emin misin?`,
                        [
                          { text: 'İptal', style: 'cancel' },
                          { text: 'Sil', style: 'destructive', onPress: () => handleRemoveFriend(item.uid) }
                        ]
                      );
                    }}
                  >
                    <Text style={{ fontSize: 14 }}>🗑️</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  listContent: { padding: 15, paddingBottom: 100 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  rankBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
  },
  friendAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  chatBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  addBtnText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
});

export default FriendsScreen;
