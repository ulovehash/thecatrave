# Best Spotify playlists: media and player plan

Prepared 21 September 2026.

| Section | Asset or player | Purpose | Placement | Mobile treatment | Verified |
|---|---|---|---|---|---|
| Introduction | original playlist still life | establishes physical, human curation without reusing Spotify or competitor artwork | after the first two introductory paragraphs | responsive 3:2 image | yes |
| Every playlist entry | compact Spotify playlist embed | shows the playlist itself and approximately three visible track rows rather than a full-page track list | after the editorial note for that entry | full-width within the card | URLs checked |
| Support | two thecatrave Bandcamp releases | direct route to support the artist | after Sources | standard full-bleed support block | existing verified IDs |

## Original image

- Source: generated for this article with the built-in image generation tool.
- Prompt summary: tactile underground electronic-music still life with translucent cases, abstract player, wired headphones and track-list scraps on a scratched club table; direct flash; paper, black, cyan and coral; no logos or legible text.
- Source file: `img/spotify-playlists/playlist-still-life-source.png`.
- Article sizes: `playlist-still-life-1200.webp`, `playlist-still-life-320.webp`.
- Social crop: `img/og/best-spotify-playlists.jpg`.
- Alt text: `Wired headphones, a portable music player and two translucent cases arranged on a scratched club table.`
- Licensing: original project asset; no third-party photography.

## Player decision

Do not render three separate track iframes per playlist. Twelve entries would create thirty-six players and turn the page into a slow wall of repeated embeds.

Each entry instead uses one official Spotify playlist iframe at a compact height. The frame presents the playlist identity and a short visible track preview while keeping the full list inside Spotify. A separate `Open full playlist` link makes the destination explicit.

The component must:

- use a unique iframe title;
- load lazily;
- state the curator in visible copy;
- disclose the two thecatrave-owned entries;
- keep the player inside its card at all viewport widths;
- avoid sitting directly against the article figure.
