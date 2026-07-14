import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type LanguageKey = 'kurdish' | 'turkish' | 'english' | 'french' | 'spanish' | 'german' | 'italian' | 'japanese' | 'korean' | 'russian' | 'chinese' | 'arabic' | 'portuguese' | 'dutch';

interface LanguageState {
  activeLanguage: LanguageKey;
  setActiveLanguage: (lang: LanguageKey) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      activeLanguage: 'kurdish',
      setActiveLanguage: (lang) => set({ activeLanguage: lang }),
    }),
    {
      name: '@linguaplay_language_storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
