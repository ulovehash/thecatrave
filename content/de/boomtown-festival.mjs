// German Boomtown Festival guide. Structure, facts and media from the English page
// (boomtown-festival-draft.md, build-boomtown-festival-article.mjs). Search wording from live Google
// (google.de, hl=de/gl=de, 2026-10-01); volumes in keywords/de-boomtown-festival.json.
// The images are the English guide's, with translated captions.

import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/boomtown/${name}-${width}.webp`,
  srcset: `img/boomtown/${name}-320.webp 320w, img/boomtown/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'de',
  name: 'de-boomtown-festival',
  file: 'de/boomtown-festival.html',
  draft: 'de/boomtown-festival-draft.md',
  canonical: 'https://thecatrave.com/de/boomtown-festival',
  englishPath: '/boomtown-festival',
  ogImage: 'https://thecatrave.com/img/og/boomtown.jpg',
  bodyClass: 'article-page boomtown-festival-page',
  minReadingMinutes: 6,

  title: 'Boomtown Festival 2027: Termine, Ort, Geschichte und Musik',
  description: 'Boomtown Festival 2027 läuft vom 11. bis 15. August auf dem Matterley Estate. So funktionieren die fiktive Stadt, Musik, Handlung, Geschichte und das Camping.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'UK-Festival-Guide',
  heroTitle: 'Boomtown Festival: Die Stadt, ihre Musik und die Termine 2027',
  deck: 'Ein fünftägiges Camping-Festival, gebaut als fiktive Stadt, in der Drum and Bass, Soundsystem-Kultur, Techno, Punk und Livemusik in verschiedenen Vierteln wohnen.',
  answerLabel: 'Was ist das Boomtown Festival',
  breadcrumbName: 'Was ist das Boomtown Festival',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Festival, gemacht zum Erkunden.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zum Boomtown Festival.',

  sections: [
    {id: 'boomtown-2027', heading: 'Boomtown 2027', title: 'Boomtown 2027.'},
    {id: 'festival-city', heading: 'Ein Festival, gebaut wie eine Stadt', title: 'Ein Festival, gebaut wie eine Stadt.'},
    {id: 'music', heading: 'Welche Musik Boomtown spielt', title: 'Welche Musik Boomtown spielt.'},
    {id: 'history', heading: 'Von 2009 zum Matterley Estate', title: 'Von 2009 zum Matterley Estate.'},
    {id: 'ownership', heading: 'Wem Boomtown gehört', title: 'Wem Boomtown gehört.'},
    {id: 'planning', heading: 'Matterley Estate und ein erster Besuch', title: 'Matterley Estate und ein erster Besuch.'}
  ],

  media: ({lang}) => ({
    'Opening ceremony': figure('opening-ceremony-2019', 1200, 900, 'Die Eröffnungszeremonie 2019 auf der Bühne mit Publikum bei Boomtown',
      'Die Eröffnungszeremonie 2019 machte das jährliche Kapitel im Arena-Maßstab sichtbar. Straßentheater und kleinere Räume tragen dieselbe fiktive Stadt zwischen den großen Bühnen. Foto: Sam Warrenger / TheFestivals.UK, CC BY-SA 4.0.'),
    'Scrapyard': figure('scrapyard-2019', 1200, 900, 'Industrielle Kulisse der Scrapyard-Bühne bei Boomtown 2019',
      'Das Scrapyard-Viertel 2019. Boomtown gibt Genres und Orten eine physische Adresse, auch wenn sich Namen und Geografie zwischen den Kapiteln ändern. Foto: Sam Warrenger / TheFestivals.UK, CC BY 4.0.'),
    'Wailers and Altern 8': articleVideoCollection({lang, label: 'Die Wailers und Altern 8 bei Boomtown', description: 'Die Wailers bei Boomtown 2014 sind das meistgesehene Boomtown-Performance-Video, das ich gefunden habe (17 Millionen Aufrufe). Altern 8 für Boiler Room bei Boomtown 2023 ist das elektronische Gegenstück.', items: [articleVideoCard({youtubeId: 'nx8LYGtQdDs', genre: 'BOOMTOWN, 2014', artist: 'The Wailers', title: 'Three Little Birds / One Love'}), articleVideoCard({youtubeId: 'aKxwl7rFCAE', genre: 'BOOMTOWN, 2023', artist: 'Altern 8', title: 'Boiler Room x Sports Banger'})]}),
    'thecatrave mix 1': ownSetListening(0, lang, 'Mein eigener Mix aus vielen Genres folgt derselben offenen Route zwischen Bass Music, Techno und Rave, ohne so zu tun, als stünde er für Boomtowns Programm.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Für die Stunden nach Schließung der Stadt: mein eigenes Set durch Techno, Breaks und Bass Music.'),
    'Tabelle: Facts': articleTable({
      headers: ['Thema', 'Stand'],
      rows: [
        ['Termine', '11. bis 15. August 2027'],
        ['Ort', 'Matterley Estate bei Winchester, Hampshire'],
        ['Ausgabe', 'Chapter Six: Wild Style'],
        ['Format', 'Fünftägiges Camping-Festival ab 18 Jahren'],
        ['Line-up 2027', 'noch nicht bekannt gegeben'],
        ['Planungshorizont', 'Die aktuelle Genehmigung für das Gelände läuft bis 2030']
      ].map(row => row.map(escapeHtml))
    })
  }),

  sources: [
    {href: 'https://www.boomtownfair.co.uk/', label: 'Boomtown: offizielle Termine 2027 und Kapitel'},
    {href: 'https://www.boomtownfair.co.uk/discover/history/', label: 'Boomtown: offizielle Festivalgeschichte'},
    {href: 'https://www.southdowns.gov.uk/', label: 'South Downs National Park: Planungsinformationen zum Matterley Estate'},
    {href: 'https://find-and-update.company-information.service.gov.uk/', label: 'UK Companies House: Boomtown Festival UK Limited'},
    {href: 'https://commons.wikimedia.org/wiki/File:Boomtown_Fair_Opening_Ceremony_2019_Chapter_11.jpg', label: 'Wikimedia Commons: Foto der Eröffnungszeremonie 2019 und Lizenz'}
  ],

  bandcamp: {
    description: 'Das Programm von Boomtown wandert durch mehrere Szenen statt durch ein Genre. Diese Veröffentlichungen von thecatrave gehören zu seiner elektronischen Seite; wer eine kauft, unterstützt Musik und Texte direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
