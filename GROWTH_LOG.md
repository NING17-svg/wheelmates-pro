# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-18 - 21-trophy full roster, completion percentages, and launch-week known-issue footnote

- Task: Replace the placeholder 'see the Steam store achievements tab' framing on /achievements with a complete 21-trophy roster grouped by bucket (story chapter completion, gadget unlock, completionist collectibles, discovery / activity), each with its public Steam stats-page completion percentage, the unlock description, and an internal link to the site page that already owns the underlying mechanic. Add a short launch-week known-issue footnote for the three trophies that already refuse to unlock automatically (Seek & Scan, Hallway Chip single-session reset, co-op trophies requiring a clean host end). Bump lastReviewed to 2026-09-18.
- Files changed: `src/data/pages/launch-pages.ts` (`fixed-achievements`), `CONTENT_INDEX.md`.
- URLs affected: `/achievements`. `lastReviewed` bumped to 2026-09-18.
- SEO/GEO changed: /achievements now enumerates all 21 trophies grouped into four buckets with live completion percentages from the Steam public stats page for AppID 3905450 (checked 2026-09-18), per-trophy links to the existing /puzzle-walkthrough, /rc-car-gadgets, and /single-player pages, a launch-week known-issue footnote covering the three trophies that refuse to unlock automatically, and cross-links to /co-op, /co-op-troubleshooting, /system-requirements, and /patch-notes. The Steam public achievements stats page (https://steamcommunity.com/stats/3905450/achievements) is added to the Sources module alongside the existing Steam store, Steam Community hub, and SteamDB references.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 18 primary-locale routes.

### 2026-09-17 - Switch 2 confirmation + new-content-for-finished-players pillar

- Task: Refresh the /release platform table to replace the Nintendo Switch 2 'Not announced' row with a 'First half of 2027 (Firevolt "What's Next for Wheelmates" Steam Community post, Sep 2026)' row citing the Steam Community hub news feed; mirror the same Switch 2 row plus the new-content-for-finished-players pillar into the /wiki facts table and a short forward-look paragraph; restate the /co-op and /co-op-troubleshooting crossplay wording to reflect the new console preparation list (PS5 / Xbox Series X|S / Switch 2) and note that PC-to-console crossplay is still not announced as of 2026-09-17; update the /faq 'Is there a console version?' answer to cite both the Aug 21, 2026 "Q&A with the Devs" and the new "What's Next for Wheelmates" post, and add a forward-look Q&A on the new-content-for-finished-players pillar with details 'kept under wraps by the WheelMates Team' as of 2026-09-17. Bump lastReviewed to 2026-09-17 on every touched page.
- Files changed: `src/data/pages/launch-pages.ts` (`fixed-release-platforms`, `fixed-co-op-split-screen`, `fixed-co-op-troubleshooting`), `src/data/pages/site-pages.ts` (`wiki`, `faq`), `CONTENT_INDEX.md`.
- URLs affected: `/release`, `/wiki`, `/co-op`, `/co-op-troubleshooting`, `/faq`. `lastReviewed` bumped to 2026-09-17 on each.
- SEO/GEO changed: /release platform table now lists Nintendo Switch 2 as 'First half of 2027 (Firevolt "What's Next for Wheelmates" Steam Community post, Sep 2026)' instead of 'Not announced as of 2026-09-14', and the Xbox One row no longer stands in for the missing Switch 2 row; /release quick answer and forward-look paragraph cite both the Aug 21, 2026 Q&A and the new "What's Next" Steam Community post; /wiki facts table now includes a Nintendo Switch 2 row, a new-content-for-finished-players row, and a first-party-source row that adds the Sep 2026 "What's Next" post, with a new forward-look module on the post-launch pillar; /co-op and /co-op-troubleshooting now frame crossplay as 'PS5, Xbox Series X|S, and Nintendo Switch 2 confirmed for first half of 2027; crossplay with PC not announced as of 2026-09-17' instead of the prior 'Not announced' stance; /faq 'Is there a console version?' answer cites both the Aug 21, 2026 Q&A and the Sep 2026 "What's Next" post, and a new 'Is more content planned after the story?' Q&A is added.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 18 primary-locale routes.

### 2026-09-14 - Console release window + Steam Deck developer confirmation

- Task: Revise /release to replace the 'Not announced' rows for PS5, Xbox Series X|S, and Nintendo Switch with the first-party 'First half of 2027 (Firevolt "Q&A with the Devs" Steam Community post on August 21, 2026)' line; keep Xbox One, Nintendo Switch 2, and PlayStation 4 as Not announced as of 2026-09-14. Update /faq 'Is there a console version?' to the same Aug 21, 2026 answer. Add the Firevolt developer-confirmed Steam Deck support sentence to /steam-deck and /system-requirements while keeping the Valve Verified / Playable / Unsupported banner stance honest (banner still absent as of 2026-09-14). Add a 'strictly 2-player co-op, no real solo mode' clarifier to /single-player. Extend /wiki facts table with the Aug 21, 2026 Q&A as a new first-party source. Do not invent exact console dates, pricing, or crossplay answers.
- Files changed: `src/data/pages/launch-pages.ts` (`fixed-release-platforms`, `fixed-system-requirements`, `fixed-steam-deck`, `fixed-single-player`), `src/data/pages/site-pages.ts` (`wiki`, `faq`), `CONTENT_INDEX.md`.
- URLs affected: `/release`, `/faq`, `/steam-deck`, `/system-requirements`, `/single-player`, `/wiki`. `lastReviewed` bumped to 2026-09-14 on each.
- SEO/GEO changed: The /release platform table now lists PS5, Xbox Series X|S, and Nintendo Switch as "First half of 2027 (Firevolt Q&A Aug 21, 2026 Steam Community)" instead of "Not announced as of 2026-09-05"; the /faq 'Is there a console version?' answer mirrors the same Aug 21, 2026 first-party statement; the /steam-deck and /system-requirements pages add the developer-confirmed Steam Deck support sentence while keeping the Valve banner stance honest; the /single-player page now anchors the Aug 21, 2026 'strictly 2-player co-op, no real solo mode' clarifier alongside the existing solo-friendly path; the /wiki facts table adds three rows (PS5/Xbox Series X|S/Nintendo Switch, Steam Deck, first-party source) and bumps the table date label to 2026-09-14.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 18 primary-locale routes.

### 2026-09-14 - Sep 9 launch-week puzzle progression and save-visual hotfix mirrored

- Task: Add the Sep 9, 2026 'Hotfix: Puzzle Progression and Local Co-op Fixes' Steam Community post to /patch-notes as a new launch-week hotfix entry above the existing Sep 7 entry, with the three bullets (Backyard soft-lock close, save-game visual restoration, local-coop antenna display fix) and a bumped lastReviewed date. Mirror the Backyard antenna + Garage hotfix citations onto /puzzle-walkthrough alongside the existing Sep 4 / Sep 7 citations. Add the local-coop antenna display fix to /co-op's local-coop caveats list. Add the save-visual reload step as step 7 to /co-op-troubleshooting's six-step troubleshooting order. Re-use the same data-driven structure the Sep 7 mirror established on 2026-09-09.
- Files changed: `src/data/pages/launch-pages.ts` (`fixed-patch-notes`, `fixed-puzzle-walkthrough`, `fixed-co-op-split-screen`, `fixed-co-op-troubleshooting`), `CONTENT_INDEX.md`.
- URLs affected: `/patch-notes`, `/puzzle-walkthrough`, `/co-op`, `/co-op-troubleshooting`. `lastReviewed` bumped to 2026-09-14 on each.
- SEO/GEO changed: The /patch-notes quick answer, "Latest WheelMates patch notes" section, FAQ block, sources, internal-link responsibilities, and fact-boundaries now anchor the Sep 9, 2026 entry above the Sep 7 entry; the /puzzle-walkthrough Backyard antenna puzzle section cites the Sep 9 Backyard soft-lock close alongside the Sep 4 / Sep 7 citations; the /co-op cars-continuing-to-move section adds the Sep 9 local-coop antenna display fix; the /co-op-troubleshooting "Waiting for Player" stall troubleshooting order is now seven steps (the new save-game visual restoration reload step cites the Sep 9 entry). All fact-boundary dates are pinned to 2026-09-14.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 18 primary-locale routes.

### 2026-09-10 - Co-op session setup and troubleshooting reference added

- Task: Add a dedicated launch-week online co-op session setup and troubleshooting reference at /co-op-troubleshooting. The page lifts the version-matching prerequisite, the Friend's Pass companion app install on the joiner, the Steam Friends invite vs lobby-code choice, the six-step "Waiting for Player" stall troubleshooting order, the Steam Remote Play Together desync-safe fallback procedure, and the Friend's Pass vs Steam Family Sharing disambiguation out of the conceptual /co-op FAQ shape and into a single step-by-step reference that launch-week co-op players can follow without bouncing between Steam Community threads. Sources cited: Steam store page (AppID 3905450), Steam Community hub, the pinned "HOW TO INVITE A FRIEND WITH FRIEND'S PASS" Steam Community guide, the pinned LAUNCH FAQ, the Sep 5 / Sep 7, 2026 hotfix posts, the worldeka launch-day Friend's Pass troubleshooting checklist, and the togame.io "WheelMates Online Desync Split-Screen Workaround" article.
- Files changed: `src/data/pages/launch-pages.ts` (new `fixed-co-op-troubleshooting` entry), `CONTENT_INDEX.md`.
- URLs affected: `/co-op-troubleshooting` added. Internal-link responsibilities on `/co-op` and `/patch-notes` now reference `/co-op-troubleshooting`; `/single-player` continues to reference `/co-op/` and `/patch-notes/`. No existing URL changed; route manifest grows by one fixed route.
- SEO/GEO changed: Quick answer, FAQ blocks, sources, internal-link requirements, and fact-boundaries now anchor a dedicated reference for the version-matching prerequisite, the Friend's Pass companion app install, the Steam Friends invite vs lobby-code choice, the "Waiting for Player" stall troubleshooting order, the Steam Remote Play Together desync-safe fallback, and the Friend's Pass vs Family Sharing distinction; Steam Remote Play Together and Family Sharing stance both pinned to 2026-09-10.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should now produce 18 primary-locale routes (one more than the previous 17).

### 2026-09-09 - Co-op and single-player clarity + Sep 7 launch-week hotfix rollout

- Task: Refresh /co-op and /single-player to mention the new Sep 7, 2026 "Hotfix: Co-op, Progression, and Performance Improvements" Steam Community post, including the "Press any key" main-menu freeze when returning from local co-op, the cars-continuing-to-move-while-Settings-or-Journal-open local-coop regression, the second-controller title-screen caveat with the Sep 1, 2026 hotfix citation, the recurring version-matching prerequisite, and the open Steam Remote Play Together question. Add the full Sep 7, 2026 hotfix entry to /patch-notes (Backyard performance and environment fixes, Backyard antenna puzzle progression fix, Garage button activation fix, "Press any key" main-menu freeze, cars-continuing-to-move-while-Settings-or-Journal-open regression, Phase Shifter visual fix, lightning visual fix, and backend crash-reporting addition). Mirror the Backyard antenna puzzle + Garage button activation fixes onto /puzzle-walkthrough, the Phase Shifter visual + lightning visual fixes onto /rc-car-gadgets and /steam-deck, and bump the /reviews page count to 356 at 75 percent Mostly Positive.
- Files changed: `src/data/pages/launch-pages.ts` (six `fixed-*` page entries: `fixed-co-op-split-screen`, `fixed-single-player`, `fixed-patch-notes`, `fixed-puzzle-walkthrough`, `fixed-rc-car-gadgets`, `fixed-steam-deck`, `fixed-reviews-launch-impressions`), `CONTENT_INDEX.md`.
- URLs affected: `/co-op`, `/single-player`, `/patch-notes`, `/puzzle-walkthrough`, `/rc-car-gadgets`, `/steam-deck`, `/reviews`. `lastReviewed` bumped to 2026-09-09 on each.
- SEO/GEO changed: Quick answers, FAQ blocks, sources, internal-link requirements, and fact-boundaries now restate the version-matching prerequisite on both the Sep 5 and Sep 7 posts and pin the crossplay stance to 2026-09-09. The Recent Updates card on the home page is data-driven by `lastReviewed`, so the Sep 7 hotfix surfaces through `/patch-notes`, `/co-op`, and `/single-player` without a separate edit.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 17 primary-locale routes.

### 2026-09-07 - Co-op and single-player clarity + launch-week patch notes (Sep 5)

- Task: Update /co-op and /single-player pages to mention the new Sep 5, 2026 "Hotfix: Local Co-op Fatal Error", the recurring version-matching prerequisite, and mark crossplay with PS5 / Xbox / Switch / Switch 2 as unannounced as of 2026-09-07. Update /patch-notes to add the Sep 5, 2026 hotfix and absorb the more detailed Sep 2 / Sep 4 fix lists (Intel AI Boost startup crash, host AFK Play-button disappearance, Shed/Backyard three-antenna puzzle, red cooperative lever disappearing, NeuroVoids collision, Rope Swing not appearing for joiner, DualSense/DualShock 4 repeated D-pad inputs, audio issues, steep-slope vehicle behavior, Game of Tag 40-second timer cap, scannable-object achievement).
- Files changed: `src/data/pages/launch-pages.ts` (three `fixed-*` page entries: `fixed-co-op-split-screen`, `fixed-single-player`, `fixed-patch-notes`), `CONTENT_INDEX.md`.
- URLs affected: `/co-op`, `/single-player`, `/patch-notes`. `lastReviewed` bumped to 2026-09-07 on each.
- SEO/GEO changed: Quick answers, FAQ blocks, sources, internal-link requirements, and fact-boundaries now restate the version-matching prerequisite and pin the crossplay stance to 2026-09-07. /patch-notes now mirrors the per-hotfix bullet lists published on the Steam Community hub news tab, not just the high-level summaries.
- Verification: `npm run verify` (typecheck + lint + template/content/indexnow/build/rendered-seo validators) must succeed before pushing the target commit; `npm run routes:manifest` should still produce the same 17 primary-locale routes.

### 2026-09-05 - Adsterra integration activated

- Task: Replace empty placeholder values in `src/data/ads.ts` with real Adsterra Native Banner, Banner 728x90 / 468x60 / 320x50 / 160x600, and Smartlink codes produced by `adsterra-integrator`.
- Files changed: `src/data/ads.ts`.
- URLs affected: None — ad components and positions were predefined by the one-click builder; this entry only fills the existing ad slots.
- SEO/GEO changed: No surface-level change; search and discoverability unchanged. Real ad codes are now wired into the existing Adsterra-ready modules.
- Verification: `npm run verify` must succeed before pushing the target commit; adsterra-integrator validator reconciles registry, target `ads.ts`, private config/codes, and target domain.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-04` / Worker `onimushawayofthesword-pro`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
