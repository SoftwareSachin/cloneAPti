import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Code, BookOpen, Zap, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import academicProjectsImage from "@assets/Poster - Aptivon Solutions_1752236135540.png";
import newLogo from "@assets/image_1752236269914.png";

interface AcademicProjectsAdProps {
  isVisible?: boolean;
}

export default function AcademicProjectsAd({ isVisible = true }: AcademicProjectsAdProps) {
  const { toast } = useToast();

  if (!isVisible) return null;

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    toast({
      title: "Academic Projects Inquiry",
      description: "Scrolling to contact section for project details",
    });
  };

  const handleEmailClick = () => {
    window.open(`mailto:singhal3.sachin7@gmail.com?subject=Academic Projects - Final Year & Internship Projects&body=Hello Aptivon Solutions,%0D%0A%0D%0AI'm interested in your academic project services:%0D%0A%0D%0AProject Type:%0D%0A☐ Final Year Project (₹2,500)%0D%0A☐ Internship Project (₹2,500)%0D%0A☐ Custom Project (₹2,500)%0D%0A☐ PowerPoint Presentation (₹500)%0D%0A%0D%0AProject Domain: ________________%0D%0A%0D%0APlease provide more details about timeline, features, and delivery.%0D%0A%0D%0AThank you!`, '_blank');
  };

  const services = [
    { name: "Final Year Projects", price: "₹2,500", pptPrice: "₹500" },
    { name: "Internship Projects", price: "₹2,500", pptPrice: "₹500" },
    { name: "Custom Projects", price: "₹2,500", pptPrice: "₹500" }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4 border border-blue-200">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-800">ACADEMIC PROJECT SERVICES</span>
          </div>
        </div>

        <Card 
          className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:scale-[1.01]"
          onClick={handleContactClick}
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src={academicProjectsImage} 
                alt="Aptivon Solutions Academic Projects Pricing" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Starting ₹500
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img src={newLogo} alt="Aptivon Solutions" className="w-8 h-8" />
                  <span className="text-2xl font-bold text-blue-600">Aptivon Solutions</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Academic Project Services
                </h3>
                
                <div className="space-y-3 mb-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-slate-700">{service.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-slate-500">PPT: {service.pptPrice}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-slate-800 font-medium">
                    <span className="text-red-600 font-bold">Get projects from every domain</span> for ₹2,500 
                    and their <span className="text-red-600 font-bold">PPT from just ₹500</span>
                  </p>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Full source code delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>On-time delivery guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>24/7 support available</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactClick();
                    }}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Order Project Now
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEmailClick();
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">singhal3.sachin7@gmail.com</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) {
                        window.location.href = "tel:+917852099010";
                      } else {
                        window.open("tel:+917852099010", '_blank');
                      }
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 7852099010</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm font-medium">
            Contact Aptivon Solutions now for immediate project assistance!
          </p>
        </div>
      </div>
    </section>
  );
}