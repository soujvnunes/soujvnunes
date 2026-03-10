import type { MetadataRoute } from 'next'

export default function RootManifest(): MetadataRoute.Manifest {
  return {
    name: process.env.META_TITLE,
    short_name: process.env.META_OG_TITLE,
    description: process.env.META_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#100A01',
    background_color: '#100A01',
    categories: ['portfolio', 'personal', 'developer'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      { src: '/icon/192', sizes: '192x192', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
