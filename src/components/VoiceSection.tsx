import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VoiceSection = ({ onComplete }: { onComplete?: () => void }) => {
  const [isListening, setIsListening] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const userMessage = "I'm hosting a birthday party for 10 kids, budget $75";
  const aiResponse =
    "Perfect! I'll create a birthday party cart for 10 children within your $75 budget. Looking for decorations, snacks, and party supplies...";

  useEffect(() => {
    if (isListening) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < userMessage.length) {
          setCurrentText(userMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setIsListening(false);
            setShowResponse(true);
            if (onComplete) onComplete(); // ✅ Notify parent to show Cart
          }, 1000);
        }
      }, 100);
      return () => clearInterval(typing);
    }
  }, [isListening, onComplete]);

  const startDemo = () => {
    setCurrentText("");
    setShowResponse(false);
    setIsListening(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-walmart-blue bg-clip-text text-transparent">
              Voice Shopping
            </span>
            <br />
            Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Speak naturally. Our AI understands context, constraints, and
            preferences to build your perfect cart.
          </p>
        </div>

        {/* Centered mic interaction */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-80 h-96 bg-gradient-to-b from-muted/20 to-muted/10 rounded-3xl p-6 border border-border/50 shadow-2xl">
            <div className="w-full h-full bg-background rounded-2xl border border-border/30 overflow-hidden relative">
              {/* Status bar */}
              <div className="h-8 bg-muted/20 flex items-center justify-between px-4 text-xs text-muted-foreground">
                <span>9:41 AM</span>
                <span>●●●●●</span>
              </div>

              {/* App header */}
              <div className="p-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Volume2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">SmartCart Voice</span>
                </div>
              </div>

              {/* Voice interface */}
              <div className="p-6 flex flex-col items-center justify-center h-64">
                <Button
                  size="lg"
                  onClick={startDemo}
                  className={`w-20 h-20 rounded-full mb-6 transition-all duration-300 ${
                    isListening
                      ? "bg-destructive animate-pulse-glow"
                      : "bg-primary hover:bg-primary-glow"
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8" />
                  ) : (
                    <Mic className="w-8 h-8" />
                  )}
                </Button>

                {isListening && (
                  <div className="w-full">
                    <div className="flex justify-center mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-primary rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 20 + 10}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-center font-mono">
                      "{currentText}"<span className="animate-pulse">|</span>
                    </p>
                  </div>
                )}

                {showResponse && (
                  <div className="w-full animate-fade-in">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-primary">
                          AI Assistant
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {aiResponse}
                      </p>
                    </div>
                  </div>
                )}

                {!isListening && !showResponse && (
                  <p className="text-sm text-muted-foreground text-center">
                    Hold to speak
                  </p>
                )}
              </div>
            </div>

            {/* Floating mic waves */}
            {isListening && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border-2 border-primary/30 rounded-full animate-ping"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: "1.5s",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;
