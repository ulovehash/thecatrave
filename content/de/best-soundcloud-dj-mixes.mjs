// German SoundCloud DJ mixes guide. Structure, facts and the nine players from the
// English page (best-soundcloud-dj-mixes-draft.md, build-best-soundcloud-dj-mixes-article.mjs).
// Wording is the page's own (the Google SERP check was blocked by a bot-check, so it was
// not verified there); volumes are null in keywords/de-best-soundcloud-dj-mixes.json.

import {articleListeningBand} from '../../site-components.mjs';

const soundcloudSrc = url => `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

export default {
  lang: 'de',
  name: 'de-best-soundcloud-dj-mixes',
  file: 'de/beste-soundcloud-dj-mixes.html',
  draft: 'de/best-soundcloud-dj-mixes-draft.md',
  canonical: 'https://thecatrave.com/de/beste-soundcloud-dj-mixes',
  englishPath: '/best-soundcloud-dj-mixes',
  ogImage: 'https://thecatrave.com/img/og/best-soundcloud-dj-mixes.jpg',
  bodyClass: 'article-page soundcloud-mixes-page',
  minReadingMinutes: 7,

  title: 'Die besten SoundCloud-DJ-Mixes, plus ein persönlicher Tipp',
  description: 'Acht der besten SoundCloud-DJ-Mixes, von Wata Igarashi und Ogazón bis Djrum und SHERELLE, dazu ein klar gekennzeichneter Mix von thecatrave.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-01',
  dateLabel: '1. Oktober 2026',

  heroKicker: 'SoundCloud-DJ-Mixes',
  heroTitle: 'Die besten SoundCloud-DJ-Mixes, die man gehört haben sollte',
  deck: 'Acht redaktionelle Auswahlen mit klarem Standpunkt, dazu ein persönlicher Tipp von thecatrave, bei dem die Beziehung offen genannt wird.',
  answerLabel: 'BESTE SOUNDCLOUD-DJ-MIXES',
  breadcrumbName: 'Die besten SoundCloud-DJ-Mixes, die man gehört haben sollte',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Ein Mix sollte eine Stunde bedeutsam machen.',

  sections: [
    {id: 'criteria', heading: 'Wie diese SoundCloud-Mixes ausgewählt wurden', title: 'Wie diese SoundCloud-Mixes ausgewählt wurden.', tocLabel: 'Wie diese Mixes ausgewählt wurden'},
    {id: 'house-techno', heading: 'House, Techno und der Raum dazwischen', title: 'House, Techno und der Raum dazwischen.', tocLabel: 'House, Techno und dazwischen', subsections: ['entry-wata-igarashi-recognise-081', 'entry-ogazon-recognise-096', 'entry-sedef-adasi-recognise', 'entry-doudou-md-recognise-078']},
    {id: 'breaks-bass', heading: 'Breaks, Bass und leftfielde Routen', title: 'Breaks, Bass und leftfielde Routen.', tocLabel: 'Breaks, Bass und Leftfield', subsections: ['entry-objekt-dekmantel-podcast-116', 'entry-djrum-dekmantel-podcast-267', 'entry-dj-python-dekmantel-podcast-208', 'entry-sherelle-dekmantel-podcast-285']},
    {id: 'personal-pick', heading: 'Ein weiterer Mix, mit Offenlegung', title: 'Ein weiterer Mix, mit Offenlegung.', tocLabel: 'Ein weiterer Mix', subsections: ['entry-thecatrave-i-like-to-smoke-in-silence-after-raves']},
    {id: 'choose', heading: 'Welchen SoundCloud-DJ-Mix solltest du zuerst spielen?', title: 'Welchen SoundCloud-DJ-Mix solltest du zuerst spielen?', tocLabel: 'Welchen Mix zuerst?'}
  ],

  media: () => ({
    'Wata Igarashi': articleListeningBand({
      platform: 'soundcloud', id: 'mix-wata-igarashi-recognise-081', kicker: 'Essential listening', title: 'SoundCloud-Mix: Wata Igarashi, Recognise 081.',
      description: 'Psychedelischer Techno, aufgebaut aus bewegter Percussion und kleinen Texturwechseln.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-081-wata-igarashi'),
      iframeTitle: 'Wata Igarashi, Recognise 081 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Ogazon': articleListeningBand({
      platform: 'soundcloud', id: 'mix-ogazon-recognise-096', kicker: 'Essential listening', title: 'SoundCloud-Mix: Ogazón, Recognise 096.',
      description: 'Geduldiger House und Techno, dessen Swing die Übergänge trägt.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-096-ogazon'),
      iframeTitle: 'Ogazón, Recognise 096 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Sedef Adasi': articleListeningBand({
      platform: 'soundcloud', id: 'mix-sedef-adasi-recognise', kicker: 'Essential listening', title: 'SoundCloud-Mix: Sedef Adasi, Recognise.',
      description: 'House, Acid, Trance und Electro, programmiert als ein breites Clubset.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-sedef-adasi'),
      iframeTitle: 'Sedef Adasi, Recognise auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Doudou MD': articleListeningBand({
      platform: 'soundcloud', id: 'mix-doudou-md-recognise-078', kicker: 'Essential listening', title: 'SoundCloud-Mix: Doudou MD, Recognise 078.',
      description: 'Lockere, geswungene House-Grooves treffen auf druckvolleren Techno.',
      src: soundcloudSrc('https://soundcloud.com/djmag/recognise-078-doudou-md'),
      iframeTitle: 'Doudou MD, Recognise 078 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Objekt': articleListeningBand({
      platform: 'soundcloud', id: 'mix-objekt-dekmantel-podcast-116', kicker: 'Essential listening', title: 'SoundCloud-Mix: Objekt, Dekmantel Podcast 116.',
      description: 'Detailreiche Übergänge durch Techno, Electro und gebrochenen Rhythmus.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-116-objekt'),
      iframeTitle: 'Objekt, Dekmantel Podcast 116 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'Djrum': articleListeningBand({
      platform: 'soundcloud', id: 'mix-djrum-dekmantel-podcast-267', kicker: 'Essential listening', title: 'SoundCloud-Mix: Djrum, Dekmantel Podcast 267.',
      description: 'Weiträumige Elektronik, Broken Beats und Jungle, verbunden durch Tempowechsel.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-267-djrum'),
      iframeTitle: 'Djrum, Dekmantel Podcast 267 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'DJ Python': articleListeningBand({
      platform: 'soundcloud', id: 'mix-dj-python-dekmantel-podcast-208', kicker: 'Essential listening', title: 'SoundCloud-Mix: DJ Python, Dekmantel Podcast 208.',
      description: 'Ein tiefer Weg durch Dembow, Dub-Raum und ambienten Dunst.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-208-dj-python'),
      iframeTitle: 'DJ Python, Dekmantel Podcast 208 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'SHERELLE': articleListeningBand({
      platform: 'soundcloud', id: 'mix-sherelle-dekmantel-podcast-285', kicker: 'Essential listening', title: 'SoundCloud-Mix: SHERELLE, Dekmantel Podcast 285.',
      description: 'Footwork, Jungle und schnelle gebrochene Rhythmen, unter Druck zusammengehalten.',
      src: soundcloudSrc('https://soundcloud.com/dkmntl/dekmantel-podcast-285-sherelle'),
      iframeTitle: 'SHERELLE, Dekmantel Podcast 285 auf SoundCloud', fullBleed: true, tone: 'cyan'
    }),
    'thecatrave': articleListeningBand({
      platform: 'soundcloud', id: 'mix-thecatrave-i-like-to-smoke-in-silence-after-raves', kicker: 'Ein Mix von thecatrave', title: 'SoundCloud-Mix: thecatrave, I Like to Smoke in Silence After Raves.',
      description: 'Nicht als einer der besten präsentiert, aber 100 % deine Zeit wert.',
      src: soundcloudSrc('https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves'),
      iframeTitle: 'thecatrave, I Like to Smoke in Silence After Raves auf SoundCloud', fullBleed: true, tone: 'cyan'
    })
  }),

  sources: [
    {href: 'https://soundcloud.com/djmag', label: 'DJ Mag: Recognise-Mixreihe'},
    {href: 'https://soundcloud.com/dkmntl', label: 'Dekmantel Podcast'},
    {href: 'https://djmag.com/features/dj-mags-top-mixes-of-2025', label: 'DJ Mags beste Mixes 2025'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen hängen mit den gebrochenen Rhythmen, dem Bassdruck und der Clubmusik der Mixes oben zusammen. Ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
