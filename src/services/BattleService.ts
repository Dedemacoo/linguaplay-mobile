import { db, auth } from '../config/firebase';
import { collection, doc, setDoc, getDoc, updateDoc, onSnapshot, query, where, getDocs, limit, deleteDoc, serverTimestamp, increment } from 'firebase/firestore';

export type BattleStatus = 'waiting' | 'playing' | 'finished';

export interface BattlePlayer {
  uid: string;
  name: string;
  avatar: string;
  score: number;
}

export interface BattleState {
  id?: string;
  status: BattleStatus;
  player1: BattlePlayer;
  player2?: BattlePlayer;
  questions: any[]; // The randomly selected questions for this match
  createdAt: any;
  endTime?: number; // timestamp when game ends
}

export class BattleService {
  /**
   * Enters the matchmaking queue.
   * If an open room exists, joins it. Otherwise, creates a new one.
   */
  static async findOrCreateMatch(
    userProfile: { uid: string; name: string; avatar: string },
    questionsPool: any[],
    onMatchFound: (battleId: string) => void,
    onTimeout: () => void
  ) {
    const battlesRef = collection(db, 'battles');
    
    // 1. Try to find a waiting match
    const q = query(battlesRef, where('status', '==', 'waiting'), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Join existing match
      const matchDoc = querySnapshot.docs[0];
      const matchId = matchDoc.id;
      const matchData = matchDoc.data() as BattleState;

      // Prevent joining your own match (just in case)
      if (matchData.player1.uid !== userProfile.uid) {
        await updateDoc(doc(db, 'battles', matchId), {
          player2: {
            uid: userProfile.uid,
            name: userProfile.name,
            avatar: userProfile.avatar,
            score: 0
          },
          status: 'playing',
          endTime: Date.now() + 60000 // 60 seconds from now
        });

        onMatchFound(matchId);
        return matchId;
      }
    }

    // 2. Create new match
    const newMatchRef = doc(battlesRef);
    
    // Pick 30 random questions for the duel
    const randomQuestions = [...questionsPool].sort(() => Math.random() - 0.5).slice(0, 30);

    const newBattle: BattleState = {
      status: 'waiting',
      player1: {
        uid: userProfile.uid,
        name: userProfile.name,
        avatar: userProfile.avatar,
        score: 0
      },
      questions: randomQuestions,
      createdAt: serverTimestamp()
    };

    await setDoc(newMatchRef, newBattle);

    // Listen for player2 joining
    const unsubscribe = onSnapshot(newMatchRef, (docSnap) => {
      const data = docSnap.data() as BattleState;
      if (data && data.status === 'playing' && data.player2) {
        unsubscribe(); // Stop listening here, the BattleScreen will take over
        onMatchFound(newMatchRef.id);
      }
    });

    // Timeout: if no one joins in 30 seconds, cancel
    setTimeout(async () => {
      const checkDoc = await getDoc(newMatchRef);
      if (checkDoc.exists() && checkDoc.data()?.status === 'waiting') {
        unsubscribe();
        await deleteDoc(newMatchRef);
        onTimeout();
      }
    }, 30000);

    return newMatchRef.id;
  }

  /**
   * Listens to the live battle state
   */
  static listenToBattle(battleId: string, callback: (state: BattleState) => void) {
    return onSnapshot(doc(db, 'battles', battleId), (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() } as BattleState);
      }
    });
  }

  /**
   * Updates the player's score
   */
  static async updateScore(battleId: string, playerNum: 1 | 2, scoreToAdd: number) {
    const battleRef = doc(db, 'battles', battleId);
    if (playerNum === 1) {
      await updateDoc(battleRef, { 'player1.score': increment(scoreToAdd) });
    } else {
      await updateDoc(battleRef, { 'player2.score': increment(scoreToAdd) });
    }
  }

  /**
   * Mark battle as finished
   */
  static async finishBattle(battleId: string) {
    await updateDoc(doc(db, 'battles', battleId), { status: 'finished' });
  }
}
