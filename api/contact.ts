import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(contactData);
    
    console.log("New contact submission:", contact);
    
    res.status(201).json({ 
      message: "Contact form submitted successfully",
      contact 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        message: "Invalid form data",
        errors: error.errors 
      });
    } else {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  }
}