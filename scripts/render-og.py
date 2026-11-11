#!/usr/bin/env python3
"""Renders the share images (og:image, 1200x630) of the fixed pages: public/og.png (home), public/og/install.png and
public/og/faq.png. Inter on the dark scene with the warm glow, a picture of the app on the right (the site's own
sample-data pictures in public/img). No browser needed.

  python3 scripts/render-og.py --font /path/to/Inter-variable.ttf   (needs Pillow with raqm, and numpy)

The font is NOT in the repo: use Inter's variable font from Google Fonts (family Inter, axes opsz + wght;
https://fonts.google.com/specimen/Inter) or the rsms/inter GitHub release; the picture uses the weight axis at
optical size 14, as a plain "Inter" web font does. Edit CARDS below to change the wording. The use-case pages and
articles get theirs from render-og-pages.py."""
import argparse, os
import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
W, H = 1200, 630
# out file, small label, headline, sub line, picture (a file in public/img), picture box (width, height)
CARDS = [
    ("public/og.png", "cl_quick", "A Claude quick chat for your Mac", "Press Option + Space over any app", "qc-answer.webp", (500, 500)),
    ("public/og/install.png", "cl_quick · Install", "Install cl_quick", "Apple silicon · macOS 13 or later · Claude Code, signed in", "qc-bar.webp", (520, 120)),
    ("public/og/faq.png", "cl_quick · FAQ", "Questions about cl_quick", "Incognito, accounts, limits, model and thinking", "qc-full.webp", (520, 228)),
]

ap = argparse.ArgumentParser()
ap.add_argument("--font", required=True)
args = ap.parse_args()

def font(size, wght):
    f = ImageFont.truetype(args.font, size, layout_engine=ImageFont.Layout.RAQM)
    f.set_variation_by_axes([14, wght])
    return f

def background():
    yy, xx = np.mgrid[0:H, 0:W].astype(float) + 0.5
    a = np.clip(1 - np.sqrt(((xx - 900) / 440) ** 2 + ((yy - 330) / 390) ** 2), 0, 1) * 0.20   # the warm glow behind the picture
    im = np.array([29, 29, 31], float)[None, None] * (1 - a[..., None]) + np.array([217, 119, 87], float)[None, None] * a[..., None]
    return Image.fromarray(np.clip(im + 0.5, 0, 255).astype("uint8")).convert("RGBA")

def wrap(text, f, width):
    lines, line = [], ""
    for word in text.split(" "):
        trial = f"{line} {word}".strip()
        if f.getlength(trial) <= width or not line:
            line = trial
        else:
            lines.append(line); line = word
    lines.append(line)
    return lines

def picture(path, box_w, box_h):
    im = Image.open(path).convert("RGBA")
    s = min(box_w / im.width, box_h / im.height)
    return im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)   # the pictures carry their own rounded corners

for out_path, label, head, sub, pic, box in CARDS:
    out = background()
    d = ImageDraw.Draw(out)
    d.text((64, 104), label, font=font(26, 700), fill=(158, 158, 158), anchor="ls")
    size = 60
    while True:
        f = font(size, 700)
        lines = wrap(head, f, 500)
        if (len(lines) <= 4 and max(f.getlength(l) for l in lines) <= 500) or size <= 40:
            break
        size -= 2
    y = 200
    for line in lines:
        d.text((64, y), line, font=f, fill=(255, 255, 255), anchor="ls")
        y += round(size * 1.15)
    sf = font(24, 500)
    for line in wrap(sub, sf, 500):
        d.text((64, y + 24), line, font=sf, fill=(170, 170, 170), anchor="ls")
        y += 34
    d.text((64, 578), "cl-quick.n-uf.com", font=font(20, 500), fill=(140, 140, 140), anchor="ls")
    img = picture(os.path.join(ROOT, "public/img", pic), *box)
    x, y0 = 620 + (520 - img.width) // 2, (H - img.height) // 2
    shadow = Image.new("RGBA", out.size, (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 150), (x, y0 + 14), img.split()[3])
    from PIL import ImageFilter
    out = Image.alpha_composite(out, shadow.filter(ImageFilter.GaussianBlur(18)))
    out.alpha_composite(img, (x, y0))
    path = os.path.join(ROOT, out_path)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    out.convert("RGB").save(path, optimize=True)
    print(f"wrote {out_path}  {os.path.getsize(path) // 1024} KB  {size}px x{len(lines)}")
