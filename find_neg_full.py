from pathlib import Path

# Goal: scan the file from the beginning, track brace balance,
# and whenever it goes negative, identify the precise location and context.
lines = Path('src/data/turkishContent.ts').read_text('utf-8').splitlines()

b = 0
for i, line in enumerate(lines):
    b += line.count('{') - line.count('}')
    if b < 0:
        print(f'\n=== NEGATIVE BALANCE b={b} at line {i+1} ===')
        # Find what lesson we're in
        for j in range(i, max(-1, i-200), -1):
            if '"id": "t' in lines[j]:
                print(f'  Last lesson id line: {j+1}: {lines[j]!r}')
                break
        # Show context
        for j in range(max(0, i-5), min(len(lines), i+5)):
            print(f'  {j+1}: {lines[j]!r}')
        b = 0  # reset so we can find all occurrences
