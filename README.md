# Pinhead Analytics – AI & Data Consulting Website

A modern, production-ready marketing and content site for Pinhead Analytics, a leading Data & AI Consulting Firm specializing in GenAI and LLM solutions. Built using Astro (hybrid static/server), React islands, and TailwindCSS for maximum performance, flexibility, and developer experience.

---

## 🚀 Features

### Core Pages
- **Home**: Hero, services overview, case studies, and insights
- **Services**: Detailed offerings (AI Strategy, LLM Development, Data Engineering, MLOps)
- **Industries**: Industry-specific AI applications (formerly Use Cases)
- **Case Studies**: MDX-driven, SEO-optimized real-world stories
- **Insights**: Blog/thought leadership (MDX, dynamic filtering)
- **About**: Company, mission, team
- **Contact**: Accessible Netlify Form for easy submissions
- **Privacy Policy & Terms**: Legally compliant, accessible from footer

### UI Components
- **NavBar / NavBarClient**: Responsive navigation (Astro + React for interactivity)
- **Footer**: Sitemap, policies, and social links
- **CredibilityBar**: Metrics and achievements display
- **SectionHero**: Flexible hero sections with CTAs
- **CaseStudyCard**: Interactive project showcases
- **BlogGrid**: MDX-powered blog grid with category filtering
- **InsightsBrowser**: Client-side insights filtering

### Design System
- **Colors**: Custom palette (primary, accent, magenta, etc.)
- **Typography**: Space Grotesk (headings), Inter (body)
- **Animations**: Framer Motion (prefers-reduced-motion supported)
- **Mobile-first**: Responsive, accessible design

---

## 🛠 Technology Stack

- **Framework**: Astro 5+ (hybrid static/server, file-based routing)
- **UI**: React (islands for interactivity), Astro components
- **Styling**: TailwindCSS (with custom tokens, global styles)
- **Content**: MDX (Markdown + JSX) for blogs/case studies
- **SEO**: astro-seo, semantic HTML, sitemap
- **Build/Deploy**: Vercel, Netlify, or static hosting
- **Testing**: No formal test suite is currently configured. Consider adding Playwright for E2E tests and Vitest for unit tests if needed.

---

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
│   │   ├── insights/       # MDX insight articles (blog)
│   │   ├── case-studies/   # MDX case studies
│   │   └── industries/     # MDX industry pages
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
   git clone https://github.com/your-username/pinhead-analytics.git
   cd pinhead-analytics
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

No environment variables are required for basic development or deployment. All core features work out-of-the-box.

If you add integrations (e.g., CRM, email, or LLM API), refer to the integration documentation for any required environment variables.
## 📝 Content Authoring & Management

### Case Studies

- **Location:** `src/content/case-studies/` (rendered via `src/pages/case-studies/[slug].astro`)
- **Format:** `.mdx` files (one per case study)
- **Layout:** Every file must include `layout: ../../layouts/CaseStudyLayout.astro` in the frontmatter.
- **Frontmatter (required):**
  ```mdx
  ---
  layout: ../../layouts/CaseStudyLayout.astro
  title: "Full Case Study Title - Case Study - Pinhead Analytics"
  description: "A concise summary for SEO and meta tags."
  date: "YYYY-MM-DD"
  category: "Case Study"
  readTime: "X min read"
  featured: true|false
  client: "Client Name"
  services: ["Service 1", "Service 2"]
  image:
    src: "https://..."
    alt: "Descriptive alt text"
  ---
  ```
- **Content Structure:**
  - Wrap main content in `<main class="...">`.
  - Use `<section class="...">` for logical sections (Header, Body, Related Studies, etc).
  - Main narrative/article should be in `<article class="prose ...">` for Tailwind Typography.
  - Use standard Markdown fenced code blocks for code samples.
  - Use MDX comments (`{/* ... */}`), not HTML comments.
- **Styling:**
  - Tailwind CSS utility classes are supported directly in markup.
- **SEO:**
  - The layout and frontmatter ensure proper `<title>`, `<meta>`, and Open Graph tags.

### Insights (Blog Posts)

- **Location:** `src/content/insights/`
- **Format:** `.mdx` files (one per insight/article)
- **Frontmatter (required):**
  ```mdx
  ---
  title: "Your Post Title"
  description: "Post description"
  date: "YYYY-MM-DD"
  category: "Category Name"
  readTime: "X min read"
  featured: true|false
  ---
  ```
- **Content:**
  - Write in Markdown/MDX.
  - Use fenced code blocks for code.
  - MDX comments only.
  - Categories are used for dynamic filtering in the UI.

### Industry Use Cases

- **Location:** `src/content/industries/` (rendered via `src/pages/industries/[slug].astro`)
- **Format:** `.mdx` files.
- **Layout:** Ensure MDX files use an appropriate layout (e.g., `layout: ../../layouts/IndustryLayout.astro`) in frontmatter if a dedicated layout exists, or rely on the dynamic page's layout.
- **Frontmatter:**
  - Use a structure similar to Insights or Case Studies, with fields relevant to the use case (title, description, date, category, etc).
- **Content:**
  - Markdown/MDX for rich content.
  - Use `<main>`, `<section>`, and `<article>` tags for structure and Tailwind classes for styling.

### General Content Authoring Best Practices
- Always use MDX for content-rich pages (case studies, insights, use cases).
- Use the appropriate layout via the `layout` frontmatter property for SEO and consistent styling.
- Adhere to the established frontmatter schema for each content type.
- Use Tailwind utility classes for custom styling within content.
- For code blocks, use Markdown fenced code blocks (syntax highlighting is automatic).
- Never use HTML comments in MDX files—use MDX comments only.
- For Open Graph images, use the default in `public/og-image.png` or specify a custom image in the frontmatter if supported.

For more details and examples, see the `/src/content/case-studies/`, `/src/content/insights/`, and `/src/pages/industries/` directories in the repo.
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

### Contact Form (Netlify Forms)

The contact form is powered by [Netlify Forms](https://docs.netlify.com/forms/setup/), requiring no backend or API configuration for basic use.

**How it works:**
- Add the `netlify` attribute to your form element: `<form name="contact" method="POST" data-netlify="true">`
- Include a hidden input with the form name: `<input type="hidden" name="form-name" value="contact" />`
- Netlify automatically captures submissions and provides them in the Netlify dashboard.

**Example Markup:**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields here -->
  <button type="submit">Send</button>
</form>
```

**Spam Protection:**
- Add a [honeypot field](https://docs.netlify.com/forms/spam-filters/) for spam filtering:
  ```html
  <input type="text" name="bot-field" style="display:none" />
  ```
- Or use Netlify’s built-in spam filtering options.

**Handling Submissions:**
- Successful submissions redirect to a thank-you page or display a confirmation message (customize as needed).
- For advanced workflows (notifications, integrations), configure in the Netlify dashboard.

See the [Netlify Forms documentation](https://docs.netlify.com/forms/setup/) for more options and best practices.
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
2. **Set environment variables** in Vercel dashboard (if any integrations requiring them are added)
3. **Deploy** automatically on push

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Set environment variables** (if any integrations requiring them are added)

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

- Input validation (client-side recommended, Netlify provides server-side)
- CSRF protection (handled by Netlify for form submissions)
- Environment variable security
- Content Security Policy headers (recommended)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Email: contact@pinheadanalytics.com
- Issues: Use GitHub issues for bug reports

---

Built with ❤️ using Astro, React, and TailwindCSS