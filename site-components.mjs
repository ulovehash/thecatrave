import fs from 'node:fs';
import { imageSizeForUrl } from './scripts/image-size.mjs';
import { t, defaultLang, locales } from './i18n.mjs';
import { clubGuideChecked, clubGuideLinksFor, clubGuideVenuesIn } from './club-guide-directory.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const requireFields = (component, values) => {
  const missing = Object.entries(values).filter(([, value]) => value === undefined || value === null || value === '').map(([name]) => name);
  if (missing.length) throw new Error(`${component} requires: ${missing.join(', ')}`);
};

// Read from the catalogue, never typed. A guide already shipped quoting a set
// count that went stale the same evening it was written, and a promo bar on
// every page is the worst possible place for a number nobody re-checks.
const selectorData = (() => {
  try {
    const data = JSON.parse(fs.readFileSync('selector-data.json', 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch { return []; }
})();
const selectorChannelCount = new Set(selectorData.map(set => set.broadcaster).filter(Boolean)).size;

export const siteLinks = {
  home: '/',
  soundcloud: 'https://soundcloud.com/thecatrave',
  bandcamp: 'https://thecatrave.bandcamp.com',
  spotify: 'https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0',
  instagram: 'https://instagram.com/thecatrave'
};

const socialIcons = {
  soundcloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 14.1v2.8M4 12.8v5.4M6.5 11.7v7.1M9 9.2v9.6M11.5 7.4v11.4M14 9.1v9.7h4.5a4 4 0 0 0 .2-8 5.6 5.6 0 0 0-4.7-2.6"/></svg>',
  bandcamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 5.5h14.4l-4.6 13H2.5l4.6-13Z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path class="spotify-waves" d="M6.7 9.3c3.8-1 7.6-.7 10.9 1M7.4 12.4c3.2-.7 6.6-.4 9.4.9M8 15.2c2.7-.5 5.4-.2 7.9.7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle class="instagram-dot" cx="17.4" cy="6.8" r="1"/></svg>'
};

export function socialLinks({icons = false, className = icons ? 'header-socials' : '', lang = defaultLang, label = t(lang).socialsLabel} = {}) {
  const items = ['soundcloud', 'bandcamp', 'spotify', 'instagram'];
  const links = items.map(name => {
    const title = {soundcloud:'SoundCloud',bandcamp:'Bandcamp',spotify:'Spotify',instagram:'Instagram'}[name];
    const content = icons ? socialIcons[name] : `${title} ↗`;
    const aria = icons ? ` aria-label="thecatrave on ${title}"` : '';
    return `<a href="${siteLinks[name]}" target="_blank" rel="noopener noreferrer"${aria}>${content}</a>`;
  }).join('');
  return `<nav${className ? ` class="${className}"` : ''} aria-label="${escapeHtml(label)}">${links}</nav>`;
}

// Every guide links to the full list of articles from its header, so a reader
// who lands on one guide from search can see there are others.
// The labels and the articles link follow the page's language: a German guide
// sends its reader to the German index, not to the English one.
const articleNavItems = lang => {
  const copy = t(lang);
  return [{href: copy.articlesPath, label: copy.navArticles}, {href: copy.selectorPath, label: copy.navSelector, className:'selector-link'}];
};

// The language switcher: the same page in every language it exists in, from
// the hreflang family (`alternatesFor` in pages.mjs). A page with no
// translation gets none, so an English-only guide does not offer languages it
// cannot deliver. Links are root-relative paths, so they work under /de/ and
// /fr/ alike.
const languageSwitchScript = `<script>(()=>{const d=document.currentScript.previousElementSibling;document.addEventListener('click',e=>{if(d.open&&!d.contains(e.target))d.open=false});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&d.open){d.open=false;d.querySelector('summary').focus()}})})();</script>`;

export function languageSwitch({lang = defaultLang, alternates = []} = {}) {
  if (alternates.length < 2) return '';
  const order = Object.keys(locales);
  const items = [...alternates]
    .sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang))
    .map(alternate => {
      const path = alternate.href.replace(/^https:\/\/thecatrave\.com/, '') || '/';
      const current = alternate.lang === lang;
      return `<li><a href="${escapeHtml(path)}" hreflang="${escapeHtml(alternate.lang)}" lang="${escapeHtml(alternate.lang)}"${current ? ' aria-current="page"' : ''}>${escapeHtml(t(alternate.lang).languageName)}</a></li>`;
    });
  // A <details> disclosure: opens and closes without script, by keyboard and
  // by touch, and the closed state shows only the current language. The small
  // script only adds what <details> lacks: closing on a click elsewhere and on
  // Escape, which returns focus to the button.
  return `<details class="lang-switch"><summary aria-label="${escapeHtml(t(lang).languageLabel)}: ${escapeHtml(t(lang).languageName)}">${escapeHtml(lang.toUpperCase())}</summary><ul>${items.join('')}</ul></details>${languageSwitchScript}`;
}

export function siteHeader({variant = 'article', lang = defaultLang, alternates = [], navItems = variant === 'article' ? articleNavItems(lang) : []} = {}) {
  const copy = t(lang);
  const classes = variant === 'article' ? 'site-header article-site-header' : 'site-header';
  // The home page's six links scroll sideways on a phone, and a dropdown inside
  // a scrolling row is either clipped or pushes the page wider than the screen.
  // So on the home header the switcher is its own cell of the header grid; the
  // article header has two links and keeps it at the end of the nav.
  const inNav = variant !== 'home';
  const nav = navItems.length
    ? `<nav class="site-nav" aria-label="${escapeHtml(copy.primaryNavLabel)}">${navItems.map(item => `<a${item.className ? ` class="${escapeHtml(item.className)}"` : ''} href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}${inNav ? languageSwitch({lang, alternates}) : ''}</nav>`
    : '';
  const headerSwitch = inNav ? '' : languageSwitch({lang, alternates});
  return `<header class="${classes}"><a class="wordmark" href="${escapeHtml(copy.homePath)}" aria-label="${escapeHtml(copy.homeLabel)}">thecatrave<span>*</span></a>${nav}${headerSwitch}${socialLinks({icons:true, lang})}</header>`;
}

export function nowPlayingBanner({title, meta, href, lang = defaultLang, linkLabel = t(lang).nowPlayingPlay} = {}) {
  const copy = t(lang);
  const marquee = `<span class="now-playing-marquee"><span>${escapeHtml(title)}</span><span aria-hidden="true">${escapeHtml(title)}</span></span>`;
  return `<aside class="now-playing" aria-label="${escapeHtml(copy.nowPlayingLabel)}"><span><i></i> ${escapeHtml(copy.nowPlaying)}</span><strong>${marquee}</strong><small>${escapeHtml(meta)}</small><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><span class="now-playing-play-icon" aria-hidden="true"></span>${escapeHtml(linkLabel)}</a></aside>`;
}

// The owner's own DJ mixes, both of them. The festival guides list other
// people's sets; every one also plays the owner's, as SoundCloud players:
// the first in the middle of the guide, the second before the FAQ (owner,
// 2026-09-13: "нужно рекламировать оба", then "в виде ск эмбедов").
export const ownSets = [
  {slug: 'i-like-to-smoke-in-silence-after-raves', title: 'I Like to Smoke in Silence After Raves',
    description: 'Thirty tracks where breaks move between garage, bass music, techno and rave. My own set, for a break from the festival.',
    de: {suffix: 'ein DJ-Mix.',
      description: 'Dreißig Tracks, in denen sich die Breaks zwischen Garage, Bass Music, Techno und Rave bewegen. Mein eigenes Set, für eine Pause vom Festival.'},
    fr: {suffix: 'un DJ mix.',
      description: 'Trente morceaux où les breaks circulent entre garage, bass music, techno et rave. Mon propre set, pour faire une pause dans le festival.'}},
  {
  "slug": "i-lost-so-many-weekends-raving-and-i-wanna-lose-some-more",
  "title": "I lost so many weekends raving and I wanna lose some more",
  "description": "I rebuilt this mix about ten times, swapping tracks and second-guessing transitions. In the end, it became around 40 tracks I love, moving through breaks, garage, dubstep, grime, techno and more. For your walk home, cleaning your room or the afters, of course.",
  "de": {
    "description": "Ich habe diesen Mix ungefähr zehnmal neu aufgebaut, Tracks ausgetauscht und immer wieder an den Übergängen gezweifelt. Am Ende wurden es rund 40 Tracks, die ich liebe, mit Breaks, Garage, Dubstep, Grime, Techno und mehr. Für deinen Heimweg, zum Aufräumen oder natürlich für die Afterhour."
  },
  "fr": {
    "description": "J’ai recommencé ce mix une dizaine de fois, changé les morceaux et sans cesse remis les transitions en question. Au final, il rassemble une quarantaine de morceaux que j’aime, entre breaks, garage, dubstep, grime, techno et bien d’autres genres. Pour rentrer à pied, ranger ta chambre ou les afters, évidemment."
  }
}
];

// A guide outside the festival set may give the mix its own line, saying why
// it belongs at that point; the festival guides keep the default. The line is
// English: a translated page passes its own or keeps the translated default.
export function ownSetListening(index, lang = defaultLang, description = '') {
  const set = ownSets[index];
  if (!set) throw new Error(`No own set at index ${index}`);
  const copy = t(lang);
  const translated = lang === defaultLang ? null : set[lang];
  if (lang !== defaultLang && !translated) throw new Error(`Own set ${index} has no ${lang} copy`);
  return articleListeningBand({
    platform: 'soundcloud', id: `own-set-${index + 1}`, kicker: index === 1 ? ({en: 'DJ mix by thecatrave', de: 'DJ-Mix von thecatrave', fr: 'DJ mix de thecatrave'}[lang]) : copy.ownSetKicker,
    title: index === 1 ? set.title : `${set.title}: ${translated ? translated.suffix : 'a DJ mix.'}`,
    // This mix uses the same approved personal introduction everywhere.
    description: (index === 1 ? '' : description) || (translated ? translated.description : set.description),
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://soundcloud.com/thecatrave/${set.slug}`)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    iframeTitle: `${set.title} by thecatrave on SoundCloud`, fullBleed: true, tone: 'cyan'
  });
}

// The owner's own releases that may sit inside a guide's text, not only in
// the Bandcamp block at its end. The list is the owner's (2026-09-21): only
// these, at least two per guide counting the mixes, and never the one-minute
// preview of look, because the full track exists. Keyed by a short name so a
// builder reads ownTrackListening('berlin-race-1909', ...), and the title here
// is what analytics-runtime.js reports as track_title.
export const ownTracks = {
  'protect-ya-breaks': {slug: 'no-id', title: 'Protect Ya Breaks'},
  'berlin-race-1909': {slug: 'berlin-race-1909', title: 'Berlin Race 1909'},
  'degeneration': {slug: 'mylene-farmer-degeneration', title: 'Mylène Farmer, Dégénération (Remix)', remix: true},
  'art-deco': {slug: 'art-deco-jungle-remix', title: 'Lana Del Rey, Art Deco (Jungle Remix)', remix: true},
  '60-hours-of-mistakes': {slug: '60-hours-of-mistakes', title: '60 hours of mistakes'},
  'look': {slug: 'look-1', title: 'look'},
  'late-summer-cloud-dance': {slug: 'late-summer-cloud-dance', title: 'late summer cloud dance'},
  'no-genre-no-problem': {slug: 'no-genre-no-problem', title: 'No Genre No Problem'}
};

const ownSpotifyTrackIds = new Set(['1iq7tX1EWPR7INIjkxhGSu', '6qxmmgfWlT4yrWu60elEFZ']);

function hasExactOwnTrackPlayer(html) {
  const iframes = html.match(/<iframe\b[^>]*>/g) || [];
  return iframes.some(tag => {
    const source = tag.match(/\bsrc="([^"]+)"/)?.[1] || '';
    let decoded = source;
    try { decoded = decodeURIComponent(source); } catch { /* leave the literal URL */ }
    if ([...ownSpotifyTrackIds].some(id => decoded.includes(`open.spotify.com/embed/track/${id}`))) return true;
    return Object.values(ownTracks).some(track => decoded.includes(`soundcloud.com/thecatrave/${track.slug}`));
  });
}

function ensureOwnTrackInArticle(html, lang) {
  if (hasExactOwnTrackPlayer(html)) return html;
  const authorAt = html.indexOf('<aside class="floating-inset author-card');
  if (authorAt < 0) throw new Error('An article without an exact own-track player needs an author card insertion point.');
  const track = ownTracks['berlin-race-1909'];
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://soundcloud.com/thecatrave/${track.slug}`)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
  const player = `<aside class="article-artist-track" aria-labelledby="article-artist-track-title"><div><p class="article-kicker">${escapeHtml(t(lang).ownTrackKicker)}</p><h3 id="article-artist-track-title">${escapeHtml(track.title)}</h3></div><iframe class="article-embed artist-track-embed" src="${escapeHtml(src)}" title="${escapeHtml(track.title)} by thecatrave on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy"></iframe></aside>`;
  return `${html.slice(0, authorAt)}${player}\n${html.slice(authorAt)}`;
}

function closingSectionEnd(html, start) {
  let depth = 0;
  for (const match of html.slice(start).matchAll(/<\/?section\b[^>]*>/g)) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return start + match.index + match[0].length;
  }
  throw new Error('Unclosed article section in promo layout.');
}

function proseInsertionPoints(html, section) {
  const stack = [];
  const points = [];
  const source = html.slice(section.start, section.end);
  for (const match of source.matchAll(/<\/?([a-z][\w-]*)\b[^>]*>/gi)) {
    const tag = match[1].toLowerCase();
    if (match[0].startsWith('</')) {
      if (stack.at(-1) === tag) stack.pop();
      if (tag === 'p' && stack.length === 1 && stack[0] === 'section'
        && /^\s*<(?:p|h3|h4|ul|ol|blockquote|\/section)\b/i.test(source.slice(match.index + match[0].length))) {
        points.push(section.start + match.index + match[0].length);
      }
    } else if (!/^(?:br|hr|img|input|meta|link|source|wbr)$/.test(tag) && !match[0].endsWith('/>')) {
      stack.push(tag);
    }
  }
  return points;
}

function responsiveBandcampLayout(html) {
  if (html.includes('class="article-promo-layout"')) return html;
  const heroEnd = html.indexOf('</header>') + '</header>'.length;
  const authorAt = html.indexOf('<aside class="floating-inset author-card');
  const promoAt = html.indexOf('<aside class="floating-inset article-cta');
  if (heroEnd < 9 || authorAt < heroEnd || promoAt < heroEnd) throw new Error('Article promo layout needs a hero, author card and Bandcamp block.');
  const promoEnd = html.indexOf('</aside>', promoAt) + '</aside>'.length;
  if (promoEnd < promoAt) throw new Error('Unclosed Bandcamp block.');
  const promoHtml = html.slice(promoAt, promoEnd);
  const withoutPromo = html.slice(0, promoAt) + html.slice(promoEnd);
  const authorWithoutPromo = withoutPromo.indexOf('<aside class="floating-inset author-card');
  const sections = [...withoutPromo.slice(heroEnd, authorWithoutPromo).matchAll(/<section class="floating-block article-section[^"\n]*"[^>]*>/g)]
    .map(match => ({start: heroEnd + match.index, end: closingSectionEnd(withoutPromo, heroEnd + match.index)}));
  if (sections.length < 2) throw new Error('Article promo layout needs an introduction and substantive section.');
  // Do not put the commercial block straight after a player or image. Prefer
  // the first early section that ends in actual prose rather than another embed.
  const candidates = sections.slice(1, Math.min(sections.length, 3));
  const chosen = candidates.find(section => /<\/(?:p|ul|ol|blockquote)>\s*<\/section>$/.test(withoutPromo.slice(section.start, section.end))) || candidates.at(-1);
  const splitAt = chosen.end;
  const middleCandidates = sections.filter(section => section.start >= splitAt
    && !/\bid="(?:faq|sources)"/.test(withoutPromo.slice(section.start, section.start + 180)))
    .flatMap(section => proseInsertionPoints(withoutPromo, section));
  if (!middleCandidates.length) throw new Error('Article promo layout needs a safe prose break near the middle.');
  const middleAt = middleCandidates.reduce((best, point) =>
    Math.abs(point - (heroEnd + authorWithoutPromo) / 2) < Math.abs(best - (heroEnd + authorWithoutPromo) / 2) ? point : best);
  return withoutPromo.slice(0, heroEnd) + articlePromoLayout({
    beforeHtml: withoutPromo.slice(heroEnd, splitAt),
    promoHtml,
    afterHtml: withoutPromo.slice(splitAt, middleAt)
      + '<span class="article-promo-midpoint" hidden></span>'
      + withoutPromo.slice(middleAt, authorWithoutPromo)
  }) + withoutPromo.slice(authorWithoutPromo);
}

// The description is in the page's language; the title is the release's own
// name in every language.
export function ownTrackListening(key, description, lang = defaultLang) {
  const track = ownTracks[key];
  if (!track) throw new Error(`No own track called ${key}`);
  requireFields('ownTrackListening', {description});
  const copy = t(lang);
  return articleListeningBand({
    platform: 'soundcloud', id: `own-track-${key}`, kicker: track.remix ? copy.ownRemixKicker : copy.ownTrackKicker,
    title: `${track.title}.`, description,
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://soundcloud.com/thecatrave/${track.slug}`)}&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    iframeTitle: `${track.title} by thecatrave on SoundCloud`, fullBleed: true, tone: 'cyan'
  });
}

// A thin strip above the header, on every guide, pointing at the one thing on
// this site that is not an article. Seven of the eight guides linked to the
// Selector nowhere at all, so a reader could finish 5,000 words on jungle and
// never learn the tool existed.
//
// Dismissal is remembered, and the script that honours it sits immediately
// after the markup rather than in the head: it runs while the parser is still
// on this element, so a returning reader never sees the bar flash and the page
// below it never moves. A head script would work too and would be one more
// thing to keep in sync with a class name.
//
// It is removed, not hidden, so nothing measures or announces a bar that is not
// there. Without JavaScript it simply stays, which is the correct failure: a
// link that cannot be closed beats no link.
//
// The copy leads with the reader's problem and states the mechanism in the
// same breath, because "I made a tool that picks you a DJ set" left people
// guessing what the tool actually did (owner, 2026-09-10). On mobile only the
// question and the button fit, so the question has to carry it alone.
export function selectorPromoBar(lang = defaultLang) {
  const copy = t(lang);
  const more = selectorChannelCount > 3 ? copy.promoMore(selectorChannelCount - 3) : '';
  return `<aside class="promo-bar" id="promo-bar" aria-label="${escapeHtml(copy.promoLabel)}"><a href="${escapeHtml(copy.selectorPath)}"><b>${escapeHtml(copy.promoTitle)}</b><span class="wide">${escapeHtml(copy.promoBody(more))}</span><em>${escapeHtml(copy.promoCta)}</em></a><button type="button" class="promo-bar-close" aria-label="${escapeHtml(copy.promoDismiss)}">\u00d7</button></aside><script>(function(){var b=document.getElementById('promo-bar');if(!b)return;try{if(localStorage.getItem('tcr-bar')==='off'){b.remove();return}}catch(e){}b.querySelector('.promo-bar-close').addEventListener('click',function(){b.remove();try{localStorage.setItem('tcr-bar','off')}catch(e){}})})();<\/script>`;
}

export function homeSelectorPromo({sets = 0, channels = 0, logos = [], lang = defaultLang} = {}) {
  const copy = t(lang);
  const count = copy.homeSelectorCount(sets ? sets.toLocaleString(copy.numberLocale) : 0);
  const wall = logos.length
    ? `<div class="selector-promo-wall" aria-hidden="true">${logos.map(src => `<img src="${escapeHtml(src)}" width="28" height="28" alt="" loading="lazy" decoding="async">`).join('')}</div>`
    : '';
  return `<aside class="selector-promo" aria-labelledby="selector-promo-title"><div class="selector-promo-copy"><p class="label">${escapeHtml(copy.homeSelectorKicker)}</p><h2 id="selector-promo-title">${escapeHtml(copy.homeSelectorTitle)}</h2><p>${escapeHtml(copy.homeSelectorBody(count, channels))}</p><a class="button primary" href="${escapeHtml(copy.selectorPath)}">${escapeHtml(copy.homeSelectorCta)}</a></div>${wall}</aside>`;
}

// One cover-image card, shared by the homepage grid, Read Next and the
// /articles page, so the three can never drift apart.
function articleCard(item, component, lang = defaultLang) {
  requireFields(component, {
    href:item.href,
    category:item.category,
    readingTime:item.readingTime,
    title:item.title,
    description:item.description,
    image:item.image,
    width:item.width,
    height:item.height,
    alt:item.alt
  });
  const category = t(lang).categories[item.category];
  if (!category) throw new Error(`${component} has an unknown category "${item.category}" on ${item.href}. Use one of: ${Object.keys(t(lang).categories).join(', ')}.`);
  const srcset = item.srcset ? ` srcset="${escapeHtml(item.srcset)}"` : '';
  const sizes = item.sizes || '(max-width:767px) 100vw,50vw';
  return `<article data-category="${escapeHtml(item.category)}"><a href="${escapeHtml(item.href)}"><img src="${escapeHtml(item.image)}"${srcset} sizes="${escapeHtml(sizes)}" width="${escapeHtml(item.width)}" height="${escapeHtml(item.height)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async"><span class="card-chip">${escapeHtml(category)}</span><span class="label">${escapeHtml(t(lang).cardReadingTime(item.readingTime))}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><b>${escapeHtml(t(lang).readArticle)}</b></a></article>`;
}

export function homeArticlesSection({items = [], lang = defaultLang} = {}) {
  if (!items.length) throw new Error('homeArticlesSection requires at least one article.');
  const copy = t(lang);
  const cards = items.map(item => articleCard(item, 'homeArticlesSection item', lang)).join('');
  return `<section class="section-shell" id="articles" aria-labelledby="articles-title"><header class="section-heading"><h2 id="articles-title">${escapeHtml(copy.homeArticlesTitle)}</h2><p>${escapeHtml(copy.homeArticlesBody)}</p></header><div class="article-grid" style="--article-cards:${items.length}">${cards}</div><p class="articles-all"><a class="button" href="${escapeHtml(copy.articlesPath)}">${escapeHtml(copy.homeArticlesAll)}</a></p></section>`;
}

// The /articles page: every article in the catalogue, not only the newest eight
// the homepage has room for. A row of category chips above the grid filters it,
// drawn like the Selector's chips. The chips are hidden until the script runs,
// so without JavaScript the page is simply the whole list. The choice is kept
// in the URL (?c=festivals) so a filtered view can be linked to.
export function articlesIndex({items = [], title, lang = defaultLang} = {}) {
  if (!items.length) throw new Error('articlesIndex requires at least one article.');
  requireFields('articlesIndex', {title});
  const copy = t(lang);
  const cards = items.map(item => articleCard(item, 'articlesIndex item', lang)).join('');
  const chip = (key, label, count) => `<button type="button" class="category-chip" data-category="${escapeHtml(key)}" aria-pressed="${key === 'all'}">${escapeHtml(label)}<span class="category-chip-n">${count}</span></button>`;
  const chips = [chip('all', copy.categoriesAll, items.length)]
    .concat(Object.entries(copy.categories)
      .map(([key, label]) => [key, label, items.filter(item => item.category === key).length])
      .filter(([, , count]) => count > 0)
      .map(([key, label, count]) => chip(key, label, count)))
    .join('');
  const script = `<script>(()=>{const g=document.currentScript.previousElementSibling,r=g.previousElementSibling,b=[...r.querySelectorAll('.category-chip')],c=[...g.children];const set=(k,push)=>{if(!b.some(x=>x.dataset.category===k))k='all';b.forEach(x=>x.setAttribute('aria-pressed',x.dataset.category===k));c.forEach(x=>{x.hidden=k!=='all'&&x.dataset.category!==k});if(push){const u=new URL(location.href);k==='all'?u.searchParams.delete('c'):u.searchParams.set('c',k);history.replaceState(null,'',u)}};b.forEach(x=>x.addEventListener('click',()=>set(x.dataset.category,true)));set(new URLSearchParams(location.search).get('c')||'all',false);r.hidden=false})();</script>`;
  return `<section class="articles-index" aria-labelledby="articles-index-title"><h2 id="articles-index-title">${escapeHtml(title)}</h2><div class="category-chips" role="group" aria-label="${escapeHtml(copy.categoriesLabel)}" hidden>${chips}</div><div class="article-grid read-next-grid">${cards}</div>${script}</section>`;
}

export function infoBanner({label, bodyHtml, ariaLabel = label, className = ''} = {}) {
  const classes = [className, 'article-listen'].filter(Boolean).join(' ');
  return `<aside class="${classes}" aria-label="${escapeHtml(ariaLabel)}"><strong>${escapeHtml(label)}:</strong> ${bodyHtml}</aside>`;
}

export function articleTableOfContents({items = [], lang = defaultLang, title = t(lang).contents} = {}) {
  const rows = items.map(item => {
    const href = item.href || `#${item.id}`;
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(item.label)}</a></li>`;
  }).join('');
  return `<nav class="article-toc" id="contents" aria-label="${escapeHtml(title)}"><h2>${escapeHtml(title)}</h2><ol>${rows}</ol></nav>`;
}

export function articleHero({kicker, title, deck, readingTime, dateModified, dateLabel, summaryHtml = '', tocItems = [], lang = defaultLang} = {}) {
  requireFields('articleHero', {kicker,title,deck});
  const copy = t(lang);
  const meta = readingTime || dateModified
    ? `<div class="article-meta">${readingTime ? `<p class="reading-time">${escapeHtml(readingTime)}</p>` : ''}${dateModified ? `<p class="article-updated">${escapeHtml(copy.updated)} <time datetime="${escapeHtml(dateModified)}">${escapeHtml(dateLabel || dateModified)}</time></p>` : ''}</div>`
    : '';
  // kicker, title and the reading line share one filled ground, so they need one
  // element to paint. The deck stays outside it.
  return `<header class="article-hero"><div class="article-masthead"><p class="article-kicker">${escapeHtml(kicker)}</p><h1>${escapeHtml(title)}</h1>${meta}</div><p class="subtitle article-deck">${escapeHtml(deck)}</p>${summaryHtml}${tocItems.length ? articleTableOfContents({items:tocItems, lang}) : ''}</header>`;
}

function clubVenuePlanningHtml(venue) {
  const venueLocation = venue
    ? (venue.venue.toLocaleLowerCase('en').includes(venue.place.toLocaleLowerCase('en')) ? venue.venue : `${venue.venue}, ${venue.place}`)
    : '';
  const events = venue?.eventsUrl
    ? `<div><dt data-club-i18n="eventsLabel">Opening nights and lineups</dt><dd><a href="${escapeHtml(venue.eventsUrl)}" target="_blank" rel="noopener noreferrer" data-club-i18n="events">Upcoming events</a></dd></div>`
    : venue ? '<div><dt>Resident Advisor</dt><dd><span data-club-i18n="unlisted">RA listing not verified</span></dd></div>' : '';
  const venuePlanning = venue
    ? `<aside class="club-venue-planning" aria-label="Plan your visit"><dl><div><dt data-club-i18n="locationLabel">Location</dt><dd>${escapeHtml(venueLocation)}<br><a href="${escapeHtml(venue.mapsUrl)}" target="_blank" rel="noopener noreferrer" data-club-i18n="maps">Google Maps</a></dd></div>${events}</dl><small data-club-i18n="check">Check current tickets, entry, dress, age and accessibility before travelling.</small></aside>`
    : '';
  return venuePlanning;
}

export function articleSection({id = '', title, bodyHtml = '', kicker = '', className = ''} = {}) {
  const classes = ['floating-block', 'article-section', className].filter(Boolean).join(' ');
  const venue = className.includes('faq-section') ? null : clubGuideLinksFor(title);
  const venuePlanning = clubVenuePlanningHtml(venue);
  const bodyWithPlanning = !venuePlanning ? bodyHtml
    : bodyHtml.trimStart().startsWith('<p>')
      ? `${venuePlanning}${bodyHtml}`
      : `${bodyHtml}${venuePlanning}`;
  return `<section class="${classes}"${id ? ` id="${escapeHtml(id)}"` : ''}>${kicker ? `<p class="era-years">${escapeHtml(kicker)}</p>` : ''}<h2>${escapeHtml(title)}</h2>${bodyWithPlanning}</section>`;
}

export function articleFigure({src, srcset = '', sizes = '(max-width: 760px) calc(100vw - 32px), 640px', width, height, alt, caption = '', className = '', loading = 'lazy'} = {}) {
  requireFields('articleFigure', {src,alt});
  if (/\.(?:avif|jpe?g|png|webp)(?:$|\?)/i.test(src)) requireFields('articleFigure raster dimensions', {width,height});
  const classes = ['floating-image', 'article-image', className].filter(Boolean).join(' ');
  const dimensions = width && height ? ` width="${escapeHtml(width)}" height="${escapeHtml(height)}"` : '';
  return `<figure class="${classes}"><img src="${escapeHtml(src)}"${srcset ? ` srcset="${escapeHtml(srcset)}"` : ''} sizes="${escapeHtml(sizes)}"${dimensions} alt="${escapeHtml(alt)}" loading="${escapeHtml(loading)}" decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

export function articleTable({headers = [], rows = [], className = '', label = ''} = {}) {
  const classes = ['genre-table', className].filter(Boolean).join(' ');
  const head = headers.map(cell => `<th scope="col">${cell}</th>`).join('');
  const clubColumn = headers.findIndex(cell => ['club', 'boîte', 'clubs to know', 'clubs à connaître', 'clubs, die man kennen sollte'].includes(String(cell).replace(/<[^>]+>/g, '').trim().toLocaleLowerCase('fr')));
  let linkedRows = 0;
  const body = rows.map(row => {
    const cells = [...row];
    if (clubColumn >= 0) {
      const venues = clubGuideVenuesIn(cells[clubColumn]);
      if (venues.length) {
        linkedRows += 1;
        cells[clubColumn] = `<strong class="club-guide-name">${cells[clubColumn]}</strong>` + venues.map(links => {
        const events = links.eventsUrl
          ? `<a href="${escapeHtml(links.eventsUrl)}" target="_blank" rel="noopener noreferrer" data-club-i18n="events">Resident Advisor</a>`
          : `<span data-club-i18n="unlisted">RA listing not verified</span>`;
        return `<span class="club-guide-links">${venues.length > 1 ? `<span>${escapeHtml(links.venue)}:</span>` : ''}<a href="${escapeHtml(links.mapsUrl)}" target="_blank" rel="noopener noreferrer" data-club-i18n="maps">Google Maps</a>${events}</span>`;
        }).join('') + `<small class="club-guide-check" data-club-i18n="check">Check current tickets, entry, dress, age and accessibility before travelling.</small>`;
      }
    }
    return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
  }).join('');
  // The scrollable region needs a unique accessible name when a page has several
  // tables; derive one from the column headers unless the caller supplies a label.
  const name = label || `${headers.map(cell => String(cell).replace(/<[^>]+>/g, '').trim()).filter(Boolean).join(', ')} table`;
  const checked = linkedRows ? `<p class="club-guide-checked"><span data-club-i18n="checked">Planning links checked</span> <time datetime="${clubGuideChecked}">${clubGuideChecked}</time>.</p>` : '';
  return `<div class="genre-table-wrap${linkedRows ? ' club-guide-table-wrap' : ''}" role="region" aria-label="${escapeHtml(name)}" tabindex="0"><table class="${classes}"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>${checked}</div>`;
}

function localizeClubGuideHtml(html, lang) {
  const copy = t(lang);
  const labels = {
    maps: copy.clubMaps,
    events: copy.clubEvents,
    unlisted: copy.clubRaUnlisted,
    locationLabel: copy.clubLocationLabel,
    eventsLabel: copy.clubEventsLabel,
    check: copy.clubCheck,
    checked: copy.clubLinksChecked
  };
  return html.replace(/(<(?:a|small|span|dt)\b[^>]*data-club-i18n="([a-zA-Z]+)"[^>]*>)(.*?)(<\/(?:a|small|span|dt)>)/g,
    (match, open, key, value, close) => labels[key] ? `${open}${escapeHtml(labels[key])}${close}` : match);
}

export function articleFaq({items = [], lang = defaultLang, title = t(lang).faqTitle, id = 'faq', openFirst = true} = {}) {
  const questions = items.map((item, index) => `<details${openFirst && index === 0 ? ' open' : ''}><summary>${escapeHtml(item.question)}</summary>${item.answerHtml}</details>`).join('');
  return articleSection({id, title, bodyHtml:questions, className:'faq-section'});
}

export function articleSources({bodyHtml, lang = defaultLang, title = t(lang).sourcesTitle, id = 'sources'} = {}) {
  return articleSection({id, title, bodyHtml, className:'sources-section'});
}

// ogType 'website' is for pages that are not themselves an article, such as
// the /articles list: they carry no article dates.
//
// `lang` switches every string the shell writes itself and the document's own
// language tag. `alternates` are the translations of this exact page: each one
// is announced to search engines with `hreflang`, in both directions, and the
// English page is the `x-default`.
//
// A page that does not sit at the site root (a German guide lives under /de/)
// cannot keep the relative `img/...` and stylesheet paths the generators write,
// so they are made root-relative here rather than in every caller.
function bandcampExperimentBootstrap() {
  // Keep one assignment per browser; storage failure preserves the existing layout.
  return `<script>(function(){var root=document.documentElement;function pick(key,control,test,previewKey){var value=control;try{value=localStorage.getItem(key);if(value!==control&&value!==test){value=Math.random()<.5?control:test;localStorage.setItem(key,value)}}catch(e){value=control}if(location.hostname==='localhost'||location.hostname==='127.0.0.1'){var override=new URLSearchParams(location.search).get(previewKey);if(override===control||override===test)value=override}return value}root.dataset.bandcampDesktop=pick('tcr-bandcamp-desktop-v1','rail','inline','bc_desktop');root.dataset.bandcampMobile=pick('tcr-bandcamp-mobile-v2','early','middle','bc_mobile')})();<\/script>`;
}

export function articlePage({title, description, canonical, ogImage, datePublished, dateModified, bodyClass = 'article-page', structuredData = [], articleHtml, ogType = 'article', lang = defaultLang, alternates = []} = {}) {
  requireFields('articlePage', {title,description,canonical,ogImage,articleHtml});
  const pageVenue = clubGuideLinksFor(title);
  if (pageVenue && !articleHtml.includes('class="club-venue-planning"')) {
    const planning = clubVenuePlanningHtml(pageVenue);
    articleHtml = articleHtml.replace(/(<section class="[^"]*article-section[^"]*"[^>]*>(?:<p class="era-years">.*?<\/p>)?<h2>.*?<\/h2>)/, `$1${planning}`);
  }
  articleHtml = localizeClubGuideHtml(articleHtml, lang);
  const copy = t(lang);
  const inSubdirectory = new URL(canonical).pathname.replace(/^\/|\/$/g, '').includes('/');
  const hreflang = alternates.length
    ? alternates.map(alternate => `<link rel="alternate" hreflang="${escapeHtml(t(alternate.lang).htmlLang)}" href="${escapeHtml(alternate.href)}">`).join('')
      + `<link rel="alternate" hreflang="x-default" href="${escapeHtml((alternates.find(alternate => alternate.lang === defaultLang) || {href: canonical}).href)}">`
    : '';
  if (ogType === 'article') requireFields('articlePage', {datePublished,dateModified});
  if (!/^https:\/\//.test(canonical) || !/^https:\/\//.test(ogImage)) throw new Error('articlePage canonical and ogImage must be absolute HTTPS URLs.');
  // Declared from the file the build just wrote, so the numbers cannot drift
  // from the image actually served. Scrapers that have them can lay the card
  // out before the image finishes downloading.
  const { width, height } = imageSizeForUrl(ogImage);
  const ogImageSize = `<meta property="og:image:width" content="${width}"><meta property="og:image:height" content="${height}">`;
  const articleTimes = `${datePublished ? `<meta property="article:published_time" content="${escapeHtml(datePublished)}">` : ''}${dateModified ? `<meta property="article:modified_time" content="${escapeHtml(dateModified)}">` : ''}`;
  const schemas = structuredData.filter(Boolean).map(data => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`).join('');
  const content = ogType === 'article' && !bodyClass.includes('selector-page')
    ? ensureOwnTrackInArticle(responsiveBandcampLayout(articleHtml), lang)
    : articleHtml;
  const experiment = content.includes('class="floating-inset article-cta') ? bandcampExperimentBootstrap() : '';
  const html = `<!doctype html><html lang="${escapeHtml(copy.htmlLang)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f1eee7" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${escapeHtml(canonical)}">${hreflang}<link rel="alternate" type="application/rss+xml" title="thecatrave RSS" href="https://thecatrave.com/feed.xml"><link rel="icon" type="image/png" sizes="192x192" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png"><meta property="og:type" content="${escapeHtml(ogType)}">${articleTimes}<meta property="og:site_name" content="thecatrave"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${escapeHtml(canonical)}"><meta property="og:image" content="${escapeHtml(ogImage)}">${ogImageSize}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}"><meta name="twitter:image" content="${escapeHtml(ogImage)}"><link rel="preconnect" href="https://api.fontshare.com"><link rel="preconnect" href="https://cdn.fontshare.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" rel="stylesheet" media="print" onload="this.media='all'"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet" media="print" onload="this.media='all'"><noscript><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"></noscript><link rel="stylesheet" href="thecatrave-home.css"><link rel="stylesheet" href="thecatrave-article.css">${schemas}${analytics()}</head><body class="${escapeHtml(bodyClass)}"><a class="skip-link" href="#main-content">${escapeHtml(copy.skipLink)}</a>${bodyClass.includes('selector-page') ? '' : selectorPromoBar(lang)}${siteHeader({variant:'article', lang, alternates})}<main id="main-content"><article>${content}</article></main>${articleFooter(lang)}</body></html>`;
  const readyHtml = html.replace('<link rel="stylesheet" href="thecatrave-home.css">', `${experiment}<link rel="stylesheet" href="thecatrave-home.css">`);
  return inSubdirectory ? rootRelativeAssets(readyHtml) : readyHtml;
}

export function articleStructuredData({headline, description, canonical, image, datePublished, dateModified, lang = defaultLang} = {}) {
  return {'@context':'https://schema.org','@type':'Article',headline,description,datePublished,dateModified,mainEntityOfPage:canonical,image,author:{'@type':'Person',name:'thecatrave',url:'https://thecatrave.com/'},publisher:{'@type':'Organization',name:'thecatrave',url:'https://thecatrave.com/'},inLanguage:t(lang).inLanguage};
}

export function breadcrumbStructuredData({name, canonical, lang = defaultLang} = {}) {
  return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:t(lang).footerHome,item:`https://thecatrave.com${t(lang).homePath}`},{'@type':'ListItem',position:2,name,item:canonical}]};
}

export function faqStructuredData({items = []} = {}) {
  return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))};
}

const essentialListeningLabels = new Set(Object.values(locales).map(locale => locale.essentialListening.toLowerCase()));

// The generators write `img/...` and the two stylesheets relative to the site
// root, which is where every English page sits. A page one directory down
// resolves those against its own directory and gets nothing, so the paths are
// made root-relative for it here. `img/` is the only relative directory the
// pages reference; everything else is already absolute.
export function rootRelativeAssets(html) {
  return html
    .replace(/(src|href)="(img\/|thecatrave-home\.css|thecatrave-article\.css|selector-runtime\.js)/g, '$1="/$2')
    .replace(/srcset="([^"]*)"/g, (match, value) => `srcset="${value.replace(/(^|,\s*)img\//g, '$1/img/')}"`);
}

export function articleListeningBand({platform = 'spotify', id, kicker, title, description, src, iframeTitle, fullBleed = false, tone = ''} = {}) {
  if (!['spotify', 'soundcloud'].includes(platform)) throw new Error(`Unsupported listening platform: ${platform}`);
  if (tone && !['paper', 'cyan', 'yellow', 'coral'].includes(tone)) throw new Error(`Unsupported listening tone: ${tone}`);
  // The label is translated per language (i18n.mjs), and the shared responsive
  // geometry follows the label in every one of them: contained on desktop,
  // edge-to-edge on narrow screens.
  const essentialListening = essentialListeningLabels.has(String(kicker).trim().toLowerCase());
  const useFullBleed = fullBleed || essentialListening;
  const classes = [
    `${platform}-feature`,
    'article-listening-feature',
    'article-media-band',
    useFullBleed ? 'article-media-band-full' : '',
    tone ? `article-media-band-${tone}` : ''
  ].filter(Boolean).join(' ');
  const player = platform === 'spotify'
    ? `<iframe class="article-embed spotify-inline-embed" src="${escapeHtml(src)}" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${escapeHtml(iframeTitle)}"></iframe>`
    : `<iframe class="article-embed soundcloud-inline-embed" src="${escapeHtml(src)}" title="${escapeHtml(iframeTitle)}" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy"></iframe>`;
  return `<aside class="${classes}" aria-labelledby="${escapeHtml(id)}"><div class="article-media-copy"><p class="article-kicker">${escapeHtml(kicker)}</p><h3 id="${escapeHtml(id)}">${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>${player}</aside>`;
}

export function articleTrackEmbed({platform, id = '', url = '', title} = {}) {
  const safeTitle = escapeHtml(title);
  if (platform === 'spotify' || platform === 'spotify-playlist' || platform === 'spotify-album') {
    const type = platform === 'spotify' ? 'track' : platform === 'spotify-album' ? 'album' : 'playlist';
    const context = platform === 'spotify' ? ' on Spotify' : platform === 'spotify-album' ? ' release on Spotify' : ' in a Spotify listening set';
    return `<iframe class="track-embed spotify-embed" title="${safeTitle}${context}" src="https://open.spotify.com/embed/${type}/${escapeHtml(id)}?utm_source=generator&theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  }
  if (platform === 'soundcloud') return `<iframe class="track-embed soundcloud-embed" title="${safeTitle} on SoundCloud" width="100%" height="166" scrolling="no" allow="autoplay" loading="lazy" src="https://w.soundcloud.com/player/?url=${escapeHtml(url)}&amp;color=%23ff5a36&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"></iframe>`;
  // Mixcloud's own widget, audio only. `url` is the unencoded mixcloud.com path.
  if (platform === 'mixcloud') return `<iframe class="track-embed mixcloud-embed" title="${safeTitle} on Mixcloud" width="100%" height="120" loading="lazy" allow="autoplay" src="https://www.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(url)}&amp;hide_cover=1"></iframe>`;
  if (platform === 'bandcamp') return `<iframe class="track-embed bandcamp-embed" title="${safeTitle} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${escapeHtml(id)}/size=large/bgcol=f1eee7/linkcol=ff5a36/tracklist=false/artwork=small/transparent=true/" seamless loading="lazy"><a href="${escapeHtml(url)}">${safeTitle}</a></iframe>`;
  if (platform === 'youtube') return `<div class="track-video"><iframe class="track-embed youtube-embed" title="${safeTitle} on YouTube" src="https://www.youtube-nocookie.com/embed/${escapeHtml(id)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
  throw new Error(`Unsupported track platform: ${platform}`);
}

// A ranked or recommended playlist is not an exact-track listening row. Keep
// its curator, editorial reason and destination visible, then let Spotify show
// a short playable sample of the list. The compact frame is deliberately lower
// than the 420px homepage players, so the article does not become twelve full
// track lists or leave a large empty area below Spotify's preview controls.
export function articlePlaylistPreview({id, title, curator, description, anchor, owned = false, lang = defaultLang} = {}) {
  requireFields('articlePlaylistPreview', {id, title, curator, description, anchor});
  const copy = t(lang);
  const disclosure = owned ? `<span class="playlist-preview-owned">${escapeHtml(copy.playlistOwned)}</span>` : '';
  return `<article class="playlist-preview" id="${escapeHtml(anchor)}"><div class="playlist-preview-copy"><p class="article-kicker">${escapeHtml(curator)}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p>${disclosure}<a class="playlist-preview-link" href="https://open.spotify.com/playlist/${escapeHtml(id)}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.playlistOpen)}</a></div><iframe class="playlist-preview-player" title="${escapeHtml(copy.playlistPreviewTitle(title))}" src="https://open.spotify.com/embed/playlist/${escapeHtml(id)}?utm_source=generator&amp;theme=0" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></article>`;
}

export function articleListeningCollection({id, title = '', description = '', label = '', tone = 'cyan', items = [], fullBleed = true, lang = defaultLang} = {}) {
  if (!['paper', 'cyan', 'yellow', 'coral'].includes(tone)) throw new Error(`Unsupported listening collection tone: ${tone}`);
  const itemHeading = title ? 'h4' : 'h3';
  const tracks = items.map(item => {
    const year = item.year ? `<span class="track-year"> · <time>${escapeHtml(item.year)}</time></span>` : '';
    const note = item.noteHtml || `<p>${escapeHtml(item.note || '')}</p>`;
    return `<article class="track-entry"${item.anchor ? ` id="${escapeHtml(item.anchor)}"` : ''}><div class="track-copy"><p class="track-meta">${escapeHtml(item.artist)}</p><${itemHeading}>${escapeHtml(item.title)}${year}</${itemHeading}>${note}</div><div class="track-player">${item.playerHtml}</div></article>`;
  }).join('');
  const classes = ['context-listening', fullBleed ? 'context-listening-full' : '', `listening-${tone}`].filter(Boolean).join(' ');
  const heading = title ? `<h3 id="${escapeHtml(id)}">${escapeHtml(title)}</h3>` : '';
  const descriptionHtml = description ? `<p>${escapeHtml(description)}</p>` : '';
  const accessibleName = title || label || 'tracks';
  const aria = title ? `aria-labelledby="${escapeHtml(id)}"` : `aria-label="${escapeHtml(`${t(lang).essentialListening}: ${accessibleName}`)}"`;
  return `<aside class="${classes}" ${aria}><div class="context-listening-intro"><p class="article-kicker">${escapeHtml(t(lang).essentialListening)}</p>${heading}${descriptionHtml}</div><div class="context-track-list">${tracks}</div></aside>`;
}

export function articleYoutubeEmbed({src, title} = {}) {
  return `<div class="classic-youtube-embed"><iframe src="${escapeHtml(src)}" title="${escapeHtml(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>`;
}

export function articleVideoCard({youtubeId, genre, artist, title} = {}) {
  // House convention, matching the guides written after the no-em-dash rule: a
  // comma in the accessible name a screen reader reads aloud, a colon in the
  // visible caption.
  const spoken = `${artist}, ${title}`;
  const label = `${artist} : ${title}`;
  return `<figure class="video-example"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(youtubeId)}" title="${escapeHtml(spoken)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><figcaption><span>${escapeHtml(genre)}</span><strong>${escapeHtml(label)}</strong></figcaption></figure>`;
}

export function articleVideoCollection({items = [], description = '', label = '', lang = defaultLang} = {}) {
  const listening = t(lang).essentialListening;
  const genericPrompt = [
    /^(?:watch|listen to)\b.*\bofficial\s+(?:channel|upload)\b/i,
    /^sieh dir\b.*\boffiziellen kanal\b/iu,
    /^regarde\b.*\bchaîne officielle\b/iu
  ].some(pattern => pattern.test(String(description).trim()));
  if (genericPrompt) {
    throw new Error('articleVideoCollection description must add a factual editorial reason, not an official-channel instruction');
  }
  // Complementary landmarks need a non-empty, unique accessible name; derive one
  // from the label or the opening of the description when several sit on a page.
  const name = (label || String(description).split(/(?<=[.:])\s/)[0] || 'tracks').slice(0, 80).replace(/[.:]\s*$/, '');
  const ariaLabel = escapeHtml(`${listening}: ${name}`);
  const descriptionHtml = description ? `<p>${escapeHtml(description)}</p>` : '';
  return `<aside class="listening-block listening-block-full" aria-label="${ariaLabel}"><div class="listening-intro"><p class="article-kicker">${escapeHtml(listening)}</p>${descriptionHtml}</div><div class="video-grid">${items.join('')}</div></aside>`;
}

export function authorCard({filled = false, lang = defaultLang} = {}) {
  const copy = t(lang);
  const classes = `floating-inset author-card${filled ? ' author-card-filled' : ''}`;
  const portrait = `<figure class="author-portrait"><img src="img/thecatrave-author-800.jpg" srcset="img/thecatrave-author-400.jpg 400w, img/thecatrave-author-800.jpg 800w" sizes="(max-width: 760px) 112px, 160px" width="800" height="600" loading="lazy" alt="${escapeHtml(copy.authorPortraitAlt)}"></figure>`;
  const links = `<nav aria-label="${escapeHtml(copy.authorLinksLabel)}"><a href="https://soundcloud.com/thecatrave" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="https://thecatrave.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="https://open.spotify.com/artist/0Enu90TUHq8MQBz5WO6Ki0" target="_blank" rel="noopener noreferrer">Spotify ↗</a><a href="https://instagram.com/thecatrave" target="_blank" rel="noopener noreferrer">Instagram ↗</a></nav>`;
  return `<aside class="${classes}" aria-labelledby="author-title"><div class="author-card-grid"><h2 id="author-title">${escapeHtml(copy.authorTitle)}</h2>${portrait}<p class="author-bio">${escapeHtml(copy.authorBio)}</p>${links}</div></aside>`;
}

export function bandcampSupport({description, tracks = [], fullBleed = false, lang = defaultLang} = {}) {
  const copy = t(lang);
  const featured = tracks[0];
  const classes = `floating-inset article-cta${fullBleed ? ' article-cta-full' : ''}${featured ? '' : ' article-cta-solo'}`;
  if (!featured) {
    return `<aside class="${classes}" aria-labelledby="bandcamp-support-title"><div class="article-cta-copy"><h3 id="bandcamp-support-title">${escapeHtml(copy.supportHeadline)}</h3><p>${escapeHtml(copy.supportDescription)}</p><a class="button primary" href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.supportBrowse)}</a></div></aside>`;
  }
  const copyInner = `<h3 id="bandcamp-support-title">${escapeHtml(copy.supportHeadline)}</h3><p>${escapeHtml(copy.supportDescription)}</p>`;
  const player = `<iframe class="bandcamp-embed" title="${escapeHtml(featured.linkText)} on Bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${escapeHtml(featured.id)}/size=large/bgcol=0a0a0a/linkcol=ff5a36/tracklist=false/artwork=none/transparent=true/" seamless loading="lazy"><a href="${escapeHtml(featured.url)}">${escapeHtml(featured.linkText)}</a></iframe>`;
  const actions = `<div class="article-cta-actions"><a class="button primary bandcamp-buy" href="${escapeHtml(featured.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.supportButton)}</a><a class="article-cta-browse" href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.supportBrowse)}</a></div>`;
  const pressFeedback = `<script>(()=>{const button=document.currentScript.closest('.article-cta').querySelector('.bandcamp-buy');button.addEventListener('click',()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;button.dataset.pressed='';setTimeout(()=>delete button.dataset.pressed,300)})})()<\/script>`;
  return `<aside class="${classes}" aria-labelledby="bandcamp-support-title"><div class="article-cta-copy">${copyInner}</div><div class="article-cta-tracks">${player}</div>${actions}${pressFeedback}</aside>`;
}

// Keep one Bandcamp block in the document: inline after useful article content
// on narrow screens, or in a compact sticky right rail when there is room.
export function articlePromoLayout({beforeHtml, promoHtml, afterHtml} = {}) {
  requireFields('articlePromoLayout', {beforeHtml, promoHtml, afterHtml});
  const placement = `<script>(()=>{const layout=document.currentScript.parentElement;const before=layout.querySelector('.article-promo-before');const rail=layout.querySelector('.article-promo-rail');const middle=layout.querySelector('.article-promo-midpoint');const mobile=matchMedia('(max-width: 760px)');function place(){if(mobile.matches&&document.documentElement.dataset.bandcampMobile==='middle')middle.after(rail);else before.after(rail)}place();mobile.addEventListener('change',place)})()<\/script>`;
  return `<div class="article-promo-layout"><div class="article-promo-before">${beforeHtml}</div><div class="article-promo-rail">${promoHtml}</div><div class="article-promo-after">${afterHtml}</div>${placement}</div>`;
}

export function readNext({items = [], lang = defaultLang, title = t(lang).readNextTitle, kicker = t(lang).readNextKicker} = {}) {
  if (!items.length) throw new Error('readNext requires at least one article.');
  const cards = items.map(item => articleCard(item, 'readNext item', lang)).join('');
  return `<section class="read-next" aria-labelledby="read-next-title"><p class="article-kicker">${escapeHtml(kicker)}</p><h2 id="read-next-title">${escapeHtml(title)}</h2><div class="article-grid read-next-grid">${cards}</div></section>`;
}

export function articleFooter(lang = defaultLang) {
  const copy = t(lang);
  return `<footer class="site-footer article-footer"><nav class="footer-nav article-footer-nav" aria-label="${escapeHtml(copy.footerNavLabel)}"><div><p>${escapeHtml(copy.footerHome)}</p><a href="${escapeHtml(copy.homePath)}">thecatrave.com</a><a href="${escapeHtml(copy.articlesPath)}">${escapeHtml(copy.footerAllArticles)}</a></div><div><p>${escapeHtml(copy.footerListen)}</p><a href="${siteLinks.soundcloud}" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="${siteLinks.spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a></div><div><p>${escapeHtml(copy.footerFollow)}</p><a href="${siteLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></nav><div class="footer-bottom"><p>© 2026 thecatrave</p><a href="#main-content">${escapeHtml(copy.footerTop)}</a></div></footer>`;
}

export function homeFooter(lang = defaultLang) {
  const copy = t(lang);
  return `<footer class="site-footer"><div class="footer-top"><a class="footer-wordmark" href="${escapeHtml(copy.homePath)}">thecatrave*</a><p>${escapeHtml(copy.footerTagline)}.</p></div><nav class="footer-nav" aria-label="${escapeHtml(copy.footerNavLabel)}"><div><p>${escapeHtml(copy.footerExplore)}</p><a href="#music">${escapeHtml(copy.footerMusic)}</a><a href="${escapeHtml(copy.articlesPath)}">${escapeHtml(copy.footerArticles)}</a></div><div><p>${escapeHtml(copy.footerListen)}</p><a href="${siteLinks.soundcloud}" target="_blank" rel="noopener noreferrer">SoundCloud ↗</a><a href="${siteLinks.bandcamp}" target="_blank" rel="noopener noreferrer">Bandcamp ↗</a><a href="${siteLinks.spotify}" target="_blank" rel="noopener noreferrer">Spotify ↗</a></div><div><p>${escapeHtml(copy.footerFollow)}</p><a href="${siteLinks.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></nav><div class="footer-bottom"><p>© 2026 thecatrave</p><p>${escapeHtml(copy.footerTagline)}</p><a href="#main-content">${escapeHtml(copy.footerTop)}</a></div></footer>`;
}

// The owner's own visits are the largest single source of noise on a site this
// size, and GA4's own "internal traffic" filter matches on IP, which is no use
// to somebody on a laptop with a domestic connection.
//
// So the switch lives in the browser instead. Visiting any page with ?ga=off
// stores a flag and sets window['ga-disable-<id>'], which is Google's own
// documented opt-out: gtag.js still downloads, and sends nothing. ?ga=on clears
// it. The flag has to be set before the tag runs, which is why this block comes
// first and why the tag itself is left exactly as it was: audit-site-components
// requires that literal string, early in the head, for load performance.
//
// It is per browser and per device, because localStorage is. Two browsers means
// visiting the URL twice, and a cleared site-data wipe means visiting it again.
//
// The second switch is the one that mattered. Every page carried this tag on
// localhost too, so `npm run check:layout` — 126 Playwright tests, each loading
// a real page in a real browser — reported itself to GA4 as 126 direct visits,
// on every single run. So did every preview server. The host check kills all of
// it at the source: the tag sends nothing unless the page is actually being
// served from the live domain. Referrals from AI answers are untouched, because
// those land on thecatrave.com like anybody else.
// The shared runtime records only actions that answer a site decision:
//
//   selector_deal    the button was pressed. Carries the mode and how many
//                    filters were on, their final state and the capped pick
//                    number, so repeat use can be separated from first use.
//   set_opened       the outbound click. The set left with them.
//   filter_used      facet and value. This is what decides whether a filter row
//                    earns the screen it costs; the city filter died of a
//                    question like this before it was ever built.
//   guide_read       half the article in view and 45 seconds elapsed, fired
//                    once. Only visible-tab time counts, and tool pages are
//                    excluded.
//   soundcloud_play  an actual PLAY event from a SoundCloud player, not an
//                    iframe load or an assumed click.
//   bandcamp_click   an outbound click to thecatrave's Bandcamp, with its page
//                    placement. Cross-origin clicks inside Bandcamp's own
//                    iframe cannot be observed reliably and are not guessed.
//
// soundcloud_play, bandcamp_click and set_opened are the strongest key-event
// candidates. The other events describe the route to those outcomes.
//
export function analytics() {
  return `<script>(function(){try{var h=location.hostname;if(h!=='thecatrave.com'&&h!=='www.thecatrave.com'){window['ga-disable-G-0WW1QS0DW4']=true;return;}var q=new URLSearchParams(location.search);if(q.has('ga')){q.get('ga')==='off'?localStorage.setItem('tcr-no-ga','1'):localStorage.removeItem('tcr-no-ga');}if(localStorage.getItem('tcr-no-ga')){window['ga-disable-G-0WW1QS0DW4']=true;}}catch(e){}})();</script><script async fetchpriority="low" src="https://www.googletagmanager.com/gtag/js?id=G-0WW1QS0DW4"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-0WW1QS0DW4');</script><script src="/analytics-runtime.js" defer></script>`;
}
