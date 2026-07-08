import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, updateDoc, arrayUnion, doc, setDoc } from "firebase/firestore";

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

async function injectFriend() {
  console.log("Searching for user arjinc508...");
  const usersRef = collection(db, "users");
  const snap = await getDocs(usersRef);
  
  let targetDoc = null;
  snap.forEach(d => {
    const data = d.data();
    if (data.email?.includes('arjinc508') || data.username?.includes('arjinc508') || data.name?.includes('arjin')) {
      targetDoc = d;
    }
  });

  if (!targetDoc) {
    console.log("User not found!");
    process.exit(1);
  }

  console.log("Found user:", targetDoc.data().email, targetDoc.id);

  const testUid = "test_friend_001";
  await setDoc(doc(db, "users", testUid), {
    email: "test@friend.com",
    name: "Test Arkadaş",
    avatar: "🤖",
    xp: 5000,
    friendIds: [targetDoc.id]
  }, { merge: true });

  await updateDoc(doc(db, "users", targetDoc.id), {
    friendIds: arrayUnion(testUid)
  });

  console.log("Successfully injected test friend!");
  process.exit(0);
}

injectFriend().catch(console.error);
