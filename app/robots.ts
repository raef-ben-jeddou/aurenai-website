import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Future-proofing: Block bots from internal administrative or legal drafts
      disallow: ['/private/', '/drafts/'],
    },
    sitemap: 'https://aurenai.tech/sitemap.xml',
  };
}