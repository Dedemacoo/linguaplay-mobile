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
    const baseLessonId = lessonId.replace(/_\d+$/, '');
    // Extract part number (1-4) from lessonId like eng_u1_l1_2 -> part 2
    const partMatch = lessonId.match(/_(\d+)$/);
    const partNumber = (baseLessonId !== lessonId && partMatch) ? parseInt(partMatch[1], 10) : 0;
    const cacheKey = `${CACHE_PREFIX_LESSON}${lang}_${baseLessonId}`;
    
    // Helper: split questions into 4 different part sets
    const getPartQuestions = (allQs: any[], part: number): any[] => {
      if (part <= 0 || part > 4) return allQs.slice(0, 5); // fallback
      
      let filtered: any[] = [];
      if (part === 1) {
        // Part 1: Kelime öğrenme — Vocab focused
        filtered = allQs.filter(q => q.type === 'flashcard' || q.type === 'imageChoice' || q.type === 'multipleChoice');
      } else if (part === 2) {
        // Part 2: Cümle kurma — Sentence building
        filtered = allQs.filter(q => q.type === 'constructSentence' || q.type === 'translate' || q.type === 'multipleChoice');
      } else if (part === 3) {
        // Part 3: Dinleme & Konuşma — Listening/Speaking
        filtered = allQs.filter(q => q.type === 'speak' || q.type === 'listen' || q.type === 'translate');
      } else {
        // Part 4: Karışık Tekrar — Mixed review (harder)
        filtered = [...allQs].sort(() => Math.random() - 0.5);
      }
      
      // If filter was too strict, fill with random questions
      if (filtered.length < 5) {
        const usedIds = new Set(filtered.map(q => q.id));
        const extra = allQs.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5);
        filtered = [...filtered, ...extra];
      }
      
      return filtered.slice(0, 10);
    };
    
    const PART_NAMES = ['', 'Kelime Öğren', 'Cümle Kur', 'Dinle & Konuş', 'Karışık Tekrar'];
    const PART_ICONS = ['📚', '🔤', '✍️', '🎧', '🔄'];

    try {
      // 1. Check static English Curriculum first (DISABLED to use dynamic engine for Unit 1 as well)
      if (lang === 'english') {
        /*
        if (englishCurriculumLessons[baseLessonId]) {
          console.log(`[ContentService] Loaded lesson ${baseLessonId} from static curriculum, part ${partNumber}`);
          const base = englishCurriculumLessons[baseLessonId];
          const questions = partNumber > 0 ? getPartQuestions(base.questions || [], partNumber) : (base.questions || []);
          return {
            ...base,
            id: lessonId, // CRITICAL: use part-specific ID so progress saves correctly
            title: partNumber > 0 ? `${base.title} — ${PART_NAMES[partNumber]}` : base.title,
            icon: partNumber > 0 ? PART_ICONS[partNumber] : (base.icon || '📚'),
            questions
          };
        }
        */
        
        // Dynamic generation for ALL units from englishContent.js
        const match = baseLessonId.match(/eng_u(\d+)_l(\d+)/);
        if (match) {
          const unitIdx = parseInt(match[1], 10) - 1;
          const lessonIdx = parseInt(match[2], 10) - 1;
          
          // 1 Ünite = 6 Halka (lessonIdx 0..5)
          // Her ünitenin ilk 5 halkası için farklı bir konu (topic) seç.
          const topicIndex = (unitIdx * 5) + Math.min(lessonIdx, 4);
          
          let targetLesson = englishContent[topicIndex];
          if (!targetLesson) {
             // Eğer 990 konuyu aşıyorsak başa saralım (güvenlik amaçlı)
             targetLesson = englishContent[topicIndex % englishContent.length];
          }

          if (targetLesson) {
             let allQs: any[] = [];
             let title = targetLesson.title;
             let description = targetLesson.description;
             let icon = targetLesson.icon;

             if (lessonIdx === 5) {
                // Ünite Finali: Bu ünitedeki 5 konunun sorularını birleştir
                for (let i = 0; i < 5; i++) {
                   const t = englishContent[(unitIdx * 5) + i];
                   if (t && t.questions) {
                      allQs = [...allQs, ...t.questions];
                   }
                }
                title = 'Ünite Sonu Finali';
                description = 'Bu ünitede öğrendiğin 5 konunun genel testi!';
                icon = '🎁';
             } else {
                allQs = targetLesson.questions || [];
             }
             
             let filteredQs: any[] = [];
             
             if (partNumber > 0) {
               // Part-based: each part of the same node gets different questions
               filteredQs = getPartQuestions(allQs, partNumber);
             } else {
               // Legacy: no part suffix, fallback mix
               filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, 5);
             }
             
             if (filteredQs.length === 0) {
                filteredQs = allQs.sort(() => Math.random() - 0.5).slice(0, 5);
             }

             const titleSuffix = partNumber > 0 ? ` — ${PART_NAMES[partNumber]}` : '';
             console.log(`[ContentService] Generated lesson ${lessonId} dynamically (part ${partNumber}) from topicIndex ${topicIndex}`);
             
             return {
                id: lessonId, // CRITICAL: part-specific ID
                title: `${title}${titleSuffix}`,
                description: description,
                icon: partNumber > 0 ? PART_ICONS[partNumber] : (icon || '📚'),
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
          console.log(`[ContentService] Loaded lesson ${baseLessonId} from cache for part ${lessonId}`);
          entry.data.id = lessonId;
          return entry.data;
        }
      }

      // 2. Fetch from Firebase
      const langCode = getLanguageCode(lang);
      const docRef = doc(db, `lessons_${langCode}`, baseLessonId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as LessonContent;
        // Ensure the returned ID matches the requested part so progress tracks correctly
        data.id = lessonId; 
        
        // Save to cache
        await AsyncStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
        console.log(`[ContentService] Loaded lesson ${baseLessonId} from Firebase for part ${lessonId}`);
        return data;
      }
      
      console.warn(`[ContentService] Lesson ${baseLessonId} not found in Firebase`);
      return null;
    } catch (error) {
      console.error(`[ContentService] Error loading lesson content ${lessonId} for ${lang}:`, error);
      
      // If error (e.g. offline), try returning stale cache
      const cachedStr = await AsyncStorage.getItem(cacheKey);
      if (cachedStr) {
        console.log(`[ContentService] Returning stale cache for ${baseLessonId} part ${lessonId}`);
        const data = JSON.parse(cachedStr).data;
        data.id = lessonId;
        return data;
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
