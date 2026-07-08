const fs = require('fs');

let rawJson;
try {
  rawJson = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/french_words.json', 'utf8');
} catch(e) {
  console.log("Not ready");
  process.exit(1);
}

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
const frenchLessons = lessonsByLanguage.french;

const allFrenchWords = Object.values(dictionary).flat().map(pair => pair.fr);

function getRandomOptions(correctAnswer) {
  let opts = new Set();
  opts.add(correctAnswer);
  while(opts.size < 4) {
    opts.add(allFrenchWords[Math.floor(Math.random() * allFrenchWords.length)]);
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

for (let i = 0; i < englishLessons.length; i++) {
  // We mirror the title, description, and icon from English lessons!
  if (!frenchLessons[i]) {
    frenchLessons[i] = {
      id: "f" + (i + 1),
      xpReward: englishLessons[i].xpReward,
      questions: []
    };
  }
  
  const fLesson = frenchLessons[i];
  const eLesson = englishLessons[i];
  
  fLesson.title = eLesson.title;
  fLesson.description = eLesson.description;
  fLesson.icon = eLesson.icon;
  
  const title = fLesson.title;
  
  // Try to find exact match or partial match
  let targetKey = Object.keys(dictionary).find(k => k === title || k.includes(title) || title.includes(k));
  if (!targetKey) targetKey = Object.keys(dictionary)[0]; // Fallback to first

  // We completely replace French questions since they are all "Pomme ne demektir?" or empty
  const pairs = dictionary[targetKey];
  fLesson.questions = pairs.map((pair, idx) => {
    const options = getRandomOptions(pair.fr);
    const correctIndex = options.indexOf(pair.fr);
    return {
      id: fLesson.id + "q" + (idx + 1),
      type: "multipleChoice",
      prompt: '"' + pair.tr + '" Fransızcada nedir?',
      options: options,
      correctIndex: correctIndex,
      audioText: pair.fr,
      audioLang: "fr"
    };
  });
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
console.log("Successfully updated french lessons with real questions!");
