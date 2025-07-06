import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Cpu, 
  Target, 
  Users,
  ArrowRight,
  Award,
  Briefcase,
  TrendingUp,
  Star,
  CheckCircle,
  Globe,
  LinkedIn,
  Mail,
  Calendar
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    title: "Technical Lead",
    avatar: "SC",
    expertise: ["Cloud Architecture", "AI/ML Systems", "DevOps Excellence"],
    experience: "12+ years",
    icon: Cpu,
    achievements: ["AWS Solutions Architect Professional", "Former Google Senior Engineer", "Patents in Distributed Systems"],
    background: "Architected cloud infrastructure serving 50M+ users at Google. Led engineering teams building next-generation AI platforms and scalable microservices architectures.",
    specialization: "Enterprise Cloud Solutions",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
    metrics: { projects: "150+", teams: "20+", systems: "50M+" }
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Product Strategy",
    title: "Senior Product Manager",
    avatar: "MR",
    expertise: ["Enterprise Strategy", "Digital Transformation", "Market Innovation"],
    experience: "10+ years",
    icon: Target,
    achievements: ["Microsoft Distinguished PM", "Harvard MBA", "Product Leader of the Year 2023"],
    background: "Scaled B2B SaaS products from $10M to $100M+ ARR at Microsoft. Expert in enterprise digital transformation and strategic product roadmapping for Fortune 500 companies.",
    specialization: "Strategic Product Leadership",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    metrics: { revenue: "$100M+", products: "25+", clients: "500+" }
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Head of Customer Success",
    title: "Product Manager",
    avatar: "PS",
    expertise: ["Customer Experience", "Data Analytics", "Growth Strategy"],
    experience: "9+ years",
    icon: Shield,
    achievements: ["Amazon Principal PM", "Stanford MS", "Customer Success Excellence Award"],
    background: "Drove customer-centric product innovations at Amazon, managing P&L for $200M+ product lines. Specialized in leveraging data analytics to optimize user experiences and drive growth.",
    specialization: "Customer-Centric Innovation",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
    metrics: { satisfaction: "98%", retention: "95%", growth: "300%" }
  }
];



export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="font-medium text-sm">LEADERSHIP TEAM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Industry veterans with proven track records in delivering exceptional technology solutions 
            for enterprise clients worldwide.
          </p>
        </div>



        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={member.id} 
                className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Profile header */}
                  <div className="text-center mb-6">
                    <div className="relative mx-auto mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg mx-auto">
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                      <span className="text-gray-700 text-sm font-medium">{member.experience}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Specialization */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <span className="text-primary font-medium text-sm">{member.specialization}</span>
                      </div>
                    </div>
                    
                    {/* Background */}
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.background}
                      </p>
                    </div>
                    
                    {/* Expertise */}
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-sm">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-sm">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                >
                  {member.avatar}
                </div>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="text-gray-700 font-medium">Driving innovation with proven expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}