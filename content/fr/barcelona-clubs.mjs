// French Barcelona clubs guide. Structure and facts from the English page
// (barcelona-clubs-draft.md, barcelona-clubs-research.md,
// build-barcelona-clubs-article.mjs).
//
// French keywords, measured 2026-09-22 with Google Ads Keyword Planner
// (owner's account, country France, tool switch per KEYWORD-METHOD.md):
// boite de nuit barcelone 1K-10K. Live Google search (google.fr, hl=fr/
// gl=fr) surfaces Les Bons Plans de Barcelone ("Club Apolo : programmation
// éclectique... Razzmatazz : une boîte emblématique pour des soirées électro
// et alternatives"), barcelona.com/fr ("Opium Mar, Razzmatazz, Moog, La
// Terrazza, Wet Deck"), and visiterbarcelone.com ("Otto Zutz Club"). Only
// Razzmatazz, Moog and Club Apolo (Sala Apolo) repeat across 2+ of the
// French-language lists actually read.
//
// Like the English page, this guide keeps a genuine other-artist "Essential
// listening" block (Honey Dijon, filmed in Barcelona for Mixmag) rather than
// forcing an unverified claim about which room recorded it, and keeps the
// English page's choice of "Look" for the Macarena Club section.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/barcelona-clubs/${name}-${width}.webp`,
  srcset: `img/barcelona-clubs/${name}-320.webp 320w, img/barcelona-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-barcelona-clubs',
  file: 'fr/boite-de-nuit-barcelone.html',
  draft: 'fr/barcelona-clubs-draft.md',
  canonical: 'https://thecatrave.com/fr/boite-de-nuit-barcelone',
  englishPath: '/best-clubs-in-barcelona',
  ogImage: 'https://thecatrave.com/img/og/barcelona-clubs.jpg',
  bodyClass: 'article-page barcelona-clubs-page',

  title: 'Boite de nuit Barcelone : les meilleures boîtes',
  description: 'Razzmatazz, Nitsa et Macarena Club : la plus grande boîte de Barcelone est née d\'une salle de concerts, et les meilleures boîtes de nuit à Barcelone aujourd\'hui.',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  dateLabel: '22 septembre 2026',

  heroKicker: 'Boite de nuit Barcelone',
  heroTitle: 'Les meilleures boites de nuit à Barcelone, de Zeleste à Razzmatazz',
  deck: 'Une salle de concerts devenue la plus grande boîte de la ville, une soirée électronique vieille de trois décennies dans un ancien lieu de concerts, et une salle de flamenco devenue dancefloor : les meilleures boîtes de nuit à Barcelone aujourd\'hui.',
  answerLabel: 'Les meilleures boites de nuit à Barcelone',
  breadcrumbName: 'Les meilleures boites de nuit à Barcelone',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Des bâtiments qui changent d\'usage, pas des clubs nés de rien.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les boites de nuit à Barcelone.',

  sections: [
    {id: 'zeleste-razzmatazz', heading: 'Zeleste, Razzmatazz et la salle née d\'un lieu de concerts', title: 'Zeleste, Razzmatazz et la salle née d\'un lieu de concerts.'},
    {id: 'apolo-nitsa', heading: 'Sala Apolo et Nitsa', title: 'Sala Apolo et Nitsa.'},
    {id: 'macarena', heading: 'Macarena Club : un tablao flamenco devenu boite de nuit', title: 'Macarena Club : un tablao flamenco devenu boite de nuit.'},
    {id: 'best-clubs-now', heading: 'Les meilleures boites de nuit à Barcelone aujourd\'hui', title: 'Les meilleures boites de nuit à Barcelone aujourd\'hui.'},
    {id: 'where-to-go', heading: 'Où aller : Barri Gòtic, Eixample et les clubs de plage', title: 'Où aller : Barri Gòtic, Eixample et les clubs de plage.'}
  ],

  media: ({lang}) => ({
    'Extérieur du Razzmatazz': figure('razzmatazz-exterior', 1280, 822,
      'La façade de Sala Razzmatazz dans le quartier de Poblenou, Barcelone',
      'Razzmatazz à Poblenou, sur le terrain libéré après la fermeture de Zeleste. Photo : Zarateman, domaine public (CC0).'),
    'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, lang, 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre mix.'),
    'thecatrave mix I Lost So Many Weekends Raving and I Wanna Lose Some More': ownSetListening(1, lang),
    'thecatrave Look': ownTrackListening('look', 'Future bass, glitch et breakbeat, proche de l\'énergie resserrée d\'une salle de la taille de Macarena Club. Mon propre morceau.', lang),
    'Honey Dijon Barcelona': articleVideoCollection({
      label: 'Honey Dijon, DJ set filmé à Barcelone',
      description: "Le set d'Honey Dijon pour le Burn Energy Tour de Mixmag, filmé à Barcelone plutôt que dans l'une des boîtes de cette page, sur la propre chaîne YouTube de Mixmag.",
      items: [articleVideoCard({youtubeId: 'l35ok-7n2IU', genre: 'House', artist: 'Honey Dijon', title: 'DJ set, Burn Energy Tour x Mixmag, Barcelone'})]
    }),
    'Table: now': articleTable({
      headers: ['Boîte', 'Quartier', 'Musique et caractère', 'Idéal pour'],
      rows: [
        ['Razzmatazz', 'Poblenou', 'Cinq salles, chacune avec sa programmation, de la techno et de la house à l\'indie et à la pop', 'La plus grande boîte de la ville, plusieurs soirées sous un même toit'],
        ['Sala Apolo (Nitsa)', 'Poble Sec', 'Une soirée électronique qui tourne depuis 1996 dans un lieu de concerts bien plus ancien', 'Une programmation électronique longue et sérieuse dans un lieu historique'],
        ['Macarena Club', 'Barri Gòtic, à côté des Ramblas', 'Un seul dancefloor, capacité d\'environ 300, musique électronique', 'Une salle intime, plus proche d\'une fête entre amis'],
        ['Moog', 'Barri Gòtic', 'Bien établi et cité par tous les guides actuels consultés pour cette page', 'Une valeur sûre dans la vieille ville']
      ].map(row => row.map(escapeHtml)),
      label: 'Les meilleures boites de nuit à Barcelone aujourd\'hui'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Razzmatazz_(club)', label: 'Wikipedia : Razzmatazz (club)'},
    {href: 'https://www.webarcelona.net/nightlife-barcelona/razzmatazz', label: 'WeBarcelona : Razzmatazz'},
    {href: 'https://www.catalunya.com/razzmatazz-17-18003-14', label: 'Turisme de Catalunya : Razzmatazz Barcelona'},
    {href: 'https://www.thenewbarcelonapost.com/en/history-sala-apolo/', label: 'The New Barcelona Post : Did you know that Sala Apolo was an amusement park?'},
    {href: 'https://djmag.com/nitsa', label: 'DJ Mag : Nitsa, Top 100 Clubs'},
    {href: 'https://www.primaverasound.com/en/primavera-pro/nitsa-club-30-years', label: "Primavera Sound : Nitsa Club, 30 anys transformant l'escena electrònica"},
    {href: 'https://www.sala-apolo.com/en/clubs/nitsa', label: 'Sala Apolo : Nitsa'},
    {href: 'https://ra.co/features/2226', label: 'Resident Advisor : RA In Residence, Macarena Club'},
    {href: 'https://ra.co/guides/clubs-in-barcelona', label: 'Resident Advisor : Best Clubs in Barcelona in 2026'},
    {href: 'https://www.barcelona-tourist-guide.com/en/club/macarena-club-barcelona.html', label: 'Barcelona Tourist Guide : Macarena Club in Barcelona'}
  ],

  bandcamp: {
    description: 'Deux de mes morceaux. En acheter un soutient mon travail directement.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
