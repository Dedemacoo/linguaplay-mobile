/**
 * FriendService - Arkadaş sistemi (Optimize edilmiş — toplu sorgular)
 * Firebase yapısı:
 *   users/{uid}.friendIds: string[]
 *   friendRequests/{from}_{to}: { from, to, status, createdAt }
 */
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface FriendProfile {
  uid: string;
  name: string;
  username: string;
  avatar: string;
  xp: number;
  streak: number;
  league: string;
}

export interface FriendRequest {
  id: string;
  from: string;
  fromName: string;
  fromAvatar: string;
  to: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: any;
}

export interface BatchFriendStatus {
  friendIds: Set<string>;      // Arkadaş olan uid'ler
  pendingIds: Set<string>;     // Bekleyen istek gönderilen uid'ler
}

export class FriendService {
  /** Arkadaş isteği gönder */
  static async sendFriendRequest(fromUid: string, toUid: string): Promise<void> {
    if (fromUid === toUid) return;
    const requestId = `${fromUid}_${toUid}`;
    const fromDoc = await getDoc(doc(db, 'users', fromUid));
    const fromData = fromDoc.data() || {};
    await setDoc(doc(db, 'friendRequests', requestId), {
      from: fromUid,
      fromName: fromData.name || 'Anonim',
      fromAvatar: fromData.avatar || '🙋',
      to: toUid,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
  }

  /** Arkadaş isteğini kabul et */
  static async acceptFriendRequest(requestId: string, fromUid: string, toUid: string): Promise<void> {
    await Promise.all([
      updateDoc(doc(db, 'users', toUid), { friendIds: arrayUnion(fromUid) }),
      updateDoc(doc(db, 'users', fromUid), { friendIds: arrayUnion(toUid) }),
      deleteDoc(doc(db, 'friendRequests', requestId)),
    ]);
  }

  /** Arkadaş isteğini reddet */
  static async rejectFriendRequest(requestId: string): Promise<void> {
    await deleteDoc(doc(db, 'friendRequests', requestId));
  }

  /** Arkadaşı kaldır */
  static async removeFriend(myUid: string, friendUid: string): Promise<void> {
    await Promise.all([
      updateDoc(doc(db, 'users', myUid), { friendIds: arrayRemove(friendUid) }),
      updateDoc(doc(db, 'users', friendUid), { friendIds: arrayRemove(myUid) }),
      deleteDoc(doc(db, 'friendRequests', `${myUid}_${friendUid}`)).catch(() => {}),
      deleteDoc(doc(db, 'friendRequests', `${friendUid}_${myUid}`)).catch(() => {}),
    ]);
  }

  /**
   * TEK SORGU ile tüm arkadaş ve bekleyen istek bilgisini getirir.
   * Leaderboard'da her satır için ayrı sorgu yapmak yerine bunu kullan.
   */
  static async getBatchStatus(myUid: string): Promise<BatchFriendStatus> {
    const [userDoc, sentRequestsSnap] = await Promise.all([
      getDoc(doc(db, 'users', myUid)),
      getDocs(query(collection(db, 'friendRequests'), where('from', '==', myUid))),
    ]);

    const friendIds = new Set<string>(userDoc.data()?.friendIds || []);
    const pendingIds = new Set<string>();
    sentRequestsSnap.forEach(d => pendingIds.add(d.data().to));

    return { friendIds, pendingIds };
  }

  /** Kullanıcının arkadaş profillerini getir (paralel) */
  static async getFriends(uid: string): Promise<FriendProfile[]> {
    const userDoc = await getDoc(doc(db, 'users', uid));
    const friendIds: string[] = userDoc.data()?.friendIds || [];
    if (friendIds.length === 0) {
      return [];
    }

    const snapshots = await Promise.all(
      friendIds.map(fid => getDoc(doc(db, 'users', fid)))
    );

    return snapshots
      .filter(s => s.exists())
      .map(s => {
        const d = s.data()!;
        return {
          uid: s.id,
          name: d.name || 'Anonim',
          username: d.username || '',
          avatar: d.avatar || '🙋',
          xp: d.xp || 0,
          streak: d.streak || 0,
          league: d.league || 'Bronz',
        };
      });
  }

  /** Gelen arkadaş isteklerini getir */
  static async getIncomingRequests(uid: string): Promise<FriendRequest[]> {
    const q = query(
      collection(db, 'friendRequests'),
      where('to', '==', uid),
      where('status', '==', 'pending')
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }));
  }

  /**
   * Tek bir uid için durum (geriye dönük uyumluluk için)
   * Mümkün olduğunda getBatchStatus kullan.
   */
  static async getRequestStatus(fromUid: string, toUid: string): Promise<'none' | 'pending' | 'friend'> {
    const [myDoc, reqDoc] = await Promise.all([
      getDoc(doc(db, 'users', fromUid)),
      getDoc(doc(db, 'friendRequests', `${fromUid}_${toUid}`)),
    ]);
    const friendIds: string[] = myDoc.data()?.friendIds || [];
    if (friendIds.includes(toUid)) return 'friend';
    if (reqDoc.exists()) return 'pending';
    return 'none';
  }
}
