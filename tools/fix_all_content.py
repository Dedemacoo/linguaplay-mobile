import re
from pathlib import Path

def fix_embedded_q12(filepath):
    path = Path(filepath)
    content = path.read_text('utf-8')
    lines = content.splitlines()
    i = 0
    changes = 0
    new_lines = []

    while i < len(lines):
        line = lines[i]
        if '"imageOptions": [' in line:
            emoji_line = lines[i+1] if i+1 < len(lines) else ''
            q12_check = lines[i+3] if i+3 < len(lines) else ''

            if re.match(r'\s+"[^"]+",\s*$', emoji_line) and '"id"' in q12_check and 'q12' in q12_check:
                emoji_match = re.search(r'"([^"]+)"', emoji_line)
                emoji = emoji_match.group(0) if emoji_match else '"?"'

                blocks = []
                j = i + 2
                current_block = []
                depth = 0
                while j < len(lines):
                    l = lines[j]
                    depth += l.count('{') - l.count('}')
                    current_block.append(l)
                    if depth == 0 and current_block:
                        blocks.append(current_block[:])
                        current_block = []
                        j += 1
                        if j < len(lines) and lines[j].strip() in (',', '      ,'):
                            j += 1
                        if len(blocks) == 3:
                            break
                    else:
                        j += 1

                if len(blocks) != 3:
                    print(f'WARNING: only found {len(blocks)} blocks at line {i+1} in {filepath}')
                    new_lines.append(line)
                    i += 1
                    continue

                # Find the closing ] and } of the q1 object
                while j < len(lines) and '      ]' not in lines[j] and lines[j].strip() != ']':
                    j += 1
                j += 1  # skip ]
                while j < len(lines) and '}' not in lines[j]:
                    j += 1

                # Build replacement
                new_lines.append(line)  # "imageOptions": [
                new_lines.append('        ' + emoji)
                new_lines.append('      ]')
                new_lines.append('    },')
                for b_idx, block in enumerate(blocks):
                    new_lines.append('    {')
                    for bl in block[1:-1]:  # skip opening { and closing }
                        new_lines.append(bl)
                    new_lines.append('    },')

                changes += 1
                i = j + 1
                continue

        new_lines.append(line)
        i += 1

    print(f'{filepath}: Made {changes} changes')
    if changes > 0:
        path.write_text('\n'.join(new_lines), encoding='utf-8')
        print(f'{filepath}: File updated')

fix_embedded_q12('src/data/englishContent.ts')
fix_embedded_q12('src/data/frenchContent.ts')
fix_embedded_q12('src/data/kurdishContent.ts')
