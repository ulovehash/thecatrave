# Trance guide research and decision gate

Research refreshed: 29 September 2026.

Status: proposed direction, not yet approved for publication. A local draft, generator and generated page predate this gate and are treated as working material only.

## Preservation inventory

This is a new page at the proposed canonical `https://thecatrave.com/trance-guide`. No Search Console preservation inventory exists. There is no published title, description, H1, ranking query, legacy anchor or backlink-dependent section to preserve.

## Keyword validation

| Query cluster | Global volume | Traffic potential | Intent | SERP page types | Best fit? | Evidence |
|---|---:|---:|---|---|---|---|
| trance music | 10K-100K | Not collected | Definition and genre overview | Wikipedia, community, streaming, label and editorial guide | Yes, primary | Google Ads Keyword Planner, all locations, Sep 2025-Aug 2026; checked 26 Sep 2026 |
| what is trance music | 100-1K | Not collected | Direct definition, history and sound | Wikipedia plus Armada, Splice and EDMProd guides | Yes, primary wording | Keyword Planner and US live SERP, checked 25-29 Sep 2026 |
| trance artists / trance DJs | 100-1K each | Not collected | Important artists and listening entry points | Lists and genre guides | Yes, supporting | Keyword Planner, checked 26 Sep 2026 |
| psy trance | 1K-10K | Not collected | Distinct subgenre and scene | Genre pages and listening results | Yes, supporting section only | Keyword Planner, checked 26 Sep 2026 |
| trance festival | 100-1K | Not collected | Event discovery | Festival and ticket pages | Limited mention only | Keyword Planner, checked 26 Sep 2026 |

The Keyword Planner evidence is already stored in `keywords/trance.json`. Ahrefs was not used.

## Competitor coverage

| Competitor | Intent | Distinct coverage | Media | Original value | Gap we can close |
|---|---|---|---|---|---|
| [Armada Music](https://www.armadamusic.com/news/trance-music) | Label-led genre explainer | History and established artists | Label catalogue/listening | Insider label context | Commercially interested source; thecatrave can separate Frankfurt, Berlin, British progressive trance and Goa more carefully |
| [Splice](https://splice.com/blog/what-is-trance-music/) | Definition plus producer education | Definition, BPM, history, artists, subgenres, production | Images and examples | Broad, current taxonomy | Drifts into production instruction and uses generalized altered-state language; a listener-first chronology with exact tracks is clearer |
| [EDMProd](https://www.edmprod.com/what-is-trance-music/) | Beginner and producer guide | Sound, history and production | Embedded examples | Accessible overview | Production-course intent leaves room for scene history, disputed origins and stronger editorial listening context |
| [Wikipedia](https://en.wikipedia.org/wiki/Trance_music) | Reference | Detailed history and taxonomy | Limited | Breadth and citations | Dense and inconsistent as a listening route; the article can turn the evidence into a concise narrative without copying a single-origin myth |

## Semantic kernel

- Primary intent: explain what trance music is, how it sounds, where it developed and which artists and branches matter.
- Close secondary language: trance artists, trance DJs, trance subgenres, trance BPM, psy trance, trance versus techno.
- Required entities: Frankfurt, Omen, Dorian Gray, Eye Q, Harthouse, Sven Vath, DJ Dag, Berlin, MFS, Paul van Dyk, Platipus, Simon Berry, Armin van Buuren, Tiesto, Goa and psytrance.
- Comparison questions: trance versus techno; trance versus progressive house; psytrance versus the Frankfurt lineage.
- FAQ candidates: What is trance music? Who invented trance music? Who is the king of trance? What is psytrance? Is trance still popular?
- Excluded intents: trance production tutorials, sample packs, meditation music, exhaustive artist rankings, festival ticket searches and a separate psytrance history.

## Proposed decision

- Recommendation: create a new page.
- SEO title: `What Is Trance Music? Origins, Artists and Sound`
- Meta description: `Trance is a build, a breakdown and a drop, born in Frankfurt's clubs. Learn its history, key artists, subgenres and difference from techno.`
- Visible H1: `Trance: the build, the breakdown and the drop`

### Proposed outline

1. Direct answer: define the arrangement, melody, tempo range and listening cue.
2. Where trance came from: distinguish Frankfurt, Berlin and British progressive developments without claiming a single inventor.
3. The mainstream decade: explain Armin van Buuren, Tiesto, radio, polls and festival scale.
4. Styles and subgenres: uplifting, progressive, vocal, hard trance and psytrance, with psytrance's separate Goa lineage made explicit.
5. Trance, house and techno: a compact comparison table that answers the search distinction.
6. Trance today: current continuity without pretending every contemporary fast melodic record is part of one revival.
7. FAQ: only the five validated distinctions above.

## Media and listening plan

| Section | Purpose | Asset or listening example | Placement | Mobile | Verified? |
|---|---|---|---|---|---|
| Origins | Scene identity | Local CC photographs of Sven Vath and Paul van Dyk | After explanatory prose, with text between figure and player | Responsive WebP | Yes, recorded in `media/trance.json` |
| Origins | Hear the early scene builders | Official/broadcaster YouTube sets by Sven Vath and Paul van Dyk | After the related prose and separated from figures | Full-width cyan listening block | Yes, oEmbed checked 26 Sep 2026 |
| Mainstream decade | Identify the two crossover figures | Local CC photographs of Armin van Buuren and Tiesto | Inside each artist passage | Responsive WebP | Yes, recorded in `media/trance.json` |
| Mainstream decade | Hear festival-scale trance | Official/broadcaster sets by Armin van Buuren and Tiesto | After the relevant paragraphs | Full-width cyan listening blocks | Yes, oEmbed checked 26 Sep 2026 |
| Styles | Clarify taxonomy | Subgenre comparison table | After prose | Horizontal scroll only if needed | Ready |
| End matter | Commercial support | Relevant thecatrave Bandcamp releases, clearly described as adjacent rather than trance records | Final support block | Shared full-bleed component | Selection exists; wording needs final approval |

## Internal links

- Link to `/techno-music-guide` from the comparison section.
- Link to `/german-electronic-music` from the Frankfurt and Berlin history.
- Link to `/best-electronic-music-festivals-europe` only where festival scale is discussed.
- Let `relatedArticles('trance-guide.html')` supply Read Next rather than hand-writing cards.

## Material uncertainties

- The first trance record is disputed and must remain explicitly qualified.
- The usable source set for the DJ Dag naming claim is thinner than the sources for the broader Frankfurt history.
- “King of Trance” is a press nickname, not an exclusive formal title.
- Tempo boundaries vary by era and subgenre; they should be presented as useful ranges, not rules.
