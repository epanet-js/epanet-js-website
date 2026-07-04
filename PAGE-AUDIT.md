# Page content audit: solutions & who-its-for

**Branch:** `new-website` · **Audited:** July 2026 · **Scope:** the 10 pages under `src/pages/solutions/` and 4 pages under `src/pages/who-its-for/`.

Most of these pages were built before the animated demo library existed, so media slots were filled with blog progress-report footage as placeholders, or left empty. The demo library (`src/components/demos/`) now holds 57 demos plus shared primitives, and **37 demos are unused** outside the `/demos` gallery. This document records the current state of every page and the recommended changes. It is a work list for a later task; nothing here has been applied.

## How to read this document

Media preference order (per CLAUDE.md): **real screen capture > app-styled demo > no media**. A real capture stays when it genuinely shows the feature the section describes. A demo is recommended when the slot is empty, when no real capture of the feature exists, or when the current asset is generic (the same screenshot reused across pages). No media is better than a stretch.

Action tags used below:

- **ADD** — put a demo into a currently empty media slot. The section text already exists; no new copy needed.
- **REPLACE** — swap existing media (or a hand-rolled mockup block) for a better-fitting demo or asset.
- **REWRITE** — copy/policy fix (no layout change).
- **NEW SECTION** — a new `ContentMediaRow` with a demo; new copy required.
- **REBUILD** — stub page rebuilt to the full-page pattern; substantial new copy required.

Demos may be shared across pages (precedent: `LocalFirstDiagram`, which appeared on 4 pages at audit time — now 3 after the humanitarian-ngos swap), but heavy duplication is flagged where it occurs.

## Snapshot

| Page | Status | Real captures | Demos today | Empty slots | Headline action |
|---|---|---|---|---|---|
| solutions/model-build | Complete | 8 | 1 | 0 | ~~ADD ElevationDemo~~ **DONE**; optional swaps remain |
| solutions/fire-flow | Complete | 2 | 2 | 0 | ~~ADD PressureFlowCurveDemo~~ **DONE** |
| solutions/calibration | Complete | 0 | 5 | 0 | ~~Strip captions; ADD 2 demos~~ **DONE** |
| solutions/operational-modeling | Complete | 4 | 1 | 0 | 2 NEW SECTIONs; 1 REPLACE |
| solutions/demand-analysis | Complete | 2 | 3 | 0 | ~~Policy sweep; ADD 2 demos~~ **DONE** |
| solutions/planning | Complete | 1 | 2 | 2 | ~~Policy sweep; ScenarioTreeDemo~~ **DONE** (2 rows text-only by design) |
| solutions/field-planning | Complete | 1 | 4 (incl. custom) | 0 | ~~Policy sweep; ADD 3 demos~~ **DONE** |
| solutions/model-import | Rebuilt | 2 | 3 | 0 | ~~REBUILD~~ **DONE** |
| solutions/water-quality | Rebuilt | 0 | 4 | 0 | ~~REBUILD (4 demos ready)~~ **DONE** |
| solutions/valve-criticality | Rebuilt | 0 | 3 | 0 | ~~REBUILD (demos ready)~~ **DONE** |
| who-its-for/utilities | Complete | 4 | 1 | 0 | Optional swap only |
| who-its-for/consultants | Thinnest | 1 | 2 | 0 | 1 NEW SECTION; strip caption |
| who-its-for/education | Complete | 3 | 0 | 0 | 1 REPLACE (dedupe asset) |
| who-its-for/humanitarian-ngos | Complete | 1 | 3 (+custom) | 0 | ~~ADD + REPLACE~~ **DONE** |

## Cross-cutting policy sweep

CLAUDE.md core policy: the site does not distinguish shipped from in-development features. Everything is written in present tense as available today. The following violations exist and should be removed in one sweep (they are also listed per page):

1. ~~**`comingSoon` badges on PageHero** — `planning.astro`, `demand-analysis.astro`, `field-planning.astro`. Remove the prop and the `comingSoonPrimary`/`comingSoonSecondary` CTA overrides ("Talk to us" as primary); use the standard CTAs.~~ **DONE** (also removed the legacy `comingSoon` prop from PageHero/CardGrid/NavItem and deleted `ComingSoonBadge.astro`)
2. ~~**"Coming soon to epanet-js." in meta descriptions** — same three pages.~~ **DONE**
3. ~~**"Illustrative concept" / "Concept preview — in development" captions** — calibration (3: hero, field-data row, assistant-panel row), demand-analysis (hero), planning ("Lay the plan out across the years"), field-planning (hero), who-its-for/consultants (CalibrationPanel row). Remove all.~~ **DONE**
4. **Future-tense copy:**
   - ~~"This page is a work in progress. We'll add detail… soon." — the three stubs (superseded by the rebuilds below).~~ **DONE** (all three stubs rebuilt)
   - ~~FAQ items framed as unshipped: planning "Is planning available now?"; equivalents on demand-analysis and field-planning.~~ **DONE**
   - ~~FaqList subheadings such as "How staged, long-horizon planning **will** work in epanet-js."~~ **DONE**
   - ~~CardGrid headings "Available now" with subheading "While X is in development, explore what you can do today." (planning, demand-analysis, field-planning) → use the standard "Where to next" pattern.~~ **DONE**
   - ~~CtaSections "Help shape planning" / "Help shape demand analysis" / "Want demand analysis for your network?" / "Tell us about your planning process — it helps shape what we build." → standard present-tense CTAs.~~ **DONE**
5. ~~**Bare `/blog` links** — planning and operational-modeling FAQs link "scenarios request for comments" to `/blog`. The post exists: link `/blog/scenarios-request-for-comments`.~~ **DONE**

Minor, optional polish (not policy):

- Videos site-wide render without a poster frame (`Media` only emits `poster` when passed one; `public/assets/landing/video-poster.webp` exists unused). Consider adding posters, or accept the blank first frame.
- The `/demos` gallery's hand-maintained `usedOn` badges are stale (compare-page usage missing). Gallery-only; low priority.

---

## Solutions pages

### model-build — complete (the reference standard)

**Today:** ~2,250 words, 10 `ContentMediaRow`/prose sections, 9 FAQs, 2 CTAs. Eight sections carry real media (5 videos, 3 images) from the progress reports. No demo components. One text-only row.

**Changes:**

- ~~**ADD** `ElevationDemo` → "Accurate ground levels, anywhere in the world" (currently text-only). The demo shows the prioritized elevation-sources stack, your GeoTIFFs down to global terrain, which is exactly what the row describes. No new text.~~ **DONE**
- **REPLACE (optional)** `/assets/images/epanet-js-app.png` on "Simulate in the browser, read results on the map" → `SimulationRunDemo`. The screenshot is generic and appears on 3 pages; the demo animates exactly this claim (press Simulate, map recolors, legend appears).
- **REPLACE (optional)** `/assets/blog/progress-report/2026-04/2026-04-02-welcome.webp` on "Bring in the GIS you already have" → `GisImportDemo` (shapefile drops in, network appears, import summary). The welcome-screen image is generic and reused on utilities and education.
- Keep all five real workflow videos; they show the actual features.
- **NEW SECTION (optional, bench):** a "work at scale" row using `AssetSearchDemo` / `SelectionBatchEditDemo` / `DataTableDemo`. Only if the page wants to grow; it is already the fullest on the site.

### fire-flow — complete

**Today:** ~1,430 words, 7 FAQs. Real hero video (`fire-flow-poc.mp4`), real screenshot (`fire-flow.png`), `FireFlowDemo` on the export row. One text-only row.

**Changes:**

- ~~**ADD** `PressureFlowCurveDemo` → "Right-click any point for a full capacity curve" (currently text-only). The demo is the capacity curve with available flow read at the residual target — an exact match. No new text.~~ **DONE**
- Nothing else needed. This page is the model for "real capture + one demo" balance.

### calibration — strong prose; visuals need finishing

**Today:** ~1,420 words, 7 FAQs. Every visual is a demo (`CalibrationReviewDemo` hero, a hand-rolled `NetworkMap`+`LegendPanel` divergence block, `CalibrationPanel`), which is correct — no real captures of this feature exist. Three rows are text-only. Three "Illustrative concept" captions.

**Changes:**

- ~~**REWRITE** — remove all three "Illustrative concept" captions (policy).~~ **DONE**
- ~~**ADD** `ZoneFitDemo` → "Break the network into pieces you can actually solve" (text-only). Demo splits the network into colored zones with a fit figure each.~~ **DONE**
- ~~**ADD** `CalibrationScatterDemo` → "Try many combinations, and score each one" (text-only). Demo shows observed-vs-simulated scatter pulling toward the 1:1 line, RMSE dropping 4.8 → 1.2 m.~~ **DONE**
- ~~**REPLACE (either/or)** the hand-rolled divergence block on "Bring in what you measured in the field" → `ObservedOverlayDemo` (observed readings land over the simulated trace, residual gap shaded). The purpose-built demo is stronger, but the custom block is acceptable; keep whichever reads better.~~ **DONE** — swapped to `ObservedOverlayDemo` (owner's call)
- "An assistant that weighs the options" stays text-only; `CalibrationPanel` two rows later already visualizes the assistant.

### operational-modeling — complete; room to grow

**Today:** ~1,260 words, 6 FAQs. Real hero video (`time-control.mp4`), two real screenshots (`2026-02-02-PCV.png`, `01-scenario-hero.png`), one generic screenshot, `ScenarioCompareDemo`. No empty slots. Shutdowns are named in the meta description and intro but have no section of their own; the "everyday questions it answers" ProseSection lists pump/valve questions with no visuals.

**Changes:**

- **REPLACE** `/assets/images/epanet-js-app.png` on "Watch the whole system react" → `EpsPlaybackDemo` (24-hour playback, network extremities shifting at the evening peak). Retires the generic screenshot's second use.
- **NEW SECTION** "Plan shutdowns before the crew rolls" → `ShutdownPlanDemo` (two valves close, isolated main grays out, length/customers-affected fill in, detour draws). ~2 paragraphs of new copy; the "everyday questions" prose is source material. Note: also proposed on valve-criticality — sharing is fine, flag in review.
- **NEW SECTION** on pump scheduling and controls → `PumpScheduleDemo` (pump runs shift out of the peak-tariff band, daily energy cost drops 23%) or `ControlRuleDemo` (rule types out, pump flips on at the trigger). PumpScheduleDemo is the more compelling story. ~2 paragraphs of new copy. `TankOperationsDemo` is the bench alternate.
- ~~**REWRITE** — fix the "scenarios request for comments" link to `/blog/scenarios-request-for-comments`.~~ **DONE**

### demand-analysis — complete-ish; policy sweep + two fills

**Today:** ~1,170 words, 5 FAQs. `comingSoon` badge, captioned `DemandAllocationDemo` hero, real capture on allocation (`cust-import.mp4`) and patterns (`02-patterns.png`). Two text-only rows.

**Changes:**

- ~~**REWRITE** — policy sweep: remove badge + CTA overrides, hero caption "Concept preview — in development", "Coming soon" meta text, "Available now" CardGrid, "Help shape demand analysis" / "Want demand analysis for your network?" CTAs.~~ **DONE**
- ~~**ADD** `DemandScalingDemo` → "Reconcile inflow with consumption, zone by zone" (text-only). Demo shows allocated demand falling short of metered inflow until a scaling factor closes the gap and the balance check turns green — a literal match.~~ **DONE**
- ~~**ADD** `PressureLeakageDemo` → "Let pressure drive leakage" (text-only). Demo steps a PRV setting down and estimated leakage falls with it.~~ **DONE**
- Keep the real captures on the allocation and patterns rows. `DemandCategoriesDemo` and `PatternEditorDemo` are bench alternates for the patterns row.
- **NEW SECTION (optional):** night flow / water balance (`NightFlowDemo` or `WaterBalanceDemo`) if the page should cover NRW estimation explicitly. New copy needed.

### planning — structurally complete, weakest media

**Today:** ~1,150 words, 5 FAQs. `comingSoon` badge. One real video (hero, `topology.mp4`) and one captioned `ScenarioCompareDemo`; 3 of 4 body rows are text-only.

**Changes:**

- ~~**REWRITE** — policy sweep: badge + CTA overrides, "Coming soon" meta, "Concept preview" caption, FAQ "Is planning available now?", FaqList subheading "…will work in epanet-js", "Available now" CardGrid, "Help shape planning" CTA, `/blog` RFC link → `/blog/scenarios-request-for-comments`.~~ **DONE**
- ~~**REPLACE** `ScenarioCompareDemo` on "Lay the plan out across the years" → `ScenarioTreeDemo`. The tree demo shows change-sets per year and a project moving between years — the literal subject. Also relieves `ScenarioCompareDemo`, currently on 4 pages.~~ **DONE** (also dropped the "Concept diagram:" prefix from ScenarioTreeDemo's aria-label)
- ~~**ADD** `ScenarioCompareDemo` → "Move projects between years to find the best plan". Its two-scenario comparison graph matches the row's "compare what each does to performance and cost". Net effect: same demo count, far better fit per row.~~ **DONE**
- "Draw everything once, switch it on when it's needed" — no matching demo exists. **Demo gap:** a future-assets / active-topology toggle demo is the strongest candidate for a new demo component. Hero `topology.mp4` partially covers the idea; leave the row text-only for now.
- "Turn the analysis into a defensible program" stays text-only.

### field-planning — structurally complete, media-thin

**Today:** ~1,110 words, 5 FAQs. `comingSoon` badge. Captioned custom hero (`NetworkMap markers` + `LegendPanel`), one real video (`acoustic-logger.mp4`); 3 of 4 body rows text-only. Three purpose-built demos sit unused.

**Changes:**

- ~~**REWRITE** — policy sweep: badge + CTA overrides, "Coming soon" meta, hero caption, "Available now" CardGrid, "Help shape field planning" CTAs, future-tense FAQ.~~ **DONE**
- ~~**ADD** `LoggerPlacementDemo` → "Optimize placement automatically" (text-only). Demo drops proposed loggers with coverage halos, coverage climbing to 94% — an exact match.~~ **DONE**
- ~~**ADD** `FieldDataImportDemo` → "From plan to data to a calibrated model" (text-only). Demo: logger CSV drops in, sparkline chips appear at each monitoring point.~~ **DONE**
- ~~**ADD** `HydrantTestPlanDemo` → "Measure what the model is least sure about", with one added sentence tying planned hydrant tests to model uncertainty. Alternatively leave text-only; the demo fit is good but not literal.~~ **DONE** — added with the one sentence (owner's call)
- Keep the custom hero (works well once uncaptioned) and the acoustic-logger video.

### model-import — ~~stub → REBUILD~~ **DONE** (rebuilt July 2026)

**Today:** ~80 words of real prose. Hero with real capture (`2026-03-00-projection.png`), one ProseSection ("This page is a work in progress"), one CTA. No FAQs, no BenefitGrid, no related links.

~~**Rebuild to the full-page pattern** (hero, intro prose, ~4 rows, BenefitGrid, light CTA, "Where to next" CardGrid, 5–7 FAQs, dark CTA). ~1,100–1,400 words of new copy.~~ **DONE** — built with the hero capture kept, the `.ejsdb` capture, `InpCompatReportDemo`, `ProjectionFinderDemo`, a migration text row linking the three compare pages, and `ResultsExportDemo`. Original outline:

1. **Hero** — keep `2026-03-00-projection.png` (real capture of the projection finder placing an imported model).
2. **"Open any EPANET .inp"** — .inp fully supported on the EPANET 2.3 engine; the native `.ejsdb` project file stores what .inp can't (customer points, zones). Real capture available: `/assets/blog/progress-report/2026-05/2026-05-02-file-format.webp` (the .ejsdb graphic from the May 2026 report).
3. **"An import report you can trust"** — **ADD** `InpCompatReportDemo` (counts per section, items flagged for review). Shared with two compare pages; acceptable.
4. **"Put an inherited model on the map in seconds"** — projection finder. If the real capture stays in the hero, use `ProjectionFinderDemo` here; otherwise move the capture down and skip the demo.
5. **"Coming from InfoWater, WaterCAD, or InfoWorks"** — text row: every major platform exports .inp; link the three `/compare/*` pages. No media needed.
6. **"Data out, not just data in"** — **ADD** `ResultsExportDemo` (GeoJSON, CSV, XLSX check off). The no-lock-in half of the pitch.

FAQ topics: supported formats (.inp, .ejsdb), GIS import vs model import (link `/solutions/model-build`), EPANET 2.3 compatibility, migrating from proprietary formats via .inp export, whether the model stays local. Copy sources: Feb 2026 (EPANET 2.3), Mar 2026 (projection finder), May 2026 (.ejsdb) progress reports and the compare pages' interchange copy.

### water-quality — ~~stub → REBUILD (richest unused-demo coverage)~~ **DONE** (rebuilt July 2026)

**Today:** ~70 words, zero media. Hero (no media), one ProseSection ("This page is a work in progress"), one CTA. Four purpose-built demos sit unused: `WaterAgeDemo`, `SourceTraceDemo`, `ChlorineBoosterDemo`, `FlushingPlanDemo`.

~~**Rebuild to the full-page pattern.** ~1,100–1,400 words of new copy.~~ **DONE** — built per the outline below (all four demos placed; MSX/constituents text row included). Original outline:

1. **Hero** — `WaterAgeDemo` (age spreading band by band from the source; the most visual of the four).
2. **"Trace where the water comes from"** — `SourceTraceDemo` (water from two treatment works meets mid-network, blend share shifting through the day).
3. **"Keep chlorine residual above target"** — `ChlorineBoosterDemo` (residual decays until a booster lifts the tail back above the 0.2 mg/l minimum).
4. **"Plan flushing that clears the main"** — `FlushingPlanDemo` (unidirectional flushing sequence, each main hitting its velocity target).
5. **Text row on constituents and MSX** — multi-species reactions; the existing stub copy already has this real detail, expand it.

Plus BenefitGrid, 5–7 FAQs (water age vs source trace vs chemical analysis, MSX, why EPS matters for quality runs, exporting results), "Where to next" CardGrid, both CTAs.

### valve-criticality — ~~stub → REBUILD~~ **DONE** (rebuilt July 2026)

**Today:** ~70 words, zero media. Hero (no media), one ProseSection ("This page is a work in progress"), one CTA. `ValveCriticalityDemo` exists unused.

~~**Rebuild to the full-page pattern.** ~1,000–1,300 words of new copy.~~ **DONE** — built per the outline below (`ValveCriticalityDemo` hero, `TraceDemo`, customers text row, `ShutdownPlanDemo` shared with the proposed operational-modeling section). Original outline:

1. **Hero** — `ValveCriticalityDemo` (closing valve V-114 grays out the segment it isolates and reports customers affected).
2. **"Find the segment each valve isolates"** — `TraceDemo` (boundary trace spreading to the closed valves that bound the zone).
3. **"See who's affected before you close anything"** — text row on customer counts and outsized-risk valves (extends the existing stub copy).
4. **"From criticality to shutdown planning"** — `ShutdownPlanDemo` (shared with the proposed operational-modeling section; acceptable, flag in review) + cross-link `/solutions/operational-modeling`.

Plus BenefitGrid, FAQs, "Where to next" CardGrid, both CTAs.

---

## Who-its-for pages

### utilities — complete, most media-rich

**Today:** ~1,040 words, 6 FAQs. Real hero screenshot, every row filled: `Complex.webp`, `time-control.mp4`, `DeploymentOptionsDiagram`, `welcome.webp`.

**Changes:**

- None required.
- **REPLACE (optional)** `welcome.webp` on "Built on EPANET, open and affordable" → `LicenseTimelineDemo`. The copy literally describes the FSL → MIT timeline the demo animates, and it dedupes an asset used on three pages. (Also proposed on humanitarian-ngos; decide which page gets it, or share.)

### consultants — thinnest of the four; expand

**Today:** ~870 words (shortest page), 5 FAQs, no hero media, only 3 body rows. One real capture (`model-build-quick.mp4`); the other two visuals are demos (`CalibrationPanel` with an "Illustrative concept" caption, `LocalFirstDiagram`).

**Changes:**

- ~~**REWRITE** — remove the "Illustrative concept" caption.~~ **DONE**
- **NEW SECTION** "Deliver in the format the client requires" → `ResultsExportDemo`. Data in and data out is the core consultant pitch (per CLAUDE.md comparison posture: epanet-js plus the incumbent is the best of both worlds). ~2 paragraphs of new copy; add one FAQ on working alongside InfoWater/WaterCAD, linking the `/compare/*` pages.
- Hero stays media-free (policy prefers no media over a stretch; the page reads fine).
- **Bench (optional):** `ProfilePlotDemo` or `TimeSeriesPlotDemo` for a client-deliverables row if the page should grow further.

### education — prose complete; media polish only

**Today:** ~1,080 words (longest prose of the four), 6 FAQs, no demos. Three real assets, but two (`welcome.webp`, `epanet-js-app.png`) are reused from utilities. Hero and the "school email" row have no media, which is fine.

**Changes:**

- **REPLACE** `welcome.webp` on "Spend class time teaching, not troubleshooting" → `BrowserAppDemo` (URL types out, app loads, no-install / no-login / runs-on-your-device chips — the exact zero-install claim). Dedupes the asset.
- Keep `ctrl-draw.mp4` and keep `epanet-js-app.png` on "The same engine they'll use at work" (a real screenshot fits that claim).

### humanitarian-ngos — prose complete; two media improvements

**Today:** ~1,075 words, 6 FAQs. One real capture (`study-area.webp`), a custom `NetworkMap`+`LegendPanel` pressure block, `LocalFirstDiagram` (its 4th use site-wide). One text-only row.

**Changes:**

- ~~**ADD** `SustainableOpenSourceDemo` → "Professional modeling without the price tag" (text-only). The demo shows the cycle — people use the app free, some pay for advanced features, developers reinvest — which is why capable tools stay affordable here.~~ **DONE**
- ~~**REPLACE** `LocalFirstDiagram` on "Open, local-first, and free of lock-in" → `LicenseTimelineDemo`. The row's copy states "public source → fully open after 2 years," the demo's exact content, and it relieves the most-reused diagram on the site.~~ **DONE** (LocalFirstDiagram now on 3 pages)
- Keep `study-area.webp` and the custom pressure block.

---

## Suggested order of work

1. ~~**Policy sweep** (mechanical, no new copy): planning, demand-analysis, field-planning, calibration, consultants — badges, captions, future-tense copy, CTA overrides, `/blog` RFC links. Small diffs, fixes tone site-wide.~~ **DONE**
2. ~~**Stub rebuilds** (the big lift, most new copy): water-quality, valve-criticality, model-import. Demos are ready for all three; water-quality is the easiest win (four purpose-built demos, outline above).~~ **DONE**
3. ~~**Demo fills** (no new copy — drop demos into existing text-only rows): fire-flow, calibration, field-planning, demand-analysis, planning, model-build, humanitarian-ngos.~~ **DONE** (July 2026; calibration's either/or went to ObservedOverlayDemo, field-planning got HydrantTestPlanDemo with the one added sentence)
4. **New sections and swaps** (new copy or judgment calls): operational-modeling's shutdown and pump-scheduling sections, consultants' deliverables section, then the optional generic-screenshot replacements (model-build, education, utilities).

## Demo bench and gaps

Demos still unused after everything above, with optional homes:

| Demo | Optional home |
|---|---|
| `AssetSearchDemo` | model-build "work at scale" row (optional new section) |
| `SelectionBatchEditDemo` | same |
| `DataTableDemo` | same, or a future reporting page |
| `NetworkReviewDemo` | alternate for model-build's Network Review row (real video currently there is better) |
| `CustomerPointsDemo` | alternate for model-build / demand-analysis allocation rows (real video better) |
| `NightFlowDemo` | demand-analysis optional NRW section |
| `WaterBalanceDemo` | same |
| `DemandCategoriesDemo` | alternate for demand-analysis patterns row |
| `PatternEditorDemo` | same |
| `TankOperationsDemo` | alternate for operational-modeling pump section |
| `ControlRuleDemo` | operational-modeling pump section (if `PumpScheduleDemo` not chosen) |
| `PumpCurveDemo` | operational-modeling or education coursework contexts |
| `TimeSeriesPlotDemo` | consultants deliverables row (optional) |
| `ProfilePlotDemo` | consultants or planning deliverables (optional) |
| ~~`ProjectionFinderDemo`~~ | ~~model-import row 4 (if the real capture stays in the hero)~~ **DONE** — used on model-import |

`GisImportDemo`, `NetworkDrawDemo`, `SimulationRunDemo`, `BrowserAppDemo`, `InpCompatReportDemo`, `ResultsExportDemo` currently live only on `/compare/*` pages; the recommendations above give several of them second homes.

**Demo gaps** (features with no matching demo; candidates for new components):

- A future-assets / active-topology toggle for planning's "Draw everything once, switch it on when it's needed" row — the one high-value row nothing in the library covers.
- Nothing depicts a report-style deliverable for planning's "defensible program" row; low priority, text-only is fine.
