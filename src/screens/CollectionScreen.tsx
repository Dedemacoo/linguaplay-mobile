import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Modal, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useThemeColors, BRAND } from '../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { MASCOTS } from '../data/MascotData';
import { Mascot } from '../components/Mascot';
import { useProgressStore } from '../store/useProgressStore';

const { width, height } = Dimensions.get('window');

const RARITY_COLORS = {
  Common: ['#28a745', '#1e7e34'],
  Rare: ['#0A84FF', '#004080'],
  Epic: ['#BF5AF2', '#5E1B8F'],
  Legendary: ['#FFD60A', '#B27900'],
  Mythic: ['#FF453A', '#8B0000']
};

const CollectionScreen = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { progress, equipMascot } = useProgressStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isEquipping, setIsEquipping] = useState(false);
  
  // Progress anim
  const ringAnim = useRef(new Animated.Value(0)).current;

  const totalMascots = Object.keys(MASCOTS).length;
  const unlockedCount = progress.unlockedMascots.length;
  const completionPercent = Math.round((unlockedCount / totalMascots) * 100);

  useEffect(() => {
    Animated.timing(ringAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleEquip = (id: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setIsEquipping(true);
    equipMascot(id);
    setTimeout(() => setIsEquipping(false), 500);
    setSelectedItem(null);
  };

  const filteredMascots = Object.values(MASCOTS).filter(mascot => 
    mascot.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* BACKGROUND */}
      <LinearGradient colors={['#0F172A', '#020617']} style={StyleSheet.absoluteFillObject} />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
            <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold' }}>✕</Text>
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginRight: 8, marginTop: 2 }}>
                <Mascot mascotId={progress.equippedMascot || 'classic'} size={10} animated={false} />
              </View>
              <Text style={styles.headerTitle}>Lingo Koleksiyonu</Text>
            </View>
            <View style={styles.statsRow}>
              <Text style={styles.statText}>{unlockedCount}/{totalMascots} <Text style={{ color: colors.textLight }}>Açıldı</Text></Text>
            </View>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{completionPercent}%</Text>
          <View style={[styles.progressTrack, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
            <Animated.View style={[
              styles.progressFill, 
              { backgroundColor: BRAND.primary, width: ringAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', `${completionPercent}%`] }) }
            ]} />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* TOP PREVIEW */}
        <View style={styles.previewArea}>
          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.5)']} style={styles.previewGradient}>
             <Mascot mascotId={progress.equippedMascot || 'classic'} size={60} />
             <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Mevcut Görünüm</Text>
          </LinearGradient>
        </View>

        {/* SEARCH & FILTER */}
        <View style={styles.controlsRow}>
          <View style={[styles.searchBar, { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }]}>
            <Text style={{ color: colors.textLight, marginRight: 8 }}>🔍</Text>
            <TextInput
              style={[styles.searchInput, { color: '#FFF' }]}
              placeholder="Kostüm ara..."
              placeholderTextColor={colors.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          {filteredMascots.map(item => {
            const isUnlocked = progress.unlockedMascots.includes(item.id);
            const isEquipped = progress.equippedMascot === item.id;
            const glowColors = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
            
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.cardContainer, { opacity: isUnlocked ? 1 : 0.8 }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setSelectedItem(item);
                }}
                activeOpacity={0.8}
              >
                <View style={[styles.cardBorder, { borderColor: glowColors[0] }]}>
                  {isEquipped && <View style={[styles.equippedBadge, { backgroundColor: BRAND.primary }]}><Text style={{ fontSize: 10, fontWeight: 'bold' }}>✓</Text></View>}
                  <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.6)']} style={styles.cardInner}>
                    <View style={[styles.cardImageContainer, { width: '100%', height: '100%' }, !isUnlocked && { opacity: 0.3 }]}>
                      <Mascot mascotId={item.id} size={60} animated={false} forceLargeClassic={true} />
                    </View>
                    {!isUnlocked && (
                      <View style={styles.lockedOverlay}>
                        <Text style={{ fontSize: 24, marginBottom: 5 }}>🔒</Text>
                      </View>
                    )}
                  </LinearGradient>
                </View>
                <Text style={[styles.cardName, { color: '#FFF' }]} numberOfLines={1}>{item.name}</Text>
                <Text style={[styles.cardRarity, { color: glowColors[0] }]}>{item.rarity}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* DETAIL MODAL */}
      <Modal visible={!!selectedItem} transparent animationType="slide">
        {selectedItem && (
          <View style={styles.modalOverlay}>
            <LinearGradient 
              colors={(RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common) as any} 
              style={styles.modalContent}
            >
              <View style={[styles.modalInner, { backgroundColor: '#0A0A0C' }]}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedItem(null)}>
                  <Text style={{ color: colors.textLight, fontSize: 32, fontWeight: 'bold' }}>✕</Text>
                </TouchableOpacity>

                <View style={styles.modalImgWrap}>
                  <Mascot mascotId={selectedItem?.id || 'classic'} size={80} forceLargeClassic={true} />
                </View>
                
                <Text style={[styles.modalName, { color: '#FFF', marginTop: 20 }]}>{selectedItem.name}</Text>
                <Text style={[styles.modalRarity, { color: (RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common)[0] }]}>
                  {selectedItem.rarity}
                </Text>

                <View style={[styles.storyBox, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                  <Text style={[styles.storyText, { color: colors.textLight }]}>{selectedItem.story}</Text>
                </View>

                {!progress.unlockedMascots.includes(selectedItem.id) && (
                  <View style={[styles.reqBox, { borderColor: 'rgba(255,255,255,0.2)' }]}>
                    <Text style={{ fontSize: 24, marginBottom: 8 }}>🔒</Text>
                    <Text style={[styles.reqText, { color: '#FFF' }]}>{selectedItem.unlockRequirement}</Text>
                  </View>
                )}

                <View style={styles.actionRow}>
                  <TouchableOpacity 
                    style={[
                      styles.equipBtn, 
                      { 
                        backgroundColor: progress.unlockedMascots.includes(selectedItem.id) ? BRAND.primary : 'rgba(255,255,255,0.05)', 
                        opacity: progress.unlockedMascots.includes(selectedItem.id) ? 1 : 0.5 
                      }
                    ]}
                    disabled={!progress.unlockedMascots.includes(selectedItem.id)}
                    onPress={() => handleEquip(selectedItem.id)}
                  >
                    <Text style={[styles.equipBtnText, { color: progress.unlockedMascots.includes(selectedItem.id) ? '#FFF' : colors.textLight }]}>
                      {progress.equippedMascot === selectedItem.id ? 'Kuşanıldı' : (progress.unlockedMascots.includes(selectedItem.id) ? 'Kuşan' : 'Kilitli')}
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </LinearGradient>
          </View>
        )}
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFF' },
  statsRow: { flexDirection: 'row', gap: 12, marginTop: 4 },
  statText: { fontSize: 12, fontWeight: '700', color: '#FFF' },
  
  progressContainer: { alignItems: 'flex-end', justifyContent: 'center' },
  progressText: { fontSize: 16, fontWeight: '900', color: '#FFF', marginBottom: 4 },
  progressTrack: { width: 80, height: 8, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  
  scrollContent: { paddingBottom: 50 },
  
  previewArea: {
    height: 180,
    marginHorizontal: 20,
    borderRadius: 24,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    overflow: 'hidden',
  },
  previewGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  controlsRow: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', height: 48, borderRadius: 16, paddingHorizontal: 15, borderWidth: 1, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, fontWeight: '600' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'flex-start', gap: 10 },
  cardContainer: { width: (width - 50) / 3, marginBottom: 20, alignItems: 'center' }, // Adjusted to 3 per row
  cardBorder: { width: '100%', aspectRatio: 3/4, borderRadius: 20, borderWidth: 2, padding: 2, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  cardInner: { flex: 1, borderRadius: 16, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  cardImageContainer: { alignItems: 'center', justifyContent: 'center' },
  equippedBadge: { position: 'absolute', top: -5, right: -5, width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', zIndex: 5, borderWidth: 2, borderColor: '#0A0A0C' },
  lockedOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center', padding: 10 },
  cardName: { fontSize: 13, fontWeight: '800', textAlign: 'center' },
  cardRarity: { fontSize: 11, fontWeight: '700', textAlign: 'center', marginTop: 2, letterSpacing: 0.5 },

  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.8)' },
  modalContent: { width: '100%', height: height * 0.85, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 2 },
  modalInner: { flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', padding: 25 },
  closeBtn: { position: 'absolute', top: 20, right: 25, zIndex: 10 },
  modalImgWrap: { shadowColor: '#FFF', shadowOpacity: 0.2, shadowRadius: 30, shadowOffset: { width: 0, height: 0 }, elevation: 10 },
  modalName: { fontSize: 32, fontWeight: '900', marginBottom: 5 },
  modalRarity: { fontSize: 16, fontWeight: '800', marginBottom: 25, letterSpacing: 1 },
  storyBox: { width: '100%', padding: 20, borderRadius: 24, marginBottom: 20 },
  storyText: { fontSize: 15, lineHeight: 24, textAlign: 'center' },
  reqBox: { width: '100%', padding: 20, borderRadius: 20, borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', marginBottom: 20 },
  reqText: { fontSize: 16, fontWeight: '800', textAlign: 'center' },
  
  actionRow: { flexDirection: 'row', width: '100%', marginTop: 'auto', marginBottom: 20 },
  equipBtn: { flex: 1, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  equipBtnText: { fontSize: 20, fontWeight: '900' },
});

export default CollectionScreen;
