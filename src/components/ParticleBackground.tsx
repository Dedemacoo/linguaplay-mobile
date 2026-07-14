import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const PARTICLE_COUNT = 12;

interface ParticleProps {
  delay: number;
  startX: number;
  duration: number;
  size: number;
}

const Particle: React.FC<ParticleProps> = ({ delay, startX, duration, size }) => {
  const translateY = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    const startAnimation = () => {
      translateY.setValue(-50);
      Animated.loop(
        Animated.timing(translateY, {
          toValue: height + 50,
          duration: duration,
          useNativeDriver: true,
          delay: delay,
        })
      ).start();
    };

    startAnimation();
  }, [translateY, duration, delay]);

  return (
    <Animated.Text
      style={[
        styles.particle,
        {
          fontSize: size,
          left: startX,
          transform: [{ translateY }],
        },
      ]}
    >
      🐬
    </Animated.Text>
  );
};

export const ParticleBackground: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    delay: Math.random() * 5000,
    startX: Math.random() * width,
    duration: 6000 + Math.random() * 4000, // 6s to 10s
    size: 15 + Math.random() * 15, // 15px to 30px
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      {particles.map((p) => (
        <Particle
          key={p.id}
          delay={p.delay}
          startX={p.startX}
          duration={p.duration}
          size={p.size}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: -1, // Keep it behind the content
  },
  particle: {
    position: 'absolute',
    opacity: 0.15, // Very subtle
  },
});
