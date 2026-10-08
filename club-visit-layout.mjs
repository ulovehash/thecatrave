import fs from 'node:fs';

// An explicit editorial mapping, not a heading-keyword guess. Existing content
// remains owned by each draft; only its placement and heading depth change here.
export const clubVisitLayouts = JSON.parse(fs.readFileSync(new URL('./content/club-visit-layouts.json', import.meta.url), 'utf8'));
const titles = {en: 'Plan your visit', de: 'Plane deinen Besuch', fr: 'Préparer votre visite'};

function sectionAt(html, id) {
  const open = [...html.matchAll(/<section\b[^>]*>/g)].find(m => m[0].includes(` id="${id}"`));
  if (!open) throw new Error(`Club visit layout: missing section ${id}`);
  let depth = 0;
  for (const tag of html.slice(open.index).matchAll(/<\/?section\b[^>]*>/g)) {
    depth += tag[0].startsWith('</') ? -1 : 1;
    if (!depth) {
      const end = open.index + tag.index + tag[0].length;
      const source = html.slice(open.index, end);
      const heading = source.match(/<h2>([\s\S]*?)<\/h2>/);
      if (!heading) throw new Error(`Club visit layout: no heading for ${id}`);
      return {source, title: heading[1], body: source.slice(heading.index + heading[0].length, -10)};
    }
  }
  throw new Error(`Club visit layout: unclosed section ${id}`);
}

export function practicalTableParagraphs(html) {
  return html.replace(/<div class="genre-table-wrap"[^>]*>\s*<table\b[^>]*>([\s\S]*?)<\/table>\s*<\/div>/g, (_, table) => {
    const headers = [...table.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)].map(m => m[1]);
    return [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row => {
      const cells = [...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(m => m[1]);
      if (!cells.length) return '';
      const details = cells.slice(1).map((cell, i) => headers.length > 2 ? `${headers[i + 1]}: ${cell}` : cell).join('; ');
      return `<p><strong>${cells[0]}.</strong> ${details}</p>`;
    }).join('\n');
  });
}

export function consolidateClubVisit(html, canonical, lang, renderSection, renderContents) {
  const config = clubVisitLayouts[new URL(canonical).pathname];
  if (!config || config.ready) return html;
  const title = config.title || titles[lang] || titles.en;
  const ids = config.sections;
  const bodies = [];
  for (const id of ids) {
    const section = sectionAt(html, id);
    let body = section.body;
    if (config.extract || config.extractCounts?.[id]) {
      const paragraphs = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)];
      let extracted;
      if (config.extractCounts?.[id]) {
        if (paragraphs.length <= config.extractCounts[id]) throw new Error(`Missing retained editorial content in ${id}`);
        extracted = paragraphs.slice(0, config.extractCounts[id]).map(p => p[0]).join('');
      } else if (config.extract === 'london-area') {
        extracted = paragraphs.find(p => /^(The clubs in this guide are mostly|Die Clubs in diesem Guide liegen|Les clubs de ce guide se trouvent)/.test(p[1]))?.[0];
      } else if (config.extract === 'first-two-paragraphs') {
        extracted = paragraphs.slice(0, 2).map(p => p[0]).join('');
      } else {
        const start = body.indexOf('<p>Vienna nightlife also');
        if (start < 0) throw new Error('Missing Vienna planning boundary');
        extracted = body.slice(0, start);
      }
      if (!extracted) throw new Error(`No practical copy extracted from ${id}`);
      let rest = section.source;
      if (config.extract === 'first-two-paragraphs' || config.extractCounts?.[id]) {
        for (const p of paragraphs.slice(0, config.extractCounts?.[id] || 2)) rest = rest.replace(p[0], '');
      } else rest = rest.replace(extracted, '');
      if (config.remainderTitles?.[id]) rest = rest.replace(`<h2>${section.title}</h2>`, `<h2>${config.remainderTitles[id]}</h2>`);
      html = html.replace(section.source, rest);
      body = extracted;
      bodies.push(`<h3>${config.subheading || section.title}</h3>${body}`);
    } else {
      html = html.replace(section.source, '');
      if (config.paragraphTables) body = practicalTableParagraphs(body);
      if (config.unwrap) bodies.push(`<span id="${id}"></span>${body}`);
      else {
        body = body.replace(/<(\/?)(h[3-5])\b/g, (_, close, tag) => `<${close}h${Number(tag[1]) + 1}`);
        bodies.push(`<h3 id="${id}">${section.title}</h3>${body}`);
      }
    }
  }
  const section = renderSection({id: 'visiting', title, bodyHtml: bodies.join('\n')});
  const heroEnd = html.indexOf('</header>') + 9;
  if (heroEnd < 9) throw new Error('Club visit layout needs an article hero');
  html = html.slice(0, heroEnd) + '\n' + section + html.slice(heroEnd);
  return html.replace(/<nav class="article-toc"[\s\S]*?<\/nav>/, nav => {
    const items = [...nav.matchAll(/<li><a href="#([^"]+)">([\s\S]*?)<\/a><\/li>/g)]
      .filter(m => config.extract || config.extractCounts?.[m[1]] || !ids.includes(m[1]))
      .map(m => ({id: m[1], label: (config.remainderTitles?.[m[1]] || m[2]).replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')}));
    return renderContents({lang, items: [{id: 'visiting', label: title}, ...items]});
  });
}
