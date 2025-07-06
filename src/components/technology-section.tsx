import { motion } from "framer-motion";
import { Cpu, Server, Code, Database, Shield, Layers } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Server,
      title: "Cloud Platforms",
      items: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      items: ["Terraform", "AWS CloudFormation", "Pulumi"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Database,
      title: "AI/ML Frameworks",
      items: ["TensorFlow", "PyTorch", "scikit-learn", "MLflow"],
      gradient: "from-purple-600 to-violet-600"
    },
    {
      icon: Layers,
      title: "CI/CD Pipeline",
      items: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "CircleCI"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Shield,
      title: "Containerization",
      items: ["Docker", "Kubernetes", "Helm"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Cpu,
      title: "Development Stack",
      items: ["React, Angular, Vue.js", "Node.js, Python", "Flutter, React Native"],
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-8 py-4 bg-slate-100 rounded-2xl mb-8">
            <div className="flex items-center">
              <Cpu className="w-5 h-5 text-slate-700 mr-3" />
              <span className="text-slate-700 font-semibold text-base tracking-wide">TECHNOLOGY EXCELLENCE</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 font-display">Enterprise Technology Stack</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Leveraging enterprise-grade technologies to deliver secure, scalable solutions that drive innovation and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.gradient} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-slate-800 transition-colors font-display">{tech.title}</h3>
                
                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-r ${tech.gradient} rounded-full mr-4 flex-shrink-0`}></div>
                      <p className="text-slate-600 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
