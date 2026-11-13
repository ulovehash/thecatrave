// French Australian EDM festivals comparison. Structure, facts, dates and the
// "annoncé", "annoncé par la presse" and "pas encore annoncé" labels from the
// English page (best-edm-festivals-australia-draft.md,
// build-australia-festivals-article.mjs), dated 31 October 2026.
//
// French wording: Keyword Planner (France, French, 13 November 2026) returned
// only 10-100 buckets ("festival en australie", "beyond the valley festival",
// "pitch festival", "ultra australia") and 0-10 for "festival edm australie",
// so the head term is unmeasured (keywords/fr-australia-festivals.json).
//
// Maintenance: the dates are the English page's. Change them here and in the
// draft whenever the English page changes them; the page is registered in
// festival-editions.mjs with the other roundups.
//
// The images are the English page's, in img/australia-festivals/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownPlaylistListening, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const fig = (name, width, height, alt, caption) => articleFigure({
  src: `img/australia-festivals/${name}-1200.webp`,
  srcset: `img/australia-festivals/${name}-320.webp 320w, img/australia-festivals/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const link = ([href, label]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const festivals = [
  ['Subsonic', 'Monkerai, NSW', 'Du 13 au 15 novembre 2026', 'Électronique, quatre scènes', 'Camping', 'Un week-end dans le bush'],
  ['Strawberry Fields', 'Tocumwal, NSW', 'Du 20 au 22 novembre 2026 (annoncé)', 'Électronique', 'Camping', 'Le Murray au printemps'],
  ['Beyond the Valley', 'Hesse, Victoria', 'Du 28 décembre 2026 au 1er janvier 2027 (complet)', 'EDM et plus', 'Camping', 'Le plus grand Nouvel An'],
  ['Lost Paradise', 'Glenworth Valley, NSW', 'Du 28 décembre 2026 au 1er janvier 2027 (complet)', 'Électronique et plus', 'Camping', 'Le Nouvel An près de Sydney'],
  ['Dreamstate', 'Sydney ; Melbourne', '6 et 7 février 2027 (annoncé par la presse)', 'Trance', 'Ville', 'Une grande nuit'],
  ['Pitch', 'Moyston, Victoria', 'Du 5 au 9 mars 2027 (complet)', 'House, techno', 'Camping', 'Un festival pensé comme un club'],
  ['Ultra Australia', 'Melbourne ; Gold Coast', '17 et 18 avril 2027', 'EDM de grande scène', 'Ville', 'Ultra sans quitter le pays'],
  ['Electric Island', 'Adelaide, Melbourne, Perth', 'Pas encore annoncé (2026 : avril)', 'Électronique', 'Ville', 'Une journée au bord de l’eau'],
  ['Knockout Outdoor', 'Sydney', 'Pas encore annoncé (2026 : 3 octobre)', 'Hardstyle, hardcore', 'Ville', 'Le hard dance']
];

export default {
  lang: 'fr',
  name: 'fr-australia-festivals',
  file: 'fr/festivals-edm-australie.html',
  draft: 'fr/australia-festivals-draft.md',
  canonical: 'https://thecatrave.com/fr/festivals-edm-australie',
  englishPath: '/best-edm-festivals-australia',
  ogImage: 'https://thecatrave.com/img/og/australia-festivals.jpg',
  bodyClass: 'article-page australia-festivals-page',
  minReadingMinutes: 6,

  title: 'Festivals EDM en Australie 2027 : Beyond the Valley, Pitch',
  description: 'Festivals EDM en Australie en 2027 : Beyond the Valley au Nouvel An, Pitch du 5 au 9 mars, Ultra Australia en avril. Dates, États et sons comparés.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Les meilleurs festivals EDM en Australie en 2027',
  deck: 'Les festivals EDM en Australie comparés par État, par son et par saison, du Nouvel An dans le Victoria aux Grampians en mars, avec les dates confirmées et celles qui restent à venir.',
  answerLabel: 'Les meilleurs festivals EDM en Australie',
  breadcrumbName: 'Festivals EDM en Australie',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une liste pour choisir son festival.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes sur les festivals EDM en Australie',
  faqTitle: 'Questions fréquentes sur les festivals EDM en Australie.',

  sections: [
    {id: 'criteria', heading: 'Comment cette liste a été établie', title: 'Comment cette liste a été établie.', tocLabel: 'Comment la liste a été établie'},
    {id: 'at-a-glance', heading: 'Dates des festivals EDM en Australie 2027 en un coup d’œil', title: 'Dates des festivals EDM en Australie 2027 en un coup d’œil.', tocLabel: 'Les dates en un coup d’œil'},
    {id: 'biggest', heading: 'Quel est le plus grand festival EDM en Australie ?', title: 'Quel est le plus grand festival EDM en Australie ?', tocLabel: 'Le plus grand festival EDM'},
    {id: 'raves', heading: 'Quelles sont les plus grandes raves en Australie ?', title: 'Quelles sont les plus grandes raves en Australie ?', tocLabel: 'Les plus grandes raves',
      subsections: ['dreamstate', 'knockout-outdoor', 'electric-island']},
    {id: 'victoria', heading: 'Melbourne et le Victoria', title: 'Melbourne et le Victoria.', tocLabel: 'Melbourne et le Victoria'},
    {id: 'house-techno', heading: 'Quels festivals pour la house et la techno ?', title: 'Quels festivals pour la house et la techno ?', tocLabel: 'House et techno',
      subsections: ['pitch', 'strawberry-fields', 'subsonic']},
    {id: 'ultra', heading: 'Ultra est-il de retour en Australie ?', title: 'Ultra est-il de retour en Australie ?', tocLabel: 'Ultra Australia'},
    {id: 'not-listed', heading: 'Ce qui ne figure pas dans cette liste, et pourquoi', title: 'Ce qui ne figure pas dans cette liste, et pourquoi.', tocLabel: 'Hors liste, et pourquoi'},
    {id: 'choose', heading: 'Comment choisir', title: 'Comment choisir.', tocLabel: 'Comment choisir'}
  ],

  media: ({lang}) => ({
    'Table: dates': articleTable({label: 'Les festivals EDM en Australie comparés, 2026 à 2027',
      headers: ['Festival', 'Où', 'Prochaines dates', 'Son', 'Hébergement', 'Idéal pour'], rows: festivals}),
    grampians: fig('grampians-halls-gap', 1200, 800,
      'Les Grampians, dans le Victoria, vus depuis Halls Gap',
      'Les Grampians depuis Halls Gap, la chaîne au pied de laquelle se tient Pitch. Photo : DXR, CC BY-SA 4.0.'),
    tocumwal: fig('tocumwal-beach', 1200, 803,
      'La plage de Tocumwal, au bord du Murray',
      'Tocumwal, au bord du Murray, la ville la plus proche de Strawberry Fields. Photo : Mattinbgn, CC BY 3.0.'),
    riverwood: fig('riverwood-downs', 1200, 398,
      'Un panorama au coucher du soleil sur Riverwood Downs, à Monkerai',
      'Riverwood Downs, où se tient Subsonic. Photo : Marc Dalmulder, CC BY 2.0.'),
    intercell: articleVideoCollection({
      lang, label: 'Melbourne, depuis chez soi',
      description: 'Clara Cuvé à l’Intercell, à Naarm/Melbourne, filmée par l’Intercell en 2025. Une DJ invitée lors d’une soirée club à Melbourne.',
      items: [articleVideoCard({youtubeId: 'xBP4SB0Pbjw', genre: 'Melbourne, 2025', artist: 'Clara Cuvé', title: 'Intercell Naarm/Melbourne'})]
    }),
    playlist: ownPlaylistListening('rare-electronic-music', lang),
    track: ownTrackListening('late-summer-cloud-dance', 'Mon propre court morceau de liquid breakbeat.', lang),
    'first-mix': ownSetListening(0, lang),
    'second-mix': ownSetListening(1, lang)
  }),

  sources: [
    {html: `Dates tirées du site de chaque festival : ${[
      ['https://beyondthevalley.com.au/', 'Beyond The Valley'], ['https://lostparadise.com.au/', 'Lost Paradise'], ['https://pitchfestival.com.au/', 'Pitch'],
      ['https://subsonicmusic.com.au/', 'Subsonic'], ['https://ultraaustralia.com/', 'Ultra Australia']
    ].map(link).join(', ')}, et la ${link(['https://events.humanitix.com/emergentform', 'billetterie de Rainbow Spirit'])}.`},
    {html: `Dates annoncées ou rapportées par la presse : Strawberry Fields (${link(['https://www.nsw.gov.au/visiting-and-exploring-nsw/nsw-events/strawberry-fields-festival', 'NSW Government events'])}), Dreamstate (${link(['https://www.sydneyshowground.com.au/whats-on/dreamstate/', 'Sydney Showground'])}, ${link(['https://www.noise11.com/news/tiesto-dreamstate-australia-2027-trance-set-20260615', 'Noise11'])}), Electric Island (${link(['https://www.thenote.com.au/news/edm-festival-electric-island-returns-in-2026', 'The Note'])}), Knockout Outdoor (${link(['https://www.thatfestivalsite.com/article/Knockout%20Outdoor%202026%20Ticket%20Prices%20Revealed', 'That Festival Site'])}). Tous en anglais.`},
    {html: `Annulation de hypersonic : ${link(['https://hypersonicfestival.au/', 'hypersonicfestival.au'])}.`},
    {html: `Fréquentation de Beyond The Valley : ${link(['https://themusicnetwork.com/news/beyond-the-valley-sells-out-in-presale', 'The Music Network'])} et ${link(['https://au.rollingstone.com/music/music-news/beyond-the-valley-rings-in-2026-with-record-crowds-89376/', 'Rolling Stone Australia'])} (en anglais).`},
    {href: 'https://djmag.com/top100festivals', label: 'DJ Mag (en anglais) : Top 100 Festivals 2026'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même : des breaks avec de la techno et du dub dedans. En acheter une sortie soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'}
    ]
  }
};
