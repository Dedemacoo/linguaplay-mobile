import { Question } from '../types';

export const easyQuestions: Question[] = [
  {
    id: "easy_1",
    type: "constructSentence",
    prompt: "Merhaba, benim adım Ali.",
    options: ["Hello", "my", "name", "is", "Ali", "I", "am", "how", "are"],
    correctAnswer: ["Hello", "my", "name", "is", "Ali"]
  },
  {
    id: "easy_2",
    type: "multipleChoice",
    prompt: "Aşağıdakilerden hangisi 'Elma' demektir?",
    options: ["Apple", "Banana", "Orange", "Grape"],
    correctIndex: 0
  },
  {
    id: "easy_3",
    type: "speak",
    prompt: "Nasılsın?",
    audioText: "How are you?",
    audioLang: "en-US"
  },
  {
    id: "easy_4",
    type: "constructSentence",
    prompt: "Ben bir elma yerim.",
    options: ["I", "eat", "an", "apple", "he", "eats", "a", "the"],
    correctAnswer: ["I", "eat", "an", "apple"]
  },
  {
    id: "easy_5",
    type: "translate",
    prompt: "Good morning",
    options: ["Günaydın", "İyi akşamlar", "İyi geceler", "Merhaba"],
    correctIndex: 0
  },
  {
    id: "easy_6",
    type: "constructSentence",
    prompt: "O (kadın) çok güzel.",
    options: ["She", "is", "very", "beautiful", "he", "handsome", "too"],
    correctAnswer: ["She", "is", "very", "beautiful"]
  },
  {
    id: "easy_7",
    type: "speak",
    prompt: "Teşekkür ederim.",
    audioText: "Thank you.",
    audioLang: "en-US"
  },
  {
    id: "easy_8",
    type: "multipleChoice",
    prompt: "Aşağıdakilerden hangisi 'Su' demektir?",
    options: ["Milk", "Water", "Coffee", "Tea"],
    correctIndex: 1
  },
  {
    id: "easy_9",
    type: "constructSentence",
    prompt: "Biz okula gidiyoruz.",
    options: ["We", "are", "going", "to", "school", "they", "go", "hospital"],
    correctAnswer: ["We", "are", "going", "to", "school"]
  },
  {
    id: "easy_10",
    type: "translate",
    prompt: "I love you",
    options: ["Seni seviyorum", "Seni görüyorum", "Beni seviyorsun", "Hoşça kal"],
    correctIndex: 0
  },
  {
    id: "easy_11",
    type: "constructSentence",
    prompt: "Benim bir köpeğim var.",
    options: ["I", "have", "a", "dog", "has", "cat", "my"],
    correctAnswer: ["I", "have", "a", "dog"]
  },
  {
    id: "easy_12",
    type: "speak",
    prompt: "Lütfen bana yardım et.",
    audioText: "Please help me.",
    audioLang: "en-US"
  },
  {
    id: "easy_13",
    type: "multipleChoice",
    prompt: "Aşağıdakilerden hangisi 'Kedi' demektir?",
    options: ["Dog", "Bird", "Cat", "Fish"],
    correctIndex: 2
  },
  {
    id: "easy_14",
    type: "constructSentence",
    prompt: "Kitap masanın üstünde.",
    options: ["The", "book", "is", "on", "the", "table", "under", "in"],
    correctAnswer: ["The", "book", "is", "on", "the", "table"]
  },
  {
    id: "easy_15",
    type: "translate",
    prompt: "Where is the bathroom?",
    options: ["Banyo nerede?", "Oda nerede?", "Mutfak nerede?", "Banyo nasıl?"],
    correctIndex: 0
  },
  {
    id: "easy_16",
    type: "speak",
    prompt: "Memnun oldum.",
    audioText: "Nice to meet you.",
    audioLang: "en-US"
  },
  {
    id: "easy_17",
    type: "constructSentence",
    prompt: "Saat kaç?",
    options: ["What", "time", "is", "it", "how", "much", "hour"],
    correctAnswer: ["What", "time", "is", "it"]
  },
  {
    id: "easy_18",
    type: "multipleChoice",
    prompt: "Aşağıdakilerden hangisi 'Sıcak' demektir?",
    options: ["Cold", "Warm", "Hot", "Cool"],
    correctIndex: 2
  },
  {
    id: "easy_19",
    type: "constructSentence",
    prompt: "Bugün hava güneşli.",
    options: ["The", "weather", "is", "sunny", "today", "rainy", "tomorrow"],
    correctAnswer: ["The", "weather", "is", "sunny", "today"]
  },
  {
    id: "easy_20",
    type: "translate",
    prompt: "I am thirsty",
    options: ["Açım", "Susadım", "Yorgunum", "Hastayım"],
    correctIndex: 1
  }
];
