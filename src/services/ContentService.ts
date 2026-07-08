import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import NetInfo from '@react-native-community/netinfo';
import { LanguageCourse } from '../data/mockData';
import { LessonContent, lessonsByLanguage } from '../data/lessonContent';

// Fallback to local files if Firebase fails and no cache exists
import { languagesData } from '../data/mockData';

const CACHE_PREFIX_COURSE = '@course_cache_';
const CACHE_PREFIX_LESSON = '@lesson_cache_';
const CACHE_EXPIRY_MS = 1000 * 60 * 60 * 24; // 24 hours

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export class ContentService {
  private static isValidCourseData(data: any): data is LanguageCourse {
    return typeof data === 'object' && data !== null
      && typeof data.title === 'string'
      && typeof data.description === 'string'
      && Array.isArray(data.units)
      && data.units.length === 22
      && data.units.every((unit: any) => (
        typeof unit.id === 'string'
        && typeof unit.title === 'string'
        && typeof unit.description === 'string'
        && typeof unit.color === 'string'
        && Array.isArray(unit.levels)
        && unit.levels.length === 3
        && unit.levels.every((level: any) => (
          typeof level.id === 'string'
          && typeof level.name === 'string'
          && typeof level.icon === 'string'
          && typeof level.type === 'string'
        ))
      ));
  }

  private static isValidLessonData(data: any): data is LessonContent {
    return typeof data === 'object' && data !== null
      && typeof data.id === 'string'
      && typeof data.title === 'string'
      && typeof data.description === 'string'
      && typeof data.icon === 'string'
      && typeof data.xpReward === 'number'
      && Array.isArray(data.questions)
      && data.questions.every((q: any) => (
        typeof q === 'object' && q !== null
        && typeof q.id === 'string'
        && typeof q.type === 'string'
        && typeof q.prompt === 'string'
        && Array.isArray(q.options)
      ));
  }

  /**
   * Fetch Course Data (Units, Levels) for a specific language
   */
  static async getCourseData(lang: string): Promise<LanguageCourse | null> {
    const cacheKey = `${CACHE_PREFIX_COURSE}${lang}`;
    
    try {
      // 1. Check network
      const netState = await NetInfo.fetch();
      
      // 2. Try Cache first if we are offline or if cache is fresh
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const cacheObj: CacheEntry<LanguageCourse> = JSON.parse(cachedStr);
        const isFresh = (Date.now() - cacheObj.timestamp) < CACHE_EXPIRY_MS;

        if (this.isValidCourseData(cacheObj.data)) {
          if (!netState.isConnected || isFresh) {
            console.log(`[ContentService] Loaded course ${lang} from cache`);
            return cacheObj.data;
          }
        } else {
          console.warn(`[ContentService] Discarding invalid cached course data for ${lang}`);
        }
      }

      // 3. Fetch from Firestore if online and cache expired
      if (netState.isConnected) {
        const docRef = doc(db, 'courses', lang);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          if (this.isValidCourseData(fetchedData)) {
            const data = fetchedData;
            await AsyncStorage.setItem(cacheKey, JSON.stringify({
              data,
              timestamp: Date.now()
            }));
            console.log(`[ContentService] Loaded course ${lang} from Firestore`);
            return data;
          }

          console.warn(`[ContentService] Invalid course data in Firestore for ${lang}, falling back to local data`);
        }
      }
    } catch (e) {
      console.warn(`[ContentService] Error fetching course ${lang}:`, e);
    }
    
    // 4. Fallback to Local Mock Data if everything else fails
    console.log(`[ContentService] Falling back to local mock data for ${lang}`);
    return languagesData[lang] || null;
  }

  /**
   * Fetch specific Lesson Data (Questions) safely isolated by language
   */
  static async getLessonData(lessonId: string, lang: string): Promise<LessonContent | null> {
    const safeLessonId = `${lang}_${lessonId}`; // Dillerin karışmasını engeller
    const cacheKey = `${CACHE_PREFIX_LESSON}${safeLessonId}`;
    
    try {
      const netState = await NetInfo.fetch();
      
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const cacheObj: CacheEntry<LessonContent> = JSON.parse(cachedStr);
        const isFresh = (Date.now() - cacheObj.timestamp) < CACHE_EXPIRY_MS;

        if (this.isValidLessonData(cacheObj.data)) {
          if (!netState.isConnected || isFresh) {
            console.log(`[ContentService] Loaded lesson ${safeLessonId} from cache`);
            return cacheObj.data;
          }
        } else {
          console.warn(`[ContentService] Discarding invalid cached lesson data for ${safeLessonId}`);
        }
      }

      if (netState.isConnected) {
        const docRef = doc(db, 'lessons', safeLessonId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          if (this.isValidLessonData(fetchedData)) {
            const data = fetchedData;
            await AsyncStorage.setItem(cacheKey, JSON.stringify({
              data,
              timestamp: Date.now()
            }));
            console.log(`[ContentService] Loaded lesson ${safeLessonId} from Firestore`);
            return data;
          }
          console.warn(`[ContentService] Invalid lesson data in Firestore for ${safeLessonId}, falling back to local data`);
        }
      }
    } catch (e) {
      console.warn(`[ContentService] Error fetching lesson ${safeLessonId}:`, e);
    }
    
    // Fallback to local data (safely scoped by lang)
    console.log(`[ContentService] Falling back to local mock data for lesson ${safeLessonId}`);
    return lessonsByLanguage[lang]?.find((l: any) => l.id === lessonId) || null;
  }

  /**
   * Fetch all lessons for a language (needed for Placement Test)
   */
  static async getAllLessonsData(lang: string): Promise<LessonContent[]> {
    return lessonsByLanguage[lang] || [];
  }
}
