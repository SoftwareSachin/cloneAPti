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
      
      // Create a comprehensive HTML portfolio document
      const portfolioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aptivon Solutions - Portfolio 2025</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #1e293b; 
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 2rem; 
            background: white;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        .header { 
            text-align: center; 
            margin-bottom: 3rem; 
            padding: 2rem 0;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            border-radius: 12px;
            margin: -2rem -2rem 3rem -2rem;
        }
        .company-name { 
            font-size: 3rem; 
            font-weight: 700; 
            margin-bottom: 0.5rem;
            background: linear-gradient(45deg, #60a5fa, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .tagline { 
            font-size: 1.2rem; 
            opacity: 0.9; 
            font-weight: 300;
        }
        .section { 
            margin-bottom: 3rem; 
            padding: 2rem;
            background: #f8fafc;
            border-radius: 12px;
            border-left: 4px solid #3b82f6;
        }
        .section-title { 
            font-size: 2rem; 
            font-weight: 600; 
            margin-bottom: 1.5rem; 
            color: #1e293b;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .section-title::before {
            content: "▶";
            color: #3b82f6;
            font-size: 1.5rem;
        }
        .metrics-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 1.5rem; 
            margin: 2rem 0; 
        }
        .metric-card { 
            background: white; 
            padding: 1.5rem; 
            border-radius: 8px; 
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
        }
        .metric-value { 
            font-size: 2.5rem; 
            font-weight: 700; 
            color: #3b82f6; 
            display: block; 
        }
        .metric-label { 
            color: #64748b; 
            font-size: 0.9rem; 
            margin-top: 0.5rem;
        }
        .project-card { 
            background: white; 
            margin: 1.5rem 0; 
            padding: 2rem; 
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #10b981;
        }
        .project-title { 
            font-size: 1.5rem; 
            font-weight: 600; 
            color: #1e293b; 
            margin-bottom: 0.5rem;
        }
        .project-client { 
            color: #6366f1; 
            font-weight: 500; 
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        .project-meta { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
            gap: 1rem; 
            margin: 1rem 0;
            padding: 1rem;
            background: #f1f5f9;
            border-radius: 8px;
        }
        .meta-item { 
            text-align: center; 
        }
        .meta-label { 
            font-size: 0.8rem; 
            color: #64748b; 
            text-transform: uppercase; 
            letter-spacing: 0.5px;
        }
        .meta-value { 
            font-weight: 600; 
            color: #1e293b; 
            font-size: 1.1rem;
        }
        .results-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 1rem; 
            margin: 1.5rem 0;
        }
        .result-item { 
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); 
            padding: 1rem; 
            border-radius: 8px;
            text-align: center;
            border: 1px solid #10b981;
        }
        .result-value { 
            font-size: 1.5rem; 
            font-weight: 700; 
            color: #059669; 
        }
        .result-label { 
            color: #065f46; 
            font-size: 0.9rem; 
            margin-top: 0.5rem;
        }
        .tech-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
            gap: 1.5rem;
        }
        .tech-category { 
            background: white; 
            padding: 1.5rem; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .tech-category h3 { 
            color: #3b82f6; 
            margin-bottom: 1rem; 
            font-size: 1.2rem;
            font-weight: 600;
        }
        .tech-list { 
            list-style: none; 
            padding: 0;
        }
        .tech-list li { 
            padding: 0.3rem 0; 
            color: #475569;
            position: relative;
            padding-left: 1.5rem;
        }
        .tech-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        .testimonial { 
            background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); 
            padding: 2rem; 
            border-radius: 12px; 
            margin: 1.5rem 0;
            border-left: 4px solid #f59e0b;
            position: relative;
        }
        .testimonial::before {
            content: """;
            font-size: 4rem;
            color: #f59e0b;
            position: absolute;
            top: -0.5rem;
            left: 1rem;
            opacity: 0.3;
        }
        .testimonial-text { 
            font-style: italic; 
            font-size: 1.1rem; 
            color: #92400e; 
            margin-bottom: 1rem;
            position: relative;
            z-index: 1;
        }
        .testimonial-author { 
            font-weight: 600; 
            color: #78350f;
            position: relative;
            z-index: 1;
        }
        .contact-section { 
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%); 
            color: white; 
            padding: 2rem; 
            border-radius: 12px; 
            text-align: center;
        }
        .contact-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 1.5rem; 
            margin-top: 2rem;
        }
        .contact-item { 
            background: rgba(255, 255, 255, 0.1); 
            padding: 1.5rem; 
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }
        .contact-label { 
            font-size: 0.9rem; 
            opacity: 0.8; 
            margin-bottom: 0.5rem;
        }
        .contact-value { 
            font-weight: 600; 
            font-size: 1.1rem;
        }
        .cta-button {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 2rem;
            transition: transform 0.2s;
        }
        .cta-button:hover {
            transform: translateY(-2px);
        }
        @media print {
            body { background: white; }
            .container { box-shadow: none; margin: 0; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="company-name">APTIVON SOLUTIONS</h1>
            <p class="tagline">Comprehensive Portfolio & Capabilities Overview</p>
            <p style="margin-top: 1rem; opacity: 0.8;">Transforming Businesses Through Innovation</p>
        </div>

        <div class="section">
            <h2 class="section-title">Company Overview</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                Founded with a vision to transform businesses through innovative technology solutions, 
                Aptivon Solutions has emerged as a trusted partner for organizations seeking digital 
                transformation excellence. Our mission is empowering businesses with cutting-edge 
                technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <div class="metrics-grid">
                <div class="metric-card">
                    <span class="metric-value">3+</span>
                    <div class="metric-label">Satisfied Clients</div>
                </div>
                <div class="metric-card">
                    <span class="metric-value">2</span>
                    <div class="metric-label">Expert Team Members</div>
                </div>
                <div class="metric-card">
                    <span class="metric-value">5+</span>
                    <div class="metric-label">Projects Delivered</div>
                </div>
                <div class="metric-card">
                    <span class="metric-value">15+</span>
                    <div class="metric-label">Technologies Mastered</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Featured Projects</h2>
            
            <div class="project-card">
                <h3 class="project-title">Healthcare Digital Transformation</h3>
                <p class="project-client">Regional Medical Center</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <div class="meta-label">Duration</div>
                        <div class="meta-value">8 months</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Team Size</div>
                        <div class="meta-value">5 members</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Technologies</div>
                        <div class="meta-value">React Native, Node.js</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Status</div>
                        <div class="meta-value">Completed</div>
                    </div>
                </div>
                <p><strong>Challenge:</strong> Outdated patient management systems causing inefficiencies and long wait times.</p>
                <p><strong>Solution:</strong> Comprehensive EHR system with real-time monitoring and telemedicine capabilities.</p>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-value">45%</div>
                        <div class="result-label">Wait Time Reduction</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">60%</div>
                        <div class="result-label">Efficiency Increase</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">4.8/5</div>
                        <div class="result-label">Patient Satisfaction</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">$2.3M</div>
                        <div class="result-label">Annual Savings</div>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <h3 class="project-title">E-Commerce Platform Modernization</h3>
                <p class="project-client">National Retail Chain</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <div class="meta-label">Duration</div>
                        <div class="meta-value">6 months</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Team Size</div>
                        <div class="meta-value">4 members</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Technologies</div>
                        <div class="meta-value">React, Python, AWS</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Status</div>
                        <div class="meta-value">Completed</div>
                    </div>
                </div>
                <p><strong>Challenge:</strong> Legacy platform unable to handle peak traffic and lacking personalization.</p>
                <p><strong>Solution:</strong> AI-powered recommendation engine with scalable cloud architecture.</p>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-value">150%</div>
                        <div class="result-label">Sales Increase</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">40%</div>
                        <div class="result-label">Better Engagement</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">99.9%</div>
                        <div class="result-label">Uptime Achieved</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">25%</div>
                        <div class="result-label">Cost Reduction</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Technology Stack</h2>
            <div class="tech-grid">
                <div class="tech-category">
                    <h3>Frontend Technologies</h3>
                    <ul class="tech-list">
                        <li>React.js & Next.js</li>
                        <li>TypeScript & JavaScript ES6+</li>
                        <li>Tailwind CSS & Material-UI</li>
                        <li>React Native & Flutter</li>
                    </ul>
                </div>
                <div class="tech-category">
                    <h3>Backend Technologies</h3>
                    <ul class="tech-list">
                        <li>Node.js & Python</li>
                        <li>Express.js & Django</li>
                        <li>REST APIs & GraphQL</li>
                        <li>Microservices Architecture</li>
                    </ul>
                </div>
                <div class="tech-category">
                    <h3>Databases & Storage</h3>
                    <ul class="tech-list">
                        <li>PostgreSQL & MongoDB</li>
                        <li>Redis & Elasticsearch</li>
                        <li>AWS S3 & DynamoDB</li>
                        <li>Data Warehousing Solutions</li>
                    </ul>
                </div>
                <div class="tech-category">
                    <h3>Cloud & DevOps</h3>
                    <ul class="tech-list">
                        <li>AWS, Azure, Google Cloud</li>
                        <li>Docker & Kubernetes</li>
                        <li>CI/CD Pipelines</li>
                        <li>Infrastructure as Code</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Client Testimonials</h2>
            
            <div class="testimonial">
                <p class="testimonial-text">
                    "Aptivon transformed our entire patient care workflow. The new system has 
                    dramatically improved our efficiency and patient outcomes. Their team's 
                    expertise in healthcare technology is unmatched."
                </p>
                <p class="testimonial-author">
                    — Chief Technology Officer, Regional Medical Center
                </p>
            </div>

            <div class="testimonial">
                <p class="testimonial-text">
                    "The e-commerce platform delivered by Aptivon exceeded our expectations. 
                    The AI-powered features have significantly boosted our sales and customer 
                    engagement. Outstanding work!"
                </p>
                <p class="testimonial-author">
                    — Digital Director, National Retail Chain
                </p>
            </div>
        </div>

        <div class="contact-section">
            <h2 style="margin-bottom: 1rem;">Ready to Transform Your Business?</h2>
            <p style="font-size: 1.1rem; opacity: 0.9;">
                Let's discuss how our innovative technology solutions can drive your business growth 
                and digital transformation journey.
            </p>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="contact-label">Email</div>
                    <div class="contact-value">contact@aptivon.com</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">Phone</div>
                    <div class="contact-value">+1 (555) 123-4567</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">Website</div>
                    <div class="contact-value">www.aptivon.com</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">Location</div>
                    <div class="contact-value">Global Remote Team</div>
                </div>
            </div>
            
            <button class="cta-button">Schedule Your Consultation Today</button>
            
            <p style="margin-top: 2rem; opacity: 0.7; font-size: 0.9rem;">
                © 2025 Aptivon Solutions Pvt. Ltd. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>`;

      const blob = new Blob([portfolioHTML], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Aptivon-Solutions-Portfolio-2025.html';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Modern Portfolio Downloaded Successfully",
        description: "Your comprehensive HTML portfolio document has been downloaded. Open it in any browser to view the beautifully formatted portfolio.",
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