const fs = require('fs');
const ts = require('typescript');

const content = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/data/lessonContent.ts', 'utf8');

const res = ts.transpileModule(content, { 
  compilerOptions: { module: ts.ModuleKind.CommonJS }
});

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/scratch/lessonContent.js', res.outputText);
console.log('Transpiled to lessonContent.js');
