// Build german-electronic-music.html from german-electronic-music-draft.md.
//
// New page approved by the owner on 2026-09-15. Search demand is modest for
// the exact broad term (90 global) but larger for the central adjacent topic,
// german techno (500 global). The page therefore keeps one broad historical
// job while giving techno a substantial, carefully sourced section. See
// german-electronic-music-research.md.
import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand,
  articleListeningCollection, articlePage, articleSection, articleSources,
  articleStructuredData, articleTable, articleTrackEmbed, articleVideoCard,
  articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';

const draft = fs.readFileSync('german-electronic-music-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/german-electronic-music';
const title = 'German Electronic Music: From Kraftwerk to Techno';
const description = "How German electronic music developed from Cologne's post-war studio and Kraftwerk to Berlin School, techno, trance, minimal and today's club culture.";
const date = '2026-09-15';
const dateLabel = '15 September 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

function introText() {
  const start = draft.indexOf('\n\n') + 2;
  const end = draft.indexOf('\n## ');
  return draft.slice(start, end).trim();
}

function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

const figure = (name, width, height, alt, caption, loading = 'lazy') => articleFigure({
  src: `img/german-electronic/${name}-1200.webp`,
  srcset: `img/german-electronic/${name}-320.webp 320w, img/german-electronic/${name}-1200.webp 1200w`,
  width, height, alt, caption, className: 'wide-archive-image', loading
});

const routeSvg = fs.readFileSync('img/german-electronic/german-scenes-route.svg', 'utf8')
  .replace(/^<svg[^>]*>/, '<svg viewBox="0 0 1200 700" role="img" aria-labelledby="german-route-title german-route-desc">')
  .replace('<title id="title">', '<title id="german-route-title">')
  .replace('<desc id="desc">', '<desc id="german-route-desc">');

const routeGraphic = `<figure class="genre-map german-scene-map">${routeSvg}<ol class="genre-map-mobile">
  <li><span>1951</span><strong>Cologne</strong><p>WDR electronic studio, Herbert Eimert and Karlheinz Stockhausen.</p></li>
  <li><span>1970s</span><strong>Düsseldorf</strong><p>Kraftwerk, NEU!, electronic pop and motorik repetition.</p></li>
  <li><span>1970s</span><strong>West Berlin</strong><p>Tangerine Dream, Klaus Schulze and sequencer-led long-form music.</p></li>
  <li><span>1980s to 1990s</span><strong>Frankfurt</strong><p>Technoclub, Omen, techno and trance infrastructure.</p></li>
  <li><span>1989 onward</span><strong>Berlin</strong><p>The Detroit alliance, Tresor and later minimal techno.</p></li>
</ol><figcaption>A schematic of changing infrastructure and exchange, not a claim that one city invented the next. <a href="/img/german-electronic/german-scenes-route.png">Download the high-resolution graphic</a>.</figcaption></figure>`;

const kraftwerkListening = articleVideoCollection({
  label: 'Kraftwerk, Autobahn',
  description: "Kraftwerk's 1974 turn towards electronic rhythm, melody and a designed image of modern Germany, on the group's official channel.",
  items: [articleVideoCard({youtubeId: 'qWkzS0Vg9hg', genre: 'Düsseldorf, 1974', artist: 'Kraftwerk', title: 'Autobahn'})]
});

const dafListening = articleVideoCollection({
  label: 'DAF, Der Mussolini',
  description: "A severe drum pattern, a short electronic sequence and Gabi Delgado's command: DAF made machine music physical.",
  items: [articleVideoCard({youtubeId: 'lpiTuX4aeD0', genre: 'Düsseldorf, 1981', artist: 'DAF', title: 'Der Mussolini'})]
});

const klangListening = articleListeningBand({
  platform: 'soundcloud', id: 'klang-der-familie-german', kicker: 'Essential listening',
  title: '3 Phase featuring Dr. Motte, Der Klang der Familie.',
  description: "Tresor Records' sixth release turns the early Berlin room into a tense, direct record. This is the original release, remastered, on Dr. Motte's account.",
  src: `https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/dr-motte/sets/3phase-feat-dr-motte-der-klang')}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
  iframeTitle: "Der Klang der Familie and Open Your Mind by 3 Phase featuring Dr. Motte on SoundCloud",
  fullBleed: true, tone: 'cyan'
});

const routesListening = articleListeningCollection({
  id: 'german-1990s-listening',
  title: 'Three routes through the German 1990s.',
  description: 'Frankfurt trance, Berlin melodic trance and dub techno did not resolve into one national style.',
  items: [
    {
      artist: 'Sven Väth', title: "L'Esperanza", year: '1993',
      note: 'The melodic Frankfurt route, carried by Eye Q and the wider Rhine-Main network.',
      playerHtml: articleTrackEmbed({platform: 'spotify-album', id: '6b9yPxKdRjGJQXwXoabl3r', title: "L'Esperanza EP by Sven Väth"})
    },
    {
      artist: 'Paul van Dyk', title: 'For An Angel', year: '1994',
      note: 'A Berlin trance record whose long life shows how far the German club network travelled.',
      playerHtml: articleTrackEmbed({platform: 'spotify', id: '2ElEFB1EjjklpSVF7YJP90', title: 'For An Angel, original mix, by Paul van Dyk'})
    },
    {
      artist: 'Basic Channel', title: 'Phylyps Trak II', year: '1994',
      note: 'Two long versions built from pressure, echo and tiny changes: a foundation for dub techno.',
      playerHtml: articleTrackEmbed({platform: 'spotify-album', id: '5NmBv6Z81UjuvCxVgBXJOP', title: 'Phylyps Trak II by Basic Channel'})
    }
  ]
});

const sceneTable = articleTable({
  label: 'German electronic music cities, eras and listening entry points',
  headers: ['City or region', 'Main period here', 'What changed', 'Start with'],
  rows: [
    ['Cologne', '1951 onward', 'A purpose-built electronic studio; later a label and distribution network', 'Stockhausen, Wolfgang Voigt, Kompakt'],
    ['Düsseldorf', '1970s and early 1980s', 'Electronic pop, motorik repetition, post-punk body music', 'Kraftwerk, NEU!, DAF'],
    ['West Berlin', '1970s and early 1980s', 'Long-form sequencer music', 'Tangerine Dream, Klaus Schulze, Manuel Göttsching'],
    ['Frankfurt / Rhine-Main', '1980s and 1990s', 'Early electronic club infrastructure and trance', 'Talla 2XLC, Sven Väth, Eye Q, Harthouse'],
    ['Berlin', '1989 onward', 'Detroit alliance, post-Wall clubs, hard and minimal techno', 'Tresor, Basic Channel, Paul van Dyk, Monolake'],
    ['East Germany', '1980s', 'Electronic music under scarce equipment and state-controlled recording', 'Reinhard Lakomy, Pond, Key, Servi']
  ].map(row => row.map(escapeHtml))
});

const media = {
  'Image: Kraftwerk on stage': figure('kraftwerk-stage', 1200, 901,
    'Ralf Hütter and Henning Schmitz of Kraftwerk performing behind electronic consoles at Bestival in 2009',
    'Kraftwerk made electronic sound, graphic design and controlled performance part of one system. Photograph: Mike Mantin, CC BY 2.0.', 'eager'),
  'Graphic: German electronic music by city': routeGraphic,
  'Image: Stockhausen in the WDR Studio': figure('stockhausen-wdr', 1200, 806,
    'Karlheinz Stockhausen standing among electronic equipment in the WDR Studio in Cologne in 1991',
    'Stockhausen in the WDR Studio in 1991. The room was built for electronic composition, not club music. Photograph: Kathinka Pasveer, CC BY-SA 3.0.'),
  'Embed: Kraftwerk Autobahn': kraftwerkListening,
  'Embed: DAF Der Mussolini': dafListening,
  'Image: Love Parade 1998': figure('love-parade-1998', 1200, 810,
    'A large crowd filling Straße des 17. Juni during the Love Parade in Berlin in 1998',
    'Love Parade on Straße des 17. Juni in 1998, after an underground demonstration had become a mass event. Photograph: Ago76, public domain.'),
  'Embed: Der Klang der Familie': klangListening,
  'Listening: Three routes through the 1990s': routesListening,
  'Table: German electronic music scenes': sceneTable
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Graphic|Embed|Listening|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).find(candidate => p.startsWith(`[${candidate}]`));
    if (!key) throw new Error(`No asset for placeholder: ${p}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

const sections = [
  {id: 'cities', heading: 'Why the cities matter', title: 'Why the cities matter.'},
  {id: 'cologne', heading: 'Cologne: electronic sound before electronic pop', title: 'Cologne: electronic sound before electronic pop.', kicker: '1951 onward'},
  {id: 'dusseldorf-west-berlin', heading: 'Düsseldorf and West Berlin: two different futures in the 1970s', title: 'Düsseldorf and West Berlin: two different futures.', kicker: '1970s'},
  {id: 'eighties', heading: 'The 1980s: bodies, machines and a divided country', title: 'Bodies, machines and a divided country.', kicker: '1980s'},
  {id: 'techno', heading: 'Techno reaches Frankfurt and Berlin', title: 'Techno reaches Frankfurt and Berlin.', kicker: '1980s to early 1990s'},
  {id: 'three-routes', heading: 'Three routes through the 1990s', title: 'Three routes through the 1990s.', kicker: '1990s'},
  {id: 'after-2000', heading: 'After 2000: clubs, software and scenes without one centre', title: 'Clubs, software and scenes without one centre.', kicker: '2000 onward'},
  {id: 'scene-guide', heading: 'A quick guide to the main German electronic music scenes', title: 'A quick guide to the main German electronic music scenes.'}
];

const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [question, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: question.trim(), answer: body.replace(/\*|\[|\]|\([^)]*\)/g, '').replace(/\s+/g, ' '), answerHtml: render(body)};
});

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;
const articleHtml = [
  articleHero({
    kicker: 'German electronic music history', title: 'The Evolution of German Electronic Music',
    deck: 'From Cologne tape studios and Kraftwerk to Frankfurt trance, the Detroit-Berlin alliance, minimal techno and the tools that travelled worldwide.',
    readingTime, dateModified: date, dateLabel,
    summaryHtml: infoBanner({label: 'German electronic music', bodyHtml: 'Germany did not produce one electronic sound. Cologne built a post-war studio tradition, Düsseldorf turned machines into pop, West Berlin developed sequencer music, Frankfurt built an early club network, and post-Wall Berlin formed a lasting alliance with Detroit techno.', className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'Several histories, connected by machines and places.', bodyHtml: render(introText()), className: 'article-intro'}),
  ...sections.map(section => articleSection({id: section.id, title: section.title, kicker: section.kicker, bodyHtml: render(getSection(section.heading))})),
  articleFaq({items: faqItems, title: 'German electronic music FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www1.wdr.de/unternehmen/der-wdr/profil/chronik/nordwestdeutscher-rundfunk-100.html', 'WDR: Herbert Eimert and the Studio for Electronic Music')}
${sourceLink('https://www.goethe.de/ins/ca/en/kul/loe/mag/20708594.html', 'Goethe-Institut: Düsseldorf and electronic music')}
${sourceLink('https://www.tangerinedreammusic.com/en/music/detail.asp?id=12&tit=Phaedra', 'Tangerine Dream: Phaedra')}
${sourceLink('https://www.higher-frequency.com/e_interview/manuel_gottsching/index.htm', 'Higher Frequency: Manuel Göttsching interview')}
${sourceLink('https://www.redbullmusicacademy.com/lectures/daf-lecture/', 'Red Bull Music Academy: DAF interview')}
${sourceLink('https://daily.redbullmusicacademy.com/2013/09/east-german-electronic-music-oral-history/', 'Red Bull Music Academy: electronic music in East Germany')}
${sourceLink('https://www.goethe.de/ins/ca/de/kul/kue/tkl/22933101.html', 'Goethe-Institut: German techno from 1989 onward')}
${sourceLink('https://www.bpb.de/themen/recht-justiz/513688/die-geschichte-von-techno-und-der-loveparade/', 'Federal Agency for Civic Education: techno and Love Parade')}
${sourceLink('https://tresorberlin.com/info/about/', 'Tresor: club and label history')}
${sourceLink('https://www.unesco.de/staette/technokultur-in-berlin/', 'German UNESCO Commission: Berlin techno culture')}
${sourceLink('https://kompakt.fm/releases/20_jahre_kompakt_kollektion_2_2xlp', 'Kompakt: 20-year anniversary history')}
${sourceLink('https://www.ableton.com/en/pages/press/releases/2002_09_12/', 'Ableton: early company history')}
${sourceLink('https://taz.de/Gruender-ueber-25-Jahre-Distillery-Leipzig/!5456075/', 'taz: interview on the founding of Distillery Leipzig')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Berlin Race 1909 is my own route through machine rhythm and rave pressure. Buying it supports the music and this publication directly.',
    tracks: [{title: 'thecatrave, Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}]
  }),
  readNext({items: relatedArticles('german-electronic-music.html')})
].join('\n');

const unused = Object.keys(media).filter(key => !used.has(key));
if (unused.length) throw new Error(`Assets with no placeholder: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: 'The Evolution of German Electronic Music', description, canonical, image: 'https://thecatrave.com/img/german-electronic/kraftwerk-stage-1200.webp', datePublished: date, dateModified: date}),
  breadcrumbStructuredData({name: 'German electronic music history', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/german-electronic.jpg',
  datePublished: date, dateModified: date,
  bodyClass: 'article-page german-electronic-page', structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('german-electronic-music.html', html);
console.log('Built german-electronic-music.html');
