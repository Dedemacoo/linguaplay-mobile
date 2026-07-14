import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useProgressStore } from '../store/useProgressStore';
import { Mascot } from '../components/Mascot';

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

const ShopScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { progress, addGems, refillHearts, buyMascot, equipMascot, buyCostume, equipCostume } = useProgressStore();

  const handleBuyRefill = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (progress.hearts >= 5) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      alert('Zaten tam cana sahipsin!');
      return;
    }
    if (refillHearts(50)) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      alert('Canların dolduruldu!');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      alert('Yeterli elmasın yok!');
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.text }]}>Mağaza</Text>
        <View style={[styles.gemBadge, { backgroundColor: colors.primary + '15' }]}>
          <Text style={styles.gemIcon}>💎</Text>
          <Text style={[styles.gemText, { color: colors.primary }]}>{progress.gems}</Text>
        </View>
      </View>

      <View style={styles.content}>
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
                // Here we would deduct 200 gems and add a streak freeze to context
                alert('Seri dondurma satın alındı! (Yakında context eklenecek)');
              } else {
                alert('Yeterli elmasın yok!');
              }
            }}
          >
            <Text style={styles.buyBtnText}>💎 200</Text>
          </TouchableOpacity>
        </View>

        
        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>KARAKTERLER (MASCOTS)</Text>
        <View style={styles.mascotGrid}>
          {SHOP_MASCOTS.map(m => {
            const isUnlocked = progress.unlockedMascots?.includes(m.id);
            const isEquipped = progress.equippedMascot === m.id;
            
            // Check requirements
            let isReqMet = true;
            if (m.req !== 'none') {
               // Check if req is in ANY language's completedLessons
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
                        alert('Yeterli elmasın yok!');
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
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  gemBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  gemIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  gemText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
    marginBottom: 15,
  },
  itemIconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  buyBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderBottomWidth: 3,
  },
  
  mascotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mascotCard: {
    width: '48%',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  mascotImgWrapper: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  mascotName: {
    fontSize: 14,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  mascotBtn: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  mascotBtnText: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 12,
  },
  buyBtnText: {
    color: '#FFF',
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 14,
  },
});

export default ShopScreen;
