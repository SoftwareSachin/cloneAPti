import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const webinarRegistrationSchema = z.object({
  webinarId: z.number(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  phone: z.string().min(1, "Phone number is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const validationResult = webinarRegistrationSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: validationResult.error.errors 
      });
      return;
    }

    const registrationData = validationResult.data;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'singhal3.sachin7@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Email content
    const emailHtml = `
      <h2>New Webinar Registration</h2>
      <p><strong>Webinar ID:</strong> ${registrationData.webinarId}</p>
      <p><strong>Name:</strong> ${registrationData.firstName} ${registrationData.lastName}</p>
      <p><strong>Email:</strong> ${registrationData.email}</p>
      <p><strong>Company:</strong> ${registrationData.company}</p>
      <p><strong>Job Title:</strong> ${registrationData.jobTitle}</p>
      <p><strong>Phone:</strong> ${registrationData.phone}</p>
      <p><strong>Registration Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send notification email
    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: 'singhal3.sachin7@gmail.com',
      subject: `New Webinar Registration - ${registrationData.firstName} ${registrationData.lastName}`,
      html: emailHtml
    });

    // Send confirmation email to registrant
    const confirmationHtml = `
      <h2>Webinar Registration Confirmed</h2>
      <p>Dear ${registrationData.firstName},</p>
      <p>Thank you for registering for our webinar! We'll send you the joining link 24 hours before the event.</p>
      <p>Registration Details:</p>
      <ul>
        <li><strong>Company:</strong> ${registrationData.company}</li>
        <li><strong>Job Title:</strong> ${registrationData.jobTitle}</li>
        <li><strong>Contact:</strong> ${registrationData.phone}</li>
      </ul>
      <p>If you have any questions, feel free to contact us at singhal3.sachin7@gmail.com or +91 7852099010.</p>
      <p>Best regards,<br/>Aptivon Solutions Team</p>
    `;

    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: registrationData.email,
      subject: 'Webinar Registration Confirmation - Aptivon Solutions',
      html: confirmationHtml
    });

    res.status(200).json({ 
      success: true, 
      message: 'Registration successful! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Webinar registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process registration. Please try again.' 
    });
  }
}