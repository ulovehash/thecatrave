import fs from 'node:fs';

const html = fs.readFileSync('drum-and-bass-guide.html', 'utf8');
const failures = [];
const check = (name, condition, detail = '') => {
  if (!condition) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
};
const count = pattern => (html.match(pattern) || []).length;

check('One H1', count(/<h1\b/g) === 1, String(count(/<h1\b/g)));
check('Canonical URL', html.includes('<link rel="canonical" href="https://thecatrave.com/drum-and-bass-guide">'));
check('Published date', html.includes('article:published_time" content="2026-09-02"'));
check('Modified date', html.includes('article:modified_time" content="2026-09-02"'));
check('Visible updated date', html.includes('<time datetime="2026-09-02">2 September 2026</time>'));
check('Title in head', html.includes('<title>What Is Drum and Bass? History, Sound and Subgenres</title>'));

check('FAQ has five visible questions', count(/<details(?: open)?>/g) === 5, String(count(/<details(?: open)?>/g)));
check('First FAQ open', /<details open><summary>What does DnB stand for\?/.test(html));
check('FAQ schema', html.includes('"@type":"FAQPage"') && count(/"@type":"Question"/g) === 5);
const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(match => JSON.parse(match[1])).find(item => item['@type'] === 'FAQPage');
const decode = value => value
  .replace(/<[^>]+>/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');
const visibleFaq = [...html.matchAll(/<details(?: open)?><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)]
  .map(match => ({question: decode(match[1]), answer: decode(match[2])}));
const schemaFaq = faqSchema?.mainEntity?.map(item => ({question: item.name, answer: item.acceptedAnswer.text})) || [];
check('Visible FAQ matches schema', JSON.stringify(visibleFaq) === JSON.stringify(schemaFaq));

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
check('Bandcamp stripe', html.includes('article-cta article-cta-full'));
check('Two Bandcamp tracks', count(/bandcamp\.com\/EmbeddedPlayer\/track=/g) === 2);
check('Shared author card', html.includes('Article by thecatrave'));

check('Read next bass music', html.includes('href="/bass-music-guide"'));
check('Read next breakbeat', html.includes('href="/breakbeat-guide"'));
check('Read next jungle', html.includes('href="/jungle-music-guide"'));
check('Read next dubstep', html.includes('href="/dubstep-guide"'));
check('Read next UK electronic', html.includes('href="/uk-electronic-music-evolution"'));

// Internal-link architecture from the split plan: three in-body links into the jungle
// guide's fixed anchors, plus dubstep and breakbeat.
check('In-body link to jungle #myths', html.includes('href="/jungle-music-guide#myths"'));
check('In-body link to jungle #breakbeats', html.includes('href="/jungle-music-guide#breakbeats"'));
check('In-body link to jungle #revival', html.includes('href="/jungle-music-guide#revival"'));
check('In-body link to jungle #pioneers', html.includes('href="/jungle-music-guide#pioneers"'));
check('In-body link to dubstep guide', /<a href="\/dubstep-guide">/.test(html));
check('In-body link to breakbeat guide', /<a href="\/breakbeat-guide">/.test(html));

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

check('No leaked media placeholders', !/\[(?:MEDIA|EMBED|ESSENTIAL LISTENING|MEDIA IMAGE|MEDIA VIDEO|TODO)/.test(html));
check('No build notes leaked', !/Build notes|not for publication/i.test(html));
check('No em dash in visible source', !html.includes('—'));
check('Brand is lowercase', !/(?:The CatRave|TheCatRave|the cat rave)/.test(html));
check('All iframes have titles', [...html.matchAll(/<iframe\b[^>]*>/g)].every(match => /\stitle="[^"]+"/.test(match[0])));
check('All images have alt text', [...html.matchAll(/<img\b[^>]*>/g)].every(match => /\salt="[^"]+"/.test(match[0])));
check('All raster images have dimensions', [...html.matchAll(/<img\b[^>]*src="[^"]+\.(?:jpg|jpeg|png|webp)(?:\?[^" ]*)?"[^>]*>/gi)]
  .every(match => /\swidth="\d+"/.test(match[0]) && /\sheight="\d+"/.test(match[0])));
check('Responsive viewport', html.includes('name="viewport" content="width=device-width,initial-scale=1"'));

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
  console.error(`Drum and bass audit failed (${failures.length}):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Drum and bass audit passed.');
