// Static data for college projects and portfolio projects
// This replaces the database-driven approach for Vercel deployment

export interface StaticProject {
  id: number;
  title: string;
  slug: string;
  client: string;
  industry: string;
  description: string;
  image?: string;
  screenshots?: string[];
  technologies: string[];
  results: string[];
  challenges: string;
  solution: string;
  featured: boolean;
  published: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface StaticBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  published: boolean;
  featured: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// Static College Projects Data - Only Azure Hub-and-Spoke Network Automation Platform
export const staticCollegeProjects: StaticProject[] = [
  {
    id: 1,
    title: "Azure Hub-and-Spoke Network Automation Platform",
    slug: "azure-hub-spoke-network-automation-platform",
    client: "Aptivon Solutions",
    industry: "Cloud Infrastructure",
    description: "Turnkey web-based network management platform for Azure hub-and-spoke architectures with comprehensive automation, monitoring, and security management capabilities.",
    image: "/api/placeholder/800/600",
    screenshots: [
      "dashboard-overview_1752170711656.png",
      "network-topology_1752170742561.png",
      "provision-spoke_1752170752568.png",
      "network-monitoring_1752170733521.png",
      "security-policies_1752170762246.png",
      "network-health_1752170721168.png",
      "compliance-audit_1752170702133.png"
    ],
    technologies: [
      "React",
      "TypeScript", 
      "Node.js",
      "Azure Functions",
      "ARM Templates",
      "Terraform",
      "Azure Resource Manager",
      "Azure Policy",
      "Azure Monitor",
      "Azure Security Center"
    ],
    results: [
      "95% reduction in network provisioning time",
      "Automated compliance monitoring with 99.9% uptime",
      "Real-time network health monitoring across 100+ resources",
      "Zero-downtime deployments with automated rollback capabilities",
      "Comprehensive security policy enforcement across all network segments"
    ],
    challenges: "Managing complex Azure hub-and-spoke network architectures required manual configuration, monitoring, and compliance tracking across multiple subscriptions and resource groups.",
    solution: "Developed a comprehensive web-based automation platform that provides infrastructure-as-code deployment, real-time monitoring, automated compliance reporting, and centralized security policy management for Azure hub-and-spoke networks.",
    featured: true,
    published: true,
    views: 245,
    likes: 18,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

// Static Portfolio Projects Data
export const staticPortfolioProjects: StaticProject[] = [
  {
    id: 1,
    title: "E-commerce Platform Modernization",
    slug: "ecommerce-platform-modernization",
    client: "Global Retail Corporation",
    industry: "Retail",
    description: "Complete digital transformation of legacy e-commerce system with modern microservices architecture, real-time inventory management, and AI-powered personalization.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "Elasticsearch"
    ],
    results: [
      "300% increase in conversion rates",
      "50% reduction in page load times",
      "99.9% uptime achieved",
      "Real-time inventory synchronization across 500+ stores"
    ],
    challenges: "Legacy monolithic architecture struggled with high traffic loads, causing frequent downtime and poor user experience during peak shopping seasons.",
    solution: "Migrated to cloud-native microservices architecture with containerized deployments, implemented CDN for global content delivery, and integrated AI-driven recommendation engine.",
    featured: true,
    published: true,
    views: 1234,
    likes: 89,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: "Healthcare Management System",
    slug: "healthcare-management-system",
    client: "Regional Medical Center",
    industry: "Healthcare",
    description: "Comprehensive patient management and scheduling system with electronic health records, telemedicine integration, and automated billing processes.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Vue.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "FastAPI",
      "WebRTC",
      "HL7 FHIR"
    ],
    results: [
      "60% reduction in appointment scheduling time",
      "Eliminated paper-based records completely",
      "HIPAA compliant with 256-bit encryption",
      "Integrated telemedicine serving 10,000+ patients"
    ],
    challenges: "Manual patient record management and scheduling system caused delays, errors, and compliance issues with healthcare regulations.",
    solution: "Built integrated healthcare management platform with automated scheduling, electronic health records, telemedicine capabilities, and real-time billing integration.",
    featured: true,
    published: true,
    views: 987,
    likes: 67,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 3,
    title: "Financial Analytics Platform",
    slug: "financial-analytics-platform",
    client: "Investment Management Firm",
    industry: "Finance",
    description: "Real-time financial data analytics platform with machine learning-powered risk assessment, automated trading strategies, and comprehensive portfolio management.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "Apache Kafka",
      "React",
      "D3.js",
      "Redis",
      "AWS Lambda"
    ],
    results: [
      "40% improvement in risk prediction accuracy",
      "Real-time processing of 1M+ transactions per day",
      "Automated portfolio rebalancing with 15% better returns",
      "Regulatory compliance reporting automated 100%"
    ],
    challenges: "Manual financial analysis and risk assessment processes were time-consuming and prone to human error, limiting the firm's ability to respond quickly to market changes.",
    solution: "Developed machine learning-powered analytics platform with real-time data processing, automated risk modeling, and intelligent trading strategy recommendations.",
    featured: true,
    published: true,
    views: 756,
    likes: 52,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 4,
    title: "Digital Banking Platform",
    slug: "digital-banking-platform",
    client: "Regional Bank",
    industry: "Banking",
    description: "Modern digital banking platform with mobile-first design, real-time fraud detection, and comprehensive account management capabilities.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React Native",
      "Spring Boot",
      "Oracle Database",
      "Kubernetes",
      "Apache Kafka",
      "Machine Learning",
      "JWT Authentication"
    ],
    results: [
      "90% reduction in account opening time",
      "Real-time fraud detection with 99.8% accuracy",
      "Mobile app with 4.8-star rating",
      "24/7 digital banking services"
    ],
    challenges: "Legacy banking systems were slow, required manual processes, and lacked modern security features needed for digital banking.",
    solution: "Built modern digital banking platform with mobile-first approach, integrated ML-powered fraud detection, and implemented real-time transaction processing.",
    featured: true,
    published: true,
    views: 892,
    likes: 74,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 5,
    title: "Smart Manufacturing IoT Platform",
    slug: "smart-manufacturing-iot-platform",
    client: "Manufacturing Corporation",
    industry: "Manufacturing",
    description: "IoT-enabled smart manufacturing platform with predictive maintenance, real-time monitoring, and automated quality control systems.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Angular",
      "Node.js",
      "InfluxDB",
      "Docker",
      "IoT Sensors",
      "Machine Learning",
      "Apache Kafka"
    ],
    results: [
      "35% reduction in equipment downtime",
      "Predictive maintenance with 95% accuracy",
      "Real-time monitoring of 1000+ devices",
      "Automated quality control reducing defects by 80%"
    ],
    challenges: "Manual equipment monitoring and reactive maintenance led to costly downtime and quality issues in manufacturing processes.",
    solution: "Implemented IoT-enabled smart manufacturing platform with predictive analytics, real-time monitoring, and automated quality control systems.",
    featured: true,
    published: true,
    views: 654,
    likes: 43,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  }
];

// Static Blog Posts Data
export const staticBlogPosts: StaticBlogPost[] = [
  {
    id: 1,
    title: "The Future of Enterprise AI: Transforming Business Operations in 2025",
    slug: "future-enterprise-ai-transforming-business-operations-2025",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise operations, from predictive analytics to automated decision-making, and what leaders need to know to stay competitive.",
    content: `# The Future of Enterprise AI: Transforming Business Operations in 2025

Artificial Intelligence is no longer a futuristic concept—it's a present reality reshaping how enterprises operate, compete, and deliver value. As we navigate through 2025, the convergence of advanced AI technologies, cloud computing, and data analytics is creating unprecedented opportunities for businesses to transform their operations fundamentally.

## The AI Revolution in Enterprise Operations

The enterprise AI landscape has evolved dramatically over the past few years. What once required teams of data scientists and months of development can now be accomplished in days with the right AI platforms and tools. This democratization of AI technology is enabling organizations of all sizes to harness the power of machine learning, natural language processing, and predictive analytics.

### Key Areas of AI Impact

**1. Predictive Analytics and Forecasting**
Modern AI systems can analyze vast amounts of historical data to predict future trends, customer behavior, and market conditions with remarkable accuracy. This capability is transforming supply chain management, inventory optimization, and strategic planning.

**2. Automated Decision-Making**
AI-powered systems can now make complex decisions in real-time, from pricing strategies to resource allocation. This automation not only reduces human error but also enables 24/7 operations and faster response times.

**3. Customer Experience Enhancement**
AI chatbots, personalization engines, and recommendation systems are creating more engaging and tailored customer experiences. These technologies can understand customer preferences, predict needs, and provide proactive support.

## Implementation Strategies for Success

Successfully implementing AI in enterprise operations requires careful planning and execution. Here are key strategies we've observed in successful AI transformations:

### 1. Start with Clear Business Objectives
Define specific, measurable goals for your AI initiatives. Whether it's reducing operational costs by 20% or improving customer satisfaction scores, having clear objectives ensures focused implementation.

### 2. Invest in Data Quality
AI systems are only as good as the data they're trained on. Establish robust data governance practices, ensure data quality, and create unified data platforms that can feed your AI models.

### 3. Build AI-Ready Teams
Successful AI adoption requires teams with the right skills. This doesn't mean hiring only data scientists—it means training existing employees and creating cross-functional teams that understand both the business and the technology.

## Emerging Trends to Watch

As we look ahead, several trends are shaping the future of enterprise AI:

- **Edge AI**: Processing data closer to its source for real-time insights
- **Explainable AI**: Making AI decisions more transparent and understandable
- **AI Ethics and Governance**: Ensuring responsible AI deployment
- **Autonomous Operations**: Fully self-managing business processes

## Conclusion

The future of enterprise AI is not just about technology—it's about reimagining how businesses operate. Organizations that embrace AI thoughtfully, with clear strategies and proper implementation, will find themselves with significant competitive advantages in the digital economy.

Ready to explore how AI can transform your business operations? Our team of experts is here to help you navigate this exciting journey.`,
    author: "Sarah Chen",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Enterprise", "Digital Transformation"],
    readTime: "8 min read",
    published: true,
    featured: true,
    views: 1250,
    likes: 95,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: "Cloud Migration Strategy: A Complete Guide for Enterprise Applications",
    slug: "cloud-migration-strategy-complete-guide-enterprise-applications",
    excerpt: "Learn the essential steps, best practices, and common pitfalls to avoid when migrating enterprise applications to the cloud. A comprehensive guide for CTOs and technical leaders.",
    content: `# Cloud Migration Strategy: A Complete Guide for Enterprise Applications

Cloud migration is no longer a question of "if" but "when" and "how" for most enterprises. As organizations seek to modernize their IT infrastructure, reduce operational costs, and improve scalability, moving to the cloud has become a strategic imperative.

## Understanding Cloud Migration

Cloud migration involves moving applications, data, and other business elements from on-premises infrastructure to cloud-based platforms. This process can range from simple lift-and-shift operations to complete application modernization and re-architecture.

### Types of Cloud Migration

**1. Rehosting (Lift and Shift)**
The simplest approach involves moving applications to the cloud without significant changes. While this provides immediate benefits like reduced infrastructure costs, it may not fully leverage cloud capabilities.

**2. Replatforming**
This involves making minor optimizations to applications to take advantage of cloud services while maintaining core architecture. It's a middle ground between rehosting and complete modernization.

**3. Refactoring/Re-architecting**
The most complex approach involves redesigning applications to be cloud-native, taking full advantage of cloud services, scalability, and resilience features.

## Key Migration Phases

### Phase 1: Assessment and Planning
- Conduct comprehensive application inventory
- Assess dependencies and integration points
- Evaluate security and compliance requirements
- Define migration priorities and timelines

### Phase 2: Design and Architecture
- Choose appropriate cloud services
- Design target architecture
- Plan security and governance frameworks
- Establish monitoring and management strategies

### Phase 3: Migration Execution
- Execute pilot migrations
- Implement gradual rollout strategy
- Monitor performance and resolve issues
- Validate functionality and performance

### Phase 4: Optimization and Governance
- Optimize costs and performance
- Implement cloud governance policies
- Establish ongoing monitoring and maintenance
- Plan for continuous improvement

## Best Practices for Success

### 1. Start with a Clear Strategy
Define your cloud migration objectives, whether it's cost reduction, improved agility, or enhanced scalability. A clear strategy guides all technical and business decisions.

### 2. Prioritize Applications Wisely
Begin with less critical applications to gain experience and confidence. Gradually move to more complex, mission-critical systems as your team develops expertise.

### 3. Invest in Training
Ensure your team has the necessary cloud skills. This includes technical training for developers and operations teams, as well as strategic training for management.

### 4. Focus on Security from Day One
Implement robust security measures including identity and access management, encryption, and compliance monitoring throughout the migration process.

## Common Pitfalls to Avoid

- **Underestimating complexity**: Cloud migration often involves more complexity than initially anticipated
- **Ignoring data migration**: Data migration can be time-consuming and risky if not properly planned
- **Neglecting performance testing**: Thoroughly test applications in the cloud environment before going live
- **Overlooking cost optimization**: Implement cost monitoring and optimization strategies from the beginning

## Conclusion

Successful cloud migration requires careful planning, skilled execution, and ongoing optimization. By following proven strategies and best practices, organizations can successfully transition to the cloud while minimizing risks and maximizing benefits.

Our team has helped numerous enterprises successfully navigate their cloud migration journey. Contact us to learn how we can help accelerate your cloud transformation.`,
    author: "Marcus Rodriguez",
    category: "Cloud Computing",
    tags: ["Cloud Migration", "Enterprise Architecture", "AWS", "Azure", "DevOps"],
    readTime: "12 min read",
    published: true,
    featured: true,
    views: 890,
    likes: 67,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];

// Export functions to get static data
export const getStaticCollegeProjects = (params?: { industry?: string; featured?: boolean; limit?: number; offset?: number }): StaticProject[] => {
  let projects = [...staticCollegeProjects];
  
  if (params?.industry && params.industry !== 'all') {
    projects = projects.filter(project => project.industry.toLowerCase() === params.industry.toLowerCase());
  }
  
  if (params?.featured !== undefined) {
    projects = projects.filter(project => project.featured === params.featured);
  }
  
  if (params?.offset) {
    projects = projects.slice(params.offset);
  }
  
  if (params?.limit) {
    projects = projects.slice(0, params.limit);
  }
  
  return projects;
};

export const getStaticPortfolioProjects = (params?: { industry?: string; featured?: boolean; limit?: number; offset?: number }): StaticProject[] => {
  let projects = [...staticPortfolioProjects];
  
  if (params?.industry && params.industry !== 'all') {
    projects = projects.filter(project => project.industry.toLowerCase() === params.industry.toLowerCase());
  }
  
  if (params?.featured !== undefined) {
    projects = projects.filter(project => project.featured === params.featured);
  }
  
  if (params?.offset) {
    projects = projects.slice(params.offset);
  }
  
  if (params?.limit) {
    projects = projects.slice(0, params.limit);
  }
  
  return projects;
};

export const getStaticBlogPosts = (params?: { category?: string; featured?: boolean; limit?: number; offset?: number }): StaticBlogPost[] => {
  let posts = [...staticBlogPosts];
  
  if (params?.category && params.category !== 'all') {
    posts = posts.filter(post => post.category.toLowerCase() === params.category.toLowerCase());
  }
  
  if (params?.featured !== undefined) {
    posts = posts.filter(post => post.featured === params.featured);
  }
  
  if (params?.offset) {
    posts = posts.slice(params.offset);
  }
  
  if (params?.limit) {
    posts = posts.slice(0, params.limit);
  }
  
  return posts;
};

export const getStaticProjectBySlug = (slug: string): StaticProject | undefined => {
  return [...staticCollegeProjects, ...staticPortfolioProjects].find(project => project.slug === slug);
};

export const getStaticBlogPostBySlug = (slug: string): StaticBlogPost | undefined => {
  return staticBlogPosts.find(post => post.slug === slug);
};