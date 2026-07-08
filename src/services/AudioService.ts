import * as FileSystem from 'expo-file-system/legacy';
import * as Crypto from 'expo-crypto';
import { Audio } from 'expo-av';

/**
 * AudioService — TTS playback via Google Translate (free, no API key needed).
 * Downloads and caches audio files locally for instant replay.
 */

const LANG_CODES: Record<string, string> = {
  english: 'en',
  french: 'fr',
  turkish: 'tr',
  kurdish: 'tr',   // Kurmancî Latin script → Turkish TTS works well
  spanish: 'es',
  german: 'de',
  italian: 'it',
  arabic: 'ar',
  en: 'en',
  fr: 'fr',
  tr: 'tr',
  ku: 'tr',
  es: 'es',
  de: 'de',
};

class AudioService {
  private currentSound: Audio.Sound | null = null;

  /**
   * Generates a safe filename for caching based on text and language.
   */
  private async getCacheUri(text: string, lang: string): Promise<string> {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      `${lang}_${text}`
    );
    return `${FileSystem.documentDirectory}tts_${hash}.mp3`;
  }

  /**
   * Gets the audio URI — checks cache first, then downloads from Google Translate TTS.
   */
  private async getAudioUri(text: string, lang: string): Promise<string> {
    const localUri = await this.getCacheUri(text, lang);
    const fileInfo = await FileSystem.getInfoAsync(localUri);

    if (fileInfo.exists) {
      return localUri; // Cached — instant playback
    }

    // Build Google Translate TTS URL
    const ttsLang = LANG_CODES[lang] || 'en';
    const encodedText = encodeURIComponent(text);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${ttsLang}&client=tw-ob`;

    try {
      // Download and cache for offline/instant replay
      const download = await FileSystem.downloadAsync(ttsUrl, localUri);
      if (download.status === 200) {
        return localUri;
      }
    } catch (e) {
      // Download failed — use streaming URL directly
      console.log('TTS cache download failed, using streaming URL');
    }

    return ttsUrl; // Streaming fallback
  }

  /**
   * Plays the given text in the specified language.
   * Stops any currently playing audio.
   */
  public async play(text: string, lang: string = 'english'): Promise<void> {
    if (!text) return;

    try {
      // Stop previous
      if (this.currentSound) {
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
        this.currentSound = null;
      }

      // Ensure audio mode is correct (plays even if silent switch is on in iOS)
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      });

      const uri = await this.getAudioUri(text, lang);

      const { sound } = await Audio.Sound.createAsync({ uri });
      this.currentSound = sound;
      
      // Slightly faster playback with pitch correction
      await sound.setRateAsync(1.15, true);
      
      await sound.playAsync();
      
      // Cleanup when done
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
          if (this.currentSound === sound) {
            this.currentSound = null;
          }
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
    if (this.currentSound) {
      try {
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
      } catch (e) {
        // ignore
      }
      this.currentSound = null;
    }
  }
}

export const TTSAudioService = new AudioService();
