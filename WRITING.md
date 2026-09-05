# Writing a guide

Two audits enforce the output of this: `audit-keywords.mjs` and
`audit-media.mjs`. Neither can enforce the thinking, which is what this file is
for. Everything below was learned by getting it wrong on a page that shipped.

## Keywords come from Ahrefs, never from your head

Run `keywords-explorer-related-terms` on a seed phrase **before** you look
anything up. Then measure what comes back.

Writing a list of candidate phrases by hand and looking those up only measures
what you already thought of. That is not research, it is a memory test with a
citation attached.

What it cost, twice in one day:

- An article was written, titled and given a URL aiming at "find new music"
  (900 a month worldwide). The phrase "how to find new music" (1,400) was never
  checked, because nobody typed it into the candidate list. The URL had to be
  moved after the fact.
- "amen break" (17,000 a month) and "drum n bass", the spelling without "and"
  (3,000), were absent from a site that has guides on breakbeat, jungle and
  drum and bass. Both surfaced only when the expansion endpoint was finally run.

Write the result to `keywords/<page-name>.json` with the volume that justified
each term. The audit then fails the build if a page claims a term it does not
contain. Drop a term from the file rather than wedging the phrase into a
sentence: an entry removed on purpose is honest, a phrase stuffed to satisfy a
checker is not.

## Media illustrates the paragraph beside it

Not the article in general. If a section argues about a record, the record goes
in that section, not into a wall of embeds at the end. The reader should be able
to hear Ripgroove while reading about speed garage.

The audit checks distribution: at most 40% of argued sections may carry nothing,
and no such section may run past 450 words. It cannot check whether the media is
the *right* media. A DJ set dropped into a section about a 1997 single satisfies
the count and fails the reader.

Match the medium to the claim:

- a record is named, embed the record, from the label's or artist's own channel
- a DJ or a scene is described, embed a set from the catalogue
- a person is central, find a photograph
- the thing being explained is a shape rather than a place, draw a diagram
- a service cannot be photographed without screenshotting it, so draw instead

## Images must be openly licensed

Creative Commons or public domain, downloaded and served locally, never
hotlinked, credited in the caption. Wikimedia Commons and Flickr's licence
filter are the two practical sources; press kits usually grant use with credit.

Embeds are different: YouTube, Spotify, SoundCloud and Bandcamp hand out embed
codes for this purpose, so an embedded player is licensed use rather than a
borrowed asset. Screenshotting a third party's site is not, however convenient
it would be for an article about that site.

This is not caution for its own sake. Stock agencies scan for unlicensed images
automatically and invoice for them.

## Never edit published copy silently

Adding a phrase to a live article to satisfy a keyword check is an editorial
decision. Show the exact wording before changing it, not after.
