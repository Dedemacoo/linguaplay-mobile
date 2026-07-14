import { LessonContent, Question } from './lessonContent';

// === AŞAMA 1 (STAGE 1): TEMEL TANITIM VE İLK ADIMLAR ===
// (10 Nodeluk bir dünya haritası chunk'ı oluşturacak)

const vocabLesson1: Question[] = [
  // Görselle öğretme (Flashcards) ve ardından test etme
  { id: 'u1_l1_1_f', type: 'flashcard', prompt: 'Elma', audioText: 'Apple', imageOptions: ['🍎'], options: [], correctIndex: 0 },
  { id: 'u1_l1_1_q', type: 'imageChoice', prompt: 'Hangisi "Elma"?', options: ['Apple', 'Water', 'Book'], imageOptions: ['🍎', '💧', '📚'], correctIndex: 0 },
  
  { id: 'u1_l1_2_f', type: 'flashcard', prompt: 'Su', audioText: 'Water', imageOptions: ['💧'], options: [], correctIndex: 0 },
  { id: 'u1_l1_2_q', type: 'imageChoice', prompt: 'Hangisi "Su"?', options: ['Apple', 'Water', 'Car'], imageOptions: ['🍎', '💧', '🚗'], correctIndex: 1 },

  { id: 'u1_l1_3_f', type: 'flashcard', prompt: 'Ben', audioText: 'I', imageOptions: ['🙋‍♂️'], options: [], correctIndex: 0 },
  { id: 'u1_l1_3_q', type: 'multipleChoice', prompt: 'Ben', options: ['You', 'He', 'I', 'She'], correctIndex: 2 },
  
  { id: 'u1_l1_4_f', type: 'flashcard', prompt: 'İstemek', audioText: 'Want', imageOptions: ['🤲'], options: [], correctIndex: 0 },
  { id: 'u1_l1_5_f', type: 'flashcard', prompt: 'İçmek', audioText: 'Drink', imageOptions: ['🥛'], options: [], correctIndex: 0 },
  
  { id: 'u1_l1_4_q', type: 'multipleChoice', prompt: 'İstemek', options: ['To have', 'To want', 'To need', 'To go'], correctIndex: 1 },
  { id: 'u1_l1_5_q', type: 'multipleChoice', prompt: 'İçmek', options: ['To eat', 'To drink', 'To sleep', 'To run'], correctIndex: 1 },
];

const sentenceLesson1: Question[] = [
  { id: 'u1_l2_1', type: 'constructSentence', prompt: 'Ben su istiyorum.', options: ['want', 'Water', 'I', 'water.', 'drink', 'please'], correctAnswer: ['I', 'want', 'water.'] },
  { id: 'u1_l2_2', type: 'constructSentence', prompt: 'Ben su içerim.', options: ['drink', 'I', 'water.', 'eat'], correctAnswer: ['I', 'drink', 'water.'] },
  { id: 'u1_l2_3', type: 'constructSentence', prompt: 'Ben bir elma istiyorum.', options: ['want', 'an', 'I', 'apple.', 'water'], correctAnswer: ['I', 'want', 'an', 'apple.'] },
  { id: 'u1_l2_4', type: 'translate', prompt: 'I eat an apple.', options: ['Bir elma yerim.', 'Bir elma istiyorum.', 'Su içerim.'], correctIndex: 0 },
  { id: 'u1_l2_5', type: 'translate', prompt: 'I want water.', options: ['Su istiyorum.', 'Elma istiyorum.', 'Su içerim.'], correctIndex: 0 }
];

const speakingLesson1: Question[] = [
  { id: 'u1_l3_1', type: 'speak', prompt: 'I want water.', options: [], correctIndex: 0, audioText: 'I want water.', audioLang: 'en-US' },
  { id: 'u1_l3_2', type: 'speak', prompt: 'I drink water.', options: [], correctIndex: 0, audioText: 'I drink water.', audioLang: 'en-US' },
  { id: 'u1_l3_3', type: 'speak', prompt: 'I eat an apple.', options: [], correctIndex: 0, audioText: 'I eat an apple.', audioLang: 'en-US' },
  { id: 'u1_l3_4', type: 'speak', prompt: 'I want an apple.', options: [], correctIndex: 0, audioText: 'I want an apple.', audioLang: 'en-US' },
];

const vocabLesson2: Question[] = [
  { id: 'u1_l4_1_f', type: 'flashcard', prompt: 'Merhaba', audioText: 'Hello', imageOptions: ['👋'], options: [], correctIndex: 0 },
  { id: 'u1_l4_1_q', type: 'imageChoice', prompt: 'Hangisi "Merhaba"?', options: ['Goodbye', 'Hello', 'Thanks'], imageOptions: ['🏃‍♂️', '👋', '🙏'], correctIndex: 1 },

  { id: 'u1_l4_2_f', type: 'flashcard', prompt: 'Teşekkürler', audioText: 'Thanks', imageOptions: ['🙏'], options: [], correctIndex: 0 },
  { id: 'u1_l4_2_q', type: 'imageChoice', prompt: 'Hangisi "Teşekkürler"?', options: ['Please', 'Sorry', 'Thanks'], imageOptions: ['🥺', '😔', '🙏'], correctIndex: 2 },

  { id: 'u1_l4_3_f', type: 'flashcard', prompt: 'Evet', audioText: 'Yes', imageOptions: ['✅'], options: [], correctIndex: 0 },
  { id: 'u1_l4_4_f', type: 'flashcard', prompt: 'Hayır', audioText: 'No', imageOptions: ['❌'], options: [], correctIndex: 0 },
  
  { id: 'u1_l4_3_q', type: 'imageChoice', prompt: 'Hangisi "Evet"?', options: ['No', 'Yes', 'Okay'], imageOptions: ['❌', '✅', '👌'], correctIndex: 1 },
  { id: 'u1_l4_4_q', type: 'imageChoice', prompt: 'Hangisi "Hayır"?', options: ['Yes', 'No', 'Not'], imageOptions: ['✅', '❌', '🚫'], correctIndex: 1 },

  { id: 'u1_l4_5_f', type: 'flashcard', prompt: 'Lütfen', audioText: 'Please', imageOptions: ['🥺'], options: [], correctIndex: 0 },
  { id: 'u1_l4_5_q', type: 'multipleChoice', prompt: 'Lütfen', options: ['Please', 'Thanks', 'Sorry', 'Hello'], correctIndex: 0 },
];

const listeningLesson1: Question[] = [
  { id: 'u1_l5_1', type: 'listen', prompt: 'Dinlediğin cümleyi bul.', options: ['Hello, thanks.', 'Yes, please.', 'No, thanks.'], correctIndex: 1, audioText: 'Yes, please.', audioLang: 'en-US' },
  { id: 'u1_l5_2', type: 'listen', prompt: 'Dinlediğin cümleyi bul.', options: ['I want water.', 'I drink water.', 'Water, please.'], correctIndex: 2, audioText: 'Water, please.', audioLang: 'en-US' },
  { id: 'u1_l5_3', type: 'listen', prompt: 'Dinlediğin cümleyi bul.', options: ['Yes, I want an apple.', 'No, I want water.', 'Hello, I want water.'], correctIndex: 0, audioText: 'Yes, I want an apple.', audioLang: 'en-US' },
];

const sentenceLesson2: Question[] = [
  { id: 'u1_l6_1', type: 'constructSentence', prompt: 'Evet, lütfen.', options: ['Yes,', 'No,', 'please.', 'thanks.'], correctAnswer: ['Yes,', 'please.'] },
  { id: 'u1_l6_2', type: 'constructSentence', prompt: 'Hayır, teşekkürler.', options: ['Yes,', 'No,', 'thanks.', 'please.'], correctAnswer: ['No,', 'thanks.'] },
  { id: 'u1_l6_3', type: 'constructSentence', prompt: 'Merhaba, su istiyorum lütfen.', options: ['Hello,', 'I', 'want', 'water,', 'please.'], correctAnswer: ['Hello,', 'I', 'want', 'water,', 'please.'] },
  { id: 'u1_l6_4', type: 'translate', prompt: 'No, water please.', options: ['Hayır, su lütfen.', 'Evet, su lütfen.', 'Hayır, elma lütfen.'], correctIndex: 0 }
];

const grammarLesson1: Question[] = [
  { id: 'u1_l7_1', type: 'multipleChoice', prompt: 'Sen / Siz', options: ['I', 'You', 'We', 'They'], correctIndex: 1 },
  { id: 'u1_l7_2', type: 'translate', prompt: 'You want water.', options: ['Sen su istersin.', 'Ben su isterim.', 'O su ister.'], correctIndex: 0 },
  { id: 'u1_l7_3', type: 'constructSentence', prompt: 'Sen bir elma istersin.', options: ['You', 'I', 'want', 'an', 'apple.'], correctAnswer: ['You', 'want', 'an', 'apple.'] },
  { id: 'u1_l7_4', type: 'translate', prompt: 'You drink water.', options: ['Sen su içersin.', 'Ben su içerim.', 'Sen su istersin.'], correctIndex: 0 }
];

const mixLesson1: Question[] = [
  { id: 'u1_l8_1', type: 'speak', prompt: 'Yes, I want water.', options: [], correctIndex: 0, audioText: 'Yes, I want water.', audioLang: 'en-US' },
  { id: 'u1_l8_2', type: 'listen', prompt: 'Dinlediğin cümleyi bul.', options: ['You drink water.', 'I drink water.', 'You want water.'], correctIndex: 0, audioText: 'You drink water.', audioLang: 'en-US' },
  { id: 'u1_l8_3', type: 'constructSentence', prompt: 'Hayır, sen su istersin.', options: ['No,', 'you', 'want', 'water.', 'I'], correctAnswer: ['No,', 'you', 'want', 'water.'] },
  { id: 'u1_l8_4', type: 'multipleChoice', prompt: 'Güzel', options: ['Bad', 'Ugly', 'Beautiful', 'Small'], correctIndex: 2 }
];

const finalReviewLesson1: Question[] = [
  { id: 'u1_l9_1', type: 'translate', prompt: 'Hello, you drink water.', options: ['Merhaba, sen su içersin.', 'Merhaba, ben su içerim.', 'Merhaba, su lütfen.'], correctIndex: 0 },
  { id: 'u1_l9_2', type: 'constructSentence', prompt: 'Ben güzel bir elma istiyorum.', options: ['I', 'want', 'a', 'beautiful', 'apple.', 'water'], correctAnswer: ['I', 'want', 'a', 'beautiful', 'apple.'] },
  { id: 'u1_l9_3', type: 'speak', prompt: 'No, thanks.', options: [], correctIndex: 0, audioText: 'No, thanks.', audioLang: 'en-US' },
  { id: 'u1_l9_4', type: 'listen', prompt: 'Dinlediğin cümleyi bul.', options: ['Yes, a beautiful apple.', 'No, a beautiful apple.', 'Yes, please.'], correctIndex: 0, audioText: 'Yes, a beautiful apple.', audioLang: 'en-US' },
];

export const englishCurriculumLessons: Record<string, LessonContent> = {
  'eng_u1_l1': {
    id: 'eng_u1_l1',
    title: 'Tanışma Kelimeleri 1',
    description: 'En temel yiyecek ve içecek kelimeleriyle başla.',
    icon: '🍎',
    xpReward: 20,
    questions: vocabLesson1
  },
  'eng_u1_l2': {
    id: 'eng_u1_l2',
    title: 'İlk Cümlelerin',
    description: 'Kelime ezberleme, hemen kullanmaya başla!',
    icon: '🧩',
    xpReward: 20,
    questions: sentenceLesson1
  },
  'eng_u1_l3': {
    id: 'eng_u1_l3',
    title: 'Sesli Pratik 1',
    description: 'Kurduğun cümleleri doğru bir telaffuzla seslendir.',
    icon: '🗣️',
    xpReward: 25,
    questions: speakingLesson1
  },
  'eng_u1_l4': {
    id: 'eng_u1_l4',
    title: 'Selamlaşma',
    description: 'Günlük hayatta kullanacağın ilk selamlaşma kelimeleri.',
    icon: '👋',
    xpReward: 20,
    questions: vocabLesson2
  },
  'eng_u1_l5': {
    id: 'eng_u1_l5',
    title: 'Dinleme Pratiği',
    description: 'Kulak dolgunluğu kazan, duyduğunu anla.',
    icon: '🎧',
    xpReward: 25,
    questions: listeningLesson1
  },
  'eng_u1_l6': {
    id: 'eng_u1_l6',
    title: 'İletişim Kur',
    description: 'Evet/Hayır diyerek kibarca iletişim kurmayı öğren.',
    icon: '💬',
    xpReward: 20,
    questions: sentenceLesson2
  },
  'eng_u1_l7': {
    id: 'eng_u1_l7',
    title: 'Sen ve Ben',
    description: 'Kendini ve karşındakini ifade etmeye başla.',
    icon: '👥',
    xpReward: 20,
    questions: grammarLesson1
  },
  'eng_u1_l8': {
    id: 'eng_u1_l8',
    title: 'Karışık Egzersiz 1',
    description: 'Şimdiye kadar öğrendiklerini bağlam içinde test et.',
    icon: '🔄',
    xpReward: 25,
    questions: mixLesson1
  },
  'eng_u1_l9': {
    id: 'eng_u1_l9',
    title: 'Büyük Sınav Öncesi',
    description: 'Son tekrarlarını yap, patronla yüzleşmeye hazırlan.',
    icon: '⚔️',
    xpReward: 30,
    questions: finalReviewLesson1
  },
  'eng_u1_checkpoint': {
    id: 'eng_u1_checkpoint',
    title: 'AI Roleplay Sınavı',
    description: 'Öğrendiklerini Lingo ile kafede konuşarak test et. Hedef: Su siparişi vermek.',
    icon: '🤖',
    xpReward: 50,
    questions: []
  }
};
