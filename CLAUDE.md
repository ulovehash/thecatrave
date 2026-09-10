# thecatrave

A static site about its owner and whatever interests them: long guides on dance
music and club culture (UK genres so far, but not limited to them), plus the
Selector, a tool that plays one of 62,877 recorded DJ sets at random. Written
for **listeners**. The owner is a working breakbeat and jungle producer.

## Read the file that governs the task, before starting it

Every rule below was written after it was broken. They are not loaded by
remembering they exist.

| Task | Read first |
|---|---|
| Writing or editing a guide | `ARTICLE-PRODUCTION-WORKFLOW.md`, then `AGENTS.md` §7–§9 |
| Reviewing a draft | `ARTICLE-EDITORIAL-REVIEW.md` |
| Deciding what to write next | `TAKEN-KEYWORDS.md` first: a term listed there is taken, never research it again. Then `TOPIC-DOSSIERS.md` (check for existing progress), then `TOPIC-RESEARCH.md` |
| Finding keywords | `KEYWORD-METHOD.md` |
| Deciding who a guide must name | `FIGURES.md`, then write `media/<guide>.json` |
| Anything touching prose | `WRITING.md` |
| Components, build, CSS contract | `SITE-COMPONENTS.md` |
| Something turned out wrong | `defects.json`, before fixing it |

## The five that get broken

**Never research from memory.** Keywords come from Ahrefs expansion, figures come
from the six sources in `FIGURES.md`. A canon list written from recollection put
a 1994 jungle record in the drum and bass guide. A URL shipped targeting a phrase
worth 900 while the 1,400 variant went unchecked, because nobody typed it in.

**Never reuse media from another guide** without a strong editorial reason, and
never say so silently. The UK garage guide shipped with five of seven images
borrowed from other pages. The rule was already in
`ARTICLE-PRODUCTION-WORKFLOW.md` §7 and went unread.

**Do not teach people to make the music, and hand out no files.** No sample
chopping, bass design, processing, drum programming, sample packs, drum kits,
loops or MIDI. Volume will argue against this at every keyword pass: the amen
break alone carries about 7,700 monthly searches for a file. The answer does not
change. See `WRITING.md`.

**Never edit published copy silently.** Show the exact wording first. This
includes inserting a keyword phrase into a live guide.

**Images must be openly licensed**, downloaded locally, credited in the caption.
Stock agencies scan and invoice.

## When something is found wrong

Write it into `defects.json` before fixing it, and name the file and the exact
phrase that closes it. `audit-defects.mjs` then greps for that phrase on every
build, so a rule cannot be claimed without being written, and a hard-won rule
cannot be quietly deleted later.

This applies to anything the owner catches, anything an audit catches, and
anything found while doing something else. Entries with no fix yet stay open and
print their age on every build. That is the point: they are not silenceable
except by being fixed.

## Verdicts

No verdict on a topic before every stage in `TOPIC-RESEARCH.md` is filled in, and
never compare two topics researched to different depths. Whoever gathers evidence
does not rule on it.

## Building

`node scripts/build.mjs` regenerates every page. Generated `.html` is output, not
the editing surface, except where a builder preserves a marked block — the jungle
guide keeps its body between `<!-- jungle-content:start -->` markers.

Checks, all of which must pass: `npm run check:html`, `node audit-all.mjs`,
`npm run check:layout`, `npm run check:links`.

## Pushing

Only when the owner asks. `main` deploys to GitHub Pages and is protected by a
quality gate; watch the run after pushing.
