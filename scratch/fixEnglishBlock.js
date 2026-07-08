const fs = require('fs');
let content = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', 'utf8');

// Find the empty english block and remove it
const emptyEnglishRegex = /  \/\/ =====================================================\r?\n  \/\/ ENGLISH\r?\n  \/\/ =====================================================\r?\n  english: \(\[\r?\n  \] as any\),\r?\n/;
content = content.replace(emptyEnglishRegex, '');

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', content);
console.log('Fixed duplicate english block');
