import { Bot, Github, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ClosingSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-walmart-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-walmart-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main logo and branding */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Bot className="w-16 h-16 text-primary animate-pulse-glow" />
              <div className="text-left">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  SmartCart
                </h1>
                <p className="text-lg text-muted-foreground">AI Shopping Concierge</p>
              </div>
            </div>
          </div>

          {/* Main tagline */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-walmart-blue via-primary-glow to-walmart-yellow bg-clip-text text-transparent">
                Personalized.
              </span>
              <br />
              <span className="bg-gradient-to-r from-walmart-yellow via-walmart-orange to-primary bg-clip-text text-transparent">
                Frictionless.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-walmart-blue bg-clip-text text-transparent">
                Revolutionary.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of shopping is here. Voice-powered, AI-driven, and designed to understand exactly what you need.
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">Faster Shopping</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-walmart-blue mb-2">85%</div>
              <p className="text-muted-foreground">User Satisfaction</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-walmart-orange mb-2">$9</div>
              <p className="text-muted-foreground">Average Savings</p>
            </Card>
          </div>

          {/* Customer testimonials */}
          

          {/* Company info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          </div>

          {/* Final CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">Start Shopping Smarter</h3>
              <p className="text-lg text-muted-foreground">
                Download SmartCart and transform your shopping experience today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-walmart-blue hover:from-primary-glow hover:to-primary shadow-lg">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Company footer */}
          <div className="mt-16 pt-8 border-t border-border/30 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-sm text-muted-foreground">
              © 2025 <span className="font-semibold text-walmart-blue">SmartCart Technologies</span>. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Powered by advanced AI and machine learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;