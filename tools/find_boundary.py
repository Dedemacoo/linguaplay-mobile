import re
from pathlib import Path

path = Path('src/data/turkishContent.ts')
content = path.read_text('utf-8')

# The fix_lesson_starts.py removed 2-space indent from lesson openings
# Now: lesson boundaries look like:  },\n{\n  "id": "tXX"
# But they need to look like:        },\n{\n  "id": "tXX"  
# Wait - those look the same. The issue is the comma.
# 
# Current broken pattern: "},\n{" - this is actually CORRECT (comma after })
# But the file has pattern "}\n{" (no trailing comma on }) for some transitions
# Let me check what we actually have

# Check what the t59 transition looks like in the file
idx = content.find('"id": "t59"')
before = content[idx-30:idx+20]
print(f"t59 context: {before!r}")

idx2 = content.find('"id": "t60"')
before2 = content[idx2-30:idx2+20]
print(f"t60 context: {before2!r}")

# Count },\n{ vs },\n{\n  "id"
count_nl_brace = content.count('}\n{')
print(f"}} + newline + {{ (missing comma): {count_nl_brace}")

# Show all the missing-comma transitions
for m in re.finditer(r'\}\n\{', content):
    pos = m.start()
    line = content[:pos].count('\n') + 1
    ctx = content[pos:pos+50].replace('\n', '\\n')
    print(f"Line {line}: {ctx!r}")
