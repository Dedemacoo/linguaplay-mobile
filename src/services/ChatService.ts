/**
 * ChatService - Gerçek zamanlı mesajlaşma servisi
 * Firebase yapısı:
 *   chats/{chatId}  (chatId = sort([uid1,uid2]).join('_'))
 *     - participants: [uid1, uid2]
 *     - lastMessage: string
 *     - lastMessageTime: Timestamp
 *     - participantNames: { uid: name }
 *     - participantAvatars: { uid: avatar }
 *   chats/{chatId}/messages/{msgId}
 *     - senderId: string
 *     - text: string
 *     - timestamp: Timestamp
 *     - read: boolean
 */
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Unsubscribe,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: Timestamp | null;
  read: boolean;
}

export interface ChatConversation {
  id: string;
  participants: string[];
  participantNames: Record<string, string>;
  participantAvatars: Record<string, string>;
  lastMessage: string;
  lastMessageTime: Timestamp | null;
  unreadCount?: number;
}

export class ChatService {
  /** chatId oluştur: iki uid'yi sıralayıp birleştir */
  static getChatId(uid1: string, uid2: string): string {
    return [uid1, uid2].sort().join('_');
  }

  /** Sohbet başlat veya mevcut olanı döndür */
  static async createOrGetChat(
    myUid: string,
    myName: string,
    myAvatar: string,
    otherUid: string,
    otherName: string,
    otherAvatar: string,
  ): Promise<string> {
    const chatId = this.getChatId(myUid, otherUid);
    const chatRef = doc(db, 'chats', chatId);
    const chatDoc = await getDoc(chatRef);

    if (!chatDoc.exists()) {
      await setDoc(chatRef, {
        participants: [myUid, otherUid],
        participantNames: { [myUid]: myName, [otherUid]: otherName },
        participantAvatars: { [myUid]: myAvatar, [otherUid]: otherAvatar },
        lastMessage: '',
        lastMessageTime: serverTimestamp(),
      });
    }
    return chatId;
  }

  /** Mesaj gönder */
  static async sendMessage(chatId: string, senderId: string, text: string): Promise<void> {
    const trimmed = text.trim();
    if (!trimmed) return;

    const chatRef = doc(db, 'chats', chatId);
    const msgRef = collection(db, 'chats', chatId, 'messages');

    await addDoc(msgRef, {
      senderId,
      text: trimmed,
      timestamp: serverTimestamp(),
      read: false,
    });

    await setDoc(chatRef, {
      lastMessage: trimmed,
      lastMessageTime: serverTimestamp(),
    }, { merge: true });
  }

  /** Mesajları gerçek zamanlı dinle, Unsubscribe döndürür */
  static subscribeToMessages(
    chatId: string,
    onMessages: (messages: ChatMessage[]) => void,
  ): Unsubscribe {
    const msgRef = collection(db, 'chats', chatId, 'messages');
    const q = query(msgRef, orderBy('timestamp', 'asc'));
    return onSnapshot(q, (snap) => {
      const msgs: ChatMessage[] = snap.docs.map(d => ({
        id: d.id,
        senderId: d.data().senderId,
        text: d.data().text,
        timestamp: d.data().timestamp || null,
        read: d.data().read || false,
      }));
      onMessages(msgs);
    });
  }

  /** Kullanıcının tüm sohbetlerini getir */
  static async getMyChats(uid: string): Promise<ChatConversation[]> {
    const q = query(collection(db, 'chats'), where('participants', 'array-contains', uid));
    const snap = await getDocs(q);
    const chats: ChatConversation[] = snap.docs.map(d => ({
      id: d.id,
      participants: d.data().participants || [],
      participantNames: d.data().participantNames || {},
      participantAvatars: d.data().participantAvatars || {},
      lastMessage: d.data().lastMessage || '',
      lastMessageTime: d.data().lastMessageTime || null,
    }));
    // En son mesaja göre sırala
    chats.sort((a, b) => {
      const ta = a.lastMessageTime?.toMillis?.() || 0;
      const tb = b.lastMessageTime?.toMillis?.() || 0;
      return tb - ta;
    });
    return chats;
  }

  /** Sohbetleri gerçek zamanlı dinle */
  static subscribeToMyChats(
    uid: string,
    onChats: (chats: ChatConversation[]) => void,
  ): Unsubscribe {
    const q = query(collection(db, 'chats'), where('participants', 'array-contains', uid));
    return onSnapshot(q, (snap) => {
      const chats: ChatConversation[] = snap.docs.map(d => ({
        id: d.id,
        participants: d.data().participants || [],
        participantNames: d.data().participantNames || {},
        participantAvatars: d.data().participantAvatars || {},
        lastMessage: d.data().lastMessage || '',
        lastMessageTime: d.data().lastMessageTime || null,
      }));
      chats.sort((a, b) => {
        const ta = a.lastMessageTime?.toMillis?.() || 0;
        const tb = b.lastMessageTime?.toMillis?.() || 0;
        return tb - ta;
      });
      onChats(chats);
    });
  }

  /** Sohbet mesajlarını temizle (sil) */
  static async clearChat(chatId: string): Promise<void> {
    const msgRef = collection(db, 'chats', chatId, 'messages');
    const snap = await getDocs(msgRef);
    
    // Batch deletion is best, but since messages are few, we can delete one by one
    // or use a simple loop (Note: Real apps should use writeBatch)
    const { writeBatch } = await import('firebase/firestore');
    const batch = writeBatch(db);
    
    snap.docs.forEach((docSnap) => {
      batch.delete(docSnap.ref);
    });
    
    await batch.commit();

    // Reset lastMessage
    const chatRef = doc(db, 'chats', chatId);
    await setDoc(chatRef, {
      lastMessage: '',
      lastMessageTime: null,
    }, { merge: true });
  }

  /** Sohbeti tamamen sil */
  static async deleteChat(chatId: string): Promise<void> {
    // Önce mesajları sil
    await this.clearChat(chatId);
    // Sonra sohbet dokümanını sil
    const { deleteDoc } = await import('firebase/firestore');
    await deleteDoc(doc(db, 'chats', chatId));
  }
}
