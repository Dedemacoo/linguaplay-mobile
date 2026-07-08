const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/lessonContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

const englishStart = content.indexOf('  english: [');
const frenchStart = content.indexOf('  french: [');

if (englishStart === -1 || frenchStart === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

const newEnglishBlock = `  english: [
    {
      id: 'e1',
      title: 'Temeller 1',
      description: 'İngilizce temel kelimeler',
      icon: '👋',
      xpReward: 15,
      questions: [
        { id: 'e1q1', type: 'multipleChoice', prompt: '"Merhaba" kelimesinin İngilizcesi nedir?', options: ['Goodbye', 'Hello', 'Please', 'Thanks'], correctIndex: 1, audioText: 'Hello', audioLang: 'en-US' },
        { id: 'e1q2', type: 'multipleChoice', prompt: '"Kırmızı" kelimesinin İngilizcesi nedir?', options: ['Blue', 'Green', 'Red', 'Yellow'], correctIndex: 2, audioText: 'Red', audioLang: 'en-US' },
        { id: 'e1q3', type: 'translate', prompt: '"One, Two, Three" sayılarının Türkçe anlamı nedir?', options: ['Bir, İki, Üç', 'Dört, Beş, Altı', 'İki, Üç, Dört', 'Bir, Üç, Beş'], correctIndex: 0, audioText: 'One, Two, Three', audioLang: 'en-US' }
      ]
    },
    {
      id: 'e2',
      title: 'Günlük Yaşam',
      description: 'Aile bireyleri ve Ev',
      icon: '🏠',
      xpReward: 20,
      questions: [
        { id: 'e2q1', type: 'multipleChoice', prompt: '"Anne" kelimesinin İngilizcesi nedir?', options: ['Father', 'Sister', 'Mother', 'Brother'], correctIndex: 2, audioText: 'Mother', audioLang: 'en-US' },
        { id: 'e2q2', type: 'translate', prompt: '"Ev" kelimesinin karşılığı nedir?', options: ['Car', 'House', 'Tree', 'School'], correctIndex: 1, audioText: 'House', audioLang: 'en-US' },
        { id: 'e2q3', type: 'constructSentence', prompt: '"Benim bir kardeşim var" cümlesini kur.', options: ['have', 'brother', 'a', 'I'], correctAnswer: ['I', 'have', 'a', 'brother'], correctIndex: 0, audioText: 'I have a brother', audioLang: 'en-US' }
      ]
    },
    {
      id: 'e3',
      title: 'Fiiller',
      description: 'Basit fiiller',
      icon: '🏃‍♂️',
      xpReward: 25,
      questions: [
        { id: 'e3q1', type: 'translate', prompt: '"Ben gidiyorum" anlamına gelen cümle hangisidir?', options: ['I am eating', 'I am going', 'I am sleeping', 'I am reading'], correctIndex: 1, audioText: 'I am going', audioLang: 'en-US' },
        { id: 'e3q2', type: 'constructSentence', prompt: '"Su içiyorum" cümlesini İngilizce kur.', options: ['drinking', 'water', 'am', 'I'], correctAnswer: ['I', 'am', 'drinking', 'water'], correctIndex: 0, audioText: 'I am drinking water', audioLang: 'en-US' }
      ]
    },
    {
      id: 'e4',
      title: 'Yemek',
      description: 'Yemek isimleri',
      icon: '🍔',
      xpReward: 25,
      questions: [
        { id: 'e4q1', type: 'multipleChoice', prompt: '"Elma" kelimesinin İngilizcesi nedir?', options: ['Apple', 'Banana', 'Orange', 'Grape'], correctIndex: 0, audioText: 'Apple', audioLang: 'en-US' },
        { id: 'e4q2', type: 'translate', prompt: '"Chicken" ne demektir?', options: ['Balık', 'Tavuk', 'Et', 'Sebze'], correctIndex: 1, audioText: 'Chicken', audioLang: 'en-US' }
      ]
    },
    {
      id: 'e5',
      title: 'Seyahat',
      description: 'Seyahat kelimeleri',
      icon: '✈️',
      xpReward: 25,
      questions: [
        { id: 'e5q1', type: 'multipleChoice', prompt: '"Havalimanı" İngilizcede nedir?', options: ['Station', 'Bus', 'Airport', 'Train'], correctIndex: 2, audioText: 'Airport', audioLang: 'en-US' }
      ]
    },
    {
      id: 'e6',
      title: 'Hayvanlar',
      description: 'Hayvan isimleri',
      icon: '🐶',
      xpReward: 25,
      questions: [
        { id: 'e6q1', type: 'multipleChoice', prompt: '"Kedi" kelimesinin İngilizcesi nedir?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctIndex: 1, audioText: 'Cat', audioLang: 'en-US' }
      ]
    }
  ],\n`;

const newContent = content.substring(0, englishStart) + newEnglishBlock + content.substring(frenchStart);
fs.writeFileSync(filePath, newContent);
console.log('Updated lessonContent.ts successfully.');
