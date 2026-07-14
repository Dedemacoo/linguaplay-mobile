import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Hata', 'Yeni şifre en az 6 karakter olmalıdır.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Hata', 'Yeni şifreler eşleşmiyor.');
      return;
    }

    setIsSaving(true);

    // Simulate saving to DB
    setTimeout(() => {
      setIsSaving(false);
      Alert.alert('Başarılı', 'Şifreniz başarıyla güncellendi.', [
        { text: 'Tamam', onPress: () => navigation.goBack() }
      ]);
    }, 1000);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={{ fontSize: 28, color: '#FFF' }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Şifre Değiştir</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          <Text style={[styles.infoText, { color: colors.textLight }]}>
            Hesabınızın güvenliği için lütfen güçlü bir şifre seçin.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>MEVCUT ŞİFRE</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                secureTextEntry={!showCurrent}
                placeholderTextColor={colors.textLight}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowCurrent(!showCurrent)}>
                <Text style={{ fontSize: 18 }}>{showCurrent ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>YENİ ŞİFRE</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showNew}
                placeholderTextColor={colors.textLight}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowNew(!showNew)}>
                <Text style={{ fontSize: 18 }}>{showNew ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>YENİ ŞİFRE (TEKRAR)</Text>
            <View style={[styles.passwordContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <TextInput
                style={[styles.passwordInput, { color: colors.text }]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirm}
                placeholderTextColor={colors.textLight}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirm(!showConfirm)}>
                <Text style={{ fontSize: 18 }}>{showConfirm ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }} />

          <TouchableOpacity
            style={[
              styles.saveBtn,
              { 
                backgroundColor: isSaving ? colors.border : colors.primary,
                borderBottomColor: isSaving ? colors.border : colors.primaryDark 
              }
            ]}
            onPress={handleSave}
            disabled={isSaving}
          >
            <Text style={[styles.saveBtnText, isSaving && { color: colors.textLight }]}>
              {isSaving ? 'GÜNCELLENİYOR...' : 'ŞİFREYİ GÜNCELLE'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'space-between',
    padding: 15,
  },
  backBtn: {
    padding: 5,
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 30,
    lineHeight: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  saveBtn: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    marginBottom: 20,
  },
  saveBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  eyeIcon: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChangePasswordScreen;
