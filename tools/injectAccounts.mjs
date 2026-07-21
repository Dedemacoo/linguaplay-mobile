import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhk9Ard_-KB8DKfQ19QgWWqwsZQDA8fRg",
  authDomain: "lingumapp.firebaseapp.com",
  projectId: "lingumapp"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const users = [
  { id: 'user_bot_1', name: 'Ayşe Yıldız', username: 'ayseyildiz', email: 'ayse@test.com', xp: 5400, avatar: '👩‍🎓', league: 'Altın', langXP: { english: 3000, french: 2400 } },
  { id: 'user_bot_2', name: 'Caner Kaya', username: 'canerkaya', email: 'caner@test.com', xp: 12500, avatar: '👨‍💻', league: 'Şampiyon', langXP: { english: 8000, turkish: 4500 } },
  { id: 'user_bot_3', name: 'Zeynep Demir', username: 'zeynepd', email: 'zeynep@test.com', xp: 8200, avatar: '👩‍💼', league: 'Gümüş', langXP: { kurdish: 5000, english: 3200 } },
  { id: 'user_bot_4', name: 'Mehmet Öz', username: 'mehmetoz', email: 'mehmet@test.com', xp: 3100, avatar: '🧔', league: 'Bronz', langXP: { turkish: 3100 } },
  { id: 'user_bot_5', name: 'Elif Şahin', username: 'elifs', email: 'elif@test.com', xp: 950, avatar: '👩‍⚕️', league: 'Bronz', langXP: { english: 950 } },
  { id: 'user_bot_6', name: 'Ali Veli', username: 'aliveli', email: 'ali@test.com', xp: 450, avatar: '👨‍🎨', league: 'Bronz', langXP: { french: 450 } },
  { id: 'user_bot_7', name: 'Selin Çelik', username: 'selinc', email: 'selin@test.com', xp: 18000, avatar: '👩‍🎤', league: 'Efsane', langXP: { kurdish: 10000, english: 8000 } }
];

async function injectUsers() {
  for (const u of users) {
    const progress = {
      languages: {
        english: { totalXp: u.langXP.english || 0 },
        turkish: { totalXp: u.langXP.turkish || 0 },
        french: { totalXp: u.langXP.french || 0 },
        kurdish: { totalXp: u.langXP.kurdish || 0 }
      }
    };
    
    await setDoc(doc(db, "users", u.id), {
      name: u.name,
      username: u.username,
      email: u.email,
      xp: u.xp,
      avatar: u.avatar,
      league: u.league,
      progress: progress,
      friendIds: []
    }, { merge: true });
    
    console.log(`Injected: ${u.name}`);
  }
  process.exit(0);
}

injectUsers().catch(console.error);
