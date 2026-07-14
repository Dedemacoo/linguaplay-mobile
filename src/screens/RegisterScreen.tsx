import { Mascot } from '../components/Mascot';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const firebaseErrorToTurkish = (code: string): string => {
  switch (code) {
    case 'auth/username-already-in-use':
      return 'Bu kullanıcı adı daha önce alınmış. Lütfen başka bir tane dene.';
    case 'auth/email-already-in-use':
      return 'Bu e-posta adresi zaten kayıtlı. Giriş yapmayı dene!';
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi. Lütfen kontrol et.';
    case 'auth/weak-password':
      return 'Şifre çok zayıf. En az 6 karakter olmalı.';
    case 'auth/network-request-failed':
      return 'İnternet bağlantın yok. Lütfen kontrol et.';
    case 'auth/too-many-requests':
      return 'Çok fazla deneme yaptın. Biraz bekle ve tekrar dene.';
    case 'auth/operation-not-allowed':
      return 'Bu giriş yöntemi şu anda devre dışı.';
    default:
      return 'Bir hata oluştu. Lütfen tekrar dene.';
  }
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | 'other' | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colors = useThemeColors();
  const { register } = useAuth();

  const getPasswordStrength = (pass: string) => {
    if (!pass) return null;
    let score = 0;
    if (pass.length >= 6) score += 25;
    if (pass.length >= 8) score += 25;
    if (/[A-Z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass)) score += 25;

    if (score < 50) return { text: 'Zayıf (En az 6 karakter, harf ve rakam önerilir)', color: colors.error, width: '33%' };
    if (score < 100) return { text: 'Orta', color: colors.warning, width: '66%' };
    return { text: 'Güçlü', color: colors.success, width: '100%' };
  };

  const strength = getPasswordStrength(password);

  const handleRegister = async () => {
    if (!name.trim() || !username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !gender) {
      setErrorMsg('Tüm alanları doldurmalı ve cinsiyet seçmelisin.');
      return;
    }
    if (username.trim().length < 3 || username.includes(' ')) {
      setErrorMsg('Kullanıcı adı en az 3 karakter olmalı ve boşluk içermemeli.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Şifre en az 6 karakter olmalı.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Şifreler uyuşmuyor.');
      return;
    }
    try {
      setErrorMsg('');
      setIsLoading(true);
      
      let avatar = '🤖';
      if (gender === 'male') avatar = '👨‍🦱';
      if (gender === 'female') avatar = '👩‍🦰';
      
      await register(email.trim(), password, name.trim(), username.trim(), avatar);
      // Navigate to main app - Transition screen shows loading animation
      navigation.replace('Transition', { targetRoute: 'MainTabs', message: 'Hoş Geldin! 🎉' });
    } catch (e: any) {
      const code = e?.code || '';
      setErrorMsg(firebaseErrorToTurkish(code));
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtnAbsolute}>
        <Text style={[styles.backBtnText, { color: colors.textLight }]}>←</Text>
      </TouchableOpacity>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Mascot mascotId="classic" size={150} animationState="celebrate" animated style={{ marginBottom: 20, marginLeft: 15 }} />
          <Text style={[styles.title, { color: colors.text }]}>Aramıza Katıl!</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>Hemen bir hesap oluştur ve öğrenmeye başla.</Text>
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
            placeholder="Ad Soyad"
            placeholderTextColor={colors.textLight}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput 
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="Kullanıcı Adı"
            placeholderTextColor={colors.textLight}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <View style={styles.genderContainer}>
            <TouchableOpacity 
              style={[styles.genderBtn, gender === 'male' && { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}
              onPress={() => setGender('male')}
            >
              <Text style={{ fontSize: 24 }}>👨</Text>
              <Text style={[styles.genderText, { color: gender === 'male' ? colors.primary : colors.textLight }]}>Erkek</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.genderBtn, gender === 'female' && { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}
              onPress={() => setGender('female')}
            >
              <Text style={{ fontSize: 24 }}>👩</Text>
              <Text style={[styles.genderText, { color: gender === 'female' ? colors.primary : colors.textLight }]}>Kadın</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.genderBtn, gender === 'other' && { backgroundColor: colors.primary + '20', borderColor: colors.primary }]}
              onPress={() => setGender('other')}
            >
              <Text style={{ fontSize: 24 }}>🤖</Text>
              <Text style={[styles.genderText, { color: gender === 'other' ? colors.primary : colors.textLight }]}>Diğer</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="E-posta"
            placeholderTextColor={colors.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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

          {strength && (
            <View style={{ width: '100%', marginBottom: 10 }}>
              <View style={{ height: 4, backgroundColor: colors.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 }}>
                <View style={{ height: '100%', width: strength.width as any, backgroundColor: strength.color }} />
              </View>
              <Text style={{ fontSize: 12, color: strength.color, textAlign: 'right' }}>{strength.text}</Text>
            </View>
          )}

          <View style={[styles.passwordContainer, { borderColor: colors.border, marginBottom: 15 }]}>
            <TextInput 
              style={[styles.passwordInput, { backgroundColor: colors.surface, color: colors.text }]}
              placeholder="Şifre (Tekrar)"
              placeholderTextColor={colors.textLight}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
          </View>

          <TouchableOpacity 
            style={{ width: '100%', marginTop: 10 }}
            onPress={handleRegister}
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
                <Text style={[styles.buttonText, { color: colors.white }]}>HESAP OLUŞTUR</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.loginText, { color: colors.textLight }]}>Zaten hesabın var mı? </Text>
            <Text style={[styles.loginTextBold, { color: colors.info }]}>Giriş Yap</Text>
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
  backBtnAbsolute: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  backBtnText: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
    gap: 10,
  },
  genderBtn: {
    flex: 1,
    height: 60,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  genderText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
    marginTop: 2,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: Platform.OS === 'ios' ? 100 : 80,
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
  loginLink: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginTextBold: {
    fontSize: 16,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
