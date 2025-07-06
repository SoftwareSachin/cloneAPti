import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory,
  Search,
  Filter
} from "lucide-react";

const CASE_STUDIES_DATA = [
    {
      industry: "Healthcare",
      icon: Stethoscope,
      client: "Regional Medical Center",
      title: "Digital Transformation of Patient Care System",
      challenge: "A 500-bed hospital system was struggling with outdated patient management systems, causing long wait times and inefficient care delivery.",
      solution: "Implemented a comprehensive Electronic Health Records (EHR) system with integrated patient scheduling, real-time monitoring, and telemedicine capabilities.",
      results: [
        { metric: "Patient wait time reduction", value: "45%" },
        { metric: "Operational efficiency increase", value: "60%" },
        { metric: "Patient satisfaction score", value: "4.8/5" },
        { metric: "Cost savings annually", value: "$2.3M" }
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR"],
      timeline: "8 months",
      testimonial: "Aptivon transformed our entire patient care workflow. The new system has dramatically improved our efficiency and patient outcomes.",
      clientRole: "Chief Technology Officer"
    },
    {
      industry: "E-commerce",
      icon: ShoppingCart,
      client: "National Retail Chain",
      title: "AI-Powered E-commerce Platform Modernization",
      challenge: "Legacy e-commerce platform couldn't handle peak traffic loads and lacked personalization features, resulting in lost sales and poor customer experience.",
      solution: "Built a cloud-native e-commerce platform with AI-powered recommendations, real-time inventory management, and scalable infrastructure.",
      results: [
        { metric: "Online sales increase", value: "150%" },
        { metric: "Site performance improvement", value: "300%" },
        { metric: "Customer engagement boost", value: "85%" },
        { metric: "Revenue growth", value: "$15M" }
      ],
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "Kubernetes"],
      timeline: "12 months",
      testimonial: "The new platform exceeded all our expectations. Our customers love the personalized experience, and our sales have skyrocketed.",
      clientRole: "VP of Digital Commerce"
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      client: "Automotive Parts Manufacturer",
      title: "Smart Factory IoT Implementation",
      challenge: "Production inefficiencies and equipment downtime were costing millions annually due to lack of real-time monitoring and predictive maintenance.",
      solution: "Deployed IoT sensors and analytics platform for predictive maintenance, quality control, and production optimization across three manufacturing facilities.",
      results: [
        { metric: "Production downtime reduction", value: "60%" },
        { metric: "Quality defects decrease", value: "40%" },
        { metric: "Energy cost savings", value: "25%" },
        { metric: "ROI achieved", value: "280%" }
      ],
      technologies: ["Azure IoT", "Power BI", "Python", "Machine Learning", "Edge Computing"],
      timeline: "10 months",
      testimonial: "This IoT solution revolutionized our manufacturing process. We can now predict and prevent issues before they impact production.",
      clientRole: "Head of Operations"
    },
    {
      industry: "Financial Services",
      icon: Building2,
      client: "Community Bank",
      title: "Core Banking System Modernization",
      challenge: "Outdated mainframe system was limiting growth opportunities and customer service capabilities while increasing operational costs.",
      solution: "Migrated to modern cloud-based core banking system with enhanced security, real-time processing, and improved customer portal.",
      results: [
        { metric: "Transaction processing speed", value: "300%" },
        { metric: "Operational cost reduction", value: "35%" },
        { metric: "Customer satisfaction increase", value: "90%" },
        { metric: "New product launch time", value: "75% faster" }
      ],
      technologies: ["Java Spring", "PostgreSQL", "AWS", "React", "Microservices"],
      timeline: "14 months",
      testimonial: "The new banking system has positioned us for future growth. We can now offer innovative services that compete with larger banks.",
      clientRole: "Chief Information Officer"
    }
];

const METRICS_DATA = [
    { icon: TrendingUp, value: "250%", label: "Average ROI Delivered" },
    { icon: Clock, value: "40%", label: "Time-to-Market Improvement" },
    { icon: Users, value: "98%", label: "Client Satisfaction Rate" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Generated" }
];

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  
  const industries = ["All", "Healthcare", "E-commerce", "Manufacturing", "Financial Services"];
  
  const filteredCaseStudies = CASE_STUDIES_DATA.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how we've helped businesses across industries achieve digital transformation 
              and drive measurable growth through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-slate-600">Proven results across all our client engagements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS_DATA.map((metric: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-slate-900" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className="text-sm"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredCaseStudies.length} of {CASE_STUDIES_DATA.length} case studies
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how our technology solutions have transformed businesses and delivered 
              exceptional results across different industries.
            </p>
          </div>

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">No case studies found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCaseStudies.map((study: any, index: number) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-1 bg-slate-900 text-white p-8">
                      <div className="flex items-center mb-4">
                        <study.icon className="h-8 w-8 mr-3" />
                        <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                      <h4 className="text-lg mb-4 text-slate-300">{study.title}</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">Timeline</h5>
                          <p className="text-slate-300">{study.timeline}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-2">Technologies</h5>
                          <div className="flex flex-wrap gap-1">
                            {study.technologies.map((tech: string, idx: number) => (
                              <span key={idx} className="border border-white/30 text-white text-xs px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-2">Challenge</h5>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-900 mb-2">Solution</h5>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-900 mb-4">Results Achieved</h5>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result: any, idx: number) => (
                              <div key={idx} className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-900">
                                <div className="text-2xl font-bold text-slate-900">{result.value}</div>
                                <div className="text-sm text-slate-600">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-900">
                          <p className="text-slate-700 italic mb-3">"{study.testimonial}"</p>
                          <p className="text-sm font-semibold text-slate-900">- {study.clientRole}, {study.client}</p>
                        </div>

                        <div className="pt-4 border-t">
                          <Button 
                            className="w-full"
                            onClick={() => window.location.href = '/contact'}
                          >
                            Request Similar Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Success Methodology
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Every success story follows our systematic approach to digital transformation.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategic Assessment",
                  description: "Deep dive into business challenges and opportunities"
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Custom architecture tailored to your specific needs"
                },
                {
                  step: "03",
                  title: "Agile Implementation",
                  description: "Iterative development with continuous feedback"
                },
                {
                  step: "04",
                  title: "Optimization & Scale",
                  description: "Ongoing enhancement and performance optimization"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Our proven methodologies work across diverse industries, delivering measurable results for businesses of all sizes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Healthcare", projects: "15+ Projects", icon: "🏥" },
              { name: "Financial Services", projects: "12+ Projects", icon: "🏦" },
              { name: "E-commerce", projects: "20+ Projects", icon: "🛒" },
              { name: "Manufacturing", projects: "8+ Projects", icon: "🏭" },
              { name: "Education", projects: "10+ Projects", icon: "🎓" },
              { name: "Logistics", projects: "6+ Projects", icon: "🚛" },
              { name: "Real Estate", projects: "5+ Projects", icon: "🏢" },
              { name: "Media & Entertainment", projects: "7+ Projects", icon: "🎬" }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}