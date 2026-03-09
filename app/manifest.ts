export default function manifest() {
  return {
    start_url: '/',
    display: 'standalone',
    theme_color: '#100A01',
    background_color: '#100A01',
    name: process.env.META_TITLE,
    short_name: process.env.META_OG_TITLE,
    description: process.env.META_DESCRIPTION,
    icons: [
      { src: '/icon/192', sizes: '192x192', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
