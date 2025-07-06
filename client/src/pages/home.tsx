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
  const [projectProgress] = useState([
    { name: "Cloud Migration", progress: 85, client: "TechCorp India" },
    { name: "AI Implementation", progress: 70, client: "FinServ Ltd" },
    { name: "Security Audit", progress: 95, client: "Healthcare Plus" },
    { name: "Digital Transform", progress: 60, client: "Retail Chain" }
  ]);

  const [liveMetrics] = useState({
    activeProjects: 12,
    clientsSatisfied: 150,
    teamMembers: 75,
    completionRate: 98.5
  });

  const [quickActions] = useState([
    {
      title: "Free Consultation",
      description: "Get expert advice for your project",
      icon: Phone,
      action: () => {
        window.open("tel:+917852099010", '_blank');
        toast({
          title: "Calling Aptivon Solutions",
          description: "Connecting you for a free consultation",
        });
      }
    },
    {
      title: "Download Portfolio",
      description: "View our complete project portfolio",
      icon: Download,
      action: () => {
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
      budget: "₹25,00,000",
      duration: "6 months",
      technology: "React, Node.js, PostgreSQL",
      status: "Completed",
      rating: 5
    },
    {
      title: "Healthcare Management System",
      client: "Jaipur Medical Center",
      budget: "₹18,00,000",
      duration: "4 months",
      technology: "Angular, .NET, SQL Server",
      status: "In Progress",
      rating: 5
    },
    {
      title: "Financial Analytics Dashboard",
      client: "Investment Firm India",
      budget: "₹32,00,000",
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
      
      {/* Live Status Bar */}
      <div className="bg-slate-900 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span>📞 +91 7852099010</span>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => {
                window.open("tel:+917852099010", '_blank');
                toast({
                  title: "Quick Call",
                  description: "Connecting you now...",
                });
              }}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      <HeroSection />

      {/* Interactive Dashboard Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Live Project Dashboard</h2>
            <p className="text-xl text-slate-600">Real-time view of our ongoing work and metrics</p>
          </div>

          {/* Live Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 mb-1">{liveMetrics.activeProjects}</div>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +3 this month
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Satisfied Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 mb-1">{liveMetrics.clientsSatisfied}+</div>
                <div className="flex items-center text-green-600 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  Growing daily
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 mb-1">{liveMetrics.teamMembers}</div>
                <div className="flex items-center text-green-600 text-sm">
                  <Trophy className="w-4 h-4 mr-1" />
                  Expert professionals
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 mb-1">{liveMetrics.completionRate}%</div>
                <div className="flex items-center text-green-600 text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  Industry leading
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Project Progress */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Current Project Progress</CardTitle>
              <CardDescription>Real-time updates from our active projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projectProgress.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-slate-900">{project.name}</span>
                        <span className="text-sm text-slate-500 ml-2">for {project.client}</span>
                      </div>
                      <Badge variant={project.progress >= 90 ? "default" : "secondary"}>
                        {project.progress}%
                      </Badge>
                    </div>
                    <Progress value={project.progress} className="h-2" />
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
                      <span className="text-slate-600">Budget:</span>
                      <span className="font-medium text-slate-900">{project.budget}</span>
                    </div>
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
