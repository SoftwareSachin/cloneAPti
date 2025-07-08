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
  Calendar,
  Code
} from "lucide-react";
import chetanImage from "@assets/image_1751990536872.png";

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
    background: "Architected cloud infrastructure serving 5M+ users at Google. Led engineering teams building next-generation AI platforms and scalable microservices architectures.",
    specialization: "Enterprise Cloud Solutions",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
    metrics: { projects: "15+", teams: "2+", systems: "5M+" }
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
    background: "Scaled B2B SaaS products from $1M to $10M+ ARR at Microsoft. Expert in enterprise digital transformation and strategic product roadmapping for Fortune 500 companies.",
    specialization: "Strategic Product Leadership",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    metrics: { revenue: "$10M+", products: "5+", clients: "50+" }
  },
  {
    id: 3,
    name: "Chetan Suthar",
    role: "Developer",
    title: "Full Stack Developer",
    avatar: "CS",
    expertise: ["Full Stack Development", "React & Node.js", "Modern Web Technologies"],
    experience: "5+ years",
    icon: Code,
    achievements: ["React Expert", "Node.js Specialist", "UI/UX Design Excellence"],
    background: "Specialized in building scalable web applications using React, Node.js, and modern frontend frameworks. Expert in creating responsive, user-friendly interfaces and robust backend systems.",
    specialization: "Full Stack Web Development",
    gradient: "from-purple-500 to-pink-600",
    accentColor: "purple",
    metrics: { projects: "20+", technologies: "15+", apps: "10+" },
    image: chetanImage
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



        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group h-full">
              <CardContent className="p-0">
                <div className={`h-1 bg-gradient-to-r ${member.gradient}`}></div>
                <div className="p-8 h-full flex flex-col">
                  {/* Avatar & Header */}
                  <div className="text-center mb-6">
                    <div className="relative mb-4 mx-auto w-20 h-20">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          member.avatar
                        )}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <member.icon className={`w-4 h-4 text-${member.accentColor}-600`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-slate-600 font-medium mb-3">{member.role}</p>
                    <Badge variant="secondary" className={`bg-${member.accentColor}-50 text-${member.accentColor}-700 border-${member.accentColor}-200 text-xs`}>
                      {member.experience}
                    </Badge>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(member.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-2 bg-slate-50 rounded-lg">
                        <div className={`text-lg font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Background */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {member.background}
                  </p>

                  {/* Expertise */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-900">Core Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-slate-900">Key Achievements:</h4>
                    <div className="space-y-2">
                      {member.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className={`w-3 h-3 text-${member.accentColor}-500 flex-shrink-0`} />
                          <span className="text-xs text-slate-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 justify-center group-hover:bg-slate-50 transition-colors"
                    >
                      <LinkedIn className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 justify-center group-hover:bg-slate-50 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    {teamMembers.map((member) => (
                      <div 
                        key={member.id}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm`}
                      >
                        {member.avatar}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Work with Our Team?</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Connect with our leadership team to discuss your project requirements and strategic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                    Schedule Leadership Call
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Team Profiles
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