import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  Search,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Database,
  Filter,
  X
} from "lucide-react";

const WHITEPAPERS_DATA = [
  {
    id: 1,
    title: "Digital Transformation Roadmap for Healthcare",
    description: "A comprehensive guide to implementing technology solutions in healthcare organizations while maintaining HIPAA compliance.",
    category: "Healthcare",
    downloadCount: "2.3K",
    pages: "24 pages",
    date: "December 2024",
    type: "whitepaper",
    downloadUrl: "/resources/digital-transformation-healthcare.pdf"
  },
  {
    id: 2,
    title: "Cloud Migration Strategy Guide",
    description: "Best practices for migrating legacy systems to cloud infrastructure with minimal downtime and maximum cost savings.",
    category: "Cloud Computing",
    downloadCount: "3.1K",
    pages: "32 pages",
    date: "November 2024",
    type: "whitepaper",
    downloadUrl: "/resources/cloud-migration-guide.pdf"
  },
  {
    id: 3,
    title: "AI Implementation Framework for SMBs",
    description: "Step-by-step framework for small and medium businesses to successfully implement AI and machine learning solutions.",
    category: "Artificial Intelligence",
    downloadCount: "1.8K",
    pages: "28 pages",
    date: "October 2024",
    type: "whitepaper",
    downloadUrl: "/resources/ai-implementation-framework.pdf"
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices 2025",
    description: "Essential cybersecurity practices every organization should implement to protect against modern threats.",
    category: "Cybersecurity",
    downloadCount: "2.7K",
    pages: "36 pages",
    date: "January 2025",
    type: "whitepaper",
    downloadUrl: "/resources/cybersecurity-best-practices.pdf"
  },
  {
    id: 5,
    title: "Database Optimization Strategies",
    description: "Advanced techniques for optimizing database performance in high-traffic applications.",
    category: "Database Management",
    downloadCount: "1.5K",
    pages: "20 pages",
    date: "November 2024",
    type: "whitepaper",
    downloadUrl: "/resources/database-optimization.pdf"
  }
];

const WEBINARS_DATA = [
  {
    id: 6,
    title: "Cybersecurity Trends 2025: What Every CTO Should Know",
    description: "Join our cybersecurity experts as they discuss emerging threats and protective strategies for the coming year.",
    speaker: "Sarah Chen, Head of Security",
    duration: "45 minutes",
    attendees: "450+",
    date: "January 15, 2025",
    status: "upcoming",
    type: "webinar",
    category: "Cybersecurity",
    registrationUrl: "/webinar-registration/cybersecurity-trends-2025"
  },
  {
    id: 7,
    title: "Building Scalable E-commerce Platforms",
    description: "Learn how to design and implement e-commerce solutions that can handle millions of transactions.",
    speaker: "Marcus Rodriguez, Lead Architect",
    duration: "60 minutes",
    attendees: "320+",
    date: "December 10, 2024",
    status: "recorded",
    type: "webinar",
    category: "E-commerce",
    recordingUrl: "/webinar-recordings/scalable-ecommerce"
  },
  {
    id: 8,
    title: "AI in Customer Service: Real-World Applications",
    description: "Discover how AI is transforming customer service operations with practical examples and implementation strategies.",
    speaker: "Priya Sharma, AI Solutions Lead",
    duration: "50 minutes",
    attendees: "280+",
    date: "November 20, 2024",
    status: "recorded",
    type: "webinar",
    category: "Artificial Intelligence",
    recordingUrl: "/webinar-recordings/ai-customer-service"
  },
  {
    id: 9,
    title: "Modern DevOps Practices for Startups",
    description: "Essential DevOps practices that startups can implement to accelerate development and deployment cycles.",
    speaker: "James Wilson, DevOps Expert",
    duration: "55 minutes",
    attendees: "195+",
    date: "February 5, 2025",
    status: "upcoming",
    type: "webinar",
    category: "DevOps",
    registrationUrl: "/webinar-registration/devops-startups"
  }
];

const CASE_STUDIES_DATA = [
  {
    id: 10,
    title: "Healthcare System Digital Transformation",
    description: "How we helped a 500-bed hospital reduce patient wait times by 40% through digital process optimization.",
    category: "Healthcare",
    industry: "Healthcare",
    results: "40% reduced wait times, 25% cost savings",
    type: "case-study",
    readTime: "8 min read",
    date: "December 2024"
  },
  {
    id: 11,
    title: "E-commerce Platform Migration Success",
    description: "Complete platform migration for a major retailer handling 1M+ daily transactions with zero downtime.",
    category: "E-commerce",
    industry: "Retail",
    results: "Zero downtime, 30% performance improvement",
    type: "case-study",
    readTime: "6 min read",
    date: "November 2024"
  },
  {
    id: 12,
    title: "Financial Services Cloud Migration",
    description: "Secure cloud migration for a financial services company while maintaining regulatory compliance.",
    category: "Cloud Computing",
    industry: "Financial Services",
    results: "50% infrastructure cost reduction, SOC 2 compliance",
    type: "case-study",
    readTime: "10 min read",
    date: "October 2024"
  }
];

const TOOLS_DATA = [
  {
    id: 13,
    title: "Cloud Readiness Assessment",
    description: "Evaluate your organization's readiness for cloud migration with our comprehensive assessment tool.",
    icon: Cloud,
    category: "Assessment Tool",
    type: "tool",
    accessUrl: "/tools/cloud-readiness-assessment"
  },
  {
    id: 14,
    title: "ROI Calculator for Digital Transformation",
    description: "Calculate the potential return on investment for your digital transformation initiatives.",
    icon: TrendingUp,
    category: "Calculator",
    type: "tool",
    accessUrl: "/tools/roi-calculator"
  },
  {
    id: 15,
    title: "Security Audit Checklist", 
    description: "Comprehensive checklist to assess your organization's cybersecurity posture.",
    icon: Shield,
    category: "Checklist",
    type: "tool",
    accessUrl: "/tools/security-audit-checklist"
  },
  {
    id: 16,
    title: "Database Performance Analyzer",
    description: "Analyze and optimize your database performance with our free diagnostic tool.",
    icon: Database,
    category: "Diagnostic Tool",
    type: "tool",
    accessUrl: "/tools/database-performance-analyzer"
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Combine all data sources
  const allResources = [...WHITEPAPERS_DATA, ...WEBINARS_DATA, ...CASE_STUDIES_DATA, ...TOOLS_DATA];

  // Get unique categories for filtering
  const categories = ["all", ...new Set(allResources.map(item => item.category))];
  const types = ["all", "whitepaper", "webinar", "case-study", "tool"];

  // Filter resources based on search and filters
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
      const matchesType = selectedType === "all" || resource.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedType]);

  // Handle download action
  const handleDownload = (resource: any) => {
    if (resource.downloadUrl) {
      // In a real app, this would trigger actual file download
      alert(`Downloading: ${resource.title}`);
      console.log(`Download URL: ${resource.downloadUrl}`);
    }
  };

  // Handle webinar registration/access
  const handleWebinarAccess = (webinar: any) => {
    if (webinar.status === 'upcoming' && webinar.registrationUrl) {
      alert(`Redirecting to registration for: ${webinar.title}`);
      console.log(`Registration URL: ${webinar.registrationUrl}`);
    } else if (webinar.status === 'recorded' && webinar.recordingUrl) {
      alert(`Opening recording for: ${webinar.title}`);
      console.log(`Recording URL: ${webinar.recordingUrl}`);
    }
  };

  // Handle tool access
  const handleToolAccess = (tool: any) => {
    if (tool.accessUrl) {
      alert(`Opening tool: ${tool.title}`);
      console.log(`Tool URL: ${tool.accessUrl}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Technology Resources & Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Access our comprehensive library of whitepapers, webinars, case studies, 
              and tools to accelerate your digital transformation journey.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10 pr-4 py-3 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600">Type:</span>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border border-slate-300 rounded-md px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === "all" ? "All Types" : type.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-600">Category:</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-slate-300 rounded-md px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedType !== "all" || selectedCategory !== "all" || searchTerm) && (
                  <button
                    onClick={() => {
                      setSelectedType("all");
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                    className="text-sm text-slate-600 hover:text-slate-900 underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* Results count */}
              <p className="text-sm text-slate-600">
                Showing {filteredResources.length} of {allResources.length} resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FileText, label: "Whitepapers", count: WHITEPAPERS_DATA.length.toString(), type: "whitepaper" },
              { icon: Video, label: "Webinars", count: WEBINARS_DATA.length.toString(), type: "webinar" },
              { icon: BookOpen, label: "Case Studies", count: CASE_STUDIES_DATA.length.toString(), type: "case-study" },
              { icon: Download, label: "Tools", count: TOOLS_DATA.length.toString(), type: "tool" }
            ].map((category: any, index: number) => (
              <div 
                key={index} 
                className={`text-center p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-all cursor-pointer ${
                  selectedType === category.type ? 'border-slate-900 bg-slate-50' : ''
                }`}
                onClick={() => setSelectedType(selectedType === category.type ? "all" : category.type)}
              >
                <category.icon className="h-8 w-8 text-slate-900 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">{category.label}</h3>
                <p className="text-slate-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Resources Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">No resources found</h2>
              <p className="text-slate-600 mb-6">Try adjusting your search terms or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedType("all");
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Whitepapers */}
              {filteredResources.some(r => r.type === "whitepaper") && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Whitepapers
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      In-depth research and insights on the latest technology trends and best practices.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.filter(r => r.type === "whitepaper").map((paper: any) => (
                      <div key={paper.id} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border">{paper.category}</span>
                          <div className="flex items-center text-sm text-slate-500">
                            <Download className="h-4 w-4 mr-1" />
                            {paper.downloadCount}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{paper.title}</h3>
                        <p className="text-slate-600 mb-4">{paper.description}</p>
                        
                        <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                          <span>{paper.pages}</span>
                          <span>{paper.date}</span>
                        </div>
                        <Button 
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                          onClick={() => handleDownload(paper)}
                        >
                          Download PDF
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Webinars */}
              {filteredResources.some(r => r.type === "webinar") && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Expert Webinars
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Learn from our technology experts through live and recorded sessions.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {filteredResources.filter(r => r.type === "webinar").map((webinar: any) => (
                      <div key={webinar.id} className="bg-white rounded-xl border border-slate-200 shadow-lg">
                        <div className="grid md:grid-cols-4 gap-0">
                          <div className="md:col-span-3 p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-2 py-1 rounded text-sm ${webinar.status === 'upcoming' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                              </span>
                              <div className="flex items-center text-sm text-slate-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                {webinar.date}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{webinar.title}</h3>
                            <p className="text-slate-600 mb-4">{webinar.description}</p>
                            <div className="flex items-center gap-6 text-sm text-slate-500">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {webinar.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {webinar.attendees} attendees
                              </div>
                            </div>
                            <p className="text-sm text-slate-700 mt-2">Speaker: {webinar.speaker}</p>
                          </div>
                          <div className="p-6 bg-slate-50 flex items-center justify-center">
                            <Button 
                              className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                              onClick={() => handleWebinarAccess(webinar)}
                            >
                              {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies */}
              {filteredResources.some(r => r.type === "case-study") && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Success Stories
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Real-world examples of how we've helped organizations transform their operations.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.filter(r => r.type === "case-study").map((study: any) => (
                      <div key={study.id} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border">{study.industry}</span>
                          <span className="text-sm text-slate-500">{study.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{study.title}</h3>
                        <p className="text-slate-600 mb-4">{study.description}</p>
                        
                        <div className="bg-slate-50 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-slate-900 mb-1">Key Results:</p>
                          <p className="text-sm text-slate-700">{study.results}</p>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                          <span>{study.date}</span>
                        </div>
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                          Read Case Study
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {filteredResources.some(r => r.type === "tool") && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Free Tools & Resources
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Practical tools to help you assess, plan, and implement technology solutions.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredResources.filter(r => r.type === "tool").map((tool: any) => (
                      <div key={tool.id} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer text-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <tool.icon className="h-6 w-6 text-slate-900" />
                        </div>
                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border mb-2 inline-block">{tool.category}</span>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{tool.title}</h3>
                        <p className="text-slate-600 text-center mb-4">{tool.description}</p>
                        <Button 
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                          onClick={() => handleToolAccess(tool)}
                        >
                          Access Tool
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest whitepapers, webinars, and technology insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 bg-white"
              type="email"
            />
            <Button 
              className="bg-white text-slate-900 hover:bg-slate-100"
              onClick={() => alert("Newsletter subscription functionality would be implemented here!")}
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Join 5,000+ professionals already receiving our weekly insights
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}