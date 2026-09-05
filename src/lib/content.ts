import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { homePage, launchPages } from "@/data/pages/launch-pages";
import { sitePages } from "@/data/pages/site-pages";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

const fixedPages: PageContent[] = [
  homePage,
  ...launchPages,
  ...sitePages,
];

const pages: PageContent[] = [
  ...fixedPages,
  ...buildEntityPages(entityFamilies),
];

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages;
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: page.routeKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  if (page.faqIds.length === 0) return [];
  const ids = new Set(page.faqIds);
  return faqItems.filter((item) => ids.has(item.id));
}

export function getRelatedPages(page: PageContent): PageContent[] {
  if (page.relatedPageIds.length === 0) return [];
  const targets = new Set(page.relatedPageIds);
  return pages.filter(
    (candidate) => candidate.id !== page.id && targets.has(candidate.id),
  );
}

export function getRecentUpdates(
  locale: string,
  limit = 6,
  sourcePages: PageContent[] = pages,
): PageContent[] {
  return sourcePages
    .filter((page) => page.locale === locale)
    .filter((page) => page.routeKind !== "home")
    .filter((page) => page.pageType !== "site")
    .filter((page) => page.pageType !== "faq")
    .filter((page) => page.routeKind !== "tool")
    .sort((left, right) => {
      const dateCompare = right.lastReviewed.localeCompare(left.lastReviewed);
      if (dateCompare !== 0) return dateCompare;
      return left.id.localeCompare(right.id);
    })
    .slice(0, limit);
}
