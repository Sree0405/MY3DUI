import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useState } from "react";

export default function Contact() {
  usePageMeta({ title: "Contact", description: "Get in touch with the My3DUI team." });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4"><span className="text-gradient">Contact</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Have a question? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Mail, label: "Email", value: "sreekanth04052005@gmail.com" },
              { icon: Github, label: "GitHub", value: "github.com/sree0405" },
              {icon:Linkedin, label:"LinkedIn", value:"linkedin.com/in/sreekanth0405" }
            ].map((c) => (
              <div key={c.label} className="glass rounded-xl p-5 text-center">
                <c.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">{c.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.value}</div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="glass rounded-xl p-8 text-center border-glow">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="text-foreground font-bold text-lg">Message Sent!</h3>
              <p className="text-muted-foreground text-sm mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="glass rounded-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input required className="w-full px-4 py-2.5 rounded-lg bg-muted text-foreground text-sm border border-border/30 outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input required type="email" className="w-full px-4 py-2.5 rounded-lg bg-muted text-foreground text-sm border border-border/30 outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg bg-muted text-foreground text-sm border border-border/30 outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
