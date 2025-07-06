import { VercelRequest, VercelResponse } from '@vercel/node';

const KNOWLEDGE_BASE = [
  {
    id: 1,
    title: "How long does a typical implementation take?",
    content: "Implementation timelines vary based on project complexity and scope. Typical timelines are: Small projects (1-2 weeks), Medium projects (3-6 weeks), Large enterprise projects (8-16 weeks). We provide detailed project timelines during the planning phase.",
    category: "Technical Implementation",
    tags: ["implementation", "timeline", "project", "planning"]
  },
  {
    id: 2,
    title: "What are the system requirements?",
    content: "Our solutions are cloud-native and platform agnostic. Minimum requirements include: Modern web browser (Chrome, Firefox, Safari, Edge), Stable internet connection (10+ Mbps recommended), Operating System: Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+.",
    category: "Technical Implementation",
    tags: ["requirements", "system", "browser", "operating system"]
  },
  {
    id: 3,
    title: "How do you handle data migration?",
    content: "We follow a comprehensive data migration process: Data assessment and mapping, Migration strategy development, Test migrations in staging environment, Validation and integrity checks, Scheduled production migration with minimal downtime, Post-migration verification and optimization.",
    category: "Technical Implementation",
    tags: ["data", "migration", "transfer", "process"]
  },
  {
    id: 4,
    title: "What security measures do you implement?",
    content: "Security is our top priority. We implement: End-to-end encryption (AES-256), Multi-factor authentication (MFA), Role-based access control (RBAC), Regular security audits and penetration testing, SOC 2 Type II compliance, GDPR and data privacy compliance.",
    category: "Technical Implementation",
    tags: ["security", "encryption", "compliance", "authentication"]
  },
  {
    id: 5,
    title: "How is pricing calculated?",
    content: "Our pricing is transparent and based on: Project scope and complexity, Required features and integrations, Number of users or transactions, Support level required, Implementation timeline. We provide detailed quotes with no hidden fees.",
    category: "Billing & Pricing",
    tags: ["pricing", "cost", "billing", "quote"]
  },
  {
    id: 6,
    title: "What payment methods do you accept?",
    content: "We accept multiple payment methods: Bank transfers (ACH/Wire), Credit cards (Visa, MasterCard, Amex), Corporate purchase orders, Annual prepayment (with discount), Milestone-based payments for large projects.",
    category: "Billing & Pricing",
    tags: ["payment", "methods", "billing", "credit card"]
  },
  {
    id: 7,
    title: "Are there any hidden costs?",
    content: "No, we believe in transparent pricing. All costs are outlined upfront including: Implementation fees, Licensing costs, Training expenses, Ongoing support costs, Third-party integrations (if any). Any changes to scope are discussed and approved before implementation.",
    category: "Billing & Pricing",
    tags: ["hidden costs", "transparent", "pricing", "fees"]
  },
  {
    id: 8,
    title: "Can I change my plan later?",
    content: "Yes, our solutions are flexible. You can: Upgrade to higher tiers anytime, Add additional users or features, Modify service levels, Downgrade at renewal periods. Changes are prorated and take effect immediately or at the next billing cycle.",
    category: "Billing & Pricing",
    tags: ["plan change", "upgrade", "flexible", "modification"]
  },
  {
    id: 9,
    title: "What training is included?",
    content: "Comprehensive training is included with all implementations: Initial administrator training (4-8 hours), End-user training sessions, Video tutorials and documentation, Live Q&A sessions, Train-the-trainer programs for large organizations, Ongoing training for new features.",
    category: "Training & Onboarding",
    tags: ["training", "onboarding", "education", "tutorials"]
  },
  {
    id: 10,
    title: "How long is the onboarding process?",
    content: "Onboarding typically takes 1-3 weeks depending on complexity: Week 1: System setup and configuration, Week 2: Data migration and integration, Week 3: Training and go-live support. We provide dedicated onboarding specialists throughout the process.",
    category: "Training & Onboarding",
    tags: ["onboarding", "process", "timeline", "setup"]
  },
  {
    id: 11,
    title: "Do you provide user documentation?",
    content: "Yes, we provide comprehensive documentation: User manuals and guides, API documentation, Video tutorials, Best practices documentation, Troubleshooting guides, Regular documentation updates with new features.",
    category: "Training & Onboarding",
    tags: ["documentation", "manuals", "guides", "tutorials"]
  },
  {
    id: 12,
    title: "Is ongoing training available?",
    content: "Absolutely! We offer continuous learning opportunities: Monthly webinars on new features, Advanced training workshops, Certification programs, Online learning portal access, One-on-one training sessions, Annual user conferences.",
    category: "Training & Onboarding",
    tags: ["ongoing training", "webinars", "certification", "learning"]
  },
  {
    id: 13,
    title: "What's included in maintenance?",
    content: "Our maintenance includes: Regular system updates and patches, Performance monitoring and optimization, Backup and disaster recovery, Security updates and monitoring, Bug fixes and issue resolution, 24/7 system monitoring, Quarterly health checks.",
    category: "Maintenance & Support",
    tags: ["maintenance", "updates", "monitoring", "support"]
  },
  {
    id: 14,
    title: "How do you handle system updates?",
    content: "We follow a structured update process: Testing in staging environment, Scheduled maintenance windows, Automatic rollback capabilities, Pre-update notifications, Post-update verification, Minimal downtime (typically <30 minutes), Emergency patches applied immediately for security.",
    category: "Maintenance & Support",
    tags: ["updates", "maintenance", "patches", "downtime"]
  },
  {
    id: 15,
    title: "What are your SLA guarantees?",
    content: "Our Service Level Agreements include: 99.9% uptime guarantee, Response times: Critical (1 hour), High (4 hours), Medium/Low (24 hours), Resolution times based on priority, Financial credits for SLA breaches, 24/7 monitoring and alerting.",
    category: "Maintenance & Support",
    tags: ["SLA", "uptime", "response time", "guarantee"]
  },
  {
    id: 16,
    title: "How do you provide ongoing support?",
    content: "We offer multiple support channels: 24/7 phone support for critical issues, Email support with guaranteed response times, Live chat during business hours, Online ticketing system, Knowledge base and self-service portal, Dedicated account managers for enterprise clients.",
    category: "Maintenance & Support",
    tags: ["support", "channels", "phone", "email", "chat"]
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      success: false 
    });
  }

  try {
    const query = req.query.q as string;
    const category = req.query.category as string;
    
    if (!query || query.trim().length < 2) {
      return res.status(400).json({
        message: 'Search query must be at least 2 characters long',
        success: false
      });
    }

    let results = KNOWLEDGE_BASE;

    // Filter by category if provided
    if (category && category !== 'all') {
      results = results.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search in title, content, and tags
    const searchTerm = query.toLowerCase().trim();
    const searchResults = results.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const contentMatch = item.content.toLowerCase().includes(searchTerm);
      const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      const categoryMatch = item.category.toLowerCase().includes(searchTerm);
      
      return titleMatch || contentMatch || tagMatch || categoryMatch;
    });

    // Sort by relevance (title matches first, then content matches)
    const sortedResults = searchResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(searchTerm);
      const bTitle = b.title.toLowerCase().includes(searchTerm);
      
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return 0;
    });

    return res.status(200).json({
      success: true,
      query: query,
      category: category || 'all',
      results: sortedResults,
      total: sortedResults.length
    });

  } catch (error) {
    console.error('Error processing search request:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Please try again later.',
      success: false 
    });
  }
}