import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Blog() {
  usePageMeta({ title: "Blog", description: "News, tutorials, and engineering insights from the My3DUI team." });
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4"><span className="text-gradient">Blog</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Engineering insights, announcements, and tutorials.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {[...featured, ...rest].map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={`/blog/${post.slug}`} className="block glass rounded-xl p-6 group hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                  {post.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex gap-2">
                  {post.tags.map((t) => <span key={t} className="text-[10px] font-mono text-muted-foreground/60 bg-muted/50 px-1.5 py-0.5 rounded">{t}</span>)}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
