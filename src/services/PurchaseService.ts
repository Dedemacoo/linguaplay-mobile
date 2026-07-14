/**
 * PurchaseService — RevenueCat Altyapısı
 *
 * Şu an Expo Go ortamında native "react-native-purchases" kütüphanesi
 * çalışmamaktadır. Bu servis, gerçek RevenueCat entegrasyonu için
 * hazır mimariyi kurar. Expo custom build / EAS Build geçildiğinde
 * aşağıdaki yorumlar kaldırılarak aktif edilecektir.
 *
 * Kurulum (Custom Build için):
 *   npx expo install react-native-purchases
 *   eas build --profile development
 */

// import Purchases, { PurchasesPackage, CustomerInfo } from 'react-native-purchases';
import { Platform } from 'react-native';

const REVENUECAT_API_KEY_IOS = 'appl_XXXXXXXXXXXXXXXXXXXXXXXXXX'; // Buraya iOS API key gelecek
const REVENUECAT_API_KEY_ANDROID = 'goog_XXXXXXXXXXXXXXXXXXXXXXXXXX'; // Buraya Android API key gelecek

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  badge: string | null;
  color: string;
  productIdentifier: string; // App Store / Play Store product ID
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'monthly',
    title: 'Aylık',
    price: '₺89,99',
    period: '/ay',
    badge: null,
    color: '#00F0FF',
    productIdentifier: 'linguaplay_premium_monthly',
  },
  {
    id: 'yearly',
    title: 'Yıllık',
    price: '₺749,99',
    period: '/yıl',
    badge: '%30 TASARRUF',
    color: '#8A2BE2',
    productIdentifier: 'linguaplay_premium_yearly',
  },
];

export class PurchaseService {
  private static isConfigured = false;

  /**
   * RevenueCat'i başlat — App.tsx'te çağrılır.
   * Native build gerektirir.
   */
  static async configure(): Promise<void> {
    if (this.isConfigured) return;
    try {
      // const apiKey = Platform.OS === 'ios' ? REVENUECAT_API_KEY_IOS : REVENUECAT_API_KEY_ANDROID;
      // await Purchases.configure({ apiKey });
      // this.isConfigured = true;
      console.log('[PurchaseService] RevenueCat stub mode (native build gerekli)');
    } catch (e) {
      console.warn('[PurchaseService] Configuration failed:', e);
    }
  }

  /**
   * Mevcut kullanıcının Premium durumunu kontrol et.
   */
  static async checkPremiumStatus(): Promise<boolean> {
    try {
      // const info: CustomerInfo = await Purchases.getCustomerInfo();
      // return Object.keys(info.entitlements.active).length > 0;
      return false; // Stub: native build gerekli
    } catch {
      return false;
    }
  }

  /**
   * Bir plan satın al.
   * @param productIdentifier App Store / Play Store ürün ID'si
   */
  static async purchasePlan(productIdentifier: string): Promise<{ success: boolean; error?: string }> {
    try {
      // const offerings = await Purchases.getOfferings();
      // const pkg = offerings.current?.availablePackages.find(
      //   p => p.product.identifier === productIdentifier
      // );
      // if (!pkg) throw new Error('Ürün bulunamadı');
      // await Purchases.purchasePackage(pkg);
      // return { success: true };

      // Stub: Expo Go'da simüle et
      console.log(`[PurchaseService] Satın alma simüle edildi: ${productIdentifier}`);
      return { success: true };
    } catch (e: any) {
      if (e.userCancelled) return { success: false, error: 'İptal edildi' };
      return { success: false, error: e.message || 'Satın alma başarısız' };
    }
  }

  /**
   * Daha önce satın alınanları geri yükle.
   */
  static async restorePurchases(): Promise<boolean> {
    try {
      // const info = await Purchases.restorePurchases();
      // return Object.keys(info.entitlements.active).length > 0;
      return false; // Stub
    } catch {
      return false;
    }
  }
}
