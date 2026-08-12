import { useLingoStore } from '../store/useLingoStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

export const AI_LIMITS = {
  FREE_TEXT_DAILY: 10,
  FREE_VOICE_DAILY: 4,
};

export async function checkAILimit(isPremium: boolean, isVoice: boolean): Promise<{ allowed: boolean, remaining: number }> {
  if (isPremium) return { allowed: true, remaining: 999 };
  const today = new Date().toISOString().split('T')[0];
  const key = `@ai_usage_${today}_${isVoice ? 'voice' : 'text'}`;
  const usedStr = await AsyncStorage.getItem(key);
  const used = usedStr ? parseInt(usedStr, 10) : 0;
  const limit = isVoice ? AI_LIMITS.FREE_VOICE_DAILY : AI_LIMITS.FREE_TEXT_DAILY;
  return { allowed: used < limit, remaining: Math.max(0, limit - used) };
}

export async function incrementAIUsage(isVoice: boolean): Promise<void> {
  const today = new Date().toISOString().split('T')[0];
  const key = `@ai_usage_${today}_${isVoice ? 'voice' : 'text'}`;
  const usedStr = await AsyncStorage.getItem(key);
  const used = usedStr ? parseInt(usedStr, 10) : 0;
  await AsyncStorage.setItem(key, (used + 1).toString());
}

export async function resetAILimit(isVoice: boolean): Promise<void> {
  const today = new Date().toISOString().split('T')[0];
  const key = `@ai_usage_${today}_${isVoice ? 'voice' : 'text'}`;
  await AsyncStorage.setItem(key, '0');
}

export async function watchAdToResetLimit(isVoice: boolean): Promise<{ success: boolean; adsRemaining: number }> {
  const today = new Date().toISOString().split('T')[0];
  const key = `@ai_ad_reset_${today}_${isVoice ? 'voice' : 'text'}`;
  const countStr = await AsyncStorage.getItem(key);
  let count = countStr ? parseInt(countStr, 10) : 0;
  count += 1;
  
  if (count >= 2) {
    await resetAILimit(isVoice);
    await AsyncStorage.setItem(key, '0'); // reset ad counter for next time
    return { success: true, adsRemaining: 0 };
  } else {
    await AsyncStorage.setItem(key, count.toString());
    return { success: false, adsRemaining: 2 - count };
  }
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ParsedAIReply {
  tts_text: string;
  display_text: string;
  feedback?: string;
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

function getLanguageName(lang: string): string {
  const map: Record<string, string> = {
    english: 'English', german: 'German (Deutsch)', spanish: 'Spanish (Español)',
    french: 'French (Français)', italian: 'Italian (Italiano)', kurdish: 'Kurdish Kurmanji',
    arabic: 'Arabic', russian: 'Russian', japanese: 'Japanese', chinese: 'Chinese (Mandarin)',
    portuguese: 'Portuguese', dutch: 'Dutch', korean: 'Korean', turkish: 'Turkish'
  };
  return map[lang] || 'English';
}

export function parseTTSAndDisplay(raw: string): ParsedAIReply {
  try {
    const jsonMatch = raw.match(/\{[\s\S]*"tts_text"[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      if (parsed.tts_text && parsed.display_text) return parsed;
    }
  } catch (_) {}

  const ttsText = raw
    .replace(/\(.*?\)/gs, '')
    .replace(/[*_~`#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return { tts_text: ttsText, display_text: raw.replace(/[*_~`#]/g, '').trim() };
}

export class AIService {
  static async chat(
    messages: ChatMessage[],
    language: string,
    userLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner',
    personaContext?: string
  ): Promise<string> {
    try {
      const targetLanguage = getLanguageName(language);
      const { personality } = useLingoStore.getState();

      let systemPrompt = '';
      if (personaContext) {
        systemPrompt = `You are an AI language tutor in the LinguaPlay app. Your current persona: ${personaContext}.
Student level: ${userLevel}. Target language: ${targetLanguage}.
STRICT RULES:
1. Never break character — stay as ${personaContext} at all times.
2. Always respond ONLY in valid JSON with this exact structure:
{"tts_text": "<ONLY the ${targetLanguage} sentence(s) for voice>", "display_text": "<${targetLanguage} sentence> (Türkçe çeviri)", "feedback": "<optional short encouragement in Turkish>"}
3. Keep tts_text ONLY in ${targetLanguage} — no Turkish words in tts_text.
4. Keep display_text bilingual: target language first, then Turkish in parentheses.
5. Maximum 1-2 sentences. Be conversational, warm, and natural — not robotic.
6. Naturally teach new vocabulary phrases in conversation.
7. Output ONLY the JSON object — no markdown, no extra text.`;
      } else {
        let personalityStr = 'friendly and motivating';
        if (personality === 'strict') personalityStr = 'disciplined and strict';
        else if (personality === 'funny') personalityStr = 'funny and playful';
        else if (personality === 'academic') personalityStr = 'academic and formal';

        systemPrompt = `You are Lingo, a ${personalityStr} AI language tutor. Student level: ${userLevel}. Target language: ${targetLanguage}.
STRICT RULES:
1. Always respond ONLY in valid JSON with this exact structure:
{"tts_text": "<ONLY the ${targetLanguage} sentence(s) for voice>", "display_text": "<${targetLanguage} sentence> (Türkçe çeviri)", "feedback": "<optional short encouragement in Turkish>"}
2. Keep tts_text ONLY in ${targetLanguage} — no Turkish words in tts_text.
3. Keep display_text bilingual: target language first, then Turkish in parentheses.
4. Maximum 1-2 sentences. Be warm and encouraging.
5. Naturally teach new phrases — use "Repeat after me:" style prompts.
6. Output ONLY the JSON object — no markdown, no extra text.`;
      }

      const contents: { role: string; parts: { text: string }[] }[] = [];
      messages.forEach(m => {
        contents.push({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] });
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: { role: "system", parts: [{ text: systemPrompt }] },
          generationConfig: { temperature: 0.7, maxOutputTokens: 300 }
        })
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        console.error('[AIService] Gemini API Error:', data);
        throw new Error(data?.error?.message || 'Gemini API error');
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      return text || '{"tts_text": "I am here to help you!", "display_text": "I am here to help you! (Sana yardım etmek için buradayım!)"}';
    } catch (error: any) {
      console.error('[AIService] chat error:', error);
      return '{"tts_text": "Sorry, connection failed.", "display_text": "Sorry, connection failed. (Üzgünüm, bağlantı kurulamadı.)"}';
    }
  }

  static async analyzeProgress(
    mistakes: Record<string, { count: number; lastSeen: string; category: string }>,
    language: string,
    previousReportSnapshot: Record<string, number>
  ): Promise<string> {
    try {
      const mistakeLines = Object.entries(mistakes || {})
        .sort((a: any, b: any) => b[1].count - a[1].count)
        .slice(0, 15)
        .map(([word, info]: any) => `- "${word}" (${info.category}): ${info.count} hata`)
        .join('\n');

      const prevLines = Object.entries(previousReportSnapshot || {})
        .map(([word, count]: any) => `- "${word}": ${count}`)
        .join('\n');

      const prompt = `You are an expert language coach. Write a personalized progress report IN TURKISH (max 200 words) for a student learning ${getLanguageName(language)}. Include strengths, weaknesses, and 3 concrete suggestions.\n\nThis period mistakes:\n${mistakeLines || 'No mistakes yet'}\n\nPrevious report:\n${prevLines || 'First report'}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 400 }
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Rapor oluşturulamadı.';
    } catch (error: any) {
      console.warn('[AIService] analyze-progress error:', error.message);
      return 'Gelişim raporu oluşturulamadı. Lütfen tekrar dene.';
    }
  }

  static async scorePronunciation(expected: string, spoken: string, _language: string): Promise<PronunciationResult> {
    const similarity = this.calculateSimilarity(expected.toLowerCase(), spoken.toLowerCase());
    return {
      score: Math.round(similarity * 100),
      feedback: similarity > 0.85 ? 'Harika telaffuz! 🎉' : similarity > 0.6 ? 'İyi gidiyor, biraz daha pratik yap!' : 'Tekrar dene, yaklaşıyorsun!',
      corrections: [],
    };
  }

  static async getHint(word: string, _language: string, _context = ''): Promise<HintResult> {
    return { hint: `"${word}" kelimesini tekrar dene!`, example: `${word} — pratik yap!` };
  }

  static async generateWeaknessQuiz(mistakes: Record<string, any>, language: string): Promise<any[]> {
    try {
      const mistakeKeys = Object.keys(mistakes).slice(0, 15);
      if (mistakeKeys.length === 0) return [];

      const prompt = `You are an expert language teacher. The student has weaknesses in: ${mistakeKeys.join(', ')}
Create a 10-question practice quiz targeting these weaknesses. Target language: ${getLanguageName(language)}.
Return ONLY a valid JSON array (no markdown, no backticks):
[{"id":"ai_q_1","type":"multipleChoice","prompt":"Question text","options":["A","B","C","D"],"correctIndex":0}]`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2000 }
        })
      });

      const data = await response.json();
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const jsonMatch = textResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) return JSON.parse(jsonMatch[0]);
      return [];
    } catch (error: any) {
      console.error('[AIService] generateWeaknessQuiz error:', error);
      return [];
    }
  }

  private static calculateSimilarity(s1: string, s2: string): number {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    if (longer.length === 0) return 1.0;
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  private static levenshteinDistance(s1: string, s2: string): number {
    const dp: number[][] = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(0));
    for (let i = 0; i <= s1.length; i++) dp[i][0] = i;
    for (let j = 0; j <= s2.length; j++) dp[0][j] = j;
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        dp[i][j] = s1[i - 1] === s2[j - 1]
          ? dp[i - 1][j - 1]
          : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
    return dp[s1.length][s2.length];
  }
}
