import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Clock, FileText, Truck, ArrowRight } from "lucide-react";

const chaosItems = [
  { icon: Truck, text: "5+ different vendors" },
  { icon: FileText, text: "Multiple invoices monthly" },
  { icon: Clock, text: "Delayed deliveries" },
  { icon: AlertTriangle, text: "Quality inconsistency" },
];

const clarityItems = [
  { text: "Single vendor relationship" },
  { text: "One consolidated invoice" },
  { text: "Scheduled deliveries" },
  { text: "Consistent quality guaranteed" },
];

export function ChaosToClarity() {
  return (
    <section className="py-24 bg-muted">
      <div className="klenzo-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From <span className="text-destructive">Chaos</span> to{" "}
            <span className="text-accent">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Klenzo transforms the way facility managers source their cleaning supplies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Chaos Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-8 border-2 border-destructive/30 shadow-klenzo-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium">
                Before Klenzo
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 mt-4">
                The Vendor Nightmare
              </h3>
              <div className="space-y-4">
                {chaosItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-destructive/5 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              {/* Messy lines decoration */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-destructive/20 rounded-full opacity-50" />
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-destructive/20 rounded-full opacity-30" />
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-accent text-accent-foreground p-3 rounded-full shadow-klenzo-glow">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          {/* Clarity Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-8 border-2 border-accent/30 shadow-klenzo-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                With Klenzo
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 mt-4">
                The Single-Canopy Solution
              </h3>
              <div className="space-y-4">
                {clarityItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-accent/5 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              {/* Clean circle decoration */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
