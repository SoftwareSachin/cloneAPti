import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
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
  Target
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

  const handleScheduleConsultation = () => {
    setLocation("/contact");
  };

  const handleDownloadGuide = () => {
    setLocation("/resources");
  };

  const handleGetStarted = () => {
    setLocation("/contact");
  };

  const handleLearnMore = (serviceTitle: string) => {
    setLocation("/solutions");
  };

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadGuide}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Service Portfolio
              </Button>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service, index) => (
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
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <Button 
                      size="sm" 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLearnMore(service.title);
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote for {service.title}
                    </Button>
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

      {/* Success Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proven Results That Matter
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our track record speaks for itself - measurable outcomes that drive real business value
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SUCCESS_METRICS.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {metric.metric}
                </div>
                <div className="text-slate-600 font-medium">{metric.label}</div>
              </div>
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
            <div className="p-6 bg-slate-50 rounded-lg">
              <Phone className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">+917852099010</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Mail className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">singhal3.sachin7@gmail.com</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Calendar className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Book Meeting</h3>
              <p className="text-slate-600">Free consultation call</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white"
            onClick={handleGetStarted}
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}