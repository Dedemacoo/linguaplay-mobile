import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Modal, Dimensions, Easing, Alert, Image, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors, BRAND } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { MASCOTS } from '../data/MascotData';
import { Mascot } from '../components/Mascot';
import { useProgressStore } from '../store/useProgressStore';

const { width, height } = Dimensions.get('window');

const TABS = [
  { id: 'featured', label: 'Öne Çıkanlar', icon: '🔥' },
  { id: 'diamonds', label: 'Lingotlar', iconImage: require('../../assets/icons/lingo_coin.png') },
  { id: 'themes', label: 'Temalar', icon: '🎨' },
  { id: 'premium', label: 'Premium', icon: '👑' },
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

const getPriceByRarity = (rarity: string) => {
  switch (rarity) {
    case 'Legendary': return 3500;
    case 'Mythic': return 3000;
    case 'Epic': return 2500;
    case 'Rare': return 1500;
    case 'Common': default: return 500;
  }
};

const OUTFITS = Object.values(MASCOTS).filter(m => m.id !== 'classic').map(m => ({
  id: m.id,
  name: m.name,
  rarity: m.rarity,
  price: getPriceByRarity(m.rarity),
  type: 'Outfit'
}));

const BUNDLES = [
  { id: 'b1', name: 'Starter Pack', oldPrice: '₺99.99', newPrice: '₺49.99', discount: '-50%', time: '12h 45m', image: '📦' },
  { id: 'b2', name: 'Legend Pack', oldPrice: '₺499.99', newPrice: '₺299.99', discount: '-40%', time: '2d 14h', image: '👑' },
];

const APP_THEMES = [
  { id: 'cyberpunk', name: 'Siberpunk Tema', price: 2500, type: 'AppTheme', rarity: 'Legendary', image: '🤖' },
  { id: 'ocean', name: 'Karanlık Okyanus', price: 2500, type: 'AppTheme', rarity: 'Rare', image: '🌊' },
  { id: 'crimson', name: 'Kızıl Şafak Tema', price: 2500, type: 'AppTheme', rarity: 'Epic', image: '🔥' },
  { id: 'forest', name: 'Gece Ormanı', price: 2500, type: 'AppTheme', rarity: 'Rare', image: '🌲' },
];

const FEATURED_ITEMS = [
  { id: 'astronaut', name: 'Uzaylı Lingo', oldPrice: 3500, price: 2500, type: 'Outfit', rarity: 'Legendary', image: '👽', discount: '%28 İndirim' },
  { id: 'cyberpunk', name: 'Siberpunk Tema', oldPrice: 3500, price: 2500, type: 'AppTheme', rarity: 'Legendary', image: '🤖', discount: '%28 İndirim' },
  { id: 'd3', name: '500 Lingot Paketi', amount: 500, oldPrice: '₺120', price: '₺89.99', type: 'Currency', rarity: 'Epic', image: 'lingo_coin', discount: '%25 İndirim' },
];

// Carousel Component
const FeaturedCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const currentIndex = useRef(0);

  const banners = [
    { title: 'Astronot Lingo', sub: 'Kısa Süreli İndirim!', color: ['#1E1E2E', '#11111A'], icon: 'mascot', mascotId: 'astronaut', oldPrice: 1500, newPrice: 999 },
    { title: 'Premium Pass', sub: 'Özel ödüllerin kilidini aç', color: ['#FFD60A', '#B27900'], icon: '👑' },
    { title: '2x XP Etkinliği', sub: 'Hafta Sonu Aktif', color: ['#FF453A', '#8B0000'], icon: '⚡' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % banners.length;
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: currentIndex.current * width, animated: true });
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.carouselWrap}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onMomentumScrollEnd={(event) => {
          currentIndex.current = Math.round(event.nativeEvent.contentOffset.x / width);
        }}
        scrollEventThrottle={16}
      >
        {banners.map((b, i) => (
          <View key={i} style={styles.bannerItem}>
            <LinearGradient colors={b.color as any} style={[styles.bannerGradient, b.icon === 'mascot' && { borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }]} start={{x:0, y:0}} end={{x:1, y:1}}>
              {b.icon === 'mascot' ? (
                <View style={{ position: 'absolute', right: 5, bottom: -10 }}>
                  <Mascot mascotId={b.mascotId} size={110} animated={false} />
                </View>
              ) : (
                <Text style={styles.bannerIcon}>{b.icon}</Text>
              )}
              
              <View style={{ maxWidth: '65%' }}>
                <Text style={styles.bannerTitle}>{b.title}</Text>
                <Text style={styles.bannerSub}>{b.sub}</Text>
                
                {b.oldPrice && b.newPrice && (
                   <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 8 }}>
                      <Text style={{ fontSize: 15, color: 'gray', textDecorationLine: 'line-through', fontWeight: 'bold' }}>{b.oldPrice}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF453A', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
                         <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 14, height: 14, marginRight: 4 }} />
                         <Text style={{ fontSize: 16, fontWeight: '900', color: '#FFF' }}>{b.newPrice}</Text>
                      </View>
                   </View>
                )}
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
  const [successMessage, setSuccessMessage] = useState('Yeni Lingotların hesabına eklendi.');
  
  // Confetti Animation Setup
  const confettiAnim = useRef(new Animated.Value(0)).current;

  // Modal Image Pulse Animation
  const modalPulseAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (purchaseModalVisible) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(modalPulseAnim, { toValue: 1.08, duration: 800, useNativeDriver: true }),
          Animated.timing(modalPulseAnim, { toValue: 1, duration: 800, useNativeDriver: true })
        ])
      ).start();
    } else {
      modalPulseAnim.setValue(1);
    }
  }, [purchaseModalVisible]);

  const { progress, buyMascot, buyTheme, addGems, setPremium, claimDailyReward, openMysteryBox } = useProgressStore();

  const handleOpenPurchase = (item: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedItem(item);
    setPurchaseModalVisible(true);
  };

  const showSuccessConfetti = (msg?: string) => {
    if (msg) setSuccessMessage(msg);
    else setSuccessMessage('Yeni Lingotların hesabına eklendi.');
    
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setPurchaseModalVisible(false);
    setShowConfetti(true);
    Animated.sequence([
      Animated.timing(confettiAnim, { toValue: 1, duration: 600, easing: Easing.elastic(1.2), useNativeDriver: true }),
      Animated.delay(2500),
      Animated.timing(confettiAnim, { toValue: 0, duration: 400, easing: Easing.out(Easing.ease), useNativeDriver: true })
    ]).start(() => setShowConfetti(false));
  };

  const showError = (title: string, message: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Alert.alert(title, message);
  };

  const handleBuy = async () => {
    if (selectedItem?.type === 'Outfit') {
      const price = parseInt(selectedItem.price);
      if (progress.gems >= price) {
        const success = buyMascot(selectedItem.id, price);
        if (success) {
          showSuccessConfetti(`${selectedItem.name} koleksiyonuna eklendi!`);
        }
      } else {
        showError('Yetersiz Lingot', 'Bu ürünü satın almak için yeterli Lingotunuz yok.');
      }
    } else if (selectedItem?.type === 'AppTheme') {
      const price = parseInt(selectedItem.price);
      if (progress.gems >= price) {
        const success = buyTheme(selectedItem.id);
        if (success) {
          showSuccessConfetti(`${selectedItem.name} başarıyla açıldı!`);
        } else {
          showError('Hata', 'Bu temaya zaten sahipsiniz.');
        }
      } else {
        showError('Yetersiz Lingot', 'Bu temayı satın almak için yeterli Lingotunuz yok.');
      }
    } else if (selectedItem?.type === 'Currency') {
      addGems(selectedItem.amount);
      showSuccessConfetti(`${selectedItem.amount} Lingot hesabına eklendi!`);
    } else if (selectedItem?.type === 'Subscription') {
      await setPremium(true);
      showSuccessConfetti('Premium üyeliğe hoş geldin!');
    } else if (selectedItem?.type === 'Mystery Box') {
      const mysteryThemes = ['wizard', 'astronaut', 'royal', 'cyber'];
      const result = openMysteryBox(mysteryThemes);
      if (result.success) {
        if (result.type === 'theme') {
          showSuccessConfetti('Sürpriz Kutu Açıldı!');
          setTimeout(() => Alert.alert('🎉 Tebrikler!', `Sürpriz kutudan yeni bir tema kazandın!`), 1000);
        } else {
          setPurchaseModalVisible(false);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          Alert.alert('🎁 Sürpriz Kutu!', `Kutudan tema çıkmadı ama teselli ödülü olarak ${result.refundAmount} Lingot kazandın. Şansını tekrar dene!`);
        }
      } else {
        showError('Yetersiz Lingot', result.error || 'Lingotunuz yetersiz.');
      }
    } else {
      showSuccessConfetti();
    }
  };

  const handleFreeReward = () => {
    const success = claimDailyReward();
    if (success) {
      showSuccessConfetti();
      setTimeout(() => Alert.alert('🎁 Harika!', 'Günlük 50 Lingot ödülünü aldın!'), 1000);
    } else {
      Alert.alert('Zaten Alındı', 'Bugünkü ödülünü zaten aldın. Yarın tekrar gel!');
    }
  };

  const renderSection = () => {
    switch(activeTab) {
      case 'diamonds': return renderDiamonds();
      case 'premium': return renderPremium();
      case 'themes': return renderThemes();
      case 'featured':
      default:
        return (
          <>
            <FeaturedCarousel />
            {renderDailyShop()}
            {renderFeaturedItems()}
          </>
        );
    }
  };

  const renderDiamonds = () => (
    <View style={styles.grid}>
      {DIAMOND_PACKS.map(pack => (
        <TouchableOpacity key={pack.id} style={styles.diamondCardWrap} onPress={() => handleOpenPurchase({...pack, name: `${pack.amount} Lingot`, type: 'Currency', image: 'lingo_coin', rarity: 'Legendary'})}>
          <LinearGradient colors={['rgba(0,198,255,0.15)', 'rgba(0,114,255,0.3)']} style={styles.diamondCard}>
            {pack.popular && <View style={[styles.badge, { backgroundColor: BRAND.primary }]}><Text style={styles.badgeText}>POPULAR</Text></View>}
            {pack.bestValue && <View style={[styles.badge, { backgroundColor: '#FFD60A' }]}><Text style={[styles.badgeText, { color: '#000' }]}>BEST VALUE</Text></View>}
            
            <View style={{ marginBottom: 10, shadowColor: '#00c6ff', shadowOpacity: 0.5, shadowRadius: 15, elevation: 5 }}>
               <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 60, height: 60 }} />
            </View>
            
            <Text style={styles.diamondAmount}>{pack.amount}</Text>
            {pack.bonus > 0 && <Text style={styles.diamondBonus}>+{pack.bonus} Bonus</Text>}
            <View style={styles.diamondPriceBtn}>
              <Text style={styles.diamondPriceText}>{pack.price}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderOutfits = () => (
    <View style={styles.grid}>
      {OUTFITS.map(item => {
        const glow = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
        const isOwned = progress.unlockedMascots.includes(item.id);

        return (
          <TouchableOpacity 
            key={item.id} 
            style={[styles.outfitCardWrap, isOwned && { opacity: 0.7 }]} 
            onPress={() => !isOwned && handleOpenPurchase(item)}
            activeOpacity={isOwned ? 1 : 0.7}
          >
            <View style={[styles.outfitCard, { borderColor: isOwned ? '#4CAF50' : glow[0] }]}>
              <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.6)']} style={styles.outfitInner}>
                <Mascot size={95} animated={false} />
              </LinearGradient>
              {isOwned && (
                <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: '#4CAF50', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10 }}>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>✓ ALINDI</Text>
                </View>
              )}
            </View>
            <Text style={styles.outfitName}>{item.name}</Text>
            <Text style={[styles.outfitRarity, { color: isOwned ? '#4CAF50' : glow[0] }]}>{isOwned ? 'Sende Var' : item.rarity}</Text>
            <View style={[styles.priceRow, isOwned && { backgroundColor: '#2E7D32', paddingHorizontal: 10, borderRadius: 10, marginTop: 4 }]}>
              {!isOwned && <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 14, height: 14, marginRight: 4 }} />}
              <Text style={[styles.priceText, isOwned && { color: 'white', fontSize: 14 }]}>{isOwned ? 'Koleksiyonda' : item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderPremium = () => (
    <View style={styles.premiumContainer}>
      <Text style={styles.premiumMainTitle}>Lingo Premium</Text>
      <Text style={styles.premiumMainSub}>Tüm özellikleri aç ve sınırsız öğren!</Text>

      <View style={{ gap: 15 }}>
        {/* Yıllık */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleOpenPurchase({name: 'Yıllık Premium', price: '₺750.00', type: 'Subscription', image: '👑', rarity: 'Mythic'})}>
          <LinearGradient colors={['#FFD60A', '#B27900']} style={[styles.premiumCard, { paddingVertical: 20 }]} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={{ position: 'absolute', right: 0, top: 0, width: 80, height: 80, opacity: 0.6 }}>
              <LottieView source={require('../../assets/mascots/yildizbirsonrakiseviye.json')} autoPlay={false} loop={false} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={[styles.badge, { backgroundColor: '#FF453A', top: -12, left: 20 }]}><Text style={styles.badgeText}>POPÜLER - %48 İNDİRİM</Text></View>
            <Text style={{ fontSize: 32, marginBottom: 5 }}>👑</Text>
            <Text style={[styles.premiumTitle, { color: '#000' }]}>12 Aylık</Text>
            <Text style={[styles.premiumSub, { color: 'rgba(0,0,0,0.7)' }]}>Sadece ₺62.50 / Ay</Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#000' }}>₺750.00</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 3 Aylık */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleOpenPurchase({name: '3 Aylık Premium', price: '₺300.00', type: 'Subscription', image: '👑', rarity: 'Legendary'})}>
          <LinearGradient colors={['#2c2c2e', '#1c1c1e']} style={[styles.premiumCard, { paddingVertical: 20, borderWidth: 1, borderColor: '#FFD60A' }]} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={{ position: 'absolute', right: 0, top: 0, width: 80, height: 80, opacity: 0.5 }}>
              <LottieView source={require('../../assets/mascots/yildizbirsonrakiseviye.json')} autoPlay={false} loop={false} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={[styles.badge, { backgroundColor: BRAND.primary, top: -12, left: 20 }]}><Text style={styles.badgeText}>EKONOMİK</Text></View>
            <Text style={{ fontSize: 28, marginBottom: 5 }}>✨</Text>
            <Text style={styles.premiumTitle}>3 Aylık</Text>
            <Text style={styles.premiumSub}>Sadece ₺100.00 / Ay</Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#FFD60A' }}>₺300.00</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Aylık */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleOpenPurchase({name: 'Aylık Premium', price: '₺120.00', type: 'Subscription', image: '👑', rarity: 'Epic'})}>
          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)']} style={[styles.premiumCard, { paddingVertical: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }]} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={{ position: 'absolute', right: 0, top: 0, width: 80, height: 80, opacity: 0.4 }}>
              <LottieView source={require('../../assets/mascots/yildizbirsonrakiseviye.json')} autoPlay={false} loop={false} style={{ width: '100%', height: '100%' }} />
            </View>
            <Text style={{ fontSize: 24, marginBottom: 5 }}>⭐</Text>
            <Text style={[styles.premiumTitle, { fontSize: 22 }]}>1 Aylık</Text>
            <Text style={styles.premiumSub}>Esnek abonelik</Text>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFF' }}>₺120.00</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={[styles.benefitsList, { marginTop: 20 }]}>
        <Text style={styles.benefitText}>✨ Tüm derslerde 2x XP</Text>
        <Text style={styles.benefitText}>❤️ Sınırsız Can hakkı</Text>
        <Text style={styles.benefitText}>👕 Özel Maskotlar ve Temalar</Text>
        <Text style={styles.benefitText}>💎 Her ay 500 bedava Lingot</Text>
      </View>
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

  const renderThemes = () => (
    <View style={styles.grid}>
      {APP_THEMES.map(item => {
        const glow = RARITY_COLORS[item.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common;
        const isOwned = (progress.unlockedThemes || []).includes(item.id);

        return (
          <TouchableOpacity 
            key={item.id} 
            style={[styles.outfitCardWrap, isOwned && { opacity: 0.7 }]} 
            onPress={() => !isOwned && handleOpenPurchase(item)}
            activeOpacity={isOwned ? 1 : 0.7}
          >
            <View style={[styles.outfitCard, { borderColor: isOwned ? '#4CAF50' : glow[0], justifyContent: 'center', alignItems: 'center' }]}>
              <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.6)']} style={styles.outfitInner}>
                <Text style={{ fontSize: 50 }}>{item.image}</Text>
              </LinearGradient>
              {isOwned && (
                <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: '#4CAF50', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10 }}>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>✓ ALINDI</Text>
                </View>
              )}
            </View>
            <Text style={styles.outfitName}>{item.name}</Text>
            <Text style={[styles.outfitRarity, { color: isOwned ? '#4CAF50' : glow[0] }]}>{isOwned ? 'Sende Var' : item.rarity}</Text>
            <View style={[styles.priceRow, isOwned && { backgroundColor: '#2E7D32', paddingHorizontal: 10, borderRadius: 10, marginTop: 4 }]}>
              {!isOwned && <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 14, height: 14, marginRight: 4 }} />}
              <Text style={[styles.priceText, isOwned && { color: 'white', fontSize: 14 }]}>{isOwned ? 'Koleksiyonda' : item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderFeaturedItems = () => (
    <View style={styles.dailyShop}>
      <Text style={[styles.sectionHeading, { color: '#FFD60A' }]}>🔥 İndirimli & Öne Çıkanlar</Text>
      <View style={styles.grid}>
        {FEATURED_ITEMS.map(item => {
          const isOwned = item.type === 'AppTheme' 
            ? (progress.unlockedThemes || []).includes(item.id) 
            : item.type === 'Outfit'
              ? progress.unlockedMascots.includes(item.id)
              : false;

          return (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.limitedCard, { shadowColor: '#FFD60A', opacity: isOwned ? 0.7 : 1 }]} 
              onPress={() => !isOwned && handleOpenPurchase(item)}
              activeOpacity={isOwned ? 1 : 0.7}
            >
              {item.image === 'lingo_coin' ? (
                <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 50, height: 50, marginBottom: 10 }} />
              ) : (
                <Text style={styles.limitedIcon}>{item.image}</Text>
              )}
              <Text style={styles.limitedName}>{item.name}</Text>
              
              <View style={styles.qtyBadge}>
                <Text style={styles.qtyText}>{isOwned ? 'ALINDI' : item.discount}</Text>
              </View>
              
              <View style={[styles.priceRow, { marginTop: 10, backgroundColor: isOwned ? '#2E7D32' : 'rgba(0,0,0,0.5)' }]}>
                {!isOwned && item.type !== 'Currency' && <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 16, height: 16, marginRight: 4 }} />}
                <Text style={[styles.priceText, { fontSize: 16, color: isOwned ? 'white' : '#FFF' }]}>{isOwned ? 'Sahipsin' : item.price}</Text>
              </View>
              
              {!isOwned && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                  {item.type !== 'Currency' && <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 12, height: 12, marginRight: 4, opacity: 0.5 }} />}
                  <Text style={{ fontSize: 12, color: 'gray', textDecorationLine: 'line-through' }}>{item.oldPrice}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  const renderDailyShop = () => (
    <View style={styles.dailyShop}>
      <Text style={styles.sectionHeading}>Günlük Market</Text>
      <View style={{ flexDirection: 'row', gap: 15, paddingHorizontal: 20 }}>
        
        {/* FREE REWARD */}
        <TouchableOpacity style={styles.freeRewardCard} onPress={handleFreeReward}>
          <LinearGradient colors={['#1A4325', '#0F2916']} style={styles.freeInner}>
            <Text style={{ fontSize: 32 }}>🎁</Text>
            <Text style={styles.freeTitle}>Ücretsiz Ödül</Text>
            <Text style={styles.freeSub}>Hemen Al</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* MYSTERY BOX */}
        <TouchableOpacity style={styles.mysteryCard} onPress={() => handleOpenPurchase({name: 'Sürpriz Kutu', price: 500, type: 'Mystery Box', image: '📦', rarity: 'Epic'})}>
          <LinearGradient colors={['#2B1B54', '#150A2E']} style={styles.freeInner}>
            <Text style={{ fontSize: 32 }}>📦</Text>
            <Text style={styles.freeTitle}>Sürpriz Kutu</Text>
            <View style={styles.priceRow}>
              <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 14, height: 14, marginRight: 4 }} />
              <Text style={styles.priceText}>500</Text>
            </View>
            <Text style={[styles.freeSub, { marginTop: 4, textAlign: 'center', fontSize: 10 }]}>Yeni temayı almak için tıkla</Text>
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
          <Text style={styles.headerTitle}>🛒 Lingo Market</Text>
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
                {tab.icon ? (
                  <Text style={{ fontSize: 18, marginRight: 6 }}>{tab.icon}</Text>
                ) : (
                  <Image source={tab.iconImage} style={{ width: 20, height: 20, marginRight: 6 }} />
                )}
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

      {/* UPGRADED PURCHASE MODAL */}
      <Modal visible={purchaseModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setPurchaseModalVisible(false)}>
          <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center' }]}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={{ width: '82%', alignSelf: 'center', backgroundColor: '#1c1c1e', borderRadius: 32, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', shadowColor: BRAND.primary, shadowOpacity: 0.3, shadowRadius: 50, elevation: 20 }}>
                {selectedItem?.type === 'Subscription' && (
                  <View style={{ position: 'absolute', right: -15, top: -15, width: 120, height: 120, zIndex: 10, opacity: 0.8 }} pointerEvents="none">
                    <LottieView source={require('../../assets/mascots/yildizbirsonrakiseviye.json')} autoPlay loop style={{ width: '100%', height: '100%' }} />
                  </View>
                )}
                <LinearGradient colors={selectedItem?.rarity ? (RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS] || RARITY_COLORS.Common) : ['#2c2c2e', '#1c1c1e']} style={{ padding: 25, alignItems: 'center' }}>
                  <Animated.View style={{ transform: [{ scale: modalPulseAnim }], marginTop: 15, marginBottom: 15, shadowColor: '#FFD60A', shadowOpacity: 0.8, shadowRadius: 30, elevation: 20 }}>
                {selectedItem?.type === 'Outfit' ? (
                  <View style={{ height: 120, justifyContent: 'center', alignItems: 'center' }}>
                    <Mascot size={120} animated={true} />
                  </View>
                ) : selectedItem?.image === 'lingo_coin' ? (
                  <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 110, height: 110 }} />
                ) : (
                  <Text style={{ fontSize: 100 }}>{selectedItem?.image}</Text>
                )}
              </Animated.View>

              <Text style={{ fontSize: 26, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center', textShadowColor: 'rgba(0,0,0,0.5)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>{selectedItem?.name}</Text>
              
              <View style={{ backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, marginTop: 8, marginBottom: 15 }}>
                <Text style={{ color: selectedItem?.rarity ? RARITY_COLORS[selectedItem.rarity as keyof typeof RARITY_COLORS][0] : '#FFF', fontSize: 13, fontWeight: '800', letterSpacing: 1 }}>
                  {selectedItem?.rarity ? `${selectedItem.rarity} ` : ''}{selectedItem?.type}
                </Text>
              </View>

              <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.2)']} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 16, marginBottom: 20, width: '100%', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }}>
                {typeof selectedItem?.price === 'number' && (
                  <Image source={require('../../assets/icons/lingo_coin.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
                )}
                <Text style={{ fontSize: 28, fontWeight: '900', color: '#FFF' }}>{selectedItem?.newPrice || selectedItem?.price}</Text>
              </LinearGradient>

              <View style={{ flexDirection: 'row', width: '100%', gap: 10 }}>
                <TouchableOpacity style={{ width: 55, height: 55, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Text style={{ fontSize: 24 }}>🎁</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 55, borderRadius: 18, overflow: 'hidden', shadowColor: '#FFD60A', shadowOpacity: 0.4, shadowRadius: 15, elevation: 10 }} onPress={handleBuy} activeOpacity={0.8}>
                  <LinearGradient colors={['#FFD60A', '#FF9F0A']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: '#000', fontFamily: 'SpaceGrotesk_700Bold', textTransform: 'uppercase' }}>Satın Al</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              </LinearGradient>
            </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* SUCCESS OVERLAY */}
      {showConfetti && (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center', alignItems: 'center', zIndex: 999 }]} pointerEvents="none">
          <Animated.View style={{ 
            alignItems: 'center', 
            opacity: confettiAnim, 
            marginTop: 250,
            transform: [
              { scale: confettiAnim.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1] }) },
              { translateY: confettiAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }
            ] 
          }}>
            <LinearGradient colors={['rgba(28, 28, 30, 0.95)', 'rgba(10, 10, 12, 0.95)']} style={{
              borderWidth: 1,
              borderColor: 'rgba(255,214,10,0.3)',
              borderRadius: 24,
              paddingVertical: 20,
              paddingHorizontal: 25,
              alignItems: 'center',
              shadowColor: '#FFD60A',
              shadowOpacity: 0.5,
              shadowRadius: 30,
              elevation: 20
            }}>
              <View style={{ marginBottom: 5, width: 140, height: 140, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView
                  source={require('../../assets/mascots/kutuacilinca.json')}
                  autoPlay
                  loop={false}
                  style={{ width: '150%', height: '150%', position: 'absolute', zIndex: 1 }}
                />
                <Image 
                  source={require('../../assets/mascots/pirate/pirate.gif')} 
                  style={{ width: 75, height: 75, resizeMode: 'contain', zIndex: 2 }} 
                />
              </View>
              <Text style={{ 
                fontSize: 24, 
                color: '#FFD60A', 
                fontFamily: 'SpaceGrotesk_700Bold', 
                letterSpacing: 1,
                textAlign: 'center',
                textShadowColor: 'rgba(255, 214, 10, 0.4)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 10,
                marginBottom: 6
              }}>
                Başarılı
              </Text>
              <Text style={{ 
                fontSize: 15, 
                color: 'rgba(255,255,255,0.85)', 
                textAlign: 'center',
                fontWeight: '600'
              }}>
                {successMessage}
              </Text>
            </LinearGradient>
          </Animated.View>
        </View>
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
  
  diamondCardWrap: { width: (width - 40) / 2 - 5, marginBottom: 10 },
  diamondCard: { flex: 1, borderRadius: 20, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,198,255,0.4)' },
  badge: { position: 'absolute', top: -10, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, zIndex: 5 },
  badgeText: { fontSize: 10, fontWeight: '900', color: '#FFF' },
  diamondAmount: { fontSize: 24, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  diamondBonus: { fontSize: 12, fontWeight: 'bold', color: '#00c6ff', marginTop: 4 },
  diamondPriceBtn: { backgroundColor: 'rgba(0,198,255,0.8)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12, marginTop: 15, width: '100%', alignItems: 'center' },
  diamondPriceText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },

  outfitCardWrap: { width: (width - 40) / 2 - 5, alignItems: 'center', marginBottom: 15 },
  outfitCard: { width: '100%', aspectRatio: 1, borderRadius: 20, borderWidth: 2, overflow: 'hidden' },
  outfitInner: { flex: 1, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  outfitImage: { fontSize: 60, marginBottom: 10 },
  outfitName: { fontSize: 15, fontWeight: '800', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center', marginTop: 8 },
  outfitRarity: { fontSize: 12, fontWeight: 'bold', marginTop: 2 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginTop: 10 },
  priceText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },

  premiumContainer: { paddingHorizontal: 20, paddingTop: 10 },
  premiumMainTitle: { fontSize: 28, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold', textAlign: 'center' },
  premiumMainSub: { fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  premiumCard: { padding: 25, borderRadius: 24, alignItems: 'center', overflow: 'hidden' },
  premiumTitle: { fontSize: 24, fontWeight: '900', color: '#FFF', fontFamily: 'SpaceGrotesk_700Bold' },
  premiumSub: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 'bold', marginBottom: 8 },
  benefitsList: { width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 24, gap: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  benefitText: { fontSize: 15, color: '#FFF', fontWeight: '600' },

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
