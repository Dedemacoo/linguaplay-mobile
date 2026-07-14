import { Mascot } from '../components/Mascot';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const firebaseErrorToTurkish = (code: string): string => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi. Lütfen kontrol et.';
    case 'auth/user-disabled':
      return 'Bu hesap devre dışı bırakılmış.';
    case 'auth/user-not-found':
      return 'Bu e-posta ile kayıtlı bir hesap bulunamadı.';
    case 'auth/wrong-password':
      return 'Şifre yanlış. Tekrar dene veya şifreni sıfırla.';
    case 'auth/invalid-credential':
      return 'E-posta veya şifre hatalı. Lütfen kontrol et.';
    case 'auth/network-request-failed':
      return 'İnternet bağlantın yok. Lütfen kontrol et.';
    case 'auth/too-many-requests':
      return 'Çok fazla deneme yaptın. Biraz bekle ve tekrar dene.';
    default:
      return 'Giriş başarısız. Lütfen tekrar dene.';
  }
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colors = useThemeColors();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg('Tüm alanları doldurmalısın.');
      return;
    }
    try {
      setErrorMsg('');
      setIsLoading(true);
      await login(email, password);
      navigation.replace('Transition', { targetRoute: 'MainTabs', message: 'Öğrenmeye Dönülüyor...' });
    } catch (e: any) {
      const code = e?.code || '';
      setErrorMsg(firebaseErrorToTurkish(code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Mascot mascotId="classic" size={150} animationState='idle' animated style={{ marginBottom: 20, marginLeft: 15 }} />
          <Text style={[styles.title, { color: colors.text }]}>Hoş Geldin!</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>Giriş yaparak öğrenmeye devam et.</Text>
        </View>
        <View style={styles.form}>
          {errorMsg ? (
            <View style={[styles.errorBox, { backgroundColor: colors.error + '15', borderColor: colors.error + '40' }]}>
              <Text style={styles.errorIcon}>⚠️</Text>
              <Text style={[styles.errorText, { color: colors.error }]}>{errorMsg}</Text>
            </View>
          ) : null}

          <TextInput 
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="E-posta veya Kullanıcı Adı"
            placeholderTextColor={colors.textLight}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <View style={[styles.passwordContainer, { borderColor: colors.border }]}>
            <TextInput 
              style={[styles.passwordInput, { backgroundColor: colors.surface, color: colors.text }]}
              placeholder="Şifre"
              placeholderTextColor={colors.textLight}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={{ fontSize: 18, color: colors.textLight }}>{showPassword ? '👁️' : '🙈'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.forgotPasswordLink} 
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={[styles.forgotPasswordText, { color: colors.textLight }]}>Şifremi Unuttum</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ width: '100%', marginTop: 10 }}
            onPress={handleLogin}
            disabled={isLoading}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={isLoading ? [colors.border, colors.border] : [colors.primary, '#00B8CC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.button, { borderBottomColor: isLoading ? 'transparent' : '#00A3B5' }]}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={[styles.buttonText, { color: colors.white }]}>GİRİŞ YAP</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.registerLink} 
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={[styles.registerText, { color: colors.textLight }]}>Hesabın yok mu? </Text>
            <Text style={[styles.registerTextBold, { color: colors.info }]}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 15,
  },
  errorIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  errorText: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  input: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    borderBottomWidth: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -5,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '600',
  },
  registerLink: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  registerText: {
    fontSize: 16,
  },
  registerTextBold: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
