import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Brain, Smartphone, Target } from "lucide-react";

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
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
            <div className="flex items-center">
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">WHAT WE DO</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-primary-dark mb-6 font-display">Core Services</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation journey with cutting-edge innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full glass-card hover:shadow-premium transition-all duration-500 border-0 shadow-modern group hover-lift">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16"></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-slow`}>
                    <service.icon className="text-white text-2xl" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors font-display">{service.title}</h3>
                  <p className="text-text-gray mb-6 leading-relaxed">{service.description}</p>
                  <ul className="text-sm text-text-gray space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
