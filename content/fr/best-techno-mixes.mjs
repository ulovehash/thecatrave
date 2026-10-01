// French techno mixes guide. Structure, facts and the ten recordings from the English
// page (best-techno-mixes-draft.md, build-best-techno-mixes-article.mjs). Wording is the
// page's own (the Google SERP check was blocked by a bot-check, so it was not verified
// there); volumes are null in keywords/fr-best-techno-mixes.json.

import {articleVideoCard, articleVideoCollection} from '../../site-components.mjs';

export default {
  lang: 'fr',
  name: 'fr-best-techno-mixes',
  file: 'fr/meilleurs-mix-techno.html',
  draft: 'fr/best-techno-mixes-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleurs-mix-techno',
  englishPath: '/best-techno-mixes',
  ogImage: 'https://thecatrave.com/img/og/best-techno-mixes.jpg',
  bodyClass: 'article-page techno-mixes-page',
  minReadingMinutes: 8,

  title: 'Meilleurs mix techno : 10 DJ sets essentiels',
  description: 'Dix mix techno essentiels de Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd et d’autres.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Mix DJ techno',
  heroTitle: 'Les meilleurs mix techno, de Détroit à aujourd’hui',
  deck: 'Dix mix techno choisis selon la façon dont chaque DJ enchaîne les disques, du funk machine de Détroit aux sets contemporains hypnotiques et dubby.',
  answerLabel: 'MEILLEURS MIX TECHNO',
  breadcrumbName: 'Les meilleurs mix techno, de Détroit à aujourd’hui',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Le mix est l’endroit où la techno révèle sa structure.',

  sections: [
    {id: 'criteria', heading: 'Qu’est-ce qui fait un mix techno essentiel ?', title: 'Qu’est-ce qui fait un mix techno essentiel ?', tocLabel: 'Ce qui fait un mix essentiel'},
    {id: 'detroit', heading: 'Détroit : funk, minimalisme et electro', title: 'Détroit : funk, minimalisme et electro.', tocLabel: 'Détroit : funk, minimalisme, electro', subsections: ['mix-juan-atkins-mixmag-live-2015', 'mix-robert-hood-dj-mag-2019', 'mix-dj-stingray-boiler-room-dekmantel-2017']},
    {id: 'pressure', heading: 'Pression et précision', title: 'Pression et précision.', tocLabel: 'Pression et précision', subsections: ['mix-jeff-mills-mixmag-2019', 'mix-surgeon-boiler-room-2014', 'mix-ben-klock-boiler-room-berlin-2013']},
    {id: 'contemporary', heading: 'Différentes routes à travers la techno contemporaine', title: 'Différentes routes à travers la techno contemporaine.', tocLabel: 'Routes de la techno contemporaine', subsections: ['mix-helena-hauff-b2b-l-f-t-hor-2020', 'mix-wata-igarashi-hor-2023', 'mix-rodhad-boiler-room-2023', 'mix-fadi-mohem-boiler-room-berlin-2024']},
    {id: 'choose', heading: 'Quel mix techno écouter en premier ?', title: 'Quel mix techno écouter en premier ?', tocLabel: 'Quel mix écouter d’abord ?'}
  ],

  media: ({lang}) => {
    const video = (label, description, item) => articleVideoCollection({lang, label, description, items: [articleVideoCard(item)]});
    return {
      'Juan Atkins': video('Juan Atkins, Mixmag Live, 2015', 'Regarde l’enregistrement « Mixmag Live, 2015 » sur la chaîne officielle du diffuseur.', {youtubeId: '9SuKJ-dbmbg', genre: 'TECHNO DE DÉTROIT', artist: 'Juan Atkins', title: 'Mixmag Live, 2015'}),
      'Robert Hood': video('Robert Hood, DJ Mag, 2019', 'Regarde l’enregistrement « DJ Mag, 2019 » sur la chaîne officielle du diffuseur.', {youtubeId: 'S2UORWQz_7k', genre: 'TECHNO MINIMALE', artist: 'Robert Hood', title: 'DJ Mag, 2019'}),
      'DJ Stingray': video('DJ Stingray, Boiler Room Dekmantel, 2017', 'Regarde l’enregistrement « Boiler Room Dekmantel, 2017 » sur la chaîne officielle du diffuseur.', {youtubeId: '7AGJp9_B_gM', genre: 'ELECTRO / TECHNO', artist: 'DJ Stingray', title: 'Boiler Room Dekmantel, 2017'}),
      'Jeff Mills': video('Jeff Mills, Mixmag, 2019', 'Regarde l’enregistrement « Mixmag, 2019 » sur la chaîne officielle du diffuseur.', {youtubeId: 'jOVB05K9GPU', genre: 'TECHNO DE DÉTROIT', artist: 'Jeff Mills', title: 'Mixmag, 2019'}),
      'Surgeon': video('Surgeon, Boiler Room, 2014', 'Regarde l’enregistrement « Boiler Room, 2014 » sur la chaîne officielle du diffuseur.', {youtubeId: 'Ww9VtKqprUY', genre: 'TECHNO DE BIRMINGHAM', artist: 'Surgeon', title: 'Boiler Room, 2014'}),
      'Ben Klock': video('Ben Klock, Boiler Room Berlin, 2013', 'Regarde l’enregistrement « Boiler Room Berlin, 2013 » sur la chaîne officielle du diffuseur.', {youtubeId: 'DGWL7YI_2rI', genre: 'TECHNO BERLINOISE', artist: 'Ben Klock', title: 'Boiler Room Berlin, 2013'}),
      'Helena Hauff and L.F.T.': video('Helena Hauff b2b L.F.T., HÖR, 2020', 'Regarde l’enregistrement « HÖR, 2020 » sur la chaîne officielle du diffuseur.', {youtubeId: 'u2qaQLKkVDA', genre: 'ACID / ELECTRO / TECHNO', artist: 'Helena Hauff b2b L.F.T.', title: 'HÖR, 2020'}),
      'Wata Igarashi': video('Wata Igarashi, HÖR, 2023', 'Regarde l’enregistrement « HÖR, 2023 » sur la chaîne officielle du diffuseur.', {youtubeId: 'ku54y2l54Sc', genre: 'TECHNO HYPNOTIQUE', artist: 'Wata Igarashi', title: 'HÖR, 2023'}),
      'Rodhad': video('Rødhåd, Boiler Room, 2023', 'Regarde l’enregistrement « Boiler Room, 2023 » sur la chaîne officielle du diffuseur.', {youtubeId: 'oNYarqQNev0', genre: 'TECHNO BERLINOISE', artist: 'Rødhåd', title: 'Boiler Room, 2023'}),
      'Fadi Mohem': video('Fadi Mohem, Boiler Room Berlin, 2024', 'Regarde l’enregistrement « Boiler Room Berlin, 2024 » sur la chaîne officielle du diffuseur.', {youtubeId: 'rTtVMHFlwoM', genre: 'DUB TECHNO', artist: 'Fadi Mohem', title: 'Boiler Room Berlin, 2024'})
    };
  },

  sources: [
    {href: 'https://www.youtube.com/@mixmag', label: 'Mixmag'},
    {href: 'https://www.youtube.com/@djmag', label: 'DJ Mag'},
    {href: 'https://www.youtube.com/@boilerroom', label: 'Boiler Room'},
    {href: 'https://www.youtube.com/@hoer.berlin', label: 'HÖR Berlin'}
  ],
  sourcesNote: 'Les métadonnées des enregistrements et les genres ont été vérifiés le 29 septembre 2026 dans le catalogue Selector de thecatrave.',

  bandcamp: {
    description: 'Ces sorties rejoignent le rythme machine et les structures de club brisées explorés plus haut. En acheter une soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes par thecatrave'}
    ]
  }
};
