import './tailwind.config.css'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'

import { theme } from '@/themizer.config'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const viewport: Viewport = { themeColor: theme.tokens.palette.cream.base }
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION!,
  title: {
    default: process.env.NEXT_PUBLIC_META_TITLE!,
    template: `%s | ${process.env.NEXT_PUBLIC_META_TITLE!}`,
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_META_OG_TITLE!,
    description: process.env.NEXT_PUBLIC_META_OG_DESCRIPTION!,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: process.env.NEXT_PUBLIC_META_TITLE!,
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

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={nunito.variable}>
      <body className="bg-ground-back text-ground-fore antialiased">
        <div className="isolate min-h-dvh">
          {children}
          <div className="absolute inset-0 -z-10">
            <div className="from-accent/20 h-full w-full bg-linear-to-r to-main/20">
              <div className="from-background h-full w-full bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] lg:bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
            </div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
