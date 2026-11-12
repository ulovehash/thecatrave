// French best nightclubs in the world guide. Structure, facts and media from
// the English page (best-nightclubs-in-the-world-draft.md), by way of the
// German sibling; localised, not translated word for word.
//
// Keywords (keywords/fr-best-nightclubs-in-the-world.json): Google Ads Keyword
// Planner, France, French, 2026-11-12 (volume buckets), plus Google fr-FR SERP.
//
// The images are the English guide's, in img/best-nightclubs-in-the-world/,
// with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-nightclubs-in-the-world/${name}-1200.webp`,
  srcset: `img/best-nightclubs-in-the-world/${name}-320.webp 320w, img/best-nightclubs-in-the-world/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-best-nightclubs-in-the-world',
  file: 'fr/meilleur-club-du-monde.html',
  draft: 'fr/best-nightclubs-in-the-world-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleur-club-du-monde',
  englishPath: '/best-nightclubs-in-the-world',
  ogImage: 'https://thecatrave.com/img/og/best-nightclubs-in-the-world.jpg',
  bodyClass: 'article-page best-nightclubs-in-the-world-page',
  minReadingMinutes: 6,

  title: 'Meilleur club du monde : 20 boîtes de nuit du Top 100 DJ Mag 2026',
  description: '20 clubs du Top 100 DJ Mag 2026, d’[UNVRS] et Berghain à GREENVALLEY, Club Space et WOMB : rangs, capacités, la plus grande boîte de nuit du monde et des sets.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide de club, monde',
  heroTitle: 'Meilleur club du monde : 20 boîtes de nuit du Top 100 DJ Mag 2026',
  deck: 'Vingt clubs sur quatre continents, d’[UNVRS] et Berghain à GREENVALLEY, Club Space, Zouk et WOMB, avec les rangs, les tailles et des sets à écouter.',
  answerLabel: 'Les meilleurs clubs du monde',
  breadcrumbName: 'Meilleur club du monde',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Ce que « meilleur » veut dire pour un club.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les meilleurs clubs du monde.',

  sections: [
    {id: 'nightclubs', heading: 'Meilleures boîtes de nuit du monde', tocLabel: 'Le classement', title: 'Meilleures boîtes de nuit du monde'},
    {id: 'dance-clubs', heading: 'Meilleurs clubs du monde par région', tocLabel: 'Par région', title: 'Meilleurs clubs du monde par région', subsections: ['europe', 'north-america', 'south-america', 'asia']},
    {id: 'biggest', heading: 'Plus grande boîte de nuit du monde', tocLabel: 'Les plus grands', title: 'Plus grande boîte de nuit du monde'},
    {id: 'famous', heading: 'Clubs les plus célèbres du monde : les plus anciens', tocLabel: 'Les plus anciens', title: 'Clubs les plus célèbres du monde : les plus anciens'},
    {id: 'best-techno-clubs', heading: 'Meilleur club techno du monde', tocLabel: 'Clubs techno', title: 'Meilleur club techno du monde'},
    {id: 'exclusive', heading: 'Clubs les plus exclusifs du monde', tocLabel: 'Les plus exclusifs', title: 'Clubs les plus exclusifs du monde'}
  ],

  media: ({lang}) => ({
    'Image: Studio 338': figure('studio-338-2020', 1200, 801, 'Le bâtiment de Studio 338 sur la péninsule de Greenwich, avec la structure d’un gazomètre derrière', 'Studio 338 sur la péninsule de Greenwich, 1er février 2020. Photo : Ewan-M, CC BY-SA 4.0.'),
    'Image: Echostage': figure('echostage-2024', 1200, 856, 'Le public d’Echostage à Washington devant une scène éclairée et des murs LED', 'Echostage, Washington, 7 juin 2024. Photo : APK, CC BY 4.0.'),
    'Image: Club Space': figure('club-space-2019', 1200, 801, 'Le public et des boules à facettes sous un toit de plantes sur la Terrace de Club Space, à Miami', 'La Terrace de Club Space, Miami, 2 juin 2019. Photo : Lauren Maurell, CC BY-SA 4.0.'),
    'Image: Hakkasan': figure('hakkasan-2016', 1200, 900, 'Hakkasan à Las Vegas, une piste bondée sous une lumière rose, la cabine du DJ à droite', 'Hakkasan, Las Vegas, 7 octobre 2016. Photo : David Jones, CC BY 2.0.'),
    'Image: D-Edge': figure('d-edge-2015', 960, 640, 'Un DJ aux platines du D-Edge à São Paulo, une banderole Moving posée sur la table de mixage', 'Un DJ au D-Edge, São Paulo, 15 octobre 2015. Photo : LucasArr, CC BY-SA 4.0.'),
    'Embed: Hi Ibiza': articleVideoCollection({lang, label: 'Enregistré au Hï Ibiza', description: 'Une session de 2022 dans le Hï Garden, publiée par DJ Mag.', items: [
      articleVideoCard({youtubeId: 'w8xQnshEIKg', genre: 'Hï Ibiza, 2022', artist: 'DJ Mag', title: 'Layla Benitez au Hï Ibiza Garden'})
    ]}),
    'Embed: Club Space': articleVideoCollection({lang, label: 'Enregistré à Club Space', description: 'Trois sets de 2023 publiés sur la chaîne du club : Mochakk, Carl Cox et Mau P.', items: [
      articleVideoCard({youtubeId: '4iKfR3UBDpQ', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mochakk, set au lever du soleil à Club Space Miami'}),
      articleVideoCard({youtubeId: 'CTvkbzE4Jus', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Carl Cox, set au lever du soleil à Club Space Miami'}),
      articleVideoCard({youtubeId: '0mlnJ7Ic7TM', genre: 'Club Space, 2023', artist: 'Club Space', title: 'Mau P à Club Space Miami'})
    ]}),
    'Embed: D-Edge': articleVideoCollection({lang, label: 'Enregistré au D-Edge', description: 'DJ Mag Live presents D-Edge, une session de 2017 à São Paulo.', items: [
      articleVideoCard({youtubeId: 'PQtqN-azfM8', genre: 'D-Edge, 2017', artist: 'DJ Mag', title: 'DJ Mag Live presents D-Edge'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang, 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre set, pour rentrer après le club.'),
    'Table: Ranking': articleTable({
      headers: ["Rang", "Club", "Ville", "Capacité"],
      rows: [["1", "[UNVRS]", "Ibiza, Espagne", "4 000"], ["2", "GREENVALLEY", "Camboriú, Brésil", "10 000"], ["3", "Ushuaïa Ibiza", "Ibiza, Espagne", "7 866"], ["4", "Hï Ibiza", "Ibiza, Espagne", "5 633"], ["5", "Savaya", "Uluwatu, Bali", "2 500"], ["6", "Echostage", "Washington, États-Unis", "3 000"], ["7", "Laroc Club", "Valinhos, Brésil", "5 000"], ["8", "FABRIK", "Région de Madrid, Espagne", "6 000"], ["9", "Illuzion Phuket", "Phuket, Thaïlande", "5 000"], ["10", "Surreal Park", "Camboriú, Brésil", "20 000"], ["11", "Bootshaus", "Cologne, Allemagne", "2 000"], ["13", "fabric", "Londres, Royaume-Uni", "Non indiquée"], ["14", "Club Space", "Miami, États-Unis", "1 100"], ["17", "Zouk Singapore", "Singapour", "2 900"], ["20", "Studio 338", "Londres, Royaume-Uni", "2 400"], ["21", "Berghain", "Berlin, Allemagne", "1 500"], ["35", "D-Edge", "São Paulo, Brésil", "1 000"], ["44", "Academy LA", "Los Angeles, États-Unis", "1 000"], ["46", "Warung Beach Club", "Itajaí, Brésil", "2 500"], ["88", "WOMB", "Tokyo, Japon", "1 000"]].map(row => row.map(escapeHtml)),
      label: "Meilleurs clubs du monde 2026 : les 20 clubs de ce guide"
    }),
    'Table: Mayores': articleTable({
      headers: ["Club", "Ville", "Capacité indiquée"],
      rows: [["Surreal Park", "Camboriú, Brésil", "20 000"], ["Drumsheds", "Londres, Royaume-Uni", "15 000"], ["GREENVALLEY", "Camboriú, Brésil", "10 000"], ["The Warehouse Project", "Manchester, Royaume-Uni", "10 000"], ["Ushuaïa Ibiza", "Ibiza, Espagne", "7 866"], ["FABRIK", "Région de Madrid, Espagne", "6 000"], ["Hï Ibiza", "Ibiza, Espagne", "5 633"], ["Laroc Club", "Valinhos, Brésil", "5 000"], ["Illuzion Phuket", "Phuket, Thaïlande", "5 000"]].map(row => row.map(escapeHtml)),
      label: "Les plus grands clubs par capacité indiquée"
    }),
    'Table: Veteranas': articleTable({
      headers: ["Club", "Ville", "Ouvert depuis"],
      rows: [["Pacha Ibiza", "Ibiza, Espagne", "1973"], ["Amnesia", "Ibiza, Espagne", "1976, 50e saison en 2026"], ["Zouk Singapore", "Singapour", "Début des années 1990"], ["Tresor", "Berlin, Allemagne", "1991"], ["Warung Beach Club", "Itajaí, Brésil", "2002"], ["D-Edge", "São Paulo, Brésil", "2003"], ["GREENVALLEY", "Camboriú, Brésil", "2007"], ["Club Space", "Miami, États-Unis", "Dans sa 25e année"], ["Ministry of Sound", "Londres, Royaume-Uni", "Dans sa 35e année"]].map(row => row.map(escapeHtml)),
      label: "Les clubs les plus anciens"
    }),
    'Table: Techno': articleTable({
      headers: ["Club", "Ce qui en fait une salle techno"],
      rows: [["Berghain, Berlin", "La salle principale et le Panorama Bar ; le guide du Berghain détaille la porte"], ["Illuzion Phuket", "Shelter, la salle techno à l’étage"], ["WOMB, Tokyo", "25 ans en 2025 avec Sven Väth, Richie Hawtin, Laurent Garnier et Sasha"]].map(row => row.map(escapeHtml)),
      label: "Les salles techno de cette page"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag : Top 100 Clubs, liste 2026 et profil de chaque club (en anglais)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag : résultats du vote 2026 (en anglais)'},
    {href: 'https://www.nightlifeinternational.org/en/the-world-s-100-best-clubs-2026', label: 'International Nightlife Association : The World’s 100 Best Clubs, dates du vote, jury et nombre de lieux nommés (en anglais)'}
  ],
  sourcesNote: 'Les informations sur Drumsheds, The Warehouse Project, Bootshaus, Pacha, Amnesia, Tresor et Ministry of Sound viennent des sources du guide des meilleurs clubs d’Europe.',

  bandcamp: {
    description: 'Entre deux soirées club, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
