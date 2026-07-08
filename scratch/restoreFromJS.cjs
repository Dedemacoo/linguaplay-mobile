const fs = require('fs');

const jsContent = fs.readFileSync('c:/xampp/mobiluygulama/mobile/scratch/lessonContent.js', 'utf8');

// Extract the lessonsByLanguage object by evaluating the JS  
const _mod = { exports: {} };
const _exports = _mod.exports;
const _fn = new Function('exports', 'module', 'require', jsContent);
_fn(_exports, _mod, require);
const lessonsByLanguage = _mod.exports.lessonsByLanguage;

console.log('Languages:', Object.keys(lessonsByLanguage));
for (const lang of Object.keys(lessonsByLanguage)) {
  const lessons = lessonsByLanguage[lang];
  const withQ = lessons.filter(l => l.questions && l.questions.length > 0).length;
  const withoutQ = lessons.filter(l => !l.questions || l.questions.length === 0).length;
  console.log(`  ${lang}: ${lessons.length} lessons (${withQ} with questions, ${withoutQ} without)`);
}

function escapeStr(s) {
  if (!s) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

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

for (const lang of Object.keys(lessonsByLanguage)) {
  out += `  // =====================================================\n`;
  out += `  // ${lang.toUpperCase()}\n`;
  out += `  // =====================================================\n`;
  out += `  ${lang}: ([\n`;

  const lessons = lessonsByLanguage[lang];
  for (const lesson of lessons) {
    out += `    {\n`;
    out += `      id: '${escapeStr(lesson.id)}',\n`;
    out += `      title: '${escapeStr(lesson.title)}',\n`;
    out += `      description: '${escapeStr(lesson.description)}',\n`;
    out += `      icon: '${lesson.icon || '📚'}',\n`;
    out += `      xpReward: ${lesson.xpReward || 15},\n`;
    out += `      questions: [\n`;

    const questions = lesson.questions || [];
    for (let qi = 0; qi < questions.length; qi++) {
      const q = questions[qi];
      out += `        {\n`;
      out += `          id: '${escapeStr(q.id)}',\n`;
      out += `          type: '${q.type || 'multipleChoice'}',\n`;
      out += `          prompt: '${escapeStr(q.prompt)}',\n`;
      out += `          options: ${JSON.stringify(q.options || [])},\n`;
      out += `          correctIndex: ${q.correctIndex || 0}`;
      if (q.audioText) out += `,\n          audioText: '${escapeStr(q.audioText)}'`;
      if (q.audioLang) out += `,\n          audioLang: '${q.audioLang}'`;
      if (q.correctAnswer) out += `,\n          correctAnswer: ${JSON.stringify(q.correctAnswer)}`;
      out += `\n        }${qi < questions.length - 1 ? ',' : ''}\n`;
    }

    out += `      ]\n`;
    out += `    },\n`;
  }

  out += `  ] as any),\n`;
}

out += `};\n`;

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', out);
console.log('Successfully restored lessonContent.ts!');
console.log('File size:', out.length, 'bytes');
