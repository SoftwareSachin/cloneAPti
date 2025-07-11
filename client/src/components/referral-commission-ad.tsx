import { Button } from "@/components/ui/button";
import { Handshake, Gift, Users, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ReferralCommissionAd() {
  const { toast } = useToast();

  const handleReferralClick = () => {
    const emailSubject = "Referral Commission Program - Partner with Us";
    const emailBody = "Hello Aptivon Solutions,%0D%0A%0D%0AI'm interested in your referral commission program.%0D%0A%0D%0AClient Details:%0D%0A- Client Name: [Client's company/name]%0D%0A- Project Type: [Brief description]%0D%0A- Estimated Budget: [If known]%0D%0A%0D%0AMy Contact Details:%0D%0A- Name: [Your name]%0D%0A- Phone: [Your phone number]%0D%0A- Relationship with client: [How you know them]%0D%0A%0D%0APlease contact me to discuss the referral process and commission structure.%0D%0A%0D%0AThank you!";
    
    window.open(`mailto:singhal3.sachin7@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    toast({
      title: "Referral Program",
      description: "Opening email to start your referral partnership with us!",
    });
  };

  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/5 to-emerald-300/10 rounded-full blur-3xl"></div>
        {/* Floating particles */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-emerald-300/70 rounded-full animate-ping"></div>
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-teal-200/80 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/30 backdrop-blur-lg rounded-full mb-6 border border-emerald-300/40 shadow-2xl hover:shadow-emerald-300/20 transition-all duration-300 transform hover:scale-105">
            <Gift className="w-5 h-5 text-emerald-200 animate-bounce" />
            <span className="text-sm font-bold text-emerald-100 tracking-wide">PARTNERSHIP PROGRAM</span>
            <Gift className="w-5 h-5 text-emerald-200 animate-bounce" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Refer a client and earn a 10% commission
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our referral program and earn rewards for every successful project you refer to us.
            <span className="font-bold text-emerald-300 animate-pulse"> Start earning today!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-10 py-4 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 rounded-2xl border-2 border-emerald-300/30 hover:border-emerald-300/60 group"
              onClick={handleReferralClick}
            >
              <Handshake className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Start Referring Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/20">
              <div className="w-12 h-12 bg-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">10% Commission</h3>
              <p className="text-emerald-100 text-sm">Earn 10% of the project value for every successful referral</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/20">
              <div className="w-12 h-12 bg-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Limit</h3>
              <p className="text-emerald-100 text-sm">Refer unlimited clients and keep earning commissions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-300/20">
              <div className="w-12 h-12 bg-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Payout</h3>
              <p className="text-emerald-100 text-sm">Get paid within 30 days of project completion</p>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-emerald-200 opacity-80">
            *Commission paid after successful project completion and payment. Terms and conditions apply.
          </div>
        </div>
      </div>
    </section>
  );
}