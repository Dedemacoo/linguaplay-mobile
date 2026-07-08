import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { languagesData } from '../data/mockData';
import { lessonsByLanguage } from '../data/lessonContent';

export class ContentUploader {
  /**
   * IMPORTANT: Call this function once from the app to seed the Firestore database
   * with the local hardcoded lessons and courses.
   */
  static async seedDatabase() {
    console.log('[ContentUploader] Starting seed process...');
    try {
      // 1. Upload Courses
      for (const langKey of Object.keys(languagesData)) {
        const courseData = languagesData[langKey];
        const docRef = doc(db, 'courses', langKey);
        await setDoc(docRef, courseData);
        console.log(`[ContentUploader] Uploaded course: ${langKey}`);
      }

      // 2. Upload Lessons
      for (const langKey of Object.keys(lessonsByLanguage)) {
        const lessons = lessonsByLanguage[langKey];
        for (const lessonContent of lessons) {
          const docRef = doc(db, 'lessons', lessonContent.id);
          await setDoc(docRef, lessonContent);
          console.log(`[ContentUploader] Uploaded lesson: ${lessonContent.id}`);
        }
      }

      console.log('[ContentUploader] Seeding complete! 🎉');
    } catch (e) {
      console.error('[ContentUploader] Seeding failed:', e);
    }
  }
}
