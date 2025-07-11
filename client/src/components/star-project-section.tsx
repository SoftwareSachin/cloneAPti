import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, ExternalLink, Shield, Smartphone, Globe, Zap } from "lucide-react";
import { useState } from "react";

export default function StarProjectSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    window.open("https://www.youtube.com/watch?v=l-z64oz_sa8&t=9s", '_blank');
    setIsVideoPlaying(true);
  };

  const features = [
    {
      icon: Shield,
      title: "Cryptographic Security",
      description: "Secure payments with cryptographically signed local ledger"
    },
    {
      icon: Smartphone,
      title: "Device-to-Device Mesh",
      description: "Instant transactions without internet connectivity"
    },
    {
      icon: Globe,
      title: "SMS Fallback",
      description: "Works even in areas with poor network coverage"
    },
    {
      icon: Zap,
      title: "24×7 Reliability",
      description: "Seamless payment experience from cities to villages"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-300/30">
            <Star className="w-6 h-6 text-yellow-600 fill-current animate-pulse" />
            <span className="text-lg font-bold text-yellow-800 tracking-wide">STAR PROJECT</span>
            <Star className="w-6 h-6 text-yellow-600 fill-current animate-pulse" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              OPPB: Offline Payment Solution
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Revolutionary payment technology that works anywhere, anytime - even without internet
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-blue-800 font-semibold">Built by Sachin</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg overflow-hidden">
                  {/* Video thumbnail overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={handlePlayVideo}
                      className="bg-white/90 hover:bg-white text-slate-900 rounded-full w-20 h-20 p-0 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group-hover:scale-125"
                    >
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </Button>
                  </div>
                  
                  {/* Video info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-bold text-lg mb-2">OPPB Demo Video</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Play className="w-4 h-4" />
                        <span>Watch the complete demonstration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Action Button */}
            <div className="mt-6 text-center">
              <Button
                size="lg"
                onClick={handlePlayVideo}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Watch on YouTube
              </Button>
            </div>
          </div>

          {/* Project Description */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Your go‑anywhere, offline payment solution
                </h3>
                
                <div className="prose prose-lg text-slate-700 leading-relaxed">
                  <p className="mb-6">
                    Watch how OPPB enables instant "Send & Receive" transactions without UPI or internet, 
                    leverages device‑to‑device mesh and SMS fallback, and secures every payment with a 
                    cryptographically signed local ledger.
                  </p>
                  
                  <p className="mb-6">
                    Learn how dual‑factor authentication and a multilingual, icon‑driven interface deliver 
                    seamless, 24×7 payment reliability from cities to villages.
                  </p>
                  
                  <p className="text-blue-600 font-semibold text-xl">
                    Don't let network outages slow you down—experience OPPB today.
                  </p>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Innovation Badge */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Innovation Highlight</h4>
                </div>
                <p className="text-slate-700">
                  OPPB represents a breakthrough in financial technology, solving real-world connectivity 
                  challenges with innovative mesh networking and cryptographic security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}