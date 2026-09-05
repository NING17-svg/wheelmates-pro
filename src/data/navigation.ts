import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release & Platforms" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/price-editions", labels: { "en-US": "Price & Editions" } },
  { href: "/co-op", labels: { "en-US": "Co-op & Split Screen" } },
  { href: "/steam-deck", labels: { "en-US": "Steam Deck" } },
  { href: "/rc-car-gadgets", labels: { "en-US": "RC Car Gadgets" } },
  { href: "/puzzle-walkthrough", labels: { "en-US": "Puzzle Walkthrough" } },
  { href: "/patch-notes", labels: { "en-US": "Patch Notes" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release & Platforms" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/price-editions", labels: { "en-US": "Price & Editions" } },
  { href: "/co-op", labels: { "en-US": "Co-op & Split Screen" } },
  { href: "/steam-deck", labels: { "en-US": "Steam Deck" } },
  { href: "/controller-support", labels: { "en-US": "Controller Support" } },
  { href: "/language-support", labels: { "en-US": "Language Support" } },
  { href: "/rc-car-gadgets", labels: { "en-US": "RC Car Gadgets" } },
  { href: "/puzzle-walkthrough", labels: { "en-US": "Puzzle Walkthrough" } },
  { href: "/achievements", labels: { "en-US": "Achievements" } },
  { href: "/single-player", labels: { "en-US": "Single Player" } },
  { href: "/patch-notes", labels: { "en-US": "Patch Notes" } },
  { href: "/community", labels: { "en-US": "Community" } },
  { href: "/reviews", labels: { "en-US": "Reviews & Impressions" } },
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
