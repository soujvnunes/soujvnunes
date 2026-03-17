import { notFound } from 'next/navigation'

import { parseString } from '@/shared/utils/string'

import { getDict, hasLocale } from '@/shared/lib/i18n'

import { RootFooter } from '@/shared/components/Root/Footer'
import { RootPresentation } from '@/shared/components/Root/Presentation'
import { HeroBackground } from '@/shared/components/ui/Background'

export default async function RootPage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params

  if (!hasLocale(lang)) notFound()

  const dictionary = await getDict(lang)

  return (
    <>
      <header className="relative py-10 text-center">
        <h1 className="text-title leading-none font-bold text-balance">
          {parseString(dictionary.root.header.headline, { main: 'text-main', accent: 'text-accent' })}
        </h1>
        <RootPresentation
          cta={dictionary.root.presentation.cta}
          caption={dictionary.root.presentation.caption}
        />
        <HeroBackground />
      </header>
      <main className="flex h-[calc(100dvh-40px)]" />
      <RootFooter />
    </>
  )
}
