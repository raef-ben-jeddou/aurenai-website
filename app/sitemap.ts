import { MetadataRoute } from 'next';

// REQUIRED FOR STATIC EXPORT: Forces Next.js to evaluate this at build time
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aurenai.tech';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cbam-compliance-guide/`,
      lastModified: new Date('2026-02-15'), 
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}