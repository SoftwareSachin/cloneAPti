import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import logoGif from "../assets/new-logo.gif";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollTo(element, { offset: -80, duration: 1.2 });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl" style={{border: 'none', boxShadow: 'none', outline: 'none'}}>
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
          <div className="hidden xl:flex items-center space-x-8">
            <a href="/about" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">About</a>
            <a href="/services" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Services</a>
            <a href="/solutions" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Solutions</a>
            <a href="/industries" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Industries</a>
            <a href="/portfolio" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Portfolio</a>
            <a href="/college-projects" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">College Projects</a>
            <a href="/blog" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Blog</a>
            <a href="/case-studies" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Cases</a>
            <a href="/resources" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Resources</a>
            <a href="/support" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Support</a>
            <a href="/careers" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Careers</a>
            <a href="/contact" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Contact</a>
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden lg:flex xl:hidden items-center space-x-6">
            <a href="/about" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">About</a>
            <a href="/services" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Services</a>
            <a href="/portfolio" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Portfolio</a>
            <a href="/blog" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Blog</a>
            <a href="/careers" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Careers</a>
            <a href="/contact" className="text-black/80 hover:text-black transition-colors duration-200 text-xs font-normal">Contact</a>
          </div>

          {/* Mobile Menu Button - Apple Style */}
          <div className="xl:hidden">
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
          <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/about" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="/services" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="/solutions" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Solutions</a>
                <a href="/industries" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Industries</a>
                <a href="/portfolio" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="/college-projects" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>College Projects</a>
                <a href="/blog" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Blog</a>
                <a href="/case-studies" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
                <a href="/resources" className="text-black/80 hover:text-black transition-colors duration-200 text-sm font-normal py-1" onClick={() => setIsMenuOpen(false)}>Resources</a>
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