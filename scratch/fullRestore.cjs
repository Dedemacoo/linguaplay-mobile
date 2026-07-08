const fs = require('fs');

// Load the JS backup which has kurdish, french, turkish
const jsContent = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/lessonContent.js', 'utf8');
const _mod = { exports: {} };
const _exports = _mod.exports;
const _fn = new Function('exports', 'module', 'require', jsContent);
_fn(_exports, _mod, require);
const lessonsByLanguage = _mod.exports.lessonsByLanguage;

console.log('Loaded from backup:', Object.keys(lessonsByLanguage));
for (const lang of Object.keys(lessonsByLanguage)) {
  console.log(`  ${lang}: ${lessonsByLanguage[lang].length} lessons`);
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function writeQuestions(questions) {
  let out = '';
  for (let qi = 0; qi < questions.length; qi++) {
    const q = questions[qi];
    out += `        {\n`;
    out += `          id: '${esc(q.id)}',\n`;
    out += `          type: '${q.type || 'multipleChoice'}',\n`;
    out += `          prompt: '${esc(q.prompt)}',\n`;
    out += `          options: ${JSON.stringify(q.options || [])},\n`;
    out += `          correctIndex: ${q.correctIndex || 0}`;
    if (q.audioText) out += `,\n          audioText: '${esc(q.audioText)}'`;
    if (q.audioLang) out += `,\n          audioLang: '${q.audioLang}'`;
    if (q.correctAnswer) out += `,\n          correctAnswer: ${JSON.stringify(q.correctAnswer)}`;
    out += `\n        }${qi < questions.length - 1 ? ',' : ''}\n`;
  }
  return out;
}

// Build English lessons manually
const englishLessons = [
  { id: 'e1', title: 'Temeller 1', description: 'Temel kelimeler', icon: '🥚', xpReward: 15, questions: [
    { id: 'e1q1', type: 'multipleChoice', prompt: '"Hello" ne demektir?', options: ['Hoşça kal', 'Merhaba', 'Günaydın', 'İyi geceler'], correctIndex: 1, audioText: 'Hello', audioLang: 'en' },
    { id: 'e1q2', type: 'translate', prompt: '"Günaydın" İngilizcede nedir?', options: ['Good night', 'Good evening', 'Good morning', 'Good afternoon'], correctIndex: 2, audioText: 'Good morning', audioLang: 'en' },
    { id: 'e1q3', type: 'multipleChoice', prompt: '"Goodbye" ne demektir?', options: ['Merhaba', 'Teşekkürler', 'Hoşça kal', 'Lütfen'], correctIndex: 2, audioText: 'Goodbye', audioLang: 'en' },
    { id: 'e1q4', type: 'translate', prompt: '"Teşekkür ederim" İngilizcede nedir?', options: ['Please', 'Sorry', 'Thank you', 'Excuse me'], correctIndex: 2, audioText: 'Thank you', audioLang: 'en' },
    { id: 'e1q5', type: 'multipleChoice', prompt: '"How are you?" ne demektir?', options: ['Nerelisin?', 'Nasılsın?', 'Adın ne?', 'Kaç yaşındasın?'], correctIndex: 1, audioText: 'How are you?', audioLang: 'en' },
  ]},
  { id: 'e2', title: 'Alfabe ve Sesler', description: 'İngilizce alfabe', icon: '🔤', xpReward: 15, questions: [
    { id: 'e2q1', type: 'multipleChoice', prompt: 'İngilizce alfabede kaç harf var?', options: ['24', '26', '28', '30'], correctIndex: 1, audioText: 'Alphabet', audioLang: 'en' },
    { id: 'e2q2', type: 'multipleChoice', prompt: '"A, E, I, O, U" hangi harf grubudur?', options: ['Ünsüzler', 'Sesli harfler', 'Rakamlar', 'Semboller'], correctIndex: 1, audioText: 'Vowels', audioLang: 'en' },
    { id: 'e2q3', type: 'translate', prompt: '"Book" kelimesindeki sesli harf hangisidir?', options: ['B', 'K', 'O', 'C'], correctIndex: 2, audioText: 'Book', audioLang: 'en' },
    { id: 'e2q4', type: 'multipleChoice', prompt: '"TH" sesi hangi kelimede bulunur?', options: ['Cat', 'The', 'Book', 'Pen'], correctIndex: 1, audioText: 'The', audioLang: 'en' },
    { id: 'e2q5', type: 'multipleChoice', prompt: 'İngilizcede "Ç" harfi var mıdır?', options: ['Evet', 'Hayır', 'Bazen', 'Sadece başta'], correctIndex: 1, audioText: 'No', audioLang: 'en' },
  ]},
  { id: 'e3', title: 'Temeller 2', description: 'Hayvanlar ve doğa', icon: '🐱', xpReward: 15, questions: [
    { id: 'e3q1', type: 'multipleChoice', prompt: '"Cat" ne demektir?', options: ['Köpek', 'Kuş', 'Kedi', 'Balık'], correctIndex: 2, audioText: 'Cat', audioLang: 'en' },
    { id: 'e3q2', type: 'translate', prompt: '"Köpek" İngilizcede nedir?', options: ['Cat', 'Bird', 'Dog', 'Fish'], correctIndex: 2, audioText: 'Dog', audioLang: 'en' },
    { id: 'e3q3', type: 'multipleChoice', prompt: '"Bird" ne demektir?', options: ['Kedi', 'Kuş', 'Balık', 'Tavşan'], correctIndex: 1, audioText: 'Bird', audioLang: 'en' },
    { id: 'e3q4', type: 'translate', prompt: '"Balık" İngilizcede nedir?', options: ['Dog', 'Cat', 'Fish', 'Horse'], correctIndex: 2, audioText: 'Fish', audioLang: 'en' },
    { id: 'e3q5', type: 'multipleChoice', prompt: '"Horse" ne demektir?', options: ['İnek', 'At', 'Koyun', 'Keçi'], correctIndex: 1, audioText: 'Horse', audioLang: 'en' },
  ]},
  { id: 'e4', title: 'Selamlaşma', description: 'Karşılaşma ve vedalaşma', icon: '👋', xpReward: 15, questions: [
    { id: 'e4q1', type: 'multipleChoice', prompt: '"Nice to meet you" ne demektir?', options: ['Hoşça kal', 'Tanıştığıma memnun oldum', 'Nasılsın', 'Görüşürüz'], correctIndex: 1, audioText: 'Nice to meet you', audioLang: 'en' },
    { id: 'e4q2', type: 'translate', prompt: '"İyi akşamlar" İngilizcede nedir?', options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], correctIndex: 2, audioText: 'Good evening', audioLang: 'en' },
    { id: 'e4q3', type: 'multipleChoice', prompt: '"See you later" ne demektir?', options: ['Merhaba', 'Sonra görüşürüz', 'Günaydın', 'Teşekkürler'], correctIndex: 1, audioText: 'See you later', audioLang: 'en' },
    { id: 'e4q4', type: 'translate', prompt: '"Lütfen" İngilizcede nedir?', options: ['Sorry', 'Please', 'Thanks', 'Welcome'], correctIndex: 1, audioText: 'Please', audioLang: 'en' },
    { id: 'e4q5', type: 'multipleChoice', prompt: '"You\'re welcome" ne demektir?', options: ['Rica ederim', 'Özür dilerim', 'Merhaba', 'İyi günler'], correctIndex: 0, audioText: "You're welcome", audioLang: 'en' },
  ]},
  { id: 'e5', title: 'Renkler', description: 'Renkleri öğren', icon: '🎨', xpReward: 15, questions: [
    { id: 'e5q1', type: 'multipleChoice', prompt: '"Red" ne demektir?', options: ['Mavi', 'Yeşil', 'Kırmızı', 'Sarı'], correctIndex: 2, audioText: 'Red', audioLang: 'en' },
    { id: 'e5q2', type: 'translate', prompt: '"Mavi" İngilizcede nedir?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctIndex: 2, audioText: 'Blue', audioLang: 'en' },
    { id: 'e5q3', type: 'multipleChoice', prompt: '"Green" ne demektir?', options: ['Sarı', 'Yeşil', 'Mor', 'Turuncu'], correctIndex: 1, audioText: 'Green', audioLang: 'en' },
    { id: 'e5q4', type: 'translate', prompt: '"Sarı" İngilizcede nedir?', options: ['Orange', 'Purple', 'Yellow', 'Pink'], correctIndex: 2, audioText: 'Yellow', audioLang: 'en' },
    { id: 'e5q5', type: 'multipleChoice', prompt: '"Black" ne demektir?', options: ['Beyaz', 'Gri', 'Kahverengi', 'Siyah'], correctIndex: 3, audioText: 'Black', audioLang: 'en' },
  ]},
  { id: 'e6', title: 'Sayılar', description: 'Sayıları öğren', icon: '🔢', xpReward: 15, questions: [
    { id: 'e6q1', type: 'multipleChoice', prompt: '"One" sayısı kaçtır?', options: ['2', '1', '3', '4'], correctIndex: 1, audioText: 'One', audioLang: 'en' },
    { id: 'e6q2', type: 'translate', prompt: '"Beş" İngilizcede nedir?', options: ['Three', 'Four', 'Five', 'Six'], correctIndex: 2, audioText: 'Five', audioLang: 'en' },
    { id: 'e6q3', type: 'multipleChoice', prompt: '"Ten" sayısı kaçtır?', options: ['8', '9', '10', '7'], correctIndex: 2, audioText: 'Ten', audioLang: 'en' },
    { id: 'e6q4', type: 'translate', prompt: '"Yirmi" İngilizcede nedir?', options: ['Twelve', 'Twenty', 'Thirty', 'Fifteen'], correctIndex: 1, audioText: 'Twenty', audioLang: 'en' },
    { id: 'e6q5', type: 'multipleChoice', prompt: '"Three" sayısı kaçtır?', options: ['1', '2', '3', '4'], correctIndex: 2, audioText: 'Three', audioLang: 'en' },
  ]},
  { id: 'e7', title: 'Aile', description: 'Aile üyeleri', icon: '👨‍👩‍👧‍👦', xpReward: 18, questions: [
    { id: 'e7q1', type: 'multipleChoice', prompt: '"Mother" ne demektir?', options: ['Baba', 'Anne', 'Kardeş', 'Teyze'], correctIndex: 1, audioText: 'Mother', audioLang: 'en' },
    { id: 'e7q2', type: 'translate', prompt: '"Baba" İngilizcede nedir?', options: ['Mother', 'Brother', 'Father', 'Uncle'], correctIndex: 2, audioText: 'Father', audioLang: 'en' },
    { id: 'e7q3', type: 'multipleChoice', prompt: '"Sister" ne demektir?', options: ['Erkek kardeş', 'Kız kardeş', 'Anne', 'Hala'], correctIndex: 1, audioText: 'Sister', audioLang: 'en' },
    { id: 'e7q4', type: 'translate', prompt: '"Erkek kardeş" İngilizcede nedir?', options: ['Sister', 'Brother', 'Father', 'Son'], correctIndex: 1, audioText: 'Brother', audioLang: 'en' },
    { id: 'e7q5', type: 'multipleChoice', prompt: '"Family" ne demektir?', options: ['Arkadaş', 'Ev', 'Aile', 'Okul'], correctIndex: 2, audioText: 'Family', audioLang: 'en' },
  ]},
  { id: 'e8', title: 'Yiyecekler', description: 'Yiyecek isimleri', icon: '🍎', xpReward: 18, questions: [
    { id: 'e8q1', type: 'multipleChoice', prompt: '"Water" ne demektir?', options: ['Süt', 'Çay', 'Su', 'Meyve suyu'], correctIndex: 2, audioText: 'Water', audioLang: 'en' },
    { id: 'e8q2', type: 'translate', prompt: '"Ekmek" İngilizcede nedir?', options: ['Rice', 'Bread', 'Meat', 'Cheese'], correctIndex: 1, audioText: 'Bread', audioLang: 'en' },
    { id: 'e8q3', type: 'multipleChoice', prompt: '"Apple" ne demektir?', options: ['Portakal', 'Muz', 'Elma', 'Üzüm'], correctIndex: 2, audioText: 'Apple', audioLang: 'en' },
    { id: 'e8q4', type: 'translate', prompt: '"Peynir" İngilizcede nedir?', options: ['Butter', 'Cheese', 'Milk', 'Cream'], correctIndex: 1, audioText: 'Cheese', audioLang: 'en' },
    { id: 'e8q5', type: 'multipleChoice', prompt: '"Rice" ne demektir?', options: ['Makarna', 'Pirinç', 'Un', 'Tuz'], correctIndex: 1, audioText: 'Rice', audioLang: 'en' },
  ]},
];

// For any mockData English lessons not covered above, generate placeholders
const mockData = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/data/mockData.ts', 'utf8');
const levelRegex = /id:\s*'(e\d+)',\s*name:\s*'([^']+)',\s*icon:\s*'([^']+)'/g;
let m;
const allMockEnglish = [];
while ((m = levelRegex.exec(mockData)) !== null) {
  allMockEnglish.push({ id: m[1], title: m[2], icon: m[3] });
}
console.log(`Found ${allMockEnglish.length} English level IDs in mockData`);

const coveredIds = new Set(englishLessons.map(l => l.id));
for (const ml of allMockEnglish) {
  if (!coveredIds.has(ml.id)) {
    englishLessons.push({
      id: ml.id,
      title: ml.title,
      description: ml.title,
      icon: ml.icon,
      xpReward: 15,
      questions: Array.from({length: 5}, (_, i) => ({
        id: `${ml.id}q${i+1}`,
        type: 'multipleChoice',
        prompt: `İngilizce "${ml.title}" - Soru ${i+1}?`,
        options: ['Cevap A', 'Cevap B', 'Cevap C', 'Cevap D'],
        correctIndex: 0,
        audioText: 'Test',
        audioLang: 'en'
      }))
    });
  }
}

// Add english to the data
lessonsByLanguage['english'] = englishLessons;

// Now write full file
let out = `// Lesson content for all supported languages
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
`;

for (const lang of ['kurdish', 'turkish', 'english', 'french']) {
  const lessons = lessonsByLanguage[lang] || [];
  out += `  // =====================================================\n`;
  out += `  // ${lang.toUpperCase()} — ${lessons.length} lessons\n`;
  out += `  // =====================================================\n`;
  out += `  ${lang}: [\n`;

  for (const lesson of lessons) {
    out += `    {\n`;
    out += `      id: '${esc(lesson.id)}',\n`;
    out += `      title: '${esc(lesson.title)}',\n`;
    out += `      description: '${esc(lesson.description)}',\n`;
    out += `      icon: '${lesson.icon || '📚'}',\n`;
    out += `      xpReward: ${lesson.xpReward || 15},\n`;
    out += `      questions: [\n`;
    out += writeQuestions(lesson.questions || []);
    out += `      ]\n`;
    out += `    },\n`;
  }

  out += `  ],\n`;
}

out += `};\n`;

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', out, 'utf8');
console.log('Successfully wrote lessonContent.ts');
console.log('File size:', out.length, 'chars');
console.log('Languages:', Object.keys(lessonsByLanguage).join(', '));
for (const lang of ['kurdish', 'turkish', 'english', 'french']) {
  console.log(`  ${lang}: ${(lessonsByLanguage[lang] || []).length} lessons`);
}
