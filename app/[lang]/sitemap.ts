import type { MetadataRoute } from 'next'

export default function RootSitemap(): MetadataRoute.Sitemap {
  return [
    {
      priority: 1,
      changeFrequency: 'monthly',
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
    },
  ]
}
