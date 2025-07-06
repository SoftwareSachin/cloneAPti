import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Settings, Server, Palette } from "lucide-react";

export default function AdvancedCapabilities() {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Innovation Lab & PoC Accelerator",
      description: "Rapid prototyping workshops for AR/VR, IoT and emerging technologies—validate new ideas in days, not months.",
      features: ["AR/VR prototype development", "IoT solution validation", "Emerging tech experimentation"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Settings,
      title: "Platform Engineering Practice",
      description: "Internal developer platforms empowering teams with self-service infrastructure and standardized toolchains.",
      features: ["Self-service infrastructure", "Standardized toolchains", "Productivity boosters"],
      gradient: "from-success to-accent"
    },
    {
      icon: Server,
      title: "GitOps & Serverless Architectures",
      description: "Declarative, Git-driven deployments with cost-efficient serverless functions for burst-scale workloads.",
      features: ["Git-driven deployments", "AWS Lambda, Azure Functions", "Event-driven architectures"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Digital Experience Studio",
      description: "UX research, design-thinking sprints, and interactive prototypes for seamless customer journeys.",
      features: ["UX research & design sprints", "Headless CMS pipelines", "Interactive prototypes"],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Advanced Capabilities</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Cutting-edge innovations and specialized services to give your business a competitive edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${capability.gradient} p-8 rounded-2xl text-white h-full`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <capability.icon className="text-2xl" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold">{capability.title}</h3>
                  </div>
                  <p className="text-lg mb-6">{capability.description}</p>
                  <ul className="space-y-2 text-sm">
                    {capability.features.map((feature, idx) => (
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
