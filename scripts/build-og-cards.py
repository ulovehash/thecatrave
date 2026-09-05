"""Compose one Open Graph share card per page.

    python3 scripts/build-og-cards.py   ->  img/og/<page>.jpg

Every card is 1200x630, the ratio Telegram, Twitter, Slack and Facebook all
lay out for. The pages used to point og:image straight at an article image,
which left six different aspect ratios across eight pages: the two square
ones lost their subject to the feed's crop, and none of them carried a word,
so the picture said nothing on its own.

Cropping the originals was not an option for half the set. The home photo and
the breakbeat sleeve are square, the bass photo is three people standing, the
drum and bass image is a labelled diagram: a 1.91:1 crop cuts the subject out
of all four. So the image is placed whole inside a panel instead, with the
page's name and one line beside it.

Space Mono is the site's mono face. It is fetched into a gitignored cache
rather than vendored, because the site serves it from Google Fonts and the
only thing this script produces, the PNGs, are committed. Licence: OFL 1.1.
"""

import os
import re
import subprocess
import sys
import unicodedata

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
MARGIN = 64
BAR, RULE = 84, 4                 # acid bar and the ink hairline above it
PANEL = (648, 64, 1136, 498)      # the image sits here, whole, never cropped
TEXT_WIDTH = PANEL[0] - MARGIN - 56

PAPER = (241, 238, 231)
INK = (10, 10, 10)
ACID = (255, 90, 54)
MUTED = (87, 83, 74)

OUT_DIR = "img/og"
FONT_CACHE = ".cache/fonts"
FONTS = {
    "bold": ("SpaceMono-Bold.ttf",
             "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Bold.ttf"),
    "regular": ("SpaceMono-Regular.ttf",
                "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Regular.ttf"),
}

# The hero each card carries. Kept here rather than in pages.mjs because it is
# only ever the card's business; the page picks its own in-article images.
HERO = {
    "home": "img/thecatrave-home-1200.webp",
    "breakbeat": "img/breakbeat/plump-djs-electric-disco.png",
    "jungle": "img/UK Rave flyers from 1991-1994.webp",
    "uk": "img/people dancing-1200.webp",
    "bass-music": "img/bass-music/miami-bass-loc-ace-vic-1400.jpg",
    "dubstep": "img/dubstep/dubplate-lathe.webp",
    "drum-and-bass": "img/dnb/dnb-cover.webp",
    "uk-garage": "img/skream-1200.webp",
    "selector": None,             # its hero is the wall of channel logos
}
KICKER = {"home": "thecatrave.com", "tool": "Tool", "guide": "Guide"}

_cache = {}


def font(weight, size):
    key = (weight, size)
    if key in _cache:
        return _cache[key]
    name, url = FONTS[weight]
    path = os.path.join(FONT_CACHE, name)
    if not os.path.exists(path):
        os.makedirs(FONT_CACHE, exist_ok=True)
        print(f"fetching {name}")
        if subprocess.call(["curl", "-sfL", url, "-o", path]) != 0:
            sys.exit(f"could not fetch {name} from {url} (offline?)")
    _cache[key] = ImageFont.truetype(path, size)
    return _cache[key]


def slug(value):
    value = unicodedata.normalize("NFKD", value.lower())
    value = "".join(c for c in value if not unicodedata.combining(c))
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value))


def read_manifest():
    """pages.mjs is the one page list; read the card copy out of it rather than
    keeping a second copy here that can drift."""
    source = open("pages.mjs", encoding="utf-8").read()
    entries = []
    for row in re.finditer(r"\{ name: '([^']+)',(.*?) \}\,?\n", source):
        name, rest = row.group(1), row.group(2)
        kind = re.search(r"kind: '([^']+)'", rest).group(1)
        title = re.search(r"title: '([^']*)'", rest).group(1)
        caption = re.search(r'caption: "([^"]*)"', rest).group(1)
        entries.append({"name": name, "kind": kind, "title": title, "caption": caption})
    return entries


def wrap(draw, text, face, width):
    lines, line = [], ""
    for word in text.split():
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=face) <= width or not line:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def fit_title(draw, text, width, largest=76, smallest=42):
    """Shrink the title until it fits in at most two lines."""
    for size in range(largest, smallest - 1, -2):
        face = font("bold", size)
        lines = wrap(draw, text, face, width)
        if len(lines) <= 2:
            return face, lines
    face = font("bold", smallest)
    return face, wrap(draw, text, face, width)


def channel_logos():
    source = open("selector-channels.mjs", encoding="utf-8").read()
    names = [m[1] for m in re.findall(r"""broadcaster:\s*(['"])(.*?)\1""", source)]
    seen, paths = set(), []
    for name in names:
        path = f"img/selector/{slug(name)}.png"
        if name not in seen and os.path.exists(path):
            seen.add(name)
            paths.append(path)
    return paths


def draw_panel(card, name):
    """The image is fitted to its own size inside the panel area, not letterboxed
    onto a fixed block: a wide flyer photo and a square sleeve then both sit at
    their own shape instead of floating in black bands."""
    left, top, right, bottom = PANEL
    width, height = right - left, bottom - top
    draw = ImageDraw.Draw(card)
    if name == "selector":
        logos, cols, gap = channel_logos(), 5, 10
        tile = (width - (cols - 1) * gap) // cols
        rows = -(-len(logos) // cols)
        grid_h = rows * tile + (rows - 1) * gap
        start_y = top + (height - grid_h) // 2
        for index, path in enumerate(logos):
            x = left + (index % cols) * (tile + gap)
            y = start_y + (index // cols) * (tile + gap)
            card.paste(Image.open(path).convert("RGB").resize((tile, tile), Image.LANCZOS), (x, y))
        return
    hero = Image.open(HERO[name]).convert("RGB")
    # contain, never cover: a 1.91:1 crop would cut the subject out of half of these
    scale = min(width / hero.width, height / hero.height)
    hero = hero.resize((round(hero.width * scale), round(hero.height * scale)), Image.LANCZOS)
    x = left + (width - hero.width) // 2
    y = top + (height - hero.height) // 2
    card.paste(hero, (x, y))
    draw.rectangle([x - 2, y - 2, x + hero.width + 1, y + hero.height + 1], outline=INK, width=2)


def build(page):
    card = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(card)

    kicker = KICKER.get(page["name"]) or KICKER[page["kind"]]
    draw.text((MARGIN, 74), kicker.upper(), font=font("bold", 21), fill=ACID)

    face, lines = fit_title(draw, page["title"], TEXT_WIDTH)
    y = 130
    for line in lines:
        draw.text((MARGIN, y), line, font=face, fill=INK)
        y += round(face.size * 1.18)

    caption = font("regular", 23)
    y += 18
    for line in wrap(draw, page["caption"], caption, TEXT_WIDTH):
        draw.text((MARGIN, y), line, font=caption, fill=MUTED)
        y += 34

    draw_panel(card, page["name"])
    draw.rectangle([0, H - BAR - RULE, W, H - BAR], fill=INK)
    draw.rectangle([0, H - BAR, W, H], fill=ACID)

    # JPEG, not PNG: these are photographs behind flat colour, and q92 keeps the
    # type crisp at a quarter of the weight (2.0 MB across the set, down to 0.5).
    out = f"{OUT_DIR}/{page['name']}.jpg"
    card.save(out, quality=92, optimize=True, progressive=True)
    return out, os.path.getsize(out) // 1024


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for page in read_manifest():
        out, kb = build(page)
        print(f"{out:<32} {W}x{H}  {kb} KB")


if __name__ == "__main__":
    main()
