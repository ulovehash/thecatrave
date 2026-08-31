# Breakbeat guide: SEO preservation report

## Elements that must not change

- Public URL: `/breakbeat-guide`
- Canonical: `https://thecatrave.com/breakbeat-guide`
- One indexable English page for the genre/definition intent
- Existing internal links pointing to the page
- Existing backlinks and social URLs
- Historically indexed fragment anchors listed below

The proposed title, meta description and H1 are recommendations. They should be implemented together with the rewritten copy, then monitored as one controlled update. No redirect is required.

## Old-to-new content map

| Current section | New destination | Treatment | SEO reason |
|---|---|---|---|
| What Is Breakbeat? | Breakbeat as a Rhythm and Breakbeat as a Genre | Rewrite and expand | Keeps the strongest definition intent and `#what-is-breakbeat` |
| What Is the Breakbeat Genre? | Same opening definition section | Merge | Removes duplication and the inaccurate late-1990s origin claim |
| Breakbeat Origins | Where Did Breakbeat Come From? | Keep, fact-check and reorganise | Preserves origin/history relevance |
| Pop Culture | Short “Breakbeat Beyond the Club” callout | Condense | Retains useful breadth without diluting the genre intent |
| Structure, Rhythm, Swing and Feel | What Does Breakbeat Sound Like? | Keep and simplify | Supports `breakbeat rhythm`, sound and BPM queries |
| Drum programming and production | How Breakbeat Rhythms Are Made | Condense to 300–400 words | Keeps useful context while avoiding competition with a future production guide |
| Sampling breaks | Origins plus concise production section | Split by purpose | Historical samples stay in history; technique stays in production |
| Sampling Ethics and AI | Sources note where required | Remove as a standalone section | Weak relationship to the dominant genre intent; unverified AI material removed |
| UK Evolution Timeline | How Breakbeat Developed in the UK | Keep and rewrite by era | Preserves historical coverage without year-by-year bloat |
| Revival Cycles | Nu-skool history plus Breakbeat Today | Merge and correct | Avoids unsupported death/revival claims |
| Forums and Archives | Pirate radio, record shops and dubplates | Condense and integrate | Keeps scene infrastructure without a tangential chapter |
| DJ Mixing Before Digital | Pirate radio, record shops and dubplates | Condense and integrate | Retains useful technique/history with lower weight |
| Pioneers, Labels and Pirate Stations | UK history plus Essential Artists and Tracks | Split by function | Keeps entities and scenes while improving topical clarity |
| Breakbeat Today, TikTok and AI | Breakbeat Today | Rewrite | Keeps contemporary relevance; removes unsupported platform statistics |
| Culture: Race, Class and Resistance | Origins and UK history | Integrate | Preserves Black and sound-system histories without a generic standalone essay |
| Academia | Sources and Further Listening | Condense | Keeps credible support and removes abstract filler |
| Iconic Tracks Timeline | Essential Breakbeat Artists and Tracks | Curate and explain | Preserves artist/track entities with stronger reader value |
| Final Thoughts | No direct replacement | Remove | Repeated existing conclusions without satisfying a distinct query |
| FAQ | Expanded FAQ | Keep and improve | Directly covers high-impression question queries |
| References | Sources and Further Listening | Curate and verify | Keeps authority while removing weak or generic links |

## Anchor preservation map

| Existing anchor | New placement |
|---|---|
| `#what-is-breakbeat` | Breakbeat as a Rhythm and Breakbeat as a Genre |
| `#pop-culture` | Breakbeat Beyond the Club callout |
| `#structure` | What Does Breakbeat Sound Like? |
| `#sampling` | Choosing and Chopping a Break |
| `#sound-design` | Programming Drums That Still Feel Broken |
| `#make-breakbeat` | How Breakbeat Rhythms Are Made |
| `#timeline` | How Breakbeat Developed in the UK |
| `#revival` | Breaks Return Without One Unified Revival |
| `#forums` | Pirate Radio, Record Shops and Dubplates |
| `#djs` | Pirate Radio, Record Shops and Dubplates |
| `#culture` | Pirate Radio, Record Shops and Dubplates |
| `#pioneers` | Essential Breakbeat Artists and Tracks |
| `#tracks` | Essential Breakbeat Artists and Tracks |
| `#today` | Breakbeat Today |
| `#faq` | Frequently Asked Questions |
| `#academia` | Sources and Further Listening |

Each ID must appear once only in the final HTML. Where several legacy anchors point to one condensed section, place separate empty anchor elements immediately before the relevant heading.

## Content reserved for future pages

The following subjects should be moved into a separate production guide rather than deleted from the site permanently:

- breakbeat drum patterns;
- detailed DAW workflow;
- chopping in Ableton or other software;
- sample selection and clearance;
- signal flow;
- sound-design chains;
- plugins and sample packs.

The future page can target production-led queries. The genre guide should link to it only after that page exists.

## Internal links to preserve or add

- `/uk-electronic-music-evolution`
- `/jungle-music-guide`
- `/#music`
- `/#mixes`
- `/#bandcamp` or the direct Bandcamp profile
- Future production guide after publication

The homepage and related articles should continue linking to `/breakbeat-guide` using natural genre-focused anchors such as “breakbeat music guide” or “guide to breakbeat”.

## Highest-risk changes

1. Replacing the current title and H1 may cause temporary ranking movement, but aligns them more closely with the dominant definition/genre intent.
2. Reducing the production section may reduce visibility for drum-pattern queries. Those queries are currently secondary and should later be served by a dedicated page.
3. Removing large AI, TikTok and academia sections is low risk for the main query cluster, but the final version should retain any verified links that have earned external references.
4. Replacing the tracks timeline with curated examples is safe only if important artist and track entities remain present in readable HTML.
5. Removing or duplicating fragment IDs is avoidable technical risk and must be checked before publication.

## Search Console monitoring set

Monitor these query groups separately after publication:

### Core genre and definition

- breakbeat
- breakbeat music
- break beat
- break beats
- breakbeats
- what is breakbeat
- what is a breakbeat
- what is breakbeat music
- breakbeat genre
- breakbeat meaning

### Supporting informational queries

- breakbeat rhythm
- breakbeat BPM
- breakbeat subgenres
- breaks music genre
- breakbeat artists
- Florida breaks
- nu-skool breaks
- breakbeat hardcore
- breakbeat techno

### Comparison queries

- breakbeat vs drum and bass
- breakbeat vs jungle
- breakbeat vs big beat
- breakbeat vs broken beat
- breakbeat vs breakcore

### Production queries to watch for later separation

- breakbeat patterns
- breakbeat drum pattern
- how to make breakbeat drums
- breakbeat samples

Compare the 28 days before publication with the first 28 days after publication, but do not judge the update from the first few days. Review clicks, impressions, CTR and average position by query group and country. Keep translated-result impressions separate from English query performance.

## Pre-publication checks

- Confirm one H1.
- Confirm unchanged URL and canonical.
- Confirm every preserved anchor exists once.
- Confirm no old internal link points to a removed fragment without a replacement.
- Validate every iframe and its embed permissions.
- Validate title, meta description, Open Graph and structured data.
- Check desktop and mobile layouts.
- Check table overflow and player responsiveness.
- Confirm all image dimensions, alt text and captions.
- Run a broken-link scan.
- Save a copy of the current HTML before replacement.
