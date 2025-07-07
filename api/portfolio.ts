import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

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

// In-memory storage
let portfolioProjects: any[] = [
  {
    id: 1,
    title: 'E-commerce Platform Modernization',
    slug: 'ecommerce-platform-modernization',
    description: 'Complete digital transformation of legacy e-commerce system',
    industry: 'Retail',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    featured: true,
    coverImage: '/api/placeholder/800/600',
    views: 1234,
    likes: 89,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    slug: 'healthcare-management-system',
    description: 'Comprehensive patient management and scheduling system',
    industry: 'Healthcare',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    featured: true,
    coverImage: '/api/placeholder/800/600',
    views: 987,
    likes: 67,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];

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
  const { action, slug } = req.query;

  switch (action) {
    case 'projects':
      return res.json(portfolioProjects);
    
    case 'project':
      if (!slug) {
        return res.status(400).json({ error: 'Slug is required' });
      }
      const project = portfolioProjects.find(p => p.slug === slug);
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
        const project = portfolioProjects.find(p => p.id === parseInt(projectId));
        if (!project) {
          return res.status(404).json({ error: 'Project not found' });
        }
        project.likes += 1;
        return res.json({ likes: project.likes });
      } catch (error) {
        return res.status(400).json({ error: 'Invalid request' });
      }
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}