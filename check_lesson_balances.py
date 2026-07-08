from pathlib import Path

# Goal: find all the transitions like:
#   },\n{\n  "id": "tXX"    <- missing opening { at beginning
# These are the lesson transitions that are off by one brace.
# The pattern is that the lesson object { on the line before "id" 
# was already consumed, but the questions array closure leaves us one short.

# Let's check: for every lesson with "id": "tNN", what's the brace balance AT 
# the line containing "id": "tNN"

lines = Path('src/data/turkishContent.ts').read_text('utf-8').splitlines()
b = 0

for i, line in enumerate(lines):
    b += line.count('{') - line.count('}')
    if '"id": "t' in line and '"q' not in line:
        # This is a lesson top-level id line, not a question
        print(f'Line {i+1}: b={b} : {line!r}')
