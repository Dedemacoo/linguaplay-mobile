/**
 * LinguaPlay — Firestore Upload for TypeScript-only language files
 * Run: npx tsx tools/upload_ts_langs.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocs, collection, writeBatch } from 'firebase/firestore';
import { japaneseContent } from '../src/data/japaneseContent';
import { koreanContent } from '../src/data/koreanContent';
import { russianContent } from '../src/data/russianContent';
import { chineseContent } from '../src/data/chineseContent';
import { arabicContent } from '../src/data/arabicContent';
import { portugueseContent } from '../src/data/portugueseContent';
import { dutchContent } from '../src/data/dutchContent';

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

const langConfigs = [
  { code: 'ja', label: 'Japanese',   data: japaneseContent as any[] },
  { code: 'ko', label: 'Korean',     data: koreanContent as any[] },
  { code: 'ru', label: 'Russian',    data: russianContent as any[] },
  { code: 'zh', label: 'Chinese',    data: chineseContent as any[] },
  { code: 'ar', label: 'Arabic',     data: arabicContent as any[] },
  { code: 'pt', label: 'Portuguese', data: portugueseContent as any[] },
  { code: 'nl', label: 'Dutch',      data: dutchContent as any[] },
];

async function clearCollection(colName: string): Promise<number> {
  const snapshot = await getDocs(collection(db, colName));
  if (snapshot.empty) {
    console.log(`  ⚪ ${colName} — boş`);
    return 0;
  }
  const docsArr = snapshot.docs;
  let deleted = 0;
  for (let i = 0; i < docsArr.length; i += 500) {
    const batch = writeBatch(db);
    docsArr.slice(i, i + 500).forEach((d: any) => batch.delete(d.ref));
    await batch.commit();
    deleted += Math.min(500, docsArr.length - i);
  }
  console.log(`  🗑️  ${deleted} eski döküman silindi`);
  return deleted;
}

async function uploadLessons(colName: string, lessons: any[]): Promise<void> {
  let uploaded = 0;
  for (let i = 0; i < lessons.length; i += 500) {
    const chunk = lessons.slice(i, i + 500);
    const batch = writeBatch(db);
    chunk.forEach((lesson: any, idx: number) => {
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
  console.log('║  LinguaPlay — TS Dil Upload (Kalan 7)   ║');
  console.log('╚══════════════════════════════════════════╝');

  let totalDeleted = 0, totalUploaded = 0;

  for (const lang of langConfigs) {
    console.log(`\n🌍 ${lang.label} (${lang.code})`);

    if (!Array.isArray(lang.data) || lang.data.length === 0) {
      console.log(`  ⚠️  Boş içerik — atlanıyor`);
      continue;
    }

    console.log(`  📚 ${lang.data.length} ders bulundu`);
    const colName = `lessons_${lang.code}`;
    totalDeleted += await clearCollection(colName);
    await uploadLessons(colName, lang.data);
    totalUploaded += lang.data.length;
    console.log(`  ✔ ${lang.label} tamamlandı!`);
  }

  console.log('\n╔══════════════════════════════════════════╗');
  console.log(`║  🎉 TAMAMLANDI!`);
  console.log(`║  🗑️  Silinen eski : ${totalDeleted}`);
  console.log(`║  ✅ Yüklenen yeni : ${totalUploaded}`);
  console.log('╚══════════════════════════════════════════╝');
  process.exit(0);
}

main().catch(err => {
  console.error('\n❌ HATA:', err.code || err.message || err);
  process.exit(1);
});
