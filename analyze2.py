from pathlib import Path

lines = Path('src/data/turkishContent.ts').read_text('utf-8').splitlines()
b = 0
r = 0
inside_t52 = False
for i, line in enumerate(lines):
    if '"id": "t52"' in line:
        # start tracking from the { on the line BEFORE this id line
        inside_t52 = True
        # reset counts - we'll include the { from the line before
        b = 1  # opening { was already consumed by the { on line before "id"
        r = 0
        print(f't52 found at line {i+1}: {line!r}')
    if inside_t52:
        b += line.count('{') - line.count('}')
        r += line.count('[') - line.count(']')
        if inside_t52 and b < 0:
            print(f'b went negative at line {i+1}: b={b} r={r}')
            break
        if inside_t52 and b == 0 and i > 10668:
            print(f'Lesson t52 closed at line {i+1}')
            inside_t52 = False
            break
