import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to build in <span className="text-gradient">3D</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join thousands of developers building the future of web interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 glow-primary"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground flex items-center gap-2 border-glow"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </motion.a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <span>12k+ GitHub Stars</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>500+ Contributors</span>
            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <span className="hidden sm:inline">Used by 2,000+ companies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
