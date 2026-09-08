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
| `/co-op` | `src/data/pages/launch-pages.ts` (`fixed-co-op-split-screen`) | Guide | WheelMates split screen and online co-op | Confirm online co-op, local split screen, and Friend's Pass mechanics | `/patch-notes/`, `/single-player/` | Answer hub | Now mentions the Sep 5, 2026 "Hotfix: Local Co-op Fatal Error" and the recurring version-matching prerequisite; crossplay marked unannounced as of 2026-09-07. |
| `/single-player` | `src/data/pages/launch-pages.ts` (`fixed-single-player`) | Guide | WheelMates single player | Confirm solo play works and find the second-controller caveat | `/co-op/`, `/patch-notes/` | Answer hub | Now mentions the Sep 5, 2026 "Hotfix: Local Co-op Fatal Error" and the recurring version-matching prerequisite; crossplay marked unannounced as of 2026-09-07. |
| `/patch-notes` | `src/data/pages/launch-pages.ts` (`fixed-patch-notes`) | Guide | WheelMates patch notes | Find every launch-week hotfix and what each one fixed | `/co-op/`, `/single-player/` | Answer hub | Now lists Sep 1, 2, 4, and 5, 2026 hotfixes with detailed Sep 2/4 bullet lists and the Sep 5 Local Co-op Fatal Error + version-matching prerequisite. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Co-op, solo, and hotfix coverage: `/co-op`, `/single-player`, `/patch-notes`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.
- Co-op and single-player pages cross-link to each other and to /patch-notes for the launch-week hotfix history and the version-matching prerequisite.
- Patch notes page links back to /co-op and /single-player for the user-facing explanation of each fix.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
- Crossplay with PS5, Xbox, Switch, and Switch 2 is Not announced as of 2026-09-07; revisit the section when Firevolt announces a console build.
- Public post-launch patch roadmap beyond the Sep 1-5, 2026 hotfixes: Not announced as of 2026-09-07.