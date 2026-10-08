# Festival planner rollout: editorial review

Date reviewed: 8 October 2026

## Scope and approval

- Direct user request: add the approved practical-planning section to every individual festival guide on the website.
- Implemented inventory: 70 individual page variants across English, German and French.
- Excluded inventory: nine festival roundup pages. They retain the agreed route to detailed single-festival articles rather than repeating the full planner.
- Existing detailed planners for Sziget, Boomtown, Monegros, ARC, Airbeat One and EXIT remain owned by their page generators. The registry supplies only missing planners.

## Editorial and factual checks

- Each planner states a current official ticket price or explicitly says that a valid 2027 price is not published.
- Every transport block names usable routes and includes a direct Google Maps destination.
- Accommodation, food and drink, packing, prohibited items and entry constraints distinguish published facts from items that require a live recheck.
- Changeable claims use official festival, ticketing, visitor-information or transport pages linked directly from `content/festival-planning-registry.mjs`.
- Food and drink figures are omitted when the organiser has not published them. No estimate is presented as an official price.
- English, German and French planner copy was reviewed for equivalent meaning. Festival names and product names remain unchanged where they are proper nouns.
- Copy was checked for the project's banned phrases, em dashes, generic research commentary and unsupported certainty.

## SEO and structure preservation

- No URL, canonical, title, description, H1, structured-data type or legacy section ID was changed deliberately.
- `articlePage()` inserts one planner before the FAQ or author card and adds one localized Contents link.
- Pages that already use `id="planning"` receive `id="trip-planning"` to prevent duplicate anchors.
- Official and utility links use `nofollow noopener noreferrer` through the shared component.

## Verification

- `npm run build`
- `node audit-all.mjs`: build plus 25 audits passed
- `node audit-next-festival-guides.mjs`: exactly one planner on all 70 individual variants; no full planner on nine roundups
- `node audit-site-components.mjs`: 93 checks passed across 206 guides
- `node audit-banned-phrases.mjs`: eight rules passed across 218 pages
- `npm run check:layout`: 866 mobile and desktop layout/accessibility tests passed
- `git diff --check`

## Media and accessibility

- No media was added or moved for this rollout.
- The shared planner uses semantic headings, tables, lists and link labels. Automated serious-accessibility checks passed.
- Representative visual review at the Tomorrowland planner confirmed the restrained shared type hierarchy, readable ticket table and absence of decorative row dividers outside the table.
