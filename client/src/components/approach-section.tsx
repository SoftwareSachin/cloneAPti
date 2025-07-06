import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function ApproachSection() {
  const approaches = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "Deep dive workshops to understand objectives, existing architecture, and constraints.",
      color: "bg-primary"
    },
    {
      number: "2",
      title: "Agile Execution",
      description: "Break work into prioritized sprints with regular demos and feedback loops.",
      color: "bg-accent"
    },
    {
      number: "3",
      title: "Quality Assurance",
      description: "Automated testing at every layer and continuous code reviews for reliability.",
      color: "bg-success"
    },
    {
      number: "4",
      title: "Security by Design",
      description: "Embed security best practices with DevSecOps and compliance checks.",
      color: "bg-red-500"
    },
    {
      number: "5",
      title: "Knowledge Transfer",
      description: "Comprehensive documentation and training to empower your team.",
      color: "bg-purple-500"
    },
    {
      number: "6",
      title: "Continuous Support",
      description: "Ongoing maintenance and optimization for sustained performance.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">OUR METHODOLOGY</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-primary-dark mb-6 font-display">Proven Approach</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            A systematic methodology that ensures successful delivery, exceptional quality, and measurable long-term value for your business.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="h-96 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-80"></div>
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Collaborative Excellence</h3>
                <p className="text-lg max-w-2xl mx-auto">
                  Our cross-functional teams work seamlessly together to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={approach.number} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group-hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 ${approach.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                      {approach.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                        {approach.title}
                      </h3>
                      <p className="text-text-gray leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}