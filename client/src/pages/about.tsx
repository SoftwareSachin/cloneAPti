import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Building
} from "lucide-react";

// Company journey data since 2022
const JOURNEY_TIMELINE = [
  {
    year: "2022",
    title: "Foundation & Vision",
    description: "Aptivon Solutions was founded with a mission to democratize enterprise technology and make cutting-edge solutions accessible to businesses of all sizes.",
    icon: Building,
    achievements: [
      "Company established with core team of 5 experts",
      "First 10 enterprise clients onboarded",
      "Cloud migration services launched",
      "Partnership with AWS and Azure established"
    ],
    metrics: { projects: "25+", clients: "10+", team: "5" }
  },
  {
    year: "2023", 
    title: "Rapid Growth & Expansion",
    description: "Scaled operations significantly, expanded service offerings, and established ourselves as a trusted technology partner in the market.",
    icon: TrendingUp,
    achievements: [
      "Team expanded to 25 professionals",
      "AI/ML practice launched successfully",
      "Cybersecurity solutions introduced",
      "ISO 27001 certification achieved"
    ],
    metrics: { projects: "150+", clients: "40+", team: "25" }
  },
  {
    year: "2024",
    title: "Innovation & Excellence", 
    description: "Focused on innovation, delivering advanced AI solutions, and achieving industry recognition for our exceptional service quality.",
    icon: Award,
    achievements: [
      "Advanced AI/ML solutions deployed",
      "Digital transformation practice established", 
      "Industry awards for innovation received",
      "Fortune 500 clients acquired"
    ],
    metrics: { projects: "350+", clients: "75+", team: "50" }
  },
  {
    year: "2025",
    title: "Global Leadership",
    description: "Positioned as a global leader in enterprise technology solutions, driving digital transformation across industries worldwide.",
    icon: Globe,
    achievements: [
      "International expansion launched",
      "Advanced automation platforms deployed",
      "Strategic partnerships with major tech vendors",
      "Industry thought leadership established"
    ],
    metrics: { projects: "500+", clients: "100+", team: "75" }
  }
];

const COMPANY_STATS = [
  { number: "500+", label: "Projects Delivered" },
  { number: "100+", label: "Enterprise Clients" },
  { number: "3+", label: "Years of Excellence" },
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
  const [, setLocation] = useLocation();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleJoinTeam = () => {
    setLocation("/careers");
  };

  const handleContactUs = () => {
    setLocation("/contact");
  };

  const handleGetStarted = () => {
    setLocation("/solutions");
  };

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
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transforming enterprises through innovative technology solutions since 2022. 
              From startup to industry leader in just 3 years, we've redefined what's possible in enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white"
                onClick={handleGetStarted}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Explore Our Solutions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleJoinTeam}
              >
                Join Our Team
              </Button>
            </div>
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

      {/* Company Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey Since 2022
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From ambitious startup to industry leader - witness our remarkable growth and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {JOURNEY_TIMELINE.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`bg-white p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedYear === milestone.year 
                    ? 'border-slate-900 shadow-xl scale-105' 
                    : 'border-slate-200 hover:shadow-lg hover:border-slate-300'
                }`}
                onClick={() => setSelectedYear(selectedYear === milestone.year ? null : milestone.year)}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4">
                    <milestone.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-slate-700">{milestone.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">{milestone.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">{milestone.metrics.projects}</div>
                    <div className="text-xs text-slate-600">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">{milestone.metrics.clients}</div>
                    <div className="text-xs text-slate-600">Clients</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">{milestone.metrics.team}</div>
                    <div className="text-xs text-slate-600">Team Size</div>
                  </div>
                </div>

                {selectedYear === milestone.year && (
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement: string, idx: number) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-slate-900 mr-2 flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Looking Ahead: 2025 & Beyond
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            With our proven track record of rapid growth and innovation, we're positioned to become the global leader in enterprise technology solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-slate-50 rounded-lg">
              <Globe className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Global Expansion</h3>
              <p className="text-slate-600">Expanding to serve clients across 5 continents</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Zap className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">AI Innovation</h3>
              <p className="text-slate-600">Leading the next generation of AI-powered solutions</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Shield className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Security Excellence</h3>
              <p className="text-slate-600">Setting new standards in cybersecurity</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white"
            onClick={handleContactUs}
          >
            <Phone className="h-5 w-5 mr-2" />
            Be Part of Our Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}