import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Search, 
  Zap, 
  Shield, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Award,
  Lightbulb
} from "lucide-react";

export default function ApproachSection() {
  const approaches = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "Deep dive workshops to understand objectives, existing architecture, and constraints.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-600",
      accentColor: "blue",
      duration: "1-2 weeks",
      deliverables: ["Requirements Analysis", "Technical Architecture", "Project Roadmap"]
    },
    {
      number: "2", 
      title: "Agile Execution",
      description: "Break work into prioritized sprints with regular demos and feedback loops.",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
      duration: "2-8 weeks",
      deliverables: ["Sprint Demos", "Working Software", "Continuous Integration"]
    },
    {
      number: "3",
      title: "Quality Assurance", 
      description: "Automated testing at every layer and continuous code reviews for reliability.",
      icon: CheckCircle,
      gradient: "from-violet-500 to-purple-600",
      accentColor: "violet",
      duration: "Ongoing",
      deliverables: ["Test Automation", "Code Reviews", "Performance Testing"]
    },
    {
      number: "4",
      title: "Security by Design",
      description: "Embed security best practices with DevSecOps and compliance checks.",
      icon: Shield,
      gradient: "from-red-500 to-pink-600",
      accentColor: "red",
      duration: "Integrated",
      deliverables: ["Security Audits", "Compliance Reports", "Vulnerability Assessment"]
    },
    {
      number: "5",
      title: "Knowledge Transfer",
      description: "Comprehensive documentation and training to empower your team.",
      icon: Users,
      gradient: "from-amber-500 to-orange-600",
      accentColor: "amber",
      duration: "1 week",
      deliverables: ["Documentation", "Training Sessions", "Best Practices Guide"]
    },
    {
      number: "6",
      title: "Continuous Support",
      description: "Ongoing maintenance and optimization for sustained performance.",
      icon: Settings,
      gradient: "from-indigo-500 to-purple-600",
      accentColor: "indigo",
      duration: "Ongoing",
      deliverables: ["24/7 Monitoring", "Performance Optimization", "Feature Updates"]
    }
  ];

  const approachStats = [
    { icon: Target, value: "95%", label: "On-Time Delivery", color: "text-blue-600" },
    { icon: Award, value: "98%", label: "Client Satisfaction", color: "text-green-600" },
    { icon: Clock, value: "30%", label: "Faster to Market", color: "text-purple-600" },
    { icon: Lightbulb, value: "5+", label: "Projects Delivered", color: "text-orange-600" }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium text-sm">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A systematic methodology that ensures successful delivery, exceptional quality, 
            and measurable long-term value for your business.
          </p>
        </div>

        {/* Approach Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {approachStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group hover:shadow-md transition-shadow">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Approach Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <Card key={approach.number} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group h-full">
              <CardContent className="p-0">
                <div className={`h-1 bg-gradient-to-r ${approach.gradient}`}></div>
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${approach.gradient} rounded-lg flex items-center justify-center relative`}>
                        <approach.icon className="w-6 h-6 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {approach.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{approach.title}</h3>
                        <Badge variant="secondary" className={`bg-${approach.accentColor}-50 text-${approach.accentColor}-700 border-${approach.accentColor}-200 text-xs`}>
                          {approach.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {approach.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-900">Key Deliverables:</h4>
                    {approach.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 text-${approach.accentColor}-500 flex-shrink-0`} />
                        <span className="text-sm text-slate-700 font-medium">{deliverable}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between group-hover:bg-slate-50 transition-colors mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    {[Search, Zap, Shield, Users].map((Icon, index) => (
                      <div key={index} className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border-2 border-white">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Project?</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Let's discuss how our proven methodology can deliver exceptional results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                    Schedule Discovery Call
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Case Studies
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