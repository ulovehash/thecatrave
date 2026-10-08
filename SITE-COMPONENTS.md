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
- `homeArticlesSection({items})`: complete homepage Articles section. Items provide URL, category, title, description, image metadata and a reading-time value supplied by `home-articles.mjs`. The card's label line shows the reading time only, as "~6 min read" (`cardReadingTime` in `i18n.mjs`; owner, 2026-09-23); `type` and `topic` stay in the catalogue for other uses but are not printed on cards.
- `articlesIndex({items, title})`: the full-catalogue grid on `/articles` (`articles.html`, built by `build-articles-page.mjs` from `allArticlesNewestFirst()`). Same card as the homepage and Read Next. A row of category chips above the grid, drawn like the Selector's chips, filters it by `category` and keeps the choice in the URL (`/articles?c=festivals`); the row is hidden until its script runs, so without JavaScript the page is the whole list. A new catalogue entry appears there on the next build with no other edit. The article header (`siteHeader({variant:'article'})`), both footers, the home header and a button under the homepage grid all link to `/articles`.
- `homeFooter()`: homepage footer.
- `articleFooter()`: compact article footer.
- `analytics()`: shared Google Analytics markup in `<head>`. It uses Google's standard early `async` installation so automatic page views and short visits are preserved, plus `fetchpriority="low"` so the analytics download does not outrank the LCP image.

### Banners and calls to action

- `nowPlayingBanner({title, meta, href, linkLabel})`: the black NOW PLAYING strip used under the homepage header.
- `ownSetListening(index)`: one of the owner's two DJ mixes (`ownSets`) as a full-bleed SoundCloud `articleListeningBand()` with the promotional kicker `A DJ mix by thecatrave`. Every festival guide plays both: `ownSetListening(0)` after its history section, mid-guide, and `ownSetListening(1)` after its last section, before the FAQ. `audit-site-components.mjs` fails if a festival guide loses either.
- Sziget, Boomtown, Monegros, ARC, Airbeat One and EXIT share `build-next-festival-article.mjs`, which supplies the standard article shell while each thin generator owns its facts, media, section order, listening context and sources. The shared builder does not make their editorial content interchangeable. EXIT uses the shell for a history and current-status article rather than inventing a future Novi Sad edition.
- `festivalPlanningGuide({lang, festivalName, intro, ticketIntro, ticketColumns, ticketRows, ticketNote, routes, routeNote, accommodation, spending, packing, avoid, rulesNote, links, checked, checkedLabel})`: the practical decision sheet for an individual festival guide. It requires current ticket prices or an explicit unpublished status, named transport routes, accommodation constraints, food and drink costs when available, a site-specific packing list, prohibited items, direct Google Maps and official links, and a visible check date. External utility links use `nofollow noopener noreferrer`. The component owns its EN/DE/FR interface labels; generators and localized content modules own the verified facts. Enclose it in an `articleSection()` with `.festival-planning-section`. Do not copy its HTML or add the full planner to roundup pages; roundups should link internally to the detailed single-festival guide.
- `content/festival-planning-registry.mjs` supplies the same component to every individual festival guide that does not already own a more detailed planner in its generator. `articlePage()` resolves the canonical path, inserts one localized planning section before the FAQ or author card and adds its Contents link. The registry contains only individual-guide routes; the five English and four translated roundup pages are intentionally absent. `audit-next-festival-guides.mjs` derives the festival inventory from the EN/DE/FR article catalogues and requires exactly one planner on all 70 individual page variants.
- `infoBanner({label, bodyHtml, ariaLabel, className})`: reusable editorial callout for definitions, meanings, factual summaries and similar labelled blocks.
- `articleListeningBand({platform, id, kicker, title, description, src, iframeTitle, fullBleed, tone})`: Spotify or SoundCloud listening strip with contextual editorial copy and a directly playable embed. Curated genre and historical listening blocks use the shared kicker `Essential listening`; this label automatically activates the site-wide responsive geometry, contained to the wide article measure on desktop and edge-to-edge at 760px and below. Their title must say whether the player is an exact track, mix or extended playlist. Artist-promo embeds may instead use a specific contextual kicker. Set `fullBleed: true` manually for other strips that should use the same responsive geometry. `tone` accepts `paper`, `cyan`, `yellow` or `coral`; in practice every block passes `cyan` (see "One colour, site-wide").
- `articleYoutubeEmbed({src, title})`: responsive, directly playable YouTube embed without a custom reveal layer.
- `bandcampSupport({description, tracks, fullBleed})`: one Bandcamp CTA headed "Check me on Bandcamp!" with a short personal thank-you. It features the first selected release in `tracks`, with its dark player, a cyan primary button linking directly to its purchase page and a secondary link to browse the full catalogue. The buy button reuses the Selector's pixel cat face and brief press/blink feedback, with motion removed for reduced-motion users. The animation runs on interaction only, never as an attention-grabbing loop. Do not add separate artwork or repeat the artist or track name outside the player. Use `fullBleed: true`; the shared article layout presents it inline across the viewport on narrower screens and as a compact sticky right rail on wide desktop. The homepage Bandcamp section uses the same copy with a catalogue button and its existing multi-release layout. `description` is a legacy argument retained for existing page generators; the shared CTA copy is used whether or not a release is featured.
- `articlePromoLayout({beforeHtml, promoHtml, afterHtml})`: explicit placement for a page whose editorial structure needs a chosen support-block insertion point. Otherwise `articlePage()` moves the one Bandcamp block after an early substantive section without changing its copy, links or players.
- `articlePage()` checks for a playable thecatrave SoundCloud track or disclosed owned Spotify playlist. If a page has no deliberately placed example, it selects the closest musical fit and inserts a contextual shared listening band after the first prose-complete article section. This is the earliest allowed position after the hero has answered the query and avoids image/embed adjacency. Broad festival, club and DJ-list pages normally receive `Rare Electronic Music`; melodic subjects may receive `Emotional Electronic Music`; genre pages receive the closest matching track. A context-free block before the author card or after Sources is forbidden. `audit-own-tracks.mjs` checks every published article and translation; an artist link or Bandcamp player never satisfies the rule.

### Article navigation and identity

- `articleHero({kicker, title, deck, readingTime, dateModified, dateLabel, summaryHtml, tocItems})`: compact shared article hero with one H1, visible metadata, deck, optional direct answer and contents.
- `articleSection({id, title, bodyHtml, kicker, className})`: semantic section wrapper that preserves the shared width, heading and spacing system. When its heading names a current venue registered in `club-guide-directory.mjs`, it places a visible planning block directly below the heading with Google Maps, a direct venue-specific Resident Advisor or official events page when verified. Never substitute a city-wide calendar for a venue events link. FAQ sections are excluded so planning links never alter FAQ answers or structured data.
- `articleTableOfContents({items, title})`: the shared one-column article contents block. Each item accepts `id` and `label`, or an explicit `href` and `label`.
- `articleFigure({src, srcset, sizes, width, height, alt, caption, className})`: responsive image and caption wrapper. Supply intrinsic dimensions for every raster image.
- `articleTable({headers, rows, className})`: shared accessible, horizontally scrollable table wrapper with consistent row hover. When a `Club` column contains a venue registered in `club-guide-directory.mjs`, the component adds Google Maps and, only when verified, a direct venue-specific Resident Advisor or official events link. It does not show generic transport links or city-wide event calendars. Labels localise through `i18n.mjs`; page generators continue to own the editorial venue facts.
- `articleFaq({items, title, id, openFirst})`: shared FAQ section; questions are plain text and answers are approved HTML.
- `articleSources({bodyHtml, title, id})`: shared compact Sources section.
- `authorCard({filled})`: standard author block with the responsive thecatrave portrait, biography and platform links.
- `readNext({items, title, kicker})`: related-article cards placed after the commercial CTA. Items are catalog rows (`href`, `type`, `topic`, `readingTime`, `title`, `description`, responsive `image`/`srcset`, `width`/`height`, `alt`, `category`) and render the same cover-image card as the homepage grid (`.article-grid` markup and CSS), one column on mobile, two on tablet, four on wide desktop. Feed it from `relatedArticles(currentPage)` in `home-articles.mjs` so every guide links to all the others from one source of truth; do not hand-write per-page item lists.
- `socialLinks({icons, className, label})`: shared social/music links when a custom wrapper is needed.

### Listening collections

- `articleTrackEmbed({platform, id, url, title})`: exact Spotify track, album or playlist, YouTube, SoundCloud or Bandcamp player primitive. Use `spotify-album` only when the release itself is the evidence and label it honestly.
- `articlePlaylistPreview({id, title, curator, description, anchor, owned, lang})`: a playlist recommendation row with visible curator and editorial note, an explicit full-playlist link and one 152px official Spotify preview. It shows the opening tracks without the large empty area produced by a taller iframe and remains distinct from the 420px full-list presentation used on the homepage. Set `owned: true` for a thecatrave-curated list so the relationship is disclosed in the row. The disclosure, link and iframe title come from `i18n.mjs`; translated drafts use `sections[].playlists` in `build-localized-articles.mjs`, which keeps their editorial notes in the draft while reusing this component.
- `articleListeningCollection({id, title, description, label, tone, items, fullBleed, lang})`: multi-set or multi-track route used when several embeds belong to one editorial section. It uses the shared responsive listening geometry by default; use `fullBleed: false` only for an explicitly approved compact exception. `title` and `description` are optional. Omit them when the surrounding H2 and introductory prose already explain the collection, and provide `label` for the landmark's accessible name. Each `items[]` row renders as a two-column `.track-entry` (`copy | player`, top-aligned). Inside the copy, the artist is the mono `.track-meta` kicker, followed by the track or set title and optional ` · YEAR`, then the note. Item titles are `<h4>` when the collection has its own H3 and `<h3>` when it sits directly under the section H2. Use escaped `note` for plain text or trusted `noteHtml` when an entry needs to preserve multiple editorial paragraphs. A hairline (`border-top` on every `.track-entry`) separates the intro from the first item and every pair of items, so the panel reads as one list rather than several repeated cards.
- `articleVideoCard({youtubeId, genre, artist, title})`: captioned exact-track YouTube card.
- `articleVideoCollection({items, description})`: contextual group of captioned video examples. Above 1000px its cyan panel is `100%` of the surrounding `articleSection`, so its outer edges match the prose above and below even when the Bandcamp rail narrows the column. The localised `Essential listening` label sits above a concise factual setup and then the video. Move that setup into `description` instead of duplicating it in the paragraph immediately before the card. `description` is optional: provide a concrete editorial fact or omit it, never filler such as “Watch this set on the official channel” or its translation. The same order and editorial-copy rule is mandatory in every locale. In `build-localized-articles.mjs`, media entries marked `usePreviousParagraph` move the translated paragraph immediately before the placeholder into the card. Two videos use the standard two-column grid; exactly three use three equal columns above 760px so the last card does not leave an empty half-row. The block returns to the wide treatment on tablet and reaches viewport width at 760px and below.

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
- The approved responsive listening stripe is the `fullBleed: true` variant and uses `.article-media-band-full`. Despite the legacy class and parameter names, it is contained to `--article-wide` on desktop and reaches the viewport edges only at 760px and below. It is reusable on any article and must not be recreated with a page-specific selector.
- Every block labelled `Essential listening` uses shared geometry across every article. Single-player bands receive `.article-media-band-full`, multi-track collections receive `.context-listening-full`, and video collections receive `.listening-block-full`. Video collections are the compact exception, matching their surrounding prose column on desktop. This is a component-level invariant, not a page-level styling choice.
- Every Essential-listening stripe uses `tone: 'cyan'`. Body sections are not toned, so the cyan panel always contrasts with the paper page (see "One colour, site-wide" below).
- YouTube examples use `.classic-youtube-embed`; the iframe stays visible, directly playable and at `16:9` on every viewport.
- Every article Table of Contents must use `articleTableOfContents()`. The shared block owns its semantic navigation markup, numbering, hover behaviour and responsive layout; generators provide only the page-specific anchors and labels.
- Author cards use a single compact `Article by thecatrave` heading above the portrait and biography columns. The portrait, biography and first platform link begin on the same horizontal line. At `760px` and below, the heading spans the card, portrait and biography remain paired, and platform links move to a separate two-column row.
- The single Bandcamp block uses `.article-cta-full`. The active placement experiment assigns each browser independent, persistent 50/50 desktop (`rail` versus `inline`) and mobile (`early` versus `middle`) variants. The desktop test applies only at 1360px and wider with at least 700px viewport height; mobile applies at 760px and below. On mobile, `early` retains the position after an early prose section and `middle` moves that same block after a later prose paragraph near the article midpoint. Intermediate widths retain the early full-width block. The release, player, copy, order and links stay identical, with no duplicate block. The assignment script runs in the article head before CSS; blocked storage falls back to rail/early. Localhost preview overrides are `?bc_desktop=rail|inline` and `?bc_mobile=early|middle`. Analytics records `bandcamp_banner_view` at 50% visibility and variant-tagged banner clicks and iframe interactions. These are engagement signals, not confirmed Bandcamp purchases.
- Every current long-form article uses the same shared author card, Bandcamp CTA, Read Next and article footer. Every standalone editorial Spotify or SoundCloud feature uses `articleListeningBand()`; do not add a hand-written `.soundcloud-feature` or `.spotify-feature` copy to an individual generator.
- `Essential listening` is the only site-wide editorial label for curated genre and historical examples. Do not create parallel concepts such as `Listen while you read`, `Jungle Mania listening` or `Essential tracks`. A clearly promotional thecatrave mix or remix may use its own contextual label.
- Exact tracks are the primary evidence for claims about an era, artist or turning point. Use `articleListeningCollection()` and `articleTrackEmbed()` for them, and place them near the passage they support.
- When one exact track belongs to one specific paragraph, a compact `articleListeningBand()` may be used instead of collecting it again at the end of the article. Never make the reader jump from an artist or track discussion to a distant listening section unless the end section provides genuinely different value.
- Playlists and mixes are optional extended routes. Use `articleListeningBand()`, identify them explicitly as an `extended playlist` or `mix` in the title or description, and never present a playlist as though it were one exact track.
- A genre guide should normally contain both exact representative tracks and at least one wider playlist when a credible, relevant playlist is available. The individual tracks prove the editorial argument; the playlist lets the reader continue listening.
- Spotify players use the compact `152px` embed. SoundCloud players use the compact `166px` embed.
- `audit-site-components.mjs` and `audit-dubstep.mjs` still fail on a full-bleed media block whose `tone` clashes with an enclosing `tone-*` section. No section is toned any more (see "One colour, site-wide" below), so this now only guards against a regression that reintroduces a toned section.
- All three Essential-listening block types (`.context-listening`, `.article-media-band`, `.listening-block`) use a cyan panel, **no outer frame**, and a symmetric `margin-block: var(--media-space)`. Audio bands and collections use the wide article measure on desktop; video collections use the prose measure above 1000px. All reach the viewport edges at 760px and below. Inside `.context-listening`, use the per-`.track-entry` hairlines described above. A listening block that is the **last child** of its `articleSection` sits flush with the section edge (`:has()` zeroes the section's `padding-bottom` and the block's `margin-bottom`) so no strip of the section's own colour trails after it. Do not add an outer frame or a top-only margin.
- **One colour, site-wide.** Every guide follows the same rule: each Essential-listening block (`articleListeningCollection`, `articleListeningBand`, `articleVideoCollection`) is `tone: 'cyan'`, and **no body `articleSection` is toned** (`tone-cyan|yellow|coral` classes are retired from the build scripts). So a listening block is always the same cyan panel on the paper page, and always contrasts with the section behind it. `.listening-block` now carries `background: var(--listening-bg, var(--cyan))` so video collections read as the same panel. The `tone-*` section mechanism and `article-media-band-{tone}` / `listening-{tone}` variants still exist in CSS but are unused; do not reintroduce them without a deliberate decision.
- **Section divider hairline.** `.article-section` carries a top hairline, but it only separates two sections that sit on the **same background**. CSS drops it automatically where the boundary already has a colour change: a toned section gets no top hairline, and the section that follows coloured content (a toned section, or one ending flush with a full-bleed colour block — one bare `<a id>` jump anchor between is allowed for) gets none either. Do not add per-section divider markup; let the rule in `thecatrave-article.css` decide.
- **Anchor jumps land flush.** `.article-page [id] { scroll-margin-top: 0 }` — the article header is `position: static`, so a Table of Contents click puts the target's own top edge at the viewport top with nothing of the previous block showing. Do not restore a large offset. Deep links to a single `.track-entry[id]` keep a `1rem` gap so the `:target` glow is not clipped.
- Images and listening blocks must be separated by meaningful prose. Never stack a figure directly against a player.
- Reusable media blocks must not introduce fixed desktop widths that cause mobile overflow. Images retain their intrinsic ratio and embedded players remain within their container.
- Page-specific colour changes belong in article CSS, not duplicated component markup.

## Current integration

- `home-articles.mjs` is the single source of truth for homepage article cards and for every article's Read Next block. `homeArticlesWithReadingTimes()` reads each generated article's visible `.reading-time` value and normalises it for the card label. `relatedArticles(currentPage)` returns the best-matching few from the same catalog, minus the current page, for `readNext()`. Every entry carries a `category`, one of the four keys in `i18n.mjs` `categories` (`music-history` Music history, `festivals` Festivals, `rave-spots` Rave spots, `digging` Digging, named by the owner 2026-09-23); the card shows it as a chip in place of the retired A01-style catalogue number, and the build throws on an entry with none or an unknown one. Never type a second independent duration into `index.html` or a per-page related-links list into a generator. The homepage grid uses `homeArticlesNewestFirst()`, which orders cards by each generated page's `article:published_time`, newest first. Same-day ties go to the entry added to the catalogue later. Read Next keeps catalogue order, so its tie-breaking stays stable. The grid always shows exactly the eight newest articles (`HOME_CARDS` in `home-articles.mjs`), two full rows of four: publishing a new article drops the oldest off the homepage automatically. Every article stays in the catalogue and in Read Next. The old per-entry `onHome: false` flag is retired.
- `build-home.mjs` refreshes the component regions inside `index.html` using explicit start/end markers, including `home-articles`.
- `thecatrave-home.css` and `homepage-runtime.js` remain maintainable source files; `build-home.mjs` inlines them into the marked `home-styles` and `home-runtime` regions. This removes one render-blocking CSS request and one runtime request without creating a second manually maintained copy.
- Homepage Spotify, SoundCloud and Bandcamp iframes keep their platform URL in `data-src`. `homepage-runtime.js` assigns the real `src` when a player approaches the viewport, preserving a directly playable embed while preventing every third-party player from loading during the initial visit.
- The homepage hero uses `img/thecatrave-home-640.webp`, `-720.webp`, `-960.webp` and `-1200.webp`, plus a matching preload. These are display assets; the larger legacy social/source image must not return as the visible LCP source.
- External font CSS is loaded without blocking first paint and retains system fallbacks. The shared article shell uses the same font-loading policy.
- The homepage article grid uses one column on mobile and two from the tablet breakpoint. On wide desktop `#articles` uses `repeat(auto-fit, minmax(min(100%, 12rem), 1fr))` so the row reflows as guides are added; the in-article Read Next grid, sharing the same card, stays four columns. On tablet the homepage's odd last card spans the full row so there is no half-width gap. Every card link fills the card's complete width and height; hover and keyboard focus use the same full-card cyan state. Do not add a different first-card colour.
- Homepage card images use local responsive assets, intrinsic dimensions, descriptive alt text and `object-fit: cover`. The Bass Music card uses the local 480px and 1400px Loc Ace and Vic archive image; the article's global-history graphic remains an in-article explanatory visual rather than the card thumbnail.
- `build-breakbeat-article.mjs` imports the shared article components.
- `build-uk-article.mjs` imports the shared article components.
- `build-jungle-article.mjs` preserves the approved Jungle editorial copy, then normalises its sections, figures, tables, Sources, listening blocks and YouTube embeds through the same shared components as the newer guides. The copy remains page-specific; repeated markup does not.
- `build-bass-music-article.mjs` assembles the Bass Music guide from the same shared article system.
- The focused listening lists use the same shell with media matched to intent: `build-best-soundcloud-dj-mixes-article.mjs` uses `articleListeningBand()`, `build-best-techno-mixes-article.mjs` uses `articleVideoCollection()`, and `build-best-house-music-playlists-spotify-article.mjs` uses `articlePlaylistPreview()`. Their page-specific gate is `audit-listening-guides.mjs`.
- All article generators publish through `articlePage()` and render their visible opening through `articleHero()`. A change to shared metadata, fonts, header/footer structure or hero semantics therefore reaches every current article after rebuilding.

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

## Translations

Every shared component takes a `lang`, defaulting to `en`. It switches only the
strings the component writes itself: navigation, contents, the author card, the
Bandcamp call to action, the footer, the Selector bar, the reading line and the
`Essential listening` label. They live in `i18n.mjs`, one block per language.
A page's own editorial copy never comes from there.

- `articlePage({lang, alternates})` sets the document's `lang`, writes the
  `hreflang` links for the translations passed in, and makes the stylesheet and
  `img/` paths root-relative when the page sits in a subdirectory (`/de/...`).
  Both sides of a pair must declare each other, so English generators take their
  `alternates` from `alternatesFor(path)` in `pages.mjs` and translated pages
  declare theirs from their content module.
- A translated guide is two files: `de/<name>-draft.md`, the article with the
  same media placeholders as the English draft, and `content/de/<name>.mjs`,
  the metadata, section list, assets, sources and CTA copy.
  `build-localized-articles.mjs` renders every content module under `content/`,
  so a further translation is two new files and no new generator.
- Guides not shaped like a festival guide use the same generator. The English
  genre guides place listening blocks by paragraph index in code; the German
  draft places them with `[Embed: <key>]` lines at the same positions, and the
  content module builds the blocks (`articleListeningCollection({lang})`, so
  the label is `Zum Reinhören`). Optional module fields: `ownSetAfter` (omit it
  and the page carries no mixes of the owner's, as the club, genre and Burning
  Man pages do in English), `sections[].tocLabel`, `minReadingMinutes` and
  `image` for the Article schema. Placeholder keys match longest first, as in
  the English generators. A draft paragraph of `- ` lines renders as a list, a
  section may open straight on its first `###` subheading, `sources[]` entries
  may be `{html}` when one line groups several links, and `sourcesNote` adds a
  last Sources line that is not a link (the Europe festivals, acid house and
  grime translations, 2026-09-22). A translated festival page with next-year
  dates also needs its own entry in `festival-editions.mjs`, under its
  translated heading.
- `pages.mjs` carries `lang` and `translationOf` for translated entries. The
  gate reads them: each page is held to the chrome of its own language, to its
  own keyword map (`keywords/de-<name>.json`), to its own index and Read Next
  block, and to the media map of the page it was translated from.
- A new language is a locale block in `i18n.mjs`, an entry in
  `build-articles-page.mjs`, a catalogue in `home-articles.mjs` (`catalogs`),
  its own copy of the owner's two mixes in `ownSets` (`site-components.mjs`),
  and the pages. French was added this way on 2026-09-18 (`/fr/`,
  `/fr/articles`). Translated pages take their hreflang links from
  `alternatesFor()`, so every page of a family names every language.
- The header carries a language switcher, `languageSwitch()`, on every page
  whose hreflang family has more than one language, and on no other: a
  `<details>` dropdown showing the current language, listing the same page in
  each language by its own name (`languageName` in `i18n.mjs`). A few lines of
  inline script close it on an outside click and on Escape. The gate checks the
  header against the family and that English-only pages carry no switcher.
- Each language has its own articles index, built by `build-articles-page.mjs`
  from that language's catalogue in `home-articles.mjs`. The RSS feed stays
  English.
- The home page and the Selector exist in German and French too (`/de/`,
  `/fr/`, `/de/selector`, `/fr/selector`, from 2026-09-18), built by their own
  generators, not by `build-localized-articles.mjs`:
  - `build-home.mjs` treats `index.html` as the template. The component regions
    take `lang`; every hand-written English string outside them is paired with
    its translation in `content/<lang>/home.mjs` and swapped whole (as a text
    node or a quoted value). The build fails if a pair is no longer found or if
    any English text node is left over, so an edit to the English home page
    must be made in both content modules as well. Names that stay the same (the
    mix titles) are listed in `keep`.
  - `build-selector.mjs` holds the English copy; `content/<lang>/selector.mjs`
    exports the same shape as a function of the live numbers, plus `ui`, the
    words `selector-runtime.js` writes itself (modes, lengths, buttons, the
    Saved list). The generator writes `ui` into a `#sel-i18n` JSON block and the
    runtime falls back to its English for anything missing. The runtime loads
    `/selector-data.min.json` root-relative so every language shares one file.
  - Chrome that points somewhere follows the language: the wordmark, the
    footer's home link and the breadcrumb go to `homePath`, the header link and
    the Selector bar to `selectorPath` (`i18n.mjs`). Article cards end in the
    language's own `readArticle`.
  - On the home header the language switcher is its own cell of the header
    grid, not the last item of the nav: the home nav has six links and scrolls
    sideways on a phone, and a dropdown inside a scrolling row either gets
    clipped or widens the page. The article header keeps it inside the nav.

## Updating the Selector catalogue

Adding a channel to `selector-channels.mjs`, or picking up new uploads, is one command: `npm run selector:refresh`. It runs the fetch, the Keep Hush keyword tags, the YouTube title/description/keyword pass, `apply-genres.mjs`, the page build and `audit-selector.mjs`, in that order. Never run `scripts/fetch-sets.mjs` alone: it rewrites `selector-data.json` with title-derived genres only, and drum and bass once dropped from 2,030 sets to 45. `audit-selector.mjs` now fails if under 40% of sets carry a specific genre. After adding a channel, also run `python3 scripts/fetch-channel-logos.py` and `python3 scripts/channel-colors.py`. A genuinely single-genre channel goes in `CHANNEL_GENRES` in `scripts/genre-manual.mjs`; a mixed one does not. The MusicBrainz artist lookup (`scripts/enrich-genres.mjs`) takes hours and stays a separate, optional step.

### Track, DJ-mix and playlist panel width

The shared own-track, DJ-mix and own-playlist panels (`aria-labelledby="own-track-*"`, `aria-labelledby="own-set-*"` and `aria-labelledby="own-playlist-*"`) match the surrounding prose width at every viewport, including mobile and the desktop Bandcamp rail layout. Copy sits above the player in one column. Other listening collections retain their existing width rules.

### Personal introduction for the weekends mix

The “I lost so many weekends raving and I wanna lose some more” promotion uses the owner-approved personal introduction consistently across article bands and homepage cards in English, German and French. `ownSetListening(1)` uses the shared description even when an older caller supplies contextual copy. Its title has no appended DJ-mix suffix; the label identifies it as a DJ mix by thecatrave, with lowercase artist spelling preserved on screen. The Bass Music and UK electronic music bands carry the same localized copy.

Club planning asides use the surrounding section title as their accessible name (or the venue and city for the page-level block), so repeated planning blocks remain distinguishable to assistive technology.

The legacy Jungle generator removes generated Bandcamp midpoint markers before reusing its preserved body. Rebuilds must emit exactly one marker per article; `audit-site-components.mjs` checks this to prevent duplicate placement anchors accumulating.

Club roundups do not display generic travel-check reminders or “Planning links checked” dates in tables or venue blocks. Keep verification dates in the research records and retain useful venue links.

### One practical section per club guide

Club guides use one `#visiting` section immediately after the hero and contents. Its localized heading is “Plan your visit”, “Plane deinen Besuch” or “Préparer votre visite”. The closed Printworks guide instead labels its section “Printworks: closure and reopening”. Individual club pages consolidate hours, tickets, dress and transport information into subsections, with practical tables rendered as paragraphs. Roundups retain their venue comparison tables and move existing travel and door advice into the early section. Listening passages stay with the editorial body.

`articlePage()` calls `consolidateClubVisit()` from `club-visit-layout.mjs`, using `articleSection()` and `articleTableOfContents()` for the output. The explicit route and section mapping lives in `content/club-visit-layouts.json`; factual prose stays in each article's draft. Former section IDs remain on their corresponding subsections, and contents links are rebuilt to match. Routes outside that mapping pass through unchanged.

Run `node scripts/build-club-guides.mjs` and `node audit-club-visits.mjs` after edits. The audit covers all 57 club-guide routes, including translations, and checks one early planner, retained legacy anchors, metadata, original publication dates, media and heading order. `content/club-visit-preservation.json` records the pre-consolidation invariants. The build updates only the configured club consumers, so an unrelated guide is not regenerated for this route-scoped change.
