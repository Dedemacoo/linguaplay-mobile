import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { languagesData } from '../src/data/mockData';
import { lessonsByLanguage } from '../src/data/lessonContent';

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

async function uploadData() {
  console.log('Starting upload...');
  
  // 1. Upload Courses
  for (const [lang, courseData] of Object.entries(languagesData)) {
    try {
      await setDoc(doc(db, 'courses', lang), courseData);
      console.log(`✅ Uploaded course: ${lang}`);
    } catch (e) {
      console.error(`❌ Failed to upload course ${lang}:`, e);
    }
  }

  // 2. Upload Lessons
  for (const [lang, lessons] of Object.entries(lessonsByLanguage)) {
    for (const lesson of lessons) {
      const safeId = `${lang}_${lesson.id}`;
      try {
        await setDoc(doc(db, 'lessons', safeId), lesson);
        console.log(`✅ Uploaded lesson: ${safeId}`);
      } catch (e) {
        console.error(`❌ Failed to upload lesson ${safeId}:`, e);
      }
    }
  }
  
  console.log('Upload complete!');
}

uploadData();
