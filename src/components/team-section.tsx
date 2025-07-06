import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Star, Trophy, Target } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Technical Lead",
    avatar: "SC",
    expertise: ["Full-Stack Development", "Cloud Architecture", "DevOps"],
    experience: "8+ years",
    icon: Trophy,
    background: "Former Senior Engineer at Google, specializing in scalable distributed systems and cloud-native applications."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    avatar: "MR",
    expertise: ["Product Strategy", "Market Analysis", "Agile Methodology"],
    experience: "6+ years",
    icon: Target,
    background: "Led product teams at Microsoft, with expertise in B2B SaaS platforms and digital transformation initiatives."
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Manager",
    avatar: "PS",
    expertise: ["UX Strategy", "Data Analytics", "Customer Success"],
    experience: "7+ years",
    icon: Star,
    background: "Former Amazon PM with extensive experience in e-commerce platforms and customer-centric product development."
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry veterans with proven track records in delivering exceptional technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            return (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="relative mx-auto mb-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {member.experience}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.background}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200">
            <User className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Building the future, one solution at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
}