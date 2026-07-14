import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { Mascot } from '../components/Mascot';
import * as Haptics from 'expo-haptics';
import { NotificationService } from '../services/NotificationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'Reminder'>;

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
const minutes = ['00', '15', '30', '45'];

const ReminderScreen: React.FC<Props> = ({ navigation, route }) => {
  const colors = useThemeColors();
  const [reminderHour, setReminderHour] = useState('20');
  const [reminderMinute, setReminderMinute] = useState('00');

  const handleAllowNotifications = async () => {
    try {
      const granted = await NotificationService.requestPermissions();
      if (granted) {
        const hour = parseInt(reminderHour, 10);
        const minute = parseInt(reminderMinute, 10);
        await NotificationService.scheduleDailyReminder(hour, minute);
        Alert.alert(
          'Bildirimler Açıldı ✅',
          `Her gün saat ${reminderHour}:${reminderMinute}'de seni hatırlatacağız!`,
          [{ text: 'Harika!', onPress: handleNext }]
        );
      } else {
        Alert.alert(
          'Bildirim İzni Reddedildi',
          'Bildirimleri daha sonra Ayarlar > Bildirimler kısmından açabilirsin.',
          [{ text: 'Tamam', onPress: handleNext }]
        );
      }
    } catch (err) {
      console.warn('Notification setup error:', err);
      handleNext();
    }
  };

  const handleDenyNotifications = () => {
    handleNext();
  };

  const handleNext = async () => {
    try {
      await AsyncStorage.setItem('@reminder_time', `${reminderHour}:${reminderMinute}`);
    } catch (e) {}
    
    navigation.navigate('Register' as never);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ fontSize: 24, color: colors.textLight, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>←</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.mascotContainer}>
          <Mascot size={150} />
          <View style={[styles.chatBubble, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.chatText, { color: colors.text }]}>
              Sana her gün saat kaçta hatırlatıcı gönderelim?
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, gap: 20 }}>
          {/* Hour Selector */}
          <View style={styles.timeSelector}>
            <Text style={[styles.timeLabel, { color: colors.textLight }]}>Saat</Text>
            <ScrollView style={styles.timeScroll} showsVerticalScrollIndicator={false} snapToInterval={50} decelerationRate="fast">
              {hours.map((h) => (
                <TouchableOpacity key={h} onPress={() => { Haptics.selectionAsync(); setReminderHour(h); }} style={[styles.timeItem, reminderHour === h && { backgroundColor: colors.primary + '20' }]}>
                  <Text style={[styles.timeText, { color: reminderHour === h ? colors.primary : colors.text }]}>{h}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Text style={{ fontSize: 40, color: colors.text, fontWeight: 'bold' }}>:</Text>

          {/* Minute Selector */}
          <View style={styles.timeSelector}>
            <Text style={[styles.timeLabel, { color: colors.textLight }]}>Dakika</Text>
            <ScrollView style={styles.timeScroll} showsVerticalScrollIndicator={false} snapToInterval={50} decelerationRate="fast">
              {minutes.map((m) => (
                <TouchableOpacity key={m} onPress={() => { Haptics.selectionAsync(); setReminderMinute(m); }} style={[styles.timeItem, reminderMinute === m && { backgroundColor: colors.primary + '20' }]}>
                  <Text style={[styles.timeText, { color: reminderMinute === m ? colors.primary : colors.text }]}>{m}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.permBtn, { backgroundColor: colors.surface, borderBottomColor: colors.border }]} onPress={handleDenyNotifications}>
          <Text style={{ color: colors.textLight, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>ŞİMDİLİK GEÇ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.permBtn, { backgroundColor: colors.primary, borderBottomColor: colors.primaryDark }]} onPress={handleAllowNotifications}>
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>İZİN VER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 20 : 10 },
  backBtn: { padding: 5 },
  content: { flex: 1, paddingHorizontal: 20, justifyContent: 'center' },
  mascotContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  chatBubble: { flex: 1, borderWidth: 2, borderRadius: 15, padding: 15, marginLeft: 15 },
  chatText: { fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', lineHeight: 22 },
  timeSelector: { alignItems: 'center', height: 200 },
  timeLabel: { fontSize: 14, fontWeight: 'bold', marginBottom: 10, textTransform: 'uppercase' },
  timeScroll: { flex: 1, width: 80 },
  timeItem: { height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  timeText: { fontSize: 24, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  footer: { flexDirection: 'row', padding: 20, gap: 10 },
  permBtn: { flex: 1, paddingVertical: 18, borderRadius: 16, alignItems: 'center', borderBottomWidth: 4 },
});

export default ReminderScreen;
