# Dekmantel Festival: editorial review (2 October 2026)

Reviewed against ARTICLE-EDITORIAL-REVIEW.md after the build.

- **Facts.** Programme, venues, ages, ticket rules, camping and shuttle come from dekmantelfestival.com/faq and describe the 2026 edition; the page says so. Selectors dates come from dekmantelselectors.com (19 to 23 August 2027). History comes from Time Out and Casa.
- **Dates.** Amsterdam 2027 is labelled unconfirmed, with listings named. `festival-editions.mjs` has `ends: null`.
- **Left out on purpose.** Ticket prices (aggregators disagree), capacity, DJ Mag rank 17 (single source), any 2027 line-up (none confirmed in the sources read).
- **Keywords.** Five targeted terms, all present. Four measured terms dropped because the page cannot carry them honestly (see keywords/dekmantel.json).
- **Voice.** No dashes, no "full set" emphasis, no drum and bass or breaks angle, no production teaching, no files.
- **Media.** Three new Commons images with author and licence in captions; five oEmbed-checked sets from the festival's own channel; both owner mixes; a /selector link in the last section. Two of seven argued sections have no media.
- **Checks.** check:html, audit-all (22 audits), check:layout, check:links and git diff --check pass; the second build is stable.
