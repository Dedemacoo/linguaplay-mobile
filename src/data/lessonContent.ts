export interface Question {
  id: string;
  type: 'translate' | 'multipleChoice' | 'fillBlank' | 'listen' | 'imageChoice' | 'constructSentence' | 'flashcard' | 'speak';
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
  orderIndex?: number;
}
