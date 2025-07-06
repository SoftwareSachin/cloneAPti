import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <img 
                  src="/favicon.gif" 
                  alt="Aptivon Solutions" 
                  className="h-10 w-auto mr-3 filter drop-shadow-lg"
                />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Aptivon Solutions
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Technologies
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Industries
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
