// German "best DJ sets of all time" guide. The thirty players are the English
// page's (build-best-dj-sets-of-all-time-article.mjs), with the same IDs and the
// same set-* anchors, so links into the English page's entries also work here.
// The German draft is de/best-dj-sets-of-all-time-draft.md; each entry places
// its player with an [Embed: player-*] line where the English page renders it,
// after the note. The summary banner is the draft's "Antwort" section.
import {articleTrackEmbed, articleYoutubeEmbed} from '../../site-components.mjs';

const yt = id => ['youtube', id];
const sc = path => ['soundcloud', `https%3A//soundcloud.com/${path}`];
const mc = path => ['mixcloud', `https://www.mixcloud.com/${path}`];

// key, English heading label (gives the anchor), German label (player title), player
const players = [
  ['marshall-jefferson', 'Marshall Jefferson, The Lab NYC, Mixmag, 2015', 'Marshall Jefferson, The Lab NYC, Mixmag, 2015', yt('7cuTVGoi9ec')],
  ['todd-terry', 'Todd Terry, The Lab London, Mixmag, 2013', 'Todd Terry, The Lab London, Mixmag, 2013', yt('3NrREoqmHNA')],
  ['louie-vega', 'Louie Vega, DJ Mag HQ, 2018', 'Louie Vega, DJ Mag HQ, 2018', yt('Drk4mfQa4f0')],
  ['kerri-chandler', 'Kerri Chandler, Mixmag Live, 2017', 'Kerri Chandler, Mixmag Live, 2017', yt('8x7n6KDfseI')],
  ['theo-parrish', 'Theo Parrish, Boiler Room #29, 2010', 'Theo Parrish, Boiler Room #29, 2010', sc('platform/br-29-theo-parrish')],
  ['dj-jazzy-jeff', 'DJ Jazzy Jeff, Boiler Room Philadelphia, 2017', 'DJ Jazzy Jeff, Boiler Room Philadelphia, 2017', yt('IvPdwoppGw4')],
  ['black-coffee', 'Black Coffee, Mixmag Live London, 2015', 'Black Coffee, Mixmag Live London, 2015', yt('wamL0A9Qzxg')],
  ['solomun', 'Solomun and Kollektiv Turmstrasse, Diynamic ADE showcase, Mixmag, 2014', 'Solomun und Kollektiv Turmstrasse, Diynamic-Showcase beim ADE, Mixmag, 2014', yt('i7Zstp8jlgo')],
  ['honey-dijon', 'Honey Dijon, The Lab Miami, Mixmag, 2016', 'Honey Dijon, The Lab Miami, Mixmag, 2016', yt('SP_hVmD3yI4')],
  ['black-madonna', 'The Black Madonna, DJ Mag Pool Party Miami, 2018', 'The Black Madonna, DJ Mag Pool Party Miami, 2018', yt('SS58vs5WtGE')],
  ['dixon', 'Dixon, Cercle Festival, Ariane stage, 2024', 'Dixon, Cercle Festival, Ariane-Bühne, 2024', yt('8ClF-beNXII')],
  ['carl-craig', 'Carl Craig, Detroit Classics set, Mixmag Live, 2012', 'Carl Craig, Detroit-Classics-Set, Mixmag Live, 2012', yt('W7Lnhe2-Ea0')],
  ['joey-beltram', 'Joey Beltram, The Lab NYC, Mixmag, 2018', 'Joey Beltram, The Lab NYC, Mixmag, 2018', yt('H4OqblkR-vA')],
  ['sven-vath', 'Sven Väth, Time Warp 2D2S, 2023', 'Sven Väth, Time Warp 2D2S, 2023', yt('jAb-PeSB-kk')],
  ['nina-kraviz', 'Nina Kraviz, Time Warp, 2017', 'Nina Kraviz, Time Warp, 2017', yt('o5emoqTlYOk')],
  ['adam-beyer', 'Adam Beyer, Awakenings Day One, 2016', 'Adam Beyer, Awakenings Day One, 2016', yt('oyTzPIv2ZgE')],
  ['tale-of-us', 'Tale of Us, Time Warp, 2016', 'Tale of Us, Time Warp, 2016', yt('akdDY6PCBBM')],
  ['charlotte-de-witte', 'Charlotte de Witte, The Lab NYC, Mixmag, 2020', 'Charlotte de Witte, The Lab NYC, Mixmag, 2020', yt('Q9dzq_SWd3k')],
  ['cox-space', 'Carl Cox, Space Ibiza residency farewell, Global 700, 2016', 'Carl Cox, Abschied von der Space-Residency auf Ibiza, Global 700, 2016', mc('CarlCox/carl-cox-global-live-from-space-ibiza-the-final-chapter-global-700-part-1/')],
  ['four-tet-floating-points', 'Four Tet and Floating Points, the last night at Plastic People, 2015', 'Four Tet und Floating Points, die letzte Nacht im Plastic People, 2015', sc('floatingpoints/floating-points-four-tet-final-plastic-people-2-1-2015')],
  ['cox-fatboy', 'Carl Cox b2b Fatboy Slim, Saatchi Gallery, Mixmag, 2019', 'Carl Cox b2b Fatboy Slim, Saatchi Gallery, Mixmag, 2019', yt('JL3b_fewO08')],
  ['john-digweed', 'John Digweed, Time Warp, floor 1, 2014', 'John Digweed, Time Warp, Floor 1, 2014', yt('ly-W-JvWc3Y')],
  ['seth-troxler', 'Seth Troxler, Time Warp, floor 4, 2014', 'Seth Troxler, Time Warp, Floor 4, 2014', yt('e_TluqmgXuM')],
  ['fatboy-i360', 'Fatboy Slim, Cercle, Brighton i360, 2018', 'Fatboy Slim, Cercle, Brighton i360, 2018', yt('8AvC05kXS9I')],
  ['fabio-grooverider', 'Fabio and Grooverider, DJ Mag HQ, 2015', 'Fabio und Grooverider, DJ Mag HQ, 2015', yt('Ehi2-SFYhzg')],
  ['dj-randall', 'DJ Randall, history of jungle set, The Lab London, Mixmag, 2016', 'DJ Randall, Jungle-Geschichte, The Lab London, Mixmag, 2016', yt('UgK8h9xRFls')],
  ['goldie-ulterior-motive', 'Goldie and Ulterior Motive, The Lab London, Mixmag, 2017', 'Goldie und Ulterior Motive, The Lab London, Mixmag, 2017', yt('dXxDphoxf4g')],
  ['ben-ufo', 'Ben UFO, The Lot Radio, 2020', 'Ben UFO, The Lot Radio, 2020', yt('ECQwhbX4-H0')],
  ['rashad-spinn', 'DJ Rashad and DJ Spinn, XLR8R Podcast 158, 2010', 'DJ Rashad und DJ Spinn, XLR8R Podcast 158, 2010', mc('xlr8r/podcast-158-dj-rashad-dj-spinn/')],
  ['skream', 'Skream, Alter Ego, UK garage, Mixmag, 2015', 'Skream, Alter Ego, UK Garage, Mixmag, 2015', yt('ZjRTmeJVo9o')]
];

// The English generator's anchor rule, so each entry keeps its English id.
const setAnchor = label => `set-${label.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
const anchorOf = Object.fromEntries(players.map(([key, english]) => [key, setAnchor(english)]));
const group = keys => keys.map(key => anchorOf[key]);

function media() {
  const out = {};
  for (const [key, , label, [platform, ref]] of players) {
    const player = platform === 'youtube'
      ? articleYoutubeEmbed({src: `https://www.youtube-nocookie.com/embed/${ref}`, title: label})
      : articleTrackEmbed({platform, url: ref, title: label});
    // The English page keeps an older anchor for the Space entry.
    const legacy = key === 'cox-space' ? '<a id="set-carl-cox-space-ibiza-closing-global-700-2016" aria-hidden="true"></a>' : '';
    out[`player-${key}`] = `${legacy}${player}`;
  }
  return out;
}

export default {
  lang: 'de',
  name: 'de-best-dj-sets-of-all-time',
  file: 'de/beste-dj-sets.html',
  draft: 'de/best-dj-sets-of-all-time-draft.md',
  canonical: 'https://thecatrave.com/de/beste-dj-sets',
  englishPath: '/best-dj-sets-of-all-time',
  ogImage: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg',
  image: 'https://thecatrave.com/img/og/best-dj-sets-of-all-time.jpg',
  bodyClass: 'article-page best-dj-sets-page',

  title: 'Die besten DJ-Sets aller Zeiten: 30 zum Anhören',
  description: 'Die besten DJ-Sets aller Zeiten, von Carl Cox im Space und Black Coffee bis Tale of Us, Skream und Fabio und Grooverider, jeweils als offizielle Aufnahme.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'DJ-Sets',
  heroTitle: 'Die besten DJ-Sets aller Zeiten',
  deck: 'Four Tet und Floating Points im Plastic People, Black Coffee in London, der Footwork von Rashad und Spinn und weitere Aufnahmen zum Entdecken.',
  answerLabel: 'Beste DJ-Sets aller Zeiten',
  breadcrumbName: 'Beste DJ-Sets aller Zeiten',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Set zum Anfangen.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Die besten DJ-Sets: FAQ.',
  minReadingMinutes: 8,

  sections: [
    {id: 'house-origins', heading: 'House: Chicago, New York und Detroit', tocLabel: 'House: Chicago, New York, Detroit', subsections: group(['marshall-jefferson', 'todd-terry', 'louie-vega', 'kerri-chandler', 'theo-parrish', 'dj-jazzy-jeff'])},
    {id: 'house-now', heading: 'House heute', subsections: group(['black-coffee', 'solomun', 'honey-dijon', 'black-madonna', 'dixon'])},
    {id: 'techno', heading: 'Techno', subsections: group(['carl-craig', 'joey-beltram', 'sven-vath', 'nina-kraviz', 'adam-beyer', 'tale-of-us', 'charlotte-de-witte'])},
    {id: 'marathons', heading: 'Marathons und letzte Nächte', subsections: group(['cox-space', 'four-tet-floating-points', 'cox-fatboy'])},
    {id: 'festival-floors', heading: 'Festival-Floors', subsections: group(['john-digweed', 'seth-troxler', 'fatboy-i360'])},
    {id: 'jungle-dnb', heading: 'Jungle und Drum and Bass', subsections: group(['fabio-grooverider', 'dj-randall', 'goldie-ulterior-motive'])},
    {id: 'garage-footwork-radio', heading: 'Garage, Footwork und Radio', subsections: group(['ben-ufo', 'rashad-spinn', 'skream'])},
    {id: 'where-to-start', heading: 'Womit anfangen'}
  ],
  media,

  sources: [
    {href: 'https://soundcloud.com/floatingpoints/floating-points-four-tet-final-plastic-people-2-1-2015', label: 'Floating Points und Four Tet: ihr Bericht über die letzte öffentliche Party im Plastic People (auf Englisch)'},
    {href: 'https://www.mixcloud.com/CarlCox/carl-cox-global-live-from-space-ibiza-the-final-chapter-global-700-part-1/', label: 'Carl Cox: Global 700 und sein Abschied von der Space-Residency (auf Englisch)'},
    {href: 'https://xlr8r.com/podcasts/dj-rashad-dj-spinn/', label: 'XLR8R: DJ Rashad und DJ Spinn, Podcast 158 (auf Englisch)'},
    {href: 'https://mixmag.net/amp/skream-uk-garage-alter-ego-set', label: 'Mixmag: Skream über die Garage-Platten hinter seinem Alter-Ego-Set (auf Englisch)'},
    {href: 'https://mixmag.net/feature/20-best-dj-mixes-of-the-decade-2010-2019', label: 'Mixmag: Black Coffee und die besten DJ-Mixe des Jahrzehnts (auf Englisch)'},
    {href: 'https://mixmag.net/read/dj-randall-in-the-lab-ldn-dj-lab', label: 'Mixmag: Randalls Jungle-Session mit Platten von 1992 bis 1995 (auf Englisch)'}
  ],

  bandcamp: {
    description: 'Ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'thecatrave, Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'thecatrave, 60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
