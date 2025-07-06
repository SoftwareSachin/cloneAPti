import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, GitBranch, Brain, Smartphone } from "lucide-react";

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
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Core Services</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="text-white text-2xl" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-4">{service.title}</h3>
                  <p className="text-text-gray mb-6">{service.description}</p>
                  <ul className="text-sm text-text-gray space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
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
