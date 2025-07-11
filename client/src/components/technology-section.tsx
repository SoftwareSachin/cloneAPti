import { 
  Cpu, 
  Server, 
  Code, 
  Database, 
  Shield, 
  Layers,
  Zap,
  BarChart3,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export default function TechnologySection() {
  const [, setLocation] = useLocation();

  const handleScheduleTechConsultation = () => {
    setLocation("/contact");
  };

  const handleViewArchitectureExamples = () => {
    setLocation("/architecture");
  };

  const technologies = [
    {
      title: "Cloud Infrastructure",
      icon: Server,
      items: ["AWS, Azure, GCP", "Kubernetes Orchestration", "Serverless Computing", "Multi-Cloud Strategy"],
      metrics: { value: "99.9%", label: "Uptime" }
    },
    {
      title: "Development Frameworks",
      icon: Code,
      items: ["React, Next.js", "Node.js, Python", "TypeScript", "Microservices"],
      metrics: { value: "50%", label: "Faster Dev" }
    },
    {
      title: "Data & Analytics",
      icon: Database,
      items: ["PostgreSQL, MongoDB", "Redis Caching", "Data Warehouses", "Real-time Analytics"],
      metrics: { value: "10TB+", label: "Data/Day" }
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      items: ["Zero-Trust Architecture", "OAuth 2.0, SAML", "SOC 2 Compliance", "End-to-End Encryption"],
      metrics: { value: "0", label: "Breaches" }
    },
    {
      title: "DevOps Automation",
      icon: Layers,
      items: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Auto-Scaling"],
      metrics: { value: "85%", label: "Automation" }
    },
    {
      title: "Performance Optimization",
      icon: Cpu,
      items: ["Load Balancing", "CDN Optimization", "Database Indexing", "Caching Strategies"],
      metrics: { value: "3x", label: "Speed Boost" }
    }
  ];

  const techStats = [
    { icon: TrendingUp, value: "15+", label: "Technologies Mastered", color: "text-blue-600" },
    { icon: BarChart3, value: "98%", label: "Performance Increase", color: "text-green-600" },
    { icon: Shield, value: "24/7", label: "Security Monitoring", color: "text-purple-600" },
    { icon: Zap, value: "&lt; 2s", label: "Average Load Time", color: "text-orange-600" }
  ];

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="font-medium text-sm">TECHNOLOGY EXCELLENCE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Enterprise <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Cutting-edge technologies and proven frameworks that power scalable, secure, 
            and maintainable solutions for enterprise success. Our technology stack includes React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, and PyTorch for enterprise-grade solutions.
          </p>
          
          {/* Social Media Sharing */}
          <div className="flex justify-center gap-4 mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mr-4">Share Our Technology Stack:</h3>
            <a href={`https://twitter.com/intent/tweet?text=Check out Aptivon Solutions' cutting-edge technology stack - React, Node.js, Python, AWS, Azure, Google Cloud&url=https://aptivonsolin.vercel.app/`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Share on Twitter
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://aptivonsolin.vercel.app/`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {techStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group hover:shadow-md transition-shadow">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={tech.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
              <CardContent className="p-0">
                <div className="h-1 bg-slate-900"></div>
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{tech.title}</h3>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200 text-xs">
                          {tech.metrics.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900">
                        {tech.metrics.value}
                      </div>
                    </div>
                  </div>

                  {/* Technology Items */}
                  <div className="space-y-3 mb-6">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between group-hover:bg-slate-50 transition-colors"
                  >
                    <span>Explore Stack</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    {[Server, Code, Database, Shield].map((Icon, index) => (
                      <div key={index} className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Build with Modern Tech?</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Let's discuss how our technology stack can accelerate your digital transformation and deliver exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                    onClick={handleScheduleTechConsultation}
                  >
                    Schedule Tech Consultation
                    <Star className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleViewArchitectureExamples}
                  >
                    View Architecture Examples
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}