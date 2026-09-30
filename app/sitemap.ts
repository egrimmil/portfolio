import type { MetadataRoute } from 'next';
import { locales } from '@/data/locales';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl();
  const lastModified = new Date();
  return locales.flatMap((locale) => [
    {
      url: `${origin}/${locale}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${origin}/${locale}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]);
}
