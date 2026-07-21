import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth';
// @ts-ignore — getReactNativePersistence lives in the RN subpath of @firebase/auth
import { getReactNativePersistence } from '@firebase/auth/dist/rn';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth with React Native persistence to fix timeout issues
let auth: any;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} catch (error: any) {
  // Catch already initialized error during Expo fast refreshes
  if (error.code === 'auth/already-initialized') {
    auth = getAuth(app);
  } else {
    console.error("Firebase auth initialization error", error);
  }
}

import { getFunctions } from 'firebase/functions';

let db: any;
try {
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
} catch (error) {
  db = getFirestore(app);
}

const functions = getFunctions(app);
// Optional: If you want to test functions locally, uncomment below
// import { connectFunctionsEmulator } from 'firebase/functions';
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);

export { auth, db, functions };
