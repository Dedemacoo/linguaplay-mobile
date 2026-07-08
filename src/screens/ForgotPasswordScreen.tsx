import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReset = () => {
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Hata', 'Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('E-posta Gönderildi', 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.', [
        { text: 'Tamam', onPress: () => navigation.goBack() }
      ]);
    }, 1500);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={{ fontSize: 28, color: '#FFF' }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Şifremi Unuttum</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          <Text style={[styles.title, { color: colors.text }]}>Şifreni mi unuttun?</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>
            Endişelenme! Hesabına kayıtlı e-posta adresini gir, sana şifreni sıfırlaman için bir bağlantı gönderelim.
          </Text>

          <TextInput 
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="E-posta Adresi"
            placeholderTextColor={colors.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity 
            style={[
              styles.button, 
              { 
                backgroundColor: isSubmitting ? colors.border : colors.primary, 
                borderBottomColor: isSubmitting ? colors.border : colors.primaryDark 
              }
            ]} 
            onPress={handleReset}
            disabled={isSubmitting}
          >
            <Text style={[styles.buttonText, isSubmitting && { color: colors.textLight }]}>
              {isSubmitting ? 'GÖNDERİLİYOR...' : 'BAĞLANTI GÖNDER'}
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
    padding: 30,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    borderBottomWidth: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
  },
});

export default ForgotPasswordScreen;
