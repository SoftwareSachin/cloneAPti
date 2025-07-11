import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { getStaticBlogPosts, getStaticBlogPostBySlug } from '../shared/static-data';

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