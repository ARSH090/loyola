import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import crestImage from "@/assets/loyola-crest.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "School", path: "/school" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+916572231795" className="flex items-center gap-2 hover:text-accent transition-smooth">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91-657-2231795</span>
            </a>
            <a href="mailto:loyolajsr@gmail.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">loyolajsr@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="text-xs">
              Parent Login
            </Button>
            <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs">
              Download App
            </Button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={crestImage} alt="Loyola School Crest" className="h-14 w-14 transition-transform group-hover:scale-105" />
            <div>
              <h1 className="font-heading font-bold text-xl text-primary">Loyola School</h1>
              <p className="text-xs text-muted-foreground italic">Jamshedpur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
