import 'server-only'

import type { NextRequest } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const DEFAULT_LOCALE = 'en'

export const dicts = [
  {
    locale: DEFAULT_LOCALE,
    name: 'English',
    dict: () => import('../../public/dicts/en.json').then((module) => module.default),
  },
  {
    locale: 'pt',
    name: 'Português',
    dict: () => import('../../public/dicts/pt.json').then((module) => module.default),
  },
] as const

export type I18nConfig = (typeof dicts)[number]

export const i18nConfig = {
  defaultLocale: DEFAULT_LOCALE,
  locales: dicts.map((dict) => dict.locale),
} as const

export const hasLocale = (locale: string): locale is I18nConfig['locale'] =>
  !!dicts.find((dict) => dict.locale === locale)?.locale

export const getDict = (locale: I18nConfig['locale'] = DEFAULT_LOCALE) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  dicts.find((dict) => dict.locale === locale)!.dict()

export const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {} // Negotiator expects plain object so we need to transform headers

  request.headers.forEach((value, key) => {
    // eslint-disable-next-line security/detect-object-injection
    negotiatorHeaders[key] = value
  })

  const locales = Array.from(i18nConfig.locales)
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales) // Use negotiator and intl-localematcher to get best locale
  const locale = match(languages, locales, i18nConfig.defaultLocale)

  return locale
}
