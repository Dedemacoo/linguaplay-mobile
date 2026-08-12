/**
 * LinguaPlay — Curated English Curriculum Uploader
 * Run: npx tsx tools/upload_english_curriculum.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocs, collection, writeBatch } from 'firebase/firestore';
import { englishCurriculumLessons } from '../src/data/englishCurriculum';

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
        orderIndex: i + idx, // Maintain order based on array position
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
  console.log('╔════════════════════════════════════════════════════╗');
  console.log('║  LinguaPlay — Curated English Curriculum Upload   ║');
  console.log('╚════════════════════════════════════════════════════╝');

  const lessons = Object.values(englishCurriculumLessons);
  console.log(`\n🌍 English (en) — Curated Curriculum`);
  console.log(`  📚 ${lessons.length} ders bulundu (Object.values'dan dönüştürüldü)`);
  
  const colName = 'lessons_en';
  const totalDeleted = await clearCollection(colName);
  await uploadLessons(colName, lessons);

  console.log('\n╔════════════════════════════════════════════════════╗');
  console.log(`║  🎉 TAMAMLANDI!`);
  console.log(`║  🗑️  Silinen eski jenerik döküman : ${totalDeleted}`);
  console.log(`║  ✅ Yüklenen yeni özel döküman   : ${lessons.length}`);
  console.log('╚════════════════════════════════════════════════════╝');
  process.exit(0);
}

main().catch(err => {
  console.error('\n❌ HATA:', err.code || err.message || err);
  process.exit(1);
});
