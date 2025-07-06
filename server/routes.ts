import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import sgMail from '@sendgrid/mail';

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

      // Store application data for email notifications
      // For now, we'll log to console and provide instructions to set up email
      console.log('📧 EMAIL NOTIFICATION NEEDED:');
      console.log('To receive job applications by email, please:');
      console.log('1. Go to SendGrid.com and verify singhal3.sachin7@gmail.com as a sender');
      console.log('2. Or contact your system administrator to set up email notifications');
      console.log('');

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

  const httpServer = createServer(app);
  return httpServer;
}
