import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { englishContent } from './src/data/englishContent';

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

async function upload() {
  console.log(`Starting upload of ${englishContent.length} lessons...`);
  
  for (let i = 0; i < englishContent.length; i++) {
    const lesson = englishContent[i];
    const docRef = doc(db, 'lessons_en', lesson.id);
    
    // We add orderIndex to easily sort them later if needed
    await setDoc(docRef, {
      ...lesson,
      orderIndex: i
    });
    
    console.log(`Uploaded ${lesson.id} (${i+1}/${englishContent.length})`);
  }
  
  console.log('Upload complete!');
  process.exit(0);
}

upload().catch(console.error);
