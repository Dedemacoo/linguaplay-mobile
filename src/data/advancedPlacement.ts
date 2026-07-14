import { Question } from '../types';

export const advancedQuestions: Question[] = [
  {
    id: "adv_1",
    type: "constructSentence",
    prompt: "Pardon, otel ne tarafta tarif edebilir misiniz?",
    options: ["Excuse", "me", "which", "way", "is", "the", "hotel", "could", "you", "describe", "it", "where", "can"],
    correctAnswer: ["Excuse", "me", "which", "way", "is", "the", "hotel", "could", "you", "describe", "it"]
  },
  {
    id: "adv_2",
    type: "constructSentence",
    prompt: "Ben şu an markete gidiyorum, bir şeye ihtiyacın var mı?",
    options: ["I", "am", "going", "to", "the", "supermarket", "right", "now", "do", "you", "need", "anything", "go", "will", "something"],
    correctAnswer: ["I", "am", "going", "to", "the", "supermarket", "right", "now", "do", "you", "need", "anything"]
  },
  {
    id: "adv_3",
    type: "constructSentence",
    prompt: "Uçağım yarın sabah erken saatte kalkıyor.",
    options: ["My", "flight", "leaves", "early", "tomorrow", "morning", "fly", "goes", "in", "the", "night"],
    correctAnswer: ["My", "flight", "leaves", "early", "tomorrow", "morning"]
  },
  {
    id: "adv_4",
    type: "speak",
    prompt: "Gecikme için gerçekten çok özür dilerim, trafik berbattı.",
    audioText: "I am really sorry for the delay, the traffic was terrible.",
    audioLang: "en-US"
  },
  {
    id: "adv_5",
    type: "constructSentence",
    prompt: "Toplantıyı yarına erteleyebilir miyiz?",
    options: ["Can", "we", "postpone", "the", "meeting", "until", "tomorrow", "to", "make", "delay", "time"],
    correctAnswer: ["Can", "we", "postpone", "the", "meeting", "until", "tomorrow"]
  },
  {
    id: "adv_6",
    type: "constructSentence",
    prompt: "Daha önce hiç yurt dışına çıktın mı?",
    options: ["Have", "you", "ever", "been", "abroad", "before", "did", "go", "out", "country"],
    correctAnswer: ["Have", "you", "ever", "been", "abroad", "before"]
  },
  {
    id: "adv_7",
    type: "speak",
    prompt: "Sizinle tanışmak büyük bir zevkti.",
    audioText: "It was a great pleasure meeting you.",
    audioLang: "en-US"
  },
  {
    id: "adv_8",
    type: "constructSentence",
    prompt: "Bunu nasıl çözeceğimi anlamaya çalışıyorum.",
    options: ["I", "am", "trying", "to", "figure", "out", "how", "to", "solve", "this", "trying", "make", "understand", "what"],
    correctAnswer: ["I", "am", "trying", "to", "figure", "out", "how", "to", "solve", "this"]
  },
  {
    id: "adv_9",
    type: "constructSentence",
    prompt: "Bana bu konuda biraz daha bilgi verebilir misiniz?",
    options: ["Could", "you", "give", "me", "some", "more", "information", "about", "this", "can", "tell", "much", "data"],
    correctAnswer: ["Could", "you", "give", "me", "some", "more", "information", "about", "this"]
  },
  {
    id: "adv_10",
    type: "speak",
    prompt: "Ne yazık ki, teklifinizi kabul edemeyeceğiz.",
    audioText: "Unfortunately, we won't be able to accept your offer.",
    audioLang: "en-US"
  },
  {
    id: "adv_11",
    type: "constructSentence",
    prompt: "Boş zamanlarında neler yapmaktan hoşlanırsın?",
    options: ["What", "do", "you", "like", "to", "do", "in", "your", "free", "time", "what", "are", "doing", "hobby"],
    correctAnswer: ["What", "do", "you", "like", "to", "do", "in", "your", "free", "time"]
  },
  {
    id: "adv_12",
    type: "speak",
    prompt: "Bu akşam dışarı çıkmak yerine evde kalmayı tercih ederim.",
    audioText: "I would rather stay at home than go out tonight.",
    audioLang: "en-US"
  },
  {
    id: "adv_13",
    type: "constructSentence",
    prompt: "Projenin son teslim tarihi önümüzdeki Cuma.",
    options: ["The", "deadline", "for", "the", "project", "is", "next", "Friday", "last", "date", "of", "week"],
    correctAnswer: ["The", "deadline", "for", "the", "project", "is", "next", "Friday"]
  },
  {
    id: "adv_14",
    type: "constructSentence",
    prompt: "Hava o kadar soğuk ki dışarı çıkmak istemiyorum.",
    options: ["The", "weather", "is", "so", "cold", "that", "I", "don't", "want", "to", "go", "outside", "very", "chilly", "inside"],
    correctAnswer: ["The", "weather", "is", "so", "cold", "that", "I", "don't", "want", "to", "go", "outside"]
  },
  {
    id: "adv_15",
    type: "speak",
    prompt: "Onunla ne zaman görüşebileceğimi bilmiyorum.",
    audioText: "I don't know when I will be able to see him.",
    audioLang: "en-US"
  }
];
