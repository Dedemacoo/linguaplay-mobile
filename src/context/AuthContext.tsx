import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser, sendPasswordResetEmail, EmailAuthProvider, reauthenticateWithCredential, sendEmailVerification, reload, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc, collection, query, where, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../config/firebase';
import { getDeviceInfo } from '../utils/deviceInfo';
import { Alert } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '760333368652-2700fkqihilui37im7k8qhtnb7599tpm.apps.googleusercontent.com',
// });

// MOCK FOR EXPO GO:
const GoogleSignin = {
  configure: () => {},
  hasPlayServices: async () => true,
  signIn: async () => { 
    throw new Error('Expo Go simülasyonu: Google Sign-in sadece EAS APK build (Native) üzerinde çalışır.'); 
  }
};

const MANUAL_LOGOUT_KEY = '@linguaplay_manual_logout';
const SESSION_ID_KEY = '@linguaplay_session_id';
const TWO_FA_PASSED_KEY = '@linguaplay_2fa_passed';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  is2FAVerified: boolean;
  login: (emailOrUsername: string, pass: string) => Promise<{ requires2FA: boolean }>;
  register: (email: string, pass: string, name: string, username: string, avatar: string) => Promise<void>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  reauthenticateAndDelete: (password: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  reloadUser: () => Promise<void>;
  verify2FA: (code: string) => Promise<boolean>;
  toggle2FA: (enabled: boolean) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [is2FAVerified, setIs2FAVerified] = useState(true);
  const [expectedCode, setExpectedCode] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const manualLogout = await AsyncStorage.getItem(MANUAL_LOGOUT_KEY);
          if (manualLogout === 'true') {
            await signOut(auth);
            setUser(null);
            setIsLoading(false);
            return;
          }

          // Check if 2FA was passed previously
          const passed2FA = await AsyncStorage.getItem(TWO_FA_PASSED_KEY);
          
          // Verify token
          await firebaseUser.getIdToken(true);
          
          // If 2FA is enabled but not passed, we block them
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists() && userDoc.data()?.is2FAEnabled && passed2FA !== 'true') {
             setIs2FAVerified(false);
             // We could generate and send code here, but let's wait for them to trigger it or we trigger it now
             // For auto-login case, let's just trigger it
             const code = Math.floor(100000 + Math.random() * 900000).toString();
             setExpectedCode(code);
             console.log('[2FA SIMULATION] On auto-login, your 2FA code is:', code);
             Alert.alert('2FA Kodu', `Simülasyon Kodu: ${code}`);
          } else {
             setIs2FAVerified(true);
          }

          setUser(firebaseUser);
        } catch (err: any) {
          console.warn('Auth token yenileme başarısız, çıkış yapılıyor:', err?.code);
          await signOut(auth);
          setUser(null);
        }
      } else {
        setUser(null);
        setIs2FAVerified(true);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (emailOrUsername: string, pass: string) => {
    let actualEmail = emailOrUsername.trim();
    if (!actualEmail.includes('@')) {
      actualEmail = actualEmail.toLowerCase();
      const q = query(collection(db, 'users'), where('username', '==', actualEmail));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        throw { code: 'auth/user-not-found' };
      }
      actualEmail = snapshot.docs[0].data().email;
    }
    
    await AsyncStorage.removeItem(MANUAL_LOGOUT_KEY);
    await AsyncStorage.setItem('@has_seen_onboarding', 'true');
    
    // Sign in to Firebase
    const cred = await signInWithEmailAndPassword(auth, actualEmail, pass);
    
    let requires2FA = false;
    // Check 2FA
    const userDoc = await getDoc(doc(db, 'users', cred.user.uid));
    if (userDoc.exists() && userDoc.data()?.is2FAEnabled) {
      setIs2FAVerified(false);
      requires2FA = true;
      await AsyncStorage.removeItem(TWO_FA_PASSED_KEY);
      
      // Generate 6 digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setExpectedCode(code);
      
      // Simulate sending email
      console.log(`[2FA SIMULATION] Sending code to ${actualEmail}: ${code}`);
      Alert.alert('2FA Doğrulama (Simülasyon)', `E-postanıza gönderilen kod: ${code}`);
    } else {
      setIs2FAVerified(true);
      await AsyncStorage.setItem(TWO_FA_PASSED_KEY, 'true');
    }

    // Register Session
    try {
      const sessionId = Date.now().toString();
      await AsyncStorage.setItem(SESSION_ID_KEY, sessionId);
      const deviceInfo = getDeviceInfo();
      await setDoc(doc(db, 'users', cred.user.uid, 'sessions', sessionId), {
        ...deviceInfo,
        sessionId,
      });
    } catch (e) {
      console.warn('Session register failed:', e);
    }
    
    return { requires2FA };
  };

  const register = async (email: string, pass: string, name: string, username: string, avatar: string) => {
    const trimmedUsername = username.trim().toLowerCase();

    const q = query(collection(db, 'users'), where('username', '==', trimmedUsername));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      throw { code: 'auth/username-already-in-use' };
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    await AsyncStorage.removeItem(MANUAL_LOGOUT_KEY);
    await AsyncStorage.setItem('@has_seen_onboarding', 'true');
    setIs2FAVerified(true);
    await AsyncStorage.setItem(TWO_FA_PASSED_KEY, 'true');

    try {
      setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        username: trimmedUsername,
        avatar,
        xp: 0,
        streak: 0,
        league: 'Bronze',
        is2FAEnabled: false,
        createdAt: new Date().toISOString(),
      });
      
      // Register Session
      const sessionId = Date.now().toString();
      await AsyncStorage.setItem(SESSION_ID_KEY, sessionId);
      const deviceInfo = getDeviceInfo();
      await setDoc(doc(db, 'users', userCredential.user.uid, 'sessions', sessionId), {
        ...deviceInfo,
        sessionId,
      });
    } catch (firestoreErr) {
      console.warn('Firestore profile write failed:', firestoreErr);
    }
  };

  const logout = async () => {
    await AsyncStorage.setItem(MANUAL_LOGOUT_KEY, 'true');
    await AsyncStorage.removeItem(TWO_FA_PASSED_KEY);
    
    if (auth.currentUser) {
      const sessionId = await AsyncStorage.getItem(SESSION_ID_KEY);
      if (sessionId) {
        try {
          await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'sessions', sessionId));
        } catch (e) {
          console.warn('Failed to delete session:', e);
        }
        await AsyncStorage.removeItem(SESSION_ID_KEY);
      }
    }
    
    await signOut(auth);
  };

  const deleteAccount = async () => {
    if (!auth.currentUser) return;
    
    const sessionId = await AsyncStorage.getItem(SESSION_ID_KEY);
    if (sessionId) {
      await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'sessions', sessionId)).catch(() => {});
    }
    
    await deleteUser(auth.currentUser);
    await AsyncStorage.setItem(MANUAL_LOGOUT_KEY, 'true');
    await AsyncStorage.removeItem(TWO_FA_PASSED_KEY);
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const reauthenticateAndDelete = async (password: string) => {
    if (!auth.currentUser || !auth.currentUser.email) return;
    const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);
    await deleteAccount();
  };

  const sendVerificationEmail = async () => {
    if (!auth.currentUser) return;
    await sendEmailVerification(auth.currentUser);
  };

  const reloadUser = async () => {
    if (!auth.currentUser) return;
    await reload(auth.currentUser);
    setUser({ ...auth.currentUser });
  };

  const verify2FA = async (code: string) => {
    if (code === expectedCode) {
      setIs2FAVerified(true);
      await AsyncStorage.setItem(TWO_FA_PASSED_KEY, 'true');
      setExpectedCode(null);
      return true;
    }
    return false;
  };

  const toggle2FA = async (enabled: boolean) => {
    if (!auth.currentUser) return;
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      is2FAEnabled: enabled
    }, { merge: true });
    
    if (enabled) {
      setIs2FAVerified(true);
      await AsyncStorage.setItem(TWO_FA_PASSED_KEY, 'true');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { data } = await GoogleSignin.signIn();
      const idToken = data?.idToken;
      
      if (!idToken) throw new Error("No ID token found");

      const googleCredential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, googleCredential);
      
      // İlk defa giriş yapıyorsa profili oluştur
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      if (!userDoc.exists()) {
         const baseUsername = userCredential.user.email?.split('@')[0] || 'user_' + Math.floor(Math.random() * 10000);
         await setDoc(doc(db, 'users', userCredential.user.uid), {
            name: userCredential.user.displayName || 'Google Kullanıcısı',
            email: userCredential.user.email,
            username: baseUsername.toLowerCase(),
            avatar: '🤖',
            xp: 0,
            streak: 0,
            league: 'Bronze',
            is2FAEnabled: false,
            createdAt: new Date().toISOString(),
         });
      }

      await AsyncStorage.removeItem(MANUAL_LOGOUT_KEY);
      await AsyncStorage.setItem('@has_seen_onboarding', 'true');
      setIs2FAVerified(true);
      await AsyncStorage.setItem(TWO_FA_PASSED_KEY, 'true');
      
      // Register Session
      try {
        const sessionId = Date.now().toString();
        await AsyncStorage.setItem(SESSION_ID_KEY, sessionId);
        const deviceInfo = getDeviceInfo();
        await setDoc(doc(db, 'users', userCredential.user.uid, 'sessions', sessionId), {
          ...deviceInfo,
          sessionId,
        });
      } catch (e) {
         console.warn('Google session register failed:', e);
      }

    } catch (error: any) {
      console.warn('Google Sign-In Error:', error);
      Alert.alert('Google Giriş Hatası', error?.message || 'Bilinmeyen bir hata oluştu. Lütfen Firebase SHA-1 ayarlarınızı kontrol edin.');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, isLoading, is2FAVerified, 
      login, register, logout, deleteAccount, resetPassword, 
      reauthenticateAndDelete, sendVerificationEmail, reloadUser,
      verify2FA, toggle2FA, signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
