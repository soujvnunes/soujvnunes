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
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-256x256.png', sizes: '256x256', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/maskable_icon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
