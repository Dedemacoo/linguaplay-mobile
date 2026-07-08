import re
from pathlib import Path

# The remaining TS2322 errors are for constructSentence questions (q12/q13/q14)
# that are placed inside `options: []` arrays instead of in the `questions` array.
# They look like:
#
#   "options": [],   <- for q1 flashcard, this is empty
#   ...
#   ]                <- closes the options array
# },
# {
#   ...constructSentence q12
# },    <- WRONG: this is inside the options array
#
# Actually looking at the error context more carefully:
# The issues appear to be that q12/q13/q14 constructSentence blocks still have
# the old pattern of being INSIDE an imageOptions array as objects.
#
# Let's look at the actual error lines more carefully.
# Line 9011 is "t44q12" region.
# Let me scan and count how many constructSentence-like blocks have
# a "} \n {" pattern for q13/q14 where the closing } has 6-space indent

path = Path('src/data/turkishContent.ts')
content = path.read_text('utf-8')
lines = content.splitlines()

# Find all patterns like:
# }>  (with 6-space indent = },\n      {  for constructSentence objects)
bad = re.finditer(r'\},\n      \{\n                "id": "t\d+q1[234]"', content)
for m in bad:
    pos = m.start()
    line = content[:pos].count('\n') + 1
    print(f'Line {line}: {content[pos:pos+60]!r}')
