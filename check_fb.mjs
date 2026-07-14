import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

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

async function checkFirebase() {
  try {
    const colRef = collection(db, 'lessons_en');
    const snapshot = await getDocs(colRef);
    console.log(`Found ${snapshot.docs.length} lessons in Firebase collection 'lessons_en'.`);
    if (snapshot.docs.length > 0) {
      console.log('Sample lesson ID:', snapshot.docs[0].id);
    }
  } catch(e) {
    console.error('Error:', e);
  }
}

checkFirebase();
