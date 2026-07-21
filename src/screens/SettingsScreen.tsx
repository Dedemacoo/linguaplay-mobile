import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert, Platform, StatusBar, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationService } from '../services/NotificationService';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useLanguageStore, LanguageKey } from '../store/useLanguageStore';
import { FontAwesome5 } from '@expo/vector-icons';

const LANG_LABELS: Record<LanguageKey, string> = {
  kurdish: 'Kürtçe', turkish: 'Türkçe', english: 'İngilizce', french: 'Fransızca',
  spanish: 'İspanyolca', german: 'Almanca', italian: 'İtalyanca', japanese: 'Japonca',
  korean: 'Korece', russian: 'Rusça', chinese: 'Çince', arabic: 'Arapça',
  portuguese: 'Portekizce', dutch: 'Felemenkçe'
};

import { useLingoStore, AIPersonality, AIExpressionStyle, VoiceType } from '../store/useLingoStore';
import { useAuth } from '../context/AuthContext';
import { useProgressStore } from '../store/useProgressStore';
import { usePreferencesStore } from '../store/usePreferencesStore';

const PERSONALITY_LABELS: Record<AIPersonality, string> = {
  friendly: 'Dostane', strict: 'Disiplinli', funny: 'Eğlenceli', academic: 'Akademik'
};

const EXPRESSION_LABELS: Record<AIExpressionStyle, string> = {
  casual: 'Günlük', formal: 'Resmi', encouraging: 'Cesaretlendirici'
};

const VOICE_LABELS: Record<VoiceType, string> = {
  male_1: 'Erkek 1 (Kalın)', male_2: 'Erkek 2 (Genç)', female_1: 'Kadın 1 (İnce)', female_2: 'Kadın 2 (Olgun)'
};

const SettingsScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { themeMode, setThemeMode } = useTheme();
  const { activeLanguage, setActiveLanguage } = useLanguageStore();
  const { personality, expressionStyle, voice, assistantVoice, setPersonality, setExpressionStyle, setVoice, setAssistantVoice } = useLingoStore();
  const { user, deleteAccount, logout, reauthenticateAndDelete, sendVerificationEmail, reloadUser } = useAuth();
  const { progress } = useProgressStore();
  const { soundEnabled, setSoundEnabled, notificationsEnabled, setNotificationsEnabled, appLanguage, setAppLanguage, dailyGoal, setDailyGoal, reminderTime, setReminderTime } = usePreferencesStore();

  // States for Re-authentication Modal
  const [showReauthModal, setShowReauthModal] = useState(false);
  const [password, setPassword] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // States for Email Verification
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);

  // States for Reminder Time Modal
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  // Goal Modal State
  const [showGoalModal, setShowGoalModal] = useState(false);
  const goals = [50, 100, 250, 500, 1000];

  // States for Language Modal
  const [showLangModal, setShowLangModal] = useState(false);
  const availableLangs: LanguageKey[] = ['english', 'kurdish', 'spanish', 'french', 'german', 'turkish'];

  // States for Lingo Modals
  const [showPersonalityModal, setShowPersonalityModal] = useState(false);
  const [showExpressionModal, setShowExpressionModal] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showAssistantVoiceModal, setShowAssistantVoiceModal] = useState(false);
  const personalities: AIPersonality[] = ['friendly', 'strict', 'funny', 'academic'];
  const expressions: AIExpressionStyle[] = ['casual', 'formal', 'encouraging'];
  const voices: VoiceType[] = ['male_1', 'male_2', 'female_1', 'female_2'];

  const saveReminderTime = async (t: string) => {
    setReminderTime(t);
    const [h, m] = t.split(':').map(Number);
    await NotificationService.scheduleDailyReminder(h, m);
  };

  const handleOpenTimePicker = () => {
    const [h, m] = reminderTime.split(':').map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    setDateValue(d);
    setShowTimeModal(true);
  };

  const onChangeTime = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowTimeModal(false);
    }
    if (selectedDate) {
      setDateValue(selectedDate);
      if (event.type === 'set' || Platform.OS === 'ios') {
        const h = selectedDate.getHours();
        const m = selectedDate.getMinutes();
        const t = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        saveReminderTime(t);
      }
    }
  };

  const saveDailyGoal = async (g: number) => {
    setDailyGoal(g);
    setShowGoalModal(false);
  };

  const showComingSoon = () => Alert.alert("Yakında", "Bu özellik yakında eklenecek!");

  const handleLogoutAll = () => {
    Alert.alert(
      "Tüm Cihazlardan Çıkış",
      "Bütün oturumlarınızı kapatmak istediğinize emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        { 
          text: "Çıkış Yap", 
          style: "destructive",
          onPress: async () => {
            await logout();
            navigation.replace('Transition', { targetRoute: 'Login', message: 'Çıkış Yapılıyor...' })
          }
        }
      ]
    );
  };

  const handleDeleteAccount = () => {
    setPassword('');
    setShowReauthModal(true);
  };

  const confirmDeleteAccount = async () => {
    if (!password.trim()) {
      Alert.alert("Hata", "Lütfen şifrenizi girin.");
      return;
    }
    
    setIsDeleting(true);
    try {
      await reauthenticateAndDelete(password);
      setShowReauthModal(false);
      navigation.replace('Transition', { targetRoute: 'Login', message: 'Hesap Silindi...' });
    } catch (error: any) {
      if (error?.code === 'auth/wrong-password' || error?.code === 'auth/invalid-credential') {
        Alert.alert("Hata", "Girdiğiniz şifre hatalı.");
      } else {
        Alert.alert("Hata", "Hesap silinirken bir sorun oluştu.");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSendVerificationEmail = async () => {
    if (user?.emailVerified) {
      Alert.alert("Bilgi", "E-posta adresiniz zaten doğrulanmış.");
      return;
    }
    
    setIsVerifyingEmail(true);
    try {
      await sendVerificationEmail();
      Alert.alert("Başarılı", "Doğrulama e-postası gönderildi. Lütfen e-postanızı kontrol edin.");
    } catch (error: any) {
      if (error?.code === 'auth/too-many-requests') {
         Alert.alert("Hata", "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin.");
      } else {
         Alert.alert("Hata", "Doğrulama e-postası gönderilirken bir hata oluştu.");
      }
    } finally {
      setIsVerifyingEmail(false);
    }
  };

  const checkEmailVerification = async () => {
    await reloadUser();
    if (user?.emailVerified) {
       Alert.alert("Başarılı", "E-posta adresiniz doğrulandı!");
    } else {
       Alert.alert("Bilgi", "E-posta adresiniz henüz doğrulanmamış. Lütfen e-postanızı kontrol edin.");
    }
  };

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['system', 'light', 'dark'];
    const nextIndex = (modes.indexOf(themeMode) + 1) % modes.length;
    setThemeMode(modes[nextIndex]);
  };

  const getThemeLabel = (mode: ThemeMode) => {
    switch (mode) {
      case 'system': return 'Otomatik';
      case 'light': return 'Açık';
      case 'dark': return 'Karanlık';
    }
  };

  const renderItem = (title: string, icon: string, onPress: () => void, rightElement?: React.ReactNode, isDestructive?: boolean) => (
    <TouchableOpacity 
      style={[styles.item, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}
      onPress={onPress}
      activeOpacity={rightElement ? 1 : 0.7}
    >
      <View style={styles.itemLeft}>
        <Text style={styles.itemIcon}>{icon}</Text>
        <Text style={[styles.itemTitle, { color: isDestructive ? colors.error : colors.text }]}>{title}</Text>
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

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* ── BİLDİRİMLER VE HEDEFLER ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>BİLDİRİMLER & HEDEFLER</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Hatırlatıcı Saati', '⏰', handleOpenTimePicker, <Text style={[styles.valueText, { color: colors.textLight }]}>{reminderTime}</Text>)}
          {renderItem('Günlük XP Hedefi', '🎯', () => setShowGoalModal(true), <Text style={[styles.valueText, { color: colors.primary }]}>{dailyGoal} XP</Text>)}
        </View>

        {/* ── TERCİHLER ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>TERCİHLER</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Uygulama Dili', '🌍', () => setShowLangModal(true), <Text style={[styles.valueText, { color: colors.textLight }]}>{LANG_LABELS[appLanguage]}</Text>)}
          {renderItem('Tema', '🎨', cycleTheme, <Text style={[styles.valueText, { color: colors.primary }]}>{getThemeLabel(themeMode)}</Text>)}
          {renderItem('Ses Efektleri', '🔊', () => setSoundEnabled(!soundEnabled), <Switch value={soundEnabled} onValueChange={setSoundEnabled} trackColor={{ true: colors.primary }} />)}
          {renderItem('Bildirimler', '🔔', () => setNotificationsEnabled(!notificationsEnabled), <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} trackColor={{ true: colors.primary }} />)}
        </View>

        {/* ── LINGUAPLAY ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>✨ LINGUAPLAY</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {progress.isPremium ? (
            renderItem('Premium Avantajları', '👑', () => navigation.navigate('Premium'))
          ) : (
            <>
              {renderItem('Premium Abonelik', '💎', () => navigation.navigate('Premium'))}
              {renderItem('Satın Alımları Geri Yükle', '🔄', () => navigation.navigate('Premium'))}
              {renderItem('Premium Avantajları', '⭐', () => navigation.navigate('Premium'))}
            </>
          )}
        </View>

        {/* ── LINGO AYARLARI ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>🐬 LINGO AYARLARI</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Kişilik', '🧠', () => setShowPersonalityModal(true), <Text style={[styles.valueText, { color: colors.primary }]}>{PERSONALITY_LABELS[personality]}</Text>)}
          {renderItem('Ses', '🎙️', () => setShowVoiceModal(true), <Text style={[styles.valueText, { color: colors.primary }]}>{VOICE_LABELS[voice]}</Text>)}
        </View>

        {/* ── HESAP & GÜVENLİK ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>🔒 HESAP & GÜVENLİK</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Profil ve E-posta', '👤', () => navigation.navigate('EditProfile'))}
          {renderItem('Şifre Değiştir', '🔒', () => navigation.navigate('ChangePassword'))}
          {renderItem('E-posta Doğrulaması', user?.emailVerified ? '✅' : '✉️', user?.emailVerified ? checkEmailVerification : handleSendVerificationEmail, <Text style={[styles.valueText, { color: user?.emailVerified ? colors.success || '#4CAF50' : colors.textLight }]}>{user?.emailVerified ? 'Doğrulandı' : (isVerifyingEmail ? 'Gönderiliyor...' : 'Doğrula')}</Text>)}
          {renderItem('Güvenlik ve Cihazlar', '🛡️', () => {
             if (!user?.emailVerified) {
               Alert.alert("Hata", "Güvenlik ayarlarına erişmek için önce e-posta adresinizi doğrulamalısınız.");
               return;
             }
             navigation.navigate('Security');
          })}
          {renderItem('Tüm Cihazlardan Çıkış Yap', '🚪', handleLogoutAll)}
          {renderItem('Hesabı Sil', '🗑️', handleDeleteAccount, undefined, true)}
        </View>

        {/* ── HAKKINDA & DESTEK ── */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>ℹ️ HAKKINDA & DESTEK</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {renderItem('Yardım Merkezi', '❓', () => navigation.navigate('Feedback'))}
          {renderItem('Geri Bildirim Gönder', '💬', () => navigation.navigate('Feedback'))}
          {renderItem('Uygulamayı Değerlendir', '⭐', showComingSoon)}
          {renderItem('Gizlilik Politikası', '📄', () => navigation.navigate('Legal', { type: 'privacy' }))}
          {renderItem('Kullanım Koşulları', '📜', () => navigation.navigate('Legal', { type: 'terms' }))}
          {renderItem('Açık Kaynak Lisansları', '🔓', () => navigation.navigate('OpenSource'))}
          {renderItem('Sürüm', '📱', () => {}, <Text style={[styles.valueText, { color: colors.textLight }]}>1.0.0 (Build 1)</Text>)}
        </View>

        <Text style={[styles.versionText, { color: colors.textLight }]}>LinguaPlay v1.0.0</Text>
      </ScrollView>

      {/* Time Picker (iOS Modal) */}
      {Platform.OS === 'ios' && showTimeModal && (
        <Modal visible transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>Saat Seç</Text>
              <DateTimePicker
                value={dateValue}
                mode="time"
                display="spinner"
                textColor={colors.text}
                onChange={onChangeTime}
              />
              <TouchableOpacity style={styles.modalCancel} onPress={() => setShowTimeModal(false)}>
                <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>Tamam</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Time Picker (Android native) */}
      {Platform.OS === 'android' && showTimeModal && (
        <DateTimePicker
          value={dateValue}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      {/* Goal Modal */}
      <Modal visible={showGoalModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Günlük XP Hedefi</Text>
            {goals.map((g) => (
              <TouchableOpacity 
                key={g} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => saveDailyGoal(g)}
              >
                <Text style={[styles.modalOptionText, { color: g === dailyGoal ? colors.primary : colors.text }]}>
                  {g} XP
                </Text>
                {g === dailyGoal && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowGoalModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Language Selection Modal */}
      <Modal visible={showLangModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Uygulama Dili</Text>
            <ScrollView style={{ maxHeight: 300, width: '100%' }}>
              {(Object.keys(LANG_LABELS) as LanguageKey[]).map((lang) => (
                <TouchableOpacity 
                  key={lang} 
                  style={[styles.modalOption, { borderBottomColor: colors.border }]}
                  onPress={() => {
                    setAppLanguage(lang);
                    setShowLangModal(false);
                  }}
                >
                  <Text style={[styles.modalOptionText, { color: lang === appLanguage ? colors.primary : colors.text }]}>
                    {LANG_LABELS[lang]}
                  </Text>
                  {lang === appLanguage && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowLangModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Personality Modal */}
      <Modal visible={showPersonalityModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Lingo'nun Kişiliği</Text>
            {personalities.map((p) => (
              <TouchableOpacity 
                key={p} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => {
                  setPersonality(p);
                  setShowPersonalityModal(false);
                }}
              >
                <Text style={[styles.modalOptionText, { color: p === personality ? colors.primary : colors.text }]}>
                  {PERSONALITY_LABELS[p]}
                </Text>
                {p === personality && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowPersonalityModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Expression Modal */}
      <Modal visible={showExpressionModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>İfade Tarzı</Text>
            {expressions.map((e) => (
              <TouchableOpacity 
                key={e} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => {
                  setExpressionStyle(e);
                  setShowExpressionModal(false);
                }}
              >
                <Text style={[styles.modalOptionText, { color: e === expressionStyle ? colors.primary : colors.text }]}>
                  {EXPRESSION_LABELS[e]}
                </Text>
                {e === expressionStyle && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowExpressionModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Voice Modal */}
      <Modal visible={showVoiceModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Lingo Sesi</Text>
            {voices.map((v) => (
              <TouchableOpacity 
                key={v} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => {
                  setVoice(v);
                  setShowVoiceModal(false);
                }}
              >
                <Text style={[styles.modalOptionText, { color: v === voice ? colors.primary : colors.text }]}>
                  {VOICE_LABELS[v]}
                </Text>
                {v === voice && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowVoiceModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Assistant Voice Modal */}
      <Modal visible={showAssistantVoiceModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Asistan Sesi</Text>
            {voices.map((v) => (
              <TouchableOpacity 
                key={v} 
                style={[styles.modalOption, { borderBottomColor: colors.border }]}
                onPress={() => {
                  setAssistantVoice(v);
                  setShowAssistantVoiceModal(false);
                }}
              >
                <Text style={[styles.modalOptionText, { color: v === assistantVoice ? colors.primary : colors.text }]}>
                  {VOICE_LABELS[v]}
                </Text>
                {v === assistantVoice && <Text style={{ color: colors.primary, fontSize: 18 }}>✓</Text>}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setShowAssistantVoiceModal(false)}>
              <Text style={{ color: colors.textLight, fontSize: 16 }}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Re-authentication Modal */}
      <Modal visible={showReauthModal} animationType="fade" transparent={true}>
        <KeyboardAvoidingView 
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={{
            width: '85%',
            backgroundColor: colors.surface,
            borderRadius: 20,
            padding: 24,
            borderWidth: 2,
            borderColor: '#FF3B30',
            shadowColor: '#FF3B30',
            shadowOpacity: 0.4,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 4 },
            elevation: 10,
          }}>
            {/* Warning Icon */}
            <View style={{ alignItems: 'center', marginBottom: 16 }}>
              <View style={{
                width: 60, height: 60, borderRadius: 30,
                backgroundColor: '#FF3B3015',
                justifyContent: 'center', alignItems: 'center',
              }}>
                <FontAwesome5 name="exclamation-triangle" size={28} color="#FF3B30" />
              </View>
            </View>

            {/* Title */}
            <Text style={{
              fontSize: 20, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
              color: '#FF3B30', textAlign: 'center', marginBottom: 8,
            }}>
              Hesabını Silmek İstediğine Emin Misin?
            </Text>

            {/* Warning Text */}
            <Text style={{
              fontSize: 14, color: colors.textLight, textAlign: 'center',
              marginBottom: 20, lineHeight: 20,
            }}>
              Tüm ilerlemen, XP'lerin, elmasların ve başarıların kalıcı olarak silinecek. Bu işlem geri alınamaz.
            </Text>

            {/* Password Input */}
            <TextInput
              style={{
                backgroundColor: colors.background,
                color: colors.text,
                borderColor: '#FF3B3050',
                borderWidth: 1,
                borderRadius: 12,
                padding: 14,
                fontSize: 16,
                marginBottom: 16,
              }}
              placeholder="Şifreni gir"
              placeholderTextColor={colors.textLight}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* Delete Button */}
            <TouchableOpacity 
              style={{
                backgroundColor: '#FF3B30',
                borderRadius: 12,
                padding: 16,
                alignItems: 'center',
                marginBottom: 10,
                opacity: isDeleting ? 0.7 : 1,
              }}
              onPress={confirmDeleteAccount}
              disabled={isDeleting}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>
                {isDeleting ? 'Siliniyor...' : '🗑️ Hesabı Kalıcı Olarak Sil'}
              </Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity 
              style={{
                borderRadius: 12,
                padding: 14,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.border,
              }}
              onPress={() => setShowReauthModal(false)}
            >
              <Text style={{ color: colors.text, fontSize: 15, fontWeight: '600' }}>
                Vazgeç
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    borderRadius: 18,
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
    fontSize: 22,
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
    fontSize: 15,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '600'
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
