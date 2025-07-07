import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;
  const { action, q } = req.query;

  try {
    switch (method) {
      case 'GET':
        return handleGet(req, res);
      case 'POST':
        return handlePost(req, res);
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Search API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { action, q } = req.query;

  switch (action) {
    case 'support':
      // Search support articles
      const supportQuery = (q as string || '').toLowerCase();
      const supportResults = [
        {
          id: 1,
          title: 'Getting Started with Our Services',
          content: 'Learn how to begin your project with Aptivon Solutions',
          category: 'General',
          relevance: supportQuery.includes('start') || supportQuery.includes('begin') ? 0.9 : 0.5
        },
        {
          id: 2,
          title: 'Technical Support Guidelines',
          content: 'How to get technical assistance for your project',
          category: 'Technical',
          relevance: supportQuery.includes('technical') || supportQuery.includes('help') ? 0.9 : 0.5
        },
        {
          id: 3,
          title: 'Billing and Payment Information',
          content: 'Understanding our pricing and payment processes',
          category: 'Billing',
          relevance: supportQuery.includes('billing') || supportQuery.includes('payment') ? 0.9 : 0.5
        }
      ].sort((a, b) => b.relevance - a.relevance);
      
      return res.json(supportResults);
    
    case 'general':
      // General search across all content
      const generalQuery = (q as string || '').toLowerCase();
      const generalResults = [
        {
          type: 'service',
          title: 'Web Development Services',
          description: 'Custom web applications and responsive websites',
          url: '/services#web-development',
          relevance: generalQuery.includes('web') || generalQuery.includes('website') ? 0.9 : 0.3
        },
        {
          type: 'service',
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications',
          url: '/services#mobile-development',
          relevance: generalQuery.includes('mobile') || generalQuery.includes('app') ? 0.9 : 0.3
        },
        {
          type: 'page',
          title: 'About Us',
          description: 'Learn more about Aptivon Solutions',
          url: '/about',
          relevance: generalQuery.includes('about') || generalQuery.includes('company') ? 0.9 : 0.3
        },
        {
          type: 'page',
          title: 'Contact Us',
          description: 'Get in touch with our team',
          url: '/contact',
          relevance: generalQuery.includes('contact') || generalQuery.includes('reach') ? 0.9 : 0.3
        }
      ].sort((a, b) => b.relevance - a.relevance);
      
      return res.json(generalResults);
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'log':
      // Log search queries for analytics
      const { query, results, timestamp } = req.body;
      console.log('Search query logged:', {
        query,
        resultsCount: results?.length || 0,
        timestamp: timestamp || new Date().toISOString()
      });
      
      return res.status(200).json({ success: true });
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}