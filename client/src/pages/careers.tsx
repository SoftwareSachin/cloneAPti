import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { MapPin, Clock, Users, Briefcase, Heart, Star, Code, Coffee, Search, X, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  });
  const { toast } = useToast();

  const openPositions = [
    {
      title: "Senior Business Development Manager",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Drive new business acquisition by identifying, qualifying, and closing enterprise technology deals across multiple industry verticals.",
      requirements: [
        "5+ years experience in B2B technology sales",
        "Proven track record of exceeding sales quotas ($2M+ annually)",
        "Experience selling enterprise software and cloud solutions",
        "Strong understanding of technology ecosystems and digital transformation",
        "Excellent presentation and negotiation skills"
      ],
      skills: ["Enterprise Sales", "CRM", "Lead Generation", "Contract Negotiation", "Technology Solutions"]
    },
    {
      title: "Client Acquisition Specialist",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description: "Focus on prospecting and acquiring new enterprise clients through strategic outreach and relationship building.",
      requirements: [
        "3+ years experience in client acquisition or business development",
        "Strong prospecting and lead generation skills",
        "Experience with CRM systems and sales automation tools",
        "Excellent communication and relationship-building abilities",
        "Bachelor's degree in Business, Marketing, or related field"
      ],
      skills: ["Prospecting", "Lead Generation", "Salesforce", "Cold Outreach", "Relationship Building"]
    },
    {
      title: "Enterprise Sales Executive",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "6-10 years",
      description: "Lead strategic sales initiatives for large enterprise accounts, managing complex sales cycles and building C-level relationships.",
      requirements: [
        "6+ years experience in enterprise technology sales",
        "History of closing deals $500K+ in value",
        "Strong network of enterprise contacts and decision-makers",
        "Experience with complex B2B sales cycles (6-18 months)",
        "Proven ability to build and maintain C-level relationships"
      ],
      skills: ["Enterprise Sales", "Account Management", "Strategic Planning", "Executive Relationships", "Deal Structuring"]
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      description: "Generate qualified leads and schedule meetings for senior sales team through targeted outreach and lead qualification.",
      requirements: [
        "1-3 years experience in sales development or inside sales",
        "Strong communication and interpersonal skills",
        "Experience with lead generation tools and techniques",
        "Ability to work in a fast-paced, target-driven environment",
        "Bachelor's degree preferred"
      ],
      skills: ["Lead Qualification", "Cold Calling", "Email Marketing", "Sales Prospecting", "CRM Management"]
    },
    {
      title: "Channel Partnership Manager",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4-7 years",
      description: "Develop and manage strategic partnerships with technology vendors and system integrators to drive client acquisition.",
      requirements: [
        "4+ years experience in channel sales or partnership management",
        "Strong network within the technology ecosystem",
        "Experience developing and executing partner programs",
        "Excellent relationship management and negotiation skills",
        "Understanding of channel sales models and structures"
      ],
      skills: ["Partnership Development", "Channel Sales", "Vendor Relations", "Program Management", "Strategic Alliances"]
    },
    {
      title: "Digital Marketing Manager - Lead Generation",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive digital marketing campaigns focused on generating high-quality leads and supporting client acquisition efforts.",
      requirements: [
        "4+ years experience in B2B digital marketing",
        "Proven track record in lead generation and conversion optimization",
        "Experience with marketing automation platforms and CRM integration",
        "Strong analytical skills and data-driven approach",
        "Experience in technology or enterprise software marketing"
      ],
      skills: ["Digital Marketing", "Lead Generation", "Marketing Automation", "Analytics", "Content Strategy"]
    }
  ];

  // Filter and search logic
  const filteredPositions = useMemo(() => {
    return openPositions.filter(position => {
      const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          position.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          position.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDepartment = departmentFilter === "all" || position.department === departmentFilter;
      const matchesLocation = locationFilter === "all" || position.location === locationFilter;
      
      return matchesSearch && matchesDepartment && matchesLocation;
    });
  }, [searchTerm, departmentFilter, locationFilter]);

  // Get unique departments and locations for filters
  const departments = ["all", ...Array.from(new Set(openPositions.map(pos => pos.department)))];
  const locations = ["all", ...Array.from(new Set(openPositions.map(pos => pos.location)))];

  // Handle application submission
  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationData.fullName || !applicationData.email || !applicationData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying to ${selectedJob?.title}. We'll review your application and get back to you soon.`,
    });
    
    // Reset form
    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resume: null
    });
    setSelectedJob(null);
    setIsDialogOpen(false);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setApplicationData(prev => ({ ...prev, resume: file }));
    }
  };

  // Scroll to positions
  const scrollToPositions = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance plus wellness programs"
    },
    {
      icon: Star,
      title: "Professional Growth",
      description: "Annual learning budget, conference attendance, and certification support"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Inclusive environment with team building events and mentorship programs"
    },
    {
      icon: Code,
      title: "Cutting-Edge Tech",
      description: "Work with latest technologies and contribute to open source projects"
    },
    {
      icon: Briefcase,
      title: "Competitive Package",
      description: "Market-competitive salary, equity options, and performance bonuses"
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and provide resources to turn ideas into reality."
    },
    {
      title: "Continuous Learning",
      description: "Growth mindset with ongoing education, training, and skill development opportunities."
    },
    {
      title: "Work-Life Integration",
      description: "Flexible schedules and remote work options to support personal and professional goals."
    },
    {
      title: "Diversity & Inclusion",
      description: "Building diverse teams and fostering an inclusive environment where everyone thrives."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Drive Business Growth
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our client acquisition team and help connect enterprise organizations with 
              transformative technology solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPositions}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                View Open Positions
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => document.getElementById('company-culture')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="company-culture" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Aptivon Solutions?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              More than just a workplace - we're a community of innovators shaping the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Client Acquisition Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of our sales and business development team driving growth through strategic client partnerships
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Search positions, departments, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept}>
                        {dept === "all" ? "All Departments" : dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>
                        {loc === "all" ? "All Locations" : loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {(searchTerm || departmentFilter !== "all" || locationFilter !== "all") && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  Showing {filteredPositions.length} of {openPositions.length} positions
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setDepartmentFilter("all");
                    setLocationFilter("all");
                  }}
                  className="text-slate-600 hover:text-slate-900"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {filteredPositions.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No positions found</h3>
              <p className="text-slate-600">Try adjusting your search or filters to find more opportunities.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPositions.map((position, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <Dialog open={isDialogOpen && selectedJob?.title === position.title} onOpenChange={setIsDialogOpen}>
                          <DialogTrigger asChild>
                            <Button 
                              onClick={() => {
                                setSelectedJob(position);
                                setIsDialogOpen(true);
                              }}
                              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg"
                            >
                              Apply Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">Apply for {position.title}</DialogTitle>
                            </DialogHeader>
                            
                            <form onSubmit={handleApplicationSubmit} className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="fullName">Full Name *</Label>
                                  <Input
                                    id="fullName"
                                    value={applicationData.fullName}
                                    onChange={(e) => setApplicationData(prev => ({ ...prev, fullName: e.target.value }))}
                                    placeholder="Enter your full name"
                                    required
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email Address *</Label>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={applicationData.email}
                                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="Enter your email"
                                    required
                                  />
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="phone">Phone Number *</Label>
                                  <Input
                                    id="phone"
                                    value={applicationData.phone}
                                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                                    placeholder="Enter your phone number"
                                    required
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="experience">Years of Experience</Label>
                                  <Input
                                    id="experience"
                                    value={applicationData.experience}
                                    onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                                    placeholder="e.g., 5 years"
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="resume">Resume/CV</Label>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                                  <input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                  />
                                  <Label htmlFor="resume" className="cursor-pointer">
                                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600">
                                      {applicationData.resume ? 
                                        `Selected: ${applicationData.resume.name}` :
                                        "Click to upload your resume (PDF, DOC, DOCX - Max 5MB)"
                                      }
                                    </p>
                                  </Label>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="coverLetter">Cover Letter</Label>
                                <Textarea
                                  id="coverLetter"
                                  value={applicationData.coverLetter}
                                  onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                  rows={4}
                                />
                              </div>
                              
                              <div className="flex gap-4 justify-end">
                                <Button 
                                  type="button" 
                                  variant="outline"
                                  onClick={() => setIsDialogOpen(false)}
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                                  Submit Application
                                </Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Application Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best fit for both you and our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Application Review</h3>
              <p className="text-slate-600 text-sm">Submit your application and we'll review your qualifications and experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Initial Screen</h3>
              <p className="text-slate-600 text-sm">Brief phone or video call to discuss your background and the role</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Interview</h3>
              <p className="text-slate-600 text-sm">In-depth discussion about technical skills and problem-solving approach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Team Meet</h3>
              <p className="text-slate-600 text-sm">Meet the team and learn more about our culture and working style</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Drive Sales Success?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join our client acquisition team and play a key role in connecting businesses with game-changing technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPositions}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Browse Open Positions
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => window.open('mailto:careers@aptivonsolutions.com', '_blank')}
              >
                Contact HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}