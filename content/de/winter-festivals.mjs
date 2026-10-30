// German winter festivals guide. Structure, facts, dates and the Bestätigt/Gelistet labels
// from the English page (best-winter-music-festivals-draft.md, build-winter-festivals-article.mjs),
// checked there on 4 October 2026, via the Spanish page (content/es/winter-festivals.mjs).
//
// German wording: "Winterfestivals" and "Festivals im Schnee" as the Spanish SERP did for
// "festivales de invierno" / "festivales en la nieve"; the google.de SERP could not be read
// (Claude in Chrome was not connected on 30 Oct 2026), so the terms are not measured or
// SERP-qualified yet (keywords/de-winter-festivals.json). Re-check in Search Console.
//
// Maintenance: registered in festival-editions.mjs with the other roundups; re-read every row
// when the English page's dates change.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/winter-festivals/${name}-1200.webp`,
  srcset: `img/winter-festivals/${name}-320.webp 320w, img/winter-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-winter-festivals',
  file: 'de/winterfestivals.html',
  draft: 'de/winter-festivals-draft.md',
  canonical: 'https://thecatrave.com/de/winterfestivals',
  englishPath: '/best-winter-music-festivals',
  ogImage: 'https://thecatrave.com/img/og/winter-festivals.jpg',
  bodyClass: 'article-page winter-festivals-page',
  minReadingMinutes: 7,

  title: 'Winterfestivals 2027: Snowbombing, Igloofest, CTM',
  description: 'Winterfestivals für elektronische Musik 2027, von Tomorrowland Winter und Snowbombing bis CTM und Shapes, mit bestätigten und gelisteten Terminen.',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  dateLabel: '30. Oktober 2026',

  heroKicker: 'Festival-Guide 2027',
  heroTitle: 'Die besten Winterfestivals für elektronische Musik 2027',
  deck: 'Welche Winterfestivals die größten sind, welche die besten für House und Techno in den Bergen und welche die Fachpresse empfiehlt, mit jedem Termin als bestätigt oder nicht bestätigt markiert.',
  answerLabel: 'Winterfestivals 2027',
  breadcrumbName: 'Winterfestivals',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine andere Reise als ein Sommerfestival.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen zu Winterfestivals',
  faqTitle: 'Häufige Fragen zu Winterfestivals.',

  sections: [
    {id: 'method', heading: 'Wie diese Liste entstand', title: 'Wie diese Liste entstand.'},
    {id: 'dates', heading: 'Die Termine der Winterfestivals 2027 im Überblick', title: 'Die Termine der Winterfestivals 2027 im Überblick.', tocLabel: 'Die Termine im Überblick'},
    {id: 'biggest', heading: 'Welche Winterfestivals sind die größten?', title: 'Welche Winterfestivals sind die größten?', tocLabel: 'Die größten',
      subsections: ['tomorrowland-winter', 'snowbombing', 'igloofest', 'snow-machine', 'nameless-winter', 'contact-winter']},
    {id: 'mountain', heading: 'Welche Winterfestivals eignen sich für House und Techno in den Bergen?', title: 'Welche Winterfestivals eignen sich für House und Techno in den Bergen?', tocLabel: 'House und Techno in den Bergen',
      subsections: ['hibernation', 'caprices', 'shapes']},
    {id: 'quiet', heading: 'Welche Winterfestivals empfiehlt die Fachpresse?', title: 'Welche Winterfestivals empfiehlt die Fachpresse?', tocLabel: 'Die Empfehlungen der Presse',
      subsections: ['ctm', 'elevate', 'rise', 'astropolis-l-hiver']},
    {id: 'choose', heading: 'So wählst du', title: 'So wählst du.'}
  ],

  media: ({lang}) => ({
    'Tabelle: dates': articleTable({label: 'Termine der Winterfestivals 2027',
      headers: ['Festival', 'Wo', 'Termine', 'Quelle'],
      rows: [
        ['Rise', 'Les 2 Alpes, Frankreich', '5. bis 12. Dezember 2026', 'Gelistet'],
        ['Contact Winter', 'Vancouver, Kanada', '26. und 27. Dezember 2026', 'Gelistet'],
        ['Igloofest', 'Montreal, Kanada', '14. Januar bis 6. Februar 2027', 'Bestätigt'],
        ['CTM', 'Berlin, Deutschland', '22. bis 31. Januar 2027', 'Bestätigt'],
        ['Astropolis l’Hiver', 'Brest, Frankreich', 'Februar 2027, Termine nicht bekannt gegeben', 'Nicht bestätigt'],
        ['Nameless Winter', 'Barzio, Italien', '13. und 14. Februar 2027', 'Gelistet'],
        ['Snow Machine', 'Hakuba, Japan', '2. bis 7. März 2027', 'Gelistet'],
        ['Elevate', 'Graz, Österreich', '4. bis 7. März 2027', 'Bestätigt'],
        ['Caprices', 'Gstaad, Schweiz', '12. bis 14. und 19. bis 21. März 2027', 'Gelistet'],
        ['Shapes', 'Leysin, Schweiz', '15. bis 21. März 2027', 'Bestätigt'],
        ['Hibernation', 'Pas de la Casa, Andorra', '19. bis 21. März 2027', 'Gelistet, wenig verlässlich'],
        ['Tomorrowland Winter', 'Alpe d’Huez, Frankreich', '20. bis 27. März 2027', 'Gelistet'],
        ['Snowbombing', 'Mayrhofen, Österreich', '5. bis 10. April 2027', 'Bestätigt']
      ]}),
    'alpe-dhuez': fig('alpe-dhuez-2026', 1200, 800,
      'Der Blick vom Pic Blanc auf Alpe d’Huez im April 2026',
      'Der Blick vom Pic Blanc auf Alpe d’Huez, April 2026. Foto: DimiTalen, CC0.'),
    'igloofest': fig('igloofest-2009', 1200, 800,
      'Igloofest in Montreal im Januar 2009',
      'Igloofest in Montreal, Januar 2009. Foto: Francis Bourgouin, CC BY 2.0.'),
    'gstaad': fig('gstaad-village', 1200, 900,
      'Ein Panorama des Dorfes Gstaad in der Schweiz',
      'Gstaad, Schweiz, November 2011. Foto: GstaadTourismus, CC BY-SA 3.0.'),
    'leysin': fig('leysin-twilight', 1200, 675,
      'Leysin in der Schweiz in der Abenddämmerung',
      'Abenddämmerung in Leysin, Schweiz. Foto: Deali00, CC BY-SA 4.0.'),
    'elevate': fig('elevate-2019-truth', 1200, 800,
      'Weiße Buchstaben, die das Wort Truth bilden, hängen vor einem schwarzen Vorhang beim Elevate Festival 2019 in Graz',
      '„Truth“, das Thema des Elevate Festivals 2019 in Graz. Foto: Jean-Frédéric, CC0.'),
    'caprices-set': articleVideoCollection({
      lang, label: 'Caprices, von zu Hause gehört',
      description: 'Eine Beatport-Übertragung von Caprices, 2021.',
      items: [articleVideoCard({youtubeId: '9nJngddp7XA', genre: 'Caprices, 2021', artist: 'Beatport', title: 'Beatport X Caprices'})]
    }),
    'owner-first': ownSetListening(0, lang),
    'owner-second': ownSetListening(1, lang)
  }),

  sources: [
    {html: 'Bestätigte Termine: <a href="https://igloofest.ca" target="_blank" rel="noopener noreferrer">Igloofest</a>, <a href="https://ctm-festival.de" target="_blank" rel="noopener noreferrer">CTM Festival</a>, <a href="https://elevate.at" target="_blank" rel="noopener noreferrer">Elevate</a>, <a href="https://shapesfestival.ch" target="_blank" rel="noopener noreferrer">Shapes</a> und <a href="https://snowbombing.com/info" target="_blank" rel="noopener noreferrer">Snowbombing</a>.'},
    {html: 'Gelistete Termine (Seiten von Festivals, Ticketanbietern und Veranstaltern, jeweils mit einer zweiten Quelle): Tomorrowland Winter, Snow Machine, Nameless Winter, Caprices, Hibernation, Rise und Contact Winter.'},
    {html: 'Berichterstattung der Fachpresse über die ruhigeren Optionen: Resident Advisor (CTM, Elevate, Shapes, Rise, Caprices), Pitchfork (CTM) und The Quietus (Elevate).'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals die Musik, die ich selbst mache. Wer eine Veröffentlichung kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
