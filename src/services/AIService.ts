import { useLingoStore } from '../store/useLingoStore';

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

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
  static async chat(
    messages: ChatMessage[],
    language: string,
    userLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
  ): Promise<string> {
    try {
      const targetLanguage = language || 'English'; 
      const { personality, expressionStyle } = useLingoStore.getState();
      
      let personalityStr = "arkadaş canlısı ve motive edici";
      if (personality === 'strict') personalityStr = "disiplinli ve kuralcı";
      if (personality === 'funny') personalityStr = "komik ve esprili";
      if (personality === 'academic') personalityStr = "akademik ve ciddi";
      
      let expressionStr = "Günlük bir dille";
      if (expressionStyle === 'formal') expressionStr = "Resmi ve saygılı bir dille";
      if (expressionStyle === 'encouraging') expressionStr = "Çok destekleyici ve cesaret verici bir dille";

      const systemPrompt = `Sen ${personalityStr} bir dil öğretmenisin ve yapay zeka asistanısın. Adın Lingo. Öğrencinin seviyesi: ${userLevel}. Hedef dil: ${targetLanguage}.
Kurallar:
- Öğrencinin doğrudan isteklerini (örn: "bana 10 kelime listele", "bu konuyu anlat") eksiksiz yerine getir. Liste veya kural açıklaması istenirse doğrudan Türkçe cevap verebilirsin.
- NORMAL SOHBETLERDE ÇOK ÖNEMLİ KURAL: Her yanıtında ZORUNLU OLARAK önce ${targetLanguage} cümleyi kur, ardından HEMEN o cümlenin (Türkçe çevirisini parantez içinde) yaz. SADECE ${targetLanguage} yanıt VERME!
  Örnek Format: "Hello! How are you today? (Merhaba! Bugün nasılsın?)"
- Sohbet kısımlarını KISA tut (en fazla 2-3 cümle).
- Öğrencinin gramer hataları varsa nazikçe düzelt.
- Sıcak, esprili ve cesaretlendirici ol, yunus olduğunu belli eden tatlı göndermeler yap (su sıçratmak, balık ısmarlamak vb.).`;

      const formattedMessages: { role: string, parts: { text: string }[] }[] = [];
      messages.forEach(msg => {
        const mappedRole = msg.role === 'assistant' ? 'model' : 'user';
        if (formattedMessages.length > 0 && formattedMessages[formattedMessages.length - 1].role === mappedRole) {
          formattedMessages[formattedMessages.length - 1].parts[0].text += '\n\n' + msg.content;
        } else {
          formattedMessages.push({
            role: mappedRole,
            parts: [{ text: msg.content }]
          });
        }
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: formattedMessages,
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: { temperature: 0.75, maxOutputTokens: 220 }
        })
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        console.error('[AIService] API Error:', data);
        throw new Error(data?.error?.message || 'Unknown API error');
      }
      
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Üzgünüm, yanıt alamadım.';
    } catch (error: any) {
      console.error('[AIService] chat catch block error:', error);
      if (error.message?.includes('high demand') || error.message?.includes('503')) {
        return 'Şu an sunucularda çok fazla yoğunluk var, biraz nefeslenip tekrar dener misin? 🐳';
      }
      return `Zzz... Biraz yoruldum, bağlantı kuramıyorum. (${error.message})`;
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

      const prompt = `Sen Arjin adında bir İngilizce dil koçusun. Aşağıdaki hata verilerine göre öğrenciye Türkçe kişiselleştirilmiş bir gelişim raporu yaz (max 200 kelime). Güçlü yönleri, zayıf noktaları ve 3 somut öneri içersin.\n\nBu dönem hatalar:\n${mistakeLines || 'Henüz hata yok'}\n\nÖnceki rapor:\n${prevLines || 'İlk rapor'}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 350 }
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Rapor oluşturulamadı.';
    } catch (error: any) {
      console.warn('[AIService] analyze-progress error:', error.message);
      return 'Hmm... Gelişim raporu için geçerli bir API anahtarı gerekiyor.';
    }
  }

  static async scorePronunciation(
    expected: string,
    spoken: string,
    _language: string
  ): Promise<PronunciationResult> {
    const similarity = this.calculateSimilarity(expected.toLowerCase(), spoken.toLowerCase());
    return {
      score: Math.round(similarity * 100),
      feedback: similarity > 0.85 ? 'Harika telaffuz! 🐳' : similarity > 0.6 ? 'İyi gidiyor, biraz daha pratik yap!' : 'Tekrar dene, yaklaşıyorsun!',
      corrections: [],
    };
  }

  static async getHint(word: string, _language: string, _context = ''): Promise<HintResult> {
    return {
      hint: `"${word}" kelimesini tekrar dene!`,
      example: `${word} — pratik yap!`,
    };
  }

  static async generateWeaknessQuiz(mistakes: Record<string, any>, language: string): Promise<any[]> {
    try {
      const mistakeKeys = Object.keys(mistakes).slice(0, 15); // Take top 15 mistakes
      if (mistakeKeys.length === 0) return [];
      
      const prompt = `Sen uzman bir dil hocasısın. Öğrencinin şu kelime veya kurallarda eksiği var:
${mistakeKeys.join(', ')}

Bu eksikleri hedef alan 10 soruluk pratik bir quiz oluştur. Hedef dil: ${language}.
Formatı tam olarak şu JSON array olmalıdır:
[
  {
    "id": "ai_q_1",
    "type": "multipleChoice",
    "prompt": "Soru metni (Türkçe veya İngilizce olabilir)",
    "options": ["A", "B", "C", "D"],
    "correctIndex": 0
  }
]
Sadece ve sadece JSON formatında yanıt ver, markdown backtick ( \`\`\`json ) GÖNDERME! Sadece köşeli parantezle başlayan array gönder. Soruların hepsi mantıklı ve eğitici olmalı.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`, {
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
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return [];
    } catch (error) {
      console.error('Quiz generation error:', error);
      return [];
    }
  }

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
