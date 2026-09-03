# Quality gate

One command checks everything that decides whether a page renders correctly, stays
technically healthy, and can earn search traffic. It runs on every pull request to
`main` (`.github/workflows/check.yml`) and blocks the merge on any failure.

```bash
nvm use            # Node 20, pinned in .nvmrc
npm install
npx playwright install --with-deps chromium   # once
npm run check
```

Output is a short pass/fail list. Only failures need reading.

## Layers

| Layer | Command | Tool | Covers |
|---|---|---|---|
| Structure & SEO text | `npm run audit` | zero-dep `audit-*.mjs` + `audit-seo.mjs` | build succeeds, one H1, heading order, `<title>` 15–65, meta description 70–165, canonical self-referential and in `sitemap.xml`, OG/Twitter/JSON-LD complete and valid, alt text, intrinsic image dimensions, internal-link count, word count, `rel=noopener`, no mixed content, shared-component consistency, media adjacency rhythm, no clashing tone bands |
| Markup validity | `npm run check:html` | html-validate | malformed HTML, duplicate `id`, unlabelled inputs, `meta refresh`, WCAG markup rules |
| Links & assets | `npm run check:links` | linkinator | broken internal links, missing images/CSS/JS, dead outbound links |
| Layout & a11y | `npm run check:layout` | Playwright + axe-core | no horizontal overflow, homepage grid reflows to one orphan-free row on wide, Read Next 1/2/4 columns, full-bleed blocks do not clash with a toned section, images carry `width`/`height` (CLS), no serious/critical accessibility violations, at 375 / 834 / 1440 px |
| Performance & CWV | `npm run check:vitals` | Unlighthouse | site-wide Lighthouse: performance ≥ 0.9, accessibility ≥ 0.95, best-practices ≥ 0.95, SEO = 1, Core Web Vitals, crawlability, mobile-friendliness |

The zero-dependency layer (`node audit-all.mjs`) runs on any Node version; the
browser layers need Node 20.

## Adding a page

1. Add its generator to `scripts/build.mjs`.
2. Add its route to `tests/routes.ts` and its canonical to `audit-seo.mjs` + `sitemap.xml`.
3. Add its filename to `check:html` in `package.json` and `scripts/check.mjs`.
4. Run `npm run check`.
