# thecatrave article production workflow

This is the cold-start guide for an agent working on a new or existing thecatrave article without access to prior conversations. Read this file first, then read `AGENTS.md`, `ARTICLE-EDITORIAL-REVIEW.md` and `SITE-COMPONENTS.md` completely before researching, writing or editing code.

## 1. What each file controls

- `AGENTS.md`: permanent editorial, SEO, factual, media, layout, responsive and approval rules.
- `ARTICLE-EDITORIAL-REVIEW.md`: the repeatable factual, senior-editor, language and SEO-preservation review protocol.
- `SITE-COMPONENTS.md`: the reusable component API, design contract, build commands and integration rules.
- `site-components.mjs`: shared semantic HTML components. Change a repeated pattern here, never in one generated page only.
- `thecatrave-home.css`: global colours, fonts, spacing and motion tokens.
- `thecatrave-article.css`: article widths, typography, section rhythm, media and responsive behaviour.
- `build-*-article.mjs`: page-specific content and component assembly.
- Generated `.html` files: publishable output, not the primary editing surface.
- `audit-site-components.mjs` and page-specific audit files: mandatory regression checks.

Never begin by copying generated HTML from another article. Begin with research, an approved editorial plan and a page generator that consumes the shared components.

## 2. Required evidence hierarchy

Use evidence in this order:

1. Google Search Console data for the exact existing URL.
2. The existing live or generated page and its source/generator.
3. Ahrefs global volume, SERP composition and competitor pages, using batched economical requests.
4. The live Google SERP for query intent, result type, snippets and current competitors.
5. Primary sources, artist or label interviews, archives, books and reputable specialist publications.
6. Editorial inference, clearly labelled as inference rather than measured fact.

Never invent volume, ranking, competitor coverage, audience demand, historical facts or the contents of an uninspected page.

## 3. Research package required before an outline

Create a compact research package containing the following.

### Search Console preservation inventory

- URL and canonical.
- Existing title, meta description and H1.
- Queries producing clicks and impressions for this page.
- CTR and average position for the important query groups.
- High-impression wording that must remain represented naturally.
- Existing anchors, sections, facts, media, internal links and external references that may support visibility.
- Device or country differences only when they change the decision.

For a new page, state explicitly that no preservation inventory exists.

### Ahrefs validation table

Group related keywords into one batch wherever the connector permits it. Record:

| Query cluster | Global volume | Traffic potential | Intent | SERP page types | Best fit for this page? | Evidence date |
|---|---:|---:|---|---|---|---|

Do not request every wording individually when one parent topic and a small set of variants answer the decision. Stop collecting metrics when additional calls would not change the outline, title or target intent.

### Competitor coverage matrix

Inspect the strongest pages ranking for the primary intent, not merely large domains.

| Competitor URL | Search intent | Distinct sections | Definitions/entities | Media and embeds | Original value | Weakness or gap we can genuinely close |
|---|---|---|---|---|---|---|

Record only what was actually inspected. Do not add a section simply because one competitor has it.

### Semantic kernel

Organise terms into:

- primary intent;
- proven Search Console language;
- close secondary queries with the same intent;
- entities, artists, labels, locations, technologies and eras needed for topical completeness;
- comparison questions;
- FAQ candidates;
- excluded terms belonging to a different intent or future page.

Every proposed H2 must have a reader job and an SEO job. Natural editorial headings are preferred to keyword-heavy headings.

## 4. Decision gate before writing

Present the following for approval before a major rewrite:

- primary intent and excluded intents;
- preserve, improve, split or create-new-page recommendation;
- proposed title, meta description and H1;
- outline with the purpose of each section;
- preservation requirements;
- media and listening plan;
- proposed FAQ questions, if any;
- internal-link plan;
- material uncertainties requiring fact-checking.

Do not write or implement a substantial new version until this direction is approved.

## 5. FAQ decision rule

FAQ is not a mandatory SEO decoration. Add it only when Search Console, Ahrefs, the SERP or a clear reader gap supports concise questions that are not answered cleanly elsewhere.

Good FAQ questions:

- match the article's primary intent;
- use natural question wording found in search or reader discussions;
- can be answered accurately in a short paragraph;
- clarify a distinction, origin, terminology, listening entry point or current status;
- add retrieval-friendly wording without duplicating several paragraphs from the body.

Reject questions that belong to another intent, exist only to repeat keywords or require a separate article. Use `articleFaq()` for visible markup. If FAQ structured data is added, generate it from the exact same visible questions and answers. Do not promise a Google FAQ rich result; for most non-government and non-health sites it is not regularly shown.

## 6. Editorial draft and review

Write the article around eras, scenes, records, people, technologies and contested terminology rather than an arbitrary word count. The article must:

- answer the primary query early;
- preserve proven language and useful legacy information;
- contain concrete, verifiable detail;
- distinguish rhythm, genre, scene and retrospective category;
- avoid repetitive AI cadence, filler and generic scene-setting;
- explain uncertainty instead of forcing a neat origin myth;
- sound like an informed listener and journalist, not a glossary assembled for search engines.

Complete three reviews before layout:

1. factual and timeline review;
2. senior electronic-music editorial and language review;
3. SEO preservation and semantic-coverage review.

Follow the detailed protocol and required output format in `ARTICLE-EDITORIAL-REVIEW.md`. Save the resulting review with the article handoff artefacts.

## 7. Media and listening package

Create a media matrix before implementation:

| Section | Claim or atmosphere supported | Asset or exact track | Source/platform | Placement after which paragraph | Mobile treatment | Verified? |
|---|---|---|---|---|---|---|

Required principles:

- exact tracks sit beside the prose that discusses them;
- playlists are clearly labelled extended routes, not substitutes for exact tracks;
- YouTube players are directly playable conventional embeds;
- Bandcamp belongs in the final support block;
- the final Bandcamp block uses `fullBleed: true`, spans the viewport and normally embeds one to three releases that are genuinely relevant to the article; use a text-only CTA only when no suitable release has been selected;
- images provide evidence, identity, geography, technology or chronology;
- text separates every image from every player or grouped media block;
- images retain intrinsic proportions and include alt text, width and height;
- do not reuse media from another article without a strong editorial reason.

## 8. Component mapping before implementation

Map every repeated block to a shared component:

- document and SEO shell: `articlePage()`;
- visible opening: `articleHero()`;
- definition or direct answer: `infoBanner()`;
- contents: `articleTableOfContents()`;
- sections: `articleSection()`;
- figures: `articleFigure()`;
- data tables: `articleTable()`;
- exact and extended listening: `articleListeningBand()`, `articleListeningCollection()` and `articleTrackEmbed()`;
- video examples: `articleYoutubeEmbed()` or `articleVideoCollection()`;
- FAQ: `articleFaq()` plus matching `faqStructuredData()` when approved;
- sources: `articleSources()`;
- author: `authorCard({filled:true})`;
- support: `bandcampSupport({fullBleed:true})`;
- related articles: `readNext()`;
- footer: the shared article footer provided by `articlePage()`.

If a required pattern does not exist, extend `site-components.mjs` and its audit rather than adding a private copy to one article.

## 9. Implementation and build sequence

1. Inspect git status and preserve unrelated changes.
2. Edit the page's editorial source or generator.
3. Edit shared components or CSS only when the change is genuinely site-wide.
4. Rebuild every article consuming a changed shared component.
5. Run the shared audit and the page-specific audit.
6. Run `git diff --check`.
7. Rebuild a second time and verify that generated output is unchanged.
8. Perform visual QA at approximately 1440, 1024, 768, 430 and 390 CSS pixels.
9. Inspect real embed loading, media quality, spacing and overflow.
10. Compare the final page against the preservation inventory.

Do not claim browser or visual QA when the browser was unavailable or blocked.

## 10. Completion report

Before reporting completion, state:

- what changed editorially and technically;
- primary intent and important preserved language;
- which shared components were used or changed;
- which pages were rebuilt;
- audit and visual-QA results;
- known limitations or unverified external embeds;
- whether anything was committed or pushed.

Never commit, push, merge, publish or delete branches unless the user explicitly requests it.

## 11. Minimum handoff artefacts for a future agent

For every major article project, retain:

- preservation inventory;
- query and intent map;
- competitor coverage matrix;
- approved outline and metadata;
- fact-check notes and sources;
- media/listening matrix;
- page generator;
- generated HTML;
- automated audit.

These artefacts make the reasoning reproducible. The generated page alone is not an adequate handoff.
