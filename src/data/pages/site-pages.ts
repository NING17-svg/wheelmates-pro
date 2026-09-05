import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Verified Launch Facts`,
    metaDescription:
      `${site.gameName} wiki: verified launch facts from the official Steam store page (AppID 3905450), the Firevolt landing hub, and the Steam Community hub dated 2026-09-05.`,
    summary:
      "Verified launch-week facts hub for WheelMates: developer, publisher, release date, features, supported languages, and supported regions.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Verified launch facts and platform details from the official WheelMates channels.",
      ctas: [
        { label: "Guides", href: "/guides" },
        { label: "Release Info", href: "/release" },
      ],
    },
    quickAnswer:
      `${site.gameName} is the 2-player co-op RC car driving adventure developed and published by Firevolt, released on Steam (AppID 3905450) on September 1, 2026.`,
    keyFacts: [
      { label: "Developer / publisher", value: "Firevolt" },
      { label: "Steam AppID", value: "3905450" },
      { label: "Release date", value: "September 1, 2026" },
      { label: "Confirmed platform", value: "Windows 10/11 64-bit" },
    ],
    modules: [
      {
        id: "overview",
        type: "prose",
        heading: "Overview",
        body:
          "WheelMates is a 2-player co-op RC car driving adventure set in a missing professor's maze-like home laboratory. Players steer two tiny RC cars through oversized obstacles, solve puzzles, and use gadgets like magnetic wheels, magnet grabs, rope swings, the Phase Shifter, the Paintgun, and the Magnetic Grabber.",
      },
      {
        id: "facts",
        type: "data-table",
        heading: "Verified launch facts",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (2026-09-05)" },
        ],
        rows: [
          { field: "Developer", value: "Firevolt" },
          { field: "Publisher", value: "Firevolt" },
          { field: "Steam AppID", value: "3905450" },
          { field: "Release date", value: "September 1, 2026" },
          { field: "Confirmed platform", value: "Windows 10/11 64-bit (PC)" },
          { field: "Players", value: "2-player co-op + single-player" },
          { field: "Steam Achievements", value: "21" },
          { field: "Supported languages", value: "14 interface + subtitle" },
        ],
      },
      {
        id: "wiki-links",
        type: "prose",
        heading: "Cross-references",
        body:
          "Release and platform status lives on /release/, PC hardware requirements on /system-requirements/, and co-op / split screen details on /co-op/.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["guides", "fixed-release-platforms", "fixed-system-requirements"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Walkthroughs and Reference Pages`,
    metaDescription:
      `${site.gameName} guides: puzzle walkthroughs, RC car gadgets, achievements, controller notes, and co-op references for the Firevolt 2-player RC car driving adventure.`,
    summary:
      "Browse ${site.gameName} guides for puzzle help, RC car gadgets, co-op references, and community channels.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Launch-window reference and walkthrough hub for WheelMates, organized by search intent.",
      ctas: [
        { label: "Puzzle Walkthrough", href: "/puzzle-walkthrough" },
        { label: "RC Car Gadgets", href: "/rc-car-gadgets" },
      ],
    },
    quickAnswer:
      "Use the guides hub to jump into puzzle walkthroughs, RC car gadget references, achievement tips, controller notes, and the launch FAQ for WheelMates.",
    keyFacts: [
      { label: "Scope", value: "Launch-window reference and walkthrough pages" },
      { label: "Source tier", value: "Official Steam store + Firevolt channels" },
      { label: "Update cadence", value: "Update when hotfix or patch changes a guide" },
    ],
    modules: [
      {
        id: "guide-puzzle-walkthrough",
        type: "entity-grid",
        heading: "Walkthroughs and how-tos",
        items: [
          { title: "Puzzle Walkthrough", summary: "Keypad, hallway chip, neuro-void fragments and launch-week puzzle help.", href: "/puzzle-walkthrough" },
          { title: "RC Car Gadgets", summary: "Magnetic wheels, magnet grabs, rope swings, Phase Shifter, Paintgun, Magnetic Grabber.", href: "/rc-car-gadgets" },
          { title: "Achievements", summary: "21 Steam Achievements and unlock tips.", href: "/achievements" },
        ],
      },
      {
        id: "guide-reference",
        type: "entity-grid",
        heading: "Reference and compatibility",
        items: [
          { title: "Co-op & Split Screen", summary: "Online co-op, local split screen, and Friend's Pass.", href: "/co-op" },
          { title: "Controller Support", summary: "DualSense and DualShock 4 caveats.", href: "/controller-support" },
          { title: "Steam Deck", summary: "Steam Deck playability status.", href: "/steam-deck" },
          { title: "Single Player", summary: "Solo play eligibility with Friend's Pass.", href: "/single-player" },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-puzzle-walkthrough", "fixed-rc-car-gadgets", "fixed-achievements", "fixed-co-op-split-screen"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Launch Questions`,
    metaDescription:
      `${site.gameName} FAQ: release date, co-op modes, supported languages, system requirements, and console availability, all sourced from the official Steam store page dated 2026-09-05.`,
    summary:
      "Compact FAQ covering release, co-op, languages, hardware, and platform availability.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Short, source-aware answers for the launch-week WheelMates questions.",
      ctas: [
        { label: "Release & Platforms", href: "/release" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "WheelMates is the 2-player co-op RC car driving adventure by Firevolt, launched on Steam (AppID 3905450) on September 1, 2026 for Windows 10/11 64-bit.",
    keyFacts: [
      { label: "FAQ source", value: "Official Steam store + Firevolt channels" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Update as launch facts change" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Keep answers short, source-aware, and easy to update. Anything not directly verifiable on the Steam store, wheelmatesgame.com, or the official Discord / X / YouTube channels is labeled Not announced as of 2026-09-05.",
      },
      {
        id: "faq-launch",
        type: "prose",
        heading: "Launch FAQ",
        body:
          "### Is WheelMates out now?\n\nYes. WheelMates launched on Steam (AppID 3905450) on September 1, 2026 for Windows 10/11 64-bit.\n\n### Do both players need to own a copy?\n\nNo. The official Steam description states Friend's Pass lets a friend join for free.\n\n### Is there a console version?\n\nNot announced as of 2026-09-05. PS5, Xbox Series X|S, Xbox One, Nintendo Switch, and Nintendo Switch 2 versions are not confirmed.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-release-platforms", "fixed-co-op-split-screen", "fixed-system-requirements", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      `${site.name} is an unofficial fan reference hub for ${site.gameName} (Firevolt, Steam AppID 3905450). It collects release, hardware, co-op, gadget, puzzle, and community information sourced from official channels.`,
    summary:
      "A trust page explaining the site's unofficial status, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan guide for ${site.gameName}, the 2026 2-player co-op RC car driving adventure by Firevolt (Steam AppID 3905450). It is not affiliated with the publisher, developer, or any trademark holder.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts only, with date stamps" },
      { label: "Scope", value: "Release info, system requirements, co-op, RC car gadgets, puzzles, community" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about WheelMates without inventing details that the official Steam store, wheelmatesgame.com, the verified X handle, the YouTube channel, or the Steam Community hub do not confirm.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Hard current-game facts are limited to the Steam store page (AppID 3905450), the official wheelmatesgame.com hub, the verified X handle @wheelmatesgame, the YouTube channel @WheelMatesGame, the TikTok @wheelmatesgame, the Instagram @wheelmates_game, the official Discord invite, and the Steam Community hub dated 2026-09-05. Anything outside those sources is labelled Not announced as of 2026-09-05.",
      },
      {
        id: "scope",
        type: "prose",
        heading: "What this site covers",
        body:
          "Release date and platforms, PC system requirements, launch price and the WheelMates - Supporter Pack add-on, online co-op and local split screen co-op, Friend's Pass, Steam Deck status, controller support, supported languages, RC car gadgets, puzzle walkthroughs, achievements, single-player, patch notes, reviews, and the official community channels.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      `Contact ${site.name} for corrections, source updates, and feedback. Use official source links when reporting a change to WheelMates coverage.`,
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      `Email ${site.name} at support@wheelmates.pro for corrections, source links, or feedback.`,
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Email", value: "support@wheelmates.pro" },
      { label: "Response time", value: "Best effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Send corrections or feedback to support@wheelmates.pro. The Cloudflare Email Routing rule for this address forwards to the verified owner mailbox; do not request a different inbox on this page.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When reporting a correction, include a link to the official source (Steam store AppID 3905450, wheelmatesgame.com, the verified X handle @wheelmatesgame, the YouTube @WheelMatesGame channel, the Steam Community hub, or the official Discord invite) and the page or section that needs updating. Do not send game account credentials or personal account information.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      `Privacy policy for ${site.name}: aggregate analytics (GA4 when enabled), Cloudflare Email Routing for the support address, and no user accounts or comments.`,
    summary:
      "A privacy policy covering GA4 analytics, Cloudflare Email Routing, and Cloudflare-hosted static assets.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can contact us.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site does not include accounts, comments, or payments. GA4 aggregate analytics and Cloudflare Email Routing for the support address are the only third-party data flows.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. Cloudflare serves the static assets and processes technical request data needed to deliver them. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a visitor sends a message to support@wheelmates.pro, the message may include the information they choose to send. Cloudflare Email Routing forwards the message to the verified owner mailbox. Do not request sensitive personal information through this channel.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      `Terms of use for ${site.name}: unofficial informational guide site, no affiliation with the publisher or developer, and use at your own discretion.`,
    summary:
      "A terms page covering unofficial status, informational use, and acceptable use.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan guide. Information may change; rely on the official Steam store and Firevolt channels for final purchase, platform, and release decisions.`,
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Update when launch facts change" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Firevolt, the WheelMates franchise, Steam, or any platform holder unless explicitly stated after launch.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
];
