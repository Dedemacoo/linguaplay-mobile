import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './AuthContext';
import NetInfo from '@react-native-community/netinfo';

const STORAGE_KEY = '@linguaplay_progress_v2'; // new key for new schema

export interface LanguageProgress {
  totalXp: number;
  dailyXp: number;
  streak: number;
  level: number;
  completedLessons: string[];
  lastActiveDate: string;
}

export interface UserProgress {
  hearts: number;
  gems: number;
  avatar: string;
  lastHeartRefill: string;
  isPremium: boolean;
  languages: {
    [key: string]: LanguageProgress;
  };
}

interface ProgressContextType {
  progress: UserProgress;
  isLoaded: boolean;
  addXp: (amount: number, langKey: string) => void;
  completeLesson: (lessonId: string, xpEarned: number, langKey: string) => void;
  loseHeart: () => void;
  gainHeart: () => void;
  refillHearts: (cost: number) => boolean; 
  addGems: (amount: number) => void;
  setAvatar: (avatar: string) => void;
  setPremium: (value: boolean) => void;
}

const getTodayStr = () => new Date().toISOString().split('T')[0];

const defaultLangProgress: LanguageProgress = {
  totalXp: 0,
  dailyXp: 0,
  streak: 0,
  level: 1,
  completedLessons: [],
  lastActiveDate: '',
};

const defaultProgress: UserProgress = {
  hearts: 20,
  gems: 150,
  avatar: '👤',
  lastHeartRefill: new Date().toISOString(),
  isPremium: false,
  languages: {
    kurdish: { ...defaultLangProgress },
    english: { ...defaultLangProgress },
    turkish: { ...defaultLangProgress },
    french: { ...defaultLangProgress },
  },
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = useAuth();

  // Load progress from Firestore if logged in, else AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        let parsed: UserProgress | null = null;

        if (user) {
          try {
            const docRef = doc(db, 'users', user.uid);
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

        if (parsed) {
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

          // Check streak and daily resets per language
          Object.keys(parsed.languages).forEach(key => {
            const langData = parsed.languages[key];
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

          setProgress(parsed);
        }
      } catch (e) {
        console.log('Failed to load progress:', e);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [user]);

  const processOfflineQueue = async () => {
    try {
      const q = await AsyncStorage.getItem('@offline_progress_queue');
      if (q && user) {
        const queuedProgress = JSON.parse(q);
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, { progress: queuedProgress }, { merge: true });
        await AsyncStorage.removeItem('@offline_progress_queue');
        console.log('[ProgressContext] Offline progress synced to Firebase');
      }
    } catch (e) {
      console.log('Failed to process offline queue', e);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected && user) {
        processOfflineQueue();
      }
    });
    return () => unsubscribe();
  }, [user]);

  const saveProgress = async (newProgress: UserProgress) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      if (user) {
        const netState = await NetInfo.fetch();
        if (netState.isConnected) {
          const docRef = doc(db, 'users', user.uid);
          await setDoc(docRef, { progress: newProgress }, { merge: true });
        } else {
          await AsyncStorage.setItem('@offline_progress_queue', JSON.stringify(newProgress));
          console.log('[ProgressContext] Queued progress for offline sync');
        }
      }
    } catch (e) {
      console.log('Failed to save progress:', e);
    }
  };

  const updateProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress(prev => {
      const updated = updater(prev);
      saveProgress(updated);
      return updated;
    });
  };

  const addXp = (amount: number, langKey: string) => {
    updateProgress(prev => {
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

      return {
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
    });
  };

  const completeLesson = (lessonId: string, xpEarned: number, langKey: string) => {
    updateProgress(prev => {
      const langData = prev.languages[langKey] || { ...defaultLangProgress };
      if (langData.completedLessons.includes(lessonId)) return prev;
      
      return {
        ...prev,
        gems: prev.gems + 5,
        languages: {
          ...prev.languages,
          [langKey]: {
            ...langData,
            completedLessons: [...langData.completedLessons, lessonId],
          }
        }
      };
    });
    addXp(xpEarned, langKey);
  };

  const loseHeart = () => {
    updateProgress(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
    }));
  };

  const gainHeart = () => {
    updateProgress(prev => ({
      ...prev,
      hearts: Math.min(20, prev.hearts + 1),
    }));
  };

  const refillHearts = (cost: number): boolean => {
    let success = false;
    updateProgress(prev => {
      if (prev.gems < cost) return prev;
      success = true;
      return {
        ...prev,
        hearts: 20,
        gems: prev.gems - cost,
        lastHeartRefill: new Date().toISOString(),
      };
    });
    return success;
  };

  const addGems = (amount: number) => {
    updateProgress(prev => ({ ...prev, gems: prev.gems + amount }));
  };

  const setAvatar = (avatar: string) => {
    updateProgress(prev => ({ ...prev, avatar }));
  };

  const setPremium = async (value: boolean) => {
    await AsyncStorage.setItem('@user_premium', value ? 'true' : 'false');
    updateProgress(prev => ({ ...prev, isPremium: value }));
    if (user) {
      try {
        const { doc: fsDoc, updateDoc } = await import('firebase/firestore');
        await updateDoc(fsDoc(db, 'users', user.uid), { isPremium: value });
      } catch (e) {
        console.log('Could not sync premium status to Firestore', e);
      }
    }
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, isLoaded, addXp, completeLesson, loseHeart, gainHeart, refillHearts, addGems, setAvatar, setPremium
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
