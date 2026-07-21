import re
from pathlib import Path

path = Path('src/data/turkishContent.ts')
content = path.read_text('utf-8')

# Fix the pattern: },\n  {\n  "id": "tXX"  -> },\n{\n  "id": "tXX"
# This corrects the 2-space indented lesson starts back to 0-indent
fixed = re.sub(r'},\n  \{\n  "id": "(t\d+)"', r'},\n{\n  "id": "\1"', content)

count = content.count('\n  {\n  "id": "t') 
print(f"Occurrences to fix: {count}")
if fixed != content:
    path.write_text(fixed, encoding='utf-8')
    print("File updated successfully")
else:
    print("No changes needed")
