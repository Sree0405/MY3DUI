import { motion } from "framer-motion";
import { installationPage } from "@/data/docs-content";
import { usePageMeta } from "@/hooks/use-page-meta";
import CodeBlock from "@/components/shared/CodeBlock";

export default function DocsInstallation() {
  const page = installationPage;
  usePageMeta({ title: page.title, description: page.description });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl font-bold text-foreground mb-2">{page.title}</h1>
      <p className="text-muted-foreground text-lg mb-8">{page.description}</p>

      <div className="space-y-10">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
            <DocContent content={section.content} />
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
          if (match) return <CodeBlock key={i} code={match[2].trim()} language={match[1] || "bash"} />;
        }
        return part.trim() ? (
          <div key={i} className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
            {part}
          </div>
        ) : null;
      })}
    </div>
  );
}
