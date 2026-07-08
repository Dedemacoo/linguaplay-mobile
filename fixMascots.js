const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src/screens');

const filesToFix = [
  { file: 'TransitionScreen.tsx', regex: /<Text style=\{styles\.mascot\}>.*?<\/Text>/g, replacement: '<Mascot size={120} style={{ marginBottom: 30 }} />' },
  { file: 'IntroLessonScreen.tsx', regex: /<Text style=\{styles\.mascotEmoji\}>.*?<\/Text>/g, replacement: '<Mascot size={60} style={{ marginRight: 10 }} />' },
  { file: 'LessonScreen.tsx', regex: /<Text style=\{styles\.mascotEmoji\}>.*?<\/Text>/g, replacement: '<Mascot size={60} style={{ marginRight: 10 }} />' },
  { file: 'LessonScreen.tsx', regex: /<Text style=\{\{ fontSize: 60 \}\}>.*?<\/Text>/g, replacement: '<Mascot size={80} />' },
  { file: 'LoginScreen.tsx', regex: /<Text style=\{styles\.logo\}>.*?<\/Text>/g, replacement: '<Mascot size={150} style={{ marginBottom: 20 }} />' },
  { file: 'RegisterScreen.tsx', regex: /<Text style=\{styles\.logo\}>.*?<\/Text>/g, replacement: '<Mascot size={150} style={{ marginBottom: 20 }} />' },
  { file: 'PathSelectionScreen.tsx', regex: /<Text style=\{\{ fontSize: 60 \}\}>.*?<\/Text>/g, replacement: '<Mascot size={80} />' },
  { file: 'OnboardingScreen.tsx', regex: /<Text style=\{\{ fontSize: (60|80|120) \}\}>.*?<\/Text>/g, replacement: '<Mascot size={150} />' },
];

filesToFix.forEach(({ file, regex, replacement }) => {
  const filePath = path.join(screensDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      if (!newContent.includes('import { Mascot }')) {
        newContent = "import { Mascot } from '../components/Mascot';\n" + newContent;
      }
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed ${file}`);
    }
  }
});
