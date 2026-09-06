// A record a genre guide cannot omit must be on the page, and playable.
//
// audit-media.mjs measures distribution and density, and says outright that it
// cannot judge whether the media is the right media. This is the half of that
// judgement a machine can make: not "is this the right embed for this paragraph"
// but "is the record that defines this genre here at all".
//
// It exists because the UK garage guide shipped, passed every check, and had no
// Sweet Like Chocolate, no Do You Really Like It and no Bound 4 Da Reload: two
// number ones and one of the records that made speed garage. Ripgroove was named
// in the prose and never embedded, which reads as a guide describing a record it
// could not be bothered to play.
//
// A record with no_embed_reason is one nothing can legitimately play: a website
// rather than a record, or a release with no upload on the label's or artist's
// own channel. The reason is written down instead of the warning being ignored,
// because a warning that everybody scrolls past is the same as no warning.
//
// Named but not embedded is a separate failure from absent, and is reported
// separately, because they are different mistakes: one is an oversight in
// research, the other in production.
//
// The lists come from FIGURES.md, which is six sources and a cross-reference,
// not from anybody's recollection. A list written from memory put a 1994 jungle
// record in the drum and bass canon.
//
// It walks pages.mjs, not the media directory. Walking the directory means a
// guide with no map is invisible rather than loud, which is the fault pages.mjs
// exists to prevent and which audit-keywords.mjs had for seventeen months.
import fs from 'node:fs';
import path from 'node:path';
import {pages} from './pages.mjs';

const DIR = 'media';
const failures = [];
const warnings = [];
let checked = 0, records = 0;

const text = html => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#39;|&rsquo;|’/g, "'")
  .replace(/[‐-―-]/g, ' ')
  .replace(/\s+/g, ' ')
  .toLowerCase();

// Everything that carries an embed: the src of a player, and the id we were
// given for it. A record counts as playable when its id appears inside one.
const embeds = html => (html.match(/<iframe[^>]*>/g) || []).join(' ').toLowerCase();

const maps = fs.existsSync(DIR)
  ? fs.readdirSync(DIR).filter(f => f.endsWith('.json'))
      .map(f => [f, JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'))])
  : [];

for (const guide of pages.filter(p => p.kind === 'guide')) {
  if (!maps.some(([, m]) => m.page === guide.file)) {
    failures.push(`${guide.file}: no media map in ${DIR}/. Run the six sources in FIGURES.md; a list from memory put a jungle record in the drum and bass canon`);
  }
}

{
  for (const [file, map] of maps) {
    if (!fs.existsSync(map.page)) { failures.push(`${file}: page ${map.page} does not exist`); continue; }
    const html = fs.readFileSync(map.page, 'utf8');
    const body = text(html);
    const players = embeds(html);
    checked += 1;

    for (const rec of map.required_records || []) {
      records += 1;
      const named = body.includes(rec.title.toLowerCase().replace(/[‐-―-]/g, ' '));
      const played = rec.embed_id ? players.includes(rec.embed_id.toLowerCase()) : false;
      if (!named) {
        failures.push(`${map.page}: "${rec.title}" (${rec.artist}) is required and absent — ${rec.why}`);
      } else if (rec.embed_id && !played) {
        failures.push(`${map.page}: "${rec.title}" is named but its embed is missing`);
      } else if (!rec.embed_id && !rec.no_embed_reason) {
        warnings.push(`${map.page}: "${rec.title}" is named but has no embed_id in the map`);
      }
    }

    // Gaps found by research and not yet fixed. Tracked so they are not
    // rediscovered a third time; not a build failure, because fixing published
    // copy is the owner's call.
    for (const gap of map.known_gaps || []) {
      warnings.push(`${map.page}: known gap — ${gap.title} (${gap.why})`);
    }
  }
}

// Warnings print before the exit, or a failing build hides every known gap and
// the list of things somebody still has to fix becomes invisible at the exact
// moment it matters.
for (const w of warnings) console.warn('  note: ' + w);
if (failures.length) {
  console.error('Canon audit failed:');
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log(`Canon audit passed: ${records} required record(s) across ${checked} page(s).`);
