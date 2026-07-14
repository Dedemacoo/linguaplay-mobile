// @ts-nocheck
import { db } from '../services/FirebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const IMAGE_MAP: Record<string, string> = {
  '🐱': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
  '🐶': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80',
  '🍎': 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?w=400&q=80',
  '☕': 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80',
  '🥖': 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80',
  '🚗': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
  '🙏': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
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
      const newQuestions = data.questions.map((q: any) => {
        if (q.type === 'imageChoice' && q.imageOptions) {
          const newImageOptions = q.imageOptions.map((opt: string) => {
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
