import { motion } from "framer-motion";
import { Palette, Check, Copy } from "lucide-react";
import { useState } from "react";
import { themePresets, type ThemePreset } from "@/data/theme-presets";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Themes() {
  usePageMeta({ title: "Themes", description: "Explore and customize theme presets for My3DUI components." });
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(themePresets[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const css = `:root {\n  --primary: ${activeTheme.colors.primary};\n  --accent: ${activeTheme.colors.accent};\n  --background: ${activeTheme.colors.background};\n  --foreground: ${activeTheme.colors.foreground};\n}`;
    await navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Theme <span className="text-gradient">Presets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Four built-in themes that control both CSS and 3D material properties.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
            {/* Theme Selector */}
            <div className="space-y-4">
              {themePresets.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  whileHover={{ scale: 1.01 }}
                  className={`w-full text-left glass rounded-xl p-5 transition-all ${
                    activeTheme.id === theme.id ? "border-primary/40 glow-primary" : "hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-4 h-4 rounded-full" style={{ background: `hsl(${theme.colors.primary})` }} />
                      <div className="w-4 h-4 rounded-full" style={{ background: `hsl(${theme.colors.accent})` }} />
                    </div>
                    <h3 className="font-semibold text-foreground">{theme.name}</h3>
                    {activeTheme.id === theme.id && <Check className="w-4 h-4 text-primary ml-auto" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {theme.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-muted-foreground/60 bg-muted/50 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Preview */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 border-glow">
                <h3 className="text-lg font-bold text-foreground mb-6">Preview: {activeTheme.name}</h3>
                
                <div className="space-y-6">
                  {/* Color Swatches */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Colors</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(activeTheme.colors).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="w-full aspect-square rounded-xl mb-2 border border-border/30" style={{ background: `hsl(${value})` }} />
                          <span className="text-xs text-muted-foreground font-mono">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Material Properties */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">3D Material</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(activeTheme.material).map(([key, value]) => (
                        <div key={key} className="glass rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-[10px] text-muted-foreground font-mono mt-1">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Export */}
                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 glass px-4 py-3 rounded-xl text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied CSS Variables!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Export as CSS Variables</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
