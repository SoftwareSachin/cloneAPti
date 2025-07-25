import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, Award, TrendingUp, ArrowRight, Send, CheckCircle, Star, Cloud, Settings, Cpu, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoGif from "../assets/new-logo.gif";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const services = [
    { name: "Cloud Infrastructure", href: "/services", icon: Cloud },
    { name: "DevOps & Automation", href: "/services", icon: Settings },
    { name: "AI & Analytics", href: "/services", icon: Cpu },
    { name: "Application Development", href: "/services", icon: Smartphone }
  ];

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
    { name: "Careers", href: "/careers" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" }
  ];

  const quickStats = [
    { value: "5+", label: "Projects Delivered", icon: CheckCircle },
    { value: "3+", label: "Happy Clients", icon: Star },
    { value: "15+", label: "Technologies", icon: TrendingUp },
    { value: "2", label: "Expert Team", icon: Award }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* CTA Section with Advanced Design */}
      <section className="relative py-24 bg-slate-800 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/40 mb-8">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent" style={{lineHeight: '1.4'}}>
            Let's Build Something Amazing<br />Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join industry leaders who trust us to deliver cutting-edge solutions that drive real business results and competitive advantage.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {quickStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white border-0"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <button 
              className="h-11 px-8 rounded-lg border-2 border-white/20 text-white bg-white/5 hover:bg-white hover:text-slate-900 font-medium text-sm"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Footer Content */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src={logoGif} 
                    alt="Aptivon Solutions" 
                    className="h-12 w-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Aptivon Solutions
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">Enterprise Technology Partner</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Pioneering enterprise technology solutions with a focus on innovation, reliability, and scalable growth. We transform businesses through cutting-edge cloud infrastructure, AI-driven analytics, and automated deployment strategies.
              </p>
              
              {/* Contact Info with Modern Design */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="text-white font-medium">singhal3.sachin7@gmail.com</span>
                    <p className="text-xs text-slate-400">Business Inquiries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-white font-medium">+917852099010</span>
                    <p className="text-xs text-slate-400">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <div>
                    <span className="text-white font-medium">India</span>
                    <p className="text-xs text-slate-400">Global Operations</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links with Enhanced Design */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10 backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services - Enhanced */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Services
              </h4>
              <ul className="space-y-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group"
                      >
                        <IconComponent className="w-5 h-5 text-blue-400" />
                        <span className="group-hover:underline">{service.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company Links - Enhanced */}
            <div className="lg:col-span-4">
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Company
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {companyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 hover:underline py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h5 className="text-lg font-bold text-white mb-3">Stay Updated</h5>
                <p className="text-slate-300 text-sm mb-4">Get the latest insights and updates delivered to your inbox.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? <CheckCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="border-t border-slate-700/50 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="text-slate-400 text-sm">
                  © 2025 Aptivon Solutions. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>Last updated: January 2025</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <a href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">
                  Terms of Service
                </a>
                <a href="/cookie-policy" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">
                  Cookie Policy
                </a>
                <a href="/security" className="text-slate-400 hover:text-white text-sm transition-colors hover:underline">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}