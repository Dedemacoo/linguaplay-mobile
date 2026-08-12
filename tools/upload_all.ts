import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs, collection, deleteDoc, writeBatch } from 'firebase/firestore';

// All 14 language content imports
// @ts-ignore
import { englishContent } from '../src/data/englishContent';
// @ts-ignore
import { turkishContent } from '../src/data/turkishContent';
// @ts-ignore
import { frenchContent } from '../src/data/frenchContent';
// @ts-ignore
import { germanContent } from '../src/data/germanContent';
// @ts-ignore
import { italianContent } from '../src/data/italianContent';
// @ts-ignore
import { kurdishContent } from '../src/data/kurdishContent';
// @ts-ignore
import { spanishContent } from '../src/data/spanishContent';
// @ts-ignore
import { japaneseContent } from '../src/data/japaneseContent';
// @ts-ignore
import { koreanContent } from '../src/data/koreanContent';
// @ts-ignore
import { russianContent } from '../src/data/russianContent';
// @ts-ignore
import { chineseContent } from '../src/data/chineseContent';
// @ts-ignore
import { arabicContent } from '../src/data/arabicContent';
// @ts-ignore
import { portugueseContent } from '../src/data/portugueseContent';
// @ts-ignore
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

const allLangs = [
  { name: 'en',  label: 'English',    data: englishContent },
  { name: 'tr',  label: 'Turkish',    data: turkishContent },
  { name: 'fr',  label: 'French',     data: frenchContent },
  { name: 'de',  label: 'German',     data: germanContent },
  { name: 'it',  label: 'Italian',    data: italianContent },
  { name: 'ku',  label: 'Kurdish',    data: kurdishContent },
  { name: 'es',  label: 'Spanish',    data: spanishContent },
  { name: 'ja',  label: 'Japanese',   data: japaneseContent },
  { name: 'ko',  label: 'Korean',     data: koreanContent },
  { name: 'ru',  label: 'Russian',    data: russianContent },
  { name: 'zh',  label: 'Chinese',    data: chineseContent },
  { name: 'ar',  label: 'Arabic',     data: arabicContent },
  { name: 'pt',  label: 'Portuguese', data: portugueseContent },
  { name: 'nl',  label: 'Dutch',      data: dutchContent },
];

// Delete all documents in a collection in batches of 500
async function deleteCollection(collectionName: string): Promise<number> {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  if (snapshot.empty) {
    console.log(`  ⚪ ${collectionName} — boş, silinecek bir şey yok`);
    return 0;
  }

  let deleted = 0;
  // Firestore batch max 500 operations
  const batchSize = 500;
  const docs = snapshot.docs;

  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = writeBatch(db);
    const chunk = docs.slice(i, i + batchSize);
    chunk.forEach(d => batch.delete(d.ref));
    await batch.commit();
    deleted += chunk.length;
  }

  console.log(`  🗑️  ${collectionName} — ${deleted} döküman silindi`);
  return deleted;
}

// Upload lessons in batches of 500
async function uploadCollection(collectionName: string, data: any[]): Promise<void> {
  const batchSize = 500;
  let uploaded = 0;

  for (let i = 0; i < data.length; i += batchSize) {
    const batch = writeBatch(db);
    const chunk = data.slice(i, i + batchSize);

    chunk.forEach((lesson: any, idx: number) => {
      const docRef = doc(db, collectionName, lesson.id || `lesson_${i + idx}`);
      batch.set(docRef, {
        ...lesson,
        orderIndex: i + idx,
        updatedAt: new Date().toISOString(),
      });
    });

    await batch.commit();
    uploaded += chunk.length;
    process.stdout.write(`\r  ✅ ${uploaded}/${data.length} yüklendi...`);
  }
  console.log(''); // newline after progress
}

async function uploadAll() {
  console.log('╔════════════════════════════════════════╗');
  console.log('║   LinguaPlay — Firestore Upload Aracı  ║');
  console.log('╚════════════════════════════════════════╝');
  console.log(`📦 Toplam ${allLangs.length} dil yüklenecek\n`);

  let totalDeleted = 0;
  let totalUploaded = 0;

  for (const lang of allLangs) {
    const collectionName = `lessons_${lang.name}`;
    const lessonCount = Array.isArray(lang.data) ? lang.data.length : 0;

    if (lessonCount === 0) {
      console.log(`⚠️  ${lang.label} (${lang.name}) — içerik bulunamadı, atlanıyor`);
      continue;
    }

    console.log(`\n🌍 ${lang.label} (${lang.name}) — ${lessonCount} ders`);

    // 1. Delete existing
    const deleted = await deleteCollection(collectionName);
    totalDeleted += deleted;

    // 2. Upload fresh
    await uploadCollection(collectionName, lang.data);
    totalUploaded += lessonCount;

    console.log(`  ✔ ${lang.label} tamamlandı!`);
  }

  console.log('\n╔════════════════════════════════════════╗');
  console.log(`║  🎉 TAMAMLANDI!                         ║`);
  console.log(`║  🗑️  Silinen: ${String(totalDeleted).padEnd(26)}║`);
  console.log(`║  ✅ Yüklenen: ${String(totalUploaded).padEnd(25)}║`);
  console.log('╚════════════════════════════════════════╝');
  process.exit(0);
}

uploadAll().catch((err) => {
  console.error('\n❌ HATA:', err);
  process.exit(1);
});
