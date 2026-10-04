# fabric London editorial review

Reviewed 2026-10-04 against `fabric-london-draft.md`, `build-fabric-london-article.mjs` and the built `fabric-london.html`. Not independent: the same session gathered the evidence and wrote the page (Stage 6 not run by a second party).

## 1. Verdict

Publishable after the owner's read. Every dated claim on the page is traceable to the club's own site or to Time Out, Mixmag or Resident Advisor. Where sources do not say (ticket prices, club-night capacity, locker policy, exact opening date, when the under-19 rule ended, date of the BodyKinetic floor), the page says so instead of guessing.

## 2. What works

- Head terms (fabric london, fabric nightclub, fabric club) sit in the title, answer block and H2s.
- Opening times, dress code and entry rules are quoted from the official FAQ, with the read date.
- The 2016 section is a dated timeline from the council and club statement as published by Time Out.
- Three new Wikimedia Commons images, three sets filmed at the club, one panel.

## 3. Priority revisions

1. Meta description is reworded from the approved Stage 1 version (140 characters). Owner to confirm.
2. Ticket prices are absent (RA returned 403, club does not publish them). Add after a manual read of an RA listing.
3. Capacity is given as hire maxima plus Mixmag's 2016 figure of 2500, with the conflict stated.

## 4. Fact-check ledger

| Claim | Source |
|---|---|
| Address, directions, Chancery Lane note | https://fabriclondon.com/faq |
| Hours Fri/Sat 11pm to 6am, Sun 11pm to 4am, last entry, door tickets, resale, student, fabricfirst, no paying guest list, music policy by night, cloakroom times, security, photo policy | https://fabriclondon.com/faq |
| Entry rules, age 18+, accepted ID, Early Entry and Entry After | https://fabriclondon.com/info/entry-policy |
| Phone stickers, June 2021 no photo policy | https://fabriclondon.com/info/phone-safety |
| Lift width, step-free access, room access | https://fabriclondon.com/info/accessibility |
| Hire maxima by room, 25,000 sq ft, five bars, 100 to 1,500 | https://fabriclondon.com/private-hire |
| Residents, Richards 700 Saturdays | https://fabriclondon.com/residents |
| Listings read 4 Oct 2026 | https://fabriclondon.com/whats-on |
| BodyKinetic floor, 450 vs 36 transducers | https://fabriclondon.com/posts/weve-upgraded-our-dancefloor |
| Rooms 2 and 3 NNNN Audio | https://fabriclondon.com/posts/a-major-sound-system-upgrade-to-rooms-2-3 |
| 1999, Reilly and Leslie, 250 jobs, capacity 2500 | https://mixmag.net/feature/fabric-forever-remembering-one-of-the-best-clubs-the-uk-has-ever-seen |
| Cold stores, Reilly's search | https://www.timeout.com/london/clubs/14-things-you-didnt-know-about-fabric |
| Council statement, deaths, suspension, revocation, measures | https://www.timeout.com/london/blog/fabric-is-saved-112116 |
| Reopening weekend 6 to 8 Jan 2017 | https://www.timeout.com/london/blog/fabric-is-officially-reopening-heres-everything-you-need-to-know-120216 |
| Six-hour hearing, 140,000 petition | https://ra.co/news/36182 |

Sets: three YouTube sets and one panel verified by oEmbed on 4 Oct 2026 and each filmed at fabric. The Joris Voorn set in the catalogue was filmed at The Shard and is not used.

## 5. SEO preservation

New page, no existing URL changed. best-electronic-music-clubs-in-london.html not edited.

## 6. Gaps

Ticket prices, exact opening date, club-night capacity, lockers, date the under-19 condition ended, date of the dance floor rebuild.

## 7. Cuts

None required. Zero-volume terms dropped at Stage 1 (queue, nearest station, what to wear, licence, fabriclive, dj, bodysonic floor, smithfield).

## 8. Media actions

Images (Wikimedia Commons, all CC BY-SA 2.0, new to this page, credited in captions): Charterhouse Street 2017 (Paul Williams), entrance 2020 (Lolita Montana), neon party 2013 (uclu photosoc). OG card built from exterior-2017.

## 9. Unresolved questions

Whether to quote RA ticket prices once readable. Whether to keep the meta rewording.

## 10. Final checklist and evidence

- Dashes in draft: grep for em and en dashes returns 0.
- AI words (delve, tapestry, testament, vibrant, landscape, pivotal): 0.
- dnb, breaks, jungle, Wikipedia in draft: 0.
- "full" and "whole" appear only in "whole venue" and "full redesign" of sound systems, not about DJ sets.
- Media reuse: none from other guides.

Humanizer before and after:

1. Before: "fabric is a legendary, vibrant cornerstone of London nightlife." After: "The fabric nightclub is at 77a Charterhouse Street in Farringdon, open since 1999."
2. Before: "It offers a rich tapestry of sound, from house to techno to bass." After: "Saturdays are mostly house, techno and electro."
3. Before: "Not just a club, but a symbol of the fight for nightlife." After: "On 6 September the sub-committee revoked the licence."

Checks: check:html, check:layout and check:links pass. audit-all fails only at audit-canon, from tracked stray files `media/og-articles-covers.json` and `media/sitemap-lastmod.json` committed in 035dc07 (Time Warp), which are not this page's.
