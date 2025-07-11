import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

// Static data defined directly in the serverless function for Vercel compatibility
const staticCollegeProjects = [
  {
    id: 1,
    title: "Azure Hub-and-Spoke Network Automation Platform",
    slug: "azure-hub-spoke-network-automation-platform",
    client: "SKIT college student",
    industry: "Cloud Infrastructure",
    description: "Turnkey web-based network management platform for Azure hub-and-spoke architectures with comprehensive automation, monitoring, and security management capabilities.",
    image: "/api/placeholder/800/600",
    screenshots: [
      "dashboard-overview_1752170711656.png",
      "network-topology_1752170742561.png",
      "provision-spoke_1752170752568.png",
      "network-monitoring_1752170733521.png",
      "security-policies_1752170762246.png",
      "network-health_1752170721168.png",
      "compliance-audit_1752170702133.png"
    ],
    technologies: [
      "React",
      "TypeScript", 
      "Node.js",
      "Azure Functions",
      "ARM Templates",
      "Terraform",
      "Azure Resource Manager",
      "Azure Policy",
      "Azure Monitor",
      "Azure Security Center"
    ],
    results: [
      "95% reduction in network provisioning time",
      "Automated compliance monitoring with 99.9% uptime",
      "Real-time network health monitoring across 100+ resources",
      "Zero-downtime deployments with automated rollback capabilities",
      "Comprehensive security policy enforcement across all network segments"
    ],
    challenges: "Managing complex Azure hub-and-spoke network architectures required manual configuration, monitoring, and compliance tracking across multiple subscriptions and resource groups.",
    solution: "Developed a comprehensive web-based automation platform that provides infrastructure-as-code deployment, real-time monitoring, automated compliance reporting, and centralized security policy management for Azure hub-and-spoke networks.",
    featured: true,
    published: true,
    views: 245,
    likes: 18,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

const staticPortfolioProjects = [
  {
    id: 1,
    title: "E-commerce Platform Modernization",
    slug: "global-ecommerce-platform-modernization",
    client: "Fortune 500 Retail Company",
    industry: "E-commerce & Retail",
    description: "Complete modernization of legacy e-commerce platform handling 2M+ daily transactions with microservices architecture.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Kubernetes"],
    results: [
      "60% improvement in page load times",
      "99.9% uptime achievement",
      "40% increase in conversion rates",
      "Supported 300% traffic growth during peak season"
    ],
    challenges: "Legacy system migration, zero-downtime deployment, peak traffic handling",
    solution: "Microservices architecture with event-driven design and comprehensive monitoring",
    featured: true,
    published: true,
    views: 1250,
    likes: 89,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: "Healthcare Management System",
    slug: "healthcare-data-analytics-platform",
    client: "Leading Healthcare Provider",
    industry: "Healthcare & Life Sciences",
    description: "HIPAA-compliant data analytics platform processing 500TB+ healthcare data for predictive analytics and reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Apache Spark", "MongoDB", "Tableau", "AWS", "TensorFlow"],
    results: [
      "75% faster data processing",
      "HIPAA compliance achieved",
      "Predictive models with 95% accuracy",
      "Real-time analytics for 100+ hospitals"
    ],
    challenges: "HIPAA compliance, real-time processing, data security, scalability",
    solution: "Event-driven architecture with comprehensive security and audit frameworks",
    featured: true,
    published: true,
    views: 980,
    likes: 72,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: 3,
    title: "Financial Analytics Platform",
    slug: "financial-risk-management-system",
    client: "Global Investment Bank",
    industry: "Banking & Finance",
    description: "Real-time risk assessment system processing millions of transactions with advanced fraud detection capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Apache Kafka", "Elasticsearch", "React", "PostgreSQL", "Machine Learning"],
    results: [
      "99.7% fraud detection accuracy",
      "Sub-millisecond transaction processing",
      "50% reduction in false positives",
      "Regulatory compliance achieved"
    ],
    challenges: "Real-time processing, regulatory compliance, fraud detection accuracy",
    solution: "Event-driven architecture with comprehensive security and audit frameworks",
    featured: false,
    published: true,
    views: 756,
    likes: 54,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: 4,
    title: "Digital Banking Platform",
    slug: "digital-banking-platform",
    client: "Regional Bank",
    industry: "Banking & Finance",
    description: "Modern digital banking platform with mobile-first design and advanced security features.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    results: [
      "200% increase in mobile transactions",
      "40% reduction in customer service calls",
      "99.99% uptime achievement",
      "PCI DSS compliance achieved"
    ],
    challenges: "Legacy system integration, regulatory compliance, mobile security",
    solution: "Microservices architecture with advanced security and mobile-first design",
    featured: true,
    published: true,
    views: 1150,
    likes: 91,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 5,
    title: "Smart Manufacturing IoT Platform",
    slug: "smart-manufacturing-iot-platform",
    client: "Manufacturing Corporation",
    industry: "Manufacturing & Industrial",
    description: "Industrial IoT platform for predictive maintenance and supply chain optimization across multiple facilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "InfluxDB", "Azure IoT", "Power BI", "React", "Python"],
    results: [
      "35% reduction in equipment downtime",
      "50% improvement in supply chain efficiency",
      "Real-time monitoring of 1,000+ sensors",
      "$2M+ cost savings through predictive maintenance"
    ],
    challenges: "Industrial protocol integration, edge computing, real-time analytics at scale",
    solution: "Edge-to-cloud architecture with AI-powered predictive analytics",
    featured: false,
    published: true,
    views: 890,
    likes: 63,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
];

function getStaticCollegeProjects() {
  return staticCollegeProjects;
}

function getStaticPortfolioProjects() {
  return staticPortfolioProjects;
}

function getStaticProjectBySlug(slug: string) {
  const allProjects = [...staticCollegeProjects, ...staticPortfolioProjects];
  return allProjects.find(project => project.slug === slug);
}

// Portfolio schemas
const portfolioInquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().min(1, 'Phone number is required'),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().min(1, 'Budget is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  description: z.string().min(1, 'Project description is required'),
  similarProject: z.string().optional()
});

// Static data is now imported from shared/static-data.ts

let portfolioInquiries: any[] = [];

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
    console.error('Portfolio API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { action, slug, type } = req.query;

  switch (action) {
    case 'projects':
      // Check if requesting college projects or portfolio projects
      if (type === 'college') {
        return res.json(getStaticCollegeProjects());
      } else {
        return res.json(getStaticPortfolioProjects());
      }
    
    case 'project':
      if (!slug) {
        return res.status(400).json({ error: 'Slug is required' });
      }
      const project = getStaticProjectBySlug(slug as string);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      return res.json(project);
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'inquiry':
      try {
        const inquiryData = portfolioInquirySchema.parse(req.body);
        const inquiry = {
          id: portfolioInquiries.length + 1,
          ...inquiryData,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        portfolioInquiries.push(inquiry);
        return res.status(201).json(inquiry);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'like':
      try {
        const { projectId } = req.body;
        // Simple like response for demo purposes
        return res.json({ likes: 15, success: true });
      } catch (error) {
        return res.status(400).json({ error: 'Invalid request' });
      }
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}