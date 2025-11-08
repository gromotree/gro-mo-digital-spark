import { Building2, Coffee, Dumbbell, ShoppingBag, Smartphone, Store } from "lucide-react";

const About = () => {
  const services = [
    { icon: Coffee, label: "Tea Stalls" },
    { icon: Store, label: "Hotels" },
    { icon: Dumbbell, label: "Gyms" },
    { icon: ShoppingBag, label: "Restaurants" },
    { icon: Building2, label: "Salons" },
    { icon: Smartphone, label: "App Creators" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GroMo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            GroMo is your digital partner for small and local businesses. We create modern, affordable websites 
            and apps that boost your local presence and attract new customers — starting from just ₹699.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-center">{service.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/20 animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">₹699</div>
            <div className="text-xl font-semibold mb-4">Basic Website</div>
            <p className="text-muted-foreground">
              Perfect for small businesses looking to establish their online presence. Includes responsive design, 
              contact form, and basic SEO optimization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-accent/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-accent mb-2">₹1,999</div>
            <div className="text-xl font-semibold mb-4">E-Commerce Website</div>
            <p className="text-muted-foreground">
              Complete online store solution with product catalog, shopping cart, payment integration, 
              and order management system.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Serving businesses across India</span> — from tea stalls to tech startups
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
