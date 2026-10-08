// German Lisbon clubs guide. Structure, facts and media from the English page
// (lisbon-clubs-draft.md, build-lisbon-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-lisbon-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/lisbon-clubs/${name}-${width}.webp`,
  srcset: `img/lisbon-clubs/${name}-320.webp 320w, img/lisbon-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-lisbon-clubs',
  file: 'de/clubs-lissabon.html',
  draft: 'de/lisbon-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-lissabon',
  englishPath: '/best-clubs-in-lisbon',
  ogImage: 'https://thecatrave.com/img/og/lisbon-clubs.jpg',
  bodyClass: 'article-page lisbon-clubs-page',
  minReadingMinutes: 7,

  title: 'Die besten Clubs in Lissabon: Lux Frágil, Ministerium, Kremlin',
  description: 'Das Lux Frágil prägt Lissabon seit 1998, das Ministerium spielt Afro-House im früheren Ministerium, die Musicbox schloss 2025: die besten Clubs in Lissabon heute.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-08',
  dateLabel: '8. Oktober 2026',

  heroKicker: 'Clubs Lissabon',
  heroTitle: 'Die besten Clubs in Lissabon, vom Lux Frágil bis zum Ministerium',
  deck: 'Ein umgebautes Hafenlagerhaus, das die Stadt seit 1998 trägt, ein früherer Flügel des Finanzministeriums, heute bekannt für Afro-House, und der Club, den das Viertel 2025 verlor: die besten Clubs in Lissabon heute.',
  answerLabel: 'Die besten Clubs in Lissabon',
  breadcrumbName: 'Die besten Clubs in Lissabon',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine Clubszene, die am Fluss läuft.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Lissabon.',

  sections: [
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Lissabon heute', title: 'Die besten Clubs in Lissabon heute.'},
    {id: 'lux-fragil-depth', heading: 'Das Lux Frágil im Detail', title: 'Das Lux Frágil im Detail.'},
    {id: 'current-scene', heading: 'Ministerium, Kremlin und der Rest der aktuellen Szene', title: 'Ministerium, Kremlin und der Rest der aktuellen Szene.'},
    {id: 'lost-venues', heading: 'Cais do Sodré und die Orte, die Lissabon verloren hat', title: 'Cais do Sodré und die Orte, die Lissabon verloren hat.'},
    {id: 'where-to-go', heading: 'Wohin in Lissabon ausgehen', title: 'Wohin in Lissabon ausgehen.'}
  ],

  media: ({lang}) => ({
    'Lux Fragil': figure('lux-fragil', 552, 400, 'Das Gebäude des Lux Frágil an der Cais da Pedra in Lissabon',
      'Das Gebäude des Lux Frágil an der Cais da Pedra, ein umgebautes Lagerhaus einer Stauerfirma von 1910. Foto: Fssmgn, CC BY 3.0.'),
    'Buraka Som Sistema': articleVideoCollection({lang, label: 'Buraka Som Sistema, Boiler Room Lisboa x RBMA Takeover, 2013', description: 'Das Boiler-Room-Lisboa-Set von Buraka Som Sistema 2013, Teil einer Übernahme durch die Red Bull Music Academy und weiter eine der meistgesehenen Boiler-Room-Übertragungen, die in der Stadt gefilmt wurden.', items: [articleVideoCard({youtubeId: '4_Jk34-b_Jw', genre: 'Kuduro', artist: 'Buraka Som Sistema', title: 'Boiler Room Lisboa x RBMA Takeover, 2013'})]}),
    'Praça do Comércio': figure('praca-comercio', 1200, 824, 'Die Praça do Comércio, Lissabons Platz am Fluss, vom Boden aus gesehen',
      'Die Praça do Comércio, fotografiert 2018. Der Ministerium Club belegt einen Flügel dieses Platzes, in Räumen, die einst dem portugiesischen Finanzministerium gehörten. Foto: Berthold Werner, CC BY-SA 4.0.'),
    'Pink Street': figure('pink-street-aerial', 1200, 900, 'Luftbild der Rua Nova do Carvalho, Lissabons rosa angestrichener „Pink Street“',
      'Die Rua Nova do Carvalho, bekannt als Pink Street, von oben gesehen. Die Musicbox lief unter ihren Bögen fast neunzehn Jahre, bevor sie im September 2025 schloss. Foto: FuriousYogi, CC BY-SA 4.0.'),
    'Village Underground bus': figure('village-underground-bus', 1200, 799, 'Der Doppeldeckerbus im Village Underground Lisboa, Teil des Kreativcampus des Ortes',
      'Der Doppeldeckerbus als Wahrzeichen des Village Underground Lisboa, fotografiert 2019. Der Ort in Alcântara, gebaut aus gestapelten Schiffscontainern und einem umgebauten Lagerhaus, läuft seit 2017 als Club und Veranstaltungsraum. Foto: Keith Dixon, CC BY 2.0.'),
    'Parris': articleVideoCollection({lang, label: 'Parris, Boiler Room Lissabon: Village Underground, 2019', description: 'Das Boiler-Room-Set von Parris 2019 im Village Underground Lisboa.', items: [articleVideoCard({youtubeId: 'MKuFgNjWLx8', genre: 'UK bass', artist: 'Parris', title: 'Boiler Room Lissabon: Village Underground, 2019'})]}),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Lux Frágil', 'Cais da Pedra, seit 1998', 'House und Techno in einem umgebauten Hafenlagerhaus, mit Dixon, Ben Klock und Freddy K unter vielen anderen', 'Lissabons unverzichtbarer Halt und seine Terrasse am Fluss bei Sonnenaufgang'],
        ['Ministerium Club', 'Praça do Comércio, seit 2012', 'House und Techno in einem früheren Flügel des Finanzministeriums, dazu die Afro-House-Nächte von Konda Records', 'Afro-House, den es anderswo in der Stadt selten gibt'],
        ['Kremlin', 'Santos, seit 1988 (2011 geschlossen, 2016 wieder geöffnet)', 'Die Steinbögen eines früheren Klosters, einer der wenigen Lissabonner Clubs der 1990er, die eine Schließung überstanden und zurückkamen', 'Eine echte Verbindung zu Lissabons Clubgeschichte der 1990er, keine Neuauflage davon'],
        ['Village Underground Lisboa', 'Alcântara, seit 2017', 'Ein Kreativcampus im Lagerhausformat aus gestapelten Schiffscontainern, mit Club- und Konzertnächten neben dem Coworking-Bereich', 'Das neuere, lagerhausgroße Ende der Szene']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/guide/pt/lisbon', label: 'Resident Advisor: RA Guide to Lisbon'},
    {href: 'https://www.timeout.com/lisbon/nightlife/the-best-lisbon-clubs', label: 'Time Out Lisbon: The 21 best clubs in Lisbon (2024)'},
    {href: 'https://www.lisbonlux.com/lisbon-clubs/', label: 'Lisbon Lux: Lisbon Clubs, 2026 Guide'},
    {href: 'https://djmag.com/features/underground-resilience-lisbons-diy-club-scene-refuses-give-dancefloor', label: 'DJ Mag: Underground Resilience: Lisbon\'s DIY club scene refuses to give up on the dancefloor (2026)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
