import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { getStaticPortfolioProjects, getStaticCollegeProjects, getStaticProjectBySlug } from '../shared/static-data';

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