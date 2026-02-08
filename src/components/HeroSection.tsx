import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import HeroScene from "./HeroScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <HeroScene />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-sm text-primary font-medium"
          >
            <Sparkles className="w-4 h-4" />
            v1.0 — Now Production Ready
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Build stunning </span>
            <span className="text-gradient">3D interfaces</span>
            <br />
            <span className="text-foreground">with React</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            An enterprise-grade 3D component library for React & Next.js.
            Performant, accessible, and beautifully designed out of the box.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#components"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 glow-primary"
            >
              Explore Components
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#docs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-8 py-3.5 rounded-xl font-semibold text-base text-foreground flex items-center gap-2 border-glow"
            >
              <Download className="w-4 h-4" />
              npm install my3dui
            </motion.a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              60fps rendering
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              SSR compatible
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              {"<150kb"} bundle
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
