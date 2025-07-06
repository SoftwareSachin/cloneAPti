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
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Technology Expertise</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver robust, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-12 mb-12"
        >
          <div 
            className="absolute inset-0 opacity-10 rounded-2xl"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                <div className="space-y-2 text-gray-200">
                  {tech.items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
