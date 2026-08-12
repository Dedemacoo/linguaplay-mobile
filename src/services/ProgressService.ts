import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import NetInfo from '@react-native-community/netinfo';
import { UserProgress } from '../store/useProgressStore';

export class ProgressService {
  static async saveProgress(uid: string | null, newProgress: UserProgress) {
    if (!uid) return;
    try {
      const netState = await NetInfo.fetch();
      if (netState.isConnected) {
        const docRef = doc(db, 'users', uid);
        await setDoc(docRef, { progress: newProgress }, { merge: true });
      } else {
        await AsyncStorage.setItem('@offline_progress_queue', JSON.stringify(newProgress));
        console.log('[ProgressService] Queued progress for offline sync');
      }
    } catch (e) {
      console.log('Failed to save progress to Firebase:', e);
    }
  }

  static async syncOfflineProgress(uid: string) {
    try {
      const netState = await NetInfo.fetch();
      if (netState.isConnected) {
        const q = await AsyncStorage.getItem('@offline_progress_queue');
        if (q) {
          const queuedProgress = JSON.parse(q);
          const docRef = doc(db, 'users', uid);
          await setDoc(docRef, { progress: queuedProgress }, { merge: true });
          await AsyncStorage.removeItem('@offline_progress_queue');
          console.log('[ProgressService] Offline progress synced to Firebase');
        }
      }
    } catch (e) {
      console.log('Failed to process offline queue', e);
    }
  }
}
