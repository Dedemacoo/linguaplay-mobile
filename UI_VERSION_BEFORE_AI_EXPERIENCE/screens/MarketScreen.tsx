import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Modal, Dimensions, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors, BRAND } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');

const TABS = [
  { id: 'featured', label: 'Featured', icon: '⭐' },
  { id: 'diamonds', label: 'Diamonds', icon: '💎' },
  { id: 'outfits', label: 'Outfits', icon: '👕' },
  { id: 'themes', label: 'Themes', icon: '🎨' },
  { id: 'cosmetics', label: 'Cosmetics', icon: '✨' },
  { id: 'bundles', label: 'Bundles', icon: '🎁' },
  { id: 'premium', label: 'Premium', icon: '👑' },
  { id: 'limited', label: 'Limited', icon: '🔥' },
  { id: 'league', label: 'Rewards', icon: '🏆' },
];

const RARITY_COLORS = {
  Common: ['#28a745', '#1e7e34'],
  Rare: ['#0A84FF', '#004080'],
  Epic: ['#BF5AF2', '#5E1B8F'],
  Legendary: ['#FFD60A', '#B27900'],
  Mythic: ['#FF453A', '#8B0000']
};

const DIAMOND_PACKS = [
  { id: 'd1', amount: 100, price: '₺19.99', bonus: 0 },
  { id: 'd2', amount: 250, price: '₺49.99', bonus: 25 },
  { id: 'd3', amount: 500, price: '₺89.99', bonus: 75, popular: true },
  { id: 'd4', amount: 1200, price: '₺199.99', bonus: 200 },
  { id: 'd5', amount: 2500, price: '₺399.99', bonus: 500, bestValue: true },
  { id: 'd6', amount: 5000, price: '₺749.99', bonus: 1200 },
  { id: 'd7', amount: 10000, price: '₺1299.99', bonus: 3000 },
];

const MOCK_OUTFITS = [
  { id: 'o1', name: 'Cyber Lingo', rarity: 'Epic', price: 1200, image: '🤖', type: 'Outfit' },
  { id: 'o2', name: 'Dragon Master', rarity: 'Mythic', price: 2500, image: '🐉', type: 'Outfit' },
  { id: 'o3', name: 'Pirate King', rarity: 'Rare', price: 500, image: '🏴‍☠️', type: 'Outfit' },
  { id: 'o4', name: 'Astronaut', rarity: 'Legendary', price: 1800, image: '👩‍🚀', type: 'Outfit' },
];

const BUNDLES = [
  { id: 'b1', name: 'Starter Pack', oldPrice: '₺99.99', newPrice: '₺49.99', discount: '-50%', time: '12h 45m', image: '📦' },
  { id: 'b2', name: 'Legend Pack', oldPrice: '₺499.99', newPrice: '₺299.99', discount: '-40%', time: '2d 14h', image: '👑' },
];

const LIMITED_OFFERS = [
  { id: 'l1', name: 'Neon Wings', qty: '42/500 Left', price: 800, image: '🪽', glow: '#0A84FF' },
  { id: 'l2', name: 'Golden Crown', qty: '12/100 Left', price: 3000, image: '👑', glow: '#FFD60A' },
];

// Carousel Component
const FeaturedCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const banners = [
    { title: 'New Collection', sub: 'Cyberpunk 2026', color: ['#BF5AF2', '#5E1B8F'], icon: '🚀' },
    { title: 'Premium Pass', sub: 'Unlock exclusive rewards', color: ['#FFD60A', '#B27900'], icon: '👑' },
    { title: 'Double XP', sub: 'Weekend Event Active', color: ['#FF453A', '#8B0000'], icon: '⚡' },
  ];

  return (
    <View style={styles.carouselWrap}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        {banners.map((b, i) => (
          <View key={i} style={styles.bannerItem}>
            <LinearGradient colors={b.color as any} style={styles.bannerGradient} start={{x:0, y:0}} end={{x:1, y:1}}>
              <Text style={styles.bannerIcon}>{b.icon}</Text>
              <View>
                <Text style={styles.bannerTitle}>{b.title}</Text>
                <Text style={styles.bannerSub}>{b.sub}</Text>
              </View>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {banners.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />
        })}
      </View>
    </View>
  );
};

const MarketScreen = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  
  const [activeTab, setActiveTab] = useState('featured');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [purchaseModalVisible, setPurchaseModalVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Confetti Animation Setup
  const confettiAnim = useRef(new Animated.Value(0)).current;

  const handleOpenPurchase = (item: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedItem(item);
    setPurchaseModalVisible(true);
  };

  const handleBuy = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setPurchaseModalVisible(false);
    setShowConfetti(true);
    
    Animated.sequence([
      Animated.timing(confettiAnim, { toValue: 1, duration: 2000, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.timing(confettiAnim, { toValue: 0, duration: 500, useNativeDriver: true })
    ]).start(() => setShowConfetti(false));
  };

  const renderSection = () => {
    switch(activeTab) {
      case 'diamonds': return renderDiamonds();
      case 'outfits': return renderOutfits();
      case 'premium': return renderPremium();
      case 'bundles': return renderBundles();
      case 'limited': return renderLimited();
      case 'featured':
      default:
        return (
          <>
            <FeaturedCarousel />
            {renderDailyShop()}
            <Text style={styles.sectionHeading}>Limited Offers</Text>
            {renderLimited()}
            <Text style={styles.sectionHeading}>Bundles</Text>
            {renderBundles()}
          </>
        );
    }
  };

  const renderDiamonds = () => (
    <View style={styles.grid}>
      {DIAMOND_PACKS.map(pack => (
        <TouchableOpacity key={pack.id} style={styles.diamondCard} onPress={() => handleOpenPurchase({...pack, name: `${pack.amount} Diamonds`, type: 'Currency', image: '💎', rarity: 'Legendary'})}>
          {pack.popular && <View style={[styles.badge, { backgroundColor: BRAND.primary }]}><Text style={styles.badgeText}>POPULAR</Text></View>}
          {pack.bestValue && <View style={[styles.badge, { backgroundColor: '#FFD60A' }]}><Text style={[styles.badgeText, { color: '#000' }]}>BEST VALUE</Text></View>}
          <Text style={styles.diamondIcon}>💎</Text>
          <Text style={styles.diamondAmount}>{pack.amount}</Text>
          {pack.bonus > 0 && <Text style={styles.diamondBonus}>+{pack.bonus} Bonus</Text>}
          <View style={styles.diamondPriceBtn}>
            <Text style={styles.diamondPriceText}>{pack.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderOutfits = () => (
    <View style={styles.grid}>
      {MOCK_OUTFITS.map(item => {
        const glow = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
        return (
          <TouchableOpacity key={item.id} style={[styles.outfitCard, { borderColor: glow[0] }]} onPress={() => handleOpenPurchase(item)}>
            <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.6)']} style={styles.outfitInner}>
              <Text style={styles.outfitImage}>{item.image}</Text>
              <Text style={styles.outfitName}>{item.name}</Text>
              <Text style={[styles.outfitRarity, { color: glow[0] }]}>{item.rarity}</Text>
              <View style={styles.priceRow}>
                <Text style={{ fontSize: 12 }}>💎</Text>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderPremium = () => (
    <View style={styles.premiumContainer}>
      <LinearGradient colors={['#B27900', '#FFD60A']} style={styles.premiumCard} start={{x:0, y:0}} end={{x:1, y:1}}>
        <Text style={styles.premiumIcon}>👑</Text>
        <Text style={styles.premiumTitle}>Lingo Premium</Text>
        <Text style={styles.premiumSub}>Unlock the ultimate experience</Text>
        
        <View style={styles.benefitsList}>
          <Text style={styles.benefitText}>✨ Double XP on all lessons</Text>
          <Text style={styles.benefitText}>❤️ Unlimited Hearts</Text>
          <Text style={styles.benefitText}>👕 Exclusive Outfits & Themes</Text>
          <Text style={styles.benefitText}>💎 500 Diamonds Monthly</Text>
          <Text style={styles.benefitText}>🏆 Premium League Rewards</Text>
        </View>

        <TouchableOpacity style={styles.premiumBtn} onPress={() => handleOpenPurchase({name: 'Premium Pass', price: '₺199.99/mo', type: 'Subscription', image: '👑', rarity: 'Mythic'})}>
          <Text style={styles.premiumBtnText}>Get Premium - ₺199.99/mo</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );

  const renderBundles = () => (
    <View style={styles.bundleList}>
      {BUNDLES.map(b => (
        <TouchableOpacity key={b.id} style={styles.bundleCard} onPress={() => handleOpenPurchase({...b, type: 'Bundle', rarity: 'Epic'})}>
          <View style={styles.discountBadge}><Text style={styles.discountText}>{b.discount}</Text></View>
          <Text style={styles.bundleIcon}>{b.image}</Text>
          <View style={styles.bundleInfo}>
            <Text style={styles.bundleName}>{b.name}</Text>
            <Text style={styles.bundleTime}>⏳ Ends in {b.time}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Text style={styles.oldPrice}>{b.oldPrice}</Text>
              <Text style={styles.newPrice}>{b.newPrice}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderLimited = () => (
    <View style={styles.grid}>
      {LIMITED_OFFERS.map(item => (
        <TouchableOpacity key={item.id} style={[styles.limitedCard, { shadowColor: item.glow }]} onPress={() => handleOpenPurchase({...item, type: 'Limited', rarity: 'Mythic'})}>
          <Text style={styles.limitedIcon}>{item.image}</Text>
          <Text style={styles.limitedName}>{item.name}</Text>
          <View style={styles.qtyBadge}><Text style={styles.qtyText}>{item.qty}</Text></View>
          <View style={[styles.priceRow, { marginTop: 10 }]}>
            <Text style={{ fontSize: 14 }}>💎</Text>
            <Text style={[styles.priceText, { fontSize: 16 }]}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderDailyShop = () => (
    <View style={styles.dailyShop}>
      <Text style={styles.sectionHeading}>Daily Shop</Text>
      <View style={{ flexDirection: 'row', gap: 15, paddingHorizontal: 20 }}>
        
        {/* FREE REWARD */}
        <TouchableOpacity style={styles.freeRewardCard} onPress={() => handleBuy()}>
          <LinearGradient colors={['#28a745', '#1e7e34']} style={styles.freeInner}>
            <Text style={{ fontSize: 32 }}>🎁</Text>
            <Text style={styles.freeTitle}>Free Reward</Text>
            <Text style={styles.freeSub}>Claim Now</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* MYSTERY BOX */}
        <TouchableOpacity style={styles.mysteryCard} onPress={() => handleOpenPurchase({name: 'Epic Chest', price: 300, type: 'Mystery Box', image: '📦', rarity: 'Epic'})}>
          <LinearGradient colors={['#BF5AF2', '#5E1B8F']} style={styles.freeInner}>
            <Text style={{ fontSize: 32 }}>📦</Text>
            <Text style={styles.freeTitle}>Epic Chest</Text>
            <View style={styles.priceRow}>
              <Text style={{ fontSize: 12 }}>💎</Text>
              <Text style={styles.priceText}>300</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <LinearGradient colors={['#0F172A', '#020617']} style={StyleSheet.absoluteFillObject} />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
            <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold' }}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>🛍️ Lingo Market</Text>
        </View>
      </View>

      <View style={styles.statusRow}>
        <View style={styles.statusItem}>
          <Text style={{ fontSize: 18 }}>💎</Text>
          <Text style={styles.statusText}>28,445</Text>
        </View>
        <View style={[styles.statusItem, { backgroundColor: 'rgba(255,214,10,0.1)', borderColor: '#FFD60A' }]}>
          <Text style={{ fontSize: 16 }}>⭐</Text>
          <Text style={[styles.statusText, { color: '#FFD60A' }]}>Premium</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={{ fontSize: 14 }}>⏳</Text>
          <Text style={styles.statusText}>12h 45m</Text>
        </View>
      </View>

      {/* TABS */}
      <View style={{ marginVertical: 15 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[styles.tab, isActive && { backgroundColor: 'rgba(255,255,255,0.1)' }]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setActiveTab(tab.id);
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 6 }}>{tab.icon}</Text>
                <Text style={[styles.tabText, { color: isActive ? '#FFF' : colors.textLight, fontWeight: isActive ? '800' : '600' }]}>{tab.label}</Text>
                {isActive && <View style={[styles.tabIndicator, { backgroundColor: BRAND.primary }]} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {renderSection()}
      </ScrollView>

      {/* PURCHASE MODAL */}
      <Modal visible={purchaseModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <LinearGradient colors={selectedItem?.rarity ? (RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common) : ['#1c1c1e', '#0A0A0C']} style={styles.modalContent}>
            <View style={styles.modalInner}>
              <TouchableOpacity style={styles.closeBtn} onPress={() => setPurchaseModalVisible(false)}>
                <Text style={{ fontSize: 32, color: colors.textLight, fontWeight: 'bold' }}>✕</Text>
              </TouchableOpacity>
              
              <View style={styles.modalImgWrap}>
                <Text style={styles.modalImage}>{selectedItem?.image}</Text>
              </View>

              <Text style={styles.modalName}>{selectedItem?.name}</Text>
              <Text style={[styles.modalType, { color: selectedItem?.rarity ? RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS][0] : '#FFF' }]}>
                {selectedItem?.rarity ? `${selectedItem.rarity} ` : ''}{selectedItem?.type}
              </Text>

              <View style={styles.priceTag}>
                <Text style={{ fontSize: 24, marginRight: 5 }}>{typeof selectedItem?.price === 'number' ? '💎' : ''}</Text>
                <Text style={styles.priceTagText}>{selectedItem?.newPrice || selectedItem?.price}</Text>
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.giftBtn}>
                  <Text style={{ fontSize: 24 }}>🎁</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyBtn} onPress={handleBuy}>
                  <Text style={styles.buyBtnText}>Purchase</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </Modal>

      {/* CONFETTI OVERLAY */}
      {showConfetti && (
        <Animated.View style={[styles.confettiOverlay, { opacity: confettiAnim }]} pointerEvents="none">
          <Text style={{ fontSize: 100 }}>🎉</Text>
          <Text style={{ fontSize: 40, color: '#FFF', fontWeight: 'bold', marginTop: 20 }}>PURCHASE SUCCESS!</Text>
        </Animated.View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15 },
  headerTitle: { fontSize: 28, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold', color: '#FFF' },
  
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, gap: 10 },
  statusItem: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.05)', paddingVertical: 8, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', gap: 6 },
  statusText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },

  tabsContainer: { marginBottom: 10 },
  tab: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 20, marginRight: 10 },
  tabText: { fontSize: 15, fontFamily: 'SpaceGrotesk_700Bold' },
  tabIndicator: { position: 'absolute', bottom: 0, left: '50%', transform: [{ translateX: -10 }], width: 20, height: 4, borderRadius: 2 },

  sectionHeading: { fontSize: 20, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', marginLeft: 20, marginTop: 25, marginBottom: 15, letterSpacing: 1 },
  
  carouselWrap: { height: 160, marginVertical: 10 },
  bannerItem: { width: width, paddingHorizontal: 20 },
  bannerGradient: { flex: 1, borderRadius: 24, padding: 20, justifyContent: 'center' },
  bannerIcon: { fontSize: 40, position: 'absolute', right: 20, opacity: 0.8 },
  bannerTitle: { fontSize: 24, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  bannerSub: { fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: '600', marginTop: 4 },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 10, alignSelf: 'center', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFF' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, gap: 10, justifyContent: 'center' },
  
  diamondCard: { width: (width - 40) / 2 - 5, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', marginBottom: 10 },
  badge: { position: 'absolute', top: -10, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, zIndex: 5 },
  badgeText: { fontSize: 10, fontWeight: '900', color: '#FFF' },
  diamondIcon: { fontSize: 40, marginBottom: 10 },
  diamondAmount: { fontSize: 24, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  diamondBonus: { fontSize: 12, fontWeight: 'bold', color: '#28a745', marginTop: 4 },
  diamondPriceBtn: { backgroundColor: BRAND.primary, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12, marginTop: 15, width: '100%', alignItems: 'center' },
  diamondPriceText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },

  outfitCard: { width: (width - 40) / 2 - 5, aspectRatio: 0.8, borderRadius: 24, borderWidth: 2, padding: 2, marginBottom: 10 },
  outfitInner: { flex: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  outfitImage: { fontSize: 60, marginBottom: 10 },
  outfitName: { fontSize: 15, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  outfitRarity: { fontSize: 12, fontWeight: 'bold', marginTop: 2 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginTop: 10 },
  priceText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },

  premiumContainer: { paddingHorizontal: 20 },
  premiumCard: { padding: 25, borderRadius: 30, alignItems: 'center' },
  premiumIcon: { fontSize: 60, marginBottom: 10 },
  premiumTitle: { fontSize: 28, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  premiumSub: { fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 'bold', marginBottom: 20 },
  benefitsList: { width: '100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: 20, borderRadius: 20, gap: 12 },
  benefitText: { fontSize: 15, color: '#FFF', fontWeight: '600' },
  premiumBtn: { backgroundColor: '#000', width: '100%', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 20 },
  premiumBtnText: { color: '#FFD60A', fontSize: 18, fontWeight: '900', fontFamily: 'SpaceGrotesk_700Bold' },

  bundleList: { paddingHorizontal: 20, gap: 15 },
  bundleCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: 15, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  discountBadge: { position: 'absolute', top: -10, left: 15, backgroundColor: '#FF453A', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, zIndex: 5 },
  discountText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  bundleIcon: { fontSize: 50, marginRight: 15 },
  bundleInfo: { flex: 1 },
  bundleName: { fontSize: 18, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  bundleTime: { fontSize: 12, color: '#FFD60A', fontWeight: 'bold', marginTop: 4 },
  oldPrice: { fontSize: 14, color: 'gray', textDecorationLine: 'line-through', marginRight: 10 },
  newPrice: { fontSize: 16, fontWeight: '900', color: '#28a745' },

  limitedCard: { width: (width - 40) / 2 - 5, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', shadowOpacity: 0.8, shadowRadius: 15, shadowOffset: {width:0, height:0}, elevation: 10, marginBottom: 10 },
  limitedIcon: { fontSize: 50, marginBottom: 10 },
  limitedName: { fontSize: 15, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  qtyBadge: { backgroundColor: 'rgba(255,69,58,0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginTop: 8 },
  qtyText: { color: '#FF453A', fontSize: 10, fontWeight: 'bold' },

  dailyShop: { marginTop: 10 },
  freeRewardCard: { flex: 1, height: 140, borderRadius: 24, padding: 2 },
  freeInner: { flex: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center', padding: 10 },
  freeTitle: { fontSize: 16, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', marginTop: 8 },
  freeSub: { fontSize: 12, fontWeight: 'bold', color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  mysteryCard: { flex: 1, height: 140, borderRadius: 24, padding: 2 },

  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.8)' },
  modalContent: { width: '100%', height: height * 0.7, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 2 },
  modalInner: { flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#0A0A0C', alignItems: 'center', padding: 30 },
  closeBtn: { position: 'absolute', top: 20, right: 25, zIndex: 10 },
  modalImgWrap: { shadowColor: '#FFF', shadowOpacity: 0.1, shadowRadius: 30, elevation: 10, marginBottom: 20 },
  modalImage: { fontSize: 100 },
  modalName: { fontSize: 32, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  modalType: { fontSize: 16, fontWeight: 'bold', letterSpacing: 1, marginTop: 5, marginBottom: 20 },
  priceTag: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 16, marginBottom: 40 },
  priceTagText: { fontSize: 24, fontWeight: '900', color: '#FFF' },
  actionRow: { flexDirection: 'row', width: '100%', gap: 15 },
  giftBtn: { width: 60, height: 60, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  buyBtn: { flex: 1, height: 60, borderRadius: 20, backgroundColor: BRAND.primary, alignItems: 'center', justifyContent: 'center' },
  buyBtnText: { fontSize: 20, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },

  confettiOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999, alignItems: 'center', justifyContent: 'center' }
});

export default MarketScreen;
