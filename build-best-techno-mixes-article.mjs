// Build best-techno-mixes.html from the approved editorial draft.
import fs from 'node:fs';
import {
  articleHero, articlePage, articleSection, articleSources, articleStructuredData,
  articleListeningCollection, articleTrackEmbed, authorCard, bandcampSupport,
  breadcrumbStructuredData, infoBanner, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = fs.readFileSync('best-techno-mixes-draft.md', 'utf8').replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-techno-mixes';
const title = 'Best Techno Mixes: 10 Essential DJ Sets';
const description = 'Ten essential techno mixes from Juan Atkins, Robert Hood, Jeff Mills, Surgeon, DJ Stingray, Ben Klock, Wata Igarashi, Rødhåd and more.';
const datePublished = '2026-09-29';
const dateModified = '2026-10-08';
const dateLabel = '8 October 2026';
const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = value => escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function getSection(heading) {
  const start = draft.indexOf(`## ${heading}`);
  if (start < 0) throw new Error(`Missing section: ${heading}`);
  const bodyStart = draft.indexOf('\n', start) + 1;
  const next = draft.indexOf('\n## ', bodyStart);
  return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
}
const paras = text => text.split(/\n{2,}/).map(value => value.trim()).filter(Boolean);
const join = list => list.map(value => `<p>${inline(value)}</p>`).join('\n');
const videoMeta = new Map([
  ['Juan Atkins, Mixmag Live, 2015', ['9SuKJ-dbmbg', 'DETROIT TECHNO', 'Juan Atkins', 'Mixmag Live, 2015']],
  ['Robert Hood, DJ Mag, 2019', ['S2UORWQz_7k', 'MINIMAL TECHNO', 'Robert Hood', 'DJ Mag, 2019']],
  ['DJ Stingray, Boiler Room Dekmantel, 2017', ['7AGJp9_B_gM', 'ELECTRO / TECHNO', 'DJ Stingray', 'Boiler Room Dekmantel, 2017']],
  ['Jeff Mills, Mixmag, 2019', ['jOVB05K9GPU', 'DETROIT TECHNO', 'Jeff Mills', 'Mixmag, 2019']],
  ['Surgeon, Boiler Room, 2014', ['Ww9VtKqprUY', 'BIRMINGHAM TECHNO', 'Surgeon', 'Boiler Room, 2014']],
  ['Ben Klock, Boiler Room Berlin, 2013', ['DGWL7YI_2rI', 'BERLIN TECHNO', 'Ben Klock', 'Boiler Room Berlin, 2013']],
  ['Helena Hauff b2b L.F.T., HÖR, 2020', ['u2qaQLKkVDA', 'ACID / ELECTRO / TECHNO', 'Helena Hauff b2b L.F.T.', 'HÖR, 2020']],
  ['Wata Igarashi, HÖR, 2023', ['ku54y2l54Sc', 'HYPNOTIC TECHNO', 'Wata Igarashi', 'HÖR, 2023']],
  ['Rødhåd, Boiler Room, 2023', ['oNYarqQNev0', 'BERLIN TECHNO', 'Rødhåd', 'Boiler Room, 2023']],
  ['Fadi Mohem, Boiler Room Berlin, 2024', ['rTtVMHFlwoM', 'DUB TECHNO', 'Fadi Mohem', 'Boiler Room Berlin, 2024']]
]);
function renderMixSection(heading) {
  const items = getSection(heading).split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [entryTitle, ...rest] = block.split('\n');
    const meta = videoMeta.get(entryTitle.trim());
    if (!meta) throw new Error(`Missing video metadata for ${entryTitle}`);
    const copy = paras(rest.join('\n').replace(/\n?\[Embed:[^\]]+\]\n?/, '\n\n'));
    if (copy.length !== 2) throw new Error(`${entryTitle} must have two editorial paragraphs`);
    const [youtubeId, genre, artist, videoTitle] = meta;
    const year = (videoTitle.match(/(\d{4})\s*$/) || [])[1] || '';
    return {
      artist: `${artist} · ${genre}`,
      title: videoTitle.replace(/,?\s*\d{4}\s*$/, ''),
      year,
      noteHtml: join(copy),
      playerHtml: articleTrackEmbed({platform: 'youtube', id: youtubeId, title: `${artist}, ${videoTitle}`})
    };
  });
  return articleListeningCollection({id: `listen-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, label: heading, items});
}
const answer = paras(getSection('Answer'));
const intro = paras(getSection('Introduction'));
const criteria = paras(getSection('What makes a techno mix essential?'));
const choosing = paras(getSection('Which techno mix should you play first?'));
const sources = getSection('Sources').split('\n').filter(line => line.startsWith('- ')).map(line => `<li>${inline(line.slice(2))}</li>`).join('');
const tocItems = [
  {id:'criteria', label:'What makes a techno mix essential?'},
  {id:'detroit', label:'Detroit: funk, minimalism and electro'},
  {id:'pressure', label:'Pressure and precision'},
  {id:'contemporary', label:'Contemporary routes through techno'},
  {id:'choose', label:'Which techno mix should you play first?'}
];
const readingTime = `${Math.max(8, Math.round(draft.split(/\s+/).length / 225))} min read`;
const articleHtml = [
  articleHero({kicker:'Techno DJ mixes', title:'The best techno mixes, from Detroit to now', deck:'Ten techno mixes chosen for how each DJ sequences records, from Detroit machine funk to hypnotic and dubby contemporary sets.', readingTime, dateModified, dateLabel, summaryHtml:infoBanner({label:'Best techno mixes', bodyHtml:inline(answer[0]), className:'article-summary'}), tocItems}),
  articleSection({id:'introduction', title:'The mix is where techno reveals its structure.', bodyHtml:join(intro), className:'article-intro'}),
  articleSection({id:'criteria', title:'What makes a techno mix essential?', bodyHtml:join(criteria)}),
  articleSection({id:'detroit', title:'Detroit: funk, minimalism and electro.', bodyHtml:renderMixSection('Detroit: funk, minimalism and electro')}),
  articleSection({id:'pressure', title:'Pressure and precision.', bodyHtml:renderMixSection('Pressure and precision')}),
  articleSection({id:'contemporary', title:'Different routes through contemporary techno.', bodyHtml:renderMixSection('Different routes through contemporary techno')}),
  articleSection({id:'choose', title:'Which techno mix should you play first?', bodyHtml:join(choosing)}),
  authorCard({filled:true}),
  articleSources({bodyHtml:`<ul>${sources}</ul>`}),
  bandcampSupport({fullBleed:true, description:'These releases connect to the machine rhythm and broken club structures explored above. Buying one supports the music and writing directly.', tracks:[
    {title:'thecatrave, Protect Ya Breaks', id:'3822639635', url:'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText:'Protect Ya Breaks by thecatrave'},
    {title:'thecatrave, 60 hours of mistakes', id:'3330948631', url:'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText:'60 hours of mistakes by thecatrave'}
  ]}),
  readNext({items:relatedArticles('best-techno-mixes.html')})
].join('\n');
const structuredData = [articleStructuredData({headline:title, description, canonical, image:'https://thecatrave.com/img/og/best-techno-mixes.jpg', datePublished, dateModified}), breadcrumbStructuredData({name:'Best Techno Mixes', canonical})];
const html = articlePage({alternates:alternatesFor('/best-techno-mixes'), title, description, canonical, ogImage:'https://thecatrave.com/img/og/best-techno-mixes.jpg', datePublished, dateModified, bodyClass:'article-page techno-mixes-page', structuredData, articleHtml}).replace(/—/g, ':');
fs.writeFileSync('best-techno-mixes.html', html);
console.log('Built best-techno-mixes.html');
