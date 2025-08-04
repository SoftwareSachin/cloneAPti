import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import logoGif from "../assets/logo.gif";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg py-2' 
        : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30 shadow-md py-3'
    }`}>
      <div className="max-w-4xl mx-auto px-3">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-12' : 'h-14'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <img 
                  src={logoGif} 
                  alt="Aptivon Solutions" 
                  className={`w-auto mr-2 filter drop-shadow-lg transition-all duration-300 ${
                    isScrolled ? 'h-5' : 'h-6'
                  }`}
                />
              </div>
              <h1 className="text-base font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Aptivon Solutions
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Technologies
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Industries
              </button>
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-1 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-xs"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white transition-colors w-full text-left"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white transition-colors w-full text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white transition-colors w-full text-left"
              >
                Approach
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
