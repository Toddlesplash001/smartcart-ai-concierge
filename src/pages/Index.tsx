import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import VoiceSection from "@/components/VoiceSection";
import CartSection from "@/components/CartSection";
import NavigationSection from "@/components/NavigationSection";
import ClosingSection from "@/components/ClosingSection";
import FutureEnhancements from "@/components/FutureEnhancements";

const Index = () => {
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleVoiceComplete = () => {
    setShowCart(true);
    // Optional: Scroll to CartSection smoothly
    setTimeout(() => {
      document.getElementById("cart-section")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VoiceSection onComplete={handleVoiceComplete} />
      {showCart && <div id="cart-section"><CartSection /></div>}
      <FutureEnhancements />
      <ClosingSection />
    </div>
  );
};

export default Index;
