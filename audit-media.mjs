// Media has to sit in the section it illustrates, and most sections have to
// have some.
//
// audit-site-components already required every guide to carry a figure and a
// listening band. That is a presence check, and it passed two guides that were
// two thirds empty: ten of fifteen sections with nothing in them, against one
// or two for the guides written before. Presence is not sufficiency, and a
// figure in section three does nothing for section eleven.
//
// The thresholds below are measured from this site's own guides rather than
// chosen. The worst acceptable page is the jungle guide at 47% of sections
// without media and 398 words in its longest such section; everything else sits
// at 9% to 25%. So: half the sections may be media-free, and none of them may
// run past 450 words without something to look at or listen to.
//
// What this cannot check is whether the media is the right media. A DJ set
// dropped into a section about a record satisfies the count and fails the
// reader. That judgement stays with whoever writes the page: the rule is that
// media illustrates the paragraph beside it, not the article in general.
// WRITING.md carries that rule and the reasoning behind it.
import fs from 'node:fs';
import {pages} from './pages.mjs';

// Sections that carry no argument and need no illustration: the FAQ, the
// closing note, the definition banner, the acknowledgements. Counting them as
// "missing media" made the jungle guide look like it was 47% empty when the
// figure across its actual chapters is nearer a third, and that inflated number
// was almost used to set the threshold.
const NOT_ILLUSTRATED = /faq|conclusion|shout ?outs|acknowledg|recommended resources|definition|sources/i;
const MAX_EMPTY_SHARE = 0.4;
const MAX_WORDS_WITHOUT_MEDIA = 450;

const failures = [];
let checked = 0;

const wordsIn = html => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .split(/\s+/).filter(Boolean).length;

for (const page of pages.filter(p => p.kind === 'guide')) {
  if (!fs.existsSync(page.file)) continue;
  checked += 1;
  const html = fs.readFileSync(page.file, 'utf8');
  const sections = html.split(/(?=<section class="floating-block article-section)/).slice(1);
  if (!sections.length) { failures.push(`${page.file}: no article sections found`); continue; }

  let empty = 0, counted = 0;
  for (const section of sections) {
    const heading = (section.match(/<h2[^>]*>([^<]+)/) || [, ''])[1].trim();
    if (NOT_ILLUSTRATED.test(heading)) continue;
    counted += 1;
    // a table is a visual aid as much as a photograph is
    const media = (section.match(/<iframe|<figure|<table/g) || []).length;
    if (media) continue;
    empty += 1;
    const words = wordsIn(section);
    if (words > MAX_WORDS_WITHOUT_MEDIA) {
      failures.push(`${page.file}: "${heading}" runs ${words} words with no media (max ${MAX_WORDS_WITHOUT_MEDIA})`);
    }
  }
  const share = counted ? empty / counted : 0;
  if (share > MAX_EMPTY_SHARE) {
    failures.push(`${page.file}: ${empty} of ${counted} argued sections have no media (${Math.round(share * 100)}%, max ${MAX_EMPTY_SHARE * 100}%)`);
  }
}

if (failures.length) {
  console.error(`Media audit failed (${failures.length}):`);
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log(`Media audit passed: ${checked} guide(s).`);
