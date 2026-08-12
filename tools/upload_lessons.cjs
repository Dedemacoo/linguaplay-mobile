/**
 * LinguaPlay — Firestore Lesson Uploader (CommonJS)
 * Run: node tools/upload_lessons.cjs
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDocs, collection, writeBatch } = require('firebase/firestore');

// ── Firebase config ──
const firebaseConfig = {
  apiKey: "AIzaSyBhk9Ard_-KB8DKfQ19QgWWqwsZQDA8fRg",
  authDomain: "lingumapp.firebaseapp.com",
  projectId: "lingumapp",
  storageBucket: "lingumapp.firebasestorage.app",
  messagingSenderId: "751105839348",
  appId: "1:751105839348:web:989169514c97530e98cea1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ── Language configs (JS files only — already compiled) ──
const langConfigs = [
  { code: 'en', label: 'English',    exportName: 'englishContent',    file: '../src/data/englishContent.js' },
  { code: 'tr', label: 'Turkish',    exportName: 'turkishContent',    file: '../src/data/turkishContent.js' },
  { code: 'fr', label: 'French',     exportName: 'frenchContent',     file: '../src/data/frenchContent.js' },
  { code: 'de', label: 'German',     exportName: 'germanContent',     file: '../src/data/germanContent.js' },
  { code: 'it', label: 'Italian',    exportName: 'italianContent',    file: '../src/data/italianContent.js' },
  { code: 'ku', label: 'Kurdish',    exportName: 'kurdishContent',    file: '../src/data/kurdishContent.js' },
  { code: 'es', label: 'Spanish',    exportName: 'spanishContent',    file: '../src/data/spanishContent.js' },
];

async function clearCollection(colName) {
  const snapshot = await getDocs(collection(db, colName));
  if (snapshot.empty) {
    console.log(`  ⚪ ${colName} — boş, silinecek bir şey yok`);
    return 0;
  }
  const docsArr = snapshot.docs;
  let deleted = 0;
  for (let i = 0; i < docsArr.length; i += 500) {
    const batch = writeBatch(db);
    docsArr.slice(i, i + 500).forEach(d => batch.delete(d.ref));
    await batch.commit();
    deleted += Math.min(500, docsArr.length - i);
  }
  console.log(`  🗑️  ${deleted} eski döküman silindi`);
  return deleted;
}

async function uploadLessons(colName, lessons) {
  let uploaded = 0;
  for (let i = 0; i < lessons.length; i += 500) {
    const chunk = lessons.slice(i, i + 500);
    const batch = writeBatch(db);
    chunk.forEach((lesson, idx) => {
      const id = String(lesson.id || `lesson_${i + idx}`);
      batch.set(doc(db, colName, id), {
        ...lesson,
        orderIndex: i + idx,
        updatedAt: new Date().toISOString(),
      });
    });
    await batch.commit();
    uploaded += chunk.length;
    process.stdout.write(`\r  📤 ${uploaded}/${lessons.length} yüklendi...`);
  }
  process.stdout.write('\n');
}

async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  LinguaPlay — Firestore Upload           ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log(`📦 ${langConfigs.length} dil yüklenecek\n`);

  let totalDeleted = 0, totalUploaded = 0;

  for (const lang of langConfigs) {
    console.log(`\n🌍 ${lang.label} (${lang.code})`);

    let content;
    try {
      const mod = require(lang.file);
      content = mod[lang.exportName];
      if (!Array.isArray(content) || content.length === 0) throw new Error('Boş veya geçersiz içerik');
    } catch (e) {
      console.log(`  ⚠️  Yüklenemedi: ${e.message} — atlanıyor`);
      continue;
    }

    console.log(`  📚 ${content.length} ders bulundu`);
    const colName = `lessons_${lang.code}`;

    // 1. Önce eski verileri sil
    totalDeleted += await clearCollection(colName);

    // 2. Sonra yeni verileri yükle
    await uploadLessons(colName, content);
    totalUploaded += content.length;
    console.log(`  ✔ ${lang.label} tamamlandı!`);
  }

  console.log('\n╔══════════════════════════════════════════╗');
  console.log(`║  🎉 TAMAMLANDI!`);
  console.log(`║  🗑️  Silinen eski döküman : ${totalDeleted}`);
  console.log(`║  ✅ Yüklenen yeni döküman : ${totalUploaded}`);
  console.log('╚══════════════════════════════════════════╝');
  process.exit(0);
}

main().catch(err => {
  console.error('\n❌ HATA:', err.code || err.message || err);
  process.exit(1);
});
