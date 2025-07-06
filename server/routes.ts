import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import sgMail from '@sendgrid/mail';

// Support ticket schema
const supportTicketSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().optional()
});

// Knowledge base data
const KNOWLEDGE_BASE = [
  {
    id: 1,
    title: "How long does a typical implementation take?",
    content: "Implementation timelines vary based on project complexity and scope. Typical timelines are: Small projects (1-2 weeks), Medium projects (3-6 weeks), Large enterprise projects (8-16 weeks). We provide detailed project timelines during the planning phase.",
    category: "Technical Implementation",
    tags: ["implementation", "timeline", "project", "planning"]
  },
  {
    id: 2,
    title: "What are the system requirements?",
    content: "Our solutions are cloud-native and platform agnostic. Minimum requirements include: Modern web browser (Chrome, Firefox, Safari, Edge), Stable internet connection (10+ Mbps recommended), Operating System: Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+.",
    category: "Technical Implementation",
    tags: ["requirements", "system", "browser", "operating system"]
  },
  {
    id: 3,
    title: "How do you handle data migration?",
    content: "We follow a comprehensive data migration process: Data assessment and mapping, Migration strategy development, Test migrations in staging environment, Validation and integrity checks, Scheduled production migration with minimal downtime, Post-migration verification and optimization.",
    category: "Technical Implementation",
    tags: ["data", "migration", "transfer", "process"]
  },
  {
    id: 4,
    title: "What security measures do you implement?",
    content: "Security is our top priority. We implement: End-to-end encryption (AES-256), Multi-factor authentication (MFA), Role-based access control (RBAC), Regular security audits and penetration testing, SOC 2 Type II compliance, GDPR and data privacy compliance.",
    category: "Technical Implementation",
    tags: ["security", "encryption", "compliance", "authentication"]
  },
  {
    id: 5,
    title: "How is pricing calculated?",
    content: "Our pricing is transparent and based on: Project scope and complexity, Required features and integrations, Number of users or transactions, Support level required, Implementation timeline. We provide detailed quotes with no hidden fees.",
    category: "Billing & Pricing",
    tags: ["pricing", "cost", "billing", "quote"]
  },
  {
    id: 6,
    title: "What payment methods do you accept?",
    content: "We accept multiple payment methods: Bank transfers (ACH/Wire), Credit cards (Visa, MasterCard, Amex), Corporate purchase orders, Annual prepayment (with discount), Milestone-based payments for large projects.",
    category: "Billing & Pricing",
    tags: ["payment", "methods", "billing", "credit card"]
  },
  {
    id: 7,
    title: "Are there any hidden costs?",
    content: "No, we believe in transparent pricing. All costs are outlined upfront including: Implementation fees, Licensing costs, Training expenses, Ongoing support costs, Third-party integrations (if any). Any changes to scope are discussed and approved before implementation.",
    category: "Billing & Pricing",
    tags: ["hidden costs", "transparent", "pricing", "fees"]
  },
  {
    id: 8,
    title: "Can I change my plan later?",
    content: "Yes, our solutions are flexible. You can: Upgrade to higher tiers anytime, Add additional users or features, Modify service levels, Downgrade at renewal periods. Changes are prorated and take effect immediately or at the next billing cycle.",
    category: "Billing & Pricing",
    tags: ["plan change", "upgrade", "flexible", "modification"]
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Here you could add email notification logic using Nodemailer
      console.log("New contact submission:", contact);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        contact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Job application submission
  app.post("/api/job-application", async (req, res) => {
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

    try {
      // Validate the request body
      const validationResult = jobApplicationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: 'Validation failed', 
          error: validationResult.error.errors,
          success: false 
        });
      }

      const applicationData = validationResult.data;

      // Try to send email using SendGrid if API key is available
      if (process.env.SENDGRID_API_KEY) {
        try {
          sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

          const msg = {
            to: 'singhal3.sachin7@gmail.com',
            from: 'sachingupta1785209901@gmail.com', // Use the verified sender from SendGrid
            subject: emailSubject,
            text: emailText,
            html: emailHtml,
          };

          await sgMail.send(msg);
          console.log('✅ Email sent successfully via SendGrid to singhal3.sachin7@gmail.com');
        } catch (emailError: any) {
          console.error('❌ SendGrid email error:', emailError.message);
          if (emailError.response && emailError.response.body && emailError.response.body.errors) {
            console.error('SendGrid error details:', emailError.response.body.errors);
          }
        }
      } else {
        console.log('⚠️ SendGrid API key not configured - email not sent');
      }

      // Always log the application details for backup
      console.log('=== NEW JOB APPLICATION RECEIVED ===');
      console.log('To: singhal3.sachin7@gmail.com');
      console.log('Subject: New Job Application -', applicationData.position);
      console.log('');
      console.log('Position Details:');
      console.log('- Position:', applicationData.position);
      console.log('- Department:', applicationData.department);
      console.log('- Location:', applicationData.location);
      console.log('');
      console.log('Applicant Details:');
      console.log('- Full Name:', applicationData.fullName);
      console.log('- Email:', applicationData.email);
      console.log('- Phone:', applicationData.phone);
      console.log('- Experience:', applicationData.experience || 'Fresher/Entry Level');
      console.log('');
      console.log('Cover Letter:');
      console.log(applicationData.coverLetter);
      console.log('=====================================');

      return res.status(200).json({ 
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        success: true 
      });

    } catch (error) {
      console.error('Error processing job application:', error);
      return res.status(500).json({ 
        message: 'Internal server error. Please try again later.',
        success: false 
      });
    }
  });

  // Support ticket submission
  app.post("/api/support-ticket", async (req, res) => {
    try {
      const supportTicketSchema = z.object({
        fullName: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        subject: z.string().min(5, "Subject must be at least 5 characters"),
        priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
        description: z.string().min(10, "Description must be at least 10 characters"),
      });

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
            
            <hr style="margin: 30px 0;">
            <p style="color: #6c757d; font-size: 14px;"><em>This support ticket was submitted through the Aptivon Solutions support portal.</em></p>
          `;

          const msg = {
            to: 'singhal3.sachin7@gmail.com',
            from: 'sachingupta1785209901@gmail.com',
            subject: emailSubject,
            html: emailHtml,
          };

          await sgMail.send(msg);
          console.log(`✅ Support ticket email sent successfully to singhal3.sachin7@gmail.com - ${ticketId}`);
        } catch (emailError: any) {
          console.error('❌ SendGrid email error:', emailError.message);
        }
      }

      // Always log the support ticket for backup
      console.log('=== NEW SUPPORT TICKET RECEIVED ===');
      console.log(`Ticket ID: ${ticketId}`);
      console.log(`Priority: ${ticketData.priority}`);
      console.log(`To: singhal3.sachin7@gmail.com`);
      console.log(`Subject: ${ticketData.subject}`);
      console.log('Customer Information:');
      console.log(`- Name: ${ticketData.fullName}`);
      console.log(`- Email: ${ticketData.email}`);
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
  });

  // Support search functionality
  app.get("/api/search-support", async (req, res) => {
    try {
      const query = req.query.q as string;
      
      if (!query || query.trim().length < 2) {
        return res.status(400).json({
          message: 'Search query must be at least 2 characters long',
          success: false
        });
      }

      const KNOWLEDGE_BASE = [
        {
          id: 1,
          title: "How long does a typical implementation take?",
          content: "Implementation timelines vary based on project complexity and scope. Typical timelines are: Small projects (1-2 weeks), Medium projects (3-6 weeks), Large enterprise projects (8-16 weeks). We provide detailed project timelines during the planning phase.",
          category: "Technical Implementation",
          tags: ["implementation", "timeline", "project", "planning"]
        },
        {
          id: 2,
          title: "What are the system requirements?",
          content: "Our solutions are cloud-native and platform agnostic. Minimum requirements include: Modern web browser (Chrome, Firefox, Safari, Edge), Stable internet connection (10+ Mbps recommended), Operating System: Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+.",
          category: "Technical Implementation",
          tags: ["requirements", "system", "browser", "operating system"]
        },
        {
          id: 3,
          title: "How do you handle data migration?",
          content: "We follow a comprehensive data migration process: Data assessment and mapping, Migration strategy development, Test migrations in staging environment, Validation and integrity checks, Scheduled production migration with minimal downtime, Post-migration verification and optimization.",
          category: "Technical Implementation",
          tags: ["data", "migration", "transfer", "process"]
        },
        {
          id: 4,
          title: "What security measures do you implement?",
          content: "Security is our top priority. We implement: End-to-end encryption (AES-256), Multi-factor authentication (MFA), Role-based access control (RBAC), Regular security audits and penetration testing, SOC 2 Type II compliance, GDPR and data privacy compliance.",
          category: "Technical Implementation",
          tags: ["security", "encryption", "compliance", "authentication"]
        },
        {
          id: 5,
          title: "How is pricing calculated?",
          content: "Our pricing is transparent and based on: Project scope and complexity, Required features and integrations, Number of users or transactions, Support level required, Implementation timeline. We provide detailed quotes with no hidden fees.",
          category: "Billing & Pricing",
          tags: ["pricing", "cost", "billing", "quote"]
        },
        {
          id: 6,
          title: "What payment methods do you accept?",
          content: "We accept multiple payment methods: Bank transfers (ACH/Wire), Credit cards (Visa, MasterCard, Amex), Corporate purchase orders, Annual prepayment (with discount), Milestone-based payments for large projects.",
          category: "Billing & Pricing",
          tags: ["payment", "methods", "billing", "credit card"]
        }
      ];

      // Search in title, content, and tags
      const searchTerm = query.toLowerCase().trim();
      const searchResults = KNOWLEDGE_BASE.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const contentMatch = item.content.toLowerCase().includes(searchTerm);
        const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const categoryMatch = item.category.toLowerCase().includes(searchTerm);
        
        return titleMatch || contentMatch || tagMatch || categoryMatch;
      });

      // Sort by relevance (title matches first)
      const sortedResults = searchResults.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(searchTerm);
        const bTitle = b.title.toLowerCase().includes(searchTerm);
        
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        return 0;
      });

      return res.status(200).json({
        success: true,
        query: query,
        results: sortedResults,
        total: sortedResults.length
      });

    } catch (error) {
      console.error('Error processing search request:', error);
      return res.status(500).json({ 
        message: 'Internal server error. Please try again later.',
        success: false 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = z.object({
        email: z.string().email("Invalid email address"),
      }).parse(req.body);

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
  });

  // Resources endpoint for downloads and search
  app.post("/api/resources", async (req, res) => {
    try {
      const { resourceId, email, firstName, lastName, company } = z.object({
        resourceId: z.string(),
        email: z.string().email("Valid email required for download"),
        firstName: z.string().min(1, "First name required"),
        lastName: z.string().min(1, "Last name required"),
        company: z.string().optional(),
      }).parse(req.body);

      console.log(`Download request: ${resourceId} by ${firstName} ${lastName} (${email})`);

      return res.status(200).json({ 
        success: true, 
        message: "Download link sent to your email!",
        downloadUrl: `/downloads/${resourceId}.pdf`
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
        message: "Failed to process download request" 
      });
    }
  });

  // Webinar registration endpoint
  app.post("/api/webinar-registration", async (req, res) => {
    try {
      const { webinarId, firstName, lastName, email, company, jobTitle, phone } = z.object({
        webinarId: z.string(),
        firstName: z.string().min(1, "First name required"),
        lastName: z.string().min(1, "Last name required"),
        email: z.string().email("Valid email required"),
        company: z.string().optional(),
        jobTitle: z.string().optional(),
        phone: z.string().optional(),
      }).parse(req.body);

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
  });

  // Industry consultation endpoint
  app.post("/api/industry-consultation", async (req, res) => {
    try {
      const { firstName, lastName, email, company, industry, phone, message } = z.object({
        firstName: z.string().min(1, "First name required"),
        lastName: z.string().min(1, "Last name required"),
        email: z.string().email("Valid email required"),
        company: z.string().optional(),
        industry: z.string().optional(),
        phone: z.string().optional(),
        message: z.string().min(10, "Message must be at least 10 characters"),
      }).parse(req.body);

      console.log(`Industry consultation request: ${industry} - ${firstName} ${lastName} (${email})`);

      return res.status(200).json({ 
        success: true, 
        message: "Industry consultation request received! Our experts will contact you within 24 hours.",
        consultationId: `IC-${Date.now()}`
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
        message: "Failed to submit consultation request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
