import { motion } from "framer-motion";
import { Zap, Shield, Palette, Layers, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "GPU Optimized",
    description: "Instancing, LOD, frustum culling, and occlusion culling built into every component.",
  },
  {
    icon: Shield,
    title: "Accessible",
    description: "WCAG 2.1 AA compliant with keyboard navigation, focus management, and reduced motion.",
  },
  {
    icon: Palette,
    title: "Themeable",
    description: "Design tokens, material presets, and shader themes with runtime switching.",
  },
  {
    icon: Layers,
    title: "Tree-shakable",
    description: "Import only what you use. Each component is independently bundled and optimized.",
  },
  {
    icon: Cpu,
    title: "SSR Safe",
    description: "Full Next.js App Router compatibility with server components and streaming.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "MIT licensed. Community-driven with transparent governance and roadmap.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Engineered for <span className="text-gradient">production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every component is built with performance, accessibility, and developer experience in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow duration-300">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
