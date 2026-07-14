const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, updateDoc } = require('firebase/firestore');
const XMLHttpRequest = require('xhr2');
global.XMLHttpRequest = XMLHttpRequest;

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

const IMAGE_MAP = {
  '🐱': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
  '🐶': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80',
  '🍎': 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?w=400&q=80',
  '☕': 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80',
  '🥖': 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80',
  '🚗': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
  '🙏': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
  '🏠': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80',
  '👨': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  '👩': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
};

async function updateImages() {
  const collections = ['lessons_en', 'lessons_tr'];

  for (const coll of collections) {
    console.log(`Checking ${coll}...`);
    const snapshot = await getDocs(collection(db, coll));

    for (const d of snapshot.docs) {
      const data = d.data();
      let updated = false;
      const newQuestions = data.questions.map((q) => {
        if (q.type === 'imageChoice' && q.imageOptions) {
          const newImageOptions = q.imageOptions.map((opt) => {
            if (IMAGE_MAP[opt]) {
              updated = true;
              return IMAGE_MAP[opt];
            }
            return opt;
          });
          
          if (updated) {
            if (q.prompt.includes('demektir?')) {
               const word = q.prompt.replace('Hangisi ', '').replace(' demektir?', '').trim();
               q.prompt = `Aşağıdaki görsellerden hangisi '${word}' kelimesini temsil eder?`;
            } else if (!q.prompt.includes('görsel')) {
               q.prompt = `Aşağıdaki görsellerden hangisi doğru seçenektir?`;
            }
          }
          
          return {
            ...q,
            imageOptions: newImageOptions
          };
        }
        return q;
      });

      if (updated) {
        await updateDoc(doc(db, coll, d.id), { questions: newQuestions });
        console.log(`Updated document: ${d.id}`);
      }
    }
  }
  console.log('Done!');
  process.exit(0);
}

updateImages().catch(console.error);
