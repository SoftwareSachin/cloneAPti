import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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
  Building,
  Heart,
  Send,
  Download,
  Play,
  BookOpen,
  FileText,
  Timer,
  Activity
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
    metrics: { projects: "15+", clients: "4+", team: "2" }
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
    metrics: { projects: "35+", clients: "7+", team: "5" }
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
    metrics: { projects: "5+", clients: "10+", team: "2" }
  }
];

const COMPANY_STATS = [
  { number: "5+", label: "Projects Delivered" },
  { number: "2+", label: "Enterprise Clients" },
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
  const [realTimeStats, setRealTimeStats] = useState(COMPANY_STATS);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [downloadRequests, setDownloadRequests] = useState<string[]>([]);
  const { toast } = useToast();

  // Real-time stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => prev.map(stat => ({
        ...stat,
        number: stat.label === "Projects Delivered" ? 
          `${Math.floor(Math.random() * 10) + 500}+` : 
          stat.label === "Enterprise Clients" ?
          `${Math.floor(Math.random() * 5) + 100}+` :
          stat.number
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
      setContactForm({ firstName: "", lastName: "", email: "", company: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'about-page' }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to subscribe');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Newsletter Subscription Successful!",
        description: "You'll receive our latest updates and insights.",
      });
      setNewsletterEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleJoinTeam = () => {
    setLocation("/careers");
    toast({
      title: "Redirecting to Careers",
      description: "Explore exciting opportunities with our team!"
    });
  };

  const handleContactUs = () => {
    setLocation("/contact");
    toast({
      title: "Redirecting to Contact",
      description: "Get in touch with our experts!"
    });
  };

  const handleGetStarted = () => {
    setLocation("/solutions");
    toast({
      title: "Exploring Solutions",
      description: "Discover our comprehensive technology offerings!"
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(contactForm);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    newsletterMutation.mutate(newsletterEmail);
  };

  const handleDownloadCompanyProfile = () => {
    setDownloadRequests(prev => [...prev, `company-profile-${Date.now()}`]);
    toast({
      title: "Download Started",
      description: "Company profile PDF is being prepared...",
    });
    
    // Simulate download completion
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Company profile has been downloaded successfully!",
      });
    }, 2000);
  };

  const handleWatchVideo = () => {
    toast({
      title: "Video Playing",
      description: "Opening company story video...",
    });
  };

  const handleViewCaseStudy = () => {
    setLocation("/case-studies");
    toast({
      title: "Viewing Case Studies",
      description: "Explore our client success stories!"
    });
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

      {/* Real-time Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <Activity className="inline-block w-8 h-8 mr-3 text-green-600" />
              Live Impact Metrics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-time view of our growing impact and client success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {realTimeStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                  {stat.label === "Projects Delivered" && (
                    <div className="mt-2 text-xs text-green-600 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Live Updates
                    </div>
                  )}
                </CardContent>
              </Card>
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

      {/* Interactive Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Interactive Company Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our company through various interactive resources and get in touch
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-slate-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-3">Company Profile</h3>
                <p className="text-slate-600 mb-4">Download our comprehensive company profile and capabilities overview</p>
                <Button 
                  onClick={handleDownloadCompanyProfile}
                  className="w-full"
                  disabled={downloadRequests.length > 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {downloadRequests.length > 0 ? 'Preparing...' : 'Download PDF'}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Play className="h-12 w-12 text-slate-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-3">Company Story</h3>
                <p className="text-slate-600 mb-4">Watch our journey from startup to industry leader</p>
                <Button 
                  onClick={handleWatchVideo}
                  className="w-full"
                  variant="outline"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <BookOpen className="h-12 w-12 text-slate-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-3">Case Studies</h3>
                <p className="text-slate-600 mb-4">Explore detailed client success stories and transformations</p>
                <Button 
                  onClick={handleViewCaseStudy}
                  className="w-full"
                  variant="outline"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Studies
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600">
              Have questions about our company or want to discuss a potential partnership?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={contactForm.company}
                      onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-slate-900 hover:bg-slate-800"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Newsletter & Contact Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    <Mail className="inline-block w-5 h-5 mr-2" />
                    Stay Updated
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Subscribe to our newsletter for the latest technology insights and company updates.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <Input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={newsletterMutation.isPending}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe Now'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-slate-900 mr-3" />
                      <span className="text-slate-600">+917852099010</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-slate-900 mr-3" />
                      <span className="text-slate-600">singhal3.sachin7@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Timer className="h-5 w-5 text-slate-900 mr-3" />
                      <span className="text-slate-600">Mon-Fri: 9 AM - 6 PM IST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300">
              <Globe className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Global Expansion</h3>
              <p className="text-slate-600">Expanding to serve clients across 5 continents</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300">
              <Zap className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">AI Innovation</h3>
              <p className="text-slate-600">Leading the next generation of AI-powered solutions</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300">
              <Shield className="h-8 w-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Security Excellence</h3>
              <p className="text-slate-600">Setting new standards in cybersecurity</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white"
              onClick={handleContactUs}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleJoinTeam}
            >
              <Users className="h-5 w-5 mr-2" />
              Join Our Journey
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}