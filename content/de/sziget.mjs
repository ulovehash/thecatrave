// German Sziget guide. Structure and facts from the English page
// (sziget-festival-draft.md, sziget-festival-research.md,
// build-sziget-festival-article.mjs).
//
// German keywords (keywords/de-sziget.json): Keyword Planner, Germany,
// 2026-10-01: sziget festival in the 1K to 10K bucket, +900% year on year.
// No exact volume (account without ad spend). The wording was checked in
// Google de-DE the same day: "Sziget Festival 2027", "Besucher" and
// "Musikrichtung" are the related searches, and "Was heißt sziget auf
// Deutsch?" is a People also ask question, so it is a FAQ here.
//
// The images are the English guide's, in img/sziget/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/sziget/${name}-${width}.webp`,
  srcset: `img/sziget/${name}-320.webp 320w, img/sziget/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

export default {
  lang: 'de',
  name: 'de-sziget',
  file: 'de/sziget-festival.html',
  draft: 'de/sziget-draft.md',
  canonical: 'https://thecatrave.com/de/sziget-festival',
  englishPath: '/sziget-festival',
  ogImage: 'https://thecatrave.com/img/og/sziget.jpg',
  bodyClass: 'article-page sziget-festival-page',

  title: 'Sziget Festival 2027: Termine, Musik, Camping und Anreise',
  description: 'Das Sziget Festival 2027 läuft vom 10. bis 14. August auf der Óbuda-Insel. Musik, Geschichte, Camping, Anreise mit der H5 und was bestätigt ist.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-06',
  dateLabel: '6. Oktober 2026',

  heroKicker: 'Sziget',
  heroTitle: 'Sziget Festival',
  deck: 'Fünf Tage auf der Óbuda-Insel: Pop, Rock und Hip-Hop neben Clubbühnen, Theater, Zirkus und einer Bahnverbindung nach Budapest.',
  answerLabel: 'Was ist das Sziget Festival',
  breadcrumbName: 'Sziget Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival so groß wie ein zeitweiliger Stadtteil von Budapest.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Sziget Festival.',
  ownSetAfter: 'history',

  sections: [
    {id: 'sziget-2027', heading: 'Sziget Festival 2027', title: 'Sziget Festival 2027.', kicker: 'Termine und Ort'},
    {id: 'what-is-sziget', heading: 'Was das Sziget eigentlich ist', title: 'Was das Sziget eigentlich ist.'},
    {id: 'music', heading: 'Welche Musik auf dem Sziget läuft', title: 'Welche Musik auf dem Sziget läuft.', kicker: 'Die Musik'},
    {id: 'history', heading: 'Vom Diáksziget zum Sziget', title: 'Vom Diáksziget zum Sziget.'},
    {id: 'camping', heading: 'Zelten oder in Budapest wohnen', title: 'Zelten oder in Budapest wohnen.'},
    {id: 'planning', heading: 'Die Insel planen', title: 'Die Sziget-Reise planen.', planning: {
      festivalName: 'Sziget 2027',
      intro: 'Das Sziget kann Campingfestival oder Städtereise nach Budapest sein. Kalkuliere Pass, Flughafen- oder Bahnfahrt, Schlafplatz und täglichen Nahverkehr, bevor du dich zwischen Insel und Stadt entscheidest.',
      ticketIntro: 'Aktuelle offizielle Preise für 2027. Onlinegebühren stehen separat; spätere Stufen und Kassenpreise können höher sein.',
      ticketRows: [
        {label: 'Fünf-Tage-Pass', note: 'Basic Camping bei qualifizierter Mehrtageskarte inklusive', price: '349 € + 23 € Gebühr'},
        {label: 'Fünf-Tage-Pass bis 21', note: 'Altersnachweis erforderlich', price: '279 € + 18 € Gebühr'},
        {label: 'VIP-Fünf-Tage-Pass', note: 'VIP-Bereiche; Unterkunft separat', price: 'ab 569 € + Gebühr'},
        {label: 'Pfand für eigenes Zelt', note: 'Erstattbar bei korrekter Mitnahme oder Rückgabe', price: '30 €'}
      ],
      ticketNote: 'Tagestickets, Premium-Camping, aufgebaute Zelte und Hotelpakete sind eigene Produkte. Prüfe den Live-Shop, weil sich Preisstufen ändern.',
      routes: [
        {title: 'Aus dem Zentrum mit der H5 nach Filatorigát', description: 'Mit der M2 bis Batthyány tér oder der Tram 4/6 bis Margit híd, dann mit der H5 nach Filatorigát. Von den großen Bahnhöfen offiziell etwa 35–45 Minuten.', link: {label: 'Filatorigát bei Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Filatorig%C3%A1t+H%C3%89V+Budapest'}},
        {title: 'Vom Flughafen mit öffentlichen Verkehrsmitteln', description: 'Mit 100E bis Deák Ferenc tér, dann M2 und H5, oder mit 200E, M3, Tram 1 und H5. 100E kostet derzeit 2.500 HUF; für Umstiege braucht man gültige Nahverkehrstickets.'},
        {title: 'Internationaler Zug, Fernbus oder Festivalpaket', description: 'An einem Budapester Bahnhof oder Busbahnhof ankommen und mit der H5 weiterfahren. Offizielle Zug-, Bus- und Hotelpakete kombinieren ausgewählte Fahrten mit Festivalpässen.', link: {label: 'Offizielle Sziget-Anreise', url: 'https://szigetfestival.com/en/travel/'}}
      ],
      routeNote: 'Bootsverkehr und Sonder-Shuttle vom Flughafen können sich 2027 ändern. Vor der Abfahrt BudapestGO und die aktuelle Sziget-Seite prüfen.',
      accommodation: {body: 'Basic Camping ist mit Full Pass, Drei-Tage-Pass oder mindestens zwei aufeinanderfolgenden Tagestickets kostenlos. Premium-Camps, aufgebaute Zelte, Caravanplätze und Hotels in Budapest kosten extra.', link: {label: 'Offizielle Unterkünfte vergleichen', url: 'https://szigetfestival.com/en/accommodation/'}},
      spending: {body: 'Eine vollständige Speise- und Getränkepreisliste für 2027 ist noch nicht veröffentlicht. Das Gelände ist bargeldlos; ein ALDI auf der Insel verkauft Lebensmittel und vergessene Dinge.', items: [
        {label: 'Flughafenbus 100E', value: '2.500 HUF (etwa 7 €)'},{label: 'Typischer Bahnhofstransfer', value: 'etwa 1.000 HUF (2,50 €)'},{label: 'Sziget Citypass, 2 Tage', value: '41 € + 3 € Gebühr'},{label: 'Sziget Citypass, 7 Tage', value: '83 € + 5 € Gebühr'}
      ], link: {label: 'Offizielle Infos zu Cashless und Festival', url: 'https://szigetfestival.com/en/festival-info'}},
      packing: ['Ticket im Handy-Wallet und gültiger Lichtbildausweis','Nachfüllbare Flasche ohne Glas, Ohrstöpsel und Powerbank','Zelt, Isomatte und Schlafsack für Basic Camping','Sonnenschutz, Regenjacke und Schuhe für lange Wege','Pfandbeleg für ein eigenes Zelt'],
      avoid: ['Glas, Feuerwerk, Waffen und illegale Drogen','Gaskocher, Gasflaschen, Grills und anderes Flammengerät','Regenschirme, Hämmer und laut Besucherordnung gesperrte Werkzeuge','Handelsübliche Mengen an Lebensmitteln, Tabak oder Waren','Mit einem alten Lageplan oder Bootsfahrplan zu rechnen'],
      rulesNote: 'Einlass- und Campingregeln können sich bis August ändern. Derzeit sind Glas und flammenbetriebene Kochgeräte verboten; für ein eigenes Zelt ist das erstattbare Pfand erforderlich.',
      links: [
        {label: 'Offizielle Website', url: 'https://szigetfestival.com/en/'},{label: 'Tickets 2027', url: 'https://szigetfestival.com/en/tickets/'},{label: 'Anreise', url: 'https://szigetfestival.com/en/travel/'},{label: 'Unterkünfte', url: 'https://szigetfestival.com/en/accommodation/'},{label: 'Festivalinformationen', url: 'https://szigetfestival.com/en/festival-info'},{label: 'Óbuda-Insel bei Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Sziget+Festival+Budapest'}
      ],
      checked: '2026-10-06', checkedLabel: '6. Oktober 2026'
    }}
  ],

  media: ({lang}) => ({
    'thecatrave berlin-race-1909': ownTrackListening('berlin-race-1909', 'Aus der Clubecke, nicht von den Hauptbühnen: gebrochene Beats im Hall des Dub-Techno. Mein eigener Track, benannt nach Berlin.', lang),
    'Table: Fakten': articleTable({
      headers: ['Angabe', 'Aktuelle Information'],
      rows: [
        ['Termine', '10. bis 14. August 2027'],
        ['Ort', 'Óbuda-Insel, Budapest'],
        ['Format', 'Fünftägiges Musik- und Kunstfestival mit vielen Genres'],
        ['Line-up 2027', 'Noch nicht bekannt'],
        ['Nächste Bahnhaltestelle', 'Filatorigát an der H5 (HÉV)'],
        ['Camping', 'Mit qualifizierter Mehrtageskarte; Angebote für 2027 stehen noch aus']
      ].map(row => row.map(escapeHtml)),
      label: 'Sziget Festival 2027: die Fakten'
    }),
    'Image: island': figure('island-2022', 1200, 900,
      'Luftbild des Sziget Festivals auf der Óbuda-Insel in Budapest',
      'Die Óbuda-Insel während des Sziget 2022. Bühnen, zeitweilige Straßen und kleinere Aufführungsorte liegen auf einer langen Donauinsel. Foto: Elekes Andor, CC BY-SA 4.0.'),
    'Image: stage': figure('stage-2014', 1200, 795,
      'Publikum vor der Hauptbühne des Sziget Festivals im Jahr 2014',
      'Die Hauptbühne des Sziget 2014. Das Festival wuchs weit über das Diáksziget mit zwei Bühnen von 1993 hinaus und blieb auf derselben Insel. Foto: Steven Lek, CC BY-SA 4.0.'),
    'uOAywzuvfzg': articleVideoCollection({
      lang: 'de',
      label: 'Sziget, Club-Sets im Colosseum',
      description: 'Eelke Kleijn 2022 im Colosseum, das meistgesehene elektronische Set, das ich auf dem eigenen Kanal des Sziget gefunden habe (128.000 Aufrufe), und Shimza 2025 im Colosseum.',
      items: [
        articleVideoCard({youtubeId: 'uOAywzuvfzg', genre: 'Sziget, 2022', artist: 'Eelke Kleijn', title: 'Live im Colosseum'}),
        articleVideoCard({youtubeId: 'KZvARnaDTEo', genre: 'Sziget, 2025', artist: 'Shimza', title: 'Live beim Sziget Festival 2025'})
      ]
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://szigetfestival.com/en/festival-info', label: 'Sziget: offizielle Festivalinformationen und Termine 2027 (englisch)'},
    {href: 'https://szigetfestival.com/en/travel', label: 'Sziget: offizielle Anreiseinformationen (englisch)'},
    {href: 'https://szigetfestival.com/en/accommodation', label: 'Sziget: offizielle Informationen zur Unterkunft (englisch)'},
    {href: 'https://szigetfestival.com/en/about-us', label: 'Sziget: Festivalgeschichte (englisch)'},
    {href: 'https://commons.wikimedia.org/wiki/File:Sziget_2022_(1).jpg', label: 'Wikimedia Commons: Foto vom Sziget 2022 und Lizenz'}
  ],

  bandcamp: {
    description: 'Das Sziget ist breiter als ein einzelner elektronischer Stil. Diese Veröffentlichungen von thecatrave liegen nahe an seiner Clubseite, und ein Kauf unterstützt die Musik und dieses unabhängige Schreiben.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
