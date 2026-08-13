import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { LanguageCourse } from '../data/mockData';
import { LessonContent } from '../data/lessonContent';
import { languagesData } from '../data/mockData';

// Language code mapping
const LANG_CODE_MAP: Record<string, string> = {
  english: 'en', turkish: 'tr', french: 'fr', german: 'de',
  italian: 'it', spanish: 'es', kurdish: 'ku', japanese: 'ja',
  korean: 'ko', russian: 'ru', chinese: 'zh', arabic: 'ar',
  portuguese: 'pt', dutch: 'nl',
};

// Language prefix in lesson IDs (e.g. eng, tr, fr, de...)
export const LANG_PREFIX_MAP: Record<string, string> = {
  english: 'eng', turkish: 'tr', french: 'fr', german: 'de',
  italian: 'it', spanish: 'es', kurdish: 'ku', japanese: 'ja',
  korean: 'ko', russian: 'ru', chinese: 'zh', arabic: 'ar',
  portuguese: 'pt', dutch: 'nl',
};

const CACHE_PREFIX_LESSON = '@lesson_cache_v3_';
const CACHE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const PART_NAMES = ['', 'Kelime Öğren', 'Cümle Kur', 'Dinle & Konuş', 'Karışık Tekrar'];
const PART_ICONS = ['📚', '🔤', '✍️', '🎧', '🔄'];

function getPartQuestions(allQs: any[], part: number): any[] {
  if (part <= 0 || part > 4) return allQs.slice(0, 5);

  let filtered: any[] = [];
  if (part === 1) {
    filtered = allQs.filter(q => q.type === 'flashcard' || q.type === 'imageChoice' || q.type === 'multipleChoice');
  } else if (part === 2) {
    filtered = allQs.filter(q => q.type === 'constructSentence' || q.type === 'translate' || q.type === 'multipleChoice');
  } else if (part === 3) {
    filtered = allQs.filter(q => q.type === 'speak' || q.type === 'listen' || q.type === 'translate');
  } else {
    filtered = [...allQs].sort(() => Math.random() - 0.5);
  }

  if (filtered.length < 5) {
    const usedIds = new Set(filtered.map(q => q.id));
    const extra = allQs.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5);
    filtered = [...filtered, ...extra];
  }

  return filtered.slice(0, 10);
}

export class ContentService {
  static async getCourseData(lang: string): Promise<LanguageCourse | null> {
    try {
      if (languagesData[lang]) return languagesData[lang];
      return null;
    } catch (error) {
      console.error(`[ContentService] Error loading course data for ${lang}:`, error);
      return null;
    }
  }

  static async getLessonContent(lang: string, lessonId: string): Promise<LessonContent | null> {
    const baseLessonId = lessonId.replace(/_\d+$/, '');
    const partMatch = lessonId.match(/_(\d+)$/);
    const partNumber = (baseLessonId !== lessonId && partMatch) ? parseInt(partMatch[1], 10) : 0;
    const cacheKey = `${CACHE_PREFIX_LESSON}${lang}_${baseLessonId}`;

    try {
      // 1. Try cache first
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const entry: CacheEntry<any> = JSON.parse(cachedStr);
        const isValid = Date.now() - entry.timestamp < CACHE_EXPIRY_MS;
        if (isValid) {
          return this.buildLessonFromFirestoreDoc(entry.data, lessonId, partNumber);
        }
      }

      // 2. Fetch from Firestore
      const langCode = LANG_CODE_MAP[lang] || 'en';
      const colName = `lessons_${langCode}`;

      // Try fetching by baseLessonId
      const docRef = doc(db, colName, baseLessonId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        // Cache it
        await AsyncStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now(),
        }));

        return this.buildLessonFromFirestoreDoc(data, lessonId, partNumber);
      }

      // 3. Try fetching all and find by exact ID or index pattern
      const allLessons = await this.getAllLessonsFromFirestore(lang);
      if (allLessons.length > 0) {
        const exactMatch = allLessons.find(l => l.id === baseLessonId);
        if (exactMatch) {
          await AsyncStorage.setItem(cacheKey, JSON.stringify({ data: exactMatch, timestamp: Date.now() }));
          return this.buildLessonFromFirestoreDoc(exactMatch, lessonId, partNumber);
        }

        const langPrefix = LANG_PREFIX_MAP[lang] || 'eng';
        const match = baseLessonId.match(new RegExp(`${langPrefix}_u(\\d+)_l(\\d+)`));
        if (match) {
          const unitIdx = parseInt(match[1], 10) - 1;
          const lessonIdx = parseInt(match[2], 10) - 1;
          const topicIndex = (unitIdx * 6) + Math.min(lessonIdx, 5);
          const lesson = allLessons[topicIndex] || allLessons[topicIndex % allLessons.length];
          if (lesson) {
            await AsyncStorage.setItem(cacheKey, JSON.stringify({ data: lesson, timestamp: Date.now() }));
            return this.buildLessonFromFirestoreDoc(lesson, lessonId, partNumber);
          }
        }
      }

      // 4. Try local fallback if not found in Firestore
      const localData = await this.getLocalLessonsFallback(lang);
      if (localData && localData.length > 0) {
        const exactMatch = localData.find(l => l.id === baseLessonId);
        if (exactMatch) return this.buildLessonFromFirestoreDoc(exactMatch, lessonId, partNumber);
        
        const langPrefix = LANG_PREFIX_MAP[lang] || 'eng';
        const match = baseLessonId.match(new RegExp(`${langPrefix}_u(\\d+)_l(\\d+)`));
        if (match) {
          const unitIdx = parseInt(match[1], 10) - 1;
          const lessonIdx = parseInt(match[2], 10) - 1;
          const topicIndex = (unitIdx * 6) + Math.min(lessonIdx, 5); // Updated to 6 lessons per unit
          const lesson = localData[topicIndex] || localData[topicIndex % localData.length];
          if (lesson) return this.buildLessonFromFirestoreDoc(lesson, lessonId, partNumber);
        }
      }

      console.warn(`[ContentService] Lesson ${baseLessonId} not found in Firestore or local data`);
      return null;
    } catch (error) {
      console.error(`[ContentService] Error loading lesson ${lessonId}:`, error);
      // 1. Stale cache fallback
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        const data = JSON.parse(cachedStr).data;
        return this.buildLessonFromFirestoreDoc(data, lessonId, partNumber);
      }

      // 2. Local fallback data
      const localData = await this.getLocalLessonsFallback(lang);
      if (localData && localData.length > 0) {
        const exactMatch = localData.find(l => l.id === baseLessonId);
        if (exactMatch) return this.buildLessonFromFirestoreDoc(exactMatch, lessonId, partNumber);
        
        const langPrefix = LANG_PREFIX_MAP[lang] || 'eng';
        const match = baseLessonId.match(new RegExp(`${langPrefix}_u(\\d+)_l(\\d+)`));
        if (match) {
          const unitIdx = parseInt(match[1], 10) - 1;
          const lessonIdx = parseInt(match[2], 10) - 1;
          const topicIndex = (unitIdx * 6) + Math.min(lessonIdx, 5);
          const lesson = localData[topicIndex] || localData[topicIndex % localData.length];
          if (lesson) return this.buildLessonFromFirestoreDoc(lesson, lessonId, partNumber);
        }
      }
      return null;
    }
  }

  private static buildLessonFromFirestoreDoc(data: any, lessonId: string, partNumber: number): LessonContent {
    const baseLessonId = lessonId.replace(/_\d+$/, '');
    const partMatch = lessonId.match(/_(\d+)$/);
    const part = partNumber || ((baseLessonId !== lessonId && partMatch) ? parseInt(partMatch[1], 10) : 0);

    let allQs: any[] = data.questions || [];
    let title = data.title || 'Ders';
    let description = data.description || '';
    let icon = data.icon || '📚';

    let filteredQs: any[];
    if (part > 0) {
      filteredQs = getPartQuestions(allQs, part);
    } else {
      filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, 5);
    }

    const titleSuffix = part > 0 ? ` — ${PART_NAMES[part]}` : '';

    return {
      id: lessonId,
      title: `${title}${titleSuffix}`,
      description,
      icon: part > 0 ? PART_ICONS[part] : icon,
      xpReward: 20,
      questions: filteredQs,
    };
  }

  private static async getLocalLessonsFallback(lang: string): Promise<any[]> {
    try {
      switch(lang) {
        case 'english': return (await import('../data/englishContent.js')).englishContent;
        case 'turkish': return (await import('../data/turkishContent.js')).turkishContent;
        case 'french': return (await import('../data/frenchContent.js')).frenchContent;
        case 'german': return (await import('../data/germanContent.js')).germanContent;
        case 'italian': return (await import('../data/italianContent.js')).italianContent;
        case 'spanish': return (await import('../data/spanishContent.js')).spanishContent;
        case 'kurdish': return (await import('../data/kurdishContent.js')).kurdishContent;
        default: return [];
      }
    } catch (e) {
      console.warn(`[ContentService] Local fallback failed for ${lang}`, e);
      return [];
    }
  }

  private static async getAllLessonsFromFirestore(lang: string): Promise<any[]> {
    const allCacheKey = `${CACHE_PREFIX_LESSON}${lang}_all`;
    try {
      const cachedStr = await AsyncStorage.getItem(allCacheKey);
      if (cachedStr) {
        const entry: CacheEntry<any[]> = JSON.parse(cachedStr);
        if (Date.now() - entry.timestamp < CACHE_EXPIRY_MS) return entry.data;
      }

      const langCode = LANG_CODE_MAP[lang] || 'en';
      const colRef = collection(db, `lessons_${langCode}`);
      const snapshot = await getDocs(query(colRef));

      if (!snapshot.empty) {
        const lessons = snapshot.docs
          .map(d => d.data())
          .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));

        await AsyncStorage.setItem(allCacheKey, JSON.stringify({ data: lessons, timestamp: Date.now() }));
        return lessons;
      }

      // If Firestore is empty, fallback to local data
      const localData = await this.getLocalLessonsFallback(lang);
      if (localData && localData.length > 0) {
        await AsyncStorage.setItem(allCacheKey, JSON.stringify({ data: localData, timestamp: Date.now() }));
      }
      return localData;
    } catch (e) {
      console.error(`[ContentService] getAllLessonsFromFirestore error for ${lang}:`, e);
      return await this.getLocalLessonsFallback(lang);
    }
  }

  static async getAllLessonsData(lang: string): Promise<LessonContent[]> {
    const raw = await this.getAllLessonsFromFirestore(lang);
    return raw.map((d: any) => ({
      id: d.id || '',
      title: d.title || '',
      description: d.description || '',
      icon: d.icon || '📚',
      xpReward: d.xpReward || 20,
      questions: d.questions || [],
    }));
  }

  static async prefetchCourseData(_lang: string): Promise<void> {
    // Prefetch handled lazily via cache
  }
}
