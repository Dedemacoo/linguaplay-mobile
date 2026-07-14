import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, StatusBar, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import SoundManager from '../utils/SoundManager';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const { width } = Dimensions.get('window');

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { user, isLoading } = useAuth();
  const [animationDone, setAnimationDone] = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    StatusBar.setBarStyle('light-content');

    // Açılış sesini çal
    SoundManager.init().then(() => SoundManager.playStartup());

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Loading bar animation
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 2500,
      useNativeDriver: false, // width animasyonu native driver kullanamaz
    }).start(() => {
      setAnimationDone(true);
    });

  }, []);

  useEffect(() => {
    if (animationDone && !isLoading) {
      if (user) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('Login');
      }
    }
  }, [animationDone, isLoading, user, navigation]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <ImageBackground 
          source={require('../../assets/splash.png')} 
          style={[StyleSheet.absoluteFill, styles.bgImage]}
          resizeMode="cover"
        >
          {/* Loading Bar at the bottom */}
          <View style={styles.loadingContainer}>
            <View style={styles.progressBarBg}>
              <Animated.View style={[styles.progressBarFill, { width: progressWidth }]}>
                <LinearGradient 
                  colors={['#8B5CF6', '#D946EF']} 
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                  style={StyleSheet.absoluteFill} 
                />
              </Animated.View>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070C1A',
  },
  bgImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  loadingContainer: {
    width: width * 0.7,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  progressBarBg: {
    width: '100%',
    height: '100%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
    shadowColor: '#D946EF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default SplashScreen;
