// French best clubs in Europe guide. Structure, facts and media from the
// English page (best-clubs-in-europe-draft.md), via the German sibling;
// localised, not translated word for word.
//
// Keywords (keywords/fr-best-clubs-in-europe.json): Keyword Planner, France
// and French, 12 November 2026, buckets only; wording from Google fr-FR,
// where "meilleurs clubs d'europe" returns football, so the copy leans on
// "boîtes de nuit".
//
// The images are the English guide's, in img/best-clubs-in-europe/, with
// translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-clubs-in-europe/${name}-1200.webp`,
  srcset: `img/best-clubs-in-europe/${name}-320.webp 320w, img/best-clubs-in-europe/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

export default {
  lang: 'fr',
  name: 'fr-best-clubs-in-europe',
  file: 'fr/meilleurs-clubs-europe.html',
  draft: 'fr/best-clubs-in-europe-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleurs-clubs-europe',
  englishPath: '/best-clubs-in-europe',
  ogImage: 'https://thecatrave.com/img/og/best-clubs-in-europe.jpg',
  bodyClass: 'article-page best-clubs-in-europe-page',
  minReadingMinutes: 6,

  title: 'Meilleurs clubs d’Europe : 23 boîtes de nuit par pays',
  description: '23 boîtes de nuit dans dix pays d’Europe, du Berghain et du Tresor à Pacha et Cavo Paradiso : ce qu’est chaque salle, le classement DJ Mag 2026 et des sets.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide de club, Europe',
  heroTitle: 'Meilleurs clubs d’Europe : 23 boîtes de nuit qui valent le voyage',
  deck: 'Vingt-trois clubs européens dans dix pays, du Berghain et du Tresor à Pacha et Cavo Paradiso, avec ce qu’est chaque salle et des sets à écouter.',
  answerLabel: 'Meilleurs clubs d’Europe',
  breadcrumbName: 'Meilleurs clubs d’Europe',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un choix entre 23 salles.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les meilleurs clubs d’Europe.',

  sections: [
    {id: 'nightclubs', heading: 'Meilleurs clubs d’Europe : les 23 clubs', tocLabel: 'Les 23 clubs', title: 'Meilleurs clubs d’Europe : les 23 clubs'},
    {id: 'dance-clubs', heading: 'Meilleures boîtes de nuit d’Europe par pays', tocLabel: 'Par pays', title: 'Meilleures boîtes de nuit d’Europe par pays', subsections: ['germany', 'spain', 'uk', 'italy', 'france', 'portugal', 'greece', 'croatia', 'netherlands', 'poland']},
    {id: 'top-clubs', heading: 'Plus grands clubs d’Europe', tocLabel: 'Par taille', title: 'Plus grands clubs d’Europe'},
    {id: 'europe-clubs', heading: 'Clubs en Europe : entrée, téléphones et âge', tocLabel: 'Entrée et téléphones', title: 'Clubs en Europe : entrée, téléphones et âge'},
    {id: 'dj-mag', heading: 'Top 100 Clubs DJ Mag 2026 : les clubs européens classés', tocLabel: 'Top 100 DJ Mag', title: 'Top 100 Clubs DJ Mag 2026 : les clubs européens classés'},
    {id: 'best-techno-clubs', heading: 'Meilleurs clubs techno d’Europe', tocLabel: 'Clubs techno', title: 'Meilleurs clubs techno d’Europe'}
  ],

  media: ({lang}) => ({
    'Image: Tresor': figure('tresor-2008', 1200, 981, "Le mur éclairé en bleu, la nuit, de l’ancienne centrale berlinoise qui abrite le Tresor", "Le bâtiment du Tresor à Berlin, 4 septembre 2008. Photo : Boca Dorada, CC BY-SA 2.0."),
    'Image: Hi Ibiza': figure('hi-ibiza-2022', 1200, 800, "Un DJ dans la Club Room du Hï Ibiza, le public lève la lumière de ses téléphones", "La Club Room du Hï Ibiza, 12 juillet 2022. Photo : Juliamgmt, CC BY-SA 4.0."),
    'Image: Amnesia': figure('amnesia-2013', 1200, 900, "Sven Väth aux platines de l’Amnesia à Ibiza, le public devant la cabine", "Sven Väth à sa soirée Cocoon à l’Amnesia, Ibiza, septembre 2013. Photo : Nsf12, CC BY-SA 3.0."),
    'Image: Tenax': figure('tenax-2016', 1200, 800, "Le public serré du Tenax à Florence, Fatboy Slim aux platines", "Au Tenax de Florence, Fatboy Slim aux platines, 12 mars 2016. Photo : Luca Bergami, CC BY-SA 4.0."),
    'Image: Rex Club': figure('rex-club-2011', 1200, 800, "Nicolas Jaar en live au Rex Club à Paris, dans la fumée et les lumières de scène", "Nicolas Jaar en live au Rex Club, Paris, avril 2011. Photo : Pascal Montary, CC BY 2.0."),
    'Image: Cavo Paradiso': figure('cavo-paradiso-2016', 1200, 900, "Cavo Paradiso sur sa falaise au-dessus de la mer à Mykonos, vu depuis l’eau", "Cavo Paradiso, Mykonos, 19 juin 2016. Photo : Zigomitros Athanasios, CC BY-SA 4.0."),
    'Image: Revelin': figure('revelin-2010', 1200, 797, "La forteresse Revelin et ses abords à Dubrovnik, vus depuis le vieux port", "La forteresse Revelin, Dubrovnik, 29 mars 2010. Photo : LBM1948, CC BY-SA 4.0."),
    'Embed: Spain': articleVideoCollection({lang, label: 'Enregistrés au Hï et au Pacha', description: 'Une rediffusion de CamelPhat de 2019, présentée par le Hï Ibiza, et la nuit Cocoon de Sven Väth au Pacha en 2018.', items: [
      articleVideoCard({youtubeId: '8IsNzsE_8v8', genre: 'Hï Ibiza, 2019', artist: 'DJ Mag', title: 'Hï Ibiza présente CamelPhat, rediffusion de 2019'}),
      articleVideoCard({youtubeId: 'y37cDo_CTu4', genre: 'Cocoon, Pacha 2018', artist: 'Mixmag', title: 'Sven Väth. Cocoon. Pacha 2018.'})
    ]}),
    'Embed: UK': articleVideoCollection({lang, label: 'fabric et Ministry of Sound', description: 'Josh Caffe à fabric pour Beatport et une nuit au Ministry of Sound pour DJ Mag.', items: [
      articleVideoCard({youtubeId: 'pxKVT8F0BGE', genre: 'fabric London Unlocked', artist: 'Beatport', title: 'Josh Caffe à fabric'}),
      articleVideoCard({youtubeId: '7r68Nx38hlY', genre: 'Ministry of Sound', artist: 'DJ Mag', title: 'Dance For Stevie au Ministry of Sound'})
    ]}),
    'Embed: Techno': articleVideoCollection({lang, label: 'Un guide d’écoute du Tresor', description: 'Un guide radio de NTS sur les classiques du Tresor, pas enregistré au club.', items: [
      articleVideoCard({youtubeId: 'OcU74Xc6ko8', genre: 'Classiques du Tresor', artist: 'NTS', title: 'Tresor Club Techno and Electro Classics'})
    ]}),
    'Embed: thecatrave mix 1': ownSetListening(0, lang, 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre set, pour rentrer après le club.'),
    'Table: Clubes': articleTable({
      headers: ["Club", "Ville", "Pays", "Pourquoi il est ici"],
      rows: [["Berghain", "Berlin", "Allemagne", "Ancienne centrale, club depuis 2004"], ["Tresor", "Berlin", "Allemagne", "Ouvert en 1991 dans la salle des coffres d’un grand magasin"], ["Bootshaus", "Cologne", "Allemagne", "N° 11 DJ Mag, trois salles au bord du Rhin"], ["Open Ground", "Wuppertal", "Allemagne", "800 personnes dans un ancien bunker, nouveau chez DJ Mag"], ["Hï Ibiza", "Ibiza", "Espagne", "N° 4 DJ Mag, quatre fois vainqueur"], ["[UNVRS]", "Ibiza", "Espagne", "N° 1 DJ Mag, ouvert en mai 2025"], ["Pacha Ibiza", "Ibiza", "Espagne", "Ouvert depuis 1973"], ["Amnesia", "Ibiza", "Espagne", "Ouvert depuis 1976, 50e année en 2026"], ["DC-10", "Ibiza", "Espagne", "Maison de Circoloco depuis 1999"], ["FABRIK", "Région de Madrid", "Espagne", "N° 8 DJ Mag, sept espaces"], ["fabric", "Londres", "Royaume-Uni", "Trois salles, rouvert en 2016"], ["The Warehouse Project", "Manchester", "Royaume-Uni", "N° 15 DJ Mag, une saison sans téléphones"], ["Ministry of Sound", "Londres", "Royaume-Uni", "N° 24 DJ Mag, 35e année"], ["Drumsheds", "Londres", "Royaume-Uni", "15 000 personnes dans un ancien magasin IKEA"], ["Space Riccione", "Riccione", "Italie", "En plein air, porte le nom du Space d’Ibiza"], ["Tenax", "Florence", "Italie", "Fondé en 1981, capacité de 999"], ["Rex Club", "Paris", "France", "Une salle sous un cinéma depuis les années 1930"], ["Amnesia Cap d'Agde", "Cap d'Agde", "France", "En plein air, porté à 4 000"], ["Lux Frágil", "Lisbonne", "Portugal", "Au bord du Tage depuis 1998"], ["Cavo Paradiso", "Mykonos", "Grèce", "Club sur une falaise, ouvert depuis 1993"], ["Culture Club Revelin", "Dubrovnik", "Croatie", "Dans une forteresse"], ["Shelter", "Amsterdam", "Pays-Bas", "Deux salles Funktion-One, pas de téléphones"], ["Prozak 2.0", "Cracovie", "Pologne", "Salles souterraines sur deux niveaux"]].map(row => row.map(escapeHtml)),
      label: "Les 23 clubs de ce guide"
    }),
    'Table: Tamaño': articleTable({
      headers: ["Club", "Capacité annoncée"],
      rows: [["Drumsheds, Londres", "15 000"], ["The Warehouse Project, Manchester", "10 000"], ["FABRIK, région de Madrid", "6 000"], ["Space Riccione", "6 000"], ["Hï Ibiza", "5 633"], ["Amnesia Cap d'Agde", "4 000"], ["Amnesia, Ibiza", "3 800"], ["Cavo Paradiso", "3 000"], ["Bootshaus", "2 000"], ["Rex Club", "800"]].map(row => row.map(escapeHtml)),
      label: "Clubs européens par capacité annoncée"
    }),
    'Table: DJ Mag': articleTable({
      headers: ["Rang", "Club", "Pays"],
      rows: [["1", "[UNVRS]", "Espagne"], ["3", "Ushuaïa Ibiza", "Espagne"], ["4", "Hï Ibiza", "Espagne"], ["8", "FABRIK", "Espagne"], ["11", "Bootshaus", "Allemagne"], ["13", "fabric", "Royaume-Uni"], ["15", "The Warehouse Project", "Royaume-Uni"], ["16", "Amnesia Ibiza", "Espagne"], ["18", "Pacha Ibiza", "Espagne"], ["19", "DC-10", "Espagne"], ["21", "Berghain", "Allemagne"], ["22", "Cavo Paradiso", "Grèce"], ["24", "Ministry of Sound", "Royaume-Uni"], ["25", "Culture Club Revelin", "Croatie"], ["26", "Space Riccione", "Italie"], ["33", "Amnesia Cap d'Agde", "France"], ["45", "Drumsheds", "Royaume-Uni"], ["56", "Nitsa, Barcelone", "Espagne"], ["76", "Papagayo Tenerife", "Espagne"], ["81", "Pelícano, La Corogne", "Espagne"], ["89", "Tenax", "Italie"], ["90", "Shelter", "Pays-Bas"], ["94", "Amnesia Milano", "Italie"], ["100", "Open Ground", "Allemagne"]].map(row => row.map(escapeHtml)),
      label: "Top 100 Clubs DJ Mag 2026, entrées européennes"
    }),
  }),

  sources: [
    {href: 'https://djmag.com/top100clubs', label: 'DJ Mag : Top 100 Clubs, liste 2026 et profils des clubs (en anglais)'},
    {href: 'https://djmag.com/features/dj-mag-top-100-clubs-2026-record-breaking-numbers-vote-our-annual-poll-of-worlds-best', label: 'DJ Mag : résultats 2026, 15 avril 2026 (en anglais)'},
    {href: 'https://djmag.com/top100clubs/2021/85/Lux-Fragil', label: 'DJ Mag : profil de Lux Frágil, 2021 (en anglais)'},
    {href: 'https://berghain.berlin/', label: 'Berghain'},
    {href: 'https://industriekultur.berlin/ort/berghain/', label: 'Berliner Zentrum Industriekultur : Berghain (en allemand)'},
    {href: 'https://mixmag.net/read/berghain-updates-soundsystem-funktion-one-news', label: 'Mixmag : le système son du Berghain, 18 octobre 2023 (en anglais)'},
    {href: 'https://tresor.foundation/en/geschichte/', label: 'Tresor Foundation : histoire (en anglais)'},
    {href: 'https://www.pacha.com/', label: 'Pacha'},
    {href: 'https://grayarea.co/magazine/dc10-ibiza-the-first-ever-residencies', label: 'Gray Area : DC-10 (en anglais)'},
    {href: 'https://djmag.com/news/amnesia-ibiza-announces-50th-anniversary-celebrations-2026', label: 'DJ Mag : les 50 ans de l’Amnesia (en anglais)'},
    {href: 'https://www.hiibiza.com/', label: 'Hï Ibiza'},
    {href: 'https://www.fabriclondon.com/faq', label: 'fabric : FAQ (en anglais)'},
    {href: 'https://ra.co/news/36182', label: 'Resident Advisor : fabric, septembre 2016 (en anglais)'},
    {href: 'https://www.inyourpocket.com/krakow/prozak-20_18565v', label: 'In Your Pocket Cracovie : Prozak 2.0 (en anglais)'}
  ],
  sourcesNote: 'Horaires et première soirée électronique du Rex Club : Visit Paris Region. Sur fabric, également : Time Out (novembre 2016) et Mixmag.',

  bandcamp: {
    description: 'Entre deux soirées club, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
