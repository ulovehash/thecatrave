#!/usr/bin/env node
// Media and source lookups for a guide, one command per job, compact output.
// Run sequence and limits: scripts/media-run.md.
//
//   node scripts/media-lookup.mjs commons-search <out.json> "query" ["query" ...]
//   node scripts/media-lookup.mjs commons-info   <out.json> "File:A.jpg" ["File:B.jpg" ...]
//   node scripts/media-lookup.mjs fetch <guide-img-dir> "File:A.jpg=slug" [...]
//   node scripts/media-lookup.mjs yt-search "query" ["query" ...]
//   node scripts/media-lookup.mjs yt-check <videoId> [<videoId> ...]
//   node scripts/media-lookup.mjs wiki-text <out-dir> "Title" ["Title" ...]
//
// Prints one line per item. Full records go to the file named, never to stdout.
// No network relay: test one curl first; if the shell is offline, stop and say so.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const UA = 'media-lookup/1.0 (research script)';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const ALLOWED = /^(cc[ -]?by(-sa)?( \d(\.\d)?)?|cc0( 1\.0)?|public domain|pd\b.*)/i;
const BANNED = /\b(nc|nd)\b|non-?commercial|no-?deriv|fair use/i;
const MAIN_W = 1200, SMALL_W = 320, MIN_W = 800;

const sleep = (t) => new Promise((r) => setTimeout(r, t));
const strip = (s = '') => String(s).replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
const cut = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

async function get(url, { json = true, headers = {} } = {}) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers } });
    if (res.status === 429 || res.status >= 500) { await sleep([5000, 15000, 30000, 60000][attempt]); continue; }
    if (!res.ok) return { _status: res.status };
    return json ? res.json() : res.text();
  }
  return { _status: 429 };
}

async function commons(params) {
  const q = new URLSearchParams({ format: 'json', formatversion: '2', maxlag: '5', ...params });
  const d = await get(`${COMMONS}?${q}`);
  if (d?.error?.code === 'maxlag') { await sleep(5000); return commons(params); }
  await sleep(1000);
  return d;
}

const INFO = {
  prop: 'imageinfo|categories',
  iiprop: 'url|size|mime|extmetadata',
  iiurlwidth: String(MAIN_W),
  iiextmetadatafilter: 'LicenseShortName|Artist|Credit|DateTimeOriginal|ImageDescription|ObjectName',
  clshow: '!hidden',
  cllimit: 'max',
};

function record(p) {
  const ii = p.imageinfo?.[0];
  if (!ii) return { title: p.title, missing: true };
  const m = ii.extmetadata || {};
  const licence = strip(m.LicenseShortName?.value);
  return {
    title: p.title,
    w: ii.width,
    h: ii.height,
    mime: ii.mime,
    licence,
    licenceOk: ALLOWED.test(licence) && !BANNED.test(licence),
    author: strip(m.Artist?.value),
    credit: strip(m.Credit?.value),
    date: strip(m.DateTimeOriginal?.value),
    desc: strip(m.ImageDescription?.value),
    categories: (p.categories || []).map((c) => c.title.replace(/^Category:/, '')),
    url: ii.url,
    thumb: ii.thumburl,
    page: ii.descriptionurl,
  };
}

// Media records of published guides, to flag a Commons file another guide already uses (workflow §7: no silent reuse).
let usedIn;
function reuse(title) {
  if (!usedIn) {
    usedIn = [];
    try {
      for (const f of fs.readdirSync('media').filter((f) => f.endsWith('.json'))) usedIn.push([f.replace(/\.json$/, ''), fs.readFileSync(path.join('media', f), 'utf8').replace(/_/g, ' ')]);
    } catch {}
  }
  const t = title.replace(/^File:/, '').replace(/_/g, ' ');
  return usedIn.filter(([, txt]) => txt.includes(t)).map(([g]) => g);
}

function line(r, i) {
  if (r.missing) return `${i}\tMISSING\t${r.title}`;
  const used = reuse(r.title);
  const flags = [!r.licenceOk && 'LICENCE', r.w < MIN_W && 'SMALL', !/jpeg|png/.test(r.mime) && 'TYPE', used.length && 'USED:' + used.join('+')].filter(Boolean).join(',') || 'ok';
  return [i, flags, r.title.replace(/^File:/, ''), `${r.w}x${r.h}`, r.licence, cut(r.author, 40), cut(r.date, 20), cut(r.desc, 90)].join('\t');
}

function save(out, recs) {
  let prev = [];
  try { prev = JSON.parse(fs.readFileSync(out, 'utf8')); } catch {}
  const byTitle = new Map(prev.map((r) => [r.title, r]));
  recs.forEach((r) => byTitle.set(r.title, r));
  fs.writeFileSync(out, JSON.stringify([...byTitle.values()], null, 1));
}

async function commonsSearch(out, queries) {
  const all = [];
  for (const query of queries) {
    const d = await commons({ action: 'query', generator: 'search', gsrsearch: `${query} filetype:bitmap`, gsrnamespace: '6', gsrlimit: '15', ...INFO });
    const pages = (d.query?.pages || []).sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
    console.log(`# ${query}: ${pages.length} files`);
    pages.map(record).forEach((r) => { all.push(r); if (r.licenceOk) console.log(line(r, all.length)); });
    const dropped = pages.length - pages.map(record).filter((r) => r.licenceOk).length;
    if (dropped) console.log(`#   ${dropped} not openly licensed, not shown`);
  }
  save(out, all);
  console.log(`# saved ${all.length} records to ${out}`);
}

async function commonsInfo(out, titles) {
  const all = [];
  for (let i = 0; i < titles.length; i += 50) {
    const d = await commons({ action: 'query', titles: titles.slice(i, i + 50).join('|'), ...INFO });
    (d.query?.pages || []).map(record).forEach((r) => all.push(r));
  }
  all.forEach((r, i) => {
    console.log(line(r, i + 1));
    if (!r.missing) console.log(`\tcategories: ${cut(r.categories.join('; '), 220)}`);
  });
  save(out, all);
}

const PY_CONVERT = `
import sys
from PIL import Image, ImageOps
src, prefix, main_w, small_w = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
out = []
for w in (min(main_w, im.width), small_w):
    h = round(im.height * w / im.width)
    p = f"{prefix}-{w}.webp"
    im.resize((w, h), Image.LANCZOS).save(p, 'WEBP', quality=82, method=6)
    out.append(f"{p} {w}x{h}")
print(' | '.join(out))
`;

async function fetchImages(dir, pairs) {
  fs.mkdirSync(dir, { recursive: true });
  const want = pairs.map((p) => { const k = p.lastIndexOf('='); return { title: p.slice(0, k), slug: p.slice(k + 1) }; });
  const d = await commons({ action: 'query', titles: want.map((w) => w.title).join('|'), ...INFO });
  const recs = new Map((d.query?.pages || []).map(record).map((r) => [r.title, r]));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'media-'));
  for (const w of want) {
    const r = recs.get(w.title) || [...recs.values()].find((x) => x.title.replace(/_/g, ' ') === w.title.replace(/_/g, ' '));
    if (!r || r.missing) { console.log(`MISSING\t${w.title}`); continue; }
    if (!r.licenceOk) { console.log(`REFUSED\t${w.title}\tlicence: ${r.licence || 'none'}`); continue; }
    const src = r.w > MAIN_W && r.thumb ? r.thumb : r.url;
    const res = await fetch(src, { headers: { 'User-Agent': UA } });
    if (!res.ok) { console.log(`FAILED\t${w.title}\tHTTP ${res.status}`); continue; }
    const raw = path.join(tmp, 'src' + path.extname(new URL(src).pathname));
    fs.writeFileSync(raw, Buffer.from(await res.arrayBuffer()));
    const py = spawnSync('python3', ['-I', '-c', PY_CONVERT, raw, path.join(dir, w.slug), String(MAIN_W), String(SMALL_W)], { encoding: 'utf8' });
    if (py.status !== 0) { console.log(`FAILED\t${w.title}\t${cut(py.stderr.trim(), 200)}`); continue; }
    const entry = {
      file: ((p) => (p.startsWith('..') ? path.resolve(dir, w.slug) : p))(path.relative(process.cwd(), path.join(dir, w.slug))),
      event: `${r.title.replace(/^File:/, '').replace(/ /g, '_')}${r.date ? ', ' + r.date.slice(0, 10) : ''}`,
      author: r.author,
      licence: r.licence,
    };
    // Every image is credited, public domain included (phonk-guide.html: "Photograph: Bull-Doser, public domain.").
    const lic = /^cc0/i.test(r.licence) ? 'CC0' : /^cc/i.test(r.licence) ? r.licence : 'public domain';
    const caption = `Photograph: ${r.author}, ${lic}.`;
    console.log(`OK\t${py.stdout.trim()}\n\trecord: ${JSON.stringify(entry)}\n\tcaption credit: ${caption}\n\tpage: ${r.page}`);
    await sleep(1000);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
}

function walk(o, key, acc = []) {
  if (!o || typeof o !== 'object') return acc;
  if (o[key]) acc.push(o[key]);
  for (const v of Object.values(o)) walk(v, key, acc);
  return acc;
}

async function ytSearch(queries) {
  for (const query of queries) {
    const html = await get(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, { json: false, headers: { Cookie: 'CONSENT=YES+1', 'Accept-Language': 'en' } });
    const m = typeof html === 'string' && html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
    if (!m) { console.log(`# ${query}: no results data (HTTP or layout change)`); continue; }
    const vids = walk(JSON.parse(m[1]), 'videoRenderer').slice(0, 6);
    console.log(`# ${query}`);
    for (const v of vids) {
      const channel = v.ownerText?.runs?.[0]?.text || '';
      const tag = / - Topic$/.test(channel) ? 'TOPIC' : /vevo$/i.test(channel) ? 'VEVO' : '';
      console.log([v.videoId, cut(v.title?.runs?.[0]?.text || '', 70), channel, tag, v.lengthText?.simpleText || '', v.publishedTimeText?.simpleText || ''].join('\t'));
    }
    await sleep(1500);
  }
}

async function ytCheck(ids) {
  for (const id of ids) {
    const d = await get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
    if (d._status === 401 || d._status === 403) console.log(`${id}\tNOT EMBEDDABLE`);
    else if (d._status) console.log(`${id}\tGONE (HTTP ${d._status})`);
    else console.log(`${id}\tok\t${cut(d.title, 80)}\t${d.author_name}\t${d.author_url}`);
    await sleep(500);
  }
}

async function wikiText(dir, titles) {
  fs.mkdirSync(dir, { recursive: true });
  const seen = new Map();
  for (const t of titles) {
    const q = new URLSearchParams({ action: 'query', prop: 'extracts|info', explaintext: '1', redirects: '1', inprop: 'url', format: 'json', formatversion: '2', titles: t });
    const d = await get(`https://en.wikipedia.org/w/api.php?${q}`);
    const p = d.query?.pages?.[0];
    const redirect = d.query?.redirects?.[0];
    if (!p || p.missing || !p.extract) { console.log(`MISSING\t${t}`); continue; }
    const file = path.join(dir, `wiki-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.txt`);
    const arrow = redirect ? ` -> ${redirect.to}${redirect.tofragment ? '#' + redirect.tofragment : ''}` : '';
    if (seen.has(file)) { console.log(`SAME\t${t}${arrow}\tsection of ${seen.get(file)}, already in ${file}`); continue; }
    seen.set(file, p.title);
    fs.writeFileSync(file, `${p.title}\n${p.fullurl}\nrevision ${p.lastrevid}, fetched ${new Date().toISOString().slice(0, 10)}\n\n${p.extract}\n`);
    const sections = (p.extract.match(/^==+ .+ ==+$/gm) || []).length;
    console.log(`OK\t${t}${arrow}\t${file}\t${p.extract.length} chars, ${sections} headings`);
    await sleep(500);
  }
}

const [cmd, ...args] = process.argv.slice(2);
const jobs = {
  'commons-search': () => commonsSearch(args[0], args.slice(1)),
  'commons-info': () => commonsInfo(args[0], args.slice(1)),
  fetch: () => fetchImages(args[0], args.slice(1)),
  'yt-search': () => ytSearch(args),
  'yt-check': () => ytCheck(args),
  'wiki-text': () => wikiText(args[0], args.slice(1)),
};
if (!jobs[cmd] || !args.length) {
  console.log(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 13).join('\n'));
  process.exit(1);
}
await jobs[cmd]();
