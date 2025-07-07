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
      toast({
        title: "Generating Advanced Portfolio...",
        description: "Creating your comprehensive portfolio document with detailed case studies",
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const createAdvancedPortfolioHTML = () => {
        const currentDate = new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aptivon Solutions - Professional Portfolio 2025</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; 
            line-height: 1.6; 
            color: #1a1a1a; 
            background: #ffffff;
            font-size: 14px;
        }
        .page { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 60px 80px; 
            background: white;
            min-height: 100vh;
            page-break-after: always;
        }
        .page:last-child { page-break-after: avoid; }
        
        .cover-page {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .cover-content {
            position: relative;
            z-index: 1;
        }
        .company-logo {
            width: 120px;
            height: 120px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            font-size: 48px;
            font-weight: bold;
            border: 2px solid rgba(255,255,255,0.2);
        }
        .cover-title {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #ffffff, #e2e8f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .cover-subtitle {
            font-size: 1.8rem;
            margin-bottom: 40px;
            color: #e2e8f0;
            font-weight: 300;
        }
        .cover-tagline {
            font-size: 1.2rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 60px;
        }
        .cover-stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            margin-top: 60px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            color: #38bdf8;
        }
        .stat-label {
            font-size: 1.1rem;
            color: #cbd5e1;
            margin-top: 10px;
        }
        
        .header { 
            text-align: center; 
            margin-bottom: 60px; 
            padding: 40px 0;
            border-bottom: 3px solid #e2e8f0;
        }
        .header h1 {
            font-size: 3.5rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 15px;
        }
        .header p {
            font-size: 1.4rem;
            color: #64748b;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .section {
            margin-bottom: 80px;
        }
        .section h2 {
            font-size: 2.8rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 30px;
            position: relative;
            padding-left: 20px;
        }
        .section h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 6px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            border-radius: 3px;
        }
        
        .grid-2 { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 40px; 
            margin-bottom: 40px;
        }
        .grid-3 { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            margin-bottom: 40px;
        }
        .grid-4 { 
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            gap: 25px; 
            margin-bottom: 40px;
        }
        
        .card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .card h4 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 15px;
        }
        .card p {
            color: #64748b;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        .project-card {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }
        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #3b82f6, #1d4ed8, #7c3aed);
        }
        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 25px;
        }
        .project-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #0f172a;
        }
        .project-status {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: #dcfce7;
            color: #166534;
        }
        .project-meta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 25px;
        }
        .meta-item {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .meta-label {
            font-size: 0.9rem;
            color: #64748b;
            margin-bottom: 8px;
        }
        .meta-value {
            font-size: 1.1rem;
            font-weight: 600;
            color: #0f172a;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 25px;
        }
        .tech-tag {
            background: #3b82f6;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 25px;
        }
        .result-item {
            background: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .result-number {
            font-size: 2rem;
            font-weight: 700;
            color: #16a34a;
            margin-bottom: 8px;
        }
        .result-label {
            font-size: 0.9rem;
            color: #64748b;
        }
        
        .metrics-card {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .metric-number {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #38bdf8, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .metric-label {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .footer {
            text-align: center;
            padding: 40px 0;
            border-top: 2px solid #e2e8f0;
            margin-top: 60px;
        }
        .footer-logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 20px;
        }
        .footer-text {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 20px;
        }
        
        @media print {
            .page { 
                margin: 0; 
                padding: 40px;
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <!-- Cover Page -->
    <div class="page cover-page">
        <div class="cover-content">
            <div class="company-logo">AS</div>
            <h1 class="cover-title">APTIVON SOLUTIONS</h1>
            <p class="cover-subtitle">Professional Portfolio 2025</p>
            <p class="cover-tagline">
                Transforming businesses through innovative technology solutions and strategic digital transformation initiatives
            </p>
            <div class="cover-stats">
                <div class="stat-item">
                    <div class="stat-number">5+</div>
                    <div class="stat-label">Projects Delivered</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">3+</div>
                    <div class="stat-label">Satisfied Clients</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Success Rate</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Executive Summary -->
    <div class="page">
        <div class="header">
            <h1>Executive Summary</h1>
            <p>Your trusted partner in digital transformation and technology innovation</p>
        </div>
        
        <div class="section">
            <h2>Company Overview</h2>
            <div class="grid-2">
                <div class="card">
                    <h4>Mission Statement</h4>
                    <p>To empower businesses through cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.</p>
                </div>
                <div class="card">
                    <h4>Vision</h4>
                    <p>To become the leading technology partner for businesses seeking transformative digital solutions and sustainable growth.</p>
                </div>
            </div>
            
            <div class="grid-3">
                <div class="metrics-card">
                    <div class="metric-number">2</div>
                    <div class="metric-label">Years Experience</div>
                </div>
                <div class="metrics-card">
                    <div class="metric-number">15+</div>
                    <div class="metric-label">Technologies Mastered</div>
                </div>
                <div class="metrics-card">
                    <div class="metric-number">24/7</div>
                    <div class="metric-label">Support Available</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Project Portfolio -->
    <div class="page">
        <div class="header">
            <h1>Project Portfolio</h1>
            <p>Comprehensive showcase of successful project deliveries and client outcomes</p>
        </div>
        
        <div class="section">
            <h2>Featured Projects</h2>
            
            <div class="project-card">
                <div class="project-header">
                    <div class="project-title">E-commerce Platform Modernization</div>
                    <div class="project-status">Completed</div>
                </div>
                <div class="project-meta">
                    <div class="meta-item">
                        <div class="meta-label">Client</div>
                        <div class="meta-value">Rajasthan Retail Chain</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Duration</div>
                        <div class="meta-value">6 Months</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Team Size</div>
                        <div class="meta-value">2 Developers</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Budget</div>
                        <div class="meta-value">Mid-Scale</div>
                    </div>
                </div>
                <div class="tech-tags">
                    <span class="tech-tag">React.js</span>
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">AWS</span>
                    <span class="tech-tag">Docker</span>
                </div>
                <p><strong>Challenge:</strong> Legacy e-commerce platform with poor performance and limited scalability.</p>
                <p><strong>Solution:</strong> Complete platform modernization with microservices architecture, real-time inventory management, and enhanced user experience.</p>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-number">150%</div>
                        <div class="result-label">Sales Increase</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">75%</div>
                        <div class="result-label">Load Time Reduction</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">200%</div>
                        <div class="result-label">User Engagement</div>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-header">
                    <div class="project-title">Healthcare Management System</div>
                    <div class="project-status">Completed</div>
                </div>
                <div class="project-meta">
                    <div class="meta-item">
                        <div class="meta-label">Client</div>
                        <div class="meta-value">Jaipur Medical Center</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Duration</div>
                        <div class="meta-value">4 Months</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Team Size</div>
                        <div class="meta-value">2 Developers</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Budget</div>
                        <div class="meta-value">Mid-Scale</div>
                    </div>
                </div>
                <div class="tech-tags">
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">.NET Core</span>
                    <span class="tech-tag">SQL Server</span>
                    <span class="tech-tag">Azure</span>
                    <span class="tech-tag">FHIR</span>
                </div>
                <p><strong>Challenge:</strong> Paper-based patient records and inefficient appointment scheduling system.</p>
                <p><strong>Solution:</strong> Comprehensive digital transformation with electronic health records, appointment management, and patient portal.</p>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-number">60%</div>
                        <div class="result-label">Administrative Efficiency</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">40%</div>
                        <div class="result-label">Time Savings</div>
                    </div>
                    <div class="result-item">
                        <div class="result-number">95%</div>
                        <div class="result-label">Patient Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Information -->
    <div class="page">
        <div class="header">
            <h1>Contact Information</h1>
            <p>Ready to transform your business with cutting-edge technology solutions?</p>
        </div>
        
        <div class="section">
            <div class="grid-2">
                <div class="card">
                    <h4>Get in Touch</h4>
                    <p><strong>Email:</strong> singhal3.sachin7@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7852099010</p>
                    <p><strong>Website:</strong> www.aptivonsolutions.com</p>
                    <p><strong>Business Hours:</strong> Mon-Sat: 9 AM - 6 PM IST</p>
                </div>
                <div class="card">
                    <h4>Why Choose Aptivon Solutions?</h4>
                    <p>Expert team with extensive experience in modern technologies and industry best practices. Quality assurance through rigorous testing and quality control processes. Timely delivery with transparent communication and regular progress updates.</p>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-logo">APTIVON SOLUTIONS</div>
            <div class="footer-text">
                Generated on ${currentDate} | Professional Portfolio 2025<br>
                Confidential and Proprietary Information
            </div>
        </div>
    </div>
</body>
</html>`;
      };

      const portfolioHTML = createAdvancedPortfolioHTML();
      const blob = new Blob([portfolioHTML], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Aptivon-Solutions-Professional-Portfolio-2025.html';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Advanced Portfolio Downloaded Successfully!",
        description: "Professional portfolio document with comprehensive case studies and technical capabilities.",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Please try again. If the problem persists, contact support.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleScheduleConsultation = () => {
    setLocation("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Download Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Get instant access to our comprehensive portfolio showcasing successful projects, 
              technical capabilities, and proven results across multiple industries.
            </p>
            
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

      {/* Portfolio Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What's Included in Our Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive documentation of our technical expertise, successful projects, 
              and proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Detailed Case Studies</CardTitle>
                <CardDescription>
                  In-depth analysis of successful projects with challenges, solutions, and measurable results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Cpu className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Technical Capabilities</CardTitle>
                <CardDescription>
                  Comprehensive overview of our technology stack, frameworks, and development methodologies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Client Testimonials</CardTitle>
                <CardDescription>
                  Real feedback from satisfied clients showcasing our commitment to excellence and results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Quantifiable results including ROI improvements, efficiency gains, and client satisfaction scores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Team Expertise</CardTitle>
                <CardDescription>
                  Professional profiles of our team members with certifications and specialized skills
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Information about our security practices, compliance standards, and industry certifications
                </CardDescription>
              </CardHeader>
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
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}