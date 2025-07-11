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
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        {/* Floating academic elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-emerald-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-48 left-48 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-48 left-32 w-2 h-2 bg-purple-400/70 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-64 w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 backdrop-blur-xl rounded-full mb-8 border border-emerald-300/50 shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 transform hover:scale-105">
            <GraduationCap className="w-7 h-7 text-emerald-300 animate-pulse" />
            <span className="text-xl font-bold text-emerald-100 tracking-wide">SKIT STUDENTS EXCLUSIVE</span>
            <Trophy className="w-7 h-7 text-yellow-400 animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-white">Special </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 animate-pulse">SKIT Student</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Discount</span>
          </h2>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            Exclusive academic project discounts for SKIT College students
          </p>

          {/* Special offer highlight */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-300/40">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
            <span className="text-yellow-200 font-semibold">Limited Time Academic Offer</span>
            <Clock className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
        </div>

        <Card className="max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 cursor-pointer transform hover:scale-[1.02] rounded-3xl overflow-hidden group">
          <div className="grid lg:grid-cols-2 gap-12 p-10">
            {/* Left side - Enhanced Discount Highlight */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Main discount badge */}
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 text-white p-10 rounded-3xl text-center transform hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div className="text-8xl font-bold mb-4 animate-pulse">7.5%</div>
                  <div className="text-3xl font-bold mb-3 tracking-wide">SPECIAL DISCOUNT</div>
                  <div className="text-xl opacity-90 mb-4">For SKIT College Students</div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium text-yellow-200">Verified Student ID Required</span>
                  </div>
                </div>
              </div>

              {/* Pricing cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center border border-emerald-300/30 hover:border-emerald-300/60 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-emerald-200 mb-2">₹2,313</div>
                  <div className="text-sm text-white font-semibold mb-1">Final Year/Minor/Major</div>
                  <div className="text-xs text-emerald-300 line-through mb-2">₹2,500</div>
                  <div className="text-xs text-emerald-200 bg-emerald-500/20 px-2 py-1 rounded-full">Save ₹187</div>
                </div>
                <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center border border-blue-300/30 hover:border-blue-300/60 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-200 mb-2">₹463</div>
                  <div className="text-sm text-white font-semibold mb-1">PPT Only</div>
                  <div className="text-xs text-blue-300 line-through mb-2">₹500</div>
                  <div className="text-xs text-blue-200 bg-blue-500/20 px-2 py-1 rounded-full">Save ₹37</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-400/30">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-white font-medium">Valid SKIT Student ID Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-white font-medium">Fast Delivery Within Deadline</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                    <Trophy className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-white font-medium">High-Quality Academic Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/30">
                    <Users className="w-5 h-5 text-yellow-300" />
                  </div>
                  <span className="text-white font-medium">Free Consultation & Support</span>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Details */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/favicon.gif" alt="Aptivon Solutions" className="w-10 h-10" />
                  <span className="text-3xl font-bold text-white">Aptivon Solutions</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  SKIT Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">Special Pricing</span>
                </h3>
                
                {/* Enhanced Pricing Grid */}
                <div className="space-y-6">
                  <div className="bg-white/15 backdrop-blur-xl p-6 rounded-2xl border border-emerald-300/30 hover:border-emerald-300/60 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-lg">Final Year Projects</div>
                        <div className="text-emerald-200 text-sm">Complete project with documentation</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-300 text-sm line-through">₹2,500</div>
                        <div className="text-2xl font-bold text-emerald-200">₹2,313</div>
                        <div className="text-xs text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded-full mt-1">Save ₹187</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl p-6 rounded-2xl border border-blue-300/30 hover:border-blue-300/60 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-lg">Minor/Major Projects</div>
                        <div className="text-blue-200 text-sm">Any domain, any complexity</div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-300 text-sm line-through">₹2,500</div>
                        <div className="text-2xl font-bold text-blue-200">₹2,313</div>
                        <div className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full mt-1">Save ₹187</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/15 backdrop-blur-xl p-6 rounded-2xl border border-purple-300/30 hover:border-purple-300/60 transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white text-lg">PowerPoint Presentations</div>
                        <div className="text-purple-200 text-sm">Professional PPT design</div>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-300 text-sm line-through">₹500</div>
                        <div className="text-2xl font-bold text-purple-200">₹463</div>
                        <div className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full mt-1">Save ₹37</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Benefits Section */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl p-8 rounded-3xl border border-yellow-300/40 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-7 h-7 text-yellow-300 animate-pulse" />
                    <span className="font-bold text-white text-2xl">SKIT Student Benefits</span>
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300" />
                      <span className="text-white font-medium">7.5% exclusive discount</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-medium">Free consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-300" />
                      <span className="text-white font-medium">Priority delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-orange-300" />
                      <span className="text-white font-medium">Free revisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-pink-300" />
                      <span className="text-white font-medium">Complete documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-cyan-300" />
                      <span className="text-white font-medium">24/7 support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-6 text-xl shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-110 transition-all duration-500 rounded-3xl group relative overflow-hidden"
                    onClick={handleContactClick}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Mail className="w-6 h-6 mr-4 group-hover:animate-bounce relative z-10" />
                    <span className="relative z-10">Claim SKIT Discount</span>
                  </Button>
                  
                  <Button 
                    className="flex-1 bg-white/20 hover:bg-white/30 border-2 border-white/40 hover:border-white/60 text-white font-bold py-6 text-xl rounded-3xl shadow-2xl hover:shadow-white/20 transform hover:scale-110 transition-all duration-500 backdrop-blur-xl"
                    onClick={handleCallClick}
                  >
                    <Phone className="w-6 h-6 mr-4" />
                    Call Now
                  </Button>
                </div>

                {/* Enhanced Instructions */}
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="text-center">
                    <div className="font-bold text-white text-xl mb-6 flex items-center justify-center gap-3">
                      <GraduationCap className="w-6 h-6 text-emerald-300" />
                      How to Claim Your SKIT Student Discount
                      <Trophy className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-400/30">
                          <span className="text-emerald-300 font-bold text-sm">1</span>
                        </div>
                        <span className="text-white font-medium">Contact us via email or phone</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                          <span className="text-blue-300 font-bold text-sm">2</span>
                        </div>
                        <span className="text-white font-medium">Provide valid SKIT student ID</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                          <span className="text-purple-300 font-bold text-sm">3</span>
                        </div>
                        <span className="text-white font-medium">Share project requirements</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                          <span className="text-yellow-300 font-bold text-sm">4</span>
                        </div>
                        <span className="text-white font-medium">Get instant 7.5% discount</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
            <p className="text-white text-lg font-semibold mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              Special offer exclusively for SKIT College students - Limited time offer!
              <Clock className="w-5 h-5 text-blue-300 animate-pulse" />
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-blue-400/30">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-white font-medium">singhal3.sachin7@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-emerald-400/30">
                <Phone className="w-5 h-5 text-emerald-300" />
                <span className="text-white font-medium">+91 7852099010</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}