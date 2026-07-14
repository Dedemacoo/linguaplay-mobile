import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { turkishContent } from './src/data/turkishContent';

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
  console.log(`Starting upload of ${turkishContent.length} lessons...`);
  
  for (let i = 0; i < turkishContent.length; i++) {
    const lesson = turkishContent[i];
    const docRef = doc(db, 'lessons_tr', lesson.id);
    
    // We add orderIndex to easily sort them later if needed
    await setDoc(docRef, {
      ...lesson,
      orderIndex: i
    });
    
    console.log(`Uploaded ${lesson.id} (${i+1}/${turkishContent.length})`);
  }
  
  console.log('Upload complete!');
  process.exit(0);
}

upload().catch(console.error);
