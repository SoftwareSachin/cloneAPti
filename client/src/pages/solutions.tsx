import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Solutions() {
  const solutions = [
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Solutions That
              <span className="text-blue-600"> Drive Results</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From cloud infrastructure to AI implementation, we deliver comprehensive 
              technology solutions that transform your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end technology solutions designed to meet the unique 
              challenges of modern businesses across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      {solution.benefits}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Free Consultation
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}