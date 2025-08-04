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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24 md:pt-28">
      {/* Modern geometric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.15),transparent_50%)] bg-[radial-gradient(circle_at_75%_75%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full border border-red-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium tracking-wide">Leading Enterprise IT Solutions</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Enterprise-grade technology solutions that scale with your ambitions. 
            From cloud infrastructure to AI innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="bg-red-500/10 backdrop-blur-sm text-white border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-red-500/5 backdrop-blur-sm rounded-xl border border-red-500/10">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-xs md:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-red-500/5 backdrop-blur-sm rounded-xl border border-red-500/10">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-xs md:text-sm">Uptime SLA</div>
            </div>
            <div className="text-center p-4 bg-red-500/5 backdrop-blur-sm rounded-xl border border-red-500/10">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-xs md:text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("services")}
          className="group bg-red-500/10 backdrop-blur-sm p-3 rounded-full border border-red-500/20 hover:bg-red-500/20 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="text-white group-hover:text-red-300 transition-colors" size={20} />
        </button>
      </div>
    </section>
  );
}
