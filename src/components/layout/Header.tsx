import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/klenzo-logo.png";

// CSS filter to make logo white/light when on dark backgrounds
const lightLogoStyle = {
  filter: "brightness(0) invert(1)",
  transition: "filter 0.3s ease",
};

const normalLogoStyle = {
  filter: "none",
  transition: "filter 0.3s ease",
};

const navLinks = [
  { name: "The Solution", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Portal", href: "/portal" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-klenzo"
          : "bg-transparent"
      }`}
    >
      <div className="klenzo-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Light version when at top (on hero), normal when scrolled */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Klenzo" 
              className="h-10 w-auto"
              style={!isScrolled && location.pathname === "/" ? lightLogoStyle : normalLogoStyle}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? isScrolled ? "text-accent" : "text-white"
                      : isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/portal">
              <Button 
                variant="ghost" 
                size="icon"
                className={!isScrolled && location.pathname === "/" ? "text-white hover:text-white hover:bg-white/10" : ""}
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative ${!isScrolled && location.pathname === "/" ? "text-white hover:text-white hover:bg-white/10" : ""}`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  0
                </span>
              </Button>
            </Link>
            <Button variant={!isScrolled && location.pathname === "/" ? "heroOutline" : "cta"} size="sm">
              Request Sample Kit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${!isScrolled && location.pathname === "/" ? "text-white" : "text-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${!isScrolled && location.pathname === "/" ? "text-white" : "text-foreground"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="klenzo-container py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="cta" className="w-full">
                  Request Sample Kit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
