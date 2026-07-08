import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, StatusBar, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import SoundManager from '../utils/SoundManager';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { user, isLoading } = useAuth();
  const [animationDone, setAnimationDone] = useState(false);

  // Logo soldan gelecek şekilde ayarlandı
  const logoTranslateX = useRef(new Animated.Value(-width * 1.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    StatusBar.setBarStyle('light-content');

    // Açılış sesini çal
    SoundManager.init().then(() => SoundManager.playStartup());

    // 1. Logonun soldan kayarak yavaşça gelmesi
    Animated.parallel([
      Animated.spring(logoTranslateX, {
        toValue: 0,
        friction: 6,
        tension: 15, // Yavaş ve pürüzsüz geliş
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // 2. Yazıların gecikmeli ve zarif çıkışı
    Animated.sequence([
      Animated.delay(1000), 
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1200, 
          useNativeDriver: true,
        }),
        Animated.spring(textTranslateY, {
          toValue: 0,
          friction: 8,
          tension: 15,
          useNativeDriver: true,
        }),
      ])
    ]).start();

    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 4500); 
    
    return () => clearTimeout(timer);
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

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Devasa logo */}
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [
              { translateX: logoTranslateX },
            ],
          },
        ]}
        resizeMode="cover"
      />
      
      {/* Yazılar logonun üzerine veya hemen altına konumlanır */}
      <Animated.View style={[styles.textContainer, { opacity: textOpacity, transform: [{ translateY: textTranslateY }] }]}>
        <Text style={styles.title}>
          Lingum
        </Text>
        <Text style={styles.subtitle}>
          Yeni Bir Dil, Yeni Bir Dünya.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C16',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 1.2, // Ekran genişliğinden bile büyük, tamamen kaplar
    height: width * 1.2,
    position: 'absolute', // Ekranın arka planını/merkezini kaplaması için
    top: height * 0.1, // Ekranın ortasına veya hafif üstüne yerleşir
  },
  textContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.15, // Ekranın alt kısmına hizalar
  },
  title: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: '#8CA5CE',
    fontSize: 16,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SplashScreen;
