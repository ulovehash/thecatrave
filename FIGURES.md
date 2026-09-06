# Finding the people a genre guide cannot omit

A guide that leaves out a founder is not incomplete, it is wrong, and the people
who care will say so. This is the algorithm for deciding who must be in it.

## Why it is written down

A canon list for five guides was produced from memory in one sitting. It put
Original Nuttah, a 1994 jungle record by UK Apache and Shy FX, in the required
list for the drum and bass guide. The owner caught it immediately.

The same list was being used to argue that the guides had gaps. Some of those
gaps were real. The list itself was not researched, so it could not be trusted to
say which.

Memory produces the famous. This is a problem twice over: the famous are already
in every competing guide, so naming them differentiates nothing, and the people
who actually started a music are often not famous at all.

## The six sources

Run all six. A name is judged by how many of them return it, so a missing source
changes the answer.

**1. What people search for.** `keywords-explorer-matching-terms` on
`<genre> artists`, `<genre> producers`, `<genre> djs`, `best <genre> artists`,
`<genre> pioneers`. Names that appear as search terms in their own right are
names the audience already holds.

**2. What the topic talks about.** `keywords-explorer-related-terms` with
`terms=also_talk_about` on the genre. This returns entities rather than queries
and surfaces people who are discussed without being searched. It is the only
source that found the `amen brother` cluster, which matching terms could not see.

**3. What is asked.** People Also Ask on `<genre> artists`, `who invented
<genre>`, `who is the father of <genre>`, `best <genre> artists`. Read from
`serp-overview` rows that carry a title and no url. The founder questions are the
point: "Who is the father of grime?" appeared on two separate SERPs.

**4. The consensus list.** Take the pages ranking for `best <genre> artists` and
read the names they list. This is what a reader has already been told the canon
is. A guide that omits a name every competitor carries looks ignorant, whatever
the truth of it.

**5. The originators.** The consensus list is popularity, not history, and the
two diverge hardest at the beginning of a genre. Read the Wikipedia article's
history and origins sections, its cited sources, and the earliest releases on
Discogs. Founders often released a handful of records on a label that folded.
This source exists because sources 1 to 4 are all biased towards the famous.

**6. Our own catalogue.** Artists carrying the genre tag across 62,877 sets,
ranked by how many sets each has. Nobody else has this. It cannot find founders,
because the catalogue starts in 2012, but it does show who is playing the music
now, which is the half a historical guide usually gets wrong.

## The cross-reference

This is the algorithm proper. Sources are counted, not read for impressions.

- **Required**: a name returned by three or more sources, or by source 5 at all.
  A founder named only in the origins section still goes in. That is the whole
  reason source 5 is separate.
- **Differentiator**: in source 6 and absent from sources 1 to 4. These are the
  people we can write about that the competing guides cannot.
- **The gap that gets us flamed**: in sources 4 or 5 and absent from our draft.
  Report these first and loudly. Everything else is improvement; this is error.
- **Reject**: returned by one source only, and not source 5. Record the name and
  the reason, so the next pass does not re-litigate it.

## Output

`figures/<genre>.json`, written before the article, in the shape the keyword maps
already use: entries with the sources that returned them, and rejects with a
reason. The article is then checked against it rather than against somebody's
recollection.

Each entry carries what the person is required *for*: a founder needs a sentence
about what they started, a defining record needs the record embedded, a central
figure needs a photograph. A name mentioned in a list satisfies nothing.

## What this does not settle

Whether a name is placed in the right guide. Original Nuttah is jungle and would
have been caught by source 5 in a jungle pass, and would still have been wrongly
filed if somebody moved it. Genre attribution is a separate judgement and belongs
to whoever writes the page, informed by what the sources say about the record's
year, label and scene rather than by what it sounds like.
