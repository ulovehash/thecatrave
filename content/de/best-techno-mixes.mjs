// German techno mixes guide. Structure, facts and the ten recordings from the English
// page (best-techno-mixes-draft.md, build-best-techno-mixes-article.mjs). Wording is the
// page's own (the Google SERP check was blocked by a bot-check, so it was not verified
// there); volumes are null in keywords/de-best-techno-mixes.json.

import {articleVideoCard, articleVideoCollection} from '../../site-components.mjs';

export default {
  lang: 'de',
  name: 'de-best-techno-mixes',
  file: 'de/beste-techno-mixes.html',
  draft: 'de/best-techno-mixes-draft.md',
  canonical: 'https://thecatrave.com/de/beste-techno-mixes',
  englishPath: '/best-techno-mixes',
  ogImage: 'https://thecatrave.com/img/og/best-techno-mixes.jpg',
  bodyClass: 'article-page techno-mixes-page',
  minReadingMinutes: 8,

  title: 'Die besten Techno-Mixes: 10 wesentliche DJ-Sets',
  description: 'Zehn wesentliche Techno-Mixes von Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd und mehr.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Techno-DJ-Mixes',
  heroTitle: 'Die besten Techno-Mixes, von Detroit bis heute',
  deck: 'Zehn Techno-Mixes, ausgewählt danach, wie jeder DJ Platten aneinanderreiht, vom Detroiter Maschinenfunk bis zu hypnotischen und dubbigen aktuellen Sets.',
  answerLabel: 'BESTE TECHNO-MIXES',
  breadcrumbName: 'Die besten Techno-Mixes, von Detroit bis heute',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Im Mix zeigt Techno seine Struktur.',

  sections: [
    {id: 'criteria', heading: 'Was macht einen Techno-Mix wesentlich?', title: 'Was macht einen Techno-Mix wesentlich?', tocLabel: 'Was einen Mix wesentlich macht'},
    {id: 'detroit', heading: 'Detroit: Funk, Minimalismus und Electro', title: 'Detroit: Funk, Minimalismus und Electro.', tocLabel: 'Detroit: Funk, Minimalismus, Electro', subsections: ['mix-juan-atkins-mixmag-live-2015', 'mix-robert-hood-dj-mag-2019', 'mix-dj-stingray-boiler-room-dekmantel-2017']},
    {id: 'pressure', heading: 'Druck und Präzision', title: 'Druck und Präzision.', tocLabel: 'Druck und Präzision', subsections: ['mix-jeff-mills-mixmag-2019', 'mix-surgeon-boiler-room-2014', 'mix-ben-klock-boiler-room-berlin-2013']},
    {id: 'contemporary', heading: 'Verschiedene Wege durch den heutigen Techno', title: 'Verschiedene Wege durch den heutigen Techno.', tocLabel: 'Wege durch den heutigen Techno', subsections: ['mix-helena-hauff-b2b-l-f-t-hor-2020', 'mix-wata-igarashi-hor-2023', 'mix-rodhad-boiler-room-2023', 'mix-fadi-mohem-boiler-room-berlin-2024']},
    {id: 'choose', heading: 'Welchen Techno-Mix solltest du zuerst spielen?', title: 'Welchen Techno-Mix solltest du zuerst spielen?', tocLabel: 'Welchen Mix zuerst?'}
  ],

  media: ({lang}) => {
    const video = (label, item) => ({
      usePreviousParagraph: true,
      render: description => articleVideoCollection({lang, label, description, items: [articleVideoCard(item)]})
    });
    return {
      'Juan Atkins': video('Juan Atkins, Mixmag Live, 2015', {youtubeId: '9SuKJ-dbmbg', genre: 'DETROIT-TECHNO', artist: 'Juan Atkins', title: 'Mixmag Live, 2015'}),
      'Robert Hood': video('Robert Hood, DJ Mag, 2019', {youtubeId: 'S2UORWQz_7k', genre: 'MINIMAL TECHNO', artist: 'Robert Hood', title: 'DJ Mag, 2019'}),
      'DJ Stingray': video('DJ Stingray, Boiler Room Dekmantel, 2017', {youtubeId: '7AGJp9_B_gM', genre: 'ELECTRO / TECHNO', artist: 'DJ Stingray', title: 'Boiler Room Dekmantel, 2017'}),
      'Jeff Mills': video('Jeff Mills, Mixmag, 2019', {youtubeId: 'jOVB05K9GPU', genre: 'DETROIT-TECHNO', artist: 'Jeff Mills', title: 'Mixmag, 2019'}),
      'Surgeon': video('Surgeon, Boiler Room, 2014', {youtubeId: 'Ww9VtKqprUY', genre: 'BIRMINGHAM-TECHNO', artist: 'Surgeon', title: 'Boiler Room, 2014'}),
      'Ben Klock': video('Ben Klock, Boiler Room Berlin, 2013', {youtubeId: 'DGWL7YI_2rI', genre: 'BERLINER TECHNO', artist: 'Ben Klock', title: 'Boiler Room Berlin, 2013'}),
      'Helena Hauff and L.F.T.': video('Helena Hauff b2b L.F.T., HÖR, 2020', {youtubeId: 'u2qaQLKkVDA', genre: 'ACID / ELECTRO / TECHNO', artist: 'Helena Hauff b2b L.F.T.', title: 'HÖR, 2020'}),
      'Wata Igarashi': video('Wata Igarashi, HÖR, 2023', {youtubeId: 'ku54y2l54Sc', genre: 'HYPNOTISCHER TECHNO', artist: 'Wata Igarashi', title: 'HÖR, 2023'}),
      'Rodhad': video('Rødhåd, Boiler Room, 2023', {youtubeId: 'oNYarqQNev0', genre: 'BERLINER TECHNO', artist: 'Rødhåd', title: 'Boiler Room, 2023'}),
      'Fadi Mohem': video('Fadi Mohem, Boiler Room Berlin, 2024', {youtubeId: 'rTtVMHFlwoM', genre: 'DUB TECHNO', artist: 'Fadi Mohem', title: 'Boiler Room Berlin, 2024'})
    };
  },

  sources: [
    {href: 'https://www.youtube.com/@mixmag', label: 'Mixmag'},
    {href: 'https://www.youtube.com/@djmag', label: 'DJ Mag'},
    {href: 'https://www.youtube.com/@boilerroom', label: 'Boiler Room'},
    {href: 'https://www.youtube.com/@hoer.berlin', label: 'HÖR Berlin'}
  ],
  sourcesNote: 'Aufnahme-Metadaten und Genre-Tags wurden am 29. September 2026 mit dem Selector-Katalog von thecatrave abgeglichen.',

  bandcamp: {
    description: 'Diese Veröffentlichungen hängen mit dem Maschinenrhythmus und den gebrochenen Clubstrukturen zusammen, die oben behandelt werden. Ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
