import { MetadataRoute } from 'next';

// REQUIRED FOR STATIC EXPORT: Forces Next.js to evaluate this at build time
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/drafts/'],
    },
    sitemap: 'https://aurenai.tech/sitemap.xml',
  };
}