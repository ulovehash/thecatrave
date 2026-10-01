// Which pages does the browser layer need to look at for this push?
//
// Prints `all`, or a comma-separated list of route paths (empty when no page
// can have changed). Usage: node scripts/changed-routes.mjs <base-sha> [head].
//
// Generated pages are committed, so a template or builder change shows up as
// changes to every page it touches. The only way a page can change without its
// own .html appearing in the diff is through a shared runtime file (CSS, JS,
// selector data, test or CI config), and those widen the run to everything.
// Anything unknown, unreachable or missing also widens it: the cheap path may
// only be taken on positive evidence.
//
// Known gap: a shared asset that is not listed below (a font or image used by
// many pages) does not widen the run. Pull requests and manual runs always
// test every route, so it is caught there.

import { execFileSync } from 'node:child_process';
import { pages } from '../pages.mjs';

const [base, head = 'HEAD'] = process.argv.slice(2);
const ZERO = /^0+$/;

const SHARED = [
  /\.(css|js|ts|yml)$/,
  /^(package(-lock)?\.json|playwright\.config\.\w+|selector-data\.json)$/,
  /^(tests|scripts|\.github)\//,
];

function diff() {
  if (!base || ZERO.test(base)) return null;
  try {
    return execFileSync('git', ['diff', '--name-only', base, head], { encoding: 'utf8' })
      .split('\n').filter(Boolean);
  } catch { return null; }
}

const changed = diff();
if (!changed) { console.log('all'); process.exit(0); }

if (changed.some(file => SHARED.some(rule => rule.test(file)))) { console.log('all'); process.exit(0); }

const byFile = new Map(pages.map(page => [page.file, page.path]));
console.log(changed.filter(file => byFile.has(file)).map(file => byFile.get(file)).join(','));
