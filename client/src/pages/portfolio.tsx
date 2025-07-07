import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Search,
  Eye,
  Heart,
  Share2,
  Download,
  Phone,
  Filter,
  Calendar,
  Users,
  CheckCircle2,
  Star,
  TrendingUp,
  ExternalLink,
  MapPin,
  Target,
  Briefcase,
  Clock,
  Award,
  Zap,
  ArrowRight,
  Globe,
  Building,
  Cpu,
  Code,
  Layers,
  ShoppingCart,
  DollarSign,
  BarChart3,
  Shield,
  Smartphone,
  Database,
  Cloud,
  MessageSquare,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  X,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  LoaderIcon,
  Loader2
} from 'lucide-react';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  client: string;
  industry: string;
  duration: string;
  budget: string;
  teamSize: number;
  technologies: string[];
  features: string[];
  outcomes: string[];
  slug: string;
  imageUrl: string;
  featured: boolean;
  status: string;
  startDate: string;
  endDate: string;
  likes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['/api/portfolio-projects'],
    queryFn: async () => {
      const response = await fetch('/api/portfolio-projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return response.json();
    },
  });

  const likeMutation = useMutation({
    mutationFn: async (projectId: number) => {
      const response = await fetch('/api/portfolio-like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId }),
      });
      if (!response.ok) {
        throw new Error('Failed to like project');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio-projects'] });
      toast({
        title: "Success!",
        description: "Thanks for liking this project!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to like project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const industries = ["All", "E-commerce & Retail", "Healthcare & Life Sciences", "Banking & Finance", "Manufacturing & Industrial", "Media & Entertainment"];

  const filteredProjects = projects.filter((project: PortfolioProject) => {
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesIndustry = selectedIndustry === "All" || project.industry === selectedIndustry;

    return matchesSearch && matchesIndustry;
  });

  const handleViewProject = (slug: string) => {
    setLocation(`/portfolio-project/${slug}`);
  };

  const handleLikeProject = (projectId: number) => {
    likeMutation.mutate(projectId);
  };

  const handleShareProject = (title: string, slug: string) => {
    const url = `${window.location.origin}/portfolio-project/${slug}`;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: `Portfolio project "${title}" link copied to clipboard.`,
    });
  };

  const handleContactForProject = () => {
    setLocation("/contact");
  };

  const handleIndustryFilter = (industry: string) => {
    setSelectedIndustry(industry);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Portfolio</h1>
          <p className="text-slate-600 mb-6">We're having trouble loading our portfolio projects. Please try refreshing the page.</p>
          <Button onClick={() => window.location.reload()} className="bg-slate-900 hover:bg-slate-800">
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio showcasing successful projects 
              delivered for leading enterprises across multiple industries.
            </p>
            
            {/* Download Portfolio Button */}
            <div className="mb-8">
              <Button 
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => setLocation("/portfolio-download")}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Complete Portfolio
              </Button>
            </div>
            
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
            {industries.map((industry, index) => (
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
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project: PortfolioProject) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer"
                  onClick={() => handleViewProject(project.slug)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                        {project.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{project.teamSize} people</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-slate-900 hover:bg-slate-800 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProject(project.slug);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikeProject(project.id);
                          }}
                        >
                          <Heart className="h-4 w-4 mr-1" />
                          {project.likes}
                        </Button>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareProject(project.title, project.slug);
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100"
              onClick={() => setLocation("/contact")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Start a Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-300 text-white hover:bg-slate-800"
              onClick={() => setLocation("/portfolio-download")}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}