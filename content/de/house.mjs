// German house music guide. Structure and facts from the English page
// (house-music-draft.md, build-house-music-article.mjs).
//
// German keywords (keywords/de-house.json): Keyword Planner, Germany,
// 2026-10-01: house musik in the 1K to 10K bucket. No exact volume (account
// without ad spend). Wording checked in Google de-DE the same day: "Was
// versteht man unter House Music" and "Was ist der Unterschied zwischen Techno
// und House" are People also ask questions; the spelling with hyphen, "House-Musik",
// is the one German pages use in titles.
//
// Images are the English guide's, in img/house-music/, with translated
// captions; see home-articles.mjs for why a translation may reuse them.
import {
  articleFigure, articleTable, articleVideoCard, articleVideoCollection, ownSetListening
} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/house-music/${name}-${width}.webp`,
  srcset: `img/house-music/${name}-320.webp 320w, img/house-music/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const video = (lang, youtubeId, genre, artist, title, text) => articleVideoCollection({
  lang,
  label: `${artist}, ${title}`,
  description: text,
  items: [articleVideoCard({youtubeId, genre, artist, title})]
});

export default {
  lang: 'de',
  name: 'de-house',
  file: 'de/house-musik.html',
  draft: 'de/house-musik-draft.md',
  canonical: 'https://thecatrave.com/de/house-musik',
  englishPath: '/house-music-guide',
  ogImage: 'https://thecatrave.com/img/og/house-music.jpg',
  bodyClass: 'article-page house-music-page',
  minReadingMinutes: 9,

  title: 'Was ist House-Musik? Geschichte, Sound und Chicagos Anfänge',
  description: 'House-Musik ist Chicagoer Tanzmusik auf einer Four-on-the-Floor-Kick: warum sie House heißt, Frankie Knuckles, die ersten Platten und alle Stile seitdem.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'House-Musik-Guide',
  heroTitle: 'House-Musik: vom Warehouse in Chicago in die ganze Welt',
  deck: 'Ein DJ, der Disco-Platten auf Tonband neu schnitt, ein Club voller Tanzender, für die sonst niemand auflegte, und die Platten, die sie machten, als niemand die machte, die sie wollten.',
  answerLabel: 'House-Musik: Definition',
  breadcrumbName: 'House-Musik-Guide',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Platten, die niemand machte.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu House-Musik.',

  sections: [
    {id: 'what-is-house-music', heading: 'Was ist House-Musik', title: 'Was ist House-Musik?'},
    {id: 'sound', heading: 'Wie House-Musik klingt'},
    {id: 'warehouse', heading: 'Das Warehouse und Frankie Knuckles'},
    {id: 'name', heading: 'Warum heißt es House-Musik', title: 'Warum heißt es House-Musik?'},
    {id: 'first-records', heading: 'Die ersten House-Platten'},
    {id: 'deep-and-acid', heading: 'Deep House und Acid House'},
    {id: 'garage', heading: 'New York und New Jersey: Garage House'},
    {id: 'global', heading: 'Wie House-Musik global wurde'},
    {id: 'types', heading: 'Arten von House-Musik'},
    {id: 'house-techno-edm', heading: 'House, Techno und EDM'}
  ],

  media: ({lang}) => ({
    'Image: TR-808 and TR-909': figure('roland-tr808-tr909', 1200, 896,
      'Ein Roland-TR-808-Drumcomputer an einer Wand gelehnt, daneben ein Roland TR-909 auf einem Studioboden',
      'Ein Roland TR-808 und ein TR-909, verpackt für einen Studioumzug. Beide wurden als Übungsgeräte für Musiker verkauft; Chicago House wurde auf ihnen gebaut. Foto: Brandon Daniel, CC BY-SA 2.0.'),
    'Image: Frankie Knuckles at ADE': figure('frankie-knuckles-ade-2012', 1200, 800,
      'Frankie Knuckles hinter den Plattenspielern eines Clubs in Amsterdam, violett beleuchtet, Menschen drängen sich an der Kanzel',
      'Frankie Knuckles im Sugar Factory in Amsterdam während des Amsterdam Dance Event, Oktober 2012, anderthalb Jahre vor seinem Tod. Foto: deepstereo, CC BY 2.0.'),
    'Image: Frankie Knuckles Way': figure('frankie-knuckles-way-2022', 1200, 900,
      'Ein braunes Straßenschild in Chicago mit der Aufschrift Honorary The Godfather of House Music Frankie Knuckles Way',
      'Das Ehrenstraßenschild an der Jefferson Street in Chicago, in dem Block, in dem das Warehouse stand, seit 2004 so benannt. Foto: Sarah Stierch, CC BY 4.0.'),
    'Embed: Frankie Knuckles Boiler Room NYC': video(lang, '644UU55eyzk', 'House', 'Frankie Knuckles', 'DJ-Set, Boiler Room New York, 2013',
      'Frankie Knuckles legt 2013 für Boiler Room in New York auf, auf dem eigenen Kanal von Boiler Room.'),
    'Embed: On and On': video(lang, 'ef868Dctwkg', 'House, 1984', 'Jesse Saunders', 'On & On',
      'Die Platte, die am häufigsten die erste House-Platte genannt wird, von 1984.'),
    'Embed: Your Love': video(lang, 'ottFhv0zD_8', 'House, 1987', 'Frankie Knuckles', 'Your Love',
      'Jamie Principles Song, wie Knuckles ihn 1987 veröffentlichte, nach einem Jahr, in dem er ihn vom Band spielte.'),
    'Embed: Move Your Body': video(lang, 'dZVxqo2xAd4', 'House, 1986', 'Marshall Jefferson', 'Move Your Body',
      '„The House Music Anthem“, auf dem eigenen Kanal von Trax Records.'),
    'Embed: Can You Feel It': video(lang, 'DrxPFBEr5Bo', 'Deep House, 1986', 'Mr. Fingers', 'Can You Feel It',
      'Larry Heard als Mr. Fingers: die Platte, mit der Deep House beginnt.'),
    'Embed: Kerri Chandler Rain': video(lang, 'weyCHkdL-HI', 'Deep House', 'Kerri Chandler', 'Rain',
      'Kerri Chandlers „Rain“, auf dem eigenen Kanal von Nervous Records.'),
    "Embed: Love Can't Turn Around": video(lang, 'wch77HlcVl0', 'House, 1986', 'Farley „Jackmaster“ Funk', "Love Can't Turn Around",
      'Die Chicagoer Platte, die im September 1986 Platz 10 in Großbritannien erreichte, gesungen von Darryl Pandy.'),
    'Embed: Promised Land': video(lang, 'BJyD_TPeJAI', 'House, 1987', 'Joe Smooth', 'Promised Land',
      'Joe Smooths Chicagoer Hymne von 1987. Carl Cox und Green Velvet beendeten 2024 damit Chicagos ARC Festival.'),
    'Embed: One More Time': video(lang, 'FGBhQbmPwH8', 'French House, 2000', 'Daft Punk', 'One More Time',
      'Daft Punks French-House-Single vom November 2000, auf dem eigenen Kanal des Duos.'),
    'Embed: Black Coffee Cercle': video(lang, 'SGqg_ZzThDU', 'Afro House', 'Black Coffee', 'Salle Wagram, Paris, für Cercle',
      'Black Coffee legt für Cercle in Paris auf. Aus dem Katalog aufgezeichneter DJ-Sets dieser Seite.'),
    'thecatrave mix': ownSetListening(0, lang, 'Dreißig Tracks zwischen Garage, Bass Music, Techno und Rave. Mein eigener Mix.'),
    'Table: Subgenres': articleTable({
      headers: ['Stil', 'Wo und wann', 'Wie er klingt', 'Eine Platte zum Einstieg'],
      rows: [
        ['Chicago House', 'Chicago, ab 1984', 'Drumcomputer, tiefe Bassline, eine wiederholte Vocal-Zeile', 'Marshall Jefferson, „Move Your Body“'],
        ['Deep House', 'Chicago, ab 1985', 'Langsamer und wärmer, Jazz- und Soul-Akkorde, lange Pads', 'Mr. Fingers, „Can You Feel It“'],
        ['Acid House', 'Chicago, 1987', 'Eine von Hand verdrehte TB-303-Bassline im Vordergrund', 'Phuture, „Acid Tracks“'],
        ['Garage House', 'New York und New Jersey, 1980er', 'Gospel-Klavier, starke Vocals, nah am Disco', 'Kerri Chandler, „Rain“'],
        ['Ghetto House', 'Chicago, frühe 1990er', 'Schneller und rauer, vom Label Dance Mania', 'Paul Johnson'],
        ['French House', 'Paris, späte 1990er', 'Samples von Funk- und Disco-Platten, oft gefiltert', 'Daft Punk, „One More Time“'],
        ['Tech House', 'Großbritannien und Spanien, 1990er', 'Techno-Drums mit House-Groove', 'Keine einzelne Gründungsplatte'],
        ['Afro House und Amapiano', 'Südafrika, 1990er bis 2020er', 'House-Rhythmus mit Kwaito, Jazz und lokaler Percussion', 'Black Coffee']
      ].map(row => row.map(escapeHtml)),
      label: 'Stile der House-Musik'
    }),
    'Table: Vergleich': articleTable({
      headers: ['', 'House', 'Techno', 'EDM'],
      rows: [
        ['Wo', 'Chicago, frühe 1980er', 'Detroit, Mitte der 1980er', 'US-Festivals, ab etwa 2010'],
        ['Tempo', 'Etwa 118 bis 128 BPM', 'Etwa 120 bis 150 BPM', 'Je nach Stil verschieden'],
        ['Was führt', 'Groove, Bassline, oft ein Vocal', 'Maschinenrhythmus und Textur, selten ein Vocal', 'Drops und große Synth-Hooks'],
        ['Was das Wort bedeutet', 'Ein Genre', 'Ein Genre', 'Ein Marketingbegriff für eine Szene']
      ].map(row => row.map(escapeHtml)),
      label: 'Vergleich von House, Techno und EDM'
    })
  }),

  // The English page's sources, URL for URL, with translated labels.
  sources: [
    {href: 'https://en.wikipedia.org/wiki/House_music', label: 'Wikipedia: House music (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Frankie_Knuckles', label: 'Wikipedia: Frankie Knuckles (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Chicago_house', label: 'Wikipedia: Chicago house (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Move_Your_Body_(Marshall_Jefferson_song)', label: 'Wikipedia: Move Your Body (Marshall Jefferson song) (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Jack_Your_Body', label: 'Wikipedia: Jack Your Body (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Paradise_Garage', label: 'Wikipedia: Paradise Garage (englisch)'},
    {href: 'https://djmag.com/features/all-night-long-40-essential-tracks-40-years-of-house-music', label: 'DJ Mag: 40 essential tracks from 40 years of house music, 2024 (englisch)'},
    {href: 'https://splice.com/blog/what-is-house-music/', label: 'Splice: What is house music? History, artists and subgenres (englisch)'}
  ],
  sourcesNote: 'Die Anzahl der Sets stammt aus dem Katalog aufgezeichneter DJ-Sets dieser Seite, Stand September 2026.',

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
