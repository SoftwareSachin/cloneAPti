import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { MapPin, Phone, Mail, Clock, Globe, Users, MessageCircle, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const office = {
    city: "Jaipur, India",
    address: "Jagatpura, Jaipur, India",
    phone: "+917852099010",
    email: "singhal3.sachin7@gmail.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM IST"
  };

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct phone support for all inquiries",
      contact: "+917852099010",
      availability: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      action: "call"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and business development",
      contact: "singhal3.sachin7@gmail.com",
      availability: "Response within 4 hours",
      action: "email"
    },
    {
      icon: Users,
      title: "Enterprise Support",
      description: "Dedicated support for enterprise accounts",
      contact: "singhal3.sachin7@gmail.com",
      availability: "Priority Response",
      action: "email"
    },
    {
      icon: Globe,
      title: "Partner Network",
      description: "Connect with our certified partner network",
      contact: "singhal3.sachin7@gmail.com",
      availability: "Partnership Inquiries",
      action: "email"
    }
  ];

  const handleContactAction = (channel: any) => {
    if (channel.action === "call") {
      window.open(`tel:${channel.contact}`, '_blank');
      toast({
        title: "Opening Phone Dialer",
        description: `Calling ${channel.contact}`,
      });
    } else if (channel.action === "email") {
      window.open(`mailto:${channel.contact}?subject=Inquiry from Aptivon Website`, '_blank');
      toast({
        title: "Opening Email Client",
        description: `Composing email to ${channel.contact}`,
      });
    }
  };

  const handleCopyContact = (contact: string) => {
    navigator.clipboard.writeText(contact);
    toast({
      title: "Contact Copied",
      description: `${contact} copied to clipboard`,
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
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Our expert team is here to help you achieve your digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How Can We Help?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team for support, partnerships, and business inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{channel.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{channel.description}</p>
                <div className="text-slate-900 font-medium text-sm mb-2">{channel.contact}</div>
                <div className="text-slate-500 text-xs mb-4">{channel.availability}</div>
                <div className="flex gap-2 justify-center">
                  <Button 
                    size="sm" 
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                    onClick={() => handleContactAction(channel)}
                  >
                    {channel.action === "call" ? <Phone className="h-4 w-4 mr-1" /> : <Mail className="h-4 w-4 mr-1" />}
                    {channel.action === "call" ? "Call" : "Email"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleCopyContact(channel.contact)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Office Location */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Office</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at our headquarters in Jaipur for in-person consultations and meetings
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{office.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-slate-600">{office.address}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="ml-3"
                      onClick={() => {
                        window.open(`https://maps.google.com/?q=${encodeURIComponent(office.address)}`, '_blank');
                        toast({
                          title: "Opening Maps",
                          description: "Opening location in Google Maps",
                        });
                      }}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Map
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  <span className="text-slate-600 flex-1">{office.phone}</span>
                  <Button 
                    size="sm" 
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                    onClick={() => {
                      window.open(`tel:${office.phone}`, '_blank');
                      toast({
                        title: "Opening Phone Dialer",
                        description: `Calling ${office.phone}`,
                      });
                    }}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  <span className="text-slate-600 flex-1">{office.email}</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => {
                      window.open(`mailto:${office.email}?subject=Meeting Request`, '_blank');
                      toast({
                        title: "Opening Email Client",
                        description: `Composing email to ${office.email}`,
                      });
                    }}
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  <span className="text-slate-600">{office.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How long does a typical project take?</h3>
              <p className="text-slate-600">Project timelines vary based on scope and complexity. Small projects typically take 2-4 months, while enterprise transformations can take 12-24 months. We provide detailed timelines during our initial consultation.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-slate-600">Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, security updates, and performance optimization. Our support levels range from basic monitoring to full managed services.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What industries do you specialize in?</h3>
              <p className="text-slate-600">We serve clients across financial services, healthcare, retail, manufacturing, media, and government sectors. Our team has deep expertise in industry-specific compliance and operational requirements.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How do you ensure data security and compliance?</h3>
              <p className="text-slate-600">We implement enterprise-grade security measures including zero-trust architecture, encryption, access controls, and compliance frameworks (SOC 2, HIPAA, GDPR). All projects undergo security audits and penetration testing.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Can you work with our existing technology stack?</h3>
              <p className="text-slate-600">Absolutely. We specialize in system integration and can work with your existing infrastructure while gradually modernizing components. We conduct thorough assessments to recommend the best integration approach.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">What is your pricing model?</h3>
              <p className="text-slate-600">We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, timeline, and resource requirements. Contact us for a detailed proposal.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}