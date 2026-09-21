import fs from 'node:fs';

const html = fs.readFileSync('best-spotify-playlists.html', 'utf8');
const generator = fs.readFileSync('build-best-spotify-playlists-article.mjs', 'utf8');
const count = pattern => (html.match(pattern) || []).length;
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);

const checks = {
  canonical: html.includes('<link rel="canonical" href="https://thecatrave.com/best-spotify-playlists">'),
  title: html.includes('<title>Best Spotify Playlists: 12 Human-Curated Picks</title>'),
  oneH1: count(/<h1(?:\s|>)/g) === 1,
  expectedH1: html.includes('<h1>The best Spotify playlists worth following</h1>'),
  twelveCompactPreviews: count(/class="playlist-preview-player"/g) === 12
    && count(/height="152"/g) === 12
    && !html.includes('height="420"'),
  tableLinksToEveryPlaylist: count(/<td><a href="https:\/\/open\.spotify\.com\/playlist\/[^"]+" target="_blank" rel="noopener noreferrer">[^<]+ ↗<\/a><\/td>/g) === 12,
  ownedPlaylistsPresent: html.includes('74KiWnE4fmEPigOa4SARz2')
    && html.includes('0U2HwRmau3EW1IXoRRa1JD')
    && count(/Curated by thecatrave/g) === 2,
  electronicPlacement: html.indexOf('id="electronic"') < html.indexOf('id="rare-electronic-music"')
    && html.indexOf('id="rare-electronic-music"') < html.indexOf('id="emotional-electronic-music"'),
  sharedComponent: generator.includes('articlePlaylistPreview('),
  faq: count(/<details(?: open)?>/g) === 5 && html.includes('"@type":"FAQPage"'),
  datesAgree: html.includes('article:published_time" content="2026-09-21"')
    && html.includes('article:modified_time" content="2026-09-21"')
    && html.includes('<time datetime="2026-09-21">21 September 2026</time>'),
  originalImage: fs.existsSync('img/spotify-playlists/playlist-still-life-1200.webp')
    && fs.existsSync('img/spotify-playlists/playlist-still-life-320.webp')
    && html.includes('img/spotify-playlists/playlist-still-life-1200.webp'),
  noDuplicateIds: new Set(ids).size === ids.length,
  noEmDashes: !html.includes('\u2014'),
  noLeakedNotes: !/implementation note|placeholder copy|prompt instruction/i.test(html)
};

const failures = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name);
if (failures.length) {
  console.error(`Best Spotify playlists audit failed:\n  ${failures.join('\n  ')}`);
  process.exitCode = 1;
} else {
  console.log(`Best Spotify playlists audit passed (${Object.keys(checks).length} checks).`);
}
