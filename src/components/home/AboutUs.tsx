import { motion } from "framer-motion";
import { FileText, Award, Headphones } from "lucide-react";

const promises = [
  {
    icon: FileText,
    title: "One Invoice",
    description: "No more reconciling multiple vendors.",
  },
  {
    icon: Award,
    title: "One Standard",
    description: 'The "Klenzo Label" is your guarantee of industrial-strength quality.',
  },
  {
    icon: Headphones,
    title: "Zero Headache",
    description: "Curated kits designed for immediate site deployment.",
  },
];

export function AboutUs() {
  return (
    <section className="py-24 bg-muted">
      <div className="klenzo-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              The Klenzo Story
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-8">
            From Supply Chain Chaos to a{" "}
            <span className="text-accent">Single Canopy of Clean</span>
          </h2>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 mb-8 border border-border"
          >
            <h3 className="font-display text-xl font-bold text-primary mb-4">
              The Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              In an industry where facility managers are forced to juggle 5+ vendors just to keep a floor clean, 
              Klenzo was born to simplify. We realized that "clean" isn't just about the chemicals—it's about 
              the efficiency of the supply chain behind them.
            </p>
          </motion.div>

          {/* Brand & Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-primary-foreground rounded-2xl p-8 mb-8"
          >
            <h3 className="font-display text-xl font-bold mb-4">
              A Brand and Distribution Powerhouse
            </h3>
            <p className="leading-relaxed opacity-90">
              We don't just sell products; we curate professional-grade sanitation ecosystems. By partnering 
              with elite contract manufacturers and consolidating hardware, equipment, and microbe-annihilating 
              chemicals under one brand, we provide the ultimate "Single Partner" experience.
            </p>
          </motion.div>

          {/* Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Our Promise
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {promises.map((promise, index) => {
                const IconComponent = promise.icon;
                return (
                  <motion.div
                    key={promise.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-card rounded-xl p-6 text-center border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-7 w-7 text-accent" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">
                      {promise.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {promise.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
