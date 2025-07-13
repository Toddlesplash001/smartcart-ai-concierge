import { useState } from "react";
import { Navigation, MapPin, CheckCircle, Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import arNavigation from "@/assets/ar-navigation.jpg";

const NavigationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const navigationSteps = [
    {
      aisle: "Aisle 7",
      section: "Party Supplies",
      items: ["Balloons", "Streamers", "Candles"],
      status: "current",
      time: "2 min",
      icon: "🎈"
    },
    {
      aisle: "Aisle 12",
      section: "Beverages",
      items: ["Juice Boxes"],
      status: "next",
      time: "1 min",
      icon: "🧃"
    },
    {
      aisle: "Aisle 15",
      section: "Baking",
      items: ["Cupcake Mix"],
      status: "pending",
      time: "2 min",
      icon: "🧁"
    },
    {
      aisle: "Aisle 3",
      section: "Paper Products",
      items: ["Plates", "Cups", "Utensils"],
      status: "pending",
      time: "3 min",
      icon: "🥤"
    }
  ];

  const storeFeatures = [
    {
      title: "AR Path Finding",
      description: "Follow the floating arrows to your next item",
      icon: Navigation,
      color: "primary"
    },
    {
      title: "Real-time Inventory",
      description: "Check stock levels before you walk",
      icon: CheckCircle,
      color: "green-500"
    },
    {
      title: "Smart Routing",
      description: "Optimized path saves you 40% walking time",
      icon: Zap,
      color: "walmart-yellow"
    },
    {
      title: "Live Updates",
      description: "Cart updates automatically as you shop",
      icon: Clock,
      color: "walmart-blue"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-walmart-orange bg-clip-text text-transparent">
              Navigate Like Magic
            </span>
            <br />In-Store Experience
          </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          AR-powered navigation guides you through the store with optimized routes and real-time inventory updates.
        </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Store features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
            {storeFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-${feature.color}/20`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone mockup with AR */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-muted/20 to-muted/10 rounded-3xl p-6 border border-border/50 shadow-2xl">
                <div className="w-full h-full bg-background rounded-2xl border border-border/30 overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-8 bg-muted/20 flex items-center justify-between px-4 text-xs text-muted-foreground">
                    <span>9:41 AM</span>
                    <span>AR Mode</span>
                    <span>●●●●●</span>
                  </div>
                  
                  {/* AR View */}
                  <div className="relative h-80 bg-gradient-to-b from-blue-900/20 to-blue-800/10 overflow-hidden">
                    <img 
                      src={arNavigation} 
                      alt="AR Navigation"
                      className="w-full h-full object-cover opacity-80"
                    />
                    
                    {/* AR Overlays */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 border border-primary/50">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary-foreground animate-pulse" />
                          <span className="text-primary-foreground font-semibold text-sm">
                            Aisle 7 - 50 feet ahead
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl mb-2 animate-bounce">🎈</div>
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-border/50">
                          <p className="text-xs font-medium">Party Supplies</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating direction arrows */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {[...Array(3)].map((_, i) => (
                        <ArrowRight
                          key={i}
                          className="absolute text-primary w-6 h-6 animate-pulse"
                          style={{
                            left: `${i * 30}px`,
                            animationDelay: `${i * 0.2}s`,
                            opacity: 1 - (i * 0.3)
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Navigation steps */}
                  <div className="p-4 space-y-3 h-52 overflow-y-auto">
                    <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Shopping Route
                    </h3>
                    
                    {navigationSteps.map((step, index) => (
                      <div 
                        key={step.aisle}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                          index === 0 
                            ? 'bg-primary/10 border-primary/30' 
                            : 'bg-muted/20 border-border/30'
                        }`}
                      >
                        <div className="text-lg">{step.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-xs">{step.aisle}</p>
                            <Badge 
                              variant={index === 0 ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {step.time}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{step.section}</p>
                          <p className="text-xs text-muted-foreground">
                            {step.items.join(", ")}
                          </p>
                        </div>
                        {index === 0 && (
                          <CheckCircle className="w-4 h-4 text-green-500 animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-walmart-yellow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Features list */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs flex items-center justify-center">1</span>
                  AR Pathfinding
                </h3>
                <p className="text-muted-foreground mb-4">
                  See floating arrows and directions overlaid on your camera view. Never get lost in the store again.
                </p>
                <div className="bg-muted/20 rounded-lg p-3 border-l-4 border-primary">
                  <p className="text-sm">
                    40% faster shopping with optimized routes
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">2</span>
                  Real-Time Updates
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your cart updates automatically as you pick up items. Get notified of better deals or out-of-stock alternatives.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Items Collected:</span>
                    <span className="font-medium">3 of 8</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Time:</span>
                    <span className="font-medium">8 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Current Total:</span>
                    <span className="font-medium">$72.50</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-walmart-orange rounded-full text-white text-xs flex items-center justify-center">3</span>
                  Smart Checkout
                </h3>
                <p className="text-muted-foreground mb-4">
                  Skip the lines with Scan & Go or get directed to the fastest checkout lane.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">Scan & Go Ready</Badge>
                  <Badge variant="secondary" className="text-xs">Lane 3 - No Wait</Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-walmart-blue/10 border border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
              <p className="text-muted-foreground mb-6">
                Join the shopping revolution. Your personal AI concierge is waiting.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-walmart-blue hover:from-primary-glow hover:to-primary">
                Download SmartCart App
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;