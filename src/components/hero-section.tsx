import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, ArrowRight, Zap, Rocket } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Enhanced modern geometric background */}
      <div className="absolute inset-0">
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced badge with animation */}
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full border border-blue-500/20 mb-8 hover-lift hover:shadow-glow group">
            <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="gradient-text-primary text-sm font-semibold tracking-wide">Leading Enterprise IT Solutions</span>
            <Zap className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
          
          {/* Enhanced main heading with better gradients */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="block gradient-text-neon hover:scale-105 transition-transform duration-500">
              Transform Your
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-500">
              Digital Future
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Enterprise-grade technology solutions that scale with your ambitions. 
            <span className="gradient-text-accent font-medium"> From cloud infrastructure to AI innovation.</span>
          </p>
          
          {/* Enhanced CTA section with stats */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-neon transition-all duration-300 hover-lift"
              >
                <Rocket className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="glass-effect border-slate-600 text-slate-300 hover:text-white hover:border-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover-lift hover:shadow-glow transition-all duration-300"
              >
                Explore Services
                <ChevronDown className="w-5 h-5 ml-3" />
              </Button>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-xl hover-lift hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold gradient-text-primary mb-2">150+</div>
                <div className="text-slate-400">Satisfied Clients</div>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold gradient-text-accent mb-2">98%</div>
                <div className="text-slate-400">Success Rate</div>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift hover:shadow-glow transition-all duration-300">
                <div className="text-3xl font-bold gradient-text-neon mb-2">24/7</div>
                <div className="text-slate-400">Support Available</div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("services")}
              className="p-3 rounded-full glass-effect hover:shadow-glow transition-all duration-300 hover-lift"
            >
              <ChevronDown className="w-6 h-6 text-slate-400 hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
