// German Printworks London guide. Structure, facts and media from the English
// page (printworks-london-draft.md, build-printworks-london-article.mjs); facts
// are the English page's, read on 2026-10-05 from British Land, Canada Water,
// Southwark, Broadwick, Mixmag, DJ Mag, Resident Advisor, The Guardian and the
// BBC: keep them aligned. There is no French version.
//
// German keywords (keywords/de-printworks-london.json): not measured in the
// 12 November 2026 Keyword Planner pass; wording from the de-DE SERP, where
// English results lead and People also ask stays English. Image is the English guide's, in
// img/printworks-london/, with a translated caption.
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
  lang: 'de',
  name: 'de-printworks-london',
  file: 'de/printworks-london.html',
  draft: 'de/printworks-london-draft.md',
  canonical: 'https://thecatrave.com/de/printworks-london',
  englishPath: '/printworks-london',
  ogImage: 'https://thecatrave.com/img/og/printworks-london.jpg',
  bodyClass: 'article-page printworks-london-page',
  minReadingMinutes: 6,

  title: 'Printworks London: Wiedereröffnung 2029? Schließung, Geschichte',
  description: 'Printworks London ist weiter geschlossen. Die Rede ist von 2029, ein offizielles Datum gibt es nicht. Was geplant ist, warum er schloss, große Nächte, wohin jetzt.',
  datePublished: '2026-11-12',
  dateModified: '2026-11-12',
  dateLabel: '12. November 2026',

  heroKicker: 'Club-Guide, London',
  heroTitle: 'Printworks London: Wiedereröffnung, Schließung und Geschichte',
  deck: 'Der Raum in Rotherhithe, der im Mai 2023 schloss: was offiziell geplant ist, warum er schloss, wie er war und wohin man bis dahin geht.',
  answerLabel: 'Printworks London',
  breadcrumbName: 'Printworks London',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Geschlossen, mit geplanter Rückkehr.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Printworks London.',

  sections: [
    {id: 'coming-back', heading: 'Kommt Printworks London zurück?', title: 'Kommt Printworks London zurück?', tocLabel: 'Kommt er zurück?'},
    {id: 'official', heading: 'Wiedereröffnung von Printworks London: was offiziell ist', title: 'Wiedereröffnung von Printworks London: was offiziell ist', tocLabel: 'Wiedereröffnung'},
    {id: 'why-closed', heading: 'Warum hat Printworks geschlossen?', title: 'Warum hat Printworks geschlossen?', tocLabel: 'Warum geschlossen?'},
    {id: 'history', heading: 'Geschichte von Printworks London', title: 'Geschichte von Printworks London', tocLabel: 'Geschichte'},
    {id: 'rooms', heading: 'Räume und Kapazität von Printworks London', title: 'Räume und Kapazität von Printworks London', tocLabel: 'Räume und Kapazität'},
    {id: 'lineup', heading: 'Events und Line-up von Printworks London', title: 'Events und Line-up von Printworks London', tocLabel: 'Events und Line-up'},
    {id: 'drumsheds', heading: 'Ist Drumsheds das neue Printworks?', title: 'Ist Drumsheds das neue Printworks?', tocLabel: 'Drumsheds'},
    {id: 'instead', heading: 'Printworks London geschlossen: wohin stattdessen', title: 'Printworks London geschlossen: wohin stattdessen', tocLabel: 'Wohin stattdessen'}
  ],

  media: ({lang}) => ({
    'thecatrave mix 0': ownSetListening(0, lang, 'Dreißig Tracks, in denen die Breaks zwischen Garage, Bass Music, Techno und Rave wandern. Mein eigenes Set, für den Heimweg nach dem Club.'),
    'thecatrave mix 1': ownSetListening(1, lang),
    'gate-2010': figure('gate-2010', 1200, 797,
      'Ein Tor mit Stacheldraht und einem Schild East Deliveries an der Druckerei Harmsworth Quays in Rotherhithe',
      'Die Druckerei Harmsworth Quays in Rotherhithe am 30. Mai 2010, sieben Jahre vor der Eröffnung als Printworks. Foto: Ben Sutherland, CC BY 2.0.'),
    closing: articleVideoCollection({
      lang,
      label: 'Das Closing-Wochenende, 2023',
      description: 'Zwei Sets, von DJ Mag in den letzten Tagen von Printworks London aufgenommen.',
      items: [
        articleVideoCard({youtubeId: 'GPuZwMmd4YI', genre: 'Closing-Wochenende', artist: 'Adriatique', title: 'Adriatique Live @ Printworks Closing Weekend'}),
        articleVideoCard({youtubeId: 'nrcgEPEuWQY', genre: 'Closing-Wochenende', artist: 'CamelPhat', title: 'CamelPhat @ Printworks London Closing Weekend'})
      ]
    }),
    'room set': articleVideoCollection({
      lang,
      label: 'Printworks 2017',
      description: 'Adam Beyer live aus dem Printworks in dessen erstem Jahr.',
      items: [
        articleVideoCard({youtubeId: '6ag9s7vfy_c', genre: 'Techno, 2017', artist: 'Adam Beyer', title: 'Adam Beyer live from PRINTWORKS, London 2017'})
      ]
    }),
    'club sets': articleVideoCollection({
      lang,
      label: 'Aufgenommen im Printworks London',
      description: 'Sonny Fodera und The Martinez Brothers, die 2017 auf dem Eröffnungsprogramm standen.',
      items: [
        articleVideoCard({youtubeId: 'XNwuQ24X39U', genre: 'House', artist: 'Sonny Fodera', title: 'Sonny Fodera DJ Set From Printworks London'}),
        articleVideoCard({youtubeId: 'l1g6nJXC9pI', genre: 'Tech house', artist: 'The Martinez Brothers', title: 'The Martinez Brothers Tech House DJ Set At Printworks London'})
      ]
    }),
    'Table: timeline': articleTable({
      label: 'Zeitleiste der Wiedereröffnung von Printworks London',
      headers: ['Datum', 'Was geschah'],
      rows: rows([
        ['12. Februar 2024', 'British Land und AustralianSuper reichen einen Antrag zu vorbehaltenen Details ein. Der Plan legt den Club in eine Hälfte des Gebäudes und Büros und Handel in die andere und nennt eine Wiedereröffnung 2026.'],
        ['24. September 2024', 'Southwark genehmigt, und Mixmag meldet die Rückkehr des Raums für 2026.'],
        ['Mai 2026', 'Eine neue Konsultation schlägt eine reine Kultur- und Freizeitnutzung vor, behält Press Halls und Inkwell, ergänzt eine Dachterrasse und reißt das Gebäude teilweise ab, wobei das Gerüst der Press Halls bleibt. Ein überarbeiteter Antrag war für den Sommer geplant.'],
        ['Oktober 2026', 'DJ Mag meldet unter Berufung auf The Times, Broadwick plane eine „neue Version“ von Printworks, die 2029 im Bauprojekt wiedereröffnen soll.'],
      ])
    }),
    'Table: drumsheds': articleTable({
      label: 'Printworks London und Drumsheds im Vergleich',
      headers: ['Merkmal', 'Printworks London', 'Drumsheds'],
      rows: rows([
        ['Ort', 'Rotherhithe, Südosten Londons', 'Früheres IKEA-Haus, Norden Londons'],
        ['Kapazität', '6.000', '15.000'],
        ['Betreiber', 'Broadwick', 'Broadwick'],
        ['Genehmigung', 'Befristete Genehmigung über sechs Jahre', 'Befristete Baugenehmigung'],
        ['Status', 'Geschlossen seit 1. Mai 2023', 'Im Januar 2025 offen, unter geänderten Lizenzauflagen']
      ])
    })
  }),

  sources: [
    {html: `Pläne zur Wiedereröffnung und Antrag 2024: ${ext('https://www.britishland.com/news/british-land-and-australiansuper-submit-application-to-revive-printworks-as-a-permanent-cultural-venue/', 'British Land')}, ${ext('https://www.theguardian.com/music/2024/feb/12/printworks-london-may-reopen-by-2026-after-developers-submit-plans', 'The Guardian')} und ${ext('https://www.timeout.com/london/news/printworks-is-set-to-reopen-as-a-massive-cultural-venue-with-gigs-and-a-rooftop-space-021224', 'Time Out')}.`},
    {html: `Genehmigung und Rückkehr 2026: ${ext('https://mixmag.net/read/printworks-london-plans-reopen-confirmed-2026-news', 'Mixmag')}. In der Presse berichteter Plan für 2029: ${ext('https://djmag.com/news/team-behind-printworks-talks-over-new-venues-berlin-new-york-and-miami', 'DJ Mag, 22. Oktober 2026')}. Konsultation 2026: ${ext('https://canadawater.co.uk/latest/news/invitation-to-view-proposals-for-a-new-cultural-venue-at-printworks/', 'Canada Water')} und ${ext('https://salamandernews.org/2026-05-canada-water-printworks-consultation/', 'Salamander News')}. Seite des Betreibers: ${ext('https://broadwick.com/divisions/spacde/printworks-london/', 'Broadwick')}.`},
    {html: `Schließung: ${ext('https://www.bbc.com/news/entertainment-arts-65427101', 'BBC, 1. Mai 2023')}, ${ext('https://mixmag.net/read/printworks-officially-shuttered-renovated-into-offices-news', 'Mixmag, Juli 2022')}, ${ext('https://ra.co/news/77877', 'Resident Advisor, 2. Mai 2023')}, ${ext('https://www.djmag.com/news/printworks-hopes-return-three-years-says-broadwick-live-after-massive-closing-weekend', 'DJ Mag')} und ${ext('https://www.theguardian.com/music/2023/may/02/save-the-last-dance-london-superclub-printworks-aims-to-reopen-in-2026', 'The Guardian, 2. Mai 2023')}.`},
    {html: `Eröffnungsnacht, 4. Februar 2017: ${ext('https://ra.co/events/908779', 'Resident Advisor')}. Kapazität, Räume und Label-Nächte: ${ext('https://www.djmag.com/top100clubs/2023/2/Printworks-London', 'DJ Mag Top 100 Clubs 2023')}.`},
    {html: `Drumsheds: ${ext('https://www.bbc.com/news/entertainment-arts-67273621', 'BBC, 4. November 2023')} und ${ext('https://www.theguardian.com/music/2025/jan/14/can-the-uks-biggest-nightclub-stay-open-drumsheds', 'The Guardian, 14. Januar 2025')}. Offizielle Website: ${ext('https://printworkslondon.co.uk', 'printworkslondon.co.uk')}.`}
  ],

  bandcamp: {
    description: 'Abseits der Tanzfläche: die Musik, die ich selbst mache. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'}
    ]
  }
};
