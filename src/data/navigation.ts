export interface NavItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const productNav: NavItem[] = [
  { label: "Components", href: "/components", description: "50+ 3D components for React" },
  { label: "Themes", href: "/themes", description: "Customizable theme presets" },
  { label: "Playground", href: "/playground", description: "Interactive component sandbox" },
  { label: "Changelog", href: "/changelog", description: "Latest updates and releases" },
];

export const resourcesNav: NavItem[] = [
  { label: "Documentation", href: "/docs", description: "Guides and references" },
  { label: "API Reference", href: "/docs/api/button3d", description: "Detailed API docs" },
  { label: "Examples", href: "/examples", description: "Real-world usage examples" },
  { label: "Blog", href: "/blog", description: "News and tutorials" },
];

export const communityNav: NavItem[] = [
  { label: "GitHub", href: "https://github.com/sree0405", external: true },
  { label: "Instagram", href: "https://www.instagram.com/srxx.im", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sreekanth04052005/", external: true },
  { label: "Contributing", href: "/contributing" },
];

export const companyNav: NavItem[] = [
  { label: "About", href: "/about" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const megaMenuGroups: NavGroup[] = [
  { label: "Product", items: productNav },
  { label: "Resources", items: resourcesNav },
  { label: "Community", items: communityNav },
  { label: "Company", items: companyNav },
];

export const docsSidebarNav = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "All Guides", href: "/docs/guides" },
      { label: "Theming", href: "/docs/guides/theming" },
      { label: "Performance", href: "/docs/guides/performance" },
      { label: "Accessibility", href: "/docs/guides/accessibility" },
      { label: "SSR", href: "/docs/guides/ssr" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button3D", href: "/docs/components/button3d" },
      { label: "Card3D", href: "/docs/components/card3d" },
      { label: "Modal3D", href: "/docs/components/modal3d" },
      { label: "Particles", href: "/docs/components/particles" },
      { label: "Bloom", href: "/docs/components/bloom" },
      { label: "View All →", href: "/components" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { label: "Button3D API", href: "/docs/api/button3d" },
      { label: "Card3D API", href: "/docs/api/card3d" },
      { label: "Particles API", href: "/docs/api/particles" },
      { label: "Stage API", href: "/docs/api/stage" },
    ],
  },
];

export const footerNav = {
  Product: [
    { label: "Components", href: "/components" },
    { label: "Themes", href: "/themes" },
    { label: "Playground", href: "/playground" },
    { label: "Changelog", href: "/changelog" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api/button3d" },
    { label: "Examples", href: "/examples" },
    { label: "Blog", href: "/blog" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/my3dui", external: true },
    { label: "Discord", href: "https://discord.gg/my3dui", external: true },
    { label: "Twitter", href: "https://twitter.com/my3dui", external: true },
    { label: "Contributing", href: "/contributing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    // { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
};
