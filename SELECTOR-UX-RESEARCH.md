# Selector page: UX, design and copy research

Gathered 6 November 2026 for a redesign of `thecatrave.com/selector`, following
`SELECTOR-UX-RESEARCH-PROMPT.md`. This is evidence, not a decision. No option is
picked; another reviewer rules.

Evidence tiers: **A** published research or usability studies, **B** official
platform or standards guidance, **C** live products opened on 6 Nov 2026, **D**
practitioner opinion. **[old]** marks a source from before 2023. **[2nd]** means
the original page was not opened and only secondary summaries of it were read.

Inputs used: GA4 landing-page export, 9 Oct to 5 Nov 2026, compared with 11 Sep to
8 Oct (`Landing_page_Landing_page-10.csv`). GSC export, last 28 days compared with
the previous 28 (`thecatrave-15/`). The repo files `selector.html`,
`build-selector.mjs` and `selector-runtime.js`. Live measurements of the page in
the Browser pane at 731 px desktop and at a 375×812 mobile emulation.

---

## 1. Summary: the ten best-evidenced findings

1. **The lag has one measured cause: the button waits for the whole catalogue (C).**
   The button reads "Loading catalogue…" and is `disabled` until the browser has
   fetched and parsed `/selector-data.min.json`. That file is 1,848 KB over the
   wire and 3,920 KB decoded, and it holds all 67,005 sets. It is fetched with
   `cache: 'no-cache'`. On a fast connection the data arrived at 1,357 ms, while
   the page's LCP was 620 ms, so the page looks ready about 0.7 s before it works.
   At Lighthouse's mobile preset of 1.6 Mbps (B, below) the file alone needs about
   9.2 s. This is logged as the open defect `selector-button-waits-for-catalogue`.
2. **Response-time limits put a 9 s wait past the point where attention breaks
   (A [old]).** NN/g sets three limits. 0.1 s feels instant. Up to 1 s keeps the
   user's flow of thought. At 10 s attention leaves the task. Nielsen says these
   have not moved since 1993.
3. **INP must stay at or under 200 ms at the 75th percentile (B).** That is web.dev's
   "good" threshold. Above 500 ms is "poor". The press-to-feedback step is an
   interaction INP will measure.
4. **Organic search is about 10% of the page's traffic (C, own data).** In the 28
   days to 5 Nov, `/selector` had 129 sessions. 13 were organic. Email had 39,
   direct 35 and AI assistants 25. GSC shows 31 impressions and 4 clicks at an
   average position of 3.58. Cutting the long copy puts very little search traffic
   at risk, in absolute terms.
5. **The FAQPage schema earns no rich result on this site (B).** Since August 2023
   Google shows FAQ rich results only for well-known government and health sites.
   Google said removing the markup is not necessary. It also said the change was
   not a ranking change.
6. **The phrase in the current title gets no measurable search impressions (C, own
   data).** GSC has no "discover new music" query for the site in either period.
   The only tool-intent query is "random dj set": 3 impressions at position 5,
   previously 4 at position 3.5. Keyword Planner puts "random dj set" at 10–100
   searches a month worldwide. Generic random-music queries are far larger:
   "random song generator" and "song randomizer" are each 10K–100K, but they ask
   for songs, not sets. `how-to-find-new-music` already holds the discovery
   intent, with 44 impressions.
7. **Ranking single-action tools put the tool's name in the title and in the H1 (C).**
   Picker Wheel, Wheel of Names, Random Word Generator, RANDOM.ORG Coin Flipper, Xe
   and Bitwarden all do this. The current Selector H1, "Press the button. Get a
   set.", is an instruction with no noun in it.
8. **Music players lead with sound and carry almost no text (C).** Poolsuite shows 32
   words, Cercle 74, Radiooooo 142 and Radio Garden 168. Two of them rewrite the
   tab title to the track that is playing: Radiooooo and Poolsuite. The Selector
   carries about 1,340 words, and on a phone the page is 5,394 px tall, about 6.6
   screens.
9. **Choice overload is a weak and conditional effect (A [old]).** A meta-analysis
   covered 50 experiments and 5,036 people (Scheibehenne et al. 2010). It found a
   mean effect near zero. The effect was smaller for people who already have
   preferences. "Too much choice" should not be the page's central claim as if it
   were settled science.
10. **Tap targets must be at least 24×24 CSS px, or spaced so they work like it (B).**
    This is WCAG 2.2 SC 2.5.8, Level AA. The main button measures 288×65 px and
    passes easily. The smaller controls (Save, tabs, chips) are not measured here.

---

## 2. Part 1. Graphic design and layout

### Above the fold

- **(C)** On a 375×812 mobile viewport the main button's top edge sits at 421 px,
  in the lower half of the first screen. After a press, the player appears at
  538 px and is 161 px tall. The button and the start of the player are both on
  the first screen.
- **(A [old])** Hoober, 2013, watched 1,333 people in public. 780 of them were
  touching the screen. 49% used one hand, 36% cradled the phone and 15% used two
  hands. Of the one-handed users, 67% used the right thumb
  ([UXmatters](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php),
  with figures as reported by [Garcia Media](https://garciamedia.com/?p=7518) [2nd]).
  Hoober himself called it unscientific, and it covers phones from 2012–13. A
  later study with Shank found phablet owners used two hands 70% of the time
  ([A List Apart](https://alistapart.com/1-2-phone-grips-jpg/) [2nd]).
- **(C)** Music players open with the music surface and very little else. Radio
  Garden's first H1 is the city being played ("Riga"). NTS Infinite Mixtapes'
  only visible button is "Save Episode". Poolsuite shows 32 words in total.

### The primary control

- **(B)** WCAG 2.2 SC 2.5.8 sets the minimum target at 24×24 CSS px, with a spacing
  exception. W3C recommends meeting the size anyway
  ([W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
- **(C)** The current label is "Pick me a set". Before the data arrives it reads
  "Loading catalogue…", and the button is disabled. That is a loading state on
  the control itself, but it has no progress or time cue.
- **(D)** Button-label guidance agrees across design systems: start with a verb,
  name the object, keep it to two or three words, and avoid generic words like
  "Submit" or "OK"
  ([Built In, "16 Rules of Effective UX Writing"](https://builtin.com/articles/effective-ux-writing);
  [UX Psychology, "How to optimize button microcopy"](https://uxpsychology.substack.com/p/how-to-optimize-button-microcopy)).
  The NN/g UI-copy article could not be retrieved.
- **States the page should cover:** idle, loading catalogue, loading set, playing,
  set unavailable, and filter returns nothing. Only the loading-catalogue state is
  visible in the markup. The others were not tested.

### Player position, and the button once a set plays

- **(C)** On the Selector, the player opens 117 px below the button's top edge, and
  the button stays where it is. The `#id` hash changes, so each set gets its own
  URL (seen live: `/selector#ndgTMLLIBiI`).
- **(C)** Radiooooo and Poolsuite put "now playing" into `document.title`. The
  Selector's title stays fixed.

### Filters

- **(C)** The Selector has a genre filter (76 genres), a length filter, and
  "Popular / Hidden gems / Niche" tiers (taken from the FAQ wording). Bandcamp
  Discover opens with filters showing ("All selected filters"). Radiooooo opens
  with decade buttons (1900, 1910…) as its main controls.
- **Evidence gap:** no study was found on whether filters should come before or
  after the first press in a random tool. Treat the placement as untested.

### What to show about the playing set

- **(C)** NTS shows the episode and offers "Save Episode". Radio Garden names the
  place. Radiooooo puts track, artist, country and year into the tab title. Beyond
  this, no source was found on how much metadata to show.

### Colour, type, motion

- **Evidence gap:** no 2023+ research on colour for music tools was found. Of the
  players inspected, Boiler Room, NTS, Cercle and Mixcloud open on dark surfaces
  (C, visual only, not measured). Contrast falls under WCAG 1.4.3 (B), which was
  not re-checked here.

### Empty, loading and failure states

- **(D, citing NN/g [2nd])** Empty states should say what is missing and offer a
  next step. They should not explain the whole page
  ([NN/g video, Empty States: 3 Guidelines](https://www.nngroup.com/videos/empty-states-in-application-design-guidelines/);
  [PatternFly-style summary via Funnel](https://gunnel.funnel.io/patterns/empty-state)).
  The Selector's existing empty messages already follow this. One example:
  "Nothing saved yet. Press ♡ Save under a set to keep it here."
- **(A [2nd])** Skeleton screens fit full-page loads and are annoying on quick
  flashes. Progress indicators made people willing to wait longer
  ([NN/g, Skeleton Screens](https://nngroup.com/articles/skeleton-screens/);
  [NN/g video, Skeletons vs Progress Bars vs Spinners](https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/)).
  The figure "about three times longer" comes only from a secondary summary.
- **Not tested:** what happens when YouTube refuses an embed (a removed or
  embed-blocked video).

### Performance as a design constraint

- **(C)** The page shell is light: LCP 620 ms, DOMContentLoaded 749 ms, 9 resources.
  The catalogue is the heavy part: 1,848 KB, finished at 1,357 ms. After a press,
  only 2 requests followed in the next 6 s (Google Analytics and
  youtube-nocookie), and the iframe was present. So the press-to-player path is
  light. The wait comes before the first press.
- **(B)** Lighthouse's mobile preset is 150 ms latency, 1.6 Mbps down and 750 Kbps up
  ([Lighthouse throttling docs](https://github.com/GoogleChrome/lighthouse/blob/v7.4.0/docs/throttling.md)).
  At that speed, 1,848 KB takes about 9.2 s.
- **(B)** INP is good at 200 ms or less and poor above 500 ms, measured at the 75th
  percentile ([web.dev, INP](https://web.dev/articles/inp)).
- **Why audits miss this (C):** Lighthouse scores the shell, which is light. Nothing
  measures how long the main control is disabled.
- **Patterns that address it.** These are named patterns only; no source here
  benchmarks them for this case:
  - a small first-pick payload, with the full catalogue fetched later;
  - per-genre or per-tier shards;
  - a server-picked first set in the HTML;
  - letting the HTTP cache keep the file between refreshes.

### Accessibility

- **(C)** The player stage is `aria-live="polite"` (`build-selector.mjs:219`). The
  Saved and Recent tabs use `role="tab"` with `aria-selected` and `aria-controls`.
- **(B)** SC 2.5.8 target size, as above. Focus order and keyboard operation were
  not tested in this pass.
- **(B)** Chrome lets a cross-origin iframe autoplay only if the page delegates
  permission with `allow="autoplay"` and there was a user gesture
  ([Chromium autoplay](https://www.chromium.org/audio-video/autoplay);
  [Chrome blog, Autoplay policy](https://developer.chrome.com/blog/autoplay/)).
  The Selector's iframe includes `allow="autoplay; …"` and `autoplay=1`.
  **Not verified:** whether sound starts on iOS Safari after the press.

---

## 3. Part 2. User experience and behaviour

### User jobs, from own data (C)

GA4, 9 Oct to 5 Nov 2026, `/selector`. Key events are guide_read, selector_deal
and selector_opened.

| Medium | Sessions | Avg engagement | Key events | Session key-event rate |
|---|---:|---:|---:|---:|
| email | 39 | 13 s | 36 | 26% |
| (none) / direct | 35 | 25 s | 47 | 26% |
| ai-assistant | 25 | 62 s | 21 | 52% |
| (not set) | 14 | 106 s | 20 | 71% |
| organic | 13 | 73 s | 21 | 31% |
| referral | 3 | 13 s | 0 | 0% |
| **Total** | **129** | | **145** | about 36% |

- Sessions that convert fire about 3 key events each (145 events across about 46
  converting sessions). That suggests several presses per session, but it is
  inferred, not measured per event.
- The previous period had 448 sessions, 386 of them email and direct. Most of the
  fall is email and direct, not search.
- AI-assistant visitors stay five times longer than email visitors and convert at
  twice the rate. They arrive having been told what the tool is.

### Discovery research

- **(A [old])** Spotify study, 100,000 US listeners, 2016–19: exploration rises
  with age, comes in bursts, and differs from taste diversity
  ([The Dynamics of Exploration on Spotify, ICWSM 2022](https://ojs.aaai.org/index.php/ICWSM/article/view/19324)).
- **(A)** In a 2026 controlled study (N=350), "transportation" was the strongest
  predictor of taste-broadening serendipity. Transportation means being absorbed
  in the listening
  ([Let Me Introduce You, UMAP 2026](https://www.alphaxiv.org/abs/2604.08385)).
  Only the abstract was read.
- **(A)** K-CAP '23 measured serendipity in user-curated playlists
  ([CWI](https://ir.cwi.nl/pub/33651/33651.pdf)). It is about playlist creation,
  not a random-play tool.
- **(A [old])** Choice overload: mean effect near zero across 50 experiments, and
  smaller when people have prior preferences
  ([Scheibehenne et al. 2010, PDF](https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf)).
  The figure D = 0.02 comes from a secondary summary, not the abstract.

### Time to first sound

- **(C)** Selector, fast connection: about 1.4 s until the button works, then the
  press. YouTube's own player start was not timed.
- **Not measured:** time to first sound for the comparable players.

### The press-again loop and persistence

- **(C)** The Selector already has Saved and Recently played lists, and a URL per set
  (`#id`). NTS offers "Save Episode". No source was found that measures what
  history or favourites are worth in a random tool.

### Shareable URL and indexing

- **(B)** Google generally ignores URL fragments (`#…`) as separate pages. That is
  general crawler behaviour, not checked against a Google document in this pass.
  So `#id` sharing creates no indexable duplicates. **Folklore risk:** this claim
  needs a Google source before anyone relies on it.

### Trust and the "67,005" figure

- **Evidence gap.** No study was found on whether showing the catalogue size makes
  people more willing to press.
- **(C)** Comparable products show sources, not counts. Examples: NTS says "over 50
  cities" in its description, and Xe says "130+ currencies".

### What to measure

- **(C)** GA already records selector_deal and selector_opened as key events.
- **One candidate success metric:** the share of sessions with at least one
  selector_deal.
- **Not measured yet:** time from page load to first deal, and a deal fired when
  the button was still disabled (that would need a new event). These are listed,
  not recommended.

---

## 4. Part 3. Written content

### What the page says now (C)

- About 1,340 words.
- H2s: "Choosing is the hard part." and "Questions about finding new music."
- Nine FAQ questions:
  1. How do you discover new music without an algorithm?
  2. What is the best way to find new music you have never heard?
  3. How does The Selector pick a set?
  4. Can I get a random Boiler Room set?
  5. How do I find the best or most popular sets?
  6. What is the difference between Popular, Hidden gems and Niche sets?
  7. Which channels does it pull from?
  8. Can I filter by genre?
  9. Do the sets play here or on YouTube?

  Questions 1 and 2 are discovery intent and overlap
  `how-to-find-new-music.html`. Questions 3 to 9 are about the tool itself.

### What official guidance says about tool-page text

- **(B)** Google's people-first content guidance names a warning sign: content made
  mainly to attract search visits. It also says SEO applied to people-first
  content is fine
  ([Google Search Central, Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **(B)** Google uses several sources for a result's title link: `<title>`, the main
  visual heading, `<h1>` and others
  ([Google, title links](https://support.google.com/webmasters/answer/35624);
  coverage at [Search Engine Journal](https://www.searchenginejournal.com/google-shows-how-to-control-titles-in-search-results/449866)).
- **(B)** FAQ rich results are limited to government and health sites, and there is
  no need to remove the markup
  ([Google Search Central blog, 8 Aug 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)).
- **(B)** For a SoftwareApplication rich result, Google needs `name`, `offers.price`
  and either `aggregateRating` or `review`
  ([Google, SoftwareApplication](https://developers.google.com/search/docs/appearance/structured-data/software-app)).
  This was read on the German version of the page. The Selector's WebApplication
  block has an Offer but no rating, so it does not qualify, and fake ratings are
  not an option.

### Text length on comparable tools (C, word counts from `innerText`)

| Product | Words | Text sits |
|---|---:|---|
| Picker Wheel | 3,756 | below the tool: numbered how-to H2s |
| Random Word Generator | 1,378 | below the tool: use cases, then FAQ |
| Bitwarden password generator | 1,228 | below the tool, with FAQ |
| Wheel of Names | 964 | mostly in the app chrome, no H2s |
| Xe converter | 792 | below the tool, sales-oriented |
| RANDOM.ORG coins | 787 | form first, explanation after |
| **Selector (now)** | **about 1,340** | intro above the tool, essay and FAQ below |
| Radio Garden | 168 | none |
| Radiooooo | 142 | none |
| Cercle home | 74 | none |
| Poolsuite | 32 | none |

Utilities that rank put their text after the tool. Music players carry close to no
text. Both groups put the tool first.

### FAQ candidates, with where the question comes from

The FAQ evidence is thin. People Also Ask, autocomplete and Reddit were not
captured: Google served a CAPTCHA, which was not bypassed. What exists:

| Candidate question | Source | Evidence weight |
|---|---|---|
| Can I get a random Boiler Room set? | current FAQ; Boiler Room is the first channel named | own page only |
| Which channels does it pull from? | current FAQ; GA shows AI assistants send visitors who stay | own page only |
| How does it pick a set? | current FAQ | own page only |
| Can I filter by genre or length? | current FAQ plus the UI | own page only |
| Do the sets play here or on YouTube? | current FAQ; youtube-nocookie embed | own page only |
| What do Popular, Hidden gems and Niche mean? | current FAQ | own page only |
| "random dj set" (as a definition line, not a question) | GSC, 3 impressions | real query, tiny |

No source supports a particular answer length. Not found.

### Microcopy options for the button (not ranked)

| Option | Words | Seen elsewhere (C) |
|---|---:|---|
| Pick me a set (current) | 4 | — |
| Play a random set | 4 | — |
| Play a set | 3 | — |
| Pick a set | 3 | — |
| Deal a set | 3 | matches the GA event name `selector_deal` |

Button labels on comparable tools were captured only where they were visible
buttons:
- NTS: "Save Episode".
- Radiooooo: "Explore", "Taxi", "Islands" and decade buttons.
- RANDOM.ORG coins: its control is a form input, which the script did not
  capture.

Comparable verbs were not captured for Wheel of Names or Picker Wheel.

### What must survive the cut, by support

| Item | Supported by | Status |
|---|---|---|
| A unique, descriptive `<title>` | Google title-link docs (B) | supported |
| An `<h1>` that names the page | Google lists headings as a title-link input (B) | supported as an input, not as a ranking rule |
| FAQ as real HTML | — | no rich result here (B); value is for readers and AI answers, unproven |
| FAQPage schema | Google, Aug 2023 (B) | no rich result for this site; harmless to keep |
| WebApplication schema | Google SoftwareApplication docs (B) | no rich result without ratings |
| A one-sentence definition for AI answers | — | **no official source found**: folklore until shown |
| Catalogue facts (sources, count) | — | no source either way |

---

## 5. Part 4. Title and H1

### What people type (C, GSC, last 28 days, site-wide query table)

| Query | Impressions | Clicks | Position | Previous 28 days |
|---|---:|---:|---:|---|
| random dj set | 3 | 0 | 5.0 | 4 imp, position 3.5 |
| how to find new music | 0 | 0 | — | 12 imp, position 29 |
| new music search engine | 0 | 0 | — | 5 imp, position 30 |
| discover new music | **0** | 0 | — | 0 |

| Page | Impressions | Clicks | Position | Previous 28 days |
|---|---:|---:|---:|---|
| /selector | 31 | 4 | 3.58 | 38 imp, 3 clicks, position 5.32 |
| /de/selector | 6 | 0 | 8.83 | 0 |
| /fr/selector | 5 | 0 | 8.0 | 0 |
| /how-to-find-new-music | 44 | 1 | 7.91 | 96 imp, position 17.19 |

GSC hides most queries below its privacy threshold, so the 31 page impressions are
not fully explained by the rows above.

### Search volumes (Google Ads Keyword Planner, added 6 Nov 2026)

Account 299-844-2842, run through Claude in Chrome. All locations, all languages,
Google search, Oct 2025 to Sep 2026. Planner gives bucketed ranges, not exact
numbers. "—" means Planner returned no data. Ahrefs was not used.

| Group | Query | Avg. monthly searches | Note |
|---|---|---|---|
| Tool, this exact category | random dj set | 10–100 | three-month and YoY change "+∞", so demand appeared within the year |
| | random dj mix | 10–100 | |
| | random mix generator | 10–100 | |
| | dj set generator | 10–100 | ambiguous: may mean a tracklist or mixing tool |
| | dj set finder | 10–100 | |
| | random dj | 100–1K | ambiguous: "random dj" may mean any DJ |
| | random dj sets, random dj set generator, random dj set player, dj set player, random boiler room set, random boiler room, find dj sets | — | no data |
| Random-music utilities, wider | random song generator | 10K–100K | song picker, not sets |
| | random song picker | 10K–100K | |
| | song randomizer | 10K–100K | three-month change +900% |
| | random music generator | 1K–10K | YoY −90%; may mean AI music generation |
| | random music | 1K–10K | |
| | random set generator | 1K–10K | +900% three-month; not music-specific |
| | random genre generator | 1K–10K | |
| | random music player | 100–1K | |
| | music roulette | 100–1K | |
| | random radio, random radio station | 100–1K each | Radio Garden's territory |
| | random music picker | 10–100 | |
| Name | the selector | 1K–10K | ambiguous: shared with other products and works, so not this page's demand |
| | music selector | 100–1K | |
| Sets, listening | dj mixes | 100K–1M | |
| | dj sets | 10K–100K | competition High |
| | boiler room sets | 1K–10K | **taken**: listed in `TAKEN-KEYWORDS.md` |
| | live dj sets | 1K–10K | **taken** (listed as "live dj sets") |
| | best dj sets | 100–1K | **taken** |

Not returned as their own rows: "play random music" and "random songs generator".
Planner may have folded them into close variants.

Earlier, `KEYWORD-METHOD.md` (line 75) said that Ahrefs returned no rows for
"random dj set", "dj set picker" and "dj set finder". Planner now shows 10–100 for
two of them.

A live web search for "random dj set generator" returned the Selector itself (via
its Product Hunt page), SetFlow (a mixing tool, not random) and two AI-setlist
sale listings. There is no evidence of a crowded field, but this is not a SERP top
10.

### Intent and the two-page risk

- Tool intent: "random dj set", "random dj set generator", "random boiler room set".
- Discovery intent: "discover new music", "how to find new music". These belong to
  `how-to-find-new-music.html`.
- Both pages target the discovery phrase now: the Selector's title starts with
  "Discover New Music", and FAQ questions 1 and 2 are discovery questions. GSC
  shows no impressions for that phrase on either page in this period, so the
  overlap costs nothing measurable now. It would matter if the guide began to
  rank.
- `TAKEN-KEYWORDS.md` was checked on 6 Nov.
  - Taken: "discover new music", "find new music", "how to find new music" and
    related discovery phrases. They belong to the discovery guide.
  - Also taken: "boiler room sets", "live dj sets" and "best dj sets".
  - Not taken: "random dj set" and every other "random …" query in the volume
    table.

### Title and H1 on comparable products (C)

| URL | `<title>` | H1 | H1 type |
|---|---|---|---|
| radio.garden | Radio Garden – Explore live radio by rotating the globe | Riga (station location) | live state |
| radiooooo.com | (the playing track) — Mnogaja Leta Quartet \| Italy 1973 | none | — |
| nts.live/infinite-mixtapes | Infinite Mixtapes \| Listen on NTS | INFINITE MIXTAPES | name |
| bandcamp.com/discover | Discover music and merch on Bandcamp | none | — |
| everynoise.com | Every Noise at Once | none | — |
| random.org/coins | RANDOM.ORG - Coin Flipper | True Random Number Service / Coin Flipper | name |
| pickerwheel.com | Picker Wheel - Spin the Wheel to Decide a Random Choice | same as title | name + promise |
| bitwarden.com/password-generator | Free Password Generator \| Create Strong Passwords and Passphrases \| Bitwarden | BEST FREE PASSWORD GENERATOR | name |
| xe.com/currencyconverter | Currency Converter - Currency Exchange \| Xe | Exchange Rate and Currency Converter Tool | name |
| randomwordgenerator.com | Random Word Generator | Random Word Generator | name |
| mynoise.net | Custom Soundscapes for Focus, Relaxation & Sleep \| myNoise ® | Focus & Productivity | category |
| wheelofnames.com | Wheel of Names \| Random name picker | Wheel of Names | name |
| boilerroom.tv | BOILER ROOM | none | — |
| mixcloud.com | Mixcloud - This is Audio Culture | Discover music through curators, DJs, producers, stations, not algorithms | promise |
| cercle.io | Cercle \| Artistic Movement - Music Events & Experiences | none | — |
| nts.live | NTS \| Don't Assume | Infinite Mixtapes | name |
| poolsuite.net | Now Playing on Poolsuite ☼: Poolsuite ON AIR | none | — |
| **thecatrave.com/selector** | Discover New Music: One Button, One Random DJ Set | Press the button. Get a set. | instruction |

The pattern:
- Every utility that ranks for its tool phrase uses that phrase as its H1.
- Music players often have no H1 at all, or use the live state as the H1.
- No product inspected uses an instruction as its H1.

### Evidence on length and front-loading

- **(A [old] [2nd])** NN/g eye-tracking: people scanning a list see mostly the first
  two words, about 11 characters. NN/g also suggests about 50 characters for a
  page title and leaving out leading articles
  ([NN/g, Microcontent](https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/);
  summary at [Newcastle University web blog](https://blogs.ncl.ac.uk/web/tag/micro-content/)).
  The sources date from 1998 and 2006.
- **(B)** Google writes title links from several on-page sources, and the `<title>`
  still counts when Google shows something else. No Google source gives a
  character limit, since truncation depends on pixel width. **No measured CTR
  study of tool-page titles was found.**
- **H1 matching the title or complementing it:** the only evidence found is
  that Google uses the H1 as an input (B). No study compares the two approaches.

### Five title and H1 pairs (not ranked, none picked)

The current pair is title "Discover New Music: One Button, One Random DJ Set" (49
characters) and H1 "Press the button. Get a set." (28 characters).

| # | Title (chars) | H1 (chars) | Target query, volume | Intent | Trade-off against the current pair |
|---|---|---|---|---|---|
| 1 | Random DJ Set Generator: Press Once, Hear a Set (47) | Random DJ set generator (23) | "random dj set generator": no Planner data, 0 GSC impressions | tool | Front-loads the tool phrase like the ranking utilities. Drops "discover new music", which has 0 impressions now. "Generator" may not be how listeners say it: unverified. |
| 2 | Random DJ Set from Boiler Room, NTS and 50 More (47) | Random DJ set (13) | "random dj set": Planner 10–100, GSC 3 impressions at position 5 | tool | Uses the only measured tool query. Names sources as the trust cue. The count "50 more" must track the catalogue (52 broadcasters now). |
| 3 | The Selector: Play a Random DJ Set (34) | The Selector (12) | brand + "random dj set" | tool + brand | Name-type H1 like Wheel of Names. The brand has no search demand of its own (not measured). Shortest title. |
| 4 | Random Boiler Room Set, or 67,000 Other DJ Sets (47) | Play a random DJ set (20) | "random boiler room set": no Planner data; "boiler room sets" 1K–10K is taken | tool, narrower | Leans on the biggest channel's name. Puts a third party's brand first. The count must be kept up to date. |
| 5 | Random DJ Set Player \| thecatrave (33) | Press for a random DJ set (25) | "random dj set" | tool | Keeps an instruction H1 but adds the noun. "Player" matches what the page does. No source shows that an instruction H1 helps or hurts. |

Separately, Radiooooo and Poolsuite set the tab title to the playing set after a
press. That is a different choice from the ones above, and it changes the tab
title only, not what search engines index.

---

## 6. Products inspected

All opened on 6 Nov 2026 in the Browser pane. The script recorded title, H1, meta
description, word count and the buttons visible in the first viewport.

| Group | Product | First-load observation | Words |
|---|---|---|---:|
| Serendipity / random | Radio Garden | globe with a station already chosen (H1 "Riga"); consent dialog | 168 |
| Serendipity / random | Radiooooo | decade buttons; tab title is the playing track | 142 |
| Serendipity / random | NTS Infinite Mixtapes | mixtape grid; one visible button, "Save Episode" | 321 |
| Serendipity / random | Bandcamp Discover | filters first ("All selected filters") | 365 |
| Serendipity / random | Every Noise at Once | genre map, no H1 | 10,841 |
| Single-action utility | RANDOM.ORG Coin Flipper | form first, explanation after | 787 |
| Single-action utility | Picker Wheel | wheel first, then numbered how-to sections | 3,756 |
| Single-action utility | Bitwarden password generator | generator, then FAQ | 1,228 |
| Single-action utility | Xe currency converter | converter, then sales blocks | 792 |
| Single-action utility | Random Word Generator | generator, then use cases and FAQ; consent dialog | 1,378 |
| Single-action utility | Wheel of Names | wheel; name-only H1 | 964 |
| Single-action utility | myNoise | category H1s ("Focus & Productivity") | 1,513 |
| Music / DJ players | Boiler Room | no H1; title "BOILER ROOM" | 279 |
| Music / DJ players | Mixcloud | promise H1 (rendered twice) | 1 (app shell) |
| Music / DJ players | Cercle | no H1 | 74 |
| Music / DJ players | NTS home | H1 "Infinite Mixtapes" | 454 |
| Music / DJ players | Poolsuite | no H1; title "Now Playing on Poolsuite" | 32 |

Excluded: Chosic random songs generator (HTTP 404).

Not inspected:
- Random Wikipedia, SoundCloud, YouTube Music and Spotify Smart Shuffle (the
  last two need sign-in).
- Timers and coin-flip tools beyond RANDOM.ORG.

---

## 7. What the current page earns in search that a leaner page could lose

| Asset | What it earns now (GSC/GA, last 28 days) | At risk from cutting copy? |
|---|---|---|
| Organic traffic | 13 sessions, 73 s engagement, 31% key-event rate | yes, but small in absolute terms |
| Page impressions | 31 at position 3.58 (up from 38 at 5.32) | position may move; not predictable from these data |
| "random dj set" | 3 impressions, position 5 | depends on whether the phrase stays in the title and H1 |
| "discover new music" | 0 impressions | nothing to lose now |
| FAQPage rich result | none since Aug 2023 (B) | nothing to lose |
| WebApplication rich result | none: no rating (B) | nothing to lose |
| ~1,000 words of essay text | no query in GSC can be tied to it | unknown: hidden queries are not shown |
| AI-assistant referrals | 25 sessions, 62 s, 52% key-event rate | **unknown**: no source shows what text AI assistants use to describe a tool |
| /de and /fr | 11 impressions, 0 clicks | small |

The largest channels, email (39) and direct (35), do not depend on search. They
have the shortest engagement (13 s and 25 s) and a 26% key-event rate. Those are
the visitors most exposed to the disabled-button wait.

---

## 8. Where the evidence is thin or conflicts

- **Volumes are Keyword Planner ranges only.** Planner gives buckets (10–100,
  1K–10K), not exact figures. There is no Ahrefs comparison, because Ahrefs needs
  the owner's approval. The ideas list from "Discover new keywords" was read only
  in part, because the table loads lazily.
- **No SERP top 10 for "random dj set".** Google served a CAPTCHA, which was not
  bypassed. People Also Ask and autocomplete were not captured.
- **FAQ questions are not mined from real users.** Reddit and forum threads were not
  read. Every FAQ candidate comes from the current page or from GSC.
- **iOS autoplay is not verified on a device.** Chrome's policy is documented.
  Safari's behaviour with a YouTube embed after a tap was not found.
- **Old sources:**
  - Hoober 2013 (phones from that era, self-described as unscientific);
  - NN/g response times (1993, restated in 2010);
  - NN/g headlines (1998 and 2006);
  - Scheibehenne 2010;
  - Spotify exploration (data from 2016–19).
- **Secondary-only NN/g items:** skeleton screens, empty states, button copy and
  first-two-words. The original pages were not opened.
- **Google SoftwareApplication** requirements were read on the German version. The
  legacy help page states a different rule, "two of" rating and offers.
- **Google and URL fragments:** stated from general crawler behaviour. No Google
  document was read in this pass.
- **GA:** "key events" lump guide_read, selector_deal and selector_opened together.
  Presses per session are inferred from totals.
- **Measurements:** the live timing comes from one fast connection. The 9.2 s
  figure is arithmetic at the Lighthouse throughput, not a throttled run.
- **Conflict:** the utilities that rank carry 800–3,800 words below the tool, and
  the music players carry under 200. Both groups put the tool first. They differ
  only on how much text sits under it.

---

## 9. Sources

Research and studies (A)
- Nielsen Norman Group, "The 3 Response Time Limits in Interaction Design" (video; limits from 1993) — https://www.nngroup.com/videos/3-response-time-limits-interaction-design/
- Nielsen, "Time Scales of UX" (Substack) — https://jakobnielsenphd.substack.com/p/time-scale-ux
- Hoober, "How Do Users Really Hold Mobile Devices?", UXmatters, Feb 2013 — https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
- Garcia Media summary of Hoober — https://garciamedia.com/?p=7518
- A List Apart, Hoober and Shank grips figure — https://alistapart.com/1-2-phone-grips-jpg/
- Scheibehenne, Greifeneder and Todd, "Can There Ever Be Too Many Options?", J. Consumer Research 37(3), 2010 — https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf
- Way et al., "The Dynamics of Exploration on Spotify", ICWSM 2022 — https://ojs.aaai.org/index.php/ICWSM/article/view/19324
- "Let Me Introduce You: Stimulating Taste-Broadening Serendipity…", UMAP 2026 — https://www.alphaxiv.org/abs/2604.08385
- Maccatrozzo et al., "The Role of Serendipity in User-Curated Music Playlists", K-CAP 2023 — https://ir.cwi.nl/pub/33651/33651.pdf
- NN/g, "Skeleton Screens 101" — https://nngroup.com/articles/skeleton-screens/
- NN/g, "Skeleton Screens vs. Progress Bars vs. Spinners" (video) — https://www.nngroup.com/videos/skeleton-screens-vs-progress-bars-vs-spinners/
- NN/g, "Empty States in Application Design: 3 Guidelines" (video) — https://www.nngroup.com/videos/empty-states-in-application-design-guidelines/
- NN/g, "Microcontent: How to Write Headlines, Page Titles, and Subject Lines" — https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/

Official guidance (B)
- Google Search Central blog, "Changes to HowTo and FAQ rich results", 8 Aug 2023 — https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Google Search Central, "Creating helpful, reliable, people-first content" — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, "Influencing your title links in search results" — https://support.google.com/webmasters/answer/35624
- Google, SoftwareApplication structured data — https://developers.google.com/search/docs/appearance/structured-data/software-app
- web.dev, "Interaction to Next Paint (INP)" — https://web.dev/articles/inp
- Lighthouse, "Network Throttling" docs — https://github.com/GoogleChrome/lighthouse/blob/v7.4.0/docs/throttling.md
- W3C, Understanding SC 2.5.8 Target Size (Minimum) — https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Chromium, Autoplay policy — https://www.chromium.org/audio-video/autoplay
- Chrome for Developers, "Autoplay policy in Chrome" — https://developer.chrome.com/blog/autoplay/

Practitioner (D)
- Built In, "16 Rules of Effective UX Writing" — https://builtin.com/articles/effective-ux-writing
- UX Psychology, "How to optimize button microcopy" — https://uxpsychology.substack.com/p/how-to-optimize-button-microcopy
- Search Engine Journal, Google title-link coverage — https://www.searchenginejournal.com/google-shows-how-to-control-titles-in-search-results/449866
- Newcastle University web blog, microcontent — https://blogs.ncl.ac.uk/web/tag/micro-content/
- Funnel design system, empty state — https://gunnel.funnel.io/patterns/empty-state

Live products (C): the 17 URLs in sections 5 and 6, opened 6 Nov 2026.

Own data: GA4 `Landing_page_Landing_page-10.csv` (9 Oct to 5 Nov 2026 compared
with 11 Sep to 8 Oct); GSC `thecatrave-15/` (last 28 days compared with the
previous 28); `selector.html`, `build-selector.mjs:219`,
`selector-runtime.js` (catalogue fetch and iframe).
