import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert, Dimensions, Animated, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BRAND } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width } = Dimensions.get('window');

const AVATARS = ['👤', '🧑‍💻', '👩‍🎨', '🧔', '👩‍🏫', '👩‍⚕️', '👨‍🔬', '👩‍🚀', '🧕', '🧑‍🎓', '👩‍💼', '🐦', '🦊', '🐼', '🦁', '🐸', '🦄', '🦖', '🐉', '🐈'];

const StatCard = ({ icon, value, label, color }: any) => {
  const scale = useRef(new Animated.Value(1)).current;
  return (
    <Pressable
      onPressIn={() => Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()}
      style={{ flex: 1 }}
    >
      <Animated.View style={[styles.statBox, { shadowColor: color, transform: [{ scale }] }]}>
        <Text style={styles.statIcon}>{icon}</Text>
        <Text style={[styles.statValue, { color }]}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  const { progress, setAvatar, refillHearts, addGems } = useProgressStore();
  const { user } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);

  const currXp = progress.languages?.[activeLanguage]?.totalXp || 0;
  const currLevel = progress.languages?.[activeLanguage]?.level || 1;
  const reqXp = currLevel * 500;
  const xpPercent = Math.min((currXp / reqXp) * 100, 100);

  const xpAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(xpAnim, {
      toValue: xpPercent,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }, [xpPercent]);

  const handleLogout = () => {
    Alert.alert(
      "Çıkış Yap",
      "Hesabınızdan çıkış yapmak istediğinize emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        { 
          text: "Çıkış Yap", 
          style: "destructive",
          onPress: () => {
            navigation.replace('Transition', { targetRoute: 'Login', message: 'Çıkış Yapılıyor...' });
          }
        }
      ]
    );
  };

  const allLanguages = [
    { key: 'kurdish', label: 'Kürtçe', flag: '☀️' },
    { key: 'english', label: 'İngilizce', flag: '🇬🇧' },
    { key: 'spanish', label: 'İspanyolca', flag: '🇪🇸' },
    { key: 'french', label: 'Fransızca', flag: '🇫🇷' },
    { key: 'german', label: 'Almanca', flag: '🇩🇪' },
    { key: 'italian', label: 'İtalyanca', flag: '🇮🇹' },
    { key: 'turkish', label: 'Türkçe', flag: '🇹🇷' },
    { key: 'japanese', label: 'Japonca', flag: '🇯🇵' },
    { key: 'korean', label: 'Korece', flag: '🇰🇷' },
    { key: 'arabic', label: 'Arapça', flag: '🇸🇦' },
  ] as const;

  const renderLangCard = (lang: typeof allLanguages[number]) => {
    const langProg = progress.languages?.[lang.key] || { totalXp: 0, level: 1 };
    const isActive = activeLanguage === lang.key;
    const lreqXp = langProg.level * 500;
    const lxpPercent = Math.min((langProg.totalXp / lreqXp) * 100, 100);
    
    return (
      <TouchableOpacity 
        key={lang.key}
        style={[
          styles.langCard, 
          isActive && styles.langCardActive
        ]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          setActiveLanguage(lang.key as any);
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.langCardFlag}>{lang.flag}</Text>
        <Text style={[styles.langCardName, isActive && { color: BRAND.primary }]}>{lang.label}</Text>
        <Text style={styles.langCardStats}>Sv. {langProg.level} • {langProg.totalXp} XP</Text>
        <View style={styles.langCardProgressBg}>
          <View style={[styles.langCardProgressFill, { width: `${lxpPercent}%`, backgroundColor: isActive ? BRAND.primary : BRAND.textSub }]} />
        </View>
        <Text style={styles.langCardPercent}>{Math.round(lxpPercent)}% Tamamlandı</Text>
      </TouchableOpacity>
    );
  };

  const handleRefillHearts = () => {
    if (progress.hearts >= 20) {
      Alert.alert('Bilgi', 'Canın zaten tamamen dolu!');
      return;
    }
    const success = refillHearts(400);
    if (success) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('Başarılı', '20 Can tamamen yenilendi!');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Hata', 'Yeterli elmasın yok! Lütfen elmas satın al.');
    }
  };

  const handleBuyGems = (amount: number) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert(
      "Satın Alma Başarılı",
      `Hesabınıza ${amount} Elmas eklendi!`,
      [{ text: "Tamam", onPress: () => addGems(amount) }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        
        {/* ── PREMIUM HEADER PROFILE ── */}
        <LinearGradient 
          colors={[BRAND.surface, BRAND.bg]} 
          style={[styles.header, { paddingTop: insets.top + 20 }]}
        >
          <View style={styles.settingsRow}>
            <Text style={styles.headerTitle}>Profil</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={{ fontSize: 24, color: BRAND.textMuted }}>⚙️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <TouchableOpacity 
              style={styles.avatarWrap}
              onPress={() => setShowAvatarModal(true)}
              activeOpacity={0.8}
            >
              <View style={styles.avatarCircle}>
                <Text style={{ fontSize: 48 }}>{progress.avatar || '👤'}</Text>
              </View>
              <View style={styles.editBadge}>
                <Text style={{ fontSize: 12 }}>✏️</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>{user?.displayName || 'Oyuncu'}</Text>
            <Text style={styles.username}>{user?.email ? `@${user.email.split('@')[0]}` : '@oyuncu'}</Text>
            
            {/* Animated Level Progress Bar */}
            <View style={styles.levelProgressContainer}>
              <View style={styles.levelRow}>
                <Text style={styles.levelText}>Seviye {currLevel}</Text>
                <Text style={styles.xpText}>{currXp} / {reqXp} XP</Text>
              </View>
              <View style={styles.progressBarBg}>
                <Animated.View style={[styles.progressBarFill, { width: xpAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }]} />
              </View>
            </View>

            <Text style={styles.joinDate}>Haziran 2026'da katıldı</Text>
          </View>
        </LinearGradient>

        {/* ── STATS ROW ── */}
        <View style={styles.statsContainer}>
          <StatCard 
            icon="🔥" 
            value={progress.languages?.[activeLanguage]?.streak || 0} 
            label="Günlük Seri" 
            color={BRAND.streak} 
          />
          <StatCard 
            icon="⚡" 
            value={currXp} 
            label="Toplam XP" 
            color={BRAND.primary} 
          />
          <StatCard 
            icon="🏆" 
            value="Bronz" 
            label="Mevcut Lig" 
            color={BRAND.gold} 
          />
        </View>

        {/* ── STORE BANNER ── */}
        <TouchableOpacity 
          style={styles.shopBtn}
          onPress={() => setShowShopModal(true)}
          activeOpacity={0.9}
        >
          <LinearGradient colors={[BRAND.secondary, '#D084FF']} style={styles.shopGrad} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={styles.glassOverlay} />
            <View style={styles.shopBtnLeft}>
              <Text style={styles.shopBtnIcon}>💎</Text>
              <View>
                <Text style={styles.shopBtnTitle}>Lingo Market</Text>
                <Text style={styles.shopBtnSub}>{progress.gems} Elmasın var</Text>
              </View>
            </View>
            <Text style={styles.chevron}>→</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ── COLLECTION BANNER ── */}
        <TouchableOpacity 
          style={styles.shopBtn}
          onPress={() => navigation.navigate('Collection')}
          activeOpacity={0.9}
        >
          <LinearGradient colors={['#1c1c1e', '#0A84FF']} style={styles.shopGrad} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={styles.glassOverlay} />
            <View style={styles.shopBtnLeft}>
              <Text style={styles.shopBtnIcon}>🐬</Text>
              <View>
                <Text style={styles.shopBtnTitle}>Koleksiyonum</Text>
                <Text style={styles.shopBtnSub}>42/120 (%35) • Cyber Lingo</Text>
              </View>
            </View>
            <Text style={styles.chevron}>→</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ── LANGUAGES SECTION ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ÖĞRENİLEN DİLLER</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.langScroll}>
            {allLanguages.map(renderLangCard)}
          </ScrollView>
        </View>

        {/* ── ACHIEVEMENTS PREVIEW ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BAŞARILAR</Text>
          <View style={styles.achievementsWrap}>
            <View style={styles.achievementBadge}>
              <Text style={{ fontSize: 36 }}>🔥</Text>
              <Text style={styles.achievementName}>30 Günlük Seri</Text>
            </View>
            <View style={styles.achievementBadge}>
              <Text style={{ fontSize: 36 }}>⭐</Text>
              <Text style={styles.achievementName}>Kelime Ustası</Text>
            </View>
            <View style={styles.achievementBadge}>
              <Text style={{ fontSize: 36 }}>🏆</Text>
              <Text style={styles.achievementName}>Lig Şampiyonu</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewAllBtn} activeOpacity={0.7}>
            <Text style={styles.viewAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        {/* ── FRIENDS ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ARKADAŞLAR</Text>
          <View style={styles.friendsGrid}>
            <TouchableOpacity style={styles.friendGridItem} activeOpacity={0.7}>
              <Text style={styles.friendGridIcon}>📩</Text>
              <Text style={styles.friendGridText}>İstekler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.friendGridItem} activeOpacity={0.7}>
              <Text style={styles.friendGridIcon}>🤝</Text>
              <Text style={styles.friendGridText}>Son Eklenen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.friendGridItem} activeOpacity={0.7}>
              <Text style={styles.friendGridIcon}>🔍</Text>
              <Text style={styles.friendGridText}>Arkadaş Bul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.friendGridItem} activeOpacity={0.7}>
              <Text style={styles.friendGridIcon}>💌</Text>
              <Text style={styles.friendGridText}>Davet Et</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── LOGOUT ── */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>

        {/* ── FOOTER ── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sürüm 1.0.0 (Build 24)</Text>
          <Text style={styles.footerText}>Sunucu: Çevrimiçi 🟢</Text>
        </View>

      </ScrollView>

      {/* ── AVATAR MODAL ── */}
      <Modal visible={showAvatarModal} transparent animationType="slide" onRequestClose={() => setShowAvatarModal(false)}>
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Avatar Seç</Text>
              <TouchableOpacity onPress={() => setShowAvatarModal(false)}>
                <Text style={{ fontSize: 24, color: BRAND.textMuted }}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.avatarGrid}>
              {AVATARS.map((emoji) => (
                <TouchableOpacity 
                  key={emoji} 
                  style={[styles.avatarOption, progress.avatar === emoji && styles.avatarSelected]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setAvatar(emoji);
                    setShowAvatarModal(false);
                  }}
                >
                  <Text style={{ fontSize: 36 }}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* ── SHOP MODAL ── */}
      <Modal visible={showShopModal} animationType="slide" onRequestClose={() => setShowShopModal(false)}>
        <View style={styles.shopContainer}>
          <LinearGradient colors={[BRAND.bg, BRAND.surface]} style={styles.shopHeader}>
            <View style={{ paddingTop: insets.top }}>
              <View style={styles.shopTopRow}>
                <TouchableOpacity onPress={() => setShowShopModal(false)}>
                  <Text style={{ fontSize: 28, color: BRAND.textMuted }}>✕</Text>
                </TouchableOpacity>
                <View style={styles.shopBalance}>
                  <Text style={{ fontSize: 18 }}>💎</Text>
                  <Text style={styles.shopBalanceText}>{progress.gems}</Text>
                </View>
              </View>
              <Text style={styles.shopTitle}>Lingo Market</Text>
              <Text style={styles.shopSub}>Elmas satın al ve kalplerini doldur</Text>
            </View>
          </LinearGradient>

          <ScrollView contentContainerStyle={styles.shopItems}>
            <Text style={styles.sectionTitle}>CAN DOLDUR</Text>
            <TouchableOpacity style={styles.shopItemCard} onPress={handleRefillHearts}>
              <Text style={{ fontSize: 32 }}>❤️</Text>
              <View style={styles.shopItemCenter}>
                <Text style={styles.shopItemTitle}>Canı Doldur</Text>
                <Text style={styles.shopItemDesc}>20 Can yenile</Text>
              </View>
              <View style={styles.shopItemPrice}>
                <Text style={{ fontSize: 14 }}>💎</Text>
                <Text style={styles.shopItemPriceText}>400</Text>
              </View>
            </TouchableOpacity>

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>ELMAS SATIN AL</Text>
            <TouchableOpacity style={styles.shopItemCard} onPress={() => handleBuyGems(500)}>
              <Text style={{ fontSize: 32 }}>💎</Text>
              <View style={styles.shopItemCenter}>
                <Text style={styles.shopItemTitle}>Avuç Dolusu Elmas</Text>
                <Text style={styles.shopItemDesc}>500 Elmas</Text>
              </View>
              <View style={styles.shopItemPriceBtn}>
                <Text style={styles.shopItemPriceBtnText}>₺19.99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shopItemCard} onPress={() => handleBuyGems(1200)}>
              <Text style={{ fontSize: 32 }}>💎💎</Text>
              <View style={styles.shopItemCenter}>
                <Text style={styles.shopItemTitle}>Kese Dolusu Elmas</Text>
                <Text style={styles.shopItemDesc}>1200 Elmas</Text>
              </View>
              <View style={styles.shopItemPriceBtn}>
                <Text style={styles.shopItemPriceBtnText}>₺39.99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shopItemCard} onPress={() => handleBuyGems(3000)}>
              <Text style={{ fontSize: 32 }}>💰</Text>
              <View style={styles.shopItemCenter}>
                <Text style={styles.shopItemTitle}>Sandık Dolusu Elmas</Text>
                <Text style={styles.shopItemDesc}>3000 Elmas</Text>
              </View>
              <View style={styles.shopItemPriceBtn}>
                <Text style={styles.shopItemPriceBtnText}>₺89.99</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BRAND.bg },
  
  header: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: BRAND.border,
  },
  settingsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: BRAND.text, fontSize: 24, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  
  profileInfo: { alignItems: 'center', marginTop: 10 },
  avatarWrap: { 
    position: 'relative',
    shadowColor: BRAND.primary, shadowOpacity: 0.15, shadowRadius: 15, elevation: 6,
  },
  avatarCircle: {
    width: 96, height: 96,
    borderRadius: 48,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: BRAND.border,
  },
  editBadge: {
    position: 'absolute', bottom: 0, right: 0,
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: BRAND.card,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: BRAND.border,
  },
  name: { color: BRAND.text, fontSize: 22, fontWeight: '800', marginTop: 16, fontFamily: 'SpaceGrotesk_700Bold' },
  username: { color: BRAND.textSub, fontSize: 15, marginTop: 4 },
  
  levelProgressContainer: {
    width: '80%',
    marginTop: 16,
    backgroundColor: BRAND.card,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1, borderColor: BRAND.border,
  },
  levelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  levelText: { color: BRAND.primary, fontWeight: '800', fontSize: 13 },
  xpText: { color: BRAND.textSub, fontWeight: '600', fontSize: 12 },
  progressBarBg: { height: 8, backgroundColor: BRAND.bg, borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: BRAND.primary, borderRadius: 4 },
  
  joinDate: { color: BRAND.textMuted, fontSize: 13, marginTop: 16, fontWeight: '600' },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 12,
  },
  statBox: {
    backgroundColor: BRAND.card,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 4,
  },
  statIcon: { fontSize: 24, marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  statLabel: { color: BRAND.textSub, fontSize: 12, marginTop: 4, fontWeight: '600' },

  shopBtn: { marginHorizontal: 16, marginTop: 24, borderRadius: 20, overflow: 'hidden' },
  shopGrad: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 18 },
  glassOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.1)' },
  shopBtnLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  shopBtnIcon: { fontSize: 34, textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 0, height: 2}, textShadowRadius: 4 },
  shopBtnTitle: { color: '#FFF', fontSize: 17, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', textShadowColor: 'rgba(0,0,0,0.2)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 2 },
  shopBtnSub: { color: '#FFF', fontSize: 13, opacity: 0.9, marginTop: 2 },
  chevron: { color: '#FFF', fontSize: 20, fontWeight: '600' },

  section: { marginTop: 30 },
  sectionTitle: { color: BRAND.textMuted, fontSize: 13, fontWeight: '800', letterSpacing: 1.5, marginLeft: 20, marginBottom: 12 },
  
  langScroll: { paddingHorizontal: 16, gap: 12 },
  langCard: {
    width: 140,
    backgroundColor: BRAND.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1.5, borderColor: BRAND.border,
    alignItems: 'center',
  },
  langCardActive: { borderColor: BRAND.primary, backgroundColor: BRAND.primary + '15' },
  langCardFlag: { fontSize: 36, marginBottom: 8 },
  langCardName: { color: BRAND.text, fontSize: 15, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  langCardStats: { color: BRAND.textSub, fontSize: 12, marginTop: 6, fontWeight: '600' },
  langCardProgressBg: { width: '100%', height: 6, backgroundColor: BRAND.bg, borderRadius: 3, marginTop: 8, overflow: 'hidden' },
  langCardProgressFill: { height: '100%', borderRadius: 3 },
  langCardPercent: { color: BRAND.textMuted, fontSize: 10, marginTop: 6, fontWeight: '600' },

  achievementsWrap: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 },
  achievementBadge: {
    flex: 1, backgroundColor: BRAND.card, marginHorizontal: 4,
    borderRadius: 18, paddingVertical: 16, alignItems: 'center',
    borderWidth: 1, borderColor: BRAND.border
  },
  achievementName: { color: BRAND.textSub, fontSize: 11, fontWeight: '700', marginTop: 8, textAlign: 'center', paddingHorizontal: 4 },
  viewAllBtn: { marginHorizontal: 16, marginTop: 12, backgroundColor: BRAND.surface, paddingVertical: 14, borderRadius: 16, alignItems: 'center', borderWidth: 1, borderColor: BRAND.border },
  viewAllText: { color: BRAND.text, fontSize: 14, fontWeight: '700' },

  friendsGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12 },
  friendGridItem: {
    width: '46%', backgroundColor: BRAND.card, margin: '2%',
    borderRadius: 18, padding: 16, alignItems: 'center',
    borderWidth: 1, borderColor: BRAND.border
  },
  friendGridIcon: { fontSize: 28, marginBottom: 8 },
  friendGridText: { color: BRAND.text, fontSize: 13, fontWeight: '700' },

  footer: { alignItems: 'center', marginTop: 40, marginBottom: 20 },
  footerText: { color: BRAND.textMuted, fontSize: 12, marginBottom: 4 },

  logoutBtn: { marginHorizontal: 16, marginTop: 20, paddingVertical: 16, borderRadius: 16, backgroundColor: BRAND.card, alignItems: 'center', borderWidth: 1, borderColor: BRAND.danger + '44' },
  logoutText: { color: BRAND.danger, fontSize: 16, fontWeight: '700' },

  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalBox: { backgroundColor: BRAND.surface, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 20, paddingBottom: 40, maxHeight: '70%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: BRAND.text },
  avatarGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 },
  avatarOption: { width: 70, height: 70, borderRadius: 35, backgroundColor: BRAND.card, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: BRAND.border },
  avatarSelected: { borderColor: BRAND.primary, backgroundColor: BRAND.primary + '22' },

  shopContainer: { flex: 1, backgroundColor: BRAND.bg },
  shopHeader: { paddingHorizontal: 20, paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: BRAND.border },
  shopTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  shopBalance: { flexDirection: 'row', alignItems: 'center', backgroundColor: BRAND.card, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, gap: 6, borderWidth: 1, borderColor: BRAND.border },
  shopBalanceText: { color: BRAND.gold, fontSize: 16, fontWeight: '800' },
  shopTitle: { color: BRAND.text, fontSize: 28, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold' },
  shopSub: { color: BRAND.textSub, fontSize: 15, marginTop: 4 },
  
  shopItems: { padding: 20, paddingBottom: 40 },
  shopItemCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: BRAND.card,
    borderRadius: 20, padding: 16,
    marginBottom: 12,
    borderWidth: 1, borderColor: BRAND.border,
  },
  shopItemCenter: { flex: 1, marginLeft: 16 },
  shopItemTitle: { color: BRAND.text, fontSize: 16, fontWeight: '700', fontFamily: 'SpaceGrotesk_700Bold' },
  shopItemDesc: { color: BRAND.textSub, fontSize: 13, marginTop: 2 },
  shopItemPrice: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: BRAND.surface, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12 },
  shopItemPriceText: { color: BRAND.gold, fontSize: 15, fontWeight: '800' },
  shopItemPriceBtn: { backgroundColor: BRAND.primary, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14 },
  shopItemPriceBtnText: { color: '#FFF', fontSize: 15, fontWeight: '800' },
});

export default ProfileScreen;
