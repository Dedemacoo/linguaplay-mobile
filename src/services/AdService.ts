import { RewardedAd, RewardedAdEventType, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

// TEST IDs provided by Google AdMob
const adUnitIdRewarded = 'ca-app-pub-3940256099942544/5224354917';
const adUnitIdInterstitial = 'ca-app-pub-3940256099942544/1033173712';

let rewardedAd: RewardedAd | null = null;
let interstitialAd: InterstitialAd | null = null;

export const AdService = {
  initRewarded: () => {
    rewardedAd = RewardedAd.createForAdRequest(adUnitIdRewarded);
    rewardedAd.load();
  },

  showRewarded: (onReward: () => void, onClose: () => void) => {
    if (!rewardedAd) {
      onClose(); // Fallback if ad is not loaded
      return;
    }

    const unsubscribeLoaded = rewardedAd.addAdEventListener(RewardedAdEventType.LOADED, () => {
      rewardedAd!.show();
    });

    const unsubscribeEarned = rewardedAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        onReward();
      }
    );

    const unsubscribeClosed = rewardedAd.addAdEventListener(AdEventType.CLOSED, () => {
      onClose();
      // Reload for next time
      rewardedAd!.load();
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribeClosed();
    });

    if (rewardedAd.loaded) {
      rewardedAd.show();
    } else {
      rewardedAd.load();
    }
  },

  initInterstitial: () => {
    interstitialAd = InterstitialAd.createForAdRequest(adUnitIdInterstitial);
    interstitialAd.load();
  },

  showInterstitial: (onClose: () => void) => {
    if (!interstitialAd) {
      onClose();
      return;
    }

    const unsubscribeLoaded = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      interstitialAd!.show();
    });

    const unsubscribeClosed = interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
      onClose();
      interstitialAd!.load();
      unsubscribeLoaded();
      unsubscribeClosed();
    });

    if (interstitialAd.loaded) {
      interstitialAd.show();
    } else {
      interstitialAd.load();
    }
  }
};
