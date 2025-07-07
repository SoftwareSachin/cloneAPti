import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24">
      {/* Clean geometric pattern */}
      <div className="absolute inset-0 bg-slate-50 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(148,163,184,0.05)_49%,rgba(148,163,184,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8">
              <Shield className="w-4 h-4 text-slate-600" />
              <span className="text-slate-700 text-sm font-medium">Enterprise Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              <span className="block text-blue-600">Aptivon Solutions</span>
              Transform Your
              <span className="block text-slate-800">
                Business Digital
              </span>
              <span className="block text-slate-700">
                Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              <strong>Aptivon Solutions</strong> delivers enterprise-grade technology solutions that drive innovation, streamline operations, and accelerate growth for forward-thinking organizations. India's leading IT consulting firm with 150+ satisfied clients and 98% success rate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
                <div className="text-slate-600 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-slate-600 text-sm">Enterprise Support</div>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="relative lg:block">
            <div className="bg-slate-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Zap className="w-8 h-8 text-slate-700 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Fast Deployment</h3>
                  <p className="text-slate-600 text-sm">Rapid implementation with minimal downtime</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Shield className="w-8 h-8 text-slate-700 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Enterprise Security</h3>
                  <p className="text-slate-600 text-sm">Bank-grade security and compliance</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Globe className="w-8 h-8 text-slate-700 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Global Scale</h3>
                <p className="text-slate-600 text-sm">Worldwide infrastructure and support coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
