import fs from 'node:fs';

const specs = [
  {
    file:'best-soundcloud-dj-mixes.html', generator:'build-best-soundcloud-dj-mixes-article.mjs',
    canonical:'https://thecatrave.com/best-soundcloud-dj-mixes', h1:'The best SoundCloud DJ mixes worth hearing',
    selector:/class="article-embed soundcloud-inline-embed"/g, count:9,
    ids:['recognise-081-wata-igarashi','recognise-096-ogazon','dekmantel-podcast-267-djrum','dekmantel-podcast-285-sherelle','i-like-to-smoke-in-silence-after-raves']
  },
  {
    file:'best-techno-mixes.html', generator:'build-best-techno-mixes-article.mjs',
    canonical:'https://thecatrave.com/best-techno-mixes', h1:'The best techno mixes, from Detroit to now',
    selector:/class="track-entry"/g, count:10,
    ids:['9SuKJ-dbmbg','S2UORWQz_7k','jOVB05K9GPU','rTtVMHFlwoM']
  },
  {
    file:'best-house-music-playlists-spotify.html', generator:'build-best-house-music-playlists-spotify-article.mjs',
    canonical:'https://thecatrave.com/best-house-music-playlists-spotify', h1:'The best house music playlists on Spotify',
    selector:/class="playlist-preview"/g, count:12,
    ids:['37i9dQZF1DWTU3Zl0elDUa','6J1r02xyO2qkMA9dDNZytJ','2wSNKxLM217jpZnkAgYZPH','4ac1R7BdsmDVK78bv3YAOT','74KiWnE4fmEPigOa4SARz2','0U2HwRmau3EW1IXoRRa1JD']
  }
];

const failures = [];
for (const spec of specs) {
  const html = fs.readFileSync(spec.file, 'utf8');
  const source = fs.readFileSync(spec.generator, 'utf8');
  const check = (name, condition) => { if (!condition) failures.push(`${spec.file}: ${name}`); };
  check('canonical', html.includes(`<link rel="canonical" href="${spec.canonical}">`));
  check('H1', html.includes(`<h1>${spec.h1}</h1>`));
  check(`exactly ${spec.count} recommendations`, (html.match(spec.selector) || []).length === spec.count);
  check('exact media IDs', spec.ids.every(id => html.includes(id)));
  check('shared page components', ['articlePage({','articleHero({','articleSection({','articleSources({','authorCard({','bandcampSupport({','readNext({'].every(token => source.includes(token)));
  check('no FAQ schema without visible FAQ', !html.includes('"@type":"FAQPage"') && !html.includes('faq-section'));
  check('one H1', (html.match(/<h1(?:\s|>)/g) || []).length === 1);
  check('no duplicate IDs', (() => { const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]); return ids.length === new Set(ids).size; })());
  check('no em dash', !html.includes('—'));
  check('no placeholders', !/\[(?:Embed|MEDIA|TODO):?/.test(html));
  const modified = '2026-10-08';
  const dateLabel = '8 October 2026';
  check('dates agree', html.includes('article:published_time" content="2026-09-29"') && html.includes(`article:modified_time" content="${modified}"`) && html.includes(`<time datetime="${modified}">${dateLabel}</time>`));
}
const house = fs.readFileSync('best-house-music-playlists-spotify.html', 'utf8');
if ((house.match(/class="playlist-preview-player"[^>]*height="152"/g) || []).length !== 12) failures.push('best-house-music-playlists-spotify.html: compact 152px players');
if ((house.match(/class="playlist-preview-owned"/g) || []).length !== 2) failures.push('best-house-music-playlists-spotify.html: two ownership disclosures');

if (failures.length) {
  console.error(`Listening-guide audit failed:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log('Listening-guide audit passed (3 pages, 31 exact recommendations).');
