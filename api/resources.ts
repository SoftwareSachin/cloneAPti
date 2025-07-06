import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const resourceDownloadSchema = z.object({
  resourceId: z.number(),
  resourceTitle: z.string(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  interestedIn: z.string().optional(),
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
    const validationResult = resourceDownloadSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: validationResult.error.errors 
      });
      return;
    }

    const downloadData = validationResult.data;

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

    // Email content for admin notification
    const adminEmailHtml = `
      <h2>New Resource Download</h2>
      <p><strong>Resource:</strong> ${downloadData.resourceTitle}</p>
      <p><strong>Resource ID:</strong> ${downloadData.resourceId}</p>
      <p><strong>Name:</strong> ${downloadData.firstName} ${downloadData.lastName}</p>
      <p><strong>Email:</strong> ${downloadData.email}</p>
      <p><strong>Company:</strong> ${downloadData.company}</p>
      <p><strong>Job Title:</strong> ${downloadData.jobTitle}</p>
      <p><strong>Interested In:</strong> ${downloadData.interestedIn || 'Not specified'}</p>
      <p><strong>Download Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send notification email to admin
    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: 'singhal3.sachin7@gmail.com',
      subject: `Resource Download - ${downloadData.resourceTitle}`,
      html: adminEmailHtml
    });

    // Send confirmation email to downloader
    const confirmationEmailHtml = `
      <h2>Resource Download Confirmed</h2>
      <p>Dear ${downloadData.firstName},</p>
      <p>Thank you for your interest in "${downloadData.resourceTitle}"!</p>
      <p>Your download should begin automatically. If it doesn't, please contact us and we'll send you the resource directly.</p>
      <h3>Related Resources You Might Find Interesting:</h3>
      <ul>
        <li>Cloud Migration Best Practices Guide</li>
        <li>AI Implementation Framework</li>
        <li>Enterprise Security Checklist</li>
        <li>Digital Transformation Roadmap</li>
      </ul>
      <p>For personalized recommendations or to discuss how these insights apply to your organization, feel free to reach out:</p>
      <p>📞 +91 7852099010<br/>
      📧 singhal3.sachin7@gmail.com</p>
      <p>Best regards,<br/>Aptivon Solutions Team</p>
    `;

    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: downloadData.email,
      subject: `Resource Download: ${downloadData.resourceTitle}`,
      html: confirmationEmailHtml
    });

    res.status(200).json({ 
      success: true, 
      message: 'Download initiated and confirmation sent!' 
    });

  } catch (error) {
    console.error('Resource download error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process download. Please try again.' 
    });
  }
}