import React from 'react';
import { Text, Platform, View, StyleSheet } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GamesScreen from '../screens/GamesScreen';
import ChatListScreen from '../screens/ChatListScreen';
import { useThemeColors } from '../theme/colors';
import { Mascot } from '../components/Mascot';
import { useProgressStore } from '../store/useProgressStore';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();
  const { progress } = useProgressStore();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
          height: 52 + (insets.bottom > 0 ? insets.bottom : 5),
          paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
          paddingTop: 6,
          elevation: 15,
          shadowColor: '#000',
          shadowOpacity: 0.10,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: -3 },
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Dersler"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="map" size={20} color={focused ? colors.primary : colors.textLight} />
          ),
        }}
      />
      <Tab.Screen
        name="Lig"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="award" size={20} color={focused ? colors.primary : colors.textLight} />
          ),
        }}
      />
      <Tab.Screen
        name="Oyunlar"
        component={GamesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? colors.primary : colors.surface,
              width: 44,
              height: 44,
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -15,
              borderWidth: 2,
              borderColor: colors.background,
              shadowColor: colors.primary,
              shadowOpacity: focused ? 0.4 : 0.1,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 4 },
              elevation: focused ? 8 : 2,
            }}>
              <FontAwesome5 name="gamepad" size={18} color={focused ? '#000' : colors.textLight} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, fontWeight: '600', color: focused ? colors.primary : colors.textLight, marginTop: 4 }}>
              Oyunlar
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Mesajlar"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="message-circle" size={20} color={focused ? colors.primary : colors.textLight} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ opacity: focused ? 1 : 0.6, marginTop: 0 }}>
              <Mascot mascotId={progress.equippedMascot || 'classic'} size={35} animated={true} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
