import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = newsletterSchema.parse(req.body);

    // In a real implementation, you would:
    // 1. Add email to your newsletter service (e.g., Mailchimp, ConvertKit)
    // 2. Store in database
    // 3. Send confirmation email

    console.log(`Newsletter subscription: ${email}`);

    return res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed to newsletter!" 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: error.errors[0].message 
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: "Failed to subscribe to newsletter" 
    });
  }
}