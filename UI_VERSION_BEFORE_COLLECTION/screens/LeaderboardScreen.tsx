import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View, Text, StyleSheet, FlatList, Platform, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Modal, Alert, Dimensions, Animated, TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BRAND } from '../theme/colors';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { FriendService } from '../services/FriendService';
import { LeagueService, LeagueUserEntry } from '../services/LeagueService';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width } = Dimensions.get('window');
const AVATARS = ['👩‍🎓','👨‍💻','👩‍🏫','🧔','👩‍⚕️','👨‍🔬','👩‍💼','👨‍🎨','👩‍🍳','🧑‍🎤','🧑‍🏫','👩‍🎤','👨‍🍳','🧑‍💻'];

const LANGUAGES = [
  { id: 'global', label: '🌍 Genel Lig', color: BRAND.primary },
  { id: 'english', label: '🇬🇧 English', color: BRAND.accent },
  { id: 'turkish', label: '🇹🇷 Türkçe', color: BRAND.danger },
  { id: 'french', label: '🇫🇷 Français', color: BRAND.secondary },
  { id: 'german', label: '🇩🇪 Deutsch', color: BRAND.gold },
];

type LeaderboardEntry = { id: string; name: string; xp: number; rank: number; avatar: string; isCurrentUser?: boolean };

const PodiumItem = ({ entry, position }: { entry?: LeaderboardEntry, position: 1 | 2 | 3 }) => {
  if (!entry) return <View style={[styles.podiumItem, { height: position === 1 ? 160 : 130 }]} />;

  const isFirst = position === 1;
  const isSecond = position === 2;
  const height = isFirst ? 160 : (isSecond ? 140 : 120);
  const color = isFirst ? BRAND.gold : (isSecond ? '#A0AEC0' : '#CD7F32');
  const medal = isFirst ? '🥇' : (isSecond ? '🥈' : '🥉');

  return (
    <View style={[styles.podiumItemWrap, { zIndex: isFirst ? 10 : 5 }]}>
      <View style={styles.podiumAvatarWrap}>
        <View style={[styles.podiumAvatar, { borderColor: color }]}>
          <Text style={{ fontSize: isFirst ? 36 : 28 }}>{entry.avatar}</Text>
        </View>
        <View style={styles.podiumMedal}><Text style={{ fontSize: 16 }}>{medal}</Text></View>
      </View>
      
      <Text style={[styles.podiumName, isFirst && { color: BRAND.gold, fontSize: 16 }]} numberOfLines={1}>{entry.name}</Text>
      <Text style={styles.podiumXp}>{entry.xp} XP</Text>
      
      <LinearGradient 
        colors={isFirst ? [BRAND.gold, '#B7791F'] : [BRAND.surface, BRAND.card]}
        style={[styles.podiumBlock, { height }]}
      >
        <Text style={styles.podiumPositionText}>{position}</Text>
      </LinearGradient>
    </View>
  );
};

const LeaderboardScreen: React.FC<any> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { progress } = useProgressStore();
  const { user } = useAuth();
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('global');
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<LeaderboardEntry | null>(null);
  
  const [allUsersData, setAllUsersData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      const users: any[] = [];
      snapshot.forEach(docSnap => {
        users.push({ id: docSnap.id, ...docSnap.data() });
      });
      setAllUsersData(users);

      if (user) {
        const weeklyXp = Object.values(progress.languages || {}).reduce(
          (sum: number, lang: any) => sum + (lang?.totalXp || 0), 0
        );
        const displayName = users.find(u => u.id === user.uid)?.name || user.email?.split('@')[0] || 'Sen';
        const avatar = progress.avatar || '🙋';

        await LeagueService.updateWeeklyXp(user.uid, displayName, avatar, weeklyXp);
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setRefreshing(true);
    await fetchLeaderboard();
  };

  const sendFriendRequest = async () => {
    if (!user || !selectedProfile) return;
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
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
        name: isMe ? (data.name || user?.email?.split('@')[0] || 'Sen') : (data.name || 'Gizli Oyuncu'),
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
    entries.forEach((e, i) => e.rank = i + 1);
    
    // Fake more users if there are too few to make it look active
    if (entries.length < 5) {
      entries.push(
        { id: 'fake1', name: 'Lingo Master', xp: 450, rank: entries.length + 1, avatar: '👩‍🎤' },
        { id: 'fake2', name: 'Polyglot', xp: 320, rank: entries.length + 2, avatar: '👨‍🎨' },
        { id: 'fake3', name: 'LanguageFan', xp: 150, rank: entries.length + 3, avatar: '👩‍🚀' },
      );
      entries.sort((a, b) => b.xp - a.xp);
      entries.forEach((e, i) => e.rank = i + 1);
    }
    
    return entries;
  }, [allUsersData, selectedLanguage, currentXp, user]);

  const top3 = leaderboardData.slice(0, 3);
  const remainingList = leaderboardData.slice(3);

  const renderItem = ({ item }: { item: LeaderboardEntry }) => {
    return (
      <TouchableOpacity 
        style={[styles.playerCard, item.isCurrentUser && styles.currentUserCard]}
        onPress={() => {
          if (!item.isCurrentUser) setSelectedProfile(item);
        }}
        activeOpacity={0.8}
      >
        <Text style={[styles.rankText, item.isCurrentUser && { color: BRAND.primary }]}>{item.rank}</Text>
        <View style={[styles.listAvatar, item.isCurrentUser && { borderColor: BRAND.primary, borderWidth: 2 }]}>
          <Text style={{ fontSize: 24 }}>{item.avatar}</Text>
        </View>
        <Text style={[styles.listName, item.isCurrentUser && { color: BRAND.primary }]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={[styles.listXp, item.isCurrentUser && { color: BRAND.primary }]}>{item.xp} XP</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[BRAND.surface, BRAND.bg]} style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Liderlik Tablosu</Text>
          <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.filterBtn}>
            <Text style={{ fontSize: 20 }}>🎯</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerSub}>{LANGUAGES.find(l => l.id === selectedLanguage)?.label}</Text>
      </LinearGradient>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={BRAND.primary} />
          <Text style={styles.loadingText}>Sıralamalar Güncelleniyor...</Text>
        </View>
      ) : (
        <FlatList
          data={remainingList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={BRAND.primary} />}
          ListHeaderComponent={
            <View style={styles.podiumContainer}>
              <PodiumItem entry={top3[1]} position={2} />
              <PodiumItem entry={top3[0]} position={1} />
              <PodiumItem entry={top3[2]} position={3} />
            </View>
          }
        />
      )}

      {/* ── FILTER MODAL ── */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalBg}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Lig Filtresi</Text>
              {LANGUAGES.map(lang => (
                <TouchableOpacity
                  key={lang.id}
                  style={[styles.langOption, selectedLanguage === lang.id && { backgroundColor: BRAND.card, borderColor: BRAND.primary }]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setSelectedLanguage(lang.id);
                    setMenuVisible(false);
                  }}
                >
                  <Text style={[styles.langOptionText, selectedLanguage === lang.id && { color: BRAND.primary }]}>{lang.label}</Text>
                  {selectedLanguage === lang.id && <Text style={{ color: BRAND.primary, fontSize: 18 }}>✓</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* ── PROFILE ACTION MODAL ── */}
      <Modal visible={!!selectedProfile} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setSelectedProfile(null)}>
          <View style={styles.profileModalBg}>
            <TouchableWithoutFeedback>
              <View style={styles.profileModalBox}>
                <View style={styles.profileModalHeader}>
                  <View style={styles.profileModalAvatar}>
                    <Text style={{ fontSize: 40 }}>{selectedProfile?.avatar}</Text>
                  </View>
                  <View>
                    <Text style={styles.profileModalName}>{selectedProfile?.name}</Text>
                    <Text style={styles.profileModalXp}>Sıra: #{selectedProfile?.rank} • {selectedProfile?.xp} XP</Text>
                  </View>
                </View>

                <View style={styles.profileActions}>
                  <TouchableOpacity style={styles.actionBtnSecondary} onPress={sendFriendRequest}>
                    <Text style={{ fontSize: 20 }}>🤝</Text>
                    <Text style={styles.actionBtnTextSec}>Arkadaş Ekle</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionBtnPrimary} onPress={sendDuelRequest}>
                    <Text style={{ fontSize: 20 }}>⚔️</Text>
                    <Text style={styles.actionBtnTextPri}>Meydan Oku</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BRAND.bg },
  
  header: {
    paddingHorizontal: 20, paddingBottom: 20,
    borderBottomWidth: 1, borderBottomColor: BRAND.border,
  },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: BRAND.text, fontSize: 28, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  headerSub: { color: BRAND.primary, fontSize: 16, fontWeight: '700', marginTop: 4 },
  filterBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: BRAND.card, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: BRAND.border },

  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { color: BRAND.textSub, marginTop: 12, fontSize: 15, fontWeight: '600' },

  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 280,
    marginTop: 20,
    marginBottom: 40,
    gap: 4,
  },
  podiumItemWrap: { alignItems: 'center', width: width * 0.28 },
  podiumAvatarWrap: { position: 'relative', marginBottom: 8 },
  podiumAvatar: {
    width: 60, height: 60, borderRadius: 30,
    backgroundColor: BRAND.surface,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3,
  },
  podiumMedal: { position: 'absolute', bottom: -8, right: -8, backgroundColor: BRAND.surface, borderRadius: 12, padding: 2 },
  podiumName: { color: BRAND.text, fontSize: 14, fontWeight: '700', marginBottom: 2 },
  podiumXp: { color: BRAND.textSub, fontSize: 12, fontWeight: '600', marginBottom: 12 },
  podiumBlock: {
    width: '100%',
    borderTopLeftRadius: 16, borderTopRightRadius: 16,
    justifyContent: 'flex-start', alignItems: 'center',
    paddingTop: 12,
    borderWidth: 1, borderColor: BRAND.border,
  },
  podiumPositionText: { color: '#FFF', fontSize: 32, fontWeight: '900', opacity: 0.9, fontFamily: 'SpaceGrotesk_700Bold' },

  playerCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: BRAND.card,
    marginHorizontal: 16, marginBottom: 12,
    padding: 16, borderRadius: 20,
    borderWidth: 1, borderColor: BRAND.border,
  },
  currentUserCard: { backgroundColor: BRAND.primary + '15', borderColor: BRAND.primary },
  rankText: { width: 40, color: BRAND.textSub, fontSize: 18, fontWeight: '800', textAlign: 'center' },
  listAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: BRAND.surface, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  listName: { flex: 1, color: BRAND.text, fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  listXp: { color: BRAND.textSub, fontSize: 15, fontWeight: '800' },

  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { width: '80%', backgroundColor: BRAND.surface, borderRadius: 24, padding: 20, borderWidth: 1, borderColor: BRAND.border },
  modalTitle: { color: BRAND.text, fontSize: 20, fontWeight: '800', marginBottom: 16, textAlign: 'center', fontFamily: 'SpaceGrotesk_700Bold' },
  langOption: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderRadius: 16, marginBottom: 8, borderWidth: 1, borderColor: 'transparent' },
  langOptionText: { color: BRAND.text, fontSize: 16, fontWeight: '600' },

  profileModalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  profileModalBox: { backgroundColor: BRAND.surface, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 24, paddingBottom: 40, borderWidth: 1, borderColor: BRAND.border },
  profileModalHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  profileModalAvatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: BRAND.card, justifyContent: 'center', alignItems: 'center', marginRight: 16, borderWidth: 2, borderColor: BRAND.border },
  profileModalName: { color: BRAND.text, fontSize: 22, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  profileModalXp: { color: BRAND.textSub, fontSize: 14, fontWeight: '600', marginTop: 4 },
  
  profileActions: { flexDirection: 'row', gap: 12 },
  actionBtnSecondary: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: BRAND.card, paddingVertical: 14, borderRadius: 16, gap: 8, borderWidth: 1, borderColor: BRAND.border },
  actionBtnTextSec: { color: BRAND.text, fontSize: 15, fontWeight: '700' },
  actionBtnPrimary: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: BRAND.danger, paddingVertical: 14, borderRadius: 16, gap: 8 },
  actionBtnTextPri: { color: '#FFF', fontSize: 15, fontWeight: '800' },
});

export default LeaderboardScreen;
