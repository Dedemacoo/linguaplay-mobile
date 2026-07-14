import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import NetInfo from '@react-native-community/netinfo';
import { LanguageCourse } from '../data/mockData';
import { LessonContent } from '../data/lessonContent';
import { languagesData } from '../data/mockData';
import { englishCurriculumLessons } from '../data/englishCurriculum';

const CACHE_PREFIX_COURSE = '@course_cache_';
const CACHE_PREFIX_LESSON = '@lesson_cache_';
const CACHE_EXPIRY_MS = 0; // Disabled for development

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const getLanguageCode = (langName: string) => {
  const codes: Record<string, string> = {
    english: 'en',
    turkish: 'tr',
    french: 'fr',
    german: 'de',
    italian: 'it',
    spanish: 'es',
    kurdish: 'ku'
  };
  return codes[langName] || 'en';
};

export class ContentService {
  static async getCourseData(lang: string): Promise<LanguageCourse | null> {
    try {
      if (languagesData[lang]) {
        console.log(`[ContentService] Loaded course ${lang} from local data`);
        return languagesData[lang];
      }
      return null;
    } catch (error) {
      console.error(`[ContentService] Error loading course data for ${lang}:`, error);
      return null;
    }
  }

  static async getLessonContent(lang: string, lessonId: string): Promise<LessonContent | null> {
    const cacheKey = `${CACHE_PREFIX_LESSON}${lang}_${lessonId}`;
    
    try {
      // 1. Check static English Curriculum first
      if (lang === 'english' && englishCurriculumLessons[lessonId]) {
        console.log(`[ContentService] Loaded lesson ${lessonId} from static curriculum`);
        return englishCurriculumLessons[lessonId];
      }

      // 2. Check cache first
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const entry: CacheEntry<LessonContent> = JSON.parse(cachedStr);
        if (Date.now() - entry.timestamp < CACHE_EXPIRY_MS) {
          console.log(`[ContentService] Loaded lesson ${lessonId} from cache`);
          return entry.data;
        }
      }

      // 2. Fetch from Firebase
      const langCode = getLanguageCode(lang);
      const docRef = doc(db, `lessons_${langCode}`, lessonId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as LessonContent;
        // Save to cache
        await AsyncStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
        console.log(`[ContentService] Loaded lesson ${lessonId} from Firebase`);
        return data;
      }
      
      console.warn(`[ContentService] Lesson ${lessonId} not found in Firebase`);
      return null;
    } catch (error) {
      console.error(`[ContentService] Error loading lesson content ${lessonId} for ${lang}:`, error);
      
      // If error (e.g. offline), try returning stale cache
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        console.log(`[ContentService] Returning stale cache for ${lessonId}`);
        return JSON.parse(cachedStr).data;
      }
      return null;
    }
  }

  static async prefetchCourseData(lang: string): Promise<void> {
    // We could prefetch all lessons in background
  }

  /**
   * Fetch all lessons for a language (needed for Placement Test or list view)
   */
  static async getAllLessonsData(lang: string): Promise<LessonContent[]> {
    const cacheKey = `${CACHE_PREFIX_LESSON}${lang}_all`;
    try {
      // 1. Check cache
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const entry: CacheEntry<LessonContent[]> = JSON.parse(cachedStr);
        if (Date.now() - entry.timestamp < CACHE_EXPIRY_MS) {
          return entry.data;
        }
      }

      // 2. Use Static Curriculum for English
      if (lang === 'english') {
        const staticLessons = Object.values(englishCurriculumLessons);
        
        await AsyncStorage.setItem(cacheKey, JSON.stringify({
          data: staticLessons,
          timestamp: Date.now()
        }));
        
        return staticLessons;
      }

      // 3. Fetch from Firebase for other languages
      const langCode = getLanguageCode(lang);
      const colRef = collection(db, `lessons_${langCode}`);
      const q = query(colRef);
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const lessons = snapshot.docs
          .map(doc => doc.data() as LessonContent)
          .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
          
        // Cache all lessons
        await AsyncStorage.setItem(cacheKey, JSON.stringify({
          data: lessons,
          timestamp: Date.now()
        }));
        
        // Cache individual lessons too
        for (const lesson of lessons) {
          const individualKey = `${CACHE_PREFIX_LESSON}${lang}_${lesson.id}`;
          await AsyncStorage.setItem(individualKey, JSON.stringify({
            data: lesson,
            timestamp: Date.now()
          }));
        }
        
        return lessons;
      }

      return [];
    } catch (e) {
      console.error(`[ContentService] Error loading all lessons for ${lang}:`, e);
      // Fallback to stale cache
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        return JSON.parse(cachedStr).data;
      }
      return [];
    }
  }
}
