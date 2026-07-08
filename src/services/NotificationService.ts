import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REMINDER_KEY = '@lingua_reminder';

// Configure how notifications appear when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Flörtöz ve çeşitli yunus temalı günlük bildirim mesajları
const REMINDER_MESSAGES = [
  { title: 'Seni bekliyorum... 🐬💕', body: 'Bugün hiç görüşmedik. Sensiz kelimeler çok anlamsız, hadi gel!' },
  { title: 'Beni unutmadın değil mi? 🐬🥺', body: 'Gözüm yollarda kaldı. Sadece 5 dakikanı bana ayırır mısın?' },
  { title: 'Denizler kadar derin bir aşkla! 🐬✨', body: 'Bugün yeni kelimelere dalış yapmaya hazır mısın kaptan?' },
  { title: 'Sonsuzluğa yüzelim mi? 🐬🥰', body: 'Günün dersi seni bekliyor, birlikte akıntıya kapılalım!' },
  { title: 'Seni çok özledim! 🐬💋', body: 'Sen yokken buralar çok sessiz. Hadi, uygulamaya gel!' },
  { title: 'Hey yakışıklı/güzel! 🐬😏', body: 'Bugün harika görünüyorsun. Bunu bir dil dersiyle taçlandıralım mı?' },
  { title: 'Biraz oyun oynayalım mı? 🐬😘', body: 'Sadece 5 dakikalığına gel, pişman olmayacaksın...' },
  { title: 'Bugün nasılsın? 🐬💖', body: 'Seni düşünmeden duramadım. Günlük dersini tamamlayıp beni mutlu eder misin?' },
  { title: 'Hadi, naz yapma! 🐬😉', body: 'Biliyorum sen de beni görmek istiyorsun. Öğrenme zamanı!' },
  { title: 'Yüzgeçlerim sana doğru çırpıyor! 🐬💨', body: 'O kadar heyecanlıyım ki! Bugün de harika işler çıkaracaksın.' },
  { title: 'Sensiz bir okyanus gibiyim... 🐬🌊', body: 'Boş ve derin... Sadece sen geldiğinde anlam buluyorum.' },
  { title: 'Aşkla öğrenmeye devam! 🐬💘', body: 'Beni bu kadar bekletme, kelimelerimiz soğumasın!' },
  { title: 'Gülüşün gibi parlak bir ders! 🐬😁', body: 'Hemen gelip günümü güzelleştirir misin?' },
  { title: 'Kalbimin ritmini hızlandırıyorsun! 🐬💓', body: 'Sen ders yaparken ben burada mutluluktan uçuyorum.' }
];

// Flörtöz ve sitemkar yunus temalı hareketsizlik mesajları
const INACTIVITY_MESSAGES = [
  { title: 'Beni terk mi ediyorsun? 🐬😭', body: 'Dersi yarıda bıraktın. Lütfen beni burada yalnız bırakma!' },
  { title: 'Nereye gittin? 🐬🥺', body: 'O kadar güzel ilerliyorduk ki... Geri dön ve beni kurtar!' },
  { title: 'Çok darıldım! 🐬😠', body: 'Serimiz bozulursa seninle bir daha konuşmam. Çabuk gel!' },
  { title: 'Yüzgeçlerim kurudu! 🐬🥀', body: 'Sensiz buralar çok ıssız. Lütfen 5 dakikanı bana ayır...' },
];

export class NotificationService {

  static async requestPermissions(): Promise<boolean> {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return false;
    }

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('reminders', {
        name: 'Ders Hatırlatıcıları',
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#00D2FF',
        sound: 'default',
      });
    }

    return true;
  }

  static async scheduleDailyReminder(hour: number, minute: number): Promise<void> {
    await this.cancelAllScheduled();

    // 14 gün boyunca her güne farklı bir flörtöz yunus mesajı kur
    for (let i = 0; i < 14; i++) {
      const msg = REMINDER_MESSAGES[i % REMINDER_MESSAGES.length]; // Sırayla al, böylece hep farklı olur
      
      const triggerDate = new Date();
      triggerDate.setDate(triggerDate.getDate() + i);
      triggerDate.setHours(hour, minute, 0, 0);

      // Eğer bugünün saati geçmişse bugünü atla
      if (i === 0 && triggerDate.getTime() <= Date.now()) continue;

      await Notifications.scheduleNotificationAsync({
        content: {
          title: msg.title,
          body: msg.body,
          sound: 'default',
          data: { type: 'daily_reminder' },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
          year: triggerDate.getFullYear(),
          month: triggerDate.getMonth() + 1,
          day: triggerDate.getDate(),
          hour: hour,
          minute: minute,
        },
      });

      // 15 dakika öncesi "Pre-reminder"
      const preDate = new Date(triggerDate.getTime() - 15 * 60000);
      if (preDate.getTime() > Date.now()) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Süsleniyorum... 🐬💄',
            body: `Birazdan ders zamanı! ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}'de seni bekliyorum.`,
            sound: 'default',
            data: { type: 'pre_reminder' },
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
            year: preDate.getFullYear(),
            month: preDate.getMonth() + 1,
            day: preDate.getDate(),
            hour: preDate.getHours(),
            minute: preDate.getMinutes(),
          },
        });
      }

      // 2 saat sonrası "Inactivity Nudge"
      const nudgeDate = new Date(triggerDate.getTime() + 2 * 3600000);
      const nudgeMsg = INACTIVITY_MESSAGES[Math.floor(Math.random() * INACTIVITY_MESSAGES.length)];
      if (nudgeDate.getTime() > Date.now()) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: nudgeMsg.title,
            body: nudgeMsg.body,
            sound: 'default',
            data: { type: 'inactivity_nudge' },
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
            year: nudgeDate.getFullYear(),
            month: nudgeDate.getMonth() + 1,
            day: nudgeDate.getDate(),
            hour: nudgeDate.getHours(),
            minute: nudgeDate.getMinutes(),
          },
        });
      }
    }

    await AsyncStorage.setItem(REMINDER_KEY, JSON.stringify({ hour, minute }));
  }

  static async cancelAllScheduled(): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  static async getSavedReminder(): Promise<{ hour: number; minute: number } | null> {
    try {
      const saved = await AsyncStorage.getItem(REMINDER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  static async hasPermission(): Promise<boolean> {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
  }
}
