import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  ArrowRight,
  Search,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Database
} from "lucide-react";

export default function Resources() {
  const whitepapers = [
    {
      title: "Digital Transformation Roadmap for Healthcare",
      description: "A comprehensive guide to implementing technology solutions in healthcare organizations while maintaining HIPAA compliance.",
      category: "Healthcare",
      downloadCount: "2.3K",
      pages: "24 pages",
      date: "December 2024"
    },
    {
      title: "Cloud Migration Strategy Guide",
      description: "Best practices for migrating legacy systems to cloud infrastructure with minimal downtime and maximum cost savings.",
      category: "Cloud Computing",
      downloadCount: "3.1K",
      pages: "32 pages",
      date: "November 2024"
    },
    {
      title: "AI Implementation Framework for SMBs",
      description: "Step-by-step framework for small and medium businesses to successfully implement AI and machine learning solutions.",
      category: "Artificial Intelligence",
      downloadCount: "1.8K",
      pages: "28 pages",
      date: "October 2024"
    }
  ];

  const webinars = [
    {
      title: "Cybersecurity Trends 2025: What Every CTO Should Know",
      description: "Join our cybersecurity experts as they discuss emerging threats and protective strategies for the coming year.",
      speaker: "Sarah Chen, Head of Security",
      duration: "45 minutes",
      attendees: "450+",
      date: "January 15, 2025",
      status: "upcoming"
    },
    {
      title: "Building Scalable E-commerce Platforms",
      description: "Learn how to design and implement e-commerce solutions that can handle millions of transactions.",
      speaker: "Marcus Rodriguez, Lead Architect",
      duration: "60 minutes",
      attendees: "320+",
      date: "December 10, 2024",
      status: "recorded"
    },
    {
      title: "Data Analytics for Business Growth",
      description: "Discover how to leverage data analytics to drive business decisions and accelerate growth.",
      speaker: "Priya Sharma, Data Scientist",
      duration: "50 minutes",
      attendees: "280+",
      date: "November 22, 2024",
      status: "recorded"
    }
  ];

  const caseStudies = [
    {
      title: "250% ROI: Hospital System Digital Transformation",
      industry: "Healthcare",
      metric: "250% ROI",
      description: "How a regional medical center reduced patient wait times by 45% and achieved remarkable ROI.",
      icon: Shield
    },
    {
      title: "E-commerce Platform: 150% Sales Increase",
      industry: "Retail",
      metric: "150% Growth",
      description: "AI-powered recommendation engine drives massive sales growth for national retail chain.",
      icon: TrendingUp
    },
    {
      title: "Smart Factory: 60% Downtime Reduction",
      industry: "Manufacturing",
      metric: "60% Reduction",
      description: "IoT implementation transforms manufacturing efficiency and predictive maintenance.",
      icon: Cpu
    }
  ];

  const tools = [
    {
      title: "Cloud Readiness Assessment",
      description: "Evaluate your organization's readiness for cloud migration with our comprehensive assessment tool.",
      icon: Cloud,
      category: "Assessment Tool"
    },
    {
      title: "ROI Calculator for Digital Transformation",
      description: "Calculate the potential return on investment for your digital transformation initiatives.",
      icon: TrendingUp,
      category: "Calculator"
    },
    {
      title: "Security Audit Checklist",
      description: "Comprehensive checklist to assess your organization's cybersecurity posture.",
      icon: Shield,
      category: "Checklist"
    },
    {
      title: "Database Performance Analyzer",
      description: "Analyze and optimize your database performance with our free diagnostic tool.",
      icon: Database,
      category: "Diagnostic Tool"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Knowledge Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Resources &
              <span className="text-indigo-600"> Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access our comprehensive library of whitepapers, webinars, case studies, 
              and tools to accelerate your digital transformation journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FileText, label: "Whitepapers", count: "25+" },
              { icon: Video, label: "Webinars", count: "40+" },
              { icon: BookOpen, label: "Case Studies", count: "50+" },
              { icon: Download, label: "Tools", count: "15+" }
            ].map((category, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <category.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{category.label}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Whitepapers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In-depth research and insights on the latest technology trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{paper.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {paper.downloadCount}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{paper.pages}</span>
                    <span>{paper.date}</span>
                  </div>
                  <Button className="w-full">
                    Download PDF
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Webinars
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from our technology experts through live and recorded sessions.
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="md:col-span-3 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {webinar.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">Speaker: {webinar.speaker}</p>
                  </div>
                  <div className="p-6 bg-gray-50 flex items-center justify-center">
                    <Button className="w-full">
                      {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real clients across different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <study.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{study.metric}</div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <Badge variant="outline">{study.industry}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button size="lg" variant="outline">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Tools & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical tools to help you assess, plan, and implement technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <tool.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <Badge variant="outline" className="mb-2">{tool.category}</Badge>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription className="text-center">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Access Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest whitepapers, webinars, and technology insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 bg-white"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}