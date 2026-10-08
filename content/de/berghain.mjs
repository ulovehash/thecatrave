// German Berghain guide. Structure, facts and media from the English page
// (berghain-draft.md, build-berghain-article.mjs), translated 2026-10-06 on the
// owner's instruction. All dated facts are the English page's, read on
// 2026-10-04 from berghain.berlin: keep practical information aligned with the English guide.
// Search wording from live Bing de-DE (2026-10-06); volumes in
// keywords/de-berghain.json. The images are the English guide's, with
// translated captions.
import {
  articleFigure, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berghain/${name}-${width}.webp`,
  srcset: `img/berghain/${name}-320.webp 320w, img/berghain/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export default {
  lang: 'de',
  name: 'de-berghain',
  file: 'de/berghain.html',
  draft: 'de/berghain-draft.md',
  canonical: 'https://thecatrave.com/de/berghain',
  englishPath: '/berghain',
  ogImage: 'https://thecatrave.com/img/og/berghain.jpg',
  bodyClass: 'article-page berghain-page',
  minReadingMinutes: 6,
  image: 'https://thecatrave.com/img/berghain/berghain-facade-1200.webp',

  title: 'Berghain: Panorama Bar, Sound und Resident-DJs',
  description: 'Das Berghain erklärt: das ehemalige Kraftwerk, die Panorama Bar, die Halle, die Kantine am Berghain und das Label Ostgut Ton.',
  datePublished: '2026-10-06',
  dateModified: '2026-10-08',
  dateLabel: '8. Oktober 2026',

  heroKicker: 'Club-Guide, Berlin',
  heroTitle: 'Berghain: Panorama Bar, Sound und Resident-DJs',
  deck: 'Der Berliner Club in einem ehemaligen Kraftwerk: seine Floors, die Halle und die Kantine, wer auflegt, die Soundanlage und die Zeiten und Preise, die die offizielle Website nennt.',
  answerLabel: 'Berghain',
  breadcrumbName: 'Berghain',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Kraftwerk in Friedrichshain.',
  faqSection: 'FAQ',
  faqLabel: 'FAQ',
  faqTitle: 'Berghain FAQ.',

  sections: [
    {id: 'panorama-bar', heading: 'Was ist die Panorama Bar?', title: 'Was ist die Panorama Bar?'},
    {id: 'halle', heading: 'Was ist die Halle am Berghain?', title: 'Was ist die Halle am Berghain?'},
    {id: 'kantine', heading: 'Was ist die Berghain Kantine?', title: 'Was ist die Berghain Kantine?', tocLabel: 'Was ist die Kantine?'},
    {id: 'lineup', heading: 'Wer legt im Berghain auf?', title: 'Wer legt im Berghain auf?'},
    {id: 'sound', heading: 'Wie klingt das Berghain?', title: 'Wie klingt das Berghain?'},
    {id: 'hours-tickets', heading: 'Öffnungszeiten und Tickets', title: 'Berghain Öffnungszeiten und Tickets', subsections: ['opening-hours', 'entry-and-prices', 'dress-code', 'queue', 'accessibility-and-support-inside', 'getting-there-and-getting-home']}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Ein DJ-Mix zum Hören, während man über den Berliner Floor oben liest. Mein eigener Mix.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    facade: figure('berghain-facade', 1200, 900,
      'Die graue neoklassizistische Fassade des Berghain-Gebäudes in Berlin, mit einigen Menschen am Eingang und dahinter abgestellten Fahrrädern',
      'Das Berghain-Gebäude in Berlin, Juni 2007. Foto: Jane Mejdahl, CC BY-SA 2.0.'),
    street: figure('berghain-heizkraftwerk', 1200, 1200,
      'Die Ecke des Berghain-Gebäudes, von Am Wriezener Bahnhof aus gesehen, mit einer rostfarbenen Skulptur und Graffiti auf Straßenhöhe',
      'Das Berghain von Am Wriezener Bahnhof aus gesehen, 8. August 2024, zugeschnitten. Foto: Gunnar Klack, CC BY-SA 4.0.'),
    queue: figure('berghain-queue', 1200, 808,
      'Menschen hinter Metallabsperrungen vor dem mit Graffiti bedeckten Berghain-Eingang',
      'Menschen warten am Berghain-Eingang, Dezember 2019. Foto: Ben Kaden, CC BY 2.0.'),
    // Sets from this site's catalogue, as on the English page (oEmbed-checked 2026-10-04).
    Residents: articleVideoCollection({
      lang,
      label: 'Sets von Berghain-Residents',
      description: 'Boiler-Room-Berlin-Sets von vier DJs, die die Presse als Resident-DJs des Berghain oder der Panorama Bar nennt.',
      items: [
        articleVideoCard({youtubeId: 'DGWL7YI_2rI', genre: 'Boiler Room', artist: 'Ben Klock', title: 'Ben Klock Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'jQRI3b2SX8c', genre: 'Boiler Room', artist: 'Len Faki', title: 'Len Faki Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'fgYVNi1vK1E', genre: 'Boiler Room', artist: 'Prosumer', title: 'Prosumer Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: '0EX18zMgGig', genre: 'Boiler Room', artist: 'Tama Sumo', title: 'Tama Sumo Boiler Room Berlin DJ Set'})
      ]
    }),

  }),

  sources: [
    {html: `Programm, Floors, Preise, Zeiten, Adresse und Hausinformationen: ${ext('https://www.berghain.berlin/en/', 'berghain.berlin')}, ${ext('https://www.berghain.berlin/en/program/', 'Programm')}, ${ext('https://www.berghain.berlin/en/program/kantine-am-berghain/', 'Kantine-Programm')}, ${ext('https://www.berghain.berlin/en/program/halle/', 'Halle-Programm')}, ${ext('https://www.berghain.berlin/en/contact', 'Kontaktseite')}, ${ext('https://www.berghain.berlin/en/awareness/', 'Awareness-Seite')} und ${ext('https://www.berghain.berlin/en/program/archive/2026/05/', 'Programmarchiv 2026')}.`},
    {html: `Baugeschichte, frühere Nutzung der Räume und Kapazität: ${ext('https://industriekultur.berlin/ort/berghain/', 'Berliner Zentrum Industriekultur')}. Denkmalliste: ${ext('https://denkmaldatenbank.berlin.de/daobj.php?obj_dok_nr=09085197', 'Landesdenkmalamt Berlin, Denkmaldatenbank, Objekt 09085197')}.`},
    {html: `Innenraum, Foyer-Installation und Ausstattung der Panorama Bar: ${ext('https://www.karhard.de/projects/berghain', 'Karhard Architekten, Projektseite Berghain')}.`},
    {html: `Ostgut-Daten und die Residents: ${ext('https://crackmagazine.net/article/long-reads/now-time-marcel-dettmann-ben-klock-interviewed/', 'Crack, Interview mit Marcel Dettmann und Ben Klock, 2017')} und ${ext('https://groove.de/2022/10/10/ein-nachruf-auf-ostgut-booking-mehr-als-ein-weiterer-technoclub/', 'Groove, Nachruf auf Ostgut Booking, 2022')}.`},
    {html: `Soundanlage: ${ext('https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', 'Mixmag, 18. Oktober 2023')} und ${ext('https://groove.de/2023/10/23/berghain-soundanlage-nach-18-jahren-ausgetauscht/', 'Groove, 23. Oktober 2023')}. Mix-Reihe: ${ext('https://ra.co/news/12034', 'Resident Advisor, 26. April 2010')}.`}
  ],

  bandcamp: {
    description: 'Zwischen den Clubnächten die Musik, die ich selbst mache. Wer einen Track kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
