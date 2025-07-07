import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoGif from "../assets/new-logo.gif";

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
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
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
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="/about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">About</a>
            <a href="/services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Services</a>
            <a href="/solutions" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Solutions</a>
            <a href="/industries" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Industries</a>
            <a href="/portfolio" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Portfolio</a>
            <a href="/blog" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Blog</a>
            <a href="/case-studies" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Cases</a>
            <a href="/resources" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Resources</a>
            <a href="/support" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Support</a>
            <a href="/careers" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Careers</a>
            <a
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm"
            >
              Contact
            </a>
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden lg:flex xl:hidden items-center space-x-3">
            <a href="/about" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">About</a>
            <a href="/services" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Services</a>
            <a href="/portfolio" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Portfolio</a>
            <a href="/blog" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Blog</a>
            <a href="/resources" className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium text-sm">Resources</a>
            <a
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
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
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              <a href="/about" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/services" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="/solutions" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Solutions</a>
              <a href="/industries" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Industries</a>
              <a href="/portfolio" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="/blog" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="/case-studies" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
              <a href="/resources" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Resources</a>
              <a href="/support" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Support</a>
              <a href="/careers" className="block py-2 text-slate-700 hover:text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>Careers</a>
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
