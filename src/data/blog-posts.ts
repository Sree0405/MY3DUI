export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-my3dui",
    title: "Introducing My3DUI: Enterprise 3D Components for React",
    excerpt: "Today we're launching My3DUI — a production-ready 3D component library built for React and Next.js. 50+ components, GPU-optimized, accessible by default.",
    author: "My3DUI Team",
    date: "2026-01-15",
    readTime: "5 min",
    tags: ["announcement", "launch"],
    featured: true,
    content: `We're thrilled to announce the public release of My3DUI, an enterprise-grade 3D component library for React.\n\n## Why 3D Components?\n\nThe web is evolving. Users expect richer, more immersive experiences. But building 3D interfaces from scratch is hard — managing WebGL state, optimizing draw calls, handling accessibility, and supporting SSR adds months of engineering effort.\n\nMy3DUI solves this with 50+ pre-built, GPU-optimized components that drop into any React project.\n\n## Key Features\n\n- **50+ Components** — From buttons and cards to charts and particle systems\n- **60fps Performance** — Instanced rendering, LOD, frustum culling built-in\n- **Accessible** — WCAG 2.1 AA compliant with keyboard nav and screen reader support\n- **SSR-Safe** — Works with Next.js App Router out of the box\n- **Themeable** — 4 built-in presets, plus create your own\n\n## Getting Started\n\n\`\`\`bash\nnpm install @sreedev/my3dui @react-three/fiber three\n\`\`\`\n\nCheck out our [documentation](/docs) for guides and examples.`,
  },
  {
    slug: "performance-deep-dive",
    title: "Performance Deep Dive: How We Achieve 60fps",
    excerpt: "A technical look at GPU instancing, LOD management, and render pipeline optimizations that keep My3DUI components running at 60fps.",
    author: "Engineering Team",
    date: "2026-01-28",
    readTime: "8 min",
    tags: ["engineering", "performance"],
    featured: true,
    content: `Performance is non-negotiable for 3D web applications. Here's how My3DUI achieves consistent 60fps.\n\n## Instanced Rendering\n\nComponents like Particles, BarChart3D, and ScatterPlot3D use Three.js InstancedMesh to render thousands of objects in a single draw call.\n\n## Level of Detail (LOD)\n\nComplex geometries automatically reduce polygon count at distance. Our LOD system uses three detail tiers with seamless transitions.\n\n## Frustum Culling\n\nObjects outside the camera view are automatically culled. This is especially impactful for large scenes with many components.\n\n## Memory Management\n\nWe pool geometries and materials across component instances. When a component unmounts, resources are released back to the pool rather than garbage collected.`,
  },
  {
    slug: "theming-system-v2",
    title: "Theming System v2: Shader-Level Customization",
    excerpt: "Our new theming system goes beyond CSS variables — it reaches into the GPU pipeline for material-level customization.",
    author: "Design Systems Team",
    date: "2026-02-05",
    readTime: "6 min",
    tags: ["design", "theming"],
    featured: false,
    content: `The new My3DUI theming system bridges the gap between 2D design tokens and 3D material properties.\n\n## Token Architecture\n\nEach theme defines:\n- CSS custom properties for 2D elements\n- Material presets (roughness, metalness, emissive intensity)\n- Shader uniforms for custom effects\n\n## Runtime Switching\n\nThemes switch instantly at runtime. Materials update via uniform buffers — no re-compilation needed.\n\n## Custom Themes\n\nCreate your own theme by extending a preset:\n\n\`\`\`tsx\nconst myTheme = extendTheme('neon', {\n  colors: { primary: '340 80% 60%' },\n  material: { emissiveIntensity: 0.8 }\n})\n\`\`\``,
  },
  {
    slug: "accessibility-in-3d",
    title: "Making 3D Accessible: Our Approach to WCAG in WebGL",
    excerpt: "How we built WCAG 2.1 AA compliance into a 3D component library — keyboard navigation, focus management, and screen readers in WebGL.",
    author: "Accessibility Team",
    date: "2026-02-01",
    readTime: "7 min",
    tags: ["accessibility", "engineering"],
    featured: false,
    content: `Accessibility in 3D is an unsolved problem in the industry. Here's our approach.\n\n## The Challenge\n\nWebGL renders to a canvas element — it's opaque to assistive technology. Screen readers can't see the content, and keyboard focus doesn't naturally work.\n\n## Our Solution\n\nEvery interactive My3DUI component renders a hidden HTML layer alongside the canvas. This layer contains:\n- Focusable elements that mirror 3D interactive objects\n- ARIA labels describing the 3D content\n- Keyboard event handlers that sync with 3D state\n\n## Reduced Motion\n\nWe check \`prefers-reduced-motion\` and adjust all animations accordingly. Transitions still happen, but instantly rather than animated.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
