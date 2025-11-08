import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Affordable Digital Solutions for Local Businesses</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Bring Your Local Business{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Online
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From local tea shops to fitness gyms — GroMo helps you grow with stunning websites and apps.
            <span className="block mt-2 text-primary font-semibold">Starting at just ₹699!</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white group">
              Create My Website
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Pricing
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Projects Done", value: "1000+" },
              { label: "Starting Price", value: "₹699" },
              { label: "Success Rate", value: "99%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
