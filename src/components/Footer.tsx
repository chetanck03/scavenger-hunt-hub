import { Compass, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary" />
              <span className="font-bold gradient-text">Scavenger Hunt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Find. Capture. Win. The ultimate campus adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/game" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Groups
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Contact</h3>
            <a 
              href="tel:+916280511047"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 6280511047
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Scavenger Hunt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
