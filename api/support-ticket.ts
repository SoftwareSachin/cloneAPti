import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

const supportTicketSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().optional()
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      success: false 
    });
  }

  try {
    const validationResult = supportTicketSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Invalid form data',
        errors: validationResult.error.errors,
        success: false
      });
    }

    const ticketData = validationResult.data;
    const ticketId = `SUPT-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Try to send email using SendGrid if API key is available
    if (process.env.SENDGRID_API_KEY) {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const emailSubject = `Support Ticket [${ticketId}] - ${ticketData.priority} Priority: ${ticketData.subject}`;
        const emailHtml = `
          <h2>New Support Ticket Received</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #495057;">Ticket Information</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Ticket ID:</strong> ${ticketId}</li>
              <li><strong>Priority:</strong> <span style="color: ${ticketData.priority === 'Critical' ? '#dc3545' : ticketData.priority === 'High' ? '#fd7e14' : ticketData.priority === 'Medium' ? '#ffc107' : '#28a745'};">${ticketData.priority}</span></li>
              <li><strong>Subject:</strong> ${ticketData.subject}</li>
              <li><strong>Category:</strong> ${ticketData.category || 'General Support'}</li>
            </ul>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #495057;">Customer Information</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${ticketData.fullName}</li>
              <li><strong>Email:</strong> ${ticketData.email}</li>
            </ul>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #495057;">Issue Description</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${ticketData.description}</p>
          </div>
          
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff;">
            <h4 style="margin-top: 0; color: #004085;">Response Time Commitment</h4>
            <ul style="margin-bottom: 0; color: #004085;">
              ${ticketData.priority === 'Critical' ? '<li>Critical issues: Response within 1 hour</li>' : ''}
              ${ticketData.priority === 'High' ? '<li>High priority: Response within 4 hours</li>' : ''}
              ${ticketData.priority === 'Medium' || ticketData.priority === 'Low' ? '<li>Medium/Low priority: Response within 24 hours</li>' : ''}
            </ul>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 14px;"><em>This support ticket was submitted through the Aptivon Solutions support portal.</em></p>
        `;

        const emailText = `
New Support Ticket Received

Ticket ID: ${ticketId}
Priority: ${ticketData.priority}
Subject: ${ticketData.subject}
Category: ${ticketData.category || 'General Support'}

Customer Information:
- Name: ${ticketData.fullName}
- Email: ${ticketData.email}

Issue Description:
${ticketData.description}

Response Time Commitment:
${ticketData.priority === 'Critical' ? '- Critical issues: Response within 1 hour' : ''}
${ticketData.priority === 'High' ? '- High priority: Response within 4 hours' : ''}
${ticketData.priority === 'Medium' || ticketData.priority === 'Low' ? '- Medium/Low priority: Response within 24 hours' : ''}

This support ticket was submitted through the Aptivon Solutions support portal.
        `.trim();

        const msg = {
          to: 'singhal3.sachin7@gmail.com',
          from: 'sachingupta1785209901@gmail.com',
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        };

        await sgMail.send(msg);
        console.log(`✅ Support ticket email sent successfully to singhal3.sachin7@gmail.com - ${ticketId}`);
      } catch (emailError: any) {
        console.error('❌ SendGrid email error:', emailError.message);
        if (emailError.response && emailError.response.body && emailError.response.body.errors) {
          console.error('SendGrid error details:', emailError.response.body.errors);
        }
      }
    } else {
      console.log('⚠️ SendGrid API key not configured - support ticket email not sent');
    }

    // Always log the support ticket for backup
    console.log('=== NEW SUPPORT TICKET RECEIVED ===');
    console.log(`Ticket ID: ${ticketId}`);
    console.log(`Priority: ${ticketData.priority}`);
    console.log(`To: singhal3.sachin7@gmail.com`);
    console.log(`Subject: ${ticketData.subject}`);
    console.log('');
    console.log('Customer Information:');
    console.log(`- Name: ${ticketData.fullName}`);
    console.log(`- Email: ${ticketData.email}`);
    console.log('');
    console.log('Issue Description:');
    console.log(ticketData.description);
    console.log('=====================================');

    return res.status(200).json({ 
      message: `Support ticket ${ticketId} submitted successfully! We'll respond according to our SLA for ${ticketData.priority.toLowerCase()} priority issues.`,
      success: true,
      ticketId: ticketId
    });

  } catch (error) {
    console.error('Error processing support ticket:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Please try again later.',
      success: false 
    });
  }
}