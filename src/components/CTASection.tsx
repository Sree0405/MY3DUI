import { motion } from "framer-motion";
import { ArrowRight, Github, Briefcase, Linkedin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Hi, I’m <span className="text-gradient">Sreekanth</span> 
            <br />
            Frontend Engineer building <span className="text-gradient">3D Web</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-10">
            Passionate React ,Nextjs & Three.js developer focused on creating
            high-performance, scalable, and visually immersive user interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Portfolio / Docs */}
            <motion.a
              href="https://sreefolio.vercel.app/projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 glow-primary"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://in.linkedin.com/in/sreekanth04052005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground flex items-center gap-2 border-glow"
            >
              Linked
              <Linkedin className="w-4 h-4" />
            </motion.a>

          </div>

          {/* Skills / Tags */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm">

            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Frontend Engineer
            </span>

            <span className="w-1 h-1 rounded-full bg-border" />

            <span>React • TypeScript • Three.js</span>

            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />

            <span className="hidden sm:inline">
              Open Source • UI Systems • Performance
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
