import { Link } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold gradient-text">Scavenger Hunt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/game" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Groups
            </Link>
            <a 
              href="mailto:support@scavengerhunt.com" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/game" 
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Groups
            </Link>
            <a 
              href="mailto:support@scavengerhunt.com" 
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
