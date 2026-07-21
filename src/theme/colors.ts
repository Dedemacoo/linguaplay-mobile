import { useColorScheme } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const THEMES = {
  classic: {
    bg:        '#0B1022',
    surface:   '#111A2E',
    card:      '#141D32',
    border:    '#1E2D4A',
    primary:   '#4CD964',   
    primaryDark: '#3AA34A',
    secondary: '#B84DFF',   
    accent:    '#00D9FF',   
  },
  cyberpunk: {
    bg:        '#090514',
    surface:   '#15092A',
    card:      '#210E3D',
    border:    '#3B185F',
    primary:   '#FF0055',
    primaryDark: '#B3003C',
    secondary: '#00F0FF',
    accent:    '#7000FF',
  },
  ocean: {
    bg:        '#04121B',
    surface:   '#081D2B',
    card:      '#0C283B',
    border:    '#134361',
    primary:   '#00E5FF',
    primaryDark: '#0099AA',
    secondary: '#00FFAA',
    accent:    '#0077FF',
  },
  crimson: {
    bg:        '#1A0505',
    surface:   '#2A0808',
    card:      '#3D0C0C',
    border:    '#5C1212',
    primary:   '#FF2A2A',
    primaryDark: '#B31D1D',
    secondary: '#FF7700',
    accent:    '#FF0055',
  },
  forest: {
    bg:        '#05140A',
    surface:   '#092111',
    card:      '#0C2E17',
    border:    '#164A25',
    primary:   '#00FF66',
    primaryDark: '#00B347',
    secondary: '#00FFCC',
    accent:    '#70FF00',
  }
};

export const BRAND = {
  ...THEMES.classic,
  gold:      '#FFD54A',
  danger:    '#FF5A5F',
  text:      '#FFFFFF',
  textSub:   '#B8C1D1',
  textMuted: '#5A6A88',
};

const getSharedColors = (themeKey: keyof typeof THEMES) => {
  const t = THEMES[themeKey] || THEMES.classic;
  return {
    primary: t.primary,
    primaryDark: t.primaryDark,
    secondary: t.secondary,
    secondaryDark: t.secondary,
    error: BRAND.danger,
    warning: BRAND.gold,
    success: t.primary,
    info: t.accent,
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    streak: '#FF9600',
  };
};

export const getThemeColors = (themeKey: keyof typeof THEMES, isDark: boolean) => {
  const t = THEMES[themeKey] || THEMES.classic;
  const shared = getSharedColors(themeKey);

  if (!isDark) {
    let lightBg = '#F8FAFC';
    let lightSurface = '#FFFFFF';
    let lightCard = '#FFFFFF';
    let lightBorder = '#E2E8F0';

    if (themeKey === 'ocean') {
      lightBg = '#F0F9FF';
      lightSurface = '#E0F2FE';
      lightCard = '#E0F2FE';
      lightBorder = '#BAE6FD';
    } else if (themeKey === 'cyberpunk') {
      lightBg = '#FDF2F8';
      lightSurface = '#FCE7F3';
      lightCard = '#FCE7F3';
      lightBorder = '#FBCFE8';
    } else if (themeKey === 'forest') {
      lightBg = '#F0FDF4';
      lightSurface = '#DCFCE7';
      lightCard = '#DCFCE7';
      lightBorder = '#BBF7D0';
    } else if (themeKey === 'crimson') {
      lightBg = '#FEF2F2';
      lightSurface = '#FEE2E2';
      lightCard = '#FEE2E2';
      lightBorder = '#FECACA';
    }

    return {
      ...shared,
      ...t,
      colorScheme: 'light' as const,
      background: lightBg, 
      bg: lightBg, // OVERRIDE t.bg!
      surface: lightSurface,
      card: lightCard,
      border: lightBorder,
      text: '#0F172A',
      textLight: '#475569',  
      textMuted: '#94A3B8',  
    };
  }

  return {
    ...shared,
    ...t,
    colorScheme: 'dark' as const,
    background: t.bg,
    surface: t.surface,
    card: t.card,
    border: t.border,
    text: BRAND.text,
    textLight: BRAND.textSub,
    textMuted: BRAND.textMuted,
  };
};

export const useThemeColors = () => {
  const { isDark, activeTheme } = useTheme();
  return getThemeColors((activeTheme as keyof typeof THEMES) || 'classic', isDark);
};
