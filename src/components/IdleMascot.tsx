import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, PanResponder, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '../theme/colors';

const { width } = Dimensions.get('window');
const IDLE_TIMEOUT = 20000; // 20 seconds

export const IdleMascot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colors = useThemeColors();
  const isIdleRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const insets = useSafeAreaInsets();
  const slideAnim = useRef(new Animated.Value(-200)).current;

  const resetTimer = () => {
    if (isIdleRef.current) {
      // Hide mascot
      isIdleRef.current = false;
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      isIdleRef.current = true;
      // Show mascot (emerging slightly from camera/notch)
      Animated.spring(slideAnim, {
        toValue: Math.max(insets.top - 30, -25),
        useNativeDriver: true,
      }).start();
    }, IDLE_TIMEOUT);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [insets.top]);

  const handleTouch = () => {
    resetTimer();
    return false;
  };

  return (
    <View style={styles.container} onStartShouldSetResponderCapture={handleTouch}>
      {children}
      
      <Animated.View style={[styles.mascotContainer, { transform: [{ translateY: slideAnim }] }]} pointerEvents="box-none">
        <View style={styles.content}>
          <LottieView
            source={require('../../assets/mascots/bildirimkedicik.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <View style={[styles.bubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.bubbleText, { color: colors.text }]}>Hey! Orada mısın?</Text>
            <View style={[styles.tail, { borderTopColor: colors.border, backgroundColor: colors.surface }]} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mascotContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
    elevation: 9999,
  },
  content: {
    alignItems: 'center',
  },
  lottie: {
    width: 120,
    height: 120,
    transform: [{ rotate: '180deg' }], // Upside down since it's peeking from top
  },
  bubble: {
    marginTop: -20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  bubbleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tail: {
    position: 'absolute',
    top: -8,
    alignSelf: 'center',
    width: 16,
    height: 16,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
});
