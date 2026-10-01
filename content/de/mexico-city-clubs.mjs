// German Mexico City clubs guide. Structure, facts and media from the English page
// (mexico-city-clubs-draft.md, build-mexico-city-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-mexico-city-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/mexico-city-clubs/${name}-${width}.webp`,
  srcset: `img/mexico-city-clubs/${name}-320.webp 320w, img/mexico-city-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-mexico-city-clubs',
  file: 'de/clubs-mexiko-stadt.html',
  draft: 'de/mexico-city-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-mexiko-stadt',
  englishPath: '/best-clubs-in-mexico-city',
  ogImage: 'https://thecatrave.com/img/og/mexico-city-clubs.jpg',
  bodyClass: 'article-page mexico-city-clubs-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs in Mexiko-Stadt: Patrick Miller, M.N.Roy',
  description: 'Patrick Miller läuft seit 1983 jeden Freitag, M.N.Roy sitzt in einer Villa der Kommunistischen Partei, der Fünk öffnete 2019: die besten Clubs in Mexiko-Stadt.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '2. Oktober 2026',

  heroKicker: 'Clubs Mexiko-Stadt',
  heroTitle: 'Die besten Clubs in Mexiko-Stadt, von Patrick Miller bis M.N.Roy',
  deck: 'Eine Tanzhalle in Roma Norte, die seit 1983 jeden Freitag läuft, eine Villa der Kommunistischen Partei als privater Club und die Kellerräume, die seit 2017 internationale Booker anziehen: die besten Clubs in Mexiko-Stadt heute.',
  answerLabel: 'Die besten Clubs in Mexiko-Stadt',
  breadcrumbName: 'Die besten Clubs in Mexiko-Stadt',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Vier Jahrzehnte auf wenigen Quadratkilometern.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Mexiko-Stadt.',

  sections: [
    {id: 'patrick-miller-depth', heading: 'Patrick Miller im Detail', title: 'Patrick Miller im Detail.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Mexiko-Stadt heute', title: 'Die besten Clubs in Mexiko-Stadt heute.'},
    {id: 'mnroy-funk-current-scene', heading: 'M.N.Roy, Fünk und die aktuelle Szene', title: 'M.N.Roy, Fünk und die aktuelle Szene.'},
    {id: 'where-to-go', heading: 'Wohin in Mexiko-Stadt ausgehen', title: 'Wohin in Mexiko-Stadt ausgehen.'}
  ],

  media: ({lang}) => ({
    'Zocalo': figure('zocalo-nightfall', 1200, 456, 'Der Zócalo, der Hauptplatz von Mexiko-Stadt, bei Einbruch der Nacht von oben gesehen',
      'Der Zócalo bei Einbruch der Nacht. Patrick Miller begann in der Innenstadt, nahe hier, bevor er in sein heutiges Zuhause in Roma Norte zog. Foto: Uwebart, CC BY-SA 3.0.'),
    'Roma Norte': figure('roma-norte-street', 1200, 533, 'Eine Straßenecke im Viertel Roma Norte in Mexiko-Stadt',
      'Eine Straßenecke in Roma Norte, 2014 fotografiert. Patrick Miller und M.N.Roy liegen in diesem Viertel nur wenige Straßen auseinander. Foto: Carl Campbell, CC BY-SA 2.0.'),
    'Condesa': figure('condesa-jacaranda', 1200, 900, 'Eine von Jacarandabäumen gesäumte Straße im Viertel Condesa in Mexiko-Stadt',
      'Ein blühender Jacaranda in einer Straße in Condesa. Der Fünk Club liegt an der Grenze von Condesa und Hipódromo. Foto: Lazjak, CC BY-SA 4.0.'),
    'Turbo Sonidero': articleVideoCollection({lang, label: 'Turbo Sonidero, Boiler Room SYSTEM CDMX: Sonidero Special, 2025', description: 'Turbo Sonideros Set von 2025 für Boiler Rooms SYSTEM-Reihe, ein Schaufenster für die eigene Sonidero-Soundsystem-Tradition von Mexiko-Stadt. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'it0w2zniMOI', genre: 'Cumbia', artist: 'Turbo Sonidero', title: 'Boiler Room SYSTEM CDMX: Sonidero Special, 2025'})]}),
    'Nic Fanciulli': articleVideoCollection({lang, label: 'Nic Fanciulli, Boiler Room Mexico City, 2018', description: 'Nic Fanciullis Boiler-Room-Set in Mexiko-Stadt von 2018, bis heute eine der meistgesehenen Übertragungen der Plattform aus der Stadt. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'j5hdgys4a-M', genre: 'House', artist: 'Nic Fanciulli', title: 'Boiler Room Mexico City, 2018'})]}),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Patrick Miller', 'Roma Norte, seit 1983, nur freitags', 'Retro-Pop und Disco rund um einen offenen Tanzkreis, seit Jahrzehnten im selben Format', 'Die klarste Verbindung zur Clubgeschichte der Stadt vor dem Internet'],
        ['M.N.Roy', 'Roma Norte, seit Anfang der 2010er', 'House, Minimal und Techno in einer ehemaligen Villa der Kommunistischen Partei, gestaltet von Chic by Accident', 'Ein privater Club, der ebenso auf Architektur wie auf Bookings baut'],
        ['Fünk Club', 'Grenze Condesa/Hipódromo, seit 2019', 'Internationale Headliner und lokale Crew-Residencies auf einer Funktion-One-Anlage', 'Ein Kellerraum, der half, die Underground-Szene der Stadt international zu etablieren'],
        ['Yu Yu Cine Club', 'Juárez, seit 2017', 'Ein kleiner, intimer Kellerraum mit der Drama Bar darunter, gebaut für die Zusammenarbeit mit anderen Crews', 'Ein intimer, gemeinschaftsorientierter Abend']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/guide/mx/mexicocity', label: 'Resident Advisor: RA Guide to Mexico City'},
    {href: 'https://djmag.com/features/inside-mexico-citys-vibrant-electronic-underground', label: 'DJ Mag: Inside Mexico City’s vibrant electronic underground (2024)'},
    {href: 'https://www.timeout.com/mexico-city/bars', label: 'Time Out Mexico City: Bars and Nightclubs'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
