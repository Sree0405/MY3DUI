import { useState, useMemo } from "react";
import { componentRegistry, type ComponentDef } from "@/data/component-registry";
import { blogPosts, type BlogPost } from "@/data/blog-posts";
import { guidesIndex, type GuideEntry } from "@/data/docs-content";

export interface SearchResult {
  type: "component" | "blog" | "guide" | "page";
  title: string;
  description: string;
  href: string;
}

const staticPages: SearchResult[] = [
  { type: "page", title: "Documentation", description: "Guides and API references", href: "/docs" },
  { type: "page", title: "Getting Started", description: "Set up My3DUI in your project", href: "/docs/getting-started" },
  { type: "page", title: "Installation", description: "Install and configure My3DUI", href: "/docs/installation" },
  { type: "page", title: "Themes", description: "Theme gallery and customizer", href: "/themes" },
  { type: "page", title: "Playground", description: "Interactive component sandbox", href: "/playground" },
  { type: "page", title: "Changelog", description: "Version history", href: "/changelog" },
  { type: "page", title: "About", description: "About My3DUI", href: "/about" },
  { type: "page", title: "Contact", description: "Get in touch", href: "/contact" },
];

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const componentResults: SearchResult[] = componentRegistry
      .filter(
        (c: ComponentDef) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.includes(q))
      )
      .map((c) => ({
        type: "component" as const,
        title: c.name,
        description: c.description,
        href: `/components/${c.slug}`,
      }));

    const blogResults: SearchResult[] = blogPosts
      .filter(
        (p: BlogPost) =>
          p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      )
      .map((p) => ({
        type: "blog" as const,
        title: p.title,
        description: p.excerpt,
        href: `/blog/${p.slug}`,
      }));

    const guideResults: SearchResult[] = guidesIndex
      .filter(
        (g: GuideEntry) =>
          g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)
      )
      .map((g) => ({
        type: "guide" as const,
        title: g.title,
        description: g.description,
        href: `/docs/guides/${g.slug}`,
      }));

    const pageResults = staticPages.filter(
      (p) =>
        p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );

    return [...componentResults, ...guideResults, ...blogResults, ...pageResults].slice(0, 12);
  }, [query]);

  return { query, setQuery, results };
}
