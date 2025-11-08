import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";

const FestivalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("festivalPopupSeen");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setIsVisible(true);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 },
          colors: ["#FFD700", "#FF6B6B", "#4ECDC4"],
        });
      }, 2000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("festivalPopupSeen", "true");
  };

  const handleClaim = () => {
    const phoneNumber = "918438785779";
    const message = encodeURIComponent(
      "🎉 Hi GroMo! I want to claim the Festival Special Offer!\n\n✨ 20% OFF on all services\n\nPlease help me get started!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <Card className="relative w-[90%] max-w-md border-2 border-primary shadow-2xl animate-scale-in bg-gradient-to-br from-background via-card to-background">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="w-5 h-5" />
        </Button>

        <CardContent className="p-8 text-center space-y-6">
          <div className="relative">
            <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              🎊 Festival Special! 🎊
            </h2>
            <p className="text-xl font-semibold text-foreground">
              Limited Time Offer
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">20% OFF</div>
            <p className="text-lg text-muted-foreground">On All Services</p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-foreground">
                ✅ Basic Website: <span className="line-through text-muted-foreground">₹699</span>{" "}
                <span className="font-bold text-primary">₹559</span>
              </p>
              <p className="text-foreground">
                ✅ E-Commerce: <span className="line-through text-muted-foreground">₹1,999</span>{" "}
                <span className="font-bold text-primary">₹1,599</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleClaim}
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              🎁 Claim Your Offer Now!
            </Button>
            <button
              onClick={handleClose}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Maybe later
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            ⏰ Offer valid for limited time only
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FestivalPopup;
