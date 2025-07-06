import { VercelRequest, VercelResponse } from '@vercel/node';
import { contacts } from '../shared/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { desc } from 'drizzle-orm';

// Initialize database connection
const sql = neon(process.env.DATABASE_URL || '');
const db = drizzle(sql);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const contactsList = await db.select().from(contacts).orderBy(desc(contacts.createdAt));
    res.json(contactsList);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}