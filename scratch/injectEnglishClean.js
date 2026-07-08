const fs = require('fs');

let rawJson = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/english_words.json', 'utf8');

// Fix encoding issues using a simple map for Turkish chars if needed (the subagent output has "Yarm" etc.)
// Wait, actually let's just parse it directly. The console showed "Yarm" because of PowerShell's console encoding, not the file itself.
const dictionary = JSON.parse(rawJson);

const file = 'c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts';
let content = fs.readFileSync(file, 'utf8');

const _mod = { exports: {} };
const _fn = new Function('exports', 'module', 'require', content);
_fn(_mod.exports, _mod, require);
const lessonsByLanguage = _mod.exports.lessonsByLanguage;
const englishLessons = lessonsByLanguage.english;

const allEnglishWords = Object.values(dictionary).flat().map(pair => pair.en);

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
      const options = getRandomOptions(pair.en);
      const correctIndex = options.indexOf(pair.en);
      return {
        id: lesson.id + 'q' + (idx + 1),
        type: 'multipleChoice',
        prompt: '"' + pair.tr + '" İngilizcede nedir?',
        options: options,
        correctIndex: correctIndex,
        audioText: pair.en,
        audioLang: 'en'
      };
    });
  } else if (lesson.questions[0] && lesson.questions[0].audioText === 'Test') {
    // Fallback logic
    const keys = Object.keys(dictionary);
    const fallbackKey = keys.find(k => k.toLowerCase().includes(title.toLowerCase()) || title.toLowerCase().includes(k.toLowerCase())) || keys[0];
    const pairs = dictionary[fallbackKey];
    lesson.questions = pairs.map((pair, idx) => {
      const options = getRandomOptions(pair.en);
      const correctIndex = options.indexOf(pair.en);
      return {
        id: lesson.id + 'q' + (idx + 1),
        type: 'multipleChoice',
        prompt: '"' + pair.tr + '" İngilizcede nedir?',
        options: options,
        correctIndex: correctIndex,
        audioText: pair.en,
        audioLang: 'en'
      };
    });
  }
}

let out = '// Lesson content for all supported languages\\n';
out += '// Each lesson has multiple questions with different types\\n\\n';
out += 'export interface Question {\\n';
out += '  id: string;\\n';
out += '  type: \\'translate\\' | \\'multipleChoice\\' | \\'fillBlank\\' | \\'listen\\' | \\'imageChoice\\' | \\'constructSentence\\';\\n';
out += '  prompt: string;\\n';
out += '  options: string[];\\n';
out += '  imageOptions?: string[];\\n';
out += '  correctIndex: number;\\n';
out += '  correctAnswer?: string[];\\n';
out += '  tooltips?: Record<string, string[]>;\\n';
out += '  audioText?: string;\\n';
out += '  audioLang?: string;\\n';
out += '}\\n\\n';
out += 'export interface LessonContent {\\n';
out += '  id: string;\\n';
out += '  title: string;\\n';
out += '  description: string;\\n';
out += '  icon: string;\\n';
out += '  xpReward: number;\\n';
out += '  questions: Question[];\\n';
out += '}\\n\\n';

// Replace exact matches to avoid quotes around object keys for cleaner TS
let jsonStr = JSON.stringify(lessonsByLanguage, null, 2);
out += 'export const lessonsByLanguage: Record<string, LessonContent[]> = ' + jsonStr + ';\\n';

fs.writeFileSync(file, out, 'utf8');
console.log('Successfully updated english lessons with real questions!');
