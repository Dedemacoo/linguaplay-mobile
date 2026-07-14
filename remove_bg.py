import sys
from rembg import remove
from PIL import Image
import os

input_path = r'C:\xampp\mobiluygulama\mobile\assets\mascots\classic\lingogif.gif'
output_path = r'C:\xampp\mobiluygulama\mobile\assets\mascots\classic\lingogif_transparent.gif'

try:
    with Image.open(input_path) as im:
        frames = []
        duration = im.info.get('duration', 100)
        
        try:
            while True:
                # Need to convert frame to RGBA properly because GIF palette might mess up
                # We composite against white to simulate what user sees, then remove bg
                bg = Image.new('RGBA', im.size, (255,255,255,255))
                frame = im.convert('RGBA')
                bg.paste(frame, (0,0), frame)
                
                bg_removed = remove(bg)
                frames.append(bg_removed)
                im.seek(im.tell() + 1)
        except EOFError:
            pass

    if frames:
        frames[0].save(
            output_path,
            save_all=True,
            append_images=frames[1:],
            duration=duration,
            loop=0,
            transparency=0,
            disposal=2
        )
        print('Successfully removed background and saved transparent gif!')
        
        # Replace the original so we don't have to rename things again
        os.replace(output_path, input_path)
except Exception as e:
    print('Error:', str(e))
