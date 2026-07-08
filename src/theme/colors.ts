import { useColorScheme } from 'react-native';

const sharedColors = {
  primary: '#00F0FF', // Cyber Neon Turquoise
  primaryDark: '#00B8CC',
  secondary: '#8A2BE2', // Electric Purple
  secondaryDark: '#5E1B99',
  error: '#FF0055', // Cyber Neon Red/Pink
  warning: '#FFEA00', // Cyber Yellow
  success: '#58CC02', // Duolingo-style Green
  info: '#2D00F7', // Deep Royal Blue
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const lightColors = {
  ...sharedColors,
  colorScheme: 'light' as const,
  background: '#EAEFF2', // Very soft cool grey for cyber light theme
  surface: '#FFFFFF',
  text: '#0D1321', // Deep dark navy instead of plain black
  textLight: '#8D99AE',
  border: '#D8E2E8',
};

export const darkColors = {
  ...sharedColors,
  colorScheme: 'dark' as const,
  background: '#0B1021',  // Deep Space Navy
  surface: '#151C33',     // Glassy Navy Surface
  text: '#FFFFFF',
  textLight: '#7A8C99',
  border: '#2A3655',
};

import { useTheme } from '../context/ThemeContext';

export const useThemeColors = () => {
  const { isDark } = useTheme();
  return isDark ? darkColors : lightColors;
};
