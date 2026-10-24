import os
import whisper

model = whisper.load_model("base")

reviews_dir = r"D:\fdfs\public\media\reviews"
for i in range(1, 7):
    fpath = os.path.join(reviews_dir, f"review-{i}.mp4")
    if os.path.exists(fpath):
        print(f"\n--- Transcribing review-{i}.mp4 ---")
        result = model.transcribe(fpath)
        print("Detected language:", result.get("language"))
        print("Text:", result.get("text"))
