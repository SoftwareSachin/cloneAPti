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
    name: "Sachin",
    role: "Chief Technology Officer",
    title: "Technical Lead",
    avatar: "S",
    expertise: ["Full-Stack Development", "Cloud Architecture", "System Design"],
    experience: "8+ years",
    icon: Cpu,
    achievements: ["AWS Solutions Architect", "Full-Stack Development Expert", "Enterprise System Architecture"],
    background: "Experienced technology leader with expertise in building scalable web applications and cloud infrastructure. Specialized in modern web technologies and enterprise solution architecture.",
    specialization: "Full-Stack & Cloud Solutions",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
    metrics: { projects: "100+", teams: "10+", systems: "25+" }
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
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
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
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg mx-auto overflow-hidden">
                        <img 
                          src="/sachin-cto.gif" 
                          alt="Sachin - CTO" 
                          className="w-full h-full object-cover"
                        />
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
            <span className="text-gray-700 font-medium">Leading technology innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
}