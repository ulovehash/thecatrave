// French psytrance festivals roundup. Structure, facts, dates and the "listed"
// labels ("annoncé sur les agendas") from the English page
// (best-psytrance-festivals-draft.md, build-psytrance-festivals-article.mjs),
// checked there on 31 October 2026.
//
// French wording: Keyword Planner, France, French, 13 November 2026 (buckets
// only), and the google.fr SERP read the same day: "festival psytrance",
// "festival psy trance", "festival de psytrance", "Ozora Festival", "Boom
// Festival", "Universo Paralello". The map is keywords/fr-psytrance-festivals.json.
// The organiser spells it Universo Paralello; the page follows the organiser.
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; roll to 2028 in September 2027
// with the English page.
//
// The images are the English page's, in img/psytrance-festivals/, with
// translated alt text and captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/psytrance-festivals/${name}-1200.webp`,
  srcset: `img/psytrance-festivals/${name}-320.webp 320w, img/psytrance-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Universo Paralello', 'Pratigi, Bahia, Brésil', 'Sur les agendas à partir du 27 décembre 2026', 'Plage', 'Plus d’une semaine', 'Le Nouvel An au soleil'],
  ['Rainbow Spirit', 'Glenaroua, Victoria, Australie', 'Du 5 au 8 mars', 'Bush', 'Quatre jours', 'Le grand rassemblement australien'],
  ['Burning Mountain', 'Zernez, Suisse', 'Du 24 au 27 juin', 'Alpes, 1 500 m', 'Quatre jours', 'Un cadre de montagne'],
  ['VooV', 'Putlitz, Allemagne', 'Sur les agendas du 16 au 19 juillet', 'Campagne', 'Quatre jours', 'Un rassemblement plus petit en Allemagne'],
  ['Boom', 'Idanha-a-Nova, Portugal', 'Du 18 au 25 juillet, complet', 'Lac', 'Huit jours', 'La programmation la plus large'],
  ['Ozora', 'Dádpuszta, Hongrie', 'Sur les agendas du 23 juillet au 3 août', 'Collines ouvertes', 'Environ douze jours', 'Le long séjour'],
  ['Mo:Dem', 'Primišlje, Croatie', 'Du 2 au 8 août', 'Vallée de rivière', 'Sept jours', 'Des sons plus sombres'],
  ['Indian Spirit', 'Eldena, Allemagne', 'Du 25 au 30 août', 'Campagne', 'Six jours', 'Un grand rassemblement en Allemagne'],
  ['Hadra', 'Allier, France', 'Pas encore annoncées (2026 : du 27 au 30 août)', 'Lac', 'Quatre jours', 'Un week-end d’été en France'],
  ['Own Spirit', 'Huesca, Espagne', 'Du 1er au 6 septembre', 'Réservoir', 'Six jours', 'La fin de l’été']
];

export default {
  lang: 'fr',
  name: 'fr-psytrance-festivals',
  file: 'fr/festivals-psytrance.html',
  draft: 'fr/psytrance-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-psytrance',
  englishPath: '/best-psytrance-festivals',
  ogImage: 'https://thecatrave.com/img/og/psytrance-festivals.jpg',
  bodyClass: 'article-page psytrance-festivals-page',
  minReadingMinutes: 7,

  title: 'Festivals psytrance 2027 : Ozora, Boom et Universo Paralello',
  description: 'Les meilleurs festivals psytrance 2027, avec dates, cadre et ce qui vous attend, du Boom au Portugal et de l’Ozora en Hongrie à Universo Paralello au Brésil.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals psytrance 2027',
  deck: 'Les grands festivals psytrance comparés par lieu, durée et ambiance, du Boom et de l’Ozora jusqu’au bush du centre du Victoria, avec les dates 2027 confirmées et celles encore en attente.',
  answerLabel: 'Les meilleurs festivals psytrance',
  breadcrumbName: 'Festivals psytrance',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour faire votre choix.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals psytrance',
  faqTitle: 'Questions fréquentes sur les festivals psytrance.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.'},
    {id: 'at-a-glance', heading: 'Les dates des festivals psytrance 2027 en un coup d’œil', title: 'Les dates des festivals psytrance 2027 en un coup d’œil.', tocLabel: 'Les dates 2027 en un coup d’œil'},
    {id: 'biggest', heading: 'Quel est le plus grand festival de psytrance au monde ?', title: 'Quel est le plus grand festival de psytrance au monde ?', tocLabel: 'Le plus grand festival de psytrance',
      subsections: ['boom', 'ozora', 'universo-paralello']},
    {id: 'europe', heading: 'Quels sont les meilleurs festivals psytrance en Europe ?', title: 'Quels sont les meilleurs festivals psytrance en Europe ?', tocLabel: 'Festivals psytrance en Europe',
      subsections: ['voov', 'hadra', 'own-spirit', 'mo-dem', 'burning-mountain', 'indian-spirit']},
    {id: 'usa', heading: 'Y a-t-il des festivals psytrance aux États-Unis ?', title: 'Y a-t-il des festivals psytrance aux États-Unis ?', tocLabel: 'Festivals psytrance aux États-Unis'},
    {id: 'australia', heading: 'Où sont les meilleurs festivals psytrance en Australie ?', title: 'Où sont les meilleurs festivals psytrance en Australie ?', tocLabel: 'Festivals psytrance en Australie',
      subsections: ['rainbow-spirit', 'wild-horses']},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.'},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Les festivals psytrance comparés, 2027',
      headers: ['Festival', 'Où', 'Dates 2027', 'Cadre', 'Durée', 'Idéal pour'], rows: festivals}),
    blanka: articleVideoCollection({
      lang, label: 'Le psytrance, écouté depuis chez soi',
      description: 'BLANKA pour Boiler Room à Varsovie, filmée en 2026.',
      items: [articleVideoCard({youtubeId: 'VF1Dy_RGJS4', genre: 'Varsovie, 2026', artist: 'BLANKA', title: 'Boiler Room: Warsaw'})]
    }),
    boom: fig('boom-being-fields-2018', 1200, 800,
      'Le Boom Festival vu depuis les Being Fields, 2018',
      'Le Boom en 2018, vu depuis les Being Fields. Photo : Racheland Deckard, CC BY-SA 4.0.'),
    ozora: fig('ozora-horizon-2018', 1200, 400,
      'Une vue large de l’horizon au-dessus du site de l’Ozora, 2018',
      'L’horizon à l’Ozora en 2018. Photo : Max Ambio, CC0.'),
    universo: fig('universo-paralello-2009', 1200, 900,
      'Universo Paralello sur la côte de Bahia, au Brésil, 2009',
      'Universo Paralello au Nouvel An 2009. Photo : Marco Langebeeke, CC BY 2.0.'),
    voov: fig('voov-2005', 1024, 768,
      'Le festival VooV Experience en Allemagne, 2005',
      'VooV en juillet 2005. Photo : Andy Weisner, CC BY-SA 2.0.'),
    hadra: fig('hadra-main-stage-2019', 1200, 721,
      'La scène principale du Hadra Trance Festival en France, 2019',
      'La scène principale de Hadra en août 2019. Photo : Louciie-13, CC BY-SA 4.0, recadrée.'),
    rainbow: fig('rainbow-serpent-2019', 1200, 900,
      'Un arc-en-ciel au-dessus des festivaliers de Rainbow Serpent, dans le Victoria, en janvier 2019',
      'Rainbow Serpent, comme s’appelait alors le festival, en janvier 2019. Photo : RaimbowTomcat, CC BY-SA 4.0.'),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Mon propre court morceau de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates 2027 tirées du site de chaque festival : ${[
      ['https://www.boomfestival.org/', 'Boom'], ['https://burning-mountain.ch/', 'Burning Mountain'], ['https://www.ownspiritfestival.org/', 'Own Spirit'],
      ['https://indian-spirit.de/', 'Indian Spirit'], ['https://modemfestival.com/home/', 'Mo:Dem']
    ].map(link).join(', ')} ; Rainbow Spirit d’après sa ${link(['https://events.humanitix.com/emergentform', 'page de billetterie'])} (en anglais).`},
    {href: 'https://www.boomfestival.org/news/boom-2027-tickets-sold-out', label: 'Billets du Boom : Boom, 13 octobre 2026 (en anglais)'},
    {html: 'Dates annoncées sur les agendas : Technoairlines (VooV, Ozora), Techno Univers et Shotgun (Universo Paralello).'},
    {html: `Fréquentation du Boom : Lusa via ${link(['https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas', 'Notícias ao Minuto'])} (en portugais), 24 juillet 2025, et ${link(['https://boomfestival.org/news/letter-to-the-boomers-2025', 'la lettre du Boom après l’édition 2025'])} (en anglais).`},
    {href: 'https://xpatloop.com/channels/2026/08/inside-ozora-how-safe-is-hungary%E2%80%99s-world-famous-psychedelic-festival.html', label: 'Fréquentation de l’Ozora : XpatLoop (en anglais)'},
    {html: 'Fréquentation d’Indian Spirit : Grateful Web.'},
    {html: `Shankra : ${link(['https://www.suedostschweiz.ch/schweiz-und-welt/shankra-festival-2026-in-lostallo-gr-zum-dritten-mal-abgesagt-1911274', 'Südostschweiz'])} (en allemand) et ${link(['https://www.rsi.ch/info/ticino-grigioni-e-insubria/Lostallo-niente-Shankra-Festival-per-il-terzo-anno-consecutivo--3789770.html', 'RSI'])} (en italien), juin 2026.`},
    {html: `Wild Horses : ${link(['https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/', 'Beat'])} (en anglais). Hadra : ${link(['https://hadratrancefestival.net/', 'le site du festival'])}.`},
    {html: 'Festival américain d’A State of Trance : Insomniac et EDM.com. Equinox Teaser USA : Bandsintown.'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même : des breaks avec de la techno et du dub dedans. Acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
