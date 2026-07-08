import { kurdishContent } from './kurdishContent';
import { englishContent } from './englishContent';
import { frenchContent } from './frenchContent';
import { spanishContent } from './spanishContent';
import { germanContent } from './germanContent';
import { italianContent } from './italianContent';
import { turkishContent } from './turkishContent';

export interface Question {
  id: string;
  type: 'translate' | 'multipleChoice' | 'fillBlank' | 'listen' | 'imageChoice' | 'constructSentence' | 'flashcard';
  prompt: string;
  options: string[];
  imageOptions?: string[];
  correctIndex: number;
  correctAnswer?: string[];
  tooltips?: Record<string, string[]>;
  audioText?: string;
  audioLang?: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  questions: Question[];
}

export const lessonsByLanguage: Record<string, LessonContent[]> = {
  "kurdish": kurdishContent,
  "english": englishContent,
  "french": frenchContent,
  "spanish": spanishContent,
  "german": germanContent,
  "italian": italianContent,
  "turkish": turkishContent
,
  "japanese": [],
  "korean": [],
  "russian": [],
  "chinese": [],
  "arabic": [],
  "portuguese": [],
  "dutch": []
};
