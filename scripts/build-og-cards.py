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

import json
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
COVERS_RECORD = "scripts/og-articles-covers.json"
FONT_CACHE = ".cache/fonts"
FONTS = {
    "bold": ("SpaceMono-Bold.ttf",
             "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Bold.ttf"),
    "regular": ("SpaceMono-Regular.ttf",
                "https://github.com/googlefonts/spacemono/raw/main/fonts/ttf/SpaceMono-Regular.ttf"),
}

# A share card is this script's output, never a file placed by hand. A card
# swapped in by hand survives only until the next run, which overwrites it
# without a word: best-boiler-room-sets.jpg was a raw photograph on main until
# 2026-09-12 (defect og-card-hand-replaced). To change a card, change HERO.
#
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
    "how-to-find-new-music": "img/NOW-1024.webp",
    "best-boiler-room-sets": "img/boiler-room/carl-cox-1200.webp",
    "burning-man": "img/burning-man/robot-heart-1200.webp",
    "berlin-clubs": "img/berlin-clubs/berghain-1200.webp",
    "london-clubs": "img/london-clubs/fabric-1200.webp",
    "live-dj-sets": "img/live-dj-sets/the-lot-radio-1200.webp",
    "tomorrowland": "img/tomorrowland/mainstage-2014-1200.webp",
    "edc": "img/edc/kinetic-field-2024-1200.webp",
    "creamfields": "img/creamfields/steel-yard-2017-1200.webp",
    "parookaville": "img/parookaville/mainstage-aerial-2022-1200.webp",
    "ultra": "img/ultra/bayfront-2014-1200.webp",
    "untold": "img/untold/main-stage-2019-1200.webp",
    "coachella": "img/coachella/grounds-2018-1200.webp",
    "lollapalooza": "img/lollapalooza/skyline-2017-1200.webp",
    "mysteryland": "img/mysteryland/site-aerial-2018-1200.webp",
    "acid-house": "img/acid-house/roland-tb303-1982-1200.webp",
    "grime": "img/grime/wiley-flowdan-2005-1200.webp",
    "europe-festivals": "img/europe-festivals/kappa-futurfestival-2025-1200.webp",
    "glastonbury": "img/glastonbury/night-2025-1200.webp",
    "sonar": "img/sonar/sonar-by-day-2016-1200.webp",
    "primavera-sound": "img/primavera-sound/festival-crowd-1200.webp",
    "paris-clubs": "img/paris-clubs/les-bains-douches-entrance-1280.webp",
    "barcelona-clubs": "img/barcelona-clubs/razzmatazz-exterior-1280.webp",
    "amsterdam-clubs": "img/amsterdam-clubs/paradiso-1200.webp",
    "ibiza-clubs": "img/ibiza-clubs/pacha-entrance-1200.webp",
    "europe-clubbing-cities": "img/europe-clubbing-cities/cross-club-prague-1200.webp",
    "nye-festivals": "img/nye-festivals/awakenings-gashouder-nye-2017-1200.webp",
    "house-music": "img/house-music/frankie-knuckles-ade-2012-1200.webp",
    "techno-music": "img/techno/jeff-mills-2010-1200.webp",
    "nyc-clubs": "img/nyc-clubs/limelight-church-1200.webp",
    "selector": None,             # its hero is the wall of channel logos
    "articles": None,             # its hero is a wall of the articles' own card covers
}
KICKER = {"home": "thecatrave.com", "tool": "Tool", "guide": "Guide", "index": "thecatrave.com"}

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
        # Either quote style: a title with an apostrophe has to be written in
        # double quotes, and the single-quote-only pattern crashed on one
        # (defects.json: og-card-manifest-double-quoted-title).
        title = re.search(r"""title: (?:'([^']*)'|"([^"]*)")""", rest)
        title = title.group(1) if title.group(1) is not None else title.group(2)
        caption = re.search(r"""caption: (?:"([^"]*)"|'([^']*)')""", rest)
        caption = caption.group(1) if caption.group(1) is not None else caption.group(2)
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


def article_covers(count=9):
    """The card images of the newest English guides, in the order the /articles
    page lists them, so the wall shows what the page lists rather than one
    guide's photo standing in for all of them.

    Asked of home-articles.mjs itself, not read out of its text: a regex over
    the file took the last nine `image:` entries, and once the German and
    French catalogues were added below the English one, those were French."""
    script = ("import('./home-articles.mjs').then(m => console.log(JSON.stringify("
              "m.allArticlesNewestFirst('en').map(a => a.image))))")
    images = json.loads(subprocess.check_output(["node", "--input-type=module", "-e", script], text=True))
    return [p for p in images if os.path.exists(p)][:count]


def cover(path, size):
    """Crop to fill a square, the way the site's own article cards crop."""
    image = Image.open(path).convert("RGB")
    side = min(image.width, image.height)
    left, top = (image.width - side) // 2, (image.height - side) // 2
    return image.crop((left, top, left + side, top + side)).resize((size, size), Image.LANCZOS)


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
    if name == "articles":
        covers, cols, gap = article_covers(), 3, 10
        # Record which covers this card was drawn from. audit-og-cards.mjs
        # compares the record with home-articles.mjs on every build, so a new
        # guide without a redrawn card fails instead of shipping a stale wall
        # (defects.json: articles-card-stale-after-new-guide).
        with open(COVERS_RECORD, "w", encoding="utf-8") as record:
            json.dump(covers, record, indent=2)
            record.write("\n")
        tile = (height - (cols - 1) * gap) // cols
        grid_w = cols * tile + (cols - 1) * gap
        start_x = left + (width - grid_w) // 2
        start_y = top + (height - grid_w) // 2
        for index, path in enumerate(covers):
            x = start_x + (index % cols) * (tile + gap)
            y = start_y + (index // cols) * (tile + gap)
            card.paste(cover(path, tile), (x, y))
            draw.rectangle([x - 1, y - 1, x + tile, y + tile], outline=INK, width=1)
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
    # `python3 scripts/build-og-cards.py articles` rebuilds only that card, so
    # adding one page does not re-save every other card in the set.
    only = set(sys.argv[1:])
    os.makedirs(OUT_DIR, exist_ok=True)
    for page in read_manifest():
        if only and page["name"] not in only:
            continue
        out, kb = build(page)
        print(f"{out:<32} {W}x{H}  {kb} KB")


if __name__ == "__main__":
    main()
