import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Industry consultation schema
const industryConsultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional().or(z.literal("")),
  industry: z.string().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(1, "Message is required")
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    console.log('Received consultation data:', req.body);
    const validationResult = industryConsultationSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      console.log('Validation errors:', validationResult.error.errors);
      return res.status(400).json({
        error: "Validation failed",
        details: validationResult.error.errors,
        message: validationResult.error.errors[0]?.message || "Validation failed"
      });
    }

    const consultationData = validationResult.data;

    // Set up SendGrid if API key is available
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: 'singhal3.sachin7@gmail.com',
        from: 'singhal3.sachin7@gmail.com', 
        subject: `Industry Consultation Request - ${consultationData.industry || 'General'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              Industry Consultation Request
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${consultationData.firstName} ${consultationData.lastName}</p>
              <p><strong>Email:</strong> ${consultationData.email}</p>
              <p><strong>Company:</strong> ${consultationData.company || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${consultationData.phone || 'Not provided'}</p>
              <p><strong>Industry:</strong> ${consultationData.industry || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${consultationData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>This consultation request was submitted through the Aptivon Solutions Industries page.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      };

      try {
        await sgMail.send(msg);
        console.log('Industry consultation email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Continue without failing the request
      }
    }

    // Generate consultation ID
    const consultationId = `IC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return res.status(200).json({
      success: true,
      message: "Industry consultation request received! Our experts will contact you within 24 hours.",
      consultationId,
      data: {
        submittedAt: new Date().toISOString(),
        industry: consultationData.industry,
        contactEmail: consultationData.email
      }
    });

  } catch (error) {
    console.error('Industry consultation API error:', error);
    return res.status(500).json({
      error: 'Failed to process consultation request'
    });
  }
}