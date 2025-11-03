import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center section-container">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in">
          Cafe de <span className="gradient-text">Lune</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Where artisan coffee meets moonlit elegance
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border-accent text-accent hover:bg-accent/10 text-lg px-8"
          >
            Our Story
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
