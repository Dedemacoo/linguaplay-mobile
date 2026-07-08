const fs = require('fs');

const dictionary = {
  "Saatler": [["Saat kaç?", "What time is it?"], ["Yarım", "Half past"], ["Çeyrek geçiyor", "Quarter past"], ["Dakika", "Minute"], ["Saat", "Hour"]],
  "Evcil Hayvanlar": [["Kedi", "Cat"], ["Köpek", "Dog"], ["Kuş", "Bird"], ["Balık", "Fish"], ["Tavşan", "Rabbit"]],
  "Vahşi Hayvanlar": [["Aslan", "Lion"], ["Kaplan", "Tiger"], ["Fil", "Elephant"], ["Ayı", "Bear"], ["Yılan", "Snake"]],
  "Doğa": [["Ağaç", "Tree"], ["Çiçek", "Flower"], ["Dağ", "Mountain"], ["Nehir", "River"], ["Güneş", "Sun"]],
  "Meyveler": [["Elma", "Apple"], ["Muz", "Banana"], ["Portakal", "Orange"], ["Üzüm", "Grape"], ["Çilek", "Strawberry"]],
  "Sebzeler": [["Domates", "Tomato"], ["Patates", "Potato"], ["Soğan", "Onion"], ["Havuç", "Carrot"], ["Biber", "Pepper"]],
  "İçecekler": [["Su", "Water"], ["Çay", "Tea"], ["Kahve", "Coffee"], ["Süt", "Milk"], ["Meyve Suyu", "Juice"]],
  "Odalar": [["Yatak odası", "Bedroom"], ["Oturma odası", "Living room"], ["Mutfak", "Kitchen"], ["Banyo", "Bathroom"], ["Bahçe", "Garden"]],
  "Mobilyalar": [["Yatak", "Bed"], ["Masa", "Table"], ["Sandalye", "Chair"], ["Koltuk", "Sofa"], ["Dolap", "Cabinet"]],
  "Mutfak Eşyaları": [["Bıçak", "Knife"], ["Çatal", "Fork"], ["Kaşık", "Spoon"], ["Tabak", "Plate"], ["Bardak", "Glass"]],
  "Vücut Bölümleri": [["Baş", "Head"], ["Göz", "Eye"], ["El", "Hand"], ["Ayak", "Foot"], ["Kol", "Arm"]],
  "Hastalıklar": [["Ateş", "Fever"], ["Öksürük", "Cough"], ["Baş ağrısı", "Headache"], ["Grip", "Flu"], ["Soğuk algınlığı", "Cold"]],
  "Hastanede": [["Doktor", "Doctor"], ["Hemşire", "Nurse"], ["İlaç", "Medicine"], ["Reçete", "Prescription"], ["Acil", "Emergency"]],
  "Kıyafetler": [["Gömlek", "Shirt"], ["Pantolon", "Pants"], ["Elbise", "Dress"], ["Ceket", "Jacket"], ["Ayakkabı", "Shoe"]],
  "Renklerle Giyim": [["Kırmızı elbise", "Red dress"], ["Mavi gömlek", "Blue shirt"], ["Siyah pantolon", "Black pants"], ["Yeşil ceket", "Green jacket"], ["Sarı şapka", "Yellow hat"]],
  "Pazarda": [["Taze", "Fresh"], ["Ucuz", "Cheap"], ["Pahalı", "Expensive"], ["Para üstü", "Change"], ["Fiyat", "Price"]],
  "Meslekler 1": [["Öğretmen", "Teacher"], ["Mühendis", "Engineer"], ["Polis", "Police"], ["Aşçı", "Chef"], ["Şoför", "Driver"]],
  "Meslekler 2": [["Avukat", "Lawyer"], ["Mimar", "Architect"], ["Çiftçi", "Farmer"], ["Hemşire", "Nurse"], ["Doktor", "Doctor"]],
  "İş Yerinde": [["Ofis", "Office"], ["Patron", "Boss"], ["Çalışan", "Employee"], ["Toplantı", "Meeting"], ["Masa", "Desk"]],
  "Mekanlar": [["Banka", "Bank"], ["Okul", "School"], ["Hastane", "Hospital"], ["Park", "Park"], ["Kütüphane", "Library"]],
  "Taşıtlar": [["Araba", "Car"], ["Otobüs", "Bus"], ["Tren", "Train"], ["Uçak", "Airplane"], ["Bisiklet", "Bicycle"]],
  "Yön Sorma": [["Sağ", "Right"], ["Sol", "Left"], ["Düz", "Straight"], ["Geri", "Back"], ["Harita", "Map"]],
  "Sabah Rutini": [["Uyanmak", "Wake up"], ["Yüz yıkamak", "Wash face"], ["Kahvaltı yapmak", "Have breakfast"], ["Giyinmek", "Get dressed"], ["Diş fırçalamak", "Brush teeth"]],
  "İş ve Okul": [["Çalışmak", "Work"], ["Okumak", "Study"], ["Öğrenmek", "Learn"], ["Sınav", "Exam"], ["Ödev", "Homework"]],
  "Akşam Rutini": [["Akşam yemeği", "Dinner"], ["Televizyon izlemek", "Watch TV"], ["Dinlenmek", "Rest"], ["Kitap okumak", "Read book"], ["Uyumak", "Sleep"]],
  "Hisler": [["Mutlu", "Happy"], ["Üzgün", "Sad"], ["Kızgın", "Angry"], ["Korkmuş", "Scared"], ["Heyecanlı", "Excited"]],
  "Karakter Özellikleri": [["Komik", "Funny"], ["Zeki", "Smart"], ["Tembel", "Lazy"], ["Çalışkan", "Hardworking"], ["Kibar", "Kind"]],
  "Tepkiler": [["Harika", "Great"], ["Kötü", "Bad"], ["Sürpriz", "Surprise"], ["İlginç", "Interesting"], ["Mükemmel", "Perfect"]],
  "Hareket Fiilleri": [["Koşmak", "Run"], ["Zıplamak", "Jump"], ["Yürümek", "Walk"], ["Yüzmek", "Swim"], ["Uçmak", "Fly"]],
  "Durum Fiilleri": [["Olmak", "Be"], ["Sahip olmak", "Have"], ["Bilmek", "Know"], ["Düşünmek", "Think"], ["Sevmek", "Like"]],
  "Günlük Fiiller": [["Görmek", "See"], ["Duymak", "Hear"], ["Yemek", "Eat"], ["İçmek", "Drink"], ["Yazmak", "Write"]],
  "Geçmiş Zaman": [["Dün", "Yesterday"], ["Geçen hafta", "Last week"], ["Önce", "Before"], ["Gitti", "Went"], ["Yaptı", "Did"]],
  "Gelecek Zaman": [["Yarın", "Tomorrow"], ["Gelecek hafta", "Next week"], ["Sonra", "Later"], ["Gidecek", "Will go"], ["Yapacak", "Will do"]],
  "Emir Kipleri": [["Dur", "Stop"], ["Gel", "Come"], ["Git", "Go"], ["Dinle", "Listen"], ["Bak", "Look"]],
  "Okul Eşyaları": [["Kalem", "Pen"], ["Kitap", "Book"], ["Defter", "Notebook"], ["Silgi", "Eraser"], ["Çanta", "Bag"]],
  "Dersler": [["Matematik", "Mathematics"], ["Fen", "Science"], ["Tarih", "History"], ["Coğrafya", "Geography"], ["Müzik", "Music"]],
  "Sınıfta": [["Öğrenci", "Student"], ["Öğretmen", "Teacher"], ["Tahta", "Board"], ["Sıra", "Desk"], ["Sınıf", "Classroom"]],
  "Tatil Yerleri": [["Plaj", "Beach"], ["Orman", "Forest"], ["Dağ", "Mountain"], ["Şehir", "City"], ["Köy", "Village"]],
  "Otelde": [["Oda", "Room"], ["Anahtar", "Key"], ["Rezervasyon", "Reservation"], ["Resepsiyon", "Reception"], ["Havlu", "Towel"]],
  "Seyahat Planı": [["Bilet", "Ticket"], ["Pasaport", "Passport"], ["Valiz", "Suitcase"], ["Havalimanı", "Airport"], ["Uçuş", "Flight"]],
  "Spor": [["Futbol", "Football"], ["Basketbol", "Basketball"], ["Tenis", "Tennis"], ["Yüzme", "Swimming"], ["Koşu", "Running"]],
  "Müzik ve Sanat": [["Şarkı", "Song"], ["Müzik", "Music"], ["Gitar", "Guitar"], ["Resim", "Painting"], ["Sanat", "Art"]],
  "Boş Zaman": [["Oyun", "Game"], ["Film", "Movie"], ["Kitap", "Book"], ["Park", "Park"], ["Hobi", "Hobby"]],
  "Mevsimler": [["İlkbahar", "Spring"], ["Yaz", "Summer"], ["Sonbahar", "Autumn"], ["Kış", "Winter"], ["Mevsim", "Season"]],
  "Hava Durumu": [["Güneşli", "Sunny"], ["Yağmurlu", "Rainy"], ["Karlı", "Snowy"], ["Rüzgarlı", "Windy"], ["Bulutlu", "Cloudy"]],
  "Coğrafya": [["Ülke", "Country"], ["Şehir", "City"], ["Nehir", "River"], ["Okyanus", "Ocean"], ["Kıta", "Continent"]],
  "Arkadaşlık": [["Arkadaş", "Friend"], ["Dost", "Best friend"], ["Sohbet", "Chat"], ["Oynamak", "Play"], ["Birlikte", "Together"]],
  "Davetler": [["Parti", "Party"], ["Davetiye", "Invitation"], ["Hediye", "Gift"], ["Kutlama", "Celebration"], ["Misafir", "Guest"]],
  "Kutlamalar": [["Doğum günü", "Birthday"], ["Yılbaşı", "New Year"], ["Düğün", "Wedding"], ["Bayram", "Holiday"], ["Tebrikler", "Congratulations"]],
  "Bağlaçlar": [["Ve", "And"], ["Veya", "Or"], ["Çünkü", "Because"], ["Ama", "But"], ["Eğer", "If"]],
  "Soru Kelimeleri": [["Kim", "Who"], ["Ne", "What"], ["Nerede", "Where"], ["Ne zaman", "When"], ["Neden", "Why"]],
  "Edatlar": [["İçinde", "In"], ["Üzerinde", "On"], ["Altında", "Under"], ["Yanında", "Next to"], ["Arasında", "Between"]],
  "Fikir Belirtme": [["Bence", "I think"], ["Belki", "Maybe"], ["Eminim", "I am sure"], ["Katılıyorum", "I agree"], ["Fikir", "Idea"]],
  "Tartışma": [["Konuşmak", "Talk"], ["Sormak", "Ask"], ["Cevap", "Answer"], ["Neden", "Reason"], ["Sorun", "Problem"]],
  "Haberler": [["Gazete", "Newspaper"], ["Haber", "News"], ["Televizyon", "Television"], ["Radyo", "Radio"], ["Bugün", "Today"]],
  "Atasözleri": [["Gelenek", "Tradition"], ["Kültür", "Culture"], ["Geçmiş", "Past"], ["Hikaye", "Story"], ["Tarih", "History"]],
  "Masallar": [["Kral", "King"], ["Kraliçe", "Queen"], ["Prens", "Prince"], ["Prenses", "Princess"], ["Büyü", "Magic"]],
  "Gelenekler": [["Dans", "Dance"], ["Müzik", "Music"], ["Giyim", "Clothing"], ["Yemek", "Food"], ["Festival", "Festival"]]
};

const file = 'c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts';
let content = fs.readFileSync(file, 'utf8');

// The English lessons are stored in `lessonsByLanguage['english']`.
// But wait, the file is currently exporting a single large object.
// We should parse it using our trick.
const _mod = { exports: {} };
const _fn = new Function('exports', 'module', 'require', content);
_fn(_mod.exports, _mod, require);
const lessonsByLanguage = _mod.exports.lessonsByLanguage;
const englishLessons = lessonsByLanguage.english;

// Flatten dictionary values to randomly select alternative options
const allEnglishWords = Object.values(dictionary).flat().map(pair => pair[1]);

function getRandomOptions(correctAnswer) {
  let opts = new Set();
  opts.add(correctAnswer);
  while(opts.size < 4) {
    opts.add(allEnglishWords[Math.floor(Math.random() * allEnglishWords.length)]);
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

for (let i = 0; i < englishLessons.length; i++) {
  const lesson = englishLessons[i];
  const title = lesson.title;
  
  if (dictionary[title]) {
    const pairs = dictionary[title];
      lesson.questions = pairs.map((pair, idx) => {
      const options = getRandomOptions(pair[1]);
      const correctIndex = options.indexOf(pair[1]);
      return {
        id: lesson.id + 'q' + (idx + 1),
        type: 'multipleChoice',
        prompt: '"' + pair[0] + '" İngilizcede nedir?',
        options: options,
        correctIndex: correctIndex,
        audioText: pair[1],
        audioLang: 'en'
      };
    });
  } else {
    // Check if it has default 'Test' placeholder audio text, which means it needs replacement
    if (lesson.questions[0] && lesson.questions[0].audioText === 'Test') {
       // Just fallback to something generic if title not mapped
       const fallbackPairs = [["Elma", "Apple"], ["Araba", "Car"], ["Kitap", "Book"], ["Masa", "Desk"], ["Su", "Water"]];
       lesson.questions = fallbackPairs.map((pair, idx) => {
         const options = getRandomOptions(pair[1]);
         const correctIndex = options.indexOf(pair[1]);
         return {
           id: lesson.id + 'q' + (idx + 1),
           type: 'multipleChoice',
           prompt: '"' + pair[0] + '" İngilizcede nedir?',
           options: options,
           correctIndex: correctIndex,
           audioText: pair[1],
           audioLang: 'en'
         };
       });
    }
  }
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\\n/g, '\\\\n');
}

function writeQuestions(questions) {
  let out = '';
  for (let qi = 0; qi < questions.length; qi++) {
    const q = questions[qi];
    out += \`        {\\n\`;
    out += \`          id: '\${esc(q.id)}',\\n\`;
    out += \`          type: '\${q.type || 'multipleChoice'}',\\n\`;
    out += \`          prompt: '\${esc(q.prompt)}',\\n\`;
    out += \`          options: \${JSON.stringify(q.options || [])},\\n\`;
    out += \`          correctIndex: \${q.correctIndex || 0}\`;
    if (q.audioText) out += \`,\\n          audioText: '\${esc(q.audioText)}'\`;
    if (q.audioLang) out += \`,\\n          audioLang: '\${q.audioLang}'\`;
    if (q.correctAnswer) out += \`,\\n          correctAnswer: \${JSON.stringify(q.correctAnswer)}\`;
    out += \`\\n        }\${qi < questions.length - 1 ? ',' : ''}\\n\`;
  }
  return out;
}

let out = \`// Lesson content for all supported languages
// Each lesson has multiple questions with different types

export interface Question {
  id: string;
  type: 'translate' | 'multipleChoice' | 'fillBlank' | 'listen' | 'imageChoice' | 'constructSentence';
  prompt: string;
  options: string[];
  imageOptions?: string[];
  correctIndex: number;
  correctAnswer?: string[];
  tooltips?: Record<string, string[]>;
  audioText?: string;
  audioLang?: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  questions: Question[];
}

export const lessonsByLanguage: Record<string, LessonContent[]> = {
\`;

for (const lang of ['kurdish', 'turkish', 'english', 'french']) {
  const lessons = lessonsByLanguage[lang] || [];
  out += \`  // =====================================================\\n\`;
  out += \`  // \${lang.toUpperCase()} — \${lessons.length} lessons\\n\`;
  out += \`  // =====================================================\\n\`;
  out += \`  \${lang}: [\\n\`;

  for (const lesson of lessons) {
    out += \`    {\\n\`;
    out += \`      id: '\${esc(lesson.id)}',\\n\`;
    out += \`      title: '\${esc(lesson.title)}',\\n\`;
    out += \`      description: '\${esc(lesson.description)}',\\n\`;
    out += \`      icon: '\${lesson.icon || '📚'}',\\n\`;
    out += \`      xpReward: \${lesson.xpReward || 15},\\n\`;
    out += \`      questions: [\\n\`;
    out += writeQuestions(lesson.questions || []);
    out += \`      ]\\n\`;
    out += \`    },\\n\`;
  }

  out += \`  ],\\n\`;
}

out += \`};\\n\`;

fs.writeFileSync(file, out, 'utf8');
console.log('Successfully updated english lessons with real questions!');
