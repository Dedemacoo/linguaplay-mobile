const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, '..', 'src', 'screens');

// Screens that need haptics added
const targetScreens = [
  'QuizBattleScreen.tsx',
  'PremiumScreen.tsx',
  'ShopScreen.tsx',
  'ProfileScreen.tsx',
  'SettingsScreen.tsx',
  'LeaderboardScreen.tsx',
  'GamesScreen.tsx',
];

targetScreens.forEach(filename => {
  const filePath = path.join(screensDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping (not found): ${filename}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add haptics import if not present
  if (!content.includes('expo-haptics')) {
    // Find the last import line and insert after it
    const importMatch = content.match(/(import[^;]+;[\r\n]*)+/);
    if (importMatch) {
      const lastImport = importMatch[0];
      content = content.replace(
        lastImport,
        lastImport + "import * as Haptics from 'expo-haptics';\n"
      );
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added haptics import to: ${filename}`);
});

console.log('Done adding haptics imports!');
