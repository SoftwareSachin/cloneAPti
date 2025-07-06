import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Banknote, 
  Factory,
  Truck,
  Gamepad2,
  ArrowRight,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant solutions for hospitals, clinics, and pharmaceutical companies.",
      challenges: ["Patient data security", "Regulatory compliance", "System integration", "Telemedicine platforms"],
      solutions: ["Electronic Health Records", "Patient Management Systems", "Telehealth Applications", "Medical Device Integration"],
      caseStudy: "Reduced patient wait times by 45% for a 500-bed hospital system"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Secure, scalable fintech solutions for banks, credit unions, and investment firms.",
      challenges: ["Regulatory compliance", "Fraud detection", "Real-time processing", "Customer experience"],
      solutions: ["Core Banking Systems", "Payment Processing", "Risk Management", "Mobile Banking Apps"],
      caseStudy: "Increased transaction processing speed by 300% for regional bank"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Omnichannel retail solutions that enhance customer experience and drive sales.",
      challenges: ["Inventory management", "Customer personalization", "Multi-channel integration", "Supply chain optimization"],
      solutions: ["E-commerce Platforms", "POS Systems", "Inventory Management", "Customer Analytics"],
      caseStudy: "Boosted online sales by 150% with AI-powered recommendation engine"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing and operational excellence.",
      challenges: ["Production optimization", "Quality control", "Supply chain visibility", "Equipment monitoring"],
      solutions: ["MES Systems", "IoT Sensors", "Predictive Maintenance", "Quality Management"],
      caseStudy: "Reduced production downtime by 60% through predictive analytics"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital learning platforms and administrative systems for educational institutions.",
      challenges: ["Remote learning", "Student engagement", "Administrative efficiency", "Data security"],
      solutions: ["Learning Management Systems", "Student Information Systems", "Virtual Classrooms", "Assessment Tools"],
      caseStudy: "Improved student engagement by 80% with interactive learning platform"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Supply chain optimization and fleet management solutions for logistics companies.",
      challenges: ["Route optimization", "Fleet tracking", "Inventory visibility", "Cost management"],
      solutions: ["Fleet Management Systems", "Route Optimization", "Warehouse Management", "Supply Chain Analytics"],
      caseStudy: "Reduced delivery costs by 35% through route optimization algorithms"
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property management and real estate technology solutions for modern markets.",
      challenges: ["Property management", "Market analysis", "Customer acquisition", "Document management"],
      solutions: ["Property Management Systems", "CRM Platforms", "Market Analytics", "Virtual Tours"],
      caseStudy: "Increased property sales by 120% with virtual reality showcasing"
    },
    {
      icon: Gamepad2,
      title: "Entertainment & Media",
      description: "Content management and distribution platforms for media and entertainment companies.",
      challenges: ["Content delivery", "Audience engagement", "Rights management", "Monetization"],
      solutions: ["Content Management Systems", "Streaming Platforms", "Analytics Dashboards", "Digital Rights Management"],
      caseStudy: "Scaled video streaming to 10M+ concurrent users with 99.9% uptime"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "95%", label: "Project Success Rate" },
    { icon: Shield, value: "100%", label: "Security Compliance" },
    { icon: Building2, value: "15+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Industry Expertise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Solutions for
              <span className="text-purple-600"> Every Industry</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We understand the unique challenges of your industry and deliver tailored 
              technology solutions that drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Explore Your Industry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our deep industry expertise enables us to deliver solutions that address 
              specific challenges and drive innovation across diverse sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{industry.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.challenges.map((challenge, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {challenge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            • {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm text-green-800 font-medium">
                        Success Story: {industry.caseStudy}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Industry Leaders Choose Aptivon
              </h2>
              <p className="text-lg text-gray-600">
                Our industry-specific expertise and proven track record make us the trusted partner 
                for digital transformation across all sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Deep Industry Knowledge",
                  description: "Our team includes former industry professionals who understand your unique challenges and regulatory requirements."
                },
                {
                  title: "Proven Methodologies",
                  description: "Industry-tested frameworks and best practices that ensure successful project delivery and measurable ROI."
                },
                {
                  title: "Compliance Expertise",
                  description: "Complete understanding of industry regulations including HIPAA, SOX, PCI-DSS, and other compliance standards."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Industry Consultation
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}