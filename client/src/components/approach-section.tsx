import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-5xl font-bold text-primary-dark mb-6">Proven Approach</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            A systematic methodology that ensures successful delivery, exceptional quality, and measurable long-term value for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-modern-lg transition-all duration-500 border-0 shadow-modern group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 ${approach.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{approach.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">{approach.title}</h3>
                  <p className="text-text-gray leading-relaxed">{approach.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
