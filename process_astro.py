import imageio.v3 as iio
from rembg import remove
from PIL import Image
import os
import time

input_path = r'c:\xampp\mobiluygulama\mobile\assets\mascots\astronaut\astronot.gif'
output_path = r'c:\xampp\mobiluygulama\mobile\assets\mascots\astronaut\astronaut_transparent.gif'

print('Loading gif...')
frames = list(iio.imiter(input_path))
print(f'Original frames: {len(frames)}')

# Sample every 3rd frame to speed it up
sampled_frames = frames[::3]

# Read duration from the first frame if available
try:
    with Image.open(input_path) as im:
        orig_duration = im.info.get('duration', 100)
except:
    orig_duration = 100

new_duration = orig_duration * 3

transparent_frames = []

for i, frame in enumerate(sampled_frames):
    t0 = time.time()
    # Convert and resize for faster processing
    im = Image.fromarray(frame).convert('RGBA')
    im.thumbnail((480, 480))
    
    # Composite with white background to prevent fringing from rembg on low quality
    bg = Image.new('RGBA', im.size, (255,255,255,255))
    bg.paste(im, (0,0), im)
    
    out = remove(bg)
    transparent_frames.append(out)
    print(f'Processed frame {i+1}/{len(sampled_frames)} in {time.time()-t0:.2f}s')

if transparent_frames:
    transparent_frames[0].save(
        output_path,
        save_all=True,
        append_images=transparent_frames[1:],
        duration=new_duration,
        loop=0,
        transparency=0,
        disposal=2
    )
    print('Saved to astronaut_transparent.gif!')
    
    # Rename old file so generator ignores it
    os.rename(input_path, input_path + '.bak')
