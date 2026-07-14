import base64
import re

svg_path = r'C:\xampp\mobiluygulama\mobile\assets\mascots\classic\clasiclingo.svg'
out_path = r'C:\xampp\mobiluygulama\mobile\assets\mascots\classic\idle.png'

with open(svg_path, 'r') as f:
    content = f.read()

match = re.search(r'data:image/png;base64,([^"]+)', content)
if match:
    b64_data = match.group(1)
    with open(out_path, 'wb') as img_f:
        img_f.write(base64.b64decode(b64_data))
    print('Extracted PNG from SVG and saved as idle.png')
else:
    print('Could not find base64 PNG data')
