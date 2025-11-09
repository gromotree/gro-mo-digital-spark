import { useState, useEffect, useRef } from "react";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Message = {
  text: string;
  sender: "bot" | "user";
};

const Chatbot = () => {
  const suggestedQuestions = [
    "How much does a basic website cost?",
    "Tell me about the e-commerce package",
    "How long does it take to build a site?",
    "Do you provide hosting?",
    "Can you integrate payments?",
    "Do you offer SEO services?",
    "Will the site be mobile-friendly?",
    "Can you update my existing website?",
    "Do you provide support after launch?",
    "Can I get a custom design?",
    "What's included in the basic package?",
    "Do you offer maintenance plans?",
    "How do I get started?",
    "Do you provide content creation?",
    "Can you migrate my store to your platform?",
    "What are the payment options?",
    "Do you build multilingual sites?",
    "Can I see examples of past work?",
    "Is there a refund policy?",
    "Do you help with domain registration?",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping("Hello! Welcome to GroMo! 👋 Which service are you interested in?");
    }
  }, [isOpen]);

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text, sender: "bot" }]);
      setIsTyping(false);
    }, 1000);
  };

  // Generic sender used both by manual input and quick-question buttons
  const sendUserMessage = (userMessage: string) => {
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInput("");

    // Bot responses based on keywords (same logic as before)
    const lowerInput = userMessage.toLowerCase();
    let botResponse = "";

    if (lowerInput.includes("website") || lowerInput.includes("basic")) {
      botResponse = "Great choice! Our Basic Website package is ₹699. It includes a professional design, mobile responsive layout, and contact form. Would you like to get started? 🚀";
    } else if (lowerInput.includes("ecommerce") || lowerInput.includes("e-commerce") || lowerInput.includes("shop")) {
      botResponse = "Excellent! Our E-Commerce Website is ₹1,999. You'll get product listings, shopping cart, payment integration, and order management. Ready to launch your online store? 🛒";
    } else if (lowerInput.includes("price") || lowerInput.includes("cost")) {
      botResponse = "Our pricing:\n📱 Basic Website - ₹699\n🛒 E-Commerce Website - ₹1,999\n\nWhich one suits your business needs?";
    } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone")) {
      botResponse = "You can reach us at:\n📧 gromolink@gmail.com\n📱 8438785779\n📷 @gromo_link on Instagram\n\nOr fill out our contact form!";
    } else if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
      botResponse = "Hello! 👋 How can I help you today? We offer:\n\n📱 Basic Website - ₹699\n🛒 E-Commerce - ₹1,999";
    } else {
      botResponse = "I'd be happy to help! We offer two main services:\n\n📱 Basic Website (₹699)\n🛒 E-Commerce Website (₹1,999)\n\nWhich one interests you, or do you have specific questions?";
    }

    simulateTyping(botResponse);
  };

  const handleSend = () => sendUserMessage(input);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:scale-110 transition-transform animate-fade-in"
        >
          <Bot className="w-8 h-8 text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl animate-fade-in flex flex-col border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-xl flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-bold">GroMo Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {/* Quick question chips */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendUserMessage(q)}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-card hover:bg-primary/10 transition-colors"
                    aria-label={`Ask: ${q}`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-background"
              />
              <Button onClick={handleSend} size="icon" className="bg-gradient-to-r from-primary to-secondary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
