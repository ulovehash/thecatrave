// fr trance guide. Structure and facts from the English page
// (trance-guide-draft.md, build-trance-article.mjs).
//
// Keywords (keywords/fr-trance.json): Keyword Planner bucket for the head
// term, wording from Google fr-FR on 2026-10-01; no exact volumes (account
// without ad spend).
//
// Images are the English guide's, in img/trance/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening, ownTrackListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, height, alt, caption, className) => articleFigure({
  src: `img/trance/${name}-1024.webp`,
  srcset: `img/trance/${name}-320.webp 320w, img/trance/${name}-1024.webp 1024w`,
  width: 1024, height, alt, caption, className
});

const video = (label, description, item) => articleVideoCollection({lang: 'fr', label, description, items: [articleVideoCard(item)]});

export default {
  lang: 'fr',
  name: 'fr-trance',
  file: 'fr/musique-trance.html',
  draft: 'fr/trance-guide-draft.md',
  canonical: 'https://thecatrave.com/fr/musique-trance',
  englishPath: '/trance-guide',
  ogImage: 'https://thecatrave.com/img/og/trance.jpg',
  bodyClass: 'article-page trance-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que la musique trance ? Origines, artistes, son',
  description: 'Une montée, un breakdown, un drop, nés dans les clubs de Francfort : comment Armin van Buuren et Tiësto ont porté la trance en festival, et la psytrance a divergé.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide de la trance',
  heroTitle: 'Trance : la montée, le breakdown et le drop',
  deck: 'Une scène de clubs de Francfort qui s’est nommée elle-même, un DJ berlinois qui a bâti la moitié de l’histoire avant que quiconque lui ait trouvé un nom, et deux DJs de l’ère grand public dont la rivalité a rempli les grandes scènes pendant dix ans.',
  answerLabel: 'Qu’est-ce que la musique trance',
  breadcrumbName: 'Guide de la trance',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Les lumières qui se rallument.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur la trance.',

  sections: [
    {id: 'what-is', heading: 'Qu’est-ce que la musique trance', tocLabel: 'Qu’est-ce que la musique trance', title: 'Qu’est-ce que la musique trance ?'},
    {id: 'origins', heading: 'D’où vient la trance', tocLabel: 'D’où vient la trance', title: 'D’où vient la trance.'},
    {id: 'decade', heading: 'La décennie grand public de la trance', tocLabel: 'La décennie grand public de la trance', title: 'La décennie grand public de la trance.'},
    {id: 'styles', heading: 'Les styles et sous-genres de la trance', tocLabel: 'Les styles et sous-genres de la trance', title: 'Les styles et sous-genres de la trance.'},
    {id: 'family', heading: 'Trance, house et techno', tocLabel: 'Trance, house et techno', title: 'Trance, house et techno.'},
    {id: 'today', heading: 'La trance aujourd’hui', tocLabel: 'La trance aujourd’hui', title: 'La trance aujourd’hui.'}
  ],

  media: ({lang}) => ({
    'Image: Sven Väth': figure('sven-vath-2014', 1024, 'Sven Väth aux platines au Mayday en 2014', 'Sven Väth au Mayday, 2014. Ses clubs et labels de Francfort, Eye Q et Harthouse, sont crédités d’avoir façonné le son devenu la trance. Photo : Krd, CC BY-SA 3.0.', 'square-image'),
    'Embed: Sven Väth': video('Sven Väth en live', 'Sven Väth pour « Into The Dark » de Boiler Room x Eristoff à Marseille. Tiré du catalogue de sets de DJ enregistrés de ce site.', {youtubeId: 'nFS-qV6EuX0', genre: 'LIVE, 2018', artist: 'Sven Väth', title: 'Into The Dark, Marseille'}),
    'Image: Paul van Dyk': figure('paul-van-dyk-2007', 1365, 'Paul van Dyk mixant dans un club en Australie, 2007', 'Paul van Dyk en 2007. Son label MFS Records et ses résidences au Tresor et à l’E-Werk ont construit le versant berlinois de la scène presque aussi vite que Francfort. Photo : Ben Novakovic, CC BY-SA 2.0.', 'portrait-image'),
    'Embed: Paul van Dyk': video('Paul van Dyk en live', 'Paul van Dyk au Mixmag Lab d’Amsterdam. Tiré du catalogue de sets de DJ enregistrés de ce site.', {youtubeId: 'cx5QQFnY7ic', genre: 'MIXMAG, 2025', artist: 'Paul van Dyk', title: 'Mixmag Lab Amsterdam'}),
    'Image: Armin van Buuren': figure('armin-van-buuren-2017', 681, 'Armin van Buuren devant une foule immense à Armin Only Embrace à Kiev, 2017', 'Armin van Buuren à Armin Only Embrace à Kiev, 2017. Les lecteurs de DJ Mag l’ont élu cinq fois DJ numéro un mondial, de 2007 à 2012. Photo : Vitaliy from Kharkiv, Ukraine, CC BY 2.0.', 'wide-archive-image'),
    'Embed: Armin van Buuren': video('Armin van Buuren en live', 'Armin van Buuren depuis l’Ushuaïa Ibiza pour DJ Mag. Tiré du catalogue de sets de DJ enregistrés de ce site.', {youtubeId: 'z9KgKX4K3MM', genre: 'DJ MAG, 2025', artist: 'Armin van Buuren', title: 'Live From Ushuaïa Ibiza'}),
    'Image: Tiësto': figure('tiesto-2017', 765, 'Tiësto en live au festival Airbeat One, 2017', 'Tiësto au festival Airbeat One, 2017. Son set à la cérémonie d’ouverture des Jeux olympiques d’Athènes en 2004 a placé la trance devant le plus grand public que le genre ait atteint. Photo : Julia Keiser, CC BY-SA 4.0.', 'wide-archive-image'),
    'Embed: Tiësto': video('Tiësto en live', 'Tiësto lors d’un set Beatport Live pour ReConnect. Tiré du catalogue de sets de DJ enregistrés de ce site.', {youtubeId: 'sBaY_AF6zA0', genre: 'BEATPORT LIVE, 2020', artist: 'Tiësto', title: 'ReConnect'}),
    'thecatrave degeneration': ownTrackListening('degeneration', 'Garage, dubstep et breaks dans un seul remix, 132 BPM : dans la plage de tempo de la trance, mais construit sur un rythme tout autre. Mon propre remix.', lang),
    'thecatrave mix 1': ownSetListening(0, lang, 'Pour après l’histoire : trente morceaux où les breaks passent du garage à la bass music, à la techno et au rave, si vous voulez une autre palette ensuite. Mon propre mix.'),
    'Table: Trance, house et techno': articleTable({
      headers: ["Style", "Tempo approximatif", "Ce qui mène le morceau", "Un disque pour commencer"],
      rows: [["Trance", "130–145 BPM", "Une montée mélodique, un breakdown, puis le retour de la batterie", "Paul van Dyk, « For an Angel »"], ["Progressive house", "118–128 BPM", "Un groove fait pour boucler, tension montée peu à peu, pas de drop dur", "Sasha & Digweed, « Xpander »"], ["Techno", "120–135 BPM", "Rythme de machine, peu ou pas de mélodie, voix minimale", "Jeff Mills, « The Bells »"], ["Psytrance", "140–150 BPM", "Une ligne de basse roulante en double-croches sous un sound design psychédélique en couches", "Infected Mushroom, « The Legend of the Black Shawarma »"]].map(row => row.map(escapeHtml)),
      label: 'Trance, house, techno et psytrance comparées'
    }),
    'Table: Sous-genres de la trance': articleTable({
      headers: ["Sous-genre de trance", "Aussi appelée", "Ce qui la distingue"],
      rows: [["Uplifting trance", "Euphoric trance", "Mélodies hymniques en mode majeur sur la montée, breakdown, drop classique"], ["Progressive trance", "", "Arrangements plus longs et plus graduels, grave plus profond"], ["Vocal trance", "", "Un hook chanté mis en avant sur les mêmes bases structurelles"], ["Hard trance", "", "Tempo plus rapide et grosse caisse plus dure, plus proche de la techno"], ["Psytrance", "Trance psychédélique", "Lignée de Goa, ligne de basse roulante en double-croches, 140–150 BPM"]].map(row => row.map(escapeHtml)),
      label: 'Les sous-genres de la trance en un coup d’œil'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Trance_music', label: 'Wikipedia: Trance music (anglais)'},
    {href: 'https://www.beatportal.com/articles/51518-beatports-definitive-history-of-trance', label: 'Beatportal: Beatport’s definitive history of trance (anglais)'},
    {href: 'https://www.discogs.com/master/13879-Dance-2-Trance-We-Came-In-Peace', label: 'Discogs: Dance 2 Trance, We Came In Peace (1990)'},
    {href: 'https://edmidentity.com/2023/12/13/germanys-trance-legacy-from-berlin-to-frankfurt/', label: 'EDM Identity: Germany’s trance legacy, from Berlin to Frankfurt (anglais)'},
    {href: 'https://djmag.com/top100djs/2010', label: 'DJ Mag: Top 100 DJs 2010 (anglais)'},
    {href: 'https://djmag.com/top100djs/2012', label: 'DJ Mag: Top 100 DJs 2012 (anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Psychedelic_trance', label: 'Wikipedia: Psychedelic trance (anglais)'}
  ],

  bandcamp: {
    description: 'La trance n’est pas le son que je fais, mais son instinct de montée et de relâche est un instinct que tout genre de danse emprunte quelque part. Ces sorties sont de mon côté de la famille. En acheter une soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 par thecatrave'}
    ]
  }
};
