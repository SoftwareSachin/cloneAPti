import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertBlogCommentSchema } from '../shared/schema';
import { z } from 'zod';

const querySchema = z.object({
  postId: z.string(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { postId } = querySchema.parse(req.query);
      
      const comments = await storage.getBlogComments(parseInt(postId));
      return res.status(200).json(comments);
    }

    if (req.method === 'POST') {
      const validationResult = insertBlogCommentSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: 'Invalid comment data', 
          details: validationResult.error.issues 
        });
      }

      const comment = await storage.createBlogComment(validationResult.data);
      return res.status(201).json(comment);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog comments API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}