import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { componentRegistry, categoryLabels, categoryColors, type ComponentCategory } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";

const categories: (ComponentCategory | "all")[] = ["all", "layout", "ui", "data", "media", "effects", "navigation", "feedback", "overlay"];

export default function Components() {
  usePageMeta({ title: "Components", description: "Browse 50+ production-ready 3D components for React." });
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | "all">("all");

  const filtered = useMemo(() => {
    let items = componentRegistry;
    if (activeCategory !== "all") {
      items = items.filter((c) => c.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q))
      );
    }
    return items;
  }, [search, activeCategory]);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              50+ <span className="text-gradient">3D Components</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Production-ready, GPU-optimized, accessible by default.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search components..."
                className="w-full pl-11 pr-4 py-3 rounded-xl glass text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat === "all" ? "All" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((comp, i) => (
              <motion.div
                key={comp.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
              >
                <Link
                  to={`/components/${comp.slug}`}
                  className="block glass rounded-xl p-5 group hover:border-primary/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {comp.name}
                    </h3>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[comp.category]}`}>
                      {categoryLabels[comp.category]}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {comp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-muted-foreground/60 bg-muted/50 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg mb-2">No components found</p>
              <p className="text-sm">Try a different search or category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
