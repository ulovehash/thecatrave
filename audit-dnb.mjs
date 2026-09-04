import fs from 'node:fs';

const html = fs.readFileSync('drum-and-bass-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('Published date', html.includes('article:published_time" content="2026-09-02"'));
check('Modified date', html.includes('article:modified_time" content="2026-09-02"'));
check('Visible updated date', html.includes('<time datetime="2026-09-02">2 September 2026</time>'));
check('Title in head', html.includes('<title>What Is Drum and Bass? History, Sound and Subgenres</title>'));

check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));

// Essential listening evidence. Exact records use a verified YouTube upload of the
// original; the extended route is one official Spotify playlist.
const requiredMedia = {
  'M-Beat feat. General Levy, Incredible (YouTube)': 'GDwNn8bJ2CQ',
  'Goldie, Inner City Life (YouTube)': 'i-P98B2skts',
  'Dillinja, The Angels Fell (YouTube)': '0wWTqipgm2I',
  'Doc Scott, Shadow Boxing (YouTube)': '7Z-6e3zIE2k',
  'LTJ Bukem, Music (YouTube)': 'hp8DkZyE9h8',
  'Calibre, Mystic (YouTube)': 'yenh56lBQoU',
  'Alex Reece, Pulp Fiction (Spotify)': '4bsF2ZJgmq2JiDfyIV3CaX',
  'Roni Size and Reprazent, Brown Paper Bag (Spotify)': '3ZQs8RHO3lPZoUwpavPENL',
  'Noisia, Machine Gun (Spotify)': '6s9XbbtulHcMwMDzsyoEO7',
  'DJ Marky and XRS, LK (Spotify)': '1fIZzCIwKKGBRDkLA8VukW',
  'Nia Archives, Silence Is Loud (Spotify)': '1LqFMtMW44W8XQ1OtV43gg',
  'Massive Drum & Bass playlist (Spotify)': '37i9dQZF1DX5wDmLW735Yd'
};
for (const [label, id] of Object.entries(requiredMedia)) {
  check(`Media present: ${label}`, html.includes(id));
}

// A full-bleed listening collection inside a tone-{x} section must carry the same
// colour or the neutral -paper variant.
const toneClashes = [];
const sectionChunks = html.split(/(?=<section class="floating-block article-section)/).slice(1);
for (const chunk of sectionChunks) {
  const openTag = chunk.slice(0, chunk.indexOf('>') + 1);
  const sectionTone = (openTag.match(/\btone-(cyan|yellow|coral)\b/) || [])[1];
  if (!sectionTone) continue;
  const sectionBody = chunk.slice(0, chunk.indexOf('</section>'));
  for (const match of sectionBody.matchAll(/\blistening-(cyan|yellow|coral|paper)\b/g)) {
    const blockTone = match[1];
    if (blockTone !== 'paper' && blockTone !== sectionTone) {
      toneClashes.push(`${openTag.match(/id="([^"]+)"/)?.[1] || 'section'}: tone-${sectionTone} contains a listening-${blockTone} block`);
    }
  }
}
check('No listening-collection tone clashes inside toned sections', toneClashes.length === 0, [...new Set(toneClashes)].join('; '));

check('Subgenre table uses the shared class', html.includes('class="genre-table"'));
check('Essential listening blocks present', (html.match(/Essential listening/g) || []).length >= 5);
check('Essential listening is full bleed', html.includes('context-listening context-listening-full'));
check('Essential listening uses the dated collection', (html.match(/class="context-track-list"/g) || []).length === 6);
check('Extended playlist present', html.includes('open.spotify.com/embed/playlist/'));
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);

check('Read next dubstep', html.includes('href="/dubstep-guide"'));

// Internal-link architecture from the split plan: three in-body links into the jungle
// guide's fixed anchors, plus dubstep and breakbeat.
check('In-body link to jungle #myths', html.includes('href="/jungle-music-guide#myths"'));
check('In-body link to jungle #breakbeats', html.includes('href="/jungle-music-guide#breakbeats"'));
check('In-body link to jungle #revival', html.includes('href="/jungle-music-guide#revival"'));
check('In-body link to jungle #pioneers', html.includes('href="/jungle-music-guide#pioneers"'));
check('In-body link to dubstep guide', /<a href="\/dubstep-guide">/.test(html));

// Semantic coverage required by the approved research.
check('Answers "what is drum and bass" early', /Drum and bass is a British electronic style/.test(html));
check('States the BPM', /174/.test(html));
check('Covers the mid-1990s split', /jungle became|jungle turned into|the split/i.test(html));
check('Covers Metalheadz', /Metalheadz/.test(html));
check('Covers techstep', /techstep/i.test(html));
check('Covers neurofunk', /neurofunk/i.test(html));
check('Covers liquid', /liquid/i.test(html));
check('Covers jump-up', /jump-up/i.test(html));
check('Covers the Mercury Prize', /Mercury Prize/.test(html));
check('Covers the resurgence', /Nia Archives/.test(html) && /resurgence/i.test(html));
check('DnB abbreviation represented', /DnB/.test(html));

// AGENTS.md section 7 adjacency audit: no figure touching an embed or another figure.
const mainBody = html.slice(html.indexOf('<main'));
const tokenPattern = /(<figure class="floating-image)|(<div class="classic-youtube-embed)|(<aside[^>]*class="[^"]*(?:article-media-band|listening-block|context-listening))|(<p>)/g;
const sequence = [];
for (const match of mainBody.matchAll(tokenPattern)) {
  if (match[1]) sequence.push('figure');
  else if (match[2] || match[3]) sequence.push('embed');
  else sequence.push('text');
}
const adjacencyFailures = [];
for (let index = 0; index < sequence.length - 1; index += 1) {
  const current = sequence[index];
  const next = sequence[index + 1];
  if (current === 'figure' && next === 'embed') adjacencyFailures.push(`figure then embed at ${index}`);
  if (current === 'embed' && next === 'figure') adjacencyFailures.push(`embed then figure at ${index}`);
  if (current === 'figure' && next === 'figure') adjacencyFailures.push(`two figures with no text at ${index}`);
}

const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);

if (failures.length) {
  console.error(`Drum and bass audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Drum and bass audit passed.');
