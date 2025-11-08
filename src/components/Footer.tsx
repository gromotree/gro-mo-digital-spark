import { Mail, Instagram, Phone } from "lucide-react";
import gromoLogo from "@/assets/gromo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:gromolink@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://instagram.com/gromo_link", label: "Instagram" },
    { icon: Phone, href: "tel:8438785779", label: "Phone" },
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-card to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={gromoLogo} alt="GroMo Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GroMo
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Bringing local businesses online with affordable, professional websites and apps. 
              Empowering entrepreneurs across India to grow their digital presence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>gromolink@gmail.com</li>
              <li>@gromo_link</li>
              <li>8438785779</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} GroMo. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  );
};

export default Footer;
