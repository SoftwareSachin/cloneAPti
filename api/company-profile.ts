import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const downloadRequestSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  position: z.string().optional(),
  source: z.string().default('about-page')
});

type DownloadRequest = z.infer<typeof downloadRequestSchema>;

// In-memory storage for demonstration
let downloadRequests: (DownloadRequest & { id: number; createdAt: Date })[] = [];
let requestId = 1;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      const validationResult = downloadRequestSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: validationResult.error.errors
        });
      }

      const requestData = validationResult.data;
      const newRequest = {
        id: requestId++,
        ...requestData,
        createdAt: new Date()
      };

      downloadRequests.push(newRequest);

      console.log('Company profile download request:', {
        id: newRequest.id,
        name: `${newRequest.firstName} ${newRequest.lastName}`,
        email: newRequest.email,
        company: newRequest.company,
        timestamp: newRequest.createdAt.toISOString()
      });

      // Generate comprehensive company profile document
      const companyProfile = generateCompanyProfile(newRequest);

      return res.status(200).json({
        message: 'Company profile generated successfully',
        downloadUrl: '/company-profile.html',
        profile: companyProfile,
        requestId: newRequest.id
      });
    }

    if (req.method === 'GET') {
      const sortedRequests = downloadRequests.sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      );

      return res.status(200).json({
        requests: sortedRequests,
        total: sortedRequests.length
      });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error: any) {
    console.error('Company profile API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}

function generateCompanyProfile(request: DownloadRequest & { id: number; createdAt: Date }) {
  const currentYear = new Date().getFullYear();
  
  return {
    document: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aptivon Solutions - Company Profile</title>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f8fafc;
          }
          .header { 
            text-align: center;
            margin-bottom: 50px;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          }
          .logo { 
            font-size: 2.5em;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 10px;
          }
          .tagline { 
            font-size: 1.1em;
            color: #64748b;
            margin-bottom: 20px;
          }
          .section { 
            margin-bottom: 40px;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 4px -1px rgba(0,0,0,0.1);
          }
          .section h2 { 
            color: #1e293b;
            border-bottom: 3px solid #e2e8f0;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          .stats-grid { 
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 20px 0;
          }
          .stat-card { 
            text-align: center;
            padding: 20px;
            background: #f1f5f9;
            border-radius: 8px;
          }
          .stat-number { 
            font-size: 2em;
            font-weight: bold;
            color: #1e293b;
          }
          .stat-label { 
            color: #64748b;
            font-size: 0.9em;
          }
          .timeline { 
            position: relative;
            padding-left: 30px;
          }
          .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #e2e8f0;
          }
          .timeline-item {
            position: relative;
            margin-bottom: 30px;
            padding-left: 30px;
          }
          .timeline-item::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 5px;
            width: 16px;
            height: 16px;
            background: #1e293b;
            border-radius: 50%;
          }
          .services-grid { 
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
          .service-card { 
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #1e293b;
          }
          .contact-info { 
            background: #1e293b;
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
          }
          .generated-for {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
            color: #64748b;
          }
          @media print {
            body { background: white; }
            .section { box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <div class="generated-for">
          <strong>Generated for:</strong> ${request.firstName} ${request.lastName}
          ${request.company ? ` at ${request.company}` : ''}
          <br>
          <small>Generated on ${new Date().toLocaleDateString()}</small>
        </div>

        <div class="header">
          <div class="logo">Aptivon Solutions</div>
          <div class="tagline">Transforming Enterprises Through Innovation</div>
          <p>Your trusted partner for cutting-edge technology solutions since 2022</p>
        </div>

        <div class="section">
          <h2>Company Overview</h2>
          <p>Aptivon Solutions is a rapidly growing technology company that has emerged as a leader in enterprise digital transformation. Founded in 2022, we've quickly established ourselves as a trusted partner for organizations seeking to leverage technology for competitive advantage.</p>
          <p>Our comprehensive suite of services spans cloud migration, artificial intelligence, cybersecurity, and digital transformation, serving clients across diverse industries with innovative solutions that drive measurable results.</p>
        </div>

        <div class="section">
          <h2>Key Metrics & Achievements</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">5+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">3+</div>
              <div class="stat-label">Years of Excellence</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">2+</div>
              <div class="stat-label">Team Members</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">Uptime SLA</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Our Growth Journey</h2>
          <div class="timeline">
            <div class="timeline-item">
              <h3>2022 - Foundation & Vision</h3>
              <p>Company established with a mission to democratize enterprise technology. First 10 clients onboarded, cloud migration services launched, and strategic partnerships with AWS and Azure established.</p>
            </div>
            <div class="timeline-item">
              <h3>2023 - Rapid Growth & Expansion</h3>
              <p>Scaled operations significantly, launched AI/ML practice, introduced cybersecurity solutions, and achieved ISO 27001 certification.</p>
            </div>
            <div class="timeline-item">
              <h3>2024 - Innovation & Excellence</h3>
              <p>Focused on delivering advanced AI solutions, established digital transformation practice, received industry awards, and acquired Fortune 500 clients.</p>
            </div>
            <div class="timeline-item">
              <h3>2025 - Global Leadership</h3>
              <p>Positioned as a global leader in enterprise technology solutions, driving digital transformation across industries worldwide.</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Core Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <h3>Cloud Migration</h3>
              <p>Seamless migration to AWS, Azure, and Google Cloud with zero downtime and enhanced security.</p>
            </div>
            <div class="service-card">
              <h3>AI & Machine Learning</h3>
              <p>Custom AI solutions, predictive analytics, and intelligent automation for business optimization.</p>
            </div>
            <div class="service-card">
              <h3>Cybersecurity</h3>
              <p>Comprehensive security solutions including threat detection, compliance, and risk management.</p>
            </div>
            <div class="service-card">
              <h3>Digital Transformation</h3>
              <p>End-to-end digital transformation strategies that modernize operations and drive growth.</p>
            </div>
            <div class="service-card">
              <h3>Mobile Development</h3>
              <p>Cross-platform mobile applications with focus on user experience and performance.</p>
            </div>
            <div class="service-card">
              <h3>Data Analytics</h3>
              <p>Advanced analytics platforms for data-driven decision making and business intelligence.</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Why Choose Aptivon Solutions?</h2>
          <ul>
            <li><strong>Proven Track Record:</strong> 99.9% uptime SLA and 100% client satisfaction rate</li>
            <li><strong>Expert Team:</strong> Certified professionals with extensive industry experience</li>
            <li><strong>Innovation Focus:</strong> Cutting-edge technologies and industry best practices</li>
            <li><strong>Scalable Solutions:</strong> Flexible architecture that grows with your business</li>
            <li><strong>24/7 Support:</strong> Round-the-clock monitoring and support services</li>
            <li><strong>Cost-Effective:</strong> Competitive pricing with transparent billing</li>
          </ul>
        </div>

        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> singhal3.sachin7@gmail.com</p>
          <p><strong>Phone:</strong> +917852099010</p>
          <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM IST</p>
          <p style="margin-top: 20px;">
            <strong>Ready to transform your business?</strong><br>
            Contact us today for a free consultation and discover how we can help you achieve your technology goals.
          </p>
        </div>
      </body>
      </html>
    `,
    filename: `aptivon-solutions-company-profile-${currentYear}.html`,
    requestId: request.id
  };
}