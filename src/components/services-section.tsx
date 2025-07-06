// import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Brain, Smartphone, Target, Shield, Zap, Globe, Database } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture & Migration",
      description: "Enterprise-grade cloud strategies with multi-region deployments, hybrid solutions, and comprehensive security frameworks.",
      features: ["Multi-cloud orchestration", "Zero-downtime migrations", "FinOps optimization"],
      gradient: "from-blue-600 to-indigo-600",
      accent: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: Shield,
      title: "DevSecOps & Automation",
      description: "Security-first DevOps pipelines with automated compliance, infrastructure as code, and continuous monitoring.",
      features: ["Security-first pipelines", "Compliance automation", "Container orchestration"],
      gradient: "from-emerald-600 to-teal-600",
      accent: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions including computer vision, natural language processing, and predictive analytics for enterprise scale.",
      features: ["Neural network architectures", "Real-time inference", "Model governance"],
      gradient: "from-purple-600 to-violet-600",
      accent: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Modern data platforms with real-time streaming, data lakes, and advanced analytics infrastructure.",
      features: ["Real-time data pipelines", "Data lake architecture", "Advanced analytics"],
      gradient: "from-orange-600 to-red-600",
      accent: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies including legacy modernization and enterprise application development.",
      features: ["Legacy modernization", "Microservices architecture", "API-first design"],
      gradient: "from-cyan-600 to-blue-600",
      accent: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      description: "High-performance computing solutions with optimization for scalability, reliability, and ultra-low latency requirements.",
      features: ["Performance optimization", "Scalability engineering", "Reliability architecture"],
      gradient: "from-yellow-600 to-orange-600",
      accent: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
            <div className="flex items-center">
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">WHAT WE DO</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 font-display">Enterprise Solutions</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions architected for enterprise scale with security, performance, and reliability at the core.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="h-full"
            >
              <Card className="h-full bg-white border border-gray-100 shadow-xl group relative overflow-hidden">
                <CardContent className="p-10 relative">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.accent} rounded-full -mr-20 -mt-20`}></div>
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-xl relative z-10`}>
                    <service.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-base">{service.description}</p>
                  <ul className="text-sm text-slate-500 space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
