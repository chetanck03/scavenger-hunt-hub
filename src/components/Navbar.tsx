import { Link } from "react-router-dom";
import { Compass, Menu, X, Phone, Trophy, Users, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <Compass className="w-8 h-8 text-primary group-hover:rotate-180 transition-all duration-500 drop-shadow-lg" />
              <Sparkles className="w-4 h-4 text-secondary absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text tracking-tight">Scavenger Hunt</span>
              <span className="text-xs text-primary/60 font-medium -mt-1">Campus Adventure</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 group px-3 py-2"
            >
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Home
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              to="/game" 
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 group px-3 py-2"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Groups
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
            <a 
              href="tel:+916280511047" 
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 group px-3 py-2"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </a>
            
            {/* CTA Button */}
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <Link to="/game">Start Hunt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative overflow-hidden group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isOpen ? <X className="h-5 w-5 relative z-10" /> : <Menu className="h-5 w-5 relative z-10" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in border-t border-primary/20 pt-6">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              <Trophy className="w-4 h-4" />
              Home
            </Link>
            <Link 
              to="/game" 
              className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              Groups
            </Link>
            <a 
              href="tel:+916280511047" 
              className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-semibold py-3 rounded-lg shadow-lg mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/game">Start Hunt</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
