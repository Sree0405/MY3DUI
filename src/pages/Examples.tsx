import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { componentRegistry, categoryLabels } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";

const examples = [
  { title: "E-Commerce Product Viewer", description: "3D product showcase with ModelViewer, Gallery3D, and Card3D.", components: ["modelviewer", "gallery3d", "card3d"], image: "🛍️" },
  { title: "Data Dashboard", description: "Real-time 3D charts with BarChart3D, LineChart3D, and PieChart3D.", components: ["barchart3d", "linechart3d", "piechart3d"], image: "📊" },
  { title: "Interactive Portfolio", description: "Personal portfolio with floating Card3D elements and Particles.", components: ["card3d", "particles", "stage"], image: "🎨" },
  { title: "Music Visualizer", description: "Real-time audio visualization with AudioVisualizer and Bloom effects.", components: ["audiovisualizer", "bloom", "particles"], image: "🎵" },
  { title: "Network Topology", description: "Force-directed Graph3D for visualizing infrastructure.", components: ["graph3d", "tooltip3d", "badge3d"], image: "🌐" },
  { title: "Onboarding Flow", description: "Multi-step onboarding with Stepper3D and animated transitions.", components: ["stepper3d", "button3d", "card3d"], image: "🚀" },
];

export default function Examples() {
  usePageMeta({ title: "Examples", description: "Real-world usage examples of My3DUI components." });

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4"><span className="text-gradient">Examples</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Real-world use cases and project templates.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, i) => (
              <motion.div key={ex.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6 group hover:border-primary/30 transition-all">
                <div className="text-4xl mb-4">{ex.image}</div>
                <h3 className="text-foreground font-bold text-lg mb-2">{ex.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{ex.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ex.components.map((c) => (
                    <Link key={c} to={`/components/${c}`} className="text-[10px] font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">{c}</Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
