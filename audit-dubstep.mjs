import fs from 'node:fs';

const html = fs.readFileSync('dubstep-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('One H1', count(/<h1\b/g) === 1, String(count(/<h1\b/g)));
check('Canonical URL', html.includes('<link rel="canonical" href="https://thecatrave.com/dubstep-guide">'));
check('Published date', html.includes('article:published_time" content="2026-09-01"'));
check('Modified date', html.includes('article:modified_time" content="2026-09-01"'));
check('Visible updated date', html.includes('<time datetime="2026-09-01">1 September 2026</time>'));

check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));
check('First FAQ open', /<details open><summary>Is dubstep EDM\?/.test(html));
check('FAQ schema', html.includes('"@type":"FAQPage"') && count(/"@type":"Question"/g) === 5);
const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1])).find(item => item['@type'] === 'FAQPage');
// The visible answer is HTML escaped while the schema stores the same text raw,
// so decode entities before comparing rather than weakening the check.
const decode = value => value
  .replace(/<[^>]+>/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');
const visibleFaq = [...html.matchAll(/<details(?: open)?><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)]
  .map(match => ({question: decode(match[1]), answer: decode(match[2])}));
const schemaFaq = faqSchema?.mainEntity?.map(item => ({question: item.name, answer: item.acceptedAnswer.text})) || [];
check('Visible FAQ matches schema', JSON.stringify(visibleFaq) === JSON.stringify(schemaFaq));

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

check('Subgenre table uses the shared class', html.includes('class="genre-table"'));
// Every other guide labels its exact tracks with the site-wide Essential listening block.
check('Essential listening blocks present', (html.match(/Essential listening/g) || []).length >= 2);
check('Essential listening is full bleed', html.includes('context-listening context-listening-full'));
check('Essential listening uses the dated collection', (html.match(/class="context-track-list"/g) || []).length >= 5);
check('Mixed listening players', html.includes('open.spotify.com/embed/track/') && html.includes('class="track-embed youtube-embed"'));
check('Bandcamp stripe', html.includes('article-cta article-cta-full'));
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);
check('Shared author card', html.includes('Article by thecatrave'));

check('Read next bass music', html.includes('href="/bass-music-guide"'));
check('Read next breakbeat', html.includes('href="/breakbeat-guide"'));
check('Read next jungle', html.includes('href="/jungle-music-guide"'));
check('Read next UK electronic', html.includes('href="/uk-electronic-music-evolution"'));
check('In-body link to bass music guide', /<a href="\/bass-music-guide">/.test(html));
check('In-body link to breakbeat guide', /<a href="\/breakbeat-guide">/.test(html));
check('In-body link to jungle guide', /<a href="\/jungle-music-guide">/.test(html));
check('In-body link to UK electronic guide', /<a href="\/uk-electronic-music-evolution">/.test(html));

// Semantic coverage required by the approved research.
check('Answers "what is dubstep" early', /Dubstep is a bass-led electronic style/.test(html));
check('Covers dubstep bass as a term', /dubstep bass/i.test(html));
check('Covers the wobble', /wobble/i.test(html));
check('Covers deep dubstep', /[Dd]eep dubstep/.test(html));
check('States the BPM', /140/.test(html));

check('No leaked media placeholders', !/\[(?:MEDIA|EMBED|ESSENTIAL LISTENING|MEDIA IMAGE|MEDIA VIDEO)/.test(html));
check('No build notes leaked', !/Build notes|not for publication/i.test(html));
check('No em dash in visible source', !html.includes('—'));
check('Brand is lowercase', !/(?:The CatRave|TheCatRave|the cat rave)/.test(html));
check('All iframes have titles', [...html.matchAll(/<iframe\b[^>]*>/g)].every(match => /\stitle="[^"]+"/.test(match[0])));
check('All images have alt text', [...html.matchAll(/<img\b[^>]*>/g)].every(match => /\salt="[^"]+"/.test(match[0])));
check('All raster images have dimensions', [...html.matchAll(/<img\b[^>]*src="[^"]+\.(?:jpg|jpeg|png|webp)(?:\?[^" ]*)?"[^>]*>/gi)]
  .every(match => /\swidth="\d+"/.test(match[0]) && /\sheight="\d+"/.test(match[0])));
check('Responsive viewport', html.includes('name="viewport" content="width=device-width,initial-scale=1"'));

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
check('Media adjacency rhythm', adjacencyFailures.length === 0, adjacencyFailures.join('; '));

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
check('No duplicate IDs', duplicates.length === 0, [...new Set(duplicates)].join(', '));

const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
const missingAnchors = anchors.filter(anchor => !ids.includes(anchor));
check('All internal anchors resolve', missingAnchors.length === 0, missingAnchors.join(', '));

const localSrcs = [...html.matchAll(/(?:src|href)="((?:img\/)[^"]+)"/g)].map(match => match[1].split('?')[0]);
check('Local assets exist', localSrcs.every(src => fs.existsSync(src)), localSrcs.filter(src => !fs.existsSync(src)).join(', '));

if (failures.length) {
  console.error(`Dubstep audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Dubstep audit passed.');
