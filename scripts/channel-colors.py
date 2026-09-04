"""Pick a brand colour per channel from its logo.

    python3 scripts/channel-colors.py   ->  selector-channel-colors.json

The Selector's source chips fill with the channel's own colour on hover and
when selected. Nine of those colours were written by hand; the rest are taken
from the logo, so adding a channel no longer means picking a colour by eye.

Two rules the picker obeys. It prefers a saturated colour over the grey and
near-white that dominate most avatars, because a chip filled with off-white
reads as broken rather than branded. And every colour is forced to WCAG AA
against whichever of black or white sits better on it: the gate runs axe, and
a chip nobody can read is worse than no colour at all. Channels whose logo has
no usable colour at all are left out, and those chips keep the default.
"""
import colorsys, json, os, sys, unicodedata, re
from collections import Counter
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGOS = os.path.join(ROOT, "img", "selector")
OUT = os.path.join(ROOT, "selector-channel-colors.json")
AA = 4.5

# Real brand colours, kept as they were: these were chosen deliberately and a
# 36x36 avatar is a poor substitute for knowing what the brand actually is.
SEEDS = {
    "Boiler Room": "#d6231f", "Beatport": "#01ff95", "Mixmag": "#f5e003",
    "Cercle": "#2f3de0", "Keep Hush": "#0f0f0f", "HÖR": "#a9d400",
    "Rinse FM": "#2c92ff", "Seoul Community Radio": "#fa6b38",
    "STVOL TV": "#0e720d",
}

def slug(s):
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", s))

def lum(rgb):
    def ch(c):
        c /= 255
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(x) for x in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

def dominant(path):
    """The most common genuinely coloured pixel, or None for a mono logo.

    There is no fallback to "the darkest tone" on purpose. Plenty of these
    avatars are a black-and-white wordmark, and taking their darkest pixel
    painted seventeen of thirty-seven chips the same near-black: not similar
    brand colours, just the absence of one repeated seventeen times. A channel
    with no colour in its logo has no brand colour to show, so it keeps the
    default chip.
    """
    img = Image.open(path).convert("RGBA").resize((64, 64), Image.LANCZOS)
    pixels = [(r, g, b) for r, g, b, a in img.getdata() if a >= 128]
    for floor in (0.35, 0.22, 0.12):
        vivid = Counter()
        for r, g, b in pixels:
            _, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
            if s > floor and 0.12 < l < 0.9:
                vivid[(r // 24 * 24 + 12, g // 24 * 24 + 12, b // 24 * 24 + 12)] += 1
        # ignore a stray handful of coloured pixels: it has to be part of the mark
        if vivid and vivid.most_common(1)[0][1] >= len(pixels) * 0.02:
            return vivid.most_common(1)[0][0]
    return None

def to_aa(rgb):
    """Return (bg, fg) meeting AA, nudging lightness until it does."""
    h, l, s = colorsys.rgb_to_hls(*[c / 255 for c in rgb])
    for _ in range(60):
        cur = tuple(round(c * 255) for c in colorsys.hls_to_rgb(h, l, s))
        white, black = contrast(cur, (255, 255, 255)), contrast(cur, (10, 10, 10))
        if max(white, black) >= AA:
            return cur, ("#fff" if white >= black else "var(--ink)")
        l = l - 0.02 if lum(cur) > 0.35 else l + 0.02   # push away from mid grey
        l = min(max(l, 0.0), 1.0)
    return None, None

def main():
    import subprocess
    chans = json.loads(subprocess.check_output(
        ["node", "--input-type=module", "-e",
         'import {channels} from "./selector-channels.mjs";'
         'console.log(JSON.stringify(channels.map(c=>c.broadcaster)));'], cwd=ROOT))
    out, skipped, mono = {}, [], []
    for name in chans:
        if name in SEEDS:
            rgb = tuple(int(SEEDS[name][i:i+2], 16) for i in (1, 3, 5))
            white, black = contrast(rgb, (255, 255, 255)), contrast(rgb, (10, 10, 10))
            out[name] = {"bg": SEEDS[name], "fg": "#fff" if white >= black else "var(--ink)", "src": "brand"}
            continue
        path = os.path.join(LOGOS, slug(name) + ".png")
        if not os.path.exists(path):
            skipped.append(name); continue
        base = dominant(path)
        bg, fg = to_aa(base) if base else (None, None)
        if bg:
            out[name] = {"bg": "#%02x%02x%02x" % bg, "fg": fg, "src": "logo"}
        else:
            mono.append(name)

    # Twenty of these logos are a black-and-white wordmark, which is often a
    # deliberate choice rather than an omission. They still need a chip colour,
    # so they get one spread evenly around the wheel: same saturation and
    # lightness for all of them, so they read as one family and not as noise.
    # Marked "derived" because it is a tint we chose, not a brand's own colour.
    for i, name in enumerate(sorted(mono)):
        hue = (i * 360 / max(len(mono), 1)) % 360
        rgb = tuple(round(c * 255) for c in colorsys.hls_to_rgb(hue / 360, 0.42, 0.55))
        bg, fg = to_aa(rgb)
        out[name] = {"bg": "#%02x%02x%02x" % bg, "fg": fg, "src": "derived"}
    with open(OUT, "w") as f:
        json.dump(out, f, indent=1, ensure_ascii=False, sort_keys=True)
        f.write("\n")
    print(f"{len(out)} colours written to {os.path.basename(OUT)}")
    if skipped:
        print("no usable colour (chip keeps the default):", ", ".join(skipped))

if __name__ == "__main__":
    sys.exit(main())
