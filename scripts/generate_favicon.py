import os
from PIL import Image, ImageDraw, ImageFilter

def create_fdfs_icon():
    # 1. Generate crisp SVG icon
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141418" />
      <stop offset="100%" stop-color="#070709" />
    </linearGradient>
    <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF4D63" />
      <stop offset="100%" stop-color="#E6002B" />
    </linearGradient>
    <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#E2E0D8" />
    </linearGradient>
    <filter id="accentGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Squircle Base -->
  <rect width="512" height="512" rx="116" fill="url(#bgGrad)" />
  
  <!-- Subtle Crimson Border Ring -->
  <rect x="12" y="12" width="488" height="488" rx="104" fill="none" stroke="#FF334B" stroke-opacity="0.32" stroke-width="6" />

  <!-- Dynamic Background Ambient Aura -->
  <circle cx="280" cy="240" r="140" fill="#FF334B" opacity="0.12" filter="url(#accentGlow)" />

  <!-- Kinetic Monogram F Group -->
  <g id="monogram">
    <!-- Main Vertical Slanted Stem -->
    <path d="M 152 396 L 212 120 L 272 120 L 212 396 Z" fill="url(#whiteGrad)" />

    <!-- Top Wing (Sharp Kinetic Blade) -->
    <path d="M 206 120 L 378 120 L 354 174 L 244 174 Z" fill="url(#whiteGrad)" />

    <!-- Middle Wing (Electric Crimson Pulse) -->
    <path d="M 194 220 L 332 220 L 310 274 L 182 274 Z" fill="url(#crimsonGrad)" filter="url(#accentGlow)" />
    <path d="M 194 220 L 332 220 L 310 274 L 182 274 Z" fill="url(#crimsonGrad)" />

    <!-- Kinetic Energy Accent Spark -->
    <polygon points="384,106 406,128 384,150 362,128" fill="#FF334B" />
  </g>
</svg>'''

    os.makedirs("src/app", exist_ok=True)
    os.makedirs("public", exist_ok=True)

    with open("src/app/icon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    with open("public/icon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)

    print("Created src/app/icon.svg and public/icon.svg")

    # 2. Render High-Resolution Raster Image using PIL (1024x1024)
    canvas_size = 1024
    img = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background Squircle
    bg_color = (12, 12, 16, 255)
    border_color = (255, 51, 75, 90)
    draw.rounded_rectangle([20, 20, 1004, 1004], radius=230, fill=bg_color, outline=border_color, width=12)

    # Ambient glow in center
    glow = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([360, 280, 800, 720], fill=(255, 51, 75, 55))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Coordinate scaling (512 -> 1024: factor of 2)
    # Stem
    stem_pts = [(152*2, 396*2), (212*2, 120*2), (272*2, 120*2), (212*2, 396*2)]
    draw.polygon(stem_pts, fill=(245, 245, 248, 255))

    # Top Wing
    top_pts = [(206*2, 120*2), (378*2, 120*2), (354*2, 174*2), (244*2, 174*2)]
    draw.polygon(top_pts, fill=(255, 255, 255, 255))

    # Middle Wing (Crimson)
    mid_glow = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    mg_draw = ImageDraw.Draw(mid_glow)
    mid_pts = [(194*2, 220*2), (332*2, 220*2), (310*2, 274*2), (182*2, 274*2)]
    mg_draw.polygon(mid_pts, fill=(255, 51, 75, 180))
    mid_glow = mid_glow.filter(ImageFilter.GaussianBlur(20))
    img = Image.alpha_composite(img, mid_glow)
    draw = ImageDraw.Draw(img)

    draw.polygon(mid_pts, fill=(255, 51, 75, 255))

    # Kinetic Energy Diamond Spark
    spark_pts = [(384*2, 106*2), (406*2, 128*2), (384*2, 150*2), (362*2, 128*2)]
    draw.polygon(spark_pts, fill=(255, 51, 75, 255))

    # 3. Export required sizes
    # 512x512
    img512 = img.resize((512, 512), Image.Resampling.LANCZOS)
    img512.save("public/android-chrome-512x512.png", "PNG")
    img512.save("src/app/icon.png", "PNG")
    img512.save("public/icon.png", "PNG")

    # 192x192
    img192 = img.resize((192, 192), Image.Resampling.LANCZOS)
    img192.save("public/android-chrome-192x192.png", "PNG")

    # 180x180 (Apple Touch Icon)
    img180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img180.save("public/apple-touch-icon.png", "PNG")
    img180.save("src/app/apple-icon.png", "PNG")

    # 32x32 & 16x16
    img32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img32.save("public/favicon-32x32.png", "PNG")

    img16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    img16.save("public/favicon-16x16.png", "PNG")

    # Multi-resolution ICO (16, 32, 48, 64)
    img48 = img.resize((48, 48), Image.Resampling.LANCZOS)
    img64 = img.resize((64, 64), Image.Resampling.LANCZOS)
    img.save(
        "public/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
    )

    print("All favicon and logo icon variants generated successfully!")

if __name__ == "__main__":
    create_fdfs_icon()
