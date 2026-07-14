import { Mascot } from '../components/Mascot';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
type Props = NativeStackScreenProps<RootStackParamList, 'IntroLesson'>;

const IntroLessonScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();
  
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, tension: 40, useNativeDriver: true })
    ]).start();
  }, []);

  const handleContinue = async () => {
    const { ContentService } = require('../services/ContentService');
    const allLessons = await ContentService.getAllLessonsData(activeLanguage);
    if (allLessons.length > 0) {
      navigation.replace('Lesson', { lessonId: allLessons[0].id });
    } else {
      navigation.replace('Lesson', { lessonId: undefined }); // fallback
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backBtn} 
          onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Onboarding')}
        >
          <Text style={[styles.backBtnText, { color: colors.textLight }]}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Animated.View style={[styles.messageContainer, { opacity: opacityAnim, transform: [{ scale: scaleAnim }] }]}>
          <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.chatText, { color: colors.text }]}>Peki! İşte ilk 2 dakikalık dersin.</Text>
            {/* The tail pointing down to the mascot */}
            <View style={[styles.chatBubbleTail, { borderTopColor: colors.surface }]} />
            <View style={[styles.chatBubbleTailBorder, { borderTopColor: colors.border }]} />
          </View>
          
          <View style={styles.mascotBox}>
            <Mascot size={60} style={{ marginRight: 10 }} />
            <View style={styles.pencilBox}>
              <Text style={{ fontSize: 24 }}>✏️</Text>
            </View>
          </View>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]} 
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>DEVAM ET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  backBtn: {
    padding: 10,
    marginLeft: -10,
  },
  backBtnText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  messageContainer: {
    alignItems: 'center',
  },
  chatBubble: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 30,
    position: 'relative',
    zIndex: 2,
  },
  chatText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
  },
  chatBubbleTail: {
    position: 'absolute',
    bottom: -15,
    left: '50%',
    marginLeft: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderTopWidth: 15,
    zIndex: 2,
  },
  chatBubbleTailBorder: {
    position: 'absolute',
    bottom: -18,
    left: '50%',
    marginLeft: -12,
    width: 0,
    height: 0,
    borderLeftWidth: 17,
    borderLeftColor: 'transparent',
    borderRightWidth: 17,
    borderRightColor: 'transparent',
    borderTopWidth: 17,
    zIndex: 1,
  },
  mascotBox: {
    alignItems: 'center',
    position: 'relative',
  },
  mascotEmoji: {
    fontSize: 120,
  },
  pencilBox: {
    position: 'absolute',
    bottom: 20,
    right: -10,
    transform: [{ rotate: '15deg' }],
  },
  footer: {
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 30,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
    letterSpacing: 1,
  },
});

export default IntroLessonScreen;
