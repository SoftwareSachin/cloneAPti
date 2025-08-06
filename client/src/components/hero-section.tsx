import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Globe, Code, Terminal, Layers, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LazySection } from "./lazy-section";
import { TypewriterText, StaggeredText, MotionText } from "@/components/smooth-text";
import { StaggeredItem } from "@/components/enhanced-transitions";
import { MagneticCursor } from "@/components/custom-cursor";
import { LiveTerminal } from "@/components/live-terminal";

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
      
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Pane - Content */}
            <div className="text-center lg:text-left max-w-4xl">
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
              <MotionText 
                delay={0.8}
                className="text-gray-600 block mt-2"
              >
                Built for Scale & Performance
              </MotionText>
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left"
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
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-1"
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
                  <div className="text-gray-600 text-xs uppercase tracking-wide font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            </div>

            {/* Right Pane - Development Laptop Visual */}
            <div className="flex justify-center lg:justify-end">
              <DevelopmentLaptop />
            </div>
          </div>
          
          {/* Live Terminal Section - Moved below hero */}
          <motion.div 
            className="mt-24 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="w-full max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Development Environment</h2>
                <p className="text-lg text-gray-600">Experience our development workflow through this live terminal</p>
              </div>
              <LiveTerminal />
            </div>
          </motion.div>
        </div>
      </section>
    </LazySection>
  );
}

// Development Laptop Component
function DevelopmentLaptop() {
  const [activeBlock, setActiveBlock] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const codeBlocks = [
    { color: "bg-orange-400", type: "function" },
    { color: "bg-gray-400", type: "variable" },
    { color: "bg-orange-400", type: "highlight" },
    { color: "bg-gray-400", type: "comment" },
    { color: "bg-gray-400", type: "string" },
    { color: "bg-orange-400", type: "keyword" },
    { color: "bg-gray-400", type: "operator" },
    { color: "bg-orange-400", type: "return" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
      className="relative max-w-2xl w-full"
    >
      {/* Laptop Base */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-300 rounded-t-2xl p-4 shadow-2xl">
          {/* Screen Border */}
          <div className="bg-gray-800 rounded-2xl p-6 relative overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-3 h-3 bg-yellow-500 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              />
            </div>

            {/* Development Interface */}
            <div className="grid grid-cols-2 gap-4 h-64">
              {/* Left Panel - Code Blocks */}
              <div className="space-y-3">
                {codeBlocks.slice(0, 4).map((block, index) => (
                  <motion.div
                    key={index}
                    className={`h-8 rounded ${block.color} transition-all duration-500`}
                    animate={{
                      opacity: activeBlock === index ? 1 : 0.6,
                      scale: activeBlock === index ? 1.02 : 1,
                      boxShadow: activeBlock === index ? "0 0 20px rgba(251, 146, 60, 0.5)" : "none"
                    }}
                    style={{
                      width: index === 0 ? "80%" : index === 1 ? "60%" : index === 2 ? "90%" : "70%"
                    }}
                  />
                ))}
                
                {/* Highlighted Orange Bar */}
                <motion.div
                  className="h-10 bg-orange-400 rounded shadow-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 10px rgba(251, 146, 60, 0.3)", "0 0 20px rgba(251, 146, 60, 0.6)", "0 0 10px rgba(251, 146, 60, 0.3)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {codeBlocks.slice(4).map((block, index) => (
                  <motion.div
                    key={index + 4}
                    className={`h-6 rounded ${block.color} transition-all duration-500`}
                    animate={{
                      opacity: activeBlock === (index + 4) ? 1 : 0.6,
                      scale: activeBlock === (index + 4) ? 1.02 : 1
                    }}
                    style={{
                      width: index === 0 ? "75%" : index === 1 ? "85%" : index === 2 ? "65%" : "80%"
                    }}
                  />
                ))}
              </div>

              {/* Right Panel - UI Elements */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <motion.div 
                    className="h-12 bg-gray-500 rounded"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div 
                    className="h-12 bg-gray-500 rounded"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
                  />
                </div>
                
                <motion.div 
                  className="h-8 bg-orange-400 rounded"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 5px rgba(251, 146, 60, 0.3)", "0 0 15px rgba(251, 146, 60, 0.6)", "0 0 5px rgba(251, 146, 60, 0.3)"]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-gray-500 rounded" />
                  <motion.div 
                    className="h-8 bg-orange-400 rounded"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 2 }}
                  />
                  <div className="h-8 bg-gray-500 rounded" />
                </div>
                
                <div className="space-y-2">
                  <div className="h-6 bg-gray-500 rounded w-3/4" />
                  <div className="h-6 bg-gray-500 rounded w-1/2" />
                  <div className="h-6 bg-gray-500 rounded w-5/6" />
                </div>
                
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-6 bg-gray-500 rounded" />
                  <div className="h-6 bg-gray-500 rounded" />
                  <motion.div 
                    className="h-6 bg-orange-400 rounded"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.8 }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Code Icons */}
            <motion.div
              className="absolute top-16 right-4 text-orange-400 opacity-60"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Code className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-16 left-4 text-blue-400 opacity-60"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <Database className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Laptop Keyboard */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-2xl h-8 relative">
          <div className="absolute inset-x-0 top-1 h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded" />
        </div>

        {/* Laptop Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-black/20 rounded-full blur-xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-8 -right-8 bg-white rounded-full p-3 shadow-lg"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 360, 720]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Terminal className="w-6 h-6 text-blue-600" />
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-8 bg-white rounded-full p-3 shadow-lg"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <Layers className="w-6 h-6 text-purple-600" />
      </motion.div>
    </motion.div>
  );
}