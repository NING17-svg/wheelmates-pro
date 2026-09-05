import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-wheelmates",
    question: "What is WheelMates?",
    answer:
      "WheelMates is a 2-player co-op RC car driving adventure developed and published by Firevolt, released on Steam (AppID 3905450) on September 1, 2026 for Windows 10/11 64-bit.",
    pageIds: ["home", "about", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-official-site",
    question: "Is this an official WheelMates website?",
    answer:
      "No. This is an unofficial fan guide. Official facts are sourced from the Steam store, wheelmatesgame.com, the verified X handle @wheelmatesgame, the YouTube @WheelMatesGame channel, the official Discord invite, and the Steam Community hub.",
    pageIds: ["about", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "wheelmates-release-date",
    question: "When did WheelMates launch?",
    answer:
      "September 1, 2026 on Steam (AppID 3905450) for Windows 10/11 64-bit PCs. Firevolt is both the developer and publisher.",
    pageIds: ["fixed-release-platforms", "home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wheelmates-platforms",
    question: "Which platforms is WheelMates available on?",
    answer:
      "Only Windows 10/11 64-bit on PC via Steam as of 2026-09-05. PS5, Xbox Series X|S, Xbox One, Nintendo Switch, and Nintendo Switch 2 versions are not announced.",
    pageIds: ["fixed-release-platforms", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wheelmates-friends-pass",
    question: "Does WheelMates support Friend's Pass?",
    answer:
      "Yes. The official Steam description states Friend's Pass lets a friend join for free from your copy. Online co-op and local shared/split screen co-op are also listed Steam features.",
    pageIds: ["fixed-co-op-split-screen", "home", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wheelmates-single-player",
    question: "Can you play WheelMates solo?",
    answer:
      "Yes. Single-player is listed as a supported Steam feature alongside online co-op. Friend's Pass lets a second player join when you want.",
    pageIds: ["fixed-single-player", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wheelmates-price",
    question: "How much does WheelMates cost?",
    answer:
      "$19.99 USD standalone. A launch-week 10% discount to $17.99 USD runs through approximately September 15, 2026. The WheelMates - Supporter Pack add-on DLC is $4.99 USD.",
    pageIds: ["fixed-price-editions", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wheelmates-languages",
    question: "Which languages does WheelMates support?",
    answer:
      "14 interface and subtitle languages: English, French, German, Spanish-Spain, Spanish-Latin America, Simplified Chinese, Polish, Portuguese-Brazil, Portuguese-Portugal, Russian, Italian, Turkish, Ukrainian, and Belarusian.",
    pageIds: ["fixed-language-support", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
