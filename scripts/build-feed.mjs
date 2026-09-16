// Build the site's RSS 2.0 feed from the same article catalogue that powers
// the homepage, /articles and Read Next. Publication dates and social images
// come from the generated pages, so the feed cannot silently drift from them.

import fs from 'node:fs';
import { allArticlesNewestFirst } from '../home-articles.mjs';

const SITE = 'https://thecatrave.com';
const FEED_URL = `${SITE}/feed.xml`;

const xml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const meta = (html, key, attribute = 'name') => {
  const tag = html.match(new RegExp(`<meta[^>]*\\s${attribute}="${key}"[^>]*>`, 'i'))?.[0];
  return tag?.match(/\scontent="([^"]*)"/i)?.[1];
};

const rssDate = value => {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.valueOf())) throw new Error(`Invalid RSS date: ${value}`);
  return date.toUTCString();
};

const articles = allArticlesNewestFirst().map(article => {
  if (!fs.existsSync(article.page)) throw new Error(`RSS source page is missing: ${article.page}`);
  const html = fs.readFileSync(article.page, 'utf8');
  const published = meta(html, 'article:published_time', 'property');
  const modified = meta(html, 'article:modified_time', 'property') || published;
  const image = meta(html, 'og:image', 'property');
  if (!published || !image) throw new Error(`RSS metadata is incomplete in ${article.page}`);
  return {...article, published, modified, image};
});

if (!articles.length) throw new Error('RSS feed needs at least one article.');

const lastBuildDate = rssDate(articles.reduce(
  (latest, article) => article.modified > latest ? article.modified : latest,
  articles[0].modified
));

const items = articles.map(article => {
  const link = `${SITE}${article.href}`;
  const categories = article.tags.map(tag => `    <category>${xml(tag)}</category>`).join('\n');
  return `  <item>
    <title>${xml(article.title)}</title>
    <link>${xml(link)}</link>
    <guid isPermaLink="true">${xml(link)}</guid>
    <pubDate>${rssDate(article.published)}</pubDate>
    <dc:creator>thecatrave</dc:creator>
    <description>${xml(article.description)}</description>
${categories}
    <media:content url="${xml(article.image)}" medium="image" width="1200" height="630" />
  </item>`;
}).join('\n');

const output = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>thecatrave</title>
  <link>${SITE}/</link>
  <description>Long-form guides to electronic music, DJ culture, scenes, festivals and the sounds around them.</description>
  <language>en-gb</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
  <image>
    <url>${SITE}/favicon.png</url>
    <title>thecatrave</title>
    <link>${SITE}/</link>
  </image>
${items}
</channel>
</rss>
`;

fs.writeFileSync('feed.xml', output);
console.log(`feed.xml: ${articles.length} articles`);
