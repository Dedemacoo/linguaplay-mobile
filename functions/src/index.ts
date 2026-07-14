import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import textToSpeech from '@google-cloud/text-to-speech';
import OpenAI from 'openai';

admin.initializeApp();

const client = new textToSpeech.TextToSpeechClient();
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/'
});

export const getTTS = functions.https.onCall(async (data, context) => {
  // Ensure user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  const text = data.text;
  const languageCode = data.languageCode || 'en-US';
  const voiceName = data.voiceName;

  if (!text || text.trim() === '') {
    throw new functions.https.HttpsError('invalid-argument', 'Text is required');
  }

  try {
    const request = {
      input: { text: text },
      // Select the language and SSML voice gender (optional)
      voice: { 
        languageCode: languageCode, 
        name: voiceName 
      },
      // select the type of audio encoding
      audioConfig: { audioEncoding: 'MP3' as const },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    
    // Return base64 encoded string
    const audioBase64 = response.audioContent
  ? Buffer.from(response.audioContent).toString('base64')
  : null;
    
    return { audioBase64 };
  } catch (error: any) {
    console.error('Error synthesizing speech:', error);
    throw new functions.https.HttpsError('internal', 'TTS synthesis failed', error.message);
  }
});

/**
 * aiChat — Callable: AI konuşma koçu
 * data: { messages: [{role, content}], language: string, userLevel?: string }
 */
export const aiChat = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  const { messages, language, userLevel = 'beginner' } = data;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    throw new functions.https.HttpsError('invalid-argument', 'messages array required');
  }

  const systemPrompt = `You are a friendly ${language} language tutor named "Arjin". The student is at ${userLevel} level.
Rules:
- Always respond in BOTH ${language} AND Turkish (translation in parentheses)
- Keep responses SHORT (max 2-3 sentences)
- Gently correct grammar mistakes
- Ask follow-up questions to keep conversation going
- Use simple vocabulary appropriate for ${userLevel} level
- Be encouraging and warm`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gemini-1.5-flash',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-10),
      ],
      max_tokens: 220,
      temperature: 0.75,
    });

    const reply = completion.choices[0]?.message?.content || '';
    return { reply };
  } catch (error: any) {
    console.error('aiChat error:', error.message);
    throw new functions.https.HttpsError('internal', 'AI unavailable', error.message);
  }
});

/**
 * analyzeProgress — Callable: Gelişim raporu
 * data: { mistakes, language, previousReportSnapshot }
 */
export const analyzeProgress = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  const { mistakes, language, previousReportSnapshot } = data;

  const mistakeLines = Object.entries(mistakes || {})
    .sort((a: any, b: any) => b[1].count - a[1].count)
    .slice(0, 15)
    .map(([word, info]: any) => `- "${word}" (${info.category}): ${info.count} hata`)
    .join('\n');

  const prevLines = Object.entries(previousReportSnapshot || {})
    .map(([word, count]: any) => `- "${word}": ${count}`)
    .join('\n');

  const prompt = `Sen Arjin adında bir ${language} dil koçusun. Aşağıdaki hata verilerine göre öğrenciye Türkçe kişiselleştirilmiş bir gelişim raporu yaz (max 200 kelime). Güçlü yönleri, zayıf noktaları ve 3 somut öneri içersin.\n\nBu dönem hatalar:\n${mistakeLines || 'Henüz hata yok'}\n\nÖnceki rapor:\n${prevLines || 'İlk rapor'}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gemini-1.5-flash',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 350,
      temperature: 0.7,
    });
    const report = completion.choices[0]?.message?.content || 'Rapor oluşturulamadı.';
    return { report };
  } catch (error: any) {
    console.error('analyzeProgress error:', error.message);
    throw new functions.https.HttpsError('internal', 'AI unavailable', error.message);
  }
});
