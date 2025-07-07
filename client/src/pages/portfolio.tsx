import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink, Calendar, Users, TrendingUp, Search, Filter, Eye, Download, Share2, Phone, Mail, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  const handleViewProject = (projectTitle: string) => {
    toast({
      title: "Project Details",
      description: `Viewing detailed case study: ${projectTitle}`,
    });
  };

  const handleDownloadCaseStudy = (projectTitle: string) => {
    toast({
      title: "Download Started",
      description: `Downloading case study for: ${projectTitle}`,
    });
  };

  const handleContactForProject = () => {
    setLocation("/contact");
  };

  const handleShareProject = (projectTitle: string) => {
    toast({
      title: "Link Copied",
      description: `Share link copied for: ${projectTitle}`,
    });
  };

  const handleIndustryFilter = (industry: string) => {
    setSelectedIndustry(industry);
  };
  const projects = [
    {
      title: "Global E-commerce Platform Modernization",
      client: "Fortune 500 Retail Company",
      industry: "Retail & E-commerce",
      duration: "18 months",
      team: "25 engineers",
      image: "/api/placeholder/600/400",
      description: "Complete digital transformation of legacy e-commerce infrastructure serving 5M+ customers globally.",
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL", "Redis"],
      results: [
        "300% improvement in page load speed",
        "99.9% uptime achievement",
        "40% reduction in infrastructure costs",
        "$5M+ annual revenue increase"
      ],
      challenges: "Legacy system integration, zero-downtime migration, global scalability",
      solution: "Microservices architecture with progressive migration strategy"
    },
    {
      title: "AI-Powered Healthcare Analytics Platform",
      client: "Leading Healthcare Provider Network",
      industry: "Healthcare & Life Sciences",
      duration: "12 months",
      team: "18 specialists",
      image: "/api/placeholder/600/400",
      description: "Machine learning platform for predictive patient care and operational optimization across 20+ facilities.",
      technologies: ["Python", "TensorFlow", "Azure", "Docker", "MongoDB", "React"],
      results: [
        "25% reduction in patient readmission rates",
        "60% faster diagnostic processing",
        "HIPAA compliance achieved",
        "$3M+ operational savings annually"
      ],
      challenges: "Data privacy compliance, real-time processing, integration with legacy EMR systems",
      solution: "FHIR-compliant data pipelines with federated learning architecture"
    },
    {
      title: "Cloud-Native Banking Infrastructure",
      client: "Regional Financial Institution",
      industry: "Financial Services",
      duration: "24 months",
      team: "30 engineers",
      image: "/api/placeholder/600/400",
      description: "Complete core banking system modernization with cloud-native architecture and real-time processing.",
      technologies: ["Java", "Spring Boot", "AWS", "Apache Kafka", "PostgreSQL", "Angular"],
      results: [
        "10x improvement in transaction processing speed",
        "SOC 2 Type II compliance",
        "Zero security incidents",
        "95% customer satisfaction improvement"
      ],
      challenges: "Regulatory compliance, real-time transaction processing, legacy system migration",
      solution: "Event-driven architecture with comprehensive security and audit frameworks"
    },
    {
      title: "Smart Manufacturing IoT Platform",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing & Industrial",
      duration: "15 months",
      team: "22 engineers",
      image: "/api/placeholder/600/400",
      description: "Industrial IoT platform for predictive maintenance and supply chain optimization across 5+ facilities.",
      technologies: ["Node.js", "InfluxDB", "Azure IoT", "Power BI", "React", "Python"],
      results: [
        "35% reduction in equipment downtime",
        "50% improvement in supply chain efficiency",
        "Real-time monitoring of 1,000+ sensors",
        "$2M+ cost savings through predictive maintenance"
      ],
      challenges: "Industrial protocol integration, edge computing, real-time analytics at scale",
      solution: "Edge-to-cloud architecture with AI-powered predictive analytics"
    },
    {
      title: "Digital Media Streaming Platform",
      client: "Entertainment Media Company",
      industry: "Media & Entertainment",
      duration: "10 months",
      team: "20 developers",
      image: "/api/placeholder/600/400",
      description: "High-performance video streaming platform with global CDN and personalized content delivery.",
      technologies: ["React Native", "Node.js", "AWS CloudFront", "ElasticSearch", "Redis", "FFmpeg"],
      results: [
        "5M+ concurrent users supported",
        "99.99% streaming uptime",
        "75% improvement in content discovery",
        "Global expansion to 5+ countries"
      ],
      challenges: "Global content delivery, adaptive bitrate streaming, personalization at scale",
      solution: "Microservices with ML-powered recommendation engine and global CDN"
    },
    {
      title: "Enterprise Data Lake & Analytics",
      client: "Multinational Insurance Company",
      industry: "Insurance & Financial",
      duration: "20 months",
      team: "26 data engineers",
      image: "/api/placeholder/600/400",
      description: "Enterprise-scale data lake with advanced analytics for risk assessment and fraud detection.",
      technologies: ["Apache Spark", "AWS S3", "Databricks", "Tableau", "Python", "Scala"],
      results: [
        "Petabyte-scale data processing capability",
        "90% improvement in fraud detection accuracy",
        "Real-time risk assessment implementation",
        "70% reduction in claims processing time"
      ],
      challenges: "Data governance, regulatory compliance, real-time processing at scale",
      solution: "Lambda architecture with automated data quality and lineage tracking"
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Retail & E-commerce", "Manufacturing", 
    "Media & Entertainment", "Insurance", "Technology", "Government"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Showcasing successful digital transformations and innovative solutions 
              delivered for leading enterprises across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-900"
                />
              </div>
              <Button 
                variant="outline"
                onClick={handleContactForProject}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                Discuss Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 mr-2 text-green-600" />
                5+
              </div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 mr-2 text-blue-600" />
                2+
              </div>
              <div className="text-slate-600">Enterprise Clients</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                <Star className="h-8 w-8 mr-2 text-yellow-500" />
                99.9%
              </div>
              <div className="text-slate-600">Project Success Rate</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 mr-2 text-green-600" />
                ₹5Cr+
              </div>
              <div className="text-slate-600">Value Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", ...industries].map((industry, index) => (
              <Button
                key={index}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className={selectedIndustry === industry ? "bg-slate-900 hover:bg-slate-800 text-white" : "border-slate-300 text-slate-700 hover:bg-slate-50"}
                onClick={() => handleIndustryFilter(industry)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dive into our most impactful projects and the transformative results achieved
            </p>
          </div>
          
          <div className="space-y-16">
            {projects
              .filter(project => 
                selectedIndustry === "All" || project.industry === selectedIndustry
              )
              .filter(project => 
                searchQuery === "" || 
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden bg-white border transition-all duration-300 cursor-pointer ${
                  selectedProject === index 
                    ? 'border-slate-900 shadow-xl scale-105' 
                    : 'border-slate-200 hover:shadow-lg hover:border-slate-300'
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                          {project.industry}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                          Completed
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-sm text-slate-600">{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-500" />
                          <span className="text-sm text-slate-600">{project.team}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Results:
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {selectedProject === index && (
                        <div className="border-t border-slate-200 pt-6 mb-6">
                          <div className="mb-4">
                            <h5 className="font-medium text-slate-900 mb-2">Challenge:</h5>
                            <p className="text-sm text-slate-600">{project.challenges}</p>
                          </div>
                          <div className="mb-6">
                            <h5 className="font-medium text-slate-900 mb-2">Solution:</h5>
                            <p className="text-sm text-slate-600">{project.solution}</p>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <Button 
                              size="sm" 
                              className="bg-slate-900 hover:bg-slate-800 text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewProject(project.title);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadCaseStudy(project.title);
                              }}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShareProject(project.title);
                              }}
                            >
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-slate-100 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-slate-300 rounded-lg flex items-center justify-center mb-4 mx-auto">
                          <ExternalLink className="w-12 h-12 text-slate-500" />
                        </div>
                        <p className="text-slate-600 text-sm font-medium">{project.client}</p>
                        <p className="text-slate-500 text-xs mt-1">Confidential Client</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactForProject}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={() => setLocation("/case-studies")}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse sectors with deep industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-6 rounded-lg text-center hover:bg-slate-100 transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleIndustryFilter(industry)}
              >
                <div className="font-medium text-slate-900">{industry}</div>
                <div className="text-xs text-slate-500 mt-1">Click to filter</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}