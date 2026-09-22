# Finding keywords worth writing for

A repeatable pass. Every step exists because skipping it cost something.

This covers finding and judging keywords. The other algorithms:
`TOPIC-RESEARCH.md` decides whether a topic is worth a page and carries the
roster of review roles; `FIGURES.md` decides which people a genre guide cannot
omit; `WRITING.md` carries the rules no audit can enforce.

Each of them exists because the work was once done from memory and was wrong.

## Tool switch, 2026-09-22

Everything below describes the Ahrefs-based pass and stays as the documented
method: it is the fallback, and the reasoning about intent traps, winnability
and stopping points applies regardless of which tool supplies the numbers.

Going forward, the default source for volume and People Also Ask is no longer
the Ahrefs API. The owner's instruction: use Google Ads Keyword Planner
(signed into the owner's own account, driven live through the browser) for
volume, and a live Google search in the browser for PAA, related searches and
SERP composition, instead of `keywords-explorer-overview`/`matching-terms`/
`serp-overview`. Reasons observed the same day: Keyword Planner without
account spend returns bucketed ranges rather than points, which is coarser
than Ahrefs but comes straight from Google rather than a third-party
clickstream model; the two disagreed by an order of magnitude on more than one
term in the first side-by-side (e.g. "best clubs in paris": 200/mo in Ahrefs,
1K-10K in Keyword Planner; "best autumn festivals": 0 in Ahrefs, 100-1K in
Keyword Planner), so neither is a silent stand-in for the other and a dossier
entry should say which one a number came from.

Practical differences this changes:
- No Ahrefs unit budget to track for a browser-only pass; skip the
  `subscription-info-limits-and-usage` balance check for passes that use only
  Keyword Planner and live search.
- Matching-terms/related-terms expansion is replaced by reading Keyword
  Planner's own keyword-idea suggestions (when using "Discover new keywords")
  and Google's "People also search for" / "People also ask" boxes on the live
  SERP, read with the browser tools, not pulled through the Ahrefs connector.
- Competitor mining (`site-explorer-organic-keywords`, stage 5) has no direct
  Google Ads equivalent; keep doing it by reading the live SERP and the
  competitor pages themselves in the browser.
- Still batch keywords into one Keyword Planner submission per pass rather
  than one keyword per query, for the same reason batching mattered for
  Ahrefs: fewer round trips, one comparable table.
- Log which tool produced each number in `TOPIC-DOSSIERS.md`. Do not merge an
  Ahrefs figure and a Keyword Planner figure into one unlabelled value.

## First, what this cannot do

There is no search demand for the artist. "thecatrave" is not in Ahrefs at all;
"cat rave" is 200 a month worldwide and those people want videos of cats. No
keyword research will produce traffic for the name directly.

The music is not promoted by keywords. It is promoted by topic pages that earn
the traffic and carry the author card and the Bandcamp block at the end. So the
question this method answers is not "what should I write to promote the music"
but "what can this site credibly own", and the music follows the reader down
the page.

The same applies to the Selector. Its own category does not exist: random dj
set, dj set picker, dj set finder all return no rows. It is reached through
topics adjacent to it, which is why the discovery guide exists.

## 0. Spend units only on decisions

The default research pass is a funnel. Most topics should be rejected before
an expensive Ahrefs call. Do not collect a complete SEO report and decide what
it means afterwards. Name the decision first, then request only the fields that
can change it.

The minimum pass is:

1. **Free qualification.** Inspect the live search results, decide whether the
   result set contains article-shaped openings, check that an existing page
   does not already own the intent, and state the editorial value thecatrave
   can add. Stop here when the answer is no.
2. **Cheap discovery.** Run one `keywords-explorer-matching-terms` request for
   one broad seed derived from the live result set. Request `keyword` only and
   cap the result at 40 to 50 rows. For singular/plural or word-order variants,
   batch the variants in the same request rather than running separate calls.
3. **Manual intent filter.** Classify the returned phrases before buying any
   metrics. Keep at most 8 to 12 candidates that the proposed page can answer.
   Record the useful rejected clusters too, so they are not researched again.
4. **Metrics for finalists.** Batch the shortlist through
   `keywords-explorer-overview` with `keyword`, local `volume` and, only when a
   page-boundary decision is unclear, `parent_topic`. For an English page with
   an international audience, request `global_volume` only for the two or three
   possible head terms, not for the whole discovery set.
5. **One conditional SERP.** Run `serp-overview` only for the final head term,
   and only when the free result inspection did not already settle
   winnability. Request `position`, `url`, `title`, `page_type` and
   `refdomains`, limited to the top ten organic results.

The default pass does **not** request difficulty, traffic potential, CPC, CPS,
device shares, monthly history, SERP features, automatic intent labels or word
count. `related-terms` is not a default expansion step. Use it only when the
matching-terms result is demonstrably too narrow, and ask for a new spending
approval before doing so.

Stop the pass when any of these is true:

- the live result set offers almost no slot for an article;
- the query is navigational, transactional or aimed at files, tools, tickets,
  timetables or another product the page will not provide;
- an existing page already owns the same intent;
- the apparent demand belongs to another language or another meaning;
- the relevant shortlist has no measurable demand;
- answering the cluster would require a volatile ranking, price list, lineup or
  schedule that the site cannot keep current.

Expected budget for one new topic:

- about 200 to 300 units when the free SERP inspection is sufficient;
- about 2,200 units when one Ahrefs SERP is genuinely needed;
- zero units when the free qualification gate rejects the topic.

These are planning ceilings, not permission to spend. Check the real balance
before the pass and after every paid stage. Record endpoint, seed, country,
selected fields, row limit, balance before, balance after and the decision the
call changed. Stop when a stage exceeds its approved ceiling.

## 1. Seeds, never from memory

- **Start with a web search, not with Ahrefs.** Search the topic the way a
  reader would and inspect the result titles, page types and wording. Those
  results supply the first seed and may reject the topic for free. Do not pull
  `site-explorer-organic-keywords` for every ranking page by default. Use one
  exact competitor page only when the live results do not reveal the query
  cluster clearly. Guessing phrases into Ahrefs first measures only the words
  you typed: "breakbeat festival" returned 10 searches, while the pages about
  those festivals rank for the festivals' names. The owner's correction,
  13 September 2026.
- **The owner's topic**, expanded through Ahrefs in §2.
- **Competitor SERPs** for topics already nearby.

The site's own rankings (`site-explorer-organic-keywords` for thecatrave.com,
Search Console) are not pulled for each new topic; the owner asked for that
step to be dropped. Use them when optimising an existing page, where a
position-20 term is a page that could be at position 8.

The catalogue used to be a third seed source here (set counts per genre). It
was dropped — see the note at the end of §5. It is not a criterion for what to
write about.

Writing candidate phrases by hand skips this step and measures only what you
already thought of. That shipped an article titled "how to find new music"
without anyone checking that phrase, worth 1,400 a month.

## 2. Expand

Check the Ahrefs balance before a pass. `subscription-info-limits-and-usage`
is free; call it before the first Ahrefs request of a session, tell the owner
what share of the month's units is already used, report it again after every
paid stage, and stop to warn at 50, 75 and 90 per cent with what the remaining
work would cost. The pool is shared with other keys in the workspace and its
limit can change, so always read `units_limit_workspace` instead of copying an
old monthly figure. One `serp-overview` costs about 2,000 units. On 14
September 2026 a session emptied the pool without a single check and the
Coachella research stopped after stage 1 (`defects.json`,
ahrefs-units-unwatched).

No paid Ahrefs call without the owner's explicit yes to that pass and its cost.
"Write the article" is not a yes: later on 14 September 2026 it was read as one
and 3,534 units went on the Mysteryland pass (`defects.json`,
ahrefs-spent-without-permission). Without a yes, work from the owner's exports
and earlier pulls.

Start with `keywords-explorer-matching-terms`, `select: keyword`, and a 40 to
50 row ceiling. Take what comes back, not what you expected. Filter it by intent
before buying volume for the shortlist. Do not request expensive fields merely
because the endpoint supports them.

`keywords-explorer-related-terms` is a conditional recovery step, not the first
call. It is justified when matching terms misses a clearly visible adjacent
query cluster, not when a large export would be convenient.

Note: `keywords-explorer-overview` returns HTTP 500 whenever `difficulty` is in
`select` for a keyword with no KD value. Difficulty is not part of the default
method anyway. Batch the 8 to 12 finalists and request local volume only, plus
`parent_topic` when it will decide whether two intents need separate pages.

## 3. Filter on intent before anything else

Volume without matching intent is worse than no volume, because the impressions
arrive and leave. Four traps, all seen on this site:

- **Navigational brand queries.** "nts radio" is 35,000 a month and every one of
  those people wants nts.live.
- **Ambiguous words.** "bassline" is 6,600 but half of it means a bass part in
  music theory. "2 step" is also a country dance. Check the SERP before
  believing the number.
- **Wrong-language demand.** 28% of this site's impressions are Indonesians
  asking what "breakbeat" means in slang, at 0.03% CTR. Serving them properly
  means an Indonesian page, not an English one.
- **Wrong audience.** Production tutorials are the biggest UK garage videos on
  YouTube, around 700,000 views. Our own "#make-breakbeat" anchor drew 1,649
  impressions and zero clicks. Read that narrowly: it shows a producer landing on
  a listener page does not click, not that producers are unreachable. The reason
  production terms are out is the rule in `WRITING.md`, which does not weigh them
  against volume. Classify them, subtotal them, and drop them.

## 4. Score winnability from the weakest page in the top ten

Not from KD. First inspect the live SERP for free. If it already contains no
article-shaped opening, stop. If winnability remains uncertain after the topic
and head term have survived every earlier gate, pull one `serp-overview` for
that final head term. Select only `position`, `url`, `title`, `page_type` and
`refdomains`, limited to the top ten organic results, then read `refdomains`
for positions 7 to 10.

That number is the whole answer. ujam.com holds position 8 for "breakbeat"
(1,800 a month) with three referring domains. rateyourmusic holds 7 with ten.
Our own breakbeat guide sits at 26 with one. The gap is single digits, not
hundreds, and no keyword difficulty score will tell you that.

A topic where the weakest top-ten page has under about twenty referring domains
is winnable. One where every result is Wikipedia and Spotify is not.

Then read what kind of results hold the top ten, which matters as much as their
link counts. Count the slots an article could take at all. Breakcore has one:
allmusic at seven, with two referring domains, while Wikipedia, Reddit, YouTube
and Spotify hold the other nine. Grime has three, at four, five and fifteen
domains. Same method, same thresholds, opposite answer, and the difference is
not the numbers but the shape. Where the page types in the top ten are forums,
videos and playlists, Google is not asking for an article and writing a better
one does not change that.

## 5. Ask what will make this page different

One asset nobody else has: an owner who makes this music. Ask whether the page
will use that, and if not, what will take its place.

**This is not a veto and it is not about ranking.** Wikipedia holds position one
for breakcore without it. A topic can still be written well and still rank, from
research and from embeds like anyone else's.

What the question decides is whether the page is worth the reader's time next to
the page already at position two, and whether anything on it can be cited rather
than absorbed. Both of those were measured: models synthesise the ordinary
without attribution, and the small sites Wikipedia links to are cited for
interviews, archives and tools, never for explanations.

Recorded because it was applied wrongly. The catalogue used to be this
question's other asset, and a set count settled whether to write about breakcore
before step 4 had a say — even though a count says nothing about demand or
winnability, and Google cannot see the catalogue and does not care that it
exists. The catalogue is dropped from this question for that reason; it stays
useful once a page is being written, as numbers to cite, not as a reason to
write it or not. Whether the owner had standing in a genre descended from jungle
and hardcore was never asked either, and still should be.

## 6. Write the map before the article

`keywords/<page>.json`, terms with the volume that justified them, rejected
terms with a one-line reason. `audit-keywords.mjs` then fails the build if the
page does not contain what it claims to target.

Write the map first and the structure follows it. Write the article first and
the map becomes a justification exercise.
