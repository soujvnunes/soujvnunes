import type { MetadataRoute } from 'next'

export default function RootRobots(): MetadataRoute.Robots {
  return {
    host: process.env.BASE_URL,
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
