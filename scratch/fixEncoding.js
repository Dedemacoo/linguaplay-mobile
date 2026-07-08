const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'xampp', 'mobiluygulama', 'mobile', 'src', 'data', 'mockData.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Mapping of corrupted UTF-8 sequences to Turkish characters
const fixes = {
    'Ã¼': 'ü',
    'Ãœ': 'Ü',
    'Ä±': 'ı',
    'Ä°': 'İ',
    'Ã§': 'ç',
    'Ã‡': 'Ç',
    'ÅŸ': 'ş',
    'Åž': 'Ş',
    'Ã¶': 'ö',
    'Ã–': 'Ö',
    'ÄŸ': 'ğ',
    'Äž': 'Ğ',
    '\\u00e2': 'â',
    '\\u00c2': 'Â'
};

for (const [corrupted, fixed] of Object.entries(fixes)) {
    // Escape regex characters just in case, though none here need it
    const regex = new RegExp(corrupted, 'g');
    content = content.replace(regex, fixed);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed encoding in mockData.ts');
