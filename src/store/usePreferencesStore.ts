import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageKey } from './useLanguageStore';

interface PreferencesState {
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  appLanguage: LanguageKey;
  dailyGoal: number;
  reminderTime: string;
  setSoundEnabled: (enabled: boolean) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  setAppLanguage: (lang: LanguageKey) => void;
  setDailyGoal: (goal: number) => void;
  setReminderTime: (time: string) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      soundEnabled: true,
      notificationsEnabled: true,
      appLanguage: 'turkish',
      dailyGoal: 50,
      reminderTime: '20:00',
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
      setAppLanguage: (lang) => set({ appLanguage: lang }),
      setDailyGoal: (goal) => set({ dailyGoal: goal }),
      setReminderTime: (time) => set({ reminderTime: time }),
    }),
    {
      name: 'linguaplay-preferences-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
