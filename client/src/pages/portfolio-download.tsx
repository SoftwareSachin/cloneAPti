import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  FileText, 
  Star, 
  TrendingUp, 
  Users, 
  Calendar,
  CheckCircle,
  Award,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
  Building,
  Factory,
  Heart,
  ShoppingCart
} from "lucide-react";

export default function PortfolioDownload() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPortfolio = async () => {
    setIsDownloading(true);
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a blob with portfolio content
      const portfolioContent = `
APTIVON SOLUTIONS PVT. LTD.
COMPREHENSIVE PORTFOLIO

═══════════════════════════════════════════════════════════════

COMPANY OVERVIEW
────────────────────────────────────────────────────────────────

Founded with a vision to transform businesses through innovative technology 
solutions, Aptivon Solutions has emerged as a trusted partner for organizations 
seeking digital transformation excellence.

Our mission: Empowering businesses with cutting-edge technology solutions that 
drive growth, efficiency, and competitive advantage.

KEY METRICS
• 3+ Satisfied Clients
• 2 Expert Team Members  
• 5+ Projects Delivered
• 15+ Technologies Mastered

═══════════════════════════════════════════════════════════════

CORE SERVICES
────────────────────────────────────────────────────────────────

1. CLOUD INFRASTRUCTURE & MIGRATION
   • AWS, Azure, Google Cloud Platform expertise
   • Kubernetes orchestration and containerization
   • Serverless architecture implementation
   • Multi-cloud strategy and optimization

2. CUSTOM SOFTWARE DEVELOPMENT
   • Full-stack web applications
   • Mobile app development (iOS/Android)
   • Enterprise software solutions
   • API development and integration

3. AI & MACHINE LEARNING
   • Predictive analytics implementation
   • Natural language processing solutions
   • Computer vision applications
   • Automated decision-making systems

4. CYBERSECURITY & COMPLIANCE
   • Security audits and assessments
   • Compliance implementation (SOC 2, GDPR)
   • Threat detection and response
   • Zero-trust architecture

5. DATA ANALYTICS & BUSINESS INTELLIGENCE
   • Real-time analytics dashboards
   • Data warehouse design
   • ETL pipeline development
   • Machine learning model deployment

═══════════════════════════════════════════════════════════════

FEATURED PROJECTS
────────────────────────────────────────────────────────────────

PROJECT 1: HEALTHCARE DIGITAL TRANSFORMATION
Client: Regional Medical Center
Duration: 8 months
Technologies: React Native, Node.js, PostgreSQL, AWS

Challenge: Outdated patient management systems causing inefficiencies
Solution: Comprehensive EHR system with real-time monitoring
Results:
• 45% reduction in patient wait times
• 60% increase in operational efficiency
• 4.8/5 patient satisfaction score
• $2.3M annual cost savings

PROJECT 2: E-COMMERCE PLATFORM MODERNIZATION
Client: National Retail Chain
Duration: 6 months
Technologies: React, Python, AWS, Elasticsearch

Challenge: Legacy platform unable to handle peak traffic
Solution: AI-powered recommendation engine and scalable architecture
Results:
• 150% increase in online sales
• 40% improvement in customer engagement
• 99.9% uptime during peak seasons
• 25% reduction in infrastructure costs

PROJECT 3: FINTECH SECURITY ENHANCEMENT
Client: Financial Services Firm
Duration: 4 months
Technologies: Node.js, PostgreSQL, AWS, OAuth 2.0

Challenge: Enhanced security requirements for compliance
Solution: Zero-trust architecture with advanced authentication
Results:
• 100% compliance with financial regulations
• 99.99% security incident prevention
• 30% faster transaction processing
• Enhanced customer trust and retention

═══════════════════════════════════════════════════════════════

TECHNOLOGY STACK
────────────────────────────────────────────────────────────────

FRONTEND TECHNOLOGIES
• React.js, Next.js, Vue.js
• TypeScript, JavaScript ES6+
• Tailwind CSS, Material-UI
• React Native, Flutter

BACKEND TECHNOLOGIES
• Node.js, Python, Java
• Express.js, Django, Spring Boot
• REST APIs, GraphQL
• Microservices architecture

DATABASES
• PostgreSQL, MongoDB
• Redis, Elasticsearch
• DynamoDB, Firebase
• Data warehousing solutions

CLOUD & DEVOPS
• AWS, Azure, Google Cloud
• Docker, Kubernetes
• CI/CD pipelines
• Infrastructure as Code

SECURITY & COMPLIANCE
• OAuth 2.0, JWT authentication
• SSL/TLS encryption
• GDPR, SOC 2 compliance
• Penetration testing

═══════════════════════════════════════════════════════════════

INDUSTRY EXPERTISE
────────────────────────────────────────────────────────────────

HEALTHCARE
• Electronic Health Records (EHR)
• Telemedicine platforms
• HIPAA compliance solutions
• Medical device integration

FINANCIAL SERVICES
• Banking applications
• Payment processing systems
• Fraud detection algorithms
• Regulatory compliance tools

E-COMMERCE & RETAIL
• Online marketplace platforms
• Inventory management systems
• Customer analytics
• Mobile shopping applications

MANUFACTURING
• IoT sensor integration
• Predictive maintenance
• Quality control systems
• Supply chain optimization

═══════════════════════════════════════════════════════════════

DEVELOPMENT METHODOLOGY
────────────────────────────────────────────────────────────────

AGILE APPROACH
• Sprint-based development cycles
• Continuous integration and deployment
• Regular client feedback incorporation
• Iterative improvement process

QUALITY ASSURANCE
• Automated testing frameworks
• Code review processes
• Performance optimization
• Security vulnerability scanning

PROJECT MANAGEMENT
• Dedicated project managers
• Real-time progress tracking
• Transparent communication
• Risk mitigation strategies

═══════════════════════════════════════════════════════════════

TEAM CAPABILITIES
────────────────────────────────────────────────────────────────

TECHNICAL LEADERSHIP
• Full-stack development expertise
• Cloud architecture design
• DevOps and automation
• Security implementation

PRODUCT MANAGEMENT
• Strategic planning and roadmapping
• Market analysis and positioning
• User experience optimization
• Agile methodology expertise

CERTIFICATIONS & TRAINING
• AWS Certified Solutions Architect
• Google Cloud Professional
• Certified Scrum Master
• Cybersecurity certifications

═══════════════════════════════════════════════════════════════

CLIENT TESTIMONIALS
────────────────────────────────────────────────────────────────

"Aptivon transformed our entire patient care workflow. The new system has 
dramatically improved our efficiency and patient outcomes."
- Chief Technology Officer, Regional Medical Center

"The e-commerce platform delivered by Aptivon exceeded our expectations. 
The AI-powered features have significantly boosted our sales."
- Digital Director, National Retail Chain

"Their security implementation was flawless. We achieved full compliance 
ahead of schedule with zero security incidents."
- CISO, Financial Services Firm

═══════════════════════════════════════════════════════════════

CONTACT INFORMATION
────────────────────────────────────────────────────────────────

Aptivon Solutions Pvt. Ltd.
Email: contact@aptivon.com
Phone: +1 (555) 123-4567
Website: www.aptivon.com

Ready to transform your business with innovative technology solutions?
Schedule a consultation today.

© 2025 Aptivon Solutions Pvt. Ltd. All rights reserved.
`;

      const blob = new Blob([portfolioContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Aptivon-Solutions-Portfolio-2025.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Portfolio Downloaded Successfully",
        description: "Your comprehensive portfolio document has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleScheduleConsultation = () => {
    setLocation("/contact");
  };

  const portfolioFeatures = [
    {
      icon: Award,
      title: "Project Showcase",
      description: "Detailed case studies with measurable results and client testimonials"
    },
    {
      icon: Cpu,
      title: "Technical Expertise",
      description: "Comprehensive overview of our technology stack and capabilities"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Real data on project outcomes and business impact"
    },
    {
      icon: Shield,
      title: "Industry Solutions",
      description: "Sector-specific expertise and compliance achievements"
    },
    {
      icon: Users,
      title: "Team Credentials",
      description: "Professional certifications and technical leadership profiles"
    },
    {
      icon: CheckCircle,
      title: "Methodology",
      description: "Our proven development and project management approach"
    }
  ];

  const highlights = [
    { label: "Success Rate", value: "100%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star },
    { label: "On-Time Delivery", value: "100%", icon: Calendar },
    { label: "Security Incidents", value: "0", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-slate-200/60">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Comprehensive Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Download Our Complete
              <span className="block bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                Portfolio Document
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Get instant access to our comprehensive portfolio featuring detailed project case studies, 
              technical capabilities, client testimonials, and proven methodologies.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl rounded-lg p-4 border border-slate-200/60">
                  <highlight.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{highlight.value}</div>
                  <div className="text-sm text-slate-600">{highlight.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg"
                onClick={handleDownloadPortfolio}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download Portfolio
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={handleScheduleConsultation}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Inside Our Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive document showcasing our capabilities, achievements, and approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Portfolio Preview
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Sample sections from our comprehensive portfolio document.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Showcase */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <Badge variant="secondary">Healthcare</Badge>
                </div>
                <CardTitle>Regional Medical Center</CardTitle>
                <CardDescription>Digital Transformation Project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Wait Time Reduction:</span>
                        <span className="text-slate-900 font-medium ml-1">45%</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Efficiency Increase:</span>
                        <span className="text-slate-900 font-medium ml-1">60%</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Patient Satisfaction:</span>
                        <span className="text-slate-900 font-medium ml-1">4.8/5</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Annual Savings:</span>
                        <span className="text-slate-900 font-medium ml-1">$2.3M</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {["React Native", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR"].map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Cloud className="h-6 w-6 text-blue-500" />
                  <Badge variant="secondary">Cloud Infrastructure</Badge>
                </div>
                <CardTitle>Technology Capabilities</CardTitle>
                <CardDescription>Our comprehensive technology stack</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1">
                      {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Node.js", "Python", "PostgreSQL", "Redis"].map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-1">
                      {["AWS", "Docker", "Kubernetes", "CI/CD"].map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See Our Complete Portfolio?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Download our comprehensive portfolio document to explore detailed case studies, 
            technical capabilities, and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadPortfolio}
              disabled={isDownloading}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2" />
                  Preparing Download...
                </>
              ) : (
                <>
                  <Download className="h-5 w-5 mr-2" />
                  Download Complete Portfolio
                </>
              )}
            </Button>
            <Button 
              variant="outline"
              onClick={handleScheduleConsultation}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Discussion
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}