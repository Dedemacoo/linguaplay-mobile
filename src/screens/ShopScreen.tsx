import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar, Alert } from 'react-native';
import { useThemeColors, THEMES } from '../theme/colors';
import { useProgressStore } from '../store/useProgressStore';
import { Mascot } from '../components/Mascot';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../context/ThemeContext';
import * as Haptics from 'expo-haptics';

type Props = any;

const SHOP_MASCOTS = [
  { id: 'classic', name: 'Klasik Lingo', cost: 0, description: 'Standart Lingo', req: 'none' },
  { id: 'professor', name: 'Profesör Lingo', cost: 0, description: '1. Aşama sonu ödülü!', req: 'e_boss_1' },
  { id: 'astronaut', name: 'Uzaylı Lingo', cost: 500, description: 'Uzay yolculuğu!', req: 'none' },
  { id: 'cyber', name: 'Siber Lingo', cost: 500, description: 'Gelecekten geldi', req: 'none' },
  { id: 'dragon', name: 'Ejderha Lingo', cost: 800, description: 'Ateş püskürten dost', req: 'none' },
  { id: 'explorer', name: 'Kâşif Lingo', cost: 300, description: 'Dünyayı geziyor', req: 'none' },
  { id: 'fire', name: 'Ateş Lingo', cost: 1000, description: 'Çok sıcak!', req: 'none' },
  { id: 'ice', name: 'Buz Lingo', cost: 1000, description: 'Çok soğuk!', req: 'none' },
  { id: 'pirate', name: 'Korsan Lingo', cost: 400, description: 'Denizlerin hakimi', req: 'none' },
  { id: 'royal', name: 'Kral Lingo', cost: 1500, description: 'Asil bir görünüm', req: 'none' },
  { id: 'wizard', name: 'Büyücü Lingo', cost: 600, description: 'Sihirli!', req: 'none' },
];

// Tema bilgileri
const SHOP_THEMES = [
  { id: 'cyberpunk', name: 'Siberpunk', description: 'Neon ışıklar, karanlık gelecek' },
  { id: 'ocean', name: 'Karanlık Okyanus', description: 'Derin sularda bir yolculuk' },
  { id: 'crimson', name: 'Kızıl Şafak', description: 'Ateşli ve tutkulu bir görünüm' },
  { id: 'forest', name: 'Gece Ormanı', description: 'Doğanın yeşil karanlığı' },
];

const themeMascots: Record<string, string> = {
  classic: 'classic',
  cyberpunk: 'cyber',
  ocean: 'pirate',
  crimson: 'fire',
  forest: 'explorer'
};

const THEME_COST = 2500;

const ShopScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { progress, refillHearts, buyMascot, equipMascot, buyTheme } = useProgressStore();
  const { setActiveTheme, activeTheme } = useTheme();

  const handleBuyRefill = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (progress.hearts >= 5) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      Alert.alert('Zaten tam cana sahipsin!');
      return;
    }
    if (refillHearts(50)) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('✅ Canların dolduruldu!');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('❌ Yeterli elmasın yok!');
    }
  };

  const handleBuyTheme = (themeId: string, themeName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const isOwned = (progress.unlockedThemes || ['classic']).includes(themeId);
    if (isOwned) {
      // Zaten sahibi, kuşan
      setActiveTheme(themeId);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('✅ Tema aktif edildi!');
      return;
    }
    if (progress.gems < THEME_COST) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('❌ Yeterli elmasın yok!', `Bu tema için ${THEME_COST} 💎 gerekiyor.`);
      return;
    }
    Alert.alert(
      `🎨 ${themeName} Teması`,
      `Bu temayı ${THEME_COST} 💎 karşılığında satın almak istiyor musun?`,
      [
        { text: 'Vazgeç', style: 'cancel' },
        {
          text: `💎 ${THEME_COST} Satın Al`,
          onPress: () => {
            const success = buyTheme(themeId);
            if (success) {
              setActiveTheme(themeId);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              Alert.alert('🎉 Tema Açıldı!', `${themeName} teması başarıyla açıldı ve aktif edildi!`);
            }
          }
        }
      ]
    );
  };

  // Sürpriz kutu için kaç kutu daha açılacağını hesapla
  const phase = progress.mysteryBoxPhase || 0;
  const cycleCount = progress.themeMysteryCount || 0;
  const thresholds = [0, 10, 15, 20, 25];
  const currentThreshold = phase === 0 ? 5 : thresholds[Math.min(phase, thresholds.length - 1)];
  const remaining = currentThreshold - cycleCount;

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.text }]}>Lingo Market</Text>
        <View style={[styles.gemBadge, { backgroundColor: colors.primary + '15' }]}>
          <Text style={styles.gemIcon}>💎</Text>
          <Text style={[styles.gemText, { color: colors.primary }]}>{progress.gems}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* ── GÜÇLENDİRİCİLER ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>GÜÇLENDİRİCİLER</Text>
        
        <View style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.itemIconContainer}>
            <Text style={{ fontSize: 36 }}>❤️</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, { color: colors.text }]}>Can Doldur</Text>
            <Text style={[styles.itemDesc, { color: colors.textLight }]}>Biten canlarını anında 5'e tamamla.</Text>
          </View>
          <TouchableOpacity 
            style={[styles.buyBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]}
            onPress={handleBuyRefill}
          >
            <Text style={styles.buyBtnText}>💎 50</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.itemIconContainer}>
            <Text style={{ fontSize: 36 }}>❄️</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, { color: colors.text }]}>Seri Dondurma</Text>
            <Text style={[styles.itemDesc, { color: colors.textLight }]}>1 gün çalışmasan bile serin bozulmaz.</Text>
          </View>
          <TouchableOpacity 
            style={[styles.buyBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]}
            onPress={() => {
              if (progress.gems >= 200) {
                Alert.alert('Seri dondurma satın alındı!');
              } else {
                Alert.alert('Yeterli elmasın yok!');
              }
            }}
          >
            <Text style={styles.buyBtnText}>💎 200</Text>
          </TouchableOpacity>
        </View>

        {/* ── TEMALAR ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>TEMALAR</Text>

        {/* Sürpriz kutu bilgisi */}
        <View style={[styles.mysteryInfoCard, { backgroundColor: colors.surface, borderColor: colors.primary + '40', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 28, marginRight: 10 }}>🎁</Text>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={[styles.itemName, { color: colors.text, fontSize: 14 }]}>Sürpriz Kutu</Text>
              <Text style={[styles.itemDesc, { color: colors.textLight, fontSize: 11 }]}>
                {phase === 0
                  ? `İlk tema için ${remaining} kutu daha aç (4. veya 5. kutuda çıkar)`
                  : `${remaining} kutu daha aç — ${currentThreshold}. kutuda tema garantili!`}
              </Text>
            </View>
          </View>
          <TouchableOpacity 
            style={[styles.buyBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark, paddingHorizontal: 12, paddingVertical: 8, minWidth: 70, alignItems: 'center' }]}
            onPress={() => {
              if (progress.gems < 500) {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                Alert.alert('❌ Yeterli elmasın yok!', 'Sürpriz kutu için 500 💎 gerekiyor.');
                return;
              }
              Alert.alert(
                '🎁 Sürpriz Kutu',
                '500 💎 harcayarak sürpriz kutuyu açmak istiyor musun?',
                [
                  { text: 'Vazgeç', style: 'cancel' },
                  {
                    text: 'Aç',
                    onPress: () => {
                      const res = useProgressStore.getState().openMysteryBox(SHOP_THEMES.map(t => t.id));
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                      if (res.success) {
                        if (res.type === 'theme') {
                          const themeName = SHOP_THEMES.find(t => t.id === res.themeId)?.name || 'Yeni Tema';
                          Alert.alert('🎉 Tebrikler!', `Sürpriz kutudan ${themeName} temasını kazandın!`);
                        } else {
                          Alert.alert('🎁 Kutu Açıldı', `Tema çıkmadı ama ${res.refundAmount} 💎 teselli ödülü kazandın!`);
                        }
                      }
                    }
                  }
                ]
              );
            }}
          >
            <Text style={[styles.buyBtnText, { fontSize: 13 }]}>💎 500</Text>
          </TouchableOpacity>
        </View>

        {SHOP_THEMES.map((theme) => {
          const themeData = THEMES[theme.id as keyof typeof THEMES];
          const isOwned = (progress.unlockedThemes || ['classic']).includes(theme.id);
          const isActive = activeTheme === theme.id;
          const canAfford = progress.gems >= THEME_COST;

          return (
            <TouchableOpacity
              key={theme.id}
              style={[styles.themeCard, { borderColor: isOwned ? themeData.primary : colors.border }]}
              onPress={() => handleBuyTheme(theme.id, theme.name)}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={[themeData.surface, themeData.bg]}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              {/* Mascot ikonu */}
              <View style={[styles.themeIconBg, { backgroundColor: themeData.primary + '33' }]}>
                <Mascot mascotId={themeMascots[theme.id]} size={36} animated={false} />
              </View>
              <View style={styles.themeInfo}>
                <Text style={[styles.themeName, { color: '#FFF' }]}>{theme.name}</Text>
                <Text style={[styles.themeDesc, { color: 'rgba(255,255,255,0.65)' }]}>{theme.description}</Text>
                {isActive && <Text style={[{ color: themeData.primary, fontSize: 11, fontWeight: '700', marginTop: 2 }]}>✓ Aktif</Text>}
              </View>
              {/* Sağ taraf butonu */}
              {isOwned ? (
                isActive ? (
                  <View style={[styles.themeBtn, { backgroundColor: themeData.primary + '33', borderWidth: 1, borderColor: themeData.primary }]}>
                    <Text style={[styles.themeBtnText, { color: themeData.primary }]}>Aktif</Text>
                  </View>
                ) : (
                  <View style={[styles.themeBtn, { backgroundColor: themeData.primary }]}>
                    <Text style={[styles.themeBtnText, { color: '#FFF' }]}>Kullan</Text>
                  </View>
                )
              ) : (
                <View style={[styles.themeBtn, { backgroundColor: canAfford ? themeData.primary : 'rgba(255,255,255,0.1)' }]}>
                  <Text style={{ fontSize: 10, color: canAfford ? '#FFF' : 'rgba(255,255,255,0.5)', fontWeight: '700', textAlign: 'center' }}>💎{'\n'}{THEME_COST}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* ── KARAKTERLER ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>KARAKTERLER</Text>
        <View style={styles.mascotGrid}>
          {SHOP_MASCOTS.map(m => {
            const isUnlocked = progress.unlockedMascots?.includes(m.id);
            const isEquipped = progress.equippedMascot === m.id;
            
            let isReqMet = true;
            if (m.req !== 'none') {
               isReqMet = Object.values(progress.languages).some((lang: any) => lang.completedLessons?.includes(m.req));
            }

            return (
              <View key={m.id} style={[styles.mascotCard, { backgroundColor: colors.surface, borderColor: isEquipped ? colors.primary : colors.border }]}>
                <View style={styles.mascotImgWrapper}>
                   <Mascot mascotId={m.id} size={60} animated={false} />
                </View>
                <Text style={[styles.mascotName, { color: colors.text }]} numberOfLines={1}>{m.name}</Text>
                
                {!isReqMet ? (
                  <View style={[styles.mascotBtn, { backgroundColor: colors.border }]}>
                    <Text style={[styles.mascotBtnText, { color: colors.textLight }]}>🔒 Kilitli</Text>
                  </View>
                ) : isEquipped ? (
                  <View style={[styles.mascotBtn, { backgroundColor: colors.primary + '40' }]}>
                    <Text style={[styles.mascotBtnText, { color: colors.primary }]}>Seçili</Text>
                  </View>
                ) : isUnlocked ? (
                  <TouchableOpacity 
                    style={[styles.mascotBtn, { backgroundColor: colors.primary }]}
                    onPress={() => {
                      equipMascot(m.id);
                      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    }}
                  >
                    <Text style={[styles.mascotBtnText, { color: '#FFF' }]}>Kullan</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                    style={[styles.mascotBtn, { backgroundColor: progress.gems >= m.cost ? '#58CC02' : colors.border }]}
                    onPress={() => {
                      if (progress.gems >= m.cost) {
                        buyMascot(m.id, m.cost);
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                      } else {
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                        Alert.alert('Yeterli elmasın yok!');
                      }
                    }}
                  >
                    <Text style={[styles.mascotBtnText, { color: progress.gems >= m.cost ? '#FFF' : colors.textLight }]}>💎 {m.cost}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>

        {/* ── ELMAS SATIN AL ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>ELMAS SATIN AL</Text>

        <View style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border, opacity: 0.6 }]}>
          <View style={styles.itemIconContainer}>
            <Text style={{ fontSize: 36 }}>💎</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, { color: colors.text }]}>Bir Avuç Elmas</Text>
            <Text style={[styles.itemDesc, { color: colors.textLight }]}>+500 Elmas</Text>
          </View>
          <View style={[styles.buyBtn, { backgroundColor: colors.border, borderBottomColor: colors.border }]}>
            <Text style={[styles.buyBtnText, { color: colors.textLight }]}>Yakında</Text>
          </View>
        </View>

        <View style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border, opacity: 0.6 }]}>
          <View style={styles.itemIconContainer}>
            <Text style={{ fontSize: 36 }}>💰</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={[styles.itemName, { color: colors.text }]}>Elmas Sandığı</Text>
            <Text style={[styles.itemDesc, { color: colors.textLight }]}>+2000 Elmas</Text>
          </View>
          <View style={[styles.buyBtn, { backgroundColor: colors.border, borderBottomColor: colors.border }]}>
            <Text style={[styles.buyBtnText, { color: colors.textLight }]}>Yakında</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  title: { fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  gemBadge: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
  },
  gemIcon: { fontSize: 16, marginRight: 6 },
  gemText: { fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  content: { padding: 20 },
  sectionTitle: {
    fontSize: 14, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1.5, marginBottom: 15,
  },
  itemCard: {
    flexDirection: 'row', alignItems: 'center',
    padding: 16, borderRadius: 16, borderWidth: 2, borderBottomWidth: 4, marginBottom: 15,
  },
  itemIconContainer: { width: 60, height: 60, justifyContent: 'center', alignItems: 'center' },
  itemInfo: { flex: 1, paddingHorizontal: 15 },
  itemName: { fontSize: 18, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 4 },
  itemDesc: { fontSize: 13, lineHeight: 18 },
  buyBtn: { paddingHorizontal: 15, paddingVertical: 10, borderRadius: 12, borderBottomWidth: 3 },
  buyBtnText: { color: '#FFF', fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 14 },

  mysteryInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1.5,
    marginBottom: 14,
    gap: 10,
  },

  // Tema kartı
  themeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 12,
    overflow: 'hidden',
    gap: 12,
  },
  themeIconBg: {
    width: 52, height: 52, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
  },
  themeInfo: { flex: 1 },
  themeName: { fontSize: 16, fontWeight: '800', color: '#FFF', marginBottom: 2 },
  themeDesc: { fontSize: 12, lineHeight: 16 },
  themeBtn: {
    width: 56, height: 56, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
  },
  themeBtnText: { fontWeight: '800', fontSize: 13 },

  // Maskot
  mascotGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 15 },
  mascotCard: {
    width: '48%', borderWidth: 2, borderBottomWidth: 4,
    borderRadius: 16, padding: 12, alignItems: 'center', marginBottom: 15,
  },
  mascotImgWrapper: { height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  mascotName: { fontSize: 14, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 8, textAlign: 'center' },
  mascotBtn: { width: '100%', paddingVertical: 8, borderRadius: 10, alignItems: 'center' },
  mascotBtnText: { fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', fontSize: 12 },
});

export default ShopScreen;
