import { create } from 'zustand';

export type LanguageKey = 'kurdish' | 'turkish' | 'english' | 'french' | 'spanish' | 'german' | 'italian' | 'japanese' | 'korean' | 'russian' | 'chinese' | 'arabic' | 'portuguese' | 'dutch';

interface LanguageState {
  activeLanguage: LanguageKey;
  setActiveLanguage: (lang: LanguageKey) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  activeLanguage: 'kurdish',
  setActiveLanguage: (lang) => set({ activeLanguage: lang }),
}));
