import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import lightningFastGif from "@assets/fetchpik.com-iconscout-NSEC10nAzj_1751913193156.gif";
import fortKnoxSecurityGif from "@assets/fetchpik.com-iconscout-83wO1kiIYP_1751913411852.gif";
import globalReachGif from "@assets/fetchpik.com-iconscout-agj3wec09D_1751913432099.gif";

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: Award, value: "5+", label: "Projects Delivered" },
    { icon: Users, value: "3+", label: "Happy Clients" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Globe, value: "15+", label: "Technologies" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-purple-600/5"></div>
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-slate-200/60 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 text-sm font-medium">Next-Gen Enterprise Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Enterprise IT Services & Technology Consulting
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Aptivon Solutions is a leading enterprise technology consulting firm specializing in cloud migration, AI/ML implementation, DevOps automation, and custom software development. We serve businesses across India and globally, delivering proven technology solutions that transform operations and drive growth. Our expert team of developers, cloud architects, and AI specialists work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, and PyTorch to deliver enterprise-grade solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-500 ${
                      currentStat === index 
                        ? 'bg-white/80 backdrop-blur-sm border border-blue-200/60 shadow-lg transform scale-105' 
                        : 'bg-white/40 backdrop-blur-sm'
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                      currentStat === index ? 'text-blue-600' : 'text-slate-500'
                    }`} />
                    <div className={`text-2xl font-bold mb-1 ${
                      currentStat === index ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced Visual Content */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <img 
                        src={lightningFastGif} 
                        alt="Lightning Fast" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Lightning Fast</h3>
                    <p className="text-slate-600 text-sm">Deploy in minutes, not months with our automated solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <img 
                        src={fortKnoxSecurityGif} 
                        alt="Fort Knox Security" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Fort Knox Security</h3>
                    <p className="text-slate-600 text-sm">Enterprise-grade security with zero-trust architecture</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <img 
                      src={globalReachGif} 
                      alt="Global Reach" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Global Reach</h3>
                  <p className="text-slate-600 text-sm">Scalable infrastructure spanning multiple regions worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
