import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';

import * as Haptics from 'expo-haptics';
const AVATARS = ['👤', '🧑‍💻', '👩‍🎨', '🧔', '👩‍🏫', '👩‍⚕️', '👨‍🔬', '👩‍🚀', '🧕', '🧑‍🎓', '👩‍💼', '🐦', '🦊', '🐼', '🦁', '🐸', '🦄', '🦖', '🐉', '🐈'];

const ProfileScreen = () => {
  const colors = useThemeColors();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  const { progress, setAvatar, refillHearts, addGems  } = useProgressStore();
  const { user } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);

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
    { key: 'russian', label: 'Rusça', flag: '🇷🇺' },
    { key: 'chinese', label: 'Çince', flag: '🇨🇳' },
    { key: 'arabic', label: 'Arapça', flag: '🇸🇦' },
    { key: 'portuguese', label: 'Portekizce', flag: '🇵🇹' },
    { key: 'dutch', label: 'Felemenkçe', flag: '🇳🇱' },
  ] as const;

  const renderLangCard = (lang: typeof allLanguages[number]) => {
    const langProg = progress.languages?.[lang.key] || { totalXp: 0, level: 1 };
    const isActive = activeLanguage === lang.key;
    
    return (
      <TouchableOpacity 
        key={lang.key}
        style={[
          styles.langCard, 
          { 
            backgroundColor: isActive ? colors.primary + '15' : colors.surface,
            borderColor: isActive ? colors.primary : colors.border
          }
        ]}
        onPress={() => setActiveLanguage(lang.key as any)}
      >
        <Text style={styles.langCardFlag}>{lang.flag}</Text>
        <Text style={[styles.langCardName, { color: isActive ? colors.primary : colors.text }]}>{lang.label}</Text>
        <Text style={[styles.langCardStats, { color: colors.textLight }]}>
          Sv. {langProg.level} • {langProg.totalXp} XP
        </Text>
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
      Alert.alert('Başarılı', '20 Can tamamen yenilendi!');
    } else {
      Alert.alert('Hata', 'Yeterli elmasın yok! Lütfen elmas satın al.');
    }
  };

  const handleBuyGems = (amount: number) => {
    Alert.alert(
      "Satın Alma Başarılı",
      `Hesabınıza ${amount} Elmas eklendi!`,
      [{ text: "Tamam", onPress: () => addGems(amount) }]
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          style={[styles.avatarPlaceholder, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => setShowAvatarModal(true)}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 45 }}>{progress.avatar}</Text>
          <View style={[styles.editBadge, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <Text style={{ fontSize: 10 }}>✏️</Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.name, { color: colors.text }]}>{user?.displayName || 'Kullanıcı'}</Text>
        <Text style={[styles.username, { color: colors.textLight }]}>{user?.email ? `@${user.email.split('@')[0]}` : '@kullanici'}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={[styles.statValue, { color: colors.text }]}>{progress.languages?.[activeLanguage]?.streak || 0}</Text>
          <Text style={[styles.statLabel, { color: colors.textLight }]}>Günlük Seri</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={styles.statIcon}>⚡</Text>
          <Text style={[styles.statValue, { color: colors.text }]}>{progress.languages?.[activeLanguage]?.totalXp || 0}</Text>
          <Text style={[styles.statLabel, { color: colors.textLight }]}>Toplam XP</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {/* MARKET & ELMAS BUTONU */}
        <TouchableOpacity 
          style={[styles.shopBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => setShowShopModal(true)}
        >
          <View style={styles.shopBtnLeft}>
            <Text style={styles.shopBtnIcon}>💎</Text>
            <View>
              <Text style={[styles.shopBtnTitle, { color: colors.text }]}>Market / Elmas</Text>
              <Text style={[styles.shopBtnSub, { color: colors.textLight }]}>Şu an {progress.gems} Elmasın var</Text>
            </View>
          </View>
          <Text style={[styles.chevron, { color: colors.primary }]}>Dükkana Git ›</Text>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 20 }]}>ÖĞRENİLEN DİLLER</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.langScroll}>
          {allLanguages.map(renderLangCard)}
        </ScrollView>

        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>HESAP AYARLARI</Text>
        <TouchableOpacity 
          style={[styles.menuItem, { borderBottomColor: colors.border }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={[styles.menuText, { color: colors.text }]}>⚙️ Ayarlar</Text>
          <Text style={[styles.chevron, { color: colors.textLight }]}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.menuItem, { borderBottomColor: colors.border }]}
          onPress={() => navigation.navigate('Premium')}
        >
          <Text style={[styles.menuText, { color: colors.text }]}>👑 Premium'a Geç</Text>
          <Text style={[styles.chevron, { color: colors.textLight }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.logoutBtn, { borderColor: colors.error, backgroundColor: colors.surface }]}
          onPress={handleLogout}
        >
          <Text style={[styles.logoutText, { color: colors.error }]}>🚪 Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar Modal */}
      <Modal visible={showAvatarModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Avatar Seç</Text>
            <View style={styles.avatarGrid}>
              {AVATARS.map((emoji) => (
                <TouchableOpacity 
                  key={emoji}
                  style={[
                    styles.avatarOption, 
                    progress.avatar === emoji && { backgroundColor: colors.primary + '20', borderColor: colors.primary }
                  ]}
                  onPress={() => {
                    setAvatar(emoji);
                    setShowAvatarModal(false);
                  }}
                >
                  <Text style={{ fontSize: 32 }}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.modalCloseBtn, { backgroundColor: colors.border }]}
              onPress={() => setShowAvatarModal(false)}
            >
              <Text style={[styles.modalCloseBtnText, { color: colors.text }]}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Market / Shop Modal */}
      <Modal visible={showShopModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={[styles.shopModalContent, { backgroundColor: colors.background }]}>
            <View style={styles.shopHeader}>
              <Text style={[styles.shopTitle, { color: colors.text }]}>Market 🏪</Text>
              <TouchableOpacity onPress={() => setShowShopModal(false)}>
                <Text style={{ fontSize: 24, color: colors.textLight }}>✖</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Can Yenileme */}
              <Text style={[styles.shopSectionTitle, { color: colors.textLight }]}>CAN & ENERJİ</Text>
              <TouchableOpacity 
                style={[styles.shopItem, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={handleRefillHearts}
              >
                <View style={styles.shopItemLeft}>
                  <Text style={{ fontSize: 30 }}>❤️</Text>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.shopItemTitle, { color: colors.text }]}>Canları Doldur</Text>
                    <Text style={[styles.shopItemSub, { color: colors.textLight }]}>20 Canı anında geri kazan.</Text>
                  </View>
                </View>
                <View style={[styles.shopPriceBox, { backgroundColor: colors.background, borderColor: colors.border }]}>
                  <Text style={{ fontSize: 16 }}>💎</Text>
                  <Text style={[styles.shopPriceText, { color: colors.text }]}>400</Text>
                </View>
              </TouchableOpacity>

              {/* Elmas Paketleri */}
              <Text style={[styles.shopSectionTitle, { color: colors.textLight, marginTop: 25 }]}>ELMAS PAKETLERİ</Text>
              <View style={styles.diamondGrid}>
                {[
                  { amount: 500, price: '₺19.99', icon: '💎' },
                  { amount: 1200, price: '₺39.99', icon: '💰' },
                  { amount: 3000, price: '₺79.99', icon: '👑' },
                  { amount: 10000, price: '₺199.99', icon: '🚀' },
                ].map((pkg, idx) => (
                  <TouchableOpacity 
                    key={idx} 
                    style={[styles.diamondCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                    onPress={() => handleBuyGems(pkg.amount)}
                  >
                    <Text style={{ fontSize: 35, marginBottom: 5 }}>{pkg.icon}</Text>
                    <Text style={[styles.diamondAmount, { color: colors.text }]}>{pkg.amount}</Text>
                    <Text style={[styles.diamondLabel, { color: colors.textLight }]}>Elmas</Text>
                    <View style={[styles.diamondPriceBox, { backgroundColor: colors.primary }]}>
                      <Text style={styles.diamondPriceText}>{pkg.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 25,
    borderBottomWidth: 1,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  name: { fontSize: 22, fontWeight: 'bold' },
  username: { fontSize: 15, marginTop: 2 },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15,
    gap: 15,
    paddingHorizontal: 20,
  },
  statBox: {
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  statIcon: { fontSize: 28, marginBottom: 5 },
  statValue: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 13, marginTop: 2, fontWeight: '600' },
  menu: { padding: 20 },
  
  shopBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  shopBtnLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  shopBtnIcon: { fontSize: 28 },
  shopBtnTitle: { fontSize: 16, fontWeight: 'bold' },
  shopBtnSub: { fontSize: 13, marginTop: 2 },

  sectionTitle: { fontSize: 13, fontWeight: 'bold', marginBottom: 12, marginLeft: 5, letterSpacing: 1 },
  langScroll: { paddingRight: 20, gap: 12 },
  langCard: {
    width: 140,
    padding: 15,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
  },
  langCardFlag: { fontSize: 32, marginBottom: 8 },
  langCardName: { fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  langCardStats: { fontSize: 12 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  menuText: { fontSize: 16, fontWeight: '600' },
  chevron: { fontSize: 15, fontWeight: 'bold' },
  logoutBtn: {
    marginTop: 30,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  logoutText: { fontSize: 16, fontWeight: 'bold' },
  
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    minHeight: 400,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
  },
  avatarOption: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseBtn: {
    marginTop: 30,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  modalCloseBtnText: { fontSize: 16, fontWeight: 'bold' },

  // Shop Styles
  shopModalContent: {
    flex: 0.9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  shopHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  shopTitle: { fontSize: 24, fontWeight: 'bold' },
  shopSectionTitle: { fontSize: 13, fontWeight: 'bold', marginBottom: 15, letterSpacing: 1 },
  shopItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
    marginBottom: 15,
  },
  shopItemLeft: { flexDirection: 'row', alignItems: 'center' },
  shopItemTitle: { fontSize: 16, fontWeight: 'bold' },
  shopItemSub: { fontSize: 13, marginTop: 2 },
  shopPriceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  shopPriceText: { fontSize: 15, fontWeight: 'bold' },
  diamondGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'space-between' },
  diamondCard: {
    width: '47%',
    padding: 15,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  diamondAmount: { fontSize: 18, fontWeight: 'bold' },
  diamondLabel: { fontSize: 13, marginBottom: 12 },
  diamondPriceBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  diamondPriceText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
});

export default ProfileScreen;
