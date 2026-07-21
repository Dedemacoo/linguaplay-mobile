from pathlib import Path
lines = Path('src/data/turkishContent.ts').read_text('utf-8').splitlines()
for i, line in enumerate(lines[:-1]):
    if line.strip().endswith('}') and not line.strip().endswith('},'):
        next_line = lines[i+1].lstrip()
        if next_line.startswith('{'):
            print(i+1, repr(line), '=>', i+2, repr(lines[i+1]))
