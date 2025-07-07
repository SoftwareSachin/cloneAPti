import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertBlogPostSchema } from '../shared/schema';
import { z } from 'zod';

const querySchema = z.object({
  category: z.string().optional(),
  featured: z.string().optional(),
  limit: z.string().optional(),
  offset: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { category, featured, limit, offset } = querySchema.parse(req.query);
      
      const params = {
        category,
        featured: featured ? featured === 'true' : undefined,
        limit: limit ? parseInt(limit) : undefined,
        offset: offset ? parseInt(offset) : undefined,
      };

      const posts = await storage.getBlogPosts(params);
      return res.status(200).json(posts);
    }

    if (req.method === 'POST') {
      const validationResult = insertBlogPostSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: 'Invalid blog post data', 
          details: validationResult.error.issues 
        });
      }

      const post = await storage.createBlogPost(validationResult.data);
      return res.status(201).json(post);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog posts API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}