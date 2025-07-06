import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import nodemailer from 'nodemailer';

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

    // Create email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'singhal3.sachin7@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Create email content
    const emailSubject = `New Job Application - ${applicationData.position}`;
    const emailHtml = `
      <h2>New Job Application Received</h2>
      
      <h3>Position Details:</h3>
      <ul>
        <li><strong>Position:</strong> ${applicationData.position}</li>
        <li><strong>Department:</strong> ${applicationData.department}</li>
        <li><strong>Location:</strong> ${applicationData.location}</li>
      </ul>
      
      <h3>Applicant Details:</h3>
      <ul>
        <li><strong>Full Name:</strong> ${applicationData.fullName}</li>
        <li><strong>Email:</strong> ${applicationData.email}</li>
        <li><strong>Phone:</strong> ${applicationData.phone}</li>
        <li><strong>Experience:</strong> ${applicationData.experience || 'Fresher/Entry Level'}</li>
      </ul>
      
      <h3>Cover Letter:</h3>
      <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${applicationData.coverLetter}</p>
      
      <hr>
      <p><em>This application was submitted through the Aptivon Solutions careers page.</em></p>
    `;

    const emailText = `
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

    // Send email
    try {
      const mailOptions = {
        from: process.env.GMAIL_USER || 'singhal3.sachin7@gmail.com',
        to: 'singhal3.sachin7@gmail.com',
        subject: emailSubject,
        text: emailText,
        html: emailHtml
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      return res.status(200).json({ 
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        success: true 
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Log the application details even if email fails
      console.log('Job Application Received (email failed):');
      console.log('To: singhal3.sachin7@gmail.com');
      console.log('Subject:', emailSubject);
      console.log('Content:', emailText);
      
      return res.status(200).json({ 
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        success: true 
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