const { lessonsByLanguage } = require('./lessonContent.js');
console.log('Keys:', Object.keys(lessonsByLanguage));

for (const k of Object.keys(lessonsByLanguage)) {
  const lessons = lessonsByLanguage[k];
  let emptyQuestionsCount = 0;
  for (const l of lessons) {
    if (!l.questions || l.questions.length === 0) emptyQuestionsCount++;
  }
  console.log(`Language ${k}: ${lessons.length} lessons, ${emptyQuestionsCount} lessons have no questions.`);
}
