import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "WheelMates Guide",
  brandMark: "WM",
  gameName: "WheelMates",
  domain: "wheelmates.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://wheelmates.pro").replace(/\/$/, ""),
  description:
    "Unofficial fan reference hub for WheelMates (Firevolt, Steam AppID 3905450): release date, PC system requirements, co-op, RC car gadgets, puzzle walkthroughs, patch notes, and community channels.",
  tagline: "Release date, PC specs, co-op and split screen, RC car gadgets, puzzle walkthroughs, patch notes, and the official WheelMates community.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "WheelMates Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page (AppID 3905450)",
      href: "https://store.steampowered.com/app/3905450/WheelMates/",
      description: "Official store page with release date, system requirements, supported languages, and features.",
    },
    {
      label: "Official Firevolt landing hub",
      href: "https://www.wheelmatesgame.com/",
      description: "Official press kit and cross-links to Steam, Discord, YouTube, X, TikTok, and Instagram.",
    },
    {
      label: "Steam Community hub",
      href: "https://steamcommunity.com/app/3905450",
      description: "Pinned launch FAQ, Friend's Pass guide, and launch-week hotfix posts.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All hard current-game facts are sourced from the official Steam store page (AppID 3905450), wheelmatesgame.com, the verified X handle @wheelmatesgame, the YouTube @WheelMatesGame channel, the official Discord invite, and the Steam Community hub dated 2026-09-05.",
};
