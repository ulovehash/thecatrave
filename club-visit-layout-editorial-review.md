# Club-guide visit sections: 8 October 2026

## Verdict

Ready for local review. The user approved the single Berghain practical section and explicitly requested the same treatment for every club article. All 57 club-guide variants were rebuilt: 25 English, 16 German and 16 French. Nothing was committed or published. Publication readiness is not claimed: the existing keyword audit has nine missing-target findings, and the shared audit reports two failures on best-dj-sets-of-all-time.html.

## Scope and editorial decisions

The dominant intents, titles, descriptions, H1s, canonical URLs, original publication dates, media and existing anchors are preserved. This is a structural consolidation of existing advice, not a new factual survey or SEO repositioning. Search Console, Keyword Planner and competitor research were not rerun; no ranking or traffic improvement is claimed.

Individual venues have a single early practical section. fabric, Pacha and Ushuaia use prose instead of practical-information tables. Roundups retain useful venue comparisons, with their existing geographical or door guidance at the top. Printworks uses a closure/reopening heading rather than implying it can currently be visited. Music and historical passages are kept outside the practical section. All prior section anchors remain valid.

The source mapping is explicit in content/club-visit-layouts.json. For sections mixing practical advice and listening, only the practical paragraphs move; their original media remain in a renamed listening section. The shared article shell rebuilds contents through articleTableOfContents and sections through articleSection. No CSS or new media were added.

## Facts and translations

Moved information retains its existing factual qualifications and source links. This pass does not certify that every ticket price, operating pattern or venue rule is current. No new venue claims were researched or invented. The German and French Berghain planners now include the already-approved English accessibility and transport information, including conditional assistance, the German disability-card criteria and the lack of guaranteed admission.

Source records for that approved content: https://berghain.berlin/de/barrierefreiheit/ and https://www.berghain.berlin/en/contact/. The typical entry-price link remains https://www.top10berlin.de/de/cat/nachtleben-269/electro-clubs-715/berghain-245. These were read earlier in the same task, not freshly revalidated by this structural pass. The reviewer is also the implementer; this is not independent factual review or Stage 6 topic validation.

## Humanizer and placement review

Applied the repository humanizer guidance to the changed copy, using the approved Berghain practical section as the voice sample. Substantive existing claims and qualifications were retained. Three examples:

- Before: “Most of the table is east and south London”. After: “The clubs in this guide are mostly in east and south London”. The paragraph now precedes the venue table. Equivalent German and French references were changed.
- Before: “The club's FAQ gives its fabric London dress code in two sentences. Guests are encouraged to dress as they like…” After: “Guests are encouraged to dress as they like…” The actual rule remains; the description of the source's sentence count is removed.
- Before: a four-row table of fabric opening times. After: “fabric usually opens from 11pm to 6am on Friday and Saturday, and from 11pm to 4am on Sunday. Weekday events have their own opening times.” The following paragraph retains the exceptions for earlier starts and later finishes.

Old position-dependent references such as “the history above” were removed where the new sequence made them incorrect. Building history, capacity and ownership were moved out of the Pacha/Ushuaia practical material. The short FAQ answers remain useful lookup entries; the duplicated visit-summary sections do not.

## Verification

- `node scripts/build-club-guides.mjs`: builds the 57 configured routes from their generators and localized content modules.
- `node audit-club-visits.mjs`: passes. Exactly one early planner per guide; preserved legacy IDs, title, description, H1, canonical, publication date and media; valid heading order; no practical tables in the converted individual-club planners. The route inventory includes all current club guides.
- `node audit-club-guide-links.mjs`: passes, 57 guides and 426 table venue links. The two previously labelled unverified RA listings remain qualified.
- `node audit-banned-phrases.mjs`: passes, 8 rules across 218 pages, including English, German and French.
- `node audit-media.mjs`: passes on 206 guides, including media adjacency.
- `node audit-own-tracks.mjs`: passes on 206 articles.
- `node audit-seo.mjs`: passes on 215 pages.
- `node audit-site-components.mjs`: FAQ content/schema parity now passes. Remaining `faqHasQuestions` and `essentialListeningSharedGeometry` failures are both on best-dj-sets-of-all-time.html, outside this change.
- `node audit-keywords.mjs`: nine existing target-phrase gaps remain across Berghain, Berlin, fabric and Printworks. This consolidation does not remove an additional target phrase. Newly affected wording for German Berghain opening hours and fabric hours/dress headings was preserved.
- Final repeated scoped build: byte-identical across all 57 pages, including the final fabric heading adjustment.
- `git diff --check`: passes after removing trailing whitespace in the touched Vienna draft.
- Browser checks: fabric, Ushuaia, Barcelona, German Berghain and French London at 1440, 1024, 768, 430 and 390 CSS pixels. All 25 combinations have one planner and no horizontal page overflow. Inspected desktop and mobile text/navigation. Existing third-party players were retained; playback of every embed was not retested.

## Remaining work before publication

Resolve the existing keyword and unrelated shared-audit failures under their appropriate scopes, and perform the repository's publication checks if publication is requested. This pass does not represent a refreshed factual review of all 57 guides.

## Publication preparation

The owner subsequently requested “push”. Changes were applied as a scoped patch to a detached worktree at origin/main, excluding the other active article and CSS changes. Node 20.20.2 was used. The clean-worktree build passes all 93 shared-component checks, plus the club-visit, club-link, SEO, media, own-track and banned-phrase audits. The Best DJ Sets failures described above belonged to the shared working copy and are absent from this publication. The nine previously disclosed keyword-target gaps remain; no keyword-audit pass is claimed. The localized homepages were rebuilt for reading-time changes and the sitemap was regenerated from content hashes. The publication contains only the approved club sources, output, shared integration, audits and records, plus those generated homepage/sitemap updates.
