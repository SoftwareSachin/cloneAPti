# Advertisement Section Management

## Overview
The homepage now includes a promotional ad section that can be easily updated to display different offers and promotions.

## Quick Start
To update the current promotion, edit the `currentAd` object in `/client/src/config/ad-config.ts`:

```typescript
export const currentAd: AdConfig = {
  isVisible: true,
  title: "🚀 Your New Offer Title!",
  description: "Description of your offer...",
  offerText: "Additional highlight text",
  ctaText: "Button Text",
  expiryText: "Offer expires in X days",
  disclaimerText: "*Terms and conditions...",
  emailSubject: "Email subject line",
  emailBody: "Pre-filled email content..."
};
```

## Features
- **Fully customizable**: Change title, description, button text, and styling
- **Email integration**: Clicking the CTA button opens email with pre-filled content
- **Visual appeal**: Gradient background with animated effects
- **Responsive design**: Works perfectly on desktop and mobile
- **Easy to toggle**: Set `isVisible: false` to hide the ad section

## Pre-built Templates
The configuration file includes ready-to-use templates:

1. **Discount Template**: For percentage-off promotions
2. **Free Service Template**: For complimentary consultation offers  
3. **Holiday Special**: For seasonal promotions
4. **Disabled**: To hide the ad section completely

## Switching Templates
To quickly switch to a different template:

```typescript
import { adTemplates } from "@/config/ad-config";

// Use any pre-built template
export const currentAd = adTemplates.holiday; // or discount, freeService, disabled
```

## Customization Options
- **Colors**: Modify gradient colors in `/client/src/components/ad-section.tsx`
- **Animation**: Adjust hover effects and transitions
- **Layout**: Change button positioning and content alignment
- **Background**: Update background effects and decorative elements

## Best Practices
1. Keep titles concise and action-oriented
2. Use clear, compelling call-to-action text
3. Include relevant terms and conditions
4. Test email functionality before publishing
5. Update expiry dates regularly
6. Monitor click-through rates and engagement

## Technical Details
- **Component**: `/client/src/components/ad-section.tsx`
- **Configuration**: `/client/src/config/ad-config.ts`
- **Usage**: Imported in `/client/src/pages/home.tsx`
- **Styling**: Tailwind CSS with custom gradients and animations