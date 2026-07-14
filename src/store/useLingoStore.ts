import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AIPersonality = 'friendly' | 'strict' | 'funny' | 'academic';
export type AIExpressionStyle = 'casual' | 'formal' | 'encouraging';
export type VoiceType = 'male_1' | 'male_2' | 'female_1' | 'female_2';

interface LingoState {
  personality: AIPersonality;
  expressionStyle: AIExpressionStyle;
  voice: VoiceType;
  assistantVoice: VoiceType;
  setPersonality: (p: AIPersonality) => void;
  setExpressionStyle: (e: AIExpressionStyle) => void;
  setVoice: (v: VoiceType) => void;
  setAssistantVoice: (v: VoiceType) => void;
}

export const useLingoStore = create<LingoState>()(
  persist(
    (set) => ({
      personality: 'friendly',
      expressionStyle: 'encouraging',
      voice: 'male_1',
      assistantVoice: 'female_1',
      setPersonality: (p) => set({ personality: p }),
      setExpressionStyle: (e) => set({ expressionStyle: e }),
      setVoice: (v) => set({ voice: v }),
      setAssistantVoice: (v) => set({ assistantVoice: v }),
    }),
    {
      name: '@linguaplay_lingo_storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
