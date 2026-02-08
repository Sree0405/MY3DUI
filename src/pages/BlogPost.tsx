import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPost } from "@/data/blog-posts";
import { usePageMeta } from "@/hooks/use-page-meta";
import CodeBlock from "@/components/shared/CodeBlock";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");
  usePageMeta({ title: post?.title || "Blog Post", description: post?.excerpt });

  if (!post) {
    return <div className="pt-16 min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-foreground mb-2">Post not found</h1><Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link></div></div>;
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
          <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
          <BlogContent content={post.content} />
        </motion.div>
      </div>
    </div>
  );
}

function BlogContent({ content }: { content: string }) {
  const parts = content.split(/(```[\s\S]*?```)/g);
  return (
    <div className="prose-custom space-y-4">
      {parts.map((part, i) => {
        if (part.startsWith("```")) {
          const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
          if (match) return <CodeBlock key={i} code={match[2].trim()} language={match[1] || "bash"} />;
        }
        return part.trim() ? (
          <div key={i} className="text-muted-foreground leading-relaxed text-sm">
            {part.split("\n").map((line, li) => {
              if (line.startsWith("## ")) return <h2 key={li} className="text-xl font-bold text-foreground mt-8 mb-3">{line.slice(3)}</h2>;
              if (line.startsWith("- ")) return <li key={li} className="ml-4 list-disc">{line.slice(2)}</li>;
              if (line.startsWith("**") && line.endsWith("**")) return <p key={li} className="font-semibold text-foreground">{line.slice(2, -2)}</p>;
              return line.trim() ? <p key={li}>{line}</p> : <br key={li} />;
            })}
          </div>
        ) : null;
      })}
    </div>
  );
}
