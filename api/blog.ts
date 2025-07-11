import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

// Static blog data for Vercel serverless functions
const staticBlogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    slug: "future-ai-enterprise-software-development",
    excerpt: "Explore how artificial intelligence is transforming enterprise software development, from automated code generation to intelligent testing and deployment strategies.",
    content: "# The Future of AI in Enterprise Software Development\n\nArtificial Intelligence is revolutionizing how we approach enterprise software development. From automated code generation to intelligent testing frameworks, AI is becoming an integral part of the modern development lifecycle.\n\n## Key Areas of AI Integration\n\n### 1. Code Generation and Assistance\n- AI-powered IDEs that suggest code completions\n- Automated documentation generation\n- Code review and optimization suggestions\n\n### 2. Testing and Quality Assurance\n- Intelligent test case generation\n- Automated bug detection and fixing\n- Performance optimization recommendations\n\n### 3. Deployment and Operations\n- Predictive scaling based on usage patterns\n- Automated incident response\n- Continuous optimization of system performance\n\n## Benefits for Enterprise Development\n\n**Increased Productivity**: Developers can focus on high-level architecture and business logic while AI handles routine tasks.\n\n**Improved Quality**: AI-powered testing tools can identify edge cases and potential issues that might be missed by manual testing.\n\n**Faster Time-to-Market**: Automated processes reduce development cycles and accelerate product delivery.\n\nThe future of enterprise software development is not about replacing developers—it's about augmenting their capabilities and enabling them to build better software faster.",
    author: "Sarah Chen",
    category: "Artificial Intelligence",
    tags: ["AI", "Enterprise", "Software Development", "Automation"],
    readTime: "8 min read",
    published: true,
    featured: true,
    views: 1245,
    likes: 89,
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-15")
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Enterprise Applications",
    slug: "cloud-migration-strategies-enterprise-applications",
    excerpt: "A comprehensive guide to successfully migrating enterprise applications to the cloud, covering planning, execution, and optimization strategies.",
    content: "# Cloud Migration Strategies for Enterprise Applications\n\nMigrating enterprise applications to the cloud is a complex undertaking that requires careful planning, execution, and ongoing optimization. This comprehensive guide covers the key strategies and best practices for successful cloud migration.\n\n## Understanding Cloud Migration\n\nCloud migration involves moving digital assets, services, databases, IT resources, and applications from on-premises infrastructure to cloud-based environments. For enterprises, this transition offers numerous benefits including cost optimization, scalability, and enhanced security.\n\n## Migration Strategies\n\n### 1. Lift and Shift (Rehosting)\n- **Approach**: Move applications to the cloud with minimal changes\n- **Benefits**: Quick migration, low initial cost\n- **Best For**: Legacy applications that work well as-is\n\n### 2. Refactoring\n- **Approach**: Modify applications to better leverage cloud services\n- **Benefits**: Improved performance and cost optimization\n- **Best For**: Applications that need modernization\n\nSuccessful cloud migration requires careful planning, the right expertise, and a systematic approach. By learning from the experiences of others and following proven best practices, enterprises can achieve successful cloud transformations that deliver significant business value.",
    author: "Marcus Rodriguez",
    category: "Cloud Computing",
    tags: ["Cloud", "Migration", "AWS", "Azure"],
    readTime: "6 min read",
    published: true,
    featured: false,
    views: 892,
    likes: 67,
    createdAt: new Date("2025-01-12"),
    updatedAt: new Date("2025-01-12")
  }
];

function getStaticBlogPosts() {
  return staticBlogPosts;
}

function getStaticBlogPostBySlug(slug: string) {
  return staticBlogPosts.find(post => post.slug === slug);
}

// Blog post schema
const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  coverImage: z.string().optional(),
  readTime: z.number().min(1, 'Read time is required')
});

const blogCommentSchema = z.object({
  postId: z.number().min(1, 'Post ID is required'),
  author: z.string().min(1, 'Author name is required'),
  email: z.string().email('Invalid email format'),
  content: z.string().min(1, 'Comment content is required'),
  website: z.string().optional()
});

const blogSubscriberSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(1, 'Name is required').optional()
});

// Static data is now imported from shared/static-data.ts

let blogComments: any[] = [];
let blogSubscribers: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;
  const { action } = req.query;

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
    console.error('Blog API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const { action, slug, postId } = req.query;

  switch (action) {
    case 'posts':
      return res.json(getStaticBlogPosts());
    
    case 'post':
      if (!slug) {
        return res.status(400).json({ error: 'Slug is required' });
      }
      const post = getStaticBlogPostBySlug(slug as string);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      return res.json(post);
    
    case 'comments':
      if (!postId) {
        return res.status(400).json({ error: 'Post ID is required' });
      }
      const comments = blogComments.filter(c => c.postId === parseInt(postId as string));
      return res.json(comments);
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function handlePost(req: VercelRequest, res: VercelResponse) {
  const { action } = req.query;

  switch (action) {
    case 'comment':
      try {
        const commentData = blogCommentSchema.parse(req.body);
        const comment = {
          id: blogComments.length + 1,
          ...commentData,
          approved: false,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        blogComments.push(comment);
        return res.status(201).json(comment);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'subscribe':
      try {
        const subscriberData = blogSubscriberSchema.parse(req.body);
        const subscriber = {
          id: blogSubscribers.length + 1,
          ...subscriberData,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        blogSubscribers.push(subscriber);
        return res.status(201).json(subscriber);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: fromZodError(error).toString() });
        }
        throw error;
      }
    
    case 'like':
      try {
        const { postId } = req.body;
        const post = blogPosts.find(p => p.id === parseInt(postId));
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        post.likes += 1;
        return res.json({ likes: post.likes });
      } catch (error) {
        return res.status(400).json({ error: 'Invalid request' });
      }
    
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}