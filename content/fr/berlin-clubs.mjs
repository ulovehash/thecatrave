// French Berlin clubs guide. Structure and facts from the English page
// (berlin-clubs-draft.md, berlin-clubs-research.md, build-berlin-clubs-article.mjs).
//
// French keywords, measured 2026-09-18 with keywords-explorer-matching-terms,
// country fr (keywords/fr-berlin-clubs.json): kitkat club berlin 1,100 a
// month, boite de nuit berlin 400. French searchers write "boite" without the
// circumflex, which the 1990 spelling reform allows, so the page does too.
// "berghain berlin" (1,900) is navigational, as on the English and German
// pages; the Berghain videur, the libertine clubs and the football clubs are
// rejected in the map.
//
// Like the English page, this guide carries no mixes of the owner's.
//
// The images are the English guide's, in img/berlin-clubs/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleListeningBand, articleTable, articleYoutubeEmbed
} from '../../site-components.mjs';
import {t} from '../../i18n.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/berlin-clubs/${name}-${width}.webp`,
  srcset: `img/berlin-clubs/${name}-320.webp 320w, img/berlin-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

export default {
  lang: 'fr',
  name: 'fr-berlin-clubs',
  file: 'fr/boite-de-nuit-berlin.html',
  draft: 'fr/berlin-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-berlin',
  englishPath: '/best-clubs-in-berlin',
  ogImage: 'https://thecatrave.com/img/og/berlin-clubs.jpg',
  bodyClass: 'article-page berlin-clubs-page',

  title: 'Boite de nuit Berlin : les meilleurs clubs et leurs légendes',
  description: 'Berghain, Tresor, KitKat et les clubs d’avant : les meilleurs clubs de Berlin, comment chacun est devenu célèbre, et les sets à écouter avant d’y aller.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  dateLabel: '18 septembre 2026',

  heroKicker: 'Clubs de Berlin',
  heroTitle: 'Boite de nuit Berlin : les meilleurs clubs et leurs légendes',
  deck: 'De l’UFO et du Tresor au Berghain et au Sisyphos : les salles qui ont fait de Berlin une ville techno, les clubs célèbres qui ont fermé, et ceux qui sont encore ouverts.',
  answerLabel: 'Les meilleurs clubs de Berlin',
  breadcrumbName: 'Boite de nuit Berlin',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Les légendes d’abord, le week-end ensuite.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les clubs de Berlin.',

  sections: [
    {id: 'before-berghain', heading: 'Avant le Berghain : comment Berlin est devenue une ville techno', title: 'Avant le Berghain : comment Berlin est devenue une ville techno.'},
    {id: 'berghain', heading: 'Le Berghain et le Panorama Bar', title: 'Le Berghain et le Panorama Bar.', subsections: ['the-door']},
    {id: 'closed-legends', heading: 'Les légendes qui ont fermé', title: 'Les légendes qui ont fermé.'},
    {id: 'best-clubs-now', heading: 'Les meilleurs clubs de Berlin aujourd’hui', title: 'Les meilleurs clubs de Berlin aujourd’hui.', subsections: ['sisyphos']},
    {id: 'how-berlin-clubs-work', heading: 'Comment fonctionnent les clubs de Berlin : dress code, téléphones, le week-end', title: 'Comment fonctionnent les clubs de Berlin : dress code, téléphones, le week-end.'},
    {id: 'hear-berlin', heading: 'Écouter Berlin avant d’y aller', title: 'Écouter Berlin avant d’y aller.'}
  ],

  media: ({lang}) => ({
    'Tresor 2003': figure('tresor-2003', 1200, 900,
      'L’entrée du Tresor d’origine sur la Leipziger Strasse, à Berlin, en 2003',
      'La première adresse du Tresor, sur la Leipziger Strasse, en septembre 2003. Le club y a fermé deux ans plus tard. Photo : MichaelBrossmann, domaine public.'),
    'Tresor door': figure('tresor-door', 1200, 900,
      'Une porte du Tresor exposée dans l’exposition Berlin Global au Humboldt Forum',
      'Une porte du Tresor d’origine, aujourd’hui dans l’exposition Berlin Global du Humboldt Forum. Photo : Fridolin freudenfett, CC BY-SA 4.0.'),
    'Berghain entrance': figure('berghain', 1200, 800,
      'L’entrée du Berghain dans l’ancienne centrale thermique de Friedrichshain, à Berlin',
      'L’entrée du Berghain en 2017. Les photos ne vont pas plus loin. Photo : Michael Mayer, CC BY 2.0.'),
    'Bar 25': figure('bar25', 1200, 900,
      'Le Bar 25 au bord de la Spree, à Berlin, en août 2009',
      'Le Bar 25 au bord de la Spree en août 2009, un an avant sa fermeture. Photo : Cornelius Bartke, CC BY-SA 2.0.'),
    'Watergate': figure('watergate', 1200, 800,
      'Le club Watergate vu depuis la Spree, à Berlin',
      'Le Watergate vu de la Spree en 2013. Il a fermé fin 2024. Photo : Alexander, CC BY-SA 2.0.'),
    'Sisyphos': figure('sisyphos', 1200, 800,
      'Le club Sisyphos sur la Hauptstraße, à Berlin-Rummelsburg',
      'Le Sisyphos sur la Hauptstraße, à Rummelsburg, en 2022, sur l’ancien site industriel où la fête a grandi. Photo : Rio65trio, CC BY-SA 4.0.'),
    'Der Klang der Familie': articleListeningBand({
      platform: 'soundcloud',
      id: 'klang-der-familie',
      kicker: t(lang).essentialListening,
      title: '3 Phase featuring Dr. Motte, Der Klang der Familie : la sortie originale.',
      description: 'La sixième sortie de Tresor Records et le titre de l’histoire orale de la techno berlinoise. Les deux faces du maxi, Der Klang der Familie et Open Your Mind, remasterisées, sur le SoundCloud de Dr. Motte.',
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
      iframeTitle: 'Der Klang der Familie et Open Your Mind par 3 Phase featuring Dr. Motte, sur le SoundCloud de Dr. Motte',
      fullBleed: true,
      tone: 'cyan'
    }),
    'Teenage Mutants live from Sisyphos': youtube('zjfPd4jNZao',
      'Teenage Mutants en live au Sisyphos, Berlin, Drumcode Radio Live DCR829, sur la chaîne YouTube de Drumcode'),
    'Ellen Allien HÖR': youtube('GG2IQguY-J0',
      'Ellen Allien, TTT x HÖR, sur la chaîne YouTube de HÖR Berlin'),
    // Status as in the English generator (RA's 2026 guide, Time Out and the
    // clubs' Wikipedia articles, checked 2026-09-10). Revisit with it.
    'Table: now': articleTable({
      headers: ['Club', 'Quartier', 'Musique et caractère', 'Idéal pour', 'Entrée'],
      rows: [
        ['Tresor', 'Mitte', 'Techno de Detroit et de Berlin dans une ancienne centrale', 'L’histoire et la techno dure', 'Billet ou vente à l’entrée, selon l’événement'],
        ['Berghain / Panorama Bar', 'Friedrichshain', 'Techno en bas, house en haut ; pas de photos', 'Un long week-end et une ligne musicale claire', 'Sélection à l’entrée ; prévente pour certains événements seulement'],
        ['KitKatClub', 'Mitte', 'Techno avec codes fétiche, latex, cuir et glamour', 'Soirées à thème sex-positive', 'Dress code strict selon l’événement'],
        ['Kater', 'Friedrichshain', 'House et techno avec l’esprit joueur de la famille du Bar 25', 'Fêtes marathon au bord de la Spree', 'Vente à l’entrée ; programme variable'],
        ['Sisyphos', 'Rummelsburg', 'Cinq pistes et un espace extérieur dans une ancienne usine', 'Un week-end entier plutôt qu’une salle', 'Sélection à l’entrée ; longs horaires de week-end'],
        ['Club der Visionaere', 'Alt-Treptow', 'Minimal et sessions intimes au bord du canal', 'Le clubbing d’été à petite échelle', 'Selon l’événement et la capacité'],
        ['OST', 'Friedrichshain', 'Programmation électronique sur plusieurs salles dans un bâtiment industriel', 'Les grandes nuits façon entrepôt', 'Généralement billet ou vente à l’entrée'],
        ['Wilde Renate', 'Friedrichshain', 'House, techno et salles à thème dans un ancien immeuble d’habitation', 'Explorer plusieurs salles', 'Sélection à l’entrée ; vérifier l’événement en cours']
      ].map(row => row.map(escapeHtml)),
      label: 'Les meilleurs clubs de Berlin aujourd’hui'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Tresor_(club)', label: 'Wikipedia : Tresor (club)'},
    {href: 'https://en.wikipedia.org/wiki/Tresor_Records', label: 'Wikipedia : Tresor Records'},
    {href: 'https://www.vice.com/en/article/der-klang-der-familie-the-sound-of-the-family-felix-denk-interview-berlin-techno-berlin-wall-tresor-ufo/', label: 'VICE  : entretien avec Felix Denk sur Der Klang der Familie, 2014'},
    {href: 'https://en.wikipedia.org/wiki/Berghain', label: 'Wikipedia : Berghain'},
    {href: 'https://de.wikipedia.org/wiki/E-Werk_(Berlin)', label: 'Wikipedia : E-Werk (Berlin)'},
    {href: 'https://en.wikipedia.org/wiki/Bar_25', label: 'Wikipedia : Bar 25'},
    {href: 'https://de.wikipedia.org/wiki/Kater_Blau', label: 'Wikipedia : Kater Blau'},
    {href: 'https://de.wikipedia.org/wiki/Watergate_(Club)', label: 'Wikipedia : Watergate (Club)'},
    {href: 'https://de.wikipedia.org/wiki/Salon_zur_Wilden_Renate', label: 'Wikipedia : Salon zur Wilden Renate'},
    {href: 'https://en.wikipedia.org/wiki/KitKatClub', label: 'Wikipedia : KitKatClub'},
    {href: 'https://de.wikipedia.org/wiki/Sisyphos_(Berlin)', label: 'Wikipedia : Sisyphos (Berlin)'},
    {href: 'https://www.tagesspiegel.de/berlin/streifzug-durch-die-clubs-von-berlin-jetzt-steigt-die-party-in-lichtenberg/10119176.html', label: 'Tagesspiegel : Jetzt steigt die Party in Lichtenberg, 2014'},
    {href: 'https://www.fazemag.de/sisyphos-ist-vorerst-zu/', label: 'FAZE Mag : Sisyphos ist vorerst zu, 2014'},
    {href: 'https://ra.co/guides/clubs-in-berlin', label: 'Resident Advisor : Best Clubs in Berlin, 2026'},
    {href: 'https://www.bbc.com/travel/article/20240322-berlin-techno-scene-gains-unesco-status', label: 'BBC Travel : How Berlin’s techno scene transformed the city and gained UNESCO status, 2024'},
    {href: 'https://hoer.live/imprint/', label: 'HÖR  : mentions légales'}
  ],

  bandcamp: {
    description: 'Deux de mes morceaux, dont un avec Berlin dans le titre. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
