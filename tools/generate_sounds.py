import wave
import struct
import math
import random
import os

def generate_wav(filename, duration, sample_rate, generate_sample):
    print(f"Generating {filename}...")
    filepath = os.path.join("assets/sounds", filename)
    with wave.open(filepath, 'w') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sample_rate)
        
        num_samples = int(duration * sample_rate)
        for i in range(num_samples):
            t = i / sample_rate
            sample = generate_sample(t)
            # Clip sample to -1.0 to 1.0
            sample = max(-1.0, min(1.0, sample))
            # Convert to 16-bit integer
            value = int(sample * 32767)
            data = struct.pack('<h', value)
            f.writeframesraw(data)

# 1. Ocean: Modulated white noise (waves)
def ocean_sample(t):
    noise = random.uniform(-1, 1)
    # Slow wave modulation (0.2 Hz)
    env = (math.sin(2 * math.pi * 0.2 * t) + 1) / 2
    return noise * env * 0.5

# 2. Forest: High-pitched chirps
def forest_sample(t):
    noise = random.uniform(-0.1, 0.1)
    chirp_env = max(0, math.sin(2 * math.pi * 1.5 * t)) ** 10
    chirp = math.sin(2 * math.pi * 3000 * t) * chirp_env
    return (noise + chirp) * 0.3

# 3. Desert: Low-pass filtered noise (wind)
def desert_sample(t):
    # Simple low rumble
    noise = random.uniform(-1, 1)
    rumble = math.sin(2 * math.pi * 50 * t)
    env = (math.sin(2 * math.pi * 0.5 * t) + 1) / 2
    return (noise * 0.2 + rumble * 0.5) * env * 0.4

# 4. Frozen: High frequency wind
def frozen_sample(t):
    noise = random.uniform(-1, 1)
    # Fast tremolo for freezing effect
    env = (math.sin(2 * math.pi * 4 * t) + 1) / 2
    return noise * env * 0.3

# 5. Cyber: Electronic square wave beeps
def cyber_sample(t):
    # Base drone
    drone = 1 if math.sin(2 * math.pi * 60 * t) > 0 else -1
    # Beep every second
    beep_env = 1 if (t % 1) < 0.1 else 0
    beep = 1 if math.sin(2 * math.pi * 880 * t) > 0 else -1
    return (drone * 0.2 + beep * beep_env * 0.4) * 0.3

# 6. Galaxy: Deep ambient drone (stacked sines)
def galaxy_sample(t):
    s1 = math.sin(2 * math.pi * 100 * t)
    s2 = math.sin(2 * math.pi * 102 * t)
    s3 = math.sin(2 * math.pi * 50 * t)
    return (s1 + s2 + s3) / 3 * 0.6

# 7. Dragon: Deep rumble + distortion
def dragon_sample(t):
    rumble = math.sin(2 * math.pi * 40 * t) + math.sin(2 * math.pi * 45 * t)
    noise = random.uniform(-1, 1)
    val = (rumble + noise * 0.5) * 0.6
    # Distort
    return max(-0.8, min(0.8, val))

if __name__ == "__main__":
    os.makedirs("assets/sounds", exist_ok=True)
    SR = 22050
    DUR = 5.0 # 5 seconds loop
    generate_wav("ocean_theme.wav", DUR, SR, ocean_sample)
    generate_wav("forest_theme.wav", DUR, SR, forest_sample)
    generate_wav("desert_theme.wav", DUR, SR, desert_sample)
    generate_wav("frozen_theme.wav", DUR, SR, frozen_sample)
    generate_wav("cyber_theme.wav", DUR, SR, cyber_sample)
    generate_wav("galaxy_theme.wav", DUR, SR, galaxy_sample)
    generate_wav("dragon_theme.wav", DUR, SR, dragon_sample)
    print("All sounds generated!")
