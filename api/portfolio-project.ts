import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const { slug } = req.query;
      
      if (!slug || typeof slug !== 'string') {
        return res.status(400).json({ error: 'Project slug is required' });
      }

      const project = await storage.getPortfolioProject(slug);
      
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      // Increment views when project is accessed
      await storage.incrementPortfolioViews(project.id);

      res.status(200).json(project);
    } catch (error) {
      console.error('Error fetching portfolio project:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}