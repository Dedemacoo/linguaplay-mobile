import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View, Text, StyleSheet, FlatList, Platform, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Modal, TouchableWithoutFeedback, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase';
import { FriendService } from '../services/FriendService';
import { LeagueService, LeagueUserEntry, LEAGUE_CONFIG, LeagueTier } from '../services/LeagueService';
import * as Haptics from 'expo-haptics';
const AVATARS = ['👩‍🎓','👨‍💻','👩‍🏫','🧔','👩‍⚕️','👨‍🔬','👩‍💼','👨‍🎨','👩‍🍳','🧑‍🎤','🧑‍🏫','👩‍🎤','👨‍🍳','🧑‍💻'];

const LANGUAGES = [
  { id: 'global', label: '🌍 Genel Sıralama', color: '#8B5CF6' },
  { id: 'english', label: '🇬🇧 English', color: '#1D4ED8' },
  { id: 'turkish', label: '🇹🇷 Türkçe', color: '#E11D48' },
  { id: 'french', label: '🇫🇷 Français', color: '#2563EB' },
  { id: 'kurdish', label: '☀️ Kurmancî', color: '#16A34A' },
];

type LeaderboardEntry = { id: string; name: string; xp: number; rank: number; avatar: string; isCurrentUser?: boolean };

const LeaderboardScreen: React.FC<any> = ({ navigation }) => {
  const colors = useThemeColors();
  const { progress } = useProgressStore();
  const { user } = useAuth();
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('global');
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<LeaderboardEntry | null>(null);
  
  const [allUsersData, setAllUsersData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // --- League State ---
  const [myLeagueData, setMyLeagueData] = useState<LeagueUserEntry | null>(null);
  const [leagueBoard, setLeagueBoard] = useState<LeagueUserEntry[]>([]);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      const users: any[] = [];
      snapshot.forEach(docSnap => {
        users.push({ id: docSnap.id, ...docSnap.data() });
      });
      setAllUsersData(users);

      // --- Lig verisi yükle ---
      if (user) {
        const weeklyXp = Object.values(progress.languages || {}).reduce(
          (sum: number, lang: any) => sum + (lang?.totalXp || 0), 0
        );
        const displayName = users.find(u => u.id === user.uid)?.name || user.email?.split('@')[0] || 'Sen';
        const avatar = progress.avatar || '🙋';

        // Firestore'a haftalık XP yaz
        await LeagueService.updateWeeklyXp(user.uid, displayName, avatar, weeklyXp);

        // Kendi lig verisini getir
        const myData = await LeagueService.getUserLeagueData(user.uid);
        setMyLeagueData(myData);

        // Kendi liginin tablosunu getir
        const tier = myData?.tier || LeagueService.calculateTier(weeklyXp);
        const board = await LeagueService.getLeagueLeaderboard(tier);
        setLeagueBoard(board);
      }
    } catch (err) {
      console.log('Leaderboard fetch failed', err);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [user, progress]);

  useEffect(() => { fetchLeaderboard(); }, [fetchLeaderboard]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchLeaderboard();
  };

  const sendFriendRequest = async () => {
    if (!user || !selectedProfile) return;
    try {
      await FriendService.sendFriendRequest(user.uid, selectedProfile.id);
      Alert.alert('Başarılı', `${selectedProfile.name} kullanıcısına arkadaşlık isteği gönderildi!`);
      setSelectedProfile(null);
    } catch (err) {
      Alert.alert('Hata', 'Arkadaşlık isteği gönderilemedi.');
    }
  };

  const sendDuelRequest = () => {
    setSelectedProfile(null);
    navigation.navigate('Matchmaking');
  };

  const currentXp = useMemo(() => {
    if (selectedLanguage === 'global') {
      return Object.values(progress.languages || {}).reduce((sum: number, lang: any) => sum + (lang?.totalXp || 0), 0);
    }
    return progress.languages?.[selectedLanguage]?.totalXp || 0;
  }, [progress, selectedLanguage]);

  const leaderboardData = useMemo(() => {
    if (!allUsersData.length) return [];

    let entries: LeaderboardEntry[] = [];
    let currentUserIncluded = false;

    allUsersData.forEach((data, i) => {
      const isMe = data.id === user?.uid;
      if (isMe) currentUserIncluded = true;
      
      let targetXp = 0;
      if (selectedLanguage === 'global') {
        targetXp = data.xp || 0;
        if (isMe) targetXp = Math.max(targetXp, currentXp);
      } else {
        targetXp = data.progress?.languages?.[selectedLanguage]?.totalXp || 0;
        if (isMe) targetXp = Math.max(targetXp, currentXp);
      }
      
      entries.push({
        id: data.id,
        name: isMe ? (data.name || user?.email?.split('@')[0] || 'Sen') : (data.name || 'Anonim'),
        xp: targetXp,
        rank: 0,
        avatar: data.avatar || AVATARS[i % AVATARS.length],
        isCurrentUser: isMe,
      });
    });

    if (!currentUserIncluded && user) {
      entries.push({ 
        id: user.uid, 
        name: user.email?.split('@')[0] || 'Sen', 
        xp: currentXp, 
        rank: 0, 
        avatar: progress.avatar || '🙋', 
        isCurrentUser: true 
      });
    }

    entries.sort((a, b) => b.xp - a.xp);
    entries.forEach((e, i) => { e.rank = i + 1; });
    return entries;
  }, [allUsersData, selectedLanguage, user, progress, currentXp]);

  const top3 = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);
  
  const currentLangLabel = LANGUAGES.find(l => l.id === selectedLanguage)?.label || '🌍 Genel Sıralama';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#FFC800" />
      
      {/* Header — Lig Banner */}
      {(() => {
        const tier = (myLeagueData?.tier || 'bronze') as LeagueTier;
        const cfg = LEAGUE_CONFIG[tier];
        const myRank = leagueBoard.findIndex(e => e.uid === user?.uid) + 1 || '—';
        const totalInLeague = leagueBoard.length;
        const promotionStatus = typeof myRank === 'number'
          ? LeagueService.getPromotionStatus(myRank, totalInLeague)
          : 'safe';
        const statusColor = promotionStatus === 'promotion' ? '#22C55E' : promotionStatus === 'demotion' ? '#EF4444' : '#F59E0B';
        const statusLabel = promotionStatus === 'promotion' ? '↑ Terfi Bölgesi' : promotionStatus === 'demotion' ? '↓ Düşüş Bölgesi' : '✓ Güvende';

        return (
          <View style={[styles.header, { backgroundColor: cfg.color }]}>
            <TouchableOpacity style={styles.menuIcon} onPress={() => setMenuVisible(true)}>
              <Text style={{ fontSize: 26, color: '#FFF' }}>≡</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.headerTitle}>{cfg.icon} {cfg.label} Ligi</Text>
              <Text style={styles.headerSub}>{currentLangLabel}</Text>
              <View style={[styles.statusBadge, { backgroundColor: statusColor + '33' }]}>
                <Text style={[styles.statusText, { color: statusColor }]}>
                  Sıra: {myRank}/{totalInLeague}  •  {statusLabel}
                </Text>
              </View>
            </View>
            <View style={{ width: 40 }} />
          </View>
        );
      })()}

      {/* Slide/Modal Menu */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.menuContainer, { backgroundColor: colors.surface }]}>
                <Text style={[styles.menuTitle, { color: colors.text }]}>Lig Filtresi</Text>
                {LANGUAGES.map(lang => (
                  <TouchableOpacity
                    key={lang.id}
                    style={[
                      styles.menuItem,
                      selectedLanguage === lang.id && { backgroundColor: colors.primary + '15' }
                    ]}
                    onPress={() => {
                      setSelectedLanguage(lang.id);
                      setMenuVisible(false);
                    }}
                  >
                    <Text style={[
                      styles.menuItemText,
                      { color: selectedLanguage === lang.id ? colors.primary : colors.text }
                    ]}>
                      {lang.label}
                    </Text>
                    {selectedLanguage === lang.id && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Profile Info Modal */}
      <Modal visible={!!selectedProfile} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setSelectedProfile(null)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.profileModalContainer, { backgroundColor: colors.surface }]}>
                <TouchableOpacity onPress={() => setSelectedProfile(null)} style={styles.closeBtn}>
                  <Text style={{ fontSize: 20, color: colors.textLight }}>✕</Text>
                </TouchableOpacity>
                <Text style={styles.profileModalAvatar}>{selectedProfile?.avatar}</Text>
                <Text style={[styles.profileModalName, { color: colors.text }]}>{selectedProfile?.name}</Text>
                <Text style={[styles.profileModalXp, { color: colors.primary }]}>{selectedProfile?.xp.toLocaleString()} XP</Text>
                
                <View style={styles.profileActionButtons}>
                  {!selectedProfile?.isCurrentUser && (
                    <>
                      <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.primary }]} onPress={sendFriendRequest}>
                        <Text style={styles.actionBtnText}>👥 Arkadaş Ekle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FF9600' }]} onPress={sendDuelRequest}>
                        <Text style={styles.actionBtnText}>⚔️ Rastgele Düello</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={{ color: colors.textLight, marginTop: 12, fontSize: 15 }}>Sıralama yükleniyor...</Text>
        </View>
      ) : (
        <FlatList
          data={rest}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
          ListHeaderComponent={() => (
            <>
              {top3.length >= 2 && (
                <View style={[styles.podium, { backgroundColor: colors.surface }]}>
                  <TouchableOpacity style={styles.podiumItem} onPress={() => setSelectedProfile(top3[1])}>
                    <Text style={styles.podiumAvatar}>{top3[1]?.avatar}</Text>
                    <View style={[styles.podiumBar, styles.podiumSecond, { backgroundColor: '#C0C0C0' }]}><Text style={styles.podiumRank}>🥈</Text></View>
                    <Text style={[styles.podiumName, { color: colors.text }, top3[1]?.isCurrentUser && styles.meText]}>{top3[1]?.name}</Text>
                    <Text style={[styles.podiumXp, { color: colors.primary }]}>{top3[1]?.xp.toLocaleString()} XP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.podiumItem, { zIndex: 10, marginTop: -30 }]} onPress={() => setSelectedProfile(top3[0])}>
                    <Text style={styles.podiumAvatar}>{top3[0]?.avatar}</Text>
                    <View style={[styles.podiumBar, styles.podiumFirst, { backgroundColor: '#FFD700' }]}><Text style={styles.podiumRank}>🥇</Text></View>
                    <Text style={[styles.podiumName, { color: colors.text }, top3[0]?.isCurrentUser && styles.meText]}>{top3[0]?.name}</Text>
                    <Text style={[styles.podiumXp, { color: colors.primary }]}>{top3[0]?.xp.toLocaleString()} XP</Text>
                  </TouchableOpacity>
                  {top3.length >= 3 && (
                    <TouchableOpacity style={styles.podiumItem} onPress={() => setSelectedProfile(top3[2])}>
                      <Text style={styles.podiumAvatar}>{top3[2]?.avatar}</Text>
                      <View style={[styles.podiumBar, styles.podiumThird, { backgroundColor: '#CD7F32' }]}><Text style={styles.podiumRank}>🥉</Text></View>
                      <Text style={[styles.podiumName, { color: colors.text }, top3[2]?.isCurrentUser && styles.meText]}>{top3[2]?.name}</Text>
                      <Text style={[styles.podiumXp, { color: colors.primary }]}>{top3[2]?.xp.toLocaleString()} XP</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.card, { backgroundColor: colors.surface }, item.isCurrentUser && { backgroundColor: colors.primary + '10', borderColor: colors.primary }]}
              onPress={() => setSelectedProfile(item)}
              activeOpacity={0.7}
            >
              <Text style={[styles.rank, { color: colors.textLight }]}>{item.rank}</Text>
              <Text style={styles.avatar}>{item.avatar}</Text>
              <View style={styles.cardInfo}>
                <Text style={[styles.name, { color: colors.text }, item.isCurrentUser && styles.meText]}>{item.name}</Text>
                <Text style={[styles.xp, { color: colors.primary }]}>{item.xp.toLocaleString()} XP</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  headerSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
    fontWeight: '600'
  },
  statusBadge: {
    marginTop: 6,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },
  menuContainer: {
    marginTop: Platform.OS === 'ios' ? 100 : 70,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
  },
  listContent: { padding: 15, paddingBottom: 100 },
  podium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 30,
    paddingTop: 40,
    paddingBottom: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  podiumItem: { alignItems: 'center', width: '30%', marginHorizontal: 2 },
  podiumAvatar: { fontSize: 40, marginBottom: 5 },
  podiumBar: { width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 },
  podiumFirst: { height: 120 },
  podiumSecond: { height: 90 },
  podiumThird: { height: 70 },
  podiumRank: { fontSize: 24 },
  podiumName: { fontSize: 13, fontWeight: 'bold', marginTop: 8, textAlign: 'center', fontFamily: 'SpaceGrotesk_700Bold' },
  podiumXp: { fontSize: 12, fontWeight: '700', marginTop: 2 },
  meText: { color: '#1D4ED8' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  rank: { width: 30, fontSize: 16, fontWeight: 'bold' },
  avatar: { fontSize: 36, marginRight: 15 },
  cardInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  xp: { fontSize: 14, fontWeight: '600', marginTop: 2 },
  
  // Profile Modal Styles
  profileModalContainer: {
    marginTop: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  profileModalAvatar: {
    fontSize: 80,
    marginBottom: 10,
  },
  profileModalName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 5,
  },
  profileModalXp: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
  },
  profileActionButtons: {
    width: '100%',
    gap: 15,
  },
  actionBtn: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
  },
  actionBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  }
});

export default LeaderboardScreen;
