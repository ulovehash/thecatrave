// German Manchester clubs guide. Structure, facts and media from the English page
// (manchester-clubs-draft.md, build-manchester-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-manchester-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/manchester-clubs/${name}-${width}.webp`,
  srcset: `img/manchester-clubs/${name}-320.webp 320w, img/manchester-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-manchester-clubs',
  file: 'de/clubs-manchester.html',
  draft: 'de/manchester-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-manchester',
  englishPath: '/best-clubs-in-manchester',
  ogImage: 'https://thecatrave.com/img/og/manchester-clubs.jpg',
  bodyClass: 'article-page manchester-clubs-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs in Manchester: Haçienda bis Warehouse Project',
  description: 'Die Haçienda schloss 1997, doch ihr DIY-Geist prägt die Stadt: die besten Clubs in Manchester heute und der Aufstieg des Warehouse Project seitdem.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Clubs Manchester',
  heroTitle: 'Die besten Clubs in Manchester, vom Erbe der Haçienda zum Warehouse Project',
  deck: 'Der Club, der Manchesters Ruf begründete, schloss 1997. Was ihn ersetzte, ist eine saisonale Lagerhallen-Reihe und eine Handvoll kleiner Räume, die Soundsystem und Booking an erste Stelle setzen, im Northern Quarter und in Salford.',
  answerLabel: 'Die besten Clubs in Manchester',
  breadcrumbName: 'Die besten Clubs in Manchester',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Ruf, gebaut auf einem Gebäude, das es nicht mehr gibt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Manchester.',

  sections: [
    {id: 'hacienda-legacy', heading: 'Das Erbe der Haçienda', title: 'Das Erbe der Haçienda.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Manchester heute', title: 'Die besten Clubs in Manchester heute.'},
    {id: 'where-to-go', heading: 'Wohin in Manchester ausgehen', title: 'Wohin in Manchester ausgehen.'}
  ],

  media: ({lang}) => ({
    'Hacienda': figure('hacienda-bollards', 800, 600, 'Drei der erhaltenen Poller der Haçienda mit Warnstreifen, 2007 ausgestellt',
      'Die Poller der Haçienda, fotografiert 2007, fünf Jahre nach dem Abriss des Clubs selbst. Foto: a_marga, CC BY-SA 2.0.'),
    'Northern Quarter': figure('northern-quarter', 1200, 720, 'Eine Straße im Northern Quarter von Manchester, dem Viertel aus umgebauten Lagerhäusern rund um die Oldham Street',
      'Das Northern Quarter, Heimat von Soup und Eastern Bloc Records und den meisten unabhängigen Bars der Stadt. Foto: Jorge Franganillo, CC BY 4.0.'),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['The White Hotel', 'Salford', 'Eine umgebaute Garage mit vorausschauender, eklektischer Booking-Politik und starker queerer Anhängerschaft', 'DIY, Underground-Programm und selten gebuchte internationale Künstler'],
        ['Soup', 'Northern Quarter', 'Eine Bar und intimer Clubraum, früher Soup Kitchen, mit Fokus auf lokale und Kult-Talente', 'Ein gemeinschaftsorientierter Abend ohne Star-Line-up'],
        ['Eastern Bloc Records', 'Northern Quarter', 'Ein Plattenladen seit 1985, der niedrige, reine Vinyl-Nächte unter dem Titel „Open to Close“ veranstaltet', 'Manchesters eigene DJs, von Anfang bis Ende auf Vinyl'],
        ['The Loft', 'Rand des Stadtzentrums', 'Ein Raum für 200 Gäste auf einer maßgefertigten Funktion-One-Anlage, eröffnet 2021, mit House-Fokus', 'Kopflastiger Tech House bis zu tieferen Old-School-Sounds'],
        ['Hidden', 'Stadtzentrum', 'Ein mehrstöckiger Ort mit Void-Acoustics-Anlage, seit 2015 geöffnet', 'House und Techno neben schwerem Jungle und Drum & Bass'],
        ['Stage & Radio', 'Stadtzentrum', 'Ein früherer Jazzclub von 1946, 2016 für Dance Music wiedereröffnet, mit eigenem Community-Radiosender', 'Underground-DJs aus Großbritannien und Soundsystem-Kultur']
      ].map(row => row.map(escapeHtml))
    }),
    'Swing Ting': articleVideoCollection({lang, label: 'Swing Ting, Bass, beats and grime, @ Soup, Manchester, 2021', description: 'Swing Ting, die Manchester-Crew für Bass, Beats und Grime, aufgenommen im Soup, einem der aktuellen Clubs oben.', items: [articleVideoCard({youtubeId: 'b1lOaex4kZw', genre: 'Grime', artist: 'Swing Ting', title: 'Bass, beats and grime, @ Soup, Manchester, 2021'})]}),
    'LEVELZ': articleVideoCollection({lang, label: 'LEVELZ, Boiler Room: Manchester, 2016', description: 'LEVELZ, die Manchester-Crew, die aus den Grime- und Bassline-Szenen der Stadt hervorging, in Boiler Rooms eigener Manchester-Übertragung.', items: [articleVideoCard({youtubeId: 'GtJhGigH1mw', genre: 'Grime', artist: 'LEVELZ', title: 'Boiler Room: Manchester, 2016'})]})
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/The_Ha%C3%A7ienda', label: 'Wikipedia: The Haçienda'},
    {href: 'https://en.wikipedia.org/wiki/The_Warehouse_Project', label: 'Wikipedia: The Warehouse Project'},
    {href: 'https://ra.co/guides/clubs-in-manchester', label: 'Resident Advisor: The Best Clubs in Manchester in 2026'},
    {href: 'https://nightclub.org.uk/club/the-white-hotel', label: 'nightclub.org.uk: The White Hotel'},
    {href: 'https://www.manchestertourism.org', label: 'Manchester Tourism: Best Nightclubs in Manchester'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
