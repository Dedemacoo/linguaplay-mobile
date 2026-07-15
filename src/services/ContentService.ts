import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import NetInfo from '@react-native-community/netinfo';
import { LanguageCourse } from '../data/mockData';
import { LessonContent } from '../data/lessonContent';
import { languagesData } from '../data/mockData';
import { englishCurriculumLessons } from '../data/englishCurriculum';
import { englishContent } from '../data/englishContent';

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
      if (lang === 'english') {
        if (englishCurriculumLessons[lessonId]) {
          console.log(`[ContentService] Loaded lesson ${lessonId} from static curriculum`);
          return englishCurriculumLessons[lessonId];
        }
        
        // Dynamic generation for Unit 2+ from legacy englishContent.js
        const match = lessonId.match(/eng_u(\d+)_l(\d+)/);
        if (match) {
          const unitIdx = parseInt(match[1], 10) - 1;
          const lessonIdx = parseInt(match[2], 10) - 1;
          
          const legacyLesson = englishContent[unitIdx];
          if (legacyLesson) {
             const allQs = legacyLesson.questions || [];
             
             // Sort and filter questions based on lesson index
             let filteredQs = [];
             if (lessonIdx === 0) { // Etap 1: Vocab
               filteredQs = allQs.filter(q => q.type === 'flashcard' || q.type === 'imageChoice' || q.type === 'multipleChoice').slice(0, 5);
             } else if (lessonIdx === 1) { // Etap 2: Sentence
               filteredQs = allQs.filter(q => q.type === 'constructSentence' || q.type === 'translate').slice(0, 5);
             } else if (lessonIdx === 2) { // Etap 3: Speaking/Listening
               filteredQs = allQs.filter(q => q.type === 'speak' || q.type === 'listen').slice(0, 5);
             } else if (lessonIdx === 3) { // AI Challenge (Harder/Mixed)
               filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, 5);
             } else if (lessonIdx === 4) { // Final Review
               filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, 8);
             } else { // Treasure - 10 Mixed Questions (Quiz)
               // Try to get a good mix of everything
               const speakQs = allQs.filter(q => q.type === 'speak').slice(0, 2);
               const listenQs = allQs.filter(q => q.type === 'listen').slice(0, 2);
               const sentenceQs = allQs.filter(q => q.type === 'constructSentence' || q.type === 'translate').slice(0, 2);
               const vocabQs = allQs.filter(q => q.type === 'imageChoice' || q.type === 'multipleChoice').slice(0, 2);
               
               let mixed = [...speakQs, ...listenQs, ...sentenceQs, ...vocabQs];
               
               // Fill the rest up to 10 randomly
               const usedIds = new Set(mixed.map(q => q.id));
               const remainingQs = allQs.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5);
               
               filteredQs = [...mixed, ...remainingQs].slice(0, 10).sort(() => Math.random() - 0.5);
             }
             
             // If filter was too strict and returned empty, fallback to random
             if (filteredQs.length === 0) {
                filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, lessonIdx === 5 ? 10 : 5);
             }

             console.log(`[ContentService] Generated lesson ${lessonId} dynamically from legacy data`);
             return {
                id: lessonId,
                title: lessonIdx === 5 ? 'Ünite Sonu Quizi' : `${legacyLesson.title} - Adım ${lessonIdx + 1}`,
                description: lessonIdx === 5 ? 'Üniteyi tamamlamak için bu testi geç!' : legacyLesson.description,
                icon: lessonIdx === 5 ? '🎁' : (legacyLesson.icon || '📚'),
                xpReward: lessonIdx === 5 ? 100 : 20,
                questions: filteredQs
             };
          }
        }
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
