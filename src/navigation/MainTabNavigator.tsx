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
import { useTheme } from '../context/ThemeContext';
import { Mascot } from '../components/Mascot';
import { useProgressStore } from '../store/useProgressStore';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const colors = useThemeColors();
  const { activeTheme } = useTheme();
  const insets = useSafeAreaInsets();
  const { progress } = useProgressStore();

  const getTabBarStyle = () => {
    const baseHeight = 56;
    let style: any = {
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      height: baseHeight + (insets.bottom > 0 ? insets.bottom : 5),
      paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
      paddingTop: 8,
      elevation: 20,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: -6 },
    };

    if (activeTheme === 'cyberpunk') {
      style = {
        ...style,
        backgroundColor: colors.card,
        borderTopWidth: 2,
        borderTopColor: colors.primary,
        shadowColor: colors.primary,
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: -8 },
      };
    } else if (activeTheme === 'ocean') {
      style = {
        ...style,
        backgroundColor: colors.card,
        borderTopWidth: 1,
        borderTopColor: colors.primary,
        shadowColor: colors.primary,
        shadowOpacity: 0.3,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: -5 },
      };
    } else if (activeTheme === 'forest') {
      style = {
        ...style,
        backgroundColor: colors.card,
        borderTopWidth: 1,
        borderTopColor: colors.primary,
        shadowColor: colors.primary,
        shadowOpacity: 0.2,
      };
    } else if (activeTheme === 'crimson') {
      style = {
        ...style,
        borderTopWidth: 3,
        borderTopColor: colors.primary,
        backgroundColor: colors.card,
        shadowColor: colors.primaryDark,
        shadowOpacity: 0.4,
      };
    }

    return style;
  };

  const getIcon = (name: string, focused: boolean) => {
    if (activeTheme === 'cyberpunk') {
      return <FontAwesome5 name={name} size={20} color={focused ? colors.primary : colors.textLight} solid={focused} />;
    } else if (activeTheme === 'ocean') {
      return (
        <View style={{
          backgroundColor: focused ? `${colors.primary}20` : 'transparent',
          padding: 8,
          borderRadius: 20,
        }}>
          <FontAwesome5 name={name} size={18} color={focused ? colors.primary : colors.textLight} />
        </View>
      );
    } else if (activeTheme === 'forest') {
      return <FontAwesome5 name={name} size={20} color={focused ? colors.primary : colors.textLight} solid={focused} />;
    } else if (activeTheme === 'crimson') {
      return <FontAwesome5 name={name} size={20} color={focused ? colors.primary : colors.textLight} solid={focused} />;
    }
    // Classic default uses Feather
    return <Feather name={name} size={20} color={focused ? colors.primary : colors.textLight} />;
  };

  // Map route names to icons
  const iconMap: Record<string, string> = {
    'Dersler': activeTheme === 'cyberpunk' ? 'code-branch' : (activeTheme === 'ocean' ? 'water' : (activeTheme === 'crimson' ? 'fire' : (activeTheme === 'forest' ? 'leaf' : 'map'))),
    'Lig': activeTheme === 'cyberpunk' ? 'trophy' : (activeTheme === 'ocean' ? 'anchor' : (activeTheme === 'crimson' ? 'crown' : (activeTheme === 'forest' ? 'seedling' : 'award'))),
    'Oyunlar': activeTheme === 'cyberpunk' ? 'gamepad' : (activeTheme === 'ocean' ? 'ship' : (activeTheme === 'crimson' ? 'dice-d20' : (activeTheme === 'forest' ? 'bug' : 'gamepad'))),
    'Mesajlar': activeTheme === 'cyberpunk' ? 'comment-dots' : (activeTheme === 'ocean' ? 'fish' : (activeTheme === 'crimson' ? 'envelope-open-text' : (activeTheme === 'forest' ? 'dove' : 'message-circle'))),
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: getTabBarStyle(),
        tabBarShowLabel: true,
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
          tabBarIcon: ({ focused }) => getIcon(iconMap['Dersler'], focused),
        }}
      />
      <Tab.Screen
        name="Lig"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ focused }) => getIcon(iconMap['Lig'], focused),
        }}
      />
      <Tab.Screen
        name="Oyunlar"
        component={GamesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            // "Cyber" logic applied to ALL themes for the center button
            return (
              <View style={{
                backgroundColor: colors.surface,
                width: 48,
                height: 48,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -20,
                borderWidth: 2,
                borderColor: focused ? colors.primary : colors.border,
                shadowColor: colors.primary,
                shadowOpacity: focused ? 0.6 : 0,
                shadowRadius: 8,
              }}>
                <FontAwesome5 name={iconMap['Oyunlar']} size={20} color={focused ? colors.primary : colors.textLight} />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 10, fontWeight: '600', color: focused ? colors.primary : colors.textLight, marginTop: 4 }}>Oyunlar</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Mesajlar"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ focused }) => getIcon(iconMap['Mesajlar'], focused),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ opacity: focused ? 1 : 0.6, marginTop: activeTheme === 'ocean' ? 5 : 0 }}>
              <Mascot mascotId={progress.equippedMascot || 'classic'} size={24} animated={true} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
