import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Brain, Smartphone, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy & Migration",
      description: "Assess, plan, and execute seamless cloud migrations across AWS, Azure, and GCP with cost optimization.",
      features: ["Multi-region architectures", "Lift-and-shift projects", "Cost optimization strategies"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description: "Implement Infrastructure as Code and automated pipelines for efficient build, test, and deployment processes.",
      features: ["Infrastructure as Code", "Automated pipelines", "Containerization & Kubernetes"],
      gradient: "from-accent to-success"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Custom AI/ML applications with end-to-end pipelines for data ingestion, training, and monitoring.",
      features: ["Computer vision & NLP", "Predictive analytics", "MLOps implementations"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Responsive web applications and native mobile apps with modern frameworks and microservices architecture.",
      features: ["React, Angular, Vue.js", "Native & cross-platform", "API design & microservices"],
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            with cutting-edge innovation and proven methodologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="h-full">
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-12 -mt-12"></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
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
