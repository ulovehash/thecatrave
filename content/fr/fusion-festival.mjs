// French Fusion Festival guide. Structure and facts from the English page
// (fusion-festival-draft.md), via the German sibling
// (content/de/fusion-festival.mjs), which read fusion-festival.de, taz and GMX:
// keep them aligned.
//
// fr-FR SERP read on 2026-11-12: related searches "Fusion Festival 2028",
// "Fusion Festival Allemagne 2026", tickets, programmation. Keyword Planner
// festival seeds were not run in this batch.
//
// Images are the English guide's, in img/fusion-festival/, with translated captions.
import {localizedFestivalPlanning} from '../festival-planning-data.mjs';
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/fusion-festival/${name}-1200.webp`,
  srcset: `img/fusion-festival/${name}-320.webp 320w, img/fusion-festival/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const table = (label, headers, rows) => articleTable({label, headers, rows: rows.map(row => row.map(escapeHtml))});

export default {
  lang: 'fr',
  name: 'fr-fusion-festival',
  file: 'fr/fusion-festival.html',
  draft: 'fr/fusion-festival-draft.md',
  canonical: 'https://thecatrave.com/fr/fusion-festival',
  englishPath: '/fusion-festival',
  ogImage: 'https://thecatrave.com/img/og/fusion-festival.jpg',
  bodyClass: 'article-page fusion-festival-page',
  minReadingMinutes: 8,

  title: 'Fusion Festival 2027 : pause, dates 2028 et billetterie',
  description: 'Fusion Festival à Lärz : pourquoi il n’y a pas d’édition en 2027, les dates 2028, le tirage au sort des billets, le conflit avec la police et l’accès.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide des festivals 2027',
  heroTitle: 'Fusion Festival 2027 : pause, dates 2028, billetterie et conflit avec la police',
  deck: 'Le festival du Kulturkosmos sur un ancien aérodrome soviétique : pourquoi 2027 est sans Fusion, quand a lieu 2028, comment se passe le tirage au sort et comment s’y rendre.',
  answerLabel: 'Dates du Fusion Festival',
  breadcrumbName: 'Fusion Festival',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un festival qui fait une pause.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur le Fusion Festival.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que le Fusion Festival ?', title: 'Qu’est-ce que le Fusion Festival ?', tocLabel: 'Qu’est-ce que Fusion ?'},
    {id: 'fusion-2026', heading: 'Fusion Festival 2026', title: 'Fusion Festival 2026', tocLabel: 'Fusion 2026'},
    {id: 'dates', heading: 'Fusion Festival 2027 et 2028', title: 'Fusion Festival 2027 et 2028', tocLabel: 'Fusion 2027 et 2028'},
    {id: 'tickets', heading: 'Billetterie du Fusion Festival', title: 'Billetterie du Fusion Festival', tocLabel: 'Billets et tirage au sort'},
    {id: 'larz', heading: 'Fusion Festival à Lärz et le Kulturkosmos', title: 'Fusion Festival à Lärz et le Kulturkosmos', tocLabel: 'Lärz et Kulturkosmos'},
    {id: 'police', heading: 'Le conflit du Fusion Festival avec la police', title: 'Le conflit du Fusion Festival avec la police', tocLabel: 'Conflit avec la police'},
    {id: 'lineup', heading: 'Programmation du Fusion Festival', title: 'Programmation du Fusion Festival', tocLabel: 'Programmation et sets'},
    {id: 'travel', heading: 'Comment se rendre au Fusion Festival', title: 'Comment se rendre au Fusion Festival', tocLabel: 'Accès'},
    {id: 'planning', heading: 'Préparer son voyage au Fusion 2028', title: 'Préparez votre voyage au Fusion Festival.', tocLabel: 'Voyage et préparation', planning: localizedFestivalPlanning('fusion', 'fr')}
  ],

  media: ({lang}) => ({
    'thecatrave mix 1': ownSetListening(0, lang, 'Mon propre mix, à écouter pendant que vous préparez le week-end.'),
    'thecatrave mix 2': ownSetListening(1, lang, 'Un deuxième mix de ma part, pour le trajet.'),
    'Image: palapa': figure('palapa-2019', 1200, 675,
      'La scène Palapa de nuit au Fusion Festival 2019, le public sous une lumière violette et un parasol orange',
      'La scène Palapa pendant un concert de Meute, Fusion Festival, 27 juin 2019. Photo : San Andreas, CC BY-SA 4.0.'),
    'Image: ravesticks': figure('ravesticks-2024', 1200, 380,
      'Le public avec des bâtons lumineux sur la piste du Sonnendeck au Fusion Festival 2024',
      'Bâtons lumineux sur la piste du Sonnendeck, Fusion Festival, 29 juin 2024. Photo : Kerospam, CC BY-SA 4.0.'),
    'Image: railcar': figure('railcar-neustrelitz-2016', 1200, 801,
      'Des festivaliers montent dans un train régional en gare de Neustrelitz en route vers le Fusion Festival en 2016',
      'Festivaliers en gare de Neustrelitz, 29 juin 2016. Photo : JoachimKohler-HB, CC BY-SA 4.0.'),
    'Embed: fusion sets': articleVideoCollection({
      lang,
      label: 'Sets d’artistes de Fusion du catalogue',
      description: 'Quatre sets du catalogue du Selector, tous de Boiler Room, par des artistes du programme 2026 de Fusion. Aucun n’a été enregistré à Fusion.',
      items: [
        articleVideoCard({youtubeId: 'EfZu4BCi644', genre: 'Électronique', artist: 'Acid Pauli', title: 'Boiler Room Tulum DJ set'}),
        articleVideoCard({youtubeId: 'H_WP3TRJfFk', genre: 'Électronique', artist: 'Apparat', title: 'Boiler Room Berlin DJ set'}),
        articleVideoCard({youtubeId: 'oNYarqQNev0', genre: 'Techno', artist: 'Rødhåd', title: 'Boiler Room x Glitch Festival 2023'}),
        articleVideoCard({youtubeId: '02PstSNvln0', genre: 'House', artist: 'Gerd Janson', title: 'Boiler Room x Sugar Mountain 2018 DJ set'})
      ]
    }),
    'Table: schedule 2026': table('Horaires du Fusion Festival 2026', ['Horaires 2026', 'Détail'], [
      ['Ouverture des portes', 'Mercredi 24 juin, 7 h'],
      ['Programme du mercredi', 'À partir de 16 h'],
      ['Grandes pistes en plein air', 'Jeudi 25 juin, 18 h'],
      ['Pause sur les scènes bruyantes', 'De 11 h à 14 h, du vendredi au dimanche'],
      ['Billet du dimanche', 'Dimanche 28 juin, de 8 h à 16 h'],
      ['Camping libéré', 'Le mardi après-midi suivant le festival']
    ]),
    'Table: status': table('État du Fusion Festival 2026, 2027 et 2028', ['Point', 'État'], [
      ['Édition 2026', 'Du 24 au 28 juin 2026, complet'],
      ['2027', 'Année sans Fusion, pas de festival'],
      ['Prochaine édition', 'Du 28 juin au 2 juillet 2028'],
      ['Billetterie 2028', 'Lettre d’information ouverte, aucune date ni aucun prix publiés'],
      ['Programme 2028', 'Non publié']
    ]),
    'Table: lottery 2026': table('Étapes du tirage au sort 2026', ['Étape du tirage 2026', 'Date'], [
      ['Candidatures de bénévoles', 'Du 1er au 10 décembre 2025'],
      ['Inscription sur la billetterie de Fusion', 'Du 1er au 14 décembre 2025'],
      ['Premier tirage', '18 décembre 2025'],
      ['Ouverture du paiement', '1er janvier 2026'],
      ['Second tirage, Ticket:Bourse et billets du dimanche', '5 février 2026'],
      ['Billets véhicule', 'Printemps 2026']
    ])
  }),

  sources: [
    {html: `Dates 2028 et année sans Fusion 2027 : ${ext('https://tickets.fusion-festival.de/', 'billetterie de Fusion')} (en anglais et en allemand).`},
    {html: `Tirage au sort, prix 2026, règle des 18 ans, billets véhicule, réponse de la Bundeswehr, lettre d’information 2026 et FAQ officielle (horaires, scènes, règles, accès) : ${ext('https://fusion-festival.de/', 'fusion-festival.de')}, pages en anglais et archives d’actualités.`},
    {html: 'Informations sur l’organisation (Kulturkosmos Müritz, équipes, éléments de programme) : la page officielle en anglais du festival.'},
    {html: `Le conflit sur la sécurité en 2019 : ${ext('https://taz.de/Die-Zukunft-des-Musikfestivals/!5595050/', 'taz, 25 mai 2019')} et ${ext('https://www.gmx.ch/magazine/unterhaltung/musik/festivals/fusion-festival-oeffnet-langem-streit-polizei-tore-33805512', 'GMX, 25 juin 2019')} (en allemand).`},
    {html: 'Photos : Wikimedia Commons, créditées dans chaque légende.'}
  ],

  bandcamp: {
    description: 'Entre deux festivals, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
