/**
 * allFixes.js — Tüm mockData ve ders eksikliklerini tek seferde giderir.
 * node scratch/allFixes.js
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

// ─── UNIT / LEVEL TEMPLATE ────────────────────────────────────────────────
const COLORS = ['#58CC02', '#CE82FF', '#FF9600', '#1CB0F6', '#FF4B4B'];
const UNIT_META = [
  { n:  1, desc: 'Temeller',              lv: ['Temeller 1','Temel Eylemler','Temeller 2'],           lvi: ['🥚','🏃','🍎'],  lvt: ['lesson','alphabet','lesson'] },
  { n:  2, desc: 'Günlük Konuşmalar',     lv: ['Selamlaşma','Aile','Renkler'],                       lvi: ['👋','👨‍👩‍👧','🎨'],   lvt: ['lesson','lesson','lesson'] },
  { n:  3, desc: 'Sayılar ve Zaman',      lv: ['Sayılar','Günler ve Aylar','Saatler'],               lvi: ['1️⃣','📅','⏰'],   lvt: ['lesson','lesson','lesson'] },
  { n:  4, desc: 'Hayvanlar ve Doğa',     lv: ['Evcil Hayvanlar','Vahşi Hayvanlar','Doğa'],          lvi: ['🐶','🦁','🌳'],   lvt: ['lesson','lesson','lesson'] },
  { n:  5, desc: 'Yiyecek ve İçecek',     lv: ['Meyveler','Sebzeler','İçecekler'],                   lvi: ['🍎','🥕','☕'],   lvt: ['lesson','lesson','lesson'] },
  { n:  6, desc: 'Ev ve Eşyalar',         lv: ['Odalar','Mobilyalar','Mutfak Eşyaları'],             lvi: ['🏠','🛋️','🍽️'],  lvt: ['lesson','lesson','lesson'] },
  { n:  7, desc: 'Vücudumuz ve Sağlık',   lv: ['Vücut Bölümleri','Hastalıklar','Hastanede'],         lvi: ['💪','🤒','🏥'],   lvt: ['lesson','lesson','lesson'] },
  { n:  8, desc: 'Giysiler ve Alışveriş', lv: ['Kıyafetler','Renklerle Giyim','Pazarda'],            lvi: ['👕','👗','🛍️'],   lvt: ['lesson','lesson','lesson'] },
  { n:  9, desc: 'Meslekler ve İş',       lv: ['Meslekler 1','Meslekler 2','İş Yerinde'],            lvi: ['👨‍⚕️','👩‍🏫','🏢'],  lvt: ['lesson','lesson','lesson'] },
  { n: 10, desc: 'Şehir ve Ulaşım',       lv: ['Mekanlar','Taşıtlar','Yön Sorma'],                   lvi: ['🏙️','🚗','🗺️'],  lvt: ['lesson','lesson','lesson'] },
  { n: 11, desc: 'Günlük Rutinler',       lv: ['Sabah Rutini','İş ve Okul','Akşam Rutini'],          lvi: ['🌅','🏫','🌃'],   lvt: ['lesson','lesson','lesson'] },
  { n: 12, desc: 'Duygular ve Kişilik',   lv: ['Hisler','Karakter Özellikleri','Tepkiler'],          lvi: ['😊','🧠','😲'],   lvt: ['lesson','lesson','lesson'] },
  { n: 13, desc: 'Fiiller 1',             lv: ['Hareket Fiilleri','Durum Fiilleri','Günlük Fiiller'],lvi: ['🏃‍♂️','🧘','🗣️'], lvt: ['lesson','lesson','lesson'] },
  { n: 14, desc: 'Fiiller 2',             lv: ['Geçmiş Zaman','Gelecek Zaman','Emir Kipleri'],       lvi: ['⏪','⏩','❗'],   lvt: ['lesson','lesson','lesson'] },
  { n: 15, desc: 'Eğitim ve Okul',        lv: ['Okul Eşyaları','Dersler','Sınıfta'],                 lvi: ['🎒','📚','👩‍🎓'],  lvt: ['lesson','lesson','lesson'] },
  { n: 16, desc: 'Tatil ve Seyahat',      lv: ['Tatil Yerleri','Otelde','Seyahat Planı'],            lvi: ['🏖️','🏨','🧳'],  lvt: ['lesson','lesson','lesson'] },
  { n: 17, desc: 'Hobiler ve Eğlence',    lv: ['Spor','Müzik ve Sanat','Boş Zaman'],                 lvi: ['⚽','🎸','🎮'],   lvt: ['lesson','lesson','lesson'] },
  { n: 18, desc: 'Doğa ve Çevre',         lv: ['Mevsimler','Hava Durumu','Coğrafya'],                lvi: ['🍂','🌦️','🌍'],  lvt: ['lesson','lesson','lesson'] },
  { n: 19, desc: 'Sosyal Hayat',          lv: ['Arkadaşlık','Davetler','Kutlamalar'],                lvi: ['🤝','💌','🎉'],   lvt: ['lesson','lesson','lesson'] },
  { n: 20, desc: 'İleri Seviye Gramer',   lv: ['Bağlaçlar','Soru Kelimeleri','Edatlar'],             lvi: ['🔗','❓','➕'],   lvt: ['lesson','lesson','lesson'] },
  { n: 21, desc: 'İleri Seviye İletişim', lv: ['Fikir Belirtme','Tartışma','Haberler'],              lvi: ['💡','🗣️','📰'],  lvt: ['lesson','lesson','lesson'] },
  { n: 22, desc: 'Kültür ve Edebiyat',    lv: ['Atasözleri','Masallar','Gelenekler'],               lvi: ['📜','🦄','🎭'],   lvt: ['lesson','lesson','lesson'] },
];

function buildCourse(langKey, title, description, idPrefix, lvPrefix) {
  const units = UNIT_META.map((u, ui) => {
    const color = COLORS[ui % COLORS.length];
    const levels = [0, 1, 2].map(li => {
      const lvNum = (u.n - 1) * 3 + li + 1;
      return `        {\n            id: '${lvPrefix}${lvNum}',\n            name: '${u.lv[li]}',\n            icon: '${u.lvi[li]}',\n            type: '${u.lvt[li]}'\n        }`;
    });
    return `    {\n        id: '${idPrefix}-u${u.n}',\n        title: 'Ünite ${u.n}',\n        description: '${u.desc}',\n        color: '${color}',\n        levels: [\n${levels.join(',\n')}\n        ]\n    }`;
  });
  return `  ${langKey}: {\n    title: '${title}',\n    description: '${description}',\n    units: [\n${units.join(',\n')}\n]\n  }`;
}

function buildPlaceholder(langKey, title, description, idPrefix, lvPrefix) {
  return `  ${langKey}: {\n    title: '${title}',\n    description: '${description}',\n    units: [\n    {\n        id: '${idPrefix}-u1',\n        title: 'Ünite 1',\n        description: 'Yakında',\n        color: '#FF4B4B',\n        levels: [\n        { id: '${lvPrefix}1', name: 'Çok Yakında', icon: '🚧', type: 'lesson' }\n        ]\n    }\n]\n  }`;
}

// ─── 1. mockData.ts UPDATE ────────────────────────────────────────────────
const mockPath = path.join(dataDir, 'mockData.ts');
let mock = fs.readFileSync(mockPath, 'utf8');

const newFullLangs = [
  buildCourse('spanish',  'İspanyolca', "Dünyanın ikinci büyük dili", 'sp', 's'),
  buildCourse('german',   'Almanca',    "Avrupa'nın güçlü dili",      'de', 'g'),
  buildCourse('italian',  'İtalyanca',  'Sanat ve kültürün dili',      'it', 'i'),
];
const placeholderLangs = [
  buildPlaceholder('japanese',   'Japonca',     "Uzak Doğu'nun büyüleyici dili",       'ja', 'ja'),
  buildPlaceholder('korean',     'Korece',      'K-Pop ve teknolojinin dili',           'ko', 'ko'),
  buildPlaceholder('russian',    'Rusça',       "Doğu Avrupa'nın güçlü dili",          'ru', 'ru'),
  buildPlaceholder('chinese',    'Çince',       "Dünyanın en çok konuşulan dili",       'zh', 'zh'),
  buildPlaceholder('arabic',     'Arapça',      "Orta Doğu'nun köklü dili",             'ar', 'ar'),
  buildPlaceholder('portuguese', 'Portekizce',  "Brezilya ve Portekiz'in dili",         'pt', 'pt'),
  buildPlaceholder('dutch',      'Felemenkçe',  "Kuzey Avrupa'nın özgün dili",          'nl', 'nl'),
];

const allInsert = [...newFullLangs, ...placeholderLangs].join(',\n') + '\n';
// Insert before closing `};`
mock = mock.replace(/^};\s*$/m, `,\n${allInsert}};\n`);
fs.writeFileSync(mockPath, mock, 'utf8');
console.log('✅ mockData.ts: Spanish, German, Italian (22 ünite) + 7 placeholder dil eklendi');

// ─── 2. lessonContent.ts UPDATE ──────────────────────────────────────────
const lcPath = path.join(dataDir, 'lessonContent.ts');
let lc = fs.readFileSync(lcPath, 'utf8');

const placeholderEntries = `  "japanese": [],\n  "korean": [],\n  "russian": [],\n  "chinese": [],\n  "arabic": [],\n  "portuguese": [],\n  "dutch": []\n`;
lc = lc.replace(/^};\s*$/m, `,\n${placeholderEntries}};\n`);
fs.writeFileSync(lcPath, lc, 'utf8');
console.log('✅ lessonContent.ts: 7 placeholder dil (boş diziler) eklendi');

console.log('\n🎉 Veri katmanı güncellemeleri tamamlandı!');
console.log('Sonraki adım: node scratch/generateSpDeIt.js');
