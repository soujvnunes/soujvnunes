import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getLocale, i18nConfig } from './shared/lib/i18n'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return // Skip static files (anything with an extension like .pdf, .mov, .png, etc.)

  // Redirect if there is no locale
  if (
    i18nConfig.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    ) // Check if there is any supported locale in the pathname
  )
    return NextResponse.redirect(
      new URL(`/${getLocale(request)}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
    ) // e.g. for incoming request is /products, the new URL is now /en-US/products
}

export const config = {
  matcher: ['/((?!api|_next|.*\\.[\\w]+$).*)'], // Matcher ignoring `/_next/`, `/api/`, and static files
}
