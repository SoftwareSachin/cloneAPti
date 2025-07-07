import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Solution inquiry schema
const solutionInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  solutionType: z.string().min(1, "Please select a solution type"),
  projectDescription: z.string().min(10, "Please provide more details about your project"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  currentChallenges: z.string().optional()
});

// Solution consultation schema
const consultationRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  solutionType: z.string().min(1, "Please select a solution type"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional()
});

type SolutionInquiry = z.infer<typeof solutionInquirySchema>;
type ConsultationRequest = z.infer<typeof consultationRequestSchema>;

// Mock database for solution inquiries
let solutionInquiries: (SolutionInquiry & { id: number; createdAt: Date })[] = [];
let consultationRequests: (ConsultationRequest & { id: number; createdAt: Date })[] = [];
let inquiryId = 1;
let consultationId = 1;

// Solutions data
const SOLUTIONS_DATA = [
  {
    id: "cloud-migration",
    title: "Cloud Migration & Management",
    description: "Seamlessly migrate your infrastructure to cloud platforms with zero downtime and optimized costs.",
    features: ["AWS/Azure/GCP Migration", "Cloud Architecture Design", "Cost Optimization", "24/7 Monitoring"],
    benefits: "Reduce infrastructure costs by up to 40% while improving scalability and reliability.",
    category: "Infrastructure",
    pricing: "Starting from $15,000",
    timeline: "6-12 weeks",
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Comprehensive security frameworks to protect your business from evolving cyber threats.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    benefits: "Achieve 99.9% threat detection rate with enterprise-grade security protocols.",
    category: "Security",
    pricing: "Starting from $12,000",
    timeline: "4-8 weeks",
    technologies: ["SIEM", "IAM", "VPN", "Firewall", "Encryption", "Compliance Tools"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable business insights with advanced analytics platforms.",
    features: ["Data Warehousing", "Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
    benefits: "Increase decision-making speed by 60% with real-time data visualization.",
    category: "Analytics",
    pricing: "Starting from $20,000",
    timeline: "8-16 weeks",
    technologies: ["Tableau", "Power BI", "Snowflake", "Apache Spark", "Python", "R"]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS/Android Development", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"],
    benefits: "Launch mobile apps 50% faster with our proven development methodology.",
    category: "Development",
    pricing: "Starting from $25,000",
    timeline: "12-20 weeks",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Implement intelligent automation and predictive analytics to transform your business operations.",
    features: ["ML Model Development", "Natural Language Processing", "Computer Vision", "Process Automation"],
    benefits: "Automate 70% of repetitive tasks while improving accuracy and efficiency.",
    category: "AI/ML",
    pricing: "Starting from $30,000",
    timeline: "16-24 weeks",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "MLflow", "Kubernetes"]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes and technology.",
    features: ["Process Digitization", "Legacy System Modernization", "API Integration", "Change Management"],
    benefits: "Achieve 3x faster business processes with complete digital transformation.",
    category: "Transformation",
    pricing: "Starting from $50,000",
    timeline: "20-32 weeks",
    technologies: ["Microservices", "API Gateway", "DevOps", "Agile", "Lean", "Design Thinking"]
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const { type, category, search } = req.query;

      if (type === 'solutions') {
        let filteredSolutions = SOLUTIONS_DATA;
        
        if (category && category !== 'all') {
          filteredSolutions = filteredSolutions.filter(
            solution => solution.category.toLowerCase() === (category as string).toLowerCase()
          );
        }
        
        if (search) {
          const searchTerm = (search as string).toLowerCase();
          filteredSolutions = filteredSolutions.filter(
            solution => 
              solution.title.toLowerCase().includes(searchTerm) ||
              solution.description.toLowerCase().includes(searchTerm) ||
              solution.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
          );
        }

        return res.status(200).json({
          success: true,
          solutions: filteredSolutions,
          total: filteredSolutions.length
        });
      }

      if (type === 'inquiries') {
        return res.status(200).json({
          success: true,
          inquiries: solutionInquiries,
          total: solutionInquiries.length
        });
      }

      if (type === 'consultations') {
        return res.status(200).json({
          success: true,
          consultations: consultationRequests,
          total: consultationRequests.length
        });
      }

      // Default: return all solutions
      return res.status(200).json({
        success: true,
        solutions: SOLUTIONS_DATA,
        total: SOLUTIONS_DATA.length
      });
    }

    if (req.method === 'POST') {
      const { type } = req.query;

      if (type === 'inquiry') {
        const validationResult = solutionInquirySchema.safeParse(req.body);
        
        if (!validationResult.success) {
          return res.status(400).json({
            success: false,
            message: "Invalid data provided",
            errors: validationResult.error.flatten().fieldErrors
          });
        }

        const inquiry: SolutionInquiry & { id: number; createdAt: Date } = {
          ...validationResult.data,
          id: inquiryId++,
          createdAt: new Date()
        };

        solutionInquiries.push(inquiry);

        // In a real app, you would send email notifications here
        console.log('New solution inquiry received:', inquiry);

        return res.status(201).json({
          success: true,
          message: "Solution inquiry submitted successfully! Our team will contact you within 24 hours.",
          inquiryId: inquiry.id
        });
      }

      if (type === 'consultation') {
        const validationResult = consultationRequestSchema.safeParse(req.body);
        
        if (!validationResult.success) {
          return res.status(400).json({
            success: false,
            message: "Invalid data provided",
            errors: validationResult.error.flatten().fieldErrors
          });
        }

        const consultation: ConsultationRequest & { id: number; createdAt: Date } = {
          ...validationResult.data,
          id: consultationId++,
          createdAt: new Date()
        };

        consultationRequests.push(consultation);

        // In a real app, you would send email notifications and calendar invites here
        console.log('New consultation request received:', consultation);

        return res.status(201).json({
          success: true,
          message: "Consultation scheduled successfully! We'll send you a calendar invite shortly.",
          consultationId: consultation.id
        });
      }

      return res.status(400).json({
        success: false,
        message: "Invalid request type"
      });
    }

    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });

  } catch (error) {
    console.error('Solutions API error:', error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}