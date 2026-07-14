"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.englishContent = void 0;
exports.englishContent = [
    {
        "id": "e1",
        "title": "Selamlaşma",
        "description": "Temel selamlaşma kalıpları",
        "icon": "👋",
        "xpReward": 20,
        "questions": [
            {
                "id": "e1q1",
                "type": "imageChoice",
                "prompt": "Hangisi 'Merhaba' demektir?",
                "options": ["Hello", "Goodbye", "Please", "Thanks"],
                "imageOptions": ["👋", "🏃", "🥺", "🙏"],
                "correctIndex": 0,
                "audioText": "Hello",
                "audioLang": "en-US"
            },
            {
                "id": "e1q2",
                "type": "imageChoice",
                "prompt": "Hangisi 'Güle güle' demektir?",
                "options": ["Hello", "Goodbye", "Yes", "No"],
                "imageOptions": ["👋", "🏃", "✅", "❌"],
                "correctIndex": 1,
                "audioText": "Goodbye",
                "audioLang": "en-US"
            },
            {
                "id": "e1q3",
                "type": "imageChoice",
                "prompt": "Hangisi 'Lütfen' demektir?",
                "options": ["Yes", "No", "Please", "Thanks"],
                "imageOptions": ["✅", "❌", "🥺", "🙏"],
                "correctIndex": 2,
                "audioText": "Please",
                "audioLang": "en-US"
            },
            {
                "id": "e1q4",
                "type": "imageChoice",
                "prompt": "Hangisi 'Teşekkürler' demektir?",
                "options": ["Hello", "Please", "Thanks", "Yes"],
                "imageOptions": ["👋", "🥺", "🙏", "✅"],
                "correctIndex": 2,
                "audioText": "Thanks",
                "audioLang": "en-US"
            },
            {
                "id": "e1q5",
                "type": "translate",
                "prompt": "Çevir: Hello, thanks",
                "options": ["Merhaba, teşekkürler", "Güle güle, lütfen", "Evet, teşekkürler", "Hayır, teşekkürler"],
                "correctIndex": 0,
                "audioText": "Hello, thanks",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e2",
        "title": "Yiyecek ve İçecek",
        "description": "Temel besinleri öğren",
        "icon": "🍎",
        "xpReward": 20,
        "questions": [
            {
                "id": "e2q1",
                "type": "imageChoice",
                "prompt": "Hangisi 'Kahve' demektir?",
                "options": ["Coffee", "Water", "Tea", "Apple"],
                "imageOptions": ["☕", "💧", "🍵", "🍎"],
                "correctIndex": 0,
                "audioText": "Coffee",
                "audioLang": "en-US"
            },
            {
                "id": "e2q2",
                "type": "imageChoice",
                "prompt": "Hangisi 'Su' demektir?",
                "options": ["Apple", "Bread", "Coffee", "Water"],
                "imageOptions": ["🍎", "🥖", "☕", "💧"],
                "correctIndex": 3,
                "audioText": "Water",
                "audioLang": "en-US"
            },
            {
                "id": "e2q3",
                "type": "imageChoice",
                "prompt": "Hangisi 'Elma' demektir?",
                "options": ["Tea", "Apple", "Bread", "Water"],
                "imageOptions": ["🍵", "🍎", "🥖", "💧"],
                "correctIndex": 1,
                "audioText": "Apple",
                "audioLang": "en-US"
            },
            {
                "id": "e2q4",
                "type": "translate",
                "prompt": "Çevir: Coffee, please",
                "options": ["Su, lütfen", "Kahve, teşekkürler", "Kahve, lütfen", "Elma, lütfen"],
                "correctIndex": 2,
                "audioText": "Coffee, please",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e3",
        "title": "Hayvanlar ve Sayılar",
        "description": "Hayvanlar ve 1-5 arası sayılar",
        "icon": "🐱",
        "xpReward": 20,
        "questions": [
            {
                "id": "e3q1",
                "type": "imageChoice",
                "prompt": "Hangisi 'Kedi' demektir?",
                "options": ["Dog", "Cat", "Bird", "Fish"],
                "imageOptions": ["🐶", "🐱", "🐦", "🐟"],
                "correctIndex": 1,
                "audioText": "Cat",
                "audioLang": "en-US"
            },
            {
                "id": "e3q2",
                "type": "imageChoice",
                "prompt": "Hangisi 'Köpek' demektir?",
                "options": ["Dog", "Cat", "Bird", "Fish"],
                "imageOptions": ["🐶", "🐱", "🐦", "🐟"],
                "correctIndex": 0,
                "audioText": "Dog",
                "audioLang": "en-US"
            },
            {
                "id": "e3q3",
                "type": "multipleChoice",
                "prompt": "'One' ne anlama gelir?",
                "options": ["İki", "Bir", "Üç", "Dört"],
                "correctIndex": 1,
                "audioText": "One",
                "audioLang": "en-US"
            },
            {
                "id": "e3q4",
                "type": "multipleChoice",
                "prompt": "'Two' ne anlama gelir?",
                "options": ["Bir", "İki", "Üç", "Beş"],
                "correctIndex": 1,
                "audioText": "Two",
                "audioLang": "en-US"
            },
            {
                "id": "e3q5",
                "type": "translate",
                "prompt": "Çevir: One cat",
                "options": ["Bir köpek", "İki kedi", "Bir kedi", "Üç kedi"],
                "correctIndex": 2,
                "audioText": "One cat",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e4",
        "title": "Temel Fiiller",
        "description": "İstemek ve sahip olmak",
        "icon": "🏃",
        "xpReward": 20,
        "questions": [
            {
                "id": "e4q1",
                "type": "flashcard",
                "prompt": "Ben",
                "options": [],
                "correctIndex": 0,
                "audioText": "I",
                "audioLang": "en-US",
                "imageOptions": ["🙋‍♂️"]
            },
            {
                "id": "e4q2",
                "type": "flashcard",
                "prompt": "İstiyorum",
                "options": [],
                "correctIndex": 0,
                "audioText": "Want",
                "audioLang": "en-US",
                "imageOptions": ["🤲"]
            },
            {
                "id": "e4q3",
                "type": "flashcard",
                "prompt": "Sahibim",
                "options": [],
                "correctIndex": 0,
                "audioText": "Have",
                "audioLang": "en-US",
                "imageOptions": ["👐"]
            },
            {
                "id": "e4q4",
                "type": "translate",
                "prompt": "Çevir: I want",
                "options": ["Ben istiyorum", "Ben sahibim", "Ben geliyorum", "Ben görüyorum"],
                "correctIndex": 0,
                "audioText": "I want",
                "audioLang": "en-US"
            },
            {
                "id": "e4q5",
                "type": "translate",
                "prompt": "Çevir: I have",
                "options": ["Ben istiyorum", "Ben sahibim", "Sen istiyorsun", "Ben biliyorum"],
                "correctIndex": 1,
                "audioText": "I have",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e5",
        "title": "Cümle Kurma",
        "description": "Öğrenilen kelimeleri birleştir",
        "icon": "🧩",
        "xpReward": 20,
        "questions": [
            {
                "id": "e5q1",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: Ben bir kahve istiyorum",
                "options": ["I", "want", "have", "a", "coffee", "water"],
                "correctAnswer": ["I", "want", "a", "coffee"],
                "correctIndex": 0,
                "audioText": "I want a coffee",
                "audioLang": "en-US"
            },
            {
                "id": "e5q2",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: Bir kedim var (Ben bir kediye sahibim)",
                "options": ["I", "have", "want", "a", "cat", "dog"],
                "correctAnswer": ["I", "have", "a", "cat"],
                "correctIndex": 0,
                "audioText": "I have a cat",
                "audioLang": "en-US"
            },
            {
                "id": "e5q3",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: Lütfen su istiyorum",
                "options": ["I", "want", "water", "please", "thanks"],
                "correctAnswer": ["I", "want", "water", "please"],
                "correctIndex": 0,
                "audioText": "I want water please",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e_boss_1",
        "title": "Aşama 1 Sınavı",
        "description": "Profesör Lingo'yu Kurtar!",
        "icon": "👑",
        "xpReward": 100,
        "questions": [
            {
                "id": "eboss1q1",
                "type": "translate",
                "prompt": "Çevir: Merhaba, ben bir kediye sahibim.",
                "options": ["Hello, I have a cat", "Hello, I want a cat", "Goodbye, I have a dog", "Please, I have a cat"],
                "correctIndex": 0,
                "audioText": "Hello, I have a cat",
                "audioLang": "en-US"
            },
            {
                "id": "eboss1q2",
                "type": "speak",
                "prompt": "Lütfen şu cümleyi mikrofona söyle:",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hello, I want a coffee please",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e7",
        "title": "Sayılar",
        "description": "Sayıları öğren",
        "icon": "1️⃣",
        "xpReward": 20,
        "questions": [
            {
                "id": "e7q1",
                "type": "flashcard",
                "prompt": "Bir",
                "options": [],
                "correctIndex": 0,
                "audioText": "One",
                "audioLang": "en-US",
                "imageOptions": [
                    "1️⃣"
                ]
            },
            {
                "id": "e7q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bir ve İki\"",
                "options": [
                    "Three",
                    "One",
                    "and",
                    "Two",
                    "Four"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "One",
                    "and",
                    "Two"
                ],
                "audioText": "One and Two",
                "audioLang": "en-US"
            },
            {
                "id": "e7q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Üç görüyorum\"",
                "options": [
                    "see",
                    "I",
                    "Three",
                    "Five",
                    "One"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Three",
                    "see"
                ],
                "audioText": "I Three see",
                "audioLang": "en-US"
            },
            {
                "id": "e7q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dört\"",
                "options": [
                    "Ten",
                    "is",
                    "Two",
                    "This",
                    "Four"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Four"
                ],
                "audioText": "This is Four",
                "audioLang": "en-US"
            },
            {
                "id": "e7q2",
                "type": "flashcard",
                "prompt": "İki",
                "options": [],
                "correctIndex": 0,
                "audioText": "Two",
                "audioLang": "en-US",
                "imageOptions": [
                    "2️⃣"
                ]
            },
            {
                "id": "e7q3",
                "type": "flashcard",
                "prompt": "Üç",
                "options": [],
                "correctIndex": 0,
                "audioText": "Three",
                "audioLang": "en-US",
                "imageOptions": [
                    "3️⃣"
                ]
            },
            {
                "id": "e7q4",
                "type": "flashcard",
                "prompt": "Dört",
                "options": [],
                "correctIndex": 0,
                "audioText": "Four",
                "audioLang": "en-US",
                "imageOptions": [
                    "4️⃣"
                ]
            },
            {
                "id": "e7q5",
                "type": "flashcard",
                "prompt": "Beş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Five",
                "audioLang": "en-US",
                "imageOptions": [
                    "5️⃣"
                ]
            },
            {
                "id": "e7q6",
                "type": "flashcard",
                "prompt": "Altı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Six",
                "audioLang": "en-US",
                "imageOptions": [
                    "6️⃣"
                ]
            },
            {
                "id": "e7q7",
                "type": "multipleChoice",
                "prompt": "\"One\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bir",
                    "Altı",
                    "İki",
                    "On"
                ],
                "correctIndex": 0,
                "audioText": "One",
                "audioLang": "en-US"
            },
            {
                "id": "e7q8",
                "type": "multipleChoice",
                "prompt": "\"Two\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İki",
                    "On",
                    "Bir",
                    "Üç"
                ],
                "correctIndex": 0,
                "audioText": "Two",
                "audioLang": "en-US"
            },
            {
                "id": "e7q9",
                "type": "multipleChoice",
                "prompt": "\"Three\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İki",
                    "On",
                    "Üç",
                    "Dört"
                ],
                "correctIndex": 2,
                "audioText": "Three",
                "audioLang": "en-US"
            },
            {
                "id": "e7q10",
                "type": "translate",
                "prompt": "\"Dört\" nasıl söylenir?",
                "options": [
                    "One",
                    "Six",
                    "Four",
                    "Ten"
                ],
                "correctIndex": 2,
                "audioText": "Four",
                "audioLang": "en-US"
            },
            {
                "id": "e7q11",
                "type": "translate",
                "prompt": "\"Beş\" nasıl söylenir?",
                "options": [
                    "Ten",
                    "One",
                    "Six",
                    "Five"
                ],
                "correctIndex": 3,
                "audioText": "Five",
                "audioLang": "en-US"
            },
            {
                "id": "e7_sb_6xqho",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Bir\"",
                "correctAnswer": ["One"],
                "options": [
                    "One",
                    "güzel",
                    "kötü",
                    "çok"
                ],
                "audioText": "One",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e8",
        "title": "Günler ve Aylar",
        "description": "Haftanın günleri",
        "icon": "📅",
        "xpReward": 20,
        "questions": [
            {
                "id": "e8q1",
                "type": "flashcard",
                "prompt": "Pazartesi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Monday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pazartesi ve Salı\"",
                "options": [
                    "Wednesday",
                    "and",
                    "Monday",
                    "Tuesday",
                    "Friday"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Monday",
                    "and",
                    "Tuesday"
                ],
                "audioText": "Monday and Tuesday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Çarşamba görüyorum\"",
                "options": [
                    "see",
                    "Wednesday",
                    "Friday",
                    "I",
                    "Tuesday"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Wednesday",
                    "see"
                ],
                "audioText": "I Wednesday see",
                "audioLang": "en-US"
            },
            {
                "id": "e8q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Perşembe\"",
                "options": [
                    "is",
                    "Sunday",
                    "This",
                    "Thursday",
                    "Tuesday"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Thursday"
                ],
                "audioText": "This is Thursday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q2",
                "type": "flashcard",
                "prompt": "Salı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tuesday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q3",
                "type": "flashcard",
                "prompt": "Çarşamba",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wednesday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q4",
                "type": "flashcard",
                "prompt": "Perşembe",
                "options": [],
                "correctIndex": 0,
                "audioText": "Thursday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q5",
                "type": "flashcard",
                "prompt": "Cuma",
                "options": [],
                "correctIndex": 0,
                "audioText": "Friday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q6",
                "type": "flashcard",
                "prompt": "Cumartesi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Saturday",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e8q7",
                "type": "multipleChoice",
                "prompt": "\"Monday\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Pazar",
                    "Çarşamba",
                    "Perşembe",
                    "Pazartesi"
                ],
                "correctIndex": 3,
                "audioText": "Monday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q8",
                "type": "multipleChoice",
                "prompt": "\"Tuesday\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Cuma",
                    "Çarşamba",
                    "Salı",
                    "Pazartesi"
                ],
                "correctIndex": 2,
                "audioText": "Tuesday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q9",
                "type": "multipleChoice",
                "prompt": "\"Wednesday\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çarşamba",
                    "Pazar",
                    "Cumartesi",
                    "Cuma"
                ],
                "correctIndex": 0,
                "audioText": "Wednesday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q10",
                "type": "translate",
                "prompt": "\"Perşembe\" nasıl söylenir?",
                "options": [
                    "Thursday",
                    "Monday",
                    "Tuesday",
                    "Sunday"
                ],
                "correctIndex": 0,
                "audioText": "Thursday",
                "audioLang": "en-US"
            },
            {
                "id": "e8q11",
                "type": "translate",
                "prompt": "\"Cuma\" nasıl söylenir?",
                "options": [
                    "Wednesday",
                    "Friday",
                    "Thursday",
                    "Monday"
                ],
                "correctIndex": 1,
                "audioText": "Friday",
                "audioLang": "en-US"
            },
            {
                "id": "e8_sb_vhkv9",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Pazartesi\"",
                "correctAnswer": ["Monday"],
                "options": [
                    "çok",
                    "bu",
                    "güzel",
                    "Monday"
                ],
                "audioText": "Monday",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e9",
        "title": "Saatler",
        "description": "Zamanı ifade et",
        "icon": "⏰",
        "xpReward": 20,
        "questions": [
            {
                "id": "e9q1",
                "type": "flashcard",
                "prompt": "Saat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hour",
                "audioLang": "en-US",
                "imageOptions": [
                    "🕐"
                ]
            },
            {
                "id": "e9q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sabah ve Öğle\"",
                "options": [
                    "Noon",
                    "Night",
                    "and",
                    "Morning",
                    "Evening"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Morning",
                    "and",
                    "Noon"
                ],
                "audioText": "Morning and Noon",
                "audioLang": "en-US"
            },
            {
                "id": "e9q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Akşam görüyorum\"",
                "options": [
                    "Hour",
                    "Evening",
                    "see",
                    "Noon",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Evening",
                    "see"
                ],
                "audioText": "I Evening see",
                "audioLang": "en-US"
            },
            {
                "id": "e9q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Gece\"",
                "options": [
                    "Morning",
                    "is",
                    "This",
                    "Minute",
                    "Night"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Night"
                ],
                "audioText": "This is Night",
                "audioLang": "en-US"
            },
            {
                "id": "e9q2",
                "type": "flashcard",
                "prompt": "Dakika",
                "options": [],
                "correctIndex": 0,
                "audioText": "Minute",
                "audioLang": "en-US",
                "imageOptions": [
                    "⏱️"
                ]
            },
            {
                "id": "e9q3",
                "type": "flashcard",
                "prompt": "Sabah",
                "options": [],
                "correctIndex": 0,
                "audioText": "Morning",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌅"
                ]
            },
            {
                "id": "e9q4",
                "type": "flashcard",
                "prompt": "Öğle",
                "options": [],
                "correctIndex": 0,
                "audioText": "Noon",
                "audioLang": "en-US",
                "imageOptions": [
                    "☀️"
                ]
            },
            {
                "id": "e9q5",
                "type": "flashcard",
                "prompt": "Akşam",
                "options": [],
                "correctIndex": 0,
                "audioText": "Evening",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌆"
                ]
            },
            {
                "id": "e9q6",
                "type": "flashcard",
                "prompt": "Gece",
                "options": [],
                "correctIndex": 0,
                "audioText": "Night",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌙"
                ]
            },
            {
                "id": "e9q7",
                "type": "multipleChoice",
                "prompt": "\"Hour\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Saat",
                    "Gece",
                    "Öğle",
                    "Akşam"
                ],
                "correctIndex": 0,
                "audioText": "Hour",
                "audioLang": "en-US"
            },
            {
                "id": "e9q8",
                "type": "multipleChoice",
                "prompt": "\"Minute\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Öğle",
                    "Sabah",
                    "Dakika",
                    "Gece"
                ],
                "correctIndex": 2,
                "audioText": "Minute",
                "audioLang": "en-US"
            },
            {
                "id": "e9q9",
                "type": "multipleChoice",
                "prompt": "\"Morning\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Öğle",
                    "Sabah",
                    "Saat",
                    "Dakika"
                ],
                "correctIndex": 1,
                "audioText": "Morning",
                "audioLang": "en-US"
            },
            {
                "id": "e9q10",
                "type": "translate",
                "prompt": "\"Öğle\" nasıl söylenir?",
                "options": [
                    "Evening",
                    "Morning",
                    "Hour",
                    "Noon"
                ],
                "correctIndex": 3,
                "audioText": "Noon",
                "audioLang": "en-US"
            },
            {
                "id": "e9q11",
                "type": "translate",
                "prompt": "\"Akşam\" nasıl söylenir?",
                "options": [
                    "Evening",
                    "Hour",
                    "Minute",
                    "Morning"
                ],
                "correctIndex": 0,
                "audioText": "Evening",
                "audioLang": "en-US"
            },
            {
                "id": "e9_sb_usf39",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Saat\"",
                "correctAnswer": ["Hour"],
                "options": [
                    "sen",
                    "bu",
                    "Hour",
                    "ve"
                ],
                "audioText": "Hour",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e10",
        "title": "Evcil Hayvanlar",
        "description": "Evdeki hayvanlar",
        "icon": "🐶",
        "xpReward": 20,
        "questions": [
            {
                "id": "e10q1",
                "type": "flashcard",
                "prompt": "Kedi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cat",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐱"
                ]
            },
            {
                "id": "e10q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kedi ve Köpek\"",
                "options": [
                    "Cat",
                    "Dog",
                    "Fish",
                    "and",
                    "Rabbit"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Cat",
                    "and",
                    "Dog"
                ],
                "audioText": "Cat and Dog",
                "audioLang": "en-US"
            },
            {
                "id": "e10q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kuş görüyorum\"",
                "options": [
                    "I",
                    "Cat",
                    "Bird",
                    "see",
                    "Dog"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Bird",
                    "see"
                ],
                "audioText": "I Bird see",
                "audioLang": "en-US"
            },
            {
                "id": "e10q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Balık\"",
                "options": [
                    "This",
                    "Cat",
                    "is",
                    "Fish",
                    "Dog"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Fish"
                ],
                "audioText": "This is Fish",
                "audioLang": "en-US"
            },
            {
                "id": "e10q2",
                "type": "flashcard",
                "prompt": "Köpek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Dog",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐶"
                ]
            },
            {
                "id": "e10q3",
                "type": "flashcard",
                "prompt": "Kuş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bird",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐦"
                ]
            },
            {
                "id": "e10q4",
                "type": "flashcard",
                "prompt": "Balık",
                "options": [],
                "correctIndex": 0,
                "audioText": "Fish",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐟"
                ]
            },
            {
                "id": "e10q5",
                "type": "flashcard",
                "prompt": "Tavşan",
                "options": [],
                "correctIndex": 0,
                "audioText": "Rabbit",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐰"
                ]
            },
            {
                "id": "e10q6",
                "type": "flashcard",
                "prompt": "At",
                "options": [],
                "correctIndex": 0,
                "audioText": "Horse",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐴"
                ]
            },
            {
                "id": "e10q7",
                "type": "multipleChoice",
                "prompt": "\"Cat\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Balık",
                    "Tavşan",
                    "At",
                    "Kedi"
                ],
                "correctIndex": 3,
                "audioText": "Cat",
                "audioLang": "en-US"
            },
            {
                "id": "e10q8",
                "type": "multipleChoice",
                "prompt": "\"Dog\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Köpek",
                    "Kedi",
                    "At",
                    "Kuş"
                ],
                "correctIndex": 0,
                "audioText": "Dog",
                "audioLang": "en-US"
            },
            {
                "id": "e10q9",
                "type": "multipleChoice",
                "prompt": "\"Bird\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kuş",
                    "At",
                    "Tavşan",
                    "Balık"
                ],
                "correctIndex": 0,
                "audioText": "Bird",
                "audioLang": "en-US"
            },
            {
                "id": "e10q10",
                "type": "translate",
                "prompt": "\"Balık\" nasıl söylenir?",
                "options": [
                    "Bird",
                    "Dog",
                    "Cat",
                    "Fish"
                ],
                "correctIndex": 3,
                "audioText": "Fish",
                "audioLang": "en-US"
            },
            {
                "id": "e10q11",
                "type": "translate",
                "prompt": "\"Tavşan\" nasıl söylenir?",
                "options": [
                    "Rabbit",
                    "Fish",
                    "Bird",
                    "Dog"
                ],
                "correctIndex": 0,
                "audioText": "Rabbit",
                "audioLang": "en-US"
            },
            {
                "id": "e10_sb_63ct1",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Kedi\"",
                "correctAnswer": ["Cat"],
                "options": [
                    "Cat",
                    "evet",
                    "çok"
                ],
                "audioText": "Cat",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e11",
        "title": "Vahşi Hayvanlar",
        "description": "Yabani hayvanlar",
        "icon": "🦁",
        "xpReward": 20,
        "questions": [
            {
                "id": "e11q1",
                "type": "flashcard",
                "prompt": "Aslan",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lion",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦁"
                ]
            },
            {
                "id": "e11q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Aslan ve Kaplan\"",
                "options": [
                    "Wolf",
                    "Bear",
                    "Tiger",
                    "Lion",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Lion",
                    "and",
                    "Tiger"
                ],
                "audioText": "Lion and Tiger",
                "audioLang": "en-US"
            },
            {
                "id": "e11q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Fil görüyorum\"",
                "options": [
                    "Tiger",
                    "Elephant",
                    "Lion",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Elephant",
                    "see"
                ],
                "audioText": "I Elephant see",
                "audioLang": "en-US"
            },
            {
                "id": "e11q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ayı\"",
                "options": [
                    "This",
                    "Tiger",
                    "is",
                    "Lion",
                    "Bear"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Bear"
                ],
                "audioText": "This is Bear",
                "audioLang": "en-US"
            },
            {
                "id": "e11q2",
                "type": "flashcard",
                "prompt": "Kaplan",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tiger",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐯"
                ]
            },
            {
                "id": "e11q3",
                "type": "flashcard",
                "prompt": "Fil",
                "options": [],
                "correctIndex": 0,
                "audioText": "Elephant",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐘"
                ]
            },
            {
                "id": "e11q4",
                "type": "flashcard",
                "prompt": "Ayı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bear",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐻"
                ]
            },
            {
                "id": "e11q5",
                "type": "flashcard",
                "prompt": "Kurt",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wolf",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐺"
                ]
            },
            {
                "id": "e11q6",
                "type": "flashcard",
                "prompt": "Tilki",
                "options": [],
                "correctIndex": 0,
                "audioText": "Fox",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦊"
                ]
            },
            {
                "id": "e11q7",
                "type": "multipleChoice",
                "prompt": "\"Lion\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Aslan",
                    "Ayı",
                    "Kaplan",
                    "Fil"
                ],
                "correctIndex": 0,
                "audioText": "Lion",
                "audioLang": "en-US"
            },
            {
                "id": "e11q8",
                "type": "multipleChoice",
                "prompt": "\"Tiger\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ayı",
                    "Fil",
                    "Kaplan",
                    "Tilki"
                ],
                "correctIndex": 2,
                "audioText": "Tiger",
                "audioLang": "en-US"
            },
            {
                "id": "e11q9",
                "type": "multipleChoice",
                "prompt": "\"Elephant\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Fil",
                    "Aslan",
                    "Kurt",
                    "Tilki"
                ],
                "correctIndex": 0,
                "audioText": "Elephant",
                "audioLang": "en-US"
            },
            {
                "id": "e11q10",
                "type": "translate",
                "prompt": "\"Ayı\" nasıl söylenir?",
                "options": [
                    "Lion",
                    "Tiger",
                    "Elephant",
                    "Bear"
                ],
                "correctIndex": 3,
                "audioText": "Bear",
                "audioLang": "en-US"
            },
            {
                "id": "e11q11",
                "type": "translate",
                "prompt": "\"Kurt\" nasıl söylenir?",
                "options": [
                    "Tiger",
                    "Lion",
                    "Wolf",
                    "Elephant"
                ],
                "correctIndex": 2,
                "audioText": "Wolf",
                "audioLang": "en-US"
            },
            {
                "id": "e11_sb_0ld97",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Aslan\"",
                "correctAnswer": ["Lion"],
                "options": [
                    "Lion",
                    "kim",
                    "iyi"
                ],
                "audioText": "Lion",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e12",
        "title": "Doğa",
        "description": "Doğadaki varlıklar",
        "icon": "🌳",
        "xpReward": 20,
        "questions": [
            {
                "id": "e12q1",
                "type": "flashcard",
                "prompt": "Ağaç",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tree",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌳"
                ]
            },
            {
                "id": "e12q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ağaç ve Çiçek\"",
                "options": [
                    "Mountain",
                    "and",
                    "Sea",
                    "Tree",
                    "Flower"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Tree",
                    "and",
                    "Flower"
                ],
                "audioText": "Tree and Flower",
                "audioLang": "en-US"
            },
            {
                "id": "e12q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Dağ görüyorum\"",
                "options": [
                    "Flower",
                    "River",
                    "Mountain",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Mountain",
                    "see"
                ],
                "audioText": "I Mountain see",
                "audioLang": "en-US"
            },
            {
                "id": "e12q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Deniz\"",
                "options": [
                    "Flower",
                    "Tree",
                    "This",
                    "is",
                    "Sea"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Sea"
                ],
                "audioText": "This is Sea",
                "audioLang": "en-US"
            },
            {
                "id": "e12q2",
                "type": "flashcard",
                "prompt": "Çiçek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Flower",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌸"
                ]
            },
            {
                "id": "e12q3",
                "type": "flashcard",
                "prompt": "Dağ",
                "options": [],
                "correctIndex": 0,
                "audioText": "Mountain",
                "audioLang": "en-US",
                "imageOptions": [
                    "⛰️"
                ]
            },
            {
                "id": "e12q4",
                "type": "flashcard",
                "prompt": "Deniz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sea",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌊"
                ]
            },
            {
                "id": "e12q5",
                "type": "flashcard",
                "prompt": "Nehir",
                "options": [],
                "correctIndex": 0,
                "audioText": "River",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏞️"
                ]
            },
            {
                "id": "e12q6",
                "type": "flashcard",
                "prompt": "Orman",
                "options": [],
                "correctIndex": 0,
                "audioText": "Forest",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌲"
                ]
            },
            {
                "id": "e12q7",
                "type": "multipleChoice",
                "prompt": "\"Tree\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Nehir",
                    "Ağaç",
                    "Çiçek",
                    "Orman"
                ],
                "correctIndex": 1,
                "audioText": "Tree",
                "audioLang": "en-US"
            },
            {
                "id": "e12q8",
                "type": "multipleChoice",
                "prompt": "\"Flower\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Dağ",
                    "Çiçek",
                    "Nehir",
                    "Ağaç"
                ],
                "correctIndex": 1,
                "audioText": "Flower",
                "audioLang": "en-US"
            },
            {
                "id": "e12q9",
                "type": "multipleChoice",
                "prompt": "\"Mountain\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ağaç",
                    "Deniz",
                    "Nehir",
                    "Dağ"
                ],
                "correctIndex": 3,
                "audioText": "Mountain",
                "audioLang": "en-US"
            },
            {
                "id": "e12q10",
                "type": "translate",
                "prompt": "\"Deniz\" nasıl söylenir?",
                "options": [
                    "Sea",
                    "River",
                    "Mountain",
                    "Flower"
                ],
                "correctIndex": 0,
                "audioText": "Sea",
                "audioLang": "en-US"
            },
            {
                "id": "e12q11",
                "type": "translate",
                "prompt": "\"Nehir\" nasıl söylenir?",
                "options": [
                    "Tree",
                    "Flower",
                    "River",
                    "Sea"
                ],
                "correctIndex": 2,
                "audioText": "River",
                "audioLang": "en-US"
            },
            {
                "id": "e12_sb_sybtx",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Ağaç\"",
                "correctAnswer": ["Tree"],
                "options": [
                    "Tree",
                    "evet",
                    "hayır"
                ],
                "audioText": "Tree",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e13",
        "title": "Meyveler",
        "description": "Tatlı meyveler",
        "icon": "🍎",
        "xpReward": 20,
        "questions": [
            {
                "id": "e13q1",
                "type": "flashcard",
                "prompt": "Elma",
                "options": [],
                "correctIndex": 0,
                "audioText": "Apple",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍎"
                ]
            },
            {
                "id": "e13q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Elma ve Muz\"",
                "options": [
                    "and",
                    "Apple",
                    "Strawberry",
                    "Orange",
                    "Banana"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Apple",
                    "and",
                    "Banana"
                ],
                "audioText": "Apple and Banana",
                "audioLang": "en-US"
            },
            {
                "id": "e13q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Portakal görüyorum\"",
                "options": [
                    "see",
                    "Orange",
                    "Apple",
                    "Strawberry",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Orange",
                    "see"
                ],
                "audioText": "I Orange see",
                "audioLang": "en-US"
            },
            {
                "id": "e13q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Üzüm\"",
                "options": [
                    "Banana",
                    "This",
                    "is",
                    "Pear",
                    "Grape"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Grape"
                ],
                "audioText": "This is Grape",
                "audioLang": "en-US"
            },
            {
                "id": "e13q2",
                "type": "flashcard",
                "prompt": "Muz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Banana",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍌"
                ]
            },
            {
                "id": "e13q3",
                "type": "flashcard",
                "prompt": "Portakal",
                "options": [],
                "correctIndex": 0,
                "audioText": "Orange",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍊"
                ]
            },
            {
                "id": "e13q4",
                "type": "flashcard",
                "prompt": "Üzüm",
                "options": [],
                "correctIndex": 0,
                "audioText": "Grape",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍇"
                ]
            },
            {
                "id": "e13q5",
                "type": "flashcard",
                "prompt": "Çilek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Strawberry",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍓"
                ]
            },
            {
                "id": "e13q6",
                "type": "flashcard",
                "prompt": "Armut",
                "options": [],
                "correctIndex": 0,
                "audioText": "Pear",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍐"
                ]
            },
            {
                "id": "e13q7",
                "type": "multipleChoice",
                "prompt": "\"Apple\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Portakal",
                    "Üzüm",
                    "Elma",
                    "Çilek"
                ],
                "correctIndex": 2,
                "audioText": "Apple",
                "audioLang": "en-US"
            },
            {
                "id": "e13q8",
                "type": "multipleChoice",
                "prompt": "\"Banana\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Armut",
                    "Portakal",
                    "Üzüm",
                    "Muz"
                ],
                "correctIndex": 3,
                "audioText": "Banana",
                "audioLang": "en-US"
            },
            {
                "id": "e13q9",
                "type": "multipleChoice",
                "prompt": "\"Orange\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Portakal",
                    "Muz",
                    "Çilek",
                    "Üzüm"
                ],
                "correctIndex": 0,
                "audioText": "Orange",
                "audioLang": "en-US"
            },
            {
                "id": "e13q10",
                "type": "translate",
                "prompt": "\"Üzüm\" nasıl söylenir?",
                "options": [
                    "Pear",
                    "Strawberry",
                    "Apple",
                    "Grape"
                ],
                "correctIndex": 3,
                "audioText": "Grape",
                "audioLang": "en-US"
            },
            {
                "id": "e13q11",
                "type": "translate",
                "prompt": "\"Çilek\" nasıl söylenir?",
                "options": [
                    "Grape",
                    "Pear",
                    "Banana",
                    "Strawberry"
                ],
                "correctIndex": 3,
                "audioText": "Strawberry",
                "audioLang": "en-US"
            },
            {
                "id": "e13_sb_zre75",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Elma\"",
                "correctAnswer": ["Apple"],
                "options": [
                    "iyi",
                    "Apple",
                    "bu",
                    "ne"
                ],
                "audioText": "Apple",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e14",
        "title": "Sebzeler",
        "description": "Sağlıklı sebzeler",
        "icon": "🥕",
        "xpReward": 20,
        "questions": [
            {
                "id": "e14q1",
                "type": "flashcard",
                "prompt": "Havuç",
                "options": [],
                "correctIndex": 0,
                "audioText": "Carrot",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥕"
                ]
            },
            {
                "id": "e14q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Havuç ve Domates\"",
                "options": [
                    "Carrot",
                    "and",
                    "Tomato",
                    "Garlic",
                    "Potato"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Carrot",
                    "and",
                    "Tomato"
                ],
                "audioText": "Carrot and Tomato",
                "audioLang": "en-US"
            },
            {
                "id": "e14q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Soğan görüyorum\"",
                "options": [
                    "Tomato",
                    "Carrot",
                    "I",
                    "see",
                    "Onion"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Onion",
                    "see"
                ],
                "audioText": "I Onion see",
                "audioLang": "en-US"
            },
            {
                "id": "e14q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sarımsak\"",
                "options": [
                    "is",
                    "Garlic",
                    "Tomato",
                    "This",
                    "Carrot"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Garlic"
                ],
                "audioText": "This is Garlic",
                "audioLang": "en-US"
            },
            {
                "id": "e14q2",
                "type": "flashcard",
                "prompt": "Domates",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tomato",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍅"
                ]
            },
            {
                "id": "e14q3",
                "type": "flashcard",
                "prompt": "Soğan",
                "options": [],
                "correctIndex": 0,
                "audioText": "Onion",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧅"
                ]
            },
            {
                "id": "e14q4",
                "type": "flashcard",
                "prompt": "Sarımsak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Garlic",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧄"
                ]
            },
            {
                "id": "e14q5",
                "type": "flashcard",
                "prompt": "Patates",
                "options": [],
                "correctIndex": 0,
                "audioText": "Potato",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥔"
                ]
            },
            {
                "id": "e14q6",
                "type": "flashcard",
                "prompt": "Fasulye",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bean",
                "audioLang": "en-US",
                "imageOptions": [
                    "🫘"
                ]
            },
            {
                "id": "e14q7",
                "type": "multipleChoice",
                "prompt": "\"Carrot\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Havuç",
                    "Fasulye",
                    "Sarımsak",
                    "Patates"
                ],
                "correctIndex": 0,
                "audioText": "Carrot",
                "audioLang": "en-US"
            },
            {
                "id": "e14q8",
                "type": "multipleChoice",
                "prompt": "\"Tomato\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Soğan",
                    "Patates",
                    "Domates",
                    "Sarımsak"
                ],
                "correctIndex": 2,
                "audioText": "Tomato",
                "audioLang": "en-US"
            },
            {
                "id": "e14q9",
                "type": "multipleChoice",
                "prompt": "\"Onion\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sarımsak",
                    "Domates",
                    "Havuç",
                    "Soğan"
                ],
                "correctIndex": 3,
                "audioText": "Onion",
                "audioLang": "en-US"
            },
            {
                "id": "e14q10",
                "type": "translate",
                "prompt": "\"Sarımsak\" nasıl söylenir?",
                "options": [
                    "Carrot",
                    "Potato",
                    "Garlic",
                    "Bean"
                ],
                "correctIndex": 2,
                "audioText": "Garlic",
                "audioLang": "en-US"
            },
            {
                "id": "e14q11",
                "type": "translate",
                "prompt": "\"Patates\" nasıl söylenir?",
                "options": [
                    "Potato",
                    "Onion",
                    "Tomato",
                    "Garlic"
                ],
                "correctIndex": 0,
                "audioText": "Potato",
                "audioLang": "en-US"
            },
            {
                "id": "e14_sb_0xf1n",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Havuç\"",
                "correctAnswer": ["Carrot"],
                "options": [
                    "kötü",
                    "iyi",
                    "güzel",
                    "Carrot"
                ],
                "audioText": "Carrot",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e15",
        "title": "İçecekler",
        "description": "Sıvılar ve içkiler",
        "icon": "☕",
        "xpReward": 20,
        "questions": [
            {
                "id": "e15q1",
                "type": "flashcard",
                "prompt": "Su",
                "options": [],
                "correctIndex": 0,
                "audioText": "Water",
                "audioLang": "en-US",
                "imageOptions": [
                    "💧"
                ]
            },
            {
                "id": "e15q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Su ve Çay\"",
                "options": [
                    "and",
                    "Juice",
                    "Water",
                    "Tea",
                    "Coffee"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Water",
                    "and",
                    "Tea"
                ],
                "audioText": "Water and Tea",
                "audioLang": "en-US"
            },
            {
                "id": "e15q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kahve görüyorum\"",
                "options": [
                    "Juice",
                    "Water",
                    "see",
                    "Coffee",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Coffee",
                    "see"
                ],
                "audioText": "I Coffee see",
                "audioLang": "en-US"
            },
            {
                "id": "e15q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Süt\"",
                "options": [
                    "Water",
                    "Milk",
                    "is",
                    "This",
                    "Tea"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Milk"
                ],
                "audioText": "This is Milk",
                "audioLang": "en-US"
            },
            {
                "id": "e15q2",
                "type": "flashcard",
                "prompt": "Çay",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tea",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍵"
                ]
            },
            {
                "id": "e15q3",
                "type": "flashcard",
                "prompt": "Kahve",
                "options": [],
                "correctIndex": 0,
                "audioText": "Coffee",
                "audioLang": "en-US",
                "imageOptions": [
                    "☕"
                ]
            },
            {
                "id": "e15q4",
                "type": "flashcard",
                "prompt": "Süt",
                "options": [],
                "correctIndex": 0,
                "audioText": "Milk",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥛"
                ]
            },
            {
                "id": "e15q5",
                "type": "flashcard",
                "prompt": "Meyve suyu",
                "options": [],
                "correctIndex": 0,
                "audioText": "Juice",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧃"
                ]
            },
            {
                "id": "e15q6",
                "type": "flashcard",
                "prompt": "Limonata",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lemonade",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍋"
                ]
            },
            {
                "id": "e15q7",
                "type": "multipleChoice",
                "prompt": "\"Water\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kahve",
                    "Meyve suyu",
                    "Süt",
                    "Su"
                ],
                "correctIndex": 3,
                "audioText": "Water",
                "audioLang": "en-US"
            },
            {
                "id": "e15q8",
                "type": "multipleChoice",
                "prompt": "\"Tea\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çay",
                    "Su",
                    "Limonata",
                    "Kahve"
                ],
                "correctIndex": 0,
                "audioText": "Tea",
                "audioLang": "en-US"
            },
            {
                "id": "e15q9",
                "type": "multipleChoice",
                "prompt": "\"Coffee\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kahve",
                    "Su",
                    "Çay",
                    "Süt"
                ],
                "correctIndex": 0,
                "audioText": "Coffee",
                "audioLang": "en-US"
            },
            {
                "id": "e15q10",
                "type": "translate",
                "prompt": "\"Süt\" nasıl söylenir?",
                "options": [
                    "Tea",
                    "Water",
                    "Lemonade",
                    "Milk"
                ],
                "correctIndex": 3,
                "audioText": "Milk",
                "audioLang": "en-US"
            },
            {
                "id": "e15q11",
                "type": "translate",
                "prompt": "\"Meyve suyu\" nasıl söylenir?",
                "options": [
                    "Juice",
                    "Tea",
                    "Water",
                    "Milk"
                ],
                "correctIndex": 0,
                "audioText": "Juice",
                "audioLang": "en-US"
            },
            {
                "id": "e15_sb_z64b1",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Su\"",
                "correctAnswer": ["Water"],
                "options": [
                    "Water",
                    "hayır",
                    "çok"
                ],
                "audioText": "Water",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e16",
        "title": "Odalar",
        "description": "Evdeki odalar",
        "icon": "🏠",
        "xpReward": 20,
        "questions": [
            {
                "id": "e16q1",
                "type": "flashcard",
                "prompt": "Mutfak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Kitchen",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍳"
                ]
            },
            {
                "id": "e16q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Mutfak ve Yatak odası\"",
                "options": [
                    "Bedroom",
                    "and",
                    "Kitchen",
                    "Bathroom",
                    "Garden"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Kitchen",
                    "and",
                    "Bedroom"
                ],
                "audioText": "Kitchen and Bedroom",
                "audioLang": "en-US"
            },
            {
                "id": "e16q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Banyo görüyorum\"",
                "options": [
                    "I",
                    "see",
                    "Bathroom",
                    "Bedroom",
                    "Kitchen"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Bathroom",
                    "see"
                ],
                "audioText": "I Bathroom see",
                "audioLang": "en-US"
            },
            {
                "id": "e16q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Salon\"",
                "options": [
                    "is",
                    "Bedroom",
                    "This",
                    "Basement",
                    "Living room"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Living room"
                ],
                "audioText": "This is Living room",
                "audioLang": "en-US"
            },
            {
                "id": "e16q2",
                "type": "flashcard",
                "prompt": "Yatak odası",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bedroom",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛏️"
                ]
            },
            {
                "id": "e16q3",
                "type": "flashcard",
                "prompt": "Banyo",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bathroom",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚿"
                ]
            },
            {
                "id": "e16q4",
                "type": "flashcard",
                "prompt": "Salon",
                "options": [],
                "correctIndex": 0,
                "audioText": "Living room",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛋️"
                ]
            },
            {
                "id": "e16q5",
                "type": "flashcard",
                "prompt": "Bahçe",
                "options": [],
                "correctIndex": 0,
                "audioText": "Garden",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌿"
                ]
            },
            {
                "id": "e16q6",
                "type": "flashcard",
                "prompt": "Bodrum",
                "options": [],
                "correctIndex": 0,
                "audioText": "Basement",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏚️"
                ]
            },
            {
                "id": "e16q7",
                "type": "multipleChoice",
                "prompt": "\"Kitchen\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Banyo",
                    "Mutfak",
                    "Salon",
                    "Bahçe"
                ],
                "correctIndex": 1,
                "audioText": "Kitchen",
                "audioLang": "en-US"
            },
            {
                "id": "e16q8",
                "type": "multipleChoice",
                "prompt": "\"Bedroom\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yatak odası",
                    "Mutfak",
                    "Banyo",
                    "Bodrum"
                ],
                "correctIndex": 0,
                "audioText": "Bedroom",
                "audioLang": "en-US"
            },
            {
                "id": "e16q9",
                "type": "multipleChoice",
                "prompt": "\"Bathroom\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bahçe",
                    "Mutfak",
                    "Banyo",
                    "Salon"
                ],
                "correctIndex": 2,
                "audioText": "Bathroom",
                "audioLang": "en-US"
            },
            {
                "id": "e16q10",
                "type": "translate",
                "prompt": "\"Salon\" nasıl söylenir?",
                "options": [
                    "Living room",
                    "Kitchen",
                    "Bedroom",
                    "Bathroom"
                ],
                "correctIndex": 0,
                "audioText": "Living room",
                "audioLang": "en-US"
            },
            {
                "id": "e16q11",
                "type": "translate",
                "prompt": "\"Bahçe\" nasıl söylenir?",
                "options": [
                    "Living room",
                    "Kitchen",
                    "Bedroom",
                    "Garden"
                ],
                "correctIndex": 3,
                "audioText": "Garden",
                "audioLang": "en-US"
            },
            {
                "id": "e16_sb_dw6lg",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Mutfak\"",
                "correctAnswer": ["Kitchen"],
                "options": [
                    "ben",
                    "ne",
                    "Kitchen",
                    "güzel"
                ],
                "audioText": "Kitchen",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e17",
        "title": "Mobilyalar",
        "description": "Ev mobilyaları",
        "icon": "🛋️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e17q1",
                "type": "flashcard",
                "prompt": "Sandalye",
                "options": [],
                "correctIndex": 0,
                "audioText": "Chair",
                "audioLang": "en-US",
                "imageOptions": [
                    "🪑"
                ]
            },
            {
                "id": "e17q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sandalye ve Masa\"",
                "options": [
                    "Table",
                    "Bed",
                    "and",
                    "Chair",
                    "Wardrobe"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Chair",
                    "and",
                    "Table"
                ],
                "audioText": "Chair and Table",
                "audioLang": "en-US"
            },
            {
                "id": "e17q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yatak görüyorum\"",
                "options": [
                    "Bed",
                    "see",
                    "Sofa",
                    "I",
                    "Table"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Bed",
                    "see"
                ],
                "audioText": "I Bed see",
                "audioLang": "en-US"
            },
            {
                "id": "e17q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dolap\"",
                "options": [
                    "Table",
                    "Wardrobe",
                    "is",
                    "This",
                    "Bookshelf"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Wardrobe"
                ],
                "audioText": "This is Wardrobe",
                "audioLang": "en-US"
            },
            {
                "id": "e17q2",
                "type": "flashcard",
                "prompt": "Masa",
                "options": [],
                "correctIndex": 0,
                "audioText": "Table",
                "audioLang": "en-US",
                "imageOptions": [
                    "🪞"
                ]
            },
            {
                "id": "e17q3",
                "type": "flashcard",
                "prompt": "Yatak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bed",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛏️"
                ]
            },
            {
                "id": "e17q4",
                "type": "flashcard",
                "prompt": "Dolap",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wardrobe",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗄️"
                ]
            },
            {
                "id": "e17q5",
                "type": "flashcard",
                "prompt": "Kanepe",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sofa",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛋️"
                ]
            },
            {
                "id": "e17q6",
                "type": "flashcard",
                "prompt": "Kitaplık",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bookshelf",
                "audioLang": "en-US",
                "imageOptions": [
                    "📚"
                ]
            },
            {
                "id": "e17q7",
                "type": "multipleChoice",
                "prompt": "\"Chair\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sandalye",
                    "Kanepe",
                    "Yatak",
                    "Dolap"
                ],
                "correctIndex": 0,
                "audioText": "Chair",
                "audioLang": "en-US"
            },
            {
                "id": "e17q8",
                "type": "multipleChoice",
                "prompt": "\"Table\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yatak",
                    "Kanepe",
                    "Sandalye",
                    "Masa"
                ],
                "correctIndex": 3,
                "audioText": "Table",
                "audioLang": "en-US"
            },
            {
                "id": "e17q9",
                "type": "multipleChoice",
                "prompt": "\"Bed\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yatak",
                    "Sandalye",
                    "Masa",
                    "Dolap"
                ],
                "correctIndex": 0,
                "audioText": "Bed",
                "audioLang": "en-US"
            },
            {
                "id": "e17q10",
                "type": "translate",
                "prompt": "\"Dolap\" nasıl söylenir?",
                "options": [
                    "Sofa",
                    "Bookshelf",
                    "Bed",
                    "Wardrobe"
                ],
                "correctIndex": 3,
                "audioText": "Wardrobe",
                "audioLang": "en-US"
            },
            {
                "id": "e17q11",
                "type": "translate",
                "prompt": "\"Kanepe\" nasıl söylenir?",
                "options": [
                    "Bed",
                    "Table",
                    "Chair",
                    "Sofa"
                ],
                "correctIndex": 3,
                "audioText": "Sofa",
                "audioLang": "en-US"
            },
            {
                "id": "e17_sb_ovtqt",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Sandalye\"",
                "correctAnswer": ["Chair"],
                "options": [
                    "sen",
                    "Chair",
                    "kötü"
                ],
                "audioText": "Chair",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e18",
        "title": "Mutfak Eşyaları",
        "description": "Mutfak malzemeleri",
        "icon": "🍽️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e18q1",
                "type": "flashcard",
                "prompt": "Tabak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Plate",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e18q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Tabak ve Bıçak\"",
                "options": [
                    "Spoon",
                    "Knife",
                    "Plate",
                    "Cup",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Plate",
                    "and",
                    "Knife"
                ],
                "audioText": "Plate and Knife",
                "audioLang": "en-US"
            },
            {
                "id": "e18q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kaşık görüyorum\"",
                "options": [
                    "Knife",
                    "Spoon",
                    "Plate",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Spoon",
                    "see"
                ],
                "audioText": "I Spoon see",
                "audioLang": "en-US"
            },
            {
                "id": "e18q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çatal\"",
                "options": [
                    "Pot",
                    "Fork",
                    "Plate",
                    "is",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Fork"
                ],
                "audioText": "This is Fork",
                "audioLang": "en-US"
            },
            {
                "id": "e18q2",
                "type": "flashcard",
                "prompt": "Bıçak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Knife",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔪"
                ]
            },
            {
                "id": "e18q3",
                "type": "flashcard",
                "prompt": "Kaşık",
                "options": [],
                "correctIndex": 0,
                "audioText": "Spoon",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥄"
                ]
            },
            {
                "id": "e18q4",
                "type": "flashcard",
                "prompt": "Çatal",
                "options": [],
                "correctIndex": 0,
                "audioText": "Fork",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍴"
                ]
            },
            {
                "id": "e18q5",
                "type": "flashcard",
                "prompt": "Bardak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cup",
                "audioLang": "en-US",
                "imageOptions": [
                    "☕"
                ]
            },
            {
                "id": "e18q6",
                "type": "flashcard",
                "prompt": "Tencere",
                "options": [],
                "correctIndex": 0,
                "audioText": "Pot",
                "audioLang": "en-US",
                "imageOptions": [
                    "🫕"
                ]
            },
            {
                "id": "e18q7",
                "type": "multipleChoice",
                "prompt": "\"Plate\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bıçak",
                    "Kaşık",
                    "Bardak",
                    "Tabak"
                ],
                "correctIndex": 3,
                "audioText": "Plate",
                "audioLang": "en-US"
            },
            {
                "id": "e18q8",
                "type": "multipleChoice",
                "prompt": "\"Knife\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bıçak",
                    "Çatal",
                    "Kaşık",
                    "Tabak"
                ],
                "correctIndex": 0,
                "audioText": "Knife",
                "audioLang": "en-US"
            },
            {
                "id": "e18q9",
                "type": "multipleChoice",
                "prompt": "\"Spoon\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çatal",
                    "Kaşık",
                    "Tabak",
                    "Bıçak"
                ],
                "correctIndex": 1,
                "audioText": "Spoon",
                "audioLang": "en-US"
            },
            {
                "id": "e18q10",
                "type": "translate",
                "prompt": "\"Çatal\" nasıl söylenir?",
                "options": [
                    "Fork",
                    "Knife",
                    "Plate",
                    "Pot"
                ],
                "correctIndex": 0,
                "audioText": "Fork",
                "audioLang": "en-US"
            },
            {
                "id": "e18q11",
                "type": "translate",
                "prompt": "\"Bardak\" nasıl söylenir?",
                "options": [
                    "Cup",
                    "Plate",
                    "Knife",
                    "Fork"
                ],
                "correctIndex": 0,
                "audioText": "Cup",
                "audioLang": "en-US"
            },
            {
                "id": "e18_sb_bu3sw",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Tabak\"",
                "correctAnswer": ["Plate"],
                "options": [
                    "kötü",
                    "hayır",
                    "Plate",
                    "çok"
                ],
                "audioText": "Plate",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e19",
        "title": "Vücut Bölümleri",
        "description": "Vücudun parçaları",
        "icon": "💪",
        "xpReward": 20,
        "questions": [
            {
                "id": "e19q1",
                "type": "flashcard",
                "prompt": "Baş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Head",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗣️"
                ]
            },
            {
                "id": "e19q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Baş ve Göz\"",
                "options": [
                    "and",
                    "Eye",
                    "Head",
                    "Hand",
                    "Ear"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Head",
                    "and",
                    "Eye"
                ],
                "audioText": "Head and Eye",
                "audioLang": "en-US"
            },
            {
                "id": "e19q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kulak görüyorum\"",
                "options": [
                    "Hand",
                    "see",
                    "Ear",
                    "I",
                    "Head"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Ear",
                    "see"
                ],
                "audioText": "I Ear see",
                "audioLang": "en-US"
            },
            {
                "id": "e19q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ağız\"",
                "options": [
                    "Mouth",
                    "Head",
                    "This",
                    "Leg",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Mouth"
                ],
                "audioText": "This is Mouth",
                "audioLang": "en-US"
            },
            {
                "id": "e19q2",
                "type": "flashcard",
                "prompt": "Göz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Eye",
                "audioLang": "en-US",
                "imageOptions": [
                    "👁️"
                ]
            },
            {
                "id": "e19q3",
                "type": "flashcard",
                "prompt": "Kulak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ear",
                "audioLang": "en-US",
                "imageOptions": [
                    "👂"
                ]
            },
            {
                "id": "e19q4",
                "type": "flashcard",
                "prompt": "Ağız",
                "options": [],
                "correctIndex": 0,
                "audioText": "Mouth",
                "audioLang": "en-US",
                "imageOptions": [
                    "👄"
                ]
            },
            {
                "id": "e19q5",
                "type": "flashcard",
                "prompt": "El",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hand",
                "audioLang": "en-US",
                "imageOptions": [
                    "✋"
                ]
            },
            {
                "id": "e19q6",
                "type": "flashcard",
                "prompt": "Bacak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Leg",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦵"
                ]
            },
            {
                "id": "e19q7",
                "type": "multipleChoice",
                "prompt": "\"Head\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Göz",
                    "Ağız",
                    "Baş",
                    "El"
                ],
                "correctIndex": 2,
                "audioText": "Head",
                "audioLang": "en-US"
            },
            {
                "id": "e19q8",
                "type": "multipleChoice",
                "prompt": "\"Eye\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ağız",
                    "Kulak",
                    "Göz",
                    "Bacak"
                ],
                "correctIndex": 2,
                "audioText": "Eye",
                "audioLang": "en-US"
            },
            {
                "id": "e19q9",
                "type": "multipleChoice",
                "prompt": "\"Ear\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bacak",
                    "Ağız",
                    "Kulak",
                    "El"
                ],
                "correctIndex": 2,
                "audioText": "Ear",
                "audioLang": "en-US"
            },
            {
                "id": "e19q10",
                "type": "translate",
                "prompt": "\"Ağız\" nasıl söylenir?",
                "options": [
                    "Eye",
                    "Head",
                    "Hand",
                    "Mouth"
                ],
                "correctIndex": 3,
                "audioText": "Mouth",
                "audioLang": "en-US"
            },
            {
                "id": "e19q11",
                "type": "translate",
                "prompt": "\"El\" nasıl söylenir?",
                "options": [
                    "Mouth",
                    "Hand",
                    "Head",
                    "Eye"
                ],
                "correctIndex": 1,
                "audioText": "Hand",
                "audioLang": "en-US"
            },
            {
                "id": "e19_sb_vjo4g",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Baş\"",
                "correctAnswer": ["Head"],
                "options": [
                    "çok",
                    "Head",
                    "ben",
                    "iyi"
                ],
                "audioText": "Head",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e20",
        "title": "Hastalıklar",
        "description": "Sağlık sorunları",
        "icon": "🤒",
        "xpReward": 20,
        "questions": [
            {
                "id": "e20q1",
                "type": "flashcard",
                "prompt": "Hastalık",
                "options": [],
                "correctIndex": 0,
                "audioText": "Illness",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤒"
                ]
            },
            {
                "id": "e20q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Hastalık ve Baş ağrısı\"",
                "options": [
                    "and",
                    "Cold",
                    "Cough",
                    "Headache",
                    "Illness"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Illness",
                    "and",
                    "Headache"
                ],
                "audioText": "Illness and Headache",
                "audioLang": "en-US"
            },
            {
                "id": "e20q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ateş görüyorum\"",
                "options": [
                    "Headache",
                    "Illness",
                    "Fever",
                    "see",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Fever",
                    "see"
                ],
                "audioText": "I Fever see",
                "audioLang": "en-US"
            },
            {
                "id": "e20q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Öksürük\"",
                "options": [
                    "Illness",
                    "Wound",
                    "This",
                    "is",
                    "Cough"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Cough"
                ],
                "audioText": "This is Cough",
                "audioLang": "en-US"
            },
            {
                "id": "e20q2",
                "type": "flashcard",
                "prompt": "Baş ağrısı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Headache",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤕"
                ]
            },
            {
                "id": "e20q3",
                "type": "flashcard",
                "prompt": "Ateş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Fever",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌡️"
                ]
            },
            {
                "id": "e20q4",
                "type": "flashcard",
                "prompt": "Öksürük",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cough",
                "audioLang": "en-US",
                "imageOptions": [
                    "😷"
                ]
            },
            {
                "id": "e20q5",
                "type": "flashcard",
                "prompt": "Nezle",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cold",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤧"
                ]
            },
            {
                "id": "e20q6",
                "type": "flashcard",
                "prompt": "Yara",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wound",
                "audioLang": "en-US",
                "imageOptions": [
                    "🩹"
                ]
            },
            {
                "id": "e20q7",
                "type": "multipleChoice",
                "prompt": "\"Illness\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ateş",
                    "Yara",
                    "Baş ağrısı",
                    "Hastalık"
                ],
                "correctIndex": 3,
                "audioText": "Illness",
                "audioLang": "en-US"
            },
            {
                "id": "e20q8",
                "type": "multipleChoice",
                "prompt": "\"Headache\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Baş ağrısı",
                    "Ateş",
                    "Öksürük",
                    "Yara"
                ],
                "correctIndex": 0,
                "audioText": "Headache",
                "audioLang": "en-US"
            },
            {
                "id": "e20q9",
                "type": "multipleChoice",
                "prompt": "\"Fever\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Nezle",
                    "Baş ağrısı",
                    "Ateş",
                    "Hastalık"
                ],
                "correctIndex": 2,
                "audioText": "Fever",
                "audioLang": "en-US"
            },
            {
                "id": "e20q10",
                "type": "translate",
                "prompt": "\"Öksürük\" nasıl söylenir?",
                "options": [
                    "Illness",
                    "Headache",
                    "Cough",
                    "Wound"
                ],
                "correctIndex": 2,
                "audioText": "Cough",
                "audioLang": "en-US"
            },
            {
                "id": "e20q11",
                "type": "translate",
                "prompt": "\"Nezle\" nasıl söylenir?",
                "options": [
                    "Cold",
                    "Wound",
                    "Cough",
                    "Headache"
                ],
                "correctIndex": 0,
                "audioText": "Cold",
                "audioLang": "en-US"
            },
            {
                "id": "e20_sb_sw4wa",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Hastalık\"",
                "correctAnswer": ["Illness"],
                "options": [
                    "kim",
                    "Illness",
                    "ve",
                    "evet"
                ],
                "audioText": "Illness",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e21",
        "title": "Hastanede",
        "description": "Sağlık ortamı",
        "icon": "🏥",
        "xpReward": 20,
        "questions": [
            {
                "id": "e21q1",
                "type": "flashcard",
                "prompt": "Hastane",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hospital",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏥"
                ]
            },
            {
                "id": "e21q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Hastane ve Doktor\"",
                "options": [
                    "Medicine",
                    "Nurse",
                    "Hospital",
                    "Doctor",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Hospital",
                    "and",
                    "Doctor"
                ],
                "audioText": "Hospital and Doctor",
                "audioLang": "en-US"
            },
            {
                "id": "e21q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Hemşire görüyorum\"",
                "options": [
                    "Operation",
                    "see",
                    "Doctor",
                    "I",
                    "Nurse"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Nurse",
                    "see"
                ],
                "audioText": "I Nurse see",
                "audioLang": "en-US"
            },
            {
                "id": "e21q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir İlaç\"",
                "options": [
                    "Medicine",
                    "Ambulance",
                    "This",
                    "Doctor",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Medicine"
                ],
                "audioText": "This is Medicine",
                "audioLang": "en-US"
            },
            {
                "id": "e21q2",
                "type": "flashcard",
                "prompt": "Doktor",
                "options": [],
                "correctIndex": 0,
                "audioText": "Doctor",
                "audioLang": "en-US",
                "imageOptions": [
                    "👨‍⚕️"
                ]
            },
            {
                "id": "e21q3",
                "type": "flashcard",
                "prompt": "Hemşire",
                "options": [],
                "correctIndex": 0,
                "audioText": "Nurse",
                "audioLang": "en-US",
                "imageOptions": [
                    "👩‍⚕️"
                ]
            },
            {
                "id": "e21q4",
                "type": "flashcard",
                "prompt": "İlaç",
                "options": [],
                "correctIndex": 0,
                "audioText": "Medicine",
                "audioLang": "en-US",
                "imageOptions": [
                    "💊"
                ]
            },
            {
                "id": "e21q5",
                "type": "flashcard",
                "prompt": "Ameliyat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Operation",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔬"
                ]
            },
            {
                "id": "e21q6",
                "type": "flashcard",
                "prompt": "Ambulans",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ambulance",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚑"
                ]
            },
            {
                "id": "e21q7",
                "type": "multipleChoice",
                "prompt": "\"Hospital\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ambulans",
                    "İlaç",
                    "Ameliyat",
                    "Hastane"
                ],
                "correctIndex": 3,
                "audioText": "Hospital",
                "audioLang": "en-US"
            },
            {
                "id": "e21q8",
                "type": "multipleChoice",
                "prompt": "\"Doctor\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İlaç",
                    "Ambulans",
                    "Ameliyat",
                    "Doktor"
                ],
                "correctIndex": 3,
                "audioText": "Doctor",
                "audioLang": "en-US"
            },
            {
                "id": "e21q9",
                "type": "multipleChoice",
                "prompt": "\"Nurse\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Hastane",
                    "Hemşire",
                    "Doktor",
                    "Ameliyat"
                ],
                "correctIndex": 1,
                "audioText": "Nurse",
                "audioLang": "en-US"
            },
            {
                "id": "e21q10",
                "type": "translate",
                "prompt": "\"İlaç\" nasıl söylenir?",
                "options": [
                    "Nurse",
                    "Medicine",
                    "Hospital",
                    "Doctor"
                ],
                "correctIndex": 1,
                "audioText": "Medicine",
                "audioLang": "en-US"
            },
            {
                "id": "e21q11",
                "type": "translate",
                "prompt": "\"Ameliyat\" nasıl söylenir?",
                "options": [
                    "Nurse",
                    "Operation",
                    "Ambulance",
                    "Medicine"
                ],
                "correctIndex": 1,
                "audioText": "Operation",
                "audioLang": "en-US"
            },
            {
                "id": "e21_sb_r1mh9",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Hastane\"",
                "correctAnswer": ["Hospital"],
                "options": [
                    "hayır",
                    "güzel",
                    "Hospital",
                    "ne"
                ],
                "audioText": "Hospital",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e22",
        "title": "Kıyafetler",
        "description": "Giyim türleri",
        "icon": "👕",
        "xpReward": 20,
        "questions": [
            {
                "id": "e22q1",
                "type": "flashcard",
                "prompt": "Gömlek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Shirt",
                "audioLang": "en-US",
                "imageOptions": [
                    "👕"
                ]
            },
            {
                "id": "e22q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gömlek ve Pantolon\"",
                "options": [
                    "Shirt",
                    "Jacket",
                    "Trousers",
                    "Hat",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Shirt",
                    "and",
                    "Trousers"
                ],
                "audioText": "Shirt and Trousers",
                "audioLang": "en-US"
            },
            {
                "id": "e22q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şapka görüyorum\"",
                "options": [
                    "Hat",
                    "Shirt",
                    "see",
                    "Jacket",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Hat",
                    "see"
                ],
                "audioText": "I Hat see",
                "audioLang": "en-US"
            },
            {
                "id": "e22q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ayakkabı\"",
                "options": [
                    "Shoe",
                    "Trousers",
                    "is",
                    "This",
                    "Sock"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Shoe"
                ],
                "audioText": "This is Shoe",
                "audioLang": "en-US"
            },
            {
                "id": "e22q2",
                "type": "flashcard",
                "prompt": "Pantolon",
                "options": [],
                "correctIndex": 0,
                "audioText": "Trousers",
                "audioLang": "en-US",
                "imageOptions": [
                    "👖"
                ]
            },
            {
                "id": "e22q3",
                "type": "flashcard",
                "prompt": "Şapka",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hat",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎩"
                ]
            },
            {
                "id": "e22q4",
                "type": "flashcard",
                "prompt": "Ayakkabı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Shoe",
                "audioLang": "en-US",
                "imageOptions": [
                    "👟"
                ]
            },
            {
                "id": "e22q5",
                "type": "flashcard",
                "prompt": "Ceket",
                "options": [],
                "correctIndex": 0,
                "audioText": "Jacket",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧥"
                ]
            },
            {
                "id": "e22q6",
                "type": "flashcard",
                "prompt": "Çorap",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sock",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧦"
                ]
            },
            {
                "id": "e22q7",
                "type": "multipleChoice",
                "prompt": "\"Shirt\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gömlek",
                    "Çorap",
                    "Ceket",
                    "Ayakkabı"
                ],
                "correctIndex": 0,
                "audioText": "Shirt",
                "audioLang": "en-US"
            },
            {
                "id": "e22q8",
                "type": "multipleChoice",
                "prompt": "\"Trousers\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Şapka",
                    "Pantolon",
                    "Gömlek",
                    "Ceket"
                ],
                "correctIndex": 1,
                "audioText": "Trousers",
                "audioLang": "en-US"
            },
            {
                "id": "e22q9",
                "type": "multipleChoice",
                "prompt": "\"Hat\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çorap",
                    "Ayakkabı",
                    "Ceket",
                    "Şapka"
                ],
                "correctIndex": 3,
                "audioText": "Hat",
                "audioLang": "en-US"
            },
            {
                "id": "e22q10",
                "type": "translate",
                "prompt": "\"Ayakkabı\" nasıl söylenir?",
                "options": [
                    "Sock",
                    "Shirt",
                    "Trousers",
                    "Shoe"
                ],
                "correctIndex": 3,
                "audioText": "Shoe",
                "audioLang": "en-US"
            },
            {
                "id": "e22q11",
                "type": "translate",
                "prompt": "\"Ceket\" nasıl söylenir?",
                "options": [
                    "Jacket",
                    "Shoe",
                    "Hat",
                    "Trousers"
                ],
                "correctIndex": 0,
                "audioText": "Jacket",
                "audioLang": "en-US"
            },
            {
                "id": "e22_sb_pqblq",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Gömlek\"",
                "correctAnswer": ["Shirt"],
                "options": [
                    "sen",
                    "ve",
                    "Shirt",
                    "kim"
                ],
                "audioText": "Shirt",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e23",
        "title": "Renklerle Giyim",
        "description": "Renk ve kıyafet",
        "icon": "👗",
        "xpReward": 20,
        "questions": [
            {
                "id": "e23q1",
                "type": "flashcard",
                "prompt": "Kırmızı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Red",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔴"
                ]
            },
            {
                "id": "e23q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kırmızı ve Mavi\"",
                "options": [
                    "Yellow",
                    "Blue",
                    "and",
                    "Red",
                    "Green"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Red",
                    "and",
                    "Blue"
                ],
                "audioText": "Red and Blue",
                "audioLang": "en-US"
            },
            {
                "id": "e23q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yeşil görüyorum\"",
                "options": [
                    "White",
                    "I",
                    "Green",
                    "see",
                    "Blue"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Green",
                    "see"
                ],
                "audioText": "I Green see",
                "audioLang": "en-US"
            },
            {
                "id": "e23q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sarı\"",
                "options": [
                    "is",
                    "Blue",
                    "This",
                    "Black",
                    "Yellow"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Yellow"
                ],
                "audioText": "This is Yellow",
                "audioLang": "en-US"
            },
            {
                "id": "e23q2",
                "type": "flashcard",
                "prompt": "Mavi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Blue",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔵"
                ]
            },
            {
                "id": "e23q3",
                "type": "flashcard",
                "prompt": "Yeşil",
                "options": [],
                "correctIndex": 0,
                "audioText": "Green",
                "audioLang": "en-US",
                "imageOptions": [
                    "🟢"
                ]
            },
            {
                "id": "e23q4",
                "type": "flashcard",
                "prompt": "Sarı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Yellow",
                "audioLang": "en-US",
                "imageOptions": [
                    "🟡"
                ]
            },
            {
                "id": "e23q5",
                "type": "flashcard",
                "prompt": "Beyaz",
                "options": [],
                "correctIndex": 0,
                "audioText": "White",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚪"
                ]
            },
            {
                "id": "e23q6",
                "type": "flashcard",
                "prompt": "Siyah",
                "options": [],
                "correctIndex": 0,
                "audioText": "Black",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚫"
                ]
            },
            {
                "id": "e23q7",
                "type": "multipleChoice",
                "prompt": "\"Red\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Siyah",
                    "Kırmızı",
                    "Beyaz",
                    "Mavi"
                ],
                "correctIndex": 1,
                "audioText": "Red",
                "audioLang": "en-US"
            },
            {
                "id": "e23q8",
                "type": "multipleChoice",
                "prompt": "\"Blue\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kırmızı",
                    "Mavi",
                    "Yeşil",
                    "Beyaz"
                ],
                "correctIndex": 1,
                "audioText": "Blue",
                "audioLang": "en-US"
            },
            {
                "id": "e23q9",
                "type": "multipleChoice",
                "prompt": "\"Green\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Mavi",
                    "Yeşil",
                    "Beyaz",
                    "Kırmızı"
                ],
                "correctIndex": 1,
                "audioText": "Green",
                "audioLang": "en-US"
            },
            {
                "id": "e23q10",
                "type": "translate",
                "prompt": "\"Sarı\" nasıl söylenir?",
                "options": [
                    "Green",
                    "Black",
                    "Yellow",
                    "Red"
                ],
                "correctIndex": 2,
                "audioText": "Yellow",
                "audioLang": "en-US"
            },
            {
                "id": "e23q11",
                "type": "translate",
                "prompt": "\"Beyaz\" nasıl söylenir?",
                "options": [
                    "Red",
                    "Black",
                    "Yellow",
                    "White"
                ],
                "correctIndex": 3,
                "audioText": "White",
                "audioLang": "en-US"
            },
            {
                "id": "e23_sb_sggqr",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Kırmızı\"",
                "correctAnswer": ["Red"],
                "options": [
                    "sen",
                    "kim",
                    "evet",
                    "Red"
                ],
                "audioText": "Red",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e24",
        "title": "Pazarda",
        "description": "Alışveriş kelimeleri",
        "icon": "🛍️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e24q1",
                "type": "flashcard",
                "prompt": "Pazar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Market",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛒"
                ]
            },
            {
                "id": "e24q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pazar ve Fiyat\"",
                "options": [
                    "Price",
                    "Cheap",
                    "Buy",
                    "and",
                    "Market"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Market",
                    "and",
                    "Price"
                ],
                "audioText": "Market and Price",
                "audioLang": "en-US"
            },
            {
                "id": "e24q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ucuz görüyorum\"",
                "options": [
                    "Cheap",
                    "Buy",
                    "I",
                    "Market",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Cheap",
                    "see"
                ],
                "audioText": "I Cheap see",
                "audioLang": "en-US"
            },
            {
                "id": "e24q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Pahalı\"",
                "options": [
                    "Price",
                    "is",
                    "Sell",
                    "Expensive",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Expensive"
                ],
                "audioText": "This is Expensive",
                "audioLang": "en-US"
            },
            {
                "id": "e24q2",
                "type": "flashcard",
                "prompt": "Fiyat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Price",
                "audioLang": "en-US",
                "imageOptions": [
                    "💰"
                ]
            },
            {
                "id": "e24q3",
                "type": "flashcard",
                "prompt": "Ucuz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cheap",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏷️"
                ]
            },
            {
                "id": "e24q4",
                "type": "flashcard",
                "prompt": "Pahalı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Expensive",
                "audioLang": "en-US",
                "imageOptions": [
                    "💸"
                ]
            },
            {
                "id": "e24q5",
                "type": "flashcard",
                "prompt": "Satın almak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Buy",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛍️"
                ]
            },
            {
                "id": "e24q6",
                "type": "flashcard",
                "prompt": "Satmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sell",
                "audioLang": "en-US",
                "imageOptions": [
                    "💼"
                ]
            },
            {
                "id": "e24q7",
                "type": "multipleChoice",
                "prompt": "\"Market\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Satın almak",
                    "Ucuz",
                    "Fiyat",
                    "Pazar"
                ],
                "correctIndex": 3,
                "audioText": "Market",
                "audioLang": "en-US"
            },
            {
                "id": "e24q8",
                "type": "multipleChoice",
                "prompt": "\"Price\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Satın almak",
                    "Pazar",
                    "Fiyat",
                    "Pahalı"
                ],
                "correctIndex": 2,
                "audioText": "Price",
                "audioLang": "en-US"
            },
            {
                "id": "e24q9",
                "type": "multipleChoice",
                "prompt": "\"Cheap\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Fiyat",
                    "Ucuz",
                    "Satın almak",
                    "Pazar"
                ],
                "correctIndex": 1,
                "audioText": "Cheap",
                "audioLang": "en-US"
            },
            {
                "id": "e24q10",
                "type": "translate",
                "prompt": "\"Pahalı\" nasıl söylenir?",
                "options": [
                    "Expensive",
                    "Market",
                    "Sell",
                    "Price"
                ],
                "correctIndex": 0,
                "audioText": "Expensive",
                "audioLang": "en-US"
            },
            {
                "id": "e24q11",
                "type": "translate",
                "prompt": "\"Satın almak\" nasıl söylenir?",
                "options": [
                    "Price",
                    "Expensive",
                    "Market",
                    "Buy"
                ],
                "correctIndex": 3,
                "audioText": "Buy",
                "audioLang": "en-US"
            },
            {
                "id": "e24_sb_rcdjk",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Pazar\"",
                "correctAnswer": ["Market"],
                "options": [
                    "kim",
                    "Market",
                    "iyi"
                ],
                "audioText": "Market",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e25",
        "title": "Meslekler 1",
        "description": "Temel meslekler",
        "icon": "👨‍⚕️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e25q1",
                "type": "flashcard",
                "prompt": "Doktor",
                "options": [],
                "correctIndex": 0,
                "audioText": "Doctor",
                "audioLang": "en-US",
                "imageOptions": [
                    "👨‍⚕️"
                ]
            },
            {
                "id": "e25q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Doktor ve Öğretmen\"",
                "options": [
                    "Doctor",
                    "Driver",
                    "and",
                    "Teacher",
                    "Engineer"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Doctor",
                    "and",
                    "Teacher"
                ],
                "audioText": "Doctor and Teacher",
                "audioLang": "en-US"
            },
            {
                "id": "e25q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şoför görüyorum\"",
                "options": [
                    "Driver",
                    "I",
                    "Doctor",
                    "Teacher",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Driver",
                    "see"
                ],
                "audioText": "I Driver see",
                "audioLang": "en-US"
            },
            {
                "id": "e25q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çiftçi\"",
                "options": [
                    "Lawyer",
                    "is",
                    "This",
                    "Teacher",
                    "Farmer"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Farmer"
                ],
                "audioText": "This is Farmer",
                "audioLang": "en-US"
            },
            {
                "id": "e25q2",
                "type": "flashcard",
                "prompt": "Öğretmen",
                "options": [],
                "correctIndex": 0,
                "audioText": "Teacher",
                "audioLang": "en-US",
                "imageOptions": [
                    "👩‍🏫"
                ]
            },
            {
                "id": "e25q3",
                "type": "flashcard",
                "prompt": "Şoför",
                "options": [],
                "correctIndex": 0,
                "audioText": "Driver",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚘"
                ]
            },
            {
                "id": "e25q4",
                "type": "flashcard",
                "prompt": "Çiftçi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Farmer",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧑‍🌾"
                ]
            },
            {
                "id": "e25q5",
                "type": "flashcard",
                "prompt": "Mühendis",
                "options": [],
                "correctIndex": 0,
                "audioText": "Engineer",
                "audioLang": "en-US",
                "imageOptions": [
                    "👷"
                ]
            },
            {
                "id": "e25q6",
                "type": "flashcard",
                "prompt": "Avukat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lawyer",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚖️"
                ]
            },
            {
                "id": "e25q7",
                "type": "multipleChoice",
                "prompt": "\"Doctor\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Şoför",
                    "Doktor",
                    "Avukat",
                    "Öğretmen"
                ],
                "correctIndex": 1,
                "audioText": "Doctor",
                "audioLang": "en-US"
            },
            {
                "id": "e25q8",
                "type": "multipleChoice",
                "prompt": "\"Teacher\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Doktor",
                    "Öğretmen",
                    "Mühendis",
                    "Avukat"
                ],
                "correctIndex": 1,
                "audioText": "Teacher",
                "audioLang": "en-US"
            },
            {
                "id": "e25q9",
                "type": "multipleChoice",
                "prompt": "\"Driver\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Şoför",
                    "Çiftçi",
                    "Doktor",
                    "Öğretmen"
                ],
                "correctIndex": 0,
                "audioText": "Driver",
                "audioLang": "en-US"
            },
            {
                "id": "e25q10",
                "type": "translate",
                "prompt": "\"Çiftçi\" nasıl söylenir?",
                "options": [
                    "Farmer",
                    "Teacher",
                    "Driver",
                    "Doctor"
                ],
                "correctIndex": 0,
                "audioText": "Farmer",
                "audioLang": "en-US"
            },
            {
                "id": "e25q11",
                "type": "translate",
                "prompt": "\"Mühendis\" nasıl söylenir?",
                "options": [
                    "Engineer",
                    "Teacher",
                    "Driver",
                    "Doctor"
                ],
                "correctIndex": 0,
                "audioText": "Engineer",
                "audioLang": "en-US"
            },
            {
                "id": "e25_sb_ak3wx",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Doktor\"",
                "correctAnswer": ["Doctor"],
                "options": [
                    "sen",
                    "Doctor"
                ],
                "audioText": "Doctor",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e26",
        "title": "Meslekler 2",
        "description": "İleri meslekler",
        "icon": "👩‍🏫",
        "xpReward": 20,
        "questions": [
            {
                "id": "e26q1",
                "type": "flashcard",
                "prompt": "Yazar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Writer",
                "audioLang": "en-US",
                "imageOptions": [
                    "✍️"
                ]
            },
            {
                "id": "e26q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yazar ve Sanatçı\"",
                "options": [
                    "Soldier",
                    "Writer",
                    "Architect",
                    "and",
                    "Artist"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Writer",
                    "and",
                    "Artist"
                ],
                "audioText": "Writer and Artist",
                "audioLang": "en-US"
            },
            {
                "id": "e26q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Mimar görüyorum\"",
                "options": [
                    "see",
                    "Architect",
                    "Artist",
                    "Writer",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Architect",
                    "see"
                ],
                "audioText": "I Architect see",
                "audioLang": "en-US"
            },
            {
                "id": "e26q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Polis\"",
                "options": [
                    "Chef",
                    "This",
                    "is",
                    "Writer",
                    "Police"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Police"
                ],
                "audioText": "This is Police",
                "audioLang": "en-US"
            },
            {
                "id": "e26q2",
                "type": "flashcard",
                "prompt": "Sanatçı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Artist",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎨"
                ]
            },
            {
                "id": "e26q3",
                "type": "flashcard",
                "prompt": "Mimar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Architect",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏛️"
                ]
            },
            {
                "id": "e26q4",
                "type": "flashcard",
                "prompt": "Polis",
                "options": [],
                "correctIndex": 0,
                "audioText": "Police",
                "audioLang": "en-US",
                "imageOptions": [
                    "👮"
                ]
            },
            {
                "id": "e26q5",
                "type": "flashcard",
                "prompt": "Asker",
                "options": [],
                "correctIndex": 0,
                "audioText": "Soldier",
                "audioLang": "en-US",
                "imageOptions": [
                    "💂"
                ]
            },
            {
                "id": "e26q6",
                "type": "flashcard",
                "prompt": "Aşçı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Chef",
                "audioLang": "en-US",
                "imageOptions": [
                    "👨‍🍳"
                ]
            },
            {
                "id": "e26q7",
                "type": "multipleChoice",
                "prompt": "\"Writer\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yazar",
                    "Sanatçı",
                    "Mimar",
                    "Polis"
                ],
                "correctIndex": 0,
                "audioText": "Writer",
                "audioLang": "en-US"
            },
            {
                "id": "e26q8",
                "type": "multipleChoice",
                "prompt": "\"Artist\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Mimar",
                    "Yazar",
                    "Sanatçı",
                    "Aşçı"
                ],
                "correctIndex": 2,
                "audioText": "Artist",
                "audioLang": "en-US"
            },
            {
                "id": "e26q9",
                "type": "multipleChoice",
                "prompt": "\"Architect\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yazar",
                    "Mimar",
                    "Polis",
                    "Sanatçı"
                ],
                "correctIndex": 1,
                "audioText": "Architect",
                "audioLang": "en-US"
            },
            {
                "id": "e26q10",
                "type": "translate",
                "prompt": "\"Polis\" nasıl söylenir?",
                "options": [
                    "Architect",
                    "Soldier",
                    "Chef",
                    "Police"
                ],
                "correctIndex": 3,
                "audioText": "Police",
                "audioLang": "en-US"
            },
            {
                "id": "e26q11",
                "type": "translate",
                "prompt": "\"Asker\" nasıl söylenir?",
                "options": [
                    "Chef",
                    "Architect",
                    "Police",
                    "Soldier"
                ],
                "correctIndex": 3,
                "audioText": "Soldier",
                "audioLang": "en-US"
            },
            {
                "id": "e26_sb_bwhzh",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Yazar\"",
                "correctAnswer": ["Writer"],
                "options": [
                    "Writer",
                    "ne",
                    "kim",
                    "kötü"
                ],
                "audioText": "Writer",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e27",
        "title": "İş Yerinde",
        "description": "Ofis ve iş hayatı",
        "icon": "🏢",
        "xpReward": 20,
        "questions": [
            {
                "id": "e27q1",
                "type": "flashcard",
                "prompt": "Ofis",
                "options": [],
                "correctIndex": 0,
                "audioText": "Office",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏢"
                ]
            },
            {
                "id": "e27q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ofis ve Toplantı\"",
                "options": [
                    "Meeting",
                    "Salary",
                    "Presentation",
                    "and",
                    "Office"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Office",
                    "and",
                    "Meeting"
                ],
                "audioText": "Office and Meeting",
                "audioLang": "en-US"
            },
            {
                "id": "e27q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Proje görüyorum\"",
                "options": [
                    "Office",
                    "Project",
                    "Salary",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Project",
                    "see"
                ],
                "audioText": "I Project see",
                "audioLang": "en-US"
            },
            {
                "id": "e27q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sunum\"",
                "options": [
                    "Work",
                    "Presentation",
                    "is",
                    "Office",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Presentation"
                ],
                "audioText": "This is Presentation",
                "audioLang": "en-US"
            },
            {
                "id": "e27q2",
                "type": "flashcard",
                "prompt": "Toplantı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Meeting",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤝"
                ]
            },
            {
                "id": "e27q3",
                "type": "flashcard",
                "prompt": "Proje",
                "options": [],
                "correctIndex": 0,
                "audioText": "Project",
                "audioLang": "en-US",
                "imageOptions": [
                    "📋"
                ]
            },
            {
                "id": "e27q4",
                "type": "flashcard",
                "prompt": "Sunum",
                "options": [],
                "correctIndex": 0,
                "audioText": "Presentation",
                "audioLang": "en-US",
                "imageOptions": [
                    "📊"
                ]
            },
            {
                "id": "e27q5",
                "type": "flashcard",
                "prompt": "Maaş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Salary",
                "audioLang": "en-US",
                "imageOptions": [
                    "💵"
                ]
            },
            {
                "id": "e27q6",
                "type": "flashcard",
                "prompt": "İş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Work",
                "audioLang": "en-US",
                "imageOptions": [
                    "💼"
                ]
            },
            {
                "id": "e27q7",
                "type": "multipleChoice",
                "prompt": "\"Office\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İş",
                    "Toplantı",
                    "Maaş",
                    "Ofis"
                ],
                "correctIndex": 3,
                "audioText": "Office",
                "audioLang": "en-US"
            },
            {
                "id": "e27q8",
                "type": "multipleChoice",
                "prompt": "\"Meeting\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Toplantı",
                    "Maaş",
                    "Sunum",
                    "Proje"
                ],
                "correctIndex": 0,
                "audioText": "Meeting",
                "audioLang": "en-US"
            },
            {
                "id": "e27q9",
                "type": "multipleChoice",
                "prompt": "\"Project\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sunum",
                    "Proje",
                    "Ofis",
                    "Toplantı"
                ],
                "correctIndex": 1,
                "audioText": "Project",
                "audioLang": "en-US"
            },
            {
                "id": "e27q10",
                "type": "translate",
                "prompt": "\"Sunum\" nasıl söylenir?",
                "options": [
                    "Meeting",
                    "Office",
                    "Salary",
                    "Presentation"
                ],
                "correctIndex": 3,
                "audioText": "Presentation",
                "audioLang": "en-US"
            },
            {
                "id": "e27q11",
                "type": "translate",
                "prompt": "\"Maaş\" nasıl söylenir?",
                "options": [
                    "Work",
                    "Office",
                    "Salary",
                    "Presentation"
                ],
                "correctIndex": 2,
                "audioText": "Salary",
                "audioLang": "en-US"
            },
            {
                "id": "e27_sb_kmfwj",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Ofis\"",
                "correctAnswer": ["Office"],
                "options": [
                    "kim",
                    "çok",
                    "kötü",
                    "Office"
                ],
                "audioText": "Office",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e28",
        "title": "Mekanlar",
        "description": "Şehirdeki yerler",
        "icon": "🏙️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e28q1",
                "type": "flashcard",
                "prompt": "Okul",
                "options": [],
                "correctIndex": 0,
                "audioText": "School",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏫"
                ]
            },
            {
                "id": "e28q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Okul ve Hastane\"",
                "options": [
                    "and",
                    "Supermarket",
                    "Restaurant",
                    "Hospital",
                    "School"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "School",
                    "and",
                    "Hospital"
                ],
                "audioText": "School and Hospital",
                "audioLang": "en-US"
            },
            {
                "id": "e28q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Otel görüyorum\"",
                "options": [
                    "Hotel",
                    "see",
                    "I",
                    "Supermarket",
                    "Hospital"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Hotel",
                    "see"
                ],
                "audioText": "I Hotel see",
                "audioLang": "en-US"
            },
            {
                "id": "e28q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Restoran\"",
                "options": [
                    "This",
                    "Library",
                    "School",
                    "is",
                    "Restaurant"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Restaurant"
                ],
                "audioText": "This is Restaurant",
                "audioLang": "en-US"
            },
            {
                "id": "e28q2",
                "type": "flashcard",
                "prompt": "Hastane",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hospital",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏥"
                ]
            },
            {
                "id": "e28q3",
                "type": "flashcard",
                "prompt": "Otel",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hotel",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏨"
                ]
            },
            {
                "id": "e28q4",
                "type": "flashcard",
                "prompt": "Restoran",
                "options": [],
                "correctIndex": 0,
                "audioText": "Restaurant",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e28q5",
                "type": "flashcard",
                "prompt": "Market",
                "options": [],
                "correctIndex": 0,
                "audioText": "Supermarket",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛒"
                ]
            },
            {
                "id": "e28q6",
                "type": "flashcard",
                "prompt": "Kütüphane",
                "options": [],
                "correctIndex": 0,
                "audioText": "Library",
                "audioLang": "en-US",
                "imageOptions": [
                    "📚"
                ]
            },
            {
                "id": "e28q7",
                "type": "multipleChoice",
                "prompt": "\"School\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Okul",
                    "Market",
                    "Kütüphane",
                    "Restoran"
                ],
                "correctIndex": 0,
                "audioText": "School",
                "audioLang": "en-US"
            },
            {
                "id": "e28q8",
                "type": "multipleChoice",
                "prompt": "\"Hospital\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kütüphane",
                    "Restoran",
                    "Market",
                    "Hastane"
                ],
                "correctIndex": 3,
                "audioText": "Hospital",
                "audioLang": "en-US"
            },
            {
                "id": "e28q9",
                "type": "multipleChoice",
                "prompt": "\"Hotel\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Market",
                    "Restoran",
                    "Otel",
                    "Kütüphane"
                ],
                "correctIndex": 2,
                "audioText": "Hotel",
                "audioLang": "en-US"
            },
            {
                "id": "e28q10",
                "type": "translate",
                "prompt": "\"Restoran\" nasıl söylenir?",
                "options": [
                    "Hotel",
                    "Hospital",
                    "Supermarket",
                    "Restaurant"
                ],
                "correctIndex": 3,
                "audioText": "Restaurant",
                "audioLang": "en-US"
            },
            {
                "id": "e28q11",
                "type": "translate",
                "prompt": "\"Market\" nasıl söylenir?",
                "options": [
                    "School",
                    "Restaurant",
                    "Supermarket",
                    "Hotel"
                ],
                "correctIndex": 2,
                "audioText": "Supermarket",
                "audioLang": "en-US"
            },
            {
                "id": "e28_sb_paqjn",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Okul\"",
                "correctAnswer": ["School"],
                "options": [
                    "hayır",
                    "School",
                    "iyi"
                ],
                "audioText": "School",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e29",
        "title": "Taşıtlar",
        "description": "Ulaşım araçları",
        "icon": "🚗",
        "xpReward": 20,
        "questions": [
            {
                "id": "e29q1",
                "type": "flashcard",
                "prompt": "Araba",
                "options": [],
                "correctIndex": 0,
                "audioText": "Car",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚗"
                ]
            },
            {
                "id": "e29q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Araba ve Otobüs\"",
                "options": [
                    "Airplane",
                    "Train",
                    "Bus",
                    "and",
                    "Car"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Car",
                    "and",
                    "Bus"
                ],
                "audioText": "Car and Bus",
                "audioLang": "en-US"
            },
            {
                "id": "e29q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tren görüyorum\"",
                "options": [
                    "I",
                    "Bicycle",
                    "Train",
                    "see",
                    "Bus"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Train",
                    "see"
                ],
                "audioText": "I Train see",
                "audioLang": "en-US"
            },
            {
                "id": "e29q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Uçak\"",
                "options": [
                    "This",
                    "Car",
                    "Bus",
                    "is",
                    "Airplane"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Airplane"
                ],
                "audioText": "This is Airplane",
                "audioLang": "en-US"
            },
            {
                "id": "e29q2",
                "type": "flashcard",
                "prompt": "Otobüs",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bus",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚌"
                ]
            },
            {
                "id": "e29q3",
                "type": "flashcard",
                "prompt": "Tren",
                "options": [],
                "correctIndex": 0,
                "audioText": "Train",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚂"
                ]
            },
            {
                "id": "e29q4",
                "type": "flashcard",
                "prompt": "Uçak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Airplane",
                "audioLang": "en-US",
                "imageOptions": [
                    "✈️"
                ]
            },
            {
                "id": "e29q5",
                "type": "flashcard",
                "prompt": "Bisiklet",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bicycle",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚲"
                ]
            },
            {
                "id": "e29q6",
                "type": "flashcard",
                "prompt": "Gemi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ship",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚢"
                ]
            },
            {
                "id": "e29q7",
                "type": "multipleChoice",
                "prompt": "\"Car\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gemi",
                    "Bisiklet",
                    "Araba",
                    "Otobüs"
                ],
                "correctIndex": 2,
                "audioText": "Car",
                "audioLang": "en-US"
            },
            {
                "id": "e29q8",
                "type": "multipleChoice",
                "prompt": "\"Bus\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Otobüs",
                    "Bisiklet",
                    "Gemi",
                    "Uçak"
                ],
                "correctIndex": 0,
                "audioText": "Bus",
                "audioLang": "en-US"
            },
            {
                "id": "e29q9",
                "type": "multipleChoice",
                "prompt": "\"Train\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Araba",
                    "Bisiklet",
                    "Tren",
                    "Otobüs"
                ],
                "correctIndex": 2,
                "audioText": "Train",
                "audioLang": "en-US"
            },
            {
                "id": "e29q10",
                "type": "translate",
                "prompt": "\"Uçak\" nasıl söylenir?",
                "options": [
                    "Bus",
                    "Train",
                    "Bicycle",
                    "Airplane"
                ],
                "correctIndex": 3,
                "audioText": "Airplane",
                "audioLang": "en-US"
            },
            {
                "id": "e29q11",
                "type": "translate",
                "prompt": "\"Bisiklet\" nasıl söylenir?",
                "options": [
                    "Train",
                    "Bicycle",
                    "Ship",
                    "Airplane"
                ],
                "correctIndex": 1,
                "audioText": "Bicycle",
                "audioLang": "en-US"
            },
            {
                "id": "e29_sb_60m3j",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Araba\"",
                "correctAnswer": ["Car"],
                "options": [
                    "kötü",
                    "Car",
                    "iyi",
                    "ve"
                ],
                "audioText": "Car",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e30",
        "title": "Yön Sorma",
        "description": "Yol tarifi ver",
        "icon": "🗺️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e30q1",
                "type": "flashcard",
                "prompt": "Sol",
                "options": [],
                "correctIndex": 0,
                "audioText": "Left",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬅️"
                ]
            },
            {
                "id": "e30q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Sol ve Sağ\"",
                "options": [
                    "and",
                    "Right",
                    "Left",
                    "Straight",
                    "Near"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Left",
                    "and",
                    "Right"
                ],
                "audioText": "Left and Right",
                "audioLang": "en-US"
            },
            {
                "id": "e30q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Düz görüyorum\"",
                "options": [
                    "Straight",
                    "Far",
                    "I",
                    "Right",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Straight",
                    "see"
                ],
                "audioText": "I Straight see",
                "audioLang": "en-US"
            },
            {
                "id": "e30q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yakın\"",
                "options": [
                    "Near",
                    "Turn",
                    "Left",
                    "is",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Near"
                ],
                "audioText": "This is Near",
                "audioLang": "en-US"
            },
            {
                "id": "e30q2",
                "type": "flashcard",
                "prompt": "Sağ",
                "options": [],
                "correctIndex": 0,
                "audioText": "Right",
                "audioLang": "en-US",
                "imageOptions": [
                    "➡️"
                ]
            },
            {
                "id": "e30q3",
                "type": "flashcard",
                "prompt": "Düz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Straight",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬆️"
                ]
            },
            {
                "id": "e30q4",
                "type": "flashcard",
                "prompt": "Yakın",
                "options": [],
                "correctIndex": 0,
                "audioText": "Near",
                "audioLang": "en-US",
                "imageOptions": [
                    "📍"
                ]
            },
            {
                "id": "e30q5",
                "type": "flashcard",
                "prompt": "Uzak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Far",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗺️"
                ]
            },
            {
                "id": "e30q6",
                "type": "flashcard",
                "prompt": "Dönmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Turn",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔄"
                ]
            },
            {
                "id": "e30q7",
                "type": "multipleChoice",
                "prompt": "\"Left\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Dönmek",
                    "Sol",
                    "Uzak",
                    "Yakın"
                ],
                "correctIndex": 1,
                "audioText": "Left",
                "audioLang": "en-US"
            },
            {
                "id": "e30q8",
                "type": "multipleChoice",
                "prompt": "\"Right\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sağ",
                    "Sol",
                    "Düz",
                    "Yakın"
                ],
                "correctIndex": 0,
                "audioText": "Right",
                "audioLang": "en-US"
            },
            {
                "id": "e30q9",
                "type": "multipleChoice",
                "prompt": "\"Straight\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Düz",
                    "Dönmek",
                    "Uzak",
                    "Yakın"
                ],
                "correctIndex": 0,
                "audioText": "Straight",
                "audioLang": "en-US"
            },
            {
                "id": "e30q10",
                "type": "translate",
                "prompt": "\"Yakın\" nasıl söylenir?",
                "options": [
                    "Near",
                    "Turn",
                    "Left",
                    "Far"
                ],
                "correctIndex": 0,
                "audioText": "Near",
                "audioLang": "en-US"
            },
            {
                "id": "e30q11",
                "type": "translate",
                "prompt": "\"Uzak\" nasıl söylenir?",
                "options": [
                    "Straight",
                    "Near",
                    "Far",
                    "Right"
                ],
                "correctIndex": 2,
                "audioText": "Far",
                "audioLang": "en-US"
            },
            {
                "id": "e30_sb_rwxet",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Sol\"",
                "correctAnswer": ["Left"],
                "options": [
                    "ne",
                    "iyi",
                    "Left"
                ],
                "audioText": "Left",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e31",
        "title": "Sabah Rutini",
        "description": "Sabah aktiviteleri",
        "icon": "🌅",
        "xpReward": 20,
        "questions": [
            {
                "id": "e31q1",
                "type": "flashcard",
                "prompt": "Uyanmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wake up",
                "audioLang": "en-US",
                "imageOptions": [
                    "⏰"
                ]
            },
            {
                "id": "e31q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Uyanmak ve Yıkanmak\"",
                "options": [
                    "Wash",
                    "Get dressed",
                    "and",
                    "Wake up",
                    "Breakfast"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Wake up",
                    "and",
                    "Wash"
                ],
                "audioText": "Wake up and Wash",
                "audioLang": "en-US"
            },
            {
                "id": "e31q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Giyinmek görüyorum\"",
                "options": [
                    "see",
                    "Wake up",
                    "Get dressed",
                    "I",
                    "Wash"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Get dressed",
                    "see"
                ],
                "audioText": "I Get dressed see",
                "audioLang": "en-US"
            },
            {
                "id": "e31q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kahvaltı\"",
                "options": [
                    "This",
                    "Walk around",
                    "Breakfast",
                    "Wake up",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Breakfast"
                ],
                "audioText": "This is Breakfast",
                "audioLang": "en-US"
            },
            {
                "id": "e31q2",
                "type": "flashcard",
                "prompt": "Yıkanmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wash",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚿"
                ]
            },
            {
                "id": "e31q3",
                "type": "flashcard",
                "prompt": "Giyinmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Get dressed",
                "audioLang": "en-US",
                "imageOptions": [
                    "👕"
                ]
            },
            {
                "id": "e31q4",
                "type": "flashcard",
                "prompt": "Kahvaltı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Breakfast",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍳"
                ]
            },
            {
                "id": "e31q5",
                "type": "flashcard",
                "prompt": "Çıkmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Go out",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚪"
                ]
            },
            {
                "id": "e31q6",
                "type": "flashcard",
                "prompt": "Gezmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Walk around",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶"
                ]
            },
            {
                "id": "e31q7",
                "type": "multipleChoice",
                "prompt": "\"Wake up\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çıkmak",
                    "Gezmek",
                    "Kahvaltı",
                    "Uyanmak"
                ],
                "correctIndex": 3,
                "audioText": "Wake up",
                "audioLang": "en-US"
            },
            {
                "id": "e31q8",
                "type": "multipleChoice",
                "prompt": "\"Wash\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Giyinmek",
                    "Kahvaltı",
                    "Yıkanmak",
                    "Uyanmak"
                ],
                "correctIndex": 2,
                "audioText": "Wash",
                "audioLang": "en-US"
            },
            {
                "id": "e31q9",
                "type": "multipleChoice",
                "prompt": "\"Get dressed\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Uyanmak",
                    "Giyinmek",
                    "Gezmek",
                    "Çıkmak"
                ],
                "correctIndex": 1,
                "audioText": "Get dressed",
                "audioLang": "en-US"
            },
            {
                "id": "e31q10",
                "type": "translate",
                "prompt": "\"Kahvaltı\" nasıl söylenir?",
                "options": [
                    "Wash",
                    "Go out",
                    "Get dressed",
                    "Breakfast"
                ],
                "correctIndex": 3,
                "audioText": "Breakfast",
                "audioLang": "en-US"
            },
            {
                "id": "e31q11",
                "type": "translate",
                "prompt": "\"Çıkmak\" nasıl söylenir?",
                "options": [
                    "Get dressed",
                    "Wash",
                    "Go out",
                    "Breakfast"
                ],
                "correctIndex": 2,
                "audioText": "Go out",
                "audioLang": "en-US"
            },
            {
                "id": "e31_sb_zakc8",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Uyanmak\"",
                "correctAnswer": ["Wake", "up"],
                "options": [
                    "up",
                    "Wake",
                    "çok",
                    "güzel"
                ],
                "audioText": "Wake up",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e32",
        "title": "İş ve Okul",
        "description": "Okul kelimeleri",
        "icon": "🏫",
        "xpReward": 20,
        "questions": [
            {
                "id": "e32q1",
                "type": "flashcard",
                "prompt": "Ders",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lesson",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e32q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ders ve Kitap\"",
                "options": [
                    "and",
                    "Student",
                    "Notebook",
                    "Lesson",
                    "Book"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Lesson",
                    "and",
                    "Book"
                ],
                "audioText": "Lesson and Book",
                "audioLang": "en-US"
            },
            {
                "id": "e32q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Defter görüyorum\"",
                "options": [
                    "Book",
                    "Lesson",
                    "Notebook",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Notebook",
                    "see"
                ],
                "audioText": "I Notebook see",
                "audioLang": "en-US"
            },
            {
                "id": "e32q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Öğrenci\"",
                "options": [
                    "Student",
                    "Lesson",
                    "This",
                    "is",
                    "Book"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Student"
                ],
                "audioText": "This is Student",
                "audioLang": "en-US"
            },
            {
                "id": "e32q2",
                "type": "flashcard",
                "prompt": "Kitap",
                "options": [],
                "correctIndex": 0,
                "audioText": "Book",
                "audioLang": "en-US",
                "imageOptions": [
                    "📚"
                ]
            },
            {
                "id": "e32q3",
                "type": "flashcard",
                "prompt": "Defter",
                "options": [],
                "correctIndex": 0,
                "audioText": "Notebook",
                "audioLang": "en-US",
                "imageOptions": [
                    "📓"
                ]
            },
            {
                "id": "e32q4",
                "type": "flashcard",
                "prompt": "Öğrenci",
                "options": [],
                "correctIndex": 0,
                "audioText": "Student",
                "audioLang": "en-US",
                "imageOptions": [
                    "👨‍🎓"
                ]
            },
            {
                "id": "e32q5",
                "type": "flashcard",
                "prompt": "Sınıf",
                "options": [],
                "correctIndex": 0,
                "audioText": "Classroom",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏫"
                ]
            },
            {
                "id": "e32q6",
                "type": "flashcard",
                "prompt": "Sınav",
                "options": [],
                "correctIndex": 0,
                "audioText": "Exam",
                "audioLang": "en-US",
                "imageOptions": [
                    "📝"
                ]
            },
            {
                "id": "e32q7",
                "type": "multipleChoice",
                "prompt": "\"Lesson\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ders",
                    "Sınıf",
                    "Kitap",
                    "Defter"
                ],
                "correctIndex": 0,
                "audioText": "Lesson",
                "audioLang": "en-US"
            },
            {
                "id": "e32q8",
                "type": "multipleChoice",
                "prompt": "\"Book\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sınav",
                    "Sınıf",
                    "Kitap",
                    "Ders"
                ],
                "correctIndex": 2,
                "audioText": "Book",
                "audioLang": "en-US"
            },
            {
                "id": "e32q9",
                "type": "multipleChoice",
                "prompt": "\"Notebook\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Defter",
                    "Öğrenci",
                    "Sınıf",
                    "Kitap"
                ],
                "correctIndex": 0,
                "audioText": "Notebook",
                "audioLang": "en-US"
            },
            {
                "id": "e32q10",
                "type": "translate",
                "prompt": "\"Öğrenci\" nasıl söylenir?",
                "options": [
                    "Student",
                    "Classroom",
                    "Notebook",
                    "Lesson"
                ],
                "correctIndex": 0,
                "audioText": "Student",
                "audioLang": "en-US"
            },
            {
                "id": "e32q11",
                "type": "translate",
                "prompt": "\"Sınıf\" nasıl söylenir?",
                "options": [
                    "Book",
                    "Lesson",
                    "Exam",
                    "Classroom"
                ],
                "correctIndex": 3,
                "audioText": "Classroom",
                "audioLang": "en-US"
            },
            {
                "id": "e32_sb_b7h8l",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Ders\"",
                "correctAnswer": ["Lesson"],
                "options": [
                    "hayır",
                    "Lesson",
                    "evet",
                    "ve"
                ],
                "audioText": "Lesson",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e33",
        "title": "Akşam Rutini",
        "description": "Akşam aktiviteleri",
        "icon": "🌃",
        "xpReward": 20,
        "questions": [
            {
                "id": "e33q1",
                "type": "flashcard",
                "prompt": "Yemek pişirmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cook",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍲"
                ]
            },
            {
                "id": "e33q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yemek pişirmek ve TV izlemek\"",
                "options": [
                    "Play",
                    "Read",
                    "Watch TV",
                    "Cook",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Cook",
                    "and",
                    "Watch TV"
                ],
                "audioText": "Cook and Watch TV",
                "audioLang": "en-US"
            },
            {
                "id": "e33q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Okumak görüyorum\"",
                "options": [
                    "Watch TV",
                    "Sleep",
                    "see",
                    "Read",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Read",
                    "see"
                ],
                "audioText": "I Read see",
                "audioLang": "en-US"
            },
            {
                "id": "e33q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Oynamak\"",
                "options": [
                    "This",
                    "Watch TV",
                    "Cook",
                    "is",
                    "Play"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Play"
                ],
                "audioText": "This is Play",
                "audioLang": "en-US"
            },
            {
                "id": "e33q2",
                "type": "flashcard",
                "prompt": "TV izlemek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Watch TV",
                "audioLang": "en-US",
                "imageOptions": [
                    "📺"
                ]
            },
            {
                "id": "e33q3",
                "type": "flashcard",
                "prompt": "Okumak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Read",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e33q4",
                "type": "flashcard",
                "prompt": "Oynamak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Play",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎮"
                ]
            },
            {
                "id": "e33q5",
                "type": "flashcard",
                "prompt": "Uyumak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sleep",
                "audioLang": "en-US",
                "imageOptions": [
                    "😴"
                ]
            },
            {
                "id": "e33q6",
                "type": "flashcard",
                "prompt": "Temizlemek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Clean",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧹"
                ]
            },
            {
                "id": "e33q7",
                "type": "multipleChoice",
                "prompt": "\"Cook\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Temizlemek",
                    "Oynamak",
                    "Yemek pişirmek",
                    "Uyumak"
                ],
                "correctIndex": 2,
                "audioText": "Cook",
                "audioLang": "en-US"
            },
            {
                "id": "e33q8",
                "type": "multipleChoice",
                "prompt": "\"Watch TV\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Okumak",
                    "Oynamak",
                    "TV izlemek",
                    "Uyumak"
                ],
                "correctIndex": 2,
                "audioText": "Watch TV",
                "audioLang": "en-US"
            },
            {
                "id": "e33q9",
                "type": "multipleChoice",
                "prompt": "\"Read\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Okumak",
                    "Oynamak",
                    "TV izlemek",
                    "Yemek pişirmek"
                ],
                "correctIndex": 0,
                "audioText": "Read",
                "audioLang": "en-US"
            },
            {
                "id": "e33q10",
                "type": "translate",
                "prompt": "\"Oynamak\" nasıl söylenir?",
                "options": [
                    "Clean",
                    "Watch TV",
                    "Read",
                    "Play"
                ],
                "correctIndex": 3,
                "audioText": "Play",
                "audioLang": "en-US"
            },
            {
                "id": "e33q11",
                "type": "translate",
                "prompt": "\"Uyumak\" nasıl söylenir?",
                "options": [
                    "Watch TV",
                    "Sleep",
                    "Read",
                    "Play"
                ],
                "correctIndex": 1,
                "audioText": "Sleep",
                "audioLang": "en-US"
            },
            {
                "id": "e33_sb_pc7tz",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Yemek pişirmek\"",
                "correctAnswer": ["Cook"],
                "options": [
                    "iyi",
                    "ben",
                    "bu",
                    "Cook"
                ],
                "audioText": "Cook",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e34",
        "title": "Hisler",
        "description": "Duygu ifadeleri",
        "icon": "😊",
        "xpReward": 20,
        "questions": [
            {
                "id": "e34q1",
                "type": "flashcard",
                "prompt": "Mutlu",
                "options": [],
                "correctIndex": 0,
                "audioText": "Happy",
                "audioLang": "en-US",
                "imageOptions": [
                    "😊"
                ]
            },
            {
                "id": "e34q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Mutlu ve Üzgün\"",
                "options": [
                    "Happy",
                    "Sad",
                    "Scared",
                    "and",
                    "Surprised"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Happy",
                    "and",
                    "Sad"
                ],
                "audioText": "Happy and Sad",
                "audioLang": "en-US"
            },
            {
                "id": "e34q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kızgın görüyorum\"",
                "options": [
                    "Sad",
                    "see",
                    "I",
                    "Angry",
                    "Surprised"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Angry",
                    "see"
                ],
                "audioText": "I Angry see",
                "audioLang": "en-US"
            },
            {
                "id": "e34q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Korkmuş\"",
                "options": [
                    "is",
                    "This",
                    "Sad",
                    "Scared",
                    "Happy"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Scared"
                ],
                "audioText": "This is Scared",
                "audioLang": "en-US"
            },
            {
                "id": "e34q2",
                "type": "flashcard",
                "prompt": "Üzgün",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sad",
                "audioLang": "en-US",
                "imageOptions": [
                    "😢"
                ]
            },
            {
                "id": "e34q3",
                "type": "flashcard",
                "prompt": "Kızgın",
                "options": [],
                "correctIndex": 0,
                "audioText": "Angry",
                "audioLang": "en-US",
                "imageOptions": [
                    "😡"
                ]
            },
            {
                "id": "e34q4",
                "type": "flashcard",
                "prompt": "Korkmuş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Scared",
                "audioLang": "en-US",
                "imageOptions": [
                    "😨"
                ]
            },
            {
                "id": "e34q5",
                "type": "flashcard",
                "prompt": "Şaşırmış",
                "options": [],
                "correctIndex": 0,
                "audioText": "Surprised",
                "audioLang": "en-US",
                "imageOptions": [
                    "😲"
                ]
            },
            {
                "id": "e34q6",
                "type": "flashcard",
                "prompt": "Sıkılmış",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bored",
                "audioLang": "en-US",
                "imageOptions": [
                    "😑"
                ]
            },
            {
                "id": "e34q7",
                "type": "multipleChoice",
                "prompt": "\"Happy\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Mutlu",
                    "Korkmuş",
                    "Sıkılmış",
                    "Kızgın"
                ],
                "correctIndex": 0,
                "audioText": "Happy",
                "audioLang": "en-US"
            },
            {
                "id": "e34q8",
                "type": "multipleChoice",
                "prompt": "\"Sad\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Üzgün",
                    "Sıkılmış",
                    "Mutlu",
                    "Kızgın"
                ],
                "correctIndex": 0,
                "audioText": "Sad",
                "audioLang": "en-US"
            },
            {
                "id": "e34q9",
                "type": "multipleChoice",
                "prompt": "\"Angry\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Korkmuş",
                    "Üzgün",
                    "Sıkılmış",
                    "Kızgın"
                ],
                "correctIndex": 3,
                "audioText": "Angry",
                "audioLang": "en-US"
            },
            {
                "id": "e34q10",
                "type": "translate",
                "prompt": "\"Korkmuş\" nasıl söylenir?",
                "options": [
                    "Scared",
                    "Happy",
                    "Angry",
                    "Sad"
                ],
                "correctIndex": 0,
                "audioText": "Scared",
                "audioLang": "en-US"
            },
            {
                "id": "e34q11",
                "type": "translate",
                "prompt": "\"Şaşırmış\" nasıl söylenir?",
                "options": [
                    "Bored",
                    "Happy",
                    "Scared",
                    "Surprised"
                ],
                "correctIndex": 3,
                "audioText": "Surprised",
                "audioLang": "en-US"
            },
            {
                "id": "e34_sb_quaqq",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Mutlu\"",
                "correctAnswer": ["Happy"],
                "options": [
                    "kötü",
                    "Happy",
                    "sen",
                    "hayır"
                ],
                "audioText": "Happy",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e35",
        "title": "Karakter Özellikleri",
        "description": "Kişilik ifadeleri",
        "icon": "🧠",
        "xpReward": 20,
        "questions": [
            {
                "id": "e35q1",
                "type": "flashcard",
                "prompt": "Nazik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Kind",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤗"
                ]
            },
            {
                "id": "e35q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Nazik ve Akıllı\"",
                "options": [
                    "Smart",
                    "and",
                    "Hardworking",
                    "Kind",
                    "Honest"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Kind",
                    "and",
                    "Smart"
                ],
                "audioText": "Kind and Smart",
                "audioLang": "en-US"
            },
            {
                "id": "e35q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Cesur görüyorum\"",
                "options": [
                    "Brave",
                    "see",
                    "Hardworking",
                    "I",
                    "Kind"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Brave",
                    "see"
                ],
                "audioText": "I Brave see",
                "audioLang": "en-US"
            },
            {
                "id": "e35q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Dürüst\"",
                "options": [
                    "is",
                    "Smart",
                    "Honest",
                    "Kind",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Honest"
                ],
                "audioText": "This is Honest",
                "audioLang": "en-US"
            },
            {
                "id": "e35q2",
                "type": "flashcard",
                "prompt": "Akıllı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Smart",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧠"
                ]
            },
            {
                "id": "e35q3",
                "type": "flashcard",
                "prompt": "Cesur",
                "options": [],
                "correctIndex": 0,
                "audioText": "Brave",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦸"
                ]
            },
            {
                "id": "e35q4",
                "type": "flashcard",
                "prompt": "Dürüst",
                "options": [],
                "correctIndex": 0,
                "audioText": "Honest",
                "audioLang": "en-US",
                "imageOptions": [
                    "✅"
                ]
            },
            {
                "id": "e35q5",
                "type": "flashcard",
                "prompt": "Çalışkan",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hardworking",
                "audioLang": "en-US",
                "imageOptions": [
                    "💪"
                ]
            },
            {
                "id": "e35q6",
                "type": "flashcard",
                "prompt": "Sabırlı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Patient",
                "audioLang": "en-US",
                "imageOptions": [
                    "⏳"
                ]
            },
            {
                "id": "e35q7",
                "type": "multipleChoice",
                "prompt": "\"Kind\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Cesur",
                    "Dürüst",
                    "Nazik",
                    "Sabırlı"
                ],
                "correctIndex": 2,
                "audioText": "Kind",
                "audioLang": "en-US"
            },
            {
                "id": "e35q8",
                "type": "multipleChoice",
                "prompt": "\"Smart\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sabırlı",
                    "Akıllı",
                    "Dürüst",
                    "Çalışkan"
                ],
                "correctIndex": 1,
                "audioText": "Smart",
                "audioLang": "en-US"
            },
            {
                "id": "e35q9",
                "type": "multipleChoice",
                "prompt": "\"Brave\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sabırlı",
                    "Çalışkan",
                    "Nazik",
                    "Cesur"
                ],
                "correctIndex": 3,
                "audioText": "Brave",
                "audioLang": "en-US"
            },
            {
                "id": "e35q10",
                "type": "translate",
                "prompt": "\"Dürüst\" nasıl söylenir?",
                "options": [
                    "Smart",
                    "Hardworking",
                    "Patient",
                    "Honest"
                ],
                "correctIndex": 3,
                "audioText": "Honest",
                "audioLang": "en-US"
            },
            {
                "id": "e35q11",
                "type": "translate",
                "prompt": "\"Çalışkan\" nasıl söylenir?",
                "options": [
                    "Hardworking",
                    "Honest",
                    "Kind",
                    "Smart"
                ],
                "correctIndex": 0,
                "audioText": "Hardworking",
                "audioLang": "en-US"
            },
            {
                "id": "e35_sb_201bp",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Nazik\"",
                "correctAnswer": ["Kind"],
                "options": [
                    "çok",
                    "iyi",
                    "Kind",
                    "hayır"
                ],
                "audioText": "Kind",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e36",
        "title": "Tepkiler",
        "description": "Günlük tepkiler",
        "icon": "😲",
        "xpReward": 20,
        "questions": [
            {
                "id": "e36q1",
                "type": "flashcard",
                "prompt": "Harika",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wonderful",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌟"
                ]
            },
            {
                "id": "e36q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Harika ve Aferin\"",
                "options": [
                    "Wonderful",
                    "OK",
                    "Definitely",
                    "Well done",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Wonderful",
                    "and",
                    "Well done"
                ],
                "audioText": "Wonderful and Well done",
                "audioLang": "en-US"
            },
            {
                "id": "e36q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tamam görüyorum\"",
                "options": [
                    "I",
                    "Well done",
                    "OK",
                    "Wonderful",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "OK",
                    "see"
                ],
                "audioText": "I OK see",
                "audioLang": "en-US"
            },
            {
                "id": "e36q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Olmaz\"",
                "options": [
                    "Wonderful",
                    "This",
                    "is",
                    "No way",
                    "Maybe"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "No way"
                ],
                "audioText": "This is No way",
                "audioLang": "en-US"
            },
            {
                "id": "e36q2",
                "type": "flashcard",
                "prompt": "Aferin",
                "options": [],
                "correctIndex": 0,
                "audioText": "Well done",
                "audioLang": "en-US",
                "imageOptions": [
                    "👏"
                ]
            },
            {
                "id": "e36q3",
                "type": "flashcard",
                "prompt": "Tamam",
                "options": [],
                "correctIndex": 0,
                "audioText": "OK",
                "audioLang": "en-US",
                "imageOptions": [
                    "👍"
                ]
            },
            {
                "id": "e36q4",
                "type": "flashcard",
                "prompt": "Olmaz",
                "options": [],
                "correctIndex": 0,
                "audioText": "No way",
                "audioLang": "en-US",
                "imageOptions": [
                    "❌"
                ]
            },
            {
                "id": "e36q5",
                "type": "flashcard",
                "prompt": "Kesinlikle",
                "options": [],
                "correctIndex": 0,
                "audioText": "Definitely",
                "audioLang": "en-US",
                "imageOptions": [
                    "💯"
                ]
            },
            {
                "id": "e36q6",
                "type": "flashcard",
                "prompt": "Belki",
                "options": [],
                "correctIndex": 0,
                "audioText": "Maybe",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤔"
                ]
            },
            {
                "id": "e36q7",
                "type": "multipleChoice",
                "prompt": "\"Wonderful\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Harika",
                    "Olmaz",
                    "Belki",
                    "Aferin"
                ],
                "correctIndex": 0,
                "audioText": "Wonderful",
                "audioLang": "en-US"
            },
            {
                "id": "e36q8",
                "type": "multipleChoice",
                "prompt": "\"Well done\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Aferin",
                    "Kesinlikle",
                    "Tamam",
                    "Harika"
                ],
                "correctIndex": 0,
                "audioText": "Well done",
                "audioLang": "en-US"
            },
            {
                "id": "e36q9",
                "type": "multipleChoice",
                "prompt": "\"OK\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kesinlikle",
                    "Aferin",
                    "Harika",
                    "Tamam"
                ],
                "correctIndex": 3,
                "audioText": "OK",
                "audioLang": "en-US"
            },
            {
                "id": "e36q10",
                "type": "translate",
                "prompt": "\"Olmaz\" nasıl söylenir?",
                "options": [
                    "Wonderful",
                    "No way",
                    "Maybe",
                    "Definitely"
                ],
                "correctIndex": 1,
                "audioText": "No way",
                "audioLang": "en-US"
            },
            {
                "id": "e36q11",
                "type": "translate",
                "prompt": "\"Kesinlikle\" nasıl söylenir?",
                "options": [
                    "No way",
                    "Well done",
                    "Definitely",
                    "Wonderful"
                ],
                "correctIndex": 2,
                "audioText": "Definitely",
                "audioLang": "en-US"
            },
            {
                "id": "e36_sb_nk8cw",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Harika\"",
                "correctAnswer": ["Wonderful"],
                "options": [
                    "kötü",
                    "çok",
                    "hayır",
                    "Wonderful"
                ],
                "audioText": "Wonderful",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e37",
        "title": "Hareket Fiilleri",
        "description": "Hareket ifade eden fiiller",
        "icon": "🏃‍♂️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e37q1",
                "type": "flashcard",
                "prompt": "Gitmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Go",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶"
                ]
            },
            {
                "id": "e37q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gitmek ve Gelmek\"",
                "options": [
                    "Walk",
                    "Go",
                    "and",
                    "Come",
                    "Run"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Go",
                    "and",
                    "Come"
                ],
                "audioText": "Go and Come",
                "audioLang": "en-US"
            },
            {
                "id": "e37q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Koşmak görüyorum\"",
                "options": [
                    "I",
                    "Go",
                    "Run",
                    "see",
                    "Come"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Run",
                    "see"
                ],
                "audioText": "I Run see",
                "audioLang": "en-US"
            },
            {
                "id": "e37q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yürümek\"",
                "options": [
                    "Come",
                    "is",
                    "Go",
                    "This",
                    "Walk"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Walk"
                ],
                "audioText": "This is Walk",
                "audioLang": "en-US"
            },
            {
                "id": "e37q2",
                "type": "flashcard",
                "prompt": "Gelmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Come",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃"
                ]
            },
            {
                "id": "e37q3",
                "type": "flashcard",
                "prompt": "Koşmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Run",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃‍♂️"
                ]
            },
            {
                "id": "e37q4",
                "type": "flashcard",
                "prompt": "Yürümek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Walk",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶‍♂️"
                ]
            },
            {
                "id": "e37q5",
                "type": "flashcard",
                "prompt": "Uçmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Fly",
                "audioLang": "en-US",
                "imageOptions": [
                    "✈️"
                ]
            },
            {
                "id": "e37q6",
                "type": "flashcard",
                "prompt": "Atlamak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Jump",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤸"
                ]
            },
            {
                "id": "e37q7",
                "type": "multipleChoice",
                "prompt": "\"Go\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gitmek",
                    "Koşmak",
                    "Atlamak",
                    "Uçmak"
                ],
                "correctIndex": 0,
                "audioText": "Go",
                "audioLang": "en-US"
            },
            {
                "id": "e37q8",
                "type": "multipleChoice",
                "prompt": "\"Come\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Atlamak",
                    "Gelmek",
                    "Yürümek",
                    "Uçmak"
                ],
                "correctIndex": 1,
                "audioText": "Come",
                "audioLang": "en-US"
            },
            {
                "id": "e37q9",
                "type": "multipleChoice",
                "prompt": "\"Run\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gitmek",
                    "Koşmak",
                    "Yürümek",
                    "Gelmek"
                ],
                "correctIndex": 1,
                "audioText": "Run",
                "audioLang": "en-US"
            },
            {
                "id": "e37q10",
                "type": "translate",
                "prompt": "\"Yürümek\" nasıl söylenir?",
                "options": [
                    "Come",
                    "Go",
                    "Run",
                    "Walk"
                ],
                "correctIndex": 3,
                "audioText": "Walk",
                "audioLang": "en-US"
            },
            {
                "id": "e37q11",
                "type": "translate",
                "prompt": "\"Uçmak\" nasıl söylenir?",
                "options": [
                    "Come",
                    "Run",
                    "Walk",
                    "Fly"
                ],
                "correctIndex": 3,
                "audioText": "Fly",
                "audioLang": "en-US"
            },
            {
                "id": "e37_sb_to4nj",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Gitmek\"",
                "correctAnswer": ["Go"],
                "options": [
                    "Go",
                    "iyi",
                    "hayır",
                    "ne"
                ],
                "audioText": "Go",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e38",
        "title": "Durum Fiilleri",
        "description": "Durum ifade eden fiiller",
        "icon": "🧘",
        "xpReward": 20,
        "questions": [
            {
                "id": "e38q1",
                "type": "flashcard",
                "prompt": "Oturmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sit",
                "audioLang": "en-US",
                "imageOptions": [
                    "🪑"
                ]
            },
            {
                "id": "e38q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Oturmak ve Durmak\"",
                "options": [
                    "Wait",
                    "Stand",
                    "and",
                    "Sit",
                    "Lie down"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Sit",
                    "and",
                    "Stand"
                ],
                "audioText": "Sit and Stand",
                "audioLang": "en-US"
            },
            {
                "id": "e38q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Uzanmak görüyorum\"",
                "options": [
                    "Stand",
                    "Sit",
                    "Lie down",
                    "see",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Lie down",
                    "see"
                ],
                "audioText": "I Lie down see",
                "audioLang": "en-US"
            },
            {
                "id": "e38q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Beklemek\"",
                "options": [
                    "Look",
                    "This",
                    "is",
                    "Stand",
                    "Wait"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Wait"
                ],
                "audioText": "This is Wait",
                "audioLang": "en-US"
            },
            {
                "id": "e38q2",
                "type": "flashcard",
                "prompt": "Durmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Stand",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧍"
                ]
            },
            {
                "id": "e38q3",
                "type": "flashcard",
                "prompt": "Uzanmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lie down",
                "audioLang": "en-US",
                "imageOptions": [
                    "😴"
                ]
            },
            {
                "id": "e38q4",
                "type": "flashcard",
                "prompt": "Beklemek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wait",
                "audioLang": "en-US",
                "imageOptions": [
                    "⏳"
                ]
            },
            {
                "id": "e38q5",
                "type": "flashcard",
                "prompt": "Düşünmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Think",
                "audioLang": "en-US",
                "imageOptions": [
                    "💭"
                ]
            },
            {
                "id": "e38q6",
                "type": "flashcard",
                "prompt": "Bakmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Look",
                "audioLang": "en-US",
                "imageOptions": [
                    "👀"
                ]
            },
            {
                "id": "e38q7",
                "type": "multipleChoice",
                "prompt": "\"Sit\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Oturmak",
                    "Uzanmak",
                    "Durmak",
                    "Düşünmek"
                ],
                "correctIndex": 0,
                "audioText": "Sit",
                "audioLang": "en-US"
            },
            {
                "id": "e38q8",
                "type": "multipleChoice",
                "prompt": "\"Stand\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Uzanmak",
                    "Beklemek",
                    "Oturmak",
                    "Durmak"
                ],
                "correctIndex": 3,
                "audioText": "Stand",
                "audioLang": "en-US"
            },
            {
                "id": "e38q9",
                "type": "multipleChoice",
                "prompt": "\"Lie down\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Uzanmak",
                    "Oturmak",
                    "Durmak",
                    "Bakmak"
                ],
                "correctIndex": 0,
                "audioText": "Lie down",
                "audioLang": "en-US"
            },
            {
                "id": "e38q10",
                "type": "translate",
                "prompt": "\"Beklemek\" nasıl söylenir?",
                "options": [
                    "Think",
                    "Lie down",
                    "Stand",
                    "Wait"
                ],
                "correctIndex": 3,
                "audioText": "Wait",
                "audioLang": "en-US"
            },
            {
                "id": "e38q11",
                "type": "translate",
                "prompt": "\"Düşünmek\" nasıl söylenir?",
                "options": [
                    "Stand",
                    "Look",
                    "Lie down",
                    "Think"
                ],
                "correctIndex": 3,
                "audioText": "Think",
                "audioLang": "en-US"
            },
            {
                "id": "e38_sb_4ssyj",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Oturmak\"",
                "correctAnswer": ["Sit"],
                "options": [
                    "çok",
                    "hayır",
                    "ne",
                    "Sit"
                ],
                "audioText": "Sit",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e39",
        "title": "Günlük Fiiller",
        "description": "Günlük kullanılan fiiller",
        "icon": "🗣️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e39q1",
                "type": "flashcard",
                "prompt": "Yemek yemek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Eat",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e39q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yemek yemek ve İçmek\"",
                "options": [
                    "Eat",
                    "and",
                    "Drink",
                    "Talk",
                    "Sleep"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Eat",
                    "and",
                    "Drink"
                ],
                "audioText": "Eat and Drink",
                "audioLang": "en-US"
            },
            {
                "id": "e39q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Uyumak görüyorum\"",
                "options": [
                    "see",
                    "Eat",
                    "Write",
                    "I",
                    "Sleep"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Sleep",
                    "see"
                ],
                "audioText": "I Sleep see",
                "audioLang": "en-US"
            },
            {
                "id": "e39q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Konuşmak\"",
                "options": [
                    "is",
                    "Drink",
                    "Talk",
                    "This",
                    "Read"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Talk"
                ],
                "audioText": "This is Talk",
                "audioLang": "en-US"
            },
            {
                "id": "e39q2",
                "type": "flashcard",
                "prompt": "İçmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Drink",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥤"
                ]
            },
            {
                "id": "e39q3",
                "type": "flashcard",
                "prompt": "Uyumak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sleep",
                "audioLang": "en-US",
                "imageOptions": [
                    "😴"
                ]
            },
            {
                "id": "e39q4",
                "type": "flashcard",
                "prompt": "Konuşmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Talk",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗣️"
                ]
            },
            {
                "id": "e39q5",
                "type": "flashcard",
                "prompt": "Yazmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Write",
                "audioLang": "en-US",
                "imageOptions": [
                    "✍️"
                ]
            },
            {
                "id": "e39q6",
                "type": "flashcard",
                "prompt": "Okumak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Read",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e39q7",
                "type": "multipleChoice",
                "prompt": "\"Eat\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Okumak",
                    "Uyumak",
                    "Konuşmak",
                    "Yemek yemek"
                ],
                "correctIndex": 3,
                "audioText": "Eat",
                "audioLang": "en-US"
            },
            {
                "id": "e39q8",
                "type": "multipleChoice",
                "prompt": "\"Drink\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yemek yemek",
                    "Yazmak",
                    "Uyumak",
                    "İçmek"
                ],
                "correctIndex": 3,
                "audioText": "Drink",
                "audioLang": "en-US"
            },
            {
                "id": "e39q9",
                "type": "multipleChoice",
                "prompt": "\"Sleep\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Uyumak",
                    "Okumak",
                    "Yazmak",
                    "Konuşmak"
                ],
                "correctIndex": 0,
                "audioText": "Sleep",
                "audioLang": "en-US"
            },
            {
                "id": "e39q10",
                "type": "translate",
                "prompt": "\"Konuşmak\" nasıl söylenir?",
                "options": [
                    "Read",
                    "Write",
                    "Sleep",
                    "Talk"
                ],
                "correctIndex": 3,
                "audioText": "Talk",
                "audioLang": "en-US"
            },
            {
                "id": "e39q11",
                "type": "translate",
                "prompt": "\"Yazmak\" nasıl söylenir?",
                "options": [
                    "Drink",
                    "Read",
                    "Write",
                    "Sleep"
                ],
                "correctIndex": 2,
                "audioText": "Write",
                "audioLang": "en-US"
            },
            {
                "id": "e39_sb_5fwr5",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Yemek yemek\"",
                "correctAnswer": ["Eat"],
                "options": [
                    "Eat",
                    "ne",
                    "evet"
                ],
                "audioText": "Eat",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e40",
        "title": "Geçmiş Zaman",
        "description": "Geçmiş zaman kullanımı",
        "icon": "⏪",
        "xpReward": 20,
        "questions": [
            {
                "id": "e40q1",
                "type": "flashcard",
                "prompt": "Gitti",
                "options": [],
                "correctIndex": 0,
                "audioText": "Went",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶"
                ]
            },
            {
                "id": "e40q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gitti ve Geldi\"",
                "options": [
                    "Drank",
                    "Came",
                    "Ate",
                    "Went",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Went",
                    "and",
                    "Came"
                ],
                "audioText": "Went and Came",
                "audioLang": "en-US"
            },
            {
                "id": "e40q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yedi görüyorum\"",
                "options": [
                    "see",
                    "Went",
                    "I",
                    "Came",
                    "Ate"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Ate",
                    "see"
                ],
                "audioText": "I Ate see",
                "audioLang": "en-US"
            },
            {
                "id": "e40q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir İçti\"",
                "options": [
                    "is",
                    "Went",
                    "Came",
                    "This",
                    "Drank"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Drank"
                ],
                "audioText": "This is Drank",
                "audioLang": "en-US"
            },
            {
                "id": "e40q2",
                "type": "flashcard",
                "prompt": "Geldi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Came",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃"
                ]
            },
            {
                "id": "e40q3",
                "type": "flashcard",
                "prompt": "Yedi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ate",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e40q4",
                "type": "flashcard",
                "prompt": "İçti",
                "options": [],
                "correctIndex": 0,
                "audioText": "Drank",
                "audioLang": "en-US",
                "imageOptions": [
                    "🥤"
                ]
            },
            {
                "id": "e40q5",
                "type": "flashcard",
                "prompt": "Yaptı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Did",
                "audioLang": "en-US",
                "imageOptions": [
                    "✅"
                ]
            },
            {
                "id": "e40q6",
                "type": "flashcard",
                "prompt": "Söyledi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Said",
                "audioLang": "en-US",
                "imageOptions": [
                    "💬"
                ]
            },
            {
                "id": "e40q7",
                "type": "multipleChoice",
                "prompt": "\"Went\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yedi",
                    "Yaptı",
                    "İçti",
                    "Gitti"
                ],
                "correctIndex": 3,
                "audioText": "Went",
                "audioLang": "en-US"
            },
            {
                "id": "e40q8",
                "type": "multipleChoice",
                "prompt": "\"Came\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yedi",
                    "Söyledi",
                    "Geldi",
                    "Gitti"
                ],
                "correctIndex": 2,
                "audioText": "Came",
                "audioLang": "en-US"
            },
            {
                "id": "e40q9",
                "type": "multipleChoice",
                "prompt": "\"Ate\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İçti",
                    "Geldi",
                    "Gitti",
                    "Yedi"
                ],
                "correctIndex": 3,
                "audioText": "Ate",
                "audioLang": "en-US"
            },
            {
                "id": "e40q10",
                "type": "translate",
                "prompt": "\"İçti\" nasıl söylenir?",
                "options": [
                    "Went",
                    "Drank",
                    "Ate",
                    "Did"
                ],
                "correctIndex": 1,
                "audioText": "Drank",
                "audioLang": "en-US"
            },
            {
                "id": "e40q11",
                "type": "translate",
                "prompt": "\"Yaptı\" nasıl söylenir?",
                "options": [
                    "Came",
                    "Went",
                    "Did",
                    "Said"
                ],
                "correctIndex": 2,
                "audioText": "Did",
                "audioLang": "en-US"
            },
            {
                "id": "e40_sb_4xh5o",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Gitti\"",
                "correctAnswer": ["Went"],
                "options": [
                    "bu",
                    "sen",
                    "Went",
                    "iyi"
                ],
                "audioText": "Went",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e41",
        "title": "Gelecek Zaman",
        "description": "Gelecek zaman kullanımı",
        "icon": "⏩",
        "xpReward": 20,
        "questions": [
            {
                "id": "e41q1",
                "type": "flashcard",
                "prompt": "Gidecek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will go",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶"
                ]
            },
            {
                "id": "e41q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gidecek ve Gelecek\"",
                "options": [
                    "Will write",
                    "Will do",
                    "and",
                    "Will come",
                    "Will go"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Will go",
                    "and",
                    "Will come"
                ],
                "audioText": "Will go and Will come",
                "audioLang": "en-US"
            },
            {
                "id": "e41q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yiyecek görüyorum\"",
                "options": [
                    "see",
                    "Will go",
                    "I",
                    "Will eat",
                    "Will write"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Will eat",
                    "see"
                ],
                "audioText": "I Will eat see",
                "audioLang": "en-US"
            },
            {
                "id": "e41q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yapacak\"",
                "options": [
                    "Will come",
                    "is",
                    "Will do",
                    "Will read",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Will do"
                ],
                "audioText": "This is Will do",
                "audioLang": "en-US"
            },
            {
                "id": "e41q2",
                "type": "flashcard",
                "prompt": "Gelecek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will come",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃"
                ]
            },
            {
                "id": "e41q3",
                "type": "flashcard",
                "prompt": "Yiyecek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will eat",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e41q4",
                "type": "flashcard",
                "prompt": "Yapacak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will do",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔧"
                ]
            },
            {
                "id": "e41q5",
                "type": "flashcard",
                "prompt": "Yazacak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will write",
                "audioLang": "en-US",
                "imageOptions": [
                    "✍️"
                ]
            },
            {
                "id": "e41q6",
                "type": "flashcard",
                "prompt": "Okuyacak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Will read",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e41q7",
                "type": "multipleChoice",
                "prompt": "\"Will go\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gelecek",
                    "Yiyecek",
                    "Yapacak",
                    "Gidecek"
                ],
                "correctIndex": 3,
                "audioText": "Will go",
                "audioLang": "en-US"
            },
            {
                "id": "e41q8",
                "type": "multipleChoice",
                "prompt": "\"Will come\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yiyecek",
                    "Gelecek",
                    "Okuyacak",
                    "Yazacak"
                ],
                "correctIndex": 1,
                "audioText": "Will come",
                "audioLang": "en-US"
            },
            {
                "id": "e41q9",
                "type": "multipleChoice",
                "prompt": "\"Will eat\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yiyecek",
                    "Yapacak",
                    "Gelecek",
                    "Yazacak"
                ],
                "correctIndex": 0,
                "audioText": "Will eat",
                "audioLang": "en-US"
            },
            {
                "id": "e41q10",
                "type": "translate",
                "prompt": "\"Yapacak\" nasıl söylenir?",
                "options": [
                    "Will read",
                    "Will write",
                    "Will do",
                    "Will go"
                ],
                "correctIndex": 2,
                "audioText": "Will do",
                "audioLang": "en-US"
            },
            {
                "id": "e41q11",
                "type": "translate",
                "prompt": "\"Yazacak\" nasıl söylenir?",
                "options": [
                    "Will write",
                    "Will eat",
                    "Will come",
                    "Will do"
                ],
                "correctIndex": 0,
                "audioText": "Will write",
                "audioLang": "en-US"
            },
            {
                "id": "e41_sb_o16lu",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Gidecek\"",
                "correctAnswer": ["Will", "go"],
                "options": [
                    "Will",
                    "iyi",
                    "ne",
                    "go"
                ],
                "audioText": "Will go",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e42",
        "title": "Emir Kipleri",
        "description": "Emir cümleleri",
        "icon": "❗",
        "xpReward": 20,
        "questions": [
            {
                "id": "e42q1",
                "type": "flashcard",
                "prompt": "Git!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Go!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚶"
                ]
            },
            {
                "id": "e42q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Git! ve Gel!\"",
                "options": [
                    "Come!",
                    "Go!",
                    "Eat!",
                    "and",
                    "Sit!"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Go!",
                    "and",
                    "Come!"
                ],
                "audioText": "Go! and Come!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ye! görüyorum\"",
                "options": [
                    "I",
                    "Go!",
                    "see",
                    "Come!",
                    "Eat!"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Eat!",
                    "see"
                ],
                "audioText": "I Eat! see",
                "audioLang": "en-US"
            },
            {
                "id": "e42q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Otur!\"",
                "options": [
                    "Talk!",
                    "Sit!",
                    "This",
                    "Come!",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Sit!"
                ],
                "audioText": "This is Sit!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q2",
                "type": "flashcard",
                "prompt": "Gel!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Come!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃"
                ]
            },
            {
                "id": "e42q3",
                "type": "flashcard",
                "prompt": "Ye!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Eat!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍽️"
                ]
            },
            {
                "id": "e42q4",
                "type": "flashcard",
                "prompt": "Otur!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sit!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🪑"
                ]
            },
            {
                "id": "e42q5",
                "type": "flashcard",
                "prompt": "Dur!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Stop!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛑"
                ]
            },
            {
                "id": "e42q6",
                "type": "flashcard",
                "prompt": "Konuş!",
                "options": [],
                "correctIndex": 0,
                "audioText": "Talk!",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗣️"
                ]
            },
            {
                "id": "e42q7",
                "type": "multipleChoice",
                "prompt": "\"Go!\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Git!",
                    "Konuş!",
                    "Otur!",
                    "Dur!"
                ],
                "correctIndex": 0,
                "audioText": "Go!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q8",
                "type": "multipleChoice",
                "prompt": "\"Come!\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Gel!",
                    "Git!",
                    "Dur!",
                    "Otur!"
                ],
                "correctIndex": 0,
                "audioText": "Come!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q9",
                "type": "multipleChoice",
                "prompt": "\"Eat!\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Konuş!",
                    "Gel!",
                    "Git!",
                    "Ye!"
                ],
                "correctIndex": 3,
                "audioText": "Eat!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q10",
                "type": "translate",
                "prompt": "\"Otur!\" nasıl söylenir?",
                "options": [
                    "Talk!",
                    "Stop!",
                    "Eat!",
                    "Sit!"
                ],
                "correctIndex": 3,
                "audioText": "Sit!",
                "audioLang": "en-US"
            },
            {
                "id": "e42q11",
                "type": "translate",
                "prompt": "\"Dur!\" nasıl söylenir?",
                "options": [
                    "Stop!",
                    "Eat!",
                    "Come!",
                    "Sit!"
                ],
                "correctIndex": 0,
                "audioText": "Stop!",
                "audioLang": "en-US"
            },
            {
                "id": "e42_sb_lmlry",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Git!\"",
                "correctAnswer": ["Go!"],
                "options": [
                    "Go!",
                    "hayır",
                    "kim"
                ],
                "audioText": "Go!",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e43",
        "title": "Okul Eşyaları",
        "description": "Okul malzemeleri",
        "icon": "🎒",
        "xpReward": 20,
        "questions": [
            {
                "id": "e43q1",
                "type": "flashcard",
                "prompt": "Kitap",
                "options": [],
                "correctIndex": 0,
                "audioText": "Book",
                "audioLang": "en-US",
                "imageOptions": [
                    "📚"
                ]
            },
            {
                "id": "e43q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kitap ve Kalem\"",
                "options": [
                    "and",
                    "Pen",
                    "Ruler",
                    "Book",
                    "Notebook"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Book",
                    "and",
                    "Pen"
                ],
                "audioText": "Book and Pen",
                "audioLang": "en-US"
            },
            {
                "id": "e43q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Defter görüyorum\"",
                "options": [
                    "I",
                    "Bag",
                    "see",
                    "Pen",
                    "Notebook"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Notebook",
                    "see"
                ],
                "audioText": "I Notebook see",
                "audioLang": "en-US"
            },
            {
                "id": "e43q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Cetvel\"",
                "options": [
                    "Book",
                    "This",
                    "is",
                    "Pen",
                    "Ruler"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Ruler"
                ],
                "audioText": "This is Ruler",
                "audioLang": "en-US"
            },
            {
                "id": "e43q2",
                "type": "flashcard",
                "prompt": "Kalem",
                "options": [],
                "correctIndex": 0,
                "audioText": "Pen",
                "audioLang": "en-US",
                "imageOptions": [
                    "✏️"
                ]
            },
            {
                "id": "e43q3",
                "type": "flashcard",
                "prompt": "Defter",
                "options": [],
                "correctIndex": 0,
                "audioText": "Notebook",
                "audioLang": "en-US",
                "imageOptions": [
                    "📓"
                ]
            },
            {
                "id": "e43q4",
                "type": "flashcard",
                "prompt": "Cetvel",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ruler",
                "audioLang": "en-US",
                "imageOptions": [
                    "📏"
                ]
            },
            {
                "id": "e43q5",
                "type": "flashcard",
                "prompt": "Çanta",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bag",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎒"
                ]
            },
            {
                "id": "e43q6",
                "type": "flashcard",
                "prompt": "Silgi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Eraser",
                "audioLang": "en-US",
                "imageOptions": [
                    "🩹"
                ]
            },
            {
                "id": "e43q7",
                "type": "multipleChoice",
                "prompt": "\"Book\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kitap",
                    "Silgi",
                    "Defter",
                    "Kalem"
                ],
                "correctIndex": 0,
                "audioText": "Book",
                "audioLang": "en-US"
            },
            {
                "id": "e43q8",
                "type": "multipleChoice",
                "prompt": "\"Pen\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kitap",
                    "Silgi",
                    "Kalem",
                    "Defter"
                ],
                "correctIndex": 2,
                "audioText": "Pen",
                "audioLang": "en-US"
            },
            {
                "id": "e43q9",
                "type": "multipleChoice",
                "prompt": "\"Notebook\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Cetvel",
                    "Çanta",
                    "Silgi",
                    "Defter"
                ],
                "correctIndex": 3,
                "audioText": "Notebook",
                "audioLang": "en-US"
            },
            {
                "id": "e43q10",
                "type": "translate",
                "prompt": "\"Cetvel\" nasıl söylenir?",
                "options": [
                    "Ruler",
                    "Pen",
                    "Notebook",
                    "Eraser"
                ],
                "correctIndex": 0,
                "audioText": "Ruler",
                "audioLang": "en-US"
            },
            {
                "id": "e43q11",
                "type": "translate",
                "prompt": "\"Çanta\" nasıl söylenir?",
                "options": [
                    "Bag",
                    "Book",
                    "Ruler",
                    "Eraser"
                ],
                "correctIndex": 0,
                "audioText": "Bag",
                "audioLang": "en-US"
            },
            {
                "id": "e43_sb_zz5im",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Kitap\"",
                "correctAnswer": ["Book"],
                "options": [
                    "iyi",
                    "kim",
                    "Book",
                    "kötü"
                ],
                "audioText": "Book",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e44",
        "title": "Dersler",
        "description": "Okul dersleri",
        "icon": "📚",
        "xpReward": 20,
        "questions": [
            {
                "id": "e44q1",
                "type": "flashcard",
                "prompt": "Matematik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Math",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔢"
                ]
            },
            {
                "id": "e44q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Matematik ve Fen\"",
                "options": [
                    "Science",
                    "Geography",
                    "Math",
                    "Music",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Math",
                    "and",
                    "Science"
                ],
                "audioText": "Math and Science",
                "audioLang": "en-US"
            },
            {
                "id": "e44q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tarih görüyorum\"",
                "options": [
                    "see",
                    "Science",
                    "History",
                    "Music",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "History",
                    "see"
                ],
                "audioText": "I History see",
                "audioLang": "en-US"
            },
            {
                "id": "e44q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Coğrafya\"",
                "options": [
                    "This",
                    "Art",
                    "Geography",
                    "Science",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Geography"
                ],
                "audioText": "This is Geography",
                "audioLang": "en-US"
            },
            {
                "id": "e44q2",
                "type": "flashcard",
                "prompt": "Fen",
                "options": [],
                "correctIndex": 0,
                "audioText": "Science",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔬"
                ]
            },
            {
                "id": "e44q3",
                "type": "flashcard",
                "prompt": "Tarih",
                "options": [],
                "correctIndex": 0,
                "audioText": "History",
                "audioLang": "en-US",
                "imageOptions": [
                    "📜"
                ]
            },
            {
                "id": "e44q4",
                "type": "flashcard",
                "prompt": "Coğrafya",
                "options": [],
                "correctIndex": 0,
                "audioText": "Geography",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌍"
                ]
            },
            {
                "id": "e44q5",
                "type": "flashcard",
                "prompt": "Müzik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Music",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎵"
                ]
            },
            {
                "id": "e44q6",
                "type": "flashcard",
                "prompt": "Sanat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Art",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎨"
                ]
            },
            {
                "id": "e44q7",
                "type": "multipleChoice",
                "prompt": "\"Math\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Matematik",
                    "Sanat",
                    "Müzik",
                    "Coğrafya"
                ],
                "correctIndex": 0,
                "audioText": "Math",
                "audioLang": "en-US"
            },
            {
                "id": "e44q8",
                "type": "multipleChoice",
                "prompt": "\"Science\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Fen",
                    "Sanat",
                    "Müzik",
                    "Coğrafya"
                ],
                "correctIndex": 0,
                "audioText": "Science",
                "audioLang": "en-US"
            },
            {
                "id": "e44q9",
                "type": "multipleChoice",
                "prompt": "\"History\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Coğrafya",
                    "Matematik",
                    "Tarih",
                    "Müzik"
                ],
                "correctIndex": 2,
                "audioText": "History",
                "audioLang": "en-US"
            },
            {
                "id": "e44q10",
                "type": "translate",
                "prompt": "\"Coğrafya\" nasıl söylenir?",
                "options": [
                    "Math",
                    "Art",
                    "Music",
                    "Geography"
                ],
                "correctIndex": 3,
                "audioText": "Geography",
                "audioLang": "en-US"
            },
            {
                "id": "e44q11",
                "type": "translate",
                "prompt": "\"Müzik\" nasıl söylenir?",
                "options": [
                    "History",
                    "Geography",
                    "Music",
                    "Science"
                ],
                "correctIndex": 2,
                "audioText": "Music",
                "audioLang": "en-US"
            },
            {
                "id": "e44_sb_4zcnd",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Matematik\"",
                "correctAnswer": ["Math"],
                "options": [
                    "ve",
                    "ne",
                    "kötü",
                    "Math"
                ],
                "audioText": "Math",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e45",
        "title": "Sınıfta",
        "description": "Sınıf aktiviteleri",
        "icon": "👩‍🎓",
        "xpReward": 20,
        "questions": [
            {
                "id": "e45q1",
                "type": "flashcard",
                "prompt": "Tahta",
                "options": [],
                "correctIndex": 0,
                "audioText": "Blackboard",
                "audioLang": "en-US",
                "imageOptions": [
                    "📋"
                ]
            },
            {
                "id": "e45q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Tahta ve El kaldırmak\"",
                "options": [
                    "and",
                    "Answer",
                    "Raise hand",
                    "Blackboard",
                    "Understand"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Blackboard",
                    "and",
                    "Raise hand"
                ],
                "audioText": "Blackboard and Raise hand",
                "audioLang": "en-US"
            },
            {
                "id": "e45q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Soru sormak görüyorum\"",
                "options": [
                    "Raise hand",
                    "Blackboard",
                    "Ask",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Ask",
                    "see"
                ],
                "audioText": "I Ask see",
                "audioLang": "en-US"
            },
            {
                "id": "e45q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Cevaplamak\"",
                "options": [
                    "Answer",
                    "Blackboard",
                    "This",
                    "is",
                    "Repeat"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Answer"
                ],
                "audioText": "This is Answer",
                "audioLang": "en-US"
            },
            {
                "id": "e45q2",
                "type": "flashcard",
                "prompt": "El kaldırmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Raise hand",
                "audioLang": "en-US",
                "imageOptions": [
                    "✋"
                ]
            },
            {
                "id": "e45q3",
                "type": "flashcard",
                "prompt": "Soru sormak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ask",
                "audioLang": "en-US",
                "imageOptions": [
                    "❓"
                ]
            },
            {
                "id": "e45q4",
                "type": "flashcard",
                "prompt": "Cevaplamak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Answer",
                "audioLang": "en-US",
                "imageOptions": [
                    "💬"
                ]
            },
            {
                "id": "e45q5",
                "type": "flashcard",
                "prompt": "Anlamak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Understand",
                "audioLang": "en-US",
                "imageOptions": [
                    "💡"
                ]
            },
            {
                "id": "e45q6",
                "type": "flashcard",
                "prompt": "Tekrar etmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Repeat",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔄"
                ]
            },
            {
                "id": "e45q7",
                "type": "multipleChoice",
                "prompt": "\"Blackboard\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Cevaplamak",
                    "Tahta",
                    "Soru sormak",
                    "El kaldırmak"
                ],
                "correctIndex": 1,
                "audioText": "Blackboard",
                "audioLang": "en-US"
            },
            {
                "id": "e45q8",
                "type": "multipleChoice",
                "prompt": "\"Raise hand\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Tekrar etmek",
                    "El kaldırmak",
                    "Cevaplamak",
                    "Soru sormak"
                ],
                "correctIndex": 1,
                "audioText": "Raise hand",
                "audioLang": "en-US"
            },
            {
                "id": "e45q9",
                "type": "multipleChoice",
                "prompt": "\"Ask\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Cevaplamak",
                    "Anlamak",
                    "Soru sormak",
                    "El kaldırmak"
                ],
                "correctIndex": 2,
                "audioText": "Ask",
                "audioLang": "en-US"
            },
            {
                "id": "e45q10",
                "type": "translate",
                "prompt": "\"Cevaplamak\" nasıl söylenir?",
                "options": [
                    "Answer",
                    "Repeat",
                    "Blackboard",
                    "Raise hand"
                ],
                "correctIndex": 0,
                "audioText": "Answer",
                "audioLang": "en-US"
            },
            {
                "id": "e45q11",
                "type": "translate",
                "prompt": "\"Anlamak\" nasıl söylenir?",
                "options": [
                    "Understand",
                    "Answer",
                    "Raise hand",
                    "Repeat"
                ],
                "correctIndex": 0,
                "audioText": "Understand",
                "audioLang": "en-US"
            },
            {
                "id": "e45_sb_1wwbe",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Tahta\"",
                "correctAnswer": ["Blackboard"],
                "options": [
                    "Blackboard",
                    "hayır",
                    "güzel",
                    "ve"
                ],
                "audioText": "Blackboard",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e46",
        "title": "Tatil Yerleri",
        "description": "Tatil mekanları",
        "icon": "🏖️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e46q1",
                "type": "flashcard",
                "prompt": "Plaj",
                "options": [],
                "correctIndex": 0,
                "audioText": "Beach",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏖️"
                ]
            },
            {
                "id": "e46q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Plaj ve Dağ\"",
                "options": [
                    "Mountain",
                    "Beach",
                    "City",
                    "Island",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Beach",
                    "and",
                    "Mountain"
                ],
                "audioText": "Beach and Mountain",
                "audioLang": "en-US"
            },
            {
                "id": "e46q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Şehir görüyorum\"",
                "options": [
                    "Waterfall",
                    "City",
                    "see",
                    "Beach",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "City",
                    "see"
                ],
                "audioText": "I City see",
                "audioLang": "en-US"
            },
            {
                "id": "e46q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ada\"",
                "options": [
                    "is",
                    "This",
                    "Holiday",
                    "Island",
                    "Beach"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Island"
                ],
                "audioText": "This is Island",
                "audioLang": "en-US"
            },
            {
                "id": "e46q2",
                "type": "flashcard",
                "prompt": "Dağ",
                "options": [],
                "correctIndex": 0,
                "audioText": "Mountain",
                "audioLang": "en-US",
                "imageOptions": [
                    "⛰️"
                ]
            },
            {
                "id": "e46q3",
                "type": "flashcard",
                "prompt": "Şehir",
                "options": [],
                "correctIndex": 0,
                "audioText": "City",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏙️"
                ]
            },
            {
                "id": "e46q4",
                "type": "flashcard",
                "prompt": "Ada",
                "options": [],
                "correctIndex": 0,
                "audioText": "Island",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏝️"
                ]
            },
            {
                "id": "e46q5",
                "type": "flashcard",
                "prompt": "Şelale",
                "options": [],
                "correctIndex": 0,
                "audioText": "Waterfall",
                "audioLang": "en-US",
                "imageOptions": [
                    "💧"
                ]
            },
            {
                "id": "e46q6",
                "type": "flashcard",
                "prompt": "Tatil",
                "options": [],
                "correctIndex": 0,
                "audioText": "Holiday",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌴"
                ]
            },
            {
                "id": "e46q7",
                "type": "multipleChoice",
                "prompt": "\"Beach\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Plaj",
                    "Dağ",
                    "Şehir",
                    "Tatil"
                ],
                "correctIndex": 0,
                "audioText": "Beach",
                "audioLang": "en-US"
            },
            {
                "id": "e46q8",
                "type": "multipleChoice",
                "prompt": "\"Mountain\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ada",
                    "Şehir",
                    "Plaj",
                    "Dağ"
                ],
                "correctIndex": 3,
                "audioText": "Mountain",
                "audioLang": "en-US"
            },
            {
                "id": "e46q9",
                "type": "multipleChoice",
                "prompt": "\"City\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Şehir",
                    "Dağ",
                    "Plaj",
                    "Tatil"
                ],
                "correctIndex": 0,
                "audioText": "City",
                "audioLang": "en-US"
            },
            {
                "id": "e46q10",
                "type": "translate",
                "prompt": "\"Ada\" nasıl söylenir?",
                "options": [
                    "Island",
                    "City",
                    "Mountain",
                    "Beach"
                ],
                "correctIndex": 0,
                "audioText": "Island",
                "audioLang": "en-US"
            },
            {
                "id": "e46q11",
                "type": "translate",
                "prompt": "\"Şelale\" nasıl söylenir?",
                "options": [
                    "Waterfall",
                    "Beach",
                    "Holiday",
                    "Mountain"
                ],
                "correctIndex": 0,
                "audioText": "Waterfall",
                "audioLang": "en-US"
            },
            {
                "id": "e46_sb_usnxo",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Plaj\"",
                "correctAnswer": ["Beach"],
                "options": [
                    "kötü",
                    "Beach",
                    "iyi",
                    "hayır"
                ],
                "audioText": "Beach",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e47",
        "title": "Otelde",
        "description": "Otel kelimeleri",
        "icon": "🏨",
        "xpReward": 20,
        "questions": [
            {
                "id": "e47q1",
                "type": "flashcard",
                "prompt": "Oda",
                "options": [],
                "correctIndex": 0,
                "audioText": "Room",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛏️"
                ]
            },
            {
                "id": "e47q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Oda ve Resepsiyon\"",
                "options": [
                    "Room",
                    "Reservation",
                    "and",
                    "Bathroom",
                    "Reception"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Room",
                    "and",
                    "Reception"
                ],
                "audioText": "Room and Reception",
                "audioLang": "en-US"
            },
            {
                "id": "e47q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Anahtar görüyorum\"",
                "options": [
                    "I",
                    "Reservation",
                    "Room",
                    "Key",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Key",
                    "see"
                ],
                "audioText": "I Key see",
                "audioLang": "en-US"
            },
            {
                "id": "e47q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Banyo\"",
                "options": [
                    "This",
                    "Bathroom",
                    "is",
                    "Room",
                    "Reception"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Bathroom"
                ],
                "audioText": "This is Bathroom",
                "audioLang": "en-US"
            },
            {
                "id": "e47q2",
                "type": "flashcard",
                "prompt": "Resepsiyon",
                "options": [],
                "correctIndex": 0,
                "audioText": "Reception",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏨"
                ]
            },
            {
                "id": "e47q3",
                "type": "flashcard",
                "prompt": "Anahtar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Key",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔑"
                ]
            },
            {
                "id": "e47q4",
                "type": "flashcard",
                "prompt": "Banyo",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bathroom",
                "audioLang": "en-US",
                "imageOptions": [
                    "🚿"
                ]
            },
            {
                "id": "e47q5",
                "type": "flashcard",
                "prompt": "Rezervasyon",
                "options": [],
                "correctIndex": 0,
                "audioText": "Reservation",
                "audioLang": "en-US",
                "imageOptions": [
                    "📅"
                ]
            },
            {
                "id": "e47q6",
                "type": "flashcard",
                "prompt": "Hesap",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bill",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧾"
                ]
            },
            {
                "id": "e47q7",
                "type": "multipleChoice",
                "prompt": "\"Room\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Oda",
                    "Hesap",
                    "Rezervasyon",
                    "Banyo"
                ],
                "correctIndex": 0,
                "audioText": "Room",
                "audioLang": "en-US"
            },
            {
                "id": "e47q8",
                "type": "multipleChoice",
                "prompt": "\"Reception\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Resepsiyon",
                    "Oda",
                    "Anahtar",
                    "Hesap"
                ],
                "correctIndex": 0,
                "audioText": "Reception",
                "audioLang": "en-US"
            },
            {
                "id": "e47q9",
                "type": "multipleChoice",
                "prompt": "\"Key\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Resepsiyon",
                    "Banyo",
                    "Oda",
                    "Anahtar"
                ],
                "correctIndex": 3,
                "audioText": "Key",
                "audioLang": "en-US"
            },
            {
                "id": "e47q10",
                "type": "translate",
                "prompt": "\"Banyo\" nasıl söylenir?",
                "options": [
                    "Bathroom",
                    "Bill",
                    "Reception",
                    "Room"
                ],
                "correctIndex": 0,
                "audioText": "Bathroom",
                "audioLang": "en-US"
            },
            {
                "id": "e47q11",
                "type": "translate",
                "prompt": "\"Rezervasyon\" nasıl söylenir?",
                "options": [
                    "Reception",
                    "Reservation",
                    "Key",
                    "Bathroom"
                ],
                "correctIndex": 1,
                "audioText": "Reservation",
                "audioLang": "en-US"
            },
            {
                "id": "e47_sb_jq5v1",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Oda\"",
                "correctAnswer": ["Room"],
                "options": [
                    "hayır",
                    "evet",
                    "ne",
                    "Room"
                ],
                "audioText": "Room",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e48",
        "title": "Seyahat Planı",
        "description": "Seyahat hazırlıkları",
        "icon": "🧳",
        "xpReward": 20,
        "questions": [
            {
                "id": "e48q1",
                "type": "flashcard",
                "prompt": "Pasaport",
                "options": [],
                "correctIndex": 0,
                "audioText": "Passport",
                "audioLang": "en-US",
                "imageOptions": [
                    "🛂"
                ]
            },
            {
                "id": "e48q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Pasaport ve Vize\"",
                "options": [
                    "Visa",
                    "Suitcase",
                    "Ticket",
                    "and",
                    "Passport"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Passport",
                    "and",
                    "Visa"
                ],
                "audioText": "Passport and Visa",
                "audioLang": "en-US"
            },
            {
                "id": "e48q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Havalimanı görüyorum\"",
                "options": [
                    "Airport",
                    "Ticket",
                    "I",
                    "see",
                    "Visa"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Airport",
                    "see"
                ],
                "audioText": "I Airport see",
                "audioLang": "en-US"
            },
            {
                "id": "e48q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Bavul\"",
                "options": [
                    "This",
                    "Passport",
                    "Suitcase",
                    "Visa",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Suitcase"
                ],
                "audioText": "This is Suitcase",
                "audioLang": "en-US"
            },
            {
                "id": "e48q2",
                "type": "flashcard",
                "prompt": "Vize",
                "options": [],
                "correctIndex": 0,
                "audioText": "Visa",
                "audioLang": "en-US",
                "imageOptions": [
                    "📋"
                ]
            },
            {
                "id": "e48q3",
                "type": "flashcard",
                "prompt": "Havalimanı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Airport",
                "audioLang": "en-US",
                "imageOptions": [
                    "✈️"
                ]
            },
            {
                "id": "e48q4",
                "type": "flashcard",
                "prompt": "Bavul",
                "options": [],
                "correctIndex": 0,
                "audioText": "Suitcase",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧳"
                ]
            },
            {
                "id": "e48q5",
                "type": "flashcard",
                "prompt": "Bilet",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ticket",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎫"
                ]
            },
            {
                "id": "e48q6",
                "type": "flashcard",
                "prompt": "Tur",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tour",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗺️"
                ]
            },
            {
                "id": "e48q7",
                "type": "multipleChoice",
                "prompt": "\"Passport\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Tur",
                    "Vize",
                    "Bilet",
                    "Pasaport"
                ],
                "correctIndex": 3,
                "audioText": "Passport",
                "audioLang": "en-US"
            },
            {
                "id": "e48q8",
                "type": "multipleChoice",
                "prompt": "\"Visa\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Pasaport",
                    "Tur",
                    "Bilet",
                    "Vize"
                ],
                "correctIndex": 3,
                "audioText": "Visa",
                "audioLang": "en-US"
            },
            {
                "id": "e48q9",
                "type": "multipleChoice",
                "prompt": "\"Airport\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Havalimanı",
                    "Pasaport",
                    "Vize",
                    "Bavul"
                ],
                "correctIndex": 0,
                "audioText": "Airport",
                "audioLang": "en-US"
            },
            {
                "id": "e48q10",
                "type": "translate",
                "prompt": "\"Bavul\" nasıl söylenir?",
                "options": [
                    "Ticket",
                    "Suitcase",
                    "Airport",
                    "Tour"
                ],
                "correctIndex": 1,
                "audioText": "Suitcase",
                "audioLang": "en-US"
            },
            {
                "id": "e48q11",
                "type": "translate",
                "prompt": "\"Bilet\" nasıl söylenir?",
                "options": [
                    "Visa",
                    "Passport",
                    "Tour",
                    "Ticket"
                ],
                "correctIndex": 3,
                "audioText": "Ticket",
                "audioLang": "en-US"
            },
            {
                "id": "e48_sb_ltm65",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Pasaport\"",
                "correctAnswer": ["Passport"],
                "options": [
                    "Passport",
                    "ben",
                    "güzel",
                    "kötü"
                ],
                "audioText": "Passport",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e49",
        "title": "Spor",
        "description": "Spor aktiviteleri",
        "icon": "⚽",
        "xpReward": 20,
        "questions": [
            {
                "id": "e49q1",
                "type": "flashcard",
                "prompt": "Futbol",
                "options": [],
                "correctIndex": 0,
                "audioText": "Football",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚽"
                ]
            },
            {
                "id": "e49q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Futbol ve Tenis\"",
                "options": [
                    "Tennis",
                    "Swimming",
                    "Football",
                    "and",
                    "Running"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Football",
                    "and",
                    "Tennis"
                ],
                "audioText": "Football and Tennis",
                "audioLang": "en-US"
            },
            {
                "id": "e49q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Yüzme görüyorum\"",
                "options": [
                    "Tennis",
                    "Swimming",
                    "I",
                    "see",
                    "Football"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Swimming",
                    "see"
                ],
                "audioText": "I Swimming see",
                "audioLang": "en-US"
            },
            {
                "id": "e49q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Koşu\"",
                "options": [
                    "This",
                    "Running",
                    "is",
                    "Tennis",
                    "Volleyball"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Running"
                ],
                "audioText": "This is Running",
                "audioLang": "en-US"
            },
            {
                "id": "e49q2",
                "type": "flashcard",
                "prompt": "Tenis",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tennis",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎾"
                ]
            },
            {
                "id": "e49q3",
                "type": "flashcard",
                "prompt": "Yüzme",
                "options": [],
                "correctIndex": 0,
                "audioText": "Swimming",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏊"
                ]
            },
            {
                "id": "e49q4",
                "type": "flashcard",
                "prompt": "Koşu",
                "options": [],
                "correctIndex": 0,
                "audioText": "Running",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏃"
                ]
            },
            {
                "id": "e49q5",
                "type": "flashcard",
                "prompt": "Basketbol",
                "options": [],
                "correctIndex": 0,
                "audioText": "Basketball",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏀"
                ]
            },
            {
                "id": "e49q6",
                "type": "flashcard",
                "prompt": "Voleybol",
                "options": [],
                "correctIndex": 0,
                "audioText": "Volleyball",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏐"
                ]
            },
            {
                "id": "e49q7",
                "type": "multipleChoice",
                "prompt": "\"Football\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Futbol",
                    "Tenis",
                    "Yüzme",
                    "Basketbol"
                ],
                "correctIndex": 0,
                "audioText": "Football",
                "audioLang": "en-US"
            },
            {
                "id": "e49q8",
                "type": "multipleChoice",
                "prompt": "\"Tennis\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Tenis",
                    "Basketbol",
                    "Voleybol",
                    "Koşu"
                ],
                "correctIndex": 0,
                "audioText": "Tennis",
                "audioLang": "en-US"
            },
            {
                "id": "e49q9",
                "type": "multipleChoice",
                "prompt": "\"Swimming\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Koşu",
                    "Voleybol",
                    "Yüzme",
                    "Futbol"
                ],
                "correctIndex": 2,
                "audioText": "Swimming",
                "audioLang": "en-US"
            },
            {
                "id": "e49q10",
                "type": "translate",
                "prompt": "\"Koşu\" nasıl söylenir?",
                "options": [
                    "Running",
                    "Basketball",
                    "Tennis",
                    "Swimming"
                ],
                "correctIndex": 0,
                "audioText": "Running",
                "audioLang": "en-US"
            },
            {
                "id": "e49q11",
                "type": "translate",
                "prompt": "\"Basketbol\" nasıl söylenir?",
                "options": [
                    "Volleyball",
                    "Swimming",
                    "Running",
                    "Basketball"
                ],
                "correctIndex": 3,
                "audioText": "Basketball",
                "audioLang": "en-US"
            },
            {
                "id": "e49_sb_7bwmr",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Futbol\"",
                "correctAnswer": ["Football"],
                "options": [
                    "Football",
                    "ben",
                    "sen",
                    "güzel"
                ],
                "audioText": "Football",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e50",
        "title": "Müzik ve Sanat",
        "description": "Sanat ve müzik",
        "icon": "🎸",
        "xpReward": 20,
        "questions": [
            {
                "id": "e50q1",
                "type": "flashcard",
                "prompt": "Müzik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Music",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎵"
                ]
            },
            {
                "id": "e50q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Müzik ve Şarkı\"",
                "options": [
                    "Painting",
                    "Music",
                    "Dance",
                    "Song",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Music",
                    "and",
                    "Song"
                ],
                "audioText": "Music and Song",
                "audioLang": "en-US"
            },
            {
                "id": "e50q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Enstrüman görüyorum\"",
                "options": [
                    "I",
                    "see",
                    "Music",
                    "Instrument",
                    "Song"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Instrument",
                    "see"
                ],
                "audioText": "I Instrument see",
                "audioLang": "en-US"
            },
            {
                "id": "e50q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Resim\"",
                "options": [
                    "Painting",
                    "Music",
                    "is",
                    "This",
                    "Song"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Painting"
                ],
                "audioText": "This is Painting",
                "audioLang": "en-US"
            },
            {
                "id": "e50q2",
                "type": "flashcard",
                "prompt": "Şarkı",
                "options": [],
                "correctIndex": 0,
                "audioText": "Song",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎤"
                ]
            },
            {
                "id": "e50q3",
                "type": "flashcard",
                "prompt": "Enstrüman",
                "options": [],
                "correctIndex": 0,
                "audioText": "Instrument",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎸"
                ]
            },
            {
                "id": "e50q4",
                "type": "flashcard",
                "prompt": "Resim",
                "options": [],
                "correctIndex": 0,
                "audioText": "Painting",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎨"
                ]
            },
            {
                "id": "e50q5",
                "type": "flashcard",
                "prompt": "Dans",
                "options": [],
                "correctIndex": 0,
                "audioText": "Dance",
                "audioLang": "en-US",
                "imageOptions": [
                    "💃"
                ]
            },
            {
                "id": "e50q6",
                "type": "flashcard",
                "prompt": "Tiyatro",
                "options": [],
                "correctIndex": 0,
                "audioText": "Theater",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎭"
                ]
            },
            {
                "id": "e50q7",
                "type": "multipleChoice",
                "prompt": "\"Music\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Tiyatro",
                    "Resim",
                    "Müzik",
                    "Enstrüman"
                ],
                "correctIndex": 2,
                "audioText": "Music",
                "audioLang": "en-US"
            },
            {
                "id": "e50q8",
                "type": "multipleChoice",
                "prompt": "\"Song\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Şarkı",
                    "Tiyatro",
                    "Müzik",
                    "Dans"
                ],
                "correctIndex": 0,
                "audioText": "Song",
                "audioLang": "en-US"
            },
            {
                "id": "e50q9",
                "type": "multipleChoice",
                "prompt": "\"Instrument\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Dans",
                    "Resim",
                    "Tiyatro",
                    "Enstrüman"
                ],
                "correctIndex": 3,
                "audioText": "Instrument",
                "audioLang": "en-US"
            },
            {
                "id": "e50q10",
                "type": "translate",
                "prompt": "\"Resim\" nasıl söylenir?",
                "options": [
                    "Painting",
                    "Song",
                    "Dance",
                    "Music"
                ],
                "correctIndex": 0,
                "audioText": "Painting",
                "audioLang": "en-US"
            },
            {
                "id": "e50q11",
                "type": "translate",
                "prompt": "\"Dans\" nasıl söylenir?",
                "options": [
                    "Dance",
                    "Painting",
                    "Instrument",
                    "Song"
                ],
                "correctIndex": 0,
                "audioText": "Dance",
                "audioLang": "en-US"
            },
            {
                "id": "e50_sb_8fld6",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Müzik\"",
                "correctAnswer": ["Music"],
                "options": [
                    "Music",
                    "kötü",
                    "çok",
                    "ve"
                ],
                "audioText": "Music",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e51",
        "title": "Boş Zaman",
        "description": "Hobi ve eğlence",
        "icon": "🎮",
        "xpReward": 20,
        "questions": [
            {
                "id": "e51q1",
                "type": "flashcard",
                "prompt": "Okuma",
                "options": [],
                "correctIndex": 0,
                "audioText": "Reading",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e51q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Okuma ve Oyun\"",
                "options": [
                    "Movie",
                    "Game",
                    "Reading",
                    "Cooking",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Reading",
                    "and",
                    "Game"
                ],
                "audioText": "Reading and Game",
                "audioLang": "en-US"
            },
            {
                "id": "e51q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Film görüyorum\"",
                "options": [
                    "Movie",
                    "see",
                    "I",
                    "Game",
                    "Cooking"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Movie",
                    "see"
                ],
                "audioText": "I Movie see",
                "audioLang": "en-US"
            },
            {
                "id": "e51q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Seyahat\"",
                "options": [
                    "Game",
                    "This",
                    "Travel",
                    "Reading",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Travel"
                ],
                "audioText": "This is Travel",
                "audioLang": "en-US"
            },
            {
                "id": "e51q2",
                "type": "flashcard",
                "prompt": "Oyun",
                "options": [],
                "correctIndex": 0,
                "audioText": "Game",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎮"
                ]
            },
            {
                "id": "e51q3",
                "type": "flashcard",
                "prompt": "Film",
                "options": [],
                "correctIndex": 0,
                "audioText": "Movie",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎬"
                ]
            },
            {
                "id": "e51q4",
                "type": "flashcard",
                "prompt": "Seyahat",
                "options": [],
                "correctIndex": 0,
                "audioText": "Travel",
                "audioLang": "en-US",
                "imageOptions": [
                    "✈️"
                ]
            },
            {
                "id": "e51q5",
                "type": "flashcard",
                "prompt": "Yemek yapmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cooking",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍳"
                ]
            },
            {
                "id": "e51q6",
                "type": "flashcard",
                "prompt": "Bahçecilik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Gardening",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌱"
                ]
            },
            {
                "id": "e51q7",
                "type": "multipleChoice",
                "prompt": "\"Reading\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yemek yapmak",
                    "Bahçecilik",
                    "Oyun",
                    "Okuma"
                ],
                "correctIndex": 3,
                "audioText": "Reading",
                "audioLang": "en-US"
            },
            {
                "id": "e51q8",
                "type": "multipleChoice",
                "prompt": "\"Game\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Seyahat",
                    "Oyun",
                    "Yemek yapmak",
                    "Film"
                ],
                "correctIndex": 1,
                "audioText": "Game",
                "audioLang": "en-US"
            },
            {
                "id": "e51q9",
                "type": "multipleChoice",
                "prompt": "\"Movie\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Oyun",
                    "Okuma",
                    "Yemek yapmak",
                    "Film"
                ],
                "correctIndex": 3,
                "audioText": "Movie",
                "audioLang": "en-US"
            },
            {
                "id": "e51q10",
                "type": "translate",
                "prompt": "\"Seyahat\" nasıl söylenir?",
                "options": [
                    "Travel",
                    "Cooking",
                    "Game",
                    "Reading"
                ],
                "correctIndex": 0,
                "audioText": "Travel",
                "audioLang": "en-US"
            },
            {
                "id": "e51q11",
                "type": "translate",
                "prompt": "\"Yemek yapmak\" nasıl söylenir?",
                "options": [
                    "Cooking",
                    "Reading",
                    "Game",
                    "Travel"
                ],
                "correctIndex": 0,
                "audioText": "Cooking",
                "audioLang": "en-US"
            },
            {
                "id": "e51_sb_4m7u7",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Okuma\"",
                "correctAnswer": ["Reading"],
                "options": [
                    "hayır",
                    "kötü",
                    "Reading"
                ],
                "audioText": "Reading",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e52",
        "title": "Mevsimler",
        "description": "Yılın mevsimleri",
        "icon": "🍂",
        "xpReward": 20,
        "questions": [
            {
                "id": "e52q1",
                "type": "flashcard",
                "prompt": "İlkbahar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Spring",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌸"
                ]
            },
            {
                "id": "e52q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"İlkbahar ve Yaz\"",
                "options": [
                    "Summer",
                    "Spring",
                    "Autumn",
                    "Winter",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Spring",
                    "and",
                    "Summer"
                ],
                "audioText": "Spring and Summer",
                "audioLang": "en-US"
            },
            {
                "id": "e52q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Sonbahar görüyorum\"",
                "options": [
                    "I",
                    "Summer",
                    "Autumn",
                    "Hot",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Autumn",
                    "see"
                ],
                "audioText": "I Autumn see",
                "audioLang": "en-US"
            },
            {
                "id": "e52q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kış\"",
                "options": [
                    "Spring",
                    "Summer",
                    "This",
                    "Winter",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Winter"
                ],
                "audioText": "This is Winter",
                "audioLang": "en-US"
            },
            {
                "id": "e52q2",
                "type": "flashcard",
                "prompt": "Yaz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Summer",
                "audioLang": "en-US",
                "imageOptions": [
                    "☀️"
                ]
            },
            {
                "id": "e52q3",
                "type": "flashcard",
                "prompt": "Sonbahar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Autumn",
                "audioLang": "en-US",
                "imageOptions": [
                    "🍂"
                ]
            },
            {
                "id": "e52q4",
                "type": "flashcard",
                "prompt": "Kış",
                "options": [],
                "correctIndex": 0,
                "audioText": "Winter",
                "audioLang": "en-US",
                "imageOptions": [
                    "❄️"
                ]
            },
            {
                "id": "e52q5",
                "type": "flashcard",
                "prompt": "Sıcak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hot",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌡️"
                ]
            },
            {
                "id": "e52q6",
                "type": "flashcard",
                "prompt": "Soğuk",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cold",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧊"
                ]
            },
            {
                "id": "e52q7",
                "type": "multipleChoice",
                "prompt": "\"Spring\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sonbahar",
                    "Soğuk",
                    "Kış",
                    "İlkbahar"
                ],
                "correctIndex": 3,
                "audioText": "Spring",
                "audioLang": "en-US"
            },
            {
                "id": "e52q8",
                "type": "multipleChoice",
                "prompt": "\"Summer\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sonbahar",
                    "Yaz",
                    "Kış",
                    "İlkbahar"
                ],
                "correctIndex": 1,
                "audioText": "Summer",
                "audioLang": "en-US"
            },
            {
                "id": "e52q9",
                "type": "multipleChoice",
                "prompt": "\"Autumn\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sonbahar",
                    "Yaz",
                    "Soğuk",
                    "İlkbahar"
                ],
                "correctIndex": 0,
                "audioText": "Autumn",
                "audioLang": "en-US"
            },
            {
                "id": "e52q10",
                "type": "translate",
                "prompt": "\"Kış\" nasıl söylenir?",
                "options": [
                    "Winter",
                    "Spring",
                    "Summer",
                    "Autumn"
                ],
                "correctIndex": 0,
                "audioText": "Winter",
                "audioLang": "en-US"
            },
            {
                "id": "e52q11",
                "type": "translate",
                "prompt": "\"Sıcak\" nasıl söylenir?",
                "options": [
                    "Summer",
                    "Spring",
                    "Hot",
                    "Cold"
                ],
                "correctIndex": 2,
                "audioText": "Hot",
                "audioLang": "en-US"
            },
            {
                "id": "e52_sb_cq9uz",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"İlkbahar\"",
                "correctAnswer": ["Spring"],
                "options": [
                    "hayır",
                    "Spring",
                    "güzel",
                    "ne"
                ],
                "audioText": "Spring",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e53",
        "title": "Hava Durumu",
        "description": "Hava koşulları",
        "icon": "🌦️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e53q1",
                "type": "flashcard",
                "prompt": "Yağmur",
                "options": [],
                "correctIndex": 0,
                "audioText": "Rain",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌧️"
                ]
            },
            {
                "id": "e53q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Yağmur ve Kar\"",
                "options": [
                    "and",
                    "Rain",
                    "Snow",
                    "Wind",
                    "Sun"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Rain",
                    "and",
                    "Snow"
                ],
                "audioText": "Rain and Snow",
                "audioLang": "en-US"
            },
            {
                "id": "e53q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Güneş görüyorum\"",
                "options": [
                    "see",
                    "I",
                    "Snow",
                    "Rain",
                    "Sun"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Sun",
                    "see"
                ],
                "audioText": "I Sun see",
                "audioLang": "en-US"
            },
            {
                "id": "e53q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Rüzgar\"",
                "options": [
                    "Storm",
                    "This",
                    "Snow",
                    "is",
                    "Wind"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Wind"
                ],
                "audioText": "This is Wind",
                "audioLang": "en-US"
            },
            {
                "id": "e53q2",
                "type": "flashcard",
                "prompt": "Kar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Snow",
                "audioLang": "en-US",
                "imageOptions": [
                    "❄️"
                ]
            },
            {
                "id": "e53q3",
                "type": "flashcard",
                "prompt": "Güneş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Sun",
                "audioLang": "en-US",
                "imageOptions": [
                    "☀️"
                ]
            },
            {
                "id": "e53q4",
                "type": "flashcard",
                "prompt": "Rüzgar",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wind",
                "audioLang": "en-US",
                "imageOptions": [
                    "💨"
                ]
            },
            {
                "id": "e53q5",
                "type": "flashcard",
                "prompt": "Bulut",
                "options": [],
                "correctIndex": 0,
                "audioText": "Cloud",
                "audioLang": "en-US",
                "imageOptions": [
                    "☁️"
                ]
            },
            {
                "id": "e53q6",
                "type": "flashcard",
                "prompt": "Fırtına",
                "options": [],
                "correctIndex": 0,
                "audioText": "Storm",
                "audioLang": "en-US",
                "imageOptions": [
                    "⛈️"
                ]
            },
            {
                "id": "e53q7",
                "type": "multipleChoice",
                "prompt": "\"Rain\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Güneş",
                    "Rüzgar",
                    "Bulut",
                    "Yağmur"
                ],
                "correctIndex": 3,
                "audioText": "Rain",
                "audioLang": "en-US"
            },
            {
                "id": "e53q8",
                "type": "multipleChoice",
                "prompt": "\"Snow\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kar",
                    "Yağmur",
                    "Güneş",
                    "Rüzgar"
                ],
                "correctIndex": 0,
                "audioText": "Snow",
                "audioLang": "en-US"
            },
            {
                "id": "e53q9",
                "type": "multipleChoice",
                "prompt": "\"Sun\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yağmur",
                    "Bulut",
                    "Fırtına",
                    "Güneş"
                ],
                "correctIndex": 3,
                "audioText": "Sun",
                "audioLang": "en-US"
            },
            {
                "id": "e53q10",
                "type": "translate",
                "prompt": "\"Rüzgar\" nasıl söylenir?",
                "options": [
                    "Wind",
                    "Sun",
                    "Cloud",
                    "Storm"
                ],
                "correctIndex": 0,
                "audioText": "Wind",
                "audioLang": "en-US"
            },
            {
                "id": "e53q11",
                "type": "translate",
                "prompt": "\"Bulut\" nasıl söylenir?",
                "options": [
                    "Storm",
                    "Cloud",
                    "Wind",
                    "Sun"
                ],
                "correctIndex": 1,
                "audioText": "Cloud",
                "audioLang": "en-US"
            },
            {
                "id": "e53_sb_zz2kb",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Yağmur\"",
                "correctAnswer": ["Rain"],
                "options": [
                    "evet",
                    "hayır",
                    "Rain",
                    "bu"
                ],
                "audioText": "Rain",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e54",
        "title": "Coğrafya",
        "description": "Coğrafi kavramlar",
        "icon": "🌍",
        "xpReward": 20,
        "questions": [
            {
                "id": "e54q1",
                "type": "flashcard",
                "prompt": "Kıta",
                "options": [],
                "correctIndex": 0,
                "audioText": "Continent",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌍"
                ]
            },
            {
                "id": "e54q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Kıta ve Ülke\"",
                "options": [
                    "Lake",
                    "Continent",
                    "Country",
                    "and",
                    "River"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Continent",
                    "and",
                    "Country"
                ],
                "audioText": "Continent and Country",
                "audioLang": "en-US"
            },
            {
                "id": "e54q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Nehir görüyorum\"",
                "options": [
                    "I",
                    "River",
                    "Ocean",
                    "Country",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "River",
                    "see"
                ],
                "audioText": "I River see",
                "audioLang": "en-US"
            },
            {
                "id": "e54q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Göl\"",
                "options": [
                    "Desert",
                    "Continent",
                    "is",
                    "Lake",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Lake"
                ],
                "audioText": "This is Lake",
                "audioLang": "en-US"
            },
            {
                "id": "e54q2",
                "type": "flashcard",
                "prompt": "Ülke",
                "options": [],
                "correctIndex": 0,
                "audioText": "Country",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏳️"
                ]
            },
            {
                "id": "e54q3",
                "type": "flashcard",
                "prompt": "Nehir",
                "options": [],
                "correctIndex": 0,
                "audioText": "River",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏞️"
                ]
            },
            {
                "id": "e54q4",
                "type": "flashcard",
                "prompt": "Göl",
                "options": [],
                "correctIndex": 0,
                "audioText": "Lake",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏞️"
                ]
            },
            {
                "id": "e54q5",
                "type": "flashcard",
                "prompt": "Okyanus",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ocean",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌊"
                ]
            },
            {
                "id": "e54q6",
                "type": "flashcard",
                "prompt": "Çöl",
                "options": [],
                "correctIndex": 0,
                "audioText": "Desert",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏜️"
                ]
            },
            {
                "id": "e54q7",
                "type": "multipleChoice",
                "prompt": "\"Continent\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çöl",
                    "Nehir",
                    "Ülke",
                    "Kıta"
                ],
                "correctIndex": 3,
                "audioText": "Continent",
                "audioLang": "en-US"
            },
            {
                "id": "e54q8",
                "type": "multipleChoice",
                "prompt": "\"Country\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Göl",
                    "Ülke",
                    "Okyanus",
                    "Nehir"
                ],
                "correctIndex": 1,
                "audioText": "Country",
                "audioLang": "en-US"
            },
            {
                "id": "e54q9",
                "type": "multipleChoice",
                "prompt": "\"River\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Okyanus",
                    "Ülke",
                    "Nehir",
                    "Kıta"
                ],
                "correctIndex": 2,
                "audioText": "River",
                "audioLang": "en-US"
            },
            {
                "id": "e54q10",
                "type": "translate",
                "prompt": "\"Göl\" nasıl söylenir?",
                "options": [
                    "Desert",
                    "River",
                    "Ocean",
                    "Lake"
                ],
                "correctIndex": 3,
                "audioText": "Lake",
                "audioLang": "en-US"
            },
            {
                "id": "e54q11",
                "type": "translate",
                "prompt": "\"Okyanus\" nasıl söylenir?",
                "options": [
                    "Ocean",
                    "Continent",
                    "Country",
                    "River"
                ],
                "correctIndex": 0,
                "audioText": "Ocean",
                "audioLang": "en-US"
            },
            {
                "id": "e54_sb_wy5ro",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Kıta\"",
                "correctAnswer": ["Continent"],
                "options": [
                    "hayır",
                    "sen",
                    "Continent"
                ],
                "audioText": "Continent",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e55",
        "title": "Arkadaşlık",
        "description": "Dostluk ifadeleri",
        "icon": "🤝",
        "xpReward": 20,
        "questions": [
            {
                "id": "e55q1",
                "type": "flashcard",
                "prompt": "Arkadaş",
                "options": [],
                "correctIndex": 0,
                "audioText": "Friend",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤝"
                ]
            },
            {
                "id": "e55q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Arkadaş ve Tanışmak\"",
                "options": [
                    "Friendship",
                    "and",
                    "Like",
                    "Friend",
                    "Meet"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Friend",
                    "and",
                    "Meet"
                ],
                "audioText": "Friend and Meet",
                "audioLang": "en-US"
            },
            {
                "id": "e55q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Arkadaşlık görüyorum\"",
                "options": [
                    "Friendship",
                    "Friend",
                    "Help",
                    "see",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Friendship",
                    "see"
                ],
                "audioText": "I Friendship see",
                "audioLang": "en-US"
            },
            {
                "id": "e55q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sevmek\"",
                "options": [
                    "Like",
                    "This",
                    "Share",
                    "is",
                    "Friend"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Like"
                ],
                "audioText": "This is Like",
                "audioLang": "en-US"
            },
            {
                "id": "e55q2",
                "type": "flashcard",
                "prompt": "Tanışmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Meet",
                "audioLang": "en-US",
                "imageOptions": [
                    "👋"
                ]
            },
            {
                "id": "e55q3",
                "type": "flashcard",
                "prompt": "Arkadaşlık",
                "options": [],
                "correctIndex": 0,
                "audioText": "Friendship",
                "audioLang": "en-US",
                "imageOptions": [
                    "💛"
                ]
            },
            {
                "id": "e55q4",
                "type": "flashcard",
                "prompt": "Sevmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Like",
                "audioLang": "en-US",
                "imageOptions": [
                    "❤️"
                ]
            },
            {
                "id": "e55q5",
                "type": "flashcard",
                "prompt": "Yardım etmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Help",
                "audioLang": "en-US",
                "imageOptions": [
                    "🆘"
                ]
            },
            {
                "id": "e55q6",
                "type": "flashcard",
                "prompt": "Paylaşmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Share",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤲"
                ]
            },
            {
                "id": "e55q7",
                "type": "multipleChoice",
                "prompt": "\"Friend\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Paylaşmak",
                    "Arkadaş",
                    "Tanışmak",
                    "Yardım etmek"
                ],
                "correctIndex": 1,
                "audioText": "Friend",
                "audioLang": "en-US"
            },
            {
                "id": "e55q8",
                "type": "multipleChoice",
                "prompt": "\"Meet\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yardım etmek",
                    "Sevmek",
                    "Arkadaş",
                    "Tanışmak"
                ],
                "correctIndex": 3,
                "audioText": "Meet",
                "audioLang": "en-US"
            },
            {
                "id": "e55q9",
                "type": "multipleChoice",
                "prompt": "\"Friendship\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Arkadaşlık",
                    "Tanışmak",
                    "Arkadaş",
                    "Yardım etmek"
                ],
                "correctIndex": 0,
                "audioText": "Friendship",
                "audioLang": "en-US"
            },
            {
                "id": "e55q10",
                "type": "translate",
                "prompt": "\"Sevmek\" nasıl söylenir?",
                "options": [
                    "Help",
                    "Friend",
                    "Like",
                    "Share"
                ],
                "correctIndex": 2,
                "audioText": "Like",
                "audioLang": "en-US"
            },
            {
                "id": "e55q11",
                "type": "translate",
                "prompt": "\"Yardım etmek\" nasıl söylenir?",
                "options": [
                    "Friend",
                    "Like",
                    "Meet",
                    "Help"
                ],
                "correctIndex": 3,
                "audioText": "Help",
                "audioLang": "en-US"
            },
            {
                "id": "e55_sb_yl59m",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Arkadaş\"",
                "correctAnswer": ["Friend"],
                "options": [
                    "güzel",
                    "Friend",
                    "evet",
                    "kim"
                ],
                "audioText": "Friend",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e56",
        "title": "Davetler",
        "description": "Davet ve etkinlik",
        "icon": "💌",
        "xpReward": 20,
        "questions": [
            {
                "id": "e56q1",
                "type": "flashcard",
                "prompt": "Davet",
                "options": [],
                "correctIndex": 0,
                "audioText": "Invitation",
                "audioLang": "en-US",
                "imageOptions": [
                    "💌"
                ]
            },
            {
                "id": "e56q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Davet ve Parti\"",
                "options": [
                    "Wedding",
                    "Party",
                    "Accept",
                    "Invitation",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Invitation",
                    "and",
                    "Party"
                ],
                "audioText": "Invitation and Party",
                "audioLang": "en-US"
            },
            {
                "id": "e56q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Hediye görüyorum\"",
                "options": [
                    "Party",
                    "I",
                    "Gift",
                    "see",
                    "Invitation"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Gift",
                    "see"
                ],
                "audioText": "I Gift see",
                "audioLang": "en-US"
            },
            {
                "id": "e56q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Düğün\"",
                "options": [
                    "is",
                    "Wedding",
                    "This",
                    "Party",
                    "Invitation"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Wedding"
                ],
                "audioText": "This is Wedding",
                "audioLang": "en-US"
            },
            {
                "id": "e56q2",
                "type": "flashcard",
                "prompt": "Parti",
                "options": [],
                "correctIndex": 0,
                "audioText": "Party",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎉"
                ]
            },
            {
                "id": "e56q3",
                "type": "flashcard",
                "prompt": "Hediye",
                "options": [],
                "correctIndex": 0,
                "audioText": "Gift",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎁"
                ]
            },
            {
                "id": "e56q4",
                "type": "flashcard",
                "prompt": "Düğün",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wedding",
                "audioLang": "en-US",
                "imageOptions": [
                    "💍"
                ]
            },
            {
                "id": "e56q5",
                "type": "flashcard",
                "prompt": "Kabul etmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Accept",
                "audioLang": "en-US",
                "imageOptions": [
                    "✅"
                ]
            },
            {
                "id": "e56q6",
                "type": "flashcard",
                "prompt": "Reddetmek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Reject",
                "audioLang": "en-US",
                "imageOptions": [
                    "❌"
                ]
            },
            {
                "id": "e56q7",
                "type": "multipleChoice",
                "prompt": "\"Invitation\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kabul etmek",
                    "Davet",
                    "Reddetmek",
                    "Düğün"
                ],
                "correctIndex": 1,
                "audioText": "Invitation",
                "audioLang": "en-US"
            },
            {
                "id": "e56q8",
                "type": "multipleChoice",
                "prompt": "\"Party\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Parti",
                    "Düğün",
                    "Hediye",
                    "Davet"
                ],
                "correctIndex": 0,
                "audioText": "Party",
                "audioLang": "en-US"
            },
            {
                "id": "e56q9",
                "type": "multipleChoice",
                "prompt": "\"Gift\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Parti",
                    "Hediye",
                    "Davet",
                    "Düğün"
                ],
                "correctIndex": 1,
                "audioText": "Gift",
                "audioLang": "en-US"
            },
            {
                "id": "e56q10",
                "type": "translate",
                "prompt": "\"Düğün\" nasıl söylenir?",
                "options": [
                    "Gift",
                    "Invitation",
                    "Party",
                    "Wedding"
                ],
                "correctIndex": 3,
                "audioText": "Wedding",
                "audioLang": "en-US"
            },
            {
                "id": "e56q11",
                "type": "translate",
                "prompt": "\"Kabul etmek\" nasıl söylenir?",
                "options": [
                    "Accept",
                    "Invitation",
                    "Gift",
                    "Party"
                ],
                "correctIndex": 0,
                "audioText": "Accept",
                "audioLang": "en-US"
            },
            {
                "id": "e56_sb_bx36q",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Davet\"",
                "correctAnswer": ["Invitation"],
                "options": [
                    "kim",
                    "Invitation",
                    "evet",
                    "kötü"
                ],
                "audioText": "Invitation",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e57",
        "title": "Kutlamalar",
        "description": "Özel günler",
        "icon": "🎉",
        "xpReward": 20,
        "questions": [
            {
                "id": "e57q1",
                "type": "flashcard",
                "prompt": "Doğum günü",
                "options": [],
                "correctIndex": 0,
                "audioText": "Birthday",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎂"
                ]
            },
            {
                "id": "e57q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Doğum günü ve Yeni yıl\"",
                "options": [
                    "Congratulations",
                    "New Year",
                    "Be happy",
                    "and",
                    "Birthday"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Birthday",
                    "and",
                    "New Year"
                ],
                "audioText": "Birthday and New Year",
                "audioLang": "en-US"
            },
            {
                "id": "e57q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Bayram görüyorum\"",
                "options": [
                    "Holiday",
                    "Be happy",
                    "I",
                    "see",
                    "Birthday"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Holiday",
                    "see"
                ],
                "audioText": "I Holiday see",
                "audioLang": "en-US"
            },
            {
                "id": "e57q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Tebrikler\"",
                "options": [
                    "Birthday",
                    "New Year",
                    "is",
                    "Congratulations",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Congratulations"
                ],
                "audioText": "This is Congratulations",
                "audioLang": "en-US"
            },
            {
                "id": "e57q2",
                "type": "flashcard",
                "prompt": "Yeni yıl",
                "options": [],
                "correctIndex": 0,
                "audioText": "New Year",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎆"
                ]
            },
            {
                "id": "e57q3",
                "type": "flashcard",
                "prompt": "Bayram",
                "options": [],
                "correctIndex": 0,
                "audioText": "Holiday",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎊"
                ]
            },
            {
                "id": "e57q4",
                "type": "flashcard",
                "prompt": "Tebrikler",
                "options": [],
                "correctIndex": 0,
                "audioText": "Congratulations",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎊"
                ]
            },
            {
                "id": "e57q5",
                "type": "flashcard",
                "prompt": "Mutlu ol",
                "options": [],
                "correctIndex": 0,
                "audioText": "Be happy",
                "audioLang": "en-US",
                "imageOptions": [
                    "😊"
                ]
            },
            {
                "id": "e57q6",
                "type": "flashcard",
                "prompt": "Eğlen",
                "options": [],
                "correctIndex": 0,
                "audioText": "Have fun",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎈"
                ]
            },
            {
                "id": "e57q7",
                "type": "multipleChoice",
                "prompt": "\"Birthday\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Doğum günü",
                    "Eğlen",
                    "Tebrikler",
                    "Mutlu ol"
                ],
                "correctIndex": 0,
                "audioText": "Birthday",
                "audioLang": "en-US"
            },
            {
                "id": "e57q8",
                "type": "multipleChoice",
                "prompt": "\"New Year\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Bayram",
                    "Doğum günü",
                    "Mutlu ol",
                    "Yeni yıl"
                ],
                "correctIndex": 3,
                "audioText": "New Year",
                "audioLang": "en-US"
            },
            {
                "id": "e57q9",
                "type": "multipleChoice",
                "prompt": "\"Holiday\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yeni yıl",
                    "Mutlu ol",
                    "Doğum günü",
                    "Bayram"
                ],
                "correctIndex": 3,
                "audioText": "Holiday",
                "audioLang": "en-US"
            },
            {
                "id": "e57q10",
                "type": "translate",
                "prompt": "\"Tebrikler\" nasıl söylenir?",
                "options": [
                    "Congratulations",
                    "Birthday",
                    "New Year",
                    "Be happy"
                ],
                "correctIndex": 0,
                "audioText": "Congratulations",
                "audioLang": "en-US"
            },
            {
                "id": "e57q11",
                "type": "translate",
                "prompt": "\"Mutlu ol\" nasıl söylenir?",
                "options": [
                    "New Year",
                    "Holiday",
                    "Birthday",
                    "Be happy"
                ],
                "correctIndex": 3,
                "audioText": "Be happy",
                "audioLang": "en-US"
            },
            {
                "id": "e57_sb_mhlwv",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Doğum günü\"",
                "correctAnswer": ["Birthday"],
                "options": [
                    "ne",
                    "Birthday",
                    "çok",
                    "bu"
                ],
                "audioText": "Birthday",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e58",
        "title": "Bağlaçlar",
        "description": "Bağlama kelimeleri",
        "icon": "🔗",
        "xpReward": 20,
        "questions": [
            {
                "id": "e58q1",
                "type": "flashcard",
                "prompt": "Ve",
                "options": [],
                "correctIndex": 0,
                "audioText": "And",
                "audioLang": "en-US",
                "imageOptions": [
                    "➕"
                ]
            },
            {
                "id": "e58q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ve ve Ama\"",
                "options": [
                    "But",
                    "And",
                    "and",
                    "Because",
                    "Or"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "And",
                    "and",
                    "But"
                ],
                "audioText": "And and But",
                "audioLang": "en-US"
            },
            {
                "id": "e58q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Veya görüyorum\"",
                "options": [
                    "I",
                    "And",
                    "But",
                    "see",
                    "Or"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Or",
                    "see"
                ],
                "audioText": "I Or see",
                "audioLang": "en-US"
            },
            {
                "id": "e58q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Çünkü\"",
                "options": [
                    "However",
                    "And",
                    "This",
                    "Because",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Because"
                ],
                "audioText": "This is Because",
                "audioLang": "en-US"
            },
            {
                "id": "e58q2",
                "type": "flashcard",
                "prompt": "Ama",
                "options": [],
                "correctIndex": 0,
                "audioText": "But",
                "audioLang": "en-US",
                "imageOptions": [
                    "↔️"
                ]
            },
            {
                "id": "e58q3",
                "type": "flashcard",
                "prompt": "Veya",
                "options": [],
                "correctIndex": 0,
                "audioText": "Or",
                "audioLang": "en-US",
                "imageOptions": [
                    "🔀"
                ]
            },
            {
                "id": "e58q4",
                "type": "flashcard",
                "prompt": "Çünkü",
                "options": [],
                "correctIndex": 0,
                "audioText": "Because",
                "audioLang": "en-US",
                "imageOptions": [
                    "💡"
                ]
            },
            {
                "id": "e58q5",
                "type": "flashcard",
                "prompt": "Eğer",
                "options": [],
                "correctIndex": 0,
                "audioText": "If",
                "audioLang": "en-US",
                "imageOptions": [
                    "❓"
                ]
            },
            {
                "id": "e58q6",
                "type": "flashcard",
                "prompt": "Fakat",
                "options": [],
                "correctIndex": 0,
                "audioText": "However",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚠️"
                ]
            },
            {
                "id": "e58q7",
                "type": "multipleChoice",
                "prompt": "\"And\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Çünkü",
                    "Ve",
                    "Veya",
                    "Ama"
                ],
                "correctIndex": 1,
                "audioText": "And",
                "audioLang": "en-US"
            },
            {
                "id": "e58q8",
                "type": "multipleChoice",
                "prompt": "\"But\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ama",
                    "Eğer",
                    "Veya",
                    "Ve"
                ],
                "correctIndex": 0,
                "audioText": "But",
                "audioLang": "en-US"
            },
            {
                "id": "e58q9",
                "type": "multipleChoice",
                "prompt": "\"Or\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ama",
                    "Veya",
                    "Ve",
                    "Eğer"
                ],
                "correctIndex": 1,
                "audioText": "Or",
                "audioLang": "en-US"
            },
            {
                "id": "e58q10",
                "type": "translate",
                "prompt": "\"Çünkü\" nasıl söylenir?",
                "options": [
                    "Because",
                    "However",
                    "If",
                    "Or"
                ],
                "correctIndex": 0,
                "audioText": "Because",
                "audioLang": "en-US"
            },
            {
                "id": "e58q11",
                "type": "translate",
                "prompt": "\"Eğer\" nasıl söylenir?",
                "options": [
                    "However",
                    "If",
                    "Or",
                    "Because"
                ],
                "correctIndex": 1,
                "audioText": "If",
                "audioLang": "en-US"
            },
            {
                "id": "e58_sb_cm9ho",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Ve\"",
                "correctAnswer": ["And"],
                "options": [
                    "And",
                    "güzel",
                    "ve",
                    "bu"
                ],
                "audioText": "And",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e59",
        "title": "Soru Kelimeleri",
        "description": "Soru sözcükleri",
        "icon": "❓",
        "xpReward": 20,
        "questions": [
            {
                "id": "e59q1",
                "type": "flashcard",
                "prompt": "Ne",
                "options": [],
                "correctIndex": 0,
                "audioText": "What",
                "audioLang": "en-US",
                "imageOptions": [
                    "❓"
                ]
            },
            {
                "id": "e59q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ne ve Kim\"",
                "options": [
                    "and",
                    "Who",
                    "What",
                    "Where",
                    "When"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "What",
                    "and",
                    "Who"
                ],
                "audioText": "What and Who",
                "audioLang": "en-US"
            },
            {
                "id": "e59q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Ne zaman görüyorum\"",
                "options": [
                    "see",
                    "Who",
                    "What",
                    "When",
                    "I"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "When",
                    "see"
                ],
                "audioText": "I When see",
                "audioLang": "en-US"
            },
            {
                "id": "e59q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Nerede\"",
                "options": [
                    "Where",
                    "is",
                    "This",
                    "What",
                    "Why"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Where"
                ],
                "audioText": "This is Where",
                "audioLang": "en-US"
            },
            {
                "id": "e59q2",
                "type": "flashcard",
                "prompt": "Kim",
                "options": [],
                "correctIndex": 0,
                "audioText": "Who",
                "audioLang": "en-US",
                "imageOptions": [
                    "👤"
                ]
            },
            {
                "id": "e59q3",
                "type": "flashcard",
                "prompt": "Ne zaman",
                "options": [],
                "correctIndex": 0,
                "audioText": "When",
                "audioLang": "en-US",
                "imageOptions": [
                    "⏰"
                ]
            },
            {
                "id": "e59q4",
                "type": "flashcard",
                "prompt": "Nerede",
                "options": [],
                "correctIndex": 0,
                "audioText": "Where",
                "audioLang": "en-US",
                "imageOptions": [
                    "📍"
                ]
            },
            {
                "id": "e59q5",
                "type": "flashcard",
                "prompt": "Nasıl",
                "options": [],
                "correctIndex": 0,
                "audioText": "How",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤔"
                ]
            },
            {
                "id": "e59q6",
                "type": "flashcard",
                "prompt": "Neden",
                "options": [],
                "correctIndex": 0,
                "audioText": "Why",
                "audioLang": "en-US",
                "imageOptions": [
                    "💭"
                ]
            },
            {
                "id": "e59q7",
                "type": "multipleChoice",
                "prompt": "\"What\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ne",
                    "Nasıl",
                    "Ne zaman",
                    "Nerede"
                ],
                "correctIndex": 0,
                "audioText": "What",
                "audioLang": "en-US"
            },
            {
                "id": "e59q8",
                "type": "multipleChoice",
                "prompt": "\"Who\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ne zaman",
                    "Neden",
                    "Nasıl",
                    "Kim"
                ],
                "correctIndex": 3,
                "audioText": "Who",
                "audioLang": "en-US"
            },
            {
                "id": "e59q9",
                "type": "multipleChoice",
                "prompt": "\"When\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Nasıl",
                    "Kim",
                    "Neden",
                    "Ne zaman"
                ],
                "correctIndex": 3,
                "audioText": "When",
                "audioLang": "en-US"
            },
            {
                "id": "e59q10",
                "type": "translate",
                "prompt": "\"Nerede\" nasıl söylenir?",
                "options": [
                    "Where",
                    "What",
                    "Why",
                    "Who"
                ],
                "correctIndex": 0,
                "audioText": "Where",
                "audioLang": "en-US"
            },
            {
                "id": "e59q11",
                "type": "translate",
                "prompt": "\"Nasıl\" nasıl söylenir?",
                "options": [
                    "How",
                    "Who",
                    "When",
                    "Where"
                ],
                "correctIndex": 0,
                "audioText": "How",
                "audioLang": "en-US"
            },
            {
                "id": "e59_sb_4xhvm",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Ne\"",
                "correctAnswer": ["What"],
                "options": [
                    "bu",
                    "What",
                    "evet",
                    "ne"
                ],
                "audioText": "What",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e60",
        "title": "Edatlar",
        "description": "Yer ifadeleri",
        "icon": "➕",
        "xpReward": 20,
        "questions": [
            {
                "id": "e60q1",
                "type": "flashcard",
                "prompt": "İçinde",
                "options": [],
                "correctIndex": 0,
                "audioText": "In",
                "audioLang": "en-US",
                "imageOptions": [
                    "📦"
                ]
            },
            {
                "id": "e60q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"İçinde ve Üstünde\"",
                "options": [
                    "In front",
                    "On",
                    "and",
                    "In",
                    "Under"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "In",
                    "and",
                    "On"
                ],
                "audioText": "In and On",
                "audioLang": "en-US"
            },
            {
                "id": "e60q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Altında görüyorum\"",
                "options": [
                    "On",
                    "In",
                    "Under",
                    "I",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Under",
                    "see"
                ],
                "audioText": "I Under see",
                "audioLang": "en-US"
            },
            {
                "id": "e60q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Yanında\"",
                "options": [
                    "This",
                    "is",
                    "In",
                    "Behind",
                    "Beside"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Beside"
                ],
                "audioText": "This is Beside",
                "audioLang": "en-US"
            },
            {
                "id": "e60q2",
                "type": "flashcard",
                "prompt": "Üstünde",
                "options": [],
                "correctIndex": 0,
                "audioText": "On",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬆️"
                ]
            },
            {
                "id": "e60q3",
                "type": "flashcard",
                "prompt": "Altında",
                "options": [],
                "correctIndex": 0,
                "audioText": "Under",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬇️"
                ]
            },
            {
                "id": "e60q4",
                "type": "flashcard",
                "prompt": "Yanında",
                "options": [],
                "correctIndex": 0,
                "audioText": "Beside",
                "audioLang": "en-US",
                "imageOptions": [
                    "↔️"
                ]
            },
            {
                "id": "e60q5",
                "type": "flashcard",
                "prompt": "Önünde",
                "options": [],
                "correctIndex": 0,
                "audioText": "In front",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬆️"
                ]
            },
            {
                "id": "e60q6",
                "type": "flashcard",
                "prompt": "Arkasında",
                "options": [],
                "correctIndex": 0,
                "audioText": "Behind",
                "audioLang": "en-US",
                "imageOptions": [
                    "⬇️"
                ]
            },
            {
                "id": "e60q7",
                "type": "multipleChoice",
                "prompt": "\"In\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İçinde",
                    "Önünde",
                    "Arkasında",
                    "Altında"
                ],
                "correctIndex": 0,
                "audioText": "In",
                "audioLang": "en-US"
            },
            {
                "id": "e60q8",
                "type": "multipleChoice",
                "prompt": "\"On\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Yanında",
                    "Altında",
                    "Önünde",
                    "Üstünde"
                ],
                "correctIndex": 3,
                "audioText": "On",
                "audioLang": "en-US"
            },
            {
                "id": "e60q9",
                "type": "multipleChoice",
                "prompt": "\"Under\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Önünde",
                    "Altında",
                    "Üstünde",
                    "İçinde"
                ],
                "correctIndex": 1,
                "audioText": "Under",
                "audioLang": "en-US"
            },
            {
                "id": "e60q10",
                "type": "translate",
                "prompt": "\"Yanında\" nasıl söylenir?",
                "options": [
                    "In front",
                    "Beside",
                    "Under",
                    "Behind"
                ],
                "correctIndex": 1,
                "audioText": "Beside",
                "audioLang": "en-US"
            },
            {
                "id": "e60q11",
                "type": "translate",
                "prompt": "\"Önünde\" nasıl söylenir?",
                "options": [
                    "On",
                    "In front",
                    "Under",
                    "Behind"
                ],
                "correctIndex": 1,
                "audioText": "In front",
                "audioLang": "en-US"
            },
            {
                "id": "e60_sb_ddwrw",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"İçinde\"",
                "correctAnswer": ["In"],
                "options": [
                    "kötü",
                    "ben",
                    "In"
                ],
                "audioText": "In",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e61",
        "title": "Fikir Belirtme",
        "description": "Görüş ifade etme",
        "icon": "💡",
        "xpReward": 20,
        "questions": [
            {
                "id": "e61q1",
                "type": "flashcard",
                "prompt": "Bence",
                "options": [],
                "correctIndex": 0,
                "audioText": "I think",
                "audioLang": "en-US",
                "imageOptions": [
                    "💭"
                ]
            },
            {
                "id": "e61q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bence ve Bana göre\"",
                "options": [
                    "In my opinion",
                    "Correct",
                    "Good",
                    "and",
                    "I think"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I think",
                    "and",
                    "In my opinion"
                ],
                "audioText": "I think and In my opinion",
                "audioLang": "en-US"
            },
            {
                "id": "e61q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben İyi görüyorum\"",
                "options": [
                    "I",
                    "I think",
                    "Good",
                    "see",
                    "Correct"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Good",
                    "see"
                ],
                "audioText": "I Good see",
                "audioLang": "en-US"
            },
            {
                "id": "e61q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kötü\"",
                "options": [
                    "Wrong",
                    "This",
                    "is",
                    "I think",
                    "Bad"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Bad"
                ],
                "audioText": "This is Bad",
                "audioLang": "en-US"
            },
            {
                "id": "e61q2",
                "type": "flashcard",
                "prompt": "Bana göre",
                "options": [],
                "correctIndex": 0,
                "audioText": "In my opinion",
                "audioLang": "en-US",
                "imageOptions": [
                    "🗣️"
                ]
            },
            {
                "id": "e61q3",
                "type": "flashcard",
                "prompt": "İyi",
                "options": [],
                "correctIndex": 0,
                "audioText": "Good",
                "audioLang": "en-US",
                "imageOptions": [
                    "👍"
                ]
            },
            {
                "id": "e61q4",
                "type": "flashcard",
                "prompt": "Kötü",
                "options": [],
                "correctIndex": 0,
                "audioText": "Bad",
                "audioLang": "en-US",
                "imageOptions": [
                    "👎"
                ]
            },
            {
                "id": "e61q5",
                "type": "flashcard",
                "prompt": "Doğru",
                "options": [],
                "correctIndex": 0,
                "audioText": "Correct",
                "audioLang": "en-US",
                "imageOptions": [
                    "✅"
                ]
            },
            {
                "id": "e61q6",
                "type": "flashcard",
                "prompt": "Yanlış",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wrong",
                "audioLang": "en-US",
                "imageOptions": [
                    "❌"
                ]
            },
            {
                "id": "e61q7",
                "type": "multipleChoice",
                "prompt": "\"I think\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İyi",
                    "Bana göre",
                    "Doğru",
                    "Bence"
                ],
                "correctIndex": 3,
                "audioText": "I think",
                "audioLang": "en-US"
            },
            {
                "id": "e61q8",
                "type": "multipleChoice",
                "prompt": "\"In my opinion\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İyi",
                    "Bence",
                    "Yanlış",
                    "Bana göre"
                ],
                "correctIndex": 3,
                "audioText": "In my opinion",
                "audioLang": "en-US"
            },
            {
                "id": "e61q9",
                "type": "multipleChoice",
                "prompt": "\"Good\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "İyi",
                    "Bence",
                    "Doğru",
                    "Bana göre"
                ],
                "correctIndex": 0,
                "audioText": "Good",
                "audioLang": "en-US"
            },
            {
                "id": "e61q10",
                "type": "translate",
                "prompt": "\"Kötü\" nasıl söylenir?",
                "options": [
                    "In my opinion",
                    "Bad",
                    "I think",
                    "Good"
                ],
                "correctIndex": 1,
                "audioText": "Bad",
                "audioLang": "en-US"
            },
            {
                "id": "e61q11",
                "type": "translate",
                "prompt": "\"Doğru\" nasıl söylenir?",
                "options": [
                    "I think",
                    "Wrong",
                    "In my opinion",
                    "Correct"
                ],
                "correctIndex": 3,
                "audioText": "Correct",
                "audioLang": "en-US"
            },
            {
                "id": "e61_sb_fvvl1",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Bence\"",
                "correctAnswer": ["I", "think"],
                "options": [
                    "kim",
                    "I",
                    "think",
                    "iyi"
                ],
                "audioText": "I think",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e62",
        "title": "Tartışma",
        "description": "Tartışma dili",
        "icon": "🗣️",
        "xpReward": 20,
        "questions": [
            {
                "id": "e62q1",
                "type": "flashcard",
                "prompt": "Katılmak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Agree",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤝"
                ]
            },
            {
                "id": "e62q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Katılmak ve Katılmamak\"",
                "options": [
                    "Definitely",
                    "Agree",
                    "and",
                    "Yes but",
                    "Disagree"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Agree",
                    "and",
                    "Disagree"
                ],
                "audioText": "Agree and Disagree",
                "audioLang": "en-US"
            },
            {
                "id": "e62q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Evet ama görüyorum\"",
                "options": [
                    "I don't think so",
                    "I",
                    "Yes but",
                    "see",
                    "Disagree"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Yes but",
                    "see"
                ],
                "audioText": "I Yes but see",
                "audioLang": "en-US"
            },
            {
                "id": "e62q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Kesinlikle\"",
                "options": [
                    "Disagree",
                    "is",
                    "Definitely",
                    "This",
                    "You are right"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Definitely"
                ],
                "audioText": "This is Definitely",
                "audioLang": "en-US"
            },
            {
                "id": "e62q2",
                "type": "flashcard",
                "prompt": "Katılmamak",
                "options": [],
                "correctIndex": 0,
                "audioText": "Disagree",
                "audioLang": "en-US",
                "imageOptions": [
                    "🙅"
                ]
            },
            {
                "id": "e62q3",
                "type": "flashcard",
                "prompt": "Evet ama",
                "options": [],
                "correctIndex": 0,
                "audioText": "Yes but",
                "audioLang": "en-US",
                "imageOptions": [
                    "⚖️"
                ]
            },
            {
                "id": "e62q4",
                "type": "flashcard",
                "prompt": "Kesinlikle",
                "options": [],
                "correctIndex": 0,
                "audioText": "Definitely",
                "audioLang": "en-US",
                "imageOptions": [
                    "💯"
                ]
            },
            {
                "id": "e62q5",
                "type": "flashcard",
                "prompt": "Sanmıyorum",
                "options": [],
                "correctIndex": 0,
                "audioText": "I don't think so",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤔"
                ]
            },
            {
                "id": "e62q6",
                "type": "flashcard",
                "prompt": "Haklısın",
                "options": [],
                "correctIndex": 0,
                "audioText": "You are right",
                "audioLang": "en-US",
                "imageOptions": [
                    "✅"
                ]
            },
            {
                "id": "e62q7",
                "type": "multipleChoice",
                "prompt": "\"Agree\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Katılmak",
                    "Evet ama",
                    "Kesinlikle",
                    "Sanmıyorum"
                ],
                "correctIndex": 0,
                "audioText": "Agree",
                "audioLang": "en-US"
            },
            {
                "id": "e62q8",
                "type": "multipleChoice",
                "prompt": "\"Disagree\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Haklısın",
                    "Katılmamak",
                    "Katılmak",
                    "Evet ama"
                ],
                "correctIndex": 1,
                "audioText": "Disagree",
                "audioLang": "en-US"
            },
            {
                "id": "e62q9",
                "type": "multipleChoice",
                "prompt": "\"Yes but\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kesinlikle",
                    "Katılmamak",
                    "Haklısın",
                    "Evet ama"
                ],
                "correctIndex": 3,
                "audioText": "Yes but",
                "audioLang": "en-US"
            },
            {
                "id": "e62q10",
                "type": "translate",
                "prompt": "\"Kesinlikle\" nasıl söylenir?",
                "options": [
                    "Yes but",
                    "Agree",
                    "Disagree",
                    "Definitely"
                ],
                "correctIndex": 3,
                "audioText": "Definitely",
                "audioLang": "en-US"
            },
            {
                "id": "e62q11",
                "type": "translate",
                "prompt": "\"Sanmıyorum\" nasıl söylenir?",
                "options": [
                    "I don't think so",
                    "Definitely",
                    "You are right",
                    "Yes but"
                ],
                "correctIndex": 0,
                "audioText": "I don't think so",
                "audioLang": "en-US"
            },
            {
                "id": "e62_sb_0bdmo",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Katılmak\"",
                "correctAnswer": ["Agree"],
                "options": [
                    "bu",
                    "kötü",
                    "Agree",
                    "sen"
                ],
                "audioText": "Agree",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e63",
        "title": "Haberler",
        "description": "Medya ve iletişim",
        "icon": "📰",
        "xpReward": 20,
        "questions": [
            {
                "id": "e63q1",
                "type": "flashcard",
                "prompt": "Haber",
                "options": [],
                "correctIndex": 0,
                "audioText": "News",
                "audioLang": "en-US",
                "imageOptions": [
                    "📰"
                ]
            },
            {
                "id": "e63q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Haber ve Gazete\"",
                "options": [
                    "Broadcast",
                    "Newspaper",
                    "Radio",
                    "and",
                    "News"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "News",
                    "and",
                    "Newspaper"
                ],
                "audioText": "News and Newspaper",
                "audioLang": "en-US"
            },
            {
                "id": "e63q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Radyo görüyorum\"",
                "options": [
                    "Newspaper",
                    "Broadcast",
                    "I",
                    "Radio",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Radio",
                    "see"
                ],
                "audioText": "I Radio see",
                "audioLang": "en-US"
            },
            {
                "id": "e63q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Sosyal medya\"",
                "options": [
                    "This",
                    "News",
                    "Social media",
                    "Newspaper",
                    "is"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Social media"
                ],
                "audioText": "This is Social media",
                "audioLang": "en-US"
            },
            {
                "id": "e63q2",
                "type": "flashcard",
                "prompt": "Gazete",
                "options": [],
                "correctIndex": 0,
                "audioText": "Newspaper",
                "audioLang": "en-US",
                "imageOptions": [
                    "📄"
                ]
            },
            {
                "id": "e63q3",
                "type": "flashcard",
                "prompt": "Radyo",
                "options": [],
                "correctIndex": 0,
                "audioText": "Radio",
                "audioLang": "en-US",
                "imageOptions": [
                    "📻"
                ]
            },
            {
                "id": "e63q4",
                "type": "flashcard",
                "prompt": "Sosyal medya",
                "options": [],
                "correctIndex": 0,
                "audioText": "Social media",
                "audioLang": "en-US",
                "imageOptions": [
                    "📱"
                ]
            },
            {
                "id": "e63q5",
                "type": "flashcard",
                "prompt": "Yayın",
                "options": [],
                "correctIndex": 0,
                "audioText": "Broadcast",
                "audioLang": "en-US",
                "imageOptions": [
                    "📡"
                ]
            },
            {
                "id": "e63q6",
                "type": "flashcard",
                "prompt": "Duyuru",
                "options": [],
                "correctIndex": 0,
                "audioText": "Announcement",
                "audioLang": "en-US",
                "imageOptions": [
                    "📢"
                ]
            },
            {
                "id": "e63q7",
                "type": "multipleChoice",
                "prompt": "\"News\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Haber",
                    "Duyuru",
                    "Sosyal medya",
                    "Yayın"
                ],
                "correctIndex": 0,
                "audioText": "News",
                "audioLang": "en-US"
            },
            {
                "id": "e63q8",
                "type": "multipleChoice",
                "prompt": "\"Newspaper\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sosyal medya",
                    "Yayın",
                    "Haber",
                    "Gazete"
                ],
                "correctIndex": 3,
                "audioText": "Newspaper",
                "audioLang": "en-US"
            },
            {
                "id": "e63q9",
                "type": "multipleChoice",
                "prompt": "\"Radio\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Sosyal medya",
                    "Duyuru",
                    "Radyo",
                    "Yayın"
                ],
                "correctIndex": 2,
                "audioText": "Radio",
                "audioLang": "en-US"
            },
            {
                "id": "e63q10",
                "type": "translate",
                "prompt": "\"Sosyal medya\" nasıl söylenir?",
                "options": [
                    "Social media",
                    "News",
                    "Announcement",
                    "Newspaper"
                ],
                "correctIndex": 0,
                "audioText": "Social media",
                "audioLang": "en-US"
            },
            {
                "id": "e63q11",
                "type": "translate",
                "prompt": "\"Yayın\" nasıl söylenir?",
                "options": [
                    "Newspaper",
                    "Broadcast",
                    "Announcement",
                    "Radio"
                ],
                "correctIndex": 1,
                "audioText": "Broadcast",
                "audioLang": "en-US"
            },
            {
                "id": "e63_sb_e7cnl",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Haber\"",
                "correctAnswer": ["News"],
                "options": [
                    "kötü",
                    "News",
                    "çok",
                    "ben"
                ],
                "audioText": "News",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e64",
        "title": "Atasözleri",
        "description": "Bilge sözler",
        "icon": "📜",
        "xpReward": 20,
        "questions": [
            {
                "id": "e64q1",
                "type": "flashcard",
                "prompt": "Atasözü",
                "options": [],
                "correctIndex": 0,
                "audioText": "Proverb",
                "audioLang": "en-US",
                "imageOptions": [
                    "📜"
                ]
            },
            {
                "id": "e64q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Atasözü ve Bilgelik\"",
                "options": [
                    "Promise",
                    "and",
                    "Proverb",
                    "Wisdom",
                    "Story"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Proverb",
                    "and",
                    "Wisdom"
                ],
                "audioText": "Proverb and Wisdom",
                "audioLang": "en-US"
            },
            {
                "id": "e64q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Tavsiye görüyorum\"",
                "options": [
                    "I",
                    "Proverb",
                    "Wisdom",
                    "Advice",
                    "see"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Advice",
                    "see"
                ],
                "audioText": "I Advice see",
                "audioLang": "en-US"
            },
            {
                "id": "e64q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Söz\"",
                "options": [
                    "Proverb",
                    "is",
                    "Promise",
                    "Wisdom",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Promise"
                ],
                "audioText": "This is Promise",
                "audioLang": "en-US"
            },
            {
                "id": "e64q2",
                "type": "flashcard",
                "prompt": "Bilgelik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Wisdom",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦉"
                ]
            },
            {
                "id": "e64q3",
                "type": "flashcard",
                "prompt": "Tavsiye",
                "options": [],
                "correctIndex": 0,
                "audioText": "Advice",
                "audioLang": "en-US",
                "imageOptions": [
                    "💡"
                ]
            },
            {
                "id": "e64q4",
                "type": "flashcard",
                "prompt": "Söz",
                "options": [],
                "correctIndex": 0,
                "audioText": "Promise",
                "audioLang": "en-US",
                "imageOptions": [
                    "🤝"
                ]
            },
            {
                "id": "e64q5",
                "type": "flashcard",
                "prompt": "Hikaye",
                "options": [],
                "correctIndex": 0,
                "audioText": "Story",
                "audioLang": "en-US",
                "imageOptions": [
                    "📖"
                ]
            },
            {
                "id": "e64q6",
                "type": "flashcard",
                "prompt": "Anlam",
                "options": [],
                "correctIndex": 0,
                "audioText": "Meaning",
                "audioLang": "en-US",
                "imageOptions": [
                    "💭"
                ]
            },
            {
                "id": "e64q7",
                "type": "multipleChoice",
                "prompt": "\"Proverb\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Atasözü",
                    "Söz",
                    "Anlam",
                    "Tavsiye"
                ],
                "correctIndex": 0,
                "audioText": "Proverb",
                "audioLang": "en-US"
            },
            {
                "id": "e64q8",
                "type": "multipleChoice",
                "prompt": "\"Wisdom\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Atasözü",
                    "Söz",
                    "Bilgelik",
                    "Tavsiye"
                ],
                "correctIndex": 2,
                "audioText": "Wisdom",
                "audioLang": "en-US"
            },
            {
                "id": "e64q9",
                "type": "multipleChoice",
                "prompt": "\"Advice\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Tavsiye",
                    "Hikaye",
                    "Bilgelik",
                    "Anlam"
                ],
                "correctIndex": 0,
                "audioText": "Advice",
                "audioLang": "en-US"
            },
            {
                "id": "e64q10",
                "type": "translate",
                "prompt": "\"Söz\" nasıl söylenir?",
                "options": [
                    "Story",
                    "Promise",
                    "Wisdom",
                    "Meaning"
                ],
                "correctIndex": 1,
                "audioText": "Promise",
                "audioLang": "en-US"
            },
            {
                "id": "e64q11",
                "type": "translate",
                "prompt": "\"Hikaye\" nasıl söylenir?",
                "options": [
                    "Story",
                    "Meaning",
                    "Promise",
                    "Proverb"
                ],
                "correctIndex": 0,
                "audioText": "Story",
                "audioLang": "en-US"
            },
            {
                "id": "e64_sb_urakx",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Atasözü\"",
                "correctAnswer": ["Proverb"],
                "options": [
                    "iyi",
                    "çok",
                    "ne",
                    "Proverb"
                ],
                "audioText": "Proverb",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e65",
        "title": "Masallar",
        "description": "Efsane ve masal",
        "icon": "🦄",
        "xpReward": 20,
        "questions": [
            {
                "id": "e65q1",
                "type": "flashcard",
                "prompt": "Masal",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tale",
                "audioLang": "en-US",
                "imageOptions": [
                    "🧚"
                ]
            },
            {
                "id": "e65q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Masal ve Kahraman\"",
                "options": [
                    "Hero",
                    "Tale",
                    "Magic",
                    "and",
                    "Princess"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Tale",
                    "and",
                    "Hero"
                ],
                "audioText": "Tale and Hero",
                "audioLang": "en-US"
            },
            {
                "id": "e65q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Prenses görüyorum\"",
                "options": [
                    "see",
                    "I",
                    "Tale",
                    "Princess",
                    "Magic"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Princess",
                    "see"
                ],
                "audioText": "I Princess see",
                "audioLang": "en-US"
            },
            {
                "id": "e65q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Ejderha\"",
                "options": [
                    "Hero",
                    "Dragon",
                    "Treasure",
                    "is",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Dragon"
                ],
                "audioText": "This is Dragon",
                "audioLang": "en-US"
            },
            {
                "id": "e65q2",
                "type": "flashcard",
                "prompt": "Kahraman",
                "options": [],
                "correctIndex": 0,
                "audioText": "Hero",
                "audioLang": "en-US",
                "imageOptions": [
                    "🦸"
                ]
            },
            {
                "id": "e65q3",
                "type": "flashcard",
                "prompt": "Prenses",
                "options": [],
                "correctIndex": 0,
                "audioText": "Princess",
                "audioLang": "en-US",
                "imageOptions": [
                    "👸"
                ]
            },
            {
                "id": "e65q4",
                "type": "flashcard",
                "prompt": "Ejderha",
                "options": [],
                "correctIndex": 0,
                "audioText": "Dragon",
                "audioLang": "en-US",
                "imageOptions": [
                    "🐉"
                ]
            },
            {
                "id": "e65q5",
                "type": "flashcard",
                "prompt": "Sihir",
                "options": [],
                "correctIndex": 0,
                "audioText": "Magic",
                "audioLang": "en-US",
                "imageOptions": [
                    "✨"
                ]
            },
            {
                "id": "e65q6",
                "type": "flashcard",
                "prompt": "Hazine",
                "options": [],
                "correctIndex": 0,
                "audioText": "Treasure",
                "audioLang": "en-US",
                "imageOptions": [
                    "💎"
                ]
            },
            {
                "id": "e65q7",
                "type": "multipleChoice",
                "prompt": "\"Tale\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Masal",
                    "Ejderha",
                    "Prenses",
                    "Hazine"
                ],
                "correctIndex": 0,
                "audioText": "Tale",
                "audioLang": "en-US"
            },
            {
                "id": "e65q8",
                "type": "multipleChoice",
                "prompt": "\"Hero\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Ejderha",
                    "Hazine",
                    "Sihir",
                    "Kahraman"
                ],
                "correctIndex": 3,
                "audioText": "Hero",
                "audioLang": "en-US"
            },
            {
                "id": "e65q9",
                "type": "multipleChoice",
                "prompt": "\"Princess\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Kahraman",
                    "Ejderha",
                    "Prenses",
                    "Masal"
                ],
                "correctIndex": 2,
                "audioText": "Princess",
                "audioLang": "en-US"
            },
            {
                "id": "e65q10",
                "type": "translate",
                "prompt": "\"Ejderha\" nasıl söylenir?",
                "options": [
                    "Treasure",
                    "Princess",
                    "Magic",
                    "Dragon"
                ],
                "correctIndex": 3,
                "audioText": "Dragon",
                "audioLang": "en-US"
            },
            {
                "id": "e65q11",
                "type": "translate",
                "prompt": "\"Sihir\" nasıl söylenir?",
                "options": [
                    "Treasure",
                    "Hero",
                    "Tale",
                    "Magic"
                ],
                "correctIndex": 3,
                "audioText": "Magic",
                "audioLang": "en-US"
            },
            {
                "id": "e65_sb_9uvpa",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Masal\"",
                "correctAnswer": ["Tale"],
                "options": [
                    "kötü",
                    "Tale",
                    "iyi"
                ],
                "audioText": "Tale",
                "audioLang": "en-US"
            }
        ]
    },
    {
        "id": "e66",
        "title": "Gelenekler",
        "description": "Kültür ve adet",
        "icon": "🎭",
        "xpReward": 20,
        "questions": [
            {
                "id": "e66q1",
                "type": "flashcard",
                "prompt": "Gelenek",
                "options": [],
                "correctIndex": 0,
                "audioText": "Tradition",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏛️"
                ]
            },
            {
                "id": "e66q12",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Gelenek ve Tören\"",
                "options": [
                    "Ceremony",
                    "Heritage",
                    "Festival",
                    "Tradition",
                    "and"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "Tradition",
                    "and",
                    "Ceremony"
                ],
                "audioText": "Tradition and Ceremony",
                "audioLang": "en-US"
            },
            {
                "id": "e66q13",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Ben Kültür görüyorum\"",
                "options": [
                    "Culture",
                    "Festival",
                    "see",
                    "I",
                    "Tradition"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "I",
                    "Culture",
                    "see"
                ],
                "audioText": "I Culture see",
                "audioLang": "en-US"
            },
            {
                "id": "e66q14",
                "type": "constructSentence",
                "prompt": "Şu cümleyi çevir: \"Bu bir Miras\"",
                "options": [
                    "Heritage",
                    "is",
                    "Music",
                    "Ceremony",
                    "This"
                ],
                "correctIndex": 0,
                "correctAnswer": [
                    "This",
                    "is",
                    "Heritage"
                ],
                "audioText": "This is Heritage",
                "audioLang": "en-US"
            },
            {
                "id": "e66q2",
                "type": "flashcard",
                "prompt": "Tören",
                "options": [],
                "correctIndex": 0,
                "audioText": "Ceremony",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎊"
                ]
            },
            {
                "id": "e66q3",
                "type": "flashcard",
                "prompt": "Kültür",
                "options": [],
                "correctIndex": 0,
                "audioText": "Culture",
                "audioLang": "en-US",
                "imageOptions": [
                    "🌐"
                ]
            },
            {
                "id": "e66q4",
                "type": "flashcard",
                "prompt": "Miras",
                "options": [],
                "correctIndex": 0,
                "audioText": "Heritage",
                "audioLang": "en-US",
                "imageOptions": [
                    "🏺"
                ]
            },
            {
                "id": "e66q5",
                "type": "flashcard",
                "prompt": "Festival",
                "options": [],
                "correctIndex": 0,
                "audioText": "Festival",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎪"
                ]
            },
            {
                "id": "e66q6",
                "type": "flashcard",
                "prompt": "Müzik",
                "options": [],
                "correctIndex": 0,
                "audioText": "Music",
                "audioLang": "en-US",
                "imageOptions": [
                    "🎶"
                ]
            },
            {
                "id": "e66q7",
                "type": "multipleChoice",
                "prompt": "\"Tradition\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Festival",
                    "Gelenek",
                    "Tören",
                    "Kültür"
                ],
                "correctIndex": 1,
                "audioText": "Tradition",
                "audioLang": "en-US"
            },
            {
                "id": "e66q8",
                "type": "multipleChoice",
                "prompt": "\"Ceremony\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Festival",
                    "Tören",
                    "Miras",
                    "Kültür"
                ],
                "correctIndex": 1,
                "audioText": "Ceremony",
                "audioLang": "en-US"
            },
            {
                "id": "e66q9",
                "type": "multipleChoice",
                "prompt": "\"Culture\" kelimesinin Türkçe anlamı nedir?",
                "options": [
                    "Miras",
                    "Gelenek",
                    "Müzik",
                    "Kültür"
                ],
                "correctIndex": 3,
                "audioText": "Culture",
                "audioLang": "en-US"
            },
            {
                "id": "e66q10",
                "type": "translate",
                "prompt": "\"Miras\" nasıl söylenir?",
                "options": [
                    "Heritage",
                    "Culture",
                    "Music",
                    "Festival"
                ],
                "correctIndex": 0,
                "audioText": "Heritage",
                "audioLang": "en-US"
            },
            {
                "id": "e66q11",
                "type": "translate",
                "prompt": "\"Festival\" nasıl söylenir?",
                "options": [
                    "Culture",
                    "Heritage",
                    "Ceremony",
                    "Festival"
                ],
                "correctIndex": 3,
                "audioText": "Festival",
                "audioLang": "en-US"
            },
            {
                "id": "e66_sb_xopou",
                "type": "constructSentence",
                "prompt": "Nasıl dersin: \"Gelenek\"",
                "correctAnswer": ["Tradition"],
                "options": [
                    "Tradition",
                    "kim",
                    "hayır",
                    "evet"
                ],
                "audioText": "Tradition",
                "audioLang": "en-US"
            }
        ]
    }
];
