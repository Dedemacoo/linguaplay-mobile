import { Audio } from 'expo-av';

class SoundManager {
  private isInitialized = false;
  private correctSound: Audio.Sound | null = null;
  private wrongSound: Audio.Sound | null = null;
  private completeSound: Audio.Sound | null = null;
  private countdownSound: Audio.Sound | null = null;
  private notificationSound: Audio.Sound | null = null;
  private startupSound: Audio.Sound | null = null;

  async init() {
    if (this.isInitialized) return;

    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
      });

      // Load each sound individually so one failure doesn't block others
      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/doğru_bildirim_sesi.mp3'));
        this.correctSound = sound;
      } catch (e) { console.log('Error loading correctSound:', e); }

      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/yanlış.mp3'));
        this.wrongSound = sound;
      } catch (e) { console.log('Error loading wrongSound:', e); }

      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/seviye tamamlama.mp3'));
        this.completeSound = sound;
      } catch (e) { console.log('Error loading completeSound:', e); }

      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/gerisayım.mp3'));
        this.countdownSound = sound;
      } catch (e) { console.log('Error loading countdownSound:', e); }

      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/ikinci bildirim sesi.mp3'));
        this.notificationSound = sound;
      } catch (e) { console.log('Error loading notificationSound:', e); }

      try {
        const { sound } = await Audio.Sound.createAsync(require('../../sound/uygulama açılış müziği.mp3'));
        this.startupSound = sound;
      } catch (e) { console.log('Error loading startupSound:', e); }

      this.isInitialized = true;
    } catch (error) {
      console.log('Error configuring audio mode:', error);
    }
  }

  async playCorrect() {
    try {
      if (this.correctSound) {
        await this.correctSound.replayAsync();
      } else {
        console.log('🎵 [SFX]: Correct');
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async playWrong() {
    try {
      if (this.wrongSound) {
        await this.wrongSound.replayAsync();
      } else {
        console.log('🎵 [SFX]: Wrong');
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async playComplete() {
    try {
      if (this.completeSound) {
        await this.completeSound.replayAsync();
      } else {
        console.log('🎵 [SFX]: Lesson Complete');
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async playCountdown() {
    try {
      if (this.countdownSound) {
        await this.countdownSound.replayAsync();
      } else {
        console.log('🎵 [SFX]: Countdown');
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async stopCountdown() {
    try {
      if (this.countdownSound) {
        await this.countdownSound.stopAsync();
      }
    } catch (e) { console.log('Audio stop error', e); }
  }

  async playNotification() {
    try {
      if (this.notificationSound) {
        await this.notificationSound.replayAsync();
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async playStartup() {
    try {
      if (this.startupSound) {
        await this.startupSound.replayAsync();
      }
    } catch (e) { console.log('Audio play error', e); }
  }

  async unload() {
    if (this.correctSound) await this.correctSound.unloadAsync();
    if (this.wrongSound) await this.wrongSound.unloadAsync();
    if (this.completeSound) await this.completeSound.unloadAsync();
    if (this.countdownSound) await this.countdownSound.unloadAsync();
    if (this.notificationSound) await this.notificationSound.unloadAsync();
    if (this.startupSound) await this.startupSound.unloadAsync();
    this.isInitialized = false;
  }
}

export default new SoundManager();
