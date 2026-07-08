const fs = require('fs');

const mockDataContent = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/data/mockData.ts', 'utf8');

// We will extract the lesson definitions from mockData.ts
// It looks like: id: 'k1', title: 'Temeller 1', description: '...', icon: '...', xpReward: 15

const regex = /id:\s*'([ktef]\d+)',\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*icon:\s*'([^']+)',\s*xpReward:\s*(\d+)/g;

let match;
const lessons = {
  kurdish: [],
  turkish: [],
  english: [],
  french: []
};

const getLangPrefix = (id) => {
  if (id.startsWith('k')) return 'kurdish';
  if (id.startsWith('t')) return 'turkish';
  if (id.startsWith('e')) return 'english';
  if (id.startsWith('f')) return 'french';
  return 'unknown';
};

const getLangName = (lang) => {
  switch (lang) {
    case 'kurdish': return 'Kürtçe';
    case 'turkish': return 'Türkçe';
    case 'english': return 'İngilizce';
    case 'french': return 'Fransızca';
  }
};

const getLangCode = (lang) => {
  switch (lang) {
    case 'kurdish': return 'ku';
    case 'turkish': return 'tr';
    case 'english': return 'en';
    case 'french': return 'fr';
  }
};

while ((match = regex.exec(mockDataContent)) !== null) {
  const [_, id, title, description, icon, xpReward] = match;
  const lang = getLangPrefix(id);
  if (lang !== 'unknown') {
    lessons[lang].push({ id, title, description, icon, xpReward: parseInt(xpReward, 10) });
  }
}

// Generate the file content
let out = `// Lesson content for all supported languages
// Generated automatically to ensure no empty lessons

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
  out += `  ${lang}: ([\n`;
  for (const lesson of lessons[lang]) {
    out += `    {\n`;
    out += `      id: '${lesson.id}',\n`;
    out += `      title: '${lesson.title}',\n`;
    out += `      description: '${lesson.description}',\n`;
    out += `      icon: '${lesson.icon}',\n`;
    out += `      xpReward: ${lesson.xpReward},\n`;
    out += `      questions: [\n`;
    
    // Generate 5 dummy questions
    for (let i = 1; i <= 5; i++) {
      out += `        {\n`;
      out += `          id: '${lesson.id}q${i}',\n`;
      out += `          type: 'multipleChoice',\n`;
      out += `          prompt: '${getLangName(lang)} "${lesson.title}" Dersi Soru ${i}?',\n`;
      out += `          options: ['Cevap A', 'Cevap B', 'Cevap C', 'Cevap D'],\n`;
      out += `          correctIndex: 0,\n`;
      out += `          audioText: 'Test',\n`;
      out += `          audioLang: '${getLangCode(lang)}'\n`;
      out += `        }${i < 5 ? ',' : ''}\n`;
    }
    out += `      ]\n`;
    out += `    },\n`;
  }
  out += `  ] as any),\n`;
}

out += `};\n`;

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', out);
console.log('Successfully rebuilt lessonContent.ts with questions for all lessons.');
