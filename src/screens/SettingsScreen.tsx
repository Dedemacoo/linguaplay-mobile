import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert, Platform, StatusBar, Modal, FlatList } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useProgressStore } from '../store/useProgressStore';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import * as Haptics from 'expo-haptics';
const SettingsScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { themeMode, setThemeMode } = useTheme();

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // States for Reminder Time Modal
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [reminderTime, setReminderTime] = useState('20:00');
  const times = ['08:00', '12:00', '18:00', '20:00', '22:00'];

  useEffect(() => {
    AsyncStorage.getItem('@reminder_time').then(val => {
      if (val) setReminderTime(val);
    });
  }, []);

  const saveReminderTime = async (t: string) => {
    setReminderTime(t);
    await AsyncStorage.setItem('@reminder_time', t);
    setShowTimeModal(false);
  };

  const showComingSoon = () => Alert.alert("Yakında", "Bu özellik yakında eklenecek!");

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['system', 'light', 'dark'];
    const nextIndex = (modes.indexOf(themeMode) + 1) % modes.length;
    setThemeMode(modes[nextIndex]);
  };

  const getThemeLabel = (mode: ThemeMode) => {
    switch (mode) {
      case 'system': return 'Sistem';
      case 'light': return 'Açık';
      case 'dark': return 'Koyu';
    }
  };

  const renderItem = (title: string, icon: string, onPress: () => void, rightElement?: React.ReactNode) => (
    <TouchableOpacity 
      style={[styles.item, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}
      onPress={onPress}
      activeOpacity={rightElement ? 1 : 0.7}
    >
      <View style={styles.itemLeft}>
        <Text style={styles.itemIcon}>{icon}</Text>
        <Text style={[styles.itemTitle, { color: colors.text }]}>{title}</Text>
      </View>
      <View style={styles.itemRight}>
        {rightElement || <Text style={[styles.chevron, { color: colors.textLight }]}>›</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ fontSize: 28, color: colors.text }}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Ayarlar</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>BİLDİRİMLER</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Hatırlatıcı Saati', '⏰', () => setShowTimeModal(true), <Text style={[styles.valueText, { color: colors.textLight }]}>{reminderTime}</Text>)}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>HESAP</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Profil Düzenle', '👤', () => navigation.navigate('EditProfile'))}
          {renderItem('Şifre Değiştir', '🔒', () => navigation.navigate('ChangePassword'))}
          {renderItem('E-posta Değiştir', '📧', () => navigation.navigate('EditProfile'))}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>TERCİHLER</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem(
            'Karanlık Mod', 
            '🌙', 
            cycleTheme,
            <Text style={[styles.valueText, { color: colors.primary }]}>{getThemeLabel(themeMode)}</Text>
          )}
          {renderItem(
            'Ses Efektleri', 
            '🔊', 
            () => setSoundEnabled(!soundEnabled),
            <Switch value={soundEnabled} onValueChange={setSoundEnabled} trackColor={{ true: colors.primary }} />
          )}
          {renderItem(
            'Bildirimler', 
            '🔔', 
            () => setNotificationsEnabled(!notificationsEnabled),
            <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} trackColor={{ true: colors.primary }} />
          )}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>DESTEK</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Yardım Merkezi', '❓', () => navigation.navigate('Feedback'))}
          {renderItem('Geri Bildirim Gönder', '💬', () => navigation.navigate('Feedback'))}
          {renderItem('Gizlilik Politikası', '📋', () => navigation.navigate('Legal', { type: 'privacy' }))}
          {renderItem('Kullanım Koşulları', '📄', () => navigation.navigate('Legal', { type: 'terms' }))}
        </View>
        <Text style={[styles.versionText, { color: colors.textLight }]}>LinguaPlay+ v1.0.0</Text>
      </ScrollView>

      {/* Time Modal */}
      <Modal visible={showTimeModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Hatırlatıcı Saati</Text>
            {times.map((t) => (
              <TouchableOpacity 
                key={t} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => { setReminderTime(t); setShowTimeModal(false); }}
              >
                <Text style={[styles.modalOptionText, { color: t === reminderTime ? colors.primary : colors.text }]}>
                  {t}
                </Text>
                {t === reminderTime && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowTimeModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 50,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  backBtn: {
    padding: 5,
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  content: {
    padding: 20,
    paddingBottom: 50,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1.5,
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 15,
  },
  sectionGroup: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    fontSize: 22,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  logoutBtn: {
    marginTop: 30,
    padding: 18,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  modalCancel: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default SettingsScreen;
