const fs = require('fs');

let rawJson = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/english_words.json', 'utf8');

const dictionary = JSON.parse(rawJson);

const file = 'c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts';
let content = fs.readFileSync(file, 'utf8');

// Strip TypeScript interfaces and types so it can be evaluated as JS
let jsContent = content.replace(/export interface[\s\S]*?}\n\n/g, '')
                       .replace(/export const lessonsByLanguage.*=/, 'exports.lessonsByLanguage =');

const _mod = { exports: {} };
const _fn = new Function("exports", "module", "require", jsContent);
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
  
  // Try to find exact match or partial match
  let targetKey = Object.keys(dictionary).find(k => k === title || k.includes(title) || title.includes(k));
  if (!targetKey) targetKey = Object.keys(dictionary)[0]; // Fallback to first

  // If this lesson has the placeholder 'Cevap A' or 'Test', we replace it
  if (lesson.questions[0] && lesson.questions[0].audioText === "Test") {
    const pairs = dictionary[targetKey];
    lesson.questions = pairs.map((pair, idx) => {
      const options = getRandomOptions(pair.en);
      const correctIndex = options.indexOf(pair.en);
      return {
        id: lesson.id + "q" + (idx + 1),
        type: "multipleChoice",
        prompt: '"' + pair.tr + '" İngilizcede nedir?',
        options: options,
        correctIndex: correctIndex,
        audioText: pair.en,
        audioLang: "en"
      };
    });
  }
}

let out = "// Lesson content for all supported languages\n";
out += "// Each lesson has multiple questions with different types\n\n";
out += "export interface Question {\n";
out += "  id: string;\n";
out += "  type: 'translate' | 'multipleChoice' | 'fillBlank' | 'listen' | 'imageChoice' | 'constructSentence';\n";
out += "  prompt: string;\n";
out += "  options: string[];\n";
out += "  imageOptions?: string[];\n";
out += "  correctIndex: number;\n";
out += "  correctAnswer?: string[];\n";
out += "  tooltips?: Record<string, string[]>;\n";
out += "  audioText?: string;\n";
out += "  audioLang?: string;\n";
out += "}\n\n";
out += "export interface LessonContent {\n";
out += "  id: string;\n";
out += "  title: string;\n";
out += "  description: string;\n";
out += "  icon: string;\n";
out += "  xpReward: number;\n";
out += "  questions: Question[];\n";
out += "}\n\n";

let jsonStr = JSON.stringify(lessonsByLanguage, null, 2);
out += "export const lessonsByLanguage: Record<string, LessonContent[]> = " + jsonStr + ";\n";

fs.writeFileSync(file, out, "utf8");
console.log("Successfully updated english lessons with real questions!");
