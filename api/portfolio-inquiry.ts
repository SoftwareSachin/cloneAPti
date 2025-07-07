import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertPortfolioInquirySchema } from '../shared/schema';
import { fromZodError } from 'zod-validation-error';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const validationResult = insertPortfolioInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: 'Invalid request data', 
          details: validationError.message 
        });
      }

      const inquiry = await storage.createPortfolioInquiry(validationResult.data);
      
      res.status(201).json(inquiry);
    } catch (error) {
      console.error('Error creating portfolio inquiry:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}