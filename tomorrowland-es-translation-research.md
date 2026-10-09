# Spanish batch 1: Tomorrowland (es)

Date: 9 October 2026. Tool: Google Ads Keyword Planner, owner's account, driven
in the owner's Chrome. Two passes on the same seeds: Spain, then Mexico,
Argentina, Colombia and Chile summed. Ranges are Keyword Planner's buckets.
Data: `keywords/es-tomorrowland.json`.

## Decisions

- **Variant (owner, 2026-10-09): one neutral Spanish with Spain spellings.** Demand
  measured so far is Spanish, Latin America is not clearly larger on the head
  terms. Re-check in Search Console on `/es` once live.
- **Head term:** tomorrowland 10K-100K; tomorrowland 2027 1K-10K; tomorrowland
  winter 1K-10K; qué es tomorrowland 100-1K. Slug `/es/tomorrowland-festival`.
- **Not targeted:** entradas, precio, cartel, camping, en directo, incendio
  (transactional, dated or news). `tomorrowland dónde es`, `asistentes` and
  `dueño` are unnatural word orders; the questions are answered in H2s and the
  FAQ without forcing the phrase.
- **hreflang:** the builder emits a single `es` (not the `es` plus `es-ES`
  pair the prompt asked for); `alternatesFor()` uses one code per language.
- **Images:** the English guide's own files, with Spanish alt text and captions.
  No SVG with English text on this page.
- **Index:** `/es/articulos` carries a short intro because a one-guide list fails
  the thin-page SEO audit; the intro points to the English index.

## Not done / open

- The live es-ES Google SERP was blocked by a bot check and was not bypassed.
  Shape came from WebSearch. A People-also-ask read is open.
- The GA4 page-level check of the 26 pages was not done; the language choice
  rests on the country-level export.
- `tomorrowland asistentes` and `dueño` are unmeasured (no row returned).
- The Spanish page has no `festival-editions` entry, like the German and French
  festival translations (open defect `translated-festival-guides-no-editions-entry`).
