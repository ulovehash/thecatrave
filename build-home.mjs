import fs from 'node:fs';
import {homeArticlesNewestFirst} from './home-articles.mjs';
import {analytics, homeArticlesSection, homeFooter, homeSelectorPromo, nowPlayingBanner, rootRelativeAssets, siteHeader} from './site-components.mjs';
import {channels} from './selector-channels.mjs';
import {alternatesFor, pages} from './pages.mjs';
import {t} from './i18n.mjs';

const path = 'index.html';
const homeStyles = fs.readFileSync('thecatrave-home.css', 'utf8').trim();
const homeRuntime = fs.readFileSync('homepage-runtime.js', 'utf8').trim();
const alternates = alternatesFor('/');

function replaceComponent(page, name, html) {
  const start = `<!-- component:${name}:start -->`;
  const end = `<!-- component:${name}:end -->`;
  const from = page.indexOf(start);
  const to = page.indexOf(end);
  if (from === -1 || to === -1 || to < from) throw new Error(`Missing or invalid ${name} component markers`);
  return `${page.slice(0, from)}${start}\n  ${html}\n  ${end}${page.slice(to + end.length)}`;
}

// The Selector promo pulls its numbers and channel logos from the tool's own data.
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let selectorSets = 0;
try { const d = JSON.parse(fs.readFileSync('selector-data.json', 'utf8')); if (Array.isArray(d)) selectorSets = d.length; } catch {}
const broadcasters = [...new Set(channels.map(c => c.broadcaster))];
const selectorLogos = broadcasters.map(b => `img/selector/${slug(b)}.png`).filter(p => fs.existsSync(p));

function components(page, lang) {
  const copy = t(lang);
  const hreflang = alternates.map(alternate => `<link rel="alternate" hreflang="${t(alternate.lang).htmlLang}" href="${alternate.href}">`).join('')
    + `<link rel="alternate" hreflang="x-default" href="https://thecatrave.com/">`;
  page = replaceComponent(page, 'home-hreflang', hreflang);
  page = replaceComponent(page, 'home-styles', `<style>${homeStyles}</style>`);
  page = replaceComponent(page, 'home-header', siteHeader({
    variant: 'home',
    lang,
    alternates,
    navItems: [
      {href:'#bandcamp',label:'Bandcamp',className:'support-link'},
      {href:'#mixes',label:copy.homeNavMixes},
      {href:'#music',label:copy.homeNavTracks},
      {href:'#playlists',label:copy.homeNavPlaylists},
      {href:copy.articlesPath,label:copy.navArticles},
      {href:copy.selectorPath,label:copy.navSelector,className:'selector-link'}
    ]
  }));
  page = replaceComponent(page, 'now-playing', nowPlayingBanner({
    title: 'I Like to Smoke in Silence After Raves',
    meta: copy.nowPlayingMeta,
    href: 'https://soundcloud.com/thecatrave/i-like-to-smoke-in-silence-after-raves',
    lang
  }));
  page = replaceComponent(page, 'home-selector', homeSelectorPromo({
    sets: selectorSets,
    channels: broadcasters.length,
    logos: selectorLogos,
    lang
  }));
  page = replaceComponent(page, 'home-articles', homeArticlesSection({items:homeArticlesNewestFirst(lang), lang}));
  page = replaceComponent(page, 'home-footer', homeFooter(lang));
  page = replaceComponent(page, 'home-runtime', `<script>${homeRuntime}</script>`);
  page = replaceComponent(page, 'analytics', analytics());
  return page;
}

// index.html is the template: its hand-written copy is English, and a
// translated home page is that file with every English string outside the
// component regions swapped for the one in content/<lang>/home.mjs.
//
// A string is matched only whole, as a text node (>...<) or an attribute or
// JSON value ("..."), so a short one such as "DJ mix" cannot bite into a longer
// one. Every pair must be found, and when the pass is done no hand-written
// English text node may be left: an English edit to index.html therefore fails the
// German and French builds instead of shipping them half translated.
function translate(page, lang, strings, keep, englishText) {
  const regions = /<!-- component:(\S+):start -->[\s\S]*?<!-- component:\1:end -->/g;
  const parts = [];
  let last = 0;
  for (const match of page.matchAll(regions)) {
    parts.push({text: page.slice(last, match.index), fixed: false}, {text: match[0], fixed: true});
    last = match.index + match[0].length;
  }
  parts.push({text: page.slice(last), fixed: false});
  const pairs = [...strings].sort((a, b) => b[0].length - a[0].length);
  for (const [en, translated] of pairs) {
    let found = 0;
    for (const part of parts) {
      if (part.fixed) continue;
      for (const [open, close] of [['>', '<'], ['"', '"']]) {
        const from = `${open}${en}${close}`;
        const count = part.text.split(from).length - 1;
        if (count) part.text = part.text.split(from).join(`${open}${translated}${close}`);
        found += count;
      }
    }
    if (!found) throw new Error(`${lang} home: the English string is no longer in index.html: ${en.slice(0, 80)}`);
  }
  const translated = parts.map(part => part.text).join('');
  const leftover = textNodes(translated).filter(text => englishText.has(text) && !keep.includes(text));
  if (leftover.length) throw new Error(`${lang} home: English left untranslated, add it to content/${lang}/home.mjs: ${leftover.join(' | ')}`);
  return translated;
}

// Text written by hand in index.html, outside the component regions: what a
// translation has to cover. Names that stay the same in every language (the
// mix and track titles) are listed as `keep` in the content module.
const outsideComponents = page => page.replace(/<!-- component:(\S+):start -->[\s\S]*?<!-- component:\1:end -->/g, '')
  .replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/g, '');
const textNodes = page => [...outsideComponents(page).matchAll(/>([^<]*[A-Za-z][^<]*)</g)].map(match => match[1].trim()).filter(Boolean);

const template = fs.readFileSync(path, 'utf8');
fs.writeFileSync(path, components(template, 'en'));

for (const home of pages.filter(page => page.kind === 'home' && page.lang)) {
  const {lang, file, path: urlPath} = home;
  const {strings, keep} = await import(`./content/${lang}/home.mjs`);
  const canonical = `https://thecatrave.com${urlPath}`;
  let page = template
    .replace('<html lang="en">', `<html lang="${t(lang).htmlLang}">`)
    .replace('<link rel="canonical" href="https://thecatrave.com/">', `<link rel="canonical" href="${canonical}">`)
    .replace('<meta property="og:url" content="https://thecatrave.com/">', `<meta property="og:url" content="${canonical}">`)
    .replace('"url":"https://thecatrave.com/","description"', `"url":"${canonical}","description"`)
    .replace('"inLanguage":"en"', `"inLanguage":"${t(lang).inLanguage}"`);
  // a string that reads the same in both languages is translated by being kept
  const unchanged = strings.filter(([en, translated]) => en === translated).map(([en]) => en);
  page = translate(page, lang, [['Skip to content', t(lang).skipLink], ...strings], [...keep, ...unchanged], new Set(textNodes(template)));
  page = rootRelativeAssets(components(page, lang));
  fs.mkdirSync(file.slice(0, file.lastIndexOf('/')), {recursive: true});
  fs.writeFileSync(file, page);
}
