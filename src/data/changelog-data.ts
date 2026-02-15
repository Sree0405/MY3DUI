export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "added" | "changed" | "fixed" | "removed" | "performance";
    text: string;
  }[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "0.3.0",
    date: "2026-02-15",
    title: "Design System & Distribution Stabilization",
    description:
      "Major release focused on fixing styling, packaging, and improving core components for production usage.",

    changes: [
      {
        type: "added",
        text: "Bundled Tailwind-based design system with token-driven themes",
      },
      {
        type: "added",
        text: "Multi-theme support (Light, Dark, Neon, Glass, Corporate, Vibrant)",
      },
      {
        type: "added",
        text: "Global styles export via @sreedev/my3dui/styles.css",
      },
      {
        type: "added",
        text: "Improved Tabs3D with keyboard navigation and accessibility",
      },
      {
        type: "added",
        text: "Extended Button3D variant system with custom colors and glow effects",
      },
      {
        type: "added",
        text: "Centralized component exports for better tree-shaking",
      },
      {
        type: "changed",
        text: "Standardized component styling to rely on internal tokens instead of app Tailwind config",
      },
      {
        type: "changed",
        text: "Updated package exports to support CSS and deep imports",
      },
      {
        type: "fixed",
        text: "Tailwind classes not applying when imported as a library",
      },
      {
        type: "fixed",
        text: "Invalid hook call caused by duplicate React dependencies",
      },
      {
        type: "fixed",
        text: "Vite blocking CSS imports via exports map",
      },
      {
        type: "fixed",
        text: "Peer dependency conflicts with React 19 and R3F",
      },
      {
        type: "fixed",
        text: "Broken playground styles after npm install",
      },
      {
        type: "performance",
        text: "Reduced duplicate CSS output in production builds",
      },
      {
        type: "performance",
        text: "Improved tree-shaking by marking style imports as side-effects",
      },
    ],
  },

  {
    version: "0.2.0",
    date: "2026-01-20",
    title: "Component Architecture Refactor",
    description:
      "Refactored core components for better stability, exports, and TypeScript support.",

    changes: [
      {
        type: "changed",
        text: "Refactored Button3D, Tabs3D, Toggle3D, Menu3D to unified patterns",
      },
      {
        type: "changed",
        text: "Migrated variant handling to class-variance-authority",
      },
      {
        type: "added",
        text: "Initial ThemeProvider and token system",
      },
      {
        type: "added",
        text: "Improved demo pages for major UI components",
      },
      {
        type: "fixed",
        text: "Framer Motion type conflicts in library builds",
      },
      {
        type: "fixed",
        text: "DTS generation failures in tsup",
      },
      {
        type: "performance",
        text: "Reduced bundle size by removing unused Radix exports",
      },
    ],
  },

  {
    version: "0.1.0",
    date: "2026-01-05",
    title: "Initial Public Release",
    description:
      "First public release of My3DUI with foundational 3D-inspired UI components.",

    changes: [
      {
        type: "added",
        text: "Button3D, Card3D, Badge3D, Input3D, Slider3D, Tabs3D",
      },
      {
        type: "added",
        text: "Three.js-powered visual components",
      },
      {
        type: "added",
        text: "Basic demo playground",
      },
      {
        type: "added",
        text: "TypeScript support and npm distribution",
      },
      {
        type: "fixed",
        text: "Initial build and export issues",
      },
    ],
  },
];

/* ======================================
   Badge Colors
====================================== */

export const changeTypeColors: Record<string, string> = {
  added: "bg-emerald-500/20 text-emerald-400",
  changed: "bg-blue-500/20 text-blue-400",
  fixed: "bg-amber-500/20 text-amber-400",
  removed: "bg-red-500/20 text-red-400",
  performance: "bg-purple-500/20 text-purple-400",
};