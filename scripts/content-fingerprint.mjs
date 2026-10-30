// What counts as a real edit to a page, for the sitemap's lastmod.
//
// Every page is generated, and most of what a generator writes is shared:
// the Bandcamp block, the own-track and own-set panels, listening and video
// asides, the read-next cards. Changing one of those rewrites the same text on
// every page at once. On 8 October 2026 a set of sitewide passes moved lastmod
// on 159 of 248 URLs in one day, the pattern Google learns to ignore.
//
// So a page's editorial text is <main> without the read-next block and without
// any <aside>, with scripts, tags and long catalogue numbers removed. It is cut
// into block units (paragraphs, list items, headings, table cells). A change
// is significant, and lastmod moves, only when compared with the version that
// set the current lastmod:
//   - at least SHARE of the words sit in units that are new, or
//   - at least SHARE of the old words sit in units that are gone, or
//   - the H2 outline changed by H2_CHANGES or more (a reworded H2 counts as
//     one removed and one added), which is a restructure, not a touch-up.
// Small edits do not move the date, and they do not reset the baseline either,
// so many small edits to one page add up until they cross the threshold.
// Titles and meta descriptions live in <head> and never count.
import crypto from 'node:crypto';

export const SHARE = 0.25;
export const H2_CHANGES = 4;

const stripBlocks = (html, tag) => {
  // remove every <tag ...>...</tag>, nesting-aware
  const open = new RegExp(`<${tag}\\b`, 'gi');
  let out = '';
  let i = 0;
  for (;;) {
    open.lastIndex = i;
    const m = open.exec(html);
    if (!m) { out += html.slice(i); break; }
    out += html.slice(i, m.index);
    const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    re.lastIndex = m.index;
    let depth = 0;
    let end = html.length;
    for (let t; (t = re.exec(html));) {
      depth += t[1] ? -1 : 1;
      if (depth === 0) { end = re.lastIndex; break; }
    }
    i = end;
  }
  return out;
};

const norm = text => text
  .replace(/&[a-z#0-9]+;/gi, ' ')
  // the Selector's catalogue count (62,824 / 62 824 / 62.824) moves on every
  // catalogue refresh; numbers of five digits or more do not count. Years do.
  .replace(/\d{1,3}(?:[,.\s  ]\d{3})+|\d{5,}/g, '#')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

const h8 = s => crypto.createHash('sha1').update(s).digest('hex').slice(0, 8);

export const editorialHtml = html => {
  let main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  main = main.split(/<section class="read-next"/i)[0];
  main = main.replace(/<(script|style|noscript|template)[\s\S]*?<\/\1>/gi, ' ');
  main = stripBlocks(main, 'aside');
  return main;
};

// {units: "hash.words hash.words ...", h2: "hash hash ..."}
export const fingerprint = html => {
  const main = editorialHtml(html);
  const h2 = [...main.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map(m => norm(m[1].replace(/<[^>]+>/g, ' ')))
    .filter(Boolean)
    .map(h8);
  const units = main
    .replace(/<\/(p|li|h[1-6]|td|th|dt|dd|blockquote|figcaption|caption|summary)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .split('\n')
    .map(norm)
    .filter(u => u.length > 0)
    .map(u => `${h8(u)}.${u.split(' ').length}`);
  return { units: units.join(' '), h2: h2.join(' ') };
};

const parse = units => (units ? units.split(' ') : []).map(u => {
  const [h, n] = u.split('.');
  return [h, Number(n)];
});

const bag = list => {
  const m = new Map();
  for (const [h, n] of list) m.set(h, (m.get(h) ?? 0) + n);
  return m;
};

// how much of `a` is not in `b`, as a share of a's words (multiset by unit)
const missingShare = (a, b) => {
  const total = a.reduce((s, [, n]) => s + n, 0);
  if (!total) return 0;
  const left = bag(b);
  let missing = 0;
  for (const [h, n] of a) {
    const have = left.get(h) ?? 0;
    if (have >= n) left.set(h, have - n);
    else { missing += n - have; left.set(h, 0); }
  }
  return missing / total;
};

export const compare = (base, cur) => {
  const b = parse(base.units);
  const c = parse(cur.units);
  const added = missingShare(c, b);
  const removed = missingShare(b, c);
  const bh = new Set(base.h2 ? base.h2.split(' ') : []);
  const ch = new Set(cur.h2 ? cur.h2.split(' ') : []);
  const h2Added = [...ch].filter(h => !bh.has(h)).length;
  const h2Removed = [...bh].filter(h => !ch.has(h)).length;
  const significant = added >= SHARE || removed >= SHARE || h2Added + h2Removed >= H2_CHANGES;
  return { significant, added, removed, h2Added, h2Removed };
};
