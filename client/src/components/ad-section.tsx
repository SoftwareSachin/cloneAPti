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
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full mb-4 border border-yellow-300/30">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold text-yellow-100">LIMITED TIME OFFER</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            {description}
            <span className="font-semibold text-yellow-300"> {offerText}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-yellow-50 font-bold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleClaimOffer}
            >
              <Zap className="w-5 h-5 mr-2" />
              {ctaText}
            </Button>
            
            <div className="flex items-center gap-2 text-yellow-200 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{expiryText}</span>
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