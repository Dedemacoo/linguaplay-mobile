import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Switch, Modal, TextInput, Dimensions, Platform } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');

// MOCK DATA
const TABS = [
  { id: 'outfits', label: '👕 Outfits' },
  { id: 'themes', label: '🎨 Themes' },
  { id: 'badges', label: '🏆 Badges' },
  { id: 'cosmetics', label: '✨ Cosmetics' },
  { id: 'collectibles', label: '🎁 Collectibles' }
];

const RARITY_COLORS = {
  Common: ['#3A3A3C', '#1C1C1E'],
  Rare: ['#0A84FF', '#004080'],
  Epic: ['#BF5AF2', '#5E1B8F'],
  Legendary: ['#FFD60A', '#B27900'],
  Mythic: ['#FF453A', '#8B0000']
};

const MOCK_ITEMS = [
  { id: '1', type: 'outfits', name: 'Classic', rarity: 'Common', unlocked: true, image: '🐬', story: 'The default Lingo appearance.', req: '' },
  { id: '2', type: 'outfits', name: 'Cyber', rarity: 'Epic', unlocked: true, image: '🤖', story: 'Straight from the future.', req: '' },
  { id: '3', type: 'outfits', name: 'Astronaut', rarity: 'Legendary', unlocked: false, image: '👩‍🚀', story: 'Ready to explore the galaxy.', req: 'Complete Galaxy World' },
  { id: '4', type: 'outfits', name: 'Dragon', rarity: 'Mythic', unlocked: false, image: '🐉', story: 'The ultimate form.', req: 'Complete Dragon World' },
  { id: '5', type: 'outfits', name: 'Pirate', rarity: 'Rare', unlocked: true, image: '🏴‍☠️', story: 'Yarrr!', req: '' },
  { id: '6', type: 'themes', name: 'Dark Theme', rarity: 'Common', unlocked: true, image: '🌙', story: 'Easy on the eyes.', req: '' },
  { id: '7', type: 'themes', name: 'Ocean', rarity: 'Rare', unlocked: false, image: '🌊', story: 'Deep blue vibes.', req: 'Unlock Ocean World' },
  { id: '8', type: 'badges', name: '30 Day Streak', rarity: 'Epic', unlocked: true, image: '🔥', story: 'Played for 30 consecutive days.', req: '' },
  { id: '9', type: 'cosmetics', name: 'Golden Frame', rarity: 'Legendary', unlocked: false, image: '🖼️', story: 'A frame made of pure gold.', req: 'Reach Level 50' },
  { id: '10', type: 'collectibles', name: 'Ancient Coin', rarity: 'Mythic', unlocked: false, image: '🪙', story: 'A coin from a forgotten era.', req: 'Find in mystery box' },
];

const CollectionScreen = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  
  const [activeTab, setActiveTab] = useState('outfits');
  const [autoOutfit, setAutoOutfit] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // Animations
  const ringAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(ringAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.05, duration: 2000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true })
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -10, duration: 1500, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1500, useNativeDriver: true })
      ])
    ).start();
  }, []);

  const handleEquip = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSelectedItem(null);
  };

  const filteredItems = MOCK_ITEMS.filter(item => 
    item.type === activeTab && 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.bg, paddingTop: insets.top }]}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>🐬 Collection</Text>
        <View style={styles.progressContainer}>
          <Text style={[styles.progressText, { color: colors.textLight }]}>35% Complete</Text>
          <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
            <Animated.View style={[
              styles.progressFill, 
              { backgroundColor: colors.primary, width: ringAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '35%'] }) }
            ]} />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* TOP PREVIEW */}
        <Animated.View style={[styles.previewArea, { transform: [{ scale: pulseAnim }] }]}>
          <LinearGradient colors={['#1c1c1e', '#000000']} style={styles.previewGradient}>
            <Animated.Text style={[styles.previewImage, { transform: [{ translateY: floatAnim }] }]}>
              🤖
            </Animated.Text>
            <View style={styles.previewParticles} />
            <Text style={[styles.previewName, { color: '#FFF' }]}>Cyber Lingo</Text>
            <Text style={[styles.previewRarity, { color: '#BF5AF2' }]}>Epic Outfit</Text>
          </LinearGradient>
        </Animated.View>

        {/* TABS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  { backgroundColor: isActive ? colors.surface : 'transparent' }
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setActiveTab(tab.id);
                }}
              >
                <Text style={[
                  styles.tabText,
                  { color: isActive ? colors.primary : colors.textLight, fontWeight: isActive ? 'bold' : 'normal' }
                ]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* SEARCH & AUTO OUTFIT */}
        <View style={styles.controlsRow}>
          <View style={[styles.searchBar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={{ color: colors.textLight, marginRight: 8 }}>🔍</Text>
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search..."
              placeholderTextColor={colors.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          {activeTab === 'outfits' && (
            <View style={[styles.autoOutfitContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[styles.autoOutfitText, { color: colors.textLight }]}>Auto</Text>
              <Switch
                value={autoOutfit}
                onValueChange={setAutoOutfit}
                trackColor={{ true: colors.primary }}
                style={{ transform: [{ scale: 0.8 }] }}
              />
            </View>
          )}
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          {filteredItems.map(item => {
            const glowColors = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
            
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.cardContainer, { opacity: item.unlocked ? 1 : 0.6 }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setSelectedItem(item);
                }}
                activeOpacity={0.8}
              >
                <LinearGradient colors={glowColors} style={styles.cardGradient}>
                  <View style={[styles.cardInner, { backgroundColor: colors.surface }]}>
                    <Text style={styles.cardImage}>{item.image}</Text>
                    {!item.unlocked && (
                      <View style={[styles.lockedOverlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                        <Text style={{ fontSize: 24 }}>🔒</Text>
                      </View>
                    )}
                  </View>
                </LinearGradient>
                <Text style={[styles.cardName, { color: colors.text }]} numberOfLines={1}>{item.name}</Text>
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
              <View style={[styles.modalInner, { backgroundColor: colors.bg }]}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedItem(null)}>
                  <Text style={{ color: colors.textLight, fontSize: 32, fontWeight: 'bold' }}>×</Text>
                </TouchableOpacity>

                <Animated.Text style={[styles.modalImage, { transform: [{ translateY: floatAnim }] }]}>
                  {selectedItem.image}
                </Animated.Text>
                
                <Text style={[styles.modalName, { color: colors.text }]}>{selectedItem.name}</Text>
                <Text style={[styles.modalRarity, { color: (RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common)[0] }]}>
                  {selectedItem.rarity} {selectedItem.type.replace('s', '')}
                </Text>

                <View style={[styles.storyBox, { backgroundColor: colors.surface }]}>
                  <Text style={[styles.storyText, { color: colors.textLight }]}>{selectedItem.story}</Text>
                </View>

                {!selectedItem.unlocked && (
                  <View style={[styles.reqBox, { borderColor: colors.border }]}>
                    <Text style={{ fontSize: 20, marginBottom: 5 }}>🔒</Text>
                    <Text style={[styles.reqText, { color: colors.text }]}>{selectedItem.req}</Text>
                  </View>
                )}

                <View style={styles.actionRow}>
                  <TouchableOpacity 
                    style={[styles.actionBtn, { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1 }]}
                  >
                    <Text style={{ fontSize: 20 }}>❤️</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.equipBtn, { backgroundColor: selectedItem.unlocked ? colors.primary : colors.surface, opacity: selectedItem.unlocked ? 1 : 0.5 }]}
                    disabled={!selectedItem.unlocked}
                    onPress={handleEquip}
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
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  progressContainer: { alignItems: 'flex-end' },
  progressText: { fontSize: 12, fontWeight: '600', marginBottom: 4 },
  progressTrack: { width: 100, height: 6, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 3 },
  
  scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
  
  previewArea: {
    height: 220,
    borderRadius: 24,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  previewGradient: {
    flex: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  previewImage: { fontSize: 80, textShadowColor: 'rgba(255,255,255,0.2)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 20 },
  previewParticles: { position: 'absolute', width: '100%', height: '100%', opacity: 0.1 },
  previewName: { fontSize: 20, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginTop: 10 },
  previewRarity: { fontSize: 14, fontWeight: '600', marginTop: 4, letterSpacing: 1 },

  tabsContainer: { marginBottom: 20, maxHeight: 40 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginRight: 10, justifyContent: 'center' },
  tabText: { fontSize: 14, fontFamily: 'SpaceGrotesk_700Bold' },

  controlsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between' },
  searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', height: 44, borderRadius: 14, paddingHorizontal: 12, borderWidth: 1, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 15, fontWeight: '500' },
  autoOutfitContainer: { flexDirection: 'row', alignItems: 'center', height: 44, borderRadius: 14, paddingHorizontal: 12, borderWidth: 1 },
  autoOutfitText: { fontSize: 12, fontWeight: 'bold', marginRight: 5 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cardContainer: { width: (width - 55) / 2, marginBottom: 20, alignItems: 'center' },
  cardGradient: { width: '100%', aspectRatio: 1, borderRadius: 24, padding: 2, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  cardInner: { flex: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  cardImage: { fontSize: 50 },
  lockedOverlay: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  cardName: { fontSize: 14, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  cardRarity: { fontSize: 12, fontWeight: '600', textAlign: 'center', marginTop: 2 },

  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.6)' },
  modalContent: { width: '100%', height: height * 0.85, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 3 },
  modalInner: { flex: 1, borderTopLeftRadius: 28, borderTopRightRadius: 28, alignItems: 'center', padding: 25 },
  closeBtn: { position: 'absolute', top: 15, right: 25, zIndex: 10 },
  modalImage: { fontSize: 100, marginVertical: 30, textShadowColor: 'rgba(255,255,255,0.3)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 30 },
  modalName: { fontSize: 32, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 5 },
  modalRarity: { fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 25, letterSpacing: 1 },
  storyBox: { width: '100%', padding: 20, borderRadius: 20, marginBottom: 20 },
  storyText: { fontSize: 15, lineHeight: 24, textAlign: 'center' },
  reqBox: { width: '100%', padding: 15, borderRadius: 16, borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', marginBottom: 20 },
  reqText: { fontSize: 14, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  
  actionRow: { flexDirection: 'row', width: '100%', marginTop: 'auto', marginBottom: 20 },
  actionBtn: { width: 60, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  equipBtn: { flex: 1, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  equipBtnText: { fontSize: 18, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
});

export default CollectionScreen;
