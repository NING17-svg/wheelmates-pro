import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#FBF6EC",
    surface1: "#FFFFFF",
    surface2: "#F4ECDD",
    surface3: "#E9DEC6",
    surfaceInverse: "#1F2A33",
    textPrimary: "#1A1A1A",
    textMuted: "#5C5C5C",
    textInverse: "#FFFFFF",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#1F6F8E",
    focusRing: "#E08A1A",
    line: "#E3D7BF",
    lineStrong: "#A89478",
    accentPrimary: "#D9531E",
    accentSecondary: "#1F6F8E",
    accentBright: "#F2C027",
    statusConfirmed: "#2E7D4F",
    statusCaution: "#B26A12",
    statusUnknown: "#8A8A8A",
  },
  typography: {
    headingFamily:
      "Nunito, 'Quicksand', 'Helvetica Neue', system-ui, sans-serif",
    bodyFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "12px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(31, 42, 51, 0.06), 0 4px 12px rgba(31, 42, 51, 0.04)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.04, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "dots", intensity: "low" },
} satisfies ThemeConfig;
