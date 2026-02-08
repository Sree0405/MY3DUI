import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GitBranch, FileText, Bug, Heart } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import CodeBlock from "@/components/shared/CodeBlock";

export default function Contributing() {
  usePageMeta({ title: "Contributing", description: "How to contribute to the My3DUI open-source project." });

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4"><span className="text-gradient">Contributing</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">My3DUI is built by the community, for the community.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl space-y-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Bug, title: "Report Bugs", desc: "Found an issue? Open a GitHub issue with reproduction steps." },
              { icon: GitBranch, title: "Submit PRs", desc: "Fork, branch, code, test, and open a pull request." },
              { icon: FileText, title: "Improve Docs", desc: "Documentation fixes and improvements are always welcome." },
              { icon: Heart, title: "Spread the Word", desc: "Star us on GitHub, share with your team, write about us." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-5">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Start</h2>
            <CodeBlock code={`# Fork and clone the repo\ngit clone https://github.com/Sree0405/MY3DUI.git\ncd my3dui\n\n# Install dependencies\npnpm install\n\n# Start development\npnpm dev\n\n# Run tests\npnpm test\n\n# Submit your changes\ngit checkout -b feature/my-feature\ngit commit -m "feat: add my feature"\ngit push origin feature/my-feature`} language="bash" title="Development Setup" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Code of Conduct</h2>
            <div className="glass rounded-xl p-6 text-sm text-muted-foreground leading-relaxed">
              <p>We are committed to providing a welcoming and inclusive experience for everyone. We expect all participants to adhere to our Code of Conduct, which promotes respectful and constructive communication. Harassment, discrimination, and disruptive behavior will not be tolerated.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
