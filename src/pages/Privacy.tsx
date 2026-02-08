import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Privacy() {
  usePageMeta({ title: "Privacy Policy", description: "My3DUI privacy policy and data handling practices." });

  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p><strong className="text-foreground">Last updated:</strong> January 15, 2026</p>
            <section><h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2><p>My3DUI is an open-source library distributed via npm. We do not collect personal information through the library itself. Our website may collect analytics data to improve the documentation experience.</p></section>
            <section><h2 className="text-xl font-bold text-foreground mb-3">How We Use Information</h2><p>Any information collected through our website is used solely to improve documentation, understand usage patterns, and enhance the developer experience.</p></section>
            <section><h2 className="text-xl font-bold text-foreground mb-3">Open Source</h2><p>My3DUI is MIT licensed. The source code is publicly available and can be audited by anyone. We do not include telemetry or tracking in the library.</p></section>
            <section><h2 className="text-xl font-bold text-foreground mb-3">Contact</h2><p>If you have questions about this privacy policy, please contact us at privacy@my3dui.dev.</p></section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
