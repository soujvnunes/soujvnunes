import './tailwind.config.css'

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import { theme } from '@/themizer.config'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { resolveAtom } from 'themizer'

import { HeroBackground } from '@/shared/components/background'

export const viewport: Viewport = {
  themeColor: `${resolveAtom(theme.aliases.colors.ground.back)}`,
}
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''), // TODO: remove ?? ''
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
  title: {
    default: process.env.NEXT_PUBLIC_META_TITLE ?? '', // TODO: remove ?? ''
    template: `%s | ${process.env.NEXT_PUBLIC_META_TITLE}`,
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_META_OG_TITLE,
    description: process.env.NEXT_PUBLIC_META_OG_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: process.env.NEXT_PUBLIC_META_TITLE,
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

const sofiaPro = localFont({
  variable: '--font-sofia-pro',
  src: [
    { path: './sofia-pro/SofiaPro-UltraLight.otf', weight: '100', style: 'normal' },
    { path: './sofia-pro/SofiaPro-UltraLightItalic.otf', weight: '100', style: 'italic' },
    { path: './sofia-pro/SofiaPro-ExtraLight.otf', weight: '200', style: 'normal' },
    { path: './sofia-pro/SofiaPro-ExtraLightItalic.otf', weight: '200', style: 'italic' },
    { path: './sofia-pro/SofiaPro-Light.otf', weight: '300', style: 'normal' },
    { path: './sofia-pro/SofiaPro-LightItalic.otf', weight: '300', style: 'italic' },
    { path: './sofia-pro/SofiaPro-Regular.otf', weight: '400', style: 'normal' },
    { path: './sofia-pro/SofiaPro-RegularItalic.otf', weight: '400', style: 'italic' },
    { path: './sofia-pro/SofiaPro-Medium.otf', weight: '500', style: 'normal' },
    { path: './sofia-pro/SofiaPro-MediumItalic.otf', weight: '500', style: 'italic' },
    { path: './sofia-pro/SofiaPro-SemiBold.otf', weight: '600', style: 'normal' },
    { path: './sofia-pro/SofiaPro-SemiBoldItalic.otf', weight: '600', style: 'italic' },
    { path: './sofia-pro/SofiaPro-Bold.otf', weight: '700', style: 'normal' },
    { path: './sofia-pro/SofiaPro-BoldItalic.otf', weight: '700', style: 'italic' },
    { path: './sofia-pro/SofiaPro-Black.otf', weight: '900', style: 'normal' },
    { path: './sofia-pro/SofiaPro-BlackItalic.otf', weight: '900', style: 'italic' },
  ],
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={sofiaPro.variable}>
      <body className="bg-ground-back text-ground-fore antialiased">
        <div className="isolate min-h-dvh">
          {children}
          <HeroBackground />
        </div>
        <Analytics debug />
        <SpeedInsights debug />
      </body>
    </html>
  )
}
