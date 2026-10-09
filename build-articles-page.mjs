// The /articles page: every article in the catalogue, newest first.
//
// The homepage only has room for the newest eight, so without this page an
// older guide was reachable only through Read Next on a related one. The list
// comes from home-articles.mjs, the same catalogue as the homepage and Read
// Next: publishing a new article puts it at the top here with no edit to this
// file.
//
// One index per language, from that language's catalogue. A German reader who
// arrives on a translated guide and follows "Artikel" in the header gets the
// German list, not the English one.
import fs from 'node:fs';
import path from 'node:path';
import {allArticlesNewestFirst} from './home-articles.mjs';
import {articleHero, articlePage, articleSection, articlesIndex, breadcrumbStructuredData} from './site-components.mjs';
import {t} from './i18n.mjs';

const indexes = [
  {
    lang: 'en',
    file: 'articles.html',
    canonical: 'https://thecatrave.com/articles',
    title: 'Electronic Music Genres, Clubs and Festivals: All Guides',
    description: 'Every thecatrave article in one place, newest first: long guides to dance music genres, club culture, DJ sets and the scenes behind them.',
    kicker: 'Articles',
    heading: 'Electronic music genres, scenes and festivals.',
    deck: 'Long guides to dance music genres and the clubs, raves and festivals behind them.',
    listTitle: 'Every article',
    breadcrumb: 'Articles'
  },
  {
    lang: 'de',
    file: 'de/artikel.html',
    canonical: 'https://thecatrave.com/de/artikel',
    title: 'Elektronische Musik: Festivals, Clubs und Genres – alle Guides',
    description: 'Alle deutschsprachigen Artikel von thecatrave, die neuesten zuerst: ausführliche Guides zu Festivals, Dance Music und Clubkultur.',
    kicker: 'Artikel',
    heading: 'Elektronische Musik, Festivals und Clubs.',
    deck: 'Ausführliche Guides zu Festivals, Clubs und Genres der elektronischen Musik, geschrieben für Hörerinnen und Hörer.',
    listTitle: 'Alle Artikel',
    breadcrumb: 'Artikel'
  },
  {
    lang: 'fr',
    file: 'fr/articles.html',
    canonical: 'https://thecatrave.com/fr/articles',
    title: 'Musique électronique : festivals, clubs, genres, tous les guides',
    description: 'Tous les articles de thecatrave en français, du plus récent au plus ancien : des guides détaillés sur les festivals, la dance music et la culture club.',
    kicker: 'Articles',
    heading: 'Musique électronique, festivals et clubs.',
    deck: 'Des guides détaillés sur les festivals, les clubs et les genres de la musique électronique, écrits pour celles et ceux qui écoutent.',
    listTitle: 'Tous les articles',
    breadcrumb: 'Articles'
  },
  {
    lang: 'es',
    file: 'es/articulos.html',
    canonical: 'https://thecatrave.com/es/articulos',
    title: 'Música electrónica: festivales, clubes y géneros, todas las guías',
    description: 'Todos los artículos de thecatrave en español, del más reciente al más antiguo: guías largas sobre festivales, música de baile y cultura club.',
    kicker: 'Artículos',
    heading: 'Música electrónica, festivales y clubes.',
    deck: 'Guías largas sobre festivales, clubes y géneros de la música electrónica, escritas para quien escucha.',
    listTitle: 'Todos los artículos',
    breadcrumb: 'Artículos',
    // Spanish has one guide so far; the intro keeps the index from being a bare
    // list and points to the English guides that are not yet translated.
    introTitle: 'Qué hay aquí y qué viene.',
    introHtml: '<p>Esta es la parte en español de thecatrave, un sitio sobre música electrónica y cultura club escrito por alguien que hace breakbeat y jungle. Las guías son largas, citan sus fuentes y están pensadas para quien escucha, no para quien produce. Por ahora hay cinco guías en español: <a href="/es/discotecas-ibiza">Discotecas Ibiza: Pacha, Amnesia, Hï y las demás</a>, <a href="/es/festival-glastonbury">Festival de Glastonbury: qué es, dónde es y fechas de 2027</a>, <a href="/es/monegros-desert-festival">Monegros Desert Festival 2027: fecha, historia y cómo llegar</a>, <a href="/es/sonar-barcelona">Sónar Barcelona: qué es, dónde es y fechas de 2027</a> y <a href="/es/tomorrowland-festival">Tomorrowland: qué es, dónde es y cuándo es en 2027</a>.</p><p>Las demás guías del sitio siguen en inglés y se van traduciendo una a una. Mientras tanto puedes leer todas en el <a href="/articles">índice en inglés</a>, o dejar que <a href="/selector">el Selector</a> te ponga una sesión de DJ al azar entre miles de grabaciones. Cuando una guía nueva llegue al español, aparecerá en esta página, la más reciente primero.</p>'
  }
];

for (const index of indexes) {
  const items = allArticlesNewestFirst(index.lang);
  const {lang, canonical, title, description} = index;

  const articleHtml = [
    articleHero({
      lang,
      kicker: index.kicker,
      title: index.heading,
      deck: index.deck
    }),
    ...(index.introHtml ? [articleSection({title: index.introTitle, bodyHtml: index.introHtml})] : []),
    // The heading is for screen readers and the h1 > h2 > h3 outline only; the
    // hero already says what the list is.
    articlesIndex({items, title: index.listTitle, lang})
  ].join('\n');

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: canonical,
      inLanguage: t(lang).inLanguage,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: items.length,
        itemListElement: items.map((item, position) => ({
          '@type': 'ListItem',
          position: position + 1,
          url: `https://thecatrave.com${item.href}`,
          name: item.title
        }))
      }
    },
    breadcrumbStructuredData({lang, name: index.breadcrumb, canonical})
  ];

  const html = articlePage({
    lang,
    alternates: indexes.map(other => ({lang: other.lang, href: other.canonical})),
    title, description, canonical,
    // Built by scripts/build-og-cards.py from the articles' own card covers.
    ogImage: 'https://thecatrave.com/img/og/articles.jpg',
    ogType: 'website',
    bodyClass: 'article-page articles-page',
    structuredData, articleHtml
  });

  fs.mkdirSync(path.dirname(index.file), {recursive: true});
  fs.writeFileSync(index.file, html);
  console.log(`Built ${index.file} — ${items.length} articles`);
}
