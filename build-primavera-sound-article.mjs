// Build primavera-sound-barcelona.html from primavera-sound-draft.md.
//
// The owner supplied the keyword export and asked that the article structure be
// created from it. Main clusters: primavera sound, primavera sound barcelona,
// location/dates, music festival, Primavera a la Ciutat and Primavera Porto.
// All search intent about 2026 is excluded. See primavera-sound-research.md and
// keywords/primavera-sound.json.
import fs from 'node:fs';
import {
  ownSetListening, articleFaq, articleFigure, articleHero, articlePage,
  articleSection, articleSources, articleStructuredData, articleTable,
  articleVideoCard, articleVideoCollection, articleYoutubeEmbed, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
// The German translation of this page announces itself here, and this page
// announces it back: hreflang only counts when both sides declare it.
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('primavera-sound-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/primavera-sound-barcelona';
const title = 'Primavera Sound Barcelona 2027: Dates, Location and Music';
const description = 'Primavera Sound Barcelona 2027 runs 3 to 5 June at Parc del Fòrum. Find its waterfront location, scale, music, Primavera a la Ciutat and Porto edition.';
const datePublished = '2026-09-15';
const dateModified = '2026-09-17';
const dateLabel = '17 September 2026';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value).replace(/—/g, ':'));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

function getSection(heading) {
  const start = draft.indexOf(`\n## ${heading}\n`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start + 1) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}

const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

const figure = (name, width, height, alt, caption, className = 'wide-archive-image') => articleFigure({
  src: `img/primavera-sound/${name}-${width}.webp`,
  srcset: `img/primavera-sound/${name}-320.webp 320w, img/primavera-sound/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className
});

const youtube = (id, label) => articleYoutubeEmbed({
  src: `https://www.youtube-nocookie.com/embed/${id}`,
  title: label
});

const commonsLink = (file, label = 'Source ↗') =>
  `<a href="https://commons.wikimedia.org/wiki/${encodeURIComponent(`File:${file}`)}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const media = {
  'Primavera stage crowd': figure('festival-crowd', 1200, 800,
    'Festivalgoers gathered beside the waterfront at Primavera Sound Barcelona in 2019 under a clear blue sky',
    `The crowd at Primavera Sound Barcelona in 2019, with the open waterfront site around it. Photograph: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera stage crowd.jpg')}`,
    'full-bleed'),
  'Created in Barcelona': figure('created-in-barcelona', 1200, 800,
    'A night crowd at Primavera Sound with a bright sign reading Created in Barcelona above the festival structures',
    `Primavera Sound at night in 2019: the festival foregrounds its Barcelona origin even as its audience became international. Photograph: John Lubbock, CC BY-SA 4.0. ${commonsLink('Primavera Sound main stages area at night.jpg')}`),
  'Parc del Fòrum beside': figure('parc-forum', 1200, 675,
    'The large photovoltaic canopy and concrete waterfront structures of Parc del Fòrum with the Mediterranean behind',
    `Parc del Fòrum without the festival build: concrete terraces, the photovoltaic canopy and the Mediterranean. Photograph: Pere López Brosa, CC BY-SA 4.0. ${commonsLink('Parc del Fòrum - 20191213 143043.jpg')}`),
  'Peggy Gou at': figure('peggy-gou', 1200, 800,
    'Peggy Gou DJing on the Ray-Ban stage at Primavera Sound 2019 above a dense crowd under purple and yellow lights',
    `Peggy Gou at the Ray-Ban stage, Primavera Sound Barcelona 2019. Photograph: John Lubbock, CC BY-SA 4.0. ${commonsLink('Peggy Gou, Ray-Ban stage.jpg')}`),
  'Samantha Hudson and John Waters': figure('primavera-pro', 1200, 900,
    'Samantha Hudson and John Waters seated on stage in conversation at Primavera Pro in 2022',
    `Artist Samantha Hudson and filmmaker John Waters discussing music taste at Primavera Pro in 2022. Photograph: Nacaru, CC BY-SA 4.0. ${commonsLink('Samantha Hudson and John Waters in Primavera Pro.jpg')}`),
  'Fontaines D.C. at': figure('porto-stage', 1200, 800,
    'Fontaines D.C. performing on the large Primavera Sound Porto stage at night in 2025',
    `Fontaines D.C. at Primavera Sound Porto in 2025. Photograph: Boredintheevening, CC BY 4.0. ${commonsLink('Fontaines D.C performing at Primavera Sound Porto 2025.tif')}`),
  'uhAp3o71U48': articleVideoCollection({
    label: 'Primavera Sound Barcelona on Boiler Room',
    description: 'Two Brazilian club-music routes filmed by Boiler Room inside Primavera Sound Barcelona: DJ Ramon Sucesso in 2024 and Badsista in 2022.',
    items: [
      articleVideoCard({youtubeId: 'uhAp3o71U48', genre: 'Boiler Room, 2024', artist: 'DJ Ramon Sucesso', title: 'Primavera Sound Barcelona'}),
      articleVideoCard({youtubeId: 'KkhwjIVDHGc', genre: 'Boiler Room, 2022', artist: 'Badsista', title: 'Primavera Sound Barcelona'})
    ]
  }),
  'srV4AgUc104': youtube('srV4AgUc104', 'Alan Sparhawk, official set at Primavera Sound Porto 2025'),
  'Table: milestones': articleTable({
    headers: ['Year', 'What changed'],
    rows: [
      ['2001', 'First one-day Primavera Sound at Poble Espanyol; about 7,700 tickets'],
      ['2004', 'The Barcelona festival expanded to three days'],
      ['2005', 'Moved to Parc del Fòrum'],
      ['2008', 'City-venue programme developed into Primavera a la Ciutat'],
      ['2012', 'First Primavera Sound Porto'],
      ['2019', 'A gender-balanced bill was presented as The New Normal'],
      ['2022', 'Exceptional two-weekend Barcelona edition after the pandemic cancellations'],
      ['2027', 'Main Barcelona programme scheduled for 3 to 5 June at Parc del Fòrum']
    ].map(row => row.map(escapeHtml)),
    label: 'Primavera Sound milestones'
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).find(k => p.includes(k));
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 100)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {
    question: q.trim().replace(/\?*$/, '?'),
    answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*/g, '').replace(/\s+/g, ' '),
    answerHtml: render(body)
  };
});

const sections = [
  {id: 'what-is', heading: 'What is Primavera Sound?', title: 'What is Primavera Sound?'},
  {id: 'dates-location', heading: 'Primavera Sound Barcelona: dates and location', title: 'Primavera Sound Barcelona: dates and location.'},
  {id: 'how-big', heading: 'How big is Primavera Sound?', title: 'How big is Primavera Sound?'},
  {id: 'music', heading: 'What music plays at Primavera Sound?', title: 'What music plays at Primavera Sound?', kicker: 'The music'},
  {id: 'a-la-ciutat', heading: 'Primavera a la Ciutat', title: 'Primavera a la Ciutat.'},
  {id: 'porto', heading: 'Primavera Sound Porto', title: 'Primavera Sound Porto.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;
const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Primavera Sound',
    title: 'Primavera Sound Barcelona',
    deck: 'The main Barcelona programme returns to Parc del Fòrum on 3, 4 and 5 June 2027. Here is the waterfront location, scale, music and connection to Porto.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'What is Primavera Sound', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A festival built around range.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml.flatMap((html, i) => sections[i].id === 'music' ? [html, ownSetListening(0)] : [html]),
  ownSetListening(1),
  articleFaq({items: faqItems, title: 'Primavera Sound FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://www.primaverasound.com/en/barcelona', 'Primavera Sound Barcelona: official site')}
${sourceLink('https://assets.primaverasound.com/psb/docs/condicionesEntradas_en.html', 'Primavera Sound Barcelona: official ticket and age conditions')}
${sourceLink('https://parcdelforum.barcelona/en/parc-forum/the-park', 'Parc del Fòrum: official venue guide')}
${sourceLink('https://www.catalannews.com/culture/item/in-photos-primavera-sound-draws-287000-festivalgoers-after-rain-hit-opening-day', 'Catalan News: next dates and Parc del Fòrum agreement')}
${sourceLink('https://www.rtve.es/noticias/20250607/primavera-sound-registra-293000-asistentes-300-millones-retorno-para-barcelona/16615374.shtml', 'RTVE: Primavera Sound attendance and international audience')}
${sourceLink('https://assets.primaverasound.com/ps-single/download/prensa/psb/2016/dossier/Press_dossier_Primavera_Sound_2016_.pdf', 'Primavera Sound: historical press dossier')}
${sourceLink('https://assets.primaverasound.com/ps-single/download/prensa/psb/2015/dossier/Press_dossier_Primavera_Sound_2015.pdf', 'Primavera Sound: Primavera a la Ciutat and festival history')}
${sourceLink('https://assets.primaverasound.com/ps-single/download/prensa/pso/2016/dossier/NPS16_Conf._Imprensa_Dossier_Imprensa_Digital_ES_PN_20160204132533.pdf', 'Primavera Sound Porto: official historical press dossier')}
${sourceLink('https://boilerroom.tv/session/primavera-sound-barcelona-2024/', 'Boiler Room: Primavera Sound Barcelona session')}
${sourceLink('https://en.wikipedia.org/wiki/Primavera_Sound', 'Wikipedia: Primavera Sound chronology and source map')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Primavera makes room for club music beside bands, pop and experiments. My own music is breakbeat. Buying a track supports this site directly.',
    tracks: [
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'},
      {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('primavera-sound-barcelona.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Primavera Sound Barcelona', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/primavera-sound-barcelona'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/primavera-sound.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page primavera-sound-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('primavera-sound-barcelona.html', html);
console.log('Built primavera-sound-barcelona.html');
