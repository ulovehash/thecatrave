"""Compose the /selector Open Graph image.

    python3 scripts/build-og-selector.py   ->  img/selector/selector-og.png

Replaces the Node version, which hand-wrote a BMP because it had no way to
draw text: a share card that says nothing reads as decoration in a feed, and
the title only arrives as a separate meta field. Pillow gives us real font
rendering, so the card can carry its own name and promise.

Space Mono is the site's mono face. It is fetched into a gitignored cache
rather than vendored, because the site serves it from Google Fonts and the
only thing this script produces, the PNG, is committed. Licence: OFL 1.1.
"""

import os
import re
import subprocess
import sys
import unicodedata

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
MARGIN = 72
BAR = 84                     # acid bar across the bottom
TILE, GAP = 90, 14
ROWS = (10, 9)               # logos per row

PAPER = (241, 238, 231)
INK = (10, 10, 10)
ACID = (255, 90, 54)
MUTED = (87, 83, 74)

TITLE = "The Selector"
CAPTION = "Press the button, pick a random DJ set"

FONT_CACHE = ".cache/fonts"
FONTS = {
    "bold": ("SpaceMono-Bold.ttf",
             "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Bold.ttf"),
    "regular": ("SpaceMono-Regular.ttf",
                "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Regular.ttf"),
}


def font(weight, size):
    name, url = FONTS[weight]
    path = os.path.join(FONT_CACHE, name)
    if not os.path.exists(path):
        os.makedirs(FONT_CACHE, exist_ok=True)
        print(f"fetching {name}")
        if subprocess.call(["curl", "-sfL", url, "-o", path]) != 0:
            sys.exit(f"could not fetch {name} from {url} (offline?)")
    return ImageFont.truetype(path, size)


def slug(value):
    value = unicodedata.normalize("NFKD", value.lower())
    value = "".join(c for c in value if not unicodedata.combining(c))
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value))


def broadcasters():
    """The channel list lives in selector-channels.mjs; read the names out of it
    rather than keeping a second copy here that can drift."""
    source = open("selector-channels.mjs", encoding="utf-8").read()
    # names are single-quoted except where the name itself contains an
    # apostrophe ("L'Atelier de Musique"), so match on the opening quote
    names = [m[1] for m in re.findall(r"""broadcaster:\s*(['"])(.*?)\1""", source)]
    seen = []
    for name in names:
        if name not in seen:
            seen.append(name)
    return seen


def main():
    card = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(card)

    draw.text((MARGIN, 74), TITLE, font=font("bold", 82), fill=INK)
    draw.text((MARGIN, 186), CAPTION, font=font("regular", 27), fill=MUTED)

    logos = [f"img/selector/{slug(b)}.png" for b in broadcasters()]
    logos = [p for p in logos if os.path.exists(p)]
    top = H - BAR - 52 - (len(ROWS) * TILE + (len(ROWS) - 1) * GAP)
    index = 0
    for row, count in enumerate(ROWS):
        y = top + row * (TILE + GAP)
        for column in range(count):
            if index >= len(logos):
                break
            tile = Image.open(logos[index]).convert("RGB").resize((TILE, TILE), Image.LANCZOS)
            card.paste(tile, (MARGIN + column * (TILE + GAP), y))
            index += 1

    draw.rectangle([0, H - BAR - 4, W, H - BAR], fill=INK)
    draw.rectangle([0, H - BAR, W, H], fill=ACID)

    out = "img/selector/selector-og.png"
    card.save(out, optimize=True)
    print(f"{out} - {W}x{H}, {index} logos, {os.path.getsize(out) // 1024} KB")


if __name__ == "__main__":
    main()
