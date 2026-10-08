// German house music playlists guide. Structure, playlists and facts from the English
// page (best-house-music-playlists-spotify-draft.md, build-best-house-music-playlists-spotify-article.mjs).
// Wording is the page's own (the Google SERP check was blocked by a bot-check, so it was
// not verified there); volumes are null in keywords/de-best-house-music-playlists-spotify.json.

import {articleTable} from '../../site-components.mjs';

const link = (title, id) => `<a href="https://open.spotify.com/playlist/${id}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`;

export default {
  lang: 'de',
  name: 'de-best-house-music-playlists-spotify',
  file: 'de/beste-house-playlists-spotify.html',
  draft: 'de/best-house-music-playlists-spotify-draft.md',
  canonical: 'https://thecatrave.com/de/beste-house-playlists-spotify',
  englishPath: '/best-house-music-playlists-spotify',
  ogImage: 'https://thecatrave.com/img/og/best-house-music-playlists-spotify.jpg',
  bodyClass: 'article-page house-playlists-page',
  minReadingMinutes: 7,

  title: 'Die besten House-Playlists auf Spotify: 12 Empfehlungen',
  description: 'Zwölf Spotify-Playlists für House-Musik, von 90er-Klassikern und Label-Feeds bis zu zwei gekennzeichneten Auswahlen von thecatrave über House, Techno und mehr.',
  datePublished: '2026-10-01',
  dateModified: '2026-10-08',
  dateLabel: '8. Oktober 2026',

  heroKicker: 'House-Playlists',
  heroTitle: 'Die besten House-Playlists auf Spotify',
  deck: 'Zehn fokussierte House-Auswahlen, dazu zwei gekennzeichnete Playlists von thecatrave, die House und Techno mit einer weiteren elektronischen Plattentasche verbinden.',
  answerLabel: 'BESTE HOUSE-PLAYLISTS AUF SPOTIFY',
  breadcrumbName: 'Die besten House-Playlists auf Spotify',

  answerSection: 'Antwort',
  introSection: 'Einleitung',
  introTitle: 'Die Menschen hinter den Playlists.',

  sections: [
    {id: 'criteria', heading: 'Wie diese House-Playlists ausgewählt wurden', title: 'Wie diese House-Playlists ausgewählt wurden.', tocLabel: 'Wie sie ausgewählt wurden'},
    {id: 'foundations', heading: 'House-Grundlagen und Soulful-Platten', title: 'House-Grundlagen und Soulful-Platten.', tocLabel: 'Grundlagen und Soulful', playlists: [{anchor:'nineties-house-classics', title:'90s House Classics', curator:'Spotify', id:'37i9dQZF1DWTU3Zl0elDUa'},
    {anchor:'soulful-house', title:'Soulful House', curator:'Spotify', id:'37i9dQZF1DX4q6087QOpL9'},
    {anchor:'housewerk-honey-dijon', title:'Housewerk NYE by Honey Dijon', curator:'Honey Dijon', id:'7cTINeBX9zKzGM7KsEYuR2'}]},
    {id: 'current', heading: 'Aktueller House und Label-Filter', title: 'Aktueller House und Label-Filter.', tocLabel: 'Aktueller House und Labels', playlists: [{anchor:'housewerk', title:'Housewerk', curator:'Spotify', id:'37i9dQZF1DXa8NOEUWPn9W'},
    {anchor:'defected-2026', title:'Defected 2026', curator:'Defected Records', id:'7hkduGkMRHv6hy05nPdM45'},
    {anchor:'toolroom-tech-house', title:'Toolroom Tech House', curator:'Toolroom Records', id:'6J1r02xyO2qkMA9dDNZytJ'},
    {anchor:'selected-deep-house', title:'Deep House 2026 by Selected', curator:'Selected', id:'6vDGVr652ztNWKZuHvsFvx'}]},
    {id: 'routes', heading: 'Melodische, globale und von Künstlern kuratierte Wege', title: 'Melodische, globale und von Künstlern kuratierte Wege.', tocLabel: 'Melodisch, global, Künstler', playlists: [{anchor:'anjunadeep-2026', title:'Anjunadeep 2026', curator:'Anjunadeep', id:'2wSNKxLM217jpZnkAgYZPH'},
    {anchor:'afro-house-pulse', title:'Afro House Pulse', curator:'Spotify', id:'37i9dQZF1DX5wO3czN5dc1'},
    {anchor:'feel-my-bicep', title:'Feel My Bicep', curator:'Bicep', id:'4ac1R7BdsmDVK78bv3YAOT'}]},
    {id: 'thecatrave-playlists', heading: 'thecatrave-Playlists: House, Techno und darüber hinaus', title: 'thecatrave-Playlists: House, Techno und darüber hinaus.', tocLabel: 'thecatrave-Playlists', playlists: [{anchor:'rare-electronic-music', title:'Rare Electronic Music', curator:'thecatrave', id:'74KiWnE4fmEPigOa4SARz2', owned:true},
    {anchor:'emotional-electronic-music', title:'Emotional Electronic Music', curator:'thecatrave', id:'0U2HwRmau3EW1IXoRRa1JD', owned:true}]},
    {id: 'choose', heading: 'Welche House-Playlist solltest du wählen?', title: 'Welche House-Playlist solltest du wählen?', tocLabel: 'Welche Playlist wählen?'}
  ],

  media: () => ({
    'Playlist-Vergleich': articleTable({
      headers: ['Playlist', 'Kurator', 'Am besten für'],
      rows: [
        [link('90s House Classics', '37i9dQZF1DWTU3Zl0elDUa'), 'Spotify', 'Vertraute Grundlagen der 1990er'],
        [link('Soulful House', '37i9dQZF1DX4q6087QOpL9'), 'Spotify', 'Gesang, Keys und souliger Produktion'],
        [link('Housewerk NYE by Honey Dijon', '7cTINeBX9zKzGM7KsEYuR2'), 'Honey Dijon', 'Disco-Linie und persönliche Auswahl'],
        [link('Housewerk', '37i9dQZF1DXa8NOEUWPn9W'), 'Spotify', 'Einen breiten aktuellen House-Überblick'],
        [link('Defected 2026', '7hkduGkMRHv6hy05nPdM45'), 'Defected Records', 'Vokalen, clubnahen House'],
        [link('Toolroom Tech House', '6J1r02xyO2qkMA9dDNZytJ'), 'Toolroom Records', 'Fokussierten aktuellen Tech House'],
        [link('Deep House 2026 by Selected', '6vDGVr652ztNWKZuHvsFvx'), 'Selected', 'Polierten Deep und Vocal House'],
        [link('Anjunadeep 2026', '2wSNKxLM217jpZnkAgYZPH'), 'Anjunadeep', 'Melodic House und allmähliche Aufbauten'],
        [link('Afro House Pulse', '37i9dQZF1DX5wO3czN5dc1'), 'Spotify', 'Afrikanische Künstler und globalen Afro House'],
        [link('Feel My Bicep', '4ac1R7BdsmDVK78bv3YAOT'), 'Bicep', 'House neben Breaks und Electro'],
        [link('Rare Electronic Music', '74KiWnE4fmEPigOa4SARz2'), 'thecatrave', 'House, Techno, Breaks und Rave'],
        [link('Emotional Electronic Music', '0U2HwRmau3EW1IXoRRa1JD'), 'thecatrave', 'Melodische Clubmusik über Genres hinweg']
      ],
      label: 'Vergleich der House-Playlists, Kuratoren und Hörzwecke'
    })
  }),

  sources: [
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W', label: 'Spotify: Housewerk'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DWTU3Zl0elDUa', label: 'Spotify: 90s House Classics'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DX4q6087QOpL9', label: 'Spotify: Soulful House'},
    {href: 'https://open.spotify.com/playlist/37i9dQZF1DX5wO3czN5dc1', label: 'Spotify: Afro House Pulse'},
    {href: 'https://open.spotify.com/playlist/74KiWnE4fmEPigOa4SARz2', label: 'Spotify: Rare Electronic Music'},
    {href: 'https://open.spotify.com/playlist/0U2HwRmau3EW1IXoRRa1JD', label: 'Spotify: Emotional Electronic Music'}
  ],

  bandcamp: {
    description: 'Diese Veröffentlichungen stehen den gebrochenen und clubnahen Rändern des House nahe, die oben behandelt werden. Ein Kauf unterstützt die Musik und das Schreiben direkt.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks von thecatrave'},
      {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes von thecatrave'}
    ]
  }
};
