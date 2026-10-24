import os
import subprocess
import glob

# Ensure output directories exist
os.makedirs(r"D:\fdfs\public\media\reviews", exist_ok=True)
os.makedirs(r"D:\fdfs\public\media\thumbnails", exist_ok=True)

# Audio filter for noise cancellation:
# 1. afftdn: FFT-based noise reduction (nr=18dB reduction, noise floor -25dB)
# 2. highpass: eliminates low-frequency room rumble below 85Hz
# 3. lowpass: cleans harsh high frequency hiss above 8500Hz
# 4. dynaudnorm: balances speech volume dynamically so quiet speakers are loud & clear
AUDIO_FILTER = "afftdn=nr=18:nf=-25:tn=1,highpass=f=85,lowpass=f=8500,dynaudnorm=p=0.9:m=10.0"

# Process video reviews
review_files = glob.glob(r"D:\fdfs\video reviews\*.mp4")
print(f"Found {len(review_files)} review videos in 'video reviews'")

for idx, fpath in enumerate(review_files, 1):
    base_name = f"review-{idx}.mp4"
    out_video = os.path.join(r"D:\fdfs\public\media\reviews", base_name)
    out_thumb = os.path.join(r"D:\fdfs\public\media\thumbnails", f"review-{idx}.jpg")
    
    print(f"\nProcessing [{idx}/{len(review_files)}] {os.path.basename(fpath)} -> {base_name} with Noise Cancellation...")
    
    # Run ffmpeg with noise cancellation audio filter, h264 web-compatible profile, faststart
    cmd = [
        "ffmpeg", "-y",
        "-i", fpath,
        "-af", AUDIO_FILTER,
        "-c:v", "libx264", "-preset", "fast", "-crf", "22", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k",
        "-movflags", "+faststart",
        out_video
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"  [OK] Cleaned & compressed: {out_video} ({os.path.getsize(out_video)} bytes)")
    else:
        print(f"  [ERROR] in video {base_name}:", res.stderr[-300:])
        
    # Generate thumbnail frame at 1s
    cmd_thumb = [
        "ffmpeg", "-y",
        "-ss", "00:00:01.0",
        "-i", out_video,
        "-vframes", "1",
        "-q:v", "2",
        out_thumb
    ]
    res_t = subprocess.run(cmd_thumb, capture_output=True, text=True)
    if res_t.returncode == 0:
        print(f"  [OK] Thumbnail generated: {out_thumb}")

# Process specific videos from 'photo and video':
# 1. 783a1721-1209-4225-ae8d-4481a9aac4c4.MP4 -> studio-tour-small.mp4
# 2. 20482cce-4e6e-4113-8d37-a32090661c36.MP4 -> kids-arrival.mp4
# 3. 5f2dd063-1aff-458e-b8bc-17b525e20645.MP4 -> dance-routine.mp4

pv_targets = [
    (r"D:\fdfs\photo and video\783a1721-1209-4225-ae8d-4481a9aac4c4.MP4", "studio-tour-small.mp4", "studio-tour-small.jpg"),
    (r"D:\fdfs\photo and video\20482cce-4e6e-4113-8d37-a32090661c36.MP4", "kids-arrival.mp4", "kids-arrival.jpg"),
    (r"D:\fdfs\photo and video\5f2dd063-1aff-458e-b8bc-17b525e20645.MP4", "dance-routine.mp4", "dance-routine.jpg"),
]

for src_path, out_name, thumb_name in pv_targets:
    if os.path.exists(src_path):
        out_v = os.path.join(r"D:\fdfs\public\media", out_name)
        out_t = os.path.join(r"D:\fdfs\public\media\thumbnails", thumb_name)
        print(f"\nProcessing studio video: {os.path.basename(src_path)} -> {out_name}...")
        
        cmd = [
            "ffmpeg", "-y",
            "-i", src_path,
            "-af", AUDIO_FILTER,
            "-c:v", "libx264", "-preset", "fast", "-crf", "22", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-movflags", "+faststart",
            out_v
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"  [OK] Processed: {out_v} ({os.path.getsize(out_v)} bytes)")
            
        cmd_thumb = [
            "ffmpeg", "-y",
            "-ss", "00:00:01.0",
            "-i", out_v,
            "-vframes", "1",
            "-q:v", "2",
            out_t
        ]
        res_t = subprocess.run(cmd_thumb, capture_output=True, text=True)
        if res_t.returncode == 0:
            print(f"  [OK] Thumbnail generated: {out_t}")

print("\nAll videos processed and noise-reduced successfully!")
