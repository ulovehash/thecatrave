# Finding keywords worth writing for

A repeatable pass. Every step exists because skipping it cost something.

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

## 1. Seeds, from three places and never from memory

- **The catalogue.** 62,877 sets carry genres, channels, cities and years.
  Anything with a few hundred sets behind it is a subject the site can write
  about with numbers nobody else has.
- **What already ranks.** `site-explorer-organic-keywords` for thecatrave.com,
  and Search Console. A page at position 20 for something is a page that could
  be at position 8.
- **Competitor SERPs** for topics already nearby.

Writing candidate phrases by hand skips this step and measures only what you
already thought of. That shipped an article titled "how to find new music"
without anyone checking that phrase, worth 1,400 a month.

## 2. Expand

`keywords-explorer-related-terms` on each seed, then
`keywords-explorer-matching-terms` when it is working. Take what comes back,
not what you expected.

Note: `keywords-explorer-overview` returns HTTP 500 whenever `difficulty` is in
`select` for a keyword with no KD value. Leave `difficulty` out and batch ten
keywords at a time; it is also three times cheaper per row that way.

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
  impressions and zero clicks, because this site is written for listeners.

## 4. Score winnability from the weakest page in the top ten

Not from KD. Pull `serp-overview` and read `refdomains` for positions 7 to 10.

That number is the whole answer. ujam.com holds position 8 for "breakbeat"
(1,800 a month) with three referring domains. rateyourmusic holds 7 with ten.
Our own breakbeat guide sits at 26 with one. The gap is single digits, not
hundreds, and no keyword difficulty score will tell you that.

A topic where the weakest top-ten page has under about twenty referring domains
is winnable. One where every result is Wikipedia and Spotify is not.

## 5. Ask whether it is ours

Two assets nobody else has: a catalogue of 62,877 sets that can answer questions
with counts, and an owner who makes this music. If a topic cannot use either,
the page will be a worse version of something that already exists.

The UK garage guide passes: it proves the revival with upload counts per year
rather than asserting it. An artist page for a DJ with three sets does not.

## 6. Write the map before the article

`keywords/<page>.json`, terms with the volume that justified them, rejected
terms with a one-line reason. `audit-keywords.mjs` then fails the build if the
page does not contain what it claims to target.

Write the map first and the structure follows it. Write the article first and
the map becomes a justification exercise.
