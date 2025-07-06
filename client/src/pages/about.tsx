import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Users, Target, Award, Globe } from "lucide-react";

// Optimized data structures
const COMPANY_STATS = [
  { number: "500+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "99.9%", label: "Uptime SLA" }
];

const CORE_VALUES = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
  },
  {
    icon: Users,
    title: "Client Partnership", 
    description: "We build long-term relationships based on trust, transparency, and shared success in achieving business goals."
  },
  {
    icon: Award,
    title: "Excellence Standards",
    description: "Our commitment to quality ensures every solution meets the highest standards of performance and reliability."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With expertise spanning multiple industries and regions, we deliver solutions that scale globally."
  }
];

export default function About() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About Aptivon Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering enterprises worldwide with innovative technology solutions since 2008. 
              We transform businesses through strategic digital innovation and expert implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower organizations with transformative technology solutions that drive innovation, 
                optimize operations, and accelerate growth. We bridge the gap between complex technology 
                and business success.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every solution we deliver is designed to create measurable impact, enhance efficiency, 
                and position our clients for sustainable competitive advantage in their markets.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To be the globally recognized leader in enterprise technology solutions, known for 
                innovation, reliability, and exceptional client success across all industries.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a future where technology seamlessly integrates with business strategy, 
                enabling organizations to achieve their full potential through intelligent automation 
                and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Demonstrating excellence through measurable results and client success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide every decision and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_VALUES.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From startup to enterprise leader - a timeline of growth and innovation
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-slate-900">2008</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Company Founded</h3>
                <p className="text-slate-600">Started as a small consulting firm with a vision to democratize enterprise technology.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-slate-900">2015</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud Transformation</h3>
                <p className="text-slate-600">Expanded into cloud migration services, helping 100+ companies transition to AWS and Azure.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-slate-900">2020</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI & Analytics Focus</h3>
                <p className="text-slate-600">Launched AI/ML practice, delivering predictive analytics and automation solutions.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-slate-900">2024</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Global Expansion</h3>
                <p className="text-slate-600">Established international partnerships and expanded service offerings to serve Fortune 500 clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}