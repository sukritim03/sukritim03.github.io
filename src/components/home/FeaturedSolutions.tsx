import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Droplets, ArrowRight, Package } from "lucide-react";

const solutions = [
  {
    icon: Wrench,
    title: "Klenzo Equipment Kits",
    subtitle: "Industrial Hardware",
    description: "Professional-grade floor scrubbers, vacuum cleaners, pressure washers, and maintenance tools. Built for commercial facilities.",
    features: ["Floor Scrubbers", "Industrial Vacuums", "Pressure Washers", "Maintenance Tools"],
    color: "primary",
    href: "/shop?category=hardware",
  },
  {
    icon: Droplets,
    title: "Klenzo Basic Cleaning Kits",
    subtitle: "Consumables",
    description: "High-quality phenyl, glass cleaners, detergents, and disinfectants. Microbe-annihilating formulas for pristine results.",
    features: ["Phenyl & Disinfectants", "Glass Cleaners", "Industrial Detergents", "Surface Sanitizers"],
    color: "accent",
    href: "/shop?category=chemicals",
  },
];

export function FeaturedSolutions() {
  return (
    <section className="py-24 bg-background">
      <div className="klenzo-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Package className="h-4 w-4" />
            <span className="text-sm font-medium">Curated Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need, <span className="text-accent">Simplified</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From heavy-duty equipment to everyday consumables, our curated kits cover every cleaning need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isPrimary = solution.color === "primary";
            
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`klenzo-card h-full p-8 ${isPrimary ? 'hover:border-primary/30' : 'hover:border-accent/30'} transition-all duration-300`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <IconComponent className={`h-8 w-8 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  
                  <span className={`text-sm font-medium ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                    {solution.subtitle}
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isPrimary ? 'bg-primary' : 'bg-accent'}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={solution.href}>
                    <Button 
                      variant={isPrimary ? "navy" : "cta"} 
                      className="group/btn w-full"
                    >
                      Explore {solution.subtitle}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              For enterprise clients like JLL and CBRE, we offer custom MOU agreements with preferential rate cards.
            </p>
            <Button variant="cta" size="lg">
              Request Custom Rate Card
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
