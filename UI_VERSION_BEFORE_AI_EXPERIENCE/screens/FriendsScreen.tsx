import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList, Platform, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BRAND } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { FriendService, FriendProfile, FriendRequest } from '../services/FriendService';
import { ChatService } from '../services/ChatService';
import { DuelService, DuelRequest } from '../services/DuelService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Mascot } from '../components/Mascot';

const FriendsScreen: React.FC<any> = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BRAND.surface} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👥 Arkadaşlar</Text>
      </View>

      {friendsLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={BRAND.primary} />
        </View>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item) => item.uid}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={BRAND.primary} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <View style={styles.mascotCircle}>
                <Mascot size={120} emotion="sad" animated />
              </View>
              <Text style={styles.emptyTitle}>Henüz arkadaşın yok</Text>
              <Text style={styles.emptyDesc}>
                Lingo seninle öğrenmeyi çok seviyor ama tek başına biraz sıkıldı. Lig sıralamasından yeni arkadaşlar ekleyebilirsin!
              </Text>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => navigation.navigate('Lig' as any)}
                activeOpacity={0.8}
              >
                <Text style={styles.addBtnText}>🏆 Lig'e Bak</Text>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 20 }}>
              {incomingDuelRequests.length > 0 && (
                <View style={{ marginBottom: 15 }}>
                  <Text style={styles.sectionTitle}>Gelen Düello İstekleri ({incomingDuelRequests.length})</Text>
                  {incomingDuelRequests.map(req => (
                    <View key={req.id} style={[styles.card, { borderColor: BRAND.error }]}>
                      <View style={[styles.friendAvatar, { backgroundColor: BRAND.error + '20' }]}>
                        <Text style={{ fontSize: 26 }}>{req.fromAvatar || '🙋'}</Text>
                      </View>
                      <View style={styles.cardInfo}>
                        <Text style={styles.name}>{req.fromName}</Text>
                        <Text style={{ color: BRAND.error, fontSize: 13, marginTop: 2, fontWeight: 'bold' }}>⚔️ Sana meydan okudu!</Text>
                      </View>
                      {actionLoading === req.id ? (
                        <ActivityIndicator size="small" color={BRAND.primary} />
                      ) : (
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                          <TouchableOpacity style={[styles.chatBtn, { backgroundColor: BRAND.border, borderColor: BRAND.border }]} onPress={() => handleRejectDuel(req)}>
                            <Text style={{ fontSize: 16 }}>❌</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.chatBtn, { backgroundColor: BRAND.error, borderColor: '#CC2222' }]} onPress={() => handleAcceptDuel(req)}>
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
                  <Text style={styles.sectionTitle}>Gelen İstekler ({incomingRequests.length})</Text>
                  {incomingRequests.map(req => (
                    <View key={req.id} style={styles.card}>
                      <View style={[styles.friendAvatar, { backgroundColor: BRAND.primary + '20' }]}>
                        <Text style={{ fontSize: 26 }}>{req.fromAvatar || '🙋'}</Text>
                      </View>
                      <View style={styles.cardInfo}>
                        <Text style={styles.name}>{req.fromName}</Text>
                        <Text style={{ color: BRAND.textSub, fontSize: 13, marginTop: 2 }}>Seni eklemek istiyor</Text>
                      </View>
                      {actionLoading === req.id ? (
                        <ActivityIndicator size="small" color={BRAND.primary} />
                      ) : (
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                          <TouchableOpacity 
                            style={[styles.chatBtn, { backgroundColor: BRAND.error + '20', borderColor: BRAND.error }]}
                            onPress={() => handleRejectRequest(req)}
                          >
                            <Text style={{ fontSize: 16 }}>❌</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={[styles.chatBtn, { backgroundColor: BRAND.success + '20', borderColor: BRAND.success }]}
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
                <Text style={styles.sectionTitle}>Sıralama (Arkadaşlar) ({friends.length})</Text>
              )}
            </View>
          )}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <View style={[styles.rankBadge, { backgroundColor: index === 0 ? BRAND.gold : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : BRAND.surface, borderColor: BRAND.border }]}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: index < 3 ? '#111' : BRAND.textSub }}>
                  #{index + 1}
                </Text>
              </View>

              <View style={[styles.friendAvatar, { backgroundColor: BRAND.primary + '20' }]}>
                <Text style={{ fontSize: 26 }}>{item.avatar}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={{ color: BRAND.primary, fontSize: 13, marginTop: 2, fontWeight: 'bold' }}>{item.xp.toLocaleString()} XP</Text>
              </View>

              {actionLoading === 'remove_' + item.uid ? (
                <ActivityIndicator size="small" color={BRAND.error} style={{ marginLeft: 10 }} />
              ) : (
               <View style={{ flexDirection: 'row', gap: 8 }}>
                  <TouchableOpacity 
                    style={[styles.chatBtn, { backgroundColor: BRAND.primary + '20', borderColor: BRAND.primary }]}
                    onPress={() => handleOpenChat(item)}
                  >
                    <Text style={{ fontSize: 18 }}>💬</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.chatBtn, { backgroundColor: BRAND.error + '20', borderColor: BRAND.error }]}
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
  container: { flex: 1, backgroundColor: BRAND.bg },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    backgroundColor: BRAND.surface,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: BRAND.text,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  sectionTitle: {
    color: BRAND.text,
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 5,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  listContent: { padding: 15, paddingBottom: 100 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BRAND.border,
    backgroundColor: BRAND.card,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 2,
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '800', color: BRAND.text, fontFamily: 'SpaceGrotesk_700Bold' },
  chatBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  mascotCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: BRAND.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BRAND.border,
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: BRAND.text,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 12,
  },
  emptyDesc: {
    color: BRAND.textSub,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
  addBtn: {
    backgroundColor: BRAND.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 20,
    shadowColor: BRAND.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  addBtnText: { color: '#FFF', fontSize: 16, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
});

export default FriendsScreen;
