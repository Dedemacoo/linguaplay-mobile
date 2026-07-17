import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function TwoFactorVerifyScreen() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { verify2FA, logout } = useAuth();

  const handleVerify = async () => {
    if (code.length !== 6) {
      Alert.alert('Hata', 'Lütfen 6 haneli doğrulama kodunu girin.');
      return;
    }
    
    setIsLoading(true);
    try {
      const isValid = await verify2FA(code);
      if (isValid) {
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Hata', 'Girdiğiniz kod hatalı. Lütfen tekrar deneyin.');
      }
    } catch (e: any) {
      Alert.alert('Hata', e.message || 'Kod doğrulanırken bir sorun oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    await logout();
    navigation.replace('Login');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={{ fontSize: 60, marginBottom: 15 }}>🔐</Text>
          <Text style={[styles.title, { color: colors.text }]}>İki Faktörlü Doğrulama</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>
            Hesabınızın güvenliği için lütfen e-postanıza (simülasyon) gönderilen 6 haneli kodu girin.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput 
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="6 Haneli Kod"
            placeholderTextColor={colors.textLight}
            value={code}
            onChangeText={(text) => setCode(text.replace(/[^0-9]/g, '').slice(0, 6))}
            keyboardType="number-pad"
            maxLength={6}
          />

          <TouchableOpacity 
            style={{ width: '100%', marginTop: 10 }}
            onPress={handleVerify}
            disabled={isLoading || code.length !== 6}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={isLoading || code.length !== 6 ? [colors.border, colors.border] : [colors.primary, '#00B8CC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.button, { borderBottomColor: isLoading || code.length !== 6 ? 'transparent' : '#00A3B5' }]}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={[styles.buttonText, { color: colors.white }]}>DOĞRULA</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelLink} onPress={handleCancel}>
            <Text style={[styles.cancelText, { color: colors.textLight }]}>İptal et ve Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
  },
  header: { alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 15, textAlign: 'center', lineHeight: 22 },
  form: { width: '100%', alignItems: 'center' },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 10,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  button: {
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    borderBottomWidth: 5,
  },
  buttonText: { fontSize: 18, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  cancelLink: { marginTop: 25, paddingBottom: 20 },
  cancelText: { fontSize: 16, fontWeight: '600' },
});
