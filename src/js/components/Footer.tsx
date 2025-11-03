import { Moon, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-8 h-8 text-accent" />
                <span className="text-2xl font-serif font-bold gradient-text">Cafe de Lune</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Where artisan coffee meets moonlit elegance. Experience the finest specialty coffee
                in a sophisticated atmosphere.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-muted-foreground hover:text-accent transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                    Reservations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>123 Moon Street, City</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@cafedelune.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Cafe de Lune. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
