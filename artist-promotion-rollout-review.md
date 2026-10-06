# Artist promotion rollout review, 2026-10-06

Scope: all 197 published articles (79 English, 59 German, 59 French). This is a shared presentation and exact-track placement change, not an editorial rewrite. The user approved the artist-track rule and the Bandcamp desktop/mobile placement after the layout research.

- Before the change, 76 articles had an exact thecatrave SoundCloud or Spotify track player. The shared article component adds one compact, clearly labelled SoundCloud player to the other 121 (61 English, 30 German, 30 French), before the author card. A mix, playlist, artist profile and Bandcamp purchase player do not count.
- The added track is "Berlin Race 1909". The label identifies it as thecatrave's own track. It is not described as a recording from, or an influence on, any venue, festival or historic scene.
- The original Bandcamp copy, release selections and URLs remain unchanged. The shared layout moves the single block after an early substantive passage on narrow screens, and into a compact sticky right rail at 1360px or wider when viewport height is at least 700px. Belgrade uses an explicit insertion point after its current-clubs overview.
- Article URLs, canonicals, SEO titles, meta descriptions, H1s, headings, anchors, Article dates and factual copy remain unchanged. The sitemap's file-change dates update from the rebuilt pages.
- `audit-own-tracks.mjs` is the permanent 197-page track check. `audit-site-components.mjs` also checks unique IDs; responsive layout and accessibility remain part of `npm run check`.
