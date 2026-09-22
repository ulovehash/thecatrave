# Best Spotify playlists: German and French translation handoff

Prepared 22 September 2026.

## Decision

Translate the approved English article into German and French. Both pages keep the same listener-recommendation intent, twelve playlists, compact three-track-style Spotify previews, comparison table with direct playlist links, FAQ, original image and support block.

The translations do not become regional charts. They recommend the same internationally relevant curators and preserve the English page's exclusion of playlist creation, artist submissions and follower-count rankings.

## Cost-controlled search check

No Ahrefs units were spent. The live German and French search results were inspected only to verify wording and page type.

- German results use `beste Spotify-Playlists` and `gute Spotify-Playlists` for editorial recommendation lists. Spotify's German support page owns the separate product-help intent.
- French results use `meilleures playlists Spotify` and frequently narrow by genre or use case. Spotify's French support page owns the separate product-help intent.
- Both result sets mix popularity lists, mood lists and editorial recommendations. The translated pages retain the sharper human-curation distinction from the approved English article.

Volumes are intentionally recorded as `not measured` in the keyword maps. Paid expansion is deferred until Search Console supplies impressions or a future title, outline or intent decision genuinely depends on it.

## Metadata and paths

| Language | Path | Title | Primary wording |
|---|---|---|---|
| German | `/de/beste-spotify-playlists` | `Beste Spotify-Playlists: 12 von Menschen kuratierte Empfehlungen` | `beste spotify playlists` |
| French | `/fr/meilleures-playlists-spotify` | `Meilleures playlists Spotify : 12 sélections humaines` | `meilleures playlists spotify` |

The English canonical remains unchanged. All three pages declare the complete English, German and French hreflang family.

## Editorial preservation

- Preserve all twelve playlist names, owners and Spotify IDs.
- Preserve the disclosure on the two thecatrave playlists.
- Preserve the compact 152px player and explicit full-playlist link.
- Preserve the distinction between human judgement and follower count.
- Preserve the image/player spacing and the end sequence.
- Localise shared player disclosure, link and iframe labels through `i18n.mjs`, never page-local copied markup.

## Media and links

The translations reuse the English article's original project-owned still life and the same verified Spotify embeds. This is the same article in another language, so changing the evidence would be misleading. Alt text and captions are translated. The final comparison table links directly to all twelve Spotify playlists in both languages.

## Review verdict

Ready after build and QA. The factual claims, playlist IDs and editorial selection were accepted in `best-spotify-playlists-editorial-review.md`; the translation introduces no new factual claim. Language review must still check natural German and French, untranslated chrome, em dashes, heading hierarchy, media adjacency and direct playlist links.
