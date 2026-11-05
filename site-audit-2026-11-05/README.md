# Site audit, 5 November 2026

A second full pass over every live page after the 4 November AI-slop fixes
(PR #10, merged and deployed, quality gate green). It covers the 102 English
guides and their German, French and Spanish translations: 287 pages in all,
leaving out the redirect stub and the map preview.

Each area has its own file, with the exact live wording and a proposed fix:

| File | What it checks |
|---|---|
| [draft-leakage.md](draft-leakage.md) | Template residue, build bugs, internal notes, research-process wording, untranslated copy |
| [keyword-spam.md](keyword-spam.md) | Keyword density, exact-match phrases wedged into sentences, stuffed headings, padded FAQs |
| [ai-slop.md](ai-slop.md) | Stock wording, contrast tics, dashes, repeated templates, question headings |
| [seo.md](seo.md) | Technical and on-page SEO: what the existing audit covers and what this pass added |

Nothing on a live page has been changed. Every proposed edit is written out
here first, because published copy is changed only once the owner has
approved the exact wording.

## Verdict

**Not clean yet.** Most of the site passes, but five problems are live, and
two of them are build bugs that no audit caught:

| # | Problem | Pages | Severity |
|---|---|---|---|
| 1 | Eight section headings render as the word **"undefined"** | 6 (house and techno guides in DE, FR, ES) | Critical |
| 2 | 14 subheadings print as literal **"### …"** paragraphs | 2 (Spanish Defqon.1, Fusion) | High |
| 3 | **Keyword phrases wedged into sentences** ("the best techno club Belgrade has", "also searched as Fusion Festival Germany") | 13 English guides, 29 sentences | High |
| 4 | **Headings stuffed with the long keyword form** ("Ushuaia Ibiza tickets / dress code / VIP / address…") | 6 (Ushuaïa, Pacha, Fusion, Printworks; Spanish Ushuaïa and Pacha) | Medium |
| 5 | **Research-process wording** ("on the pages read", "I found no later statement") | 2 (Defqon.1, Fusion) | Medium |
| 6 | **FAQ questions padded with keyword variants** and the same answer twice | 7 pages, plus their translations | Medium |

Smaller items (stock words, a list format with spaced dashes, roundup method
boilerplate) are in [ai-slop.md](ai-slop.md). They don't need urgent work.

## What is clean

- **No markdown or template residue in prose** apart from the Spanish "###" bug:
  no `**`, `[Embed]`, `figure:`, `{{ }}`, TODO or placeholder text on any page.
- **No internal files, tooling names, keyword-tool language or editor notes**
  in visible text, meta tags, titles or alt text.
- **No English left in translated pages**, other than source titles in the
  Sources lists and one quotation, which is correct.
- **No self-explaining cards and no "This guide covers…" sentences.** The
  4 November guards in `audit-banned-phrases.mjs` hold on every page.
- **FAQ structured data matches the visible FAQ** on every page: 1,540
  questions, none missing.
- **Hreflang links all return**, no page is orphaned, no page is thin,
  every title shares words with its H1, and alt text describes the image
  rather than repeating keywords.

## How far "sure" goes

These findings come from scripted scans of every built page, using patterns
for each failure type, and then reading every hit by hand. A scan only finds
what its patterns describe, so a new kind of slop phrased in a way nobody has
listed could still be on a page. What this pass rules out is the known kinds
on any page. Each new kind found here becomes a build check once it is fixed,
the same way the 4 November findings did.

## Logged

Every problem above is logged as an open entry in `defects.json`. Each
entry stays open, and prints on every build, until its fix lands.
