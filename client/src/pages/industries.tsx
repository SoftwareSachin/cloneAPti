import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
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
  Shield,
  Search,
  Filter,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  X
} from "lucide-react";

const INDUSTRIES_DATA = [
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

const STATS_DATA = [
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "95%", label: "Project Success Rate" },
    { icon: Shield, value: "100%", label: "Security Compliance" },
    { icon: Building2, value: "15+", label: "Industries Served" }
];

export default function Industries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);
  const [consultationForm, setConsultationForm] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    company: "",
    industry: "",
    phone: "",
    message: ""
  });
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  
  const { toast } = useToast();
  
  const categories = ["All", "Technology", "Traditional", "Service"];
  
  const getIndustryCategory = (industry: any) => {
    const techIndustries = ["Entertainment & Media"];
    const serviceIndustries = ["Healthcare & Life Sciences", "Financial Services", "Education"];
    if (techIndustries.includes(industry.title)) return "Technology";
    if (serviceIndustries.includes(industry.title)) return "Service";
    return "Traditional";
  };
  
  const filteredIndustries = INDUSTRIES_DATA.filter(industry => {
    const matchesSearch = industry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         industry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         industry.challenges.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         industry.solutions.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || getIndustryCategory(industry) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('/api/industry-consultation', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Sent!",
        description: "Our industry experts will contact you within 24 hours to discuss your specific needs.",
      });
      setConsultationForm({
        firstName: "", lastName: "", email: "", company: "", industry: "", phone: "", message: ""
      });
      setShowConsultationForm(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send consultation request. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    consultationMutation.mutate({
      ...consultationForm,
      industry: selectedIndustry?.title || consultationForm.industry
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Technology Solutions for Every Industry
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We understand the unique challenges of your industry and deliver tailored 
              technology solutions that drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white"
                onClick={() => document.getElementById('industries-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Your Industry
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowConsultationForm(true)}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS_DATA.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-slate-900" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
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
                placeholder="Search industries, solutions, challenges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredIndustries.length} of {INDUSTRIES_DATA.length} industries
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our deep industry expertise enables us to deliver solutions that address 
              specific challenges and drive innovation across diverse sectors.
            </p>
          </div>

          {filteredIndustries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">No industries found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((industry: any, index: number) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                  <p className="text-slate-600 mb-6">{industry.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Challenges:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.challenges.map((challenge: string, idx: number) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border">
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution: string, idx: number) => (
                          <li key={idx} className="text-sm text-slate-600">
                            • {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-slate-900">
                      <p className="text-sm text-slate-700 font-medium">
                        Success Story: {industry.caseStudy}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <Button 
                        className="w-full"
                        onClick={() => {
                          setSelectedIndustry(industry);
                          setShowConsultationForm(true);
                        }}
                      >
                        Get Industry Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Industry Leaders Choose Aptivon
              </h2>
              <p className="text-lg text-slate-600">
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
              ].map((item: any, index: number) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Industry Consultation Request
              </h2>
              <button 
                onClick={() => setShowConsultationForm(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>
            </div>

            {selectedIndustry && (
              <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  Industry: <span className="font-semibold text-slate-900">{selectedIndustry.title}</span>
                </p>
              </div>
            )}

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={consultationForm.firstName}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={consultationForm.lastName}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={consultationForm.email}
                  onChange={(e) => setConsultationForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Company
                </label>
                <Input
                  type="text"
                  value={consultationForm.company}
                  onChange={(e) => setConsultationForm(prev => ({ ...prev, company: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={consultationForm.phone}
                  onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  placeholder="Tell us about your specific industry challenges and requirements..."
                  value={consultationForm.message}
                  onChange={(e) => setConsultationForm(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowConsultationForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={consultationMutation.isPending}
                  className="flex-1"
                >
                  {consultationMutation.isPending ? "Sending..." : "Request Consultation"}
                </Button>
              </div>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              By submitting this form, you agree to receive updates about our services.
            </p>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}