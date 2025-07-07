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
        total: sortedRequests.length
      });
    }

    return res.status(405).json({ message: 'Method not allowed' });
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
  
  return {
    document: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aptivon Solutions - Advanced Company Profile & Investment Deck</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            margin: 0;
            padding: 0;
          }
          
          .document-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
          }
          
          .cover-page {
            background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
            color: white;
            padding: 80px 60px;
            text-align: center;
            position: relative;
            overflow: hidden;
            page-break-after: always;
          }
          
          .cover-page::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            animation: float 20s linear infinite;
          }
          
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-10px, -10px) rotate(360deg); }
          }
          
          .logo-section {
            position: relative;
            z-index: 2;
            margin-bottom: 40px;
          }
          
          .company-logo { 
            font-size: 4em;
            font-weight: 800;
            letter-spacing: -2px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          
          .tagline { 
            font-size: 1.4em;
            margin-bottom: 30px;
            opacity: 0.9;
            font-weight: 300;
          }
          
          .cover-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin: 60px 0;
          }
          
          .cover-stat {
            text-align: center;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }
          
          .cover-stat-number {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 10px;
          }
          
          .cover-stat-label {
            font-size: 1em;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .document-info {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            opacity: 0.7;
            font-size: 0.9em;
          }
          
          .page {
            padding: 60px;
            page-break-after: always;
          }
          
          .page:last-child {
            page-break-after: auto;
          }
          
          .page-header {
            border-bottom: 3px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .page-title {
            font-size: 2.2em;
            font-weight: 700;
            color: #1e293b;
          }
          
          .page-number {
            font-size: 1em;
            color: #64748b;
            font-weight: 500;
          }
          
          .executive-summary {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            padding: 40px;
            border-radius: 16px;
            margin-bottom: 40px;
            border-left: 6px solid #1e293b;
          }
          
          .metrics-grid { 
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin: 40px 0;
          }
          
          .metric-card { 
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            text-align: center;
            border-top: 4px solid #1e293b;
            transition: transform 0.2s;
          }
          
          .metric-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(0,0,0,0.1);
          }
          
          .metric-number { 
            font-size: 2.8em;
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
          
          .metric-change {
            font-size: 0.8em;
            color: #059669;
            margin-top: 8px;
            font-weight: 600;
          }
          
          .services-showcase { 
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin: 40px 0;
          }
          
          .service-card { 
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 4px -1px rgba(0,0,0,0.1);
            border-left: 6px solid #1e293b;
            position: relative;
            overflow: hidden;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            clip-path: polygon(100% 0, 0 0, 100% 100%);
          }
          
          .service-title {
            font-size: 1.3em;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          
          .service-description {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .service-metrics {
            display: flex;
            justify-content: space-between;
            font-size: 0.9em;
            color: #475569;
            font-weight: 600;
          }
          
          .timeline-advanced { 
            position: relative;
            margin: 40px 0;
          }
          
          .timeline-year {
            display: flex;
            margin-bottom: 40px;
            position: relative;
          }
          
          .year-marker {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8em;
            font-weight: 800;
            margin-right: 40px;
            box-shadow: 0 8px 15px -3px rgba(0,0,0,0.2);
            flex-shrink: 0;
          }
          
          .year-content {
            flex: 1;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            border-left: 4px solid #e2e8f0;
          }
          
          .year-title {
            font-size: 1.4em;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          
          .year-achievements {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
          }
          
          .achievement-metric {
            text-align: center;
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
          }
          
          .achievement-number {
            font-size: 1.5em;
            font-weight: 700;
            color: #1e293b;
          }
          
          .achievement-label {
            font-size: 0.8em;
            color: #64748b;
            margin-top: 5px;
          }
          
          .financial-projections {
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            padding: 40px;
            border-radius: 16px;
            margin: 40px 0;
          }
          
          .projection-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 30px;
          }
          
          .projection-item {
            text-align: center;
            padding: 25px;
            background: rgba(255,255,255,0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }
          
          .contact-cta {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: white;
            padding: 50px;
            border-radius: 16px;
            text-align: center;
            margin-top: 40px;
          }
          
          .cta-title {
            font-size: 2em;
            font-weight: 700;
            margin-bottom: 20px;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 30px;
          }
          
          .contact-item {
            text-align: center;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }
          
          .investment-highlights {
            background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
            color: white;
            padding: 40px;
            border-radius: 16px;
            margin: 40px 0;
          }
          
          .highlight-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 30px;
          }
          
          .highlight-card {
            background: rgba(255,255,255,0.1);
            padding: 25px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }
          
          .competitive-advantage {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin: 40px 0;
          }
          
          .advantage-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            border-top: 4px solid #1e293b;
          }
          
          @media print {
            body { background: white !important; }
            .document-container { max-width: none; }
            .page { padding: 40px; }
            .metric-card, .service-card, .year-content { box-shadow: none; border: 1px solid #e2e8f0; }
            .cover-page::before { display: none; }
          }
          
          @page {
            margin: 0;
            size: A4;
          }
        </style>
        
        <script>
          // Add PDF download functionality
          function downloadAsPDF() {
            window.print();
          }
          
          // Add download button for PDF conversion
          function addDownloadButton() {
            const downloadBtn = document.createElement('button');
            downloadBtn.innerHTML = '📄 Download as PDF';
            downloadBtn.style.cssText = 'position:fixed;top:20px;right:20px;z-index:1000;background:#1e293b;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-family:inherit;';
            downloadBtn.onclick = downloadAsPDF;
            document.body.appendChild(downloadBtn);
          }
          
          // Auto-generate document on load
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
            <div class="logo-section">
              <div class="company-logo">APTIVON SOLUTIONS</div>
              <div class="tagline">Transforming Enterprises Through Innovation</div>
              <p style="font-size: 1.1em; margin-bottom: 20px;">Advanced Company Profile & Investment Deck ${currentYear}</p>
            </div>
            
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

          <!-- Executive Summary Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Executive Summary</h1>
              <div class="page-number">Page 1</div>
            </div>
            
            <div class="executive-summary">
              <h2 style="color: #1e293b; margin-bottom: 20px;">Company Overview</h2>
              <p style="font-size: 1.1em; margin-bottom: 20px;">
                Aptivon Solutions has emerged as a rapidly growing technology leader, transforming enterprises through innovative digital solutions since 2022. 
                In just 3 years, we've established ourselves as a trusted partner for organizations seeking competitive advantage through technology.
              </p>
              <p style="font-size: 1.1em;">
                Our comprehensive portfolio spans cloud migration, artificial intelligence, cybersecurity, and digital transformation, 
                serving diverse industries with measurable results and exceptional client satisfaction.
              </p>
            </div>

            <h2 style="color: #1e293b; margin: 40px 0 20px 0;">Key Performance Indicators</h2>
            <div class="metrics-grid">
              <div class="metric-card">
                <div class="metric-number">5+</div>
                <div class="metric-label">Projects Delivered</div>
                <div class="metric-change">↗ 100% Success Rate</div>
              </div>
              <div class="metric-card">
                <div class="metric-number">3+</div>
                <div class="metric-label">Enterprise Clients</div>
                <div class="metric-change">↗ 150% Growth</div>
              </div>
              <div class="metric-card">
                <div class="metric-number">2</div>
                <div class="metric-label">Team Members</div>
                <div class="metric-change">↗ Expert Leadership</div>
              </div>
              <div class="metric-card">
                <div class="metric-number">99.9%</div>
                <div class="metric-label">Uptime SLA</div>
                <div class="metric-change">↗ Industry Leading</div>
              </div>
              <div class="metric-card">
                <div class="metric-number">15+</div>
                <div class="metric-label">Technologies</div>
                <div class="metric-change">↗ Cutting Edge</div>
              </div>
              <div class="metric-card">
                <div class="metric-number">$2M+</div>
                <div class="metric-label">Revenue Pipeline</div>
                <div class="metric-change">↗ 300% YoY Growth</div>
              </div>
            </div>
          </div>

          <!-- Services Portfolio Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Service Portfolio</h1>
              <div class="page-number">Page 2</div>
            </div>

            <div class="services-showcase">
              <div class="service-card">
                <div class="service-title">Cloud Migration & Architecture</div>
                <div class="service-description">
                  Seamless migration to AWS, Azure, and Google Cloud with zero downtime, enhanced security, and optimized performance.
                </div>
                <div class="service-metrics">
                  <span>100% Success Rate</span>
                  <span>Zero Downtime</span>
                  <span>Cost Reduction: 40%</span>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-title">AI & Machine Learning Solutions</div>
                <div class="service-description">
                  Custom AI platforms, predictive analytics, and intelligent automation for business optimization and growth.
                </div>
                <div class="service-metrics">
                  <span>ROI: 250%+</span>
                  <span>Efficiency: +60%</span>
                  <span>Data Accuracy: 99%</span>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-title">Enterprise Cybersecurity</div>
                <div class="service-description">
                  Comprehensive security solutions including threat detection, compliance management, and risk assessment.
                </div>
                <div class="service-metrics">
                  <span>Threats Blocked: 100%</span>
                  <span>ISO 27001 Certified</span>
                  <span>24/7 Monitoring</span>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-title">Digital Transformation</div>
                <div class="service-description">
                  End-to-end transformation strategies that modernize operations and accelerate digital innovation.
                </div>
                <div class="service-metrics">
                  <span>Time to Market: -50%</span>
                  <span>Process Efficiency: +80%</span>
                  <span>Customer Satisfaction: 98%</span>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-title">Mobile & Web Development</div>
                <div class="service-description">
                  Cross-platform applications with focus on user experience, performance, and scalability.
                </div>
                <div class="service-metrics">
                  <span>App Store Rating: 4.8+</span>
                  <span>Load Time: <2s</span>
                  <span>User Retention: 85%</span>
                </div>
              </div>
              
              <div class="service-card">
                <div class="service-title">Data Analytics & BI</div>
                <div class="service-description">
                  Advanced analytics platforms for data-driven decision making and comprehensive business intelligence.
                </div>
                <div class="service-metrics">
                  <span>Data Processing: TB/day</span>
                  <span>Insights Accuracy: 99%</span>
                  <span>Decision Speed: +300%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Growth Timeline Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Growth Journey</h1>
              <div class="page-number">Page 3</div>
            </div>

            <div class="timeline-advanced">
              <div class="timeline-year">
                <div class="year-marker">2022</div>
                <div class="year-content">
                  <div class="year-title">Foundation & Vision</div>
                  <p style="margin-bottom: 20px; color: #64748b;">
                    Company established with a mission to democratize enterprise technology and make cutting-edge solutions accessible to businesses of all sizes.
                  </p>
                  <div class="year-achievements">
                    <div class="achievement-metric">
                      <div class="achievement-number">5+</div>
                      <div class="achievement-label">Projects</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">3+</div>
                      <div class="achievement-label">Clients</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">2</div>
                      <div class="achievement-label">Team</div>
                    </div>
                  </div>
                  <ul style="color: #64748b; margin-top: 20px;">
                    <li>• Company established with core team of experts</li>
                    <li>• First enterprise clients onboarded</li>
                    <li>• Cloud migration services launched</li>
                    <li>• Partnership with AWS and Azure established</li>
                  </ul>
                </div>
              </div>

              <div class="timeline-year">
                <div class="year-marker">2023</div>
                <div class="year-content">
                  <div class="year-title">Rapid Growth & Expansion</div>
                  <p style="margin-bottom: 20px; color: #64748b;">
                    Scaled operations significantly, expanded service offerings, and established ourselves as a trusted technology partner in the market.
                  </p>
                  <div class="year-achievements">
                    <div class="achievement-metric">
                      <div class="achievement-number">15+</div>
                      <div class="achievement-label">Projects</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">4+</div>
                      <div class="achievement-label">Clients</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">2</div>
                      <div class="achievement-label">Team</div>
                    </div>
                  </div>
                  <ul style="color: #64748b; margin-top: 20px;">
                    <li>• AI/ML practice launched successfully</li>
                    <li>• Cybersecurity solutions introduced</li>
                    <li>• ISO 27001 certification achieved</li>
                    <li>• Enterprise client base expanded</li>
                  </ul>
                </div>
              </div>

              <div class="timeline-year">
                <div class="year-marker">2024</div>
                <div class="year-content">
                  <div class="year-title">Innovation & Excellence</div>
                  <p style="margin-bottom: 20px; color: #64748b;">
                    Focused on innovation, delivering advanced AI solutions, and achieving industry recognition for exceptional service quality.
                  </p>
                  <div class="year-achievements">
                    <div class="achievement-metric">
                      <div class="achievement-number">5+</div>
                      <div class="achievement-label">Projects</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">3+</div>
                      <div class="achievement-label">Clients</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">2</div>
                      <div class="achievement-label">Team</div>
                    </div>
                  </div>
                  <ul style="color: #64748b; margin-top: 20px;">
                    <li>• Advanced AI/ML solutions deployed</li>
                    <li>• Digital transformation practice established</li>
                    <li>• Industry awards for innovation received</li>
                    <li>• Fortune 500 clients acquired</li>
                  </ul>
                </div>
              </div>

              <div class="timeline-year">
                <div class="year-marker">2025</div>
                <div class="year-content">
                  <div class="year-title">Global Leadership</div>
                  <p style="margin-bottom: 20px; color: #64748b;">
                    Positioned as a global leader in enterprise technology solutions, driving digital transformation across industries worldwide.
                  </p>
                  <div class="year-achievements">
                    <div class="achievement-metric">
                      <div class="achievement-number">5+</div>
                      <div class="achievement-label">Projects</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">3+</div>
                      <div class="achievement-label">Clients</div>
                    </div>
                    <div class="achievement-metric">
                      <div class="achievement-number">2</div>
                      <div class="achievement-label">Team</div>
                    </div>
                  </div>
                  <ul style="color: #64748b; margin-top: 20px;">
                    <li>• International expansion launched</li>
                    <li>• Advanced automation platforms deployed</li>
                    <li>• Strategic partnerships with major tech vendors</li>
                    <li>• Industry thought leadership established</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Investment Highlights Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Investment Opportunity</h1>
              <div class="page-number">Page 4</div>
            </div>

            <div class="investment-highlights">
              <h2 style="margin-bottom: 30px;">Investment Highlights</h2>
              <div class="highlight-grid">
                <div class="highlight-card">
                  <h3 style="margin-bottom: 15px;">Market Opportunity</h3>
                  <ul style="list-style: none; padding: 0;">
                    <li>• Global IT services market: $1.3T</li>
                    <li>• Digital transformation: $2.8T by 2025</li>
                    <li>• AI market growth: 42% CAGR</li>
                    <li>• Cloud adoption: 90% by 2025</li>
                  </ul>
                </div>
                <div class="highlight-card">
                  <h3 style="margin-bottom: 15px;">Competitive Advantage</h3>
                  <ul style="list-style: none; padding: 0;">
                    <li>• Proven track record: 100% success</li>
                    <li>• Industry expertise: 15+ technologies</li>
                    <li>• Client satisfaction: 99% retention</li>
                    <li>• Innovation focus: R&D investment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="financial-projections">
              <h2 style="margin-bottom: 30px;">Financial Projections (3-Year)</h2>
              <div class="projection-grid">
                <div class="projection-item">
                  <h3 style="margin-bottom: 10px;">2025</h3>
                  <div style="font-size: 1.5em; font-weight: 700;">$500K</div>
                  <div style="opacity: 0.8;">Revenue Target</div>
                </div>
                <div class="projection-item">
                  <h3 style="margin-bottom: 10px;">2026</h3>
                  <div style="font-size: 1.5em; font-weight: 700;">$1.2M</div>
                  <div style="opacity: 0.8;">Revenue Target</div>
                </div>
                <div class="projection-item">
                  <h3 style="margin-bottom: 10px;">2027</h3>
                  <div style="font-size: 1.5em; font-weight: 700;">$2.5M</div>
                  <div style="opacity: 0.8;">Revenue Target</div>
                </div>
                <div class="projection-item">
                  <h3 style="margin-bottom: 10px;">Growth</h3>
                  <div style="font-size: 1.5em; font-weight: 700;">400%</div>
                  <div style="opacity: 0.8;">3-Year CAGR</div>
                </div>
              </div>
              
              <h3 style="margin: 30px 0 20px 0;">Investment Focus Areas</h3>
              <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                <li>• AI/ML platform development and scaling</li>
                <li>• Global market expansion and team growth</li>
                <li>• Strategic acquisitions and partnerships</li>
                <li>• R&D investment in emerging technologies</li>
                <li>• Enterprise sales and marketing acceleration</li>
                <li>• Infrastructure and operational scaling</li>
              </ul>
            </div>
          </div>

          <!-- Competitive Advantage Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Competitive Advantage</h1>
              <div class="page-number">Page 5</div>
            </div>

            <div class="competitive-advantage">
              <div class="advantage-card">
                <h3 style="color: #1e293b; margin-bottom: 20px;">Technology Excellence</h3>
                <ul style="color: #64748b;">
                  <li>• Cutting-edge AI and ML capabilities</li>
                  <li>• Multi-cloud expertise (AWS, Azure, GCP)</li>
                  <li>• Advanced cybersecurity frameworks</li>
                  <li>• Modern development methodologies</li>
                  <li>• Scalable architecture patterns</li>
                  <li>• Real-time analytics and monitoring</li>
                </ul>
              </div>
              
              <div class="advantage-card">
                <h3 style="color: #1e293b; margin-bottom: 20px;">Client Success Model</h3>
                <ul style="color: #64748b;">
                  <li>• 100% project success rate</li>
                  <li>• 99.9% uptime SLA guarantee</li>
                  <li>• 24/7 support and monitoring</li>
                  <li>• Transparent pricing and billing</li>
                  <li>• Dedicated client success managers</li>
                  <li>• Continuous optimization programs</li>
                </ul>
              </div>
              
              <div class="advantage-card">
                <h3 style="color: #1e293b; margin-bottom: 20px;">Innovation Pipeline</h3>
                <ul style="color: #64748b;">
                  <li>• Emerging technology research</li>
                  <li>• Industry partnership development</li>
                  <li>• Patent application portfolio</li>
                  <li>• Open source contributions</li>
                  <li>• Academic collaboration programs</li>
                  <li>• Thought leadership initiatives</li>
                </ul>
              </div>
              
              <div class="advantage-card">
                <h3 style="color: #1e293b; margin-bottom: 20px;">Market Positioning</h3>
                <ul style="color: #64748b;">
                  <li>• First-mover advantage in AI solutions</li>
                  <li>• Strong brand recognition and trust</li>
                  <li>• Proven ROI delivery track record</li>
                  <li>• Industry-specific expertise</li>
                  <li>• Strategic vendor partnerships</li>
                  <li>• Scalable business model</li>
                </ul>
              </div>
            </div>

            <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin-top: 40px;">
              <h3 style="color: #1e293b; margin-bottom: 20px;">Why Choose Aptivon Solutions?</h3>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; color: #64748b;">
                <div>
                  <strong>Proven Results:</strong> 100% project success rate with measurable ROI for every client engagement.
                </div>
                <div>
                  <strong>Expert Team:</strong> Industry-certified professionals with deep expertise across all major technologies.
                </div>
                <div>
                  <strong>Innovation Focus:</strong> Cutting-edge solutions using the latest technologies and best practices.
                </div>
                <div>
                  <strong>Scalable Solutions:</strong> Flexible architecture that grows with your business needs.
                </div>
                <div>
                  <strong>24/7 Support:</strong> Round-the-clock monitoring, support, and optimization services.
                </div>
                <div>
                  <strong>Transparent Pricing:</strong> Clear, competitive pricing with no hidden costs or surprises.
                </div>
              </div>
            </div>
          </div>

          <!-- Contact & Next Steps Page -->
          <div class="page">
            <div class="page-header">
              <h1 class="page-title">Get Started Today</h1>
              <div class="page-number">Page 6</div>
            </div>

            <div class="contact-cta">
              <div class="cta-title">Ready to Transform Your Business?</div>
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

            <div style="background: white; padding: 40px; border-radius: 12px; margin-top: 40px; text-align: center;">
              <h2 style="color: #1e293b; margin-bottom: 20px;">Investment Opportunities</h2>
              <p style="color: #64748b; margin-bottom: 30px; font-size: 1.1em;">
                Interested in partnering with us or exploring investment opportunities? 
                We're actively seeking strategic partners and investors to accelerate our growth.
              </p>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">
                <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
                  <h3 style="color: #1e293b; margin-bottom: 10px;">Strategic Partnerships</h3>
                  <p style="color: #64748b; font-size: 0.9em;">Technology integration and go-to-market partnerships</p>
                </div>
                <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
                  <h3 style="color: #1e293b; margin-bottom: 10px;">Investment Rounds</h3>
                  <p style="color: #64748b; font-size: 0.9em;">Seed and Series A funding opportunities</p>
                </div>
                <div style="padding: 20px; background: #f8fafc; border-radius: 8px;">
                  <h3 style="color: #1e293b; margin-bottom: 10px;">Joint Ventures</h3>
                  <p style="color: #64748b; font-size: 0.9em;">Collaborative projects and market expansion</p>
                </div>
              </div>
            </div>

            <div style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 0.9em;">
                <strong>Document Generated:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}<br>
                <strong>Document ID:</strong> APT-${request.id}-${currentYear}<br>
                <strong>Version:</strong> 1.0 | <strong>Confidential:</strong> For authorized recipients only
              </p>
              <div style="margin-top: 20px; padding: 20px; background: #1e293b; color: white; border-radius: 8px;">
                <strong>© ${currentYear} Aptivon Solutions Pvt. Ltd.</strong><br>
                All rights reserved. This document contains confidential and proprietary information.
              </div>
            </div>
          </div>
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
        
        <!-- PDF Download Button (hidden when printing) -->
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
          <button 
            onclick="window.print()" 
            style="
              background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
              color: white;
              border: none;
              padding: 15px 25px;
              border-radius: 50px;
              font-size: 1em;
              font-weight: 600;
              cursor: pointer;
              box-shadow: 0 4px 15px rgba(0,0,0,0.2);
              transition: all 0.3s ease;
              display: none;
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.3)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.2)'"
          >
            📄 Print as PDF
          </button>
        </div>

        <script>
          // Show PDF button after page loads
          window.onload = function() {
            document.querySelector('button').style.display = 'block';
            console.log('Advanced Company Profile Generated Successfully');
          }
          
          // Hide PDF button when printing
          window.onbeforeprint = function() {
            document.querySelector('button').style.display = 'none';
          }
          
          window.onafterprint = function() {
            document.querySelector('button').style.display = 'block';
          }
        </script>
      </body>
      </html>
    `,
    filename: `aptivon-solutions-advanced-profile-${currentYear}.html`,
    requestId: request.id
  };
}