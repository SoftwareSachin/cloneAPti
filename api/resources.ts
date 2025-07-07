import { VercelRequest, VercelResponse } from '@vercel/node';

// Resources data
const resources = {
  whitepapers: [
    {
      id: 1,
      title: 'Digital Transformation in Enterprise',
      description: 'A comprehensive guide to modernizing business processes',
      category: 'Digital Transformation',
      downloadUrl: '/resources/digital-transformation-guide.pdf',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Essential strategies for successful cloud adoption',
      category: 'Cloud Computing',
      downloadUrl: '/resources/cloud-migration-best-practices.pdf',
      featured: false
    }
  ],
  webinars: [
    {
      id: 1,
      title: 'AI in Business: Practical Applications',
      description: 'Exploring real-world AI implementations',
      date: '2024-02-15',
      duration: '60 minutes',
      registrationUrl: '/webinar/ai-business-applications',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity for SMEs',
      description: 'Essential security measures for small businesses',
      date: '2024-02-20',
      duration: '45 minutes',
      registrationUrl: '/webinar/cybersecurity-smes',
      featured: false
    }
  ],
  caseStudies: [
    {
      id: 1,
      title: 'E-commerce Platform Modernization',
      description: 'How we helped a retail company increase online sales by 300%',
      industry: 'Retail',
      results: '300% increase in online sales',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare System Integration',
      description: 'Streamlining patient data management for a hospital network',
      industry: 'Healthcare',
      results: '40% reduction in processing time',
      featured: false
    }
  ]
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;
  const { action, type } = req.query;

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
    console.error('Resources API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { action, type } = req.query;

  switch (action) {
    case 'list':
      if (type === 'whitepapers') {
        return res.json(resources.whitepapers);
      } else if (type === 'webinars') {
        return res.json(resources.webinars);
      } else if (type === 'case-studies') {
        return res.json(resources.caseStudies);
      } else {
        return res.json(resources);
      }
    
    case 'search':
      const query = (req.query.q as string || '').toLowerCase();
      const searchResults = {
        whitepapers: resources.whitepapers.filter(item => 
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
        ),
        webinars: resources.webinars.filter(item => 
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
        ),
        caseStudies: resources.caseStudies.filter(item => 
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
        )
      };
      return res.json(searchResults);
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'download':
      // Handle resource download request
      const { resourceId, resourceType, email, name } = req.body;
      
      // Log the download request
      console.log('Resource download request:', {
        resourceId,
        resourceType,
        email,
        name,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Download link sent to your email',
        downloadUrl: `/resources/${resourceType}/${resourceId}.pdf`
      });
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}