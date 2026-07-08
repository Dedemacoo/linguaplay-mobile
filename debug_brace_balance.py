from pathlib import Path
path = Path('src/data/turkishContent.ts')
text = path.read_text(encoding='utf-8')
lines = text.splitlines()
brace = 0
bracket = 0
for idx, line in enumerate(lines, start=1):
    brace += line.count('{') - line.count('}')
    bracket += line.count('[') - line.count(']')
    if brace < 0 or bracket < 0:
        print(f'NEGATIVE at {idx}: brace={brace} bracket={bracket} | {line}')
        break
    if idx % 1000 == 0:
        print(f'{idx}: brace={brace} bracket={bracket}')
print('FINAL', brace, bracket, 'lines', len(lines))
