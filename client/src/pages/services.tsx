import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { 
  Cloud, 
  Server, 
  Brain, 
  Smartphone, 
  Shield, 
  Database, 
  Cpu, 
  Code,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Download,
  TrendingUp,
  Users,
  Target,
  Search,
  Filter,
  Play,
  FileText,
  Send,
  Star,
  Activity,
  Timer,
  DollarSign,
  Zap,
  BarChart3
} from "lucide-react";

// Enhanced services data with comprehensive offerings
const SERVICES_DATA = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Migration",
    description: "Complete cloud transformation services with enterprise-grade security and cost optimization.",
    features: [
      "Multi-cloud strategy and architecture",
      "AWS, Azure, GCP migration services", 
      "Infrastructure as Code (IaC) implementation",
      "Cloud cost optimization and monitoring"
    ],
    benefits: "Reduce infrastructure costs by 40% while improving scalability and reliability",
    pricing: "Starting from ₹25,000",
    duration: "2-6 months"
  },
  {
    icon: Server,
    title: "DevOps & Automation", 
    description: "Streamline development and operations with automated CI/CD pipelines and infrastructure management.",
    features: [
      "CI/CD pipeline design and implementation",
      "Container orchestration with Kubernetes",
      "Infrastructure automation and monitoring", 
      "Release management and deployment strategies"
    ],
    benefits: "Accelerate deployment cycles by 75% and reduce manual errors significantly",
    pricing: "Starting from ₹18,000",
    duration: "1-3 months"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Data-driven insights and intelligent automation through custom AI/ML implementations.",
    features: [
      "Custom machine learning model development",
      "Predictive analytics and forecasting",
      "Natural language processing solutions",
      "Computer vision and image recognition"
    ],
    benefits: "Improve decision-making accuracy by 60% with data-driven insights",
    pricing: "Starting from ₹35,000",
    duration: "3-8 months"
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Modern web and mobile applications built with scalable architectures and user-centric design.",
    features: [
      "Progressive web applications (PWA)",
      "Native iOS and Android development",
      "Cross-platform mobile solutions",
      "API design and microservices architecture"
    ],
    benefits: "Launch products 50% faster with scalable, maintainable code architecture",
    pricing: "Starting from ₹28,000",
    duration: "2-5 months"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security frameworks to protect your business from evolving cyber threats.",
    features: [
      "Security audits and penetration testing",
      "Compliance management (SOC2, GDPR)",
      "Identity and access management",
      "Incident response and recovery"
    ],
    benefits: "Achieve 99.9% threat detection rate with enterprise-grade security protocols",
    pricing: "Starting from ₹15,000",
    duration: "1-4 months"
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable business insights with advanced analytics platforms.",
    features: [
      "Data warehousing and ETL pipelines",
      "Real-time analytics and dashboards",
      "Predictive modeling and forecasting",
      "Business intelligence implementation"
    ],
    benefits: "Increase decision-making speed by 60% with real-time data visualization",
    pricing: "Starting from ₹22,000",
    duration: "2-4 months"
  }
];

const SUCCESS_METRICS = [
  { metric: "500+", label: "Projects Delivered", icon: Target },
  { metric: "100+", label: "Enterprise Clients", icon: Users },
  { metric: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
  { metric: "40%", label: "Average Cost Reduction", icon: Database }
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [realTimeMetrics, setRealTimeMetrics] = useState(SUCCESS_METRICS);
  const [quoteForm, setQuoteForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    requirements: ""
  });
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: ""
  });
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [downloadRequests, setDownloadRequests] = useState<string[]>([]);
  const { toast } = useToast();

  // Real-time metrics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => prev.map(metric => ({
        ...metric,
        metric: metric.label === "Projects Delivered" ? 
          `${Math.floor(Math.random() * 10) + 500}+` : 
          metric.label === "Enterprise Clients" ?
          `${Math.floor(Math.random() * 5) + 100}+` :
          metric.metric
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const quoteMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          message: `Service Quote Request for ${data.service}\n\nBudget: ${data.budget}\nTimeline: ${data.timeline}\nRequirements: ${data.requirements}`
        }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit quote request');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "Our team will get back to you within 4 hours with a detailed quote.",
      });
      setQuoteForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        requirements: ""
      });
      setShowQuoteModal(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive"
      });
    }
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.name.split(' ')[0] || data.name,
          lastName: data.name.split(' ').slice(1).join(' ') || 'Client',
          email: data.email,
          company: 'Consultation Request',
          message: `Consultation Request for ${data.service}\n\nPhone: ${data.phone}\nPreferred Date: ${data.preferredDate}\nMessage: ${data.message}`
        }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to schedule consultation');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Scheduled!",
        description: "We'll call you within 24 hours to confirm your appointment.",
      });
      setConsultationForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        message: ""
      });
      setShowConsultationModal(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to schedule consultation. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleScheduleConsultation = () => {
    setShowConsultationModal(true);
  };

  const handleDownloadGuide = () => {
    setDownloadRequests(prev => [...prev, `service-guide-${Date.now()}`]);
    toast({
      title: "Download Started",
      description: "Service portfolio guide is being prepared...",
    });
    
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Service portfolio has been downloaded successfully!",
      });
      setDownloadRequests(prev => prev.slice(1));
    }, 2000);
  };

  const handleGetStarted = () => {
    setShowQuoteModal(true);
  };

  const handleLearnMore = (serviceTitle: string) => {
    setQuoteForm(prev => ({ ...prev, service: serviceTitle }));
    setShowQuoteModal(true);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.firstName || !quoteForm.lastName || !quoteForm.email || !quoteForm.service) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    quoteMutation.mutate(quoteForm);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationForm.name || !consultationForm.email || !consultationForm.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    consultationMutation.mutate(consultationForm);
  };

  const handlePlayDemo = (serviceName: string) => {
    toast({
      title: "Demo Starting",
      description: `Opening ${serviceName} demo video...`,
    });
  };

  const handleContactCall = () => {
    window.open('tel:+917852099010', '_blank');
    toast({
      title: "Opening Phone Dialer",
      description: "Calling +917852099010",
    });
  };

  const handleContactEmail = () => {
    window.open('mailto:singhal3.sachin7@gmail.com?subject=Service Inquiry', '_blank');
    toast({
      title: "Opening Email Client",
      description: "Composing email to singhal3.sachin7@gmail.com",
    });
  };

  // Filter services based on search and category
  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = filterCategory === "All" || 
                           (filterCategory === "Development" && (service.title.includes("Application") || service.title.includes("AI"))) ||
                           (filterCategory === "Infrastructure" && (service.title.includes("Cloud") || service.title.includes("DevOps"))) ||
                           (filterCategory === "Security" && service.title.includes("Cybersecurity")) ||
                           (filterCategory === "Analytics" && service.title.includes("Data"));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise Technology Services
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable business growth through innovation and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleGetStarted}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Get Custom Quote
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadGuide}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg"
                disabled={downloadRequests.length > 0}
              >
                <Download className="h-5 w-5 mr-2" />
                {downloadRequests.length > 0 ? 'Preparing...' : 'Service Portfolio'}
              </Button>
            </div>
            
            {/* Interactive Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search services, features, technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-900"
                  />
                </div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="sm:w-48 border-slate-300 focus:border-slate-900">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Services</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                    <SelectItem value="Security">Security</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Service Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end technology services that cover every aspect of your digital infrastructure
            </p>
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No services found</h3>
              <p className="text-slate-600">Try adjusting your search query or filter category.</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white border rounded-xl p-8 transition-all duration-300 cursor-pointer ${
                  selectedService === index 
                    ? 'border-slate-900 shadow-xl scale-105' 
                    : 'border-slate-200 hover:shadow-lg hover:border-slate-300'
                }`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">
                        {service.pricing}
                      </span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <div className="text-sm font-medium text-slate-700 mb-1">Business Impact:</div>
                  <div className="text-sm text-slate-600">{service.benefits}</div>
                </div>

                {selectedService === index && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        size="sm" 
                        className="bg-slate-900 hover:bg-slate-800 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLearnMore(service.title);
                        }}
                      >
                        <DollarSign className="h-4 w-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayDemo(service.title);
                        }}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                    </div>
                    <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                      💡 Click "Get Quote" for instant pricing or "View Demo" to see this service in action
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Delivery Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery & Assessment</h3>
              <p className="text-slate-600 text-sm">Comprehensive analysis of current state and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategy & Planning</h3>
              <p className="text-slate-600 text-sm">Detailed roadmap with milestones and success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Implementation</h3>
              <p className="text-slate-600 text-sm">Agile development with continuous feedback and iteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Support & Optimization</h3>
              <p className="text-slate-600 text-sm">Ongoing monitoring and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Success Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <Activity className="inline-block w-8 h-8 mr-3 text-green-600" />
              Live Performance Metrics
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-time view of our service delivery performance and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {realTimeMetrics.map((metric, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 animate-pulse">
                    {metric.metric}
                  </div>
                  <div className="text-slate-600 font-medium">{metric.label}</div>
                  {(metric.label === "Projects Delivered" || metric.label === "Enterprise Clients") && (
                    <div className="mt-2 text-xs text-green-600 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Live Updates
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadGuide}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to get started? Our experts are standing by to help you choose the right service for your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleContactCall}>
              <CardContent className="p-0">
                <Phone className="h-8 w-8 text-slate-900 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600">+917852099010</p>
                <div className="mt-2 text-xs text-slate-500">Click to call now</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleContactEmail}>
              <CardContent className="p-0">
                <Mail className="h-8 w-8 text-slate-900 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600">singhal3.sachin7@gmail.com</p>
                <div className="mt-2 text-xs text-slate-500">Click to email</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleScheduleConsultation}>
              <CardContent className="p-0">
                <Calendar className="h-8 w-8 text-slate-900 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Book Meeting</h3>
                <p className="text-slate-600">Free consultation</p>
                <div className="mt-2 text-xs text-slate-500">Click to schedule</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white"
              onClick={handleScheduleConsultation}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGetStarted}
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Instant Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Get Service Quote</h3>
                <Button variant="ghost" onClick={() => setShowQuoteModal(false)}>✕</Button>
              </div>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={quoteForm.firstName}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={quoteForm.lastName}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service">Service *</Label>
                  <Select value={quoteForm.service} onValueChange={(value) => setQuoteForm(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES_DATA.map((service, index) => (
                        <SelectItem key={index} value={service.title}>{service.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={quoteForm.budget} onValueChange={(value) => setQuoteForm(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="₹1,00,000+">₹1,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select value={quoteForm.timeline} onValueChange={(value) => setQuoteForm(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ASAP">ASAP</SelectItem>
                        <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                        <SelectItem value="Within 3 months">Within 3 months</SelectItem>
                        <SelectItem value="Within 6 months">Within 6 months</SelectItem>
                        <SelectItem value="Flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="requirements">Project Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={quoteForm.requirements}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder="Tell us about your project requirements, goals, and any specific needs..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800"
                  disabled={quoteMutation.isPending}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {quoteMutation.isPending ? 'Sending...' : 'Get Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Schedule Consultation</h3>
                <Button variant="ghost" onClick={() => setShowConsultationModal(false)}>✕</Button>
              </div>
              
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={consultationForm.name}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={consultationForm.email}
                      onChange={(e) => setConsultationForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={consultationForm.phone}
                      onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+917852099010"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={consultationForm.service} onValueChange={(value) => setConsultationForm(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Consultation">General Consultation</SelectItem>
                      {SERVICES_DATA.map((service, index) => (
                        <SelectItem key={index} value={service.title}>{service.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="preferredDate">Preferred Date/Time</Label>
                  <Input
                    id="preferredDate"
                    value={consultationForm.preferredDate}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                    placeholder="e.g., Tomorrow 2 PM, Next Monday morning"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={consultationForm.message}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Brief description of what you'd like to discuss..."
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800"
                  disabled={consultationMutation.isPending}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {consultationMutation.isPending ? 'Scheduling...' : 'Schedule Consultation'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}