# Editorial review: why-dj-mag-top-100-never-changes (6 October 2026)

Self-review by the author of the page, not an independent ruling. Run ARTICLE-EDITORIAL-REVIEW.md with a separate reviewer before publishing.

- Facts: every claim traces to `famous-djs-research.md` and the 6 October re-read of sources. Garrix quote read via EDMTunes only. Origin year conflict (DJ Mag 1993, Wikipedia and EDMTunes 1991); the page follows DJ Mag.
- Catalogue counts recounted 6 October 2026 against selector-data.json (case-insensitive; Dimitri Vegas & Like Mike is stored as "Dimtri").
- Keywords: `dj mag top 100`, `famous djs`, `top 100 djs`, `most famous djs`, `famous djs of all time`, `famous house djs` are on the page. Six measured terms are not (see keywords/why-dj-mag-top-100-never-changes.json, rejected).
- Media: seven official YouTube uploads, none used elsewhere. No hero photo. OG and homepage card reuse the Lot Radio photo (exception to workflow §7).
- Open: 2026 results unpublished on 6 October 2026; refresh table, intro, FAQ and genre crowns when out.

## Follow-up review: listening-section structure

- The owner rejected the `Listen` heading, one-line introduction and repeated artist-heading/player sequence. The approved revision names all three artists in the H2, explains what the Selector count and DJ Mag vote each measure in a full paragraph, and groups the three official uploads in one `Essential listening` block.
- No factual claim was added. The revised paragraph retains the already reviewed Selector counts, 2025 positions and awards, recording lengths, platforms and locations from the previous three artist notes.
- Language check: `rg -ni "complete|full|whole|uninterrupted|an hour|in full|not .* but|matters|the point|Wikipedia" famous-djs-draft.md` returned no hit in the revised section. Existing hits elsewhere in the draft were outside this approved change.
- Build evidence: `node build-why-dj-mag-top-100-never-changes-article.mjs`, `node audit-site-components.mjs`, `html-validate why-dj-mag-top-100-never-changes.html` and `git diff --check` passed. Browser checks found no horizontal overflow at 1280px or 390px; the video grid renders three equal columns above 760px and one column at 390px.
