import fs from 'node:fs';
import {
  articleFaq, articleFigure, articleHero, articlePage, articleSection,
  articleSources, articleStructuredData, articleTable, articleVideoCard,
  articleVideoCollection, authorCard, bandcampSupport, breadcrumbStructuredData,
  faqStructuredData, infoBanner, ownSetListening, readNext
} from './site-components.mjs';
import {relatedArticles} from './home-articles.mjs';
import {alternatesFor} from './pages.mjs';

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(value) {
  let text = escapeHtml(String(value));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function buildFestivalArticle(config) {
  const draft = fs.readFileSync(config.draft, 'utf8');
  const getSection = heading => {
    const start = draft.indexOf(`\n## ${heading}\n`);
    if (start < 0) throw new Error(`Missing section: ${heading}`);
    const bodyStart = draft.indexOf('\n', start + 1) + 1;
    const next = draft.indexOf('\n## ', bodyStart);
    return draft.slice(bodyStart, next < 0 ? draft.length : next).trim();
  };
  const paras = text => text.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
    .filter(p => !/^\[(?:Table|Image|Embed):/.test(p));
  const join = list => list.map(p => `<p>${inline(p)}</p>`).join('\n');
  const sectionParas = Object.fromEntries(config.sections.map(section => [section.heading, paras(getSection(section.heading))]));
  const answer = paras(getSection('Answer'));
  const intro = paras(getSection('Introduction'));
  const faqItems = getSection('FAQ').split(/(?:^|\n)### /).filter(Boolean).map(block => {
    const [q, ...rest] = block.split('\n');
    const body = rest.join('\n').trim();
    return {
      question: q.trim().replace(/\?*$/, '?'),
      answer: body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' '),
      answerHtml: join(paras(body))
    };
  });
  const figures = Object.fromEntries(Object.entries(config.figures).map(([key, figure]) => [key, articleFigure(figure)]));
  const video = articleVideoCollection({
    label: 'Essential listening',
    description: config.video.description,
    items: (config.video.cards || [config.video.card]).map(articleVideoCard)
  });
  const facts = articleTable({headers: ['Fact', 'Current information'], rows: config.facts, label: config.factsLabel});
  const bodies = {};
  for (const section of config.sections) {
    const p = sectionParas[section.heading];
    let body = join(p);
    if (section.tableAfter != null) body = `${join(p.slice(0, section.tableAfter))}${facts}${join(p.slice(section.tableAfter))}`;
    if (section.figureAfter != null) body = `${join(p.slice(0, section.figureAfter))}${figures[section.figure]}${join(p.slice(section.figureAfter))}`;
    if (section.videoAfter != null) body = `${join(p.slice(0, section.videoAfter))}${video}${join(p.slice(section.videoAfter))}`;
    if (section.ownSet === 0) body += ownSetListening(0, 'en', config.ownSetCopy[0]);
    if (section.ownSet === 1) body += ownSetListening(1, 'en', config.ownSetCopy[1]);
    bodies[section.heading] = body;
  }
  const readingTime = `${Math.max(7, Math.round(draft.split(/\s+/).length / 225))} min read`;
  const datePublished = '2026-09-29';
  const dateModified = '2026-09-29';
  const articleHtml = [
    articleHero({
      kicker: config.kicker, title: config.h1, deck: config.deck,
      readingTime, dateModified, dateLabel: '29 September 2026',
      summaryHtml: infoBanner({label: config.answerLabel, bodyHtml: inline(answer[0]), className: 'article-summary'}),
      tocItems: config.sections.map(section => ({id: section.id, label: section.toc}))
    }),
    articleSection({id: 'introduction', title: config.introTitle, bodyHtml: join(intro), className: 'article-intro'}),
    ...config.sections.map(section => articleSection({id: section.id, title: section.title, kicker: section.kicker, bodyHtml: bodies[section.heading]})),
    articleFaq({items: faqItems, title: `${config.shortName} FAQ.`, openFirst: true}),
    authorCard({filled: true}),
    articleSources({bodyHtml: `<ul>${config.sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a></li>`).join('')}</ul>`}),
    bandcampSupport({
      fullBleed: true,
      description: config.bandcampCopy,
      tracks: [
        {title: 'Berlin Race 1909', id: '3192532299', url: 'https://thecatrave.bandcamp.com/track/berlin-race-1909', linkText: 'Berlin Race 1909 by thecatrave'},
        {title: '60 hours of mistakes', id: '3330948631', url: 'https://thecatrave.bandcamp.com/track/60-hours-of-mistakes', linkText: '60 hours of mistakes by thecatrave'}
      ]
    }),
    readNext({items: relatedArticles(config.output)})
  ].join('\n');
  const structuredData = [
    articleStructuredData({headline: config.seoTitle, description: config.description, canonical: config.canonical, datePublished, dateModified}),
    breadcrumbStructuredData({name: config.shortName, canonical: config.canonical}),
    faqStructuredData({items: faqItems})
  ];
  const html = articlePage({
    title: config.seoTitle, description: config.description, canonical: config.canonical,
    alternates: alternatesFor(new URL(config.canonical).pathname), ogImage: `https://thecatrave.com/${config.ogImage}`,
    datePublished, dateModified, bodyClass: `article-page ${config.bodyClass}`,
    structuredData, articleHtml
  });
  fs.writeFileSync(config.output, html);
  console.log(`Built ${config.output}`);
}
