import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Heart, ShoppingCart, Factory, Video, Rocket } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building,
      title: "FinTech & Banking",
      description: "Secure, compliant financial technology solutions with advanced analytics and real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant healthcare solutions with AI-powered diagnostics and patient management systems.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-success to-accent"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Scalable e-commerce platforms with personalized shopping experiences and advanced analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Manufacturing & IoT",
      description: "Smart manufacturing solutions with IoT integration and predictive maintenance capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Video,
      title: "Media & Entertainment",
      description: "Content management and streaming platforms with global CDN and real-time analytics.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Startups & SMEs",
      description: "Agile development solutions and cloud-native architectures for rapid scaling and growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Industry Solutions</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Tailored technology solutions across diverse industries, driving innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`h-48 bg-gradient-to-br ${industry.gradient} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url('${industry.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                    <industry.icon className="text-white text-4xl relative z-10" size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-4">{industry.title}</h3>
                  <p className="text-text-gray">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
