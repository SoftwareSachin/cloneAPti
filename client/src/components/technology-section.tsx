import { motion } from "framer-motion";

export default function TechnologySection() {
  const technologies = [
    {
      title: "Cloud Platforms",
      items: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
    },
    {
      title: "Infrastructure as Code",
      items: ["Terraform", "AWS CloudFormation", "Pulumi"]
    },
    {
      title: "AI/ML Frameworks",
      items: ["TensorFlow", "PyTorch", "scikit-learn", "MLflow"]
    },
    {
      title: "CI/CD",
      items: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "CircleCI"]
    },
    {
      title: "Containerization",
      items: ["Docker", "Kubernetes", "Helm"]
    },
    {
      title: "Development",
      items: ["React, Angular, Vue.js", "Node.js, Python", "Flutter, React Native"]
    }
  ];

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-3 bg-secondary/10 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm">TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-5xl font-bold text-primary-dark mb-6">Technology Expertise</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies to deliver robust, scalable solutions that drive innovation and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative gradient-primary rounded-3xl p-16 mb-12 shadow-modern-lg overflow-hidden"
        >
          {/* Modern geometric background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:scale-105 transition-transform">{tech.title}</h3>
                  <div className="space-y-3 text-white/90">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <p className="font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
