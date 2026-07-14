import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts, SpaceGrotesk_400Regular, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import SoundManager from './src/utils/SoundManager';
import { NotificationService } from './src/services/NotificationService';
import { IdleMascot } from './src/components/IdleMascot';

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    SoundManager.init();
    
    // Refresh notifications to push back the "absence" nudges
    const refreshNotifications = async () => {
      const saved = await NotificationService.getSavedReminder();
      if (saved) {
        await NotificationService.scheduleDailyReminder(saved.hour, saved.minute);
      }
    };
    refreshNotifications();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B1021' }}>
        <ActivityIndicator size="large" color="#00F0FF" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <IdleMascot>
            <AppNavigator />
          </IdleMascot>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
