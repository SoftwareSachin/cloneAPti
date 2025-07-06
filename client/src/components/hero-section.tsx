import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative gradient-primary min-h-screen flex items-center overflow-hidden">
      {/* Modern background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23grid)\"/></svg>')",
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <span className="text-white text-sm font-medium">🚀 Leading IT Innovation Since 2024</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transforming Business Through{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Intelligent Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-light">
            Full-stack IT services and consulting firm empowering enterprises with Cloud, AI/ML, DevOps, and cutting-edge application development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-modern-lg hover:shadow-xl hover:scale-105 rounded-full"
            >
              Start Your Digital Journey
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="bg-transparent text-white px-10 py-5 text-lg font-semibold hover:bg-white/10 transition-all duration-300 shadow-modern border-white/30 hover:border-white/50 rounded-full backdrop-blur-sm"
            >
              Explore Our Services
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
