// French Printworks London guide. Structure, facts and media from the English
// page (printworks-london-draft.md, build-printworks-london-article.mjs), via
// the German sibling; facts are the English page's, read on 2026-10-05 from
// British Land, Canada Water, Southwark, Broadwick, Mixmag, DJ Mag, Resident
// Advisor, The Guardian and the BBC: keep them aligned.
//
// French keywords (keywords/fr-printworks-london.json): Keyword Planner,
// France and French, 12 November 2026, buckets only. The fr-FR SERP returned
// a bot check, so wording comes from Keyword Planner. Image is the English
// guide's, in img/printworks-london/, with a translated caption.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/printworks-london/${name}-1200.webp`,
  srcset: `img/printworks-london/${name}-320.webp 320w, img/printworks-london/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const rows = list => list.map(row => row.map(escapeHtml));

export default {
  lang: 'fr',
  name: 'fr-printworks-london',
  file: 'fr/printworks-london.html',
  draft: 'fr/printworks-london-draft.md',
  canonical: 'https://thecatrave.com/fr/printworks-london',
  englishPath: '/printworks-london',
  ogImage: 'https://thecatrave.com/img/og/printworks-london.jpg',
  bodyClass: 'article-page printworks-london-page',
  minReadingMinutes: 6,

  title: 'Printworks London : réouverture en 2029 ? Fermeture, histoire',
  description: 'Printworks Londres est toujours fermé, on parle de 2029 sans date officielle : ce qui est prévu, pourquoi il a fermé, ses grandes nuits et où sortir en attendant.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12 novembre 2026',

  heroKicker: 'Guide de club, Londres',
  heroTitle: 'Printworks London : réouverture, fermeture et histoire',
  deck: 'La salle de Rotherhithe fermée en mai 2023 : ce qui est officiellement prévu, pourquoi elle a fermé, ce qu’elle était et où aller en attendant.',
  answerLabel: 'Printworks London',
  breadcrumbName: 'Printworks London',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Fermé, avec un retour prévu.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur Printworks London.',

  sections: [
    {id: 'coming-back', heading: 'Printworks London va-t-il revenir ?', title: 'Printworks London va-t-il revenir ?', tocLabel: 'Va-t-il revenir ?'},
    {id: 'official', heading: 'Réouverture de Printworks London : ce qui est officiel', title: 'Réouverture de Printworks London : ce qui est officiel', tocLabel: 'Réouverture'},
    {id: 'why-closed', heading: 'Pourquoi Printworks a-t-il fermé ?', title: 'Pourquoi Printworks a-t-il fermé ?', tocLabel: 'Pourquoi fermé ?'},
    {id: 'history', heading: 'Histoire de Printworks London', title: 'Histoire de Printworks London', tocLabel: 'Histoire'},
    {id: 'rooms', heading: 'Salles et capacité de Printworks London', title: 'Salles et capacité de Printworks London', tocLabel: 'Salles et capacité'},
    {id: 'lineup', heading: 'Événements et programmation de Printworks London', title: 'Événements et programmation de Printworks London', tocLabel: 'Événements'},
    {id: 'drumsheds', heading: 'Drumsheds est-il le nouveau Printworks ?', title: 'Drumsheds est-il le nouveau Printworks ?', tocLabel: 'Drumsheds'},
    {id: 'instead', heading: 'Printworks London fermé : où aller à la place', title: 'Printworks London fermé : où aller à la place', tocLabel: 'Où aller à la place'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre set, pour rentrer après le club.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    'gate-2010': figure('gate-2010', 1200, 797,
      'Un portail surmonté de barbelés et un panneau East Deliveries à l’imprimerie Harmsworth Quays de Rotherhithe',
      'L’imprimerie Harmsworth Quays à Rotherhithe le 30 mai 2010, sept ans avant son ouverture sous le nom de Printworks. Photo : Ben Sutherland, CC BY 2.0.'),
    closing: articleVideoCollection({
      lang,
      label: 'Le week-end de clôture, 2023',
      description: 'Deux sets enregistrés par DJ Mag pendant les derniers jours de Printworks London.',
      items: [
        articleVideoCard({youtubeId: 'GPuZwMmd4YI', genre: 'Week-end de clôture', artist: 'Adriatique', title: 'Adriatique Live @ Printworks Closing Weekend'}),
        articleVideoCard({youtubeId: 'nrcgEPEuWQY', genre: 'Week-end de clôture', artist: 'CamelPhat', title: 'CamelPhat @ Printworks London Closing Weekend'})
      ]
    }),
    'room set': articleVideoCollection({
      lang,
      label: 'Printworks 2017',
      description: 'Adam Beyer en live depuis Printworks, pendant sa première année.',
      items: [
        articleVideoCard({youtubeId: '6ag9s7vfy_c', genre: 'Techno, 2017', artist: 'Adam Beyer', title: 'Adam Beyer live from PRINTWORKS, London 2017'})
      ]
    }),
    'club sets': articleVideoCollection({
      lang,
      label: 'Enregistrés à Printworks London',
      description: 'Sonny Fodera et The Martinez Brothers, à l’affiche de l’ouverture en 2017.',
      items: [
        articleVideoCard({youtubeId: 'XNwuQ24X39U', genre: 'House', artist: 'Sonny Fodera', title: 'Sonny Fodera DJ Set From Printworks London'}),
        articleVideoCard({youtubeId: 'l1g6nJXC9pI', genre: 'Tech house', artist: 'The Martinez Brothers', title: 'The Martinez Brothers Tech House DJ Set At Printworks London'})
      ]
    }),
    'Table: timeline': articleTable({
      label: 'Chronologie de la réouverture de Printworks London',
      headers: ['Date', 'Ce qui s’est passé'],
      rows: rows([
        ['12 février 2024', 'British Land et AustralianSuper déposent une demande de détails réservés. Le plan place la salle dans une moitié du bâtiment, des bureaux et des commerces dans l’autre, et annonce une réouverture en 2026.'],
        ['24 septembre 2024', 'Southwark approuve, et Mixmag annonce le retour de la salle pour 2026.'],
        ['Mai 2026', 'Une nouvelle consultation propose un usage uniquement culturel et de loisirs, garde les Press Halls et l’Inkwell, ajoute un toit-terrasse et démolit en partie le bâtiment en conservant la structure des Press Halls. Une demande révisée était prévue pour l’été.'],
        ['Octobre 2026', 'DJ Mag, citant The Times, rapporte que Broadwick prévoit une « nouvelle version » de Printworks, qui rouvrirait dans le projet en 2029.'],
      ])
    }),
    'Table: drumsheds': articleTable({
      label: 'Printworks London et Drumsheds comparés',
      headers: ['Point', 'Printworks London', 'Drumsheds'],
      rows: rows([
        ['Lieu', 'Rotherhithe, sud-est de Londres', 'Ancien magasin IKEA, nord de Londres'],
        ['Capacité', '6 000', '15 000'],
        ['Exploitant', 'Broadwick', 'Broadwick'],
        ['Autorisation', 'Autorisation temporaire de six ans', 'Permis de construire temporaire'],
        ['Statut', 'Fermé depuis le 1er mai 2023', 'Ouvert en janvier 2025, à des conditions de licence modifiées']
      ])
    })
  }),

  sources: [
    {html: `Projet de réouverture et demande de 2024 : ${ext('https://www.britishland.com/news/british-land-and-australiansuper-submit-application-to-revive-printworks-as-a-permanent-cultural-venue/', 'British Land')}, ${ext('https://www.theguardian.com/music/2024/feb/12/printworks-london-may-reopen-by-2026-after-developers-submit-plans', 'The Guardian')} et ${ext('https://www.timeout.com/london/news/printworks-is-set-to-reopen-as-a-massive-cultural-venue-with-gigs-and-a-rooftop-space-021224', 'Time Out')} (en anglais).`},
    {html: `Approbation et retour en 2026 : ${ext('https://mixmag.net/read/printworks-london-plans-reopen-confirmed-2026-news', 'Mixmag')}. Projet pour 2029 rapporté par la presse : ${ext('https://djmag.com/news/team-behind-printworks-talks-over-new-venues-berlin-new-york-and-miami', 'DJ Mag, 22 octobre 2026')}. Consultation de 2026 : ${ext('https://canadawater.co.uk/latest/news/invitation-to-view-proposals-for-a-new-cultural-venue-at-printworks/', 'Canada Water')} et ${ext('https://salamandernews.org/2026-05-canada-water-printworks-consultation/', 'Salamander News')}. Page de l’exploitant : ${ext('https://broadwick.com/divisions/spacde/printworks-london/', 'Broadwick')} (en anglais).`},
    {html: `Fermeture : ${ext('https://www.bbc.com/news/entertainment-arts-65427101', 'BBC, 1er mai 2023')}, ${ext('https://mixmag.net/read/printworks-officially-shuttered-renovated-into-offices-news', 'Mixmag, juillet 2022')}, ${ext('https://ra.co/news/77877', 'Resident Advisor, 2 mai 2023')}, ${ext('https://www.djmag.com/news/printworks-hopes-return-three-years-says-broadwick-live-after-massive-closing-weekend', 'DJ Mag')} et ${ext('https://www.theguardian.com/music/2023/may/02/save-the-last-dance-london-superclub-printworks-aims-to-reopen-in-2026', 'The Guardian, 2 mai 2023')} (en anglais).`},
    {html: `Soirée d’ouverture, 4 février 2017 : ${ext('https://ra.co/events/908779', 'Resident Advisor')}. Capacité, salles et soirées de labels : ${ext('https://www.djmag.com/top100clubs/2023/2/Printworks-London', 'DJ Mag Top 100 Clubs 2023')} (en anglais).`},
    {html: `Drumsheds : ${ext('https://www.bbc.com/news/entertainment-arts-67273621', 'BBC, 4 novembre 2023')} et ${ext('https://www.theguardian.com/music/2025/jan/14/can-the-uks-biggest-nightclub-stay-open-drumsheds', 'The Guardian, 14 janvier 2025')} (en anglais). Site officiel : ${ext('https://printworkslondon.co.uk', 'printworkslondon.co.uk')}.`}
  ],

  bandcamp: {
    description: 'Entre deux soirées club, la musique que je fais moi-même. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'}
    ]
  }
};
