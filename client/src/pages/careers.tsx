import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { MapPin, Clock, Users, Briefcase, Heart, Star, Code, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead development of enterprise applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years experience with React and Node.js",
        "Strong knowledge of AWS or Azure cloud platforms",
        "Experience with microservices architecture",
        "Bachelor's degree in Computer Science or equivalent",
        "Excellent problem-solving and communication skills"
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4-7 years",
      description: "Design and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability.",
      requirements: [
        "4+ years experience with DevOps practices",
        "Proficiency in Docker, Kubernetes, and infrastructure as code",
        "Experience with CI/CD tools like Jenkins, GitLab CI, or GitHub Actions",
        "Strong scripting skills in Python or Bash",
        "Knowledge of monitoring and alerting systems"
      ],
      skills: ["Kubernetes", "Docker", "Terraform", "Jenkins", "Python"]
    },
    {
      title: "Machine Learning Engineer",
      department: "AI/ML",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      description: "Develop and deploy machine learning models for enterprise clients across various industries.",
      requirements: [
        "3+ years experience in machine learning and data science",
        "Proficiency in Python, TensorFlow/PyTorch, and MLOps tools",
        "Experience with cloud ML platforms (AWS SageMaker, Azure ML)",
        "Strong background in statistics and mathematics",
        "Experience with data pipeline tools and frameworks"
      ],
      skills: ["Python", "TensorFlow", "MLOps", "AWS", "Pandas"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Solutions",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "6-10 years",
      description: "Design enterprise cloud architectures and guide technical implementation for client projects.",
      requirements: [
        "6+ years experience in cloud architecture and design",
        "AWS/Azure/GCP certifications preferred",
        "Strong understanding of enterprise integration patterns",
        "Experience with large-scale system design",
        "Excellent client-facing and presentation skills"
      ],
      skills: ["AWS", "Azure", "Architecture", "Microservices", "Leadership"]
    },
    {
      title: "Product Manager - Enterprise Solutions",
      department: "Product",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4-8 years",
      description: "Drive product strategy and roadmap for enterprise technology solutions and client delivery.",
      requirements: [
        "4+ years experience in product management",
        "Background in enterprise software or B2B technology",
        "Strong analytical and strategic thinking skills",
        "Experience with agile development methodologies",
        "MBA or relevant advanced degree preferred"
      ],
      skills: ["Product Strategy", "Agile", "Analytics", "Enterprise Software", "Leadership"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      description: "Create intuitive and engaging user experiences for enterprise applications and client solutions.",
      requirements: [
        "3+ years experience in UI/UX design",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating enterprise application design",
        "Understanding of accessibility and usability principles",
        "Experience with design systems and component libraries"
      ],
      skills: ["Figma", "UI/UX", "Design Systems", "Prototyping", "User Research"]
    }
  ];

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
              Join Our Team
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Build the future of enterprise technology with a team of passionate professionals 
              dedicated to innovation, excellence, and making a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Open Positions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our growing team and help build innovative solutions for leading enterprises
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
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
                      <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg">
                        Apply Now
                      </Button>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join a team that's shaping the future of enterprise technology and making a difference for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Browse Open Positions
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg">
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