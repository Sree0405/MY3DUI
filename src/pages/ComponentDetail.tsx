import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Tag } from "lucide-react";
import { getComponentBySlug, categoryLabels, categoryColors } from "@/data/component-registry";
import { usePageMeta } from "@/hooks/use-page-meta";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/shared/CodeBlock";
import LivePreview from "@/components/docs/LivePreview";

export default function ComponentDetail() {
  const { name } = useParams<{ name: string }>();
  const comp = getComponentBySlug(name || "");

  usePageMeta({
    title: comp?.name || "Component",
    description: comp?.description,
  });
  console.log(comp)

  if (!comp) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Component not found</h1>
          <Link to="/components" className="text-primary hover:underline">← Back to Components</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/components" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Components
          </Link>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{comp.name}</h1>
              <p className="text-muted-foreground text-lg">{comp.description}</p>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${categoryColors[comp.category]}`}>
              {categoryLabels[comp.category]}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {comp.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-lg">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{comp.longDescription}</p>
          </section>

          {/* Live Demo Placeholder */}
          {comp.hasLiveDemo && (
            <LivePreview slug={comp.slug} />

          )}

          {/* Props Table */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Props</h2>
            <PropsTable props={comp.props} />
          </section>

          {/* Code Examples */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Examples</h2>
            <div className="space-y-4">
              {comp.codeExamples.map((ex) => (
                <CodeBlock key={ex.title} code={ex.code} title={ex.title} />
              ))}
            </div>
          </section>

          {/* Performance Notes */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Performance</h2>
            <div className="glass rounded-xl p-5 border-glow">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">{comp.performanceNotes}</p>
              </div>
            </div>
          </section>

          {/* Related Components */}
          {comp.relatedComponents.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Related Components</h2>
              <div className="flex flex-wrap gap-2">
                {comp.relatedComponents.map((slug) => (
                  <Link
                    key={slug}
                    to={`/components/${slug}`}
                    className="glass px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    {slug}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
}
