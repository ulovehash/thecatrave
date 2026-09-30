// What the German and French "how to find new music" pages share with the
// English one (build-find-new-music-article.mjs): the same stations and sets,
// the same Spotify show, the same two diagrams and the same photograph, in the
// same places. Only the words around them change, so each language passes its
// captions, diagram labels and table in `text`; the ids and artwork live here
// once.
import fs from 'node:fs';
import {
  articleFigure, articleListeningBand, articleTable, articleTrackEmbed,
  articleVideoCard, articleVideoCollection, ownTrackListening
} from '../site-components.mjs';
import {t} from '../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Each diagram is a file on disk whose <text> strings are English; a
// translation swaps them and writes <name>.<lang>.svg beside it, which the page
// references like the English file. A string missing from the file fails the
// build, and so does a <text> the translation forgot.
function diagram(name, lang, labels) {
  let svg = fs.readFileSync(`img/find-new-music/${name}.svg`, 'utf8');
  const strings = [...svg.matchAll(/<text[^>]*>([^<]*)</g)].map(match => match[1]);
  const missing = strings.filter(string => !labels.some(([from]) => from === string));
  if (missing.length) throw new Error(`${name}.svg: no translation for ${missing.join(' | ')}`);
  for (const [from, to] of labels) {
    if (!svg.includes(`>${from}<`)) throw new Error(`${name}.svg has no text "${from}"`);
    svg = svg.split(`>${from}<`).join(`>${escapeHtml(to)}<`);
  }
  const out = `img/find-new-music/${name}.${lang}.svg`;
  fs.writeFileSync(out, svg);
  return out;
}

export function findNewMusicMedia({lang, text}) {
  const copy = t(lang);
  const videos = text.videos;

  const figure = (name, labels, width, height, alt, caption) => articleFigure({
    src: diagram(name, lang, labels), width, height, alt, caption, className: 'wide-archive-image'
  });

  return {
    'methods-table': articleTable({headers: text.table.headers, rows: text.table.rows.map(row => row.map(escapeHtml))}),
    'stations-videos': articleVideoCollection({
      lang, label: videos.stations.label, description: videos.stations.description,
      items: [
        articleVideoCard({youtubeId: 'nzvLiwUK3R8', genre: 'NTS RADIO', artist: 'Aphex Twin', title: 'Live at Field Day'}),
        articleVideoCard({youtubeId: '1wk3uOxQ5F4', genre: 'RINSE FM', artist: 'P Money and D Double E', title: 'Rinse FM'}),
        articleVideoCard({youtubeId: 't1IDxfnENvk', genre: 'THE LOT RADIO', artist: 'Adam Port', title: 'The Lot Radio, Brooklyn'})
      ]
    }),
    'small-stations-videos': articleVideoCollection({
      lang, label: videos.small.label, description: videos.small.description,
      items: [
        articleVideoCard({youtubeId: 'kumeF99xnoM', genre: 'KIOSK RADIO', artist: 'Acid Arab', title: 'Kiosk Radio, Brussels'}),
        articleVideoCard({youtubeId: 'a1don952lRk', genre: 'SEOUL COMMUNITY RADIO', artist: 'Vladimir Cauchemar', title: 'Seoul Community Radio'}),
        articleVideoCard({youtubeId: '3PxqtjIRcMA', genre: 'MANILA COMMUNITY RADIO', artist: 'Perception Is Real', title: 'Manila Community Radio'})
      ]
    }),
    'radio-spotify': articleListeningBand({
      platform: 'spotify', id: 'find-new-music-radio', kicker: copy.essentialListening,
      title: text.radioBand.title, description: text.radioBand.description,
      src: 'https://open.spotify.com/embed/show/2BOLPpDNlSjFrjrTJdOMSb?utm_source=generator',
      iframeTitle: text.radioBand.iframeTitle, fullBleed: true, tone: 'cyan'
    }),
    'selector-card': articleFigure({
      src: 'img/og/selector.jpg', srcset: 'img/og/selector.jpg 1200w', width: 1200, height: 630,
      alt: text.selector.alt, caption: text.selector.caption, className: 'wide-archive-image'
    }),
    'producer-diagram': figure('producer-graph', text.producerLabels, 1000, 420, text.producerFigure.alt, text.producerFigure.caption),
    'own-track': ownTrackListening('no-genre-no-problem', text.own, lang),
    'record-shop': articleFigure({
      src: 'img/find-new-music/record-store-1200.webp',
      srcset: 'img/find-new-music/record-store-320.webp 320w, img/find-new-music/record-store-1200.webp 1200w',
      width: 1200, height: 800, alt: text.shop.alt, caption: text.shop.caption, className: 'wide-archive-image'
    }),
    'bandcamp-example': articleTrackEmbed({
      platform: 'bandcamp', id: '3822639635',
      url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', title: 'Protect Ya Breaks by thecatrave'
    }),
    'loop-diagram': figure('taste-loop', text.loopLabels, 1000, 460, text.loopFigure.alt, text.loopFigure.caption)
  };
}
