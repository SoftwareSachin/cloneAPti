import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertBlogSubscriberSchema } from '../shared/schema';
import { z } from 'zod';

const unsubscribeSchema = z.object({
  email: z.string().email(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const validationResult = insertBlogSubscriberSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: 'Invalid subscriber data', 
          details: validationResult.error.issues 
        });
      }

      const subscriber = await storage.createBlogSubscriber(validationResult.data);
      return res.status(201).json(subscriber);
    }

    if (req.method === 'DELETE') {
      const validationResult = unsubscribeSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: 'Invalid email', 
          details: validationResult.error.issues 
        });
      }

      const { email } = validationResult.data;
      await storage.unsubscribeBlogSubscriber(email);
      
      return res.status(200).json({ success: true });
    }

    res.setHeader('Allow', ['POST', 'DELETE']);
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Blog subscribe API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}