# SEO

Run against the `searchfit-seo` audit and on-page checklists, on all 287 pages.

The site already runs `audit-seo.mjs` on every build. It checks:

- one H1 and no heading-level jumps
- the title (15–65 characters, unique) and the meta description (70–165 characters, unique)
- the canonical: present, absolute https, self-referential and in the sitemap
- `<html lang>`, the viewport, noindex and nofollow
- Open Graph and Twitter card tags, with the og:image file at 1200×630
- an alt attribute on every image, and descriptive alt in figures
- insecure subresources
- `robots.txt`, `sitemap.xml` and the feed

All of it passes. Core Web Vitals, contrast and touch targets are covered by
the Playwright and Lighthouse layer (`npm run check:layout`), which passed
1,154 tests on 4 November.

This pass added the checks that audit doesn't make.

---

## Critical

- **48 H2s read "undefined"** on the German, French and Spanish house and
  techno guides (6 pages). Search engines read headings as a summary of the
  page, so these six pages tell them nothing about eight of their ten
  sections. Fix and new check: see
  [draft-leakage.md, section 1](draft-leakage.md#1-headings-that-render-as-undefined-critical).

## High

- **Keyword wedges and stuffed headings** on 13 English guides. Google's
  spam policies name keyword stuffing directly, and phrases like "the best
  techno club Belgrade has" read as written for a crawler. Details and
  rewrites: [keyword-spam.md](keyword-spam.md).
- **14 Spanish subheadings print as "### …"**, so they are paragraph text
  with no heading structure. See [draft-leakage.md, section 2](draft-leakage.md#2-subheadings-printed-as---high).

## Medium

- **FAQ questions padded with keyword variants** on 7 English pages and
  their translations. Google shows FAQ rich results only for authoritative
  government and health sites, so the extra questions add no search feature
  and make the FAQ read as written for search. See
  [keyword-spam.md, section 3](keyword-spam.md#3-faq-questions-padded-with-keyword-variants-medium).

## Added checks that pass

| Check | Result |
|---|---|
| FAQ structured data matches the visible FAQ | 1,540 questions, all visible word for word |
| JSON-LD parses | Every block on every page |
| Hreflang links return | Every alternate links back; no target missing |
| Orphan pages | None: every page has at least one internal link in |
| Thin pages (under 900 words of prose) | None among the guides |
| Title and H1 describe the same thing | Every page shares key words between them |
| Alt text keyword stuffing | None |
| Internal anchor over-optimisation | None beyond navigation links |

## Recommended new checks for `audit-seo.mjs`

1. Fail on any heading whose text is `undefined`, `null`, empty, or starts with `#`.
2. Warn when more than a third of a page's H2 and H3 headings contain the page's full two-word seed phrase.
3. Warn when two FAQ answers on one page share more than 60% of their words.
