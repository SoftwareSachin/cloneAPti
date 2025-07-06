import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Cpu, 
  Globe,
  CheckCircle
} from "lucide-react";

const SOLUTIONS_DATA = [
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description: "Seamlessly migrate your infrastructure to cloud platforms with zero downtime and optimized costs.",
      features: ["AWS/Azure/GCP Migration", "Cloud Architecture Design", "Cost Optimization", "24/7 Monitoring"],
      benefits: "Reduce infrastructure costs by up to 40% while improving scalability and reliability."
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security frameworks to protect your business from evolving cyber threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      benefits: "Achieve 99.9% threat detection rate with enterprise-grade security protocols."
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable business insights with advanced analytics platforms.",
      features: ["Data Warehousing", "Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
      benefits: "Increase decision-making speed by 60% with real-time data visualization."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS/Android Development", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"],
      benefits: "Launch mobile apps 50% faster with our proven development methodology."
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Implement intelligent automation and predictive analytics to transform your business operations.",
      features: ["ML Model Development", "Natural Language Processing", "Computer Vision", "Process Automation"],
      benefits: "Automate 70% of repetitive tasks while improving accuracy and efficiency."
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology.",
      features: ["Process Digitization", "Legacy System Modernization", "API Integration", "Change Management"],
      benefits: "Achieve 3x faster business processes with complete digital transformation."
    }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Technology Solutions That Drive Results
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              From cloud infrastructure to AI implementation, we deliver comprehensive 
              technology solutions that transform your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We provide end-to-end technology solutions designed to meet the unique 
              challenges of modern businesses across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900">
                  <p className="text-sm text-slate-700 font-medium">
                    {solution.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive assessment of your current technology landscape and business requirements."
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Custom solution architecture tailored to your specific needs and growth objectives."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Agile development and deployment with continuous testing and quality assurance."
              },
              {
                step: "04",
                title: "Support & Optimization",
                description: "Ongoing monitoring, maintenance, and optimization to ensure peak performance."
              }
            ].map((process: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}