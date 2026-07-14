import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Importing all content
import { englishContent } from './src/data/englishContent';
import { turkishContent } from './src/data/turkishContent';
import { frenchContent } from './src/data/frenchContent';
import { germanContent } from './src/data/germanContent';
import { italianContent } from './src/data/italianContent';
import { kurdishContent } from './src/data/kurdishContent';
import { spanishContent } from './src/data/spanishContent';

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
  { name: 'en', data: englishContent },
  { name: 'tr', data: turkishContent },
  { name: 'fr', data: frenchContent },
  { name: 'de', data: germanContent },
  { name: 'it', data: italianContent },
  { name: 'ku', data: kurdishContent },
  { name: 'es', data: spanishContent }
];

async function uploadAll() {
  for (const lang of allLangs) {
    console.log(`Starting upload for ${lang.name} (${lang.data.length} lessons)...`);
    const collectionName = `lessons_${lang.name}`;
    
    for (let i = 0; i < lang.data.length; i++) {
      const lesson = lang.data[i];
      const docRef = doc(db, collectionName, lesson.id);
      
      await setDoc(docRef, {
        ...lesson,
        orderIndex: i
      });
    }
    console.log(`Completed ${lang.name}!`);
  }
  console.log('ALL UPLOADS COMPLETE!');
  process.exit(0);
}

uploadAll().catch(console.error);
