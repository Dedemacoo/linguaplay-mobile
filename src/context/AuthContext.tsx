import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (emailOrUsername: string, pass: string) => Promise<void>;
  register: (email: string, pass: string, name: string, username: string, avatar: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (emailOrUsername: string, pass: string) => {
    let actualEmail = emailOrUsername.trim();
    if (!actualEmail.includes('@')) {
      actualEmail = actualEmail.toLowerCase();
      // It's a username, resolve it to an email
      const q = query(collection(db, "users"), where("username", "==", actualEmail));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        throw { code: 'auth/user-not-found' };
      }
      actualEmail = snapshot.docs[0].data().email;
    }
    await signInWithEmailAndPassword(auth, actualEmail, pass);
  };

  const register = async (email: string, pass: string, name: string, username: string, avatar: string) => {
    const trimmedUsername = username.trim().toLowerCase();
    
    // Check if username is already taken
    const q = query(collection(db, "users"), where("username", "==", trimmedUsername));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      throw { code: 'auth/username-already-in-use' };
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    
    // Create default user profile in Firestore
    // Non-blocking: if Firestore write fails (e.g. rules), user is still created
    try {
      setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        username: trimmedUsername,
        avatar,
        xp: 0,
        streak: 0,
        league: 'Bronze',
        createdAt: new Date().toISOString(),
      }).catch(err => console.warn('Firestore profile background write failed:', err));
    } catch (firestoreErr) {
      console.warn('Firestore profile write failed (non-fatal):', firestoreErr);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
