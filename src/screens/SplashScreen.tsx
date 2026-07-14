import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import SoundManager from '../utils/SoundManager';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { user, isLoading } = useAuth();
  const [animationDone, setAnimationDone] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    StatusBar.setBarStyle('light-content');

    // Açılış sesini çal
    SoundManager.init().then(() => SoundManager.playStartup());

    // Fade in the whole screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Loading bar animation
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 3500, // 3.5 seconds loading time
      useNativeDriver: false,
    }).start(() => {
      setAnimationDone(true);
    });

  }, []);

  useEffect(() => {
    if (animationDone && !isLoading) {
      if (user) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('Onboarding');
      }
    }
  }, [animationDone, isLoading, user, navigation]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Animated.Image
        source={require('../../assets/lingo_splash.png')}
        style={[
          styles.backgroundImage,
          { opacity: fadeAnim }
        ]}
        resizeMode="cover"
      />
      
      {/* Loading Bar at the bottom */}
      <Animated.View style={[styles.loadingWrapper, { opacity: fadeAnim }]}>
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
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C16',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loadingWrapper: {
    position: 'absolute',
    bottom: height * 0.1, // Ekranın %10 yukarısı (alt kısım)
    width: '100%',
    alignItems: 'center',
  },
  loadingContainer: {
    width: width * 0.7,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  progressBarBg: {
    width: '100%',
    height: '100%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
    shadowColor: '#D946EF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default SplashScreen;
