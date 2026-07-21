import re
from pathlib import Path

# The problem: in many lessons, the q12/q13/q14 constructSentence objects
# are embedded INSIDE the imageOptions array of q1.
# The pattern looks like:
#   "imageOptions": [
#     "🔢",
#     { "id": "t44q12", ... },   <- WRONG: object inside string array
#     { "id": "t44q13", ... },
#     { "id": "t44q14", ... }
#   ]
# },
# {
#   "id": "t44q2", ...
#
# The correct structure should be:
#   "imageOptions": [
#     "🔢"
#   ]
# },
# { "id": "t44q12", ... },
# { "id": "t44q13", ... },
# { "id": "t44q14", ... },
# {
#   "id": "t44q2", ...
#
# The fix: remove the q12/q13/q14 objects from inside the imageOptions array
# and put them in the questions array (as siblings of q1, q2, etc.)

path = Path('src/data/turkishContent.ts')
content = path.read_text('utf-8')

# Pattern to match:
# "imageOptions": [\n        "EMOJI",\n      {q12 block...}\n      {q13 block...}\n      {q14 block...}\n      ]\n    },
# Replace with:
# "imageOptions": [\n        "EMOJI"\n      ]\n    },\n    {q12...},\n    {q13...},\n    {q14...}

# First let's count the occurrences
bad_pattern = r'"imageOptions": \[\n        ("[^"]+"),\n      \{(\s*"id": "t\d+q12"[^}]*(?:\{[^}]*\}[^}]*)*)\},\n      \{(\s*"id": "t\d+q13"[^}]*(?:\{[^}]*\}[^}]*)*)\},\n      \{(\s*"id": "t\d+q14"[^}]*(?:\{[^}]*\}[^}]*)*)\}\s*\]\s*\n    \}'

# Count them
matches = list(re.finditer(bad_pattern, content, re.DOTALL))
print(f"Found {len(matches)} occurrences")
for m in matches[:3]:
    pos = m.start()
    line = content[:pos].count('\n') + 1
    print(f"  Line {line}")
