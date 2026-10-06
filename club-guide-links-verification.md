# Club planning links, 6 October 2026

Scope: all published city, country and club roundups, their translations, and individual venue guides. Shared output uses Google Maps venue/city searches and Resident Advisor venue profiles. No city-calendar or transport fallback.

## Verification

RA venue identities were resolved from named links in RA city club directories, or the venue field of a dated RA event. Numeric URLs in club-guide-directory.mjs are the resolved targets, not guessed IDs. RA profile pages often return an empty shell to automated readers; the named inbound RA links establish identity.

Directory sources: https://nl.ra.co/clubs/nl/amsterdam, https://ra.co/clubs/es/barcelona, https://de.ra.co/clubs/de/berlin, https://ra.co/clubs/uk/manchester, https://ra.co/clubs/uk/bristol, https://ra.co/clubs/hu/budapest, https://ra.co/clubs/es/ibiza, https://ra.co/clubs/pt/lisbon, https://ra.co/clubs/mx/mexicocity, https://ra.co/clubs/us/newyorkcity, https://ra.co/clubs/fr/paris, https://ra.co/clubs/cz/prague, https://ra.co/clubs/ge/tbilisi, https://ra.co/clubs/jp/tokyo, https://ra.co/clubs/at/vienna, https://ra.co/guide/uk/london, https://ra.co/clubs/de/cologne, https://ra.co/clubs/es/madrid, https://ra.co/clubs/it/florence, https://ra.co/clubs/it/milan, https://ra.co/clubs/gr/mykonos, https://ra.co/clubs/pl/krakow, https://ra.co/clubs/fr/southeast, https://ra.co/clubs/sg/all.

Additional event evidence: Yu Yu 2359161; Drumsheds 2497386; Dalston Superstore 2405851; Heaven 2265597; Ormside Projects 2517493; Brixton Jamm 2498964; Open Ground 2466994; Space Riccione 2467711; Pelícano 2444719; Revelin 2360124; Club Space 2444620; Echostage 2435490; Academy LA 2512850; Savaya 2462099; Green Valley 2312940; Surreal Park 1957224; Laroc 2030399; Warung 2351825; Printworks 1149214. Event URLs use https://ra.co/events/ followed by the ID.

Other primary evidence: https://ra.co/dj/izzi (Phonox, MOT, Carpet Shop), https://ra.co/dj/jdreid (Night Tales), https://ra.co/dj/bushbby (Colour Factory), https://es.ra.co/dj/luisgroove (Papagayo), https://ra.co/dj/andretorquato (D-Edge), https://ra.co/clubs/162517 (Illuzion).

## Identity decisions

- Drumsheds uses 218103, the Glover Drive venue, not closed predecessor 167124.
- Yu Yu Cine Club uses 273862, the Carmona y Valle venue.
- Instant-Fogas uses 141350, Akácfa 49–51, not the old Nagymező address.
- Motion uses 7129, the established Motion Bristol venue discussed in the guide, not the separate Motion listing 274458.
- Manchester's The Loft uses 190058, not Vienna's 26927.
- Amnesia Cap d'Agde uses 2242, not Amnesia Ibiza 764. Encoded apostrophes are regression-tested.
- Labels say Resident Advisor, not a promise that a historic/closed venue has upcoming events. Existing closure copy is preserved.
- Patrick Miller and Karlovy Lázně: no RA venue profile verified after directory and exact-name searches. Retain Maps and explicitly label the RA exception in EN/DE/FR. Do not invent a profile or redirect to a city's calendar.

## Automated regression gate

Run node audit-club-guide-links.mjs after rebuilding. It checks every published club guide and translation, each recognised table venue's Maps/RA pair, explicit exceptions, multi-venue city rows, ambiguous names and forbidden transport/calendar fallbacks. audit-all.mjs discovers this gate automatically.

Final QA: build plus all 25 audits passed. All 222 Playwright layout/accessibility checks passed across the 54 club-guide routes and shared layout checks, using installed Chromium 1234 at mobile, tablet and desktop sizes. Coverage gate counted 385 venue-specific RA links in recommendation tables.
