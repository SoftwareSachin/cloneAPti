import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TechnologySection from "@/components/technology-section";
import IndustriesSection from "@/components/industries-section";
import AdvancedCapabilities from "@/components/advanced-capabilities";
import ApproachSection from "@/components/approach-section";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  TrendingUp, 
  Users, 
  Trophy, 
  Clock, 
  Search, 
  Filter, 
  ArrowRight, 
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Play,
  Download,
  ChevronDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [projectProgress, setProjectProgress] = useState([
    { name: "Cloud Migration", progress: 85, client: "TechCorp India", lastUpdate: Date.now() },
    { name: "AI Implementation", progress: 70, client: "FinServ Ltd", lastUpdate: Date.now() },
    { name: "Security Audit", progress: 95, client: "Healthcare Plus", lastUpdate: Date.now() },
    { name: "Digital Transform", progress: 60, client: "Retail Chain", lastUpdate: Date.now() }
  ]);

  // Simulate project progress updates every 45 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectProgress(prev => 
        prev.map(project => ({
          ...project,
          progress: Math.min(100, project.progress + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0)),
          lastUpdate: Date.now()
        }))
      );
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const [liveMetrics, setLiveMetrics] = useState({
    activeProjects: 5,
    clientsSatisfied: 3,
    teamMembers: 2,
    completionRate: 98.5
  });

  // Simulate live metric updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        // Small random fluctuations to simulate real-time data
        activeProjects: Math.max(3, prev.activeProjects + Math.floor(Math.random() * 3) - 1),
        clientsSatisfied: prev.clientsSatisfied + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const [quickActions] = useState([
    {
      title: "Free Consultation",
      description: "Get expert advice for your project",
      icon: Phone,
      action: () => {
        // Try to make actual phone call on mobile, otherwise show contact options
        if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) {
          window.location.href = "tel:+917852099010";
        } else {
          // Show contact options for desktop users
          const contactOptions = confirm(
            "Free Consultation Available!\n\n" +
            "Choose your preferred contact method:\n" +
            "• Phone: +91 7852099010 (Click OK)\n" +
            "• Email: singhal3.sachin7@gmail.com (Click Cancel)\n\n" +
            "Available: 9 AM to 6 PM IST, Monday to Saturday"
          );
          
          if (contactOptions) {
            window.open("tel:+917852099010", '_blank');
          } else {
            window.open("mailto:singhal3.sachin7@gmail.com?subject=Free Consultation Request&body=Hello Aptivon Solutions,%0D%0A%0D%0AI would like to schedule a free consultation to discuss my project requirements.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you!", '_blank');
          }
        }
        toast({
          title: "Free Consultation",
          description: "Connecting you with our experts for personalized advice",
        });
      }
    },
    {
      title: "Download Portfolio",
      description: "View our complete project portfolio",
      icon: Download,
      action: () => {
        // Create a downloadable PDF or redirect to portfolio page
        const portfolioContent = `
APTIVON SOLUTIONS - PROJECT PORTFOLIO

Recent Projects:
1. E-commerce Platform Modernization - Rajasthan Retail Chain
   Technology: React, Node.js, PostgreSQL
   Duration: 6 months | Status: Completed | Rating: 5/5

2. Healthcare Management System - Jaipur Medical Center  
   Technology: Angular, .NET, SQL Server
   Duration: 4 months | Status: In Progress | Rating: 5/5

3. Financial Analytics Dashboard - Investment Firm India
   Technology: Python, React, MongoDB
   Duration: 8 months | Status: Completed | Rating: 5/5

Contact: +91 7852099010 | singhal3.sachin7@gmail.com
Website: aptivonsolutions.com
        `;
        
        const blob = new Blob([portfolioContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Aptivon_Solutions_Portfolio.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast({
          title: "Portfolio Downloaded",
          description: "Aptivon Solutions portfolio saved to your device",
        });
      }
    },
    {
      title: "Schedule Meeting",
      description: "Book a meeting with our experts",
      icon: Calendar,
      action: () => {
        window.open(`mailto:singhal3.sachin7@gmail.com?subject=Meeting Request&body=I would like to schedule a meeting to discuss my project requirements.`, '_blank');
        toast({
          title: "Meeting Request",
          description: "Opening email to schedule your meeting",
        });
      }
    }
  ]);

  const [featuredProjects] = useState([
    {
      title: "E-commerce Platform Modernization",
      client: "Rajasthan Retail Chain",
      duration: "6 months",
      technology: "React, Node.js, PostgreSQL",
      status: "Completed",
      rating: 5
    },
    {
      title: "Healthcare Management System",
      client: "Jaipur Medical Center",
      duration: "4 months",
      technology: "Angular, .NET, SQL Server",
      status: "In Progress",
      rating: 5
    },
    {
      title: "Financial Analytics Dashboard",
      client: "Investment Firm India",
      duration: "8 months",
      technology: "Python, React, MongoDB",
      status: "Completed",
      rating: 5
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects = featuredProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || project.status.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Live Status Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-6 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="font-medium">Live Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>{currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs">All Systems Operational</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="font-medium">+91 7852099010</span>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) {
                  window.location.href = "tel:+917852099010";
                } else {
                  window.open("tel:+917852099010", '_blank');
                }
                toast({
                  title: "Calling Aptivon Solutions",
                  description: "Phone: +91 7852099010 - Available 9 AM to 6 PM IST",
                });
              }}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      <HeroSection />

      {/* Enhanced Interactive Dashboard Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-slate-200/60">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Real-Time Analytics</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                Live Project Dashboard
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience transparency like never before with real-time insights into our ongoing projects and performance metrics
            </p>
          </div>

          {/* Enhanced Live Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Active Projects</CardTitle>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-slate-900 mb-2">{liveMetrics.activeProjects}</div>
                <div className="flex items-center text-emerald-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  +3 this month
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Satisfied Clients</CardTitle>
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-slate-900 mb-2">{liveMetrics.clientsSatisfied}+</div>
                <div className="flex items-center text-emerald-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  Growing daily
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Team Members</CardTitle>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-slate-900 mb-2">{liveMetrics.teamMembers}</div>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                  Expert professionals
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Success Rate</CardTitle>
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-slate-900 mb-2">{liveMetrics.completionRate}%</div>
                <div className="flex items-center text-amber-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
                  Industry leading
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Live Project Progress */}
          <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            <CardHeader className="relative z-10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Current Project Progress</CardTitle>
                  <CardDescription className="text-slate-600">Real-time updates from our active projects with live metrics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-8">
                {projectProgress.map((project, index) => (
                  <div key={index} className="group p-6 bg-gradient-to-r from-slate-50/50 to-white/50 rounded-2xl border border-slate-200/60 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-slate-900 text-lg">{project.name}</span>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-slate-600 font-medium">for {project.client}</span>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={project.progress >= 90 ? "default" : "secondary"}
                          className={`text-lg px-4 py-2 font-bold ${
                            project.progress >= 90 
                              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white' 
                              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          }`}
                        >
                          {project.progress}%
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={project.progress} 
                        className="h-3 bg-slate-200 rounded-full overflow-hidden"
                      />
                      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                           style={{ width: `${project.progress}%` }}>
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm text-slate-500">
                      <span>Last updated: {new Date(project.lastUpdate).toLocaleTimeString()}</span>
                      <span className="font-medium">ETA: {project.progress >= 90 ? 'Almost done' : '2-3 weeks'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-slate-600">Get started with Aptivon Solutions instantly</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer" onClick={action.action}>
                <CardHeader>
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Take Action
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">Explore our recent successes with interactive search and filtering</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search projects by name or client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "bg-slate-900 text-white" : ""}
              >
                All
              </Button>
              <Button
                variant={activeFilter === "completed" ? "default" : "outline"}
                onClick={() => setActiveFilter("completed")}
                className={activeFilter === "completed" ? "bg-slate-900 text-white" : ""}
              >
                Completed
              </Button>
              <Button
                variant={activeFilter === "in progress" ? "default" : "outline"}
                onClick={() => setActiveFilter("in progress")}
                className={activeFilter === "in progress" ? "bg-slate-900 text-white" : ""}
              >
                In Progress
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Duration:</span>
                      <span className="font-medium text-slate-900">{project.duration}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-600">Technology:</span>
                      <div className="mt-1">
                        <Badge variant="outline" className="text-xs">
                          {project.technology}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={() => {
                        // Create detailed project information modal or redirect
                        const projectDetails = `
PROJECT DETAILS: ${project.title}

Client: ${project.client}
Duration: ${project.duration}
Technology Stack: ${project.technology}
Status: ${project.status}
Rating: ${project.rating}/5 stars

Project Summary:
This project involved comprehensive development and implementation of modern technology solutions tailored to client requirements. Our team delivered exceptional results using industry best practices and cutting-edge technologies.

Key Achievements:
- Successful delivery within timeline
- High client satisfaction
- Scalable and maintainable solution
- Enhanced business efficiency

Contact Aptivon Solutions for similar projects:
Phone: +91 7852099010
Email: singhal3.sachin7@gmail.com
                        `;
                        
                        // Show project details in a new window or alert
                        const newWindow = window.open('', '_blank', 'width=600,height=400');
                        if (newWindow) {
                          newWindow.document.write(`
                            <html>
                              <head><title>Project Details - ${project.title}</title></head>
                              <body style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
                                <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${projectDetails}</pre>
                                <button onclick="window.close()" style="margin-top: 20px; padding: 10px 20px; background: #1e293b; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
                              </body>
                            </html>
                          `);
                          newWindow.document.close();
                        }
                        
                        toast({
                          title: "Project Details",
                          description: `Viewing details for ${project.title}`,
                        });
                      }}
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No projects found matching your criteria.</p>
              <Button 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <ServicesSection />
      <TechnologySection />
      <IndustriesSection />
      <AdvancedCapabilities />
      <ApproachSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
