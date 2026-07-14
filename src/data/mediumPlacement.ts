import { Question } from '../types';

export const mediumQuestions: Question[] = [
  {
    id: "medium_1",
    type: "constructSentence",
    prompt: "Ben genellikle sabahları erken kalkarım.",
    options: ["I", "usually", "wake", "up", "early", "in", "the", "morning", "always", "sometimes", "late"],
    correctAnswer: ["I", "usually", "wake", "up", "early", "in", "the", "morning"]
  },
  {
    id: "medium_2",
    type: "speak",
    prompt: "Dün akşam ne yaptın?",
    audioText: "What did you do last night?",
    audioLang: "en-US"
  },
  {
    id: "medium_3",
    type: "multipleChoice",
    prompt: "Aşağıdakilerden hangisi 'Meşgul' demektir?",
    options: ["Free", "Busy", "Tired", "Lazy"],
    correctIndex: 1
  },
  {
    id: "medium_4",
    type: "constructSentence",
    prompt: "Kardeşim benden daha uzun.",
    options: ["My", "brother", "is", "taller", "than", "me", "tall", "more", "then", "I"],
    correctAnswer: ["My", "brother", "is", "taller", "than", "me"]
  },
  {
    id: "medium_5",
    type: "translate",
    prompt: "I have been learning English for two years.",
    options: ["İki yıldır İngilizce öğreniyorum.", "İngilizceyi iki yılda öğrendim.", "İki yıl önce İngilizce öğrendim.", "İngilizce öğrenmeyi seviyorum."],
    correctIndex: 0
  },
  {
    id: "medium_6",
    type: "constructSentence",
    prompt: "Olası bir yağmur ihtimaline karşı şemsiyeni al.",
    options: ["Take", "your", "umbrella", "in", "case", "it", "rains", "bring", "rain", "for"],
    correctAnswer: ["Take", "your", "umbrella", "in", "case", "it", "rains"]
  },
  {
    id: "medium_7",
    type: "speak",
    prompt: "Bu hafta sonu sinemaya gitmek ister misin?",
    audioText: "Would you like to go to the cinema this weekend?",
    audioLang: "en-US"
  },
  {
    id: "medium_8",
    type: "multipleChoice",
    prompt: "Boşluğu doldurun: I was reading a book when the phone _____.",
    options: ["ring", "rang", "ringing", "rung"],
    correctIndex: 1
  },
  {
    id: "medium_9",
    type: "constructSentence",
    prompt: "Eğer daha çok çalışsaydın, sınavı geçerdin.",
    options: ["If", "you", "had", "studied", "harder", "you", "would", "have", "passed", "the", "exam", "will", "pass", "study"],
    correctAnswer: ["If", "you", "had", "studied", "harder", "you", "would", "have", "passed", "the", "exam"]
  },
  {
    id: "medium_10",
    type: "translate",
    prompt: "Could you please tell me how to get to the train station?",
    options: ["Tren istasyonuna nasıl gideceğimi söyler misiniz?", "Tren istasyonu nerede biliyor musunuz?", "Tren istasyonuna gitmek ne kadar sürer?", "Tren istasyonu yakın mı?"],
    correctIndex: 0
  },
  {
    id: "medium_11",
    type: "constructSentence",
    prompt: "Burada sigara içmek yasaktır.",
    options: ["Smoking", "is", "forbidden", "here", "not", "allowed", "smoke"],
    correctAnswer: ["Smoking", "is", "forbidden", "here"]
  },
  {
    id: "medium_12",
    type: "speak",
    prompt: "Daha önce hiç Sushi yedin mi?",
    audioText: "Have you ever eaten Sushi?",
    audioLang: "en-US"
  },
  {
    id: "medium_13",
    type: "multipleChoice",
    prompt: "Boşluğu doldurun: She is looking forward to _____ you.",
    options: ["meet", "meeting", "met", "meets"],
    correctIndex: 1
  },
  {
    id: "medium_14",
    type: "constructSentence",
    prompt: "Onunla dün buluşmam gerekiyordu.",
    options: ["I", "was", "supposed", "to", "meet", "him", "yesterday", "should", "met"],
    correctAnswer: ["I", "was", "supposed", "to", "meet", "him", "yesterday"]
  },
  {
    id: "medium_15",
    type: "translate",
    prompt: "It doesn't matter.",
    options: ["Önemli değil.", "Fark etmez.", "Benim için sorun yok.", "İkisi de uyar."],
    correctIndex: 0
  },
  {
    id: "medium_16",
    type: "speak",
    prompt: "Lütfen bana bunu nasıl yapacağımı açıkla.",
    audioText: "Please explain to me how to do this.",
    audioLang: "en-US"
  },
  {
    id: "medium_17",
    type: "constructSentence",
    prompt: "Yeni bir iş aradığını duydum.",
    options: ["I", "heard", "that", "you", "are", "looking", "for", "a", "new", "job", "hear", "work"],
    correctAnswer: ["I", "heard", "that", "you", "are", "looking", "for", "a", "new", "job"]
  },
  {
    id: "medium_18",
    type: "multipleChoice",
    prompt: "Hangi kelime yanlış yazılmıştır?",
    options: ["Environment", "Goverment", "Development", "Achievement"],
    correctIndex: 1
  },
  {
    id: "medium_19",
    type: "constructSentence",
    prompt: "Eğer paran olsaydı ne yapardın?",
    options: ["What", "would", "you", "do", "if", "you", "had", "money", "will", "have"],
    correctAnswer: ["What", "would", "you", "do", "if", "you", "had", "money"]
  },
  {
    id: "medium_20",
    type: "translate",
    prompt: "I am used to waking up early.",
    options: ["Erken kalkmaya alışkınım.", "Erken kalkmayı severim.", "Genellikle erken kalkarım.", "Erken kalkmak zorundayım."],
    correctIndex: 0
  }
];
