import { MetadataRoute } from 'next';

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
      // Referencing the markdown file found in your content/blog/ directory
      url: `${baseUrl}/blog/cbam-compliance-guide/`,
      lastModified: new Date('2026-02-15'), // Update to match exact publish date
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}