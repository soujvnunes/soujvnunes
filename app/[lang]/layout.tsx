import '../tailwind.config.css'

import type { Metadata, Viewport } from 'next'
import { Google_Sans } from 'next/font/google'
import Script from 'next/script'

import { theme } from '@/themizer.config'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { resolveAtom } from 'themizer'

import { dicts } from '@/shared/lib/i18n'

const META_TITLE = process.env.META_TITLE ?? 'Victor Nunes • Senior Frontend Engineer'

export const viewport: Viewport = {
  themeColor: `${resolveAtom(theme.aliases.colors.base)}`,
}
export const metadata: Metadata = {
  creator: 'Victor Nunes',
  metadataBase: process.env.BASE_URL ? new URL(process.env.BASE_URL) : null,
  description: process.env.META_DESCRIPTION,
  authors: [{ name: 'Victor Nunes', url: process.env.BASE_URL }],
  keywords: [
    'Victor Nunes',
    'soujvnunes',
    'Frontend Engineer',
    'Senior Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'JavaScript',
  ],
  alternates: {
    canonical: process.env.BASE_URL,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  title: {
    default: META_TITLE,
    template: `${META_TITLE} | %s`,
  },
  openGraph: {
    title: process.env.META_OG_TITLE,
    description: process.env.META_OG_DESCRIPTION,
    url: process.env.BASE_URL,
    siteName: META_TITLE,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.META_OG_TITLE,
    description: process.env.META_OG_DESCRIPTION,
    creator: '@soujvnunes',
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: META_TITLE,
  },
}

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})

export function generateStaticParams() {
  return dicts.map((dict) => ({ lang: dict.locale }))
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params

  return (
    <html
      lang={lang}
      className={googleSans.variable}>
      <body className="bg-base text-neutral antialiased">
        <div className="isolate min-h-dvh">{children}</div>
        <Analytics debug />
        <SpeedInsights debug />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Victor Nunes',
              url: process.env.BASE_URL,
              description: process.env.META_DESCRIPTION,
              image: `${process.env.BASE_URL}/opengraph-image`,
              jobTitle: 'Senior Frontend Engineer',
              sameAs: [
                'https://github.com/soujvnunes',
                'https://linkedin.com/in/soujvnunes',
                'https://twitter.com/soujvnunes',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
