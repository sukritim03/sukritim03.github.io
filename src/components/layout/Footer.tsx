import { Link } from "react-router-dom";
import logo from "@/assets/klenzo-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="klenzo-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Klenzo" className="h-10 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's single-canopy solution for commercial cleaning. 
              Efficiency, Clarity, and Mirror-Shine Clean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  The Solution
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  B2B Catalog
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Customer Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-primary-foreground/80">Equipment Kits</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Basic Cleaning Kits</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Custom MOU</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                sales@klenzo.in
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                New Delhi, Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 Klenzo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-sm text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
