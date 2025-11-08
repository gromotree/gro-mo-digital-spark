import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Raj Kumar",
      business: "Tea Aroma Stall Owner",
      image: "☕",
      quote: "GroMo helped my tea stall get 50+ online orders in a week! The website is simple, beautiful, and my customers love it.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      business: "FitZone Gym Manager",
      image: "💪",
      quote: "My gym got a website for ₹699 — unbelievable quality! New memberships have increased by 40% since launch.",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      business: "Hotel Grand Palace",
      image: "🏨",
      quote: "Hotel bookings doubled after GroMo's site launch. The booking system is smooth and our guests find it very easy to use.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      business: "Spice Route Restaurant",
      image: "🍽️",
      quote: "The online ordering feature transformed our business. GroMo made it so affordable and easy to set up!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Real stories from real business owners who transformed their digital presence
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-gradient-to-br from-card to-background border-border hover:border-primary/50 transition-all">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              <div className="space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].business}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/50 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/50 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
