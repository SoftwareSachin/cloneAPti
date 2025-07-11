import { Button } from "@/components/ui/button";
import { Clock, Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdSectionProps {
  isVisible?: boolean;
  title?: string;
  description?: string;
  offerText?: string;
  ctaText?: string;
  expiryText?: string;
  disclaimerText?: string;
  emailSubject?: string;
  emailBody?: string;
}

export default function AdSection({
  isVisible = true,
  title = "🚀 Get 25% OFF Your First Project!",
  description = "Transform your business with our enterprise-grade solutions.",
  offerText = "Free consultation included!",
  ctaText = "Claim 25% OFF Now",
  expiryText = "Offer expires in 7 days",
  disclaimerText = "*Applicable for new clients only. Minimum project value ₹50,000. Terms apply.",
  emailSubject = "25% OFF First Project - Consultation Request",
  emailBody = "Hello Aptivon Solutions,%0D%0A%0D%0AI'm interested in the 25% OFF offer for my first project.%0D%0A%0D%0AProject Requirements:%0D%0A- [Please describe your project]%0D%0A%0D%0APlease contact me to discuss further.%0D%0A%0D%0AThank you!"
}: AdSectionProps) {
  const { toast } = useToast();

  if (!isVisible) return null;

  const handleClaimOffer = () => {
    window.open(`mailto:singhal3.sachin7@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    toast({
      title: "Claiming Your Discount",
      description: "Email opened - mention the offer code to get your discount!",
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-12 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-300/25 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-yellow-300/10 rounded-full blur-3xl"></div>
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-300/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-200/80 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/30 backdrop-blur-lg rounded-full mb-6 border border-yellow-300/40 shadow-2xl hover:shadow-yellow-300/20 transition-all duration-300 transform hover:scale-105">
            <Sparkles className="w-5 h-5 text-yellow-200 animate-spin" />
            <span className="text-sm font-bold text-yellow-100 tracking-wide">LIMITED TIME OFFER</span>
            <Sparkles className="w-5 h-5 text-yellow-200 animate-spin" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
            <span className="font-bold text-yellow-300 animate-pulse"> {offerText}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-yellow-50 font-bold px-10 py-4 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 rounded-2xl border-2 border-yellow-300/30 hover:border-yellow-300/60 group"
              onClick={handleClaimOffer}
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              {ctaText}
            </Button>
            
            <div className="flex items-center gap-3 text-yellow-200 text-base bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300/20">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">{expiryText}</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-blue-200 opacity-80">
            {disclaimerText}
          </div>
        </div>
      </div>
    </section>
  );
}