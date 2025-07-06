import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoPath from "@assets/fetchpik.com-iconscout-bRKW4qijJe_1751778748695.gif";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="glass-card backdrop-blur-lg shadow-premium sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <img 
                  src={logoPath} 
                  alt="Aptivon Solutions" 
                  className="h-12 w-auto mr-3 filter drop-shadow-lg"
                />
              </div>
              <h1 className="text-2xl font-bold gradient-text-primary font-display">
                Aptivon Solutions
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-gray-700 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-gray-700 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="text-gray-700 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Approach
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="gradient-primary text-white hover:shadow-lg transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full"
              >
                Get Started
              </Button>
            </div>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Approach
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
