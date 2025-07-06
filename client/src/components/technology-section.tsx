import { Cpu, Server, Code, Database, Shield, Layers } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      title: "Cloud Infrastructure",
      icon: Server,
      items: ["AWS, Azure, GCP", "Kubernetes Orchestration", "Serverless Computing", "Multi-Cloud Strategy"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Development Frameworks",
      icon: Code,
      items: ["React, Next.js", "Node.js, Python", "TypeScript", "Microservices"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Data & Analytics",
      icon: Database,
      items: ["PostgreSQL, MongoDB", "Redis Caching", "Data Warehouses", "Real-time Analytics"],
      gradient: "from-purple-600 to-violet-600"
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      items: ["Zero-Trust Architecture", "OAuth 2.0, SAML", "SOC 2 Compliance", "End-to-End Encryption"],
      gradient: "from-red-600 to-rose-600"
    },
    {
      title: "DevOps Automation",
      icon: Layers,
      items: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Auto-Scaling"],
      gradient: "from-orange-600 to-amber-600"
    },
    {
      title: "Performance",
      icon: Cpu,
      items: ["Load Balancing", "CDN Optimization", "Database Indexing", "Caching Strategies"],
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-8 py-4 bg-slate-100 rounded-2xl mb-8">
            <div className="flex items-center">
              <Cpu className="w-5 h-5 text-slate-700 mr-3" />
              <span className="text-slate-700 font-semibold text-base tracking-wide">TECHNOLOGY EXCELLENCE</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 font-display">Enterprise Technology Stack</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge technologies and proven frameworks that power scalable, secure, and maintainable solutions for enterprise success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {tech.title}
                </h3>
                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 group-hover:bg-slate-400 transition-colors"></div>
                      <p className="text-slate-600 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}