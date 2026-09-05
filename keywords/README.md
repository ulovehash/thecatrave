# Keyword maps

One JSON file per page, named after the page's `name` in pages.mjs. Each holds
the head terms that page is written to answer, with the volume that justified
including them, and `audit-keywords.mjs` fails the build if the built HTML does
not contain one.

The point is not the check. The point is the step before it.

These lists must come from Ahrefs' own expansion, not from a person's memory.
Run `keywords-explorer-related-terms` and `keywords-explorer-matching-terms` on
a seed phrase first, then measure what comes back. Writing candidate phrases by
hand and looking those up only measures what you already thought of.

That failed once, visibly. The find-new-music article was researched by hand and
shipped with a title targeting "find new music" at 900 a month worldwide, while
"how to find new music" at 1,400 was never checked, because nobody typed it into
the list. It was caught by a reader, not by the research.

`present` is checked case-insensitively against the rendered text. A term listed
here and absent from the page fails the audit, so drop a term rather than stuff
it: an entry removed on purpose is honest, a phrase wedged into a sentence to
satisfy a checker is not.

## Expanding a map that already exists

The lists are not finished when a page ships. Every few weeks, or whenever a
page is edited substantially, run `keywords-explorer-related-terms` on the
`seed` again and compare what comes back against `terms`.

Record the decision either way. A term you add goes in `terms` and the audit
then forces the page to contain it. A term you decide against goes in
`rejected` with a one-line `why`, so the next person does not spend units
rediscovering that "music garage" is mostly people looking for a rehearsal
room. `expansion_checked` says when the seed was last expanded and with what.

The judgement is intent, not volume. "armand van helden" at 7,000 a month
earned a sentence in the UK garage guide because his Spin Spin Sugar remix is
genuinely part of the speed garage story and the sentence is one a reader
wants. "garage uk" at 1,400 did not, because it is "uk garage" with the words
swapped and writing it out would read like a machine wrote it.
