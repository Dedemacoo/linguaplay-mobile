const { lessonsByLanguage } = require('./lessonContent.js');

const activeLanguage = 'kurdish';
const allLessons = lessonsByLanguage[activeLanguage] || [];

const isPlacementTest = true;
const currentLesson = isPlacementTest
  ? {
      id: 'placement',
      title: 'Seviye Belirleme',
      description: 'Seviyeni ölçüyoruz',
      icon: '🧭',
      xpReward: 0,
      questions: allLessons.map(l => {
        if (!l.questions || l.questions.length === 0) return null;
        return l.questions[Math.floor(Math.random() * l.questions.length)];
      }).filter(Boolean),
    }
  : allLessons[0];

const questions = currentLesson?.questions || [];
const totalQuestions = questions.length;

console.log('totalQuestions for Placement:', totalQuestions);
