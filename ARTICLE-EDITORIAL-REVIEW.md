# thecatrave article editorial review protocol

Use this protocol for every substantial new article or rewrite after the outline and draft are approved, but before final layout. It turns the three mandatory reviews in `ARTICLE-PRODUCTION-WORKFLOW.md` into a repeatable editorial process.

Read `ARTICLE-PRODUCTION-WORKFLOW.md` and `AGENTS.md` first. This file does not replace the research, approval or preservation stages.

## 1. Required review inputs

Do not begin a final review without:

- the approved primary intent and excluded intents;
- the current draft;
- the Search Console preservation inventory for an existing URL;
- the Ahrefs validation table and inspected competitor matrix;
- the semantic kernel and approved outline;
- fact-check sources and known uncertainties;
- the media and listening matrix;
- the existing article or previous draft when rankings must be preserved.

If an input is missing, identify it instead of inventing evidence.

## 2. Review one: facts, terminology and timeline

Check every claim that could reasonably be disputed or dated:

- origins, dates, chronology and relationships between scenes;
- whether a term was used at the time or applied retrospectively;
- artist, label, venue, city, radio-station and technology roles;
- release dates, track titles, credits and claims of firsts;
- differences between rhythm, genre, scene and marketing label;
- contested histories, especially claims about one inventor or one decisive record;
- current claims that may have changed since the source was published;
- predictions, which must be labelled as inference and supported by current evidence.

Prefer primary sources, artist or label interviews, archives, books, academic research and reputable specialist publications. Wikipedia may be used as a discovery map, not as the only support for a disputed claim.

Create a claim ledger for material corrections:

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Exact wording from the draft | fact, interpretation or prediction | URL or publication | high, medium or low | keep, qualify, correct or remove |

Do not force a clean origin story when credible sources disagree. Name the disagreement in natural language.

## 3. Review two: senior electronic-music editor and language

Read the draft as a complete magazine article, not as isolated SEO sections.

### Editorial completeness

- Does the opening answer the main reader question quickly?
- Is there a clear narrative spine through eras, scenes, records, people and technology?
- Are important transitions explained rather than presented as a list of dates?
- Does each section add a new idea?
- Are Black British, Caribbean, regional and underground contributions represented accurately where relevant?
- Does the ending synthesise the subject instead of merely stopping before the FAQ?
- Are exact tracks placed where the prose discusses them?
- Do media artefacts deepen the argument rather than decorate it?

### Human voice and rhythm

- Remove generic enthusiasm, inflated metaphors and empty scene-setting.
- Remove repetitive openings, symmetrical paragraph templates and repeated conclusions.
- Vary sentence and paragraph length without becoming mannered.
- Replace abstractions with concrete records, labels, rooms, cities, equipment and audible details.
- Remove overconfident claims and false precision.
- Do not use em dashes.
- Keep `thecatrave` lowercase and unspaced.
- Do not impose an arbitrary word limit or cut material only to make the layout easier.

Flag only changes that materially improve accuracy, narrative, usefulness or voice. Do not bury the review in cosmetic preferences.

## 4. Review three: SEO preservation and semantic coverage

Evaluate the article against its approved intent, not against the broadest possible keyword set.

- The title, meta description and H1 must express the same primary intent without being identical boilerplate.
- The primary question must receive a concise visible answer near the beginning.
- Proven Search Console language must remain represented naturally when it is still accurate and relevant.
- Every H2 needs both a reader job and an SEO job.
- Close secondary queries may expand the page only when they share the same intent.
- Terms belonging to a different intent must be excluded or assigned to another page.
- Required entities, eras, technologies, artists and comparisons must be covered where they help topical completeness.
- Existing anchors, useful facts, internal links, media and cited references must be checked against the preservation inventory.
- FAQ questions must come from real search language or a demonstrated reader gap, must remain within intent and must not duplicate the body mechanically.
- Visible FAQ content and `FAQPage` structured data must match exactly.
- Internal links should help the reader continue into a genuinely related article, not merely distribute keywords.
- Dates, canonical, metadata, Article schema, Breadcrumb schema and visible update information must agree.

Do not recommend keyword stuffing, unrelated high-volume sections, artificial length or a URL change as a default SEO tactic.

## 5. Media and layout readiness review

Before implementation, verify that the media matrix creates a readable rhythm:

- exact tracks support specific claims and playlists are labelled as extended routes;
- every player is directly playable and has a verified exact URL;
- images support evidence, identity, geography, technology or chronology;
- the intended sequence contains meaningful text between figures and embeds;
- image dimensions and natural aspect ratios suit their planned presentation;
- low-resolution media is not enlarged beyond what its detail supports;
- transparent artefacts have genuine transparency;
- captions explain relevance rather than licensing housekeeping;
- original graphics answer one clear question and have a mobile alternative.
- the final Bandcamp stripe contains one to three releases that genuinely connect to the article, explains that connection in its copy and is planned as a true viewport-width block rather than a wide box inside the prose column.

Use the shared components documented in `SITE-COMPONENTS.md`. Editorial review must not solve layout problems by shortening approved copy.

## 6. Required review output

Save the review as `<slug>-editorial-review.md` and use this structure:

1. **Verdict:** ready, ready after revisions, or blocked.
2. **What already works:** the strongest editorial, factual and search elements that must not be damaged.
3. **Priority revisions:** only high-impact changes, ordered by severity.
4. **Fact-check ledger:** disputed or corrected claims with sources and confidence.
5. **SEO preservation:** language, anchors, sections and entities that must survive implementation.
6. **Coverage gaps:** only gaps supported by intent, evidence or reader need.
7. **Cuts or merges:** repetition, filler or off-intent material, with reasons.
8. **Media actions:** exact additions, removals, replacements and placements.
9. **Unresolved questions:** decisions requiring user approval or stronger evidence.
10. **Final acceptance checklist:** clear pass or fail for facts, editorial quality, SEO preservation, media and implementation readiness.

Use three severity levels:

- **Blocker:** factual, intent, preservation or structural problem that prevents publication.
- **Major:** meaningful weakness in completeness, narrative, evidence, search coverage or media logic.
- **Minor:** useful polish that does not affect the publication decision.

## 7. Acceptance standard

An article is ready for layout only when:

- no factual blocker remains;
- disputed claims are qualified appropriately;
- the primary intent is answered completely without absorbing another intent;
- preservation requirements are explicit;
- the story reads as authored music journalism rather than assembled search copy;
- track and media choices are exact and contextually placed;
- the review identifies no unresolved major structural issue.

After layout, run the repository audits and visual QA described in `ARTICLE-PRODUCTION-WORKFLOW.md`. A strong editorial review does not replace technical, responsive or embed verification.
