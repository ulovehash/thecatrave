# Best DJ mixes prototype notes

Status: visual prototype only. Not approved for `main`.

## Primary intent

- Primary: best DJ mixes / best DJ sets.
- Supporting editorial territory: breakbeat, bass music, breaks, experimental club music and rave.
- Excluded from the prototype: generic DJ-hire intent, production tutorials, monthly update logic and comment-based gimmicks.

## Ahrefs validation used for the prototype

Evidence date: 2026-08-31.

| Query | US volume | Global volume | KD | Traffic potential |
| --- | ---: | ---: | ---: | ---: |
| best dj mixes | 90 | 150 | 2 | 900 |
| best dj sets | 200 | 400 | 0 | 100 |
| best soundcloud mixes | 30 | 40 | 0 | 20 |

The current SERPs are fragmented across streaming platforms, Reddit, YouTube, SoundCloud, forums and editorial pages, which leaves room for a focused curated archive.

## Prototype content model

The page is a permanent personal archive, not a monthly chart. Each mix has:

- a conventional embedded YouTube player;
- sound tags;
- mood tags;
- two editorial mood meters;
- short first-person editorial context;
- a collapsed tracklist only when a usable tracklist was verified.

No `comment mystery` or comment-derived novelty block is included.

## Verified video IDs

- riria — Boiler Room: Tokyo: `Fa8LQLy4C5A` (from the user's playlist)
- Job Jobse — Boiler Room: Amsterdam: `-w3xYI64LSo`
- Chase & Status — Boiler Room: London: `Zy_JR9_Y8dE`
- Underworld — Boiler Room: London: `rAOHJqJMYDA`
- Overmono — Boiler Room: Manchester: `xgJBhezlMoE`
- KETTAMA — Boiler Room: London: `JUDUC87VuPU`

## Tracklist evidence

- Chase & Status: MixesDB, 2023-09-16 Boiler Room London.
- Underworld: MixesDB, 2025-08-02 Boiler Room Burgess Park London.
- Overmono: MixesDB, 2023-10-14 Boiler Room Manchester.
- KETTAMA: MixesDB, 2025-07-31 Boiler Room London.
- Job Jobse prototype uses the 2024 Amsterdam Boiler Room video published in 2025. The older 2014 Trouw tracklist was deliberately not attached because it belongs to a different performance.
- riria has no tracklist in the prototype because a complete reliable one was not verified.

## Performance approach

- no framework;
- no filtering library;
- native anchor navigation;
- native `<details>` tracklists;
- YouTube iframes use `data-src`;
- one small IntersectionObserver script preloads players 650 px before viewport entry;
- full-width visual treatment is CSS only;
- prototype page is `noindex,nofollow`.

## Approval gate

Before any move to `main`, review:

1. overall visual direction;
2. whether mood meters feel useful or gimmicky;
3. density of tracklists;
4. copy tone for each set;
5. final canonical title/H1/meta;
6. production OG image;
7. whether this custom component should become a permanent shared site component.
