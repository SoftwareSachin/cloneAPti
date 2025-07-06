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
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-secondary min-h-screen flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Business Through{" "}
            <span className="text-accent">Intelligent Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Full-stack IT services and consulting firm empowering enterprises with Cloud, AI/ML, DevOps, and cutting-edge application development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-cyan-600 transition-colors shadow-lg"
            >
              Start Your Digital Journey
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-white"
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
