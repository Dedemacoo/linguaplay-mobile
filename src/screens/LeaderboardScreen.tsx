import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View, Text, StyleSheet, FlatList, Platform, StatusBar,
  TouchableOpacity, ActivityIndicator, RefreshControl, Modal, TouchableWithoutFeedback, Alert, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors, BRAND } from '../theme/colors';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { FriendService } from '../services/FriendService';
import { LeagueService, LeagueUserEntry, LEAGUE_CONFIG, LeagueTier } from '../services/LeagueService';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

type LeaderboardEntry = { id: string; name: string; points: number; rank: number; avatar: string; isCurrentUser?: boolean };

const LeaderboardScreen: React.FC<any> = ({ navigation }) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const { progress } = useProgressStore();
  const { user } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'league' | 'duel'>('league');
  const [selectedProfile, setSelectedProfile] = useState<LeaderboardEntry | null>(null);
  
  const [allUsersData, setAllUsersData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // --- League State ---
  const [myLeagueData, setMyLeagueData] = useState<LeagueUserEntry | null>(null);
  const [leagueBoard, setLeagueBoard] = useState<LeagueUserEntry[]>([]);
  const [timeLeft, setTimeLeft] = useState<string>('3 Gün 12 Saat'); // Mocked countdown

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
        const lp = progress.leaguePoints || 0;
        const displayName = users.find(u => u.id === user.uid)?.name || user.email?.split('@')[0] || 'Sen';
        const avatar = progress.avatar || '🙋';

        await LeagueService.updateWeeklyPoints(user.uid, displayName, avatar, lp);

        const myData = await LeagueService.getUserLeagueData(user.uid);
        setMyLeagueData(myData);

        const tier = myData?.tier || LeagueService.calculateTier(lp);
        const board = await LeagueService.getLeagueLeaderboard(tier, 50); // Fetch top 50
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

  const startMatchmaking = (modeName: string) => {
    // For now, route all to Matchmaking, but you can pass modeName as param later
    navigation.navigate('Matchmaking', { mode: modeName });
  };

  // --- LEAGUE TAB RENDER ---
  const renderLeagueTab = () => {
    const tier = (myLeagueData?.tier || 'rookie') as LeagueTier;
    const cfg = LEAGUE_CONFIG[tier] || LEAGUE_CONFIG.rookie;
    const myRank = leagueBoard.findIndex(e => e.uid === user?.uid) + 1 || 0;
    const totalInLeague = leagueBoard.length;
    
    // Top 5 promote, Bottom 5 demote
    const isPromotion = myRank > 0 && myRank <= 5;
    const isDemotion = myRank > 0 && myRank > totalInLeague - 5 && totalInLeague > 10;
    
    return (
      <View style={{ flex: 1 }}>
        {/* Premium Dark Hero Banner */}
        <View style={styles.heroContainer}>
          <LinearGradient colors={[colors.card, colors.background]} style={StyleSheet.absoluteFillObject} />
          
          <View style={styles.heroContent}>
            <View style={[styles.badgeContainer, { borderColor: `${cfg.color}50` }]}>
              <LinearGradient colors={[`${cfg.color}15`, 'transparent']} style={StyleSheet.absoluteFillObject} />
              <Text style={styles.badgeIcon}>{cfg.icon}</Text>
            </View>
            <Text style={[styles.leagueTitle, { color: colors.text }]}>{cfg.label} Ligi</Text>
            <Text style={styles.timeLeftText}>⏳ Sezonun Bitmesine: {timeLeft}</Text>
            
            <View style={styles.heroStatsRow}>
              <View style={styles.heroStatBox}>
                <Text style={styles.heroStatLabel}>Sıralama</Text>
                <Text style={styles.heroStatValue}>#{myRank > 0 ? myRank : '-'}</Text>
              </View>
              <View style={styles.heroStatBox}>
                <Text style={styles.heroStatLabel}>Lig Puanı</Text>
                <Text style={[styles.heroStatValue, { color: cfg.color }]}>{progress.leaguePoints || 0}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Profile Stats Mini-Panel */}
        <View style={styles.statsPanel}>
          <View style={styles.statMiniBox}>
            <FontAwesome5 name="fire" size={14} color="#F97316" />
            <Text style={styles.statMiniText}>Seri: {Object.values(progress.languages)[0]?.streak || 0}</Text>
          </View>
          <View style={styles.statMiniBox}>
            <FontAwesome5 name="trophy" size={14} color="#EAB308" />
            <Text style={styles.statMiniText}>Kazanma: {progress.duelWins || 0}</Text>
          </View>
          <View style={styles.statMiniBox}>
            <FontAwesome5 name="times-circle" size={14} color="#EF4444" />
            <Text style={styles.statMiniText}>Kayıp: {progress.duelLosses || 0}</Text>
          </View>
        </View>

        {/* Leaderboard List */}
        <FlatList
          data={leagueBoard}
          keyExtractor={(item) => item.uid}
          contentContainerStyle={styles.listContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
          renderItem={({ item, index }) => {
            const rank = index + 1;
            const isMe = item.uid === user?.uid;
            
            const isTop5 = rank <= 5;
            const isBottom5 = totalInLeague > 10 && rank > totalInLeague - 5;
            
            let borderColor = 'transparent';
            if (isTop5) borderColor = '#22C55E';
            if (isBottom5) borderColor = '#EF4444';
            if (isMe) borderColor = colors.primary;

            return (
              <TouchableOpacity 
                style={[
                  styles.userCard, 
                  { backgroundColor: isMe ? colors.primary + '15' : colors.card, borderColor: borderColor, borderWidth: 1 }
                ]}
                onPress={() => setSelectedProfile({ id: item.uid, name: item.name, points: item.weeklyPoints, rank, avatar: item.avatar, isCurrentUser: isMe })}
                activeOpacity={0.7}
              >
                <View style={[styles.rankBox, isTop5 && { backgroundColor: '#22C55E20' }, isBottom5 && { backgroundColor: '#EF444420' }]}>
                  <Text style={[styles.rankText, isTop5 && { color: '#22C55E' }, isBottom5 && { color: '#EF4444' }]}>{rank}</Text>
                </View>
                <Text style={styles.avatar}>{item.avatar}</Text>
                <View style={styles.cardInfo}>
                  <Text style={[styles.name, isMe && { color: colors.primary }]}>{item.name}</Text>
                  <Text style={styles.points}>{item.weeklyPoints.toLocaleString()} LP</Text>
                </View>
                {isTop5 && <FontAwesome5 name="arrow-up" size={14} color="#22C55E" />}
                {isBottom5 && <FontAwesome5 name="arrow-down" size={14} color="#EF4444" />}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // --- DUEL TAB RENDER ---
  const renderDuelTab = () => {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        
        {/* User Duel Stats */}
        <View style={styles.duelStatsCard}>
          <Text style={styles.duelSectionTitle}>Savaş İstatistiklerin</Text>
          <View style={styles.duelStatsGrid}>
            <View style={styles.duelStatItem}>
              <Text style={styles.duelStatValue}>{progress.duelWins || 0}</Text>
              <Text style={styles.duelStatLabel}>Galibiyet</Text>
            </View>
            <View style={styles.duelStatItem}>
              <Text style={styles.duelStatValue}>{progress.duelLosses || 0}</Text>
              <Text style={styles.duelStatLabel}>Mağlubiyet</Text>
            </View>
            <View style={styles.duelStatItem}>
              <Text style={[styles.duelStatValue, { color: colors.primary }]}>
                {((progress.duelWins || 0) + (progress.duelLosses || 0)) > 0 
                  ? Math.round(((progress.duelWins || 0) / ((progress.duelWins || 0) + (progress.duelLosses || 0))) * 100)
                  : 0}%
              </Text>
              <Text style={styles.duelStatLabel}>Kazanma Oranı</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.duelSectionTitle, { marginTop: 20 }]}>Düello Modları</Text>
        
        {/* Speed Duel */}
        <TouchableOpacity style={[styles.duelModeCard, { borderColor: '#F59E0B' }]} onPress={() => startMatchmaking('speed')}>
          <LinearGradient colors={['#F59E0B22', 'transparent']} style={StyleSheet.absoluteFillObject} />
          <View style={styles.duelModeIconBox}><FontAwesome5 name="bolt" size={24} color="#F59E0B" /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.duelModeTitle}>Hız Düellosu</Text>
            <Text style={styles.duelModeDesc}>En hızlı ve en doğru cevaplayan kazanır.</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#4B5563" />
        </TouchableOpacity>

        {/* Word Duel */}
        <TouchableOpacity style={[styles.duelModeCard, { borderColor: '#8B5CF6' }]} onPress={() => startMatchmaking('word')}>
          <LinearGradient colors={['#8B5CF622', 'transparent']} style={StyleSheet.absoluteFillObject} />
          <View style={styles.duelModeIconBox}><FontAwesome5 name="spell-check" size={24} color="#8B5CF6" /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.duelModeTitle}>Kelime Düellosu</Text>
            <Text style={styles.duelModeDesc}>Kelime bilgisi yarışması. Kim daha fazla biliyor?</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#4B5563" />
        </TouchableOpacity>

        {/* Listening Duel */}
        <TouchableOpacity style={[styles.duelModeCard, { borderColor: '#3B82F6' }]} onPress={() => startMatchmaking('listen')}>
          <LinearGradient colors={['#3B82F622', 'transparent']} style={StyleSheet.absoluteFillObject} />
          <View style={styles.duelModeIconBox}><FontAwesome5 name="headphones" size={24} color="#3B82F6" /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.duelModeTitle}>Dinleme Düellosu</Text>
            <Text style={styles.duelModeDesc}>Aynı ses kayıtlarını dinleyip doğru cevabı bul.</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#4B5563" />
        </TouchableOpacity>

        {/* AI Challenge */}
        <TouchableOpacity style={[styles.duelModeCard, { borderColor: '#EC4899' }]} onPress={() => startMatchmaking('ai')}>
          <LinearGradient colors={['#EC489922', 'transparent']} style={StyleSheet.absoluteFillObject} />
          <View style={styles.duelModeIconBox}><FontAwesome5 name="robot" size={24} color="#EC4899" /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.duelModeTitle}>AI Challenge</Text>
            <Text style={styles.duelModeDesc}>Yapay zekaya karşı zorlu bir mücadele.</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#4B5563" />
        </TouchableOpacity>

      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <StatusBar barStyle={colors.colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
      
      {/* Top Navigation Tabs */}
      <View style={styles.topTabs}>
        <TouchableOpacity 
          style={[styles.tabBtn, activeTab === 'league' && styles.tabBtnActive]} 
          onPress={() => setActiveTab('league')}
        >
          <Text style={[styles.tabText, activeTab === 'league' && styles.tabTextActive]}>LİG</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabBtn, activeTab === 'duel' && styles.tabBtnActive]} 
          onPress={() => setActiveTab('duel')}
        >
          <Text style={[styles.tabText, activeTab === 'duel' && styles.tabTextActive]}>DÜELLO</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info Modal */}
      <Modal visible={!!selectedProfile} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setSelectedProfile(null)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.profileModalContainer, { backgroundColor: colors.card }]}>
                <TouchableOpacity onPress={() => setSelectedProfile(null)} style={styles.closeBtn}>
                  <Text style={{ fontSize: 20, color: colors.textMuted }}>✕</Text>
                </TouchableOpacity>
                <Text style={styles.profileModalAvatar}>{selectedProfile?.avatar}</Text>
                <Text style={[styles.profileModalName, { color: colors.text }]}>{selectedProfile?.name}</Text>
                <Text style={[styles.profileModalXp, { color: colors.primary }]}>{selectedProfile?.points.toLocaleString()} LP</Text>
                
                <View style={styles.profileActionButtons}>
                  {!selectedProfile?.isCurrentUser && (
                    <>
                      <TouchableOpacity style={[styles.actionBtn, { backgroundColor: colors.primary }]} onPress={sendFriendRequest}>
                        <Text style={styles.actionBtnText}>👥 Arkadaş Ekle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FF9600' }]} onPress={() => {
                        setSelectedProfile(null);
                        startMatchmaking('speed');
                      }}>
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
          <Text style={{ color: colors.textMuted, marginTop: 12, fontSize: 15 }}>Yükleniyor...</Text>
        </View>
      ) : (
        activeTab === 'league' ? renderLeagueTab() : renderDuelTab()
      )}
    </SafeAreaView>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1 },
  topTabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 4,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabBtnActive: {
    backgroundColor: colors.border,
    shadowColor: colors.background,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    color: colors.textLight,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },
  tabTextActive: {
    color: colors.text,
  },
  
  // Hero Section
  heroContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  badgeContainer: {
    backgroundColor: colors.background, // Koyu ve düz arka plan
    width: 90,
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 1,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden'
  },
  badgeIcon: {
    fontSize: 40,
    transform: [{ rotate: '-45deg' }]
  },
  leagueTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },
  timeLeftText: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 20,
  },
  heroStatsRow: {
    flexDirection: 'row',
    gap: 30,
  },
  heroStatBox: {
    alignItems: 'center',
  },
  heroStatLabel: {
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  heroStatValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },

  // Stats Panel
  statsPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statMiniBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statMiniText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 13,
  },

  // List
  listContent: { padding: 20, paddingBottom: 100 },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
  },
  rankBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankText: {
    color: colors.textMuted,
    fontWeight: '800',
    fontSize: 14,
  },
  avatar: { fontSize: 32, marginRight: 15 },
  cardInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: colors.text, fontFamily: 'SpaceGrotesk_700Bold' },
  points: { fontSize: 13, fontWeight: '600', color: colors.textMuted, marginTop: 2 },
  
  // Duel Tab
  duelStatsCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  duelSectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 15,
  },
  duelStatsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duelStatItem: {
    alignItems: 'center',
  },
  duelStatValue: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  duelStatLabel: {
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  duelModeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  duelModeIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  duelModeTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 4,
  },
  duelModeDesc: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  profileModalContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.border,
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
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  }
});

export default LeaderboardScreen;
