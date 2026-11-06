# Selector page: UX, design and copy research prompt

Paste everything below the line into a fresh session. Attach the GSC and GA exports
for `/selector` (and `/de/selector`, `/fr/selector`) before running.

---

## Role

You are a senior product designer and UX researcher. You are gathering evidence for
a redesign, not writing the redesign. Another reviewer decides what to build. Do not
issue a verdict between options; rank by strength of evidence and say how strong it is.

## The product

thecatrave.com/selector: one button plays a random recorded DJ set from a catalogue of
about 67,000 sets (Boiler Room, NTS, Cercle, community radio worldwide). The user can
filter by genre and set length, and press again for another. It is a tool for
listeners who want to hear something without choosing.

Current state (read `selector.html`, `build-selector.mjs`, `selector-runtime.js`):

- Title: "Discover New Music: One Button, One Random DJ Set"
- H1: "Press the button. Get a set."
- Meta description: "Discover new music without choosing it. One button plays a DJ set at random from 67,005: Boiler Room, NTS, Cercle and community radio worldwide."
- About 1,340 words on the page; one H2 "Choosing is the hard part." and an FAQ H2.
- WebApplication and FAQPage schema.
- Also served in German and French.

## The problem

The page was written to rank. Organic clicks are steady but it has hit a ceiling, and
the page is slow. The owner wants it to be a tool first: fully usable by a real person
in seconds, with the only long-form text being a short FAQ. SEO is secondary and must
not be damaged by accident, so tell me what SEO the current page earns that a leaner
page would lose (title, H1, schema, indexable text), using the attached exports.

## Rules for the research

1. Every claim cites a source: URL, title, publisher, date. No source, no claim.
   Do not work from memory.
2. Label each finding by evidence tier: (A) published research or usability studies,
   (B) official design-system or platform guidance, (C) analysis of live comparable
   products you actually opened, (D) practitioner opinion. Never mix tiers in one bullet.
3. Prefer sources from 2023 onwards. Flag anything older.
4. Open and inspect comparable products yourself. Describe what they do on first load,
   not what their marketing says. Cover at least 12 across three groups:
   - random or serendipity tools (Random Wikipedia, Radio Garden, Radiooooo, Bandcamp
     Discover, NTS Infinite Mixtapes, random-recipe or random-word generators);
   - single-action utilities with one big control (converters, pickers, timers, name
     or password generators, coin-flip tools);
   - music and DJ-set players (Boiler Room, Cercle, Mixcloud, SoundCloud, YouTube
     Music, Spotify Smart Shuffle).
   Find more yourself; this list is a seed, not a boundary.
5. Do not recommend anything that teaches music production or hands out files.
6. Note mobile first. Check what the evidence says for a phone held one-handed.

## Part 1. Graphic design and layout

Find the best practice for a one-action tool page. For each point give the evidence,
the tier, and a concrete example from a comparable product.

- Above-the-fold composition: what must be visible without scrolling on a 375px phone
  and on a 1440px desktop.
- The primary control: size, shape, label wording, position, tap-target size,
  states (idle, loading, playing, error, empty result).
- Where the player sits relative to the button, and what happens to the button once a
  set is playing.
- Filters: how many, shown how (chips, selects, a sheet), default state, and whether
  they belong before or after the first press.
- What to show about the set that is playing (title, artist, channel, genre, length,
  source link), and how much. Credit and link-out to the source channel.
- Colour, type scale and contrast on a music tool; dark-first versus theme-aware;
  motion and reduced-motion; whether to use artwork or thumbnails.
- Empty, loading and failure states, including a set that is unavailable.
- Performance as a design constraint: what the research says about load time and
  tool abandonment, and which patterns (lazy data, skeletons, deferred player embed)
  keep the first press fast with a 67,000-row catalogue.
- Accessibility: keyboard use, focus order, screen-reader announcement when the set
  changes, WCAG 2.2 AA items that matter specifically to a button-plus-player page.

## Part 2. User experience and behaviour

- The main user jobs for a random-music tool, with evidence (search intent studies,
  published behaviour on serendipity and "paradox of choice" in music discovery).
- Time to first sound: a target, and what the comparable products achieve.
- The press-again loop: how to support "skip", "back", "save this one", "share this
  one" without clutter; what persistence (history, favourites, URL per set) the
  evidence supports and what it costs.
- Whether a shareable URL per set helps, and how it interacts with search indexing.
- First-time versus returning user: what to explain once and then stop explaining.
- Trust: how a user decides the tool is worth pressing (catalogue size, sources shown,
  examples of what it returns), and whether showing "67,005" helps or is noise.
- Failure of expectation: what users do when the first set is not to their taste, and
  how successful tools handle the second and third press.
- What to measure on the page itself: a short list of events and one success metric,
  using what GA already records for the Selector.

## Part 3. Written content

Evidence on what a tool page should say, and equally what it should not.

- What must be explained on the page itself (one or two lines), what belongs in a
  FAQ, and what belongs nowhere.
- A FAQ of at most 6 to 8 questions. Mine the real questions: People Also Ask,
  autocomplete, Reddit and forum threads about random DJ sets, and our own GSC
  queries for `/selector`. Return each question with its source and the plain-language
  answer length the evidence supports.
- Microcopy: button label, filter labels, empty and error messages, credits line.
  Give 3 to 5 wording options for the button and compare with what comparable tools
  use. Plain verbs, no jargon, no hype.
- Tone: what the published guidance says about voice on utility pages.
- Reading level and length: how much text a tool page can carry before it harms use
  or speed.
- What the page must keep for search and for AI answers after the long copy is cut:
  a one-sentence definition, the catalogue facts, the FAQ as real HTML, schema. State
  which of these are supported by official Google or schema.org documentation and
  which are folklore.

## Part 4. Title and H1 for this specific tool

- What do users type to find this kind of tool? Use the attached GSC queries for
  `/selector` first, then Keyword Planner or live autocomplete for variants. Give the
  query, impressions, clicks, position, and volume. Do not guess a phrase; type it in.
- Which queries are tool intent ("random dj set", "random dj set generator") and which
  are discovery intent ("discover new music", "find new music")? The site already has a
  guide for the second (`how-to-find-new-music.html`; check `TAKEN-KEYWORDS.md` before
  touching it). State the risk of the two pages competing.
- How do comparable tools word their title tag and H1? Table of at least 15: URL,
  title, H1, whether the H1 is a name, a promise or an instruction.
- Evidence on title length, truncation and click-through for tool pages, and on H1
  matching the title versus complementing it.
- Return 5 title and H1 pairs, each with: the target query and volume, the intent it
  serves, the character counts, and the trade-off against the current pair. Do not
  pick one.

## Deliverable

One document, in English, with:

1. A one-page summary: the ten findings with the strongest evidence, tier marked.
2. Parts 1 to 4 as above, findings first, sources inline.
3. A comparison table of the 12+ products inspected.
4. A section "What the current page earns in search that a leaner page could lose",
   with the numbers from the attached exports.
5. A section "Where the evidence is thin or conflicts", listed plainly.
6. A source list.

Do not redesign the page and do not edit any file in the repository.
