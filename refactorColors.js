const fs = require('fs');
const file = 'c:/xampp/mobiluygulama/mobile/src/screens/LeaderboardScreen.tsx';
let data = fs.readFileSync(file, 'utf8');

// Component modifications
data = data.replace(
  'const colors = useThemeColors();', 
  'const colors = useThemeColors();\n  const styles = React.useMemo(() => getStyles(colors), [colors]);'
);
data = data.replace('const styles = StyleSheet.create({', 'const getStyles = (colors: any) => StyleSheet.create({');

// Replace colors in the styles and inline
data = data.replace(/#0B1022/gi, '${colors.background}');
data = data.replace(/#141D32/gi, '${colors.card}');
data = data.replace(/#1E2B4D/gi, '${colors.border}');
data = data.replace(/'#FFF'/gi, 'colors.text');
data = data.replace(/\"#FFF\"/gi, 'colors.text');
data = data.replace(/'#9CA3AF'/gi, 'colors.textMuted');
data = data.replace(/'#6B7280'/gi, 'colors.textLight');
data = data.replace(/'#D1D5DB'/gi, 'colors.text');
data = data.replace(/'#000'/gi, 'colors.background'); // If any

// Fix template literals
data = data.replace(/'\$\{colors\.background\}'/g, 'colors.background');
data = data.replace(/\"\$\{colors\.background\}\"/g, 'colors.background');

data = data.replace(/'\$\{colors\.card\}'/g, 'colors.card');
data = data.replace(/\"\$\{colors\.card\}\"/g, 'colors.card');

data = data.replace(/'\$\{colors\.border\}'/g, 'colors.border');
data = data.replace(/\"\$\{colors\.border\}\"/g, 'colors.border');

// StatusBar backgroundColor='colors.background' won't work in JSX, it needs to be {colors.background}
data = data.replace(/backgroundColor=colors\.background/g, 'backgroundColor={colors.background}');

// { backgroundColor: colors.background } is already correct

fs.writeFileSync(file, data);
console.log('Script completed successfully.');
