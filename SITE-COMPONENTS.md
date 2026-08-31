# thecatrave reusable page components

The shared build-time component library lives in `site-components.mjs`. It returns complete semantic HTML strings, so published pages do not depend on client-side JavaScript and search engines receive the full page immediately.

## Available components

### Global structure

- `siteHeader({variant, navItems})`: homepage or article header with the wordmark, optional navigation and shared social icons.
- `homeFooter()`: homepage footer.
- `articleFooter()`: compact article footer.
- `analytics()`: shared Google Analytics markup.

### Banners and calls to action

- `nowPlayingBanner({title, meta, href, linkLabel})`: the black NOW PLAYING strip used under the homepage header.
- `infoBanner({label, bodyHtml, ariaLabel, className})`: reusable editorial callout for definitions, meanings, factual summaries and similar labelled blocks.
- `articleListeningBand({platform, id, kicker, title, description, src, iframeTitle})`: full-width Spotify or SoundCloud listening strip with contextual editorial copy and a directly playable embed.
- `articleYoutubeEmbed({src, title})`: responsive, directly playable YouTube embed without a custom reveal layer.
- `bandcampSupport({description, tracks})`: compact Bandcamp CTA or an expanded CTA with relevant embedded releases.

### Article navigation and identity

- `authorCard({filled})`: standard author block with thecatrave biography and platform links.
- `readNext({items})`: related-article cards placed after the commercial CTA.
- `socialLinks({icons, className, label})`: shared social/music links when a custom wrapper is needed.

## Page-building principles

- Components are assembled during the build, never fetched into the browser.
- Components contain structure and stable site-wide content. Page-specific editorial copy stays in the page draft or generator.
- A component must accept parameters when its meaning changes by page. Do not duplicate the component and edit one copy.
- A visual pattern is not automatically a component. Extract it only when it repeats or has a realistic reuse case.
- Shared component output must remain semantic, accessible and valid without CSS or JavaScript.
- Do not place SEO-critical text exclusively inside a client-rendered component.

## Reusable article layout contract

- Listening strips use `.article-media-band`, `.article-media-copy` and `.article-listening-feature`. Their copy and player form a two-column band on desktop and one column at `760px` and below.
- Jungle pages may extend a listening strip to the viewport edges, but the generic component names and semantic structure must remain unchanged.
- YouTube examples use `.classic-youtube-embed`; the iframe stays visible, directly playable and at `16:9` on every viewport.
- Spotify players use the compact `152px` embed. SoundCloud players use the compact `166px` embed.
- Images and listening blocks must be separated by meaningful prose. Never stack a figure directly against a player.
- Reusable media blocks must not introduce fixed desktop widths that cause mobile overflow. Images retain their intrinsic ratio and embedded players remain within their container.
- Page-specific colour changes belong in article CSS, not duplicated component markup.

## Current integration

- `build-home.mjs` refreshes the component regions inside `index.html` using explicit start/end markers.
- `build-breakbeat-article.mjs` imports the shared article components.
- `build-uk-article.mjs` imports the shared article components.
- `build-jungle-article.mjs` preserves the approved Jungle article body while assembling the current article shell and shared components.

## Build and verification

Run:

```sh
node build-home.mjs
node build-breakbeat-article.mjs
node build-uk-article.mjs
node build-jungle-article.mjs
node audit-site-components.mjs
node audit-jungle.mjs
node audit-breakbeat.mjs
```

`build-home.mjs` is idempotent: running it twice must produce no second change. Generated article pages should retain the same public HTML when only the internal component implementation changes.

The Jungle generator refreshes every marked listening and YouTube block from the shared component functions. Update the component or its data in `build-jungle-article.mjs`; do not edit generated player markup in `jungle-music-guide.html` alone.

## Adding a new component

1. Confirm the block repeats or has a clear planned reuse case.
2. Add a focused function to `site-components.mjs`.
3. Escape all dynamic plain-text values.
4. Accept already-sanitised HTML only through an explicitly named parameter such as `bodyHtml`.
5. Use semantic landmarks and descriptive accessible labels.
6. Connect it to a page generator or marked region.
7. Add a structural assertion to `audit-site-components.mjs`.
8. Rebuild all consuming pages and perform visual QA at desktop, tablet and mobile widths.
