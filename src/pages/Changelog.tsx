import { motion } from "framer-motion";
import { changelogEntries, changeTypeColors } from "@/data/changelog-data";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Changelog() {
  usePageMeta({ title: "Changelog", description: "Version history and release notes for My3DUI." });

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient">Changelog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Track every update, improvement, and fix.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/30" />
            <div className="space-y-12">
              {changelogEntries.map((entry, i) => (
                <motion.div
                  key={entry.version}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary glow-primary" />
                  <div className="glass rounded-xl p-6 border-glow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-mono font-bold text-sm">v{entry.version}</span>
                      <span className="text-muted-foreground text-xs">{entry.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{entry.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{entry.description}</p>
                    <ul className="space-y-2">
                      {entry.changes.map((change, ci) => (
                        <li key={ci} className="flex items-start gap-2.5">
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 mt-0.5 uppercase ${changeTypeColors[change.type]}`}>
                            {change.type}
                          </span>
                          <span className="text-sm text-muted-foreground">{change.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
