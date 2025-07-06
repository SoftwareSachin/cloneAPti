import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory
} from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      industry: "Healthcare",
      icon: Stethoscope,
      client: "Regional Medical Center",
      title: "Digital Transformation of Patient Care System",
      challenge: "A 500-bed hospital system was struggling with outdated patient management systems, causing long wait times and inefficient care delivery.",
      solution: "Implemented a comprehensive Electronic Health Records (EHR) system with integrated patient scheduling, real-time monitoring, and telemedicine capabilities.",
      results: [
        { metric: "Patient wait time reduction", value: "45%" },
        { metric: "Operational efficiency increase", value: "60%" },
        { metric: "Patient satisfaction score", value: "4.8/5" },
        { metric: "Cost savings annually", value: "$2.3M" }
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR"],
      timeline: "8 months",
      testimonial: "Aptivon transformed our entire patient care workflow. The new system has dramatically improved our efficiency and patient outcomes.",
      clientRole: "Chief Technology Officer"
    },
    {
      industry: "E-commerce",
      icon: ShoppingCart,
      client: "National Retail Chain",
      title: "AI-Powered E-commerce Platform Modernization",
      challenge: "Legacy e-commerce platform couldn't handle peak traffic loads and lacked personalization features, resulting in lost sales and poor customer experience.",
      solution: "Built a cloud-native e-commerce platform with AI-powered recommendations, real-time inventory management, and scalable infrastructure.",
      results: [
        { metric: "Online sales increase", value: "150%" },
        { metric: "Site performance improvement", value: "300%" },
        { metric: "Customer engagement boost", value: "85%" },
        { metric: "Revenue growth", value: "$15M" }
      ],
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "Kubernetes"],
      timeline: "12 months",
      testimonial: "The new platform exceeded all our expectations. Our customers love the personalized experience, and our sales have skyrocketed.",
      clientRole: "VP of Digital Commerce"
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      client: "Automotive Parts Manufacturer",
      title: "Smart Factory IoT Implementation",
      challenge: "Production inefficiencies and equipment downtime were costing millions annually due to lack of real-time monitoring and predictive maintenance.",
      solution: "Deployed IoT sensors and analytics platform for predictive maintenance, quality control, and production optimization across three manufacturing facilities.",
      results: [
        { metric: "Production downtime reduction", value: "60%" },
        { metric: "Quality defects decrease", value: "40%" },
        { metric: "Energy cost savings", value: "25%" },
        { metric: "ROI achieved", value: "280%" }
      ],
      technologies: ["Azure IoT", "Power BI", "Python", "Machine Learning", "Edge Computing"],
      timeline: "10 months",
      testimonial: "This IoT solution revolutionized our manufacturing process. We can now predict and prevent issues before they impact production.",
      clientRole: "Head of Operations"
    },
    {
      industry: "Financial Services",
      icon: Building2,
      client: "Community Bank",
      title: "Core Banking System Modernization",
      challenge: "Outdated mainframe system was limiting growth opportunities and customer service capabilities while increasing operational costs.",
      solution: "Migrated to modern cloud-based core banking system with enhanced security, real-time processing, and improved customer portal.",
      results: [
        { metric: "Transaction processing speed", value: "300%" },
        { metric: "Operational cost reduction", value: "35%" },
        { metric: "Customer satisfaction increase", value: "90%" },
        { metric: "New product launch time", value: "75% faster" }
      ],
      technologies: ["Java Spring", "PostgreSQL", "AWS", "React", "Microservices"],
      timeline: "14 months",
      testimonial: "The new banking system has positioned us for future growth. We can now offer innovative services that compete with larger banks.",
      clientRole: "Chief Information Officer"
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: "250%", label: "Average ROI Delivered" },
    { icon: Clock, value: "40%", label: "Time-to-Market Improvement" },
    { icon: Users, value: "98%", label: "Client Satisfaction Rate" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Generated" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="text-green-600"> Real Clients</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how we've helped businesses across industries achieve digital transformation 
              and drive measurable growth through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600">Proven results across all our client engagements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our technology solutions have transformed businesses and delivered 
              exceptional results across different industries.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8">
                    <div className="flex items-center mb-4">
                      <study.icon className="h-8 w-8 mr-3" />
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {study.industry}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                    <h4 className="text-lg mb-4 text-blue-100">{study.title}</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Timeline</h5>
                        <p className="text-blue-100">{study.timeline}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-1">
                          {study.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-white/30 text-white text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-4">Results Achieved</h5>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                              <div className="text-2xl font-bold text-green-600">{result.value}</div>
                              <div className="text-sm text-gray-600">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold text-gray-900">- {study.clientRole}, {study.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Success Methodology
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Every success story follows our systematic approach to digital transformation.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategic Assessment",
                  description: "Deep dive into business challenges and opportunities"
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Custom architecture tailored to your specific needs"
                },
                {
                  step: "03",
                  title: "Agile Implementation",
                  description: "Iterative development with continuous feedback"
                },
                {
                  step: "04",
                  title: "Optimization & Scale",
                  description: "Ongoing enhancement and performance optimization"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful clients and transform your business with proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Discuss Your Challenge
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}