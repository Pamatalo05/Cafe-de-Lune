import { Coffee, Moon, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Artisan Roasted",
      description: "Every bean carefully selected and roasted to perfection",
    },
    {
      icon: Moon,
      title: "Moonlit Ambiance",
      description: "A sophisticated atmosphere perfect for any time of day",
    },
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Each cup is a masterpiece created by our expert baristas",
    },
  ];

  return (
    <section id="about" className="section-container bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          Our <span className="gradient-text">Story</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Born from a passion for exceptional coffee and inspired by the serene beauty of moonlight,
          Cafe de Lune brings together tradition and innovation in every cup.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">The Cafe de Lune Experience</h3>
            <p className="text-muted-foreground mb-4">
              Step into our world where every detail is designed to transport you to a place of
              tranquility and indulgence. From our carefully curated beans sourced from the finest
              farms around the world to our signature brewing methods, we ensure every visit is
              memorable.
            </p>
            <p className="text-muted-foreground">
              Whether you're seeking a quiet corner for work, a cozy spot for conversation, or
              simply the perfect cup of coffee, Cafe de Lune welcomes you under our moonlit canopy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Coffee Varieties</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">5★</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Organic Beans</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Open Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
