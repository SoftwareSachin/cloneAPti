import { z } from "zod";

const registrationSchema = z.object({
  webinarId: z.string(),
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { webinarId, firstName, lastName, email, company, jobTitle, phone } = registrationSchema.parse(req.body);

    // In a real implementation, you would:
    // 1. Register user for the webinar in your webinar platform (Zoom, GoToWebinar, etc.)
    // 2. Store registration in database
    // 3. Send confirmation email with calendar invite
    // 4. Add to marketing automation sequences

    console.log(`Webinar registration: ${webinarId} by ${firstName} ${lastName} (${email})`);

    return res.status(200).json({ 
      success: true, 
      message: "Successfully registered for webinar! Check your email for the joining link.",
      webinarId,
      registrationConfirmation: `WB-${Date.now()}`
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
      message: "Failed to register for webinar" 
    });
  }
}