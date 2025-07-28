import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TypewriterText, ScrambleText, RevealText, MotionText, StaggeredText } from './smooth-text';
import { DirectionalPageTransition, MorphTransition, StaggeredLayout, StaggeredItem } from './enhanced-transitions';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function ButterySmoothuDemo() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const { scrollToElement } = useSmoothScroll();

  const demos = [
    {
      title: "Typewriter Effect",
      component: <TypewriterText text="This is buttery-smooth typewriter text!" speed={60} className="text-2xl font-bold" />
    },
    {
      title: "Scramble Animation", 
      component: <ScrambleText text="Text transforms smoothly!" duration={2} className="text-2xl font-bold" />
    },
    {
      title: "Reveal Words",
      component: <RevealText mode="words" delay={0.15} className="text-2xl font-bold">Every word appears with elegant timing</RevealText>
    },
    {
      title: "Staggered Text",
      component: <StaggeredText text="Beautiful staggered text animation with perfect timing" className="text-2xl font-bold" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <StaggeredLayout>
        <StaggeredItem>
          <motion.div 
            className="container mx-auto px-6 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Buttery Smooth
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Experience the perfect combination of <strong>Framer Motion</strong>, <strong>Lenis Scroll</strong>, and <strong>GSAP Text Animations</strong> for the ultimate user experience.
              </motion.p>
            </div>

            {/* Demo Section */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 mb-20 border border-white/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-lg text-gray-400 mb-4">Live Demo #{currentDemo + 1}</h3>
                <h2 className="text-3xl font-bold text-white mb-8">{demos[currentDemo].title}</h2>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center min-h-[100px] flex items-center justify-center"
                >
                  {demos[currentDemo].component}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center space-x-2 mt-8">
                {demos.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentDemo ? 'bg-blue-400' : 'bg-white/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                {
                  title: "Framer Motion",
                  desc: "Physics-based animations with spring configurations",
                  features: ["Layout Animations", "Page Transitions", "Gesture Support"]
                },
                {
                  title: "Lenis Smooth Scroll", 
                  desc: "Buttery-smooth momentum scrolling with custom easing",
                  features: ["Inertia Scrolling", "Custom Easing", "Scroll Events"]
                },
                {
                  title: "GSAP Text Animations",
                  desc: "Professional text effects with timeline control", 
                  features: ["Typewriter Effects", "Scramble Text", "Character Reveals"]
                }
              ].map((feature, index) => (
                <StaggeredItem key={index} delay={index * 0.1}>
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggeredItem>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Ready for Buttery-Smooth Experiences?</h2>
              <motion.button
                onClick={() => scrollToElement('#demo-section')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Experience the Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </StaggeredItem>
      </StaggeredLayout>
    </div>
  );
}