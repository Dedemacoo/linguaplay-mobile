import fs from 'fs';

const content = fs.readFileSync('src/data/englishContent.ts', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  // Fix sentence_building type
  if (lines[i].includes('"type": "sentence_building"')) {
    lines[i] = lines[i].replace('"sentence_building"', '"constructSentence"');
  }

  // Fix string correctAnswers
  if (lines[i].includes('"correctAnswer": "')) {
    const match = lines[i].match(/"correctAnswer": "(.*)",/);
    if (match) {
      const words = match[1].split(' ');
      const arrayStr = JSON.stringify(words);
      lines[i] = lines[i].replace(`"${match[1]}"`, arrayStr);
    }
  }
}

fs.writeFileSync('src/data/englishContent.ts', lines.join('\n'));
console.log('Fixed types and correctAnswers in englishContent.ts');
