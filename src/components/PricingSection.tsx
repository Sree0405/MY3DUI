import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Community",
    price: "Free",
    description: "For personal projects and learning",
    features: [
      "All core components",
      "MIT License",
      "Community support",
      "Basic themes",
      "GitHub access",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For teams building products",
    features: [
      "Everything in Community",
      "Advanced shaders",
      "Premium themes",
      "Priority support",
      "Cloud sync",
      "Private plugins",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations at scale",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom components",
      "SLA guarantee",
      "On-premise option",
      "Training & workshops",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free. Scale when you need to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "glass glow-primary border-primary/30"
                  : "glass"
              }`}
            >
              <h3 className="text-foreground font-semibold text-lg">{tier.name}</h3>
              <div className="mt-4 mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass border-glow text-foreground hover:border-primary/40"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
