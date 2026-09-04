"""Download the channel avatars the Selector's source filter shows.

    python3 scripts/fetch-channel-logos.py   ->  img/selector/<slug>.png

One 36x36 PNG per broadcaster, which is the size the chips render. Existing
files are left alone, so this only fills gaps: run it after adding channels to
selector-channels.mjs. No API key needed - the avatar is in the channel page's
og:image, which is public. Before this existed the logos were placed by hand,
so eighteen new channels shipped as bare text.
"""
import io, json, os, re, subprocess, sys, unicodedata, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img", "selector")
SIZE = 36
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 Chrome/120 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9", "Cookie": "CONSENT=YES+cb; SOCS=CAI"}

def slug(s):
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", s))

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read()

def avatar_url(handle):
    html = get(f"https://www.youtube.com/{handle}").decode("utf8", "ignore")
    m = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    return m.group(1) if m else None

def channels():
    out = subprocess.check_output(
        ["node", "--input-type=module", "-e",
         'import {channels} from "./selector-channels.mjs";'
         'console.log(JSON.stringify(channels));'], cwd=ROOT)
    return json.loads(out)

def main():
    os.makedirs(OUT, exist_ok=True)
    made = skipped = failed = 0
    for ch in channels():
        path = os.path.join(OUT, slug(ch["broadcaster"]) + ".png")
        if os.path.exists(path):
            skipped += 1
            continue
        try:
            url = avatar_url(ch.get("handle") or ("channel/" + ch["channelId"]))
            if not url:
                raise RuntimeError("no og:image on the channel page")
            img = Image.open(io.BytesIO(get(url))).convert("RGBA")
            side = min(img.size)                       # avatars are square, crop defensively
            img = img.crop(((img.width - side) // 2, (img.height - side) // 2,
                            (img.width + side) // 2, (img.height + side) // 2))
            img.resize((SIZE, SIZE), Image.LANCZOS).save(path, optimize=True)
            print(f"  + {ch['broadcaster']} -> {os.path.basename(path)}")
            made += 1
        except Exception as e:
            print(f"  ! {ch['broadcaster']}: {e}", file=sys.stderr)
            failed += 1
    print(f"\n{made} written, {skipped} already present, {failed} failed.")
    return 1 if failed else 0

if __name__ == "__main__":
    sys.exit(main())
