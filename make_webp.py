import imageio.v3 as iio
from rembg import remove
from PIL import Image
import os
import time
import sys

def process_file(input_path, output_path, skip_frames=3):
    print(f'Loading {input_path}...')
    try:
        frames = list(iio.imiter(input_path))
    except Exception as e:
        print(f"Error loading {input_path}: {e}")
        return

    print(f'Original frames: {len(frames)}')
    sampled_frames = frames[::skip_frames]

    # Try to read duration
    try:
        with Image.open(input_path) as im:
            orig_duration = im.info.get('duration', 100)
    except:
        orig_duration = 100

    new_duration = orig_duration * skip_frames
    transparent_frames = []

    for i, frame in enumerate(sampled_frames):
        t0 = time.time()
        im = Image.fromarray(frame).convert('RGBA')
        
        # Don't resize so we don't mess up aspect ratio, but maybe limit max size to 800
        max_dim = 800
        if im.width > max_dim or im.height > max_dim:
            im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        
        # Paste on white background ONLY to help rembg edges
        bg = Image.new('RGBA', im.size, (255,255,255,255))
        bg.paste(im, (0,0), im)
        
        out = remove(bg)
        
        # out is RGBA with transparent background.
        transparent_frames.append(out)
        print(f'Processed frame {i+1}/{len(sampled_frames)} in {time.time()-t0:.2f}s')

    if transparent_frames:
        transparent_frames[0].save(
            output_path,
            format='WebP',
            save_all=True,
            append_images=transparent_frames[1:],
            duration=new_duration,
            loop=0,
            minimize_size=True,
            method=4,
            quality=80
        )
        print(f'Saved to {output_path}!')

if __name__ == '__main__':
    process_file(
        r'c:\xampp\mobiluygulama\mobile\assets\mascots\astronaut\astronot.gif.bak',
        r'c:\xampp\mobiluygulama\mobile\assets\mascots\astronaut\astronaut_transparent.webp',
        skip_frames=3
    )
