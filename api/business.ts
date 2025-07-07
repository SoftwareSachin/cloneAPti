import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

// Business schemas
const aboutInquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  company: z.string().optional(),
  inquiryType: z.enum(['partnership', 'investment', 'recruitment', 'general']),
  message: z.string().min(1, 'Message is required')
});

const solutionInquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().min(1, 'Phone number is required'),
  solution: z.string().min(1, 'Solution is required'),
  budget: z.string().min(1, 'Budget is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  requirements: z.string().min(1, 'Requirements are required')
});

const consultationRequestSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().min(1, 'Phone number is required'),
  industry: z.string().min(1, 'Industry is required'),
  consultationType: z.string().min(1, 'Consultation type is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  description: z.string().min(1, 'Description is required')
});

const companyProfileRequestSchema = z.object({
  email: z.string().email('Invalid email format'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  position: z.string().optional(),
  source: z.string().min(1, 'Source is required')
});

// In-memory storage
let aboutInquiries: any[] = [];
let solutionInquiries: any[] = [];
let consultationRequests: any[] = [];
let companyProfileRequests: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;
  const { action } = req.query;

  try {
    switch (method) {
      case 'GET':
        return handleGet(req, res);
      case 'POST':
        return handlePost(req, res);
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Business API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'about-inquiries':
      return res.json(aboutInquiries);
    case 'solution-inquiries':
      return res.json(solutionInquiries);
    case 'consultation-requests':
      return res.json(consultationRequests);
    case 'company-profile-requests':
      return res.json(companyProfileRequests);
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'about-inquiry':
      try {
        const inquiryData = aboutInquirySchema.parse(req.body);
        const inquiry = {
          id: aboutInquiries.length + 1,
          ...inquiryData,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        aboutInquiries.push(inquiry);
        return res.status(201).json(inquiry);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'solution-inquiry':
      try {
        const inquiryData = solutionInquirySchema.parse(req.body);
        const inquiry = {
          id: solutionInquiries.length + 1,
          ...inquiryData,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        solutionInquiries.push(inquiry);
        return res.status(201).json(inquiry);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'consultation-request':
      try {
        const requestData = consultationRequestSchema.parse(req.body);
        const request = {
          id: consultationRequests.length + 1,
          ...requestData,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        consultationRequests.push(request);
        return res.status(201).json(request);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'company-profile':
      try {
        const requestData = companyProfileRequestSchema.parse(req.body);
        const request = {
          id: companyProfileRequests.length + 1,
          ...requestData,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        companyProfileRequests.push(request);
        
        // Generate company profile document
        const profileDocument = generateCompanyProfile(request);
        
        return res.status(200).json({ 
          success: true, 
          message: 'Company profile generated successfully',
          document: profileDocument 
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

function generateCompanyProfile(request: any) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aptivon Solutions - Company Profile</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 40px; }
        .company-name { font-size: 2.5em; color: #2c3e50; margin: 0; }
        .tagline { font-size: 1.2em; color: #7f8c8d; margin: 10px 0; }
        .section { margin: 30px 0; }
        .section-title { font-size: 1.5em; color: #34495e; border-bottom: 2px solid #3498db; padding-bottom: 5px; margin-bottom: 20px; }
        .metric { display: inline-block; margin: 10px 20px; text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #3498db; }
        .metric-label { font-size: 0.9em; color: #7f8c8d; }
        .services { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
        .service { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #7f8c8d; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="company-name">Aptivon Solutions</h1>
          <p class="tagline">Empowering Businesses Through Innovation</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">Company Overview</h2>
          <p>Aptivon Solutions Pvt. Ltd. is a dynamic IT services and consulting firm specializing in digital transformation, cloud solutions, and enterprise software development. We help businesses leverage technology to achieve their strategic goals.</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">Key Metrics</h2>
          <div class="metric">
            <div class="metric-value">5+</div>
            <div class="metric-label">Projects Delivered</div>
          </div>
          <div class="metric">
            <div class="metric-value">3+</div>
            <div class="metric-label">Satisfied Clients</div>
          </div>
          <div class="metric">
            <div class="metric-value">2</div>
            <div class="metric-label">Team Members</div>
          </div>
          <div class="metric">
            <div class="metric-value">15+</div>
            <div class="metric-label">Technologies</div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Core Services</h2>
          <div class="services">
            <div class="service">
              <h3>Web Development</h3>
              <p>Custom web applications and responsive websites</p>
            </div>
            <div class="service">
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications</p>
            </div>
            <div class="service">
              <h3>Cloud Solutions</h3>
              <p>Cloud migration and infrastructure management</p>
            </div>
            <div class="service">
              <h3>Digital Transformation</h3>
              <p>Process optimization and automation</p>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Contact Information</h2>
          <p><strong>Email:</strong> info@aptivonsolutions.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</p>
        </div>
        
        <div class="footer">
          <p>Generated on ${new Date().toLocaleDateString()} for ${request.firstName} ${request.lastName}</p>
          <p>&copy; 2024 Aptivon Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}