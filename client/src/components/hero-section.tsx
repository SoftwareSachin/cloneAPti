import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LazySection } from "./lazy-section";
import { TypewriterText, StaggeredText, MotionText } from "@/components/smooth-text";
import { StaggeredItem } from "@/components/enhanced-transitions";
import { MagneticCursor } from "@/components/custom-cursor";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const stats = [
    { icon: Award, value: "5+", label: "Projects Delivered" },
    { icon: Users, value: "3+", label: "Happy Clients" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Globe, value: "15+", label: "Technologies" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LazySection animationType="fade">
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Anthropic/Linear-style clean background */}
        <div className="absolute inset-0 bg-white">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30"></div>
          {/* Ultra-minimal background elements with micro-animation */}
          <motion.div 
            className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-3xl opacity-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Linear/Anthropic-style badge with micro-animation */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-gray-700 text-sm font-medium">Available for new projects</span>
            </motion.div>
          
            {/* Clean, centered headline with buttery-smooth text animation */}
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              <StaggeredText 
                text="Enterprise Software Solutions" 
                className="text-gray-900 block"
              />
              <TypewriterText 
                text="Built for Scale & Performance" 
                speed={80}
                className="text-gray-600 block mt-2"
              />
            </div>
          
            {/* Professional description with smooth reveal animation */}
            <MotionText 
              delay={1.0}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              We help companies transform their operations through cloud infrastructure, AI implementation, and modern software development. Built for scale, designed for impact.
            </MotionText>
          
            {/* Linear-style CTA buttons with staggered animation */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            >
              <MagneticCursor strength={0.2}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 shadow-sm"
                  data-cursor-text="Start"
                >
                  Start a project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </MagneticCursor>
              <MagneticCursor strength={0.15}>
                <Button
                  onClick={() => scrollToSection("services")}
                  variant="outline"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-base font-medium rounded-lg transition-all duration-200"
                  data-cursor-text="Explore"
                >
                  Explore services
                </Button>
              </MagneticCursor>
            </motion.div>
          
            {/* Clean stats display with staggered animation */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ 
                    delay: 1.6 + (index * 0.1), 
                    duration: 0.5, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    animate={{ 
                      scale: [1, 1.02, 1] 
                    }}
                    transition={{ 
                      duration: 3 + (index * 0.5), 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          
            {/* Pure Linear/Anthropic text-based features with smooth animation */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center">
                <motion.p 
                  className="text-gray-500 text-sm uppercase tracking-wide font-medium mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  Trusted by forward-thinking companies
                </motion.p>
                
                <div className="grid md:grid-cols-3 gap-12 text-center">
                  {[
                    {
                      title: "Enterprise Ready",
                      description: "Built for scale with enterprise-grade security and compliance standards"
                    },
                    {
                      title: "Lightning Fast", 
                      description: "Optimized performance with modern architecture and best practices"
                    },
                    {
                      title: "Global Scale",
                      description: "Worldwide infrastructure with multi-region deployment capabilities"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                      transition={{ 
                        delay: 2.2 + (index * 0.2), 
                        duration: 0.6, 
                        ease: "easeOut" 
                      }}
                      whileHover={{ 
                        y: -2,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LazySection>
  );
}