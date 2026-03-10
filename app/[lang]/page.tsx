import { notFound } from 'next/navigation'

import { getDictionary, hasLocale } from '@/shared/lib/i18n'

import { RootFooter } from '@/shared/components/Root/Footer'
import { RootPresentation } from '@/shared/components/Root/Presentation'
import { HeroBackground } from '@/shared/components/ui/Background'

export default async function RootPage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params

  if (!hasLocale(lang)) notFound()

  const dictionary = await getDictionary(lang)

  return (
    <>
      <main className="flex h-[calc(100dvh-40px)]">
        <RootPresentation {...dictionary.root.presentation} />
      </main>
      <RootFooter />
      <HeroBackground />
    </>
  )
}
