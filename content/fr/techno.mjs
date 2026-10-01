// French techno guide. Structure and facts from the English page
// (techno-music-draft.md, build-techno-music-article.mjs).
//
// French keywords (keywords/fr-techno.json): Keyword Planner, France,
// 2026-10-01: la techno in the bucket only, no exact volume. Wording
// checked in Google fr-FR the same day (People also ask).
//
// Images are the English guide's, in img/techno/, with translated captions.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/techno/${name}-${width}.webp`,
  srcset: `img/techno/${name}-320.webp 320w, img/techno/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, genre, artist, title, text) => articleVideoCollection({
  lang,
  label: `${artist}, ${title}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export default {
  lang: 'fr',
  name: 'fr-techno',
  file: 'fr/techno.html',
  draft: 'fr/techno-draft.md',
  canonical: 'https://thecatrave.com/fr/techno',
  englishPath: '/techno-music-guide',
  ogImage: 'https://thecatrave.com/img/og/techno-music.jpg',
  bodyClass: 'article-page techno-music-page',
  minReadingMinutes: 9,

  title: 'Qu’est-ce que la techno ? Détroit, Belleville Three, aujourd’hui',
  description: 'La techno, musique de danse de machines née à Détroit : les Belleville Three, d’où vient le nom, Underground Resistance, Berlin, minimal et hard techno.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Guide de la techno',
  heroTitle: 'La techno : de Détroit à Berlin, et retour',
  deck: 'Trois amis d’une petite ville près de Détroit, un DJ de radio qui passait Kraftwerk à côté de Funkadelic, et la musique de machines qui a trouvé son plus grand public en Europe.',
  answerLabel: 'Techno : définition',
  breadcrumbName: 'Guide de la techno',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Une musique qui sonne comme la technologie.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur la techno.',

  sections: [
    {id: 'what-is-techno', heading: 'Qu’est-ce que la techno', title: 'Qu’est-ce que la techno ?'},
    {id: 'sound', heading: 'Comment sonne la techno'},
    {id: 'detroit', heading: 'Détroit et les Belleville Three'},
    {id: 'name', heading: 'Pourquoi parle-t-on de techno', title: 'Pourquoi parle-t-on de techno ?'},
    {id: 'strings-of-life', heading: 'Strings of Life et le Music Institute'},
    {id: 'underground-resistance', heading: 'Underground Resistance et la deuxième vague'},
    {id: 'berlin', heading: 'Berlin et l’alliance de la techno'},
    {id: 'types', heading: 'Les types de techno'},
    {id: 'today', heading: 'La techno aujourd’hui et Détroit maintenant'},
    {id: 'techno-vs-house', heading: 'Techno ou house'}
  ],

  media: ({lang}) => ({
    'Image: Derrick May': figure('derrick-may-2015', 820, 883,
      'Portrait rapproché de Derrick May avec des lunettes et une veste sombre',
      'Derrick May, qui dirigeait le label Transmat et a fait « Strings of Life », en 2015. Photo : Natalie Chickee, CC BY-SA 4.0.'),
    'Image: Juan Atkins': figure('juan-atkins-2010', 620, 808,
      'Juan Atkins en sweat à capuche gris dans un club sombre',
      'Juan Atkins à Détroit en 2010. Il a fait « Clear » avec Cybotron et « No UFO’s » sous le nom de Model 500. Photo : Angie Linder, CC BY-SA 2.0.'),
    'Image: Jeff Mills': figure('jeff-mills-2010', 1200, 798,
      'Jeff Mills mixe à une cabine de DJ de club, des gens le regardent derrière lui',
      'Jeff Mills jouant à Détroit en juin 2010. Il a cofondé Underground Resistance avec Mike Banks. Photo : Angie Linder, CC BY-SA 2.0.'),
    'Embed: Clear': video(lang, 'Unc8kDUzbU8', 'Electro, 1983', 'Cybotron', 'Clear',
      'Juan Atkins et Richard Davis sous le nom de Cybotron, deux ans avant que la techno ait son premier disque.'),
    'Embed: No UFO\'s': video(lang, 'xcdOBLH_AXs', 'Techno, 1985', 'Model 500', 'No UFO\'s',
      'Juan Atkins sous le nom de Model 500 sur son propre label Metroplex : le disque qu’on appelle généralement le premier disque de techno.'),
    'Embed: Strings of Life': video(lang, 'vGFw2qeUp0s', 'Techno, 1987', 'Rhythim Is Rhythim', 'Strings of Life',
      'Le disque de Derrick May, revendiqué à la fois par la house et par la techno.'),
    'Embed: Big Fun': video(lang, 'Gr-zG-IXDyo', 'House, 1988', 'Inner City', 'Big Fun',
      'Inner City de Kevin Saunderson, sur la chaîne du groupe : 8e place en Grande-Bretagne en 1988.'),
    'Embed: The Bells': video(lang, 'S-BlgAQ7uRQ', 'Techno, 1996', 'Jeff Mills', 'The Bells',
      'Le disque de Jeff Mills de 1996, sur toutes les listes de classiques de la techno.'),
    'Embed: Robert Hood Boiler Room': video(lang, 'TaFJGvwaczU', 'Techno minimale', 'Robert Hood', 'DJ set, Boiler Room x Red Bull Music Academy, 2013',
      'Robert Hood, le membre d’Underground Resistance qui a lancé la minimal techno. Issu du catalogue de sets DJ enregistrés de ce site.'),
    'Embed: Energy Flash': video(lang, 'BDj73pGQ6pE', 'Techno, 1990', 'Joey Beltram', 'Energy Flash',
      'Le disque du producteur new-yorkais pour le label belge R&S, de 1990.'),
    'Embed: Sara Landry Boiler Room': video(lang, 'EIQlDpgAY5Y', 'Hard techno', 'Sara Landry', 'Boiler Room x Teletech Festival, 2023',
      'Le set le plus regardé portant l’étiquette hard techno dans le catalogue de sets DJ enregistrés de ce site.'),
    'Embed: Kevin Saunderson Boiler Room': video(lang, 'gvvb-SNL9tM', 'Techno', 'Kevin Saunderson', 'DJ set, Boiler Room Chicago, 2014',
      'Kevin Saunderson joue pour Boiler Room à Chicago. Issu du catalogue de sets DJ enregistrés de ce site.'),
    'thecatrave mix': ownSetListening(1, lang, 'Mon propre mix, pour après l’histoire.'),
    'Table: Styles': articleTable({
      headers: ['Style', 'Où et quand', 'Comment il sonne', 'Un disque pour commencer'],
      rows: [
        ['Techno de Détroit', 'Détroit, milieu des années 1980', 'Funk de machines, cordes et lignes de synthétiseur', 'Model 500, « No UFO’s »'],
        ['Minimal techno', 'Détroit, début des années 1990', 'Batterie, ligne de basse et groove, rien d’autre', 'Robert Hood, Minimal Nation'],
        ['Dub techno', 'Début des années 1990', 'Techno croisée avec le dub jamaïcain : basse profonde, accords lents, beaucoup de delay', 'Pas de disque fondateur unique'],
        ['Acid techno', 'Années 1990', 'Une ligne de TB-303 sur des batteries techno plus dures', 'Hardfloor, « Acperience 1 »'],
        ['Techno mélodique', 'Europe, fin des années 2000 aux années 2010', 'Rythme techno avec de longues progressions mélodiques, 120 à 128 BPM', 'Tale of Us, ARTBAT, Stephan Bodzin'],
        ['Hard techno', 'Europe, années 2010 aux années 2020', 'Rapide et distordue, la grosse caisse devant', 'Sara Landry']
      ].map(row => row.map(escapeHtml)),
      label: 'Styles de techno'
    }),
    'Table: Comparaison': articleTable({
      headers: ['', 'Techno', 'House'],
      rows: [
        ['Où', 'Détroit, milieu des années 1980', 'Chicago, début des années 1980'],
        ['Tempo', 'Environ 120 à 150 BPM', 'Environ 118 à 128 BPM'],
        ['Ce qui mène', 'Rythme de machine et texture', 'Groove, ligne de basse, souvent une voix'],
        ['Racines', 'Kraftwerk, electro, funk, house de Chicago', 'Disco, soul, disques de Philadelphie et de Salsoul'],
        ['Un disque pour commencer', 'Model 500, « No UFO’s »', 'Marshall Jefferson, « Move Your Body »']
      ].map(row => row.map(escapeHtml)),
      label: 'Comparaison de la techno et de la house'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Techno', label: 'Wikipédia : Techno (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Detroit_techno', label: 'Wikipédia : Detroit techno (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Belleville_Three', label: 'Wikipédia : Belleville Three (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/No_UFO%27s', label: 'Wikipédia : No UFO\'s (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Strings_of_Life', label: 'Wikipédia : Strings of Life (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Underground_Resistance', label: 'Wikipédia : Underground Resistance (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Robert_Hood', label: 'Wikipédia : Robert Hood (en anglais)'},
    {href: 'https://en.wikipedia.org/wiki/Movement_Electronic_Music_Festival', label: 'Wikipédia : Movement Electronic Music Festival (en anglais)'},
    {href: 'https://musicbrainz.org/release/d0a0ade7-14fb-4ff9-9ebb-44be77c5f579', label: 'MusicBrainz : Robert Hood, Minimal Nation (Axis, 1994) (en anglais)'}
  ],
  sourcesNote: 'Le nombre de sets provient du catalogue de sets DJ enregistrés de ce site, en septembre 2026.',

  bandcamp: {
    description: 'Deux de mes propres morceaux. En acheter un soutient directement mon travail.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 de thecatrave'}
    ]
  }
};
