import { Audio } from 'expo-av';
import { usePreferencesStore } from '../store/usePreferencesStore';

class SoundManager {
  private isInitialized = false;
  private isLoading = false;
  private correctSound: Audio.Sound | null = null;
  private wrongSound: Audio.Sound | null = null;
  private completeSound: Audio.Sound | null = null;
  private countdownSound: Audio.Sound | null = null;
  private notificationSound: Audio.Sound | null = null;
  private startupSound: Audio.Sound | null = null;

  async init() {
    if (this.isInitialized || this.isLoading) return;
    this.isLoading = true;

    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
      });

      // Load each sound individually so one failure doesn't block others
      const sounds = [
        { key: 'correctSound', path: require('../../sound/doğru_bildirim_sesi.mp3') },
        { key: 'wrongSound', path: require('../../sound/yanlış.mp3') },
        { key: 'completeSound', path: require('../../sound/seviye tamamlama.mp3') },
        { key: 'countdownSound', path: require('../../sound/gerisayım.mp3') },
        { key: 'notificationSound', path: require('../../sound/ikinci bildirim sesi.mp3') },
        { key: 'startupSound', path: require('../../sound/uygulama açılış müziği.mp3') },
      ];

      for (const s of sounds) {
        try {
          const { sound } = await Audio.Sound.createAsync(s.path);
          (this as any)[s.key] = sound;
        } catch (e) {
          console.warn(`[SoundManager] Error loading ${s.key}:`, e);
        }
      }

      this.isInitialized = true;
    } catch (error) {
      console.error('[SoundManager] Error configuring audio mode:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private async safePlay(sound: Audio.Sound | null, name: string) {
    const { soundEnabled } = usePreferencesStore.getState();
    if (!soundEnabled) return;

    if (!sound) {
      console.log(`🎵 [SFX]: ${name} (sound not loaded)`);
      return;
    }
    try {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        await sound.replayAsync();
      }
    } catch (e) {
      console.warn(`[SoundManager] Play error (${name}):`, e);
    }
  }

  async playCorrect() {
    await this.safePlay(this.correctSound, 'Correct');
  }

  async playWrong() {
    await this.safePlay(this.wrongSound, 'Wrong');
  }

  async playComplete() {
    await this.safePlay(this.completeSound, 'Lesson Complete');
  }

  async playCountdown() {
    await this.safePlay(this.countdownSound, 'Countdown');
  }

  async stopCountdown() {
    try {
      if (this.countdownSound) {
        const status = await this.countdownSound.getStatusAsync();
        if (status.isLoaded) {
          await this.countdownSound.stopAsync();
        }
      }
    } catch (e) {
      console.warn('[SoundManager] Audio stop error:', e);
    }
  }

  async playNotification() {
    await this.safePlay(this.notificationSound, 'Notification');
  }

  async playStartup() {
    await this.safePlay(this.startupSound, 'Startup');
  }

  async unload() {
    const sounds = [
      this.correctSound,
      this.wrongSound,
      this.completeSound,
      this.countdownSound,
      this.notificationSound,
      this.startupSound
    ];

    for (const sound of sounds) {
      try {
        if (sound) {
          const status = await sound.getStatusAsync();
          if (status.isLoaded) {
            await sound.unloadAsync();
          }
        }
      } catch (e) {
        console.warn('[SoundManager] Unload error:', e);
      }
    }

    this.correctSound = null;
    this.wrongSound = null;
    this.completeSound = null;
    this.countdownSound = null;
    this.notificationSound = null;
    this.startupSound = null;
    this.isInitialized = false;
  }
}

export default new SoundManager();
