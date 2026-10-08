# thecatrave article editorial review protocol

Use this protocol for every substantial new article or rewrite after the outline and draft are approved, but before final layout. It turns the three mandatory reviews in `ARTICLE-PRODUCTION-WORKFLOW.md` into a repeatable editorial process.

Read `ARTICLE-PRODUCTION-WORKFLOW.md` and `AGENTS.md` first. This file does not replace the research, approval or preservation stages.

## 0. Evidence standard: a pass with no evidence is a fail

Added 2026-09-30 after twelve guides passed review carrying "complete" and "full" wording on DJ sets, a jungle aside on a non-dnb guide, thin festival listening, a wrong "five consecutive" poll fact, Wikipedia cited in the body and banners repeating the first paragraph. The review files said "pass" and "humanizer ran, found nothing". None of them showed what was checked.

- **Every "pass" in §10 names its evidence:** the command run, the phrase searched, the URL opened or the line quoted. "Pass" alone is recorded as "not checked".
- **Run the greps before writing "pass".** On the built page text, search for: `complete`, `full`, `whole`, `uninterrupted`, `an hour`, `in full` next to any mix, set or recording; `jungle`, `drum and bass`, `breaks` on any guide that is not about them; `Wikipedia` in the body; `not .* but`; `matters`; `the point`. Paste the hits and the decision on each. Zero hits is a valid result and is written as such.
- **Every dated, numeric or "first / most / largest / consecutive" claim gets a ledger row with a URL you opened.** A source named from memory, or "widely reported", is confidence low. A run of years is checked year by year against the poll or chart page, not accepted as a range.
- **Wikipedia is never the "best source" in the ledger** for a disputed claim, and never named in the body. If the only support is Wikipedia, the claim is qualified or cut.
- **Superlatives need the sentence that proves them.** "No other genre matched", "largest audience ever" and similar are cut unless a source states them.
- **Compare the banner, first section and FAQ answer.** If two of them share a sentence, rewrite one.
- **Festival and series guides:** for each embedded set, record the view count or best-of list that justifies it, the channel it comes from and the oEmbed result (`festivals-series.md`). One embed with no evidence is a Major.
- **Cross-guide links and reuse:** list every internal link and every reused mix, set or image, and say why each belongs on this page. A link to the jungle or drum and bass guide from another genre's guide needs a section that is about that music.
- **The owner's own mixes, sets and Bandcamp tracks are promotion and stay.** Do not cut them. Check only that they are disclosed and not described as "best", "full" or "complete", and that no lineage claim is invented for them.
- **Humanizer record:** paste three before/after sentences it changed. If it changed nothing, say so and quote the three sentences that were checked.
- **Stage 6 (topic research validation)** is separate from this review. State whether it was run and by whom. If the reviewer also gathered the evidence, say the review is not independent.
- **Re-review after any later edit** to the draft or builder. A review dated before the last edit does not cover it.

## 1. Required review inputs

Do not begin a final review without:

- the approved primary intent and excluded intents;
- the current draft;
- the Search Console preservation inventory for an existing URL;
- the keyword validation table and inspected competitor matrix;
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
- for every club in a city, country or roundup guide: music, atmosphere/crowd, location and usual nights, entry/queue/door policy, dress and age rules, upcoming-events route, safety/access/transport and an evidence-based local-versus-tourist verdict; also verify the direct Google Maps, venue-specific Resident Advisor or official-event and club links required by `AGENTS.md`;

Prefer primary sources, artist or label interviews, archives, books, academic research and reputable specialist publications. Wikipedia may be used as a discovery map, not as the only support for a disputed claim.

Create a claim ledger for material corrections:

| Claim | Type | Best source | Confidence | Required action |
|---|---|---|---|---|
| Exact wording from the draft | fact, interpretation or prediction | URL or publication | high, medium or low | keep, qualify, correct or remove |

Do not force a clean origin story when credible sources disagree. Name the disagreement in natural language.

## 3. Review two: senior electronic-music editor and language

This review is the `humanizer` pass (`ARTICLE-PRODUCTION-WORKFLOW.md` §6; owner, 2026-09-24). Running the skill on the draft, with a published guide as the voice sample, is the review. The checklist below is what that pass must leave true, not a second review to write up. In the saved review file, record that the humanizer ran and what it changed.

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

### AI writing tells

Run the draft through the `humanizer` skill first (`ARTICLE-PRODUCTION-WORKFLOW.md` §6), then check that none of these survived:

- "Not X but Y" contrasts that argue with nobody ("This isn't just a club, it's a movement"). Keep a contrast only when it corrects something readers really believe ("Jungle did not simply change its name to drum and bass").
- One-line closers that restate the paragraph, and staged openers ("That distinction matters.", "The timing is the point.", "In other words…").
- A conclusion that repeats a line from an earlier section.
- Stock AI vocabulary: crucial, enduring, vibrant, pivotal, landscape, testament, delve; in German *unverzichtbar*, *eintauchen*, *Kulturartefakt*; in French *incontournable*, *emblématique*, *véritable*.
- "Welcome to the ultimate guide", "we'll explore", "dive into", and scenes that invent a moment instead of stating a fact ("Picture East London in 1992…").

### Research-process commentary

Reject generic explanations of sourcing, fact-checking, date verification or how the article handles disagreements. Run `node audit-banned-phrases.mjs` for known English, German and French process-note regressions; also inspect meaning because the automated rules cannot catch every paraphrase. These belong in internal records, not published copy. Check every language. Retain substantive selection criteria, direct citations, claim-specific uncertainty and required image credits.

### Site-voice rules

These are enforced on every build by `audit-banned-phrases.mjs`, in English, German and French. The reviewer still checks the idea, because a reworded version of a banned phrase passes the audit and breaks the rule just the same.

- A DJ set is never "full", "complete" or "the whole set", and its length is not sold as a feature (`WRITING.md`).
- No genre is "what this site cares about most" (`WRITING.md`).
- Not every article is about breaks, jungle or drum and bass. On a festival, club or city guide: no aside to "a listener who comes from breaks, jungle or drum and bass", no "the music this site comes from", no paragraph on how little drum and bass a place books, no link to the drum and bass or jungle guide unless that section is about the music, and no drum and bass line in the Bandcamp card (`WRITING.md`, `festivals-series.md`).

### Translations

- A German or French page says what its English page says. It does not add sentences (such as a Bandcamp line) that the English does not have.
- Every approved change to the English copy is carried to both translations in the same pass, with the translated wording shown for approval (`ARTICLE-PRODUCTION-WORKFLOW.md` §6).

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
- every Essential-listening block is `tone: 'cyan'` and no body section is toned (one-colour rule, `AGENTS.md` section 10);
- images support evidence, identity, geography, technology or chronology;
- every image is Creative Commons, public domain or licensed to us, localised to `img/<guide>/` as responsive `webp`, never hotlinked; rights-reserved press or agency photos are rejected regardless of a user offer to handle rights later;
- the intended sequence contains meaningful text between figures and embeds;
- image dimensions and natural aspect ratios suit their planned presentation;
- low-resolution media is not enlarged beyond what its detail supports;
- transparent artefacts have genuine transparency;
- captions explain relevance rather than licensing housekeeping, except the required `Photograph: <author>, <licence>.` tail for `CC BY` / `CC BY-SA` images;
- original graphics answer one clear question and have a mobile alternative.
- the single Bandcamp support block features one release chosen for the article, links directly to that release for purchase and separately to the full catalogue, does not invent a connection to the subject, and remains readable as an early inline block on narrow screens or a compact sticky rail on wide desktop.

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
10. **Final acceptance checklist:** clear pass or fail for facts, editorial quality, SEO preservation, media and implementation readiness, each with the evidence required by §0.

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

## 8. Reconcile the review with implementation and publication

The review remains part of the permanent handoff after layout. Before an authorised push, compare its recommendations with the implemented generator and generated page:

- mark material recommendations as implemented, superseded or intentionally rejected;
- record final media, listening, metadata and structural decisions when they differ from the reviewed proposal;
- remove unresolved warnings only when evidence or user approval actually resolved them;
- keep Search Console preservation requirements visible for later performance monitoring;
- ensure the page-specific media or research record names the assets that were ultimately published, not only earlier candidates.

After every authorised push, include this review and its related research artefacts in the documentation-parity check defined in `ARTICLE-PRODUCTION-WORKFLOW.md`. If the pushed page differs materially from the accepted review, the publishing cycle is not complete until the handoff explains that difference and any required follow-up push is explicitly authorised.
