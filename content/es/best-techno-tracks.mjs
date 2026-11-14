// Spanish techno tracks guide. Structure, facts and the nine records from the
// English page (best-techno-tracks-draft.md, build-best-techno-tracks-article.mjs,
// media/best-techno-tracks.json); the module is the German one with the strings
// translated. Quotations are translated; the sources quoted are English and are
// listed below.
//
// Keywords: Google Keyword Planner, Spain and Mexico+Argentina+Colombia+Chile,
// Spanish, 2026-11-14, buckets only (keywords/es-best-techno-tracks.json).
// "mejores canciones techno" (10-100) sets the slug and the title; the seeds
// "mejores canciones de techno", "techno clásico" and "canciones de techno
// famosas" (10-100) carry the H1, intro and FAQ; "música techno de los 90"
// (100-1K) carries the 80s-and-90s FAQ. "buenas canciones de techno" was not
// measured.
//
// As in the English generator, the track players of a section sit together in
// one listening block. The draft keeps the English placeholder lines, so the
// track keys that are not the block's position render nothing, and the block
// is carried by the section's last placeholder. In the last section the block
// goes before the paragraph above the photograph, as the English page does, so
// a figure and a listening block never touch.
//
// The photographs are the English guide's, in img/best-techno-tracks/, with
// translated alt text and captions.
import {articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening} from '../../site-components.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/best-techno-tracks/${name}-${width}.webp`,
  srcset: `img/best-techno-tracks/${name}-320.webp 320w, img/best-techno-tracks/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

const spotify = (id, name) => articleTrackEmbed({platform: 'spotify', id, title: name});
const bandcamp = (id, url, name) => articleTrackEmbed({platform: 'bandcamp', id, url, title: name});
const soundcloud = (url, name) => articleTrackEmbed({platform: 'soundcloud', url, title: name});

const tracks = {
  'no-ufos': {artist: 'Model 500', title: "No UFO's", year: '1985', note: 'Metroplex. La versión vocal.',
    playerHtml: spotify('0shMp9Vkjr8X77jQCWlaEP', "Model 500, No UFO's")},
  'strings-of-life': {artist: 'Rhythim Is Rhythim', title: 'Strings of Life', year: '1987', note: 'Transmat.',
    playerHtml: spotify('78ZQfXjoaHU2QjXqWpa8l9', 'Rhythim Is Rhythim, Strings of Life')},
  'energy-flash': {artist: 'Joey Beltram', title: 'Energy Flash', year: '1990', note: 'R&S Records.',
    playerHtml: bandcamp('2779115416', 'https://randsrecords.bandcamp.com/track/energy-flash', 'Joey Beltram, Energy Flash')},
  'spastik': {artist: 'Plastikman', title: 'Spastik', year: '1993', note: 'Plus 8.',
    playerHtml: bandcamp('2542530288', 'https://richiehawtin.bandcamp.com/track/spastik', 'Plastikman, Spastik')},
  'the-bells': {artist: 'Jeff Mills', title: 'The Bells', year: '1996', note: 'Purpose Maker.',
    playerHtml: spotify('0ISxyAhfop0MoMeAUw72RN', 'Jeff Mills, The Bells')},
  'phylyps-trak': {artist: 'Basic Channel', title: 'Phylyps Trak', year: '1993', note: 'Basic Channel.',
    playerHtml: spotify('4KsL7ddeairY2OMs8OFRSR', 'Basic Channel, Phylyps Trak')},
  'subzero': {artist: 'Ben Klock', title: 'Subzero', year: '2009', note: 'Ostgut Ton.',
    playerHtml: bandcamp('3711497848', 'https://benklock.bandcamp.com/track/subzero', 'Ben Klock, Subzero')},
  'jaguar': {artist: 'The Aztec Mystic', title: 'Jaguar', year: '1999', note: 'Underground Resistance.',
    playerHtml: soundcloud('https://soundcloud.com/undergroundresistance/djrolandojaguar', 'The Aztec Mystic, Jaguar')},
  'doppler': {artist: 'Charlotte de Witte', title: 'Doppler', year: '2021', note: 'KNTXT.',
    playerHtml: soundcloud('https://soundcloud.com/kntxtmusic/charlotte-de-witte-doppler', 'Charlotte de Witte, Doppler')}
};

export default {
  lang: 'es',
  name: 'es-best-techno-tracks',
  file: 'es/mejores-canciones-techno.html',
  draft: 'es/best-techno-tracks-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-canciones-techno',
  englishPath: '/best-techno-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-techno-tracks.jpg',
  bodyClass: 'article-page best-techno-tracks-page',
  minReadingMinutes: 6,

  title: 'Mejores canciones techno: nueve temas que forjaron el sonido',
  description: 'Las mejores canciones techno, de No UFO\'s y Strings of Life a The Bells y Doppler: nueve clásicos, cada uno con reproductor y los datos detrás.',
  datePublished: '2026-11-14',
  dateModified: '2026-11-14',
  dateLabel: '14 de noviembre de 2026',

  heroKicker: 'Canciones de techno',
  heroTitle: 'Mejores canciones de techno: nueve discos que forjaron el sonido',
  deck: 'Nueve discos de techno agrupados por escena, cada uno con reproductor y los datos detrás, de Detroit en 1985 a 2021.',
  answerLabel: 'MEJORES CANCIONES DE TECHNO',
  breadcrumbName: 'Mejores canciones techno',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'Una lista de discos, no una historia.',
  faqSection: 'Preguntas frecuentes',
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Preguntas frecuentes sobre las mejores canciones techno.',

  sections: [
    {id: 'how-chosen', heading: 'Nueve formas distintas de entender el techno'},
    {id: 'detroit-chicago', heading: 'Detroit y Chicago, 1985 a 1987'},
    {id: 'rave-acid-minimalism', heading: 'Presión rave y minimalismo acid, 1990 a 1996', tocLabel: 'Presión rave y minimalismo acid'},
    {id: 'berlin-dub-techno', heading: 'Berlín y dub techno'},
    {id: 'underground-resistance', heading: 'Underground Resistance y Doppler'},
    {id: 'play-first', heading: '¿Qué canción de techno deberías escuchar primero?', tocLabel: '¿Qué tema primero?'},
    {id: 'break-from-list', heading: 'Música de thecatrave'}
  ],

  media: ({lang}) => {
    const block = (id, label, keys) => articleListeningCollection({
      lang, id: `listen-${id}`, label, tone: 'cyan', items: keys.map(key => tracks[key])
    });
    const deWitte = figure('charlotte-de-witte-rotterdam', 900, 1120,
      'Charlotte de Witte a los platos en Toffler, Róterdam',
      'Charlotte de Witte pinchando en Toffler, Róterdam. Foto: Alan Overbeek, CC BY-SA 4.0.');
    return {
      'no-ufos': '',
      'strings-of-life': block('detroit-chicago', 'Detroit y Chicago', ['no-ufos', 'strings-of-life']),
      'energy-flash': '',
      'spastik': '',
      'the-bells': block('rave-acid-minimalism', 'Presión rave y minimalismo acid', ['energy-flash', 'spastik', 'the-bells']),
      'phylyps-trak': '',
      'subzero': '',
      'jaguar': '',
      'doppler': '',
      'Richie Hawtin at Fabric': figure('richie-hawtin-fabric', 1200, 900,
        'Richie Hawtin pinchando en Fabric, Londres',
        'Richie Hawtin en Fabric, Londres, 2008. Como Plastikman publicó Spastik. Foto: Raminta Malinauskaite, CC BY-SA 3.0.'),
      'Charlotte de Witte in Rotterdam': {
        usePreviousParagraph: true,
        render: text => `${block('underground-resistance', 'Underground Resistance y Doppler', ['jaguar', 'doppler'])}\n<p>${escapeHtml(text)}</p>\n${deWitte}`
      },
      'thecatrave Berlin Race 1909': `${ownTrackListening('berlin-race-1909', 'Mi propio tema, hecho cuando vivía en Berlín. No forma parte de la lista.', lang)}\n${block('berlin-dub-techno', 'Berlín y dub techno', ['phylyps-trak', 'subzero'])}`,
      'thecatrave No Genre No Problem': ownTrackListening('no-genre-no-problem', 'Mi primer tema terminado, y no forma parte de la lista.', lang),
      chosen: articleTable({
        headers: ['Tema', 'Artista', 'Año', 'Sello'],
        rows: [
          ["No UFO's", 'Model 500', '1985', 'Metroplex'],
          ['Strings of Life', 'Rhythim Is Rhythim', '1987', 'Transmat'],
          ['Energy Flash', 'Joey Beltram', '1990', 'R&S Records'],
          ['Spastik', 'Plastikman', '1993', 'Plus 8'],
          ['The Bells', 'Jeff Mills', '1996', 'Purpose Maker'],
          ['Phylyps Trak', 'Basic Channel', '1993', 'Basic Channel'],
          ['Subzero', 'Ben Klock', '2009', 'Ostgut Ton'],
          ['Jaguar', 'The Aztec Mystic', '1999', 'Underground Resistance'],
          ['Doppler', 'Charlotte de Witte', '2021', 'KNTXT']
        ].map(row => row.map(escapeHtml))
      })
    };
  },

  sources: [
    {href: 'https://www.attackmagazine.com/technique/deconstructed/model-500-no-ufos/', label: "Attack Magazine: Deconstructed, Model 500, No UFO's"},
    {href: 'https://articles.roland.com/strings-of-life-derrick-may/', label: 'Roland Articles: Strings of Life, Derrick May'},
    {href: 'https://daily.redbullmusicacademy.com/2017/05/interview-derrick-may/', label: 'Red Bull Music Academy Daily: entrevista con Derrick May'},
    {href: 'https://www.insomniac.com/?p=84044', label: 'Insomniac: Rhythim Is Rhythim, Strings of Life'},
    {href: 'https://www.insomniac.com/?p=40063', label: 'Insomniac: DJ Rolando, Knights of the Jaguar'},
    {href: 'https://attackmagazine.com/?p=79387', label: 'Attack Magazine: Joey Beltram, Energy Flash'},
    {href: 'https://www.insomniac.com/music/from-the-crate-plastikman-spastik/', label: 'Insomniac: From the Crate, Plastikman, Spastik'},
    {href: 'https://xlr8r.com/?p=113950', label: 'XLR8R: Jeff Mills, The Bells'},
    {href: 'https://ra.co/reviews/24143', label: 'Resident Advisor: RA Rewind, Basic Channel, Phylyps Trak'},
    {href: 'https://benklock.bandcamp.com/track/subzero', label: 'Ben Klock en Bandcamp: Subzero'},
    {href: 'https://charlottedewittemusic.bandcamp.com/album/formula-ep', label: 'Charlotte de Witte en Bandcamp: Formula EP'},
    {href: 'https://www.timeout.com/newyork/nightlife/best-techno-songs-of-all-time', label: 'Time Out New York: Best techno songs of all time'},
    {href: 'https://dmy.co/10-best/the-10-best-techno-tracks-according-to-benjamin-damage/', label: 'Dummy: The 10 best techno tracks according to Benjamin Damage'},
    {href: 'https://www.musicindustryhowto.com/techno-songs/', label: 'Music Industry How To: Techno songs'}
  ],

  bandcamp: {
    description: 'Uno de mis propios temas. Comprarlo apoya directamente mi trabajo.',
    tracks: [
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes, de thecatrave'}
    ]
  }
};
