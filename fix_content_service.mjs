import fs from 'fs';

let content = fs.readFileSync('src/services/ContentService.ts', 'utf8');

// Fix template literals
content = content.replace(/\\\$/g, '$');
content = content.replace(/\\`/g, '`');

fs.writeFileSync('src/services/ContentService.ts', content);
