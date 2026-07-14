import React, { createContext, useState, useContext, ReactNode } from 'react';

type LanguageKey = 'kurdish' | 'turkish' | 'english' | 'french' | 'spanish' | 'german' | 'italian' | 'japanese' | 'korean' | 'russian' | 'chinese' | 'arabic' | 'portuguese' | 'dutch';

interface LanguageContextType {
  activeLanguage: LanguageKey;
  setActiveLanguage: (lang: LanguageKey) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [activeLanguage, setActiveLanguage] = useState<LanguageKey>('kurdish');

  return (
    <LanguageContext.Provider value={{ activeLanguage, setActiveLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
