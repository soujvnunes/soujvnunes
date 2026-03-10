/* eslint-disable security/detect-object-injection */
import 'server-only'

import type { NextRequest } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const DEFAULT_LOCALE = 'en'
const dictionaries = {
  [DEFAULT_LOCALE]: () => import('../../public/dictionaries/en.json').then((module) => module.default),
  pt: () => import('../../public/dictionaries/pt.json').then((module) => module.default),
} as const

export type I18nConfigLocale = keyof typeof dictionaries

export const i18nConfig = {
  defaultLocale: DEFAULT_LOCALE,
  locales: Object.keys(dictionaries) as I18nConfigLocale[],
} as const

export const hasLocale = (locale: string): locale is I18nConfigLocale => locale in dictionaries

// eslint-disable-next-line require-await
export const getDictionary = async (locale: I18nConfigLocale = DEFAULT_LOCALE) => dictionaries[locale]()

export const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {} // Negotiator expects plain object so we need to transform headers

  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })

  const locales = Array.from(i18nConfig.locales)
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales) // Use negotiator and intl-localematcher to get best locale
  const locale = match(languages, locales, i18nConfig.defaultLocale)

  return locale
}
