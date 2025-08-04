import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Brain, Smartphone, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy & Migration",
      description: "Assess, plan, and execute seamless cloud migrations across AWS, Azure, and GCP with cost optimization.",
      features: ["Multi-region architectures", "Lift-and-shift projects", "Cost optimization strategies"],
      gradient: "from-blue-600 to-cyan-500",
      glowColor: "shadow-blue-500/20"
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description: "Implement Infrastructure as Code and automated pipelines for efficient build, test, and deployment processes.",
      features: ["Infrastructure as Code", "Automated pipelines", "Containerization & Kubernetes"],
      gradient: "from-purple-600 to-pink-500",
      glowColor: "shadow-purple-500/20"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Custom AI/ML applications with end-to-end pipelines for data ingestion, training, and monitoring.",
      features: ["Computer vision & NLP", "Predictive analytics", "MLOps implementations"],
      gradient: "from-emerald-600 to-teal-500",
      glowColor: "shadow-emerald-500/20"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Responsive web applications and native mobile apps with modern frameworks and microservices architecture.",
      features: ["React, Angular, Vue.js", "Native & cross-platform", "API design & microservices"],
      gradient: "from-orange-600 to-red-500",
      glowColor: "shadow-orange-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full mb-8 hover-lift hover:shadow-glow group">
            <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="gradient-text-primary text-sm font-semibold tracking-wide">Our Services</span>
            <Zap className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text-neon">Enterprise Solutions</span>
            <br />
            <span className="text-slate-300">That Scale</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From cloud infrastructure to AI innovation, we deliver comprehensive technology solutions 
            that transform businesses and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group glass-card border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover-lift hover:shadow-glow overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text-primary transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text-neon mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss how our services can accelerate your digital transformation journey.
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-neon transition-all duration-300 hover-lift group">
              <Sparkles className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300 inline" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
