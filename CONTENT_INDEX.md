# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/co-op` | `src/data/pages/launch-pages.ts` (`fixed-co-op-split-screen`) | Guide | WheelMates split screen and online co-op | Confirm online co-op, local split screen, and Friend's Pass mechanics | `/patch-notes/`, `/single-player/`, `/co-op-troubleshooting/` | Answer hub | Now mentions the Sep 5, 2026 "Hotfix: Local Co-op Fatal Error", the Sep 7, 2026 "Hotfix: Co-op, Progression, and Performance Improvements" (including the "Press any key" main-menu freeze and cars-continuing-to-move-while-Settings-or-Journal-open fixes), the Sep 9, 2026 "Hotfix: Puzzle Progression and Local Co-op Fixes" local-coop antenna display fix, the second-controller title-screen caveat, the recurring version-matching prerequisite, and Steam Remote Play Together marked community-tested as of 2026-09-14; crossplay marked unannounced as of 2026-09-14. The /co-op-troubleshooting link points at the dedicated setup and troubleshooting reference. |
| `/co-op-troubleshooting` | `src/data/pages/launch-pages.ts` (`fixed-co-op-troubleshooting`) | Guide | WheelMates co-op session setup and troubleshooting | Walk through online co-op setup, Friend's Pass install, invite flow, "Waiting for Player" stall fixes, save-game visual restoration reload step, and the Steam Remote Play Together desync-safe fallback | `/co-op/`, `/patch-notes/`, `/single-player/`, `/community/`, `/system-requirements/` | Answer hub | Dedicated reference (2026-09-14): version-matching prerequisite, Friend's Pass companion app install on the joiner, Steam Friends invite vs lobby-code choice, the seven-step "Waiting for Player" stall troubleshooting order (added Sep 9, 2026 save-game visual restoration reload step), Steam Remote Play Together desync-safe fallback procedure, Friend's Pass vs Steam Family Sharing disambiguation; community-tested Remote Play Together and Friend's Pass vs Family Sharing distinction cited as of 2026-09-14. |
| `/single-player` | `src/data/pages/launch-pages.ts` (`fixed-single-player`) | Guide | WheelMates single player | Confirm solo play works and find the second-controller caveat | `/co-op/`, `/patch-notes/`, `/release/` | Answer hub | Now mentions the Sep 5, 2026 "Hotfix: Local Co-op Fatal Error", the Sep 7, 2026 "Hotfix: Co-op, Progression, and Performance Improvements" "Press any key" main-menu freeze entry, the recurring version-matching prerequisite, and the Aug 21, 2026 Firevolt "Q&A with the Devs" "strictly 2-player co-op, no real solo mode" clarifier; crossplay marked unannounced as of 2026-09-14. |
| `/patch-notes` | `src/data/pages/launch-pages.ts` (`fixed-patch-notes`) | Guide | WheelMates patch notes | Find every launch-week hotfix and what each one fixed | `/co-op/`, `/single-player/`, `/puzzle-walkthrough/`, `/rc-car-gadgets/`, `/steam-deck/` | Answer hub | Now lists Sep 1, 2, 4, 5, 7, and 9, 2026 hotfixes with detailed Sep 2/4 bullet lists, the Sep 5 Local Co-op Fatal Error + version-matching prerequisite, the Sep 7 "Hotfix: Co-op, Progression, and Performance Improvements" covering Backyard performance, Backyard antenna puzzle, Garage button activation, "Press any key" main-menu freeze, cars-continuing-to-move-while-Settings-or-Journal-open, Phase Shifter visual, lightning visual, and backend crash-reporting, and the Sep 9 "Hotfix: Puzzle Progression and Local Co-op Fixes" with Backyard soft-lock close, save-game visual restoration, and local-coop antenna display fix. |
| `/puzzle-walkthrough` | `src/data/pages/launch-pages.ts` (`fixed-puzzle-walkthrough`) | Guide | WheelMates keypad puzzle and launch-week solutions | Find the keypad, hallway chip, neuro-void fragments, FAR BEYOND DRIVEN lever, and Sep 7 + Sep 9 Backyard antenna + Garage button fixes | `/rc-car-gadgets/`, `/achievements/`, `/patch-notes/` | Answer hub | Now mirrors the Sep 7, 2026 Backyard antenna puzzle progression fix and Garage button activation fix, and the Sep 9, 2026 Backyard soft-lock close, onto the walkthrough, with the community-confirmed two-car workaround pattern. |
| `/rc-car-gadgets` | `src/data/pages/launch-pages.ts` (`fixed-rc-car-gadgets`) | Guide | WheelMates gadgets | Find every gadget, what it does, and which hotfix patched its visual | `/puzzle-walkthrough/`, `/achievements/`, `/patch-notes/`, `/steam-deck/` | Answer hub | Now mirrors the Sep 7, 2026 Phase Shifter visual fix and lightning visual fix onto the gadget reference; Phase Shifter diagonal-stick tightening is still pinned to the Sep 4, 2026 hotfix. |
| `/steam-deck` | `src/data/pages/launch-pages.ts` (`fixed-steam-deck`) | Guide | WheelMates Steam Deck | Check Deck playability rating and handheld caveats | `/system-requirements/`, `/release/`, `/controller-support/`, `/patch-notes/`, `/rc-car-gadgets/` | Answer hub | Now mirrors the Sep 7, 2026 Phase Shifter visual fix, the new backend crash-reporting note, and Firevolt's Aug 21, 2026 "Q&A with the Devs" developer-confirmed Steam Deck support sentence onto the handheld reference; Valve Verified / Playable / Unsupported banner still absent as of 2026-09-14. |
| `/reviews` | `src/data/pages/launch-pages.ts` (`fixed-reviews-launch-impressions`) | Guide | WheelMates reviews | Find the launch-week Steam user review band and dated quotes | `/release/`, `/patch-notes/` | Answer hub | Bumped to 356 reviews at 75 percent Mostly Positive as of 2026-09-09 (up from 313 reviews at 76 percent on 2026-09-07), with the Sep 7, 2026 hotfix folded into the recurring-complaints summary. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Co-op, solo, and hotfix coverage: `/co-op`, `/single-player`, `/patch-notes`, `/co-op-troubleshooting`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.
- Co-op and single-player pages cross-link to each other and to /patch-notes for the launch-week hotfix history and the version-matching prerequisite.
- Patch notes page links back to /co-op and /single-player for the user-facing explanation of each fix.
- Co-op and single-player pages link to /co-op-troubleshooting for the step-by-step setup, Friend's Pass install, "Waiting for Player" stall fixes, and the Steam Remote Play Together fallback path.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
- Crossplay with PS5, Xbox Series X|S, and Nintendo Switch is Not announced as of 2026-09-14; the Aug 21, 2026 Firevolt "Q&A with the Devs" first-party statement names the first-half-of-2027 console window but does not name crossplay.
- Crossplay with Xbox One, PlayStation 4, and Nintendo Switch 2 is Not announced as of 2026-09-14; the Aug 21, 2026 first-party Q&A does not list those SKUs.
- Steam Deck Verified / Playable / Unsupported banner is still absent as of 2026-09-14 even though Firevolt's Aug 21, 2026 "Q&A with the Devs" developer-confirms Deck support; Valve assigns the banner, not the developer.
- Steam Remote Play Together support for WheelMates is community-tested as of 2026-09-09; no first-party Firevolt or Steam confirmation of PC-to-PC Remote Play Together yet.
- Public post-launch patch roadmap beyond the Sep 1, 2, 4, 5, 7, and 9, 2026 hotfixes: Not announced as of 2026-09-14.