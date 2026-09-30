// The UK electronic music genre map: an SVG of lineages plus the stacked list
// shown on mobile. Geometry lives here once; the English guide and each
// translation pass their own words, so a change to the map reaches every
// language. `text` carries every string the reader sees.

export const ukGenreMapEnglish = {
  heading: 'How UK electronic music genres evolved and connect.',
  intro: 'This is a map of shared lineages, not a claim that one record invented the next. British scenes overlap, borrow from one another and often coexist for years.',
  svgTitle: 'A map of UK electronic music genres and dates',
  svgDesc: 'A schematic showing how imported house, techno, hip-hop breaks and sound-system culture connect to acid house, bleep, hardcore, jungle, drum and bass, UK garage, grime, dubstep, bassline, UK funky and contemporary bass music.',
  columns: ['ROOTS', '1987–91', '1990–93', '1992–2001', '1994–2010', '2017→'],
  nodes: {
    soundSystems: ['Sound systems', '1950s→'], chicago: ['Chicago house', '1980s'], detroit: ['Detroit techno', '1980s'],
    hiphop: ['Hip-hop breaks', '1970s→'], acid: ['Acid house', '1987–89'], bleep: ['Bleep', '1988–91'],
    hardcore: ['Hardcore', '1990–93'], jungle: ['Jungle', '1992–95'], garage: ['UK garage', '1993–2001'],
    dnb: ['Drum & bass', '1994→'], grime: ['Grime', '2001→'], dubstep: ['Dubstep', '1998→'],
    bassline: ['Bassline / funky', '2000s'], converging: ['Converging scenes', 'UKG / jungle / 140 · 2017→']
  },
  mobile: [
    ['1987–91', 'Acid house and bleep', 'House and techno imports meet British rave spaces and bass pressure.'],
    ['1990s', 'Hardcore, jungle and drum and bass', 'Breakbeats accelerate and splinter while sound-system ideas move to the centre.'],
    ['1993–2009', 'UK garage, grime, dubstep, bassline and UK funky', 'Garage swing becomes several distinct but connected scenes.'],
    ['2010s–now', 'Hybrid club music and converging scenes', 'Older rhythmic languages circulate together rather than replacing one another.']
  ],
  caption: 'A deliberately simplified map: dates mark emergence, not an ending.'
};

export function ukGenreMap(text = ukGenreMapEnglish) {
  const node = (x, y, w, [title, date]) => `<g class="map-node" tabindex="0"><rect x="${x}" y="${y}" width="${w}" height="58" rx="2"/><text x="${x + 12}" y="${y + 23}"><tspan>${title}</tspan><tspan class="map-date" x="${x + 12}" dy="19">${date}</tspan></text></g>`;
  const n = text.nodes;
  const columnX = [20, 190, 350, 510, 680, 850];
  return `<section class="floating-block article-section map-section" id="genre-map"><h2>${text.heading}</h2><p>${text.intro}</p><figure class="genre-map"><svg viewBox="0 0 1040 460" role="img" aria-labelledby="genre-map-title genre-map-desc"><title id="genre-map-title">${text.svgTitle}</title><desc id="genre-map-desc">${text.svgDesc}</desc><g class="map-columns">${text.columns.map((label, index) => `<text x="${columnX[index]}" y="28">${label}</text>`).join('')}</g><g class="map-links"><path d="M164 99 C180 99 174 267 190 267"/><path d="M164 183 C180 183 174 183 190 183"/><path d="M164 267 C180 267 174 267 190 267"/><path d="M164 351 C250 351 270 225 350 225"/><path d="M324 183 C338 183 336 225 350 225"/><path d="M324 267 C338 267 336 225 350 225"/><path d="M484 225 C498 225 496 141 510 141"/><path d="M164 99 C330 99 350 141 510 141"/><path d="M164 99 C330 99 350 309 510 309"/><path d="M164 183 C330 183 350 309 510 309"/><path d="M644 141 C660 141 664 99 680 99"/><path d="M644 309 C660 309 664 183 680 183"/><path d="M644 309 C660 309 664 267 680 267"/><path d="M644 309 C660 309 664 351 680 351"/><path d="M814 99 C832 99 832 225 850 225"/><path d="M814 183 C832 183 832 225 850 225"/><path d="M814 267 C832 267 832 225 850 225"/><path d="M814 351 C832 351 832 225 850 225"/></g>${node(20,70,144,n.soundSystems)}${node(20,154,144,n.chicago)}${node(20,238,144,n.detroit)}${node(20,322,144,n.hiphop)}${node(190,154,134,n.acid)}${node(190,238,134,n.bleep)}${node(350,196,134,n.hardcore)}${node(510,112,134,n.jungle)}${node(510,280,134,n.garage)}${node(680,70,134,n.dnb)}${node(680,154,134,n.grime)}${node(680,238,134,n.dubstep)}${node(680,322,134,n.bassline)}${node(850,196,170,n.converging)}</svg><ol class="genre-map-mobile">${text.mobile.map(([years, title, copy]) => `<li><span>${years}</span><strong>${title}</strong><p>${copy}</p></li>`).join('')}</ol><figcaption>${text.caption}</figcaption></figure></section>`;
}
