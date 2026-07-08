import { Mascot } from '../components/Mascot';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Transition'>;

const { width } = Dimensions.get('window');

const TransitionScreen: React.FC<Props> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const { targetRoute, message } = route.params;

  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Bouncing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -30,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        })
      ])
    ).start();

    // Navigate to target after delay
    const timer = setTimeout(() => {
      navigation.replace(targetRoute as any);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, targetRoute, bounceAnim]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View style={{ transform: [{ translateY: bounceAnim }] }}>
        <Mascot size={120} style={{ marginBottom: 30 }} />
      </Animated.View>
      <Text style={[styles.message, { color: colors.text }]}>{message || 'Yükleniyor...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascot: {
    fontSize: 100,
    marginBottom: 30,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
});

export default TransitionScreen;
