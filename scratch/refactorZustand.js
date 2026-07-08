const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', 'src', 'screens');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Language Context -> Zustand
  content = content.replace(/import\s+\{\s*useLanguage\s*\}\s+from\s+'\.\.\/context\/LanguageContext';/g, "import { useLanguageStore } from '../store/useLanguageStore';");
  content = content.replace(/import\s+\{\s*useLanguage\s*\}\s+from\s+'\.\.\/\.\.\/context\/LanguageContext';/g, "import { useLanguageStore } from '../../store/useLanguageStore';");
  content = content.replace(/const\s+\{\s*activeLanguage(,\s*setActiveLanguage)?\s*\}\s*=\s*useLanguage\(\);/g, "const { activeLanguage$1 } = useLanguageStore();");

  // Progress Context -> Zustand
  content = content.replace(/import\s+\{\s*useProgress\s*\}\s+from\s+'\.\.\/context\/ProgressContext';/g, "import { useProgressStore } from '../store/useProgressStore';");
  content = content.replace(/import\s+\{\s*useProgress\s*\}\s+from\s+'\.\.\/\.\.\/context\/ProgressContext';/g, "import { useProgressStore } from '../../store/useProgressStore';");
  content = content.replace(/const\s+\{\s*([^\}]+)\s*\}\s*=\s*useProgress\(\);/g, "const { $1 } = useProgressStore();");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory(directoryPath);
processDirectory(path.join(__dirname, '..', 'src', 'components'));
