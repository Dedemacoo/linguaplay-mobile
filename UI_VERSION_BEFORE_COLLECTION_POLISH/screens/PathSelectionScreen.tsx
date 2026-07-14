import { Mascot } from '../components/Mascot';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useLanguageStore } from '../store/useLanguageStore';
import { languagesData } from '../data/mockData';

type Props = NativeStackScreenProps<RootStackParamList, 'PathSelection'>;

const PathSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const { activeLanguage } = useLanguageStore();

  const langData = languagesData[activeLanguage] || languagesData['kurdish'];

  const slideAnim = React.useRef(new Animated.Value(50)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 6, tension: 40, useNativeDriver: true })
    ]).start();
  }, []);

  const handleStartBeginner = () => {
    navigation.navigate('Reminder');
  };

  const handleFindLevel = () => {
    // Instead of intro lesson, we can directly send them to placement test via LessonScreen
    navigation.navigate('Lesson', { lessonId: undefined, fromOnboarding: true, isPlacementTest: true });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('MainTabs' as any)} style={styles.backBtn}>
          <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>←</Text>
        </TouchableOpacity>
        <View style={[styles.progressBarBg, { backgroundColor: colors.surface }]}>
          <View style={[styles.progressBarFill, { backgroundColor: colors.primary, width: '100%' }]} />
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: opacityAnim, transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.mascotContainer}>
          <Mascot size={80} />
          <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.chatText, { color: colors.text }]}>Nereden başlamak istersin?</Text>
            <View style={[styles.chatBubbleTail, { borderTopColor: colors.surface }]} />
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]} 
          onPress={handleStartBeginner}
          activeOpacity={0.8}
        >
          <View style={styles.cardIconBox}>
            <Text style={{ fontSize: 36 }}>📒</Text>
          </View>
          <View style={styles.cardTextBox}>
            <Text style={[styles.cardTitle, { color: colors.info }]}>Sil baştan başla</Text>
            <Text style={[styles.cardDesc, { color: colors.textLight }]}>{langData.title} kursunun en kolay dersine gir</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border, marginTop: 15 }]} 
          onPress={handleFindLevel}
          activeOpacity={0.8}
        >
          <View style={[styles.badge, { backgroundColor: colors.info }]}>
            <Text style={styles.badgeText}>TAVSİYE EDİLEN</Text>
          </View>
          <View style={styles.cardIconBox}>
            <Text style={{ fontSize: 36 }}>🧭</Text>
          </View>
          <View style={styles.cardTextBox}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Seviyemi bul</Text>
            <Text style={[styles.cardDesc, { color: colors.textLight }]}>Öğrenmeye nereden başlaman gerektiğini bırak LinguaPlay önersin</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]} 
          onPress={handleStartBeginner}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    paddingBottom: 20,
  },
  backBtn: {
    marginRight: 15,
  },
  progressBarBg: {
    flex: 1,
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mascotContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  chatBubble: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    marginLeft: 15,
    position: 'relative',
  },
  chatText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  chatBubbleTail: {
    position: 'absolute',
    left: -12,
    top: 20,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
  },
  card: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  cardIconBox: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextBox: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  badge: {
    position: 'absolute',
    top: -12,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
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

export default PathSelectionScreen;
