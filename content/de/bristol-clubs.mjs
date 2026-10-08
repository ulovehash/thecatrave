// German Bristol clubs guide. Structure, facts and media from the English page
// (bristol-clubs-draft.md, build-bristol-clubs-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-bristol-clubs.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/bristol-clubs/${name}-${width}.webp`,
  srcset: `img/bristol-clubs/${name}-320.webp 320w, img/bristol-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-bristol-clubs',
  file: 'de/clubs-bristol.html',
  draft: 'de/bristol-clubs-draft.md',
  canonical: 'https://thecatrave.com/de/clubs-bristol',
  englishPath: '/best-clubs-in-bristol',
  ogImage: 'https://thecatrave.com/img/og/bristol-clubs.jpg',
  bodyClass: 'article-page bristol-clubs-page',
  minReadingMinutes: 6,

  title: 'Die besten Clubs in Bristol: Motion, Lakota und Thekla',
  description: 'Motion verlor 2025 den Mietvertrag und zog um, Lakota macht seit den 1990ern Drum and Bass, ein Frachtschiff von 1959 hostet Clubnächte: die besten Clubs in Bristol.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-08',
  dateLabel: '8. Oktober 2026',

  heroKicker: 'Clubs Bristol',
  heroTitle: 'Die besten Clubs in Bristol, von Motion bis Lakota',
  deck: 'Ein Lagerhallenclub mit fünf Räumen, der 2025 sein Gebäude verlor und umzog statt zu schließen, ein Raum auf vier Etagen in der Upper York Street, der nie aufgehört hat, Drum and Bass zu buchen, und ein Frachtschiff von 1959, das vom selben Liegeplatz aus weiter Clubnächte macht.',
  answerLabel: 'Die besten Clubs in Bristol',
  breadcrumbName: 'Die besten Clubs in Bristol',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Eine andere Art von Clubstadt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Clubs in Bristol.',

  sections: [
    {id: 'best-clubs-now', heading: 'Die besten Clubs in Bristol heute', title: 'Die besten Clubs in Bristol heute.'},
    {id: 'motion-depth', heading: 'Motion im Detail', title: 'Motion im Detail.'},
    {id: 'lakota-bass-music', heading: 'Lakota und Bristols Bass-Music-Linie', title: 'Lakota und Bristols Bass-Music-Linie.'},
    {id: 'where-to-go', heading: 'Wohin in Bristol ausgehen', title: 'Wohin in Bristol ausgehen.'}
  ],

  media: ({lang}) => ({
    'Lakota': figure('lakota-exterior', 700, 946, 'Die Außenansicht des Nachtclubs Lakota in der Upper York Street in Bristol',
      'Lakotas Gebäude in der Upper York Street, fotografiert 2011. Resident Advisors eigener Eintrag nennt ihn Bristols „Heimat des Undergrounds“. Foto: Neil Owen, CC BY-SA 2.0.'),
    'Hodge': articleVideoCollection({lang, label: 'Hodge, Boiler Room Bristol, 2015', description: 'Hodges Boiler-Room-Bristol-Set, gefilmt am 6. August 2015.', items: [articleVideoCard({youtubeId: 'rGCDKpkPUqI', genre: 'Bass', artist: 'Hodge', title: 'Boiler Room Bristol, 2015'})]}),
    'Shanti Celeste': articleVideoCollection({lang, label: 'Shanti Celeste, Boiler Room Bristol, 2015', description: 'Shanti Celestes Boiler-Room-Bristol-Set, gefilmt am 28. September 2015, kurz nachdem sie bei Julio Bashmores Label Broadwalk unterschrieben hatte.', items: [articleVideoCard({youtubeId: 'dgv4ktxwTHA', genre: 'House', artist: 'Shanti Celeste', title: 'Boiler Room Bristol, 2015'})]}),
    'Thekla': figure('thekla-boat', 1200, 675, 'Thekla, ein umgebautes Frachtschiff im Floating Harbour von Bristol, vom Ufer aus gesehen',
      'Thekla, fotografiert 2023. Das Schiff, 1959 in Deutschland gebaut, kam 1983 nach Bristol und eröffnete im Jahr darauf als Veranstaltungsort. Foto: The wub, CC BY-SA 4.0.'),
    'Tabelle: now': articleTable({
      headers: ['Club', 'Gegend', 'Musik und Charakter', 'Am besten für'],
      rows: [
        ['Motion', 'Unit 2, Victoria Terrace (bis 2025 Avon Street)', 'Der neue Ort öffnete 2025; die fünf Räume und der DJ-Mag-Rang beziehen sich auf das frühere Gebäude an der Avon Street', 'Ort und Adresse der konkreten Veranstaltung prüfen'],
        ['Lakota', 'Upper York Street', 'Vier Etagen mit Drum and Bass, Jungle, Hardcore, Dubstep, Psytrance und Techno seit den frühen 1990ern', 'Eine echte Verbindung zu Bristols Bass-Music-Geschichte, keine Neuauflage davon'],
        ['Thekla', 'Floating Harbour', 'Ein umgebautes Frachtschiff von 1959, zuerst Konzerte und danach Clubnächte, von DHP Family betrieben, seit der Ort 1984 eröffnete', 'Ein Abend rund um einen Raum, den sonst niemand hat']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://ra.co/clubs', label: 'Resident Advisor: Motion Bristol and Lakota, Bristol, venue pages'},
    {href: 'https://mixmag.net', label: 'Mixmag: Motion Bristol to shut down in July, announces plans for a new home (2025)'},
    {href: 'https://www.bristolworld.com/business/motion-bristol-to-sadly-close-down-after-20-years', label: 'BristolWorld: Motion Bristol to sadly close down after 20 years (2025)'},
    {href: 'https://www.bristol247.com', label: 'Bristol24/7: coverage of Motion, Lakota and Thekla club nights'},
    {href: 'https://www.express.co.uk', label: 'Daily Express: Huge UK music venue shutting doors in weeks (2025)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Wer einen kauft, unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
