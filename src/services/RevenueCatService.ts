import Purchases, { PurchasesPackage, CustomerInfo, LOG_LEVEL } from 'react-native-purchases';
import { Platform } from 'react-native';
import { useProgressStore } from '../store/useProgressStore';

// TODO: Replace these with your actual RevenueCat API Keys from the dashboard
const API_KEYS = {
  apple: "appl_YOUR_APPLE_API_KEY",
  google: "goog_YOUR_GOOGLE_API_KEY"
};

class RevenueCatService {
  isInitialized = false;

  async setup() {
    if (this.isInitialized) return;
    
    try {
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);

      if (Platform.OS === 'ios') {
        Purchases.configure({ apiKey: API_KEYS.apple });
      } else if (Platform.OS === 'android') {
        Purchases.configure({ apiKey: API_KEYS.google });
      }
      
      this.isInitialized = true;
      await this.checkSubscriptionStatus();
    } catch (e) {
      console.error("RevenueCat setup error:", e);
    }
  }

  async checkSubscriptionStatus(): Promise<boolean> {
    try {
      const customerInfo: CustomerInfo = await Purchases.getCustomerInfo();
      // 'premium' is the default entitlement identifier in RevenueCat, change if different
      const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
      
      // Update global state
      const store = useProgressStore.getState();
      if (store.progress.isPremium !== isPremium) {
        store.setPremium(isPremium);
      }
      
      return isPremium;
    } catch (e) {
      console.error("Error fetching customer info:", e);
      return false;
    }
  }

  async getPackages(): Promise<PurchasesPackage[]> {
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
        return offerings.current.availablePackages;
      }
    } catch (e) {
      console.error("Error getting offerings:", e);
    }
    return [];
  }

  async purchasePackage(pack: PurchasesPackage): Promise<boolean> {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pack);
      const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
      
      if (isPremium) {
        useProgressStore.getState().setPremium(true);
      }
      return isPremium;
    } catch (e: any) {
      if (!e.userCancelled) {
        console.error("Purchase error:", e);
      }
      return false;
    }
  }

  async restorePurchases(): Promise<boolean> {
    try {
      const customerInfo = await Purchases.restorePurchases();
      const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
      
      if (isPremium) {
        useProgressStore.getState().setPremium(true);
      }
      return isPremium;
    } catch (e) {
      console.error("Restore error:", e);
      return false;
    }
  }
}

export default new RevenueCatService();
