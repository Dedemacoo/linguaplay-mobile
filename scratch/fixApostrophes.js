// fixApostrophes.js — mockData.ts içindeki kesme işareti sorunlarını düzeltir
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'mockData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Tüm broken single-quoted strings: description: 'X'Y...'
// Bunları double-quote ile değiştir
const broken = [
  ["description: 'Avrupa'nın güçlü dili'",        'description: "Avrupa\'nın güçlü dili"'],
  ["description: 'Uzak Doğu'nun büyüleyici dili'", 'description: "Uzak Doğu\'nun büyüleyici dili"'],
  ["description: 'Doğu Avrupa'nın güçlü dili'",   'description: "Doğu Avrupa\'nın güçlü dili"'],
  ["description: 'Orta Doğu'nun köklü dili'",      'description: "Orta Doğu\'nun köklü dili"'],
  ["description: 'Brezilya ve Portekiz'in dili'",  'description: "Brezilya ve Portekiz\'in dili"'],
  ["description: 'Kuzey Avrupa'nın özgün dili'",   'description: "Kuzey Avrupa\'nın özgün dili"'],
];

let changed = 0;
for (const [from, to] of broken) {
  if (content.includes(from)) {
    content = content.split(from).join(to);
    changed++;
    console.log(`✅ Düzeltildi: ${from.substring(0, 40)}...`);
  } else {
    console.log(`⚠️  Bulunamadı: ${from.substring(0, 40)}...`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n${changed} satır düzeltildi.`);

// Verify
const lines = content.split('\n');
const remaining = lines.filter((l, i) => /description: '[^']*'[^']*'/.test(l) && !l.includes('Mezopotamya'));
if (remaining.length === 0) {
  console.log('✅ Tüm syntax hatalar düzeltildi!');
} else {
  console.log('❌ Hâlâ hatalı satırlar var:');
  remaining.forEach(l => console.log(' ', l.trim()));
}
