import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "918438785779"; // India format
  const message = encodeURIComponent(
    "Welcome to GroMo! 🚀\n\nWhich type of service does your business need?\n\n📱 Basic Website - ₹699\n🛒 E-Commerce Website - ₹1,999\n\nLet us know and we'll help you grow your business online!"
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
