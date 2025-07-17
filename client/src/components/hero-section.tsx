import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Globe } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Anthropic/Linear-style clean background */}
      <div className="absolute inset-0 bg-white">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30"></div>
        {/* Ultra-minimal background elements */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Linear/Anthropic-style badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 text-sm font-medium">Available for new projects</span>
          </div>
          
          {/* Clean, centered headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-gray-900">
              Build the future with
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              enterprise technology
            </span>
          </h1>
          
          {/* Anthropic-style description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            We help companies transform their operations through cloud infrastructure, AI implementation, and modern software development. Built for scale, designed for impact.
          </p>
          
          {/* Linear-style CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 shadow-sm"
            >
              Start a project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-base font-medium rounded-lg transition-all duration-200"
            >
              Explore services
            </Button>
          </div>
          
          {/* Clean stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Pure Linear/Anthropic text-based features */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-wide font-medium mb-8">
                Trusted by forward-thinking companies
              </p>
              
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Enterprise Ready</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built for scale with enterprise-grade security and compliance standards
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Lightning Fast</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimized performance with modern architecture and best practices
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Global Scale</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Worldwide infrastructure with multi-region deployment capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}