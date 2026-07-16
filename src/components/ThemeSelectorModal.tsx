import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useThemeColors, THEMES } from '../theme/colors';
import { useTheme } from '../context/ThemeContext';
import { useProgressStore } from '../store/useProgressStore';
import { Mascot } from './Mascot';

interface ThemeSelectorModalProps {
  visible: boolean;
  onClose: () => void;
}

const themeMascots: Record<string, string> = {
  classic: 'classic',
  cyberpunk: 'cyber',
  ocean: 'pirate',
  crimson: 'fire',
  forest: 'explorer'
};

const themeNames: Record<string, string> = {
  classic: 'Lingo Klasik',
  cyberpunk: 'Siberpunk',
  ocean: 'Karanlık Okyanus',
  crimson: 'Kızıl Şafak',
  forest: 'Gece Ormanı'
};

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({ visible, onClose }) => {
  const colors = useThemeColors();
  const { activeTheme, setActiveTheme } = useTheme();
  const { progress, equipMascot, unlockMascot } = useProgressStore();
  const [slideAnim] = useState(new Animated.Value(300));
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 8,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 500,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [visible]);

  const handleSelectTheme = (themeKey: string) => {
    const isUnlocked = progress.unlockedThemes?.includes(themeKey) || themeKey === 'classic';
    if (!isUnlocked) return; // Normally show alert, but we unlocked all for testing

    setActiveTheme(themeKey);
    const mascotForTheme = themeMascots[themeKey];
    
    // Automatically equip and unlock the matching mascot if they don't have it equipped or unlocked
    if (mascotForTheme && mascotForTheme !== progress.equippedMascot) {
      if (!progress.unlockedMascots.includes(mascotForTheme)) {
        unlockMascot(mascotForTheme);
      }
      equipMascot(mascotForTheme);
    }
    
    setTimeout(() => onClose(), 250);
  };

  if (!visible && slideAnim.applyAsValue === 500) return null;

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={onClose} />
        
        <Animated.View style={[styles.sheet, { backgroundColor: colors.surface, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>Temalarım</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Feather name="x" size={24} color={colors.textLight} />
            </TouchableOpacity>
          </View>
          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {Object.keys(THEMES).map((key) => {
              const themeData = THEMES[key as keyof typeof THEMES];
              const isUnlocked = progress.unlockedThemes?.includes(key) || key === 'classic';
              const isActive = activeTheme === key;

              return (
                <TouchableOpacity
                  key={key}
                  activeOpacity={0.8}
                  onPress={() => handleSelectTheme(key)}
                  style={[
                    styles.themeCard,
                    { borderColor: isActive ? colors.primary : colors.border, backgroundColor: themeData.card }
                  ]}
                >
                  <LinearGradient
                    colors={[themeData.surface, themeData.bg]}
                    style={StyleSheet.absoluteFill}
                    start={{x:0, y:0}} end={{x:1, y:1}}
                  />
                  <View style={styles.themeInfo}>
                    <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: themeData.primary, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                       <Mascot mascotId={themeMascots[key]} size={30} animated={false} />
                    </View>
                    <View>
                      <Text style={[styles.themeName, { color: '#FFFFFF' }]}>{themeNames[key]}</Text>
                      {isActive && <Text style={[styles.activeText, { color: themeData.primary }]}>Şu an Kullanılıyor</Text>}
                      {!isUnlocked && <Text style={styles.lockedText}>Kilitli</Text>}
                    </View>
                  </View>
                  
                  {isActive && <Feather name="check-circle" size={24} color={themeData.primary} />}
                  {!isUnlocked && <Feather name="lock" size={20} color="#5A6A88" />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeBtn: {
    padding: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  themeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 2,
    overflow: 'hidden',
  },
  themeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  themeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  activeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  lockedText: {
    fontSize: 12,
    color: '#5A6A88',
  }
});
