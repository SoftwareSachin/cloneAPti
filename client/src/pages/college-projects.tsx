import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Code, 
  Search,
  Filter,
  Star,
  Eye,
  Heart,
  BookOpen,
  Lightbulb,
  Target,
  Award
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  industry: string;
  duration: string;
  team: string;
  description: string;
  image?: string;
  technologies: string[];
  results: string[];
  challenges: string;
  solution: string;
  featured: boolean;
  published: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function CollegeProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("all");
  const [filterTechnology, setFilterTechnology] = useState("all");

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/portfolio', 'projects'],
    queryFn: async () => {
      const response = await fetch('/api/portfolio?action=projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading college projects...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Debug logging
  console.log('Projects data:', projects);
  console.log('Search term:', searchTerm);
  console.log('Filter industry:', filterIndustry);
  console.log('Filter technology:', filterTechnology);

  // Filter projects based on search and filters
  const filteredProjects = projects?.filter(project => {
    const matchesSearch = searchTerm === "" || 
                         project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = filterIndustry === "all" || project.industry === filterIndustry;
    const matchesTechnology = filterTechnology === "all" || 
                            project.technologies.some(tech => tech.toLowerCase().includes(filterTechnology.toLowerCase()));
    
    console.log(`Project: ${project.title}, matches search: ${matchesSearch}, matches industry: ${matchesIndustry}, matches tech: ${matchesTechnology}`);
    
    return matchesSearch && matchesIndustry && matchesTechnology;
  }) || [];

  console.log('Filtered projects:', filteredProjects);

  // Get unique industries and technologies for filters
  const industries = [...new Set(projects?.map(p => p.industry) || [])];
  const technologies = [...new Set(projects?.flatMap(p => p.technologies) || [])];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-slate-900 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              College Projects Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of college-level projects developed by Aptivon Solutions. 
              Each project demonstrates practical application of modern technologies and real-world problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Target className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
              <Button size="lg" variant="outline">
                <Award className="mr-2 h-5 w-5" />
                Featured Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {projects?.length || 0}
              </div>
              <div className="text-slate-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {industries.length}
              </div>
              <div className="text-slate-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {technologies.length}
              </div>
              <div className="text-slate-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {projects?.filter(p => p.featured).length || 0}
              </div>
              <div className="text-slate-600">Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search projects by title, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger className="w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterTechnology} onValueChange={setFilterTechnology}>
                <SelectTrigger className="w-48">
                  <Code className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Technologies</SelectItem>
                  {technologies.map(tech => (
                    <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="p-6 bg-white rounded-lg shadow-sm max-w-md mx-auto">
                <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No projects found</h3>
                <p className="text-slate-600 mb-4">
                  Try adjusting your search terms or filters to find projects.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setFilterIndustry("all");
                    setFilterTechnology("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={`${project.id}-${index}`} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-slate-900 mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600">
                          {project.description}
                        </CardDescription>
                      </div>
                      {project.featured && (
                        <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex items-center text-slate-600 mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Duration
                          </div>
                          <div className="font-medium">{project.duration}</div>
                        </div>
                        <div>
                          <div className="flex items-center text-slate-600 mb-1">
                            <Users className="h-4 w-4 mr-2" />
                            Team
                          </div>
                          <div className="font-medium">{project.team}</div>
                        </div>
                      </div>

                      {/* Industry */}
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {project.industry}
                        </Badge>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="text-sm text-slate-600 mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Results */}
                      <div>
                        <div className="text-sm text-slate-600 mb-2">Key Results:</div>
                        <ul className="text-sm space-y-1">
                          {project.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="flex items-start">
                              <Lightbulb className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center gap-4 text-sm text-slate-600 pt-4 border-t">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {project.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {project.likes}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/portfolio-project/${project.slug}`}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            Our team is ready to help you bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="/portfolio">
                View Full Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}