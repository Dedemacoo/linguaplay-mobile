import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AICoreVisualizerProps {
  state: 'idle' | 'listening' | 'speaking' | 'thinking';
  gender: 'female' | 'male';
  size?: number;
}

export const AICoreVisualizer: React.FC<AICoreVisualizerProps> = ({ state, gender, size = 160 }) => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0.4)).current;
  const mouthAnim = useRef(new Animated.Value(0)).current;
  const blinkAnim = useRef(new Animated.Value(1)).current;
  const ring1Anim = useRef(new Animated.Value(0.3)).current;
  const ring2Anim = useRef(new Animated.Value(0.2)).current;

  // Colors based on gender (using gradient arrays)
  const coreColors = gender === 'female' ? ['#F472B6', '#DB2777', '#831843'] : ['#60A5FA', '#2563EB', '#1E3A8A'];
  const shadowColor = gender === 'female' ? '#DB2777' : '#2563EB';
  const glowColor = gender === 'female' ? 'rgba(219, 39, 119, 0.5)' : 'rgba(37, 99, 235, 0.5)';
  const ringColor = gender === 'female' ? 'rgba(219, 39, 119, 0.3)' : 'rgba(37, 99, 235, 0.3)';

  // Float bob animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: -8, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 8, duration: 4000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  }, []);

  // Pulse animation based on state
  useEffect(() => {
    const toValue = state === 'speaking' ? 1.08 : state === 'listening' ? 1.04 : 1.02;
    const duration = state === 'speaking' ? 400 : 1200;
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue, duration, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  }, [state]);

  // Glow animation
  useEffect(() => {
    const maxGlow = state === 'speaking' ? 1 : state === 'listening' ? 0.8 : 0.5;
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: maxGlow, duration: 1000, useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0.3, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, [state]);

  // Mouth animation (speaking)
  useEffect(() => {
    if (state === 'speaking') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(mouthAnim, { toValue: 1, duration: 200, useNativeDriver: false }),
          Animated.timing(mouthAnim, { toValue: 0.3, duration: 150, useNativeDriver: false }),
          Animated.timing(mouthAnim, { toValue: 0.8, duration: 180, useNativeDriver: false }),
          Animated.timing(mouthAnim, { toValue: 0.2, duration: 200, useNativeDriver: false }),
        ])
      ).start();
    } else {
      Animated.timing(mouthAnim, { toValue: 0, duration: 300, useNativeDriver: false }).start();
    }
  }, [state]);

  // Blink animation
  useEffect(() => {
    const blink = () => {
      Animated.sequence([
        Animated.timing(blinkAnim, { toValue: 0.1, duration: 100, useNativeDriver: true }),
        Animated.timing(blinkAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();
    };
    const interval = setInterval(blink, 3500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  // Ring animations
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ring1Anim, { toValue: 0.8, duration: 2000, useNativeDriver: true }),
        Animated.timing(ring1Anim, { toValue: 0.2, duration: 2000, useNativeDriver: true }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(ring2Anim, { toValue: 0.6, duration: 2800, useNativeDriver: true }),
        Animated.timing(ring2Anim, { toValue: 0.1, duration: 2800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const mouthHeight = mouthAnim.interpolate({ inputRange: [0, 1], outputRange: [4, 16] });
  const mouthWidth = mouthAnim.interpolate({ inputRange: [0, 1], outputRange: [18, 28] });
  const mouthRadius = mouthAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 14] });

  const eyeSize = size * 0.08;
  const eyeSpacing = size * 0.14;

  return (
    <View style={{ width: size + 60, height: size + 60, alignItems: 'center', justifyContent: 'center' }}>
      {/* Outer Ring 2 */}
      <Animated.View style={{
        position: 'absolute', width: size + 50, height: size + 50, borderRadius: (size + 50) / 2,
        borderWidth: 2, borderColor: ringColor, borderStyle: 'dashed', opacity: ring2Anim,
      }} />

      {/* Outer Ring 1 */}
      <Animated.View style={{
        position: 'absolute', width: size + 24, height: size + 24, borderRadius: (size + 24) / 2,
        borderWidth: 3, borderColor: ringColor, opacity: ring1Anim,
      }} />

      {/* Glow Layer */}
      <Animated.View style={{
        position: 'absolute', width: size + 30, height: size + 30, borderRadius: (size + 30) / 2,
        backgroundColor: glowColor, opacity: glowAnim,
        shadowColor: shadowColor, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 40,
      }} />

      {/* Main Core Sphere */}
      <Animated.View style={{
        width: size, height: size, borderRadius: size / 2,
        transform: [{ translateY: floatAnim }, { scale: pulseAnim }],
        shadowColor: shadowColor, shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8, shadowRadius: 20, elevation: 20,
      }}>
        {/* The 3D Gradient Sphere */}
        <LinearGradient
          colors={coreColors}
          start={{ x: 0.2, y: 0.1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{ width: '100%', height: '100%', borderRadius: size / 2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' }}
        >
          {/* Inner highlight (Glass/reflection effect) */}
          <LinearGradient
            colors={['rgba(255,255,255,0.6)', 'transparent']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              position: 'absolute', top: size * 0.05, left: size * 0.15,
              width: size * 0.7, height: size * 0.35, borderRadius: size * 0.35,
            }} 
          />

        {/* Eyes */}
        <View style={{ flexDirection: 'row', gap: eyeSpacing, marginBottom: size * 0.06 }}>
          <Animated.View style={{
            width: eyeSize, height: eyeSize, borderRadius: eyeSize / 2,
            backgroundColor: '#FFF', scaleY: blinkAnim,
            shadowColor: '#FFF', shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1, shadowRadius: 6, elevation: 5,
          }} />
          <Animated.View style={{
            width: eyeSize, height: eyeSize, borderRadius: eyeSize / 2,
            backgroundColor: '#FFF', scaleY: blinkAnim,
            shadowColor: '#FFF', shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1, shadowRadius: 6, elevation: 5,
          }} />
        </View>

        {/* Mouth */}
        <Animated.View style={{
          width: mouthWidth, height: mouthHeight, borderRadius: mouthRadius,
          backgroundColor: 'rgba(0,0,0,0.5)', borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.2)',
        }} />

        {/* Audio frequency bars (when speaking) */}
        {state === 'speaking' && (
          <View style={{ flexDirection: 'row', gap: 3, marginTop: 8, alignItems: 'flex-end' }}>
            {[8, 14, 10, 16, 7].map((h, i) => (
              <Animated.View key={i} style={{
                width: 3, height: h, borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.6)',
                opacity: pulseAnim,
              }} />
            ))}
          </View>
        )}

        {/* Thinking dots */}
        {state === 'thinking' && (
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 8 }}>
            {[0, 1, 2].map(i => (
              <View key={i} style={{
                width: 6, height: 6, borderRadius: 3,
                backgroundColor: 'rgba(255,255,255,0.7)',
              }} />
            ))}
          </View>
        )}
        </LinearGradient>
      </Animated.View>
    </View>
  );
};
