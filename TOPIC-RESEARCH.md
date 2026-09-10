# Deciding whether a topic is worth writing

`KEYWORD-METHOD.md` says how to find keywords. This says how to reach a verdict on
a whole topic without cutting the work short, because that kept happening.

## Why this exists

Three verdicts were given on breakcore in one evening, and they contradicted each
other.

The first said write it: twelve thousand searches a month, and the only editorial
page in the top ten had two referring domains. The second said do not: the
catalogue holds no breakcore sets. The third said write it after all, because the
question form of the query has five editorial slots whose incumbents sit at DR 41
with two referring domains each.

Every one of those was true. Each was also a fragment presented as a conclusion.
The first read one SERP. The second treated a differentiation question as a veto.
The third found what the first had missed, on the same topic, an hour later.

In the same evening grime was called the bigger opportunity on the strength of one
SERP and ten keywords, while breakcore had been through four tools. Two topics
were compared at different depths and the comparison was stated as fact.

The fix is not more care. It is that no verdict may be given until every box below
is filled in, for every candidate being compared.

## The pipeline

Six stages. A topic that has not been through all six has no verdict, only notes.

**1. Seeds** — from what already ranks, from competitor SERPs. Never from
memory. See `KEYWORD-METHOD.md`.

**2. Matching terms** — `keywords-explorer-matching-terms`, `match_mode=terms` on
the bare head term, then `phrase` on the two-word form. Every term returned is
classified: listener intent, production intent, navigational, or collision. Report
a volume subtotal per class. The head number means nothing until this is done:
breakcore's twelve thousand is roughly forty per cent people looking for sample
packs, and this site does not serve producers.

**3. Related terms** — both `also_rank_for` and `also_talk_about`. The second
finds the topics a page must cover to belong in the set, which is how the amen
break kept surfacing next to breakcore.

**4. SERP shape and People Also Ask** — for the head term *and* at least two
question forms. Read three things:

- how many of the ten slots an article could occupy at all
- the referring domains of the weakest editorial page
- every People Also Ask question, verbatim

The head term and the question form can disagree completely. On `breakcore` the
platforms hold nine slots; on `what is breakcore` there are five editorial slots
and the weakest incumbents have two referring domains. Checking one and
generalising is the specific mistake this stage exists to prevent.

**5. Competitor mining** — the stage that was missing entirely. For each text
guide in the top three, run `site-explorer-organic-keywords` with `mode=exact`
against that URL. It shows what the page actually earns, which is routinely not
what it is titled for. Anything high-volume here that stages 2 to 4 did not return
is a keyword we would have shipped without.

**6. Validation** — a separate pass, by the prompt below, over the filled-in
evidence. Not by the person who gathered it.

## The validation prompt

> You are a search strategist with fifteen years of it, the kind who is hired to
> kill projects as often as to approve them. You are handed the research below on
> a topic somebody wants to write about. You did not gather it and you have no
> stake in the answer.
>
> The site: thecatrave.com, long-form guides on UK dance music genres, written for
> listeners rather than producers, by a working breakbeat and jungle producer. It
> has nine pages, one of which earns almost all its traffic. Its assets are a
> catalogue of 62,877 recorded DJ sets that can answer questions with counts, and
> an owner with standing in this music.
>
> Your job is one verdict: **write it, write something narrower, or drop it.**
>
> 1. Name the number that actually matters here, and say why the headline volume
>    is not it.
> 2. Say what this page would be competing against, by page type, not by domain
>    rating. If the top ten is forums and playlists, say so and say what that
>    means for a text guide.
> 3. Answer the differentiation question: next to the page currently at position
>    two, why would anyone read ours? If the honest answer is "it would be
>    similar but better written", say that, and treat it as a warning.
> 4. Name what is missing from the research you were given. Assume something is.
> 5. Give the verdict in one sentence, then the reasoning. If the verdict is
>    "write something narrower", say exactly what.
>
> Do not hedge into a list of considerations. You are being paid for a decision.
> If two candidates are in front of you, rank them and say what would change the
> ranking.

## Comparing candidates

Never compare topics researched to different depths. If one has been through six
stages and another through two, the second has no standing in the comparison and
saying otherwise is a guess wearing a number.

## Who reviews the draft

`ARTICLE-EDITORIAL-REVIEW.md` already carries this: three reviews for facts,
senior-editor language and SEO preservation, plus a media and layout readiness
pass. Use it. A roster was drafted here from scratch and duplicated all four,
which is the same failure as researching from memory, one level up: writing a
process without reading the process that exists.

What this file adds to it is upstream of a draft, where that protocol starts. The
one prohibition worth repeating, because it is what went wrong today: a
researcher reports measured facts and gives no opinion on whether to write the
thing, and whoever rules on that gathers nothing.

## Running it

Stages 1 to 5 are legwork and parallelise well: one researcher per topic. Stage 6
reads what they return. The reviewers run after a draft exists, in the order
above, each seeing the previous verdict, and the draft is not finished until all
of them pass. Fixing what one finds sends it back through the ones already run,
because a media insertion can break a fit that had passed.
