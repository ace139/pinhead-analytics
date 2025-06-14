import { z, defineCollection } from 'astro:content';

const insightsCollection = defineCollection({
  type: 'content', // 'content' for MD/MDX, 'data' for JSON/YAML
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().optional(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    authorTwitter: z.string().optional(),
  })
});

// Placeholder for case-studies collection
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)), // Accept string or Date, transform to Date
    // Re-using 'category' and 'readTime' from insights, adjust if needed
    category: z.string().optional(), 
    readTime: z.string().optional(),
    // Specific fields for case studies
    client: z.string().optional(),
    services: z.array(z.string()).optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).optional(), // Changed from z.string() to z.array(z.string())
    image: z.object({ 
      src: z.string(),
      alt: z.string()
    }).optional(),
    featured: z.boolean().optional(),
    // Fields from hardcoded data to be added to schema for CaseStudyCard compatibility
    outcomeMetric: z.string().optional(), 
    metricValue: z.string().optional(),
    // 'services' array can be used for stackIcons. If distinct, add stackIcons: z.array(z.string()).optional()
    layout: z.string().optional() // To link to CaseStudyLayout.astro
  })
});

// Placeholder for use-cases collection
const useCasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)).optional(), // Accept string or Date, transform to Date, keep optional
    category: z.string().optional(),
    // Specific fields for use cases
    industry: z.string().optional(),
    problemStatement: z.string().optional(),
    aiSolution: z.string().optional(),
    benefits: z.array(z.string()).optional(), // Renamed from keyBenefits
    services: z.array(z.string()).optional(), // Added services field
    icon: z.string().optional(), // e.g., for a card display
    featured: z.boolean().optional(),
    // Fields present in MDX frontmatter but missing from schema
    layout: z.string().optional(),
    readTime: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional()
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)).optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    layout: z.string().optional(), // Common for blog posts
    featured: z.boolean().optional()
  })
});

export const collections = {
  'insights': insightsCollection,
  'case-studies': caseStudiesCollection,
  'use-cases': useCasesCollection,
  'blog': blogCollection,
};
