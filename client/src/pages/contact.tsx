import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { MapPin, Phone, Mail, Clock, Globe, Users, MessageCircle, Copy, ExternalLink, Calendar, Video, Zap, FileText, User, Building, BookOpen, HelpCircle, CheckCircle, X, Send, Paperclip, Mic, MicOff, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  
  // Live Chat State
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'agent', message: 'Hello! How can I help you today?', timestamp: new Date() },
    { id: 2, sender: 'system', message: 'You are connected to our support team. Average response time is 2 minutes.', timestamp: new Date() }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const chatMessagesRef = useRef(null);
  
  // Quick Actions State
  const [showScheduler, setShowScheduler] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  
  // Analytics State
  const [viewCount, setViewCount] = useState(0);
  const [responseTime, setResponseTime] = useState('< 2 min');
  const [satisfactionScore, setSatisfactionScore] = useState(4.9);

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

  // Live Chat Functions
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      message: chatInput,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    setChatInput('');
    setIsTyping(true);
    
    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse = {
        id: chatMessages.length + 2,
        sender: 'agent',
        message: getAutoResponse(chatInput),
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  const getAutoResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    if (message.includes('pricing') || message.includes('cost')) {
      return "Our pricing varies based on project scope. I'll connect you with our sales team for a detailed quote. Would you like to schedule a consultation?";
    } else if (message.includes('timeline') || message.includes('delivery')) {
      return "Project timelines typically range from 2-6 months depending on complexity. We provide detailed project plans during our initial consultation.";
    } else if (message.includes('technology') || message.includes('tech')) {
      return "We work with modern technologies including React, Node.js, Python, AWS, and more. What specific technology are you interested in?";
    } else if (message.includes('support') || message.includes('help')) {
      return "We offer 24/7 support with various SLA options. Would you like to know more about our support packages?";
    } else {
      return "Thank you for your message! A specialist will review your inquiry and provide a detailed response within 15 minutes. Is there anything specific I can help you with right now?";
    }
  };

  // Scheduler Functions
  const handleScheduleMeeting = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for your meeting.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Meeting Scheduled!",
      description: `Your consultation is scheduled for ${selectedDate} at ${selectedTime}. Calendar invite sent to your email.`,
    });
    setShowScheduler(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  // Feedback Functions
  const handleSubmitFeedback = () => {
    if (feedbackRating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a rating before submitting feedback.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback! We appreciate your input.",
    });
    setShowFeedback(false);
    setFeedbackRating(0);
    setFeedbackText('');
  };

  // Auto-scroll chat
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Update view count on mount
  useEffect(() => {
    setViewCount(prev => prev + 1);
  }, []);

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
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to transform your business with innovative technology solutions? 
              Our expert team is here to help you achieve your digital transformation goals.
            </p>
            
            {/* Real-time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">{responseTime}</div>
                <div className="text-sm text-slate-600">Average Response Time</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">{satisfactionScore}/5</div>
                <div className="text-sm text-slate-600">Customer Satisfaction</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online
                </div>
                <div className="text-sm text-slate-600">Support Team Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <section className="py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => setShowLiveChat(true)}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat {unreadCount > 0 && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{unreadCount}</span>}
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => setShowScheduler(true)}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => window.open('tel:+917852099010', '_blank')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => setShowKnowledgeBase(true)}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Knowledge Base
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => setShowFeedback(true)}
            >
              <Star className="h-4 w-4 mr-2" />
              Feedback
            </Button>
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

      {/* Live Chat Modal */}
      {showLiveChat && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-end z-50 p-4">
          <div className="bg-white rounded-t-xl w-full max-w-md h-[600px] flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Support</h3>
                  <div className="text-xs text-slate-300 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {isOnline ? 'Online' : 'Offline'} • Response time: {responseTime}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowLiveChat(false)}
                className="p-1 hover:bg-white/20 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-slate-900 text-white' 
                      : msg.sender === 'system'
                      ? 'bg-slate-100 text-slate-600 text-sm italic'
                      : 'bg-slate-100 text-slate-900'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-900 p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim()}
                  className="bg-slate-900 hover:bg-slate-800"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
                <span>Powered by Aptivon Support</span>
                <div className="flex gap-2">
                  <button className="hover:text-slate-700">
                    <Paperclip className="h-3 w-3" />
                  </button>
                  <button className="hover:text-slate-700">
                    <Mic className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Meeting Scheduler Modal */}
      {showScheduler && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Schedule a Meeting</h3>
              <button
                onClick={() => setShowScheduler(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Date
                </label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md"
                >
                  <option value="">Choose a time slot</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-slate-50 rounded">
                  <Calendar className="h-4 w-4 mx-auto mb-1" />
                  30 min
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <Video className="h-4 w-4 mx-auto mb-1" />
                  Video Call
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <Zap className="h-4 w-4 mx-auto mb-1" />
                  Free
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowScheduler(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleScheduleMeeting}
                  className="flex-1 bg-slate-900 hover:bg-slate-800"
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Knowledge Base Modal */}
      {showKnowledgeBase && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Knowledge Base</h3>
              <button
                onClick={() => setShowKnowledgeBase(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search articles, guides, and documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Getting Started with Digital Transformation", category: "Guide", readTime: "5 min" },
                { title: "API Integration Best Practices", category: "Technical", readTime: "8 min" },
                { title: "Cloud Migration Checklist", category: "Guide", readTime: "10 min" },
                { title: "Security Compliance Requirements", category: "Security", readTime: "12 min" },
                { title: "Project Timeline and Milestones", category: "Process", readTime: "6 min" },
                { title: "Support and Maintenance Plans", category: "Support", readTime: "4 min" }
              ].filter(article => 
                searchQuery === '' || 
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((article, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">{article.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs">{article.category}</span>
                        <span>{article.readTime} read</span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Share Feedback</h3>
              <button
                onClick={() => setShowFeedback(false)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  How would you rate your experience?
                </label>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFeedbackRating(star)}
                      className={`p-1 ${star <= feedbackRating ? 'text-yellow-400' : 'text-slate-300'}`}
                    >
                      <Star className="h-8 w-8 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Tell us about your experience..."
                />
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFeedback(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitFeedback}
                  className="flex-1 bg-slate-900 hover:bg-slate-800"
                >
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}