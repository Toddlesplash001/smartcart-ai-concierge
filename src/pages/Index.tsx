import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import VoiceSection from "@/components/VoiceSection";
import CartSection from "@/components/CartSection";
import NavigationSection from "@/components/NavigationSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VoiceSection />
      <CartSection />
      <NavigationSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
