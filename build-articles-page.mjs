// The /articles page: every article in the catalogue, newest first.
//
// The homepage only has room for the newest eight, so without this page an
// older guide was reachable only through Read Next on a related one. The list
// comes from home-articles.mjs, the same catalogue as the homepage and Read
// Next: publishing a new article puts it at the top here with no edit to this
// file.
import fs from 'node:fs';
import {allArticlesNewestFirst} from './home-articles.mjs';
import {articleHero, articlePage, articlesIndex, breadcrumbStructuredData} from './site-components.mjs';

const canonical = 'https://thecatrave.com/articles';
const title = 'All Articles: Guides to Dance Music and Club Culture';
const description = 'Every thecatrave article in one place, newest first: long guides to dance music genres, club culture, DJ sets and the scenes behind them.';
const items = allArticlesNewestFirst();

const articleHtml = [
  articleHero({
    kicker: 'Articles',
    title: 'All articles.',
    deck: 'Long guides to dance music and club culture, written for listeners.'
  }),
  // The heading is for screen readers and the h1 > h2 > h3 outline only; the
  // hero already says what the list is.
  articlesIndex({items, title: 'Every article'})
].join('\n');

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: canonical,
    inLanguage: 'en-GB',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://thecatrave.com${item.href}`,
        name: item.title
      }))
    }
  },
  breadcrumbStructuredData({name: 'Articles', canonical})
];

const html = articlePage({
  title, description, canonical,
  // Built by scripts/build-og-cards.py from the articles' own card covers.
  ogImage: 'https://thecatrave.com/img/og/articles.jpg',
  ogType: 'website',
  bodyClass: 'article-page articles-page',
  structuredData, articleHtml
});

fs.writeFileSync('articles.html', html);
console.log(`Built articles.html — ${items.length} articles`);
