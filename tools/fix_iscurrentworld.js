const fs = require('fs');
let c = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/screens/HomeScreen.tsx', 'utf8');

c = c.replace('const startIndex = runningNodeIndex;\n      runningNodeIndex += chunkNodes.length;', 'const startIndex = runningNodeIndex;\n      runningNodeIndex += chunkNodes.length;\n      const isCurrentWorld = activeNodeIndex >= startIndex && activeNodeIndex < runningNodeIndex;\n      const isWorldCompleted = activeNodeIndex >= runningNodeIndex;');

c = c.replace('isCurrentWorld ? \'45%\' : (chunkIndex < Math.floor(activeNodeIndex / 10) ? \'100%\' : \'0%\')', 'isCurrentWorld ? \'45%\' : (isWorldCompleted ? \'100%\' : \'0%\')');

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/screens/HomeScreen.tsx', c, 'utf8');
console.log('Fixed');
