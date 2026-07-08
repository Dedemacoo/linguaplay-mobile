/**
 * LeagueService — Haftalık Lig Sistemi
 *
 * Ligler:
 *  Bronz → Gümüş → Altın → Elmas → Obsidyen
 *
 * Her pazartesi gece yarısı haftalık XP sıfırlanır.
 * Top 10 üst lige terfi, Son 5 alt lige düşer.
 * Kullanıcının mevcut lig durumu Firestore'da saklanır.
 */

import { db } from '../config/firebase';
import {
  collection, doc, getDoc, setDoc, updateDoc,
  query, where, orderBy, limit, getDocs, serverTimestamp,
} from 'firebase/firestore';

export type LeagueTier = 'bronze' | 'silver' | 'gold' | 'diamond' | 'obsidian';

export const LEAGUE_CONFIG: Record<LeagueTier, { label: string; color: string; icon: string; minXp: number }> = {
  bronze:   { label: 'Bronz',    color: '#CD7F32', icon: '🥉', minXp: 0    },
  silver:   { label: 'Gümüş',   color: '#C0C0C0', icon: '🥈', minXp: 500  },
  gold:     { label: 'Altın',   color: '#FFD700', icon: '🥇', minXp: 1500 },
  diamond:  { label: 'Elmas',   color: '#00F0FF', icon: '💎', minXp: 3000 },
  obsidian: { label: 'Obsidyen', color: '#8B5CF6', icon: '🔮', minXp: 6000 },
};

const TIERS: LeagueTier[] = ['bronze', 'silver', 'gold', 'diamond', 'obsidian'];

export interface LeagueUserEntry {
  uid: string;
  name: string;
  avatar: string;
  weeklyXp: number;
  tier: LeagueTier;
  rank?: number;
}

export class LeagueService {
  /**
   * Haftanın başlangıcını (Pazartesi 00:00) döndürür.
   */
  static getWeekStartKey(): string {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday
    const diff = (day === 0 ? -6 : 1) - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday.toISOString().split('T')[0]; // "2025-06-23"
  }

  /**
   * Kullanıcının haftalık XP'sini güncelle + lig tier'ını hesapla
   */
  static async updateWeeklyXp(uid: string, name: string, avatar: string, totalWeeklyXp: number): Promise<void> {
    const weekKey = this.getWeekStartKey();
    const tier = this.calculateTier(totalWeeklyXp);
    const docRef = doc(db, 'leagues', `${weekKey}_${uid}`);

    await setDoc(docRef, {
      uid,
      name,
      avatar,
      weeklyXp: totalWeeklyXp,
      tier,
      weekKey,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  }

  /**
   * XP miktarına göre lig tier'ını hesapla
   */
  static calculateTier(weeklyXp: number): LeagueTier {
    let tier: LeagueTier = 'bronze';
    for (const t of TIERS) {
      if (weeklyXp >= LEAGUE_CONFIG[t].minXp) {
        tier = t;
      }
    }
    return tier;
  }

  /**
   * Belirli bir tier için bu haftanın liderlik tablosunu getir
   */
  static async getLeagueLeaderboard(tier: LeagueTier, maxResults = 50): Promise<LeagueUserEntry[]> {
    const weekKey = this.getWeekStartKey();
    const q = query(
      collection(db, 'leagues'),
      where('weekKey', '==', weekKey),
      where('tier', '==', tier),
      orderBy('weeklyXp', 'desc'),
      limit(maxResults)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((d, i) => ({
      ...d.data() as LeagueUserEntry,
      rank: i + 1,
    }));
  }

  /**
   * Kullanıcının bu haftaki lig verisini getir
   */
  static async getUserLeagueData(uid: string): Promise<LeagueUserEntry | null> {
    const weekKey = this.getWeekStartKey();
    const docRef = doc(db, 'leagues', `${weekKey}_${uid}`);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return snap.data() as LeagueUserEntry;
  }

  /**
   * Kullanıcının mevcut ligteki sıralamasını hesapla
   */
  static async getUserRank(uid: string, tier: LeagueTier): Promise<number> {
    const leaderboard = await this.getLeagueLeaderboard(tier, 200);
    const index = leaderboard.findIndex(e => e.uid === uid);
    return index === -1 ? 999 : index + 1;
  }

  /**
   * Bir üst/alt lig önerisi: Top 10 = Terfi ↑, Son 5 = Düşüş ↓
   */
  static getPromotionStatus(rank: number, totalInLeague: number): 'promotion' | 'demotion' | 'safe' {
    if (rank <= 10) return 'promotion';
    if (rank > totalInLeague - 5) return 'demotion';
    return 'safe';
  }

  /**
   * Gelecek haftanın lig tier'ını hesapla (terfi/düşüş)
   */
  static getNextTier(currentTier: LeagueTier, status: 'promotion' | 'demotion' | 'safe'): LeagueTier {
    const currentIndex = TIERS.indexOf(currentTier);
    if (status === 'promotion') return TIERS[Math.min(currentIndex + 1, TIERS.length - 1)];
    if (status === 'demotion') return TIERS[Math.max(currentIndex - 1, 0)];
    return currentTier;
  }
}
