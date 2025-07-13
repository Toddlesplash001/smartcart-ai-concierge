import { useState } from "react";
import { ShoppingCart, Heart, Star, Zap, DollarSign, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CartSection = () => {
  const [cartTotal, setCartTotal] = useState(72.50);
  
  const cartItems = [
    {
      id: 1,
      name: "Colorful Balloons Pack",
      price: 12.99,
      originalPrice: 15.99,
      category: "Decorations",
      image: "🎈",
      savings: 3.00,
      aiReason: "Perfect for 10 kids - includes 50 balloons"
    },
    {
      id: 2,
      name: "Birthday Cupcake Mix",
      price: 8.50,
      category: "Food & Treats",
      image: "🧁",
      aiReason: "Easy to make, serves exactly 12"
    },
    {
      id: 3,
      name: "Juice Boxes Variety Pack",
      price: 11.99,
      originalPrice: 13.99,
      category: "Beverages",
      image: "🧃",
      savings: 2.00,
      aiReason: "Based on previous purchases"
    },
    {
      id: 4,
      name: "Paper Plates & Cups Set",
      price: 9.99,
      category: "Tableware",
      image: "🥤",
      aiReason: "Matches balloon colors"
    },
    {
      id: 5,
      name: "Party Favor Bags",
      price: 14.99,
      originalPrice: 18.99,
      category: "Favors",
      image: "🎁",
      savings: 4.00,
      aiReason: "Bundle deal - save $4.00"
    },
    {
      id: 6,
      name: "Birthday Candles",
      price: 4.99,
      category: "Decorations",
      image: "🕯️",
      aiReason: "Don't forget the candles!"
    },
    {
      id: 7,
      name: "Party Streamers",
      price: 6.99,
      category: "Decorations",
      image: "🎊",
      aiReason: "Completes the decoration set"
    },
    {
      id: 8,
      name: "Plastic Forks & Spoons",
      price: 3.05,
      category: "Tableware",
      image: "🍴",
      aiReason: "Added automatically for convenience"
    }
  ];

  const totalSavings = cartItems.reduce((sum, item) => sum + (item.savings || 0), 0);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-walmart-blue to-primary-glow bg-clip-text text-transparent">
              Your Smart Cart
            </span>
            <br />Built Instantly
          </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Personalized recommendations, smart bundles, and real-time pricing to maximize your savings.
        </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Cart summary */}
          <div className="mb-8 animate-fade-in">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-walmart-blue/10 border border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Birthday Party Cart</h3>
                    <p className="text-muted-foreground">8 items • Perfect for 10 kids</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-3xl font-bold">${cartTotal.toFixed(2)}</p>
                    <p className="text-sm text-green-500 font-medium">
                      You saved ${totalSavings.toFixed(2)}!
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="text-lg font-semibold">$75.00</p>
                    <Badge variant="secondary" className="text-xs">
                      ${(75 - cartTotal).toFixed(2)} under budget
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* AI insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-4 bg-walmart-blue/10 border border-walmart-blue/20">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-walmart-blue" />
                <div>
                  <p className="font-semibold text-sm">Smart Bundles</p>
                  <p className="text-xs text-muted-foreground">3 bundle deals applied</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-walmart-yellow/10 border border-walmart-yellow/20">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-walmart-yellow" />
                <div>
                  <p className="font-semibold text-sm">Personalized</p>
                  <p className="text-xs text-muted-foreground">Based on your history</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-semibold text-sm">Best Prices</p>
                  <p className="text-xs text-muted-foreground">Compared 3 stores</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Cart items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {cartItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{item.image}</div>
                  <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {item.savings && (
                    <div className="text-xs text-green-500 font-medium">
                      Save ${item.savings.toFixed(2)}
                    </div>
                  )}
                  
                  <div className="bg-muted/20 rounded-lg p-2 border-l-2 border-primary/30">
                    <div className="flex items-start gap-2">
                      <Star className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        {item.aiReason}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional AI suggestions */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="p-6 bg-gradient-to-r from-walmart-orange/10 to-walmart-yellow/10 border border-walmart-orange/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-walmart-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">AI Suggestions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Consider adding ice cream for $6.99 (still under budget)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Store pickup available in 2 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-walmart-blue rounded-full"></span>
                      <span>Free delivery if you add $2.50 more</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-walmart-yellow rounded-full"></span>
                      <span>Party hats available nearby for $4.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;