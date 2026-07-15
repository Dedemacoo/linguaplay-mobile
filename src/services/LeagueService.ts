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

export type LeagueTier = 'rookie' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'grandmaster' | 'legend';

export const LEAGUE_CONFIG: Record<LeagueTier, { label: string; color: string; icon: string; minPoints: number }> = {
  rookie:      { label: 'Rookie',       color: '#475569', icon: '🥚', minPoints: 0 },
  bronze:      { label: 'Bronze',       color: '#B45309', icon: '🥉', minPoints: 500 },
  silver:      { label: 'Silver',       color: '#94A3B8', icon: '🥈', minPoints: 1500 },
  gold:        { label: 'Gold',         color: '#EAB308', icon: '🥇', minPoints: 3000 },
  platinum:    { label: 'Platinum',     color: '#06B6D4', icon: '🌟', minPoints: 5000 },
  diamond:     { label: 'Diamond',      color: '#3B82F6', icon: '💎', minPoints: 8000 },
  master:      { label: 'Master',       color: '#8B5CF6', icon: '🔮', minPoints: 12000 },
  grandmaster: { label: 'Grand Master', color: '#BE123C', icon: '👹', minPoints: 20000 },
  legend:      { label: 'Legend',       color: '#F59E0B', icon: '👑', minPoints: 35000 },
};

const TIERS: LeagueTier[] = ['rookie', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'master', 'grandmaster', 'legend'];

export interface LeagueUserEntry {
  uid: string;
  name: string;
  avatar: string;
  weeklyPoints: number; // Changed from weeklyXp to weeklyPoints
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
  static async updateWeeklyPoints(uid: string, name: string, avatar: string, totalWeeklyPoints: number): Promise<void> {
    const weekKey = this.getWeekStartKey();
    const tier = this.calculateTier(totalWeeklyPoints);
    const docRef = doc(db, 'leagues', `${weekKey}_${uid}`);

    await setDoc(docRef, {
      uid,
      name,
      avatar,
      weeklyXp: totalWeeklyPoints, // Save as weeklyXp for Firebase indexing
      tier,
      weekKey,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  }

  /**
   * Puan miktarına göre lig tier'ını hesapla
   */
  static calculateTier(weeklyPoints: number): LeagueTier {
    let tier: LeagueTier = 'rookie';
    for (const t of TIERS) {
      if (weeklyPoints >= LEAGUE_CONFIG[t].minPoints) {
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
      orderBy('weeklyXp', 'desc'), // Query using weeklyXp due to existing Firebase composite index
      limit(maxResults)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((d, i) => {
      const data = d.data();
      return {
        ...data,
        weeklyPoints: data.weeklyXp || data.weeklyPoints || 0,
        rank: i + 1,
      } as LeagueUserEntry;
    });
  }

  /**
   * Kullanıcının bu haftaki lig verisini getir
   */
  static async getUserLeagueData(uid: string): Promise<LeagueUserEntry | null> {
    const weekKey = this.getWeekStartKey();
    const docRef = doc(db, 'leagues', `${weekKey}_${uid}`);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    const data = snap.data();
    return {
      ...data,
      weeklyPoints: data.weeklyXp || data.weeklyPoints || 0
    } as LeagueUserEntry;
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
