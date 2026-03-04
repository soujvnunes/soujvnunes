import './tailwind.config.css'

import type { Metadata, Viewport } from 'next'
import { Google_Sans } from 'next/font/google'

import { theme } from '@/themizer.config'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { resolveAtom } from 'themizer'

const META_TITLE = process.env.META_TITLE ?? 'soujvnunes'

export const viewport: Viewport = {
  themeColor: `${resolveAtom(theme.aliases.colors.base)}`,
}
export const metadata: Metadata = {
  metadataBase: process.env.BASE_URL ? new URL(process.env.BASE_URL) : null,
  description: process.env.META_DESCRIPTION,
  title: {
    default: META_TITLE,
    template: `%s | ${META_TITLE}`,
  },
  openGraph: {
    title: process.env.META_OG_TITLE,
    description: process.env.META_OG_DESCRIPTION,
    url: process.env.BASE_URL,
    siteName: META_TITLE,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={googleSans.variable}>
      <body className="bg-base text-neutral antialiased">
        <div className="isolate min-h-dvh">{children}</div>
        <Analytics debug />
        <SpeedInsights debug />
      </body>
    </html>
  )
}
