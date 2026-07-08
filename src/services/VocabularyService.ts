/**
 * VocabularyService
 * Oyunlar (Kart Eşleştirme, Dinleme, Quiz) için dinamik kelime çeker.
 * MyMemory Translation API (ücretsiz, anahtar gerektirmez):
 *   https://api.mymemory.translated.net/get?q={word}&langpair=tr|{langCode}
 *
 * Sonuçları AsyncStorage'a cache'ler; internet yoksa cache'den döner.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { massiveDictionary } from '../data/massiveDictionary';

// Dil kodları — MyMemory formatı
const LANG_CODES: Record<string, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
  german: 'de',
  arabic: 'ar',
  kurdish: 'ku', // MyMemory'nin Kurmancî desteği sınırlı; fallback kullanılır
  turkish: 'tr',
};

// Kategorilere göre Türkçe kelime bankası MassiveDictionary'den alınıyor.
const WORD_BANK = massiveDictionary;

// Kürtçe için fallback (MyMemory Kurmancî'yi iyi çeviremiyor)
const KURDISH_FALLBACK: Record<string, { tr: string; ku: string }[]> = {
  animals:   [{ tr: 'köpek', ku: 'kûçik' }, { tr: 'kedi', ku: 'pisîk' }, { tr: 'kuş', ku: 'çivîk' }, { tr: 'balık', ku: 'masî' }, { tr: 'at', ku: 'hesp' }, { tr: 'inek', ku: 'mang' }, { tr: 'aslan', ku: 'şêr' }, { tr: 'tilki', ku: 'rovî' }, { tr: 'ayı', ku: 'hirç' }, { tr: 'kurt', ku: 'gur' }],
  food:      [{ tr: 'ekmek', ku: 'nan' }, { tr: 'su', ku: 'av' }, { tr: 'et', ku: 'goşt' }, { tr: 'elma', ku: 'sêv' }, { tr: 'süt', ku: 'şîr' }, { tr: 'yumurta', ku: 'hêk' }, { tr: 'tuz', ku: 'xwê' }, { tr: 'şeker', ku: 'şekir' }, { tr: 'peynir', ku: 'penêr' }, { tr: 'meyve', ku: 'fêkî' }],
  colors:    [{ tr: 'kırmızı', ku: 'sor' }, { tr: 'mavi', ku: 'şîn' }, { tr: 'yeşil', ku: 'kesk' }, { tr: 'sarı', ku: 'zer' }, { tr: 'beyaz', ku: 'spî' }, { tr: 'siyah', ku: 'reş' }, { tr: 'turuncu', ku: 'porteqalî' }, { tr: 'mor', ku: 'mor' }],
  numbers:   [{ tr: 'bir', ku: 'yek' }, { tr: 'iki', ku: 'du' }, { tr: 'üç', ku: 'sê' }, { tr: 'dört', ku: 'çar' }, { tr: 'beş', ku: 'pênc' }, { tr: 'altı', ku: 'şeş' }, { tr: 'yedi', ku: 'heft' }, { tr: 'sekiz', ku: 'heşt' }, { tr: 'dokuz', ku: 'neh' }, { tr: 'on', ku: 'deh' }],
  greetings: [{ tr: 'merhaba', ku: 'merheba' }, { tr: 'günaydın', ku: 'Sibehbexêr' }, { tr: 'teşekkürler', ku: 'spas' }, { tr: 'evet', ku: 'erê' }, { tr: 'hayır', ku: 'na' }, { tr: 'lütfen', ku: 'ji kerema xwe' }, { tr: 'görüşürüz', ku: 'xatirê te' }],
  family:    [{ tr: 'anne', ku: 'dê' }, { tr: 'baba', ku: 'bav' }, { tr: 'kardeş', ku: 'bira/xwişk' }, { tr: 'büyükanne', ku: 'nêna' }, { tr: 'büyükbaba', ku: 'bapîr' }, { tr: 'amca', ku: 'mam' }, { tr: 'teyze', ku: 'xaltî' }, { tr: 'çocuk', ku: 'zarok' }],
  nature:    [{ tr: 'güneş', ku: 'rojî' }, { tr: 'ay', ku: 'heyv' }, { tr: 'yıldız', ku: 'stêrk' }, { tr: 'deniz', ku: 'deryay' }, { tr: 'dağ', ku: 'çiya' }, { tr: 'orman', ku: 'daristanê' }, { tr: 'çiçek', ku: 'kulîlk' }, { tr: 'ağaç', ku: 'dar' }, { tr: 'nehir', ku: 'çem' }, { tr: 'kar', ku: 'berf' }],
};

export interface WordPair {
  turkish: string;    // Türkçe (kaynak)
  foreign: string;    // Hedef dil
  category: string;
  phonetic?: string;
}

const CACHE_PREFIX = '@vocab_cache_v3_';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 saat

async function getCached(key: string): Promise<WordPair[] | null> {
  try {
    const raw = await AsyncStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL_MS) return null;
    return data;
  } catch { return null; }
}

async function setCache(key: string, data: WordPair[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {}
}

async function translateWord(word: string, fromCode: string, toCode: string): Promise<string | null> {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${fromCode}|${toCode}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    const json = await res.json();
    const translated = json?.responseData?.translatedText;
    // Filtrele: çeviri yapılamadıysa veya aynı kelimeyse null dön
    if (!translated || translated.toLowerCase() === word.toLowerCase() || translated.includes('MYMEMORY')) return null;
    // İlk harfi büyüt, noktalama temizle
    return translated.replace(/[.!?,;]/g, '').split(' ').slice(0, 3).join(' ');
  } catch { return null; }
}

export class VocabularyService {
  /**
   * Belirli bir dil + kategori için kelime çiftleri döndürür.
   * Önce cache'e bakar, cache yoksa API'den çeker.
   */
  static async getWordPairs(lang: string, category: string, count = 10): Promise<WordPair[]> {
    if (category === 'mixed') {
      return this.getMixedPairs(lang, count);
    }

    const cacheKey = `${lang}_${category}`;

    // 1. Check Cache
    const cached = await getCached(cacheKey);
    if (cached && cached.length >= count) {
      return this.shuffle(cached).slice(0, count);
    }

    // 2. Fetch from our massive local lessonContent database! (Instant loading)
    try {
      const { lessonsByLanguage } = require('../data/lessonContent');
      // ÖNEMLİ: Sadece seçilen dildeki dersleri kullan, başka dile ASLA fallback yapma
      const allLessons = lessonsByLanguage[lang] || [];
      
      const categoryKeywords: Record<string, string[]> = {
        animals: ['hayvan', 'kedi', 'köpek'],
        food: ['yiyecek', 'sebze', 'meyve', 'içecek', 'mutfak'],
        colors: ['renk', 'giyim'],
        numbers: ['sayı', 'saat', 'temel'],
        family: ['aile', 'arkadaş', 'temel'],
        body: ['vücut', 'hastalık'],
        nature: ['doğa', 'mevsim', 'hava', 'coğrafya'],
        greetings: ['selam', 'tepki', 'tanışma', 'temel'],
        verbs: ['fiil', 'rutin', 'zaman'],
        places: ['mekan', 'hastane', 'okul', 'otel', 'yer'],
      };

      const keywords = categoryKeywords[category] || [category];
      const matchingLessons = allLessons.filter((l: any) => 
        keywords.some(kw => l.title.toLowerCase().includes(kw) || l.description.toLowerCase().includes(kw))
      );

      let pairs: WordPair[] = [];
      
      for (const lesson of matchingLessons) {
        for (const q of lesson.questions) {
          if (q.type === 'flashcard' && q.prompt && q.audioText) {
            pairs.push({
              turkish: q.prompt,
              foreign: q.audioText,
              category
            });
          }
        }
      }

      // Unique pairs
      pairs = pairs.filter((v, i, a) => a.findIndex(t => t.turkish === v.turkish) === i);

      // 3. Fallback if local DB doesn't have enough
      if (pairs.length < count) {
        const fallbackPairs = this.getStaticFallback(lang, category);
        pairs = [...pairs, ...fallbackPairs].filter((v, i, a) => a.findIndex(t => t.turkish === v.turkish) === i);
      }

      // Cache the result for next time
      if (pairs.length >= count) {
        await setCache(cacheKey, pairs);
      }

      return this.shuffle(pairs).slice(0, count);

    } catch (e) {
      console.log("Local fetch failed, using fallback:", e);
      return this.shuffle(this.getStaticFallback(lang, category)).slice(0, count);
    }
  }

  /**
   * Birden fazla kategoriden karışık kelimeler getir (Quiz için)
   */
  static async getMixedPairs(lang: string, count = 20): Promise<WordPair[]> {
    const categories = Object.keys(WORD_BANK);
    const shuffledCats = this.shuffle(categories).slice(0, 5); // 5 kategori
    const perCat = Math.ceil(count / shuffledCats.length);

    const results = await Promise.allSettled(
      shuffledCats.map(cat => this.getWordPairs(lang, cat, perCat))
    );

    const all: WordPair[] = [];
    for (const r of results) {
      if (r.status === 'fulfilled') all.push(...r.value);
    }
    return this.shuffle(all).slice(0, count);
  }

  /** Statik fallback (internet yokken) */
  static getStaticFallback(lang: string, category: string): WordPair[] {
    const staticMap: Record<string, Record<string, { tr: string; foreign: string }[]>> = {
      english: {
        animals: [{ tr: 'köpek', foreign: 'dog' }, { tr: 'kedi', foreign: 'cat' }, { tr: 'kuş', foreign: 'bird' }, { tr: 'balık', foreign: 'fish' }, { tr: 'at', foreign: 'horse' }, { tr: 'inek', foreign: 'cow' }, { tr: 'aslan', foreign: 'lion' }, { tr: 'fil', foreign: 'elephant' }],
        food:    [{ tr: 'ekmek', foreign: 'bread' }, { tr: 'su', foreign: 'water' }, { tr: 'et', foreign: 'meat' }, { tr: 'elma', foreign: 'apple' }, { tr: 'süt', foreign: 'milk' }, { tr: 'yumurta', foreign: 'egg' }, { tr: 'tuz', foreign: 'salt' }, { tr: 'şeker', foreign: 'sugar' }],
        colors:  [{ tr: 'kırmızı', foreign: 'red' }, { tr: 'mavi', foreign: 'blue' }, { tr: 'yeşil', foreign: 'green' }, { tr: 'sarı', foreign: 'yellow' }, { tr: 'beyaz', foreign: 'white' }, { tr: 'siyah', foreign: 'black' }],
        numbers: [{ tr: 'bir', foreign: 'one' }, { tr: 'iki', foreign: 'two' }, { tr: 'üç', foreign: 'three' }, { tr: 'dört', foreign: 'four' }, { tr: 'beş', foreign: 'five' }, { tr: 'altı', foreign: 'six' }, { tr: 'yedi', foreign: 'seven' }, { tr: 'sekiz', foreign: 'eight' }],
        family:  [{ tr: 'anne', foreign: 'mother' }, { tr: 'baba', foreign: 'father' }, { tr: 'kardeş', foreign: 'sibling' }, { tr: 'oğul', foreign: 'son' }, { tr: 'kız', foreign: 'daughter' }, { tr: 'büyükanne', foreign: 'grandmother' }],
        body:    [{ tr: 'baş', foreign: 'head' }, { tr: 'göz', foreign: 'eye' }, { tr: 'el', foreign: 'hand' }, { tr: 'ayak', foreign: 'foot' }, { tr: 'kol', foreign: 'arm' }, { tr: 'bacak', foreign: 'leg' }, { tr: 'kalp', foreign: 'heart' }],
        nature:  [{ tr: 'güneş', foreign: 'sun' }, { tr: 'ay', foreign: 'moon' }, { tr: 'ağaç', foreign: 'tree' }, { tr: 'su', foreign: 'water' }, { tr: 'çiçek', foreign: 'flower' }, { tr: 'dağ', foreign: 'mountain' }, { tr: 'deniz', foreign: 'sea' }],
        greetings: [{ tr: 'merhaba', foreign: 'hello' }, { tr: 'nasılsın', foreign: 'how are you' }, { tr: 'günaydın', foreign: 'good morning' }, { tr: 'iyi geceler', foreign: 'good night' }, { tr: 'teşekkürler', foreign: 'thank you' }, { tr: 'lütfen', foreign: 'please' }],
        verbs:   [{ tr: 'koşmak', foreign: 'run' }, { tr: 'yürümek', foreign: 'walk' }, { tr: 'yemek', foreign: 'eat' }, { tr: 'içmek', foreign: 'drink' }, { tr: 'uyumak', foreign: 'sleep' }, { tr: 'görmek', foreign: 'see' }, { tr: 'duymak', foreign: 'hear' }],
        places:  [{ tr: 'ev', foreign: 'house' }, { tr: 'okul', foreign: 'school' }, { tr: 'hastane', foreign: 'hospital' }, { tr: 'park', foreign: 'park' }, { tr: 'şehir', foreign: 'city' }, { tr: 'sokak', foreign: 'street' }, { tr: 'restoran', foreign: 'restaurant' }],
      },
      french: {
        animals: [{ tr: 'köpek', foreign: 'chien' }, { tr: 'kedi', foreign: 'chat' }, { tr: 'kuş', foreign: 'oiseau' }, { tr: 'balık', foreign: 'poisson' }, { tr: 'at', foreign: 'cheval' }, { tr: 'inek', foreign: 'vache' }, { tr: 'aslan', foreign: 'lion' }],
        food:    [{ tr: 'ekmek', foreign: 'pain' }, { tr: 'su', foreign: 'eau' }, { tr: 'et', foreign: 'viande' }, { tr: 'elma', foreign: 'pomme' }, { tr: 'süt', foreign: 'lait' }, { tr: 'yumurta', foreign: 'œuf' }, { tr: 'tuz', foreign: 'sel' }],
        colors:  [{ tr: 'kırmızı', foreign: 'rouge' }, { tr: 'mavi', foreign: 'bleu' }, { tr: 'yeşil', foreign: 'vert' }, { tr: 'sarı', foreign: 'jaune' }, { tr: 'beyaz', foreign: 'blanc' }, { tr: 'siyah', foreign: 'noir' }],
        numbers: [{ tr: 'bir', foreign: 'un' }, { tr: 'iki', foreign: 'deux' }, { tr: 'üç', foreign: 'trois' }, { tr: 'dört', foreign: 'quatre' }, { tr: 'beş', foreign: 'cinq' }, { tr: 'altı', foreign: 'six' }],
        body:    [{ tr: 'baş', foreign: 'tête' }, { tr: 'göz', foreign: 'œil' }, { tr: 'el', foreign: 'main' }, { tr: 'ayak', foreign: 'pied' }, { tr: 'kol', foreign: 'bras' }, { tr: 'bacak', foreign: 'jambe' }],
        nature:  [{ tr: 'güneş', foreign: 'soleil' }, { tr: 'ay', foreign: 'lune' }, { tr: 'ağaç', foreign: 'arbre' }, { tr: 'su', foreign: 'eau' }, { tr: 'çiçek', foreign: 'fleur' }, { tr: 'dağ', foreign: 'montagne' }],
        greetings: [{ tr: 'merhaba', foreign: 'bonjour' }, { tr: 'nasılsın', foreign: 'comment ça va' }, { tr: 'günaydın', foreign: 'bonjour' }, { tr: 'iyi geceler', foreign: 'bonne nuit' }, { tr: 'teşekkürler', foreign: 'merci' }],
        verbs:   [{ tr: 'koşmak', foreign: 'courir' }, { tr: 'yürümek', foreign: 'marcher' }, { tr: 'yemek', foreign: 'manger' }, { tr: 'içmek', foreign: 'boire' }, { tr: 'uyumak', foreign: 'dormir' }],
        places:  [{ tr: 'ev', foreign: 'maison' }, { tr: 'okul', foreign: 'école' }, { tr: 'hastane', foreign: 'hôpital' }, { tr: 'park', foreign: 'parc' }, { tr: 'şehir', foreign: 'ville' }],
      },
      german: {
        animals: [{ tr: 'köpek', foreign: 'Hund' }, { tr: 'kedi', foreign: 'Katze' }, { tr: 'kuş', foreign: 'Vogel' }, { tr: 'balık', foreign: 'Fisch' }, { tr: 'at', foreign: 'Pferd' }, { tr: 'inek', foreign: 'Kuh' }],
        food:    [{ tr: 'ekmek', foreign: 'Brot' }, { tr: 'su', foreign: 'Wasser' }, { tr: 'et', foreign: 'Fleisch' }, { tr: 'elma', foreign: 'Apfel' }, { tr: 'süt', foreign: 'Milch' }, { tr: 'yumurta', foreign: 'Ei' }],
        colors:  [{ tr: 'kırmızı', foreign: 'rot' }, { tr: 'mavi', foreign: 'blau' }, { tr: 'yeşil', foreign: 'grün' }, { tr: 'sarı', foreign: 'gelb' }, { tr: 'beyaz', foreign: 'weiß' }, { tr: 'siyah', foreign: 'schwarz' }],
      },
      spanish: {
        animals: [{ tr: 'köpek', foreign: 'perro' }, { tr: 'kedi', foreign: 'gato' }, { tr: 'kuş', foreign: 'pájaro' }, { tr: 'balık', foreign: 'pez' }, { tr: 'at', foreign: 'caballo' }, { tr: 'inek', foreign: 'vaca' }],
        food:    [{ tr: 'ekmek', foreign: 'pan' }, { tr: 'su', foreign: 'agua' }, { tr: 'et', foreign: 'carne' }, { tr: 'elma', foreign: 'manzana' }, { tr: 'süt', foreign: 'leche' }, { tr: 'yumurta', foreign: 'huevo' }],
      },
      kurdish: Object.fromEntries(
        Object.entries(KURDISH_FALLBACK).map(([cat, list]) => [
          cat,
          list.map(i => ({ tr: i.tr, foreign: i.ku }))
        ])
      ),
      turkish: Object.fromEntries(
        Object.entries(KURDISH_FALLBACK).map(([cat, list]) => [
          cat,
          list.map(i => ({ tr: i.tr, foreign: i.tr }))
        ])
      )
    };

    const langMap = staticMap[lang] || staticMap.english;
    const catMap = langMap[category] || []; // Fallback to empty array
    
    // Eğer kategori bulunamadıysa, genel bir kelime listesi döndür
    const finalMap = catMap.length > 0 ? catMap : (langMap.food || staticMap.english.food);

    return finalMap.map(p => ({ turkish: p.tr, foreign: p.foreign, category })) as WordPair[];
  }

  /** Liste karıştır */
  static shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Tüm kategorileri döndür */
  static getCategories(): { id: string; label: string; icon: string }[] {
    return [
      { id: 'mixed', label: 'Tümünü Karıştır', icon: '🔀' },
      { id: 'animals', label: 'Hayvanlar', icon: '🦁' },
      { id: 'food', label: 'Yiyecekler', icon: '🍎' },
      { id: 'colors', label: 'Renkler', icon: '🎨' },
      { id: 'numbers', label: 'Sayılar', icon: '🔢' },
      { id: 'family', label: 'Aile', icon: '👨‍👩‍👧' },
      { id: 'body', label: 'Vücut', icon: '💪' },
      { id: 'nature', label: 'Doğa', icon: '🌿' },
      { id: 'greetings', label: 'Selamlaşma', icon: '👋' },
      { id: 'verbs', label: 'Fiiller', icon: '🏃' },
      { id: 'places', label: 'Yerler', icon: '🏙️' },
    ];
  }
}
