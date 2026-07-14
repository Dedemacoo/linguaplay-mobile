import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Switch, Modal, TextInput, Dimensions, Platform, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useThemeColors, BRAND } from '../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');

// MOCK DATA
const TABS = [
  { id: 'outfits', label: 'Outfits', icon: '👕' },
  { id: 'themes', label: 'Themes', icon: '🎨' },
  { id: 'badges', label: 'Badges', icon: '🏆' },
  { id: 'cosmetics', label: 'Cosmetics', icon: '✨' },
  { id: 'collectibles', label: 'Collectibles', icon: '🎁' }
];

const RARITY_COLORS = {
  Common: ['#28a745', '#1e7e34'],
  Rare: ['#0A84FF', '#004080'],
  Epic: ['#BF5AF2', '#5E1B8F'],
  Legendary: ['#FFD60A', '#B27900'],
  Mythic: ['#FF453A', '#8B0000']
};

const MOCK_ITEMS = [
  { id: '1', type: 'outfits', num: '#001', name: 'Classic', rarity: 'Common', unlocked: true, image: '🐬', story: 'The default Lingo appearance.', req: '' },
  { id: '2', type: 'outfits', num: '#012', name: 'Cyber', rarity: 'Epic', unlocked: true, image: '🤖', story: 'Straight from the future.', req: '' },
  { id: '3', type: 'outfits', num: '#045', name: 'Astronaut', rarity: 'Legendary', unlocked: false, image: '👩‍🚀', story: 'Ready to explore the galaxy.', req: 'Complete Galaxy World' },
  { id: '4', type: 'outfits', num: '#099', name: 'Dragon', rarity: 'Mythic', unlocked: false, image: '🐉', story: 'The ultimate form.', req: 'Complete Dragon World' },
  { id: '5', type: 'outfits', num: '#015', name: 'Pirate', rarity: 'Rare', unlocked: true, image: '🏴‍☠️', story: 'Yarrr!', req: '' },
  { id: '6', type: 'themes', num: '#T01', name: 'Dark Theme', rarity: 'Common', unlocked: true, image: '🌙', story: 'Easy on the eyes.', req: '' },
  { id: '7', type: 'themes', num: '#T05', name: 'Ocean', rarity: 'Rare', unlocked: false, image: '🌊', story: 'Deep blue vibes.', req: 'Unlock Ocean World' },
  { id: '8', type: 'badges', num: '#B12', name: '30 Day Streak', rarity: 'Epic', unlocked: true, image: '🔥', story: 'Played for 30 consecutive days.', req: '' },
  { id: '9', type: 'cosmetics', num: '#C08', name: 'Golden Frame', rarity: 'Legendary', unlocked: false, image: '🖼️', story: 'A frame made of pure gold.', req: 'Reach Level 50' },
  { id: '10', type: 'collectibles', num: '#I01', name: 'Ancient Coin', rarity: 'Mythic', unlocked: false, image: '🪙', story: 'A coin from a forgotten era.', req: 'Find in mystery box' },
];

const FloatingParticle = ({ delay, duration, startX, startY }: any) => {
  const animY = useRef(new Animated.Value(0)).current;
  const animOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animOpacity, { toValue: 0.4, duration: duration * 0.2, delay, useNativeDriver: true }),
        Animated.parallel([
          Animated.timing(animY, { toValue: -150, duration: duration * 0.8, easing: Easing.linear, useNativeDriver: true }),
          Animated.timing(animOpacity, { toValue: 0, duration: duration * 0.8, useNativeDriver: true })
        ])
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[
      styles.particle, 
      { left: startX, bottom: startY, opacity: animOpacity, transform: [{ translateY: animY }] }
    ]} />
  );
};

// Top Animated Lingo
const AnimatedLingo = ({ item, isEquipping }: any) => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Idle float
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -8, duration: 1500, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1500, useNativeDriver: true })
      ])
    ).start();
  }, []);

  useEffect(() => {
    if (isEquipping) {
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.2, duration: 150, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 3, useNativeDriver: true })
      ]).start();
    }
  }, [item, isEquipping]);

  return (
    <Animated.View style={{ transform: [{ translateY: floatAnim }, { scale: scaleAnim }], alignItems: 'center' }}>
      <Text style={{ fontSize: 70, textShadowColor: RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS][0], textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 30 }}>
        {item.image}
      </Text>
      <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 10, fontFamily: 'SpaceGrotesk_700Bold' }}>{item.name}</Text>
      <Text style={{ color: RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS][0], fontSize: 13, fontWeight: 'bold' }}>{item.rarity}</Text>
    </Animated.View>
  );
};

const CollectionScreen = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  
  const [activeTab, setActiveTab] = useState('outfits');
  const [autoOutfit, setAutoOutfit] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [equippedItem, setEquippedItem] = useState<any>(MOCK_ITEMS[1]);
  const [isEquipping, setIsEquipping] = useState(false);
  
  // Progress anim
  const ringAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(ringAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleEquip = (item: any) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setIsEquipping(true);
    setEquippedItem(item);
    setTimeout(() => setIsEquipping(false), 500);
    setSelectedItem(null);
  };

  const filteredItems = MOCK_ITEMS.filter(item => 
    item.type === activeTab && 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* BACKGROUND */}
      <LinearGradient colors={['#0F172A', '#020617']} style={StyleSheet.absoluteFillObject} />
      <FloatingParticle delay={0} duration={4000} startX="20%" startY="10%" />
      <FloatingParticle delay={1000} duration={5000} startX="50%" startY="5%" />
      <FloatingParticle delay={500} duration={3500} startX="80%" startY="15%" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
            <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold' }}>✕</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>🐬 Collection</Text>
            <View style={styles.statsRow}>
              <Text style={styles.statText}>42/120 <Text style={{ color: colors.textLight }}>Collected</Text></Text>
              <Text style={styles.statText}>4/18 <Text style={{ color: RARITY_COLORS.Legendary[0] }}>Legendary</Text></Text>
            </View>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>35%</Text>
          <View style={[styles.progressTrack, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
            <Animated.View style={[
              styles.progressFill, 
              { backgroundColor: BRAND.primary, width: ringAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '35%'] }) }
            ]} />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* TOP PREVIEW */}
        <View style={styles.previewArea}>
          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.5)']} style={styles.previewGradient}>
            <AnimatedLingo item={equippedItem} isEquipping={isEquipping} />
          </LinearGradient>
        </View>

        {/* TABS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer} contentContainerStyle={{ paddingHorizontal: 20 }}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  isActive && { backgroundColor: 'rgba(255,255,255,0.1)' }
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setActiveTab(tab.id);
                }}
              >
                <Text style={{ fontSize: 20, marginRight: 6 }}>{tab.icon}</Text>
                <Text style={[
                  styles.tabText,
                  { color: isActive ? '#FFF' : colors.textLight, fontWeight: isActive ? '800' : '600' }
                ]}>
                  {tab.label}
                </Text>
                {isActive && <View style={[styles.tabIndicator, { backgroundColor: BRAND.primary }]} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* SEARCH & FILTER */}
        <View style={styles.controlsRow}>
          <View style={[styles.searchBar, { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }]}>
            <Text style={{ color: colors.textLight, marginRight: 8 }}>🔍</Text>
            <TextInput
              style={[styles.searchInput, { color: '#FFF' }]}
              placeholder="Search items..."
              placeholderTextColor={colors.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={[styles.filterBtn, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
            <Text style={{ fontSize: 18 }}>↕️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
            <Text style={{ fontSize: 18 }}>⚡</Text>
          </TouchableOpacity>
        </View>

        {/* AUTO OUTFIT */}
        {activeTab === 'outfits' && (
          <View style={[styles.autoOutfitContainer, { backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }]}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.autoOutfitTitle, { color: '#FFF' }]}>🌍 Auto Outfit</Text>
              <Text style={[styles.autoOutfitDesc, { color: colors.textMuted }]}>Automatically equip outfits depending on current learning world.</Text>
            </View>
            <Switch
              value={autoOutfit}
              onValueChange={setAutoOutfit}
              trackColor={{ true: BRAND.primary, false: '#3A3A3C' }}
            />
          </View>
        )}

        {/* GRID */}
        <View style={styles.grid}>
          {filteredItems.map(item => {
            const glowColors = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
            const isEquipped = equippedItem.id === item.id;
            
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.cardContainer, { opacity: item.unlocked ? 1 : 0.8 }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setSelectedItem(item);
                }}
                activeOpacity={0.8}
              >
                <View style={[styles.cardBorder, { borderColor: glowColors[0] }]}>
                  {isEquipped && <View style={[styles.equippedBadge, { backgroundColor: BRAND.primary }]}><Text style={{ fontSize: 10, fontWeight: 'bold' }}>✓</Text></View>}
                  <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.6)']} style={styles.cardInner}>
                    <Text style={[styles.cardNum, { color: colors.textMuted }]}>{item.num}</Text>
                    <Text style={[styles.cardImage, !item.unlocked && { opacity: 0.3 }]}>{item.image}</Text>
                    {!item.unlocked && (
                      <View style={styles.lockedOverlay}>
                        <Text style={{ fontSize: 24, marginBottom: 5 }}>🔒</Text>
                        <Text style={[styles.cardReqText, { color: '#FFF' }]} numberOfLines={2}>{item.req}</Text>
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
              colors={RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common} 
              style={styles.modalContent}
            >
              <View style={[styles.modalInner, { backgroundColor: '#0A0A0C' }]}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedItem(null)}>
                  <Text style={{ color: colors.textLight, fontSize: 32, fontWeight: 'bold' }}>✕</Text>
                </TouchableOpacity>

                <View style={styles.modalImgWrap}>
                  <Text style={styles.modalImage}>{selectedItem.image}</Text>
                </View>
                
                <Text style={[styles.modalNum, { color: colors.textMuted }]}>{selectedItem.num}</Text>
                <Text style={[styles.modalName, { color: '#FFF' }]}>{selectedItem.name}</Text>
                <Text style={[styles.modalRarity, { color: (RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common)[0] }]}>
                  {selectedItem.rarity} {selectedItem.type.replace('s', '')}
                </Text>

                <View style={[styles.storyBox, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                  <Text style={[styles.storyText, { color: colors.textLight }]}>{selectedItem.story}</Text>
                </View>

                {!selectedItem.unlocked && (
                  <View style={[styles.reqBox, { borderColor: 'rgba(255,255,255,0.2)' }]}>
                    <Text style={{ fontSize: 24, marginBottom: 8 }}>🔒</Text>
                    <Text style={[styles.reqText, { color: '#FFF' }]}>{selectedItem.req}</Text>
                  </View>
                )}

                <View style={styles.actionRow}>
                  <TouchableOpacity style={[styles.actionBtn, { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1 }]}>
                    <Text style={{ fontSize: 20 }}>👁️</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionBtn, { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1 }]}>
                    <Text style={{ fontSize: 20 }}>❤️</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.equipBtn, { backgroundColor: selectedItem.unlocked ? BRAND.primary : 'rgba(255,255,255,0.05)', opacity: selectedItem.unlocked ? 1 : 0.5 }]}
                    disabled={!selectedItem.unlocked}
                    onPress={() => handleEquip(selectedItem)}
                  >
                    <Text style={[styles.equipBtnText, { color: selectedItem.unlocked ? '#000' : colors.textLight }]}>
                      {selectedItem.unlocked ? 'Equip' : 'Locked'}
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
  particle: { position: 'absolute', width: 4, height: 4, borderRadius: 2, backgroundColor: '#FFF' },
  
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  headerTitle: { fontSize: 28, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold', color: '#FFF' },
  statsRow: { flexDirection: 'row', gap: 12, marginTop: 4 },
  statText: { fontSize: 12, fontWeight: '700', color: '#FFF' },
  
  progressContainer: { alignItems: 'flex-end', justifyContent: 'center' },
  progressText: { fontSize: 16, fontWeight: '900', color: '#FFF', marginBottom: 4, fontFamily: 'SpaceGrotesk_700Bold' },
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

  tabsContainer: { marginBottom: 15, maxHeight: 50 },
  tab: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 10 },
  tabText: { fontSize: 15, fontFamily: 'SpaceGrotesk_700Bold' },
  tabIndicator: { position: 'absolute', bottom: -5, left: '50%', transform: [{ translateX: -10 }], width: 20, height: 4, borderRadius: 2 },

  controlsRow: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', height: 48, borderRadius: 16, paddingHorizontal: 15, borderWidth: 1, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, fontWeight: '600' },
  filterBtn: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', marginLeft: 10 },

  autoOutfitContainer: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 20, padding: 16, borderRadius: 20, borderWidth: 1 },
  autoOutfitTitle: { fontSize: 16, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 4 },
  autoOutfitDesc: { fontSize: 12, fontWeight: '500', lineHeight: 16 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
  cardContainer: { width: (width - 50) / 2, marginBottom: 20, alignItems: 'center' },
  cardBorder: { width: '100%', aspectRatio: 1, borderRadius: 24, borderWidth: 2, padding: 2, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  cardInner: { flex: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  cardNum: { position: 'absolute', top: 10, left: 10, fontSize: 11, fontWeight: 'bold' },
  cardImage: { fontSize: 60 },
  equippedBadge: { position: 'absolute', top: -5, right: -5, width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', zIndex: 5, borderWidth: 2, borderColor: '#0A0A0C' },
  lockedOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center', padding: 10 },
  cardReqText: { fontSize: 11, fontWeight: 'bold', textAlign: 'center' },
  cardName: { fontSize: 15, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  cardRarity: { fontSize: 12, fontWeight: '700', textAlign: 'center', marginTop: 2, letterSpacing: 0.5 },

  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.8)' },
  modalContent: { width: '100%', height: height * 0.85, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 2 },
  modalInner: { flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', padding: 25 },
  closeBtn: { position: 'absolute', top: 20, right: 25, zIndex: 10 },
  modalImgWrap: { shadowColor: '#FFF', shadowOpacity: 0.2, shadowRadius: 30, shadowOffset: { width: 0, height: 0 }, elevation: 10 },
  modalImage: { fontSize: 120, marginVertical: 30 },
  modalNum: { fontSize: 14, fontWeight: '800', marginBottom: 5 },
  modalName: { fontSize: 36, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 5 },
  modalRarity: { fontSize: 16, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 25, letterSpacing: 1 },
  storyBox: { width: '100%', padding: 20, borderRadius: 24, marginBottom: 20 },
  storyText: { fontSize: 15, lineHeight: 24, textAlign: 'center' },
  reqBox: { width: '100%', padding: 20, borderRadius: 20, borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', marginBottom: 20 },
  reqText: { fontSize: 16, fontWeight: '800', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  
  actionRow: { flexDirection: 'row', width: '100%', marginTop: 'auto', marginBottom: 20 },
  actionBtn: { width: 60, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  equipBtn: { flex: 1, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  equipBtnText: { fontSize: 20, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold' },
});

export default CollectionScreen;
