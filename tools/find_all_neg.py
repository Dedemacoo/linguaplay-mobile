from pathlib import Path

lines = Path('src/data/turkishContent.ts').read_text('utf-8').splitlines()

# Track brace balance globally
b = 0
r = 0
for i, line in enumerate(lines):
    b += line.count('{') - line.count('}')
    r += line.count('[') - line.count(']')
    # Report when b becomes negative (extra }) 
    if b < 0:
        print(f'b={b} r={r} at line {i+1}: {line!r}')
        # show context
        for j in range(max(0,i-3), min(len(lines),i+4)):
            print(f'  {j+1}: {lines[j]!r}')
        b = 0  # reset and keep looking
        print()
