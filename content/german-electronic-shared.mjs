// What the German and French German-electronic-music pages share with the
// English one (build-german-electronic-article.mjs): the same records, the
// same three photographs, the same route graphic, in the same places. Only the
// words around them change, so each language passes its captions, labels,
// graphic text and table in `text`; the ids and artwork live here once.
import {
  articleFigure, articleListeningBand, articleListeningCollection, articleTable, articleTrackEmbed,
  articleVideoCard, articleVideoCollection, ownTrackListening
} from '../site-components.mjs';
import fs from 'node:fs';
import {t} from '../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, loading = 'lazy') => articleFigure({
  src: `img/german-electronic/${name}-1200.webp`,
  srcset: `img/german-electronic/${name}-320.webp 320w, img/german-electronic/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image', loading
});

// The English graphic is a file on disk; a translation swaps its labels. Each
// English string below is the exact text of one <text>, <title> or <desc>.
const svgStrings = {
  tag: 'A schematic, not a family tree',
  title: 'German electronic music by city and era',
  desc: 'A schematic route connecting Cologne\'s electronic studio, Düsseldorf electronic pop, West Berlin sequencer music, Frankfurt techno and trance, and post-Wall Berlin techno.',
  caption: 'The line marks changing infrastructure and exchange. It does not claim that one city invented the next.'
};

export function germanElectronicMedia({lang, text}) {
  const copy = t(lang);
  const figs = text.figures;

  // The graphic: swap each label in the file, then frame it as the English page does.
  let svg = fs.readFileSync('img/german-electronic/german-scenes-route.svg', 'utf8');
  const labels = [
    ['A schematic, not a family tree', text.svg.tag],
    ['German electronic music by city and era', text.svg.title],
    [svgStrings.desc, text.svg.desc],
    [svgStrings.caption, text.svg.caption],
    ...text.svg.labels
  ];
  for (const [from, to] of labels) {
    const escaped = escapeHtml(from).replace(/&quot;/g, '"');
    const candidates = [from, escaped, from.replace(/'/g, '&#39;')];
    const found = candidates.find(candidate => svg.includes(`>${candidate}<`));
    if (!found) throw new Error(`german-scenes-route.svg has no text "${from}"`);
    svg = svg.split(`>${found}<`).join(`>${escapeHtml(to)}<`);
  }
  svg = svg
    .replace(/^<svg[^>]*>/, '<svg viewBox="0 0 1200 700" role="img" aria-labelledby="german-route-title german-route-desc">')
    .replace('<title id="title">', '<title id="german-route-title">')
    .replace('<desc id="desc">', '<desc id="german-route-desc">');

  const graphic = `<figure class="genre-map german-scene-map">${svg}<ol class="genre-map-mobile">
  ${text.mobile.map(([date, city, note]) => `<li><span>${escapeHtml(date)}</span><strong>${escapeHtml(city)}</strong><p>${escapeHtml(note)}</p></li>`).join('\n  ')}
</ol><figcaption>${escapeHtml(text.figcaption)} <a href="/img/german-electronic/german-scenes-route.png">${escapeHtml(text.figcaptionLink)}</a>.</figcaption></figure>`;

  const video = (key, youtubeId, artist, title) => articleVideoCollection({
    lang, label: text.videos[key].label, description: text.videos[key].description,
    items: [articleVideoCard({youtubeId, genre: text.videos[key].genre, artist, title})]
  });

  const klang = articleListeningBand({
    platform: 'soundcloud', id: 'klang-der-familie-german', kicker: copy.essentialListening,
    title: text.klang.title, description: text.klang.description,
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    iframeTitle: text.klang.iframeTitle, fullBleed: true, tone: 'cyan'
  });

  const routes = articleListeningCollection({
    lang, id: 'german-1990s-listening', title: text.routes.title, description: text.routes.description,
    items: [
      {artist: 'Sven Väth', title: "L'Esperanza", year: '1993', note: text.routes.notes[0],
        playerHtml: articleTrackEmbed({platform: 'spotify-album', id: '6b9yPxKdRjGJQXwXoabl3r', title: "L'Esperanza EP by Sven Väth"})},
      {artist: 'Paul van Dyk', title: 'For An Angel', year: '1994', note: text.routes.notes[1],
        playerHtml: articleTrackEmbed({platform: 'spotify', id: '2ElEFB1EjjklpSVF7YJP90', title: 'For An Angel, original mix, by Paul van Dyk'})},
      {artist: 'Basic Channel', title: 'Phylyps Trak II', year: '1994', note: text.routes.notes[2],
        playerHtml: articleTrackEmbed({platform: 'spotify-album', id: '5NmBv6Z81UjuvCxVgBXJOP', title: 'Phylyps Trak II by Basic Channel'})}
    ]
  });

  return {
    'kraftwerk-stage': figure('kraftwerk-stage', 1200, 901, figs.kraftwerk.alt, figs.kraftwerk.caption, 'eager'),
    'route-map': graphic,
    'stockhausen-wdr': figure('stockhausen-wdr', 1200, 806, figs.stockhausen.alt, figs.stockhausen.caption),
    'kraftwerk-autobahn': video('kraftwerk', 'qWkzS0Vg9hg', 'Kraftwerk', 'Autobahn'),
    'daf-mussolini': video('daf', '6bWw2bzXmY0', 'DAF', 'Der Mussolini'),
    'love-parade-1998': figure('love-parade-1998', 1200, 810, figs.loveParade.alt, figs.loveParade.caption),
    'klang-der-familie': klang,
    'berlin-race-1909': ownTrackListening('berlin-race-1909', text.own.berlin, lang),
    'no-genre-no-problem': ownTrackListening('no-genre-no-problem', text.own.noGenre, lang),
    'routes-1990s': routes,
    'scenes-table': articleTable({
      label: text.table.label,
      headers: text.table.headers,
      rows: text.table.rows.map(row => row.map(escapeHtml))
    })
  };
}
