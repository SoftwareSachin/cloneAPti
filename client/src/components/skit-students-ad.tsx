import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Star, Clock, CheckCircle, Zap, Award, Trophy, Users, Shield, Sparkles, Target, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SKITStudentsAdProps {
  isVisible?: boolean;
}

export default function SKITStudentsAd({ isVisible = true }: SKITStudentsAdProps) {
  const { toast } = useToast();

  if (!isVisible) return null;

  const handleContactClick = () => {
    window.open(`mailto:singhal3.sachin7@gmail.com?subject=SKIT Student Special Discount - Academic Projects&body=Hello Aptivon Solutions,%0D%0A%0D%0AI am a SKIT student and would like to avail the special discount on academic projects.%0D%0A%0D%0AStudent Details:%0D%0AName: ________________%0D%0ACollege ID: ________________%0D%0ABranch: ________________%0D%0ASemester: ________________%0D%0APhone: ________________%0D%0A%0D%0AProject Requirements:%0D%0AProject Type: ________________%0D%0ADomain: ________________%0D%0ATitle: ________________%0D%0ADeadline: ________________%0D%0A%0D%0APlease confirm the special SKIT student pricing and provide project timeline.%0D%0A%0D%0AThank you!`, '_blank');
    
    toast({
      title: "SKIT Student Discount Email",
      description: "Email opened with special SKIT student discount inquiry",
    });
  };

  const handleCallClick = () => {
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) {
      window.location.href = "tel:+917852099010";
    } else {
      window.open("tel:+917852099010", '_blank');
    }
    
    toast({
      title: "Calling for SKIT Student Discount",
      description: "Connecting you for special SKIT student pricing",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        {/* SKIT themed floating elements */}
        <div className="absolute top-32 right-32 w-3 h-3 bg-green-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-48 left-48 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-48 left-32 w-1 h-1 bg-purple-400/70 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6 border border-green-300/50 shadow-xl hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105">
            <GraduationCap className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-base font-bold text-green-800 tracking-wide">SKIT STUDENTS SPECIAL OFFER</span>
            <Star className="w-5 h-5 text-blue-600 animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">SKIT Student</span> Discount
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Exclusive academic project discounts for SKIT College students
          </p>
        </div>

        <Card className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] rounded-3xl overflow-hidden group">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left side - Discount Highlight */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold mb-2">7.5%</div>
                <div className="text-2xl font-semibold mb-2">SPECIAL DISCOUNT</div>
                <div className="text-lg opacity-90">For SKIT College Students</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Valid SKIT Student ID Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Fast Delivery Within Deadline</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-slate-700 font-medium">High-Quality Academic Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Free Consultation & Support</span>
                </div>
              </div>
            </div>

            {/* Right side - Pricing & Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img src="/favicon.gif" alt="Aptivon Solutions" className="w-8 h-8" />
                  <span className="text-2xl font-bold text-blue-600">Aptivon Solutions</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  SKIT Student Special Pricing
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-slate-800">Final Year Projects</div>
                        <div className="text-sm text-slate-600">Complete project with documentation</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 line-through">₹2,500</div>
                        <div className="text-xl font-bold text-green-600">₹2,313</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-slate-800">Minor/Major Projects</div>
                        <div className="text-sm text-slate-600">Any domain, any complexity</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 line-through">₹2,500</div>
                        <div className="text-xl font-bold text-blue-600">₹2,313</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-slate-800">PowerPoint Presentations</div>
                        <div className="text-sm text-slate-600">Professional PPT design</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 line-through">₹500</div>
                        <div className="text-xl font-bold text-purple-600">₹463</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200 mt-6 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-red-500 animate-pulse" />
                    <span className="font-bold text-slate-800">SKIT Student Benefits:</span>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li><CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />7.5% discount on all academic projects</li>
                    <li><Shield className="w-4 h-4 text-blue-500 inline mr-2" />Free project consultation and planning</li>
                    <li><Clock className="w-4 h-4 text-purple-500 inline mr-2" />Priority delivery within deadline</li>
                    <li><Target className="w-4 h-4 text-orange-500 inline mr-2" />Free revisions and support</li>
                    <li><BookOpen className="w-4 h-4 text-indigo-500 inline mr-2" />Complete source code and documentation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 rounded-2xl group"
                    onClick={handleContactClick}
                  >
                    <BookOpen className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Claim SKIT Discount
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={handleCallClick}
                  >
                    <Zap className="w-5 h-5 mr-3" />
                    Call Now
                  </Button>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-center text-sm text-slate-600">
                    <div className="font-medium text-slate-800 mb-2">How to Claim Your SKIT Student Discount:</div>
                    <div className="space-y-1">
                      <div>1. Contact us via email or phone</div>
                      <div>2. Provide your valid SKIT student ID</div>
                      <div>3. Share your project requirements</div>
                      <div>4. Get instant 7.5% discount confirmation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-slate-600 text-sm font-medium">
            Special offer exclusively for SKIT College students - Limited time offer!
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">singhal3.sachin7@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">+91 7852099010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}