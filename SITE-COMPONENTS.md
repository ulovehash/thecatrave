# thecatrave reusable page components

The shared build-time component library lives in `site-components.mjs`. It returns complete semantic HTML strings, so published pages do not depend on client-side JavaScript and search engines receive the full page immediately.

For a new article or major rewrite, begin with `ARTICLE-PRODUCTION-WORKFLOW.md`, `AGENTS.md` and `ARTICLE-EDITORIAL-REVIEW.md`. This file documents implementation after the research direction, editorial structure and review requirements have been approved.

## Available components

### Global structure

- `articlePage({title, description, canonical, ogImage, datePublished, dateModified, bodyClass, structuredData, articleHtml})`: complete SEO-safe article document shell. It owns the canonical, social metadata, article dates, fonts, stylesheets, shared header/footer and analytics.
- `articleStructuredData({headline, description, canonical, image, datePublished, dateModified})`: consistent Article schema with thecatrave identity.
- `breadcrumbStructuredData({name, canonical})`: two-level Home → Article breadcrumb schema.
- `faqStructuredData({items})`: FAQ schema generated from the same approved visible questions and answers.
- `siteHeader({variant, navItems})`: homepage or article header with the wordmark, optional navigation and shared social icons.
- `homeArticlesSection({items})`: complete homepage Articles section. Items provide URL, type, topic, title, description, image metadata and a reading-time value supplied by `home-articles.mjs`.
- `homeFooter()`: homepage footer.
- `articleFooter()`: compact article footer.
- `analytics()`: shared Google Analytics markup in `<head>`. It uses Google's standard early `async` installation so automatic page views and short visits are preserved, plus `fetchpriority="low"` so the analytics download does not outrank the LCP image.

### Banners and calls to action

- `nowPlayingBanner({title, meta, href, linkLabel})`: the black NOW PLAYING strip used under the homepage header.
- `infoBanner({label, bodyHtml, ariaLabel, className})`: reusable editorial callout for definitions, meanings, factual summaries and similar labelled blocks.
- `articleListeningBand({platform, id, kicker, title, description, src, iframeTitle, fullBleed, tone})`: Spotify or SoundCloud listening strip with contextual editorial copy and a directly playable embed. Curated genre and historical listening blocks use the shared kicker `Essential listening`; this label automatically activates the site-wide full-bleed geometry. Their title must say whether the player is an exact track, mix or extended playlist. Artist-promo embeds may instead use a specific contextual kicker. Set `fullBleed: true` manually for other viewport-wide stripes. `tone` accepts `paper`, `cyan`, `yellow` or `coral`; in practice every block passes `cyan` (see "One colour, site-wide").
- `articleYoutubeEmbed({src, title})`: responsive, directly playable YouTube embed without a custom reveal layer.
- `bandcampSupport({description, tracks, fullBleed})`: compact Bandcamp CTA or an expanded CTA with relevant embedded releases. Set `fullBleed: true` for the approved low stripe that spans the actual viewport, not merely the article container. A genre or history article should normally include one to three directly relevant Bandcamp tracks when suitable releases exist.

### Article navigation and identity

- `articleHero({kicker, title, deck, readingTime, dateModified, dateLabel, summaryHtml, tocItems})`: compact shared article hero with one H1, visible metadata, deck, optional direct answer and contents.
- `articleSection({id, title, bodyHtml, kicker, className})`: semantic section wrapper that preserves the shared width, heading and spacing system.
- `articleTableOfContents({items, title})`: the shared one-column article contents block. Each item accepts `id` and `label`, or an explicit `href` and `label`.
- `articleFigure({src, srcset, sizes, width, height, alt, caption, className})`: responsive image and caption wrapper. Supply intrinsic dimensions for every raster image.
- `articleTable({headers, rows, className})`: shared accessible, horizontally scrollable table wrapper with consistent row hover.
- `articleFaq({items, title, id, openFirst})`: shared FAQ section; questions are plain text and answers are approved HTML.
- `articleSources({bodyHtml, title, id})`: shared compact Sources section.
- `authorCard({filled})`: standard author block with the responsive thecatrave portrait, biography and platform links.
- `readNext({items, title, kicker})`: related-article cards placed after the commercial CTA. Items are catalog rows (`href`, `type`, `topic`, `readingTime`, `title`, `description`, responsive `image`/`srcset`, `width`/`height`, `alt`, optional `number`) and render the same cover-image card as the homepage grid (`.article-grid` markup and CSS), one column on mobile, two on tablet, four on wide desktop. Feed it from `relatedArticles(currentPage)` in `home-articles.mjs` so every guide links to all the others from one source of truth; do not hand-write per-page item lists.
- `socialLinks({icons, className, label})`: shared social/music links when a custom wrapper is needed.

### Listening collections

- `articleTrackEmbed({platform, id, url, title})`: exact Spotify track/playlist, YouTube, SoundCloud or Bandcamp player primitive.
- `articleListeningCollection({id, title, description, tone, items, fullBleed})`: dated multi-track route used when several exact embedded tracks explain one era or transition. It is full-bleed by default; use `fullBleed: false` only for an explicitly approved compact exception. Each `items[]` row renders as a two-column `.track-entry` (`copy | player`, top-aligned). Inside the copy: the artist is the mono `.track-meta` kicker line on top, then the track title as `<h4>` with the release year appended as ` · YEAR` in a lighter `.track-year <time>` span, then the note. A hairline (`border-top` on every `.track-entry`) sits between the intro header and the first track and between each pair of tracks — all on the one block colour, so it reads as a list.
- `articleVideoCard({youtubeId, genre, artist, title})`: captioned exact-track YouTube card.
- `articleVideoCollection({items, description})`: contextual group of captioned video examples using the same full-bleed `Essential listening` geometry as Spotify and SoundCloud blocks.

## Page-building principles

- Components are assembled during the build, never fetched into the browser.
- Components contain structure and stable site-wide content. Page-specific editorial copy stays in the page draft or generator.
- A component must accept parameters when its meaning changes by page. Do not duplicate the component and edit one copy.
- A visual pattern is not automatically a component. Extract it only when it repeats or has a realistic reuse case.
- Shared component output must remain semantic, accessible and valid without CSS or JavaScript.
- Do not place SEO-critical text exclusively inside a client-rendered component.

## Reusable article layout contract

### Design tokens

- Global colour, type-family, spacing and motion tokens live in `thecatrave-home.css` under `:root`.
- Article width, media width, text scale and vertical-rhythm tokens live in `.article-page` in `thecatrave-article.css`.
- Never introduce a new raw colour when `--ink`, `--paper`, `--acid`, `--cyan`, `--yellow`, `--coral`, `--surface-muted` or `--line` expresses the intended role.
- Use the shared `--space-*`, `--section-space` and `--media-space` scale before adding a one-off margin or padding.
- Use `--article-text`, `--article-media` and `--article-wide` for text, figures and wide data/media respectively.
- Responsive policy is desktop-first with structural changes at 1000px, 900px and 760px. New page-specific breakpoints require a demonstrated layout problem.

- Listening strips use `.article-media-band`, `.article-media-copy` and `.article-listening-feature`. Their copy and player form a two-column band on desktop and one column at `760px` and below.
- The approved full-width listening stripe is the `fullBleed: true` variant and uses `.article-media-band-full`. It is reusable on any article and must not be recreated with a page-specific selector.
- Every block labelled `Essential listening` is full-bleed across every article. Single-player bands receive `.article-media-band-full`, multi-track collections receive `.context-listening-full`, and video collections receive `.listening-block-full`. This is a component-level invariant, not a page-level styling choice.
- Every Essential-listening stripe uses `tone: 'cyan'`. Body sections are not toned, so the cyan panel always contrasts with the paper page (see "One colour, site-wide" below).
- YouTube examples use `.classic-youtube-embed`; the iframe stays visible, directly playable and at `16:9` on every viewport.
- Every article Table of Contents must use `articleTableOfContents()`. The shared block owns its semantic navigation markup, numbering, hover behaviour and responsive layout; generators provide only the page-specific anchors and labels.
- Author cards use a single compact `Article by thecatrave` heading above the portrait and biography columns. The portrait, biography and first platform link begin on the same horizontal line. At `760px` and below, the heading spans the card, portrait and biography remain paired, and platform links move to a separate two-column row.
- The approved full-width Bandcamp stripe is the `fullBleed: true` variant and uses `.article-cta-full`. It is centred at `100vw`, so both its background and borders reach the viewport edges on desktop and mobile. It keeps contextual copy, the `SUPPORT` button and one to three directly relevant releases inside one contained responsive band. Do not interpret `fullBleed` as `width: 100%` of the article container.
- Every current long-form article uses the same shared author card, Bandcamp CTA, Read Next and article footer. Every standalone editorial Spotify or SoundCloud feature uses `articleListeningBand()`; do not add a hand-written `.soundcloud-feature` or `.spotify-feature` copy to an individual generator.
- `Essential listening` is the only site-wide editorial label for curated genre and historical examples. Do not create parallel concepts such as `Listen while you read`, `Jungle Mania listening` or `Essential tracks`. A clearly promotional thecatrave mix or remix may use its own contextual label.
- Exact tracks are the primary evidence for claims about an era, artist or turning point. Use `articleListeningCollection()` and `articleTrackEmbed()` for them, and place them near the passage they support.
- When one exact track belongs to one specific paragraph, a compact `articleListeningBand()` may be used instead of collecting it again at the end of the article. Never make the reader jump from an artist or track discussion to a distant listening section unless the end section provides genuinely different value.
- Playlists and mixes are optional extended routes. Use `articleListeningBand()`, identify them explicitly as an `extended playlist` or `mix` in the title or description, and never present a playlist as though it were one exact track.
- A genre guide should normally contain both exact representative tracks and at least one wider playlist when a credible, relevant playlist is available. The individual tracks prove the editorial argument; the playlist lets the reader continue listening.
- Spotify players use the compact `152px` embed. SoundCloud players use the compact `166px` embed.
- Sections are no longer toned (see "One colour, site-wide" below), so this is a guard rather than a live constraint: if a `tone-cyan|yellow|coral` `articleSection` is ever reintroduced, a full-bleed media block inside it must use the **same** `tone` or the neutral `paper` variant, never a different saturated tone. `audit-site-components.mjs` and `audit-dubstep.mjs` still check this.
- All three Essential-listening block types (`.context-listening`, `.article-media-band`, `.listening-block`) share one treatment: **no frame around the full-bleed block** (a border around the whole coloured panel just floats a line across a flat field), a symmetric `margin-block: var(--media-space)`, and inside `.context-listening` the per-`.track-entry` hairlines described above (a list on one colour). A full-bleed listening block that is the **last child** of its `articleSection` sits flush with the section edge (`:has()` zeroes the section's `padding-bottom` and the block's `margin-bottom`) so no strip of the section's own colour trails after it. Do not add an outer frame or a top-only margin.
- **One colour, site-wide.** Every guide follows the same rule: each Essential-listening block (`articleListeningCollection`, `articleListeningBand`, `articleVideoCollection`) is `tone: 'cyan'`, and **no body `articleSection` is toned** (`tone-cyan|yellow|coral` classes are retired from the build scripts). So a listening block is always the same cyan panel on the paper page, and always contrasts with the section behind it. `.listening-block` now carries `background: var(--listening-bg, var(--cyan))` so video collections read as the same panel. The `tone-*` section mechanism and `article-media-band-{tone}` / `listening-{tone}` variants still exist in CSS but are unused; do not reintroduce them without a deliberate decision.
- **Section divider hairline.** `.article-section` carries a top hairline, but it only separates two sections that sit on the **same background**. CSS drops it automatically where the boundary already has a colour change: a toned section gets no top hairline, and the section that follows coloured content (a toned section, or one ending flush with a full-bleed colour block — one bare `<a id>` jump anchor between is allowed for) gets none either. Do not add per-section divider markup; let the rule in `thecatrave-article.css` decide.
- **Anchor jumps land flush.** `.article-page [id] { scroll-margin-top: 0 }` — the article header is `position: static`, so a Table of Contents click puts the target's own top edge at the viewport top with nothing of the previous block showing. Do not restore a large offset. Deep links to a single `.track-entry[id]` keep a `1rem` gap so the `:target` glow is not clipped.
- Images and listening blocks must be separated by meaningful prose. Never stack a figure directly against a player.
- Reusable media blocks must not introduce fixed desktop widths that cause mobile overflow. Images retain their intrinsic ratio and embedded players remain within their container.
- Page-specific colour changes belong in article CSS, not duplicated component markup.

## Current integration

- `home-articles.mjs` is the single source of truth for homepage article cards and for every article's Read Next block. `homeArticlesWithReadingTimes()` reads each generated article's visible `.reading-time` value and normalises it for the card label. `relatedArticles(currentPage)` returns the same catalog minus the current page, with a stable catalog-position `number`, for `readNext()`. Never type a second independent duration into `index.html` or a per-page related-links list into a generator.
- `build-home.mjs` refreshes the component regions inside `index.html` using explicit start/end markers, including `home-articles`.
- `thecatrave-home.css` and `homepage-runtime.js` remain maintainable source files; `build-home.mjs` inlines them into the marked `home-styles` and `home-runtime` regions. This removes one render-blocking CSS request and one runtime request without creating a second manually maintained copy.
- Homepage Spotify, SoundCloud and Bandcamp iframes keep their platform URL in `data-src`. `homepage-runtime.js` assigns the real `src` when a player approaches the viewport, preserving a directly playable embed while preventing every third-party player from loading during the initial visit.
- The homepage hero uses `img/thecatrave-home-640.webp`, `-720.webp`, `-960.webp` and `-1200.webp`, plus a matching preload. These are display assets; the larger legacy social/source image must not return as the visible LCP source.
- External font CSS is loaded without blocking first paint and retains system fallbacks. The shared article shell uses the same font-loading policy.
- The homepage article grid uses one column on mobile and two from the tablet breakpoint. On wide desktop `#articles` uses `repeat(auto-fit, minmax(min(100%, 12rem), 1fr))` so the row reflows as guides are added (currently six); the in-article Read Next grid, sharing the same card, stays four columns. On tablet the homepage's odd last card spans the full row so there is no half-width gap. Every card link fills the card's complete width and height; hover and keyboard focus use the same full-card cyan state. Do not add a different first-card colour.
- Homepage card images use local responsive assets, intrinsic dimensions, descriptive alt text and `object-fit: cover`. The Bass Music card uses the local 480px and 1400px Loc Ace and Vic archive image; the article's global-history graphic remains an in-article explanatory visual rather than the card thumbnail.
- `build-breakbeat-article.mjs` imports the shared article components.
- `build-uk-article.mjs` imports the shared article components.
- `build-jungle-article.mjs` preserves the approved Jungle editorial copy, then normalises its sections, figures, tables, Sources, listening blocks and YouTube embeds through the same shared components as the newer guides. The copy remains page-specific; repeated markup does not.
- `build-bass-music-article.mjs` assembles the Bass Music guide from the same shared article system.
- All four article generators publish through `articlePage()` and render their visible opening through `articleHero()`. A change to shared metadata, fonts, header/footer structure or hero semantics therefore reaches every current article after rebuilding.

## Build and verification

Run:

```sh
node build-home.mjs
node build-breakbeat-article.mjs
node build-uk-article.mjs
node build-jungle-article.mjs
node build-bass-music-article.mjs
node audit-site-components.mjs
node audit-jungle.mjs
node audit-breakbeat.mjs
node audit-uk.mjs
node audit-bass-music.mjs
```

`build-home.mjs` is idempotent: running it twice must produce no second change. Generated article pages should retain the same public HTML when only the internal component implementation changes.

The Jungle generator refreshes every section wrapper, figure, table, Sources block, marked listening block and YouTube embed from the shared component functions. Update the component or its page-specific data in `build-jungle-article.mjs`; do not edit generated repeated markup in `jungle-music-guide.html` alone.

`audit-site-components.mjs` also checks the generators themselves. All current article generators must consume the shared page shell, hero, contents, figures, tables, Sources, author card, Bandcamp CTA and Read Next components. A block may be absent from a page when its editorial content is genuinely absent, such as an FAQ, but a hand-written duplicate of an existing shared pattern is not allowed.

The shared audit also verifies the homepage article component, card count, live reading-time values, local card assets, article links, the one/two/four-column responsive contract, inlined source CSS/runtime, deferred third-party players, non-blocking fonts, early asynchronous low-priority Analytics and the optimized hero source set.

## Adding a new component

1. Confirm the block repeats or has a clear planned reuse case.
2. Add a focused function to `site-components.mjs`.
3. Escape all dynamic plain-text values.
4. Accept already-sanitised HTML only through an explicitly named parameter such as `bodyHtml`.
5. Use semantic landmarks and descriptive accessible labels.
6. Connect it to a page generator or marked region.
7. Add a structural assertion to `audit-site-components.mjs`.
8. Rebuild all consuming pages and perform visual QA at desktop, tablet and mobile widths.

## Required quality contract for every generated article

- Use `articlePage()` and `articleHero()` rather than writing a local document head or hero.
- Keep exactly one H1, canonical, meta description, site header, article footer and `main#main-content`.
- Include matching published/modified dates in Open Graph and structured data; show the modified date in the hero.
- Give every image alt text and intrinsic width/height; give every iframe a descriptive title.
- Use shared figure, table, Sources and listening primitives instead of copying their markup. When the approved article includes an FAQ, use the shared FAQ primitive and generate its structured data from the same content.
- Run `audit-site-components.mjs`; it verifies the SEO shell, dates, landmarks, media accessibility, dimensions and design-token contract across all current articles.
