import os
import subprocess
import json

def probe(folder):
    print("Checking folder:", folder)
    if not os.path.exists(folder):
        print("Not found")
        return
    for fname in os.listdir(folder):
        if fname.lower().endswith(('.mp4', '.mov', '.jpg', '.jpeg', '.png')):
            fpath = os.path.join(folder, fname)
            cmd = ['ffprobe', '-v', 'quiet', '-print_format', 'json', '-show_streams', '-show_format', fpath]
            res = subprocess.run(cmd, capture_output=True, text=True)
            try:
                data = json.loads(res.stdout)
                duration = data.get('format', {}).get('duration', 'N/A')
                vstream = next((s for s in data.get('streams', []) if s['codec_type'] == 'video'), {})
                astream = next((s for s in data.get('streams', []) if s['codec_type'] == 'audio'), {})
                w = vstream.get('width', 'N/A')
                h = vstream.get('height', 'N/A')
                dur_str = f"{float(duration):.1f}s" if duration != 'N/A' else 'image'
                print(f"{fname}: {w}x{h} | dur: {dur_str} | audio: {astream.get('codec_name', 'none')}")
            except Exception as e:
                print(f"{fname}: {e}")

print("=== Video Reviews ===")
probe(r"D:\fdfs\video reviews")
print("\n=== Photo and Video ===")
probe(r"D:\fdfs\photo and video")
