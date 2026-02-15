export interface DocSection {
  id: string;
  title: string;
  content: string;
}

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  sections: DocSection[];
}

export interface GuideEntry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  readTime: string;
}

export const gettingStartedPage: DocPage = {
  slug: "getting-started",
  title: "Getting Started",
  description: "Set up My3DUI in your React project in under 5 minutes.",
  sections: [
    {
      id: "installation",
      title: "Installation",
      content: `Install My3DUI and its peer dependencies:\n\n\`\`\`bash\nnpm install @sreedev/my3dui @react-three/fiber @react-three/drei three\n\`\`\`\n\nOr with yarn:\n\n\`\`\`bash\nyarn add @sreedev/my3dui @react-three/fiber @react-three/drei three\n\`\`\``,
    },
    {
      id: "first-component",
      title: "Your First Component",
      content: `Import and use a 3D component:\n\n\`\`\`tsx\nimport { Canvas } from '@react-three/fiber'\nimport { Button3D } from '@sreedev/my3dui'\n\nfunction App() {\n  return (\n    <Canvas>\n      <ambientLight />\n      <Button3D onClick={() => alert('Clicked!')}>\n        Hello 3D\n      </Button3D>\n    </Canvas>\n  )\n}\n\`\`\``,
    },
    {
      id: "with-nextjs",
      title: "Using with Next.js",
      content: `My3DUI works with Next.js App Router. Use the \`'use client'\` directive:\n\n\`\`\`tsx\n'use client'\nimport { Canvas } from '@react-three/fiber'\nimport { Card3D } from '@sreedev/my3dui'\n\nexport default function Page() {\n  return (\n    <Canvas>\n      <Card3D depth={0.2} tilt>\n        <h2>3D Card</h2>\n      </Card3D>\n    </Canvas>\n  )\n}\n\`\`\``,
    },
    {
      id: "theming",
      title: "Adding a Theme",
      content: `Wrap your app with the ThemeProvider:\n\n\`\`\`tsx\nimport { ThemeProvider } from '@my3dui/themes'\n\nfunction App() {\n  return (\n    <ThemeProvider theme="neon">\n      <Canvas>\n        {/* Components automatically use theme */}\n      </Canvas>\n    </ThemeProvider>\n  )\n}\n\`\`\``,
    },
  ],
};

export const installationPage: DocPage = {
  slug: "installation",
  title: "Installation",
  description: "Detailed setup instructions for Vite, Next.js, and Remix.",
  sections: [
    {
      id: "requirements",
      title: "Requirements",
      content: "My3DUI requires:\n- React 18+\n- Three.js 0.150+\n- A WebGL2-capable browser\n- Node.js 18+",
    },
    {
      id: "vite",
      title: "Vite Setup",
      content: `\`\`\`bash\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install @sreedev/my3dui @react-three/fiber @react-three/drei three\n\`\`\`\n\nNo additional configuration required. Vite handles Three.js imports natively.`,
    },
    {
      id: "nextjs",
      title: "Next.js Setup",
      content: `\`\`\`bash\nnpx create-next-app@latest my-app --typescript\ncd my-app\nnpm install @sreedev/my3dui @my3dui/next @react-three/fiber @react-three/drei three\n\`\`\`\n\nAdd the Next.js adapter to your \`next.config.js\`:\n\n\`\`\`js\nconst { withMy3DUI } = require('@my3dui/next')\nmodule.exports = withMy3DUI({\n  // your Next.js config\n})\n\`\`\``,
    },
    {
      id: "remix",
      title: "Remix Setup",
      content: `\`\`\`bash\nnpx create-remix@latest my-app\ncd my-app\nnpm install @sreedev/my3dui @react-three/fiber @react-three/drei three\n\`\`\`\n\nMark 3D components as client-only using Remix's \`ClientOnly\` wrapper.`,
    },
    {
      id: "typescript",
      title: "TypeScript Configuration",
      content: `My3DUI ships with full TypeScript declarations. Add path aliases to your \`tsconfig.json\`:\n\n\`\`\`json\n{\n  "compilerOptions": {\n    "types": ["@sreedev/my3dui/types"]\n  }\n}\n\`\`\``,
    },
  ],
};

export const guidesIndex: GuideEntry[] = [
  {
    slug: "theming",
    title: "Theming & Customization",
    description: "Learn how to customize colors, materials, and create your own theme presets.",
    icon: "Palette",
    readTime: "8 min",
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    description: "Techniques for maintaining 60fps with complex 3D scenes including instancing and LOD.",
    icon: "Zap",
    readTime: "12 min",
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    description: "Best practices for making 3D interfaces accessible to all users.",
    icon: "Shield",
    readTime: "6 min",
  },
  {
    slug: "ssr",
    title: "Server-Side Rendering",
    description: "Guide to using My3DUI with SSR frameworks like Next.js and Remix.",
    icon: "Globe",
    readTime: "5 min",
  },
];

export const guideContent: Record<string, DocPage> = {
  theming: {
    slug: "theming",
    title: "Theming & Customization",
    description: "Complete guide to theming My3DUI components.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "My3DUI uses a token-based theming system that controls both 2D CSS properties and 3D material properties. Themes are defined as presets or custom configurations.",
      },
      {
        id: "presets",
        title: "Using Presets",
        content: `Apply a built-in theme preset:\n\n\`\`\`tsx\n<ThemeProvider theme="cyber">\n  <Canvas>\n    <Button3D>Themed</Button3D>\n  </Canvas>\n</ThemeProvider>\n\`\`\`\n\nAvailable presets: \`neon\`, \`glass\`, \`cyber\`, \`minimal\``,
      },
      {
        id: "custom",
        title: "Custom Themes",
        content: `Create your own theme:\n\n\`\`\`tsx\nconst myTheme = {\n  colors: {\n    primary: '185 80% 55%',\n    accent: '260 60% 60%',\n  },\n  material: {\n    roughness: 0.2,\n    metalness: 0.8,\n  }\n}\n\n<ThemeProvider theme={myTheme}>\n  ...\n</ThemeProvider>\n\`\`\``,
      },
      {
        id: "per-component",
        title: "Per-Component Overrides",
        content: `Override theme values on individual components:\n\n\`\`\`tsx\n<Button3D\n  color="#ff6b6b"\n  material="glass"\n  glow\n>\n  Custom Button\n</Button3D>\n\`\`\``,
      },
    ],
  },
  performance: {
    slug: "performance",
    title: "Performance Optimization",
    description: "Techniques for maintaining 60fps with My3DUI.",
    sections: [
      {
        id: "overview",
        title: "Performance Philosophy",
        content: "My3DUI targets 60fps on mid-range hardware. Every component is built with GPU optimization as a first-class concern.",
      },
      {
        id: "instancing",
        title: "Instanced Rendering",
        content: "Components like Particles, charts, and grids use instanced rendering to draw thousands of objects in a single draw call. This is automatic — no configuration needed.",
      },
      {
        id: "lod",
        title: "Level of Detail",
        content: `Enable LOD for complex components:\n\n\`\`\`tsx\n<ModelViewer src="/model.glb" lod={true} />\n\`\`\`\n\nThis automatically reduces geometry detail at distance.`,
      },
      {
        id: "lazy",
        title: "Lazy Loading",
        content: `Lazy-load heavy components:\n\n\`\`\`tsx\nconst Particles = lazy(() => import('@sreedev/my3dui/Particles'))\n\n<Suspense fallback={<Spinner3D />}>\n  <Particles count={5000} />\n</Suspense>\n\`\`\``,
      },
      {
        id: "profiling",
        title: "Profiling Tools",
        content: "Use the built-in debug overlay to monitor FPS, draw calls, and memory usage:\n\n```tsx\n<Stage debug>\n  {/* Shows performance overlay */}\n</Stage>\n```",
      },
    ],
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility",
    description: "Making 3D interfaces accessible to everyone.",
    sections: [
      {
        id: "overview",
        title: "Accessibility in 3D",
        content: "3D interfaces pose unique accessibility challenges. My3DUI addresses these with built-in WCAG 2.1 AA compliance, keyboard navigation, and screen reader support.",
      },
      {
        id: "keyboard",
        title: "Keyboard Navigation",
        content: "All interactive components support Tab navigation, Enter/Space activation, and Escape dismissal. Focus rings are visible in all themes.",
      },
      {
        id: "screen-readers",
        title: "Screen Reader Support",
        content: "Components render hidden ARIA labels alongside their 3D visuals. Use the `aria-label` prop for custom labels:\n\n```tsx\n<Button3D aria-label=\"Submit form\">Submit</Button3D>\n```",
      },
      {
        id: "reduced-motion",
        title: "Reduced Motion",
        content: "My3DUI respects `prefers-reduced-motion`. When enabled, animations are minimized or disabled entirely:\n\n```tsx\n<ThemeProvider reducedMotion=\"auto\">\n  {/* Animations adapt to user preference */}\n</ThemeProvider>\n```",
      },
    ],
  },
  ssr: {
    slug: "ssr",
    title: "Server-Side Rendering",
    description: "Using My3DUI with SSR frameworks.",
    sections: [
      {
        id: "overview",
        title: "SSR Compatibility",
        content: "My3DUI components are SSR-safe. They render placeholder content on the server and hydrate with 3D visuals on the client.",
      },
      {
        id: "nextjs",
        title: "Next.js App Router",
        content: `Use the \`'use client'\` directive for 3D components:\n\n\`\`\`tsx\n'use client'\nimport { Button3D } from '@sreedev/my3dui'\n\nexport default function MyComponent() {\n  return <Button3D>Click</Button3D>\n}\n\`\`\``,
      },
      {
        id: "fallback",
        title: "Server Fallbacks",
        content: "All components accept a `fallback` prop for server rendering:\n\n```tsx\n<Card3D fallback={<div className=\"card-placeholder\">Loading...</div>}>\n  Content\n</Card3D>\n```",
      },
    ],
  },
};
