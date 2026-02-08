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
    version: "1.0.0",
    date: "2026-01-15",
    title: "Production Release 🚀",
    description: "The first stable release of My3DUI with 50+ components.",
    changes: [
      { type: "added", text: "50+ production-ready 3D components" },
      { type: "added", text: "4 built-in theme presets (Neon, Glass, Cyber, Minimal)" },
      { type: "added", text: "Full TypeScript support with auto-complete" },
      { type: "added", text: "WCAG 2.1 AA accessibility compliance" },
      { type: "added", text: "Next.js App Router adapter (@my3dui/next)" },
      { type: "added", text: "Interactive playground for component exploration" },
      { type: "performance", text: "60fps rendering with GPU instancing" },
      { type: "performance", text: "Bundle size under 150kb gzipped" },
    ],
  },
  {
    version: "0.9.0",
    date: "2025-12-20",
    title: "Release Candidate",
    description: "Final pre-release with API stabilization and performance polish.",
    changes: [
      { type: "changed", text: "Stabilized component APIs — no more breaking changes" },
      { type: "added", text: "BarChart3D, LineChart3D, PieChart3D data visualization components" },
      { type: "added", text: "AudioVisualizer component for real-time audio rendering" },
      { type: "fixed", text: "Memory leak in Particles component on unmount" },
      { type: "fixed", text: "Z-fighting in Card3D shadow rendering" },
      { type: "performance", text: "30% improvement in ScatterPlot3D with 10k+ points" },
    ],
  },
  {
    version: "0.8.0",
    date: "2025-11-15",
    title: "Theming Engine",
    description: "Introduced the token-based theming system with runtime switching.",
    changes: [
      { type: "added", text: "ThemeProvider context with preset support" },
      { type: "added", text: "Neon, Glass, Cyber, Minimal theme presets" },
      { type: "added", text: "Custom theme creation API" },
      { type: "added", text: "Per-component material overrides" },
      { type: "changed", text: "All components now consume theme tokens" },
    ],
  },
  {
    version: "0.7.0",
    date: "2025-10-01",
    title: "Navigation & Feedback Components",
    description: "Added navigation primitives and user feedback components.",
    changes: [
      { type: "added", text: "Breadcrumb3D, Pagination3D, Stepper3D, NavBar3D" },
      { type: "added", text: "Toast3D, Progress3D, Spinner3D, Skeleton3D" },
      { type: "added", text: "Sheet3D and Dialog3D overlay components" },
      { type: "fixed", text: "Focus trapping in Modal3D" },
    ],
  },
  {
    version: "0.6.0",
    date: "2025-09-01",
    title: "Effects System",
    description: "GPU-accelerated visual effects for immersive scenes.",
    changes: [
      { type: "added", text: "Bloom post-processing effect" },
      { type: "added", text: "Reflection component for planar reflections" },
      { type: "added", text: "GlowEffect for per-object emission" },
      { type: "added", text: "WaveEffect for vertex displacement" },
      { type: "added", text: "NoiseField for procedural motion" },
      { type: "performance", text: "Particles component handles 10k+ at 60fps" },
    ],
  },
  {
    version: "0.5.0",
    date: "2025-08-01",
    title: "Core UI Components",
    description: "The foundational interactive components.",
    changes: [
      { type: "added", text: "Button3D with variant system" },
      { type: "added", text: "Card3D with tilt-on-hover" },
      { type: "added", text: "Modal3D with focus trapping" },
      { type: "added", text: "Menu3D, Tooltip3D, Slider3D" },
      { type: "added", text: "Stage and Viewport layout components" },
    ],
  },
];

export const changeTypeColors: Record<string, string> = {
  added: "bg-green-500/20 text-green-400",
  changed: "bg-blue-500/20 text-blue-400",
  fixed: "bg-yellow-500/20 text-yellow-400",
  removed: "bg-red-500/20 text-red-400",
  performance: "bg-purple-500/20 text-purple-400",
};
