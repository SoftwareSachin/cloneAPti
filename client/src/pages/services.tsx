import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Cloud, Server, Brain, Smartphone, Shield, Database, Cpu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

// Optimize by reducing data size on initial load
const SERVICES_DATA = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Migration",
    description: "Complete cloud transformation services with enterprise-grade security and cost optimization.",
    features: [
      "Multi-cloud strategy and architecture",
      "AWS, Azure, GCP migration services", 
      "Infrastructure as Code (IaC) implementation",
      "Cloud cost optimization and monitoring"
    ],
    benefits: "Reduce infrastructure costs by 40% while improving scalability and reliability"
  },
  {
    icon: Server,
    title: "DevOps & Automation", 
    description: "Streamline development and operations with automated CI/CD pipelines and infrastructure management.",
    features: [
      "CI/CD pipeline design and implementation",
      "Container orchestration with Kubernetes",
      "Infrastructure automation and monitoring", 
      "Release management and deployment strategies"
    ],
    benefits: "Accelerate deployment cycles by 75% and reduce manual errors significantly"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Data-driven insights and intelligent automation through custom AI/ML implementations.",
    features: [
      "Custom machine learning model development",
      "Predictive analytics and forecasting",
      "Natural language processing solutions",
      "Computer vision and image recognition"
    ],
    benefits: "Improve decision-making accuracy by 60% with data-driven insights"
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Modern web and mobile applications built with scalable architectures and user-centric design.",
    features: [
      "Progressive web applications (PWA)",
      "Native iOS and Android development",
      "Cross-platform mobile solutions",
      "API design and microservices architecture"
    ],
    benefits: "Launch products 50% faster with scalable, maintainable code architecture"
  }
];

export default function Services() {

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise Technology Services
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable business growth through innovation and expertise.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Service Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end technology services that cover every aspect of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-slate-700 mb-1">Business Impact:</div>
                  <div className="text-sm text-slate-600">{service.benefits}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Delivery Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery & Assessment</h3>
              <p className="text-slate-600 text-sm">Comprehensive analysis of current state and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategy & Planning</h3>
              <p className="text-slate-600 text-sm">Detailed roadmap with milestones and success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Implementation</h3>
              <p className="text-slate-600 text-sm">Agile development with continuous feedback and iteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Support & Optimization</h3>
              <p className="text-slate-600 text-sm">Ongoing monitoring and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}