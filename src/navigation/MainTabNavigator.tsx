import React from 'react';
import { Text, Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GamesScreen from '../screens/GamesScreen';
import ChatListScreen from '../screens/ChatListScreen';
import { useThemeColors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const colors = useThemeColors();
  const insets = useSafeAreaInsets();

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
          height: 60 + (insets.bottom > 0 ? insets.bottom : 10),
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          paddingTop: 8,
          elevation: 15,
          shadowColor: '#000',
          shadowOpacity: 0.10,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: -3 },
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Dersler"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Lig"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>🏆</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Oyunlar"
        component={GamesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? colors.primary : 'transparent',
              width: 48,
              height: 48,
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -16,
              shadowColor: colors.primary,
              shadowOpacity: focused ? 0.4 : 0,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: focused ? 8 : 0,
            }}>
              <Text style={{ fontSize: 24 }}>🎮</Text>
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, fontWeight: '700', color: focused ? colors.primary : colors.textLight, marginTop: 4 }}>
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
            <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>💬</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
