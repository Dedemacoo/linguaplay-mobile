import re
from pathlib import Path

content = Path('src/data/turkishContent.ts').read_text('utf-8')
# Find all occurrences of "},\n  {\n  " pattern (leading 2-space indented { 
# that opens a lesson) to verify all lesson transitions are correct
pattern = r'},\n( +)\{'
matches = list(re.finditer(pattern, content))
print(f'Total lesson-like transitions found: {len(matches)}')

# Find any where the { is indented with spaces before it (should be just '{')
for m in matches:
    indent = m.group(1)
    if len(indent) > 0:
        pos = m.start()
        line_num = content[:pos].count('\n') + 1
        print(f'Line {line_num}: indent={len(indent)} spaces before {{ at: {content[pos:pos+50]!r}')
