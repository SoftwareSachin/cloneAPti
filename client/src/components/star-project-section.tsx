import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, ExternalLink, Shield, Smartphone, Globe, Zap, Maximize2, Award, Sparkles, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function StarProjectSection() {
  const [showEmbedded, setShowEmbedded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ users: 0, transactions: 0, uptime: 0 });

  // Animate stats on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        users: Math.min(prev.users + 47, 10000),
        transactions: Math.min(prev.transactions + 123, 50000),
        uptime: Math.min(prev.uptime + 0.1, 99.9)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleWatchHere = () => {
    setShowEmbedded(true);
  };

  const handleOpenYouTube = () => {
    window.open("https://www.youtube.com/watch?v=l-z64oz_sa8&t=9s", '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: "NPCI Integration",
      description: "Built for National Payments Corporation of India infrastructure",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Smartphone,
      title: "BHIM Pay Compatible",
      description: "Seamless integration with BHIM Pay ecosystem",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Offline Transactions",
      description: "Works without internet using device-to-device mesh",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "SMS Fallback",
      description: "Reliable payments even in poor network coverage areas",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 backdrop-blur-xl rounded-full mb-8 border border-yellow-300/50 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:scale-105">
            <Star className="w-7 h-7 text-yellow-300 fill-current animate-spin" />
            <span className="text-xl font-bold text-yellow-100 tracking-wide">STAR PROJECT</span>
            <Star className="w-7 h-7 text-yellow-300 fill-current animate-spin" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent animate-pulse">
              OPPB
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Offline Payment Solution
            </span>
          </h2>
          
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            Revolutionary payment technology that works anywhere, anytime - even without internet connection
          </p>

          {/* Creator Attribution with Enhanced Design */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">Built by Sachin</div>
                <div className="text-blue-200 text-sm">Innovation Engineer</div>
              </div>
              <Award className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>

            {/* NPCI & BHIM Pay Integration Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl border border-green-400/30 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white font-bold text-lg">Built for NPCI & BHIM Pay</div>
                  <div className="text-green-200 text-sm">Official Digital Payment Infrastructure</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">Certified Integration</span>
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-3xl font-bold text-white">{animatedStats.users.toLocaleString()}+</span>
              </div>
              <div className="text-blue-200 font-medium">Active Users</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-3xl font-bold text-white">{animatedStats.transactions.toLocaleString()}+</span>
              </div>
              <div className="text-blue-200 font-medium">Transactions</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-green-400" />
                <span className="text-3xl font-bold text-white">{animatedStats.uptime.toFixed(1)}%</span>
              </div>
              <div className="text-blue-200 font-medium">Uptime</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              
              <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:scale-[1.02] rounded-3xl">
                <CardContent className="p-2">
                  <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden">
                    {!showEmbedded ? (
                      <>
                        {/* Enhanced Video thumbnail overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-blue-900/30 flex items-center justify-center">
                          <div className="relative">
                            {/* Pulsing rings around play button */}
                            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                            <div className="absolute inset-2 rounded-full bg-white/30 animate-pulse"></div>
                            
                            <Button
                              size="lg"
                              onClick={handleWatchHere}
                              className="relative bg-gradient-to-br from-white to-blue-50 hover:from-blue-50 hover:to-white text-slate-900 rounded-full w-24 h-24 p-0 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-500 group-hover:scale-125 z-10"
                            >
                              <Play className="w-10 h-10 ml-1 fill-current" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Enhanced Video info overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                            <h3 className="text-white font-bold text-2xl mb-3 flex items-center gap-3">
                              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                              OPPB Demo Video
                            </h3>
                            <div className="flex items-center gap-3 text-white/90 text-lg">
                              <Play className="w-5 h-5 text-blue-400" />
                              <span>Watch the complete demonstration</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating tech elements */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                      </>
                    ) : (
                      /* Enhanced Embedded YouTube Video */
                      <iframe
                        src="https://www.youtube.com/embed/l-z64oz_sa8?start=9&autoplay=1"
                        title="OPPB: Offline Payment Solution"
                        className="w-full h-full rounded-2xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Video Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
              {!showEmbedded ? (
                <Button
                  size="lg"
                  onClick={handleWatchHere}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-5 text-xl shadow-2xl hover:shadow-blue-500/30 transform hover:scale-110 transition-all duration-500 rounded-3xl border border-white/20 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Play className="w-6 h-6 mr-4 relative z-10" />
                  <span className="relative z-10">Watch Here</span>
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleOpenYouTube}
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 text-xl shadow-2xl hover:shadow-white/20 transform hover:scale-110 transition-all duration-500 rounded-3xl backdrop-blur-xl"
                >
                  <Maximize2 className="w-6 h-6 mr-4" />
                  Watch on YouTube
                </Button>
              )}
              
              <Button
                size="lg"
                onClick={handleOpenYouTube}
                className="bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 text-white px-10 py-5 text-xl shadow-2xl hover:shadow-white/10 transform hover:scale-110 transition-all duration-500 rounded-3xl backdrop-blur-xl"
              >
                <ExternalLink className="w-6 h-6 mr-4" />
                Open in New Tab
              </Button>
            </div>
          </div>

          {/* Enhanced Project Description */}
          <div className="order-1 lg:order-2">
            <div className="space-y-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your go‑anywhere, 
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
                    offline payment solution
                  </span>
                </h3>
                
                <div className="prose prose-xl text-blue-100 leading-relaxed space-y-6">
                  <p className="text-xl">
                    Built specifically for <span className="text-green-300 font-semibold">NPCI and BHIM Pay infrastructure</span>, 
                    OPPB enables instant "Send & Receive" transactions without UPI or internet, 
                    leverages device‑to‑device mesh and SMS fallback, and secures every payment with a 
                    cryptographically signed local ledger.
                  </p>
                  
                  <p className="text-xl">
                    Integrated with <span className="text-blue-300 font-semibold">India's official digital payment ecosystem</span>, 
                    learn how dual‑factor authentication and a multilingual, icon‑driven interface deliver 
                    seamless, 24×7 payment reliability from cities to villages.
                  </p>
                  
                  <p className="text-yellow-300 font-bold text-2xl animate-pulse">
                    Don't let network outages slow you down—experience NPCI-powered OPPB today.
                  </p>
                </div>
              </div>

              {/* Enhanced Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 ${feature.bgColor} group-hover:scale-110 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg`}>
                          <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg mb-2">{feature.title}</h4>
                          <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Innovation Badge */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl blur-xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">NPCI Certified Innovation</h4>
                    <Sparkles className="w-6 h-6 text-green-400 animate-spin" />
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed mb-4">
                    OPPB represents a breakthrough in financial technology, built specifically for NPCI and BHIM Pay 
                    infrastructure, solving real-world connectivity challenges with innovative mesh networking and 
                    cryptographic security.
                  </p>
                  <div className="flex items-center gap-2 text-green-300 font-semibold">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Officially integrated with India's digital payment ecosystem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}