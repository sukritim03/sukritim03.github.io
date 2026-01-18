import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Droplets, Check, ArrowRight, Package, ShieldCheck, Zap } from "lucide-react";

const kits = [
  {
    icon: Wrench,
    badge: "Hardware Bundle",
    title: "The 'New Site' Equipment Kit",
    tagline: "Everything you need to go from an empty shell to a sparkling facility in one shipment.",
    categories: [
      {
        name: "Industrial Mobility",
        items: ["1x Heavy-Duty Double-Bucket Mop Wringer Trolley"],
      },
      {
        name: "Surface Mastery",
        items: ["5x Microfiber Color-Coded Cloths (Lobby/Washroom/General)"],
      },
      {
        name: "The Essentials",
        items: [
          "2x Soft Lobby Brooms",
          "2x Dustpans",
          "1x Industrial Glass Wiper (12\")",
          "1x Heavy-Duty Plunger",
        ],
      },
      {
        name: "Safety First",
        items: ["2x 'Caution: Wet Floor' A-Frame Signs"],
      },
    ],
    whyChoose: "Eliminate the \"Quality Lottery.\" Every tool in this kit is selected for high-frequency B2B use. Stop wasting time sourcing brooms from one shop and trolleys from another—get it all under the Klenzo canopy.",
    color: "primary",
    href: "/shop?category=hardware",
    price: "₹8,499",
  },
  {
    icon: Droplets,
    badge: "Consumables Bundle",
    title: "The 'Basic Cleaning' Kit",
    tagline: "High-volume, microbe-annihilating essentials to keep your facility hygienic 24/7.",
    categories: [
      {
        name: "Floor & Surface",
        items: [
          "5L Klenzo Disinfectant Phenyl (Pine/Floral)",
          "5L Glass & Multipurpose Cleaner",
        ],
      },
      {
        name: "Hygiene Core",
        items: [
          "5L Liquid Handwash (Lemon)",
          "5L Toilet Bowl Deep-Cleaner",
        ],
      },
      {
        name: "Maintenance",
        items: [
          "1kg Urinal Cubes",
          "2x Room Freshener Sprays",
          "50x Heavy-Duty Garbage Liners",
        ],
      },
    ],
    whyChoose: "Our formulas are designed for high-traffic environments where \"standard\" retail products fail. With the Klenzo Consumables Kit, you ensure consistent fragrance and sanitization levels across your entire portfolio with one simple reorder.",
    color: "accent",
    href: "/shop?category=chemicals",
    price: "₹3,299",
  },
];

export function KlenzoKits() {
  return (
    <section className="py-24 bg-background">
      <div className="klenzo-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Package className="h-4 w-4" />
            <span className="text-sm font-medium">Premium Bundles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Klenzo Kits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated, professional-grade bundles designed for immediate site deployment
          </p>
        </motion.div>

        {/* Kits Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {kits.map((kit, index) => {
            const IconComponent = kit.icon;
            const isPrimary = kit.color === "primary";

            return (
              <motion.div
                key={kit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`relative bg-card rounded-2xl border-2 ${isPrimary ? 'border-primary/20 hover:border-primary/40' : 'border-accent/20 hover:border-accent/40'} transition-all duration-300 overflow-hidden h-full`}>
                  {/* Premium Badge */}
                  <div className={`absolute top-0 right-0 ${isPrimary ? 'bg-primary' : 'bg-accent'} text-white px-4 py-1 rounded-bl-lg text-xs font-semibold uppercase tracking-wide`}>
                    {kit.badge}
                  </div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'}`}>
                        <IconComponent className={`h-8 w-8 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                          {kit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {kit.tagline}
                        </p>
                      </div>
                    </div>

                    {/* What's Inside */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                        What's Inside:
                      </h4>
                      <div className="space-y-4">
                        {kit.categories.map((category) => (
                          <div key={category.name} className="bg-muted/50 rounded-lg p-4">
                            <h5 className={`text-sm font-semibold mb-2 ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                              {category.name}
                            </h5>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Choose */}
                    <div className={`rounded-lg p-4 mb-6 ${isPrimary ? 'bg-primary/5 border border-primary/10' : 'bg-accent/5 border border-accent/10'}`}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Zap className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                        Why Choose This Kit?
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {kit.whyChoose}
                      </p>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">Starting at</span>
                        <p className={`text-2xl font-bold ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                          {kit.price}
                        </p>
                      </div>
                      <Link to={kit.href}>
                        <Button 
                          variant={isPrimary ? "navy" : "cta"} 
                          className="group/btn"
                        >
                          View Kit
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              For enterprise clients like JLL and CBRE, we offer custom MOU agreements with preferential rate cards.
            </p>
            <Button variant="heroOutline" size="lg" className="border-white/30 hover:bg-white/10">
              Request Custom Rate Card
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
