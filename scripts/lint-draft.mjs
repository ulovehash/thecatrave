#!/usr/bin/env node
// Lint a guide draft before the editorial review.
//
//   node scripts/lint-draft.mjs <guide>-draft.md [--sources <dir>] [--media media/<guide>.json]
//
// It catches the mechanical faults the phonk review spent most of its must-fix
// list on (phonk-editorial-review.md), so the reviewer's call goes on judgement:
// - FAIL: the site's banned phrases (audit-banned-phrases.mjs, the same rules the
//   build audits), Wikipedia named in the body, process or housekeeping notes,
//   "full"/"complete" DJ set wording, production teaching or file hand-outs.
// - WARN: dashes (the builder silently turns them into colons), stock AI words
//   and staging (the humanizer list), "every source" overclaims, and, with
//   --sources, years and quotes that appear in none of the stored source texts.
//
// --sources is the media pass's wiki-text folder (<scratchpad>/media-<guide>/wiki)
// or any folder of .txt/.md/.json source texts; --media adds the media record.
// Exit code 1 when anything FAILs. Lines are draft line numbers.
import fs from 'node:fs';
import path from 'node:path';
import {RULES} from '../audit-banned-phrases.mjs';

const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : null; };
const sourcesDir = opt('--sources');
const mediaFile = opt('--media');
const draftFile = args[0];
if (!draftFile) { console.error('usage: node scripts/lint-draft.mjs <draft.md> [--sources <dir>] [--media <record.json>]'); process.exit(2); }

const lines = fs.readFileSync(draftFile, 'utf8').split('\n');
// The Sources section, if a draft has one, may name Wikipedia; nothing after it is body.
const bodyEnd = (() => { const i = lines.findIndex(l => /^## (Sources|Further reading)\b/i.test(l)); return i < 0 ? lines.length : i; })();
const isMedia = l => /^\[(Image|Embed|Table):/.test(l);

const FAIL = [
  ['Wikipedia named in the body (ARTICLE-EDITORIAL-REVIEW.md section 0): state the fact', /\bWikipedia\b/],
  ['process or housekeeping note: cut it', /\bcould(?: not|n't) be found\b|\bno (?:upload|player|embed|video) (?:from|could|was)\b|\bwithout a player\b|\bis named here\b|\bfrom (?:the artist's|its|their|his|her) own channel\b|\bthe (?:ledger|media record|keyword file|draft)\b|\bsearch volume\b|\bKeyword Planner\b|\bAhrefs\b|\bthis (?:guide|page|article|section) (?:will|does|doesn't|did)\b/i],
  ['DJ set described as whole (WRITING.md; no "full" set)', /\b(?:full|complete|whole|entire|uninterrupted|unedited)\s+(?:DJ\s+)?(?:sets?|mix(?:es)?|recordings?|hour)\b|\bin (?:its )?full\b/i],
  ['production teaching or file hand-out (WRITING.md)', /\bsample packs?\b|\bdrum kits?\b|\bloop packs?\b|\bMIDI (?:files?|packs?|downloads?)\b|\bstems\b|\bhow to make\b|\b(?:in|using) (?:FL Studio|Ableton|Logic Pro)\b|\bsidechain\w*\b|\bchop(?:ping)? (?:the |a )?samples?\b|\bfree download\b/i],
];

const WARN = [
  ['dash (the builder turns it into a colon; choose the punctuation)', /[—–]|\s--\s/],
  ['stock AI word (humanizer §12, §16)', /\b(?:delve|tapestry|testament|pivotal|crucial|vibrant|showcas(?:es|ed|ing)|underscor\w*|enduring|intricate|meticulous\w*|fostering|garner\w*|bolster\w*|interplay|landscape|seamless\w*|boasts|nestled|renowned|breathtaking|groundbreaking)\b/i],
  ['staging (humanizer §1–§4)', /\bnot (?:just|only|merely)\b[^.]{0,80}\bbut\b|\bit(?:'s| is) not [^.,]{1,40}, it(?:'s| is)\b|^The point\b|\bThe point (?:for|is|here)\b|\bat its core\b|\bthe real question\b|\bHere's the thing\b|\bLet's\b/i],
  ['overclaim: name the sources or narrow it', /\bevery (?:account|source|history|list|guide)\b|\ball (?:accounts|sources)\b|\beveryone agrees\b|\bwidely (?:regarded|considered|seen)\b|\bthe first ever\b/i],
];

const findings = [];
const add = (level, n, rule, text) => findings.push({level, n: n + 1, rule, text: text.trim().slice(0, 140)});

lines.forEach((line, i) => {
  if (!line.trim() || isMedia(line)) return;
  const body = i < bodyEnd;
  for (const {rule, re} of RULES) if (re.test(line)) add('FAIL', i, `banned: ${rule}`, line);
  for (const [rule, re] of FAIL) if (body && re.test(line)) add('FAIL', i, rule, line);
  for (const [rule, re] of WARN) if (body && re.test(line)) add('WARN', i, rule, line);
});

// Years and quotes against the stored source texts.
if (sourcesDir || mediaFile) {
  const norm = s => s.toLowerCase().replace(/[‘’`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ');
  const files = [];
  if (sourcesDir) for (const f of fs.readdirSync(sourcesDir)) if (/\.(txt|md|json)$/.test(f)) files.push(path.join(sourcesDir, f));
  if (mediaFile) files.push(mediaFile);
  // ISO dates are check and revision stamps (the record's "checked 2026-11-10"),
  // not facts, so they must not vouch for a year in the prose.
  const corpus = norm(files.map(f => fs.readFileSync(f, 'utf8')).join('\n'))
    .replace(/\b\d{4}-\d{2}-\d{2}(?:t[\d:.]+z?)?\b/g, ' ');
  lines.slice(0, bodyEnd).forEach((line, i) => {
    if (!line.trim() || line.startsWith('#')) return;
    for (const [year] of line.matchAll(/\b(?:19[5-9]\d|20[0-3]\d)\b/g))
      if (!corpus.includes(year)) add('WARN', i, `year ${year} is in no stored source`, line);
    // Quotes of four words or more. Song titles in quotes are short and pass.
    for (const [, q] of line.matchAll(/["“]([^"”]{3,})["”]/g)) {
      if (q.trim().split(/\s+/).length < 4) continue;
      if (!corpus.includes(norm(q).replace(/[.,]$/, ''))) add('WARN', i, 'quote not found verbatim in the sources', `"${q}"`);
    }
  });
  console.log(`Checked years and quotes against ${files.length} source file(s).`);
}

for (const f of findings) console.log(`${f.level}\tL${f.n}\t${f.rule}\n\t\t${f.text}`);
const fails = findings.filter(f => f.level === 'FAIL').length;
console.log(`${draftFile}: ${fails} fail, ${findings.length - fails} warn.`);
process.exit(fails ? 1 : 0);
