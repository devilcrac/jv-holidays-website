import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">+91 9361786484</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">jvholidays99@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="mr-3 flex items-center" aria-label="JV Holidays Home">
              <img
                src="/lovable-uploads/jv.png"
                alt="JV Holidays Logo"
                className="h-10 w-10 object-contain rounded-md shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </a>
            <h1 className="text-2xl font-bold text-primary">
              JV Holidays
            </h1>
            <span className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Premium Travel Experiences
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-travel">
              Home
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-travel">
              Packages
            </a>
            <a href="/wildlife-tour" className="text-foreground hover:text-primary transition-travel">
              Wildlife Tour
            </a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-travel">
              Gallery
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-travel">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-travel">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm" className="hidden md:flex" asChild>
              <a href="/quote">Get Quote</a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <a href="/" className="block py-2 text-foreground hover:text-primary transition-travel">
              Home
            </a>
            <a href="#packages" className="block py-2 text-foreground hover:text-primary transition-travel">
              Packages
            </a>
            <a href="/wildlife-tour" className="block py-2 text-foreground hover:text-primary transition-travel">
              Wildlife Tour
            </a>
            <a href="/gallery" className="block py-2 text-foreground hover:text-primary transition-travel">
              Gallery
            </a>
            <a href="/about" className="block py-2 text-foreground hover:text-primary transition-travel">
              About Us
            </a>
            <a href="/contact" className="block py-2 text-foreground hover:text-primary transition-travel">
              Contact
            </a>
            <Button variant="hero" size="sm" className="mt-2" asChild>
              <a href="/quote">Get Quote</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;