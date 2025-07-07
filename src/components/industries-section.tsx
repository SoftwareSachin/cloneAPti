import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Heart, 
  ShoppingCart, 
  Factory, 
  Video, 
  Rocket, 
  Users,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Globe,
  BarChart3
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Financial Services",
      icon: Building,
      description: "Secure fintech solutions, payment processing, and regulatory compliance systems.",
      features: ["Payment gateways", "Risk management", "Compliance automation"],
      gradient: "from-blue-500 to-cyan-600",
      metrics: { value: "500+", label: "Transactions/sec" },
      accentColor: "blue"
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      description: "HIPAA-compliant platforms, telemedicine solutions, and clinical data management.",
      features: ["Patient portals", "EHR integration", "Clinical analytics"],
      gradient: "from-emerald-500 to-teal-600",
      metrics: { value: "99.9%", label: "HIPAA Compliance" },
      accentColor: "emerald"
    },
    {
      title: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Scalable e-commerce platforms, inventory management, and customer analytics.",
      features: ["Multi-channel sales", "Inventory optimization", "Customer insights"],
      gradient: "from-violet-500 to-purple-600",
      metrics: { value: "300%", label: "Sales Increase" },
      accentColor: "violet"
    },
    {
      title: "Manufacturing & IoT",
      icon: Factory,
      description: "Smart factory solutions, predictive maintenance, and supply chain optimization.",
      features: ["IoT sensors", "Predictive analytics", "Supply chain tracking"],
      gradient: "from-orange-500 to-red-600",
      metrics: { value: "45%", label: "Cost Reduction" },
      accentColor: "orange"
    },
    {
      title: "Media & Entertainment",
      icon: Video,
      description: "Content management systems, streaming platforms, and audience engagement tools.",
      features: ["Content delivery", "User engagement", "Analytics dashboards"],
      gradient: "from-indigo-500 to-purple-600",
      metrics: { value: "10M+", label: "Users Served" },
      accentColor: "indigo"
    },
    {
      title: "Startups & SaaS",
      icon: Rocket,
      description: "MVP development, scalable architectures, and rapid market deployment strategies.",
      features: ["Rapid prototyping", "Scalable infrastructure", "Market validation"],
      gradient: "from-pink-500 to-rose-600",
      metrics: { value: "2-8x", label: "Faster Launch" },
      accentColor: "pink"
    }
  ];

  const industryStats = [
    { icon: Globe, value: "5+", label: "Industries Served", color: "text-blue-600" },
    { icon: TrendingUp, value: "5+", label: "Projects Delivered", color: "text-green-600" },
    { icon: Award, value: "98%", label: "Client Satisfaction", color: "text-purple-600" },
    { icon: BarChart3, value: "150%", label: "Avg. ROI Increase", color: "text-orange-600" }
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-6">
            <Target className="w-4 h-4" />
            <span className="font-medium text-sm">INDUSTRIES WE SERVE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Tailored technology solutions across diverse industries, driving innovation and 
            accelerating growth with deep industry-specific expertise.
          </p>
        </div>

        {/* Industry Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {industryStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group hover:shadow-md transition-shadow">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={industry.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group h-full">
              <CardContent className="p-0">
                <div className={`h-1 bg-gradient-to-r ${industry.gradient}`}></div>
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${industry.gradient} rounded-lg flex items-center justify-center`}>
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{industry.title}</h3>
                        <Badge variant="secondary" className={`bg-${industry.accentColor}-50 text-${industry.accentColor}-700 border-${industry.accentColor}-200 text-xs`}>
                          {industry.metrics.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                        {industry.metrics.value}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 text-${industry.accentColor}-500 flex-shrink-0`} />
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between group-hover:bg-slate-50 transition-colors mt-auto"
                  >
                    <span>View Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    {[Building, Heart, ShoppingCart, Factory].map((Icon, index) => (
                      <div key={index} className="w-12 h-12 bg-slate-100 rounded-full shadow-sm flex items-center justify-center border-2 border-white">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your Industry?</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Discover how our industry-specific solutions can accelerate your business growth and digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                    Schedule Industry Consultation
                    <Users className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Industry Case Studies
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}