// German Fusion Festival guide. Structure and facts from the English page
// (fusion-festival-draft.md) and the Spanish sibling
// (content/es/fusion-festival.mjs), which read fusion-festival.de, taz and GMX:
// keep them aligned.
//
// de-DE SERP read in Chrome on 2026-11-12 ("fusion festival 2027"): AI overview
// says pause in 2027, back in Lärz in 2028; People also ask "Wie viel kosten
// Fusion Tickets?", "Wo ist das Fusion Festival?", "Wie viele Besucher hat das
// Fusion Festival?". Keyword Planner gave no German volumes for this page.
//
// Images are the English guide's, in img/fusion-festival/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/fusion-festival/${name}-1200.webp`,
  srcset: `img/fusion-festival/${name}-320.webp 320w, img/fusion-festival/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const table = (label, headers, rows) => articleTable({label, headers, rows: rows.map(row => row.map(escapeHtml))});

export default {
  lang: 'de',
  name: 'de-fusion-festival',
  file: 'de/fusion-festival.html',
  draft: 'de/fusion-festival-draft.md',
  canonical: 'https://thecatrave.com/de/fusion-festival',
  englishPath: '/fusion-festival',
  ogImage: 'https://thecatrave.com/img/og/fusion-festival.jpg',
  bodyClass: 'article-page fusion-festival-page',
  minReadingMinutes: 8,

  title: 'Fusion Festival 2027: Pause, Termine 2028 und Tickets',
  description: 'Fusion Festival in Lärz: warum es 2027 keine Ausgabe gibt, die Termine 2028, wie die Ticketverlosung läuft, der Streit mit der Polizei und die Anreise.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Festival-Guide, 2027 und 2028',
  heroTitle: 'Fusion Festival 2027: Pause, Termine 2028, Tickets und der Streit mit der Polizei',
  deck: 'Das Festival des Kulturkosmos auf einem früheren sowjetischen Flugplatz: warum 2027 Fusion-frei ist, wann 2028 ist, wie die Verlosung läuft und wie man hinkommt.',
  answerLabel: 'Termine des Fusion Festivals',
  breadcrumbName: 'Fusion Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival, das ein Jahr aussetzt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Fusion Festival.',

  sections: [
    {id: 'what-is', heading: 'Was ist das Fusion Festival?', title: 'Was ist das Fusion Festival?', tocLabel: 'Was ist die Fusion?'},
    {id: 'fusion-2026', heading: 'Fusion Festival 2026', title: 'Fusion Festival 2026', tocLabel: 'Fusion 2026'},
    {id: 'dates', heading: 'Fusion Festival 2027 und 2028', title: 'Fusion Festival 2027 und 2028', tocLabel: 'Fusion 2027 und 2028'},
    {id: 'tickets', heading: 'Fusion Festival Tickets', title: 'Fusion Festival Tickets', tocLabel: 'Tickets und Verlosung'},
    {id: 'larz', heading: 'Fusion Festival in Lärz und der Kulturkosmos', title: 'Fusion Festival in Lärz und der Kulturkosmos', tocLabel: 'Lärz und Kulturkosmos'},
    {id: 'police', heading: 'Der Streit des Fusion Festivals mit der Polizei', title: 'Der Streit des Fusion Festivals mit der Polizei', tocLabel: 'Streit mit der Polizei'},
    {id: 'lineup', heading: 'Fusion Festival Line-up', title: 'Fusion Festival Line-up', tocLabel: 'Line-up und Sets'},
    {id: 'travel', heading: 'Anreise zum Fusion Festival', title: 'Anreise zum Fusion Festival', tocLabel: 'Anreise'},
    {id: 'planning', heading: 'Reise zur Fusion 2028 planen', title: 'Plane deine Reise zum Fusion Festival.', tocLabel: 'Reise und Planung', planning: localizedFestivalPlanning('fusion', 'de')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix, zum Hören, während du das Wochenende planst.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Ein zweiter Mix von mir, für die Anreise.'),
    'Image: palapa': figure('palapa-2019', 1200, 675,
      'Die Palapa-Bühne nachts auf dem Fusion Festival 2019, Publikum unter violettem Licht und einem orangefarbenen Schirm',
      'Die Palapa-Bühne bei einem Konzert von Meute, Fusion Festival, 27. Juni 2019. Foto: San Andreas, CC BY-SA 4.0.'),
    'Image: ravesticks': figure('ravesticks-2024', 1200, 380,
      'Publikum mit Leuchtstäben auf dem Sonnendeck-Floor des Fusion Festivals 2024',
      'Leuchtstäbe auf dem Sonnendeck-Floor, Fusion Festival, 29. Juni 2024. Foto: Kerospam, CC BY-SA 4.0.'),
    'Image: railcar': figure('railcar-neustrelitz-2016', 1200, 801,
      'Festivalgäste steigen 2016 am Bahnhof Neustrelitz auf dem Weg zum Fusion Festival in einen Regionalzug',
      'Festivalgäste am Bahnhof Neustrelitz, 29. Juni 2016. Foto: JoachimKohler-HB, CC BY-SA 4.0.'),
    'Embed: fusion sets': articleVideoCollection({
      lang,
      label: 'Sets von Fusion-Künstlern aus dem Katalog',
      description: 'Vier Sets aus dem Katalog des Selector, alle von Boiler Room, von Künstlern aus dem Fusion-Programm 2026. Keins wurde auf der Fusion aufgenommen.',
      items: [
        articleVideoCard({youtubeId: 'EfZu4BCi644', genre: 'Elektronisch', artist: 'Acid Pauli', title: 'Boiler Room Tulum DJ set'}),
        articleVideoCard({youtubeId: 'H_WP3TRJfFk', genre: 'Elektronisch', artist: 'Apparat', title: 'Boiler Room Berlin DJ set'}),
        articleVideoCard({youtubeId: 'oNYarqQNev0', genre: 'Techno', artist: 'Rødhåd', title: 'Boiler Room x Glitch Festival 2023'}),
        articleVideoCard({youtubeId: '02PstSNvln0', genre: 'House', artist: 'Gerd Janson', title: 'Boiler Room x Sugar Mountain 2018 DJ set'})
      ]
    }),
    'Table: schedule 2026': table('Zeitplan des Fusion Festivals 2026', ['Zeitplan 2026', 'Detail'], [
      ['Toröffnung', 'Mittwoch, 24. Juni, 07:00'],
      ['Mittwochsprogramm', 'Ab 16:00'],
      ['Große Open-Air-Floors', 'Donnerstag, 25. Juni, 18:00'],
      ['Pause auf den lauten Bühnen', '11:00 bis 14:00, Freitag bis Sonntag'],
      ['Sonntagsticket', 'Sonntag, 28. Juni, 08:00 bis 16:00'],
      ['Camping geräumt', 'Dienstagnachmittag nach dem Festival']
    ]),
    'Table: status': table('Stand des Fusion Festivals 2026, 2027 und 2028', ['Punkt', 'Stand'], [
      ['Ausgabe 2026', '24. bis 28. Juni 2026, ausverkauft'],
      ['2027', 'Fusion-freies Jahr, kein Festival'],
      ['Nächste Ausgabe', '28. Juni bis 2. Juli 2028'],
      ['Ticketdaten 2028', 'Newsletter offen, keine Termine oder Preise veröffentlicht'],
      ['Programm 2028', 'Nicht veröffentlicht']
    ]),
    'Table: lottery 2026': table('Schritte der Ticketverlosung 2026', ['Schritt der Verlosung 2026', 'Datum'], [
      ['Helferbewerbungen', '1. bis 10. Dezember 2025'],
      ['Registrierung im Fusion-Shop', '1. bis 14. Dezember 2025'],
      ['Erste Verlosung', '18. Dezember 2025'],
      ['Bezahlung ab', '1. Januar 2026'],
      ['Zweite Verlosung, Ticket:Bourse und Sonntagstickets', '5. Februar 2026'],
      ['Fahrzeugtickets', 'Frühjahr 2026']
    ])
  }),

  sources: [
    {html: `Termine 2028 und Fusion-freies Jahr 2027: ${ext('https://tickets.fusion-festival.de/', 'Ticketshop der Fusion')}.`},
    {html: `Verlosung, Preis 2026, Regel ab 18, Fahrzeugtickets, Antwort der Bundeswehr, Newsletter 2026 und offizielle FAQ (Zeiten, Bühnen, Regeln, Anreise): ${ext('https://fusion-festival.de/', 'fusion-festival.de')}, englische Seiten und Newsarchiv.`},
    {html: `Angaben zur Organisation (Kulturkosmos Müritz, Teams, Programmpunkte): die offizielle englische Seite des Festivals.`},
    {html: `Der Streit um die Sicherheit 2019: ${ext('https://taz.de/Die-Zukunft-des-Musikfestivals/!5595050/', 'taz, 25. Mai 2019')} und ${ext('https://www.gmx.ch/magazine/unterhaltung/musik/festivals/fusion-festival-oeffnet-langem-streit-polizei-tore-33805512', 'GMX, 25. Juni 2019')}.`},
    {html: 'Fotos: Wikimedia Commons, mit Nachweis in jeder Bildunterschrift.'}
  ],

  bandcamp: {
    description: 'Zwischen den Festivals: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
