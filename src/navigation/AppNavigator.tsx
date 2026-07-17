import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Platform, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useProgressStore } from '../store/useProgressStore';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import PathSelectionScreen from '../screens/PathSelectionScreen';
import IntroLessonScreen from '../screens/IntroLessonScreen';
import AgeScreen from '../screens/AgeScreen';
import ReminderScreen from '../screens/ReminderScreen';
import LoginScreen from '../screens/LoginScreen';
import LessonScreen from '../screens/LessonScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PremiumScreen from '../screens/PremiumScreen';
import SecurityScreen from '../screens/SecurityScreen';
import LegalScreen from '../screens/LegalScreen';
import OpenSourceScreen from '../screens/OpenSourceScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import TransitionScreen from '../screens/TransitionScreen';
import QuizBattleScreen from '../screens/QuizBattleScreen';
import MatchmakingScreen from '../screens/MatchmakingScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import FriendsScreen from '../screens/FriendsScreen';
import SpeakingScreen from '../screens/SpeakingScreen';
import SpeakingResultScreen from '../screens/SpeakingResultScreen';
import CollectionScreen from '../screens/CollectionScreen';
import MarketScreen from '../screens/MarketScreen';
import AITutorScreen from '../screens/AITutorScreen';
import TreasureChestScreen from '../screens/TreasureChestScreen';
import TwoFactorVerifyScreen from '../screens/TwoFactorVerifyScreen';

import { MainTabNavigator } from './MainTabNavigator';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  PathSelection: undefined;
  IntroLesson: undefined;
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  Lesson: { lessonId?: string; fromOnboarding?: boolean; isPlacementTest?: boolean };
  Age: undefined;
  Reminder: { isPlacementTest?: boolean } | undefined;
  LanguageSelection: undefined;
  ReasonSelection: undefined;
  GoalSelection: undefined;
  Alphabet: undefined;
  Settings: undefined;
  Premium: undefined;
  Security: undefined;
  Legal: { type: 'privacy' | 'terms' } | undefined;
  OpenSource: undefined;
  Feedback: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  ForgotPassword: undefined;
  Transition: { targetRoute: keyof RootStackParamList, message?: string };
  QuizBattle: { battleId: string };
  Matchmaking: undefined;
  ChatRoom: { chatId: string; otherUid: string; otherName: string; otherAvatar: string };
  Friends: undefined;
  Speaking: undefined;
  SpeakingResult: { avgScore: number; xpEarned: number; totalWords: number };
  Collection: undefined;
  Market: undefined;
  AITutor: undefined;
  TreasureChest: { mascotId: string };
  TwoFactorVerify: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { user } = useAuth();
  const initProgress = useProgressStore((s) => s.init);

  useEffect(() => {
    initProgress(user?.uid || null);
  }, [user]);

  return (
    <View style={styles.webContainer}>
      <View style={styles.appContainer}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{ 
              headerShown: false,
              animation: 'slide_from_right',
            }} 
            initialRouteName="Splash"
          >
            <Stack.Screen name="AITutor" component={AITutorScreen} />
            <Stack.Screen name="Market" component={MarketScreen} />
            <Stack.Screen name="Collection" component={CollectionScreen} />
            <Stack.Screen name="TreasureChest" component={TreasureChestScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="PathSelection" component={PathSelectionScreen} />
            <Stack.Screen name="IntroLesson" component={IntroLessonScreen} />
            <Stack.Screen name="Age" component={AgeScreen} />
            <Stack.Screen name="Reminder" component={ReminderScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainTabs" component={MainTabNavigator} />
            <Stack.Screen name="LanguageSelection" component={require('../screens/LanguageSelectionScreen').default} />
            <Stack.Screen name="ReasonSelection" component={require('../screens/ReasonSelectionScreen').default} />
            <Stack.Screen name="GoalSelection" component={require('../screens/GoalSelectionScreen').default} />
            <Stack.Screen name="Lesson" component={LessonScreen} />
            <Stack.Screen name="Alphabet" component={AlphabetScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Premium" component={PremiumScreen} />
            <Stack.Screen name="Security" component={SecurityScreen} />
            <Stack.Screen name="Legal" component={LegalScreen} />
            <Stack.Screen name="OpenSource" component={OpenSourceScreen} />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Transition" component={TransitionScreen} />
            <Stack.Screen name="QuizBattle" component={QuizBattleScreen} />
            <Stack.Screen name="Matchmaking" component={MatchmakingScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
            <Stack.Screen name="Friends" component={FriendsScreen} />
            <Stack.Screen name="Speaking" component={SpeakingScreen} />
            <Stack.Screen name="SpeakingResult" component={SpeakingResultScreen} />
            <Stack.Screen name="TwoFactorVerify" component={TwoFactorVerifyScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#F7F7F7' : '#FFFFFF',
    alignItems: 'center',
  },
  appContainer: {
    flex: 1,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 500 : '100%',
    backgroundColor: '#FFFFFF',
    ...(Platform.OS === 'web' ? {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
    } : {}),
  }
});
