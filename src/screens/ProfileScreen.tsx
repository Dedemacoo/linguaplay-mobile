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
import { Mascot } from '../components/Mascot';
import * as Haptics from 'expo-haptics';
import { useThemeColors } from '../theme/colors';
import { MASCOTS } from '../data/MascotData';

const { width } = Dimensions.get('window');

const StatCard = ({ icon, value, label, color }: any) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
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

export const ProfileScreen = () => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const insets = useSafeAreaInsets();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  const { progress, refillHearts, addGems } = useProgressStore();
  const { user } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        <Text style={[styles.langCardName, isActive && { color: colors.primary }]}>{lang.label}</Text>
        <Text style={styles.langCardStats}>Sv. {langProg.level} • {langProg.totalXp} XP</Text>
        <View style={styles.langCardProgressBg}>
          <View style={[styles.langCardProgressFill, { width: `${lxpPercent}%`, backgroundColor: isActive ? colors.primary : colors.textLight }]} />
        </View>
        <Text style={styles.langCardPercent}>{Math.round(lxpPercent)}% Tamamlandı</Text>
      </TouchableOpacity>
    );
  };

  const totalMascots = Object.keys(MASCOTS).length;
  const unlockedCount = progress.unlockedMascots.length;
  const percentage = Math.round((unlockedCount / totalMascots) * 100) || 0;
  const equippedName = MASCOTS[progress.equippedMascot || 'classic']?.name || 'Classic Lingo';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        
        {/* ── PREMIUM HEADER PROFILE ── */}
        <LinearGradient 
          colors={[colors.surface, colors.background]} 
          style={[styles.header, { paddingTop: insets.top + 20 }]}
        >
          <View style={styles.settingsRow}>
            <Text style={styles.headerTitle}>Profil</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text style={{ fontSize: 24, color: colors.textMuted }}>⚙️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <TouchableOpacity 
              style={styles.avatarWrap}
              onPress={() => navigation.navigate('Collection')}
              activeOpacity={0.8}
            >
              <View style={styles.avatarCircle}>
                <Mascot size={55} />
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
            color={colors.streak} 
          />
          <StatCard 
            icon="⚡" 
            value={currXp} 
            label="Toplam XP" 
            color={colors.primary} 
          />
          <StatCard 
            icon="🏆" 
            value="Bronz" 
            label="Mevcut Lig" 
            color={colors.warning} 
          />
        </View>

        {/* ── STORE BANNER ── */}
        <TouchableOpacity 
          style={styles.shopBtn}
          onPress={() => navigation.navigate('Market')}
          activeOpacity={0.9}
        >
          <LinearGradient colors={['#1c1c1e', '#00c6ff']} style={styles.shopGrad} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={styles.glassOverlay} />
            <View style={styles.shopBtnLeft}>
              <View style={{ marginRight: 8, marginLeft: -4, width: 75, height: 75, justifyContent: 'center', alignItems: 'center' }}>
                <Mascot size={50} animated={false} />
              </View>
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
              <View style={{ marginRight: 8, marginLeft: -4, width: 75, height: 75, justifyContent: 'center', alignItems: 'center' }}>
                <Mascot size={50} animated={false} />
              </View>
              <View>
                <Text style={styles.shopBtnTitle}>Koleksiyonum</Text>
                <Text style={styles.shopBtnSub}>{unlockedCount}/{totalMascots} (%{percentage}) • {equippedName}</Text>
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

        <TouchableOpacity 
          style={[styles.logoutBtn, { borderColor: colors.error, backgroundColor: colors.surface }]}
          onPress={handleLogout}
        >
          <Text style={[styles.logoutText, { color: colors.error }]}>🚪 Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    paddingHorizontal: 20, paddingBottom: 30,
    borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 10,
  },
  settingsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: '800', color: colors.text, letterSpacing: 0.5 },
  profileInfo: { alignItems: 'center' },
  avatarWrap: { 
    position: 'relative',
    shadowColor: colors.primary, shadowOpacity: 0.15, shadowRadius: 15, elevation: 6,
  },
  avatarCircle: {
    width: 96, height: 96,
    justifyContent: 'center', alignItems: 'center',
  },
  editBadge: {
    position: 'absolute', bottom: 0, right: 0,
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: colors.card,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: colors.border,
  },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.text, marginTop: 15, letterSpacing: -0.5 },
  username: { fontSize: 15, color: colors.textLight, marginTop: 2, fontWeight: '500' },
  joinDate: { fontSize: 13, color: colors.textMuted, marginTop: 15, fontWeight: '500' },
  levelProgressContainer: { width: '85%', marginTop: 25 },
  levelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  levelText: { color: colors.text, fontWeight: '700', fontSize: 14 },
  xpText: { color: colors.primary, fontWeight: '700', fontSize: 14 },
  progressBarBg: { height: 12, backgroundColor: colors.border, borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
  
  statsContainer: { flexDirection: 'row', paddingHorizontal: 15, marginTop: 25, gap: 10 },
  statBox: {
    backgroundColor: colors.surface, paddingVertical: 15, paddingHorizontal: 10,
    borderRadius: 20, alignItems: 'center',
    shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5,
    borderWidth: 1, borderColor: colors.border + '50'
  },
  statIcon: { fontSize: 26, marginBottom: 8 },
  statValue: { fontSize: 20, fontWeight: '800', marginBottom: 2 },
  statLabel: { fontSize: 11, color: colors.textLight, fontWeight: '600', textTransform: 'uppercase' },
  
  shopBtn: { marginHorizontal: 20, marginTop: 20, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 6 },
  shopGrad: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  glassOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.05)' },
  shopBtnLeft: { flexDirection: 'row', alignItems: 'center' },
  shopBtnIcon: { fontSize: 32, marginRight: 15 },
  shopBtnTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 2 },
  shopBtnSub: { fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: '500' },
  chevron: { fontSize: 24, color: 'rgba(255,255,255,0.5)', fontWeight: '300' },
  
  section: { marginTop: 30 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: colors.textLight, marginLeft: 20, marginBottom: 15, letterSpacing: 1 },
  langScroll: { paddingHorizontal: 20, gap: 15 },
  langCard: {
    width: 160, backgroundColor: colors.surface, borderRadius: 24, padding: 20,
    borderWidth: 2, borderColor: colors.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2
  },
  langCardActive: { 
    borderColor: colors.primary, 
    borderWidth: 3,
    backgroundColor: colors.surface,
    elevation: 3,
  },
  langCardFlag: { fontSize: 40, marginBottom: 12 },
  langCardName: { fontSize: 18, fontWeight: '700', color: colors.text, marginBottom: 4 },
  langCardStats: { fontSize: 13, color: colors.textLight, fontWeight: '500', marginBottom: 12 },
  langCardProgressBg: { height: 6, backgroundColor: colors.border, borderRadius: 3, overflow: 'hidden', marginBottom: 8 },
  langCardProgressFill: { height: '100%', borderRadius: 3 },
  langCardPercent: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  
  logoutBtn: { marginHorizontal: 20, marginTop: 40, marginBottom: 20, padding: 16, borderRadius: 16, borderWidth: 2, alignItems: 'center' },
  logoutText: { fontSize: 16, fontWeight: '700' },
});
