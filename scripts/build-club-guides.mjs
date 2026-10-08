// Rebuild only the club guides affected by the shared visit layout.
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {pages} from '../pages.mjs';
import {clubVisitLayouts} from '../club-visit-layout.mjs';
import {buildLocalizedArticle} from '../build-localized-articles.mjs';
const selected = pages.filter(page => clubVisitLayouts[page.path]);
for (const generator of new Set(selected.filter(page => !page.lang || page.lang === 'en').map(page => page.generator))) {
  execFileSync(process.execPath, [generator], {stdio: 'inherit'});
}
for (const page of selected.filter(page => page.lang && page.lang !== 'en')) {
  const {default: content} = await import(pathToFileURL(`${process.cwd()}/content/${page.lang}/${page.name.replace(/^[a-z]{2}-/, '')}.mjs`));
  buildLocalizedArticle(content);
}
console.log(`Built ${selected.length} club guides.`);
