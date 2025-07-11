// Advertisement Configuration
// Update this file to change promotional offers on the homepage

export interface AdConfig {
  isVisible: boolean;
  title: string;
  description: string;
  offerText: string;
  ctaText: string;
  expiryText: string;
  disclaimerText: string;
  emailSubject: string;
  emailBody: string;
}

// Current active promotion
export const currentAd: AdConfig = {
  isVisible: true,
  title: "🚀 Get 25% OFF Your First Project!",
  description: "Transform your business with our enterprise-grade solutions.",
  offerText: "Free consultation included!",
  ctaText: "Claim 25% OFF Now",
  expiryText: "Offer expires in 7 days",
  disclaimerText: "*Applicable for new clients only. Minimum project value ₹50,000. Terms apply.",
  emailSubject: "25% OFF First Project - Consultation Request",
  emailBody: "Hello Aptivon Solutions,%0D%0A%0D%0AI'm interested in the 25% OFF offer for my first project.%0D%0A%0D%0AProject Requirements:%0D%0A- [Please describe your project]%0D%0A%0D%0APlease contact me to discuss further.%0D%0A%0D%0AThank you!"
};

// Alternative ad configurations for easy switching
export const adTemplates = {
  // Discount Offer
  discount: {
    isVisible: true,
    title: "🎯 Special Discount Alert!",
    description: "Limited time offer for new clients.",
    offerText: "Save big on your next project!",
    ctaText: "Get Discount",
    expiryText: "Offer ends soon",
    disclaimerText: "*Terms and conditions apply. Contact us for details.",
    emailSubject: "Special Discount Inquiry",
    emailBody: "Hello, I'm interested in your current discount offer..."
  },
  
  // Free Service
  freeService: {
    isVisible: true,
    title: "🆓 Free Consultation + Strategy Session",
    description: "Get expert advice and project roadmap at no cost.",
    offerText: "Limited spots available!",
    ctaText: "Book Free Session",
    expiryText: "Limited time offer",
    disclaimerText: "*Free consultation includes 1-hour strategy session and project roadmap.",
    emailSubject: "Free Consultation Booking",
    emailBody: "Hello, I'd like to book my free consultation session..."
  },
  
  // Holiday Special
  holiday: {
    isVisible: true,
    title: "🎉 Holiday Special - 30% OFF",
    description: "Celebrate the season with amazing savings on all services.",
    offerText: "Best deal of the year!",
    ctaText: "Claim Holiday Deal",
    expiryText: "Offer valid until month end",
    disclaimerText: "*Holiday offer valid for new projects starting before month end.",
    emailSubject: "Holiday Special - 30% OFF Inquiry",
    emailBody: "Hello, I'm interested in your holiday special offer..."
  },
  
  // No Ad
  disabled: {
    isVisible: false,
    title: "",
    description: "",
    offerText: "",
    ctaText: "",
    expiryText: "",
    disclaimerText: "",
    emailSubject: "",
    emailBody: ""
  }
};

// Quick function to switch between templates
export const switchAdTemplate = (templateName: keyof typeof adTemplates): AdConfig => {
  return adTemplates[templateName];
};