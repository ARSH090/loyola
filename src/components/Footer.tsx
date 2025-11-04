import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import crestImage from "@/assets/loyola-crest.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admission" },
    { name: "Academics", path: "/academics" },
    { name: "Results", path: "/results" },
  ];

  const importantLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Alumni", path: "/alumni" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={crestImage} alt="Loyola School" className="h-12 w-12" />
              <div>
                <h3 className="font-heading font-bold text-xl">Loyola School</h3>
                <p className="text-sm text-primary-foreground/80 italic">Jamshedpur</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Excellence in education since 1949. Building character, nurturing minds.
            </p>
            <p className="font-serif italic text-accent text-sm">
              In Caritate et Justitia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Important</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Loyola School, Jamshedpur, Jharkhand, India</span>
              </li>
              <li>
                <a
                  href="tel:+916572231795"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91-657-2231795</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:loyolajsr@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  <span>loyolajsr@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

       {/* Bottom Bar */}
<div className="border-t border-primary-foreground/20 pt-8 mt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm text-primary-foreground/80">
      © {currentYear} Loyola School, Jamshedpur. All rights reserved. | Developed by{" "}
      <span className="text-accent font-semibold">Huzaifa Ahmad</span>
    </p>
    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/laajsr1984/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/80 hover:text-accent transition-smooth"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/80 hover:text-accent transition-smooth"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/80 hover:text-accent transition-smooth"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://www.youtube.com/@loyolaschooljamshedpurjhar4707/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/80 hover:text-accent transition-smooth"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
