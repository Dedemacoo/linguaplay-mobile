import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@linguaplay_theme';
const ACTIVE_THEME_KEY = '@linguaplay_active_theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [activeThemeState, setActiveThemeState] = useState<string>('classic');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
          setThemeModeState(storedTheme);
        }
        
        const storedActiveTheme = await AsyncStorage.getItem(ACTIVE_THEME_KEY);
        if (storedActiveTheme) {
          setActiveThemeState(storedActiveTheme);
        }
      } catch (e) {
        console.log('Failed to load theme:', e);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const setThemeMode = async (mode: ThemeMode) => {
    setThemeModeState(mode);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (e) {
      console.log('Failed to save theme:', e);
    }
  };

  const setActiveTheme = async (theme: string) => {
    setActiveThemeState(theme);
    try {
      await AsyncStorage.setItem(ACTIVE_THEME_KEY, theme);
    } catch (e) {
      console.log('Failed to save active theme:', e);
    }
  };

  // Determine actual boolean for dark mode
  const isDark = themeMode === 'system' ? systemColorScheme === 'dark' : themeMode === 'dark';

  if (!isLoaded) return null; // Or a transparent splash screen

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, isDark, activeTheme: activeThemeState, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
