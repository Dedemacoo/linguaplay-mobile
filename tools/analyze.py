from pathlib import Path

path = Path('src/data/turkishContent.ts')
content = path.read_text('utf-8')
lines = content.splitlines()

# The issue is around line 10744-10745:
#   line 10744: '      },'   <- closes t52q14 object
#   line 10745: '    {'       <- opens t52q2 object WITHOUT comma before it

# But wait - line 10744 already has a comma. Let me check the actual brace 
# balance at the point where questions array closes.

# Let's find what line the tsc error is pointing to.
# The error says "tmp_parse_debug.js:10845" - but that is the Node copy 
# (which has some extra lines at the start from the JS wrapper).
# The actual source file has the same content, so errors are at the same lines.

# The issue is the TypeScript compiler is saying errors at line 10845+
# Let's compute from where the t52 "questions" array opens to where it closes.
b = 0
r = 0
inside_t52 = False
for i, line in enumerate(lines):
    if '"id": "t52"' in line:
        inside_t52 = True
    if inside_t52:
        delta_b = line.count('{') - line.count('}')
        delta_r = line.count('[') - line.count(']')
        b += delta_b
        r += delta_r
        if delta_b != 0 or delta_r != 0:
            print(f'{i+1}: b={b} r={r} line={line!r}')
        if inside_t52 and b < 0:
            print(f'ERROR: b went negative at line {i+1}')
            break
        if inside_t52 and b == 0 and i > 10670:
            print(f'Lesson t52 closed at line {i+1}')
            inside_t52 = False
            break
