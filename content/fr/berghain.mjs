// French Berghain guide. Structure, facts and media from the English page
// (berghain-draft.md, build-berghain-article.mjs), translated 2026-10-06 on the
// owner's instruction. All dated facts are the English page's, read on
// 2026-10-04 from berghain.berlin: keep practical information aligned with the English guide.
// Search wording from live Bing fr-FR (2026-10-06); volumes in
// keywords/fr-berghain.json. The images are the English guide's, with
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
  lang: 'fr',
  name: 'fr-berghain',
  file: 'fr/berghain.html',
  draft: 'fr/berghain-draft.md',
  canonical: 'https://thecatrave.com/fr/berghain',
  englishPath: '/berghain',
  ogImage: 'https://thecatrave.com/img/og/berghain.jpg',
  bodyClass: 'article-page berghain-page',
  minReadingMinutes: 6,
  image: 'https://thecatrave.com/img/berghain/berghain-facade-1200.webp',

  title: 'Berghain : Panorama Bar, son et DJ résidents',
  description: 'Le Berghain expliqué : l’ancienne centrale, le Panorama Bar à l’étage, la Halle am Berghain, la Kantine et le label Ostgut Ton.',
  datePublished: '2026-10-06',
  dateModified: '2026-10-08',
  dateLabel: '8 octobre 2026',

  heroKicker: 'Guide de club, Berlin',
  heroTitle: 'Berghain : Panorama Bar, son et DJ résidents',
  deck: 'Le club berlinois d’une ancienne centrale : ses floors, la Halle et la Kantine, qui joue, le système son, et les horaires et prix que liste le site officiel.',
  answerLabel: 'Berghain',
  breadcrumbName: 'Berghain',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une centrale à Friedrichshain.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le Berghain.',

  sections: [
    {id: 'panorama-bar', heading: 'Qu’est-ce que le Panorama Bar ?', title: 'Qu’est-ce que le Panorama Bar ?'},
    {id: 'halle', heading: 'Qu’est-ce que la Halle am Berghain ?', title: 'Qu’est-ce que la Halle am Berghain ?'},
    {id: 'kantine', heading: 'Qu’est-ce que la Kantine du Berghain ?', title: 'Qu’est-ce que la Kantine du Berghain ?', tocLabel: 'Qu’est-ce que la Kantine ?'},
    {id: 'lineup', heading: 'Qui joue au Berghain ?', title: 'Qui joue au Berghain ?'},
    {id: 'sound', heading: 'À quoi ressemble le son du Berghain ?', title: 'À quoi ressemble le son du Berghain ?'},
    {id: 'hours-tickets', heading: 'Horaires et billets', title: 'Horaires et billets du Berghain', subsections: ['opening-hours', 'entry-and-prices', 'dress-code', 'queue', 'accessibility-and-support-inside', 'getting-there-and-getting-home']}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Un mix de DJ à écouter en lisant l’étage berlinois du dessus. Mon propre mix.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    facade: figure('berghain-facade', 1200, 900,
      'La façade grise néoclassique du bâtiment du Berghain à Berlin, avec quelques personnes à l’entrée et des vélos garés derrière des barrières',
      'Le bâtiment du Berghain à Berlin, juin 2007. Photo : Jane Mejdahl, CC BY-SA 2.0.'),
    street: figure('berghain-heizkraftwerk', 1200, 1200,
      'L’angle du bâtiment du Berghain vu depuis Am Wriezener Bahnhof, avec une sculpture rouille et des graffitis au niveau de la rue',
      'Le Berghain vu depuis Am Wriezener Bahnhof, 8 août 2024, recadré. Photo : Gunnar Klack, CC BY-SA 4.0.'),
    queue: figure('berghain-queue', 1200, 808,
      'Des personnes derrière des barrières métalliques devant l’entrée du Berghain, couverte de graffitis',
      'Des personnes attendent à l’entrée du Berghain, décembre 2019. Photo : Ben Kaden, CC BY 2.0.'),
    // Sets from this site's catalogue, as on the English page (oEmbed-checked 2026-10-04).
    Residents: articleVideoCollection({
      lang,
      label: 'Sets de DJ résidents du Berghain',
      description: 'Sets Boiler Room Berlin de quatre DJ que la presse nomme résidents du Berghain ou du Panorama Bar.',
      items: [
        articleVideoCard({youtubeId: 'DGWL7YI_2rI', genre: 'Boiler Room', artist: 'Ben Klock', title: 'Ben Klock Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'jQRI3b2SX8c', genre: 'Boiler Room', artist: 'Len Faki', title: 'Len Faki Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: 'fgYVNi1vK1E', genre: 'Boiler Room', artist: 'Prosumer', title: 'Prosumer Boiler Room Berlin DJ Set'}),
        articleVideoCard({youtubeId: '0EX18zMgGig', genre: 'Boiler Room', artist: 'Tama Sumo', title: 'Tama Sumo Boiler Room Berlin DJ Set'})
      ]
    }),

  }),

  sources: [
    {html: `Programme, floors, prix, horaires, adresse et informations pratiques : ${ext('https://www.berghain.berlin/en/', 'berghain.berlin')}, ${ext('https://www.berghain.berlin/en/program/', 'programme')}, ${ext('https://www.berghain.berlin/en/program/kantine-am-berghain/', 'programme de la Kantine')}, ${ext('https://www.berghain.berlin/en/program/halle/', 'programme de la Halle')}, ${ext('https://www.berghain.berlin/en/contact', 'page de contact')}, ${ext('https://www.berghain.berlin/en/awareness/', 'page awareness')} et ${ext('https://www.berghain.berlin/en/program/archive/2026/05/', 'archives du programme 2026')}.`},
    {html: `Histoire du bâtiment, anciens usages des espaces et capacité : ${ext('https://industriekultur.berlin/ort/berghain/', 'Berliner Zentrum Industriekultur')}. Classement : ${ext('https://denkmaldatenbank.berlin.de/daobj.php?obj_dok_nr=09085197', 'Landesdenkmalamt Berlin, Denkmaldatenbank, objet 09085197')}.`},
    {html: `Intérieur, installation du foyer et aménagement du Panorama Bar : ${ext('https://www.karhard.de/projects/berghain', 'Karhard Architekten, page de projet Berghain')}.`},
    {html: `Dates de l’Ostgut et résidents : ${ext('https://crackmagazine.net/article/long-reads/now-time-marcel-dettmann-ben-klock-interviewed/', 'Crack, entretien avec Marcel Dettmann et Ben Klock, 2017')} et ${ext('https://groove.de/2022/10/10/ein-nachruf-auf-ostgut-booking-mehr-als-ein-weiterer-technoclub/', 'Groove, hommage à Ostgut Booking, 2022')}.`},
    {html: `Système son : ${ext('https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', 'Mixmag, 18 octobre 2023')} et ${ext('https://groove.de/2023/10/23/berghain-soundanlage-nach-18-jahren-ausgetauscht/', 'Groove, 23 octobre 2023')}. Série de mixes : ${ext('https://ra.co/news/12034', 'Resident Advisor, 26 avril 2010')}.`}
  ],

  bandcamp: {
    description: 'Entre deux soirées club, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
