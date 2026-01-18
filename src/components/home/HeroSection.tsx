import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional cleaning facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative klenzo-container py-32 pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">India's #1 B2B Cleaning Solutions Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            ONE PARTNER.{" "}
            <span className="klenzo-gradient-text">ONE BRAND.</span>{" "}
            ONE STANDARD OF CLEAN.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Eliminating the administrative nightmare of cleaning supply chains for India's facility managers. 
            Consolidate chemicals, hardware, and equipment into curated kits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Request a Sample Kit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/shop">
              <Button variant="heroOutline" size="xl">
                View B2B Catalog
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <p className="text-sm text-primary-foreground/60 mb-4">Trusted by India's leading facility management companies</p>
            <div className="flex flex-wrap items-center gap-8">
              <span className="text-primary-foreground/40 font-semibold text-lg">JLL</span>
              <span className="text-primary-foreground/40 font-semibold text-lg">CBRE</span>
              <span className="text-primary-foreground/40 font-semibold text-lg">Cushman & Wakefield</span>
              <span className="text-primary-foreground/40 font-semibold text-lg">Sodexo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
