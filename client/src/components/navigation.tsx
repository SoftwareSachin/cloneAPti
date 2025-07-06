import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl border-b border-slate-200/60 shadow-xl py-3' 
        : 'bg-white/95 backdrop-blur-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoGif} 
              alt="Aptivon Solutions" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
            />
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Aptivon Solutions
              </h1>
              <p className="text-xs text-slate-500 font-medium">Enterprise Technology</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/about"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              About
            </a>
            <a
              href="/services"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              Portfolio
            </a>
            <a
              href="/careers"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              Careers
            </a>
            <a
              href="/blog"
              className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              <a
                href="/about"
                className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/services"
                className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="/careers"
                className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </a>
              <a
                href="/blog"
                className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-3 font-medium text-center rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
