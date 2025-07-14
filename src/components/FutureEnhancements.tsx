import NavigationSection from "@/components/NavigationSection";

export default function FutureEnhancementNotice() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-background to-muted/10 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Coming Soon</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Our in-store AR navigation experience is under development. Stay tuned
        to shop faster and smarter!
      </p>
      <div className="w-full max-w-4xl">
        <NavigationSection />
      </div>
    </section>
  );
}
