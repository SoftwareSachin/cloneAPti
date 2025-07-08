import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Server, Brain, Smartphone, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with enterprise-grade security, multi-region deployment, and cost optimization strategies.",
      features: ["AWS, Azure, GCP", "Infrastructure as Code", "Disaster Recovery"],
      metrics: "99.9% Uptime"
    },
    {
      icon: Server,
      title: "DevOps & Automation",
      description: "Streamlined development operations with automated CI/CD pipelines, container orchestration, and monitoring.",
      features: ["CI/CD Pipelines", "Kubernetes", "Infrastructure Automation"],
      metrics: "75% Faster Deployments"
    },
    {
      icon: Brain,
      title: "AI & Analytics",
      description: "Data-driven insights through machine learning, predictive analytics, and intelligent automation solutions.",
      features: ["Machine Learning", "Data Analytics", "Process Automation"],
      metrics: "40% Efficiency Gain"
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Modern web and mobile applications built with scalable architectures and user-centric design principles.",
      features: ["Web Applications", "Mobile Apps", "API Development"],
      metrics: "50% Time-to-Market"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-slate-700 font-medium">Enterprise Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technology Solutions That Drive Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Comprehensive enterprise technology services designed to accelerate growth and optimize operations. Our expert team delivers cloud migration, AI/ML implementation, DevOps automation, and custom software development solutions that transform businesses and drive measurable results.
          </p>
          
          {/* Internal Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">About Us</a>
            <span className="text-slate-300">|</span>
            <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">Our Services</a>
            <span className="text-slate-300">|</span>
            <a href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium">Portfolio</a>
            <span className="text-slate-300">|</span>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</a>
            <span className="text-slate-300">|</span>
            <a href="/careers" className="text-blue-600 hover:text-blue-800 font-medium">Careers</a>
            <span className="text-slate-300">|</span>
            <a href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">Blog</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <service.icon className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        {service.metrics}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <ArrowRight className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
