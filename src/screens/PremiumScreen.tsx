import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions,
  ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useProgressStore } from '../store/useProgressStore';
import { PurchaseService, SUBSCRIPTION_PLANS } from '../services/PurchaseService';
import * as Haptics from 'expo-haptics';
import { Mascot } from '../components/Mascot';

const { width } = Dimensions.get('window');

const FEATURES = [
  { icon: '❤️', title: 'Sınırsız Can', desc: 'Hiçbir zaman ders kesme.' },
  { icon: '📶', title: 'Çevrimdışı Dersler', desc: 'İnternetsiz çalış.' },
  { icon: '🚫', title: 'Reklamsız Deneyim', desc: 'Kesintisiz öğren.' },
  { icon: 'mascot', title: 'AI Lingo', desc: 'Sesini puanla ve geliştir.' },
  { icon: '👑', title: 'Özel Lig Rozeti', desc: 'Liderboard\'da öne çık.' },
];

const PremiumScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const { progress, setPremium } = useProgressStore();
  const [selectedPlan, setSelectedPlan] = useState('yearly');
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    const plan = SUBSCRIPTION_PLANS.find(p => p.id === selectedPlan)!;

    Alert.alert(
      '👑 Premium\'a Geç',
      `${plan.title} plan: ${plan.price}${plan.period}`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Satın Al',
          onPress: async () => {
            setLoading(true);
            const result = await PurchaseService.purchasePlan(plan.productIdentifier);
            if (result.success) {
              await setPremium(true);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              Alert.alert(
                '👑 Tebrikler!',
                'Premium üyeliğin aktif edildi! Tüm özellikler açıldı.',
                [{ text: 'Harika!', onPress: () => (navigation as any).goBack() }]
              );
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              Alert.alert('Hata', result.error || 'Satın alma tamamlanamadı.');
            }
            setLoading(false);
          },
        },
      ]
    );
  };

  const handleRestore = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLoading(true);
    const restored = await PurchaseService.restorePurchases();
    if (restored) {
      await setPremium(true);
      Alert.alert('✅ Satın Almalar Geri Yüklendi', 'Premium üyeliğin aktif edildi.');
    } else {
      Alert.alert('Bulunamadı', 'Aktif bir premium abonelik bulunamadı.');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#1A1A1A' }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => (navigation as any).goBack()}>
            <Text style={{ color: '#FFF', fontSize: 24 }}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.crown}>👑</Text>
          <Text style={styles.title}>{progress.isPremium ? 'Premium Aktif!' : 'LinguaPlay Premium'}</Text>
          <Text style={styles.subtitle}>{progress.isPremium ? 'Tüm özelliklerden yararlanıyorsun.' : 'Sınırları kaldır, daha hızlı öğren'}</Text>
        </View>

        {/* Features */}
        <View style={styles.features}>
          {FEATURES.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              {f.icon === 'mascot' ? (
                <View style={{ width: 40, height: 40, overflow: 'hidden' }}>
                  <Mascot size={40} />
                </View>
              ) : (
                <Text style={styles.featureIcon}>{f.icon}</Text>
              )}
              <View style={{ flex: 1, marginLeft: f.icon === 'mascot' ? 10 : 0 }}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {!progress.isPremium && (
          <>
            {/* Plans */}
            <View style={styles.plans}>
              {SUBSCRIPTION_PLANS.map(plan => (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.planCard,
                    selectedPlan === plan.id && { borderColor: plan.color, borderWidth: 2.5 },
                  ]}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setSelectedPlan(plan.id);
                  }}
                  activeOpacity={0.85}
                >
                  {plan.badge && (
                    <View style={[styles.badge, { backgroundColor: plan.color }]}>
                      <Text style={styles.badgeText}>{plan.badge}</Text>
                    </View>
                  )}
                  <Text style={styles.planTitle}>{plan.title}</Text>
                  <Text style={[styles.planPrice, { color: plan.color }]}>
                    {plan.price}
                    <Text style={styles.planPeriod}>{plan.period}</Text>
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Buy Button */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={[styles.buyBtn, loading && { opacity: 0.7 }]}
                onPress={handlePurchase}
                disabled={loading}
                activeOpacity={0.85}
              >
                {loading ? (
                  <ActivityIndicator color="#000" />
                ) : (
                  <Text style={styles.buyBtnText}>SATIN AL</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn}>
                <Text style={styles.restoreText}>Satın almaları geri yükle</Text>
              </TouchableOpacity>

              <Text style={styles.legalText}>
                Abonelik her dönemde otomatik yenilenir. İstediğin zaman iptal edebilirsin.
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flexGrow: 1, paddingBottom: 40 },
  header: { padding: 20, alignItems: 'flex-start' },
  closeBtn: { padding: 5 },
  heroSection: { alignItems: 'center', paddingHorizontal: 24, marginBottom: 24 },
  crown: { fontSize: 72, marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', color: '#FFF', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#CCC', textAlign: 'center', lineHeight: 22 },
  features: { paddingHorizontal: 24, gap: 14, marginBottom: 28 },
  featureRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 14, backgroundColor: '#242433', borderRadius: 16, padding: 14 },
  featureIcon: { fontSize: 28 },
  featureTitle: { color: '#FFF', fontWeight: '700', fontSize: 15, marginBottom: 2 },
  featureDesc: { color: '#AAA', fontSize: 13 },
  plans: { flexDirection: 'column', paddingHorizontal: 24, gap: 14, marginBottom: 24 },
  planCard: {
    width: '100%', backgroundColor: '#242433', borderRadius: 16, padding: 18,
    alignItems: 'center', borderWidth: 1.5, borderColor: '#333',
  },
  badge: { position: 'absolute', top: -10, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 4 },
  badgeText: { color: '#000', fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
  planTitle: { color: '#FFF', fontWeight: '800', fontSize: 16, marginBottom: 6 },
  planPrice: { fontSize: 17, fontWeight: '800' },
  planPeriod: { fontSize: 11, fontWeight: '400', color: '#AAA' },
  footer: { paddingHorizontal: 24 },
  buyBtn: {
    backgroundColor: '#FFD700', borderRadius: 18, paddingVertical: 18,
    alignItems: 'center', marginBottom: 12,
    shadowColor: '#FFD700', shadowOpacity: 0.4, shadowRadius: 12, shadowOffset: { width: 0, height: 4 },
  },
  buyBtnText: { color: '#000', fontWeight: '900', fontSize: 17, letterSpacing: 1 },
  restoreBtn: { alignItems: 'center', paddingVertical: 10 },
  restoreText: { color: '#888', fontSize: 13, textDecorationLine: 'underline' },
  legalText: { color: '#555', fontSize: 11, textAlign: 'center', lineHeight: 16, marginTop: 8 },
  premiumActive: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  activeTitle: { color: '#FFD700', fontSize: 28, fontWeight: '800' },
  activeSub: { color: '#AAA', fontSize: 16, textAlign: 'center' },
});

export default PremiumScreen;
