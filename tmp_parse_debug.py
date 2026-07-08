from pathlib import Path
from pathlib import Path
import json
import os
path = Path('src/data/turkishContent.ts')
text = path.read_text(encoding='utf-8')
idx = text.find('= [')
if idx == -1:
    raise SystemExit('export prefix not found')
js_text = 'const data = ' + text[idx+2:]
# strip TypeScript type annotation if present
if js_text.startswith('const data: LessonContent[] ='):
    js_text = 'const data = ' + js_text.split('=',1)[1]
# make it valid JS by removing import line and trailing export
# remove first line, which is import
lines = js_text.splitlines()
if lines[0].startswith('import '):
    lines = lines[1:]
js_text = '\n'.join(lines)
# write to temp file
Path('tmp_parse_debug.js').write_text(js_text, encoding='utf-8')
print('wrote tmp_parse_debug.js')
