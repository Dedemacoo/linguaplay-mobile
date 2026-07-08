import { LessonContent } from './lessonContent';

export const frenchContent: LessonContent[] = [
  {
    "id": "f1",
    "title": "Temeller 1",
    "description": "Temel kavramlar",
    "icon": "🥚",
    "xpReward": 20,
    "questions": [
      {
        "id": "f1q1",
        "type": "flashcard",
        "prompt": "Hayır",
        "options": [],
        "correctIndex": 0,
        "audioText": "Non",
        "audioLang": "fr-FR",
        "imageOptions": [
          "❌"
        ]
      },
      {
        "id": "f1q2",
        "type": "flashcard",
        "prompt": "Özür dilerim",
        "options": [],
        "correctIndex": 0,
        "audioText": "Désolé",
        "audioLang": "fr-FR",
        "imageOptions": [
          "😔"
        ]
      },
      {
        "id": "f1q3",
        "type": "flashcard",
        "prompt": "Merhaba",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bonjour",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👋"
        ]
      },
      {
        "id": "f1q4",
        "type": "flashcard",
        "prompt": "Teşekkürler",
        "options": [],
        "correctIndex": 0,
        "audioText": "Merci",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🙏"
        ]
      },
      {
        "id": "f1q5",
        "type": "flashcard",
        "prompt": "Lütfen",
        "options": [],
        "correctIndex": 0,
        "audioText": "S'il vous plaît",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🥺"
        ]
      },
      {
        "id": "f1q6",
        "type": "flashcard",
        "prompt": "Evet",
        "options": [],
        "correctIndex": 0,
        "audioText": "Oui",
        "audioLang": "fr-FR",
        "imageOptions": [
          "✅"
        ]
      },
      {
        "type": "translate",
        "prompt": "\"Teşekkürler\" nasıl söylenir?",
        "options": [
          "Merci",
          "Bonjour",
          "Oui",
          "Non"
        ],
        "correctIndex": 0,
        "audioText": "Merci",
        "audioLang": "fr-FR",
        "id": "f1q7"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Désolé\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Özür dilerim",
          "Merhaba",
          "Teşekkürler",
          "Evet"
        ],
        "correctIndex": 0,
        "audioText": "Désolé",
        "audioLang": "fr-FR",
        "id": "f1q8"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Oui\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Evet",
          "Merhaba",
          "Teşekkürler",
          "Hayır"
        ],
        "correctIndex": 0,
        "audioText": "Oui",
        "audioLang": "fr-FR",
        "id": "f1q9"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Non\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Hayır",
          "Merhaba",
          "Teşekkürler",
          "Evet"
        ],
        "correctIndex": 0,
        "audioText": "Non",
        "audioLang": "fr-FR",
        "id": "f1q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Evet teşekkürler\"",
        "options": [
          "S'il vous plaît",
          "Oui",
          "Merci",
          "merci"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Oui",
          "merci"
        ],
        "audioText": "Oui merci",
        "audioLang": "fr-FR",
        "id": "f1q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Hayır lütfen\"",
        "options": [
          "Désolé",
          "plaît",
          "Non",
          "vous",
          "s'il",
          "Merci"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Non",
          "s'il",
          "vous",
          "plaît"
        ],
        "audioText": "Non s'il vous plaît",
        "audioLang": "fr-FR",
        "id": "f1q12"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Evet lütfen\"",
        "options": [
          "Oui",
          "plaît",
          "Bonjour",
          "vous",
          "Non",
          "s'il"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Oui",
          "s'il",
          "vous",
          "plaît"
        ],
        "audioText": "Oui s'il vous plaît",
        "audioLang": "fr-FR",
        "id": "f1q13"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Merhaba ve teşekkürler\"",
        "options": [
          "Oui",
          "et",
          "merci",
          "Bonjour",
          "Non"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bonjour",
          "et",
          "merci"
        ],
        "audioText": "Bonjour et merci",
        "audioLang": "fr-FR",
        "id": "f1q14"
      }
    ]
  },
  {
    "id": "f2",
    "title": "Temel Eylemler",
    "description": "Günlük fiilleri öğren",
    "icon": "🏃",
    "xpReward": 20,
    "questions": [
      {
        "id": "f2q1",
        "type": "flashcard",
        "prompt": "İçmek",
        "options": [],
        "correctIndex": 0,
        "audioText": "Boire",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🥤"
        ]
      },
      {
        "id": "f2q2",
        "type": "flashcard",
        "prompt": "Yemek",
        "options": [],
        "correctIndex": 0,
        "audioText": "Manger",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🍽️"
        ]
      },
      {
        "id": "f2q3",
        "type": "flashcard",
        "prompt": "Uyumak",
        "options": [],
        "correctIndex": 0,
        "audioText": "Dormir",
        "audioLang": "fr-FR",
        "imageOptions": [
          "💤"
        ]
      },
      {
        "id": "f2q4",
        "type": "flashcard",
        "prompt": "Koşmak",
        "options": [],
        "correctIndex": 0,
        "audioText": "Courir",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🏃"
        ]
      },
      {
        "id": "f2q5",
        "type": "flashcard",
        "prompt": "Gitmek",
        "options": [],
        "correctIndex": 0,
        "audioText": "Aller",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🚶"
        ]
      },
      {
        "type": "translate",
        "prompt": "\"Koşmak\" nasıl söylenir?",
        "options": [
          "Courir",
          "Manger",
          "Boire",
          "Dormir"
        ],
        "correctIndex": 0,
        "audioText": "Courir",
        "audioLang": "fr-FR",
        "id": "f2q6"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Boire\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "İçmek",
          "Yemek",
          "Uyumak",
          "Koşmak"
        ],
        "correctIndex": 0,
        "audioText": "Boire",
        "audioLang": "fr-FR",
        "id": "f2q7"
      },
      {
        "type": "translate",
        "prompt": "\"İçmek\" nasıl söylenir?",
        "options": [
          "Boire",
          "Manger",
          "Dormir",
          "Courir"
        ],
        "correctIndex": 0,
        "audioText": "Boire",
        "audioLang": "fr-FR",
        "id": "f2q8"
      },
      {
        "type": "translate",
        "prompt": "\"Uyumak\" nasıl söylenir?",
        "options": [
          "Dormir",
          "Manger",
          "Boire",
          "Courir"
        ],
        "correctIndex": 0,
        "audioText": "Dormir",
        "audioLang": "fr-FR",
        "id": "f2q9"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Okula gidiyorum\"",
        "options": [
          "Dormir",
          "vais",
          "Aller",
          "Je",
          "l'école",
          "à"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Je",
          "vais",
          "à",
          "l'école"
        ],
        "audioText": "Je vais à l'école",
        "audioLang": "fr-FR",
        "id": "f2q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"O hızlı koşar\"",
        "options": [
          "Aller",
          "Il",
          "Dormir",
          "court",
          "vite"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Il",
          "court",
          "vite"
        ],
        "audioText": "Il court vite",
        "audioLang": "fr-FR",
        "id": "f2q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Ben yemek yiyorum\"",
        "options": [
          "Manger",
          "mange",
          "Aller",
          "Je"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Je",
          "mange"
        ],
        "audioText": "Je mange",
        "audioLang": "fr-FR",
        "id": "f2q12"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Uyumak istiyorum\"",
        "options": [
          "Boire",
          "Je",
          "veux",
          "dormir",
          "Dormir"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Je",
          "veux",
          "dormir"
        ],
        "audioText": "Je veux dormir",
        "audioLang": "fr-FR",
        "id": "f2q13"
      }
    ]
  },
  {
    "id": "f3",
    "title": "Temeller 2",
    "description": "Günlük kelimeler",
    "icon": "🍎",
    "xpReward": 20,
    "questions": [
      {
        "id": "f3q1",
        "type": "flashcard",
        "prompt": "İyi",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bien",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👍"
        ]
      },
      {
        "id": "f3q2",
        "type": "flashcard",
        "prompt": "Günaydın",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bonjour",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🌅"
        ]
      },
      {
        "id": "f3q3",
        "type": "flashcard",
        "prompt": "İyi geceler",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bonne nuit",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🌃"
        ]
      },
      {
        "id": "f3q4",
        "type": "flashcard",
        "prompt": "Kötü",
        "options": [],
        "correctIndex": 0,
        "audioText": "Mauvais",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👎"
        ]
      },
      {
        "type": "translate",
        "prompt": "\"İyi geceler\" nasıl söylenir?",
        "options": [
          "Bonne nuit",
          "Bien",
          "Mauvais",
          "Bonjour"
        ],
        "correctIndex": 0,
        "audioText": "Bonne nuit",
        "audioLang": "fr-FR",
        "id": "f3q5"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Bien\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "İyi",
          "Kötü",
          "Günaydın",
          "İyi geceler"
        ],
        "correctIndex": 0,
        "audioText": "Bien",
        "audioLang": "fr-FR",
        "id": "f3q6"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Bonne nuit\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "İyi geceler",
          "İyi",
          "Kötü",
          "Günaydın"
        ],
        "correctIndex": 0,
        "audioText": "Bonne nuit",
        "audioLang": "fr-FR",
        "id": "f3q7"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Mauvais\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Kötü",
          "İyi",
          "Günaydın",
          "İyi geceler"
        ],
        "correctIndex": 0,
        "audioText": "Mauvais",
        "audioLang": "fr-FR",
        "id": "f3q8"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"İyi ve kötü\"",
        "options": [
          "mauvais",
          "Bien",
          "Bonne nuit",
          "Mauvais",
          "et"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bien",
          "et",
          "mauvais"
        ],
        "audioText": "Bien et mauvais",
        "audioLang": "fr-FR",
        "id": "f3q9"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"İyi geceler\"",
        "options": [
          "Bonjour",
          "Bien",
          "nuit",
          "Bonne"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bonne",
          "nuit"
        ],
        "audioText": "Bonne nuit",
        "audioLang": "fr-FR",
        "id": "f3q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Kötü gece\"",
        "options": [
          "Bonjour",
          "nuit",
          "Mauvaise",
          "Bonne nuit"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Mauvaise",
          "nuit"
        ],
        "audioText": "Mauvaise nuit",
        "audioLang": "fr-FR",
        "id": "f3q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Günaydın iyi\"",
        "options": [
          "Bien",
          "Bonne nuit",
          "Bonjour",
          "bien"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bonjour",
          "bien"
        ],
        "audioText": "Bonjour bien",
        "audioLang": "fr-FR",
        "id": "f3q12"
      }
    ]
  },
  {
    "id": "f4",
    "title": "Selamlaşma",
    "description": "Nezaket ifadeleri",
    "icon": "🤝",
    "xpReward": 20,
    "questions": [
      {
        "id": "f4q1",
        "type": "flashcard",
        "prompt": "İyiyim",
        "options": [],
        "correctIndex": 0,
        "audioText": "Je vais bien",
        "audioLang": "fr-FR",
        "imageOptions": [
          "😊"
        ]
      },
      {
        "id": "f4q2",
        "type": "flashcard",
        "prompt": "Nasılsın",
        "options": [],
        "correctIndex": 0,
        "audioText": "Comment ça va",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🤔"
        ]
      },
      {
        "id": "f4q3",
        "type": "flashcard",
        "prompt": "Görüşürüz",
        "options": [],
        "correctIndex": 0,
        "audioText": "Au revoir",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👋"
        ]
      },
      {
        "id": "f4q4",
        "type": "flashcard",
        "prompt": "Hoş geldin",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bienvenue",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🤗"
        ]
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Bienvenue\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Hoş geldin",
          "Görüşürüz",
          "Nasılsın",
          "İyiyim"
        ],
        "correctIndex": 0,
        "audioText": "Bienvenue",
        "audioLang": "fr-FR",
        "id": "f4q5"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Comment ça va\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Nasılsın",
          "Hoş geldin",
          "Görüşürüz",
          "İyiyim"
        ],
        "correctIndex": 0,
        "audioText": "Comment ça va",
        "audioLang": "fr-FR",
        "id": "f4q6"
      },
      {
        "type": "translate",
        "prompt": "\"Görüşürüz\" nasıl söylenir?",
        "options": [
          "Au revoir",
          "Bienvenue",
          "Comment ça va",
          "Je vais bien"
        ],
        "correctIndex": 0,
        "audioText": "Au revoir",
        "audioLang": "fr-FR",
        "id": "f4q7"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Je vais bien\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "İyiyim",
          "Hoş geldin",
          "Görüşürüz",
          "Nasılsın"
        ],
        "correctIndex": 0,
        "audioText": "Je vais bien",
        "audioLang": "fr-FR",
        "id": "f4q8"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Nasılsın iyiyim\"",
        "options": [
          "ça",
          "je",
          "va",
          "vais",
          "Au revoir",
          "bien",
          "Comment",
          "Je vais bien"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Comment",
          "ça",
          "va",
          "je",
          "vais",
          "bien"
        ],
        "audioText": "Comment ça va je vais bien",
        "audioLang": "fr-FR",
        "id": "f4q9"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Hoş geldin görüşürüz\"",
        "options": [
          "au",
          "Bienvenue",
          "Au revoir",
          "revoir",
          "Comment ça va"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bienvenue",
          "au",
          "revoir"
        ],
        "audioText": "Bienvenue au revoir",
        "audioLang": "fr-FR",
        "id": "f4q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"İyiyim görüşürüz\"",
        "options": [
          "revoir",
          "vais",
          "Je",
          "bien",
          "Comment ça va",
          "Bienvenue",
          "au"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Je",
          "vais",
          "bien",
          "au",
          "revoir"
        ],
        "audioText": "Je vais bien au revoir",
        "audioLang": "fr-FR",
        "id": "f4q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Merhaba hoş geldin\"",
        "options": [
          "Au revoir",
          "Bonjour",
          "Comment ça va",
          "bienvenue"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Bonjour",
          "bienvenue"
        ],
        "audioText": "Bonjour bienvenue",
        "audioLang": "fr-FR",
        "id": "f4q12"
      }
    ]
  },
  {
    "id": "f5",
    "title": "Aile",
    "description": "Aile bireyleri",
    "icon": "👨‍👩‍👧",
    "xpReward": 20,
    "questions": [
      {
        "id": "f5q1",
        "type": "flashcard",
        "prompt": "Aile",
        "options": [],
        "correctIndex": 0,
        "audioText": "Famille",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🏡"
        ]
      },
      {
        "id": "f5q2",
        "type": "flashcard",
        "prompt": "Kardeş",
        "options": [],
        "correctIndex": 0,
        "audioText": "Frère/Sœur",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👧"
        ]
      },
      {
        "id": "f5q3",
        "type": "flashcard",
        "prompt": "Anne",
        "options": [],
        "correctIndex": 0,
        "audioText": "Mère",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👩"
        ]
      },
      {
        "id": "f5q4",
        "type": "flashcard",
        "prompt": "Baba",
        "options": [],
        "correctIndex": 0,
        "audioText": "Père",
        "audioLang": "fr-FR",
        "imageOptions": [
          "👨"
        ]
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Mère\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Anne",
          "Baba",
          "Kardeş",
          "Aile"
        ],
        "correctIndex": 0,
        "audioText": "Mère",
        "audioLang": "fr-FR",
        "id": "f5q5"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Père\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Baba",
          "Anne",
          "Kardeş",
          "Aile"
        ],
        "correctIndex": 0,
        "audioText": "Père",
        "audioLang": "fr-FR",
        "id": "f5q6"
      },
      {
        "type": "translate",
        "prompt": "\"Baba\" nasıl söylenir?",
        "options": [
          "Père",
          "Mère",
          "Frère/Sœur",
          "Famille"
        ],
        "correctIndex": 0,
        "audioText": "Père",
        "audioLang": "fr-FR",
        "id": "f5q7"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Famille\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Aile",
          "Anne",
          "Baba",
          "Kardeş"
        ],
        "correctIndex": 0,
        "audioText": "Famille",
        "audioLang": "fr-FR",
        "id": "f5q8"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Baba ve kardeş\"",
        "options": [
          "Père",
          "frère",
          "et",
          "Frère/Sœur",
          "Mère"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Père",
          "et",
          "frère"
        ],
        "audioText": "Père et frère",
        "audioLang": "fr-FR",
        "id": "f5q9"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Kardeş ve aile\"",
        "options": [
          "famille",
          "Mère",
          "Frère",
          "Père",
          "et"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Frère",
          "et",
          "famille"
        ],
        "audioText": "Frère et famille",
        "audioLang": "fr-FR",
        "id": "f5q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Anne ve baba\"",
        "options": [
          "père",
          "et",
          "Frère/Sœur",
          "Famille",
          "Mère"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Mère",
          "et",
          "père"
        ],
        "audioText": "Mère et père",
        "audioLang": "fr-FR",
        "id": "f5q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Benim ailem\"",
        "options": [
          "Mère",
          "Ma",
          "famille",
          "Frère/Sœur"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Ma",
          "famille"
        ],
        "audioText": "Ma famille",
        "audioLang": "fr-FR",
        "id": "f5q12"
      }
    ]
  },
  {
    "id": "f6",
    "title": "Renkler ve Sayılar",
    "description": "Temeller",
    "icon": "🎨",
    "xpReward": 20,
    "questions": [
      {
        "id": "f6q1",
        "type": "flashcard",
        "prompt": "İki",
        "options": [],
        "correctIndex": 0,
        "audioText": "Deux",
        "audioLang": "fr-FR",
        "imageOptions": [
          "2️⃣"
        ]
      },
      {
        "id": "f6q2",
        "type": "flashcard",
        "prompt": "Kırmızı",
        "options": [],
        "correctIndex": 0,
        "audioText": "Rouge",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🔴"
        ]
      },
      {
        "id": "f6q3",
        "type": "flashcard",
        "prompt": "Mavi",
        "options": [],
        "correctIndex": 0,
        "audioText": "Bleu",
        "audioLang": "fr-FR",
        "imageOptions": [
          "🔵"
        ]
      },
      {
        "id": "f6q4",
        "type": "flashcard",
        "prompt": "Bir",
        "options": [],
        "correctIndex": 0,
        "audioText": "Un",
        "audioLang": "fr-FR",
        "imageOptions": [
          "1️⃣"
        ]
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Bleu\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Mavi",
          "Kırmızı",
          "Bir",
          "İki"
        ],
        "correctIndex": 0,
        "audioText": "Bleu",
        "audioLang": "fr-FR",
        "id": "f6q5"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Rouge\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Kırmızı",
          "Mavi",
          "Bir",
          "İki"
        ],
        "correctIndex": 0,
        "audioText": "Rouge",
        "audioLang": "fr-FR",
        "id": "f6q6"
      },
      {
        "type": "translate",
        "prompt": "\"Mavi\" nasıl söylenir?",
        "options": [
          "Bleu",
          "Rouge",
          "Un",
          "Deux"
        ],
        "correctIndex": 0,
        "audioText": "Bleu",
        "audioLang": "fr-FR",
        "id": "f6q7"
      },
      {
        "type": "multipleChoice",
        "prompt": "\"Un\" kelimesinin Türkçe anlamı nedir?",
        "options": [
          "Bir",
          "Kırmızı",
          "Mavi",
          "İki"
        ],
        "correctIndex": 0,
        "audioText": "Un",
        "audioLang": "fr-FR",
        "id": "f6q8"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Bir kırmızı\"",
        "options": [
          "Un",
          "Bleu",
          "rouge",
          "Rouge"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Un",
          "rouge"
        ],
        "audioText": "Un rouge",
        "audioLang": "fr-FR",
        "id": "f6q9"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Kırmızı ve mavi\"",
        "options": [
          "Bleu",
          "bleu",
          "Rouge",
          "et",
          "Deux"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Rouge",
          "et",
          "bleu"
        ],
        "audioText": "Rouge et bleu",
        "audioLang": "fr-FR",
        "id": "f6q10"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"İki mavi\"",
        "options": [
          "Rouge",
          "Un",
          "bleus",
          "Deux"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Deux",
          "bleus"
        ],
        "audioText": "Deux bleus",
        "audioLang": "fr-FR",
        "id": "f6q11"
      },
      {
        "type": "constructSentence",
        "prompt": "Şu cümleyi çevir: \"Bir iki\"",
        "options": [
          "Un",
          "Rouge",
          "Deux",
          "deux"
        ],
        "correctIndex": 0,
        "correctAnswer": [
          "Un",
          "deux"
        ],
        "audioText": "Un deux",
        "audioLang": "fr-FR",
        "id": "f6q12"
      }
    ]
  }
,
  {
  "id": "f7",
  "title": "Sayılar",
  "description": "Sayıları öğren",
  "icon": "1️⃣",
  "xpReward": 20,
  "questions": [
    {
      "id": "f7q1",
      "type": "flashcard",
      "prompt": "Bir",
      "options": [],
      "correctIndex": 0,
      "audioText": "Un",
      "audioLang": "fr-FR",
      "imageOptions": [
        "1️⃣"
      ]
    },
    {
                "id": "f7q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bir ve İki\"",
                "options": [
                          "Quatre",
                          "et",
                          "Deux",
                          "Trois",
                          "Un"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Un",
                          "et",
                          "Deux"
                ],
                "audioText": "Un et Deux",
                "audioLang": "fr-FR"
    },
    {
                "id": "f7q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Üç görüyorum\"",
                "options": [
                          "Deux",
                          "Je",
                          "Cinq",
                          "Trois",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Trois",
                          "vois"
                ],
                "audioText": "Je Trois vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f7q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dört\"",
                "options": [
                          "Dix",
                          "C'est",
                          "Quatre",
                          "Deux"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Quatre"
                ],
                "audioText": "C'est Quatre",
                "audioLang": "fr-FR"
    },
    {
      "id": "f7q2",
      "type": "flashcard",
      "prompt": "İki",
      "options": [],
      "correctIndex": 0,
      "audioText": "Deux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "2️⃣"
      ]
    },
    {
      "id": "f7q3",
      "type": "flashcard",
      "prompt": "Üç",
      "options": [],
      "correctIndex": 0,
      "audioText": "Trois",
      "audioLang": "fr-FR",
      "imageOptions": [
        "3️⃣"
      ]
    },
    {
      "id": "f7q4",
      "type": "flashcard",
      "prompt": "Dört",
      "options": [],
      "correctIndex": 0,
      "audioText": "Quatre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "4️⃣"
      ]
    },
    {
      "id": "f7q5",
      "type": "flashcard",
      "prompt": "Beş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cinq",
      "audioLang": "fr-FR",
      "imageOptions": [
        "5️⃣"
      ]
    },
    {
      "id": "f7q6",
      "type": "flashcard",
      "prompt": "Altı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Six",
      "audioLang": "fr-FR",
      "imageOptions": [
        "6️⃣"
      ]
    },
    {
      "id": "f7q7",
      "type": "multipleChoice",
      "prompt": "\"Un\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bir",
        "Üç",
        "İki",
        "On"
      ],
      "correctIndex": 0,
      "audioText": "Un",
      "audioLang": "fr-FR"
    },
    {
      "id": "f7q8",
      "type": "multipleChoice",
      "prompt": "\"Deux\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Üç",
        "Bir",
        "İki",
        "Yedi"
      ],
      "correctIndex": 2,
      "audioText": "Deux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f7q9",
      "type": "multipleChoice",
      "prompt": "\"Trois\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Üç",
        "Bir",
        "Dokuz",
        "İki"
      ],
      "correctIndex": 0,
      "audioText": "Trois",
      "audioLang": "fr-FR"
    },
    {
      "id": "f7q10",
      "type": "translate",
      "prompt": "\"Dört\" nasıl söylenir?",
      "options": [
        "Quatre",
        "Neuf",
        "Un",
        "Deux"
      ],
      "correctIndex": 0,
      "audioText": "Quatre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f7q11",
      "type": "translate",
      "prompt": "\"Beş\" nasıl söylenir?",
      "options": [
        "Six",
        "Cinq",
        "Deux",
        "Trois"
      ],
      "correctIndex": 1,
      "audioText": "Cinq",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f8",
  "title": "Günler ve Aylar",
  "description": "Haftanın günleri",
  "icon": "📅",
  "xpReward": 20,
  "questions": [
    {
      "id": "f8q1",
      "type": "flashcard",
      "prompt": "Pazartesi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lundi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
                "id": "f8q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pazartesi ve Salı\"",
                "options": [
                          "Mardi",
                          "et",
                          "Lundi",
                          "Jeudi",
                          "Vendredi"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Lundi",
                          "et",
                          "Mardi"
                ],
                "audioText": "Lundi et Mardi",
                "audioLang": "fr-FR"
    },
    {
                "id": "f8q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Çarşamba görüyorum\"",
                "options": [
                          "vois",
                          "Je",
                          "Lundi",
                          "Vendredi",
                          "Mercredi"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Mercredi",
                          "vois"
                ],
                "audioText": "Je Mercredi vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f8q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Perşembe\"",
                "options": [
                          "Lundi",
                          "Jeudi",
                          "Dimanche",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Jeudi"
                ],
                "audioText": "C'est Jeudi",
                "audioLang": "fr-FR"
    },
    {
      "id": "f8q2",
      "type": "flashcard",
      "prompt": "Salı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mardi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f8q3",
      "type": "flashcard",
      "prompt": "Çarşamba",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mercredi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f8q4",
      "type": "flashcard",
      "prompt": "Perşembe",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jeudi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f8q5",
      "type": "flashcard",
      "prompt": "Cuma",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vendredi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f8q6",
      "type": "flashcard",
      "prompt": "Cumartesi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Samedi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f8q7",
      "type": "multipleChoice",
      "prompt": "\"Lundi\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çarşamba",
        "Salı",
        "Pazar",
        "Pazartesi"
      ],
      "correctIndex": 3,
      "audioText": "Lundi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f8q8",
      "type": "multipleChoice",
      "prompt": "\"Mardi\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Perşembe",
        "Salı",
        "Cumartesi",
        "Cuma"
      ],
      "correctIndex": 1,
      "audioText": "Mardi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f8q9",
      "type": "multipleChoice",
      "prompt": "\"Mercredi\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Pazar",
        "Pazartesi",
        "Perşembe",
        "Çarşamba"
      ],
      "correctIndex": 3,
      "audioText": "Mercredi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f8q10",
      "type": "translate",
      "prompt": "\"Perşembe\" nasıl söylenir?",
      "options": [
        "Mercredi",
        "Lundi",
        "Jeudi",
        "Mardi"
      ],
      "correctIndex": 2,
      "audioText": "Jeudi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f8q11",
      "type": "translate",
      "prompt": "\"Cuma\" nasıl söylenir?",
      "options": [
        "Vendredi",
        "Samedi",
        "Mardi",
        "Jeudi"
      ],
      "correctIndex": 0,
      "audioText": "Vendredi",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f9",
  "title": "Saatler",
  "description": "Zamanı ifade et",
  "icon": "⏰",
  "xpReward": 20,
  "questions": [
    {
      "id": "f9q1",
      "type": "flashcard",
      "prompt": "Saat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Heure",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🕐"
      ]
    },
    {
                "id": "f9q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sabah ve Öğle\"",
                "options": [
                          "Midi",
                          "Heure",
                          "Matin",
                          "et",
                          "Nuit"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Matin",
                          "et",
                          "Midi"
                ],
                "audioText": "Matin et Midi",
                "audioLang": "fr-FR"
    },
    {
                "id": "f9q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Akşam görüyorum\"",
                "options": [
                          "Heure",
                          "Je",
                          "Midi",
                          "Soir",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Soir",
                          "vois"
                ],
                "audioText": "Je Soir vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f9q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Gece\"",
                "options": [
                          "Matin",
                          "Midi",
                          "C'est",
                          "Nuit"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Nuit"
                ],
                "audioText": "C'est Nuit",
                "audioLang": "fr-FR"
    },
    {
      "id": "f9q2",
      "type": "flashcard",
      "prompt": "Dakika",
      "options": [],
      "correctIndex": 0,
      "audioText": "Minute",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⏱️"
      ]
    },
    {
      "id": "f9q3",
      "type": "flashcard",
      "prompt": "Sabah",
      "options": [],
      "correctIndex": 0,
      "audioText": "Matin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌅"
      ]
    },
    {
      "id": "f9q4",
      "type": "flashcard",
      "prompt": "Öğle",
      "options": [],
      "correctIndex": 0,
      "audioText": "Midi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☀️"
      ]
    },
    {
      "id": "f9q5",
      "type": "flashcard",
      "prompt": "Akşam",
      "options": [],
      "correctIndex": 0,
      "audioText": "Soir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌆"
      ]
    },
    {
      "id": "f9q6",
      "type": "flashcard",
      "prompt": "Gece",
      "options": [],
      "correctIndex": 0,
      "audioText": "Nuit",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌙"
      ]
    },
    {
      "id": "f9q7",
      "type": "multipleChoice",
      "prompt": "\"Heure\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Saat",
        "Dakika",
        "Akşam",
        "Sabah"
      ],
      "correctIndex": 0,
      "audioText": "Heure",
      "audioLang": "fr-FR"
    },
    {
      "id": "f9q8",
      "type": "multipleChoice",
      "prompt": "\"Minute\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Dakika",
        "Öğle",
        "Gece",
        "Akşam"
      ],
      "correctIndex": 0,
      "audioText": "Minute",
      "audioLang": "fr-FR"
    },
    {
      "id": "f9q9",
      "type": "multipleChoice",
      "prompt": "\"Matin\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sabah",
        "Gece",
        "Öğle",
        "Akşam"
      ],
      "correctIndex": 0,
      "audioText": "Matin",
      "audioLang": "fr-FR"
    },
    {
      "id": "f9q10",
      "type": "translate",
      "prompt": "\"Öğle\" nasıl söylenir?",
      "options": [
        "Midi",
        "Heure",
        "Matin",
        "Minute"
      ],
      "correctIndex": 0,
      "audioText": "Midi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f9q11",
      "type": "translate",
      "prompt": "\"Akşam\" nasıl söylenir?",
      "options": [
        "Nuit",
        "Midi",
        "Matin",
        "Soir"
      ],
      "correctIndex": 3,
      "audioText": "Soir",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f10",
  "title": "Evcil Hayvanlar",
  "description": "Evdeki hayvanlar",
  "icon": "🐶",
  "xpReward": 20,
  "questions": [
    {
      "id": "f10q1",
      "type": "flashcard",
      "prompt": "Kedi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chat",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐱"
      ]
    },
    {
                "id": "f10q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kedi ve Köpek\"",
                "options": [
                          "Chien",
                          "et",
                          "Poisson",
                          "Chat",
                          "Lapin"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Chat",
                          "et",
                          "Chien"
                ],
                "audioText": "Chat et Chien",
                "audioLang": "fr-FR"
    },
    {
                "id": "f10q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kuş görüyorum\"",
                "options": [
                          "Je",
                          "Oiseau",
                          "Chat",
                          "Lapin",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Oiseau",
                          "vois"
                ],
                "audioText": "Je Oiseau vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f10q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Balık\"",
                "options": [
                          "Poisson",
                          "C'est",
                          "Cheval",
                          "Chien"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Poisson"
                ],
                "audioText": "C'est Poisson",
                "audioLang": "fr-FR"
    },
    {
      "id": "f10q2",
      "type": "flashcard",
      "prompt": "Köpek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chien",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐶"
      ]
    },
    {
      "id": "f10q3",
      "type": "flashcard",
      "prompt": "Kuş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Oiseau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐦"
      ]
    },
    {
      "id": "f10q4",
      "type": "flashcard",
      "prompt": "Balık",
      "options": [],
      "correctIndex": 0,
      "audioText": "Poisson",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐟"
      ]
    },
    {
      "id": "f10q5",
      "type": "flashcard",
      "prompt": "Tavşan",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lapin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐰"
      ]
    },
    {
      "id": "f10q6",
      "type": "flashcard",
      "prompt": "At",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cheval",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐴"
      ]
    },
    {
      "id": "f10q7",
      "type": "multipleChoice",
      "prompt": "\"Chat\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kuş",
        "Tavşan",
        "Balık",
        "Kedi"
      ],
      "correctIndex": 3,
      "audioText": "Chat",
      "audioLang": "fr-FR"
    },
    {
      "id": "f10q8",
      "type": "multipleChoice",
      "prompt": "\"Chien\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "At",
        "Kuş",
        "Kedi",
        "Köpek"
      ],
      "correctIndex": 3,
      "audioText": "Chien",
      "audioLang": "fr-FR"
    },
    {
      "id": "f10q9",
      "type": "multipleChoice",
      "prompt": "\"Oiseau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kedi",
        "Kuş",
        "Tavşan",
        "Köpek"
      ],
      "correctIndex": 1,
      "audioText": "Oiseau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f10q10",
      "type": "translate",
      "prompt": "\"Balık\" nasıl söylenir?",
      "options": [
        "Chat",
        "Poisson",
        "Oiseau",
        "Cheval"
      ],
      "correctIndex": 1,
      "audioText": "Poisson",
      "audioLang": "fr-FR"
    },
    {
      "id": "f10q11",
      "type": "translate",
      "prompt": "\"Tavşan\" nasıl söylenir?",
      "options": [
        "Chien",
        "Poisson",
        "Lapin",
        "Chat"
      ],
      "correctIndex": 2,
      "audioText": "Lapin",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f11",
  "title": "Vahşi Hayvanlar",
  "description": "Yabani hayvanlar",
  "icon": "🦁",
  "xpReward": 20,
  "questions": [
    {
      "id": "f11q1",
      "type": "flashcard",
      "prompt": "Aslan",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lion",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦁"
      ]
    },
    {
                "id": "f11q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Aslan ve Kaplan\"",
                "options": [
                          "Tigre",
                          "et",
                          "Éléphant",
                          "Lion",
                          "Loup"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Lion",
                          "et",
                          "Tigre"
                ],
                "audioText": "Lion et Tigre",
                "audioLang": "fr-FR"
    },
    {
                "id": "f11q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Fil görüyorum\"",
                "options": [
                          "Je",
                          "vois",
                          "Éléphant",
                          "Loup",
                          "Lion"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Éléphant",
                          "vois"
                ],
                "audioText": "Je Éléphant vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f11q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ayı\"",
                "options": [
                          "Ours",
                          "C'est",
                          "Lion",
                          "Tigre"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Ours"
                ],
                "audioText": "C'est Ours",
                "audioLang": "fr-FR"
    },
    {
      "id": "f11q2",
      "type": "flashcard",
      "prompt": "Kaplan",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tigre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐯"
      ]
    },
    {
      "id": "f11q3",
      "type": "flashcard",
      "prompt": "Fil",
      "options": [],
      "correctIndex": 0,
      "audioText": "Éléphant",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐘"
      ]
    },
    {
      "id": "f11q4",
      "type": "flashcard",
      "prompt": "Ayı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ours",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐻"
      ]
    },
    {
      "id": "f11q5",
      "type": "flashcard",
      "prompt": "Kurt",
      "options": [],
      "correctIndex": 0,
      "audioText": "Loup",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐺"
      ]
    },
    {
      "id": "f11q6",
      "type": "flashcard",
      "prompt": "Tilki",
      "options": [],
      "correctIndex": 0,
      "audioText": "Renard",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦊"
      ]
    },
    {
      "id": "f11q7",
      "type": "multipleChoice",
      "prompt": "\"Lion\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Fil",
        "Kaplan",
        "Aslan",
        "Ayı"
      ],
      "correctIndex": 2,
      "audioText": "Lion",
      "audioLang": "fr-FR"
    },
    {
      "id": "f11q8",
      "type": "multipleChoice",
      "prompt": "\"Tigre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kaplan",
        "Fil",
        "Ayı",
        "Tilki"
      ],
      "correctIndex": 0,
      "audioText": "Tigre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f11q9",
      "type": "multipleChoice",
      "prompt": "\"Éléphant\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Fil",
        "Tilki",
        "Kurt",
        "Ayı"
      ],
      "correctIndex": 0,
      "audioText": "Éléphant",
      "audioLang": "fr-FR"
    },
    {
      "id": "f11q10",
      "type": "translate",
      "prompt": "\"Ayı\" nasıl söylenir?",
      "options": [
        "Lion",
        "Loup",
        "Renard",
        "Ours"
      ],
      "correctIndex": 3,
      "audioText": "Ours",
      "audioLang": "fr-FR"
    },
    {
      "id": "f11q11",
      "type": "translate",
      "prompt": "\"Kurt\" nasıl söylenir?",
      "options": [
        "Loup",
        "Éléphant",
        "Tigre",
        "Ours"
      ],
      "correctIndex": 0,
      "audioText": "Loup",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f12",
  "title": "Doğa",
  "description": "Doğadaki varlıklar",
  "icon": "🌳",
  "xpReward": 20,
  "questions": [
    {
      "id": "f12q1",
      "type": "flashcard",
      "prompt": "Ağaç",
      "options": [],
      "correctIndex": 0,
      "audioText": "Arbre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌳"
      ]
    },
    {
                "id": "f12q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ağaç ve Çiçek\"",
                "options": [
                          "Rivière",
                          "Mer",
                          "et",
                          "Fleur",
                          "Arbre"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Arbre",
                          "et",
                          "Fleur"
                ],
                "audioText": "Arbre et Fleur",
                "audioLang": "fr-FR"
    },
    {
                "id": "f12q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Dağ görüyorum\"",
                "options": [
                          "Montagne",
                          "vois",
                          "Je",
                          "Fleur",
                          "Arbre"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Montagne",
                          "vois"
                ],
                "audioText": "Je Montagne vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f12q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Deniz\"",
                "options": [
                          "Fleur",
                          "C'est",
                          "Forêt",
                          "Mer"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Mer"
                ],
                "audioText": "C'est Mer",
                "audioLang": "fr-FR"
    },
    {
      "id": "f12q2",
      "type": "flashcard",
      "prompt": "Çiçek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fleur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌸"
      ]
    },
    {
      "id": "f12q3",
      "type": "flashcard",
      "prompt": "Dağ",
      "options": [],
      "correctIndex": 0,
      "audioText": "Montagne",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⛰️"
      ]
    },
    {
      "id": "f12q4",
      "type": "flashcard",
      "prompt": "Deniz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mer",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌊"
      ]
    },
    {
      "id": "f12q5",
      "type": "flashcard",
      "prompt": "Nehir",
      "options": [],
      "correctIndex": 0,
      "audioText": "Rivière",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏞️"
      ]
    },
    {
      "id": "f12q6",
      "type": "flashcard",
      "prompt": "Orman",
      "options": [],
      "correctIndex": 0,
      "audioText": "Forêt",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌲"
      ]
    },
    {
      "id": "f12q7",
      "type": "multipleChoice",
      "prompt": "\"Arbre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ağaç",
        "Nehir",
        "Deniz",
        "Dağ"
      ],
      "correctIndex": 0,
      "audioText": "Arbre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f12q8",
      "type": "multipleChoice",
      "prompt": "\"Fleur\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çiçek",
        "Deniz",
        "Nehir",
        "Dağ"
      ],
      "correctIndex": 0,
      "audioText": "Fleur",
      "audioLang": "fr-FR"
    },
    {
      "id": "f12q9",
      "type": "multipleChoice",
      "prompt": "\"Montagne\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Dağ",
        "Nehir",
        "Deniz",
        "Çiçek"
      ],
      "correctIndex": 0,
      "audioText": "Montagne",
      "audioLang": "fr-FR"
    },
    {
      "id": "f12q10",
      "type": "translate",
      "prompt": "\"Deniz\" nasıl söylenir?",
      "options": [
        "Montagne",
        "Forêt",
        "Fleur",
        "Mer"
      ],
      "correctIndex": 3,
      "audioText": "Mer",
      "audioLang": "fr-FR"
    },
    {
      "id": "f12q11",
      "type": "translate",
      "prompt": "\"Nehir\" nasıl söylenir?",
      "options": [
        "Forêt",
        "Rivière",
        "Mer",
        "Arbre"
      ],
      "correctIndex": 1,
      "audioText": "Rivière",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f13",
  "title": "Meyveler",
  "description": "Tatlı meyveler",
  "icon": "🍎",
  "xpReward": 20,
  "questions": [
    {
      "id": "f13q1",
      "type": "flashcard",
      "prompt": "Elma",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pomme",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍎"
      ]
    },
    {
                "id": "f13q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Elma ve Muz\"",
                "options": [
                          "Banane",
                          "Raisin",
                          "Pomme",
                          "Orange",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Pomme",
                          "et",
                          "Banane"
                ],
                "audioText": "Pomme et Banane",
                "audioLang": "fr-FR"
    },
    {
                "id": "f13q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Portakal görüyorum\"",
                "options": [
                          "Pomme",
                          "Je",
                          "vois",
                          "Fraise",
                          "Orange"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Orange",
                          "vois"
                ],
                "audioText": "Je Orange vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f13q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Üzüm\"",
                "options": [
                          "Pomme",
                          "Raisin",
                          "C'est",
                          "Banane"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Raisin"
                ],
                "audioText": "C'est Raisin",
                "audioLang": "fr-FR"
    },
    {
      "id": "f13q2",
      "type": "flashcard",
      "prompt": "Muz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Banane",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍌"
      ]
    },
    {
      "id": "f13q3",
      "type": "flashcard",
      "prompt": "Portakal",
      "options": [],
      "correctIndex": 0,
      "audioText": "Orange",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍊"
      ]
    },
    {
      "id": "f13q4",
      "type": "flashcard",
      "prompt": "Üzüm",
      "options": [],
      "correctIndex": 0,
      "audioText": "Raisin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍇"
      ]
    },
    {
      "id": "f13q5",
      "type": "flashcard",
      "prompt": "Çilek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fraise",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍓"
      ]
    },
    {
      "id": "f13q6",
      "type": "flashcard",
      "prompt": "Armut",
      "options": [],
      "correctIndex": 0,
      "audioText": "Poire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍐"
      ]
    },
    {
      "id": "f13q7",
      "type": "multipleChoice",
      "prompt": "\"Pomme\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Elma",
        "Üzüm",
        "Portakal",
        "Çilek"
      ],
      "correctIndex": 0,
      "audioText": "Pomme",
      "audioLang": "fr-FR"
    },
    {
      "id": "f13q8",
      "type": "multipleChoice",
      "prompt": "\"Banane\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Üzüm",
        "Çilek",
        "Muz",
        "Portakal"
      ],
      "correctIndex": 2,
      "audioText": "Banane",
      "audioLang": "fr-FR"
    },
    {
      "id": "f13q9",
      "type": "multipleChoice",
      "prompt": "\"Orange\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Portakal",
        "Üzüm",
        "Armut",
        "Çilek"
      ],
      "correctIndex": 0,
      "audioText": "Orange",
      "audioLang": "fr-FR"
    },
    {
      "id": "f13q10",
      "type": "translate",
      "prompt": "\"Üzüm\" nasıl söylenir?",
      "options": [
        "Orange",
        "Pomme",
        "Banane",
        "Raisin"
      ],
      "correctIndex": 3,
      "audioText": "Raisin",
      "audioLang": "fr-FR"
    },
    {
      "id": "f13q11",
      "type": "translate",
      "prompt": "\"Çilek\" nasıl söylenir?",
      "options": [
        "Raisin",
        "Banane",
        "Fraise",
        "Poire"
      ],
      "correctIndex": 2,
      "audioText": "Fraise",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f14",
  "title": "Sebzeler",
  "description": "Sağlıklı sebzeler",
  "icon": "🥕",
  "xpReward": 20,
  "questions": [
    {
      "id": "f14q1",
      "type": "flashcard",
      "prompt": "Havuç",
      "options": [],
      "correctIndex": 0,
      "audioText": "Carotte",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥕"
      ]
    },
    {
                "id": "f14q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Havuç ve Domates\"",
                "options": [
                          "et",
                          "Oignon",
                          "Pomme de terre",
                          "Carotte",
                          "Tomate"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Carotte",
                          "et",
                          "Tomate"
                ],
                "audioText": "Carotte et Tomate",
                "audioLang": "fr-FR"
    },
    {
                "id": "f14q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Soğan görüyorum\"",
                "options": [
                          "Je",
                          "vois",
                          "Pomme de terre",
                          "Oignon",
                          "Carotte"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Oignon",
                          "vois"
                ],
                "audioText": "Je Oignon vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f14q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sarımsak\"",
                "options": [
                          "C'est",
                          "Carotte",
                          "Ail",
                          "Tomate"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Ail"
                ],
                "audioText": "C'est Ail",
                "audioLang": "fr-FR"
    },
    {
      "id": "f14q2",
      "type": "flashcard",
      "prompt": "Domates",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tomate",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍅"
      ]
    },
    {
      "id": "f14q3",
      "type": "flashcard",
      "prompt": "Soğan",
      "options": [],
      "correctIndex": 0,
      "audioText": "Oignon",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧅"
      ]
    },
    {
      "id": "f14q4",
      "type": "flashcard",
      "prompt": "Sarımsak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ail",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧄"
      ]
    },
    {
      "id": "f14q5",
      "type": "flashcard",
      "prompt": "Patates",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pomme de terre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥔"
      ]
    },
    {
      "id": "f14q6",
      "type": "flashcard",
      "prompt": "Fasulye",
      "options": [],
      "correctIndex": 0,
      "audioText": "Haricot",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🫘"
      ]
    },
    {
      "id": "f14q7",
      "type": "multipleChoice",
      "prompt": "\"Carotte\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Patates",
        "Fasulye",
        "Soğan",
        "Havuç"
      ],
      "correctIndex": 3,
      "audioText": "Carotte",
      "audioLang": "fr-FR"
    },
    {
      "id": "f14q8",
      "type": "multipleChoice",
      "prompt": "\"Tomate\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Domates",
        "Fasulye",
        "Soğan",
        "Havuç"
      ],
      "correctIndex": 0,
      "audioText": "Tomate",
      "audioLang": "fr-FR"
    },
    {
      "id": "f14q9",
      "type": "multipleChoice",
      "prompt": "\"Oignon\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Domates",
        "Havuç",
        "Patates",
        "Soğan"
      ],
      "correctIndex": 3,
      "audioText": "Oignon",
      "audioLang": "fr-FR"
    },
    {
      "id": "f14q10",
      "type": "translate",
      "prompt": "\"Sarımsak\" nasıl söylenir?",
      "options": [
        "Tomate",
        "Carotte",
        "Ail",
        "Haricot"
      ],
      "correctIndex": 2,
      "audioText": "Ail",
      "audioLang": "fr-FR"
    },
    {
      "id": "f14q11",
      "type": "translate",
      "prompt": "\"Patates\" nasıl söylenir?",
      "options": [
        "Oignon",
        "Pomme de terre",
        "Carotte",
        "Tomate"
      ],
      "correctIndex": 1,
      "audioText": "Pomme de terre",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f15",
  "title": "İçecekler",
  "description": "Sıvılar ve içkiler",
  "icon": "☕",
  "xpReward": 20,
  "questions": [
    {
      "id": "f15q1",
      "type": "flashcard",
      "prompt": "Su",
      "options": [],
      "correctIndex": 0,
      "audioText": "Eau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💧"
      ]
    },
    {
                "id": "f15q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Su ve Çay\"",
                "options": [
                          "Jus",
                          "Eau",
                          "et",
                          "Café",
                          "Thé"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Eau",
                          "et",
                          "Thé"
                ],
                "audioText": "Eau et Thé",
                "audioLang": "fr-FR"
    },
    {
                "id": "f15q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kahve görüyorum\"",
                "options": [
                          "Thé",
                          "Eau",
                          "Café",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Café",
                          "vois"
                ],
                "audioText": "Je Café vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f15q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Süt\"",
                "options": [
                          "C'est",
                          "Lait",
                          "Thé",
                          "Limonade"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Lait"
                ],
                "audioText": "C'est Lait",
                "audioLang": "fr-FR"
    },
    {
      "id": "f15q2",
      "type": "flashcard",
      "prompt": "Çay",
      "options": [],
      "correctIndex": 0,
      "audioText": "Thé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍵"
      ]
    },
    {
      "id": "f15q3",
      "type": "flashcard",
      "prompt": "Kahve",
      "options": [],
      "correctIndex": 0,
      "audioText": "Café",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☕"
      ]
    },
    {
      "id": "f15q4",
      "type": "flashcard",
      "prompt": "Süt",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lait",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥛"
      ]
    },
    {
      "id": "f15q5",
      "type": "flashcard",
      "prompt": "Meyve suyu",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jus",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧃"
      ]
    },
    {
      "id": "f15q6",
      "type": "flashcard",
      "prompt": "Limonata",
      "options": [],
      "correctIndex": 0,
      "audioText": "Limonade",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍋"
      ]
    },
    {
      "id": "f15q7",
      "type": "multipleChoice",
      "prompt": "\"Eau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Su",
        "Meyve suyu",
        "Kahve",
        "Çay"
      ],
      "correctIndex": 0,
      "audioText": "Eau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f15q8",
      "type": "multipleChoice",
      "prompt": "\"Thé\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kahve",
        "Su",
        "Meyve suyu",
        "Çay"
      ],
      "correctIndex": 3,
      "audioText": "Thé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f15q9",
      "type": "multipleChoice",
      "prompt": "\"Café\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Limonata",
        "Süt",
        "Meyve suyu",
        "Kahve"
      ],
      "correctIndex": 3,
      "audioText": "Café",
      "audioLang": "fr-FR"
    },
    {
      "id": "f15q10",
      "type": "translate",
      "prompt": "\"Süt\" nasıl söylenir?",
      "options": [
        "Thé",
        "Jus",
        "Lait",
        "Café"
      ],
      "correctIndex": 2,
      "audioText": "Lait",
      "audioLang": "fr-FR"
    },
    {
      "id": "f15q11",
      "type": "translate",
      "prompt": "\"Meyve suyu\" nasıl söylenir?",
      "options": [
        "Thé",
        "Limonade",
        "Eau",
        "Jus"
      ],
      "correctIndex": 3,
      "audioText": "Jus",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f16",
  "title": "Odalar",
  "description": "Evdeki odalar",
  "icon": "🏠",
  "xpReward": 20,
  "questions": [
    {
      "id": "f16q1",
      "type": "flashcard",
      "prompt": "Mutfak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cuisine",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍳"
      ]
    },
    {
                "id": "f16q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Mutfak ve Yatak odası\"",
                "options": [
                          "Chambre",
                          "Salle de bain",
                          "Jardin",
                          "Cuisine",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Cuisine",
                          "et",
                          "Chambre"
                ],
                "audioText": "Cuisine et Chambre",
                "audioLang": "fr-FR"
    },
    {
                "id": "f16q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Banyo görüyorum\"",
                "options": [
                          "Je",
                          "Cuisine",
                          "Jardin",
                          "vois",
                          "Salle de bain"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Salle de bain",
                          "vois"
                ],
                "audioText": "Je Salle de bain vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f16q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Salon\"",
                "options": [
                          "Cuisine",
                          "Salon",
                          "Sous-sol",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Salon"
                ],
                "audioText": "C'est Salon",
                "audioLang": "fr-FR"
    },
    {
      "id": "f16q2",
      "type": "flashcard",
      "prompt": "Yatak odası",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chambre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛏️"
      ]
    },
    {
      "id": "f16q3",
      "type": "flashcard",
      "prompt": "Banyo",
      "options": [],
      "correctIndex": 0,
      "audioText": "Salle de bain",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚿"
      ]
    },
    {
      "id": "f16q4",
      "type": "flashcard",
      "prompt": "Salon",
      "options": [],
      "correctIndex": 0,
      "audioText": "Salon",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛋️"
      ]
    },
    {
      "id": "f16q5",
      "type": "flashcard",
      "prompt": "Bahçe",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jardin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌿"
      ]
    },
    {
      "id": "f16q6",
      "type": "flashcard",
      "prompt": "Bodrum",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sous-sol",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏚️"
      ]
    },
    {
      "id": "f16q7",
      "type": "multipleChoice",
      "prompt": "\"Cuisine\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bahçe",
        "Salon",
        "Bodrum",
        "Mutfak"
      ],
      "correctIndex": 3,
      "audioText": "Cuisine",
      "audioLang": "fr-FR"
    },
    {
      "id": "f16q8",
      "type": "multipleChoice",
      "prompt": "\"Chambre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bodrum",
        "Banyo",
        "Bahçe",
        "Yatak odası"
      ],
      "correctIndex": 3,
      "audioText": "Chambre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f16q9",
      "type": "multipleChoice",
      "prompt": "\"Salle de bain\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Banyo",
        "Bodrum",
        "Bahçe",
        "Salon"
      ],
      "correctIndex": 0,
      "audioText": "Salle de bain",
      "audioLang": "fr-FR"
    },
    {
      "id": "f16q10",
      "type": "translate",
      "prompt": "\"Salon\" nasıl söylenir?",
      "options": [
        "Salon",
        "Cuisine",
        "Chambre",
        "Salle de bain"
      ],
      "correctIndex": 0,
      "audioText": "Salon",
      "audioLang": "fr-FR"
    },
    {
      "id": "f16q11",
      "type": "translate",
      "prompt": "\"Bahçe\" nasıl söylenir?",
      "options": [
        "Chambre",
        "Salle de bain",
        "Salon",
        "Jardin"
      ],
      "correctIndex": 3,
      "audioText": "Jardin",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f17",
  "title": "Mobilyalar",
  "description": "Ev mobilyaları",
  "icon": "🛋️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f17q1",
      "type": "flashcard",
      "prompt": "Sandalye",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chaise",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🪑"
      ]
    },
    {
                "id": "f17q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sandalye ve Masa\"",
                "options": [
                          "Chaise",
                          "Armoire",
                          "Table",
                          "et",
                          "Canapé"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Chaise",
                          "et",
                          "Table"
                ],
                "audioText": "Chaise et Table",
                "audioLang": "fr-FR"
    },
    {
                "id": "f17q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yatak görüyorum\"",
                "options": [
                          "Lit",
                          "Chaise",
                          "Table",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Lit",
                          "vois"
                ],
                "audioText": "Je Lit vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f17q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dolap\"",
                "options": [
                          "Armoire",
                          "C'est",
                          "Table",
                          "Bibliothèque"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Armoire"
                ],
                "audioText": "C'est Armoire",
                "audioLang": "fr-FR"
    },
    {
      "id": "f17q2",
      "type": "flashcard",
      "prompt": "Masa",
      "options": [],
      "correctIndex": 0,
      "audioText": "Table",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🪞"
      ]
    },
    {
      "id": "f17q3",
      "type": "flashcard",
      "prompt": "Yatak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lit",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛏️"
      ]
    },
    {
      "id": "f17q4",
      "type": "flashcard",
      "prompt": "Dolap",
      "options": [],
      "correctIndex": 0,
      "audioText": "Armoire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗄️"
      ]
    },
    {
      "id": "f17q5",
      "type": "flashcard",
      "prompt": "Kanepe",
      "options": [],
      "correctIndex": 0,
      "audioText": "Canapé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛋️"
      ]
    },
    {
      "id": "f17q6",
      "type": "flashcard",
      "prompt": "Kitaplık",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bibliothèque",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📚"
      ]
    },
    {
      "id": "f17q7",
      "type": "multipleChoice",
      "prompt": "\"Chaise\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sandalye",
        "Masa",
        "Yatak",
        "Kitaplık"
      ],
      "correctIndex": 0,
      "audioText": "Chaise",
      "audioLang": "fr-FR"
    },
    {
      "id": "f17q8",
      "type": "multipleChoice",
      "prompt": "\"Table\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yatak",
        "Dolap",
        "Sandalye",
        "Masa"
      ],
      "correctIndex": 3,
      "audioText": "Table",
      "audioLang": "fr-FR"
    },
    {
      "id": "f17q9",
      "type": "multipleChoice",
      "prompt": "\"Lit\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kitaplık",
        "Masa",
        "Sandalye",
        "Yatak"
      ],
      "correctIndex": 3,
      "audioText": "Lit",
      "audioLang": "fr-FR"
    },
    {
      "id": "f17q10",
      "type": "translate",
      "prompt": "\"Dolap\" nasıl söylenir?",
      "options": [
        "Bibliothèque",
        "Table",
        "Armoire",
        "Chaise"
      ],
      "correctIndex": 2,
      "audioText": "Armoire",
      "audioLang": "fr-FR"
    },
    {
      "id": "f17q11",
      "type": "translate",
      "prompt": "\"Kanepe\" nasıl söylenir?",
      "options": [
        "Canapé",
        "Lit",
        "Armoire",
        "Chaise"
      ],
      "correctIndex": 0,
      "audioText": "Canapé",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f18",
  "title": "Mutfak Eşyaları",
  "description": "Mutfak malzemeleri",
  "icon": "🍽️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f18q1",
      "type": "flashcard",
      "prompt": "Tabak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Assiette",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
                "id": "f18q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Tabak ve Bıçak\"",
                "options": [
                          "Fourchette",
                          "et",
                          "Tasse",
                          "Assiette",
                          "Couteau"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Assiette",
                          "et",
                          "Couteau"
                ],
                "audioText": "Assiette et Couteau",
                "audioLang": "fr-FR"
    },
    {
                "id": "f18q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kaşık görüyorum\"",
                "options": [
                          "vois",
                          "Je",
                          "Couteau",
                          "Cuillère",
                          "Tasse"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Cuillère",
                          "vois"
                ],
                "audioText": "Je Cuillère vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f18q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çatal\"",
                "options": [
                          "C'est",
                          "Assiette",
                          "Casserole",
                          "Fourchette"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Fourchette"
                ],
                "audioText": "C'est Fourchette",
                "audioLang": "fr-FR"
    },
    {
      "id": "f18q2",
      "type": "flashcard",
      "prompt": "Bıçak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Couteau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔪"
      ]
    },
    {
      "id": "f18q3",
      "type": "flashcard",
      "prompt": "Kaşık",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cuillère",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥄"
      ]
    },
    {
      "id": "f18q4",
      "type": "flashcard",
      "prompt": "Çatal",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fourchette",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍴"
      ]
    },
    {
      "id": "f18q5",
      "type": "flashcard",
      "prompt": "Bardak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tasse",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☕"
      ]
    },
    {
      "id": "f18q6",
      "type": "flashcard",
      "prompt": "Tencere",
      "options": [],
      "correctIndex": 0,
      "audioText": "Casserole",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🫕"
      ]
    },
    {
      "id": "f18q7",
      "type": "multipleChoice",
      "prompt": "\"Assiette\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çatal",
        "Kaşık",
        "Bıçak",
        "Tabak"
      ],
      "correctIndex": 3,
      "audioText": "Assiette",
      "audioLang": "fr-FR"
    },
    {
      "id": "f18q8",
      "type": "multipleChoice",
      "prompt": "\"Couteau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çatal",
        "Kaşık",
        "Tabak",
        "Bıçak"
      ],
      "correctIndex": 3,
      "audioText": "Couteau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f18q9",
      "type": "multipleChoice",
      "prompt": "\"Cuillère\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bardak",
        "Çatal",
        "Kaşık",
        "Tencere"
      ],
      "correctIndex": 2,
      "audioText": "Cuillère",
      "audioLang": "fr-FR"
    },
    {
      "id": "f18q10",
      "type": "translate",
      "prompt": "\"Çatal\" nasıl söylenir?",
      "options": [
        "Fourchette",
        "Cuillère",
        "Tasse",
        "Couteau"
      ],
      "correctIndex": 0,
      "audioText": "Fourchette",
      "audioLang": "fr-FR"
    },
    {
      "id": "f18q11",
      "type": "translate",
      "prompt": "\"Bardak\" nasıl söylenir?",
      "options": [
        "Fourchette",
        "Cuillère",
        "Tasse",
        "Couteau"
      ],
      "correctIndex": 2,
      "audioText": "Tasse",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f19",
  "title": "Vücut Bölümleri",
  "description": "Vücudun parçaları",
  "icon": "💪",
  "xpReward": 20,
  "questions": [
    {
      "id": "f19q1",
      "type": "flashcard",
      "prompt": "Baş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tête",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗣️"
      ]
    },
    {
                "id": "f19q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Baş ve Göz\"",
                "options": [
                          "et",
                          "Œil",
                          "Main",
                          "Tête",
                          "Oreille"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Tête",
                          "et",
                          "Œil"
                ],
                "audioText": "Tête et Œil",
                "audioLang": "fr-FR"
    },
    {
                "id": "f19q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kulak görüyorum\"",
                "options": [
                          "Je",
                          "Oreille",
                          "vois",
                          "Œil",
                          "Tête"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Oreille",
                          "vois"
                ],
                "audioText": "Je Oreille vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f19q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ağız\"",
                "options": [
                          "Bouche",
                          "Jambe",
                          "C'est",
                          "Tête"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Bouche"
                ],
                "audioText": "C'est Bouche",
                "audioLang": "fr-FR"
    },
    {
      "id": "f19q2",
      "type": "flashcard",
      "prompt": "Göz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Œil",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👁️"
      ]
    },
    {
      "id": "f19q3",
      "type": "flashcard",
      "prompt": "Kulak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Oreille",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👂"
      ]
    },
    {
      "id": "f19q4",
      "type": "flashcard",
      "prompt": "Ağız",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bouche",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👄"
      ]
    },
    {
      "id": "f19q5",
      "type": "flashcard",
      "prompt": "El",
      "options": [],
      "correctIndex": 0,
      "audioText": "Main",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✋"
      ]
    },
    {
      "id": "f19q6",
      "type": "flashcard",
      "prompt": "Bacak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jambe",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦵"
      ]
    },
    {
      "id": "f19q7",
      "type": "multipleChoice",
      "prompt": "\"Tête\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kulak",
        "El",
        "Ağız",
        "Baş"
      ],
      "correctIndex": 3,
      "audioText": "Tête",
      "audioLang": "fr-FR"
    },
    {
      "id": "f19q8",
      "type": "multipleChoice",
      "prompt": "\"Œil\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kulak",
        "Ağız",
        "El",
        "Göz"
      ],
      "correctIndex": 3,
      "audioText": "Œil",
      "audioLang": "fr-FR"
    },
    {
      "id": "f19q9",
      "type": "multipleChoice",
      "prompt": "\"Oreille\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ağız",
        "Göz",
        "Baş",
        "Kulak"
      ],
      "correctIndex": 3,
      "audioText": "Oreille",
      "audioLang": "fr-FR"
    },
    {
      "id": "f19q10",
      "type": "translate",
      "prompt": "\"Ağız\" nasıl söylenir?",
      "options": [
        "Jambe",
        "Oreille",
        "Main",
        "Bouche"
      ],
      "correctIndex": 3,
      "audioText": "Bouche",
      "audioLang": "fr-FR"
    },
    {
      "id": "f19q11",
      "type": "translate",
      "prompt": "\"El\" nasıl söylenir?",
      "options": [
        "Œil",
        "Oreille",
        "Jambe",
        "Main"
      ],
      "correctIndex": 3,
      "audioText": "Main",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f20",
  "title": "Hastalıklar",
  "description": "Sağlık sorunları",
  "icon": "🤒",
  "xpReward": 20,
  "questions": [
    {
      "id": "f20q1",
      "type": "flashcard",
      "prompt": "Hastalık",
      "options": [],
      "correctIndex": 0,
      "audioText": "Maladie",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤒"
      ]
    },
    {
                "id": "f20q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Hastalık ve Baş ağrısı\"",
                "options": [
                          "Fièvre",
                          "et",
                          "Maladie",
                          "Mal de tête",
                          "Rhume"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Maladie",
                          "et",
                          "Mal de tête"
                ],
                "audioText": "Maladie et Mal de tête",
                "audioLang": "fr-FR"
    },
    {
                "id": "f20q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ateş görüyorum\"",
                "options": [
                          "Rhume",
                          "Mal de tête",
                          "Fièvre",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Fièvre",
                          "vois"
                ],
                "audioText": "Je Fièvre vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f20q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Öksürük\"",
                "options": [
                          "C'est",
                          "Toux",
                          "Mal de tête",
                          "Maladie"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Toux"
                ],
                "audioText": "C'est Toux",
                "audioLang": "fr-FR"
    },
    {
      "id": "f20q2",
      "type": "flashcard",
      "prompt": "Baş ağrısı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mal de tête",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤕"
      ]
    },
    {
      "id": "f20q3",
      "type": "flashcard",
      "prompt": "Ateş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fièvre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌡️"
      ]
    },
    {
      "id": "f20q4",
      "type": "flashcard",
      "prompt": "Öksürük",
      "options": [],
      "correctIndex": 0,
      "audioText": "Toux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😷"
      ]
    },
    {
      "id": "f20q5",
      "type": "flashcard",
      "prompt": "Nezle",
      "options": [],
      "correctIndex": 0,
      "audioText": "Rhume",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤧"
      ]
    },
    {
      "id": "f20q6",
      "type": "flashcard",
      "prompt": "Yara",
      "options": [],
      "correctIndex": 0,
      "audioText": "Blessure",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🩹"
      ]
    },
    {
      "id": "f20q7",
      "type": "multipleChoice",
      "prompt": "\"Maladie\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Hastalık",
        "Ateş",
        "Baş ağrısı",
        "Yara"
      ],
      "correctIndex": 0,
      "audioText": "Maladie",
      "audioLang": "fr-FR"
    },
    {
      "id": "f20q8",
      "type": "multipleChoice",
      "prompt": "\"Mal de tête\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Baş ağrısı",
        "Nezle",
        "Hastalık",
        "Ateş"
      ],
      "correctIndex": 0,
      "audioText": "Mal de tête",
      "audioLang": "fr-FR"
    },
    {
      "id": "f20q9",
      "type": "multipleChoice",
      "prompt": "\"Fièvre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ateş",
        "Öksürük",
        "Nezle",
        "Baş ağrısı"
      ],
      "correctIndex": 0,
      "audioText": "Fièvre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f20q10",
      "type": "translate",
      "prompt": "\"Öksürük\" nasıl söylenir?",
      "options": [
        "Mal de tête",
        "Rhume",
        "Toux",
        "Fièvre"
      ],
      "correctIndex": 2,
      "audioText": "Toux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f20q11",
      "type": "translate",
      "prompt": "\"Nezle\" nasıl söylenir?",
      "options": [
        "Mal de tête",
        "Blessure",
        "Rhume",
        "Toux"
      ],
      "correctIndex": 2,
      "audioText": "Rhume",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f21",
  "title": "Hastanede",
  "description": "Sağlık ortamı",
  "icon": "🏥",
  "xpReward": 20,
  "questions": [
    {
      "id": "f21q1",
      "type": "flashcard",
      "prompt": "Hastane",
      "options": [],
      "correctIndex": 0,
      "audioText": "Hôpital",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏥"
      ]
    },
    {
                "id": "f21q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Hastane ve Doktor\"",
                "options": [
                          "Infirmière",
                          "Hôpital",
                          "Médecin",
                          "et",
                          "Opération"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Hôpital",
                          "et",
                          "Médecin"
                ],
                "audioText": "Hôpital et Médecin",
                "audioLang": "fr-FR"
    },
    {
                "id": "f21q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Hemşire görüyorum\"",
                "options": [
                          "Hôpital",
                          "vois",
                          "Infirmière",
                          "Je",
                          "Médecin"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Infirmière",
                          "vois"
                ],
                "audioText": "Je Infirmière vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f21q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir İlaç\"",
                "options": [
                          "Médicament",
                          "Ambulance",
                          "Médecin",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Médicament"
                ],
                "audioText": "C'est Médicament",
                "audioLang": "fr-FR"
    },
    {
      "id": "f21q2",
      "type": "flashcard",
      "prompt": "Doktor",
      "options": [],
      "correctIndex": 0,
      "audioText": "Médecin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👨‍⚕️"
      ]
    },
    {
      "id": "f21q3",
      "type": "flashcard",
      "prompt": "Hemşire",
      "options": [],
      "correctIndex": 0,
      "audioText": "Infirmière",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👩‍⚕️"
      ]
    },
    {
      "id": "f21q4",
      "type": "flashcard",
      "prompt": "İlaç",
      "options": [],
      "correctIndex": 0,
      "audioText": "Médicament",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💊"
      ]
    },
    {
      "id": "f21q5",
      "type": "flashcard",
      "prompt": "Ameliyat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Opération",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔬"
      ]
    },
    {
      "id": "f21q6",
      "type": "flashcard",
      "prompt": "Ambulans",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ambulance",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚑"
      ]
    },
    {
      "id": "f21q7",
      "type": "multipleChoice",
      "prompt": "\"Hôpital\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Hastane",
        "Ambulans",
        "Doktor",
        "Hemşire"
      ],
      "correctIndex": 0,
      "audioText": "Hôpital",
      "audioLang": "fr-FR"
    },
    {
      "id": "f21q8",
      "type": "multipleChoice",
      "prompt": "\"Médecin\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Hemşire",
        "Ameliyat",
        "Ambulans",
        "Doktor"
      ],
      "correctIndex": 3,
      "audioText": "Médecin",
      "audioLang": "fr-FR"
    },
    {
      "id": "f21q9",
      "type": "multipleChoice",
      "prompt": "\"Infirmière\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Hemşire",
        "Ambulans",
        "Doktor",
        "Ameliyat"
      ],
      "correctIndex": 0,
      "audioText": "Infirmière",
      "audioLang": "fr-FR"
    },
    {
      "id": "f21q10",
      "type": "translate",
      "prompt": "\"İlaç\" nasıl söylenir?",
      "options": [
        "Médicament",
        "Hôpital",
        "Médecin",
        "Infirmière"
      ],
      "correctIndex": 0,
      "audioText": "Médicament",
      "audioLang": "fr-FR"
    },
    {
      "id": "f21q11",
      "type": "translate",
      "prompt": "\"Ameliyat\" nasıl söylenir?",
      "options": [
        "Infirmière",
        "Ambulance",
        "Médicament",
        "Opération"
      ],
      "correctIndex": 3,
      "audioText": "Opération",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f22",
  "title": "Kıyafetler",
  "description": "Giyim türleri",
  "icon": "👕",
  "xpReward": 20,
  "questions": [
    {
      "id": "f22q1",
      "type": "flashcard",
      "prompt": "Gömlek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chemise",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👕"
      ]
    },
    {
                "id": "f22q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gömlek ve Pantolon\"",
                "options": [
                          "et",
                          "Chemise",
                          "Veste",
                          "Pantalon",
                          "Chaussure"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Chemise",
                          "et",
                          "Pantalon"
                ],
                "audioText": "Chemise et Pantalon",
                "audioLang": "fr-FR"
    },
    {
                "id": "f22q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şapka görüyorum\"",
                "options": [
                          "Chemise",
                          "Je",
                          "Chapeau",
                          "Veste",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Chapeau",
                          "vois"
                ],
                "audioText": "Je Chapeau vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f22q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ayakkabı\"",
                "options": [
                          "C'est",
                          "Pantalon",
                          "Chaussette",
                          "Chaussure"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Chaussure"
                ],
                "audioText": "C'est Chaussure",
                "audioLang": "fr-FR"
    },
    {
      "id": "f22q2",
      "type": "flashcard",
      "prompt": "Pantolon",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pantalon",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👖"
      ]
    },
    {
      "id": "f22q3",
      "type": "flashcard",
      "prompt": "Şapka",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chapeau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎩"
      ]
    },
    {
      "id": "f22q4",
      "type": "flashcard",
      "prompt": "Ayakkabı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chaussure",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👟"
      ]
    },
    {
      "id": "f22q5",
      "type": "flashcard",
      "prompt": "Ceket",
      "options": [],
      "correctIndex": 0,
      "audioText": "Veste",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧥"
      ]
    },
    {
      "id": "f22q6",
      "type": "flashcard",
      "prompt": "Çorap",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chaussette",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧦"
      ]
    },
    {
      "id": "f22q7",
      "type": "multipleChoice",
      "prompt": "\"Chemise\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gömlek",
        "Şapka",
        "Pantolon",
        "Ceket"
      ],
      "correctIndex": 0,
      "audioText": "Chemise",
      "audioLang": "fr-FR"
    },
    {
      "id": "f22q8",
      "type": "multipleChoice",
      "prompt": "\"Pantalon\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ceket",
        "Pantolon",
        "Ayakkabı",
        "Gömlek"
      ],
      "correctIndex": 1,
      "audioText": "Pantalon",
      "audioLang": "fr-FR"
    },
    {
      "id": "f22q9",
      "type": "multipleChoice",
      "prompt": "\"Chapeau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şapka",
        "Ayakkabı",
        "Gömlek",
        "Pantolon"
      ],
      "correctIndex": 0,
      "audioText": "Chapeau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f22q10",
      "type": "translate",
      "prompt": "\"Ayakkabı\" nasıl söylenir?",
      "options": [
        "Pantalon",
        "Veste",
        "Chemise",
        "Chaussure"
      ],
      "correctIndex": 3,
      "audioText": "Chaussure",
      "audioLang": "fr-FR"
    },
    {
      "id": "f22q11",
      "type": "translate",
      "prompt": "\"Ceket\" nasıl söylenir?",
      "options": [
        "Veste",
        "Pantalon",
        "Chaussure",
        "Chaussette"
      ],
      "correctIndex": 0,
      "audioText": "Veste",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f23",
  "title": "Renklerle Giyim",
  "description": "Renk ve kıyafet",
  "icon": "👗",
  "xpReward": 20,
  "questions": [
    {
      "id": "f23q1",
      "type": "flashcard",
      "prompt": "Kırmızı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Rouge",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔴"
      ]
    },
    {
                "id": "f23q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kırmızı ve Mavi\"",
                "options": [
                          "Bleu",
                          "Blanc",
                          "et",
                          "Rouge",
                          "Vert"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Rouge",
                          "et",
                          "Bleu"
                ],
                "audioText": "Rouge et Bleu",
                "audioLang": "fr-FR"
    },
    {
                "id": "f23q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yeşil görüyorum\"",
                "options": [
                          "Bleu",
                          "Je",
                          "Vert",
                          "vois",
                          "Blanc"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Vert",
                          "vois"
                ],
                "audioText": "Je Vert vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f23q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sarı\"",
                "options": [
                          "Noir",
                          "Rouge",
                          "Jaune",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Jaune"
                ],
                "audioText": "C'est Jaune",
                "audioLang": "fr-FR"
    },
    {
      "id": "f23q2",
      "type": "flashcard",
      "prompt": "Mavi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bleu",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔵"
      ]
    },
    {
      "id": "f23q3",
      "type": "flashcard",
      "prompt": "Yeşil",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vert",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🟢"
      ]
    },
    {
      "id": "f23q4",
      "type": "flashcard",
      "prompt": "Sarı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jaune",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🟡"
      ]
    },
    {
      "id": "f23q5",
      "type": "flashcard",
      "prompt": "Beyaz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Blanc",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚪"
      ]
    },
    {
      "id": "f23q6",
      "type": "flashcard",
      "prompt": "Siyah",
      "options": [],
      "correctIndex": 0,
      "audioText": "Noir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚫"
      ]
    },
    {
      "id": "f23q7",
      "type": "multipleChoice",
      "prompt": "\"Rouge\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Siyah",
        "Mavi",
        "Beyaz",
        "Kırmızı"
      ],
      "correctIndex": 3,
      "audioText": "Rouge",
      "audioLang": "fr-FR"
    },
    {
      "id": "f23q8",
      "type": "multipleChoice",
      "prompt": "\"Bleu\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kırmızı",
        "Beyaz",
        "Mavi",
        "Siyah"
      ],
      "correctIndex": 2,
      "audioText": "Bleu",
      "audioLang": "fr-FR"
    },
    {
      "id": "f23q9",
      "type": "multipleChoice",
      "prompt": "\"Vert\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yeşil",
        "Beyaz",
        "Sarı",
        "Siyah"
      ],
      "correctIndex": 0,
      "audioText": "Vert",
      "audioLang": "fr-FR"
    },
    {
      "id": "f23q10",
      "type": "translate",
      "prompt": "\"Sarı\" nasıl söylenir?",
      "options": [
        "Jaune",
        "Vert",
        "Blanc",
        "Rouge"
      ],
      "correctIndex": 0,
      "audioText": "Jaune",
      "audioLang": "fr-FR"
    },
    {
      "id": "f23q11",
      "type": "translate",
      "prompt": "\"Beyaz\" nasıl söylenir?",
      "options": [
        "Bleu",
        "Jaune",
        "Vert",
        "Blanc"
      ],
      "correctIndex": 3,
      "audioText": "Blanc",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f24",
  "title": "Pazarda",
  "description": "Alışveriş kelimeleri",
  "icon": "🛍️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f24q1",
      "type": "flashcard",
      "prompt": "Pazar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Marché",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛒"
      ]
    },
    {
                "id": "f24q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pazar ve Fiyat\"",
                "options": [
                          "Prix",
                          "et",
                          "Marché",
                          "Bon marché",
                          "Cher"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Marché",
                          "et",
                          "Prix"
                ],
                "audioText": "Marché et Prix",
                "audioLang": "fr-FR"
    },
    {
                "id": "f24q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ucuz görüyorum\"",
                "options": [
                          "Marché",
                          "Bon marché",
                          "vois",
                          "Je",
                          "Acheter"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Bon marché",
                          "vois"
                ],
                "audioText": "Je Bon marché vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f24q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Pahalı\"",
                "options": [
                          "Cher",
                          "C'est",
                          "Marché",
                          "Prix"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Cher"
                ],
                "audioText": "C'est Cher",
                "audioLang": "fr-FR"
    },
    {
      "id": "f24q2",
      "type": "flashcard",
      "prompt": "Fiyat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Prix",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💰"
      ]
    },
    {
      "id": "f24q3",
      "type": "flashcard",
      "prompt": "Ucuz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bon marché",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏷️"
      ]
    },
    {
      "id": "f24q4",
      "type": "flashcard",
      "prompt": "Pahalı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cher",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💸"
      ]
    },
    {
      "id": "f24q5",
      "type": "flashcard",
      "prompt": "Satın almak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Acheter",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛍️"
      ]
    },
    {
      "id": "f24q6",
      "type": "flashcard",
      "prompt": "Satmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vendre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💼"
      ]
    },
    {
      "id": "f24q7",
      "type": "multipleChoice",
      "prompt": "\"Marché\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Pazar",
        "Pahalı",
        "Satın almak",
        "Ucuz"
      ],
      "correctIndex": 0,
      "audioText": "Marché",
      "audioLang": "fr-FR"
    },
    {
      "id": "f24q8",
      "type": "multipleChoice",
      "prompt": "\"Prix\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ucuz",
        "Fiyat",
        "Pazar",
        "Pahalı"
      ],
      "correctIndex": 1,
      "audioText": "Prix",
      "audioLang": "fr-FR"
    },
    {
      "id": "f24q9",
      "type": "multipleChoice",
      "prompt": "\"Bon marché\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Fiyat",
        "Satın almak",
        "Pazar",
        "Ucuz"
      ],
      "correctIndex": 3,
      "audioText": "Bon marché",
      "audioLang": "fr-FR"
    },
    {
      "id": "f24q10",
      "type": "translate",
      "prompt": "\"Pahalı\" nasıl söylenir?",
      "options": [
        "Cher",
        "Acheter",
        "Vendre",
        "Bon marché"
      ],
      "correctIndex": 0,
      "audioText": "Cher",
      "audioLang": "fr-FR"
    },
    {
      "id": "f24q11",
      "type": "translate",
      "prompt": "\"Satın almak\" nasıl söylenir?",
      "options": [
        "Bon marché",
        "Acheter",
        "Cher",
        "Vendre"
      ],
      "correctIndex": 1,
      "audioText": "Acheter",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f25",
  "title": "Meslekler 1",
  "description": "Temel meslekler",
  "icon": "👨‍⚕️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f25q1",
      "type": "flashcard",
      "prompt": "Doktor",
      "options": [],
      "correctIndex": 0,
      "audioText": "Médecin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👨‍⚕️"
      ]
    },
    {
                "id": "f25q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Doktor ve Öğretmen\"",
                "options": [
                          "Agriculteur",
                          "Médecin",
                          "Ingénieur",
                          "Professeur",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Médecin",
                          "et",
                          "Professeur"
                ],
                "audioText": "Médecin et Professeur",
                "audioLang": "fr-FR"
    },
    {
                "id": "f25q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şoför görüyorum\"",
                "options": [
                          "Chauffeur",
                          "Professeur",
                          "Médecin",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Chauffeur",
                          "vois"
                ],
                "audioText": "Je Chauffeur vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f25q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çiftçi\"",
                "options": [
                          "Agriculteur",
                          "C'est",
                          "Médecin",
                          "Professeur"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Agriculteur"
                ],
                "audioText": "C'est Agriculteur",
                "audioLang": "fr-FR"
    },
    {
      "id": "f25q2",
      "type": "flashcard",
      "prompt": "Öğretmen",
      "options": [],
      "correctIndex": 0,
      "audioText": "Professeur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👩‍🏫"
      ]
    },
    {
      "id": "f25q3",
      "type": "flashcard",
      "prompt": "Şoför",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chauffeur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚘"
      ]
    },
    {
      "id": "f25q4",
      "type": "flashcard",
      "prompt": "Çiftçi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Agriculteur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧑‍🌾"
      ]
    },
    {
      "id": "f25q5",
      "type": "flashcard",
      "prompt": "Mühendis",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ingénieur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👷"
      ]
    },
    {
      "id": "f25q6",
      "type": "flashcard",
      "prompt": "Avukat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Avocat",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚖️"
      ]
    },
    {
      "id": "f25q7",
      "type": "multipleChoice",
      "prompt": "\"Médecin\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Doktor",
        "Avukat",
        "Şoför",
        "Öğretmen"
      ],
      "correctIndex": 0,
      "audioText": "Médecin",
      "audioLang": "fr-FR"
    },
    {
      "id": "f25q8",
      "type": "multipleChoice",
      "prompt": "\"Professeur\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Öğretmen",
        "Doktor",
        "Mühendis",
        "Şoför"
      ],
      "correctIndex": 0,
      "audioText": "Professeur",
      "audioLang": "fr-FR"
    },
    {
      "id": "f25q9",
      "type": "multipleChoice",
      "prompt": "\"Chauffeur\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şoför",
        "Avukat",
        "Çiftçi",
        "Doktor"
      ],
      "correctIndex": 0,
      "audioText": "Chauffeur",
      "audioLang": "fr-FR"
    },
    {
      "id": "f25q10",
      "type": "translate",
      "prompt": "\"Çiftçi\" nasıl söylenir?",
      "options": [
        "Médecin",
        "Professeur",
        "Agriculteur",
        "Avocat"
      ],
      "correctIndex": 2,
      "audioText": "Agriculteur",
      "audioLang": "fr-FR"
    },
    {
      "id": "f25q11",
      "type": "translate",
      "prompt": "\"Mühendis\" nasıl söylenir?",
      "options": [
        "Ingénieur",
        "Professeur",
        "Avocat",
        "Agriculteur"
      ],
      "correctIndex": 0,
      "audioText": "Ingénieur",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f26",
  "title": "Meslekler 2",
  "description": "İleri meslekler",
  "icon": "👩‍🏫",
  "xpReward": 20,
  "questions": [
    {
      "id": "f26q1",
      "type": "flashcard",
      "prompt": "Yazar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Écrivain",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✍️"
      ]
    },
    {
                "id": "f26q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yazar ve Sanatçı\"",
                "options": [
                          "Artiste",
                          "Écrivain",
                          "Soldat",
                          "et",
                          "Architecte"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Écrivain",
                          "et",
                          "Artiste"
                ],
                "audioText": "Écrivain et Artiste",
                "audioLang": "fr-FR"
    },
    {
                "id": "f26q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Mimar görüyorum\"",
                "options": [
                          "Artiste",
                          "Architecte",
                          "Écrivain",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Architecte",
                          "vois"
                ],
                "audioText": "Je Architecte vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f26q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Polis\"",
                "options": [
                          "C'est",
                          "Chef",
                          "Police",
                          "Artiste"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Police"
                ],
                "audioText": "C'est Police",
                "audioLang": "fr-FR"
    },
    {
      "id": "f26q2",
      "type": "flashcard",
      "prompt": "Sanatçı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Artiste",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎨"
      ]
    },
    {
      "id": "f26q3",
      "type": "flashcard",
      "prompt": "Mimar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Architecte",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏛️"
      ]
    },
    {
      "id": "f26q4",
      "type": "flashcard",
      "prompt": "Polis",
      "options": [],
      "correctIndex": 0,
      "audioText": "Police",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👮"
      ]
    },
    {
      "id": "f26q5",
      "type": "flashcard",
      "prompt": "Asker",
      "options": [],
      "correctIndex": 0,
      "audioText": "Soldat",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💂"
      ]
    },
    {
      "id": "f26q6",
      "type": "flashcard",
      "prompt": "Aşçı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chef",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👨‍🍳"
      ]
    },
    {
      "id": "f26q7",
      "type": "multipleChoice",
      "prompt": "\"Écrivain\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Polis",
        "Yazar",
        "Aşçı",
        "Sanatçı"
      ],
      "correctIndex": 1,
      "audioText": "Écrivain",
      "audioLang": "fr-FR"
    },
    {
      "id": "f26q8",
      "type": "multipleChoice",
      "prompt": "\"Artiste\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sanatçı",
        "Mimar",
        "Yazar",
        "Asker"
      ],
      "correctIndex": 0,
      "audioText": "Artiste",
      "audioLang": "fr-FR"
    },
    {
      "id": "f26q9",
      "type": "multipleChoice",
      "prompt": "\"Architecte\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Asker",
        "Polis",
        "Mimar",
        "Sanatçı"
      ],
      "correctIndex": 2,
      "audioText": "Architecte",
      "audioLang": "fr-FR"
    },
    {
      "id": "f26q10",
      "type": "translate",
      "prompt": "\"Polis\" nasıl söylenir?",
      "options": [
        "Architecte",
        "Écrivain",
        "Artiste",
        "Police"
      ],
      "correctIndex": 3,
      "audioText": "Police",
      "audioLang": "fr-FR"
    },
    {
      "id": "f26q11",
      "type": "translate",
      "prompt": "\"Asker\" nasıl söylenir?",
      "options": [
        "Écrivain",
        "Soldat",
        "Artiste",
        "Police"
      ],
      "correctIndex": 1,
      "audioText": "Soldat",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f27",
  "title": "İş Yerinde",
  "description": "Ofis ve iş hayatı",
  "icon": "🏢",
  "xpReward": 20,
  "questions": [
    {
      "id": "f27q1",
      "type": "flashcard",
      "prompt": "Ofis",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bureau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏢"
      ]
    },
    {
                "id": "f27q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ofis ve Toplantı\"",
                "options": [
                          "Projet",
                          "Présentation",
                          "Bureau",
                          "Réunion",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Bureau",
                          "et",
                          "Réunion"
                ],
                "audioText": "Bureau et Réunion",
                "audioLang": "fr-FR"
    },
    {
                "id": "f27q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Proje görüyorum\"",
                "options": [
                          "Bureau",
                          "Réunion",
                          "Je",
                          "vois",
                          "Projet"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Projet",
                          "vois"
                ],
                "audioText": "Je Projet vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f27q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sunum\"",
                "options": [
                          "Présentation",
                          "Réunion",
                          "C'est",
                          "Travail"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Présentation"
                ],
                "audioText": "C'est Présentation",
                "audioLang": "fr-FR"
    },
    {
      "id": "f27q2",
      "type": "flashcard",
      "prompt": "Toplantı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Réunion",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤝"
      ]
    },
    {
      "id": "f27q3",
      "type": "flashcard",
      "prompt": "Proje",
      "options": [],
      "correctIndex": 0,
      "audioText": "Projet",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📋"
      ]
    },
    {
      "id": "f27q4",
      "type": "flashcard",
      "prompt": "Sunum",
      "options": [],
      "correctIndex": 0,
      "audioText": "Présentation",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📊"
      ]
    },
    {
      "id": "f27q5",
      "type": "flashcard",
      "prompt": "Maaş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Salaire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💵"
      ]
    },
    {
      "id": "f27q6",
      "type": "flashcard",
      "prompt": "İş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Travail",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💼"
      ]
    },
    {
      "id": "f27q7",
      "type": "multipleChoice",
      "prompt": "\"Bureau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Maaş",
        "İş",
        "Sunum",
        "Ofis"
      ],
      "correctIndex": 3,
      "audioText": "Bureau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f27q8",
      "type": "multipleChoice",
      "prompt": "\"Réunion\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Toplantı",
        "Maaş",
        "Proje",
        "İş"
      ],
      "correctIndex": 0,
      "audioText": "Réunion",
      "audioLang": "fr-FR"
    },
    {
      "id": "f27q9",
      "type": "multipleChoice",
      "prompt": "\"Projet\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sunum",
        "İş",
        "Proje",
        "Maaş"
      ],
      "correctIndex": 2,
      "audioText": "Projet",
      "audioLang": "fr-FR"
    },
    {
      "id": "f27q10",
      "type": "translate",
      "prompt": "\"Sunum\" nasıl söylenir?",
      "options": [
        "Salaire",
        "Travail",
        "Projet",
        "Présentation"
      ],
      "correctIndex": 3,
      "audioText": "Présentation",
      "audioLang": "fr-FR"
    },
    {
      "id": "f27q11",
      "type": "translate",
      "prompt": "\"Maaş\" nasıl söylenir?",
      "options": [
        "Salaire",
        "Travail",
        "Projet",
        "Réunion"
      ],
      "correctIndex": 0,
      "audioText": "Salaire",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f28",
  "title": "Mekanlar",
  "description": "Şehirdeki yerler",
  "icon": "🏙️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f28q1",
      "type": "flashcard",
      "prompt": "Okul",
      "options": [],
      "correctIndex": 0,
      "audioText": "École",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏫"
      ]
    },
    {
                "id": "f28q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Okul ve Hastane\"",
                "options": [
                          "Supermarché",
                          "École",
                          "Hôpital",
                          "Hôtel",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "École",
                          "et",
                          "Hôpital"
                ],
                "audioText": "École et Hôpital",
                "audioLang": "fr-FR"
    },
    {
                "id": "f28q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Otel görüyorum\"",
                "options": [
                          "vois",
                          "Supermarché",
                          "Je",
                          "Hôtel",
                          "École"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Hôtel",
                          "vois"
                ],
                "audioText": "Je Hôtel vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f28q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Restoran\"",
                "options": [
                          "Restaurant",
                          "Hôpital",
                          "C'est",
                          "Bibliothèque"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Restaurant"
                ],
                "audioText": "C'est Restaurant",
                "audioLang": "fr-FR"
    },
    {
      "id": "f28q2",
      "type": "flashcard",
      "prompt": "Hastane",
      "options": [],
      "correctIndex": 0,
      "audioText": "Hôpital",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏥"
      ]
    },
    {
      "id": "f28q3",
      "type": "flashcard",
      "prompt": "Otel",
      "options": [],
      "correctIndex": 0,
      "audioText": "Hôtel",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏨"
      ]
    },
    {
      "id": "f28q4",
      "type": "flashcard",
      "prompt": "Restoran",
      "options": [],
      "correctIndex": 0,
      "audioText": "Restaurant",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
      "id": "f28q5",
      "type": "flashcard",
      "prompt": "Market",
      "options": [],
      "correctIndex": 0,
      "audioText": "Supermarché",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛒"
      ]
    },
    {
      "id": "f28q6",
      "type": "flashcard",
      "prompt": "Kütüphane",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bibliothèque",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📚"
      ]
    },
    {
      "id": "f28q7",
      "type": "multipleChoice",
      "prompt": "\"École\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Okul",
        "Market",
        "Kütüphane",
        "Otel"
      ],
      "correctIndex": 0,
      "audioText": "École",
      "audioLang": "fr-FR"
    },
    {
      "id": "f28q8",
      "type": "multipleChoice",
      "prompt": "\"Hôpital\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Otel",
        "Kütüphane",
        "Hastane",
        "Restoran"
      ],
      "correctIndex": 2,
      "audioText": "Hôpital",
      "audioLang": "fr-FR"
    },
    {
      "id": "f28q9",
      "type": "multipleChoice",
      "prompt": "\"Hôtel\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Okul",
        "Restoran",
        "Otel",
        "Hastane"
      ],
      "correctIndex": 2,
      "audioText": "Hôtel",
      "audioLang": "fr-FR"
    },
    {
      "id": "f28q10",
      "type": "translate",
      "prompt": "\"Restoran\" nasıl söylenir?",
      "options": [
        "Hôtel",
        "Restaurant",
        "Supermarché",
        "Bibliothèque"
      ],
      "correctIndex": 1,
      "audioText": "Restaurant",
      "audioLang": "fr-FR"
    },
    {
      "id": "f28q11",
      "type": "translate",
      "prompt": "\"Market\" nasıl söylenir?",
      "options": [
        "Hôtel",
        "École",
        "Supermarché",
        "Hôpital"
      ],
      "correctIndex": 2,
      "audioText": "Supermarché",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f29",
  "title": "Taşıtlar",
  "description": "Ulaşım araçları",
  "icon": "🚗",
  "xpReward": 20,
  "questions": [
    {
      "id": "f29q1",
      "type": "flashcard",
      "prompt": "Araba",
      "options": [],
      "correctIndex": 0,
      "audioText": "Voiture",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚗"
      ]
    },
    {
                "id": "f29q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Araba ve Otobüs\"",
                "options": [
                          "et",
                          "Avion",
                          "Bus",
                          "Voiture",
                          "Vélo"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Voiture",
                          "et",
                          "Bus"
                ],
                "audioText": "Voiture et Bus",
                "audioLang": "fr-FR"
    },
    {
                "id": "f29q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tren görüyorum\"",
                "options": [
                          "Voiture",
                          "Je",
                          "vois",
                          "Train",
                          "Bus"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Train",
                          "vois"
                ],
                "audioText": "Je Train vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f29q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Uçak\"",
                "options": [
                          "Avion",
                          "Bateau",
                          "C'est",
                          "Bus"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Avion"
                ],
                "audioText": "C'est Avion",
                "audioLang": "fr-FR"
    },
    {
      "id": "f29q2",
      "type": "flashcard",
      "prompt": "Otobüs",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bus",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚌"
      ]
    },
    {
      "id": "f29q3",
      "type": "flashcard",
      "prompt": "Tren",
      "options": [],
      "correctIndex": 0,
      "audioText": "Train",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚂"
      ]
    },
    {
      "id": "f29q4",
      "type": "flashcard",
      "prompt": "Uçak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Avion",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✈️"
      ]
    },
    {
      "id": "f29q5",
      "type": "flashcard",
      "prompt": "Bisiklet",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vélo",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚲"
      ]
    },
    {
      "id": "f29q6",
      "type": "flashcard",
      "prompt": "Gemi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bateau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚢"
      ]
    },
    {
      "id": "f29q7",
      "type": "multipleChoice",
      "prompt": "\"Voiture\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Uçak",
        "Bisiklet",
        "Araba",
        "Gemi"
      ],
      "correctIndex": 2,
      "audioText": "Voiture",
      "audioLang": "fr-FR"
    },
    {
      "id": "f29q8",
      "type": "multipleChoice",
      "prompt": "\"Bus\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Otobüs",
        "Uçak",
        "Tren",
        "Bisiklet"
      ],
      "correctIndex": 0,
      "audioText": "Bus",
      "audioLang": "fr-FR"
    },
    {
      "id": "f29q9",
      "type": "multipleChoice",
      "prompt": "\"Train\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bisiklet",
        "Araba",
        "Tren",
        "Gemi"
      ],
      "correctIndex": 2,
      "audioText": "Train",
      "audioLang": "fr-FR"
    },
    {
      "id": "f29q10",
      "type": "translate",
      "prompt": "\"Uçak\" nasıl söylenir?",
      "options": [
        "Avion",
        "Train",
        "Bus",
        "Voiture"
      ],
      "correctIndex": 0,
      "audioText": "Avion",
      "audioLang": "fr-FR"
    },
    {
      "id": "f29q11",
      "type": "translate",
      "prompt": "\"Bisiklet\" nasıl söylenir?",
      "options": [
        "Train",
        "Vélo",
        "Bateau",
        "Bus"
      ],
      "correctIndex": 1,
      "audioText": "Vélo",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f30",
  "title": "Yön Sorma",
  "description": "Yol tarifi ver",
  "icon": "🗺️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f30q1",
      "type": "flashcard",
      "prompt": "Sol",
      "options": [],
      "correctIndex": 0,
      "audioText": "Gauche",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬅️"
      ]
    },
    {
                "id": "f30q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sol ve Sağ\"",
                "options": [
                          "Droite",
                          "et",
                          "Gauche",
                          "Près",
                          "Tout droit"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Gauche",
                          "et",
                          "Droite"
                ],
                "audioText": "Gauche et Droite",
                "audioLang": "fr-FR"
    },
    {
                "id": "f30q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Düz görüyorum\"",
                "options": [
                          "Droite",
                          "vois",
                          "Je",
                          "Tout droit",
                          "Loin"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Tout droit",
                          "vois"
                ],
                "audioText": "Je Tout droit vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f30q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yakın\"",
                "options": [
                          "Tourner",
                          "Près",
                          "Droite",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Près"
                ],
                "audioText": "C'est Près",
                "audioLang": "fr-FR"
    },
    {
      "id": "f30q2",
      "type": "flashcard",
      "prompt": "Sağ",
      "options": [],
      "correctIndex": 0,
      "audioText": "Droite",
      "audioLang": "fr-FR",
      "imageOptions": [
        "➡️"
      ]
    },
    {
      "id": "f30q3",
      "type": "flashcard",
      "prompt": "Düz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tout droit",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬆️"
      ]
    },
    {
      "id": "f30q4",
      "type": "flashcard",
      "prompt": "Yakın",
      "options": [],
      "correctIndex": 0,
      "audioText": "Près",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📍"
      ]
    },
    {
      "id": "f30q5",
      "type": "flashcard",
      "prompt": "Uzak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Loin",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗺️"
      ]
    },
    {
      "id": "f30q6",
      "type": "flashcard",
      "prompt": "Dönmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tourner",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔄"
      ]
    },
    {
      "id": "f30q7",
      "type": "multipleChoice",
      "prompt": "\"Gauche\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Dönmek",
        "Yakın",
        "Sol",
        "Sağ"
      ],
      "correctIndex": 2,
      "audioText": "Gauche",
      "audioLang": "fr-FR"
    },
    {
      "id": "f30q8",
      "type": "multipleChoice",
      "prompt": "\"Droite\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sağ",
        "Sol",
        "Yakın",
        "Uzak"
      ],
      "correctIndex": 0,
      "audioText": "Droite",
      "audioLang": "fr-FR"
    },
    {
      "id": "f30q9",
      "type": "multipleChoice",
      "prompt": "\"Tout droit\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sol",
        "Düz",
        "Sağ",
        "Yakın"
      ],
      "correctIndex": 1,
      "audioText": "Tout droit",
      "audioLang": "fr-FR"
    },
    {
      "id": "f30q10",
      "type": "translate",
      "prompt": "\"Yakın\" nasıl söylenir?",
      "options": [
        "Près",
        "Droite",
        "Loin",
        "Gauche"
      ],
      "correctIndex": 0,
      "audioText": "Près",
      "audioLang": "fr-FR"
    },
    {
      "id": "f30q11",
      "type": "translate",
      "prompt": "\"Uzak\" nasıl söylenir?",
      "options": [
        "Loin",
        "Droite",
        "Gauche",
        "Près"
      ],
      "correctIndex": 0,
      "audioText": "Loin",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f31",
  "title": "Sabah Rutini",
  "description": "Sabah aktiviteleri",
  "icon": "🌅",
  "xpReward": 20,
  "questions": [
    {
      "id": "f31q1",
      "type": "flashcard",
      "prompt": "Uyanmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Se réveiller",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⏰"
      ]
    },
    {
                "id": "f31q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Uyanmak ve Yıkanmak\"",
                "options": [
                          "Se réveiller",
                          "S'habiller",
                          "et",
                          "Sortir",
                          "Se laver"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Se réveiller",
                          "et",
                          "Se laver"
                ],
                "audioText": "Se réveiller et Se laver",
                "audioLang": "fr-FR"
    },
    {
                "id": "f31q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Giyinmek görüyorum\"",
                "options": [
                          "Sortir",
                          "Se réveiller",
                          "vois",
                          "S'habiller",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "S'habiller",
                          "vois"
                ],
                "audioText": "Je S'habiller vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f31q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kahvaltı\"",
                "options": [
                          "Se réveiller",
                          "Se laver",
                          "Petit-déjeuner",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Petit-déjeuner"
                ],
                "audioText": "C'est Petit-déjeuner",
                "audioLang": "fr-FR"
    },
    {
      "id": "f31q2",
      "type": "flashcard",
      "prompt": "Yıkanmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Se laver",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚿"
      ]
    },
    {
      "id": "f31q3",
      "type": "flashcard",
      "prompt": "Giyinmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "S'habiller",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👕"
      ]
    },
    {
      "id": "f31q4",
      "type": "flashcard",
      "prompt": "Kahvaltı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Petit-déjeuner",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍳"
      ]
    },
    {
      "id": "f31q5",
      "type": "flashcard",
      "prompt": "Çıkmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sortir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚪"
      ]
    },
    {
      "id": "f31q6",
      "type": "flashcard",
      "prompt": "Gezmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Se promener",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶"
      ]
    },
    {
      "id": "f31q7",
      "type": "multipleChoice",
      "prompt": "\"Se réveiller\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gezmek",
        "Uyanmak",
        "Yıkanmak",
        "Giyinmek"
      ],
      "correctIndex": 1,
      "audioText": "Se réveiller",
      "audioLang": "fr-FR"
    },
    {
      "id": "f31q8",
      "type": "multipleChoice",
      "prompt": "\"Se laver\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çıkmak",
        "Uyanmak",
        "Giyinmek",
        "Yıkanmak"
      ],
      "correctIndex": 3,
      "audioText": "Se laver",
      "audioLang": "fr-FR"
    },
    {
      "id": "f31q9",
      "type": "multipleChoice",
      "prompt": "\"S'habiller\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Giyinmek",
        "Uyanmak",
        "Kahvaltı",
        "Çıkmak"
      ],
      "correctIndex": 0,
      "audioText": "S'habiller",
      "audioLang": "fr-FR"
    },
    {
      "id": "f31q10",
      "type": "translate",
      "prompt": "\"Kahvaltı\" nasıl söylenir?",
      "options": [
        "Petit-déjeuner",
        "Se réveiller",
        "Se promener",
        "Sortir"
      ],
      "correctIndex": 0,
      "audioText": "Petit-déjeuner",
      "audioLang": "fr-FR"
    },
    {
      "id": "f31q11",
      "type": "translate",
      "prompt": "\"Çıkmak\" nasıl söylenir?",
      "options": [
        "Se réveiller",
        "Sortir",
        "Se laver",
        "S'habiller"
      ],
      "correctIndex": 1,
      "audioText": "Sortir",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f32",
  "title": "İş ve Okul",
  "description": "Okul kelimeleri",
  "icon": "🏫",
  "xpReward": 20,
  "questions": [
    {
      "id": "f32q1",
      "type": "flashcard",
      "prompt": "Ders",
      "options": [],
      "correctIndex": 0,
      "audioText": "Leçon",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
                "id": "f32q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ders ve Kitap\"",
                "options": [
                          "Cahier",
                          "Leçon",
                          "et",
                          "Livre",
                          "Classe"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Leçon",
                          "et",
                          "Livre"
                ],
                "audioText": "Leçon et Livre",
                "audioLang": "fr-FR"
    },
    {
                "id": "f32q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Defter görüyorum\"",
                "options": [
                          "Classe",
                          "vois",
                          "Cahier",
                          "Leçon",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Cahier",
                          "vois"
                ],
                "audioText": "Je Cahier vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f32q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Öğrenci\"",
                "options": [
                          "Examen",
                          "Élève",
                          "Leçon",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Élève"
                ],
                "audioText": "C'est Élève",
                "audioLang": "fr-FR"
    },
    {
      "id": "f32q2",
      "type": "flashcard",
      "prompt": "Kitap",
      "options": [],
      "correctIndex": 0,
      "audioText": "Livre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📚"
      ]
    },
    {
      "id": "f32q3",
      "type": "flashcard",
      "prompt": "Defter",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cahier",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📓"
      ]
    },
    {
      "id": "f32q4",
      "type": "flashcard",
      "prompt": "Öğrenci",
      "options": [],
      "correctIndex": 0,
      "audioText": "Élève",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👨‍🎓"
      ]
    },
    {
      "id": "f32q5",
      "type": "flashcard",
      "prompt": "Sınıf",
      "options": [],
      "correctIndex": 0,
      "audioText": "Classe",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏫"
      ]
    },
    {
      "id": "f32q6",
      "type": "flashcard",
      "prompt": "Sınav",
      "options": [],
      "correctIndex": 0,
      "audioText": "Examen",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📝"
      ]
    },
    {
      "id": "f32q7",
      "type": "multipleChoice",
      "prompt": "\"Leçon\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ders",
        "Defter",
        "Öğrenci",
        "Sınıf"
      ],
      "correctIndex": 0,
      "audioText": "Leçon",
      "audioLang": "fr-FR"
    },
    {
      "id": "f32q8",
      "type": "multipleChoice",
      "prompt": "\"Livre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Öğrenci",
        "Ders",
        "Defter",
        "Kitap"
      ],
      "correctIndex": 3,
      "audioText": "Livre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f32q9",
      "type": "multipleChoice",
      "prompt": "\"Cahier\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sınav",
        "Sınıf",
        "Öğrenci",
        "Defter"
      ],
      "correctIndex": 3,
      "audioText": "Cahier",
      "audioLang": "fr-FR"
    },
    {
      "id": "f32q10",
      "type": "translate",
      "prompt": "\"Öğrenci\" nasıl söylenir?",
      "options": [
        "Classe",
        "Élève",
        "Leçon",
        "Cahier"
      ],
      "correctIndex": 1,
      "audioText": "Élève",
      "audioLang": "fr-FR"
    },
    {
      "id": "f32q11",
      "type": "translate",
      "prompt": "\"Sınıf\" nasıl söylenir?",
      "options": [
        "Classe",
        "Leçon",
        "Livre",
        "Cahier"
      ],
      "correctIndex": 0,
      "audioText": "Classe",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f33",
  "title": "Akşam Rutini",
  "description": "Akşam aktiviteleri",
  "icon": "🌃",
  "xpReward": 20,
  "questions": [
    {
      "id": "f33q1",
      "type": "flashcard",
      "prompt": "Yemek pişirmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cuisiner",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍲"
      ]
    },
    {
                "id": "f33q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yemek pişirmek ve TV izlemek\"",
                "options": [
                          "et",
                          "Cuisiner",
                          "Dormir",
                          "Regarder la télé",
                          "Jouer"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Cuisiner",
                          "et",
                          "Regarder la télé"
                ],
                "audioText": "Cuisiner et Regarder la télé",
                "audioLang": "fr-FR"
    },
    {
                "id": "f33q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Okumak görüyorum\"",
                "options": [
                          "vois",
                          "Regarder la télé",
                          "Cuisiner",
                          "Lire",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Lire",
                          "vois"
                ],
                "audioText": "Je Lire vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f33q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Oynamak\"",
                "options": [
                          "Nettoyer",
                          "Cuisiner",
                          "Jouer",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Jouer"
                ],
                "audioText": "C'est Jouer",
                "audioLang": "fr-FR"
    },
    {
      "id": "f33q2",
      "type": "flashcard",
      "prompt": "TV izlemek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Regarder la télé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📺"
      ]
    },
    {
      "id": "f33q3",
      "type": "flashcard",
      "prompt": "Okumak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
      "id": "f33q4",
      "type": "flashcard",
      "prompt": "Oynamak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jouer",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎮"
      ]
    },
    {
      "id": "f33q5",
      "type": "flashcard",
      "prompt": "Uyumak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Dormir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😴"
      ]
    },
    {
      "id": "f33q6",
      "type": "flashcard",
      "prompt": "Temizlemek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Nettoyer",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧹"
      ]
    },
    {
      "id": "f33q7",
      "type": "multipleChoice",
      "prompt": "\"Cuisiner\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Oynamak",
        "Okumak",
        "TV izlemek",
        "Yemek pişirmek"
      ],
      "correctIndex": 3,
      "audioText": "Cuisiner",
      "audioLang": "fr-FR"
    },
    {
      "id": "f33q8",
      "type": "multipleChoice",
      "prompt": "\"Regarder la télé\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "TV izlemek",
        "Temizlemek",
        "Uyumak",
        "Oynamak"
      ],
      "correctIndex": 0,
      "audioText": "Regarder la télé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f33q9",
      "type": "multipleChoice",
      "prompt": "\"Lire\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Oynamak",
        "Yemek pişirmek",
        "Okumak",
        "TV izlemek"
      ],
      "correctIndex": 2,
      "audioText": "Lire",
      "audioLang": "fr-FR"
    },
    {
      "id": "f33q10",
      "type": "translate",
      "prompt": "\"Oynamak\" nasıl söylenir?",
      "options": [
        "Jouer",
        "Nettoyer",
        "Dormir",
        "Lire"
      ],
      "correctIndex": 0,
      "audioText": "Jouer",
      "audioLang": "fr-FR"
    },
    {
      "id": "f33q11",
      "type": "translate",
      "prompt": "\"Uyumak\" nasıl söylenir?",
      "options": [
        "Nettoyer",
        "Cuisiner",
        "Jouer",
        "Dormir"
      ],
      "correctIndex": 3,
      "audioText": "Dormir",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f34",
  "title": "Hisler",
  "description": "Duygu ifadeleri",
  "icon": "😊",
  "xpReward": 20,
  "questions": [
    {
      "id": "f34q1",
      "type": "flashcard",
      "prompt": "Mutlu",
      "options": [],
      "correctIndex": 0,
      "audioText": "Heureux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😊"
      ]
    },
    {
                "id": "f34q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Mutlu ve Üzgün\"",
                "options": [
                          "et",
                          "Heureux",
                          "Surpris",
                          "Triste",
                          "En colère"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Heureux",
                          "et",
                          "Triste"
                ],
                "audioText": "Heureux et Triste",
                "audioLang": "fr-FR"
    },
    {
                "id": "f34q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kızgın görüyorum\"",
                "options": [
                          "En colère",
                          "vois",
                          "Triste",
                          "Surpris",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "En colère",
                          "vois"
                ],
                "audioText": "Je En colère vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f34q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Korkmuş\"",
                "options": [
                          "Heureux",
                          "Effrayé",
                          "C'est",
                          "Triste"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Effrayé"
                ],
                "audioText": "C'est Effrayé",
                "audioLang": "fr-FR"
    },
    {
      "id": "f34q2",
      "type": "flashcard",
      "prompt": "Üzgün",
      "options": [],
      "correctIndex": 0,
      "audioText": "Triste",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😢"
      ]
    },
    {
      "id": "f34q3",
      "type": "flashcard",
      "prompt": "Kızgın",
      "options": [],
      "correctIndex": 0,
      "audioText": "En colère",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😡"
      ]
    },
    {
      "id": "f34q4",
      "type": "flashcard",
      "prompt": "Korkmuş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Effrayé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😨"
      ]
    },
    {
      "id": "f34q5",
      "type": "flashcard",
      "prompt": "Şaşırmış",
      "options": [],
      "correctIndex": 0,
      "audioText": "Surpris",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😲"
      ]
    },
    {
      "id": "f34q6",
      "type": "flashcard",
      "prompt": "Sıkılmış",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ennuyé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😑"
      ]
    },
    {
      "id": "f34q7",
      "type": "multipleChoice",
      "prompt": "\"Heureux\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Üzgün",
        "Mutlu",
        "Kızgın",
        "Şaşırmış"
      ],
      "correctIndex": 1,
      "audioText": "Heureux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f34q8",
      "type": "multipleChoice",
      "prompt": "\"Triste\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şaşırmış",
        "Sıkılmış",
        "Üzgün",
        "Kızgın"
      ],
      "correctIndex": 2,
      "audioText": "Triste",
      "audioLang": "fr-FR"
    },
    {
      "id": "f34q9",
      "type": "multipleChoice",
      "prompt": "\"En colère\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kızgın",
        "Sıkılmış",
        "Mutlu",
        "Üzgün"
      ],
      "correctIndex": 0,
      "audioText": "En colère",
      "audioLang": "fr-FR"
    },
    {
      "id": "f34q10",
      "type": "translate",
      "prompt": "\"Korkmuş\" nasıl söylenir?",
      "options": [
        "Heureux",
        "Ennuyé",
        "Effrayé",
        "Triste"
      ],
      "correctIndex": 2,
      "audioText": "Effrayé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f34q11",
      "type": "translate",
      "prompt": "\"Şaşırmış\" nasıl söylenir?",
      "options": [
        "Surpris",
        "Ennuyé",
        "Effrayé",
        "En colère"
      ],
      "correctIndex": 0,
      "audioText": "Surpris",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f35",
  "title": "Karakter Özellikleri",
  "description": "Kişilik ifadeleri",
  "icon": "🧠",
  "xpReward": 20,
  "questions": [
    {
      "id": "f35q1",
      "type": "flashcard",
      "prompt": "Nazik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Gentil",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤗"
      ]
    },
    {
                "id": "f35q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Nazik ve Akıllı\"",
                "options": [
                          "Intelligent",
                          "et",
                          "Honnête",
                          "Gentil",
                          "Courageux"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Gentil",
                          "et",
                          "Intelligent"
                ],
                "audioText": "Gentil et Intelligent",
                "audioLang": "fr-FR"
    },
    {
                "id": "f35q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Cesur görüyorum\"",
                "options": [
                          "Travailleur",
                          "Gentil",
                          "vois",
                          "Courageux",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Courageux",
                          "vois"
                ],
                "audioText": "Je Courageux vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f35q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dürüst\"",
                "options": [
                          "Gentil",
                          "Honnête",
                          "C'est",
                          "Intelligent"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Honnête"
                ],
                "audioText": "C'est Honnête",
                "audioLang": "fr-FR"
    },
    {
      "id": "f35q2",
      "type": "flashcard",
      "prompt": "Akıllı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Intelligent",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧠"
      ]
    },
    {
      "id": "f35q3",
      "type": "flashcard",
      "prompt": "Cesur",
      "options": [],
      "correctIndex": 0,
      "audioText": "Courageux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦸"
      ]
    },
    {
      "id": "f35q4",
      "type": "flashcard",
      "prompt": "Dürüst",
      "options": [],
      "correctIndex": 0,
      "audioText": "Honnête",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✅"
      ]
    },
    {
      "id": "f35q5",
      "type": "flashcard",
      "prompt": "Çalışkan",
      "options": [],
      "correctIndex": 0,
      "audioText": "Travailleur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💪"
      ]
    },
    {
      "id": "f35q6",
      "type": "flashcard",
      "prompt": "Sabırlı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Patient",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⏳"
      ]
    },
    {
      "id": "f35q7",
      "type": "multipleChoice",
      "prompt": "\"Gentil\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Dürüst",
        "Akıllı",
        "Nazik",
        "Cesur"
      ],
      "correctIndex": 2,
      "audioText": "Gentil",
      "audioLang": "fr-FR"
    },
    {
      "id": "f35q8",
      "type": "multipleChoice",
      "prompt": "\"Intelligent\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Nazik",
        "Sabırlı",
        "Cesur",
        "Akıllı"
      ],
      "correctIndex": 3,
      "audioText": "Intelligent",
      "audioLang": "fr-FR"
    },
    {
      "id": "f35q9",
      "type": "multipleChoice",
      "prompt": "\"Courageux\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Cesur",
        "Çalışkan",
        "Dürüst",
        "Sabırlı"
      ],
      "correctIndex": 0,
      "audioText": "Courageux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f35q10",
      "type": "translate",
      "prompt": "\"Dürüst\" nasıl söylenir?",
      "options": [
        "Intelligent",
        "Patient",
        "Gentil",
        "Honnête"
      ],
      "correctIndex": 3,
      "audioText": "Honnête",
      "audioLang": "fr-FR"
    },
    {
      "id": "f35q11",
      "type": "translate",
      "prompt": "\"Çalışkan\" nasıl söylenir?",
      "options": [
        "Travailleur",
        "Intelligent",
        "Honnête",
        "Gentil"
      ],
      "correctIndex": 0,
      "audioText": "Travailleur",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f36",
  "title": "Tepkiler",
  "description": "Günlük tepkiler",
  "icon": "😲",
  "xpReward": 20,
  "questions": [
    {
      "id": "f36q1",
      "type": "flashcard",
      "prompt": "Harika",
      "options": [],
      "correctIndex": 0,
      "audioText": "Merveilleux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌟"
      ]
    },
    {
                "id": "f36q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Harika ve Aferin\"",
                "options": [
                          "Bravo",
                          "Pas question",
                          "et",
                          "Merveilleux",
                          "Certainement"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Merveilleux",
                          "et",
                          "Bravo"
                ],
                "audioText": "Merveilleux et Bravo",
                "audioLang": "fr-FR"
    },
    {
                "id": "f36q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tamam görüyorum\"",
                "options": [
                          "Certainement",
                          "vois",
                          "Je",
                          "Merveilleux",
                          "D'accord"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "D'accord",
                          "vois"
                ],
                "audioText": "Je D'accord vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f36q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Olmaz\"",
                "options": [
                          "Peut-être",
                          "Pas question",
                          "C'est",
                          "Bravo"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Pas question"
                ],
                "audioText": "C'est Pas question",
                "audioLang": "fr-FR"
    },
    {
      "id": "f36q2",
      "type": "flashcard",
      "prompt": "Aferin",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bravo",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👏"
      ]
    },
    {
      "id": "f36q3",
      "type": "flashcard",
      "prompt": "Tamam",
      "options": [],
      "correctIndex": 0,
      "audioText": "D'accord",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👍"
      ]
    },
    {
      "id": "f36q4",
      "type": "flashcard",
      "prompt": "Olmaz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pas question",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❌"
      ]
    },
    {
      "id": "f36q5",
      "type": "flashcard",
      "prompt": "Kesinlikle",
      "options": [],
      "correctIndex": 0,
      "audioText": "Certainement",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💯"
      ]
    },
    {
      "id": "f36q6",
      "type": "flashcard",
      "prompt": "Belki",
      "options": [],
      "correctIndex": 0,
      "audioText": "Peut-être",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤔"
      ]
    },
    {
      "id": "f36q7",
      "type": "multipleChoice",
      "prompt": "\"Merveilleux\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kesinlikle",
        "Aferin",
        "Belki",
        "Harika"
      ],
      "correctIndex": 3,
      "audioText": "Merveilleux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f36q8",
      "type": "multipleChoice",
      "prompt": "\"Bravo\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kesinlikle",
        "Belki",
        "Aferin",
        "Olmaz"
      ],
      "correctIndex": 2,
      "audioText": "Bravo",
      "audioLang": "fr-FR"
    },
    {
      "id": "f36q9",
      "type": "multipleChoice",
      "prompt": "\"D'accord\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Harika",
        "Belki",
        "Tamam",
        "Kesinlikle"
      ],
      "correctIndex": 2,
      "audioText": "D'accord",
      "audioLang": "fr-FR"
    },
    {
      "id": "f36q10",
      "type": "translate",
      "prompt": "\"Olmaz\" nasıl söylenir?",
      "options": [
        "Pas question",
        "Peut-être",
        "Certainement",
        "D'accord"
      ],
      "correctIndex": 0,
      "audioText": "Pas question",
      "audioLang": "fr-FR"
    },
    {
      "id": "f36q11",
      "type": "translate",
      "prompt": "\"Kesinlikle\" nasıl söylenir?",
      "options": [
        "Certainement",
        "D'accord",
        "Peut-être",
        "Bravo"
      ],
      "correctIndex": 0,
      "audioText": "Certainement",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f37",
  "title": "Hareket Fiilleri",
  "description": "Hareket ifade eden fiiller",
  "icon": "🏃‍♂️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f37q1",
      "type": "flashcard",
      "prompt": "Gitmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Aller",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶"
      ]
    },
    {
                "id": "f37q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gitmek ve Gelmek\"",
                "options": [
                          "Venir",
                          "Voler",
                          "et",
                          "Aller",
                          "Marcher"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Aller",
                          "et",
                          "Venir"
                ],
                "audioText": "Aller et Venir",
                "audioLang": "fr-FR"
    },
    {
                "id": "f37q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Koşmak görüyorum\"",
                "options": [
                          "Voler",
                          "Venir",
                          "Courir",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Courir",
                          "vois"
                ],
                "audioText": "Je Courir vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f37q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yürümek\"",
                "options": [
                          "Marcher",
                          "Aller",
                          "Sauter",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Marcher"
                ],
                "audioText": "C'est Marcher",
                "audioLang": "fr-FR"
    },
    {
      "id": "f37q2",
      "type": "flashcard",
      "prompt": "Gelmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Venir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃"
      ]
    },
    {
      "id": "f37q3",
      "type": "flashcard",
      "prompt": "Koşmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Courir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃‍♂️"
      ]
    },
    {
      "id": "f37q4",
      "type": "flashcard",
      "prompt": "Yürümek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Marcher",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶‍♂️"
      ]
    },
    {
      "id": "f37q5",
      "type": "flashcard",
      "prompt": "Uçmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Voler",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✈️"
      ]
    },
    {
      "id": "f37q6",
      "type": "flashcard",
      "prompt": "Atlamak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sauter",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤸"
      ]
    },
    {
      "id": "f37q7",
      "type": "multipleChoice",
      "prompt": "\"Aller\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gitmek",
        "Yürümek",
        "Uçmak",
        "Koşmak"
      ],
      "correctIndex": 0,
      "audioText": "Aller",
      "audioLang": "fr-FR"
    },
    {
      "id": "f37q8",
      "type": "multipleChoice",
      "prompt": "\"Venir\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Koşmak",
        "Atlamak",
        "Gelmek",
        "Yürümek"
      ],
      "correctIndex": 2,
      "audioText": "Venir",
      "audioLang": "fr-FR"
    },
    {
      "id": "f37q9",
      "type": "multipleChoice",
      "prompt": "\"Courir\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Koşmak",
        "Gitmek",
        "Gelmek",
        "Yürümek"
      ],
      "correctIndex": 0,
      "audioText": "Courir",
      "audioLang": "fr-FR"
    },
    {
      "id": "f37q10",
      "type": "translate",
      "prompt": "\"Yürümek\" nasıl söylenir?",
      "options": [
        "Courir",
        "Aller",
        "Voler",
        "Marcher"
      ],
      "correctIndex": 3,
      "audioText": "Marcher",
      "audioLang": "fr-FR"
    },
    {
      "id": "f37q11",
      "type": "translate",
      "prompt": "\"Uçmak\" nasıl söylenir?",
      "options": [
        "Marcher",
        "Voler",
        "Courir",
        "Venir"
      ],
      "correctIndex": 1,
      "audioText": "Voler",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f38",
  "title": "Durum Fiilleri",
  "description": "Durum ifade eden fiiller",
  "icon": "🧘",
  "xpReward": 20,
  "questions": [
    {
      "id": "f38q1",
      "type": "flashcard",
      "prompt": "Oturmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "S'asseoir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🪑"
      ]
    },
    {
                "id": "f38q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Oturmak ve Durmak\"",
                "options": [
                          "Penser",
                          "S'asseoir",
                          "Attendre",
                          "Se lever",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "S'asseoir",
                          "et",
                          "Se lever"
                ],
                "audioText": "S'asseoir et Se lever",
                "audioLang": "fr-FR"
    },
    {
                "id": "f38q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Uzanmak görüyorum\"",
                "options": [
                          "Se lever",
                          "vois",
                          "S'allonger",
                          "Je",
                          "Penser"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "S'allonger",
                          "vois"
                ],
                "audioText": "Je S'allonger vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f38q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Beklemek\"",
                "options": [
                          "Regarder",
                          "C'est",
                          "S'asseoir",
                          "Attendre"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Attendre"
                ],
                "audioText": "C'est Attendre",
                "audioLang": "fr-FR"
    },
    {
      "id": "f38q2",
      "type": "flashcard",
      "prompt": "Durmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Se lever",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧍"
      ]
    },
    {
      "id": "f38q3",
      "type": "flashcard",
      "prompt": "Uzanmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "S'allonger",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😴"
      ]
    },
    {
      "id": "f38q4",
      "type": "flashcard",
      "prompt": "Beklemek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Attendre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⏳"
      ]
    },
    {
      "id": "f38q5",
      "type": "flashcard",
      "prompt": "Düşünmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Penser",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💭"
      ]
    },
    {
      "id": "f38q6",
      "type": "flashcard",
      "prompt": "Bakmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Regarder",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👀"
      ]
    },
    {
      "id": "f38q7",
      "type": "multipleChoice",
      "prompt": "\"S'asseoir\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Durmak",
        "Düşünmek",
        "Bakmak",
        "Oturmak"
      ],
      "correctIndex": 3,
      "audioText": "S'asseoir",
      "audioLang": "fr-FR"
    },
    {
      "id": "f38q8",
      "type": "multipleChoice",
      "prompt": "\"Se lever\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Oturmak",
        "Bakmak",
        "Düşünmek",
        "Durmak"
      ],
      "correctIndex": 3,
      "audioText": "Se lever",
      "audioLang": "fr-FR"
    },
    {
      "id": "f38q9",
      "type": "multipleChoice",
      "prompt": "\"S'allonger\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Beklemek",
        "Uzanmak",
        "Bakmak",
        "Düşünmek"
      ],
      "correctIndex": 1,
      "audioText": "S'allonger",
      "audioLang": "fr-FR"
    },
    {
      "id": "f38q10",
      "type": "translate",
      "prompt": "\"Beklemek\" nasıl söylenir?",
      "options": [
        "S'allonger",
        "Se lever",
        "S'asseoir",
        "Attendre"
      ],
      "correctIndex": 3,
      "audioText": "Attendre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f38q11",
      "type": "translate",
      "prompt": "\"Düşünmek\" nasıl söylenir?",
      "options": [
        "Penser",
        "Se lever",
        "S'allonger",
        "S'asseoir"
      ],
      "correctIndex": 0,
      "audioText": "Penser",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f39",
  "title": "Günlük Fiiller",
  "description": "Günlük kullanılan fiiller",
  "icon": "🗣️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f39q1",
      "type": "flashcard",
      "prompt": "Yemek yemek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Manger",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
                "id": "f39q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yemek yemek ve İçmek\"",
                "options": [
                          "Écrire",
                          "Manger",
                          "Parler",
                          "Boire",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Manger",
                          "et",
                          "Boire"
                ],
                "audioText": "Manger et Boire",
                "audioLang": "fr-FR"
    },
    {
                "id": "f39q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Uyumak görüyorum\"",
                "options": [
                          "Écrire",
                          "Dormir",
                          "vois",
                          "Manger",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Dormir",
                          "vois"
                ],
                "audioText": "Je Dormir vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f39q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Konuşmak\"",
                "options": [
                          "Manger",
                          "Parler",
                          "Boire",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Parler"
                ],
                "audioText": "C'est Parler",
                "audioLang": "fr-FR"
    },
    {
      "id": "f39q2",
      "type": "flashcard",
      "prompt": "İçmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Boire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥤"
      ]
    },
    {
      "id": "f39q3",
      "type": "flashcard",
      "prompt": "Uyumak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Dormir",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😴"
      ]
    },
    {
      "id": "f39q4",
      "type": "flashcard",
      "prompt": "Konuşmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Parler",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗣️"
      ]
    },
    {
      "id": "f39q5",
      "type": "flashcard",
      "prompt": "Yazmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Écrire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✍️"
      ]
    },
    {
      "id": "f39q6",
      "type": "flashcard",
      "prompt": "Okumak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
      "id": "f39q7",
      "type": "multipleChoice",
      "prompt": "\"Manger\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yemek yemek",
        "İçmek",
        "Konuşmak",
        "Uyumak"
      ],
      "correctIndex": 0,
      "audioText": "Manger",
      "audioLang": "fr-FR"
    },
    {
      "id": "f39q8",
      "type": "multipleChoice",
      "prompt": "\"Boire\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "İçmek",
        "Okumak",
        "Uyumak",
        "Yemek yemek"
      ],
      "correctIndex": 0,
      "audioText": "Boire",
      "audioLang": "fr-FR"
    },
    {
      "id": "f39q9",
      "type": "multipleChoice",
      "prompt": "\"Dormir\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Uyumak",
        "Konuşmak",
        "Yazmak",
        "Yemek yemek"
      ],
      "correctIndex": 0,
      "audioText": "Dormir",
      "audioLang": "fr-FR"
    },
    {
      "id": "f39q10",
      "type": "translate",
      "prompt": "\"Konuşmak\" nasıl söylenir?",
      "options": [
        "Boire",
        "Dormir",
        "Écrire",
        "Parler"
      ],
      "correctIndex": 3,
      "audioText": "Parler",
      "audioLang": "fr-FR"
    },
    {
      "id": "f39q11",
      "type": "translate",
      "prompt": "\"Yazmak\" nasıl söylenir?",
      "options": [
        "Écrire",
        "Lire",
        "Boire",
        "Dormir"
      ],
      "correctIndex": 0,
      "audioText": "Écrire",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f40",
  "title": "Geçmiş Zaman",
  "description": "Geçmiş zaman kullanımı",
  "icon": "⏪",
  "xpReward": 20,
  "questions": [
    {
      "id": "f40q1",
      "type": "flashcard",
      "prompt": "Gitti",
      "options": [],
      "correctIndex": 0,
      "audioText": "Est allé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶"
      ]
    },
    {
                "id": "f40q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gitti ve Geldi\"",
                "options": [
                          "et",
                          "Est allé",
                          "A fait",
                          "Est venu",
                          "A bu"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Est allé",
                          "et",
                          "Est venu"
                ],
                "audioText": "Est allé et Est venu",
                "audioLang": "fr-FR"
    },
    {
                "id": "f40q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yedi görüyorum\"",
                "options": [
                          "A fait",
                          "A mangé",
                          "Est allé",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "A mangé",
                          "vois"
                ],
                "audioText": "Je A mangé vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f40q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir İçti\"",
                "options": [
                          "Est venu",
                          "A bu",
                          "C'est",
                          "A dit"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "A bu"
                ],
                "audioText": "C'est A bu",
                "audioLang": "fr-FR"
    },
    {
      "id": "f40q2",
      "type": "flashcard",
      "prompt": "Geldi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Est venu",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃"
      ]
    },
    {
      "id": "f40q3",
      "type": "flashcard",
      "prompt": "Yedi",
      "options": [],
      "correctIndex": 0,
      "audioText": "A mangé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
      "id": "f40q4",
      "type": "flashcard",
      "prompt": "İçti",
      "options": [],
      "correctIndex": 0,
      "audioText": "A bu",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🥤"
      ]
    },
    {
      "id": "f40q5",
      "type": "flashcard",
      "prompt": "Yaptı",
      "options": [],
      "correctIndex": 0,
      "audioText": "A fait",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✅"
      ]
    },
    {
      "id": "f40q6",
      "type": "flashcard",
      "prompt": "Söyledi",
      "options": [],
      "correctIndex": 0,
      "audioText": "A dit",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💬"
      ]
    },
    {
      "id": "f40q7",
      "type": "multipleChoice",
      "prompt": "\"Est allé\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Geldi",
        "Yaptı",
        "Yedi",
        "Gitti"
      ],
      "correctIndex": 3,
      "audioText": "Est allé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f40q8",
      "type": "multipleChoice",
      "prompt": "\"Est venu\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "İçti",
        "Gitti",
        "Yedi",
        "Geldi"
      ],
      "correctIndex": 3,
      "audioText": "Est venu",
      "audioLang": "fr-FR"
    },
    {
      "id": "f40q9",
      "type": "multipleChoice",
      "prompt": "\"A mangé\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yedi",
        "İçti",
        "Geldi",
        "Yaptı"
      ],
      "correctIndex": 0,
      "audioText": "A mangé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f40q10",
      "type": "translate",
      "prompt": "\"İçti\" nasıl söylenir?",
      "options": [
        "A bu",
        "A dit",
        "A fait",
        "A mangé"
      ],
      "correctIndex": 0,
      "audioText": "A bu",
      "audioLang": "fr-FR"
    },
    {
      "id": "f40q11",
      "type": "translate",
      "prompt": "\"Yaptı\" nasıl söylenir?",
      "options": [
        "A fait",
        "A mangé",
        "A bu",
        "Est venu"
      ],
      "correctIndex": 0,
      "audioText": "A fait",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f41",
  "title": "Gelecek Zaman",
  "description": "Gelecek zaman kullanımı",
  "icon": "⏩",
  "xpReward": 20,
  "questions": [
    {
      "id": "f41q1",
      "type": "flashcard",
      "prompt": "Gidecek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ira",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶"
      ]
    },
    {
                "id": "f41q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gidecek ve Gelecek\"",
                "options": [
                          "Fera",
                          "Ira",
                          "Viendra",
                          "et",
                          "Écrira"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Ira",
                          "et",
                          "Viendra"
                ],
                "audioText": "Ira et Viendra",
                "audioLang": "fr-FR"
    },
    {
                "id": "f41q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yiyecek görüyorum\"",
                "options": [
                          "Mangera",
                          "Viendra",
                          "Écrira",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Mangera",
                          "vois"
                ],
                "audioText": "Je Mangera vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f41q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yapacak\"",
                "options": [
                          "Fera",
                          "C'est",
                          "Lira",
                          "Viendra"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Fera"
                ],
                "audioText": "C'est Fera",
                "audioLang": "fr-FR"
    },
    {
      "id": "f41q2",
      "type": "flashcard",
      "prompt": "Gelecek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Viendra",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃"
      ]
    },
    {
      "id": "f41q3",
      "type": "flashcard",
      "prompt": "Yiyecek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mangera",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
      "id": "f41q4",
      "type": "flashcard",
      "prompt": "Yapacak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fera",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔧"
      ]
    },
    {
      "id": "f41q5",
      "type": "flashcard",
      "prompt": "Yazacak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Écrira",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✍️"
      ]
    },
    {
      "id": "f41q6",
      "type": "flashcard",
      "prompt": "Okuyacak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lira",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
      "id": "f41q7",
      "type": "multipleChoice",
      "prompt": "\"Ira\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gelecek",
        "Gidecek",
        "Yazacak",
        "Yiyecek"
      ],
      "correctIndex": 1,
      "audioText": "Ira",
      "audioLang": "fr-FR"
    },
    {
      "id": "f41q8",
      "type": "multipleChoice",
      "prompt": "\"Viendra\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yapacak",
        "Gelecek",
        "Gidecek",
        "Yiyecek"
      ],
      "correctIndex": 1,
      "audioText": "Viendra",
      "audioLang": "fr-FR"
    },
    {
      "id": "f41q9",
      "type": "multipleChoice",
      "prompt": "\"Mangera\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yiyecek",
        "Okuyacak",
        "Gidecek",
        "Yazacak"
      ],
      "correctIndex": 0,
      "audioText": "Mangera",
      "audioLang": "fr-FR"
    },
    {
      "id": "f41q10",
      "type": "translate",
      "prompt": "\"Yapacak\" nasıl söylenir?",
      "options": [
        "Fera",
        "Lira",
        "Écrira",
        "Viendra"
      ],
      "correctIndex": 0,
      "audioText": "Fera",
      "audioLang": "fr-FR"
    },
    {
      "id": "f41q11",
      "type": "translate",
      "prompt": "\"Yazacak\" nasıl söylenir?",
      "options": [
        "Viendra",
        "Ira",
        "Lira",
        "Écrira"
      ],
      "correctIndex": 3,
      "audioText": "Écrira",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f42",
  "title": "Emir Kipleri",
  "description": "Emir cümleleri",
  "icon": "❗",
  "xpReward": 20,
  "questions": [
    {
      "id": "f42q1",
      "type": "flashcard",
      "prompt": "Git!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Va!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚶"
      ]
    },
    {
                "id": "f42q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Git! ve Gel!\"",
                "options": [
                          "Va!",
                          "et",
                          "Viens!",
                          "Mange!",
                          "Assieds-toi!"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Va!",
                          "et",
                          "Viens!"
                ],
                "audioText": "Va! et Viens!",
                "audioLang": "fr-FR"
    },
    {
                "id": "f42q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ye! görüyorum\"",
                "options": [
                          "Je",
                          "Arrête!",
                          "vois",
                          "Mange!",
                          "Viens!"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Mange!",
                          "vois"
                ],
                "audioText": "Je Mange! vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f42q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Otur!\"",
                "options": [
                          "Viens!",
                          "C'est",
                          "Parle!",
                          "Assieds-toi!"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Assieds-toi!"
                ],
                "audioText": "C'est Assieds-toi!",
                "audioLang": "fr-FR"
    },
    {
      "id": "f42q2",
      "type": "flashcard",
      "prompt": "Gel!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Viens!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃"
      ]
    },
    {
      "id": "f42q3",
      "type": "flashcard",
      "prompt": "Ye!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mange!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍽️"
      ]
    },
    {
      "id": "f42q4",
      "type": "flashcard",
      "prompt": "Otur!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Assieds-toi!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🪑"
      ]
    },
    {
      "id": "f42q5",
      "type": "flashcard",
      "prompt": "Dur!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Arrête!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛑"
      ]
    },
    {
      "id": "f42q6",
      "type": "flashcard",
      "prompt": "Konuş!",
      "options": [],
      "correctIndex": 0,
      "audioText": "Parle!",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗣️"
      ]
    },
    {
      "id": "f42q7",
      "type": "multipleChoice",
      "prompt": "\"Va!\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gel!",
        "Git!",
        "Konuş!",
        "Ye!"
      ],
      "correctIndex": 1,
      "audioText": "Va!",
      "audioLang": "fr-FR"
    },
    {
      "id": "f42q8",
      "type": "multipleChoice",
      "prompt": "\"Viens!\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Git!",
        "Gel!",
        "Konuş!",
        "Dur!"
      ],
      "correctIndex": 1,
      "audioText": "Viens!",
      "audioLang": "fr-FR"
    },
    {
      "id": "f42q9",
      "type": "multipleChoice",
      "prompt": "\"Mange!\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Konuş!",
        "Ye!",
        "Gel!",
        "Git!"
      ],
      "correctIndex": 1,
      "audioText": "Mange!",
      "audioLang": "fr-FR"
    },
    {
      "id": "f42q10",
      "type": "translate",
      "prompt": "\"Otur!\" nasıl söylenir?",
      "options": [
        "Assieds-toi!",
        "Parle!",
        "Arrête!",
        "Mange!"
      ],
      "correctIndex": 0,
      "audioText": "Assieds-toi!",
      "audioLang": "fr-FR"
    },
    {
      "id": "f42q11",
      "type": "translate",
      "prompt": "\"Dur!\" nasıl söylenir?",
      "options": [
        "Arrête!",
        "Assieds-toi!",
        "Mange!",
        "Viens!"
      ],
      "correctIndex": 0,
      "audioText": "Arrête!",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f43",
  "title": "Okul Eşyaları",
  "description": "Okul malzemeleri",
  "icon": "🎒",
  "xpReward": 20,
  "questions": [
    {
      "id": "f43q1",
      "type": "flashcard",
      "prompt": "Kitap",
      "options": [],
      "correctIndex": 0,
      "audioText": "Livre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📚"
      ]
    },
    {
                "id": "f43q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kitap ve Kalem\"",
                "options": [
                          "Règle",
                          "et",
                          "Stylo",
                          "Sac",
                          "Livre"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Livre",
                          "et",
                          "Stylo"
                ],
                "audioText": "Livre et Stylo",
                "audioLang": "fr-FR"
    },
    {
                "id": "f43q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Defter görüyorum\"",
                "options": [
                          "Stylo",
                          "Livre",
                          "Je",
                          "Cahier",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Cahier",
                          "vois"
                ],
                "audioText": "Je Cahier vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f43q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Cetvel\"",
                "options": [
                          "Règle",
                          "Livre",
                          "C'est",
                          "Stylo"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Règle"
                ],
                "audioText": "C'est Règle",
                "audioLang": "fr-FR"
    },
    {
      "id": "f43q2",
      "type": "flashcard",
      "prompt": "Kalem",
      "options": [],
      "correctIndex": 0,
      "audioText": "Stylo",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✏️"
      ]
    },
    {
      "id": "f43q3",
      "type": "flashcard",
      "prompt": "Defter",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cahier",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📓"
      ]
    },
    {
      "id": "f43q4",
      "type": "flashcard",
      "prompt": "Cetvel",
      "options": [],
      "correctIndex": 0,
      "audioText": "Règle",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📏"
      ]
    },
    {
      "id": "f43q5",
      "type": "flashcard",
      "prompt": "Çanta",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sac",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎒"
      ]
    },
    {
      "id": "f43q6",
      "type": "flashcard",
      "prompt": "Silgi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Gomme",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🩹"
      ]
    },
    {
      "id": "f43q7",
      "type": "multipleChoice",
      "prompt": "\"Livre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kitap",
        "Kalem",
        "Çanta",
        "Defter"
      ],
      "correctIndex": 0,
      "audioText": "Livre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f43q8",
      "type": "multipleChoice",
      "prompt": "\"Stylo\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Cetvel",
        "Kalem",
        "Kitap",
        "Defter"
      ],
      "correctIndex": 1,
      "audioText": "Stylo",
      "audioLang": "fr-FR"
    },
    {
      "id": "f43q9",
      "type": "multipleChoice",
      "prompt": "\"Cahier\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kalem",
        "Silgi",
        "Çanta",
        "Defter"
      ],
      "correctIndex": 3,
      "audioText": "Cahier",
      "audioLang": "fr-FR"
    },
    {
      "id": "f43q10",
      "type": "translate",
      "prompt": "\"Cetvel\" nasıl söylenir?",
      "options": [
        "Stylo",
        "Gomme",
        "Livre",
        "Règle"
      ],
      "correctIndex": 3,
      "audioText": "Règle",
      "audioLang": "fr-FR"
    },
    {
      "id": "f43q11",
      "type": "translate",
      "prompt": "\"Çanta\" nasıl söylenir?",
      "options": [
        "Sac",
        "Gomme",
        "Cahier",
        "Règle"
      ],
      "correctIndex": 0,
      "audioText": "Sac",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f44",
  "title": "Dersler",
  "description": "Okul dersleri",
  "icon": "📚",
  "xpReward": 20,
  "questions": [
    {
      "id": "f44q1",
      "type": "flashcard",
      "prompt": "Matematik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mathématiques",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔢"
      ]
    },
    {
                "id": "f44q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Matematik ve Fen\"",
                "options": [
                          "et",
                          "Mathématiques",
                          "Histoire",
                          "Musique",
                          "Sciences"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Mathématiques",
                          "et",
                          "Sciences"
                ],
                "audioText": "Mathématiques et Sciences",
                "audioLang": "fr-FR"
    },
    {
                "id": "f44q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tarih görüyorum\"",
                "options": [
                          "Musique",
                          "Histoire",
                          "vois",
                          "Je",
                          "Mathématiques"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Histoire",
                          "vois"
                ],
                "audioText": "Je Histoire vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f44q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Coğrafya\"",
                "options": [
                          "Mathématiques",
                          "C'est",
                          "Sciences",
                          "Géographie"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Géographie"
                ],
                "audioText": "C'est Géographie",
                "audioLang": "fr-FR"
    },
    {
      "id": "f44q2",
      "type": "flashcard",
      "prompt": "Fen",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sciences",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔬"
      ]
    },
    {
      "id": "f44q3",
      "type": "flashcard",
      "prompt": "Tarih",
      "options": [],
      "correctIndex": 0,
      "audioText": "Histoire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📜"
      ]
    },
    {
      "id": "f44q4",
      "type": "flashcard",
      "prompt": "Coğrafya",
      "options": [],
      "correctIndex": 0,
      "audioText": "Géographie",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌍"
      ]
    },
    {
      "id": "f44q5",
      "type": "flashcard",
      "prompt": "Müzik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Musique",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎵"
      ]
    },
    {
      "id": "f44q6",
      "type": "flashcard",
      "prompt": "Sanat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Art",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎨"
      ]
    },
    {
      "id": "f44q7",
      "type": "multipleChoice",
      "prompt": "\"Mathématiques\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Fen",
        "Coğrafya",
        "Tarih",
        "Matematik"
      ],
      "correctIndex": 3,
      "audioText": "Mathématiques",
      "audioLang": "fr-FR"
    },
    {
      "id": "f44q8",
      "type": "multipleChoice",
      "prompt": "\"Sciences\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Tarih",
        "Fen",
        "Coğrafya",
        "Müzik"
      ],
      "correctIndex": 1,
      "audioText": "Sciences",
      "audioLang": "fr-FR"
    },
    {
      "id": "f44q9",
      "type": "multipleChoice",
      "prompt": "\"Histoire\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Tarih",
        "Sanat",
        "Coğrafya",
        "Müzik"
      ],
      "correctIndex": 0,
      "audioText": "Histoire",
      "audioLang": "fr-FR"
    },
    {
      "id": "f44q10",
      "type": "translate",
      "prompt": "\"Coğrafya\" nasıl söylenir?",
      "options": [
        "Géographie",
        "Mathématiques",
        "Sciences",
        "Histoire"
      ],
      "correctIndex": 0,
      "audioText": "Géographie",
      "audioLang": "fr-FR"
    },
    {
      "id": "f44q11",
      "type": "translate",
      "prompt": "\"Müzik\" nasıl söylenir?",
      "options": [
        "Histoire",
        "Musique",
        "Art",
        "Géographie"
      ],
      "correctIndex": 1,
      "audioText": "Musique",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f45",
  "title": "Sınıfta",
  "description": "Sınıf aktiviteleri",
  "icon": "👩‍🎓",
  "xpReward": 20,
  "questions": [
    {
      "id": "f45q1",
      "type": "flashcard",
      "prompt": "Tahta",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tableau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📋"
      ]
    },
    {
                "id": "f45q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Tahta ve El kaldırmak\"",
                "options": [
                          "Tableau",
                          "Comprendre",
                          "Répondre",
                          "Lever la main",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Tableau",
                          "et",
                          "Lever la main"
                ],
                "audioText": "Tableau et Lever la main",
                "audioLang": "fr-FR"
    },
    {
                "id": "f45q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Soru sormak görüyorum\"",
                "options": [
                          "Demander",
                          "Comprendre",
                          "vois",
                          "Lever la main",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Demander",
                          "vois"
                ],
                "audioText": "Je Demander vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f45q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Cevaplamak\"",
                "options": [
                          "Répondre",
                          "Lever la main",
                          "C'est",
                          "Tableau"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Répondre"
                ],
                "audioText": "C'est Répondre",
                "audioLang": "fr-FR"
    },
    {
      "id": "f45q2",
      "type": "flashcard",
      "prompt": "El kaldırmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lever la main",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✋"
      ]
    },
    {
      "id": "f45q3",
      "type": "flashcard",
      "prompt": "Soru sormak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Demander",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❓"
      ]
    },
    {
      "id": "f45q4",
      "type": "flashcard",
      "prompt": "Cevaplamak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Répondre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💬"
      ]
    },
    {
      "id": "f45q5",
      "type": "flashcard",
      "prompt": "Anlamak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Comprendre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💡"
      ]
    },
    {
      "id": "f45q6",
      "type": "flashcard",
      "prompt": "Tekrar etmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Répéter",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔄"
      ]
    },
    {
      "id": "f45q7",
      "type": "multipleChoice",
      "prompt": "\"Tableau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Anlamak",
        "Tekrar etmek",
        "El kaldırmak",
        "Tahta"
      ],
      "correctIndex": 3,
      "audioText": "Tableau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f45q8",
      "type": "multipleChoice",
      "prompt": "\"Lever la main\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Tahta",
        "Soru sormak",
        "Tekrar etmek",
        "El kaldırmak"
      ],
      "correctIndex": 3,
      "audioText": "Lever la main",
      "audioLang": "fr-FR"
    },
    {
      "id": "f45q9",
      "type": "multipleChoice",
      "prompt": "\"Demander\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Cevaplamak",
        "Anlamak",
        "El kaldırmak",
        "Soru sormak"
      ],
      "correctIndex": 3,
      "audioText": "Demander",
      "audioLang": "fr-FR"
    },
    {
      "id": "f45q10",
      "type": "translate",
      "prompt": "\"Cevaplamak\" nasıl söylenir?",
      "options": [
        "Répondre",
        "Répéter",
        "Comprendre",
        "Demander"
      ],
      "correctIndex": 0,
      "audioText": "Répondre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f45q11",
      "type": "translate",
      "prompt": "\"Anlamak\" nasıl söylenir?",
      "options": [
        "Répondre",
        "Comprendre",
        "Demander",
        "Répéter"
      ],
      "correctIndex": 1,
      "audioText": "Comprendre",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f46",
  "title": "Tatil Yerleri",
  "description": "Tatil mekanları",
  "icon": "🏖️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f46q1",
      "type": "flashcard",
      "prompt": "Plaj",
      "options": [],
      "correctIndex": 0,
      "audioText": "Plage",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏖️"
      ]
    },
    {
                "id": "f46q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Plaj ve Dağ\"",
                "options": [
                          "Plage",
                          "Montagne",
                          "Cascade",
                          "Ville",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Plage",
                          "et",
                          "Montagne"
                ],
                "audioText": "Plage et Montagne",
                "audioLang": "fr-FR"
    },
    {
                "id": "f46q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şehir görüyorum\"",
                "options": [
                          "Plage",
                          "Montagne",
                          "vois",
                          "Ville",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Ville",
                          "vois"
                ],
                "audioText": "Je Ville vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f46q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ada\"",
                "options": [
                          "Île",
                          "C'est",
                          "Montagne",
                          "Plage"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Île"
                ],
                "audioText": "C'est Île",
                "audioLang": "fr-FR"
    },
    {
      "id": "f46q2",
      "type": "flashcard",
      "prompt": "Dağ",
      "options": [],
      "correctIndex": 0,
      "audioText": "Montagne",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⛰️"
      ]
    },
    {
      "id": "f46q3",
      "type": "flashcard",
      "prompt": "Şehir",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ville",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏙️"
      ]
    },
    {
      "id": "f46q4",
      "type": "flashcard",
      "prompt": "Ada",
      "options": [],
      "correctIndex": 0,
      "audioText": "Île",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏝️"
      ]
    },
    {
      "id": "f46q5",
      "type": "flashcard",
      "prompt": "Şelale",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cascade",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💧"
      ]
    },
    {
      "id": "f46q6",
      "type": "flashcard",
      "prompt": "Tatil",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vacances",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌴"
      ]
    },
    {
      "id": "f46q7",
      "type": "multipleChoice",
      "prompt": "\"Plage\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Plaj",
        "Ada",
        "Dağ",
        "Şehir"
      ],
      "correctIndex": 0,
      "audioText": "Plage",
      "audioLang": "fr-FR"
    },
    {
      "id": "f46q8",
      "type": "multipleChoice",
      "prompt": "\"Montagne\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şehir",
        "Şelale",
        "Tatil",
        "Dağ"
      ],
      "correctIndex": 3,
      "audioText": "Montagne",
      "audioLang": "fr-FR"
    },
    {
      "id": "f46q9",
      "type": "multipleChoice",
      "prompt": "\"Ville\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şehir",
        "Tatil",
        "Şelale",
        "Ada"
      ],
      "correctIndex": 0,
      "audioText": "Ville",
      "audioLang": "fr-FR"
    },
    {
      "id": "f46q10",
      "type": "translate",
      "prompt": "\"Ada\" nasıl söylenir?",
      "options": [
        "Île",
        "Ville",
        "Montagne",
        "Plage"
      ],
      "correctIndex": 0,
      "audioText": "Île",
      "audioLang": "fr-FR"
    },
    {
      "id": "f46q11",
      "type": "translate",
      "prompt": "\"Şelale\" nasıl söylenir?",
      "options": [
        "Vacances",
        "Cascade",
        "Île",
        "Plage"
      ],
      "correctIndex": 1,
      "audioText": "Cascade",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f47",
  "title": "Otelde",
  "description": "Otel kelimeleri",
  "icon": "🏨",
  "xpReward": 20,
  "questions": [
    {
      "id": "f47q1",
      "type": "flashcard",
      "prompt": "Oda",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chambre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛏️"
      ]
    },
    {
                "id": "f47q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Oda ve Resepsiyon\"",
                "options": [
                          "Réception",
                          "Chambre",
                          "et",
                          "Salle de bain",
                          "Clé"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Chambre",
                          "et",
                          "Réception"
                ],
                "audioText": "Chambre et Réception",
                "audioLang": "fr-FR"
    },
    {
                "id": "f47q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Anahtar görüyorum\"",
                "options": [
                          "Réservation",
                          "Clé",
                          "vois",
                          "Chambre",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Clé",
                          "vois"
                ],
                "audioText": "Je Clé vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f47q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Banyo\"",
                "options": [
                          "Chambre",
                          "Facture",
                          "Salle de bain",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Salle de bain"
                ],
                "audioText": "C'est Salle de bain",
                "audioLang": "fr-FR"
    },
    {
      "id": "f47q2",
      "type": "flashcard",
      "prompt": "Resepsiyon",
      "options": [],
      "correctIndex": 0,
      "audioText": "Réception",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏨"
      ]
    },
    {
      "id": "f47q3",
      "type": "flashcard",
      "prompt": "Anahtar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Clé",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔑"
      ]
    },
    {
      "id": "f47q4",
      "type": "flashcard",
      "prompt": "Banyo",
      "options": [],
      "correctIndex": 0,
      "audioText": "Salle de bain",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🚿"
      ]
    },
    {
      "id": "f47q5",
      "type": "flashcard",
      "prompt": "Rezervasyon",
      "options": [],
      "correctIndex": 0,
      "audioText": "Réservation",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📅"
      ]
    },
    {
      "id": "f47q6",
      "type": "flashcard",
      "prompt": "Hesap",
      "options": [],
      "correctIndex": 0,
      "audioText": "Facture",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧾"
      ]
    },
    {
      "id": "f47q7",
      "type": "multipleChoice",
      "prompt": "\"Chambre\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Anahtar",
        "Banyo",
        "Oda",
        "Hesap"
      ],
      "correctIndex": 2,
      "audioText": "Chambre",
      "audioLang": "fr-FR"
    },
    {
      "id": "f47q8",
      "type": "multipleChoice",
      "prompt": "\"Réception\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Oda",
        "Anahtar",
        "Resepsiyon",
        "Hesap"
      ],
      "correctIndex": 2,
      "audioText": "Réception",
      "audioLang": "fr-FR"
    },
    {
      "id": "f47q9",
      "type": "multipleChoice",
      "prompt": "\"Clé\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Hesap",
        "Banyo",
        "Rezervasyon",
        "Anahtar"
      ],
      "correctIndex": 3,
      "audioText": "Clé",
      "audioLang": "fr-FR"
    },
    {
      "id": "f47q10",
      "type": "translate",
      "prompt": "\"Banyo\" nasıl söylenir?",
      "options": [
        "Facture",
        "Salle de bain",
        "Chambre",
        "Réservation"
      ],
      "correctIndex": 1,
      "audioText": "Salle de bain",
      "audioLang": "fr-FR"
    },
    {
      "id": "f47q11",
      "type": "translate",
      "prompt": "\"Rezervasyon\" nasıl söylenir?",
      "options": [
        "Facture",
        "Réception",
        "Chambre",
        "Réservation"
      ],
      "correctIndex": 3,
      "audioText": "Réservation",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f48",
  "title": "Seyahat Planı",
  "description": "Seyahat hazırlıkları",
  "icon": "🧳",
  "xpReward": 20,
  "questions": [
    {
      "id": "f48q1",
      "type": "flashcard",
      "prompt": "Pasaport",
      "options": [],
      "correctIndex": 0,
      "audioText": "Passeport",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🛂"
      ]
    },
    {
                "id": "f48q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pasaport ve Vize\"",
                "options": [
                          "Passeport",
                          "et",
                          "Valise",
                          "Billet",
                          "Visa"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Passeport",
                          "et",
                          "Visa"
                ],
                "audioText": "Passeport et Visa",
                "audioLang": "fr-FR"
    },
    {
                "id": "f48q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Havalimanı görüyorum\"",
                "options": [
                          "Visa",
                          "vois",
                          "Je",
                          "Aéroport",
                          "Passeport"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Aéroport",
                          "vois"
                ],
                "audioText": "Je Aéroport vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f48q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Bavul\"",
                "options": [
                          "Visa",
                          "Valise",
                          "C'est",
                          "Tour"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Valise"
                ],
                "audioText": "C'est Valise",
                "audioLang": "fr-FR"
    },
    {
      "id": "f48q2",
      "type": "flashcard",
      "prompt": "Vize",
      "options": [],
      "correctIndex": 0,
      "audioText": "Visa",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📋"
      ]
    },
    {
      "id": "f48q3",
      "type": "flashcard",
      "prompt": "Havalimanı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Aéroport",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✈️"
      ]
    },
    {
      "id": "f48q4",
      "type": "flashcard",
      "prompt": "Bavul",
      "options": [],
      "correctIndex": 0,
      "audioText": "Valise",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧳"
      ]
    },
    {
      "id": "f48q5",
      "type": "flashcard",
      "prompt": "Bilet",
      "options": [],
      "correctIndex": 0,
      "audioText": "Billet",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎫"
      ]
    },
    {
      "id": "f48q6",
      "type": "flashcard",
      "prompt": "Tur",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tour",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗺️"
      ]
    },
    {
      "id": "f48q7",
      "type": "multipleChoice",
      "prompt": "\"Passeport\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Pasaport",
        "Tur",
        "Bilet",
        "Bavul"
      ],
      "correctIndex": 0,
      "audioText": "Passeport",
      "audioLang": "fr-FR"
    },
    {
      "id": "f48q8",
      "type": "multipleChoice",
      "prompt": "\"Visa\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bilet",
        "Havalimanı",
        "Pasaport",
        "Vize"
      ],
      "correctIndex": 3,
      "audioText": "Visa",
      "audioLang": "fr-FR"
    },
    {
      "id": "f48q9",
      "type": "multipleChoice",
      "prompt": "\"Aéroport\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Havalimanı",
        "Bilet",
        "Bavul",
        "Vize"
      ],
      "correctIndex": 0,
      "audioText": "Aéroport",
      "audioLang": "fr-FR"
    },
    {
      "id": "f48q10",
      "type": "translate",
      "prompt": "\"Bavul\" nasıl söylenir?",
      "options": [
        "Billet",
        "Visa",
        "Aéroport",
        "Valise"
      ],
      "correctIndex": 3,
      "audioText": "Valise",
      "audioLang": "fr-FR"
    },
    {
      "id": "f48q11",
      "type": "translate",
      "prompt": "\"Bilet\" nasıl söylenir?",
      "options": [
        "Passeport",
        "Tour",
        "Aéroport",
        "Billet"
      ],
      "correctIndex": 3,
      "audioText": "Billet",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f49",
  "title": "Spor",
  "description": "Spor aktiviteleri",
  "icon": "⚽",
  "xpReward": 20,
  "questions": [
    {
      "id": "f49q1",
      "type": "flashcard",
      "prompt": "Futbol",
      "options": [],
      "correctIndex": 0,
      "audioText": "Football",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚽"
      ]
    },
    {
                "id": "f49q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Futbol ve Tenis\"",
                "options": [
                          "Tennis",
                          "Course",
                          "et",
                          "Football",
                          "Natation"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Football",
                          "et",
                          "Tennis"
                ],
                "audioText": "Football et Tennis",
                "audioLang": "fr-FR"
    },
    {
                "id": "f49q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yüzme görüyorum\"",
                "options": [
                          "Basketball",
                          "Tennis",
                          "Je",
                          "vois",
                          "Natation"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Natation",
                          "vois"
                ],
                "audioText": "Je Natation vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f49q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Koşu\"",
                "options": [
                          "Football",
                          "C'est",
                          "Course",
                          "Tennis"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Course"
                ],
                "audioText": "C'est Course",
                "audioLang": "fr-FR"
    },
    {
      "id": "f49q2",
      "type": "flashcard",
      "prompt": "Tenis",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tennis",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎾"
      ]
    },
    {
      "id": "f49q3",
      "type": "flashcard",
      "prompt": "Yüzme",
      "options": [],
      "correctIndex": 0,
      "audioText": "Natation",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏊"
      ]
    },
    {
      "id": "f49q4",
      "type": "flashcard",
      "prompt": "Koşu",
      "options": [],
      "correctIndex": 0,
      "audioText": "Course",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏃"
      ]
    },
    {
      "id": "f49q5",
      "type": "flashcard",
      "prompt": "Basketbol",
      "options": [],
      "correctIndex": 0,
      "audioText": "Basketball",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏀"
      ]
    },
    {
      "id": "f49q6",
      "type": "flashcard",
      "prompt": "Voleybol",
      "options": [],
      "correctIndex": 0,
      "audioText": "Volleyball",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏐"
      ]
    },
    {
      "id": "f49q7",
      "type": "multipleChoice",
      "prompt": "\"Football\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Futbol",
        "Tenis",
        "Yüzme",
        "Koşu"
      ],
      "correctIndex": 0,
      "audioText": "Football",
      "audioLang": "fr-FR"
    },
    {
      "id": "f49q8",
      "type": "multipleChoice",
      "prompt": "\"Tennis\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yüzme",
        "Futbol",
        "Voleybol",
        "Tenis"
      ],
      "correctIndex": 3,
      "audioText": "Tennis",
      "audioLang": "fr-FR"
    },
    {
      "id": "f49q9",
      "type": "multipleChoice",
      "prompt": "\"Natation\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yüzme",
        "Basketbol",
        "Futbol",
        "Tenis"
      ],
      "correctIndex": 0,
      "audioText": "Natation",
      "audioLang": "fr-FR"
    },
    {
      "id": "f49q10",
      "type": "translate",
      "prompt": "\"Koşu\" nasıl söylenir?",
      "options": [
        "Natation",
        "Basketball",
        "Volleyball",
        "Course"
      ],
      "correctIndex": 3,
      "audioText": "Course",
      "audioLang": "fr-FR"
    },
    {
      "id": "f49q11",
      "type": "translate",
      "prompt": "\"Basketbol\" nasıl söylenir?",
      "options": [
        "Basketball",
        "Tennis",
        "Natation",
        "Course"
      ],
      "correctIndex": 0,
      "audioText": "Basketball",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f50",
  "title": "Müzik ve Sanat",
  "description": "Sanat ve müzik",
  "icon": "🎸",
  "xpReward": 20,
  "questions": [
    {
      "id": "f50q1",
      "type": "flashcard",
      "prompt": "Müzik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Musique",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎵"
      ]
    },
    {
                "id": "f50q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Müzik ve Şarkı\"",
                "options": [
                          "Chanson",
                          "Peinture",
                          "et",
                          "Danse",
                          "Musique"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Musique",
                          "et",
                          "Chanson"
                ],
                "audioText": "Musique et Chanson",
                "audioLang": "fr-FR"
    },
    {
                "id": "f50q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Enstrüman görüyorum\"",
                "options": [
                          "Je",
                          "vois",
                          "Musique",
                          "Danse",
                          "Instrument"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Instrument",
                          "vois"
                ],
                "audioText": "Je Instrument vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f50q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Resim\"",
                "options": [
                          "C'est",
                          "Musique",
                          "Théâtre",
                          "Peinture"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Peinture"
                ],
                "audioText": "C'est Peinture",
                "audioLang": "fr-FR"
    },
    {
      "id": "f50q2",
      "type": "flashcard",
      "prompt": "Şarkı",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chanson",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎤"
      ]
    },
    {
      "id": "f50q3",
      "type": "flashcard",
      "prompt": "Enstrüman",
      "options": [],
      "correctIndex": 0,
      "audioText": "Instrument",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎸"
      ]
    },
    {
      "id": "f50q4",
      "type": "flashcard",
      "prompt": "Resim",
      "options": [],
      "correctIndex": 0,
      "audioText": "Peinture",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎨"
      ]
    },
    {
      "id": "f50q5",
      "type": "flashcard",
      "prompt": "Dans",
      "options": [],
      "correctIndex": 0,
      "audioText": "Danse",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💃"
      ]
    },
    {
      "id": "f50q6",
      "type": "flashcard",
      "prompt": "Tiyatro",
      "options": [],
      "correctIndex": 0,
      "audioText": "Théâtre",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎭"
      ]
    },
    {
      "id": "f50q7",
      "type": "multipleChoice",
      "prompt": "\"Musique\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Resim",
        "Tiyatro",
        "Şarkı",
        "Müzik"
      ],
      "correctIndex": 3,
      "audioText": "Musique",
      "audioLang": "fr-FR"
    },
    {
      "id": "f50q8",
      "type": "multipleChoice",
      "prompt": "\"Chanson\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şarkı",
        "Dans",
        "Müzik",
        "Enstrüman"
      ],
      "correctIndex": 0,
      "audioText": "Chanson",
      "audioLang": "fr-FR"
    },
    {
      "id": "f50q9",
      "type": "multipleChoice",
      "prompt": "\"Instrument\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Şarkı",
        "Müzik",
        "Tiyatro",
        "Enstrüman"
      ],
      "correctIndex": 3,
      "audioText": "Instrument",
      "audioLang": "fr-FR"
    },
    {
      "id": "f50q10",
      "type": "translate",
      "prompt": "\"Resim\" nasıl söylenir?",
      "options": [
        "Théâtre",
        "Peinture",
        "Musique",
        "Instrument"
      ],
      "correctIndex": 1,
      "audioText": "Peinture",
      "audioLang": "fr-FR"
    },
    {
      "id": "f50q11",
      "type": "translate",
      "prompt": "\"Dans\" nasıl söylenir?",
      "options": [
        "Danse",
        "Chanson",
        "Peinture",
        "Instrument"
      ],
      "correctIndex": 0,
      "audioText": "Danse",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f51",
  "title": "Boş Zaman",
  "description": "Hobi ve eğlence",
  "icon": "🎮",
  "xpReward": 20,
  "questions": [
    {
      "id": "f51q1",
      "type": "flashcard",
      "prompt": "Okuma",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lecture",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
                "id": "f51q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Okuma ve Oyun\"",
                "options": [
                          "Jeu",
                          "Film",
                          "et",
                          "Voyage",
                          "Lecture"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Lecture",
                          "et",
                          "Jeu"
                ],
                "audioText": "Lecture et Jeu",
                "audioLang": "fr-FR"
    },
    {
                "id": "f51q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Film görüyorum\"",
                "options": [
                          "Je",
                          "Film",
                          "vois",
                          "Lecture",
                          "Jeu"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Film",
                          "vois"
                ],
                "audioText": "Je Film vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f51q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Seyahat\"",
                "options": [
                          "Jardinage",
                          "Lecture",
                          "Voyage",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Voyage"
                ],
                "audioText": "C'est Voyage",
                "audioLang": "fr-FR"
    },
    {
      "id": "f51q2",
      "type": "flashcard",
      "prompt": "Oyun",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jeu",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎮"
      ]
    },
    {
      "id": "f51q3",
      "type": "flashcard",
      "prompt": "Film",
      "options": [],
      "correctIndex": 0,
      "audioText": "Film",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎬"
      ]
    },
    {
      "id": "f51q4",
      "type": "flashcard",
      "prompt": "Seyahat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Voyage",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✈️"
      ]
    },
    {
      "id": "f51q5",
      "type": "flashcard",
      "prompt": "Yemek yapmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cuisine",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍳"
      ]
    },
    {
      "id": "f51q6",
      "type": "flashcard",
      "prompt": "Bahçecilik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Jardinage",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌱"
      ]
    },
    {
      "id": "f51q7",
      "type": "multipleChoice",
      "prompt": "\"Lecture\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bahçecilik",
        "Okuma",
        "Seyahat",
        "Yemek yapmak"
      ],
      "correctIndex": 1,
      "audioText": "Lecture",
      "audioLang": "fr-FR"
    },
    {
      "id": "f51q8",
      "type": "multipleChoice",
      "prompt": "\"Jeu\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yemek yapmak",
        "Oyun",
        "Film",
        "Seyahat"
      ],
      "correctIndex": 1,
      "audioText": "Jeu",
      "audioLang": "fr-FR"
    },
    {
      "id": "f51q9",
      "type": "multipleChoice",
      "prompt": "\"Film\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yemek yapmak",
        "Oyun",
        "Bahçecilik",
        "Film"
      ],
      "correctIndex": 3,
      "audioText": "Film",
      "audioLang": "fr-FR"
    },
    {
      "id": "f51q10",
      "type": "translate",
      "prompt": "\"Seyahat\" nasıl söylenir?",
      "options": [
        "Voyage",
        "Cuisine",
        "Jeu",
        "Lecture"
      ],
      "correctIndex": 0,
      "audioText": "Voyage",
      "audioLang": "fr-FR"
    },
    {
      "id": "f51q11",
      "type": "translate",
      "prompt": "\"Yemek yapmak\" nasıl söylenir?",
      "options": [
        "Jeu",
        "Film",
        "Voyage",
        "Cuisine"
      ],
      "correctIndex": 3,
      "audioText": "Cuisine",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f52",
  "title": "Mevsimler",
  "description": "Yılın mevsimleri",
  "icon": "🍂",
  "xpReward": 20,
  "questions": [
    {
      "id": "f52q1",
      "type": "flashcard",
      "prompt": "İlkbahar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Printemps",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌸"
      ]
    },
    {
                "id": "f52q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"İlkbahar ve Yaz\"",
                "options": [
                          "Printemps",
                          "et",
                          "Automne",
                          "Hiver",
                          "Été"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Printemps",
                          "et",
                          "Été"
                ],
                "audioText": "Printemps et Été",
                "audioLang": "fr-FR"
    },
    {
                "id": "f52q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Sonbahar görüyorum\"",
                "options": [
                          "Automne",
                          "vois",
                          "Je",
                          "Printemps",
                          "Été"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Automne",
                          "vois"
                ],
                "audioText": "Je Automne vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f52q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kış\"",
                "options": [
                          "C'est",
                          "Hiver",
                          "Printemps",
                          "Froid"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Hiver"
                ],
                "audioText": "C'est Hiver",
                "audioLang": "fr-FR"
    },
    {
      "id": "f52q2",
      "type": "flashcard",
      "prompt": "Yaz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Été",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☀️"
      ]
    },
    {
      "id": "f52q3",
      "type": "flashcard",
      "prompt": "Sonbahar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Automne",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🍂"
      ]
    },
    {
      "id": "f52q4",
      "type": "flashcard",
      "prompt": "Kış",
      "options": [],
      "correctIndex": 0,
      "audioText": "Hiver",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❄️"
      ]
    },
    {
      "id": "f52q5",
      "type": "flashcard",
      "prompt": "Sıcak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Chaud",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌡️"
      ]
    },
    {
      "id": "f52q6",
      "type": "flashcard",
      "prompt": "Soğuk",
      "options": [],
      "correctIndex": 0,
      "audioText": "Froid",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧊"
      ]
    },
    {
      "id": "f52q7",
      "type": "multipleChoice",
      "prompt": "\"Printemps\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "İlkbahar",
        "Soğuk",
        "Yaz",
        "Kış"
      ],
      "correctIndex": 0,
      "audioText": "Printemps",
      "audioLang": "fr-FR"
    },
    {
      "id": "f52q8",
      "type": "multipleChoice",
      "prompt": "\"Été\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kış",
        "İlkbahar",
        "Sonbahar",
        "Yaz"
      ],
      "correctIndex": 3,
      "audioText": "Été",
      "audioLang": "fr-FR"
    },
    {
      "id": "f52q9",
      "type": "multipleChoice",
      "prompt": "\"Automne\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Sonbahar",
        "İlkbahar",
        "Yaz",
        "Kış"
      ],
      "correctIndex": 0,
      "audioText": "Automne",
      "audioLang": "fr-FR"
    },
    {
      "id": "f52q10",
      "type": "translate",
      "prompt": "\"Kış\" nasıl söylenir?",
      "options": [
        "Automne",
        "Été",
        "Hiver",
        "Chaud"
      ],
      "correctIndex": 2,
      "audioText": "Hiver",
      "audioLang": "fr-FR"
    },
    {
      "id": "f52q11",
      "type": "translate",
      "prompt": "\"Sıcak\" nasıl söylenir?",
      "options": [
        "Printemps",
        "Chaud",
        "Été",
        "Automne"
      ],
      "correctIndex": 1,
      "audioText": "Chaud",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f53",
  "title": "Hava Durumu",
  "description": "Hava koşulları",
  "icon": "🌦️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f53q1",
      "type": "flashcard",
      "prompt": "Yağmur",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pluie",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌧️"
      ]
    },
    {
                "id": "f53q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yağmur ve Kar\"",
                "options": [
                          "Soleil",
                          "et",
                          "Pluie",
                          "Vent",
                          "Neige"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Pluie",
                          "et",
                          "Neige"
                ],
                "audioText": "Pluie et Neige",
                "audioLang": "fr-FR"
    },
    {
                "id": "f53q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Güneş görüyorum\"",
                "options": [
                          "vois",
                          "Soleil",
                          "Je",
                          "Nuage",
                          "Neige"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Soleil",
                          "vois"
                ],
                "audioText": "Je Soleil vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f53q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Rüzgar\"",
                "options": [
                          "Tempête",
                          "Vent",
                          "Neige",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Vent"
                ],
                "audioText": "C'est Vent",
                "audioLang": "fr-FR"
    },
    {
      "id": "f53q2",
      "type": "flashcard",
      "prompt": "Kar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Neige",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❄️"
      ]
    },
    {
      "id": "f53q3",
      "type": "flashcard",
      "prompt": "Güneş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Soleil",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☀️"
      ]
    },
    {
      "id": "f53q4",
      "type": "flashcard",
      "prompt": "Rüzgar",
      "options": [],
      "correctIndex": 0,
      "audioText": "Vent",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💨"
      ]
    },
    {
      "id": "f53q5",
      "type": "flashcard",
      "prompt": "Bulut",
      "options": [],
      "correctIndex": 0,
      "audioText": "Nuage",
      "audioLang": "fr-FR",
      "imageOptions": [
        "☁️"
      ]
    },
    {
      "id": "f53q6",
      "type": "flashcard",
      "prompt": "Fırtına",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tempête",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⛈️"
      ]
    },
    {
      "id": "f53q7",
      "type": "multipleChoice",
      "prompt": "\"Pluie\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Güneş",
        "Bulut",
        "Yağmur",
        "Rüzgar"
      ],
      "correctIndex": 2,
      "audioText": "Pluie",
      "audioLang": "fr-FR"
    },
    {
      "id": "f53q8",
      "type": "multipleChoice",
      "prompt": "\"Neige\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Güneş",
        "Rüzgar",
        "Fırtına",
        "Kar"
      ],
      "correctIndex": 3,
      "audioText": "Neige",
      "audioLang": "fr-FR"
    },
    {
      "id": "f53q9",
      "type": "multipleChoice",
      "prompt": "\"Soleil\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yağmur",
        "Bulut",
        "Güneş",
        "Fırtına"
      ],
      "correctIndex": 2,
      "audioText": "Soleil",
      "audioLang": "fr-FR"
    },
    {
      "id": "f53q10",
      "type": "translate",
      "prompt": "\"Rüzgar\" nasıl söylenir?",
      "options": [
        "Vent",
        "Nuage",
        "Pluie",
        "Neige"
      ],
      "correctIndex": 0,
      "audioText": "Vent",
      "audioLang": "fr-FR"
    },
    {
      "id": "f53q11",
      "type": "translate",
      "prompt": "\"Bulut\" nasıl söylenir?",
      "options": [
        "Vent",
        "Nuage",
        "Neige",
        "Tempête"
      ],
      "correctIndex": 1,
      "audioText": "Nuage",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f54",
  "title": "Coğrafya",
  "description": "Coğrafi kavramlar",
  "icon": "🌍",
  "xpReward": 20,
  "questions": [
    {
      "id": "f54q1",
      "type": "flashcard",
      "prompt": "Kıta",
      "options": [],
      "correctIndex": 0,
      "audioText": "Continent",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌍"
      ]
    },
    {
                "id": "f54q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kıta ve Ülke\"",
                "options": [
                          "Pays",
                          "et",
                          "Continent",
                          "Lac",
                          "Rivière"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Continent",
                          "et",
                          "Pays"
                ],
                "audioText": "Continent et Pays",
                "audioLang": "fr-FR"
    },
    {
                "id": "f54q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Nehir görüyorum\"",
                "options": [
                          "vois",
                          "Je",
                          "Rivière",
                          "Pays",
                          "Continent"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Rivière",
                          "vois"
                ],
                "audioText": "Je Rivière vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f54q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Göl\"",
                "options": [
                          "C'est",
                          "Pays",
                          "Désert",
                          "Lac"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Lac"
                ],
                "audioText": "C'est Lac",
                "audioLang": "fr-FR"
    },
    {
      "id": "f54q2",
      "type": "flashcard",
      "prompt": "Ülke",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pays",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏳️"
      ]
    },
    {
      "id": "f54q3",
      "type": "flashcard",
      "prompt": "Nehir",
      "options": [],
      "correctIndex": 0,
      "audioText": "Rivière",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏞️"
      ]
    },
    {
      "id": "f54q4",
      "type": "flashcard",
      "prompt": "Göl",
      "options": [],
      "correctIndex": 0,
      "audioText": "Lac",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏞️"
      ]
    },
    {
      "id": "f54q5",
      "type": "flashcard",
      "prompt": "Okyanus",
      "options": [],
      "correctIndex": 0,
      "audioText": "Océan",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌊"
      ]
    },
    {
      "id": "f54q6",
      "type": "flashcard",
      "prompt": "Çöl",
      "options": [],
      "correctIndex": 0,
      "audioText": "Désert",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏜️"
      ]
    },
    {
      "id": "f54q7",
      "type": "multipleChoice",
      "prompt": "\"Continent\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kıta",
        "Ülke",
        "Çöl",
        "Nehir"
      ],
      "correctIndex": 0,
      "audioText": "Continent",
      "audioLang": "fr-FR"
    },
    {
      "id": "f54q8",
      "type": "multipleChoice",
      "prompt": "\"Pays\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ülke",
        "Okyanus",
        "Göl",
        "Çöl"
      ],
      "correctIndex": 0,
      "audioText": "Pays",
      "audioLang": "fr-FR"
    },
    {
      "id": "f54q9",
      "type": "multipleChoice",
      "prompt": "\"Rivière\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Nehir",
        "Göl",
        "Kıta",
        "Ülke"
      ],
      "correctIndex": 0,
      "audioText": "Rivière",
      "audioLang": "fr-FR"
    },
    {
      "id": "f54q10",
      "type": "translate",
      "prompt": "\"Göl\" nasıl söylenir?",
      "options": [
        "Rivière",
        "Pays",
        "Océan",
        "Lac"
      ],
      "correctIndex": 3,
      "audioText": "Lac",
      "audioLang": "fr-FR"
    },
    {
      "id": "f54q11",
      "type": "translate",
      "prompt": "\"Okyanus\" nasıl söylenir?",
      "options": [
        "Océan",
        "Lac",
        "Continent",
        "Pays"
      ],
      "correctIndex": 0,
      "audioText": "Océan",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f55",
  "title": "Arkadaşlık",
  "description": "Dostluk ifadeleri",
  "icon": "🤝",
  "xpReward": 20,
  "questions": [
    {
      "id": "f55q1",
      "type": "flashcard",
      "prompt": "Arkadaş",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ami",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤝"
      ]
    },
    {
                "id": "f55q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Arkadaş ve Tanışmak\"",
                "options": [
                          "et",
                          "Ami",
                          "Rencontrer",
                          "Aimer",
                          "Aider"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Ami",
                          "et",
                          "Rencontrer"
                ],
                "audioText": "Ami et Rencontrer",
                "audioLang": "fr-FR"
    },
    {
                "id": "f55q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Arkadaşlık görüyorum\"",
                "options": [
                          "vois",
                          "Amitié",
                          "Rencontrer",
                          "Je",
                          "Ami"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Amitié",
                          "vois"
                ],
                "audioText": "Je Amitié vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f55q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sevmek\"",
                "options": [
                          "C'est",
                          "Rencontrer",
                          "Ami",
                          "Aimer"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Aimer"
                ],
                "audioText": "C'est Aimer",
                "audioLang": "fr-FR"
    },
    {
      "id": "f55q2",
      "type": "flashcard",
      "prompt": "Tanışmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Rencontrer",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👋"
      ]
    },
    {
      "id": "f55q3",
      "type": "flashcard",
      "prompt": "Arkadaşlık",
      "options": [],
      "correctIndex": 0,
      "audioText": "Amitié",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💛"
      ]
    },
    {
      "id": "f55q4",
      "type": "flashcard",
      "prompt": "Sevmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Aimer",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❤️"
      ]
    },
    {
      "id": "f55q5",
      "type": "flashcard",
      "prompt": "Yardım etmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Aider",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🆘"
      ]
    },
    {
      "id": "f55q6",
      "type": "flashcard",
      "prompt": "Paylaşmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Partager",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤲"
      ]
    },
    {
      "id": "f55q7",
      "type": "multipleChoice",
      "prompt": "\"Ami\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Arkadaş",
        "Tanışmak",
        "Arkadaşlık",
        "Sevmek"
      ],
      "correctIndex": 0,
      "audioText": "Ami",
      "audioLang": "fr-FR"
    },
    {
      "id": "f55q8",
      "type": "multipleChoice",
      "prompt": "\"Rencontrer\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Arkadaş",
        "Arkadaşlık",
        "Tanışmak",
        "Yardım etmek"
      ],
      "correctIndex": 2,
      "audioText": "Rencontrer",
      "audioLang": "fr-FR"
    },
    {
      "id": "f55q9",
      "type": "multipleChoice",
      "prompt": "\"Amitié\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Arkadaş",
        "Tanışmak",
        "Paylaşmak",
        "Arkadaşlık"
      ],
      "correctIndex": 3,
      "audioText": "Amitié",
      "audioLang": "fr-FR"
    },
    {
      "id": "f55q10",
      "type": "translate",
      "prompt": "\"Sevmek\" nasıl söylenir?",
      "options": [
        "Amitié",
        "Rencontrer",
        "Ami",
        "Aimer"
      ],
      "correctIndex": 3,
      "audioText": "Aimer",
      "audioLang": "fr-FR"
    },
    {
      "id": "f55q11",
      "type": "translate",
      "prompt": "\"Yardım etmek\" nasıl söylenir?",
      "options": [
        "Partager",
        "Aider",
        "Rencontrer",
        "Aimer"
      ],
      "correctIndex": 1,
      "audioText": "Aider",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f56",
  "title": "Davetler",
  "description": "Davet ve etkinlik",
  "icon": "💌",
  "xpReward": 20,
  "questions": [
    {
      "id": "f56q1",
      "type": "flashcard",
      "prompt": "Davet",
      "options": [],
      "correctIndex": 0,
      "audioText": "Invitation",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💌"
      ]
    },
    {
                "id": "f56q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Davet ve Parti\"",
                "options": [
                          "Cadeau",
                          "Invitation",
                          "et",
                          "Fête",
                          "Mariage"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Invitation",
                          "et",
                          "Fête"
                ],
                "audioText": "Invitation et Fête",
                "audioLang": "fr-FR"
    },
    {
                "id": "f56q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Hediye görüyorum\"",
                "options": [
                          "Invitation",
                          "Cadeau",
                          "Accepter",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Cadeau",
                          "vois"
                ],
                "audioText": "Je Cadeau vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f56q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Düğün\"",
                "options": [
                          "Invitation",
                          "C'est",
                          "Refuser",
                          "Mariage"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Mariage"
                ],
                "audioText": "C'est Mariage",
                "audioLang": "fr-FR"
    },
    {
      "id": "f56q2",
      "type": "flashcard",
      "prompt": "Parti",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fête",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎉"
      ]
    },
    {
      "id": "f56q3",
      "type": "flashcard",
      "prompt": "Hediye",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cadeau",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎁"
      ]
    },
    {
      "id": "f56q4",
      "type": "flashcard",
      "prompt": "Düğün",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mariage",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💍"
      ]
    },
    {
      "id": "f56q5",
      "type": "flashcard",
      "prompt": "Kabul etmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Accepter",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✅"
      ]
    },
    {
      "id": "f56q6",
      "type": "flashcard",
      "prompt": "Reddetmek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Refuser",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❌"
      ]
    },
    {
      "id": "f56q7",
      "type": "multipleChoice",
      "prompt": "\"Invitation\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Davet",
        "Reddetmek",
        "Parti",
        "Kabul etmek"
      ],
      "correctIndex": 0,
      "audioText": "Invitation",
      "audioLang": "fr-FR"
    },
    {
      "id": "f56q8",
      "type": "multipleChoice",
      "prompt": "\"Fête\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Parti",
        "Kabul etmek",
        "Hediye",
        "Davet"
      ],
      "correctIndex": 0,
      "audioText": "Fête",
      "audioLang": "fr-FR"
    },
    {
      "id": "f56q9",
      "type": "multipleChoice",
      "prompt": "\"Cadeau\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Reddetmek",
        "Hediye",
        "Düğün",
        "Kabul etmek"
      ],
      "correctIndex": 1,
      "audioText": "Cadeau",
      "audioLang": "fr-FR"
    },
    {
      "id": "f56q10",
      "type": "translate",
      "prompt": "\"Düğün\" nasıl söylenir?",
      "options": [
        "Invitation",
        "Accepter",
        "Fête",
        "Mariage"
      ],
      "correctIndex": 3,
      "audioText": "Mariage",
      "audioLang": "fr-FR"
    },
    {
      "id": "f56q11",
      "type": "translate",
      "prompt": "\"Kabul etmek\" nasıl söylenir?",
      "options": [
        "Cadeau",
        "Mariage",
        "Accepter",
        "Fête"
      ],
      "correctIndex": 2,
      "audioText": "Accepter",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f57",
  "title": "Kutlamalar",
  "description": "Özel günler",
  "icon": "🎉",
  "xpReward": 20,
  "questions": [
    {
      "id": "f57q1",
      "type": "flashcard",
      "prompt": "Doğum günü",
      "options": [],
      "correctIndex": 0,
      "audioText": "Anniversaire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎂"
      ]
    },
    {
                "id": "f57q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Doğum günü ve Yeni yıl\"",
                "options": [
                          "Félicitations",
                          "Nouvel An",
                          "Sois heureux",
                          "et",
                          "Anniversaire"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Anniversaire",
                          "et",
                          "Nouvel An"
                ],
                "audioText": "Anniversaire et Nouvel An",
                "audioLang": "fr-FR"
    },
    {
                "id": "f57q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Bayram görüyorum\"",
                "options": [
                          "Je",
                          "Fête nationale",
                          "Nouvel An",
                          "Anniversaire",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Fête nationale",
                          "vois"
                ],
                "audioText": "Je Fête nationale vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f57q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Tebrikler\"",
                "options": [
                          "Félicitations",
                          "Amuse-toi",
                          "Anniversaire",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Félicitations"
                ],
                "audioText": "C'est Félicitations",
                "audioLang": "fr-FR"
    },
    {
      "id": "f57q2",
      "type": "flashcard",
      "prompt": "Yeni yıl",
      "options": [],
      "correctIndex": 0,
      "audioText": "Nouvel An",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎆"
      ]
    },
    {
      "id": "f57q3",
      "type": "flashcard",
      "prompt": "Bayram",
      "options": [],
      "correctIndex": 0,
      "audioText": "Fête nationale",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎊"
      ]
    },
    {
      "id": "f57q4",
      "type": "flashcard",
      "prompt": "Tebrikler",
      "options": [],
      "correctIndex": 0,
      "audioText": "Félicitations",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎊"
      ]
    },
    {
      "id": "f57q5",
      "type": "flashcard",
      "prompt": "Mutlu ol",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sois heureux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "😊"
      ]
    },
    {
      "id": "f57q6",
      "type": "flashcard",
      "prompt": "Eğlen",
      "options": [],
      "correctIndex": 0,
      "audioText": "Amuse-toi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎈"
      ]
    },
    {
      "id": "f57q7",
      "type": "multipleChoice",
      "prompt": "\"Anniversaire\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Doğum günü",
        "Bayram",
        "Yeni yıl",
        "Mutlu ol"
      ],
      "correctIndex": 0,
      "audioText": "Anniversaire",
      "audioLang": "fr-FR"
    },
    {
      "id": "f57q8",
      "type": "multipleChoice",
      "prompt": "\"Nouvel An\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yeni yıl",
        "Doğum günü",
        "Bayram",
        "Tebrikler"
      ],
      "correctIndex": 0,
      "audioText": "Nouvel An",
      "audioLang": "fr-FR"
    },
    {
      "id": "f57q9",
      "type": "multipleChoice",
      "prompt": "\"Fête nationale\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Mutlu ol",
        "Yeni yıl",
        "Tebrikler",
        "Bayram"
      ],
      "correctIndex": 3,
      "audioText": "Fête nationale",
      "audioLang": "fr-FR"
    },
    {
      "id": "f57q10",
      "type": "translate",
      "prompt": "\"Tebrikler\" nasıl söylenir?",
      "options": [
        "Amuse-toi",
        "Fête nationale",
        "Anniversaire",
        "Félicitations"
      ],
      "correctIndex": 3,
      "audioText": "Félicitations",
      "audioLang": "fr-FR"
    },
    {
      "id": "f57q11",
      "type": "translate",
      "prompt": "\"Mutlu ol\" nasıl söylenir?",
      "options": [
        "Sois heureux",
        "Anniversaire",
        "Nouvel An",
        "Amuse-toi"
      ],
      "correctIndex": 0,
      "audioText": "Sois heureux",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f58",
  "title": "Bağlaçlar",
  "description": "Bağlama kelimeleri",
  "icon": "🔗",
  "xpReward": 20,
  "questions": [
    {
      "id": "f58q1",
      "type": "flashcard",
      "prompt": "Ve",
      "options": [],
      "correctIndex": 0,
      "audioText": "Et",
      "audioLang": "fr-FR",
      "imageOptions": [
        "➕"
      ]
    },
    {
                "id": "f58q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ve ve Ama\"",
                "options": [
                          "et",
                          "Et",
                          "Mais",
                          "Ou",
                          "Parce que"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Et",
                          "et",
                          "Mais"
                ],
                "audioText": "Et et Mais",
                "audioLang": "fr-FR"
    },
    {
                "id": "f58q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Veya görüyorum\"",
                "options": [
                          "Si",
                          "vois",
                          "Ou",
                          "Je",
                          "Mais"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Ou",
                          "vois"
                ],
                "audioText": "Je Ou vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f58q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çünkü\"",
                "options": [
                          "Mais",
                          "Parce que",
                          "C'est",
                          "Cependant"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Parce que"
                ],
                "audioText": "C'est Parce que",
                "audioLang": "fr-FR"
    },
    {
      "id": "f58q2",
      "type": "flashcard",
      "prompt": "Ama",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mais",
      "audioLang": "fr-FR",
      "imageOptions": [
        "↔️"
      ]
    },
    {
      "id": "f58q3",
      "type": "flashcard",
      "prompt": "Veya",
      "options": [],
      "correctIndex": 0,
      "audioText": "Ou",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🔀"
      ]
    },
    {
      "id": "f58q4",
      "type": "flashcard",
      "prompt": "Çünkü",
      "options": [],
      "correctIndex": 0,
      "audioText": "Parce que",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💡"
      ]
    },
    {
      "id": "f58q5",
      "type": "flashcard",
      "prompt": "Eğer",
      "options": [],
      "correctIndex": 0,
      "audioText": "Si",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❓"
      ]
    },
    {
      "id": "f58q6",
      "type": "flashcard",
      "prompt": "Fakat",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cependant",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚠️"
      ]
    },
    {
      "id": "f58q7",
      "type": "multipleChoice",
      "prompt": "\"Et\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ve",
        "Ama",
        "Veya",
        "Çünkü"
      ],
      "correctIndex": 0,
      "audioText": "Et",
      "audioLang": "fr-FR"
    },
    {
      "id": "f58q8",
      "type": "multipleChoice",
      "prompt": "\"Mais\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Çünkü",
        "Veya",
        "Fakat",
        "Ama"
      ],
      "correctIndex": 3,
      "audioText": "Mais",
      "audioLang": "fr-FR"
    },
    {
      "id": "f58q9",
      "type": "multipleChoice",
      "prompt": "\"Ou\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Fakat",
        "Eğer",
        "Çünkü",
        "Veya"
      ],
      "correctIndex": 3,
      "audioText": "Ou",
      "audioLang": "fr-FR"
    },
    {
      "id": "f58q10",
      "type": "translate",
      "prompt": "\"Çünkü\" nasıl söylenir?",
      "options": [
        "Parce que",
        "Cependant",
        "Ou",
        "Et"
      ],
      "correctIndex": 0,
      "audioText": "Parce que",
      "audioLang": "fr-FR"
    },
    {
      "id": "f58q11",
      "type": "translate",
      "prompt": "\"Eğer\" nasıl söylenir?",
      "options": [
        "Parce que",
        "Et",
        "Mais",
        "Si"
      ],
      "correctIndex": 3,
      "audioText": "Si",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f59",
  "title": "Soru Kelimeleri",
  "description": "Soru sözcükleri",
  "icon": "❓",
  "xpReward": 20,
  "questions": [
    {
      "id": "f59q1",
      "type": "flashcard",
      "prompt": "Ne",
      "options": [],
      "correctIndex": 0,
      "audioText": "Quoi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❓"
      ]
    },
    {
                "id": "f59q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ne ve Kim\"",
                "options": [
                          "Quoi",
                          "Qui",
                          "Où",
                          "Comment",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Quoi",
                          "et",
                          "Qui"
                ],
                "audioText": "Quoi et Qui",
                "audioLang": "fr-FR"
    },
    {
                "id": "f59q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ne zaman görüyorum\"",
                "options": [
                          "Qui",
                          "Quand",
                          "Quoi",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Quand",
                          "vois"
                ],
                "audioText": "Je Quand vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f59q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Nerede\"",
                "options": [
                          "Pourquoi",
                          "Quoi",
                          "C'est",
                          "Où"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Où"
                ],
                "audioText": "C'est Où",
                "audioLang": "fr-FR"
    },
    {
      "id": "f59q2",
      "type": "flashcard",
      "prompt": "Kim",
      "options": [],
      "correctIndex": 0,
      "audioText": "Qui",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👤"
      ]
    },
    {
      "id": "f59q3",
      "type": "flashcard",
      "prompt": "Ne zaman",
      "options": [],
      "correctIndex": 0,
      "audioText": "Quand",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⏰"
      ]
    },
    {
      "id": "f59q4",
      "type": "flashcard",
      "prompt": "Nerede",
      "options": [],
      "correctIndex": 0,
      "audioText": "Où",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📍"
      ]
    },
    {
      "id": "f59q5",
      "type": "flashcard",
      "prompt": "Nasıl",
      "options": [],
      "correctIndex": 0,
      "audioText": "Comment",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤔"
      ]
    },
    {
      "id": "f59q6",
      "type": "flashcard",
      "prompt": "Neden",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pourquoi",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💭"
      ]
    },
    {
      "id": "f59q7",
      "type": "multipleChoice",
      "prompt": "\"Quoi\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Nerede",
        "Ne zaman",
        "Neden",
        "Ne"
      ],
      "correctIndex": 3,
      "audioText": "Quoi",
      "audioLang": "fr-FR"
    },
    {
      "id": "f59q8",
      "type": "multipleChoice",
      "prompt": "\"Qui\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Nasıl",
        "Kim",
        "Ne",
        "Ne zaman"
      ],
      "correctIndex": 1,
      "audioText": "Qui",
      "audioLang": "fr-FR"
    },
    {
      "id": "f59q9",
      "type": "multipleChoice",
      "prompt": "\"Quand\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Ne",
        "Kim",
        "Ne zaman",
        "Neden"
      ],
      "correctIndex": 2,
      "audioText": "Quand",
      "audioLang": "fr-FR"
    },
    {
      "id": "f59q10",
      "type": "translate",
      "prompt": "\"Nerede\" nasıl söylenir?",
      "options": [
        "Quoi",
        "Où",
        "Quand",
        "Qui"
      ],
      "correctIndex": 1,
      "audioText": "Où",
      "audioLang": "fr-FR"
    },
    {
      "id": "f59q11",
      "type": "translate",
      "prompt": "\"Nasıl\" nasıl söylenir?",
      "options": [
        "Comment",
        "Pourquoi",
        "Quand",
        "Où"
      ],
      "correctIndex": 0,
      "audioText": "Comment",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f60",
  "title": "Edatlar",
  "description": "Yer ifadeleri",
  "icon": "➕",
  "xpReward": 20,
  "questions": [
    {
      "id": "f60q1",
      "type": "flashcard",
      "prompt": "İçinde",
      "options": [],
      "correctIndex": 0,
      "audioText": "Dans",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📦"
      ]
    },
    {
                "id": "f60q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"İçinde ve Üstünde\"",
                "options": [
                          "Sous",
                          "Dans",
                          "et",
                          "Sur",
                          "Devant"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Dans",
                          "et",
                          "Sur"
                ],
                "audioText": "Dans et Sur",
                "audioLang": "fr-FR"
    },
    {
                "id": "f60q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Altında görüyorum\"",
                "options": [
                          "vois",
                          "Dans",
                          "Devant",
                          "Je",
                          "Sous"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Sous",
                          "vois"
                ],
                "audioText": "Je Sous vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f60q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yanında\"",
                "options": [
                          "Sur",
                          "À côté",
                          "C'est",
                          "Derrière"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "À côté"
                ],
                "audioText": "C'est À côté",
                "audioLang": "fr-FR"
    },
    {
      "id": "f60q2",
      "type": "flashcard",
      "prompt": "Üstünde",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sur",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬆️"
      ]
    },
    {
      "id": "f60q3",
      "type": "flashcard",
      "prompt": "Altında",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sous",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬇️"
      ]
    },
    {
      "id": "f60q4",
      "type": "flashcard",
      "prompt": "Yanında",
      "options": [],
      "correctIndex": 0,
      "audioText": "À côté",
      "audioLang": "fr-FR",
      "imageOptions": [
        "↔️"
      ]
    },
    {
      "id": "f60q5",
      "type": "flashcard",
      "prompt": "Önünde",
      "options": [],
      "correctIndex": 0,
      "audioText": "Devant",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬆️"
      ]
    },
    {
      "id": "f60q6",
      "type": "flashcard",
      "prompt": "Arkasında",
      "options": [],
      "correctIndex": 0,
      "audioText": "Derrière",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⬇️"
      ]
    },
    {
      "id": "f60q7",
      "type": "multipleChoice",
      "prompt": "\"Dans\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Üstünde",
        "Altında",
        "Önünde",
        "İçinde"
      ],
      "correctIndex": 3,
      "audioText": "Dans",
      "audioLang": "fr-FR"
    },
    {
      "id": "f60q8",
      "type": "multipleChoice",
      "prompt": "\"Sur\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Altında",
        "Üstünde",
        "Önünde",
        "İçinde"
      ],
      "correctIndex": 1,
      "audioText": "Sur",
      "audioLang": "fr-FR"
    },
    {
      "id": "f60q9",
      "type": "multipleChoice",
      "prompt": "\"Sous\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Altında",
        "Önünde",
        "Üstünde",
        "İçinde"
      ],
      "correctIndex": 0,
      "audioText": "Sous",
      "audioLang": "fr-FR"
    },
    {
      "id": "f60q10",
      "type": "translate",
      "prompt": "\"Yanında\" nasıl söylenir?",
      "options": [
        "Dans",
        "À côté",
        "Devant",
        "Sous"
      ],
      "correctIndex": 1,
      "audioText": "À côté",
      "audioLang": "fr-FR"
    },
    {
      "id": "f60q11",
      "type": "translate",
      "prompt": "\"Önünde\" nasıl söylenir?",
      "options": [
        "Dans",
        "Sur",
        "Devant",
        "À côté"
      ],
      "correctIndex": 2,
      "audioText": "Devant",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f61",
  "title": "Fikir Belirtme",
  "description": "Görüş ifade etme",
  "icon": "💡",
  "xpReward": 20,
  "questions": [
    {
      "id": "f61q1",
      "type": "flashcard",
      "prompt": "Bence",
      "options": [],
      "correctIndex": 0,
      "audioText": "Je pense",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💭"
      ]
    },
    {
                "id": "f61q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bence ve Bana göre\"",
                "options": [
                          "À mon avis",
                          "et",
                          "Correct",
                          "Je pense",
                          "Bien"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je pense",
                          "et",
                          "À mon avis"
                ],
                "audioText": "Je pense et À mon avis",
                "audioLang": "fr-FR"
    },
    {
                "id": "f61q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben İyi görüyorum\"",
                "options": [
                          "Bien",
                          "vois",
                          "À mon avis",
                          "Je",
                          "Je pense"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Bien",
                          "vois"
                ],
                "audioText": "Je Bien vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f61q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kötü\"",
                "options": [
                          "Mauvais",
                          "À mon avis",
                          "Incorrect",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Mauvais"
                ],
                "audioText": "C'est Mauvais",
                "audioLang": "fr-FR"
    },
    {
      "id": "f61q2",
      "type": "flashcard",
      "prompt": "Bana göre",
      "options": [],
      "correctIndex": 0,
      "audioText": "À mon avis",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🗣️"
      ]
    },
    {
      "id": "f61q3",
      "type": "flashcard",
      "prompt": "İyi",
      "options": [],
      "correctIndex": 0,
      "audioText": "Bien",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👍"
      ]
    },
    {
      "id": "f61q4",
      "type": "flashcard",
      "prompt": "Kötü",
      "options": [],
      "correctIndex": 0,
      "audioText": "Mauvais",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👎"
      ]
    },
    {
      "id": "f61q5",
      "type": "flashcard",
      "prompt": "Doğru",
      "options": [],
      "correctIndex": 0,
      "audioText": "Correct",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✅"
      ]
    },
    {
      "id": "f61q6",
      "type": "flashcard",
      "prompt": "Yanlış",
      "options": [],
      "correctIndex": 0,
      "audioText": "Incorrect",
      "audioLang": "fr-FR",
      "imageOptions": [
        "❌"
      ]
    },
    {
      "id": "f61q7",
      "type": "multipleChoice",
      "prompt": "\"Je pense\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bence",
        "Yanlış",
        "Bana göre",
        "Doğru"
      ],
      "correctIndex": 0,
      "audioText": "Je pense",
      "audioLang": "fr-FR"
    },
    {
      "id": "f61q8",
      "type": "multipleChoice",
      "prompt": "\"À mon avis\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Yanlış",
        "İyi",
        "Doğru",
        "Bana göre"
      ],
      "correctIndex": 3,
      "audioText": "À mon avis",
      "audioLang": "fr-FR"
    },
    {
      "id": "f61q9",
      "type": "multipleChoice",
      "prompt": "\"Bien\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kötü",
        "Yanlış",
        "Bence",
        "İyi"
      ],
      "correctIndex": 3,
      "audioText": "Bien",
      "audioLang": "fr-FR"
    },
    {
      "id": "f61q10",
      "type": "translate",
      "prompt": "\"Kötü\" nasıl söylenir?",
      "options": [
        "Incorrect",
        "Correct",
        "Mauvais",
        "À mon avis"
      ],
      "correctIndex": 2,
      "audioText": "Mauvais",
      "audioLang": "fr-FR"
    },
    {
      "id": "f61q11",
      "type": "translate",
      "prompt": "\"Doğru\" nasıl söylenir?",
      "options": [
        "Correct",
        "Je pense",
        "Bien",
        "À mon avis"
      ],
      "correctIndex": 0,
      "audioText": "Correct",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f62",
  "title": "Tartışma",
  "description": "Tartışma dili",
  "icon": "🗣️",
  "xpReward": 20,
  "questions": [
    {
      "id": "f62q1",
      "type": "flashcard",
      "prompt": "Katılmak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Être d'accord",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤝"
      ]
    },
    {
                "id": "f62q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Katılmak ve Katılmamak\"",
                "options": [
                          "Être d'accord",
                          "Pas d'accord",
                          "et",
                          "Certainement",
                          "Je ne crois pas"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Être d'accord",
                          "et",
                          "Pas d'accord"
                ],
                "audioText": "Être d'accord et Pas d'accord",
                "audioLang": "fr-FR"
    },
    {
                "id": "f62q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Evet ama görüyorum\"",
                "options": [
                          "Pas d'accord",
                          "Je ne crois pas",
                          "Oui mais",
                          "vois",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Oui mais",
                          "vois"
                ],
                "audioText": "Je Oui mais vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f62q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kesinlikle\"",
                "options": [
                          "Certainement",
                          "Être d'accord",
                          "C'est",
                          "Tu as raison"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Certainement"
                ],
                "audioText": "C'est Certainement",
                "audioLang": "fr-FR"
    },
    {
      "id": "f62q2",
      "type": "flashcard",
      "prompt": "Katılmamak",
      "options": [],
      "correctIndex": 0,
      "audioText": "Pas d'accord",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🙅"
      ]
    },
    {
      "id": "f62q3",
      "type": "flashcard",
      "prompt": "Evet ama",
      "options": [],
      "correctIndex": 0,
      "audioText": "Oui mais",
      "audioLang": "fr-FR",
      "imageOptions": [
        "⚖️"
      ]
    },
    {
      "id": "f62q4",
      "type": "flashcard",
      "prompt": "Kesinlikle",
      "options": [],
      "correctIndex": 0,
      "audioText": "Certainement",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💯"
      ]
    },
    {
      "id": "f62q5",
      "type": "flashcard",
      "prompt": "Sanmıyorum",
      "options": [],
      "correctIndex": 0,
      "audioText": "Je ne crois pas",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤔"
      ]
    },
    {
      "id": "f62q6",
      "type": "flashcard",
      "prompt": "Haklısın",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tu as raison",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✅"
      ]
    },
    {
      "id": "f62q7",
      "type": "multipleChoice",
      "prompt": "\"Être d'accord\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kesinlikle",
        "Katılmak",
        "Haklısın",
        "Sanmıyorum"
      ],
      "correctIndex": 1,
      "audioText": "Être d'accord",
      "audioLang": "fr-FR"
    },
    {
      "id": "f62q8",
      "type": "multipleChoice",
      "prompt": "\"Pas d'accord\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kesinlikle",
        "Evet ama",
        "Katılmak",
        "Katılmamak"
      ],
      "correctIndex": 3,
      "audioText": "Pas d'accord",
      "audioLang": "fr-FR"
    },
    {
      "id": "f62q9",
      "type": "multipleChoice",
      "prompt": "\"Oui mais\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Katılmak",
        "Sanmıyorum",
        "Evet ama",
        "Katılmamak"
      ],
      "correctIndex": 2,
      "audioText": "Oui mais",
      "audioLang": "fr-FR"
    },
    {
      "id": "f62q10",
      "type": "translate",
      "prompt": "\"Kesinlikle\" nasıl söylenir?",
      "options": [
        "Certainement",
        "Je ne crois pas",
        "Oui mais",
        "Pas d'accord"
      ],
      "correctIndex": 0,
      "audioText": "Certainement",
      "audioLang": "fr-FR"
    },
    {
      "id": "f62q11",
      "type": "translate",
      "prompt": "\"Sanmıyorum\" nasıl söylenir?",
      "options": [
        "Être d'accord",
        "Pas d'accord",
        "Certainement",
        "Je ne crois pas"
      ],
      "correctIndex": 3,
      "audioText": "Je ne crois pas",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f63",
  "title": "Haberler",
  "description": "Medya ve iletişim",
  "icon": "📰",
  "xpReward": 20,
  "questions": [
    {
      "id": "f63q1",
      "type": "flashcard",
      "prompt": "Haber",
      "options": [],
      "correctIndex": 0,
      "audioText": "Nouvelles",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📰"
      ]
    },
    {
                "id": "f63q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Haber ve Gazete\"",
                "options": [
                          "Diffusion",
                          "Réseaux sociaux",
                          "Nouvelles",
                          "Journal",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Nouvelles",
                          "et",
                          "Journal"
                ],
                "audioText": "Nouvelles et Journal",
                "audioLang": "fr-FR"
    },
    {
                "id": "f63q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Radyo görüyorum\"",
                "options": [
                          "Nouvelles",
                          "Diffusion",
                          "Radio",
                          "Je",
                          "vois"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Radio",
                          "vois"
                ],
                "audioText": "Je Radio vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f63q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sosyal medya\"",
                "options": [
                          "Réseaux sociaux",
                          "Nouvelles",
                          "C'est",
                          "Journal"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Réseaux sociaux"
                ],
                "audioText": "C'est Réseaux sociaux",
                "audioLang": "fr-FR"
    },
    {
      "id": "f63q2",
      "type": "flashcard",
      "prompt": "Gazete",
      "options": [],
      "correctIndex": 0,
      "audioText": "Journal",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📄"
      ]
    },
    {
      "id": "f63q3",
      "type": "flashcard",
      "prompt": "Radyo",
      "options": [],
      "correctIndex": 0,
      "audioText": "Radio",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📻"
      ]
    },
    {
      "id": "f63q4",
      "type": "flashcard",
      "prompt": "Sosyal medya",
      "options": [],
      "correctIndex": 0,
      "audioText": "Réseaux sociaux",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📱"
      ]
    },
    {
      "id": "f63q5",
      "type": "flashcard",
      "prompt": "Yayın",
      "options": [],
      "correctIndex": 0,
      "audioText": "Diffusion",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📡"
      ]
    },
    {
      "id": "f63q6",
      "type": "flashcard",
      "prompt": "Duyuru",
      "options": [],
      "correctIndex": 0,
      "audioText": "Annonce",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📢"
      ]
    },
    {
      "id": "f63q7",
      "type": "multipleChoice",
      "prompt": "\"Nouvelles\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Radyo",
        "Gazete",
        "Duyuru",
        "Haber"
      ],
      "correctIndex": 3,
      "audioText": "Nouvelles",
      "audioLang": "fr-FR"
    },
    {
      "id": "f63q8",
      "type": "multipleChoice",
      "prompt": "\"Journal\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Gazete",
        "Radyo",
        "Duyuru",
        "Sosyal medya"
      ],
      "correctIndex": 0,
      "audioText": "Journal",
      "audioLang": "fr-FR"
    },
    {
      "id": "f63q9",
      "type": "multipleChoice",
      "prompt": "\"Radio\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Radyo",
        "Yayın",
        "Haber",
        "Gazete"
      ],
      "correctIndex": 0,
      "audioText": "Radio",
      "audioLang": "fr-FR"
    },
    {
      "id": "f63q10",
      "type": "translate",
      "prompt": "\"Sosyal medya\" nasıl söylenir?",
      "options": [
        "Réseaux sociaux",
        "Journal",
        "Nouvelles",
        "Diffusion"
      ],
      "correctIndex": 0,
      "audioText": "Réseaux sociaux",
      "audioLang": "fr-FR"
    },
    {
      "id": "f63q11",
      "type": "translate",
      "prompt": "\"Yayın\" nasıl söylenir?",
      "options": [
        "Réseaux sociaux",
        "Radio",
        "Diffusion",
        "Journal"
      ],
      "correctIndex": 2,
      "audioText": "Diffusion",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f64",
  "title": "Atasözleri",
  "description": "Bilge sözler",
  "icon": "📜",
  "xpReward": 20,
  "questions": [
    {
      "id": "f64q1",
      "type": "flashcard",
      "prompt": "Atasözü",
      "options": [],
      "correctIndex": 0,
      "audioText": "Proverbe",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📜"
      ]
    },
    {
                "id": "f64q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Atasözü ve Bilgelik\"",
                "options": [
                          "Promesse",
                          "Histoire",
                          "et",
                          "Proverbe",
                          "Sagesse"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Proverbe",
                          "et",
                          "Sagesse"
                ],
                "audioText": "Proverbe et Sagesse",
                "audioLang": "fr-FR"
    },
    {
                "id": "f64q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tavsiye görüyorum\"",
                "options": [
                          "Conseil",
                          "Proverbe",
                          "vois",
                          "Je",
                          "Histoire"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Conseil",
                          "vois"
                ],
                "audioText": "Je Conseil vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f64q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Söz\"",
                "options": [
                          "Promesse",
                          "C'est",
                          "Sagesse",
                          "Proverbe"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Promesse"
                ],
                "audioText": "C'est Promesse",
                "audioLang": "fr-FR"
    },
    {
      "id": "f64q2",
      "type": "flashcard",
      "prompt": "Bilgelik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sagesse",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦉"
      ]
    },
    {
      "id": "f64q3",
      "type": "flashcard",
      "prompt": "Tavsiye",
      "options": [],
      "correctIndex": 0,
      "audioText": "Conseil",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💡"
      ]
    },
    {
      "id": "f64q4",
      "type": "flashcard",
      "prompt": "Söz",
      "options": [],
      "correctIndex": 0,
      "audioText": "Promesse",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🤝"
      ]
    },
    {
      "id": "f64q5",
      "type": "flashcard",
      "prompt": "Hikaye",
      "options": [],
      "correctIndex": 0,
      "audioText": "Histoire",
      "audioLang": "fr-FR",
      "imageOptions": [
        "📖"
      ]
    },
    {
      "id": "f64q6",
      "type": "flashcard",
      "prompt": "Anlam",
      "options": [],
      "correctIndex": 0,
      "audioText": "Sens",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💭"
      ]
    },
    {
      "id": "f64q7",
      "type": "multipleChoice",
      "prompt": "\"Proverbe\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Atasözü",
        "Hikaye",
        "Tavsiye",
        "Söz"
      ],
      "correctIndex": 0,
      "audioText": "Proverbe",
      "audioLang": "fr-FR"
    },
    {
      "id": "f64q8",
      "type": "multipleChoice",
      "prompt": "\"Sagesse\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Bilgelik",
        "Söz",
        "Tavsiye",
        "Anlam"
      ],
      "correctIndex": 0,
      "audioText": "Sagesse",
      "audioLang": "fr-FR"
    },
    {
      "id": "f64q9",
      "type": "multipleChoice",
      "prompt": "\"Conseil\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Anlam",
        "Bilgelik",
        "Söz",
        "Tavsiye"
      ],
      "correctIndex": 3,
      "audioText": "Conseil",
      "audioLang": "fr-FR"
    },
    {
      "id": "f64q10",
      "type": "translate",
      "prompt": "\"Söz\" nasıl söylenir?",
      "options": [
        "Sagesse",
        "Proverbe",
        "Histoire",
        "Promesse"
      ],
      "correctIndex": 3,
      "audioText": "Promesse",
      "audioLang": "fr-FR"
    },
    {
      "id": "f64q11",
      "type": "translate",
      "prompt": "\"Hikaye\" nasıl söylenir?",
      "options": [
        "Promesse",
        "Histoire",
        "Sagesse",
        "Conseil"
      ],
      "correctIndex": 1,
      "audioText": "Histoire",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f65",
  "title": "Masallar",
  "description": "Efsane ve masal",
  "icon": "🦄",
  "xpReward": 20,
  "questions": [
    {
      "id": "f65q1",
      "type": "flashcard",
      "prompt": "Masal",
      "options": [],
      "correctIndex": 0,
      "audioText": "Conte",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🧚"
      ]
    },
    {
                "id": "f65q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Masal ve Kahraman\"",
                "options": [
                          "Héros",
                          "Conte",
                          "Dragon",
                          "Princesse",
                          "et"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Conte",
                          "et",
                          "Héros"
                ],
                "audioText": "Conte et Héros",
                "audioLang": "fr-FR"
    },
    {
                "id": "f65q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Prenses görüyorum\"",
                "options": [
                          "Princesse",
                          "vois",
                          "Héros",
                          "Je",
                          "Conte"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Princesse",
                          "vois"
                ],
                "audioText": "Je Princesse vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f65q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ejderha\"",
                "options": [
                          "Dragon",
                          "Trésor",
                          "Héros",
                          "C'est"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Dragon"
                ],
                "audioText": "C'est Dragon",
                "audioLang": "fr-FR"
    },
    {
      "id": "f65q2",
      "type": "flashcard",
      "prompt": "Kahraman",
      "options": [],
      "correctIndex": 0,
      "audioText": "Héros",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🦸"
      ]
    },
    {
      "id": "f65q3",
      "type": "flashcard",
      "prompt": "Prenses",
      "options": [],
      "correctIndex": 0,
      "audioText": "Princesse",
      "audioLang": "fr-FR",
      "imageOptions": [
        "👸"
      ]
    },
    {
      "id": "f65q4",
      "type": "flashcard",
      "prompt": "Ejderha",
      "options": [],
      "correctIndex": 0,
      "audioText": "Dragon",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🐉"
      ]
    },
    {
      "id": "f65q5",
      "type": "flashcard",
      "prompt": "Sihir",
      "options": [],
      "correctIndex": 0,
      "audioText": "Magie",
      "audioLang": "fr-FR",
      "imageOptions": [
        "✨"
      ]
    },
    {
      "id": "f65q6",
      "type": "flashcard",
      "prompt": "Hazine",
      "options": [],
      "correctIndex": 0,
      "audioText": "Trésor",
      "audioLang": "fr-FR",
      "imageOptions": [
        "💎"
      ]
    },
    {
      "id": "f65q7",
      "type": "multipleChoice",
      "prompt": "\"Conte\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Masal",
        "Sihir",
        "Prenses",
        "Kahraman"
      ],
      "correctIndex": 0,
      "audioText": "Conte",
      "audioLang": "fr-FR"
    },
    {
      "id": "f65q8",
      "type": "multipleChoice",
      "prompt": "\"Héros\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kahraman",
        "Hazine",
        "Sihir",
        "Ejderha"
      ],
      "correctIndex": 0,
      "audioText": "Héros",
      "audioLang": "fr-FR"
    },
    {
      "id": "f65q9",
      "type": "multipleChoice",
      "prompt": "\"Princesse\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kahraman",
        "Sihir",
        "Ejderha",
        "Prenses"
      ],
      "correctIndex": 3,
      "audioText": "Princesse",
      "audioLang": "fr-FR"
    },
    {
      "id": "f65q10",
      "type": "translate",
      "prompt": "\"Ejderha\" nasıl söylenir?",
      "options": [
        "Princesse",
        "Conte",
        "Dragon",
        "Héros"
      ],
      "correctIndex": 2,
      "audioText": "Dragon",
      "audioLang": "fr-FR"
    },
    {
      "id": "f65q11",
      "type": "translate",
      "prompt": "\"Sihir\" nasıl söylenir?",
      "options": [
        "Trésor",
        "Magie",
        "Héros",
        "Conte"
      ],
      "correctIndex": 1,
      "audioText": "Magie",
      "audioLang": "fr-FR"
    }
  ]
},
  {
  "id": "f66",
  "title": "Gelenekler",
  "description": "Kültür ve adet",
  "icon": "🎭",
  "xpReward": 20,
  "questions": [
    {
      "id": "f66q1",
      "type": "flashcard",
      "prompt": "Gelenek",
      "options": [],
      "correctIndex": 0,
      "audioText": "Tradition",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏛️"
      ]
    },
    {
                "id": "f66q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gelenek ve Tören\"",
                "options": [
                          "Culture",
                          "Festival",
                          "Tradition",
                          "et",
                          "Cérémonie"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Tradition",
                          "et",
                          "Cérémonie"
                ],
                "audioText": "Tradition et Cérémonie",
                "audioLang": "fr-FR"
    },
    {
                "id": "f66q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kültür görüyorum\"",
                "options": [
                          "Tradition",
                          "vois",
                          "Culture",
                          "Festival",
                          "Je"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "Je",
                          "Culture",
                          "vois"
                ],
                "audioText": "Je Culture vois",
                "audioLang": "fr-FR"
    },
    {
                "id": "f66q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Miras\"",
                "options": [
                          "Patrimoine",
                          "C'est",
                          "Tradition",
                          "Cérémonie"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                          "C'est",
                          "Patrimoine"
                ],
                "audioText": "C'est Patrimoine",
                "audioLang": "fr-FR"
    },
    {
      "id": "f66q2",
      "type": "flashcard",
      "prompt": "Tören",
      "options": [],
      "correctIndex": 0,
      "audioText": "Cérémonie",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎊"
      ]
    },
    {
      "id": "f66q3",
      "type": "flashcard",
      "prompt": "Kültür",
      "options": [],
      "correctIndex": 0,
      "audioText": "Culture",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🌐"
      ]
    },
    {
      "id": "f66q4",
      "type": "flashcard",
      "prompt": "Miras",
      "options": [],
      "correctIndex": 0,
      "audioText": "Patrimoine",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🏺"
      ]
    },
    {
      "id": "f66q5",
      "type": "flashcard",
      "prompt": "Festival",
      "options": [],
      "correctIndex": 0,
      "audioText": "Festival",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎪"
      ]
    },
    {
      "id": "f66q6",
      "type": "flashcard",
      "prompt": "Müzik",
      "options": [],
      "correctIndex": 0,
      "audioText": "Musique",
      "audioLang": "fr-FR",
      "imageOptions": [
        "🎶"
      ]
    },
    {
      "id": "f66q7",
      "type": "multipleChoice",
      "prompt": "\"Tradition\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Tören",
        "Kültür",
        "Festival",
        "Gelenek"
      ],
      "correctIndex": 3,
      "audioText": "Tradition",
      "audioLang": "fr-FR"
    },
    {
      "id": "f66q8",
      "type": "multipleChoice",
      "prompt": "\"Cérémonie\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Tören",
        "Festival",
        "Kültür",
        "Gelenek"
      ],
      "correctIndex": 0,
      "audioText": "Cérémonie",
      "audioLang": "fr-FR"
    },
    {
      "id": "f66q9",
      "type": "multipleChoice",
      "prompt": "\"Culture\" kelimesinin Türkçe anlamı nedir?",
      "options": [
        "Kültür",
        "Gelenek",
        "Tören",
        "Miras"
      ],
      "correctIndex": 0,
      "audioText": "Culture",
      "audioLang": "fr-FR"
    },
    {
      "id": "f66q10",
      "type": "translate",
      "prompt": "\"Miras\" nasıl söylenir?",
      "options": [
        "Patrimoine",
        "Cérémonie",
        "Festival",
        "Culture"
      ],
      "correctIndex": 0,
      "audioText": "Patrimoine",
      "audioLang": "fr-FR"
    },
    {
      "id": "f66q11",
      "type": "translate",
      "prompt": "\"Festival\" nasıl söylenir?",
      "options": [
        "Festival",
        "Culture",
        "Patrimoine",
        "Musique"
      ],
      "correctIndex": 0,
      "audioText": "Festival",
      "audioLang": "fr-FR"
    }
  ]
}
];