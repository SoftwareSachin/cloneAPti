import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Calendar, User, ArrowRight, Tag, Search, Filter, BookOpen, TrendingUp, Mail, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Blog() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const { toast } = useToast();

  const handleReadArticle = (title: string) => {
    // In a real app, this would route to the individual blog post
    toast({
      title: "Article Opening",
      description: `Opening: ${title}`,
    });
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(6); // Reset visible posts when changing category
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest tech insights in your inbox.",
      });
      setEmail("");
    }
  };

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleContactUs = () => {
    setLocation("/contact");
  };
  const featuredPost = {
    title: "The Future of Enterprise AI: Transforming Business Operations in 2025",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise operations, from predictive analytics to automated decision-making, and what leaders need to know to stay competitive.",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Enterprise", "Digital Transformation", "Strategy"]
  };

  const blogPosts = [
    {
      title: "Cloud Migration Best Practices: Lessons from 5+ Enterprise Deployments",
      excerpt: "Key insights and proven strategies for successful cloud migration, including common pitfalls to avoid and optimization techniques.",
      author: "Marcus Rodriguez",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      tags: ["Cloud", "Migration", "AWS", "Azure"]
    },
    {
      title: "DevOps Security: Integrating Security into CI/CD Pipelines",
      excerpt: "How to implement DevSecOps practices that maintain development velocity while ensuring robust security throughout the deployment pipeline.",
      author: "Alex Kumar",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "DevOps",
      image: "/api/placeholder/400/250",
      tags: ["DevOps", "Security", "CI/CD", "Automation"]
    },
    {
      title: "Data Mesh Architecture: Decentralizing Data at Enterprise Scale",
      excerpt: "Understanding data mesh principles and how to implement decentralized data architecture for better scalability and governance.",
      author: "Priya Sharma",
      date: "January 8, 2025",
      readTime: "9 min read",
      category: "Data Engineering",
      image: "/api/placeholder/400/250",
      tags: ["Data Architecture", "Microservices", "Governance", "Analytics"]
    },
    {
      title: "Kubernetes Cost Optimization: Reducing Infrastructure Spend by 40%",
      excerpt: "Practical strategies for optimizing Kubernetes workloads, right-sizing resources, and implementing cost-effective scaling policies.",
      author: "David Kim",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Infrastructure",
      image: "/api/placeholder/400/250",
      tags: ["Kubernetes", "Cost Optimization", "Infrastructure", "DevOps"]
    },
    {
      title: "Building Resilient Microservices: Patterns for Enterprise Applications",
      excerpt: "Design patterns and best practices for creating fault-tolerant microservices that can handle failures gracefully at enterprise scale.",
      author: "Emily Zhang",
      date: "January 3, 2025",
      readTime: "8 min read",
      category: "Software Architecture",
      image: "/api/placeholder/400/250",
      tags: ["Microservices", "Architecture", "Resilience", "Design Patterns"]
    },
    {
      title: "Machine Learning Operations: MLOps Best Practices for Production",
      excerpt: "Essential MLOps practices for deploying, monitoring, and maintaining machine learning models in production environments.",
      author: "Robert Chen",
      date: "December 30, 2024",
      readTime: "7 min read",
      category: "Machine Learning",
      image: "/api/placeholder/400/250",
      tags: ["MLOps", "Machine Learning", "Production", "Monitoring"]
    },
    {
      title: "API-First Development: Building Scalable Enterprise Integrations",
      excerpt: "How API-first approach accelerates development, improves system interoperability, and enables better developer experience.",
      author: "Lisa Wang",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "API Development",
      image: "/api/placeholder/400/250",
      tags: ["API", "Integration", "Development", "Architecture"]
    },
    {
      title: "Zero Trust Security: Implementing Modern Enterprise Security Models",
      excerpt: "Comprehensive guide to implementing zero trust security architecture, including identity management and network segmentation.",
      author: "Michael Torres",
      date: "December 25, 2024",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      tags: ["Security", "Zero Trust", "Identity", "Network"]
    },
    {
      title: "Real-time Analytics: Building Event-Driven Data Architectures",
      excerpt: "Designing and implementing real-time analytics systems using event streaming and modern data processing frameworks.",
      author: "Jennifer Liu",
      date: "December 22, 2024",
      readTime: "8 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      tags: ["Real-time", "Analytics", "Streaming", "Data Engineering"]
    }
  ];

  const categories = [
    "All Posts", "Artificial Intelligence", "Cloud Computing", "DevOps", 
    "Data Engineering", "Cybersecurity", "Software Architecture", "Machine Learning"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Technology Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Expert perspectives on enterprise technology, digital transformation, and industry trends 
              from our team of technology leaders and practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border-slate-300 focus:border-slate-900"
                />
              </div>
              <Button 
                variant="outline"
                onClick={handleContactUs}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Request Topic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden bg-white border border-slate-200">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-slate-100 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-slate-300 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <Tag className="w-12 h-12 text-slate-500" />
                      </div>
                      <Badge className="bg-slate-900 text-white">{featuredPost.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 mb-4">
                      Featured
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div>{featuredPost.readTime}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={() => handleReadArticle(featuredPost.title)}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-slate-900 hover:bg-slate-800 text-white" : "border-slate-300 text-slate-700 hover:bg-slate-50"}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Latest Articles</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights in enterprise technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => 
                selectedCategory === "All Posts" || post.category === selectedCategory
              )
              .filter(post => 
                searchQuery === "" || 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .slice(0, visiblePosts)
              .map((post, index) => (
              <Card 
                key={index} 
                className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleReadArticle(post.title)}
              >
                <CardContent className="p-0">
                  <div className="bg-slate-100 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Tag className="w-6 h-6 text-slate-500" />
                      </div>
                      <Badge variant="secondary" className="bg-slate-200 text-slate-700 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadArticle(post.title);
                      }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {blogPosts
            .filter(post => 
              selectedCategory === "All Posts" || post.category === selectedCategory
            )
            .filter(post => 
              searchQuery === "" || 
              post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
              post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            ).length > visiblePosts && (
            <div className="text-center mt-12">
              <Button 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3"
                onClick={handleLoadMore}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on enterprise technology, 
              industry trends, and best practices delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3"
              >
                <Bell className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}