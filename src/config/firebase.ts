import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth';
// @ts-ignore — getReactNativePersistence lives in the RN subpath of @firebase/auth
import { getReactNativePersistence } from '@firebase/auth/dist/rn';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBhk9Ard_-KB8DKfQ19QgWWqwsZQDA8fRg",
  authDomain: "lingumapp.firebaseapp.com",
  projectId: "lingumapp",
  storageBucket: "lingumapp.firebasestorage.app",
  messagingSenderId: "751105839348",
  appId: "1:751105839348:web:989169514c97530e98cea1"
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
