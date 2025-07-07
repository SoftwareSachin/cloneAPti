import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { z } from 'zod';

const querySchema = z.object({
  slug: z.string(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { slug } = querySchema.parse(req.query);
      
      const post = await storage.getBlogPost(slug);
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      // Increment view count
      await storage.incrementBlogViews(post.id);
      
      return res.status(200).json(post);
    }

    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog post API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}