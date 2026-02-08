import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Zap, Palette, Code, Shield, Globe } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const quickLinks = [
  { icon: Zap, title: "Getting Started", description: "Set up in under 5 minutes", href: "/docs/getting-started" },
  { icon: Code, title: "Installation", description: "Detailed setup for Vite, Next.js, Remix", href: "/docs/installation" },
  { icon: Palette, title: "Theming Guide", description: "Customize colors and materials", href: "/docs/guides/theming" },
  { icon: Shield, title: "Accessibility", description: "WCAG 2.1 AA compliance guide", href: "/docs/guides/accessibility" },
  { icon: Globe, title: "SSR Guide", description: "Server-side rendering setup", href: "/docs/guides/ssr" },
  { icon: BookOpen, title: "API Reference", description: "Detailed component APIs", href: "/docs/api/button3d" },
];

export default function DocsIndex() {
  usePageMeta({ title: "Documentation", description: "Comprehensive guides and API references for My3DUI." });

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Documentation</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
          Everything you need to build stunning 3D interfaces with My3DUI. From quick start to advanced customization.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="glass rounded-xl p-5 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-primary transition-shadow">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {link.title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
