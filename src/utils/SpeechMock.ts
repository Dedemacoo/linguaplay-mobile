// Expo Go üzerinde uygulamanın çökmesini engellemek için expo-speech-recognition'ı mockluyoruz.
// Eğer EAS build (gerçek APK) alınacaksa bu dosya yerine tekrar 'expo-speech-recognition' kütüphanesinden import edilmelidir.

export const ExpoSpeechRecognitionModule = {
  requestPermissionsAsync: async () => ({ granted: true }),
  start: (options?: any) => {
    console.log('[SpeechMock] started listening...', options);
  },
  stop: () => {
    console.log('[SpeechMock] stopped listening.');
  }
};

export const useSpeechRecognitionEvent = (eventName: string, callback: any) => {
  // Mock hook: Hiçbir şey yapmaz
};
