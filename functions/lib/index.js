"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeProgress = exports.aiChat = exports.getTTS = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const text_to_speech_1 = require("@google-cloud/text-to-speech");
const openai_1 = require("openai");
admin.initializeApp();
const client = new text_to_speech_1.default.TextToSpeechClient();
const openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY || '' });
exports.getTTS = functions.https.onCall(async (data, context) => {
    // Ensure user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
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
            audioConfig: { audioEncoding: 'MP3' },
        };
        // Performs the text-to-speech request
        const [response] = await client.synthesizeSpeech(request);
        // Return base64 encoded string
        const audioBase64 = response.audioContent
            ? Buffer.from(response.audioContent).toString('base64')
            : null;
        return { audioBase64 };
    }
    catch (error) {
        console.error('Error synthesizing speech:', error);
        throw new functions.https.HttpsError('internal', 'TTS synthesis failed', error.message);
    }
});
/**
 * aiChat — Callable: AI konuşma koçu
 * data: { messages: [{role, content}], language: string, userLevel?: string }
 */
exports.aiChat = functions.https.onCall(async (data, context) => {
    var _a, _b;
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
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages.slice(-10),
            ],
            max_tokens: 220,
            temperature: 0.75,
        });
        const reply = ((_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '';
        return { reply };
    }
    catch (error) {
        console.error('aiChat error:', error.message);
        throw new functions.https.HttpsError('internal', 'AI unavailable', error.message);
    }
});
/**
 * analyzeProgress — Callable: Gelişim raporu
 * data: { mistakes, language, previousReportSnapshot }
 */
exports.analyzeProgress = functions.https.onCall(async (data, context) => {
    var _a, _b;
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
    }
    const { mistakes, language, previousReportSnapshot } = data;
    const mistakeLines = Object.entries(mistakes || {})
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 15)
        .map(([word, info]) => `- "${word}" (${info.category}): ${info.count} hata`)
        .join('\n');
    const prevLines = Object.entries(previousReportSnapshot || {})
        .map(([word, count]) => `- "${word}": ${count}`)
        .join('\n');
    const prompt = `Sen Arjin adında bir ${language} dil koçusun. Aşağıdaki hata verilerine göre öğrenciye Türkçe kişiselleştirilmiş bir gelişim raporu yaz (max 200 kelime). Güçlü yönleri, zayıf noktaları ve 3 somut öneri içersin.\n\nBu dönem hatalar:\n${mistakeLines || 'Henüz hata yok'}\n\nÖnceki rapor:\n${prevLines || 'İlk rapor'}`;
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 350,
            temperature: 0.7,
        });
        const report = ((_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || 'Rapor oluşturulamadı.';
        return { report };
    }
    catch (error) {
        console.error('analyzeProgress error:', error.message);
        throw new functions.https.HttpsError('internal', 'AI unavailable', error.message);
    }
});
//# sourceMappingURL=index.js.map