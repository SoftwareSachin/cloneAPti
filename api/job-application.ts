import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

// Define the schema for job application data
const jobApplicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  experience: z.string().optional(),
  coverLetter: z.string().min(1, "Cover letter is required"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
});

type JobApplicationData = z.infer<typeof jobApplicationSchema>;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate the request body
    const validationResult = jobApplicationSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      const errorMessage = fromZodError(validationResult.error);
      return res.status(400).json({ 
        message: 'Validation failed', 
        error: errorMessage.toString() 
      });
    }

    const applicationData: JobApplicationData = validationResult.data;

    // Create email content
    const emailContent = `
New Job Application Received

Position: ${applicationData.position}
Department: ${applicationData.department}
Location: ${applicationData.location}

Applicant Details:
- Full Name: ${applicationData.fullName}
- Email: ${applicationData.email}
- Phone: ${applicationData.phone}
- Experience: ${applicationData.experience || 'Fresher/Entry Level'}

Cover Letter:
${applicationData.coverLetter}

This application was submitted through the Aptivon Solutions careers page.
    `.trim();

    // For demonstration purposes, we'll log the application
    // In a real implementation, you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Or any other email service

    console.log('Job Application Received:');
    console.log('To: singhal3.sachin7@gmail.com');
    console.log('Subject: New Job Application - ' + applicationData.position);
    console.log('Content:', emailContent);

    // Simulate email sending success
    // In production, you would replace this with actual email sending logic
    const emailSent = true; // This would be the result of your email sending operation

    if (emailSent) {
      return res.status(200).json({ 
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        success: true 
      });
    } else {
      return res.status(500).json({ 
        message: 'Failed to submit application. Please try again later.',
        success: false 
      });
    }

  } catch (error) {
    console.error('Error processing job application:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Please try again later.',
      success: false 
    });
  }
}