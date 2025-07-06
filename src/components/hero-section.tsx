import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";

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
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
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
            <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-2xl">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 text-white mr-3" />
                <span className="text-white text-base font-medium tracking-wide">Enterprise Technology Excellence</span>
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight font-display">
            Elevating Enterprise Through{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Strategic Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-light">
            Full-stack IT services and consulting firm empowering enterprises with Cloud, AI/ML, DevOps, and cutting-edge application development.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-slate-900 px-12 py-6 text-xl font-semibold hover:bg-gray-50 transition-all duration-500 shadow-2xl hover:shadow-white/20 hover:scale-105 rounded-2xl group"
            >
              Discuss Your Vision
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="bg-white/5 text-white px-12 py-6 text-xl font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-2xl border-white/20 hover:border-white/40 rounded-2xl"
            >
              Explore Capabilities
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
