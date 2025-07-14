import { Bot, Mic, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-walmart-yellow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-walmart-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo and brand */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20">
            <Bot className="w-12 h-12 text-primary animate-pulse-glow" />
            <div className="text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                SmartCart
              </h1>
              <p className="text-sm text-muted-foreground">AI Shopping Concierge</p>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Just Say It.
            <br />
            <span className="bg-gradient-to-r from-walmart-blue via-primary-glow to-walmart-yellow bg-clip-text text-transparent">
              We'll Fetch It.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us what you need, and our AI will build your perfect cart, 
            find the best deals, and guide you through the store.
          </p>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <Mic className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Voice Shopping</h3>
            <p className="text-sm text-muted-foreground">Natural conversation turns into instant carts</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-8 h-8 text-walmart-yellow mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">AI Recommendations</h3>
            <p className="text-sm text-muted-foreground">Personalized suggestions based on your needs</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <ShoppingCart className="w-8 h-8 text-walmart-orange mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Smart Navigation</h3>
            <p className="text-sm text-muted-foreground">Guide you aisle-by-aisle in-store</p>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Now
          </Button>
        </div> */}
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;