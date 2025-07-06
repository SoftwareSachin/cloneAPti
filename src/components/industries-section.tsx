// Removed framer-motion import
import { Card, CardContent } from "@/components/ui/card";
import { Building, Heart, ShoppingCart, Factory, Video, Rocket, Users } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Financial Services",
      icon: Building,
      description: "Secure fintech solutions, payment processing, and regulatory compliance systems.",
      features: ["Payment gateways", "Risk management", "Compliance automation"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      description: "HIPAA-compliant platforms, telemedicine solutions, and clinical data management.",
      features: ["Patient portals", "EHR integration", "Clinical analytics"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Scalable e-commerce platforms, inventory management, and customer analytics.",
      features: ["Multi-channel sales", "Inventory optimization", "Customer insights"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Manufacturing & IoT",
      icon: Factory,
      description: "Smart factory solutions, predictive maintenance, and supply chain optimization.",
      features: ["IoT sensors", "Predictive analytics", "Supply chain tracking"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Media & Entertainment",
      icon: Video,
      description: "Content management systems, streaming platforms, and audience engagement tools.",
      features: ["Content delivery", "User engagement", "Analytics dashboards"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Startups & SaaS",
      icon: Rocket,
      description: "MVP development, scalable architectures, and rapid market deployment strategies.",
      features: ["Rapid prototyping", "Scalable infrastructure", "Market validation"],
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-8 py-4 bg-slate-100 rounded-2xl mb-8">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-slate-700 mr-3" />
              <span className="text-slate-700 font-semibold text-base tracking-wide">INDUSTRIES WE SERVE</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 font-display">Industry Solutions</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Tailored technology solutions across diverse industries, driving innovation and accelerating growth with industry-specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={industry.title} className="h-full">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 group-hover:bg-slate-400 transition-colors"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}