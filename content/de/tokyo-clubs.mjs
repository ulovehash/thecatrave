// German Tokyo clubs guide. Structure, facts and media from the English page
// (tokyo-clubs-draft.md, build-tokyo-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-tokyo-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/tokyo-clubs/${name}-${width}.webp`,
  srcset: `img/tokyo-clubs/${name}-320.webp 320w, img/tokyo-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-tokyo-clubs',
  file: 'de/clubs-tokio.html',
  draft: 'de/tokyo-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-tokio',
  englishPath: '/best-clubs-in-tokyo',
  ogImage: 'https://thecatrave.com/img/og/tokyo-clubs.jpg',
  bodyClass: 'article-page tokyo-clubs-page',
  minReadingMinutes: 7,

  title: 'Die besten Clubs in Tokio: WOMB, Contact und das Tanzverbot',
  description: 'WOMB, Contact, Vent und Circus Tokyo: die besten Clubs in Tokio für House, Techno und Bass Music und das 68 Jahre alte Gesetz gegen das Tanzen.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Clubs Tokio',
  heroTitle: 'Die besten Clubs in Tokio, vom WOMB bis zum Kampf für das Tanzen',
  deck: 'Eine Stadt, in der Tanzen nach 1 Uhr bis 2016 eine rechtliche Grauzone war und in der die besten Räume für House, Techno und Bass Music in Kellern von Shibuya und einer umgebauten Veranstaltungshalle am Hafen liegen.',
  answerLabel: 'Die besten Clubs in Tokio',
  breadcrumbName: 'Die besten Clubs in Tokio',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Clubs, gebaut um ein Gesetz gegen das Tanzen.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Tokio.',

  sections: [
    {id: 'fueiho-law', heading: 'Fünfzig Jahre eines Gesetzes gegen das Tanzen', title: 'Fünfzig Jahre eines Gesetzes gegen das Tanzen.'},
    {id: 'air-and-ageha', heading: 'Air und die Clubs vor der Reform', title: 'Air und die Clubs vor der Reform.'},
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Tokio heute', title: 'Die besten Clubs in Tokio heute.'},
    {id: 'techno-clubs', heading: 'Die besten Techno-Clubs in Tokio', title: 'Die besten Techno-Clubs in Tokio.'},
    {id: 'where-to-go', heading: 'Wohin in Tokio ausgehen', title: 'Wohin in Tokio ausgehen.'}
  ],

  media: ({lang}) => ({
    'ageHa': figure('ageha-studio-coast', 1200, 850, 'Die Außenansicht des Studio Coast, des Gebäudes am Wasser in Shin-Kiba, in dem das ageHa untergebracht war',
      'Das Studio Coast in Shin-Kiba, von 2002 bis zur Schließung im Januar 2022 Heimat des ageHa, fotografiert 2018. Foto: Kakidai, CC BY-SA 4.0.'),
    'WOMB': figure('womb-shibuya', 1200, 800, 'Der Eingang und die Beschilderung des Nachtclubs WOMB in Shibuya, Tokio',
      'Der Eingang des WOMB in Shibuya, fotografiert 2023. Der Club läuft seit April 2000 an dieser Adresse. Foto: Dick Thomas Johnson, CC BY 2.0.'),
    'Dogenzaka': figure('dogenzaka-shibuya', 1200, 900, 'Die Dogenzaka bei Nacht, die steile Straße gesäumt von beleuchteten Schildern für Clubs, Bars und Karaoke-Boxen',
      'Die Dogenzaka in Shibuya, nachts fotografiert 2024. Die meisten Clubs dieses Guides liegen an oder nahe dieser Straße. Foto: Freddickfix, CC BY 4.0.'),
    'Chida': articleVideoCollection({lang, label: 'Chida, Boiler Room Tokyo, 2014', description: 'Chidas Set aus der allerersten Boiler-Room-Übertragung in Tokio im Juni 2014, neben Force of Nature und Monkey Timers. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'E2mThQ-g-24', genre: 'House', artist: 'Chida', title: 'Boiler Room Tokyo, 2014'})]}),
    'Wata Igarashi': articleVideoCollection({lang, label: 'Wata Igarashi, Boiler Room Tokyo x TDME, 2016', description: 'Wata Igarashi beim Boiler-Room-Showcase Tokyo x TDME in Shibuya im Dezember 2016. Aus dem Katalog aufgenommener DJ-Sets dieser Seite.', items: [articleVideoCard({youtubeId: 'S0yP6ZOl4z0', genre: 'Techno', artist: 'Wata Igarashi', title: 'Boiler Room Tokyo x TDME, 2016'})]}),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['WOMB', 'Shibuya', 'Vier Etagen um eine riesige Spiegelkugel, geöffnet seit 2000', 'Techno, Drum and Bass und Electro sowie das jährliche WOMB Adventure Festival'],
        ['Contact', 'Shibuya (Dogenzaka)', 'Ein Keller, gebaut als Nachfolger des Air, geöffnet seit 2016', 'Internationale Techno- und House-Bookings und Boiler-Room-Übertragungen'],
        ['Vent', 'Minami-Aoyama', 'Ein kleinerer Raum, gebaut um Klangqualität, geöffnet seit 2016', 'Eine ruhigere, ernsthaftere Nacht mit House und Techno'],
        ['Circus Tokyo', 'Shibuya', 'Der Tokioter Ableger von Osakas Club Circus, geöffnet seit 2015', 'Drum and Bass und Bass Music neben House und Techno'],
        ['Solfa', 'Nakameguro', 'Ein kleinerer Raum außerhalb des Shibuya-Clusters, geöffnet seit 2009', 'Techno, Bass, House, Disco und Soul abseits der Hauptstraße']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Businesses_Affecting_Public_Morals_Regulation_Act', label: 'Wikipedia: Businesses Affecting Public Morals Regulation Act'},
    {href: 'https://en.wikipedia.org/wiki/Womb_(nightclub)', label: 'Wikipedia: Womb (nightclub)'},
    {href: 'https://en.wikipedia.org/wiki/AgeHa', label: 'Wikipedia: AgeHa'},
    {href: 'https://djmag.com/news/tokyo-club-air-close', label: 'DJ Mag: Tokyo club Air to close (2015)'},
    {href: 'https://djmag.com/top100clubs/2021/67/WOMB', label: 'DJ Mag: Top 100 Clubs 2021, WOMB'},
    {href: 'https://djmag.com/top100clubs/2023/76/WOMB', label: 'DJ Mag: Top 100 Clubs 2023, WOMB'},
    {href: 'https://www.japantimes.co.jp/culture/2022/02/11/music/tokyo-ageha-studio-coast-closes/', label: 'The Japan Times: Tokyo club scene\'s \'temple\' may be gone, ageHa closes (2022)'},
    {href: 'https://crackmagazine.net/2016/06/japan-finally-lifted-no-dancing-law/', label: 'Crack Magazine: Japan has finally lifted their no dancing law (2016)'},
    {href: 'https://ra.co/clubs/1661', label: 'Resident Advisor: WOMB, Tokyo'},
    {href: 'https://ra.co/clubs/122892', label: 'Resident Advisor: Vent, Tokyo'},
    {href: 'https://boilerroom.tv/session/boiler-room-tokyo-contact/', label: 'Boiler Room: Boiler Room Tokyo, Contact (2019)'},
    {href: 'https://boilerroom.tv/session/tokyo-tdme-x-boiler-room/', label: 'Boiler Room: Tokyo, TDME x Boiler Room (2016)'},
    {href: 'https://www.mixesdb.com/w/2014-06-20_-_Force_Of_Nature_@_Boiler_Room_Tokyo', label: 'MixesDB: Force of Nature at Boiler Room Tokyo (20 June 2014)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
