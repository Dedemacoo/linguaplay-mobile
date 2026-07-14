import { useColorScheme } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const BRAND = {
  bg:        '#0B1022',
  surface:   '#111A2E',
  card:      '#141D32',
  border:    '#1E2D4A',
  primary:   '#4CD964',   // Green
  secondary: '#B84DFF',   // Purple
  accent:    '#00D9FF',   // Cyan
  gold:      '#FFD54A',
  danger:    '#FF5A5F',
  text:      '#FFFFFF',
  textSub:   '#B8C1D1',
  textMuted: '#5A6A88',
};

const sharedColors = {
  primary: BRAND.primary,
  primaryDark: '#3AA34A',
  secondary: BRAND.secondary,
  secondaryDark: '#8A2ECC',
  error: BRAND.danger,
  warning: BRAND.gold,
  success: BRAND.primary,
  info: BRAND.accent,
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  streak: '#FF9600',
};

export const darkColors = {
  ...sharedColors,
  colorScheme: 'dark' as const,
  background: BRAND.bg,
  surface: BRAND.surface,
  card: BRAND.card,
  text: BRAND.text,
  textLight: BRAND.textSub,
  textMuted: BRAND.textMuted,
  border: BRAND.border,
};

export const lightColors = {
  ...sharedColors,
  colorScheme: 'light' as const,
  background: '#F8FAFC', // Slate 50
  surface: '#FFFFFF',
  card: '#FFFFFF',
  text: '#0F172A',       // Slate 900
  textLight: '#475569',  // Slate 600
  textMuted: '#94A3B8',  // Slate 400
  border: '#E2E8F0',     // Slate 200
};

export const useThemeColors = () => {
  const { isDark } = useTheme();
  return isDark ? darkColors : lightColors;
};
