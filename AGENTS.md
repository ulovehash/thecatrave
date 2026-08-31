# thecatrave.com editorial, SEO and front-end playbook

This file contains permanent project rules for writing, redesigning, rebuilding and publishing pages on thecatrave.com. Treat these rules as defaults for every future task in this repository unless the user explicitly overrides them.

Cold-start requirement: an agent beginning an article task must first read `ARTICLE-PRODUCTION-WORKFLOW.md`, then this file, `ARTICLE-EDITORIAL-REVIEW.md` and `SITE-COMPONENTS.md` completely. The workflow defines the required research evidence, approval gates, handoff artefacts and build sequence; this file defines the permanent quality rules.

## 1. Core product and editorial principles

- thecatrave.com is an artist website and an independent electronic-music publication.
- Every page must serve readers first while having a clear search intent and a credible route towards the artist's music, mixes or Bandcamp.
- The visual identity should feel authored, underground, direct and contemporary. It must not resemble a generic SEO template or AI-generated magazine layout.
- Preserve the artist's mystery and the name `thecatrave`. Do not foreground the artist's legal name unless the user explicitly requests it.
- Brand spelling is non-negotiable: always write `thecatrave` as one word in lowercase in visible copy, metadata, alt text, structured data, components and internal documentation. Never write `The CatRave`, `The Cat Rave`, `Thecatrave` or any other capitalised or spaced variant.
- Music is handmade in a DAW or mixed behind the decks. Do not describe generative AI as part of the creative process.
- Do not use em dashes in editorial copy. Prefer commas, colons, parentheses or shorter sentences.
- Avoid inflated metaphors, vague scene-setting, generic enthusiasm and synthetic phrases such as “a sonic journey”, “rich tapestry”, “pulsating rhythms” or “ever-evolving landscape”.
- Write like an informed electronic-music journalist who listens closely, knows scenes and can explain uncertainty without sounding academic or robotic.
- Vary sentence length and paragraph rhythm. Use concrete names, places, records, labels, technologies and scene details instead of abstract summaries.
- Do not restate the same conclusion at the beginning and end of every subsection. Each paragraph must advance the history, clarify a distinction or give the reader something they can hear, see or verify.
- Prefer direct language to decorative phrasing. Do not invent metaphors when a factual sentence says the same thing more clearly.
- Do not impose an arbitrary word count. Length must follow the subject, search intent and reader needs.

## 2. Approval and change control

- For substantial changes to positioning, SEO intent, metadata, article structure, headings, copy or visual direction, present the proposed solution first and wait for approval before implementation.
- A direct implementation request is approval for the specifically requested change only.
- Do not silently broaden scope.
- Once copy has been approved, do not shorten, rewrite or remove it merely to solve a wrapping or layout problem. Fix widths, type scale, grid logic and responsive behaviour first. Ask before changing approved meaning.
- When the user asks for an explanation or evaluation, do not treat that as approval to edit the page.
- Do not change an existing URL, canonical URL, slug or redirect without explicit approval.
- Existing traffic-generating pages are protected. Before changing one, identify what currently ranks and what must be preserved.
- Never push, merge, publish, delete branches or remove files unless the user explicitly asks.
- When the user requests a direct push to `main`, verify first and push only the approved files. Do not create an unnecessary branch.
- Preserve unrelated local changes and user-owned files.

## 3. Search intent and SEO research

### Intent comes before keywords

- Determine the page's primary search intent before rewriting.
- Do not combine keywords merely because they share words. Distinct intents require distinct pages or clearly separated supporting sections.
- Keep one dominant intent per page and use secondary queries only when they genuinely support it.
- For existing pages, use Google Search Console data as the first source of truth:
  - queries generating clicks and impressions;
  - pages receiving those queries;
  - current positions;
  - CTR opportunities;
  - high-impression wording that must not disappear;
  - country and device differences when relevant.
- Use Ahrefs to validate, not to replace judgment:
  - check global volume when the audience is international;
  - inspect SERP composition and competing page types;
  - identify missing long-tail queries and subtopics;
  - compare traffic potential, not only raw volume;
  - batch related checks and minimise unnecessary API calls.
- Never manufacture search-volume data or competitor findings.
- Do not claim a query is valuable without evidence from Search Console, Ahrefs, the live SERP or a clearly labelled editorial inference.

### Protect existing rankings

- Before rewriting a ranking article, create a preservation inventory containing:
  - current URL and canonical;
  - current SEO title, meta description and H1;
  - high-performing query formulations;
  - useful internal anchors;
  - important facts, sections, media and external references;
  - existing internal and external links;
  - content that may have earned backlinks or featured snippets.
- Keep legacy section IDs and useful internal anchors when rebuilding an existing ranking page. New structure may add anchors, but it must not silently break old links.
- Preserve the page's successful intent and factual core even when the writing and design change substantially.
- Do not remove a ranking section solely because it feels repetitive. First determine whether it supports a known query or snippet.
- If two intents conflict, recommend a second page and a careful internal-linking strategy instead of forcing both into one article.

### Metadata and on-page structure

- Use exactly one visible H1 per page.
- Keep heading order semantic: H1, then H2, then H3, then H4 only when needed.
- Headings must be useful to readers and support relevant language naturally. Do not turn every heading into a keyword list.
- Build the semantic kernel in layers: primary intent, proven Search Console language, close secondary queries, required entities and terminology, FAQ questions and optional long-tail expansions. Do not treat it as a flat list to insert everywhere.
- A concise direct-answer block near the introduction should answer the primary query in natural language, normally in roughly 80–120 words when the subject permits it.
- Name definition callouts with the actual semantic purpose, for example `BREAKBEAT DEFINITION` or `BREAKBEAT MEANING`. Do not invent vague editorial labels such as `IN SHORT` when a validated query is available.
- Do not append `thecatrave` to the SEO title merely for branding. The domain already provides the brand context.
- Write unique, concrete metadata that accurately describes the page.
- Keep the canonical unchanged for an existing page unless explicitly instructed.
- Use `Article` structured data for articles.
- Repeated article structures must come from `site-components.mjs`, including the document shell, hero, contents, section wrapper, figures, data tables, Sources, listening players, author card, Bandcamp CTA, Read Next and footer. Do not merely copy their class names into page-local HTML: component structure changes must propagate after rebuilding every article.
- A page does not need a semantically irrelevant block only for visual symmetry. For example, do not invent an FAQ or comparison table when the approved article has no such material. If the pattern is present, however, it must use its shared component.
- Preserve the original `datePublished` when updating an existing article. Add a truthful visible update date using `<time datetime="YYYY-MM-DD">`, keep `dateModified` consistent in Article structured data and expose matching Open Graph article dates.
- Add `BreadcrumbList` structured data when the page belongs to a clear site hierarchy.
- Use `FAQPage` structured data only when the same questions and answers are visibly present on the page.
- FAQ is not a mandatory ranking device. Add it only when Search Console, Ahrefs, the SERP or a demonstrated reader gap supports concise questions within the page's primary intent. For most non-government and non-health sites, do not expect Google to show an FAQ rich result; the visible answers must justify the block on their own.
- Keep Open Graph and Twitter metadata aligned with the final page.
- Provide descriptive alt text, intrinsic image dimensions and meaningful iframe titles.

## 4. Historical and factual standards

- Validate timelines against authoritative histories, artist or label interviews, reputable music publications, books, archives and primary materials when available.
- Describe eras, scenes and transitions. Do not expand recent history into a year-by-year diary unless the subject genuinely requires it.
- Distinguish:
  - a rhythmic technique;
  - a genre label;
  - a local scene;
  - a later retrospective category.
- Do not flatten jungle, drum and bass, broken beat, breakcore, big beat or regional breaks scenes into interchangeable forms of breakbeat.
- Avoid clean origin myths when the evidence shows parallel development, overlap or contested terminology.
- Attribute disputed or precise claims near the relevant sentence with a selective inline link.
- Keep the final Sources section concise and high quality. It is not a dumping ground for every link consulted.
- Do not add editorial notes, internal research instructions, licensing commentary or implementation commentary to the published article.
- Fact-check artist classifications, dates, release examples, regional claims and terminology before publication.
- When a track is presented as evidence for a style or era, verify the artist, title, release context and why the example belongs there. Do not retrofit an unrelated track to a label for convenience.
- Perform a final language check for AI rhythm, repetitive sentence construction, filler and overconfident claims.

## 5. Article architecture

A long-form guide should normally contain:

1. SEO metadata and social metadata.
2. A compact hero with one H1 and a clear deck.
3. A concise definition or direct answer near the start, visually separated when useful.
4. A compact, readable one-column table of contents.
5. A validated historical or conceptual structure based on eras and scenes.
6. Embedded listening examples placed where the relevant music is discussed.
7. Selective visual evidence and archival artefacts.
8. A comparison table only when it materially clarifies terminology.
9. A present-day section that avoids inventing one unified revival when several scenes coexist.
10. A useful FAQ based on real search questions.
11. An About the Author block with concise credentials and social/music links.
12. A limited Sources section.
13. A Bandcamp support CTA near the end.
14. A Read Next block linking to relevant articles.
15. A simple footer.

Do not add a section merely because competitors have one. It must close a reader question, support the search intent or provide original value.

- Introductory badges such as `fact-checked timeline` are unnecessary unless they communicate something the reader cannot already infer from the page.
- Section numbering and side labels must not duplicate the adjacent heading. Use them only when they provide real navigational structure.
- The first FAQ item may be open by default to make the interaction obvious; the remaining items should stay collapsed unless there is a strong reason otherwise.
- Keep the end sequence deliberate: article conclusion or FAQ, About the Author, concise Sources, Bandcamp support block, Read Next, then footer. Avoid large accidental gaps between these blocks.
- Treat the Bandcamp CTA as a supporting subsection, normally with an H3 rather than introducing a new top-level editorial chapter. Use a direct button label such as `SUPPORT` when approved.
- `Read Next` belongs in the article flow after the Bandcamp block, not mixed into the footer.

## 6. Listening examples and embeds

- When a specific track is named as an example, embed the exact track directly in the article whenever a reliable embed exists.
- Do not make track names jump links to a separate listening section when the reader expects immediate playback.
- Preferred hierarchy:
  - Spotify track embed for exact track examples;
  - YouTube embed when Spotify is unavailable or the video itself is relevant;
  - SoundCloud for mixes, underground uploads and tracks unavailable elsewhere;
  - Bandcamp in the final commercial support block.
- Do not embed a playlist when the copy promises one exact track unless there is genuinely no exact-track embed. If a playlist is unavoidable, label it honestly.
- A track title mentioned in editorial copy should not become a hidden jump to the end of the article. Either embed it at the relevant point or link to the actual platform page when embedding is impossible.
- YouTube videos must be visible, responsive players. Do not hide them behind a custom reveal button.
- Verify YouTube embeds do not produce configuration errors such as Error 153.
- The artist's own contemporary tracks may appear in relevant listening examples through Spotify.
- The artist's tracks must be presented in exactly the same listening format as other examples in that section. Do not replace the requested exact Spotify track with an artist playlist.
- Use Bandcamp for the final support section, not as a substitute for every listening example.
- The final Bandcamp area may contain several directly relevant releases, but it must remain visually contained inside its background and must not overwhelm the article.
- A mix embed must include a short editorial CTA explaining why that mix belongs at that point in the article.
- Do not place duplicate promotional copy immediately above and below the same player.

## 7. Non-negotiable media-placement rules

These rules are mandatory.

- Images exist to break up long passages of text and provide evidence, atmosphere or a useful artefact.
- The default rhythm is `text → image → text`.
- Never place an image directly before a listening block, video grid, Spotify player, SoundCloud player, Bandcamp player or other embedded-media block.
- Never place an image directly after an embedded-media block.
- Never sandwich an embed between two images.
- Never place two large images consecutively without meaningful text between them.
- Keep at least one substantial paragraph between an image and an embedded listening block. Prefer two paragraphs when the section allows it.
- Do not routinely place an image immediately after an H2 or H3. Introduce the idea in text first, then use the image to deepen or interrupt the passage.
- Place an image inside the subsection it illustrates, not before the next subsection heading.
- Listening blocks should normally conclude or punctuate a passage after the relevant explanation, not interrupt the first sentence of a section.
- In generator-driven articles, assign images to explicit paragraph insertion points. Do not concatenate images and listening blocks into the same `beforeHeading` value.
- After every rebuild, run an adjacency audit that fails on `figure + embed` and `embed + figure` pairs.
- Treat a grid of videos, a grouped listening route and a promotional player as one media block for these adjacency rules.

## 8. Image selection and treatment

- Prefer media that adds information unavailable from text alone:
  - archival flyers;
  - photographs of artists in the relevant era;
  - scene photographs;
  - samplers, drum machines, decks and studio artefacts;
  - record sleeves and label design;
  - maps, timelines and family trees with a clear editorial purpose.
- Avoid generic stock photography and decorative filler.
- Before selecting new media, inspect the strongest competing articles and record what each visual contributes: evidence, identity, geography, technology, chronology or listening context. Use that research to identify genuine gaps in our page rather than inventing arbitrary image categories.
- Do not claim competitors contain a type of media that was not actually inspected.
- Do not reuse the same archival image across multiple articles unless there is a strong editorial reason.
- Do not import a competitor's visual merely to imitate it. Understand what it proves and find the most relevant version for this article.
- Keep images visually consistent in scale. An image must not alternate between tiny and full-viewport without a deliberate reason.
- Preserve original aspect ratios. Never stretch a portrait into a square or force a landscape photograph into a fixed height.
- Do not upscale visibly weak images to full article width.
- Use smaller, centred artefact images when their natural detail does not support a large presentation.
- Archival objects photographed against walls, desks or floors should be isolated when that improves the page:
  - preserve the physical object's exact text and texture;
  - use genuine alpha transparency or a self-contained clipped SVG;
  - never publish a baked checkerboard pretending to be transparency;
  - never add a dark halo or replacement background;
  - verify the asset actually renders when the article is opened locally and on the deployed site.
- Do not add `Wikimedia Commons`, licensing instructions or media-credit housekeeping as visible captions unless the user specifically requests it.
- Captions should explain why the image matters to the argument, not merely repeat the alt text.
- Keep source URLs and factual attribution available in editorial records or appropriate inline citations, but do not turn every public caption into licensing or archive housekeeping.
- Provide width and height attributes to prevent layout shift.
- Use lazy loading for below-the-fold images. Treat the hero separately when performance testing supports eager loading.

## 9. Original visual assets and linkable media

- Original maps, timelines and diagrams must answer one clear question.
- Do not produce a dense collection of labelled boxes and call it a map.
- Establish hierarchy, reading direction, era logic and a mobile fallback before drawing.
- Brand original editorial graphics subtly with thecatrave so they can be shared and cited.
- Potential linkable assets include:
  - a global scene map;
  - a genre family tree;
  - an essential-tracks timeline;
  - a regional venue and label map;
  - a sampler or production-tool chronology.
- Every original graphic needs:
  - a precise editorial claim;
  - validated dates and relationships;
  - a readable desktop layout;
  - an accessible mobile representation;
  - alt text and a useful caption;
  - a final visual review at actual page size.
- A linkable visual should also have a stable standalone asset, ideally a high-resolution PNG plus SVG when appropriate, so another publication can share or embed it without taking a screenshot of the page.
- Pair complex graphics with an accessible HTML explanation. The downloadable image is the shareable object; the article text remains the searchable and accessible explanation.

## 10. Visual system and typography

- Follow the visual language established by the redesigned homepage and article stylesheet.
- Use a restrained type scale. The page should not appear to contain dozens of unrelated font sizes.
- Navigation must remain readable and must not become visually insignificant beside the wordmark.
- Keep one display scale for H1, one consistent scale for major H2 headings and one restrained scale for H3 headings.
- H1 must establish hierarchy without consuming most of the first viewport. Reduce the display scale before forcing awkward line breaks.
- SEO hierarchy is semantic, not visual. Do not use an extra H1 merely to obtain a larger style.
- Align headings and their introductory paragraphs to the same content edge.
- Avoid manual line breaks in headings and descriptions. Let text wrap naturally according to the available width.
- Use explicit max-widths to create deliberate line lengths, not accidental wrapping.
- Use shared spacing variables for sections, media and text blocks.
- Treat the shared CSS variables as the design system, not suggestions. Colours, spacing, content widths, type levels and motion durations must come from the tokens documented in `SITE-COMPONENTS.md`.
- New long-form pages must use `articlePage()`, `articleHero()`, `articleSection()`, `articleFigure()`, `articleTableOfContents()`, `articleSources()` and the relevant shared listening components. When an FAQ is supported by the approved research, it must use `articleFaq()` plus matching `faqStructuredData()`. Do not add an FAQ only for visual symmetry, and do not begin a new article by copying the generated HTML of an older page.
- Generated HTML is the publishable artefact; shared structure belongs in `site-components.mjs`, design rules belong in the shared stylesheets and page-specific content belongs in its generator or editorial source.
- Use the standard content widths: text for prose, media for figures, wide for tables and listening collections, and full bleed only for explicitly approved listening or support bands.
- Keep the established responsive breakpoints at 1000px, 900px and 760px unless a verified layout defect requires another breakpoint.
- Maintain consistent space:
  - before and after headings;
  - between paragraphs;
  - around figures;
  - around listening blocks;
  - between Sources, CTA, Read Next and footer.
- A full-width colour block must have a clear purpose and must not become an arbitrary oversized banner.
- Use colour to distinguish a small number of meaningful editorial modes, such as definition, listening route, present-day synthesis or future outlook. Do not alternate colours mechanically between every section.
- Definition blocks may reuse the cyan callout system established by `BREAKBEAT BEYOND THE CLUB`, but their visible label must describe their actual function and target language.
- Keep the table of contents compact, one-column and easy to scan. Hover states may use the site's accent colour. Do not underline every item by default.
- Tables should have clear row hover states on pointer devices and remain horizontally usable on narrow screens.
- Table-of-contents rows may use the same accent hover colour as data tables, but essential meaning must remain visible without hover.
- Avoid sticky headers unless the user explicitly approves one and it has a demonstrated navigation benefit.
- Keep footers simple: homepage, music platforms, social links and relevant next articles. Remove duplicate navigation and decorative slogans that add no value.
- Do not use an oversized decorative `thecatrave` wordmark, generic `human-made music and writing` slogan or duplicate Back to Top controls in an article footer. If Back to Top is retained, provide one unobtrusive control.

## 11. Responsive front-end rules

- Build mobile first and verify desktop, tablet and mobile explicitly.
- Recommended QA widths include approximately 1440, 1024, 768, 430 and 390 CSS pixels.
- No horizontal scrolling is acceptable at any supported width.
- Grid and flex children containing iframes must use `min-width: 0`.
- Use `minmax(0, 1fr)` for flexible grid tracks.
- Use `box-sizing: border-box` for bordered and padded components.
- Do not define a component width that is mathematically smaller than its minimum columns, gaps and padding.
- Embedded players must remain inside their parent backgrounds and borders.
- Images must use `height: auto` unless a deliberate crop is defined. A `max-height` must not distort intrinsic proportions.
- Responsive images must shrink proportionally with their container. Never preserve a desktop pixel width that forces overflow or changes the aspect ratio on mobile.
- When a desktop two-column component stacks, reconsider its internal hierarchy rather than merely setting `grid-template-columns: 1fr`.
- On mobile:
  - controls must remain comfortably tappable;
  - headings must not dominate several screens;
  - captions must remain readable;
  - embeds must not be clipped;
  - large decorative images may be reduced or omitted only with user approval.
- Respect `prefers-reduced-motion` for animation.
- After the final content or CSS change, repeat the viewport checks. A screenshot made before the latest rebuild is not valid QA evidence.

## 12. Accessibility and performance

- Use semantic landmarks, headings, figures, captions, tables and details elements.
- Every iframe needs a unique descriptive title.
- Every meaningful image needs useful alt text; decorative images should use empty alt text.
- Preserve visible keyboard focus.
- Do not rely on hover alone for essential information.
- Keep text contrast sufficient across all coloured sections.
- Set intrinsic image dimensions and avoid cumulative layout shift.
- Prefer modern, appropriately sized assets. Do not ship a huge source file when the rendered image is small.
- Lazy-load below-the-fold embeds and images where appropriate.
- Avoid unnecessary third-party scripts and repeated platform embeds.
- Structured data, visible dates and metadata must agree. A schema date that differs from the visible update date is a failed QA check.

## 13. Repository and generation rules

- Treat source drafts and generator files as the source of truth. Do not hand-edit generated HTML if a rebuild would overwrite the change.
- Shared build-time page components live in `site-components.mjs`. Reuse these functions for headers, footers, social links, NOW PLAYING, author cards, Bandcamp CTAs, information banners, contextual Spotify/SoundCloud listening bands, direct YouTube embeds, Read Next and analytics instead of copying markup.
- Approved reusable article blocks from the Jungle redesign are:
  - `infoBanner()` for the direct definition or meaning near the hero;
  - `articleListeningBand()` for contextual Spotify and SoundCloud listening stripes, using `fullBleed: true` when the block should span the viewport and an explicit contrasting `tone` inside coloured sections;
  - all curated genre and historical players share the visible label `Essential listening`; distinguish an exact track, mix and extended playlist in the block title or description rather than inventing a second listening concept; a clearly promotional thecatrave mix or remix may retain a specific contextual label;
  - every `Essential listening` block is full-bleed site-wide: `articleListeningBand()` applies `.article-media-band-full` automatically, `articleListeningCollection()` applies `.context-listening-full` by default, and `articleVideoCollection()` applies `.listening-block-full`; never override this per article;
  - use exact embedded tracks as evidence for the records discussed in the text, then add playlists only as clearly labelled extended listening routes; genre guides should include both when suitable material exists;
  - place an exact track directly after the prose that explains its artist, era or importance; do not collect the same examples far away in an end-of-article player block unless that collection adds a different editorial route;
  - `articleYoutubeEmbed()` for a conventional visible 16:9 YouTube player without a reveal control or decorative wrapper;
  - `articleTableOfContents()` for the single-column Contents block and its page-specific anchor list;
  - `authorCard({filled:true})` for the cyan `Article by thecatrave` card with the responsive portrait, concise biography and platform links;
  - `bandcampSupport({fullBleed:true})` for the low commercial stripe whose background and borders span the actual viewport; include one to three relevant Bandcamp releases when suitable music exists, and do not replace `100vw` with article-container `100%`;
  - `readNext()` for article recommendations after the Bandcamp block;
  - `articleFooter()` for the compact article footer.
- These variants are site-wide patterns, not Jungle-only exceptions. Do not recreate their markup or width rules under a page-specific class. Pass content and visual variants through component parameters.
- Current article consistency contract: Breakbeat, Jungle and UK Electronic Music must all consume `siteHeader()`, `articleTableOfContents()`, `authorCard({filled:true})`, `bandcampSupport()`, `readNext()` and `articleFooter()`. Any standalone contextual Spotify or SoundCloud feature must consume `articleListeningBand()`. A change to one of these shared types must be followed by rebuilding and auditing all three pages.
- Component usage and extension rules live in `SITE-COMPONENTS.md`.
- The homepage keeps valid fallback HTML between explicit component markers and is refreshed with `build-home.mjs`.
- After changing a shared component, rebuild every consuming page and run `audit-site-components.mjs` before reporting completion.
- For the breakbeat article:
  - editorial source: `breakbeat-guide-draft.md`;
  - page generator: `build-breakbeat-article.mjs`;
  - transparent artefact generator: `build-cutout-assets.mjs`;
  - generated page: `breakbeat-guide.html`;
  - article styles: `thecatrave-article.css`;
  - automated audit: `audit-breakbeat.mjs`.
- For the jungle article:
  - page builder and migration source: `build-jungle-article.mjs`;
  - generated page: `jungle-music-guide.html`;
  - article styles: `thecatrave-article.css`;
  - automated audit: `audit-jungle.mjs`.
- When changing the breakbeat or Jungle article, update the appropriate source or generator, rebuild, then audit.
- Keep media filenames descriptive and stable.
- Do not remove old assets merely because they are unused unless deletion is explicitly requested.
- Preserve unrelated worktree changes.

## 14. Required workflow for a major article update

1. Inspect the existing page, source files, generator, CSS and git state.
2. Export and analyse Search Console data for the exact page.
3. Identify current search intent, ranking queries and preservation requirements.
4. Use Ahrefs selectively to validate global volume, SERP type, competitors and missing relevant queries.
5. Review top competitors for factual coverage, structure, original media and reader utility.
6. Build a semantic kernel grouped by intent, not a flat keyword list.
7. Propose metadata, outline, heading logic and media plan.
8. Obtain approval before a substantial rewrite.
9. Write or revise the draft without artificial length targets.
10. Perform specialist editorial review, factual review and language review.
    Follow `ARTICLE-EDITORIAL-REVIEW.md` and retain its required review output with the article handoff.
11. Verify every track example and select the correct direct embed.
12. Research and prepare media that supports the narrative.
13. Implement the layout in the project source files.
14. Rebuild the generated page.
15. Run automated structural and SEO audits.
16. Perform visual QA at desktop, tablet and mobile widths.
17. Inspect actual embed loading, image quality, spacing and overflow.
18. Check the media rhythm manually so images genuinely divide text rather than forming media stacks.
19. Compare the finished page with the preservation inventory, including old phrases, anchors, facts, links and media that supported visibility.
20. Recheck metadata, visible update date, `datePublished`, `dateModified`, Open Graph dates and structured data together.
21. Show the completed draft or preview and obtain final approval.
22. Commit or push only when explicitly requested.

## 15. Mandatory QA checklist before reporting completion

- One H1 only.
- No heading-level jumps.
- URL and canonical preserved where required.
- Title and description match the approved search intent.
- High-performing Search Console language preserved where appropriate.
- Proven query wording remains in meaningful copy, not hidden in metadata or stuffed into labels.
- The direct-answer callout uses an accurate semantic label and appears before the table of contents when approved for that article.
- No duplicate IDs.
- All internal anchors resolve.
- All local assets exist.
- All images have dimensions and alt text.
- All iframes have unique titles.
- Exact tracks use exact-track embeds where possible.
- No broken YouTube or platform embeds.
- No playlist is presented as an exact-track embed.
- No image is directly adjacent to an embedded-media block.
- No consecutive large images without meaningful text between them.
- Images appear inside the subsection they support.
- No stretched, blurry or accidentally oversized media.
- Transparent assets have real transparency and render correctly.
- No desktop or mobile horizontal overflow.
- No iframe leaves its container.
- Images retain their intrinsic proportions at desktop, tablet and mobile widths.
- Spacing is consistent across sections, figures, players, Sources, CTA and Read Next.
- Desktop, tablet and mobile layouts have been visually inspected after the latest change.
- Do not claim visual verification if browser inspection was blocked.
- No internal editorial notes or implementation language leaked into published copy.
- Automated audits pass.
- Visible and structured publication/update dates are truthful and consistent.
- Breadcrumb and FAQ structured data match visible page content.
- No unrequested push, merge, branch creation or deletion occurred.

## 16. Breakbeat article build and verification

For relevant changes, run:

```sh
node build-cutout-assets.mjs
node build-breakbeat-article.mjs
node audit-breakbeat.mjs
```

Then inspect the rendered article and verify the media sequence manually. The desired pattern is:

```text
heading
paragraph
paragraph
image
paragraph
paragraph
listening block
next heading
```

This is a model, not a rigid formula, but these arrangements are forbidden:

```text
image
listening block
```

```text
listening block
image
```

```text
image
listening block
image
```

```text
heading
image
listening block
```

When the narrative does not contain enough text to separate media properly, remove or relocate one of the media elements instead of stacking them.
