import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MagneticCursor } from '@/components/custom-cursor';
import { CursorSettings, useCursor } from '@/components/cursor-manager';
import { 
  MousePointer, 
  Sparkles, 
  Zap, 
  Target, 
  Move3D,
  Palette,
  Settings,
  ArrowRight
} from 'lucide-react';

export default function CursorDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const { enableAll, disableAll } = useCursor();

  const demoSections = [
    {
      id: 'magnetic',
      title: 'Magnetic Effects',
      description: 'Elements that attract and follow your cursor with smooth physics',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'particles',
      title: 'Particle Trails',
      description: 'Beautiful particle effects that follow your mouse movement',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'ripples',
      title: 'Click Ripples',
      description: 'Animated ripple effects triggered on mouse clicks',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 'custom',
      title: 'Custom Cursor',
      description: 'Replace the default cursor with a beautiful custom design',
      icon: MousePointer,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Cursor Effects Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the magic of custom cursor interactions with particle trails, magnetic effects, and beautiful animations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticCursor strength={0.3}>
                <Button 
                  onClick={enableAll}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  data-cursor-text="Enable"
                >
                  <Palette className="mr-2 w-5 h-5" />
                  Enable All Effects
                </Button>
              </MagneticCursor>
              
              <MagneticCursor strength={0.2}>
                <Button 
                  onClick={disableAll}
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  data-cursor-text="Disable"
                >
                  <Settings className="mr-2 w-5 h-5" />
                  Disable All
                </Button>
              </MagneticCursor>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {demoSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300"
                onMouseEnter={() => setActiveDemo(section.id)}
                onMouseLeave={() => setActiveDemo(null)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{section.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div
                    animate={{ scale: activeDemo === section.id ? 1.02 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {section.id === 'magnetic' && (
                      <div className="space-y-4">
                        <MagneticCursor strength={0.4}>
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                            data-cursor-text="Magnetic"
                          >
                            <Move3D className="mr-2 w-4 h-4" />
                            Hover for Magnetic Effect
                          </Button>
                        </MagneticCursor>
                        <div className="grid grid-cols-2 gap-3">
                          <MagneticCursor strength={0.2}>
                            <div 
                              className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 text-center cursor-pointer"
                              data-cursor-text="Weak"
                            >
                              Weak Pull
                            </div>
                          </MagneticCursor>
                          <MagneticCursor strength={0.6}>
                            <div 
                              className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg border border-blue-500/50 text-center cursor-pointer"
                              data-cursor-text="Strong"
                            >
                              Strong Pull
                            </div>
                          </MagneticCursor>
                        </div>
                      </div>
                    )}

                    {section.id === 'particles' && (
                      <div className="text-center">
                        <div className="p-8 border-2 border-dashed border-purple-500/50 rounded-lg">
                          <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                          <p className="text-gray-300">Move your mouse around this area</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Watch the colorful particle trail follow your cursor
                          </p>
                        </div>
                      </div>
                    )}

                    {section.id === 'ripples' && (
                      <div className="text-center">
                        <div className="p-8 border-2 border-dashed border-green-500/50 rounded-lg">
                          <Zap className="w-12 h-12 mx-auto mb-4 text-green-400" />
                          <p className="text-gray-300">Click anywhere in this area</p>
                          <p className="text-sm text-gray-500 mt-2">
                            See the beautiful ripple effects on each click
                          </p>
                        </div>
                      </div>
                    )}

                    {section.id === 'custom' && (
                      <div className="text-center">
                        <div className="p-8 border-2 border-dashed border-orange-500/50 rounded-lg">
                          <MousePointer className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                          <p className="text-gray-300">Notice the custom cursor design</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Smooth blend mode with hover effects
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Playground */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Interactive Playground</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MagneticCursor strength={0.3}>
              <Card className="bg-gray-800 border-gray-600 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2">Magnetic Button</h3>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    data-cursor-text="Click"
                  >
                    Try Me!
                  </Button>
                </CardContent>
              </Card>
            </MagneticCursor>

            <MagneticCursor strength={0.4}>
              <Card className="bg-gray-800 border-gray-600 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2">Strong Magnet</h3>
                  <div 
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center cursor-pointer"
                    data-cursor-text="Hover"
                  >
                    Hover Over Me
                  </div>
                </CardContent>
              </Card>
            </MagneticCursor>

            <MagneticCursor strength={0.2}>
              <Card className="bg-gray-800 border-gray-600 hover:border-green-500 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Move3D className="w-10 h-10 mx-auto mb-4 text-green-400" />
                  <h3 className="text-lg font-semibold mb-2">Gentle Pull</h3>
                  <div 
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center cursor-pointer"
                    data-cursor-text="Smooth"
                  >
                    Smooth Movement
                  </div>
                </CardContent>
              </Card>
            </MagneticCursor>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your website?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            These cursor effects can be easily integrated into any website to create memorable user experiences.
          </p>
          <MagneticCursor strength={0.3}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              data-cursor-text="Contact"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </MagneticCursor>
        </motion.div>
      </div>

      {/* Cursor Settings Panel */}
      <CursorSettings />
    </div>
  );
}