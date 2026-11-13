// German psytrance festivals roundup. Structure, facts, dates and the "gelistet"
// labels from the English page (best-psytrance-festivals-draft.md,
// build-psytrance-festivals-article.mjs), checked there on 31 October 2026.
//
// German wording: Keyword Planner, Germany, German, 13 November 2026 (buckets
// only), and the google.de SERP read the same day: "Psytrance-Festivals 2027",
// "Psy-Trance-Festival", "Ozora Festival", "Boom Festival". The map is
// keywords/de-psytrance-festivals.json. The organiser spells it Universo
// Paralello; the page follows the organiser.
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
  ['Universo Paralello', 'Pratigi, Bahia, Brasilien', 'Gelistet ab 27. Dezember 2026', 'Strand', 'Über eine Woche', 'Neujahr in der Sonne'],
  ['Rainbow Spirit', 'Glenaroua, Victoria, Australien', '5. bis 8. März', 'Busch', 'Vier Tage', 'Das wichtigste Treffen Australiens'],
  ['Burning Mountain', 'Zernez, Schweiz', '24. bis 27. Juni', 'Alpen, 1.500 m', 'Vier Tage', 'Eine Berglage'],
  ['VooV', 'Putlitz, Deutschland', 'Gelistet 16. bis 19. Juli', 'Land', 'Vier Tage', 'Ein kleineres Treffen in Deutschland'],
  ['Boom', 'Idanha-a-Nova, Portugal', '18. bis 25. Juli, ausverkauft', 'See', 'Acht Tage', 'Das breiteste Programm'],
  ['Ozora', 'Dádpuszta, Ungarn', 'Gelistet 23. Juli bis 3. August', 'Offene Hügel', 'Etwa zwölf Tage', 'Der lange Aufenthalt'],
  ['Mo:Dem', 'Primišlje, Kroatien', '2. bis 8. August', 'Flusstal', 'Sieben Tage', 'Dunklere Sounds'],
  ['Indian Spirit', 'Eldena, Deutschland', '25. bis 30. August', 'Land', 'Sechs Tage', 'Ein großes Treffen in Deutschland'],
  ['Hadra', 'Allier, Frankreich', 'Noch nicht angekündigt (2026: 27. bis 30. August)', 'See', 'Vier Tage', 'Ein Sommerwochenende in Frankreich'],
  ['Own Spirit', 'Huesca, Spanien', '1. bis 6. September', 'Stausee', 'Sechs Tage', 'Das Ende des Sommers']
];

export default {
  lang: 'de',
  name: 'de-psytrance-festivals',
  file: 'de/psytrance-festivals.html',
  draft: 'de/psytrance-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/psytrance-festivals',
  englishPath: '/best-psytrance-festivals',
  ogImage: 'https://thecatrave.com/img/og/psytrance-festivals.jpg',
  bodyClass: 'article-page psytrance-festivals-page',
  minReadingMinutes: 7,

  title: 'Psytrance-Festivals 2027: Ozora, Boom und Universo Paralello',
  description: 'Die besten Psytrance-Festivals 2027 mit Terminen, Umgebung und was dich erwartet, von Boom in Portugal und Ozora in Ungarn bis Universo Paralello in Brasilien.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13. November 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten Psytrance-Festivals 2027',
  deck: 'Die wichtigsten Psytrance-Festivals im Vergleich nach Ort, Dauer und Stimmung, von Boom und Ozora bis in den Busch von Zentral-Victoria, mit den bestätigten Terminen für 2027 und den noch offenen.',
  answerLabel: 'Die besten Psytrance-Festivals',
  breadcrumbName: 'Psytrance-Festivals',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Liste, aus der du auswählen kannst.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Psytrance-Festivals',
  faqTitle: 'Häufige Fragen zu Psytrance-Festivals.',

  sections: [
    {id: 'criteria', heading: 'Nach welchen Kriterien die Liste entstanden ist', title: 'Nach welchen Kriterien die Liste entstanden ist.'},
    {id: 'at-a-glance', heading: 'Die Termine der Psytrance-Festivals 2027 im Überblick', title: 'Die Termine der Psytrance-Festivals 2027 im Überblick.', tocLabel: 'Die Termine 2027 im Überblick'},
    {id: 'biggest', heading: 'Welches ist das größte Psytrance-Festival?', title: 'Welches ist das größte Psytrance-Festival?', tocLabel: 'Das größte Psytrance-Festival',
      subsections: ['boom', 'ozora', 'universo-paralello']},
    {id: 'europe', heading: 'Welches sind die besten Psytrance-Festivals in Europa?', title: 'Welches sind die besten Psytrance-Festivals in Europa?', tocLabel: 'Psytrance-Festivals in Europa',
      subsections: ['voov', 'hadra', 'own-spirit', 'mo-dem', 'burning-mountain', 'indian-spirit']},
    {id: 'usa', heading: 'Gibt es Psytrance-Festivals in den USA?', title: 'Gibt es Psytrance-Festivals in den USA?', tocLabel: 'Psytrance-Festivals in den USA'},
    {id: 'australia', heading: 'Wo sind die besten Psytrance-Festivals in Australien?', title: 'Wo sind die besten Psytrance-Festivals in Australien?', tocLabel: 'Psytrance-Festivals in Australien',
      subsections: ['rainbow-spirit', 'wild-horses']},
    {id: 'not-listed', heading: 'Was nicht auf dieser Liste steht, und warum', title: 'Was nicht auf dieser Liste steht, und warum.'},
    {id: 'choose', heading: 'So findest du das passende Festival', title: 'So findest du das passende Festival.'}
  ],

  media: ({lang}) => ({
    'Tabelle: termine': articleTable({label: 'Psytrance-Festivals im Vergleich, 2027',
      headers: ['Festival', 'Wo', 'Termine 2027', 'Umgebung', 'Dauer', 'Ideal für'], rows: festivals}),
    blanka: articleVideoCollection({
      lang, label: 'Psytrance, von zu Hause aus gehört',
      description: 'BLANKA für Boiler Room in Warschau, gefilmt 2026.',
      items: [articleVideoCard({youtubeId: 'VF1Dy_RGJS4', genre: 'Warschau, 2026', artist: 'BLANKA', title: 'Boiler Room: Warsaw'})]
    }),
    boom: fig('boom-being-fields-2018', 1200, 800,
      'Das Boom Festival von den Being Fields aus gesehen, 2018',
      'Boom 2018, von den Being Fields aus gesehen. Foto: Racheland Deckard, CC BY-SA 4.0.'),
    ozora: fig('ozora-horizon-2018', 1200, 400,
      'Ein weiter Blick auf den Horizont über dem Gelände von Ozora, 2018',
      'Der Horizont bei Ozora 2018. Foto: Max Ambio, CC0.'),
    universo: fig('universo-paralello-2009', 1200, 900,
      'Universo Paralello an der Küste von Bahia in Brasilien, 2009',
      'Universo Paralello an Neujahr 2009. Foto: Marco Langebeeke, CC BY 2.0.'),
    voov: fig('voov-2005', 1024, 768,
      'Das Festival VooV Experience in Deutschland, 2005',
      'VooV im Juli 2005. Foto: Andy Weisner, CC BY-SA 2.0.'),
    hadra: fig('hadra-main-stage-2019', 1200, 721,
      'Die Hauptbühne des Hadra Trance Festivals in Frankreich, 2019',
      'Die Hauptbühne von Hadra im August 2019. Foto: Louciie-13, CC BY-SA 4.0, zugeschnitten.'),
    rainbow: fig('rainbow-serpent-2019', 1200, 900,
      'Ein Regenbogen über Festivalbesuchern bei Rainbow Serpent in Victoria im Januar 2019',
      'Rainbow Serpent, wie das Festival damals hieß, im Januar 2019. Foto: RaimbowTomcat, CC BY-SA 4.0.'),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    'own-track': ownTrackListening('late-summer-cloud-dance', 'Mein eigener kurzer Liquid-Breakbeat-Track.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Termine für 2027 von der eigenen Seite jedes Festivals: ${[
      ['https://www.boomfestival.org/', 'Boom'], ['https://burning-mountain.ch/', 'Burning Mountain'], ['https://www.ownspiritfestival.org/', 'Own Spirit'],
      ['https://indian-spirit.de/', 'Indian Spirit'], ['https://modemfestival.com/home/', 'Mo:Dem']
    ].map(link).join(', ')}; Rainbow Spirit von seiner ${link(['https://events.humanitix.com/emergentform', 'Ticketseite'])} (auf Englisch).`},
    {href: 'https://www.boomfestival.org/news/boom-2027-tickets-sold-out', label: 'Tickets für Boom: Boom, 13. Oktober 2026 (auf Englisch)'},
    {html: 'Gelistete Termine: Technoairlines (VooV, Ozora), Techno Univers und Shotgun (Universo Paralello).'},
    {html: `Besucherzahl von Boom: Lusa über ${link(['https://www.noticiasaominuto.com/cultura/2827192/boom-festival-teve-a-presenca-de-824-artistas-e-37286-pessoas', 'Notícias ao Minuto'])} (auf Portugiesisch), 24. Juli 2025, und ${link(['https://boomfestival.org/news/letter-to-the-boomers-2025', 'der Brief von Boom nach der Ausgabe 2025'])} (auf Englisch).`},
    {href: 'https://xpatloop.com/channels/2026/08/inside-ozora-how-safe-is-hungary%E2%80%99s-world-famous-psychedelic-festival.html', label: 'Besucherzahl von Ozora: XpatLoop (auf Englisch)'},
    {html: 'Besucherzahl von Indian Spirit: Grateful Web.'},
    {html: `Shankra: ${link(['https://www.suedostschweiz.ch/schweiz-und-welt/shankra-festival-2026-in-lostallo-gr-zum-dritten-mal-abgesagt-1911274', 'Südostschweiz'])} und ${link(['https://www.rsi.ch/info/ticino-grigioni-e-insubria/Lostallo-niente-Shankra-Festival-per-il-terzo-anno-consecutivo--3789770.html', 'RSI'])} (auf Italienisch), Juni 2026.`},
    {html: `Wild Horses: ${link(['https://beat.com.au/one-of-victorias-wildest-festivals-turns-10-this-november/', 'Beat'])} (auf Englisch). Hadra: ${link(['https://hadratrancefestival.net/', 'die eigene Seite des Festivals'])}.`},
    {html: 'US-Festival von A State of Trance: Insomniac und EDM.com. Equinox Teaser USA: Bandsintown.'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache: Breaks mit Techno und Dub darin. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
