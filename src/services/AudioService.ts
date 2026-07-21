import * as Speech from 'expo-speech';
import { useLingoStore } from '../store/useLingoStore';

/**
 * AudioService — TTS playback via expo-speech (native, offline, reliable).
 */

const LANG_CODES: Record<string, string> = {
  // Full names
  english: 'en-US',
  french: 'fr-FR',
  turkish: 'tr-TR',
  kurdish: 'tr-TR',
  spanish: 'es-ES',
  german: 'de-DE',
  italian: 'it-IT',
  arabic: 'ar-SA',
  // Short codes
  en: 'en-US',
  tr: 'tr-TR',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  es: 'es-ES',
  ar: 'ar-SA',
  ku: 'tr-TR',
};

class AudioService {
  /**
   * Plays the given text in the specified language.
   * Stops any currently playing audio.
   */
  public async play(
    text: string, 
    lang: string = 'english', 
    options?: { pitch?: number; rate?: number; onDone?: () => void; onError?: (error: any) => void; }
  ): Promise<void> {
    if (!text) return;

    try {
      // Stop previous speech
      const isSpeaking = await Speech.isSpeakingAsync();
      if (isSpeaking) {
        await Speech.stop();
      }

      const language = LANG_CODES[lang] || lang;
      
      const { voice } = useLingoStore.getState();
      let basePitch = 1.0;
      let baseRate = 0.9;
      
      if (voice === 'male_1') { basePitch = 0.6; baseRate = 0.85; }
      else if (voice === 'male_2') { basePitch = 0.85; baseRate = 0.95; }
      else if (voice === 'female_1') { basePitch = 1.3; baseRate = 0.95; }
      else if (voice === 'female_2') { basePitch = 1.1; baseRate = 0.9; }
      
      Speech.speak(text, {
        language,
        pitch: options?.pitch ?? basePitch,
        rate: options?.rate ?? baseRate,
        onDone: () => {
          if (options?.onDone) options.onDone();
        },
        onError: (error) => {
          console.error('[AudioService] Speech error:', error);
          if (options?.onError) options.onError(error);
        }
      });
      
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  }

  /**
   * Stop any currently playing audio.
   */
  public async stop(): Promise<void> {
    try {
      await Speech.stop();
    } catch (e) {
      // ignore
    }
  }
}

export const TTSAudioService = new AudioService();
