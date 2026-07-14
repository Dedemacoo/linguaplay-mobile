import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

interface OrganicParticlesProps {
  emojis: string[];
  count?: number;
}

export const OrganicParticles: React.FC<OrganicParticlesProps> = ({ emojis, count = 8 }) => {
  const particles = useRef(
    Array.from({ length: count }).map(() => ({
      x: new Animated.Value(Math.random() * width),
      y: new Animated.Value(Math.random() * height),
      scale: new Animated.Value(Math.random() * 0.8 + 0.4),
      opacity: new Animated.Value(Math.random() * 0.4 + 0.1),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      duration: Math.random() * 5000 + 5000,
      amplitude: Math.random() * 50 + 20,
    }))
  ).current;

  useEffect(() => {
    const animations = particles.map((p) => {
      return Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(p.y, {
              toValue: (p.y as any)._value - 100, // Float upwards/downwards
              duration: p.duration,
              useNativeDriver: true,
            }),
            Animated.timing(p.y, {
              toValue: (p.y as any)._value,
              duration: p.duration,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(p.x, {
              toValue: (p.x as any)._value + p.amplitude, // Sway right
              duration: p.duration / 2,
              useNativeDriver: true,
            }),
            Animated.timing(p.x, {
              toValue: (p.x as any)._value - p.amplitude, // Sway left
              duration: p.duration,
              useNativeDriver: true,
            }),
            Animated.timing(p.x, {
              toValue: (p.x as any)._value,
              duration: p.duration / 2,
              useNativeDriver: true,
            }),
          ]),
        ])
      );
    });

    Animated.parallel(animations).start();
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <Animated.Text
          key={i}
          style={[
            styles.particle,
            {
              transform: [
                { translateX: p.x },
                { translateY: p.y },
                { scale: p.scale },
              ],
              opacity: p.opacity,
            },
          ]}
        >
          {p.emoji}
        </Animated.Text>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    fontSize: 40,
    zIndex: 1,
  },
});
