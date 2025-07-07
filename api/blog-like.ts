import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { z } from 'zod';

const bodySchema = z.object({
  postId: z.number(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const validationResult = bodySchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: 'Invalid data', 
          details: validationResult.error.issues 
        });
      }

      const { postId } = validationResult.data;
      await storage.likeBlogPost(postId);
      
      return res.status(200).json({ success: true });
    }

    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog like API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}