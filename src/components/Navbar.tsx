import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gromoLogo from "@/assets/gromo.png";

// WhatsApp contact (kept consistent with WhatsAppButton)
const whatsappPhone = "918438785779"; // India format
const whatsappMessage = encodeURIComponent(
  "Welcome to GroMo! 🚀\n\nWhich type of service does your business need?\n\n📱 Basic Website - ₹699\n🛒 E-Commerce Website - ₹1,999\n\nLet us know and we'll help you grow your business online!"
);
const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }} className="flex items-center gap-3 group">
            <img src={gromoLogo} alt="GroMo Logo" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GroMo
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Button
                variant="default"
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Get Started
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-md border-2 border-white"
              >
                {/* WhatsApp SVG */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .05 5.32.05 11.95c0 2.11.55 4.18 1.6 6.02L0 24l6.32-1.6c1.78 1 3.74 1.53 5.68 1.53h.02c6.63 0 11.95-5.32 11.95-11.95 0-3.19-1.25-6.19-3.45-8.4zM12 21.7c-1.72 0-3.41-.47-4.86-1.36l-.35-.21-3.75.95.98-3.66-.23-.37A8.4 8.4 0 0 1 3.6 11.95c0-4.66 3.79-8.45 8.45-8.45 4.66 0 8.45 3.79 8.45 8.45 0 4.66-3.79 8.45-8.45 8.45z" />
                  <path d="M17.46 14.03c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.66.15-.2.3-.78.96-.96 1.16-.18.2-.36.22-.67.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.09-.18-.3-.02-.46.13-.61.13-.12.3-.3.45-.45.15-.15.2-.25.3-.42.1-.18.04-.34-.02-.48-.07-.15-.66-1.6-.9-2.18-.24-.57-.49-.45-.66-.46-.17 0-.36-.01-.55-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.12 2.87.14.2 1.93 2.95 4.68 4.02 3.25 1.26 3.25.84 3.84.79.59-.05 1.92-.78 2.19-1.53.27-.76.27-1.41.19-1.54-.07-.13-.26-.2-.55-.35z" />
                </svg>
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-secondary"
                onClick={() => scrollToSection("#contact")}
              >
                Get Started
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="mt-3 block text-center w-full py-2 rounded-md bg-[#25D366] text-white font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
