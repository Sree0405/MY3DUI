import { motion } from "framer-motion";
import { Users, Star, Package, Globe } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const stats = [
  { icon: Star, label: "GitHub Stars", value: "12,000+" },
  { icon: Users, label: "Contributors", value: "500+" },
  { icon: Package, label: "Components", value: "50+" },
  { icon: Globe, label: "Companies", value: "2,000+" },
];

const team = [
  { name: "Alex Chen", role: "Lead Engineer", avatar: "AC" },
  { name: "Sarah Kim", role: "Design Systems", avatar: "SK" },
  { name: "Marcus Johnson", role: "3D Graphics", avatar: "MJ" },
  { name: "Priya Patel", role: "DX & Tooling", avatar: "PP" },
];

export default function About() {
  usePageMeta({ title: "About", description: "The team and mission behind My3DUI." });

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About <span className="text-gradient">My3DUI</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We believe the web's next interface paradigm is 3D. We're building the tools to make it accessible to every developer.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-6 text-center">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Core Team</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((t) => (
              <div key={t.name} className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{t.avatar}</div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
