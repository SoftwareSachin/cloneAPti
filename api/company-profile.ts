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
          errors: validationResult.error.errors,
          success: false
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
        requestId: newRequest.id,
        success: true
      });
    }

    if (req.method === 'GET') {
      const sortedRequests = downloadRequests.sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      );

      return res.status(200).json({
        requests: sortedRequests,
        total: sortedRequests.length,
        success: true
      });
    }

    return res.status(405).json({ message: 'Method not allowed', success: false });
  } catch (error: any) {
    console.error('Company profile API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error - failed to generate company profile',
      error: error.message,
      success: false
    });
  }
}

function generateCompanyProfile(request: DownloadRequest & { id: number; createdAt: Date }) {
  const currentYear = new Date().getFullYear();
  
  const htmlDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aptivon Solutions - Advanced Company Profile</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      margin: 0;
      padding: 20px;
    }
    
    .document-container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .cover-page {
      background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
      color: white;
      padding: 80px 60px;
      text-align: center;
      position: relative;
    }
    
    .company-logo { 
      font-size: 3.5em;
      font-weight: 800;
      letter-spacing: -2px;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .tagline { 
      font-size: 1.3em;
      margin-bottom: 30px;
      opacity: 0.9;
      font-weight: 300;
    }
    
    .cover-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin: 50px 0;
    }
    
    .cover-stat {
      text-align: center;
      padding: 20px;
      background: rgba(255,255,255,0.1);
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }
    
    .cover-stat-number {
      font-size: 2.2em;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .cover-stat-label {
      font-size: 0.9em;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .page {
      padding: 50px;
    }
    
    .page-header {
      border-bottom: 3px solid #e2e8f0;
      padding-bottom: 20px;
      margin-bottom: 40px;
    }
    
    .page-title {
      font-size: 2.2em;
      font-weight: 700;
      color: #1e293b;
    }
    
    .section {
      margin-bottom: 40px;
      padding: 30px;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #1e293b;
    }
    
    .section h2 {
      color: #1e293b;
      margin-bottom: 20px;
      font-size: 1.5em;
    }
    
    .metrics-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .metric-card { 
      background: white;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      border-top: 4px solid #1e293b;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .metric-number { 
      font-size: 2.5em;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 10px;
      line-height: 1;
    }
    
    .metric-label { 
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 0.9em;
    }
    
    .services-grid { 
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .service-card { 
      background: white;
      padding: 25px;
      border-radius: 10px;
      border-left: 4px solid #1e293b;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .service-title {
      font-size: 1.2em;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 15px;
    }
    
    .timeline {
      position: relative;
      margin: 30px 0;
    }
    
    .timeline-item {
      background: white;
      padding: 25px;
      margin-bottom: 20px;
      border-radius: 10px;
      border-left: 4px solid #1e293b;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .timeline-item h3 {
      color: #1e293b;
      margin-bottom: 15px;
      font-size: 1.3em;
    }
    
    .contact-section {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: white;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      margin-top: 30px;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 25px;
      margin-top: 25px;
    }
    
    .contact-item {
      background: rgba(255,255,255,0.1);
      padding: 20px;
      border-radius: 10px;
      backdrop-filter: blur(10px);
    }
    
    .document-info {
      text-align: center;
      padding: 20px;
      background: #f1f5f9;
      color: #64748b;
      font-size: 0.9em;
    }
    
    @media print {
      body { background: white; }
      .document-container { box-shadow: none; }
      .section, .service-card, .metric-card { box-shadow: none; border: 1px solid #e2e8f0; }
    }
  </style>
  
  <script>
    function downloadAsPDF() {
      window.print();
    }
    
    function addDownloadButton() {
      const downloadBtn = document.createElement('button');
      downloadBtn.innerHTML = '📄 Save as PDF';
      downloadBtn.style.cssText = 'position:fixed;top:20px;right:20px;z-index:1000;background:#1e293b;color:white;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-family:inherit;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
      downloadBtn.onclick = downloadAsPDF;
      document.body.appendChild(downloadBtn);
    }
    
    window.onload = function() {
      console.log('Advanced Company Profile Generated Successfully');
      addDownloadButton();
    }
  </script>
</head>
<body>
  <div class="document-container">
    <!-- Cover Page -->
    <div class="cover-page">
      <div class="company-logo">APTIVON SOLUTIONS</div>
      <div class="tagline">Transforming Enterprises Through Innovation</div>
      <p style="font-size: 1.1em; margin-bottom: 20px;">Advanced Company Profile ${currentYear}</p>
      
      <div class="cover-stats">
        <div class="cover-stat">
          <div class="cover-stat-number">5+</div>
          <div class="cover-stat-label">Projects Delivered</div>
        </div>
        <div class="cover-stat">
          <div class="cover-stat-number">3+</div>
          <div class="cover-stat-label">Enterprise Clients</div>
        </div>
        <div class="cover-stat">
          <div class="cover-stat-number">300%</div>
          <div class="cover-stat-label">YoY Growth</div>
        </div>
      </div>
      
      <div class="document-info">
        <strong>Generated for:</strong> ${request.firstName} ${request.lastName}<br>
        ${request.company ? `Company: ${request.company}<br>` : ''}
        <em>Document ID: #${request.id} | Generated: ${new Date().toLocaleDateString()}</em>
      </div>
    </div>

    <!-- Executive Summary -->
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Executive Summary</h1>
      </div>
      
      <div class="section">
        <h2>Company Overview</h2>
        <p style="font-size: 1.1em; margin-bottom: 20px;">
          Aptivon Solutions has emerged as a rapidly growing technology leader, transforming enterprises through innovative digital solutions since 2022. 
          In just 3 years, we've established ourselves as a trusted partner for organizations seeking competitive advantage through technology.
        </p>
        <p style="font-size: 1.1em;">
          Our comprehensive portfolio spans cloud migration, artificial intelligence, cybersecurity, and digital transformation, 
          serving diverse industries with measurable results and exceptional client satisfaction.
        </p>
      </div>

      <h2 style="color: #1e293b; margin: 30px 0 20px 0;">Key Performance Indicators</h2>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-number">5+</div>
          <div class="metric-label">Projects Delivered</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">3+</div>
          <div class="metric-label">Enterprise Clients</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">2</div>
          <div class="metric-label">Team Members</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">99.9%</div>
          <div class="metric-label">Uptime SLA</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">15+</div>
          <div class="metric-label">Technologies</div>
        </div>
        <div class="metric-card">
          <div class="metric-number">$2M+</div>
          <div class="metric-label">Revenue Pipeline</div>
        </div>
      </div>
    </div>

    <!-- Services Portfolio -->
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Service Portfolio</h1>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-title">Cloud Migration & Architecture</div>
          <p>Seamless migration to AWS, Azure, and Google Cloud with zero downtime, enhanced security, and optimized performance.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ 100% Success Rate | ✓ Zero Downtime | ✓ 40% Cost Reduction</div>
        </div>
        
        <div class="service-card">
          <div class="service-title">AI & Machine Learning Solutions</div>
          <p>Custom AI platforms, predictive analytics, and intelligent automation for business optimization and growth.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ ROI: 250%+ | ✓ Efficiency: +60% | ✓ Data Accuracy: 99%</div>
        </div>
        
        <div class="service-card">
          <div class="service-title">Enterprise Cybersecurity</div>
          <p>Comprehensive security solutions including threat detection, compliance management, and risk assessment.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ 100% Threats Blocked | ✓ ISO 27001 Certified | ✓ 24/7 Monitoring</div>
        </div>
        
        <div class="service-card">
          <div class="service-title">Digital Transformation</div>
          <p>End-to-end transformation strategies that modernize operations and accelerate digital innovation.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ Time to Market: -50% | ✓ Process Efficiency: +80% | ✓ Customer Satisfaction: 98%</div>
        </div>
        
        <div class="service-card">
          <div class="service-title">Mobile & Web Development</div>
          <p>Cross-platform applications with focus on user experience, performance, and scalability.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ App Store Rating: 4.8+ | ✓ Load Time: <2s | ✓ User Retention: 85%</div>
        </div>
        
        <div class="service-card">
          <div class="service-title">Data Analytics & BI</div>
          <p>Advanced analytics platforms for data-driven decision making and comprehensive business intelligence.</p>
          <div style="margin-top: 15px; font-weight: 600; color: #059669;">✓ Data Processing: TB/day | ✓ Insights Accuracy: 99% | ✓ Decision Speed: +300%</div>
        </div>
      </div>
    </div>

    <!-- Growth Timeline -->
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Growth Journey</h1>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <h3>2022 - Foundation & Vision</h3>
          <p style="margin-bottom: 20px; color: #64748b;">
            Company established with a mission to democratize enterprise technology and make cutting-edge solutions accessible to businesses of all sizes.
          </p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <div style="font-size: 1.5em; font-weight: 700; color: #1e293b;">5+</div>
              <div style="font-size: 0.8em; color: #64748b;">Projects</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <div style="font-size: 1.5em; font-weight: 700; color: #1e293b;">3+</div>
              <div style="font-size: 0.8em; color: #64748b;">Clients</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <div style="font-size: 1.5em; font-weight: 700; color: #1e293b;">2</div>
              <div style="font-size: 0.8em; color: #64748b;">Team</div>
            </div>
          </div>
          <ul style="color: #64748b;">
            <li>• Company established with core team of experts</li>
            <li>• First enterprise clients onboarded</li>
            <li>• Cloud migration services launched</li>
            <li>• Partnership with AWS and Azure established</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h3>2023 - Rapid Growth & Expansion</h3>
          <p style="margin-bottom: 20px; color: #64748b;">
            Scaled operations significantly, expanded service offerings, and established ourselves as a trusted technology partner in the market.
          </p>
          <ul style="color: #64748b;">
            <li>• AI/ML practice launched successfully</li>
            <li>• Cybersecurity solutions introduced</li>
            <li>• ISO 27001 certification achieved</li>
            <li>• Enterprise client base expanded</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h3>2024 - Innovation & Excellence</h3>
          <p style="margin-bottom: 20px; color: #64748b;">
            Focused on innovation, delivering advanced AI solutions, and achieving industry recognition for exceptional service quality.
          </p>
          <ul style="color: #64748b;">
            <li>• Advanced AI/ML solutions deployed</li>
            <li>• Digital transformation practice established</li>
            <li>• Industry awards for innovation received</li>
            <li>• Fortune 500 clients acquired</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h3>2025 - Global Leadership</h3>
          <p style="margin-bottom: 20px; color: #64748b;">
            Positioned as a global leader in enterprise technology solutions, driving digital transformation across industries worldwide.
          </p>
          <ul style="color: #64748b;">
            <li>• International expansion launched</li>
            <li>• Advanced automation platforms deployed</li>
            <li>• Strategic partnerships with major tech vendors</li>
            <li>• Industry thought leadership established</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Contact & Get Started -->
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Get Started Today</h1>
      </div>

      <div class="section">
        <h2>Why Choose Aptivon Solutions?</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px;">
          <div>
            <strong style="color: #1e293b;">Proven Results:</strong> 
            <span style="color: #64748b;">100% project success rate with measurable ROI for every client engagement.</span>
          </div>
          <div>
            <strong style="color: #1e293b;">Expert Team:</strong> 
            <span style="color: #64748b;">Industry-certified professionals with deep expertise across all major technologies.</span>
          </div>
          <div>
            <strong style="color: #1e293b;">Innovation Focus:</strong> 
            <span style="color: #64748b;">Cutting-edge solutions using the latest technologies and best practices.</span>
          </div>
          <div>
            <strong style="color: #1e293b;">24/7 Support:</strong> 
            <span style="color: #64748b;">Round-the-clock monitoring, support, and optimization services.</span>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2 style="margin-bottom: 20px;">Ready to Transform Your Business?</h2>
        <p style="font-size: 1.2em; margin-bottom: 30px; opacity: 0.9;">
          Contact us today for a free consultation and discover how we can help you achieve your technology goals.
        </p>
        
        <div class="contact-grid">
          <div class="contact-item">
            <h3 style="margin-bottom: 15px;">Direct Contact</h3>
            <div style="font-size: 1.1em;">📧 singhal3.sachin7@gmail.com</div>
            <div style="font-size: 1.1em; margin-top: 10px;">📞 +917852099010</div>
          </div>
          <div class="contact-item">
            <h3 style="margin-bottom: 15px;">Business Hours</h3>
            <div>Monday - Friday</div>
            <div>9:00 AM - 6:00 PM IST</div>
            <div style="margin-top: 10px; opacity: 0.8;">Same-day response guaranteed</div>
          </div>
          <div class="contact-item">
            <h3 style="margin-bottom: 15px;">Next Steps</h3>
            <div>1. Free consultation call</div>
            <div>2. Requirements analysis</div>
            <div>3. Custom proposal</div>
            <div>4. Project kickoff</div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 40px; padding: 30px; background: #f8fafc; border-radius: 12px;">
        <p style="color: #64748b; font-size: 0.9em;">
          <strong>Document Generated:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}<br>
          <strong>Document ID:</strong> APT-${request.id}-${currentYear} | <strong>Version:</strong> 1.0<br>
          <strong>© ${currentYear} Aptivon Solutions Pvt. Ltd.</strong> - All rights reserved. This document contains confidential and proprietary information.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return {
    document: htmlDocument,
    filename: `aptivon-solutions-company-profile-${currentYear}.html`,
    requestId: request.id
  };
}