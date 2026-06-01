# My Startup

![App Preview](https://imgix.cosmicjs.com/6a8fba60-5da4-11f1-ba46-4feeec079fc7-autopilot-photo-1472099645785-5658abf4ff4e-1780309616895.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, fully responsive company website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). My Startup showcases product features, pricing tiers, team members, blog posts, and customer testimonials—all dynamically managed through your Cosmic bucket.

## Features

- 🏠 **Stunning Homepage** with hero, features grid, pricing preview, team highlights, and testimonials
- ⚡ **Features Page** highlighting your product capabilities with icons and images
- 💰 **Pricing Page** with tiered plans, "Most Popular" badges, and included feature lists
- 👥 **Team Page** with member profiles, roles, bios, and social links
- 📝 **Blog** with a listing page and individual post pages with rich content
- 💬 **Testimonials** with star ratings, customer photos, and company attribution
- 📱 **Fully Responsive** design that looks great on every device
- 🚀 **Server-Side Rendering** for fast loads and great SEO
- 🎨 Modern UI built with Tailwind CSS and the Inter font

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a1d5e14ebf42ceaaf384e7a&clone_repository=6a1d5f32ebf42ceaaf384ec4)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Startup". The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, team-members, blog-posts, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A Cosmic account and bucket with the content types: `features`, `pricing-tiers`, `team-members`, `blog-posts`, `testimonials`

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single blog post with related author data
const { object: post } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application reads content directly from your Cosmic bucket using the [Cosmic SDK](https://www.cosmicjs.com/docs). Each page is a Server Component that fetches the relevant object type. Read about the content modeling approach and querying in the [Cosmic docs](https://www.cosmicjs.com/docs).

The following object types are utilized:

- **features** — product/service capabilities
- **pricing-tiers** — pricing plans
- **team-members** — team profiles
- **blog-posts** — articles
- **testimonials** — customer quotes

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import into [Netlify](https://netlify.com)
3. Add the same environment variables
4. Deploy
<!-- README_END -->