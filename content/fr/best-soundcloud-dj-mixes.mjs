// French SoundCloud DJ mixes guide. Structure, facts and the nine players from the
// English page (best-soundcloud-dj-mixes-draft.md, build-best-soundcloud-dj-mixes-article.mjs).
// Wording is the page's own (the Google SERP check was blocked by a bot-check, so it was
// not verified there); volumes are null in keywords/fr-best-soundcloud-dj-mixes.json.

import {articleListeningBand} from '../../site-components.mjs';

const soundcloudSrc = url => `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

export default {
  lang: 'fr',
  name: 'fr-best-soundcloud-dj-mixes',
  file: 'fr/meilleurs-mix-dj-soundcloud.html',
  draft: 'fr/best-soundcloud-dj-mixes-draft.md',
  canonical: 'https://thecatrave.com/fr/meilleurs-mix-dj-soundcloud',
  englishPath: '/best-soundcloud-dj-mixes',
  ogImage: 'https://thecatrave.com/img/og/best-soundcloud-dj-mixes.jpg',
  bodyClass: 'article-page soundcloud-mixes-page',
  minReadingMinutes: 7,

  title: 'Meilleurs mix DJ SoundCloud, plus un choix personnel',
  description: 'Huit des meilleurs mix DJ SoundCloud, de Wata Igarashi et Ogazón à Djrum et SHERELLE, plus un mix de thecatrave clairement signalé.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1er octobre 2026',

  heroKicker: 'Mix DJ SoundCloud',
  heroTitle: 'Les meilleurs mix DJ SoundCloud à écouter',
  deck: 'Huit sélections éditoriales avec un vrai point de vue, plus un choix personnel de thecatrave dont le lien est énoncé clairement.',
  answerLabel: 'MEILLEURS MIX DJ SOUNDCLOUD',
  breadcrumbName: 'Les meilleurs mix DJ SoundCloud à écouter',

  answerSection: 'Réponse',
  introSection: 'Introduction',
  introTitle: 'Un mix doit donner du sens à une heure.',

  sections: [
    {id: 'criteria', heading: 'Comment ces mix SoundCloud ont été choisis', title: 'Comment ces mix SoundCloud ont été choisis.', tocLabel: 'Comment ces mix ont été choisis'},
    {id: 'house-techno', heading: 'House, techno et l’espace entre les deux', title: 'House, techno et l’espace entre les deux.', tocLabel: 'House, techno et l’entre-deux', subsections: ['entry-wata-igarashi-recognise-081', 'entry-ogazon-recognise-096', 'entry-sedef-adasi-recognise', 'entry-doudou-md-recognise-078']},
    {id: 'breaks-bass', heading: 'Breaks, bass et pistes leftfield', title: 'Breaks, bass et pistes leftfield.', tocLabel: 'Breaks, bass et leftfield', subsections: ['entry-objekt-dekmantel-podcast-116', 'entry-djrum-dekmantel-podcast-267', 'entry-dj-python-dekmantel-podcast-208', 'entry-sherelle-dekmantel-podcast-285']},
    {id: 'personal-pick', heading: 'Un mix de plus, en toute transparence', title: 'Un mix de plus, en toute transparence.', tocLabel: 'Un mix de plus', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
    {id: 'choose', heading: 'Quel mix DJ SoundCloud écouter en premier ?', title: 'Quel mix DJ SoundCloud écouter en premier ?', tocLabel: 'Quel mix écouter d’abord ?'}
  ],

  media: () => ({
    'Wata Igarashi': articleListeningBand({
      platform: 'soundcloud', id: 'mix-wata-igarashi-recognise-081', kicker: 'Essential listening', title: 'Mix SoundCloud : Wata Igarashi, Recognise 081.',
      description: 'Techno psychédélique construite par des percussions en mouvement et de petits changements de texture.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-081-wata-igarashi'),
      iframeTitle: 'Wata Igarashi, Recognise 081 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Ogazon': articleListeningBand({
      platform: 'soundcloud', id: 'mix-ogazon-recognise-096', kicker: 'Essential listening', title: 'Mix SoundCloud : Ogazón, Recognise 096.',
      description: 'House et techno patientes dont le swing porte les transitions.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-096-ogazon'),
      iframeTitle: 'Ogazón, Recognise 096 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Sedef Adasi': articleListeningBand({
      platform: 'soundcloud', id: 'mix-sedef-adasi-recognise', kicker: 'Essential listening', title: 'Mix SoundCloud : Sedef Adasi, Recognise.',
      description: 'House, acid, trance et electro programmées comme un seul grand set de club.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-sedef-adasi'),
      iframeTitle: 'Sedef Adasi, Recognise sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Doudou MD': articleListeningBand({
      platform: 'soundcloud', id: 'mix-doudou-md-recognise-078', kicker: 'Essential listening', title: 'Mix SoundCloud : Doudou MD, Recognise 078.',
      description: 'Grooves house souples et swingués face à une techno plus percutante.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-078-doudou-md'),
      iframeTitle: 'Doudou MD, Recognise 078 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Objekt': articleListeningBand({
      platform: 'soundcloud', id: 'mix-objekt-dekmantel-podcast-116', kicker: 'Essential listening', title: 'Mix SoundCloud : Objekt, Dekmantel Podcast 116.',
      description: 'Transitions détaillées à travers techno, electro et rythme brisé.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-116-objekt'),
      iframeTitle: 'Objekt, Dekmantel Podcast 116 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Djrum': articleListeningBand({
      platform: 'soundcloud', id: 'mix-djrum-dekmantel-podcast-267', kicker: 'Essential listening', title: 'Mix SoundCloud : Djrum, Dekmantel Podcast 267.',
      description: 'Électronique spacieuse, broken beats et jungle reliés par des changements d’allure.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-267-djrum'),
      iframeTitle: 'Djrum, Dekmantel Podcast 267 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'DJ Python': articleListeningBand({
      platform: 'soundcloud', id: 'mix-dj-python-dekmantel-podcast-208', kicker: 'Essential listening', title: 'Mix SoundCloud : DJ Python, Dekmantel Podcast 208.',
      description: 'Un chemin bas à travers dembow, espace dub et brume ambient.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-208-dj-python'),
      iframeTitle: 'DJ Python, Dekmantel Podcast 208 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'SHERELLE': articleListeningBand({
      platform: 'soundcloud', id: 'mix-sherelle-dekmantel-podcast-285', kicker: 'Essential listening', title: 'Mix SoundCloud : SHERELLE, Dekmantel Podcast 285.',
      description: 'Footwork, jungle et rythmes brisés rapides, tenus ensemble sous pression.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-285-sherelle'),
      iframeTitle: 'SHERELLE, Dekmantel Podcast 285 sur SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'thecatrave': articleListeningBand({
      platform: 'soundcloud', id: 'mix-thecatrave-i-like-to-smoke-in-silence-after-raves', kicker: 'Un mix de thecatrave', title: 'Mix SoundCloud : thecatrave, I Like to Smoke in Silence After Raves.',
      description: 'Pas présenté comme l’un des meilleurs, mais ça vaut ton temps, à 100 %.',
      src: soundcloudSrc('https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves'),
      iframeTitle: 'thecatrave, I Like to Smoke in Silence After Raves sur SoundCloud', fullBleed: true, tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://soundcloud.com/djmag', label: 'DJ Mag : série de mix Recognise'},
    {href: 'https://soundcloud.com/dkmntl', label: 'Dekmantel Podcast'},
    {href: 'https://djmag.com/features/dj-mags-top-mixes-of-2025', label: 'Les meilleurs mix de 2025 selon DJ Mag'}
  ],

  bandcamp: {
    description: 'Ces sorties rejoignent les rythmes brisés, la pression des basses et la musique de club des mix ci-dessus. En acheter une soutient directement la musique et l’écriture.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks par thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes par thecatrave'}
    ]
  }
};
