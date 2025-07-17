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
    <nav 
      className="fixed top-0 w-full z-50 backdrop-blur-xl" 
      style={{
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottom: 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center" style={{height: '44px', minHeight: '44px'}}>
          <a 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            style={{textDecoration: 'none'}}
          >
            <img 
              src={logoGif} 
              alt="Aptivon Solutions" 
              className="w-auto"
              style={{height: '24px'}}
            />
            <div 
              className="font-semibold tracking-tight"
              style={{
                fontSize: '18px',
                color: 'rgba(0, 0, 0, 1)',
                lineHeight: '1.2'
              }}
            >
              Aptivon Solutions
            </div>
          </a>
          
          {/* Desktop Navigation - Apple Style */}
          <div className="hidden xl:flex items-center" style={{gap: '32px'}}>
            <a href="/about" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>About</a>
            <a href="/services" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Services</a>
            <a href="/solutions" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Solutions</a>
            <a href="/industries" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Industries</a>
            <a href="/portfolio" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Portfolio</a>
            <a href="/college-projects" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>College Projects</a>
            <a href="/blog" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Blog</a>
            <a href="/case-studies" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Cases</a>
            <a href="/resources" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Resources</a>
            <a href="/support" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Support</a>
            <a href="/careers" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Careers</a>
            <a href="/contact" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Contact</a>
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden lg:flex xl:hidden items-center" style={{gap: '24px'}}>
            <a href="/about" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>About</a>
            <a href="/services" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Services</a>
            <a href="/portfolio" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Portfolio</a>
            <a href="/blog" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Blog</a>
            <a href="/careers" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Careers</a>
            <a href="/contact" style={{color: 'rgba(0,0,0,0.8)', fontSize: '12px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s'}} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Contact</a>
          </div>

          {/* Mobile Menu Button - Apple Style */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: 'rgba(0,0,0,0.8)',
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
                padding: '4px',
                height: '32px',
                width: '32px'
              }}
            >
              {isMenuOpen ? <X style={{width: '16px', height: '16px'}} /> : <Menu style={{width: '16px', height: '16px'}} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Apple Style */}
        {isMenuOpen && (
          <div 
            className="xl:hidden absolute top-full left-0 w-full backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <a href="/about" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>About</a>
                <a href="/services" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Services</a>
                <a href="/solutions" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Solutions</a>
                <a href="/industries" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Industries</a>
                <a href="/portfolio" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Portfolio</a>
                <a href="/college-projects" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>College Projects</a>
                <a href="/blog" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Blog</a>
                <a href="/case-studies" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Case Studies</a>
                <a href="/resources" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Resources</a>
                <a href="/support" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Support</a>
                <a href="/careers" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Careers</a>
                <a href="/contact" style={{color: 'rgba(0,0,0,0.8)', fontSize: '14px', fontWeight: '400', textDecoration: 'none', transition: 'color 0.2s', padding: '4px 0'}} onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.target.style.color = 'rgba(0,0,0,1)'} onMouseLeave={(e) => e.target.style.color = 'rgba(0,0,0,0.8)'}>Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}