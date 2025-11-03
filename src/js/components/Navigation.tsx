import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Moon className="w-8 h-8 text-accent" />
          <span className="text-2xl font-serif font-bold gradient-text">Cafe de Lune</span>
        </div>

        <div className="hidden md:flex gap-6">
          {["home", "about", "menu", "contact"].map((section) => (
            <Button
              key={section}
              variant="ghost"
              onClick={() => scrollToSection(section)}
              className={`capitalize ${
                activeSection === section ? "text-accent" : "text-foreground"
              }`}
            >
              {section}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Reserve
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
