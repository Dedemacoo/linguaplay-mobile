import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhk9Ard_-KB8DKfQ19QgWWqwsZQDA8fRg",
  authDomain: "lingumapp.firebaseapp.com",
  projectId: "lingumapp"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkUsers() {
  const usersRef = collection(db, "users");
  const snap = await getDocs(usersRef);
  
  snap.forEach(d => {
    console.log(`ID: ${d.id}, name: ${d.data().name}, username: ${d.data().username}, email: ${d.data().email}`);
  });
  
  process.exit(0);
}

checkUsers().catch(console.error);
