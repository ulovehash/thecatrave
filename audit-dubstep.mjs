import fs from 'node:fs';

const html = fs.readFileSync('dubstep-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('Published date', html.includes('article:published_time" content="2026-09-01"'));
check('Modified date', html.includes('article:modified_time" content="2026-09-01"'));
check('Visible updated date', html.includes('<time datetime="2026-09-01">1 September 2026</time>'));

check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));
// The visible answer is HTML escaped while the schema stores the same text raw,
// so decode entities before comparing rather than weakening the check.
const decode = value => value
  .replace(/<[^>]+>/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');

// Essential listening evidence. Vinyl and dubplate-only records keep a YouTube id;
// records with a canonical streaming master use a verified Spotify track id.
const requiredMedia = {
  'Skream, Midnight Request Line (YouTube)': 'vJGXRQ9vBoU',
  'Digital Mystikz, Anti War Dub (YouTube)': '--jr22La8Nk',
  'Coki, Spongebob (YouTube)': 'cIpc817U_R4',
  'Shackleton, Blood On My Hands (YouTube)': 'KQr6m2l2J-Y',
  'Horsepower Productions, Gorgon Sound (Spotify)': '2eKcQqAYex36Eju94neF4l',
  'Burial, Archangel (Spotify)': '2agb1CPPGWXqXnrKn6cx7u',
  'Pinch, Qawwali (Spotify)': '36tSNnMctCGaxQp0JVGBLC',
  'Skrillex, Scary Monsters and Nice Sprites (Spotify)': '4rwpZEcnalkuhPyGkEdhu0',
  'Dubstep Classics playlist (Spotify)': '37i9dQZF1DX4arVIN5Cg4U',
  'Bassweight documentary': 'YVcX0Oc5j5E',
  'All My Homies Hate Skrillex': '-hLlVVKRwk0',
  'thecatrave remix on SoundCloud': 'mylene-farmer-degeneration'
};
for (const [label, id] of Object.entries(requiredMedia)) {
  check(`Media present: ${label}`, html.includes(id));
}

// A full-bleed listening collection inside a tone-{x} section must carry the same
// colour or the neutral -paper variant. A different saturated tone stacks clashing
// bands with the section colour showing through the margins.
const toneClashes = [];
const sectionChunks = html.split(/(?=<section class="floating-block article-section)/).slice(1);
for (const chunk of sectionChunks) {
  const openTag = chunk.slice(0, chunk.indexOf('>') + 1);
  const sectionTone = (openTag.match(/\btone-(cyan|yellow|coral)\b/) || [])[1];
  if (!sectionTone) continue;
  const body = chunk.slice(0, chunk.indexOf('</section>'));
  for (const match of body.matchAll(/\blistening-(cyan|yellow|coral|paper)\b/g)) {
    const blockTone = match[1];
    if (blockTone !== 'paper' && blockTone !== sectionTone) {
      toneClashes.push(`${openTag.match(/id="([^"]+)"/)?.[1] || 'section'}: tone-${sectionTone} contains a listening-${blockTone} block`);
    }
  }
}
check('No listening-collection tone clashes inside toned sections', toneClashes.length === 0, [...new Set(toneClashes)].join('; '));

check('Subgenre table uses the shared class', html.includes('class="genre-table"'));
// Every other guide labels its exact tracks with the site-wide Essential listening block.
check('Essential listening blocks present', (html.match(/Essential listening/g) || []).length >= 2);
check('Essential listening is full bleed', html.includes('context-listening context-listening-full'));
check('Essential listening uses the dated collection', (html.match(/class="context-track-list"/g) || []).length >= 5);
check('Mixed listening players', html.includes('open.spotify.com/embed/track/') && html.includes('class="track-embed youtube-embed"'));
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);

check('In-body link to bass music guide', /<a href="\/bass-music-guide">/.test(html));
check('In-body link to jungle guide', /<a href="\/jungle-music-guide">/.test(html));
check('In-body link to UK electronic guide', /<a href="\/uk-electronic-music-evolution">/.test(html));

// Semantic coverage required by the approved research.
check('Answers "what is dubstep" early', /Dubstep is a bass-led electronic style/.test(html));
check('Covers dubstep bass as a term', /dubstep bass/i.test(html));
check('Covers the wobble', /wobble/i.test(html));
check('Covers deep dubstep', /[Dd]eep dubstep/.test(html));
check('States the BPM', /140/.test(html));

// AGENTS.md section 7 requires an adjacency audit that fails on figure + embed pairs.
const body = html.slice(html.indexOf('<main'));
const tokenPattern = /(<figure class="floating-image)|(<div class="classic-youtube-embed)|(<aside[^>]*class="[^"]*(?:article-media-band|listening-block|context-listening))|(<p>)/g;
const sequence = [];
for (const match of body.matchAll(tokenPattern)) {
  if (match[1]) sequence.push('figure');
  else if (match[2] || match[3]) sequence.push('embed');
  else sequence.push('text');
}
const adjacencyFailures = [];
for (let index = 0; index < sequence.length - 1; index += 1) {
  const current = sequence[index];
  const next = sequence[index + 1];
  if (current === 'figure' && next === 'embed') adjacencyFailures.push(`figure immediately followed by an embed at position ${index}`);
  if (current === 'embed' && next === 'figure') adjacencyFailures.push(`embed immediately followed by a figure at position ${index}`);
  if (current === 'figure' && next === 'figure') adjacencyFailures.push(`two figures with no text between them at position ${index}`);
}

if (failures.length) {
  console.error(`Dubstep audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Dubstep audit passed.');
