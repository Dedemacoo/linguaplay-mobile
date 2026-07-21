import imageio.v3 as iio
from rembg import remove
from PIL import Image
import os
import time

input_path = r'c:\xampp\mobiluygulama\mobile\assets\mascots\professor\prof.mp4'
output_path = r'c:\xampp\mobiluygulama\mobile\assets\mascots\professor\prof.gif'

print('Loading video...')
frames = list(iio.imiter(input_path, plugin='FFMPEG'))
print(f'Original frames: {len(frames)}')

# Sample every 4th frame (from ~30fps to ~7.5fps) to speed it up
sampled_frames = frames[::4]

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
        duration=130,
        loop=0,
        transparency=0,
        disposal=2
    )
    print('Saved to prof.gif!')
    
    # Rename old file so generator ignores it
    os.rename(input_path, input_path + '.bak')
