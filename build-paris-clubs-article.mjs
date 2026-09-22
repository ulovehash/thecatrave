// Build best-clubs-in-paris.html from paris-clubs-draft.md.
//
// Asked for by the owner on 2026-09-22, alongside the Barcelona clubs page.
// Research package and stage 6 (not yet run): paris-clubs-research.md and the
// "Клубы Парижа, Брюсселя, Барселоны + сезонные фестивали" entry in
// TOPIC-DOSSIERS.md. Tool switch in effect for this pass (KEYWORD-METHOD.md):
// volumes come from Google Ads Keyword Planner and live Google search, not
// the Ahrefs API; both figures are kept side by side in keywords/paris-clubs.json
// rather than merged.
//
// Media sits in the draft as [Image: ...], [Embed: ...] and [Table: ...]
// placeholder lines. A placeholder with no matching asset, or an asset with no
// placeholder, fails the build.
import fs from 'node:fs';
import {withCatalogue} from './catalogue.mjs';
import {
  articleFaq, articleFigure, articleHero, articleListeningBand, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, authorCard,
  bandcampSupport, breadcrumbStructuredData, faqStructuredData, infoBanner, ownSetListening, ownTrackListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const draft = withCatalogue(fs.readFileSync('paris-clubs-draft.md', 'utf8')).replace(/—/g, ':');
const canonical = 'https://thecatrave.com/best-clubs-in-paris';
const title = 'Best Clubs in Paris: From Le Palace to Rex Club';
const description = 'Le Palace, Les Bains Douches and Rex Club: the clubs that made Paris nightlife, how each became famous, and the best clubs in Paris open now.';
const datePublished = '2026-09-22';
const dateModified = '2026-09-22';
const dateLabel = '22 September 2026';

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

// Both from Wikimedia Commons, downloaded to img/paris-clubs/ on 2026-09-22,
// licences checked on each file page, used by no other guide.
const figure = (name, width, height, alt, caption) => articleFigure({
  src: `img/paris-clubs/${name}-${width}.webp`,
  srcset: `img/paris-clubs/${name}-320.webp 320w, img/paris-clubs/${name}-${width}.webp ${width}w`,
  width, height, alt, caption, className: 'wide-archive-image'
});

// Status from RA's 2026 guide, Time Out and Do It In Paris, checked
// 2026-09-22. Typed, not computed. Revisit every six months.
const media = {
  'Les Bains Douches entrance': figure('les-bains-douches-entrance', 1280, 1707,
    "The entrance to the former Les Bains Douches nightclub at 7 rue du Bourg-l'Abbé, Paris",
    "The entrance at 7 rue du Bourg-l'Abbé, photographed in 2016. Les Bains Douches closed as a club in 2010 and reopened as a hotel in 2015. Photograph: Thomon, CC BY-SA 4.0."),
  'thecatrave Degeneration': ownTrackListening('degeneration', 'Garage and dubstep as tools rather than borders: my remix with breaks under a French pop vocal, next to the club that gave French electronic music a room.'),
  'Mylène Farmer Degeneration original': articleListeningBand({
    platform: 'spotify',
    id: 'degeneration-original',
    kicker: 'Essential listening',
    title: 'Mylène Farmer, Dégénération: the original record.',
    description: "The 2008 single that my remix above is built from, produced by Laurent Boutonnat. On Spotify, verified against Mylène Farmer's own catalogue.",
    src: 'https://open.spotify.com/embed/track/4j5JxFQLHDw5JSgXfcCeZB?utm_source=generator&theme=0',
    iframeTitle: 'Mylène Farmer, Dégénération, on Spotify',
    fullBleed: true,
    tone: 'cyan'
  }),
  'thecatrave Protect Ya Breaks': ownTrackListening('protect-ya-breaks', 'Progressive breaks at 128 BPM with chopped rap vocals and a downtempo switch-up. My own track.'),
  'thecatrave mix I Like to Smoke in Silence After Raves': ownSetListening(0, 'en', 'Thirty tracks where breaks move between garage, bass music, techno and rave. My own mix, closer to what Rex Club books than French touch is.'),
  'Table: now': articleTable({
    headers: ['Club', 'Area', 'Music and character', 'Best for'],
    rows: [
      ['Rex Club', 'Grands Boulevards (2nd)', "Techno and house since 1988, in the basement of the Grand Rex cinema", 'History and a sound system the venue has kept investing in'],
      ['Badaboum', '11th arrondissement (Bastille)', 'Accessible bookings alongside credible underground programming', 'A first stop on the Bastille bar-to-club route'],
      ['Essaim', '10th arrondissement (Canal Saint-Martin)', 'A single, minimalist dance floor with a strong focus on sound quality', 'An intimate room in the Canal Saint-Martin cluster'],
      ['La Station - Gare des Mines', '18th arrondissement', 'Experimental club to techno and baile funk, in a former coal train station', 'Something further from the centre, tied to grassroots and queer collectives']
    ].map(row => row.map(escapeHtml))
  })
};
const used = new Set();

function render(text) {
  return paras(text).map(p => {
    if (!/^\[(Image|Embed|Table):/.test(p)) return `<p>${inline(p)}</p>`;
    const key = Object.keys(media).filter(k => p.includes(k)).sort((a, b) => b.length - a.length)[0];
    if (!key) throw new Error(`No asset for placeholder: ${p.slice(0, 80)}`);
    used.add(key);
    return media[key];
  }).join('\n');
}

const answer = paras(getSection('Answer'));
const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
  const [q, ...rest] = block.split('\n');
  const body = rest.join('\n').trim();
  return {question: q.trim().replace(/\?*$/, '?'), answer: body.replace(/\s+/g, ' '), answerHtml: render(body)};
});

const sections = [
  {id: 'before-clubs-closed', heading: 'Before the clubs closed: Le Palace and Les Bains Douches', title: 'Before the clubs closed: Le Palace and Les Bains Douches.'},
  {id: 'rex-club', heading: 'Rex Club: the room that gave Paris techno a home', title: 'Rex Club: the room that gave Paris techno a home.'},
  {id: 'best-clubs-now', heading: 'The best clubs in Paris now', title: 'The best clubs in Paris now.'},
  {id: 'where-to-go', heading: 'Where to go: the 11th arrondissement and Canal Saint-Martin', title: 'Where to go: the 11th arrondissement and Canal Saint-Martin.'},
  {id: 'hear-paris', heading: 'Hear Paris before you go', title: 'Hear Paris before you go.'}
];

const tocItems = [...sections.map(({id, heading}) => ({id, label: heading})), {id: 'faq', label: 'FAQ'}];
const readingTime = `${Math.max(6, Math.round(draft.split(/\s+/).length / 225))} min read`;

const sectionHtml = sections.map(s => articleSection({
  id: s.id, title: s.title, kicker: s.kicker, bodyHtml: render(getSection(s.heading))
}));

const sourceLink = (href, label) => `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`;

const articleHtml = [
  articleHero({
    kicker: 'Paris clubs',
    title: 'The best clubs in Paris, from Le Palace to Rex Club',
    deck: 'Two legends that closed, one room that never has: the clubs that made Paris nightlife, and the best clubs in Paris open now.',
    readingTime,
    dateModified,
    dateLabel,
    summaryHtml: infoBanner({label: 'Best clubs in Paris', bodyHtml: inline(answer[0]), className: 'article-summary'}),
    tocItems
  }),
  articleSection({id: 'introduction', title: 'A longer memory than one club.', bodyHtml: render(getSection('Introduction')), className: 'article-intro'}),
  ...sectionHtml,
  articleFaq({items: faqItems, title: 'Paris clubs FAQ.', openFirst: true}),
  authorCard({filled: true}),
  articleSources({bodyHtml: `<ul>
${sourceLink('https://en.wikipedia.org/wiki/Les_Bains_Douches_(nightclub)', 'Wikipedia: Les Bains Douches (nightclub)')}
${sourceLink('https://www.theculturecrush.com/feature/paris-de-nuit', "The Culture Crush: Paris' Famous Les Bains Nightclub Photographed")}
${sourceLink('https://metropolismag.com/projects/pariss-les-bains-is-reborn-as-a-boutique-hotel/', "Metropolis Magazine: Paris's Les Bains Is Reborn as a Boutique Hotel, 2015")}
${sourceLink('https://museeyslparis.com/en/stories/les-annees-palace', 'Musée Yves Saint Laurent Paris: A Look Back at the Palace Years')}
${sourceLink('https://en.wikipedia.org/wiki/Le_Palace', 'Wikipedia: Le Palace')}
${sourceLink('https://en.wikipedia.org/wiki/Fabrice_Emaer', 'Wikipedia: Fabrice Emaer')}
${sourceLink('https://ra.co/guides/clubs-in-paris', 'Resident Advisor: The Best Clubs in Paris in 2026')}
${sourceLink('https://djmag.com/news/paris-rex-club-celebrates-35th-anniversary-new-photobook', "DJ Mag: Paris' Rex Club celebrates 35th anniversary with new photobook, 2023")}
${sourceLink('https://www.timeout.com/paris/en/music-nightlife', 'Time Out Paris: Paris Music & Nightlife')}
${sourceLink('https://www.doitinparis.com/en/night-clubs-in-paris-26417', 'Do It In Paris: The New Hotspots of Parisian Nightlife')}
</ul>`}),
  bandcampSupport({
    fullBleed: true,
    description: 'Two of my own tracks: the French remix from the Rex Club section, and one built from breaks. Buying one supports my work directly.',
    tracks: [
      {title: 'Mylène Farmer, Dégénération (Remix)', id: '467727105', url: 'https://thecatrave.bandcamp.com/track/myl-ne-farmer-d-g-n-ration-electronica-breaks-dubstep-remix', linkText: 'Mylène Farmer, Dégénération remix by thecatrave'},
      {title: 'Protect Ya Breaks', id: '3822639635', url: 'https://thecatrave.bandcamp.com/track/protect-ya-breaks', linkText: 'Protect Ya Breaks by thecatrave'}
    ]
  }),
  readNext({items: relatedArticles('best-clubs-in-paris.html')})
].join('\n');

const unused = Object.keys(media).filter(k => !used.has(k));
if (unused.length) throw new Error(`Assets with no placeholder in the draft: ${unused.join(', ')}`);

const structuredData = [
  articleStructuredData({headline: title, description, canonical, datePublished, dateModified}),
  breadcrumbStructuredData({name: 'Best Clubs in Paris', canonical}),
  faqStructuredData({items: faqItems})
];

const html = articlePage({
  alternates: alternatesFor('/best-clubs-in-paris'),
  title, description, canonical,
  ogImage: 'https://thecatrave.com/img/og/paris-clubs.jpg',
  datePublished, dateModified,
  bodyClass: 'article-page paris-clubs-page',
  structuredData, articleHtml
}).replace(/—/g, ':');

fs.writeFileSync('best-clubs-in-paris.html', html);
console.log('Built best-clubs-in-paris.html');
