'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/utils/shadcn'

import type { I18nConfig } from '@/shared/lib/i18n'

export const RootFooterLocalesItem = (props: Omit<I18nConfig, 'dict'>) => {
  const pathname = usePathname()
  const redirectedPathname = (locale: I18nConfig['locale']) => {
    if (!pathname) return '/'

    const segments = pathname.split('/')

    segments[1] = locale

    return segments.join('/')
  }

  return (
    <Link
      href={redirectedPathname(props.locale)}
      className={cn('text-caption font-bold', {
        'text-neutral': pathname.includes(props.locale),
      })}>
      {props.name}
    </Link>
  )
}
