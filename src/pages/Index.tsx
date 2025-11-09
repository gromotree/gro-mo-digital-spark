import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import FestivalPopup from "@/components/FestivalPopup";
import Celebration from "@/components/Celebration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Celebration />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <FestivalPopup />
    </div>
  );
};

export default Index;
