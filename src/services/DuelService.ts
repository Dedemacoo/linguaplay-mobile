import { db } from '../config/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp, deleteDoc, doc, getDoc } from 'firebase/firestore';

export interface DuelRequest {
  id: string;
  from: string;
  fromName: string;
  fromAvatar: string;
  to: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: any;
}

export const DuelService = {
  async sendDuelRequest(fromUid: string, toUid: string): Promise<void> {
    const fromDoc = await getDoc(doc(db, 'users', fromUid));
    const fromData = fromDoc.data() || {};
    
    // Check if already requested
    const q = query(
      collection(db, 'duelRequests'),
      where('from', '==', fromUid),
      where('to', '==', toUid),
      where('status', '==', 'pending')
    );
    const snap = await getDocs(q);
    if (!snap.empty) return;

    await addDoc(collection(db, 'duelRequests'), {
      from: fromUid,
      fromName: fromData.name || 'Bilinmiyor',
      fromAvatar: fromData.avatar || '🙋',
      to: toUid,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
  },

  async getIncomingRequests(uid: string): Promise<DuelRequest[]> {
    const q = query(
      collection(db, 'duelRequests'),
      where('to', '==', uid),
      where('status', '==', 'pending')
    );
    const snap = await getDocs(q);
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as DuelRequest));
  },

  async acceptDuel(requestId: string): Promise<void> {
    await deleteDoc(doc(db, 'duelRequests', requestId));
  },

  async rejectDuel(requestId: string): Promise<void> {
    await deleteDoc(doc(db, 'duelRequests', requestId));
  }
};
