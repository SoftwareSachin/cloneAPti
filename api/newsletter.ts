import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
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
    const validationResult = newsletterSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: validationResult.error.errors 
      });
      return;
    }

    const subscriptionData = validationResult.data;

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
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${subscriptionData.email}</p>
      <p><strong>Name:</strong> ${subscriptionData.firstName || 'Not provided'} ${subscriptionData.lastName || ''}</p>
      <p><strong>Company:</strong> ${subscriptionData.company || 'Not provided'}</p>
      <p><strong>Subscription Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send notification email to admin
    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: 'singhal3.sachin7@gmail.com',
      subject: `New Newsletter Subscription - ${subscriptionData.email}`,
      html: adminEmailHtml
    });

    // Send welcome email to subscriber
    const welcomeEmailHtml = `
      <h2>Welcome to Aptivon Solutions Newsletter!</h2>
      <p>Dear ${subscriptionData.firstName || 'Subscriber'},</p>
      <p>Thank you for subscribing to the Aptivon Solutions newsletter! You'll now receive:</p>
      <ul>
        <li>Latest technology insights and trends</li>
        <li>Case studies and success stories</li>
        <li>Industry best practices and tips</li>
        <li>Early access to webinars and events</li>
        <li>Exclusive resources and whitepapers</li>
      </ul>
      <p>We respect your inbox and will only send valuable content monthly.</p>
      <p>If you have any questions, feel free to contact us at singhal3.sachin7@gmail.com or +91 7852099010.</p>
      <p>Best regards,<br/>Aptivon Solutions Team</p>
      <hr>
      <p style="font-size: 12px; color: #666;">You can unsubscribe at any time by replying to this email with "UNSUBSCRIBE".</p>
    `;

    await transporter.sendMail({
      from: '"Aptivon Solutions" <singhal3.sachin7@gmail.com>',
      to: subscriptionData.email,
      subject: 'Welcome to Aptivon Solutions Newsletter!',
      html: welcomeEmailHtml
    });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again.' 
    });
  }
}