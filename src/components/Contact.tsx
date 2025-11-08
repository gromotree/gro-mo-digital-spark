import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gromolink@gmail.com",
      href: "mailto:gromolink@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@gromo_link",
      href: "https://instagram.com/gromo_link",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8438785779",
      href: "tel:8438785779",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Serving across India",
      href: "#location",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get in Touch{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              With GroMo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to take your business online? We're here to help you grow!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business..."
                      required
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <Card className="bg-card border-border overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14188.633883249733!2d79.1209823!3d10.754686900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1762595318359!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GroMo Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
