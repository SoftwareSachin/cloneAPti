import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  HelpCircle,
  FileText,
  Video,
  Users,
  ArrowRight,
  Search,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

const SUPPORT_CHANNELS = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "24/7 for Enterprise clients",
      response: "Immediate",
      contact: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed queries to our support team",
      availability: "Monday - Friday, 9 AM - 6 PM EST",
      response: "Within 4 hours",
      contact: "support@aptivon.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time assistance for quick questions",
      availability: "Monday - Friday, 9 AM - 6 PM EST",
      response: "Within 5 minutes",
      contact: "Chat Now"
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support for Enterprise accounts",
      availability: "Business hours",
      response: "Same day",
      contact: "Contact assigned manager"
    }
  ];

  const faqCategories = [
    {
      title: "Technical Implementation",
      questions: [
        "How long does a typical implementation take?",
        "What are the system requirements?",
        "How do you handle data migration?",
        "What security measures do you implement?"
      ]
    },
    {
      title: "Billing & Pricing",
      questions: [
        "How is pricing calculated?",
        "What payment methods do you accept?",
        "Are there any hidden costs?",
        "Can I change my plan later?"
      ]
    },
    {
      title: "Training & Onboarding",
      questions: [
        "What training is included?",
        "How long is the onboarding process?",
        "Do you provide user documentation?",
        "Is ongoing training available?"
      ]
    },
    {
      title: "Maintenance & Support",
      questions: [
        "What's included in maintenance?",
        "How do you handle system updates?",
        "What are your SLA guarantees?",
        "How do you provide ongoing support?"
      ]
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      link: "/resources"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      link: "/resources"
    },
    {
      icon: HelpCircle,
      title: "Knowledge Base",
      description: "Searchable articles and troubleshooting guides",
      link: "/resources"
    }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              We're Here to Help You Succeed
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Get the support you need, when you need it. Our expert team is ready to assist 
              with technical questions, implementation guidance, and ongoing support.
            </p>
            
            {/* Quick Search */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input 
                placeholder="Search help articles..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                Start Live Chat
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Call Support
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Multiple Ways to Get Support
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the support channel that works best for your needs and urgency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_CHANNELS.map((channel: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{channel.title}</h3>
                <p className="text-slate-600 mb-6">{channel.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 text-slate-400 mr-2" />
                    <span className="text-slate-600">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-slate-900 mr-2" />
                    <span className="text-slate-600">Response: {channel.response}</span>
                  </div>
                  <Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white">
                    {channel.contact}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.questions.map((question, idx) => (
                      <li key={idx} className="flex items-start">
                        <HelpCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                          {question}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    View All {category.title} FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Self-Service Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of resources to find answers and learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link href={resource.link}>
                    <Button variant="outline" className="w-full">
                      Access Resource
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Submit a Support Request
              </h2>
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input placeholder="Brief description of your issue" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Low - General question</option>
                      <option>Medium - Non-urgent issue</option>
                      <option>High - Urgent issue affecting work</option>
                      <option>Critical - System down or security issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <Textarea 
                      placeholder="Please provide as much detail as possible about your issue or question..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">Response Time Expectations</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Critical issues: Within 1 hour</li>
                          <li>• High priority: Within 4 hours</li>
                          <li>• Medium/Low priority: Within 24 hours</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Support Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support SLA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Support Commitment
              </h2>
              <p className="text-lg text-gray-600">
                We're committed to providing exceptional support with guaranteed response times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "99.9% Uptime SLA",
                  description: "Enterprise-grade reliability with guaranteed uptime and performance monitoring."
                },
                {
                  icon: Clock,
                  title: "24/7 Monitoring",
                  description: "Round-the-clock system monitoring with proactive issue detection and resolution."
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Certified professionals with deep expertise in your technology stack and industry."
                }
              ].map((commitment, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <commitment.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{commitment.title}</h3>
                  <p className="text-gray-600">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}