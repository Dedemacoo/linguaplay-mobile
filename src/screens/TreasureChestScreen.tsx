import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { BRAND } from '../theme/colors';
import { Mascot } from '../components/Mascot';
import { MASCOTS } from '../data/MascotData';
import { useProgressStore } from '../store/useProgressStore';
import * as Haptics from 'expo-haptics';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'TreasureChest'>;

const { width, height } = Dimensions.get('window');

const TreasureChestScreen: React.FC<Props> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const { mascotId } = route.params; // The mascot being unlocked
  const mascotInfo = MASCOTS[mascotId];
  const { unlockMascot, equipMascot } = useProgressStore();

  const [opened, setOpened] = useState(false);
  
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleTapChest = () => {
    if (opened) return;
    
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    
    // Shake animation
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true })
    ]).start(() => {
      setOpened(true);
      unlockMascot(mascotId);
      
      // Reveal mascot animation
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        })
      ]).start();
    });
  };

  const handleEquip = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    equipMascot(mascotId);
    navigation.goBack();
  };

  const handleLater = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!opened ? (
          <TouchableOpacity activeOpacity={0.8} onPress={handleTapChest} style={styles.chestWrapper}>
            <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
              {/* Fallback emoji chest until we have real assets */}
              <Text style={styles.chestEmoji}>🎁</Text>
              <Text style={styles.instruction}>Tap to Open!</Text>
            </Animated.View>
          </TouchableOpacity>
        ) : (
          <Animated.View style={[styles.revealWrapper, { opacity: opacityAnim, transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.congrats}>Tebrikler!</Text>
            <Text style={styles.subtext}>Yeni bir yol arkadaşı kazandın.</Text>

            <View style={styles.glowContainer}>
              <Mascot mascotId={mascotId} size={180} animationState="celebrate" animated />
            </View>
            
            <Text style={styles.mascotName}>{mascotInfo.name}</Text>
            <Text style={styles.mascotStory}>{mascotInfo.story}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.equipBtn} onPress={handleEquip} activeOpacity={0.8}>
                <Text style={styles.equipBtnText}>Hemen Kuşan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.laterBtn} onPress={handleLater} activeOpacity={0.8}>
                <Text style={styles.laterBtnText}>Daha Sonra</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)', // Dark overlay look
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chestWrapper: {
    alignItems: 'center',
    padding: 40,
  },
  chestEmoji: {
    fontSize: 120,
    textShadowColor: 'rgba(255, 215, 0, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
  },
  instruction: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    opacity: 0.8,
  },
  revealWrapper: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 32,
    borderRadius: 32,
    width: width * 0.85,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 20,
  },
  congrats: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 24,
    textAlign: 'center',
  },
  glowContainer: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    marginBottom: 20,
  },
  mascotName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  mascotStory: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  equipBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  equipBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  laterBtn: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  laterBtnText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TreasureChestScreen;
