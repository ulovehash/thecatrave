// French trance tracks guide. Structure, facts and the twelve records from the English
// page (best-trance-tracks-draft.md, build-best-trance-tracks-article.mjs). Media are the
// English page's, unchanged (media/best-trance-tracks.json); only alt text, captions and
// notes are translated. Wording from Keyword Planner (France, French, 13 November 2026)
// and the google.fr SERP notes; volumes in keywords/fr-best-trance-tracks.json.

import {
  articleFigure, articleListeningCollection, articleTable, articleTrackEmbed, ownTrackListening
} from '../../site-components.mjs';

const figure = (name, height, alt, caption) => articleFigure({
  src: `img/best-trance-tracks/${name}-1200.webp`,
  srcset: `img/best-trance-tracks/${name}-320.webp 320w, img/best-trance-tracks/${name}-1200.webp 1200w`,
  width: 1200, height, alt, caption, className: 'wide-archive-image'
});

const records = (lang, id, title, description, items) => articleListeningCollection({
  lang, id, title, description, tone: 'cyan',
  items: items.map(([artist, name, year, ytId, note]) => ({
    artist, title: name, year, note,
    playerHtml: articleTrackEmbed({platform: 'youtube', id: ytId, title: `${artist}, ${name}`})
  }))
});

export default {
  lang: 'fr',
  name: 'fr-best-trance-tracks',
  file: 'fr/meilleures-musiques-trance.html',
  draft: 'fr/best-trance-tracks-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleures-musiques-trance',
  englishPath: '/best-trance-tracks',
  ogImage: 'https://thecatrave.com/img/og/best-trance-tracks.jpg',
  bodyClass: 'article-page best-trance-tracks-page',
  minReadingMinutes: 5,

  title: 'Meilleures musiques trance de tous les temps : 1993 à 2012',
  description: 'Les meilleures musiques trance de tous les temps : 12 morceaux avec lecteur, charts britanniques et votes des fans, de Children à Adagio for Strings.',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  dateLabel: '13 novembre 2026',

  heroKicker: 'Trance',
  heroTitle: 'Les meilleures musiques trance de tous les temps, de 1993 à 2012',
  deck: 'Douze disques de trance de 1993 à 2012, avec l’année de sortie, la place dans les charts britanniques et un lecteur pour chacun.',
  answerLabel: 'En bref',
  breadcrumbName: 'Les meilleures musiques trance de tous les temps',

  answerSection: 'En bref',
  introSection: 'Introduction',
  introTitle: 'Une liste de disques, pas l’histoire d’un genre.',
  faqSection: 'FAQ',
  faqLabel: 'Questions fréquentes',
  faqTitle: 'Questions fréquentes sur les meilleurs morceaux de trance.',

  sections: [
    {id: 'how-chosen', heading: 'Tubes des charts et favoris des fans', title: 'Tubes des charts et favoris des fans.'},
    {id: 'before-the-charts', heading: 'Avant les charts : 1993 à 1995', title: 'Avant les charts : 1993 à 1995.'},
    {id: 'chart-years', heading: 'Les années des charts : les meilleures musiques trance de 1998 et 1999', title: 'Les années des charts : les meilleures musiques trance de 1998 et 1999.', tocLabel: 'Les années des charts : 1998 et 1999'},
    {id: 'superstar-years', heading: 'Les années des DJ superstars : 2004 à 2012', title: 'Les années des DJ superstars : 2004 à 2012.'},
    {id: 'best-ever', heading: 'Quelle est la meilleure musique trance de tous les temps ?', title: 'Quelle est la meilleure musique trance de tous les temps ?', tocLabel: 'La meilleure musique trance ?'},
    {id: 'a-break', heading: 'Deux morceaux à moi', title: 'Deux morceaux à moi.'}
  ],

  media: ({lang}) => ({
    'figur-armin': figure('armin-van-buuren-2008', 900,
      'Armin van Buuren le poing levé derrière les platines, devant des lasers verts',
      'Armin van Buuren en live, 2008. Photo : Davide Pasca, CC BY 2.0.'),
    'figur-corsten': figure('ferry-corsten-2010', 800,
      'Ferry Corsten en live à Edmonton, au Canada',
      'Ferry Corsten en live à Edmonton, Canada, 2010. Photo : Celwin Frenzen, CC BY 3.0.'),
    'figur-tiesto': figure('tiesto-2010', 800,
      'Tiësto aux platines dans une boîte de nuit de Bangkok',
      'Tiësto au 808 Nightclub, Bangkok, 2010. Photo : Vyacheslav Argenberg, CC BY 4.0.'),
    'liste-vor-den-charts': records(lang, 'listen-before-charts', 'Trois disques d’avant les années des charts',
      'Deux disques entrés dans les charts britanniques des années après leur sortie, et un qui a atteint la 2e place.', [
        ['Energy 52', "Café del Mar (Three 'n One Radio Remix)", '1993', 'yyvp_nCM15Q', 'Sorti en 1993 ; ce remix est entré dans les charts britanniques en mars 1997.'],
        ['Paul van Dyk', 'For an Angel (E-Werk Remix)', '1994', '5JqtsdrHJvg', 'Premier morceau sur MFS, en 1994 ; ce remix de 1998 porte le nom du club berlinois E-Werk.'],
        ['Robert Miles', 'Children', '1995', 'DvyCbevQbtI', '2e place au Royaume-Uni, huitième single le plus vendu de 1996.']
      ]),
    'liste-chartjahre': records(lang, 'listen-chart-years', 'Quatre disques de 1998 et 1999',
      'D’un premier single à l’adaptation chantée d’un thème de 1982.', [
        ['ATB', '9 PM (Till I Come)', '1998', '1DcABTJoWCc', 'Kontor Records, 26 octobre 1998 ; la sortie britannique a atteint la 1re place.'],
        ['Chicane feat. Máire Brennan', 'Saltwater', '1999', 'uTJtfytoYy4', '6e place au Royaume-Uni, numéro 1 du classement dance.'],
        ['System F', 'Out of the Blue', '1999', 'Qgx_V0So0qk', 'La percée de Ferry Corsten, 14e place au Royaume-Uni.'],
        ['Delerium feat. Sarah McLachlan', "Silence (Tiësto's In Search of Sunrise Remix)", '1999', 'O3gz3nnYv68', 'Les remixes d’octobre 2000 ont atteint la 3e place au Royaume-Uni ; celui-ci est quatrième dans les deux votes des fans.']
      ]),
    'liste-superstar-jahre': records(lang, 'listen-superstar-years', 'Cinq disques de 2004 à 2012',
      'Des places plus basses dans les charts britanniques que les disques des années 90, des rangs plus hauts dans le vote des fans.', [
        ['OceanLab', 'Satellite (Original Above & Beyond Mix)', '2004', 'NqPAOsIEDcI', '19e place au Royaume-Uni en 2004, 3e du classement dance.'],
        ['Tiësto', 'Adagio for Strings', '2005', 'B0PV_S4m6Ig', '37e place au Royaume-Uni, deuxième dans les deux votes des fans.'],
        ['Armin van Buuren feat. Susana', 'Shivers', '2005', 'NHUn3AWOw8k', 'Sorti le 14 février 2005 sur Armind.'],
        ['Armin van Buuren', 'Communication Part 3', '2007', 'BK0xoHYUezM', 'Dans le top cinq des deux votes des fans ; sorti sur Armind en avril 2007.'],
        ['Gareth Emery feat. Christina Novelli', 'Concrete Angel', '2012', 'f3GRM0Yz7wM', 'Sorti sur Garuda en février 2012.']
      ]),
    'tabelle-charts': articleTable({
      headers: ['Disque', 'Année', 'Meilleure place, UK Official Singles Chart'],
      rows: [
        ['ATB, 9 PM (Till I Come)', '1998 (sortie britannique, 1999)', '1'],
        ['Robert Miles, Children', '1995', '2'],
        ['Delerium feat. Sarah McLachlan, Silence', '1999 (remixes, 2000)', '3'],
        ['Chicane, Saltwater', '1999', '6'],
        ['System F, Out of the Blue', '1999', '14'],
        ['OceanLab, Satellite', '2004', '19'],
        ['Paul van Dyk, For an Angel (E-Werk Remix)', '1994 (remix, 1998)', '28'],
        ['Tiësto, Adagio for Strings', '2005', '37'],
        ['Armin van Buuren, Shivers/Serenity', '2005', '72']
      ]
    }),
    // The owner's own music inside the text, as on the English page.
    'eigener-track-berlin': ownTrackListening('berlin-race-1909', 'Du nom de Berlin, la ville dont le club E-Werk a donné son nom au remix de For an Angel : l’espace de la dub techno, avec des batteries en dessous. Un morceau à moi.', lang),
    'eigener-track-no-genre': ownTrackListening('no-genre-no-problem', 'Glitch, IDM et ambient, loin de la grande scène. Un morceau à moi.', lang)
  }),

  sources: [
    {href: 'https://www.officialcharts.com/songs/', label: 'Official Charts : historiques de classement de 9PM (Till I Come), Saltwater, Children, Silence, Café del Mar, For an Angel, Adagio for Strings, Satellite, Shivers/Serenity et Out of the Blue'},
    {href: 'https://www.astateoftrance.com/armin-van-buuren-reveals-all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance : les résultats du All-Time Top 1000 de 2021'},
    {href: 'https://www.astateoftrance.com/all-time-a-state-of-trance-top-1000-list/', label: 'A State of Trance : les résultats du All-Time Top 1000 de 2024'},
    {href: 'https://djmag.com/features/how-paul-van-dyks-angel-changed-trance-forever', label: 'DJ Mag : How Paul van Dyk’s For An Angel changed trance forever, sur la sortie chez MFS en 1994 et l’E-Werk Remix'}
  ],
  sourcesNote: 'Les dates de sortie de 9 PM (Till I Come), Saltwater, Out of the Blue, Shivers, Communication Part 3 et Concrete Angel viennent de discographies et d’ouvrages de référence, pas d’une page de label. Photos de Wikimedia Commons : Davide Pasca (CC BY 2.0), Celwin Frenzen (CC BY 3.0), Vyacheslav Argenberg (CC BY 4.0).',

  bandcamp: {
    description: 'Un achat soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks de thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes de thecatrave'}
    ]
  }
};
