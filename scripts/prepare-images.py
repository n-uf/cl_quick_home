#!/usr/bin/env python3
"""Crops the renderer's pictures (see render-app-images.sh): `prepare-images.py IN_DIR OUT_DIR`.

Chat pictures: the renderer puts the card on grey (25,25,25) with a 30 pt margin (60 px at 2x). Crop to the card,
then make everything outside its rounded corners (radius 37 px) transparent. Settings pictures: cropped to a fixed
box (the 2x pixel boxes below), with small rounded corners. Prints each file's size."""
import os, sys
from PIL import Image, ImageDraw

src, dst = sys.argv[1], sys.argv[2]
os.makedirs(dst, exist_ok=True)
MARGIN, RADIUS, S = 60, 37, 4

def rounded_mask(w, h, r):
    big = Image.new("L", (w * S, h * S), 0)
    ImageDraw.Draw(big).rounded_rectangle((0, 0, w * S - 1, h * S - 1), radius=r * S, fill=255)
    return big.resize((w, h), Image.LANCZOS)

def save(im, name):
    im.save(os.path.join(dst, name + ".png"))
    print(name, im.size)

for name in ["qc-bar", "qc-typing", "qc-answer", "qc-full", "qc-ended", "qc-dictating"]:
    im = Image.open(os.path.join(src, name + ".png")).convert("RGBA")
    w, h = im.size
    card = im.crop((MARGIN, MARGIN, w - MARGIN, h - MARGIN))
    card.putalpha(rounded_mask(card.width, card.height, RADIUS))
    save(card, name)

# settings crops: (left, top, right, bottom) in px of the 2x render
BOX = {"settings-accounts": (35, 305, 1245, 992), "settings-general": (35, 368, 1245, 650),
       "settings-shortcut": (35, 250, 1245, 358)}
for name, box in BOX.items():
    im = Image.open(os.path.join(src, name + ".png")).convert("RGBA").crop(box)
    im.putalpha(rounded_mask(im.width, im.height, 20))
    save(im, name)
