const fs = require('fs');
const { lessonsByLanguage } = require('./lessonContent.js');
const mockDataContent = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/data/mockData.ts', 'utf8');

const regex = /id:\s*'([ktef]\d+)',\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*icon:\s*'([^']+)',\s*xpReward:\s*(\d+)/g;
let match;
const mockLessons = { kurdish: [], turkish: [], english: [], french: [] };

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
    mockLessons[lang].push({ id, title, description, icon, xpReward: parseInt(xpReward, 10) });
  }
}

let out = `// Lesson content for all supported languages
// Generated automatically to merge existing valid questions and fill missing ones

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
  const existingLessons = lessonsByLanguage[lang] || [];
  
  for (const mockL of mockLessons[lang]) {
    const existingL = existingLessons.find(l => l.id === mockL.id);
    
    out += `    {\n`;
    out += `      id: '${mockL.id}',\n`;
    out += `      title: '${mockL.title.replace(/'/g, "\\'")}',\n`;
    out += `      description: '${mockL.description.replace(/'/g, "\\'")}',\n`;
    out += `      icon: '${mockL.icon}',\n`;
    out += `      xpReward: ${mockL.xpReward},\n`;
    out += `      questions: [\n`;
    
    if (existingL && existingL.questions && existingL.questions.length > 0) {
      // Use existing questions
      for (let i = 0; i < existingL.questions.length; i++) {
        const q = existingL.questions[i];
        out += `        {\n`;
        out += `          id: '${q.id}',\n`;
        out += `          type: '${q.type}',\n`;
        out += `          prompt: '${q.prompt.replace(/'/g, "\\'")}',\n`;
        out += `          options: ${JSON.stringify(q.options)},\n`;
        out += `          correctIndex: ${q.correctIndex}`;
        if (q.audioText) out += `,\n          audioText: '${q.audioText.replace(/'/g, "\\'")}'`;
        if (q.audioLang) out += `,\n          audioLang: '${q.audioLang}'`;
        if (q.correctAnswer) out += `,\n          correctAnswer: ${JSON.stringify(q.correctAnswer)}`;
        out += `\n        }${i < existingL.questions.length - 1 ? ',' : ''}\n`;
      }
    } else {
      // Generate 5 dummy questions
      for (let i = 1; i <= 5; i++) {
        out += `        {\n`;
        out += `          id: '${mockL.id}q${i}',\n`;
        out += `          type: 'multipleChoice',\n`;
        out += `          prompt: '${getLangName(lang)} "${mockL.title.replace(/'/g, "\\'")}" Dersi Soru ${i}?',\n`;
        out += `          options: ['Cevap A', 'Cevap B', 'Cevap C', 'Cevap D'],\n`;
        out += `          correctIndex: 0,\n`;
        out += `          audioText: 'Test',\n`;
        out += `          audioLang: '${getLangCode(lang)}'\n`;
        out += `        }${i < 5 ? ',' : ''}\n`;
      }
    }
    
    out += `      ]\n`;
    out += `    },\n`;
  }
  out += `  ] as any),\n`;
}

out += `};\n`;

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', out);
console.log('Successfully smart rebuilt lessonContent.ts');
