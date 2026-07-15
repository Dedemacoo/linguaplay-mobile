import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import NetInfo from '@react-native-community/netinfo';
import { LeagueService } from '../services/LeagueService';

const STORAGE_KEY = '@linguaplay_progress_v2';

export interface LanguageProgress {
  totalXp: number;
  dailyXp: number;
  streak: number;
  level: number;
  completedLessons: string[];
  lastActiveDate: string;
  weakWords?: Record<string, number>;
  mistakes?: Record<string, {
    count: number;
    lastSeen: string;
    category: string;
  }>;
  lastReportDate?: string | null;
  previousReportSnapshot?: Record<string, number>;
}

export interface UserProgress {
  hearts: number;
  gems: number;
  avatar: string;
  lastHeartRefill: string;
  isPremium: boolean;
  speakingDisabledUntil?: number;
  mysteryBoxCount?: number;
  lastFreeRewardDate?: string;
  equippedMascot: string;
  unlockedMascots: string[];
  equippedCostumes?: { head?: string; back?: string; body?: string };
  unlockedCostumes?: string[];
  languages: {
    [key: string]: LanguageProgress;
  };
  // League & Duel Stats
  leaguePoints: number;
  duelWins: number;
  duelLosses: number;
}

const getTodayStr = () => new Date().toISOString().split('T')[0];

const defaultLangProgress: LanguageProgress = {
  totalXp: 0,
  dailyXp: 0,
  streak: 0,
  level: 1,
  completedLessons: [],
  lastActiveDate: '',
  weakWords: {},
  mistakes: {},
  lastReportDate: null,
  previousReportSnapshot: {},
};

const defaultProgress: UserProgress = {
  hearts: 20,
  gems: 150,
  avatar: '👤',
  lastHeartRefill: new Date().toISOString(),
  isPremium: false,
  equippedMascot: 'classic',
  unlockedMascots: ['classic'],
  mysteryBoxCount: 0,
  equippedCostumes: {},
  unlockedCostumes: [],
  languages: {
    kurdish: { ...defaultLangProgress },
    english: { ...defaultLangProgress },
    turkish: { ...defaultLangProgress },
    french: { ...defaultLangProgress },
  },
  leaguePoints: 0,
  duelWins: 0,
  duelLosses: 0,
};

interface ProgressState {
  progress: UserProgress;
  isLoaded: boolean;
  userUid: string | null;
  init: (uid: string | null) => Promise<void>;
  addXp: (amount: number, langKey: string) => void;
  disableSpeaking: () => void;
  completeLesson: (lessonId: string, xpEarned: number, langKey: string) => void;
  claimDailyReward: () => boolean;
  openMysteryBox: (availableMascotIds: string[]) => { success: boolean, type?: 'refund' | 'theme', refundAmount?: number, themeId?: string, error?: string };
  loseHeart: () => void;
  gainHeart: () => void;
  refillHearts: (cost: number) => boolean; 
  addGems: (amount: number) => void;
  claimUnitReward: (unitIndex: number, langKey: string) => void;
  removeGems: (amount: number) => boolean;
  setAvatar: (avatar: string) => void;
  setPremium: (value: boolean) => Promise<void>;
  equipMascot: (id: string) => void;
  unlockMascot: (id: string) => void;
  buyMascot: (id: string, cost: number) => boolean;
  equipCostume: (id: string | null, category: 'head' | 'back' | 'body') => void;
  buyCostume: (id: string, cost: number) => boolean;
  trackMistake: (item: string, category: string, langKey: string) => void;
  updateLastReportDate: (date: string, langKey: string) => void;
  saveReportSnapshot: (langKey: string) => void;
  _saveProgress: (newProgress: UserProgress) => Promise<void>;
  
  // League & Duel Actions
  addLeaguePoints: (points: number) => void;
  recordDuelResult: (isWin: boolean, points: number) => void;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: defaultProgress,
  isLoaded: false,
  userUid: null,

  _saveProgress: async (newProgress: UserProgress) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      const uid = get().userUid;
      if (uid) {
        const netState = await NetInfo.fetch();
        if (netState.isConnected) {
          const docRef = doc(db, 'users', uid);
          await setDoc(docRef, { progress: newProgress }, { merge: true });
        } else {
          await AsyncStorage.setItem('@offline_progress_queue', JSON.stringify(newProgress));
          console.log('[ProgressStore] Queued progress for offline sync');
        }
      }
    } catch (e) {
      console.log('Failed to save progress:', e);
    }
  },

  init: async (uid: string | null) => {
    set({ userUid: uid });
    try {
      let parsed: UserProgress | null = null;

      if (uid) {
        try {
          const docRef = doc(db, 'users', uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && docSnap.data().progress) {
            parsed = docSnap.data().progress as UserProgress;
          }
        } catch (firebaseErr) {
          console.log('Firebase fetch failed, falling back to local storage', firebaseErr);
        }
      }

      if (!parsed) {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) parsed = JSON.parse(stored);
      }

      if (parsed !== null) {
        const today = getTodayStr();
        // Auto-refill hearts
        if (parsed.hearts < 20) {
          const lastRefill = new Date(parsed.lastHeartRefill);
          const now = new Date();
          const hoursDiff = (now.getTime() - lastRefill.getTime()) / (1000 * 60 * 60);
          const heartsToAdd = Math.min(20, parsed.hearts + Math.floor(hoursDiff / 5));
          if (heartsToAdd > parsed.hearts) {
            parsed.hearts = heartsToAdd;
            parsed.lastHeartRefill = now.toISOString();
          }
        }

        // Check streak and daily resets
        Object.keys(parsed!.languages || {}).forEach(key => {
          const langData = (parsed as any).languages[key];
          const lastDate = langData.lastActiveDate;
          if (lastDate && lastDate !== today) {
            const lastActive = new Date(lastDate);
            const todayDate = new Date(today);
            const diffDays = Math.round((todayDate.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
            
            langData.dailyXp = 0;
            if (diffDays > 1) {
              langData.streak = 0;
            }
          }
        });

        // Merge defaultProgress to ensure new top-level fields (like unlockedMascots) exist
        parsed = {
          ...defaultProgress,
          ...parsed,
        };

        // Add missing languages from defaultProgress to parsed
        parsed.languages = Object.fromEntries(
          Object.entries(defaultProgress.languages).map(([langKey, defaultLang]) => [
            langKey,
            {
              ...defaultLang,
              ...((parsed as any).languages?.[langKey] || {}),
            },
          ])
        ) as { [key: string]: LanguageProgress };
        set({ progress: parsed });
      }
    } catch (e) {
      console.log('Failed to load progress:', e);
    } finally {
      set({ isLoaded: true });
    }

    // Process offline queue if we have network and user
    if (uid) {
      const netState = await NetInfo.fetch();
      if (netState.isConnected) {
        try {
          const q = await AsyncStorage.getItem('@offline_progress_queue');
          if (q) {
            const queuedProgress = JSON.parse(q);
            const docRef = doc(db, 'users', uid);
            await setDoc(docRef, { progress: queuedProgress }, { merge: true });
            await AsyncStorage.removeItem('@offline_progress_queue');
            console.log('[ProgressStore] Offline progress synced to Firebase');
          }
        } catch (e) {
          console.log('Failed to process offline queue', e);
        }
      }
    }
  },

  disableSpeaking: () => {
    const newProgress = { ...get().progress, speakingDisabledUntil: Date.now() + 15 * 60 * 1000 };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
  },

  claimDailyReward: () => {
    const prev = get().progress;
    const today = getTodayStr();
    if (prev.lastFreeRewardDate === today) return false;
    const newProgress = { ...prev, gems: prev.gems + 50, lastFreeRewardDate: today };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
    return true;
  },

  openMysteryBox: (availableMascotIds: string[]) => {
    const prev = get().progress;
    if (prev.gems < 500) return { success: false, error: 'Yetersiz elmas' };

    const currentCount = prev.mysteryBoxCount || 0;
    const newCount = currentCount + 1;

    // Every 5th box gives a theme
    if (newCount % 5 === 0) {
      // Give theme
      const unownedMascots = availableMascotIds.filter(id => !prev.unlockedMascots.includes(id));
      if (unownedMascots.length > 0) {
        const randomThemeId = unownedMascots[Math.floor(Math.random() * unownedMascots.length)];
        const newProgress = { 
          ...prev, 
          gems: prev.gems - 500, 
          mysteryBoxCount: newCount,
          unlockedMascots: [...prev.unlockedMascots, randomThemeId]
        };
        set({ progress: newProgress });
        get()._saveProgress(newProgress);
        return { success: true, type: 'theme', themeId: randomThemeId };
      } else {
        // If they own all themes, give them 1000 gems instead
        const newProgress = { ...prev, gems: (prev.gems - 500) + 1000, mysteryBoxCount: newCount };
        set({ progress: newProgress });
        get()._saveProgress(newProgress);
        return { success: true, type: 'refund', refundAmount: 1000 };
      }
    } else {
      // Refund 250 gems
      const newProgress = { ...prev, gems: (prev.gems - 500) + 250, mysteryBoxCount: newCount };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
      return { success: true, type: 'refund', refundAmount: 250 };
    }
  },

  addXp: (amount: number, langKey: string) => {
    const prev = get().progress;
    const today = getTodayStr();
    const langData = prev.languages[langKey] || { ...defaultLangProgress };
    
    const newTotalXp = langData.totalXp + amount;
    const newDailyXp = langData.dailyXp + amount;
    const newLevel = Math.floor(newTotalXp / 100) + 1;

    let newStreak = langData.streak;
    const lastDate = langData.lastActiveDate;
    if (lastDate !== today) {
      if (lastDate) {
        const lastActive = new Date(lastDate);
        const todayDate = new Date(today);
        const diffDays = Math.round((todayDate.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) newStreak = langData.streak + 1;
        else if (diffDays > 1) newStreak = 1;
      } else {
        newStreak = 1;
      }
    }

    const newProgress = {
      ...prev,
      languages: {
        ...prev.languages,
        [langKey]: {
          ...langData,
          totalXp: newTotalXp,
          dailyXp: newDailyXp,
          level: newLevel,
          streak: newStreak,
          lastActiveDate: today,
        }
      }
    };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);

    // Lig Puanını da XP ile birlikte güncelle
    const uid = get().userUid;
    if (uid) {
      // XP eklendiğinde aynı miktarda Lig Puanı da ekliyoruz
      get().addLeaguePoints(amount);
    }
  },

  completeLesson: (lessonId: string, xpEarned: number, langKey: string) => {
    const prev = get().progress;
    const langData = prev.languages[langKey] || { ...defaultLangProgress };
    if (!(langData.completedLessons || []).includes(lessonId)) {
      
      const newUnlockedMascots = [...(prev.unlockedMascots || ['classic'])];
      if (lessonId === 'e_boss_1' && !newUnlockedMascots.includes('professor')) {
        newUnlockedMascots.push('professor');
      }

      const newProgress = {
        ...prev,
        gems: prev.gems + 5,
        unlockedMascots: newUnlockedMascots,
        languages: {
          ...prev.languages,
          [langKey]: {
            ...langData,
            completedLessons: [...(langData.completedLessons || []), lessonId],
          }
        }
      };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
    }
    // Then call addXp to handle xp logic and saving again
    get().addXp(xpEarned, langKey);
  },

  trackMistake: (item: string, category: string, langKey: string) => {
    const { progress, _saveProgress } = get();
    if (!progress.languages[langKey]) return;

    const langProg = progress.languages[langKey];
    const today = new Date().toISOString().split('T')[0];
    const mistakes = langProg.mistakes || {};
    const weakWords = langProg.weakWords || {};

    const existing = mistakes[item] || { count: 0, lastSeen: today, category };
    const updatedMistakes = {
      ...mistakes,
      [item]: {
        count: existing.count + 1,
        lastSeen: today,
        category: existing.category || category,
      },
    };

    const currentCount = weakWords[item] || 0;
    const updatedWeakWords = { ...weakWords, [item]: currentCount + 1 };
    const sortedWeakWords = Object.entries(updatedWeakWords)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50);

    const sortedMistakes = Object.entries(updatedMistakes)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 50);

    const limitedWeakWords = Object.fromEntries(sortedWeakWords);
    const limitedMistakes = Object.fromEntries(sortedMistakes);

    const newProgress = {
      ...progress,
      languages: {
        ...progress.languages,
        [langKey]: {
          ...langProg,
          weakWords: limitedWeakWords,
          mistakes: limitedMistakes,
        },
      },
    };
    set({ progress: newProgress });
    _saveProgress(newProgress);
  },

  updateLastReportDate: (date: string, langKey: string) => {
    const { progress, _saveProgress } = get();
    if (!progress.languages[langKey]) return;

    const newProgress = {
      ...progress,
      languages: {
        ...progress.languages,
        [langKey]: {
          ...progress.languages[langKey],
          lastReportDate: date,
        },
      },
    };
    set({ progress: newProgress });
    _saveProgress(newProgress);
  },

  saveReportSnapshot: (langKey: string) => {
    const { progress, _saveProgress } = get();
    if (!progress.languages[langKey]) return;

    const langProg = progress.languages[langKey];
    const mistakes = langProg.mistakes || {};
    const snapshot = Object.fromEntries(
      Object.entries(mistakes)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 50)
        .map(([item, meta]) => [item, meta.count])
    );

    const newProgress = {
      ...progress,
      languages: {
        ...progress.languages,
        [langKey]: {
          ...langProg,
          previousReportSnapshot: snapshot,
        },
      },
    };
    set({ progress: newProgress });
    _saveProgress(newProgress);
  },

  loseHeart: () => {
    const prev = get().progress;
    const newHearts = Math.max(0, prev.hearts - 1);
    if (newHearts !== prev.hearts) {
      const newProgress = { ...prev, hearts: newHearts };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
    }
  },

  gainHeart: () => {
    const prev = get().progress;
    const newHearts = Math.min(20, prev.hearts + 1);
    if (newHearts !== prev.hearts) {
      const newProgress = { ...prev, hearts: newHearts };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
    }
  },

  refillHearts: (cost: number) => {
    const prev = get().progress;
    if (prev.gems < cost) return false;
    
    const newProgress = {
      ...prev,
      hearts: 20,
      gems: prev.gems - cost,
      lastHeartRefill: new Date().toISOString(),
    };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
    return true;
  },

  addGems: (amount: number) => {
    const prev = get().progress;
    const newProgress = { ...prev, gems: prev.gems + amount };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
  },

  claimUnitReward: (unitIndex: number, langKey: string) => {
    const { progress, _saveProgress } = get();
    if (!progress.languages[langKey]) return;

    const rewardId = `eng_u${unitIndex + 1}_reward`;
    const langData = progress.languages[langKey];
    
    if (!(langData.completedLessons || []).includes(rewardId)) {
      const newProgress = {
        ...progress,
        gems: progress.gems + 100,
        languages: {
          ...progress.languages,
          [langKey]: {
            ...langData,
            completedLessons: [...(langData.completedLessons || []), rewardId],
          }
        }
      };
      set({ progress: newProgress });
      _saveProgress(newProgress);
    }
  },

  setAvatar: (avatar: string) => {
    const prev = get().progress;
    const newProgress = { ...prev, avatar };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
  },

  setPremium: async (value: boolean) => {
    await AsyncStorage.setItem('@user_premium', value ? 'true' : 'false');
    const prev = get().progress;
    const newProgress = { ...prev, isPremium: value };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
    
    const uid = get().userUid;
    if (uid) {
      try {
        await updateDoc(doc(db, 'users', uid), { isPremium: value });
      } catch (e) {
        console.log('Could not sync premium status to Firestore', e);
      }
    }
  },

  equipMascot: (id: string) => {
    const prev = get().progress;
    // Sadece unlocked mascotlar kuşanılabilir
    if (prev.unlockedMascots.includes(id)) {
      const newProgress = { ...prev, equippedMascot: id };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
    }
  },

  unlockMascot: (id: string) => {
    const prev = get().progress;
    if (!prev.unlockedMascots.includes(id)) {
      const newProgress = { 
        ...prev, 
        unlockedMascots: [...prev.unlockedMascots, id] 
      };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
    }
  },

  buyMascot: (id: string, cost: number) => {
    const prev = get().progress;
    if (prev.gems >= cost && !prev.unlockedMascots.includes(id)) {
      const newProgress = {
        ...prev,
        gems: prev.gems - cost,
        unlockedMascots: [...prev.unlockedMascots, id]
      };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
      return true;
    }
    return false;
  },

  equipCostume: (id: string | null, category: 'head' | 'back' | 'body') => {
    const prev = get().progress;
    const newProgress = {
      ...prev,
      equippedCostumes: {
        ...(prev.equippedCostumes || {}),
        [category]: id || undefined
      }
    };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
  },

  buyCostume: (id: string, cost: number) => {
    const prev = get().progress;
    const unlocked = prev.unlockedCostumes || [];
    if (prev.gems >= cost && !unlocked.includes(id)) {
      const newProgress = {
        ...prev,
        gems: prev.gems - cost,
        unlockedCostumes: [...unlocked, id]
      };
      set({ progress: newProgress });
      get()._saveProgress(newProgress);
      return true;
    }
    return false;
  },

  addLeaguePoints: (points: number) => {
    const prev = get().progress;
    const newProgress = { ...prev, leaguePoints: (prev.leaguePoints || 0) + points };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);
    
    const uid = get().userUid;
    if (uid) {
      LeagueService.updateWeeklyPoints(uid, '', '', newProgress.leaguePoints).catch(() => {});
    }
  },

  recordDuelResult: (isWin: boolean, points: number) => {
    const prev = get().progress;
    const newProgress = { 
      ...prev, 
      duelWins: (prev.duelWins || 0) + (isWin ? 1 : 0),
      duelLosses: (prev.duelLosses || 0) + (!isWin ? 1 : 0),
      leaguePoints: (prev.leaguePoints || 0) + points
    };
    set({ progress: newProgress });
    get()._saveProgress(newProgress);

    const uid = get().userUid;
    if (uid) {
      LeagueService.updateWeeklyPoints(uid, '', '', newProgress.leaguePoints).catch(() => {});
    }
  }
}));
