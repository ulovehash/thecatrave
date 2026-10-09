// Spanish techno sets guide. Structure, facts and the ten recordings from the English
// page (best-techno-mixes-draft.md, build-best-techno-mixes-article.mjs), via the French
// version. Wording follows the live es-ES SERP read on 9 Oct 2026 (google.es, hl=es, gl=es):
// results write "mejores sets de techno" / "sets de techno" (Reddit, Apple Podcasts,
// YouTube), so "set" leads over "mix". People also ask is about tracks and DJs, not sets,
// and is not answered. Keyword Planner returned no row (keywords/es-best-techno-mixes.json).

import {articleVideoCard, articleVideoCollection} from '../../site-components.mjs';

export default {
  lang: 'es',
  name: 'es-best-techno-mixes',
  file: 'es/mejores-sets-techno.html',
  draft: 'es/best-techno-mixes-draft.md',
  canonical: 'https://thecatrave.com/es/mejores-sets-techno',
  englishPath: '/best-techno-mixes',
  ogImage: 'https://thecatrave.com/img/og/best-techno-mixes.jpg',
  bodyClass: 'article-page techno-mixes-page',
  minReadingMinutes: 8,

  title: 'Mejores sets de techno: 10 DJ sets esenciales',
  description: 'Diez sets de techno esenciales de Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd y más.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateLabel: '9 de octubre de 2026',

  heroKicker: 'DJ sets de techno',
  heroTitle: 'Los mejores sets de techno, de Detroit a hoy',
  deck: 'Diez sets de techno elegidos por cómo cada DJ encadena los discos, del funk de máquina de Detroit a los sets contemporáneos hipnóticos y dubby.',
  answerLabel: 'MEJORES SETS DE TECHNO',
  breadcrumbName: 'Los mejores sets de techno, de Detroit a hoy',

  answerSection: 'Respuesta',
  introSection: 'Introducción',
  introTitle: 'El set es donde el techno revela su estructura.',

  sections: [
    {id: 'criteria', heading: 'Qué hace esencial a un set de techno', title: 'Qué hace esencial a un set de techno.', tocLabel: 'Qué hace esencial a un set'},
    {id: 'detroit', heading: 'Detroit: funk, minimalismo y electro', title: 'Detroit: funk, minimalismo y electro.', tocLabel: 'Detroit: funk, minimalismo, electro', setCollection: true, subsections: ['mix-juan-atkins-mixmag-live-2015', 'mix-robert-hood-dj-mag-2019', 'mix-dj-stingray-boiler-room-dekmantel-2017']},
    {id: 'pressure', heading: 'Presión y precisión', title: 'Presión y precisión.', tocLabel: 'Presión y precisión', setCollection: true, subsections: ['mix-jeff-mills-mixmag-2019', 'mix-surgeon-boiler-room-2014', 'mix-ben-klock-boiler-room-berlin-2013']},
    {id: 'contemporary', heading: 'Caminos distintos por el techno contemporáneo', title: 'Caminos distintos por el techno contemporáneo.', tocLabel: 'Caminos del techno contemporáneo', setCollection: true, subsections: ['mix-helena-hauff-b2b-l-f-t-hor-2020', 'mix-wata-igarashi-hor-2023', 'mix-rodhad-boiler-room-2023', 'mix-fadi-mohem-boiler-room-berlin-2024']},
    {id: 'choose', heading: 'Qué set de techno escuchar primero', title: 'Qué set de techno escuchar primero.', tocLabel: '¿Qué set escuchar primero?'}
  ],

  media: ({lang}) => {
    const video = (label, item) => ({
      setItem: item,
      usePreviousParagraph: true,
      render: description => articleVideoCollection({lang, label, description, items: [articleVideoCard(item)]})
    });
    return {
      'Juan Atkins': video('Juan Atkins, Mixmag Live, 2015', {youtubeId: '9SuKJ-dbmbg', genre: 'TECHNO DE DETROIT', artist: 'Juan Atkins', title: 'Mixmag Live, 2015'}),
      'Robert Hood': video('Robert Hood, DJ Mag, 2019', {youtubeId: 'S2UORWQz_7k', genre: 'TECHNO MINIMAL', artist: 'Robert Hood', title: 'DJ Mag, 2019'}),
      'DJ Stingray': video('DJ Stingray, Boiler Room Dekmantel, 2017', {youtubeId: '7AGJp9_B_gM', genre: 'ELECTRO / TECHNO', artist: 'DJ Stingray', title: 'Boiler Room Dekmantel, 2017'}),
      'Jeff Mills': video('Jeff Mills, Mixmag, 2019', {youtubeId: 'jOVB05K9GPU', genre: 'TECHNO DE DETROIT', artist: 'Jeff Mills', title: 'Mixmag, 2019'}),
      'Surgeon': video('Surgeon, Boiler Room, 2014', {youtubeId: 'Ww9VtKqprUY', genre: 'TECHNO DE BIRMINGHAM', artist: 'Surgeon', title: 'Boiler Room, 2014'}),
      'Ben Klock': video('Ben Klock, Boiler Room Berlin, 2013', {youtubeId: 'DGWL7YI_2rI', genre: 'TECHNO BERLINÉS', artist: 'Ben Klock', title: 'Boiler Room Berlin, 2013'}),
      'Helena Hauff and L.F.T.': video('Helena Hauff b2b L.F.T., HÖR, 2020', {youtubeId: 'u2qaQLKkVDA', genre: 'ACID / ELECTRO / TECHNO', artist: 'Helena Hauff b2b L.F.T.', title: 'HÖR, 2020'}),
      'Wata Igarashi': video('Wata Igarashi, HÖR, 2023', {youtubeId: 'ku54y2l54Sc', genre: 'TECHNO HIPNÓTICO', artist: 'Wata Igarashi', title: 'HÖR, 2023'}),
      'Rodhad': video('Rødhåd, Boiler Room, 2023', {youtubeId: 'oNYarqQNev0', genre: 'TECHNO BERLINÉS', artist: 'Rødhåd', title: 'Boiler Room, 2023'}),
      'Fadi Mohem': video('Fadi Mohem, Boiler Room Berlin, 2024', {youtubeId: 'rTtVMHFlwoM', genre: 'DUB TECHNO', artist: 'Fadi Mohem', title: 'Boiler Room Berlin, 2024'})
    };
  },

  sources: [
    {href: 'https://www.youtube.com/@mixmag', label: 'Mixmag'},
    {href: 'https://www.youtube.com/@djmag', label: 'DJ Mag'},
    {href: 'https://www.youtube.com/@boilerroom', label: 'Boiler Room'},
    {href: 'https://www.youtube.com/@hoer.berlin', label: 'HÖR Berlin'}
  ],

  bandcamp: {
    description: 'Estos lanzamientos retoman el ritmo de máquina y las estructuras de club quebradas de arriba. Comprar uno apoya directamente la música y la escritura.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
