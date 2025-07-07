import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const { projectId } = req.body;
      
      if (!projectId || typeof projectId !== 'number') {
        return res.status(400).json({ error: 'Project ID is required' });
      }

      await storage.likePortfolioProject(projectId);
      
      res.status(200).json({ message: 'Project liked successfully' });
    } catch (error) {
      console.error('Error liking portfolio project:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}