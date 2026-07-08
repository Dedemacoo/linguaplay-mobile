/**
 * AIService — Firebase Callable Functions üzerinden AI
 *
 * chat ve analyzeProgress artık doğrudan Firebase Cloud Functions'ı çağırır.
 * API anahtarı sunucu tarafında güvenli şekilde saklanır.
 */

import { getFunctions, httpsCallable } from 'firebase/functions';
import { getApp } from 'firebase/app';

function getFn() {
  return getFunctions(getApp(), 'us-central1');
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface PronunciationResult {
  score: number;
  feedback: string;
  corrections: string[];
}

export interface HintResult {
  hint: string;
  example: string;
}

export class AIService {
  /**
   * AI konuşma koçuyla sohbet (Firebase Callable)
   */
  static async chat(
    messages: ChatMessage[],
    language: string,
    userLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
  ): Promise<string> {
    try {
      const fn = httpsCallable<unknown, { reply: string }>(getFn(), 'aiChat');
      const result = await fn({ messages, language, userLevel });
      return result.data.reply || 'Üzgünüm, yanıt alamadım.';
    } catch (error: any) {
      console.warn('[AIService] chat error:', error.message);
      // Gerçek bir hata — kullanıcıya göster
      return `⚠️ Bağlantı hatası: ${error.message?.includes('unauthenticated') ? 'Lütfen giriş yap.' : 'Sunucuya ulaşılamıyor, lütfen tekrar dene.'}`;
    }
  }

  /**
   * AI Gelişim Raporu Al (Firebase Callable)
   */
  static async analyzeProgress(
    mistakes: Record<string, { count: number; lastSeen: string; category: string }>,
    language: string,
    previousReportSnapshot: Record<string, number>
  ): Promise<string> {
    try {
      const fn = httpsCallable<unknown, { report: string }>(getFn(), 'analyzeProgress');
      const result = await fn({ mistakes, language, previousReportSnapshot });
      return result.data.report || 'Rapor oluşturulamadı.';
    } catch (error: any) {
      console.warn('[AIService] analyze-progress error:', error.message);
      return '⚠️ Bağlantı hatası: Arjin şu anda rapora ulaşamıyor. Lütfen daha sonra tekrar dene.';
    }
  }

  /**
   * Telaffuz puanlama — basit Levenshtein (sunucu gerektirmez)
   */
  static async scorePronunciation(
    expected: string,
    spoken: string,
    _language: string
  ): Promise<PronunciationResult> {
    const similarity = this.calculateSimilarity(expected.toLowerCase(), spoken.toLowerCase());
    return {
      score: Math.round(similarity * 100),
      feedback: similarity > 0.85 ? 'Harika telaffuz! 🎉' : similarity > 0.6 ? 'İyi gidiyor, biraz daha pratik yap!' : 'Tekrar dene, yaklaşıyorsun!',
      corrections: [],
    };
  }

  /**
   * Kelime ipucu (yerel fallback)
   */
  static async getHint(word: string, _language: string, _context = ''): Promise<HintResult> {
    return {
      hint: `"${word}" kelimesini tekrar dene!`,
      example: `${word} — pratik yap!`,
    };
  }

  /**
   * Basit Levenshtein benzerlik skoru (0-1)
   */
  private static calculateSimilarity(a: string, b: string): number {
    if (a === b) return 1;
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
      }
    }
    const maxLen = Math.max(a.length, b.length);
    return maxLen === 0 ? 1 : 1 - matrix[b.length][a.length] / maxLen;
  }
}
