import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';

interface SkeletonProps {
  width: number | string;
  height: number;
  borderRadius?: number;
  style?: ViewStyle;
}

export const SkeletonBox: React.FC<SkeletonProps> = ({ width, height, borderRadius = 8, style }) => {
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmer, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(shimmer, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  const opacity = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <Animated.View
      style={[
        {
          width: width as any,
          height,
          borderRadius,
          backgroundColor: '#2A2A3E',
          opacity,
        },
        style,
      ]}
    />
  );
};

/** Skeleton for HomeScreen path nodes */
export const HomeScreenSkeleton: React.FC = () => {
  return (
    <View style={skStyles.container}>
      {/* Header skeleton */}
      <View style={skStyles.header}>
        <SkeletonBox width={120} height={24} />
        <SkeletonBox width={80} height={32} borderRadius={16} />
      </View>
      {/* Stats bar skeleton */}
      <View style={skStyles.statsBar}>
        <SkeletonBox width={60} height={40} borderRadius={12} />
        <SkeletonBox width={60} height={40} borderRadius={12} />
        <SkeletonBox width={60} height={40} borderRadius={12} />
        <SkeletonBox width={60} height={40} borderRadius={12} />
      </View>
      {/* Path nodes skeleton */}
      {[1, 2, 3, 4, 5].map((i) => (
        <View key={i} style={[skStyles.node, { alignSelf: i % 2 === 0 ? 'flex-end' : 'flex-start' }]}>
          <SkeletonBox width={70} height={70} borderRadius={35} />
          <SkeletonBox width={90} height={14} style={{ marginTop: 8 }} />
        </View>
      ))}
    </View>
  );
};

/** Skeleton for LessonScreen */
export const LessonScreenSkeleton: React.FC = () => {
  return (
    <View style={skStyles.lessonContainer}>
      {/* Progress bar skeleton */}
      <SkeletonBox width="90%" height={8} borderRadius={4} style={{ alignSelf: 'center', marginBottom: 30 }} />
      {/* Question area skeleton */}
      <SkeletonBox width="80%" height={28} style={{ alignSelf: 'center', marginBottom: 20 }} />
      <SkeletonBox width="60%" height={20} style={{ alignSelf: 'center', marginBottom: 40 }} />
      {/* Answer options skeleton */}
      {[1, 2, 3, 4].map((i) => (
        <SkeletonBox
          key={i}
          width="85%"
          height={56}
          borderRadius={16}
          style={{ alignSelf: 'center', marginBottom: 12 }}
        />
      ))}
    </View>
  );
};

/** Skeleton for ProfileScreen */
export const ProfileScreenSkeleton: React.FC = () => {
  return (
    <View style={skStyles.profileContainer}>
      {/* Avatar */}
      <SkeletonBox width={100} height={100} borderRadius={50} style={{ alignSelf: 'center', marginBottom: 16 }} />
      {/* Name */}
      <SkeletonBox width={150} height={24} style={{ alignSelf: 'center', marginBottom: 8 }} />
      {/* Stats row */}
      <View style={skStyles.statsRow}>
        <SkeletonBox width={80} height={60} borderRadius={12} />
        <SkeletonBox width={80} height={60} borderRadius={12} />
        <SkeletonBox width={80} height={60} borderRadius={12} />
      </View>
      {/* Cards */}
      {[1, 2, 3].map((i) => (
        <SkeletonBox
          key={i}
          width="90%"
          height={80}
          borderRadius={16}
          style={{ alignSelf: 'center', marginBottom: 12 }}
        />
      ))}
    </View>
  );
};

const skStyles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  statsBar: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30, paddingHorizontal: 10 },
  node: { marginBottom: 30, alignItems: 'center', paddingHorizontal: 40 },
  lessonContainer: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  profileContainer: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, paddingHorizontal: 20 },
});
