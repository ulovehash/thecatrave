// German techno guide. Structure and facts from the English page
// (techno-music-draft.md, build-techno-music-article.mjs).
//
// German keywords (keywords/de-techno.json): Keyword Planner, Germany,
// 2026-10-01: Techno-Musik in the bucket only, no exact volume. Wording
// checked in Google de-DE the same day (People also ask).
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
  lang: 'de',
  name: 'de-techno',
  file: 'de/techno-musik.html',
  draft: 'de/techno-musik-draft.md',
  canonical: 'https://thecatrave.com/de/techno-musik',
  englishPath: '/techno-music-guide',
  ogImage: 'https://thecatrave.com/img/og/techno-music.jpg',
  bodyClass: 'article-page techno-music-page',
  minReadingMinutes: 9,

  title: 'Was ist Techno-Musik? Detroit, Belleville Three, Techno heute',
  description: 'Techno ist maschinengemachte Tanzmusik aus Detroit: die Belleville Three, warum sie Techno heißt, Underground Resistance, Berlin, Minimal und Hard Techno.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'Techno-Musik-Guide',
  heroTitle: 'Techno: von Detroit nach Berlin und zurück',
  deck: 'Drei Freunde aus einer Kleinstadt bei Detroit, ein Radio-DJ, der Kraftwerk neben Funkadelic spielte, und die Maschinenmusik, die ihr größtes Publikum in Europa fand.',
  answerLabel: 'Techno-Musik: Definition',
  breadcrumbName: 'Techno-Musik-Guide',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Musik, die nach Technologie klingt.',
  faqSection: 'FAQ',
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Häufige Fragen zu Techno.',

  sections: [
    {id: 'what-is-techno', heading: 'Was ist Techno', title: 'Was ist Techno?'},
    {id: 'sound', heading: 'Wie Techno klingt'},
    {id: 'detroit', heading: 'Detroit und die Belleville Three'},
    {id: 'name', heading: 'Warum heißt es Techno', title: 'Warum heißt es Techno?'},
    {id: 'strings-of-life', heading: 'Strings of Life und das Music Institute'},
    {id: 'underground-resistance', heading: 'Underground Resistance und die zweite Welle'},
    {id: 'berlin', heading: 'Berlin und die Techno-Allianz'},
    {id: 'types', heading: 'Arten von Techno'},
    {id: 'today', heading: 'Techno heute und Detroit jetzt'},
    {id: 'techno-vs-house', heading: 'Techno vs. House'}
  ],

  media: ({lang}) => ({
    'Image: Derrick May': figure('derrick-may-2015', 820, 883,
      'Nahaufnahme von Derrick May mit Brille und dunkler Jacke',
      'Derrick May, der das Label Transmat führte und „Strings of Life“ machte, 2015. Foto: Natalie Chickee, CC BY-SA 4.0.'),
    'Image: Juan Atkins': figure('juan-atkins-2010', 620, 808,
      'Juan Atkins in einem grauen Kapuzenpullover in einem dunklen Club',
      'Juan Atkins 2010 in Detroit. Er machte „Clear“ als Cybotron und „No UFO’s“ als Model 500. Foto: Angie Linder, CC BY-SA 2.0.'),
    'Image: Jeff Mills': figure('jeff-mills-2010', 1200, 798,
      'Jeff Mills mischt an einer Club-DJ-Kanzel, hinter ihm schauen Menschen zu',
      'Jeff Mills im Juni 2010 in Detroit. Er gründete Underground Resistance gemeinsam mit Mike Banks. Foto: Angie Linder, CC BY-SA 2.0.'),
    'Embed: Clear': video(lang, 'Unc8kDUzbU8', 'Electro, 1983', 'Cybotron', 'Clear',
      'Juan Atkins und Richard Davis als Cybotron, zwei Jahre bevor Techno seine erste Platte hatte.'),
    'Embed: No UFO\'s': video(lang, 'xcdOBLH_AXs', 'Techno, 1985', 'Model 500', 'No UFO\'s',
      'Juan Atkins als Model 500 auf seinem eigenen Label Metroplex: die Platte, die meist die erste Techno-Platte genannt wird.'),
    'Embed: Strings of Life': video(lang, 'vGFw2qeUp0s', 'Techno, 1987', 'Rhythim Is Rhythim', 'Strings of Life',
      'Derrick Mays Platte, die House und Techno gleichermaßen für sich beanspruchen.'),
    'Embed: Big Fun': video(lang, 'Gr-zG-IXDyo', 'House, 1988', 'Inner City', 'Big Fun',
      'Kevin Saundersons Inner City, auf dem eigenen Kanal der Gruppe: 1988 Platz acht in Großbritannien.'),
    'Embed: The Bells': video(lang, 'S-BlgAQ7uRQ', 'Techno, 1996', 'Jeff Mills', 'The Bells',
      'Jeff Mills’ Platte von 1996, auf jeder Liste der Techno-Klassiker.'),
    'Embed: Robert Hood Boiler Room': video(lang, 'TaFJGvwaczU', 'Minimal Techno', 'Robert Hood', 'DJ-Set, Boiler Room x Red Bull Music Academy, 2013',
      'Robert Hood, das Mitglied von Underground Resistance, das Minimal Techno begründete.'),
    'Embed: Energy Flash': video(lang, 'BDj73pGQ6pE', 'Techno, 1990', 'Joey Beltram', 'Energy Flash',
      'Die Platte des New Yorker Produzenten für das belgische Label R&S, von 1990.'),
    'Embed: Sara Landry Boiler Room': video(lang, 'EIQlDpgAY5Y', 'Hard Techno', 'Sara Landry', 'Boiler Room x Teletech Festival, 2023',
      'Das meistgesehene Set mit dem Tag Hard Techno im Katalog aufgezeichneter DJ-Sets dieser Seite.'),
    'Embed: Kevin Saunderson Boiler Room': video(lang, 'gvvb-SNL9tM', 'Techno', 'Kevin Saunderson', 'DJ-Set, Boiler Room Chicago, 2014',
      'Kevin Saunderson legt für Boiler Room in Chicago auf.'),
    'thecatrave mix': ownSetListening(1, lang, 'Mein eigener Mix, für nach der Geschichte.'),
    'Table: Stile': articleTable({
      headers: ['Stil', 'Wo und wann', 'Wie er klingt', 'Eine Platte zum Einstieg'],
      rows: [
        ['Detroit Techno', 'Detroit, Mitte der 1980er', 'Maschinen-Funk, Strings und Synthesizer-Linien', 'Model 500, „No UFO’s“'],
        ['Minimal Techno', 'Detroit, frühe 1990er', 'Drums, Bassline und Groove, sonst nichts', 'Robert Hood, Minimal Nation'],
        ['Dub Techno', 'Frühe 1990er', 'Techno gekreuzt mit jamaikanischem Dub: tiefer Bass, langsame Akkorde, viel Delay', 'Keine einzelne Gründungsplatte'],
        ['Acid Techno', '1990er', 'Eine TB-303-Linie über härteren Techno-Drums', 'Hardfloor, „Acperience 1“'],
        ['Melodic Techno', 'Europa, späte 2000er bis 2010er', 'Techno-Rhythmus mit langen melodischen Verläufen, 120 bis 128 BPM', 'Tale of Us, ARTBAT, Stephan Bodzin'],
        ['Hard Techno', 'Europa, 2010er bis 2020er', 'Schnell und verzerrt, die Kick vorn', 'Sara Landry']
      ].map(row => row.map(escapeHtml)),
      label: 'Stile des Techno'
    }),
    'Table: Vergleich': articleTable({
      headers: ['', 'Techno', 'House'],
      rows: [
        ['Wo', 'Detroit, Mitte der 1980er', 'Chicago, frühe 1980er'],
        ['Tempo', 'Etwa 120 bis 150 BPM', 'Etwa 118 bis 128 BPM'],
        ['Was führt', 'Maschinenrhythmus und Textur', 'Groove, Bassline, oft ein Vocal'],
        ['Wurzeln', 'Kraftwerk, Electro, Funk, Chicago House', 'Disco, Soul, Platten aus Philadelphia und von Salsoul'],
        ['Eine Platte zum Einstieg', 'Model 500, „No UFO’s“', 'Marshall Jefferson, „Move Your Body“']
      ].map(row => row.map(escapeHtml)),
      label: 'Vergleich von Techno und House'
    })
  }),

  sources: [
    {href: 'https://en.wikipedia.org/wiki/Techno', label: 'Wikipedia: Techno (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Detroit_techno', label: 'Wikipedia: Detroit techno (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Belleville_Three', label: 'Wikipedia: Belleville Three (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/No_UFO%27s', label: 'Wikipedia: No UFO\'s (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Strings_of_Life', label: 'Wikipedia: Strings of Life (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Underground_Resistance', label: 'Wikipedia: Underground Resistance (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Robert_Hood', label: 'Wikipedia: Robert Hood (englisch)'},
    {href: 'https://en.wikipedia.org/wiki/Movement_Electronic_Music_Festival', label: 'Wikipedia: Movement Electronic Music Festival (englisch)'},
    {href: 'https://musicbrainz.org/release/d0a0ade7-14fb-4ff9-9ebb-44be77c5f579', label: 'MusicBrainz: Robert Hood, Minimal Nation (Axis, 1994) (englisch)'}
  ],

  bandcamp: {
    description: 'Zwei meiner eigenen Tracks. Ein Kauf unterstützt meine Arbeit direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 von thecatrave'}
    ]
  }
};
