import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const aboutInquirySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  inquiry_type: z.enum(['general', 'partnership', 'career', 'investment']).default('general'),
  source: z.string().default('about-page')
});

type AboutInquiry = z.infer<typeof aboutInquirySchema>;

// In-memory storage for demonstration
let aboutInquiries: (AboutInquiry & { id: number; createdAt: Date })[] = [];
let inquiryId = 1;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      const validationResult = aboutInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: validationResult.error.errors
        });
      }

      const inquiryData = validationResult.data;
      const newInquiry = {
        id: inquiryId++,
        ...inquiryData,
        createdAt: new Date()
      };

      aboutInquiries.push(newInquiry);

      console.log('New about page inquiry received:', {
        id: newInquiry.id,
        name: `${newInquiry.firstName} ${newInquiry.lastName}`,
        email: newInquiry.email,
        company: newInquiry.company,
        type: newInquiry.inquiry_type,
        timestamp: newInquiry.createdAt.toISOString()
      });

      return res.status(201).json({
        message: 'About inquiry submitted successfully',
        inquiry: newInquiry
      });
    }

    if (req.method === 'GET') {
      const sortedInquiries = aboutInquiries.sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      );

      return res.status(200).json({
        inquiries: sortedInquiries,
        total: sortedInquiries.length
      });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error: any) {
    console.error('About inquiry API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}