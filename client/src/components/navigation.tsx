import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import logoGif from "../assets/new-logo.gif";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollTo } = useSmoothScroll();

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
      scrollTo(element, { offset: -80, duration: 1.2 });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-black/10' 
        : 'bg-white/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-11">
          <a href="/" className="flex items-center space-x-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer">
            <img 
              src={logoGif} 
              alt="Aptivon Solutions" 
              className="w-auto h-6"
            />
            <div className="text-lg font-semibold text-black tracking-tight">
              Aptivon Solutions
            </div>
          </a>
          
          {/* Desktop Navigation - Apple Style */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/about" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">About</a>
            <a href="/services" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Services</a>
            <a href="/portfolio" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Portfolio</a>
            <a href="/blog" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Blog</a>
            <a href="/support" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Support</a>
            <a href="/careers" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Careers</a>
            <a
              href="/contact"
              className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - Apple Style */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black/80 hover:text-black p-1 h-8 w-8"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Apple Style */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="/services" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="/portfolio" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="/blog" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Blog</a>
                <a href="/support" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Support</a>
                <a href="/careers" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Careers</a>
                <a href="/contact" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
