# Pinhead Analytics - AI & Data Consulting Website

A modern, production-ready website for Pinhead Analytics, a leading Data & AI Consulting Firm specializing in GenAI and LLM solutions. Built with Astro, React, and TailwindCSS.

## 🚀 Features

### Core Pages
- **Home**: Hero section with services overview, case studies, and insights
- **Services**: Detailed service offerings (AI Strategy, LLM Development, Data Engineering, MLOps)
- **Use Cases**: Industry-specific AI applications
- **Case Studies**: Real-world success stories
- **Insights**: Blog/thought leadership content
- **About**: Company information and team
- **Contact**: Contact form with CRM integration
- **LLM Playground**: Interactive AI demo (optional)

### Components
- **NavBar**: Sticky navigation with dark translucency and Pinhead Analytics logo
- **Footer**: Comprehensive sitemap and social links
- **CredibilityBar**: Metrics and achievements display
- **SectionHero**: Flexible hero sections with CTAs
- **CaseStudyCard**: Interactive project showcases
- **BlogGrid**: MDX-powered blog system

### Design System
- **Colors**: Primary (#0A0B0F), Accent (#00D9FF), Magenta (#FF0080)
- **Typography**: Space Grotesk (headings), Inter (body)
- **Animations**: Framer Motion with accessibility support
- **Responsive**: Mobile-first design approach

## 🛠 Technology Stack

- **Framework**: Astro 5+ with React islands
- **Styling**: TailwindCSS with custom design tokens
- **Content**: MDX for blog posts
- **Animations**: Framer Motion
- **SEO**: Astro SEO with sitemap generation
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── pinhead-logo.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── react/          # React island components
│   │   ├── NavBar.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── content/
│   │   └── blog/           # MDX blog posts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── api/            # Serverless functions
│   │   ├── index.astro     # Home page
│   │   └── ...
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pinhead-analytics-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:4321`

### Environment Variables

Create a `.env` file in the root directory:

```env
# CRM Integration (optional)
HUBSPOT_API_KEY=your_hubspot_api_key

# Email Service (optional)
SENDGRID_API_KEY=your_sendgrid_api_key

# LLM Playground (optional)
OPENAI_API_KEY=your_openai_api_key
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new MDX file in `src/content/blog/`
2. Include frontmatter with required fields:

```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-03-15"
category: "AI Strategy"
author: "Author Name"
readTime: "8 min read"
tags: ["tag1", "tag2"]
---

# Your Content Here

Post content in MDX format...
```

### Updating Case Studies

Edit the case study data in relevant page files or create a separate data file for easier management.

## 🎨 Customization

### Design Tokens

Update design tokens in `tailwind.config.mjs`:

```js
colors: {
  primary: '#0A0B0F',    // Dark blue
  accent: '#00D9FF',     // Cyan
  magenta: '#FF0080',    // Pink
  text: '#FFFFFF',       // Light text
  surface: '#111318',    // Dark surface
}
```

### Typography

Fonts are loaded via Google Fonts in `Layout.astro`. Update font selections in the config.

### Animations

Animations use Framer Motion with `prefers-reduced-motion` support. Customize in component files.

## 🔧 API Integration

### Contact Form

The contact form (`/api/contact.ts`) is set up for HubSpot integration. Uncomment and configure:

```typescript
const hubspotResponse = await fetch('https://api.hubapi.com/contacts/v1/contact/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`
  },
  body: JSON.stringify({
    // Contact data
  })
});
```

### LLM Playground

The LLM Playground can be enabled by implementing the RAG API endpoint:

```typescript
// src/pages/api/rag.ts
export const POST: APIRoute = async ({ request }) => {
  // Implement LLM/RAG logic here
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Set environment variables**

### Self-hosted

1. **Build**: `npm run build`
2. **Serve**: Use any static hosting service

## 📊 SEO & Analytics

### SEO Features
- Automatic sitemap generation
- Meta tags optimization
- OpenGraph and Twitter cards
- Semantic HTML structure
- Performance optimized

### Analytics Integration

Add analytics in `Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security

- Input validation on all forms
- CSRF protection considerations
- Environment variable security
- Content Security Policy headers (recommended)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:
- Email: hello@pinheadanalytics.com
- Documentation: [Link to docs]
- Issues: Use GitHub issues for bug reports

---

Built with ❤️ using Astro, React, and TailwindCSS