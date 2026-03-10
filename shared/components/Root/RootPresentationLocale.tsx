'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { I18nConfigLocale } from '@/shared/lib/i18n'

interface RootPresentationLocaleProps {
  locale: I18nConfigLocale
}

export const RootPresentationLocale = (props: RootPresentationLocaleProps) => {
  const pathname = usePathname()
  const redirectedPathname = (locale: I18nConfigLocale) => {
    if (!pathname) return '/'

    const segments = pathname.split('/')

    segments[1] = locale

    return segments.join('/')
  }

  return <Link href={redirectedPathname(props.locale)}>{props.locale}</Link>
}
