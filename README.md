# WheelMates Guide (wheelmates.pro)

Unofficial fan reference hub for **WheelMates** (Firevolt, Steam AppID 3905450).
Built from the shared V3 game-guide template; do not edit layout shells or
removable modules — only the approved SEO content, theme tokens, and assets.

## Stable Rendering Contract

Pages select one of four shells through their `presentation.shell` value:

- Home: the primary landing-page composition.
- Hub: a browsable collection or guide index.
- Content: a reading or reference page, with optional right rail.
- Workspace: a full-width layout boundary for a specialized feature.

The shell components live in `src/components/pages/`. Workspace does not provide
map, calculator, planner, or other tool logic; add that behavior as separate
feature code and render it inside the Workspace boundary.

`src/components/content/ModuleRenderer.tsx` supports nine guide module types:

- `prose`
- `entity-grid`
- `data-table`
- `steps`
- `recipes`
- `schedule`
- `comparison`
- `media-gallery`
- `callout`

## V3 Locale and Entity Contract

- Configure `primaryLocale` and `locales` in `src/data/site.ts`. The primary locale
  uses the root path; every additional locale uses one unique path prefix.
- Every `PageContent` record declares `translationKey`, `locale`, `routeKind`,
  `slug`, and the final `url`. Pages sharing a `translationKey` become hreflang
  alternates. Add locale-specific Header/Footer labels in `src/data/navigation.ts`.
- Add approved entity families to `src/data/entities.ts`. One base record set can
  serve multiple locales through family-level locale copy and optional localized
  record display overrides.
- Entity route patterns may contain `{locale}` and must contain `{slug}`. The
  template generates a generic Hub and detail page for each declared locale,
  including source links, relationships, and optional registered local images.
- Run `npm run routes:manifest` for a human-readable JSON route list, or
  `npm run routes:manifest -- --output route-manifest.json` for a machine-readable
  file that Builder and Verifier can compare with the Site Plan.

## Setup and Verification

```bash
npm install
npm run indexnow:setup
npm run validate:template
npm run routes:manifest
npm run verify
npm run dev
```

## Growth Handoff Files

- `AGENTS.md`: generated-site operating rules for future content updates.
- `CONTENT_INDEX.md`: URL inventory, search intent map, and internal-link map.
- `GROWTH_LOG.md`: chronological record for growth-relevant changes.

The one-click builder must update these files when it configures a real game
site. `site-growth` uses them after launch.

## Environment and Deployment

- `NEXT_PUBLIC_SITE_URL`: canonical site origin, such as `https://wheelmates.pro`.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 measurement ID. If empty, no
  Google tag is rendered.
- `NEXT_PUBLIC_BING_SITE_AUTH_CODE`: Bing Webmaster Tools verification code.
  `bing-sitemap-submitter` fills it during launch; it is public and is not the API key.

`npm run indexnow:setup` generates one site-specific `public/indexnow-*.txt`
verification file. The generated site commits and keeps that public file. Initial
launch uses the script's `--from-sitemap` mode because every URL is new; later
content updates pass only the URLs changed by that update with repeated `--url`
arguments. Submission prints one line, and a remote IndexNow rejection does not
block an otherwise valid publish.

The production template uses Next.js static export and Cloudflare Workers Static
Assets. `next.config.ts` emits the deployable site to `out/`; `wrangler.jsonc`
points directly at that directory and intentionally has no Worker `main` script.
`public/_headers` preserves the security response headers at the static asset
layer. The template has no OpenNext production dependency; the retained
`open-next.config.ts` compatibility stub is inert and must not be used by Builder.
The one-click builder should replace the Wrangler project name, configure
build environment variables, connect the generated GitHub repository to
Cloudflare Builds, bind the exact authorized domain, verify that a push updates
the live site, and then verify GA4, GSC, Bing Webmaster sitemap submission, and
the initial IndexNow notification.
