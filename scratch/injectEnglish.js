const fs = require('fs');

let rawJson = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/english_words.json', 'utf8');
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
    // Check if there is a similar key
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

function esc(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function writeQuestions(questions) {
  let out = '';
  for (let qi = 0; qi < questions.length; qi++) {
    const q = questions[qi];
    out += '        {\n';
    out += '          id: \\'' + esc(q.id) + '\\',\n';
    out += '          type: \\'' + (q.type || 'multipleChoice') + '\\',\n';
    out += '          prompt: \\'' + esc(q.prompt) + '\\',\n';
    out += '          options: ' + JSON.stringify(q.options || []) + ',\n';
    out += '          correctIndex: ' + (q.correctIndex || 0);
    if (q.audioText) out += ',\n          audioText: \\'' + esc(q.audioText) + '\\'';
    if (q.audioLang) out += ',\n          audioLang: \\'' + q.audioLang + '\\'';
    if (q.correctAnswer) out += ',\n          correctAnswer: ' + JSON.stringify(q.correctAnswer);
    out += '\n        }' + (qi < questions.length - 1 ? ',' : '') + '\n';
  }
  return out;
}

let out = '// Lesson content for all supported languages\n';
out += '// Each lesson has multiple questions with different types\n\n';
out += 'export interface Question {\n';
out += '  id: string;\n';
out += '  type: \\'translate\\' | \\'multipleChoice\\' | \\'fillBlank\\' | \\'listen\\' | \\'imageChoice\\' | \\'constructSentence\\';\n';
out += '  prompt: string;\n';
out += '  options: string[];\n';
out += '  imageOptions?: string[];\n';
out += '  correctIndex: number;\n';
out += '  correctAnswer?: string[];\n';
out += '  tooltips?: Record<string, string[]>;\n';
out += '  audioText?: string;\n';
out += '  audioLang?: string;\n';
out += '}\n\n';
out += 'export interface LessonContent {\n';
out += '  id: string;\n';
out += '  title: string;\n';
out += '  description: string;\n';
out += '  icon: string;\n';
out += '  xpReward: number;\n';
out += '  questions: Question[];\n';
out += '}\n\n';
out += 'export const lessonsByLanguage: Record<string, LessonContent[]> = {\n';

for (const lang of ['kurdish', 'turkish', 'english', 'french']) {
  const lessons = lessonsByLanguage[lang] || [];
  out += '  // =====================================================\n';
  out += '  // ' + lang.toUpperCase() + ' — ' + lessons.length + ' lessons\n';
  out += '  // =====================================================\n';
  out += '  ' + lang + ': [\n';

  for (const lesson of lessons) {
    out += '    {\n';
    out += '      id: \\'' + esc(lesson.id) + '\\',\n';
    out += '      title: \\'' + esc(lesson.title) + '\\',\n';
    out += '      description: \\'' + esc(lesson.description) + '\\',\n';
    out += '      icon: \\'' + (lesson.icon || '📚') + '\\',\n';
    out += '      xpReward: ' + (lesson.xpReward || 15) + ',\n';
    out += '      questions: [\n';
    out += writeQuestions(lesson.questions || []);
    out += '      ]\n';
    out += '    },\n';
  }

  out += '  ],\n';
}

out += '};\n';

fs.writeFileSync(file, out, 'utf8');
console.log('Successfully updated english lessons with real questions from english_words.json!');
