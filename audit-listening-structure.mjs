// Reject the listening-section ladder that turns one editorial idea into a
// generic H2, a disposable setup line, repeated artist H3s and separate cyan
// panels. Run against every registered guide, including translations.
import fs from 'node:fs';
import * as cheerio from 'cheerio';
import {pages} from './pages.mjs';

const failures = [];
const genericHeading = /^(listen|listening|essential listening|zum reinhören|zum weiterhören|anhören|à écouter|écouter)[.!:]?$/iu;

for (const page of pages.filter(page => page.kind === 'guide')) {
  const $ = cheerio.load(fs.readFileSync(page.file, 'utf8'));
  $('section.article-section').each((_, sectionElement) => {
    const section = $(sectionElement);
    const id = section.attr('id') || '(no id)';
    const heading = section.children('h2').first().text().trim();
    if (genericHeading.test(heading)) {
      failures.push(`${page.file}#${id}: generic listening H2 "${heading}"`);
    }

    const children = section.children().toArray();
    const firstSubheading = children.findIndex(child => child.tagName === 'h3');
    const leadWords = (firstSubheading < 0 ? children : children.slice(0, firstSubheading))
      .filter(child => child.tagName === 'p' && !$(child).hasClass('era-years'))
      .map(child => $(child).text().trim())
      .join(' ')
      .split(/\s+/)
      .filter(Boolean).length;

    let artistPanelSequences = 0;
    for (let index = 0; index < children.length; index += 1) {
      if (children[index].tagName !== 'h3') continue;
      const next = children[index + 1];
      const afterNext = children[index + 2];
      if (next && $(next).is('aside.listening-block')) artistPanelSequences += 1;
      if (next?.tagName === 'p' && afterNext && $(afterNext).is('aside.listening-block')) artistPanelSequences += 1;
    }
    if (artistPanelSequences >= 2 && leadWords <= 25) {
      failures.push(`${page.file}#${id}: ${artistPanelSequences} repeated artist-heading/listening-panel sequences after only ${leadWords} lead words`);
    }
  });
}

if (failures.length) {
  console.error(`Listening structure audit failed (${failures.length}):\n${failures.map(failure => `- ${failure}`).join('\n')}`);
  process.exit(1);
}

console.log(`Listening structure audit passed (${pages.filter(page => page.kind === 'guide').length} guides).`);
