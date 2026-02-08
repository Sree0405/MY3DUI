export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    muted: string;
  };
  material: {
    roughness: number;
    metalness: number;
    emissiveIntensity: number;
  };
  tags: string[];
}

export const themePresets: ThemePreset[] = [
  {
    id: "neon",
    name: "Neon",
    description: "Bright cyan and purple with high-glow emissive materials. Bold and electric.",
    colors: {
      primary: "185 80% 55%",
      accent: "260 60% 60%",
      background: "220 20% 4%",
      foreground: "210 20% 92%",
      card: "220 18% 8%",
      muted: "220 14% 12%",
    },
    material: { roughness: 0.1, metalness: 0.9, emissiveIntensity: 0.5 },
    tags: ["dark", "vibrant", "cyberpunk"],
  },
  {
    id: "glass",
    name: "Glass",
    description: "Transparent, refractive surfaces with subtle color tints. Elegant and modern.",
    colors: {
      primary: "200 70% 60%",
      accent: "170 50% 55%",
      background: "210 15% 6%",
      foreground: "200 15% 90%",
      card: "210 12% 10%",
      muted: "210 10% 14%",
    },
    material: { roughness: 0.05, metalness: 0.3, emissiveIntensity: 0.1 },
    tags: ["dark", "minimal", "elegant"],
  },
  {
    id: "cyber",
    name: "Cyber",
    description: "Green and orange grid patterns with scan-line textures. Retro-futuristic.",
    colors: {
      primary: "142 70% 50%",
      accent: "30 90% 55%",
      background: "150 10% 4%",
      foreground: "140 15% 90%",
      card: "150 12% 8%",
      muted: "150 8% 14%",
    },
    material: { roughness: 0.3, metalness: 0.7, emissiveIntensity: 0.3 },
    tags: ["dark", "retro", "matrix"],
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Muted grays and flat materials with zero glow. Clean and professional.",
    colors: {
      primary: "220 15% 50%",
      accent: "220 10% 40%",
      background: "220 10% 6%",
      foreground: "220 10% 85%",
      card: "220 8% 10%",
      muted: "220 6% 16%",
    },
    material: { roughness: 0.8, metalness: 0.1, emissiveIntensity: 0 },
    tags: ["dark", "clean", "professional"],
  },
];

export function getThemeById(id: string): ThemePreset | undefined {
  return themePresets.find((t) => t.id === id);
}
