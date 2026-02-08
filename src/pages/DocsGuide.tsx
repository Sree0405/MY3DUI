import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { guideContent } from "@/data/docs-content";
import { usePageMeta } from "@/hooks/use-page-meta";
import CodeBlock from "@/components/shared/CodeBlock";

export default function DocsGuide() {
  const { slug } = useParams<{ slug: string }>();
  const page = guideContent[slug || ""];
  usePageMeta({ title: page?.title || "Guide", description: page?.description });

  if (!page) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-2">Guide not found</h1>
        <Link to="/docs/guides" className="text-primary hover:underline">← All Guides</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Link to="/docs/guides" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4" /> All Guides
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-2">{page.title}</h1>
      <p className="text-muted-foreground text-lg mb-8">{page.description}</p>
      <div className="space-y-10">
        {page.sections.map((s) => (
          <section key={s.id}>
            <h2 className="text-xl font-bold text-foreground mb-4">{s.title}</h2>
            <DocContent content={s.content} />
          </section>
        ))}
      </div>
    </motion.div>
  );
}

function DocContent({ content }: { content: string }) {
  const parts = content.split(/(```[\s\S]*?```)/g);
  return (
    <div className="space-y-4">
      {parts.map((part, i) => {
        if (part.startsWith("```")) {
          const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
          if (match) return <CodeBlock key={i} code={match[2].trim()} language={match[1] || "tsx"} />;
        }
        return part.trim() ? <p key={i} className="text-muted-foreground leading-relaxed text-sm">{part}</p> : null;
      })}
    </div>
  );
}
