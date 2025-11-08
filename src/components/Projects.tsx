import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Tea Aroma Stall",
      subtitle: "Local Café Website",
      description: "A beautiful website showcasing menu items, location, and online ordering capabilities.",
      gradient: "from-amber-500/20 to-orange-500/20",
      borderGradient: "from-amber-500/50 to-orange-500/50",
    },
    {
      title: "Hotel Grand Palace",
      subtitle: "Booking Page Design",
      description: "Elegant hotel website with room booking system, gallery, and customer reviews.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
    },
    {
      title: "FitZone Gym",
      subtitle: "Fitness Website",
      description: "Dynamic gym website featuring membership plans, trainer profiles, and class schedules.",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/50 to-emerald-500/50",
    },
    {
      title: "Spice Route Restaurant",
      subtitle: "Restaurant Website",
      description: "Mouthwatering restaurant site with online menu, table reservations, and food delivery.",
      gradient: "from-red-500/20 to-pink-500/20",
      borderGradient: "from-red-500/50 to-pink-500/50",
    },
    {
      title: "Glam Studio Salon",
      subtitle: "Beauty Salon Website",
      description: "Stylish salon website with service catalog, appointment booking, and before/after gallery.",
      gradient: "from-purple-500/20 to-fuchsia-500/20",
      borderGradient: "from-purple-500/50 to-fuchsia-500/50",
    },
    {
      title: "GroMo Local Delivery",
      subtitle: "Mobile App UI",
      description: "User-friendly delivery app connecting local vendors with customers in their area.",
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderGradient: "from-indigo-500/50 to-violet-500/50",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover how we've helped local businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              
              <CardContent className="relative p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
