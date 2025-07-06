import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Settings, Server, Palette, Star } from "lucide-react";

export default function AdvancedCapabilities() {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Innovation Lab & PoC Accelerator",
      description: "Rapid prototyping workshops for AR/VR, IoT and emerging technologies—validate new ideas in days, not months.",
      features: ["AR/VR prototype development", "IoT solution validation", "Emerging tech experimentation"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Settings,
      title: "Platform Engineering Practice",
      description: "Internal developer platforms empowering teams with self-service infrastructure and standardized toolchains.",
      features: ["Self-service infrastructure", "Standardized toolchains", "Productivity boosters"],
      gradient: "from-green-600 to-blue-600"
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
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-green-100 rounded-full mb-6">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-600 font-semibold text-sm">ADVANCED CAPABILITIES</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Innovation at Scale</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge innovations and specialized services designed to give your business a distinctive competitive advantage in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="h-full"
            >
              <Card className={`bg-gradient-to-br ${capability.gradient} p-10 rounded-3xl text-white h-full shadow-premium group overflow-hidden relative hover-lift`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="text-3xl" size={40} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 font-display">{capability.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg mb-8 text-white/90 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-4">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
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
