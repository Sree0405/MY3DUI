import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Zap, Shield, Globe } from "lucide-react";
import { guidesIndex } from "@/data/docs-content";
import { usePageMeta } from "@/hooks/use-page-meta";

const iconMap: Record<string, typeof Palette> = {
  Palette, Zap, Shield, Globe,
};

export default function DocsGuides() {
  usePageMeta({ title: "Guides", description: "In-depth guides for theming, performance, accessibility, and SSR." });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl font-bold text-foreground mb-2">Guides</h1>
      <p className="text-muted-foreground text-lg mb-8">In-depth tutorials for getting the most out of My3DUI.</p>

      <div className="grid gap-4">
        {guidesIndex.map((guide) => {
          const Icon = iconMap[guide.icon] || Zap;
          return (
            <Link
              key={guide.slug}
              to={`/docs/guides/${guide.slug}`}
              className="glass rounded-xl p-5 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {guide.title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{guide.description}</p>
                </div>
                <span className="text-xs text-muted-foreground/60 shrink-0">{guide.readTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
