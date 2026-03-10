import Image from 'next/image'
import Link from 'next/link'

import { FileUser } from 'lucide-react'

import memojiFallback from '@/shared/assets/memoji-fallback.svg'

import { i18nConfig } from '@/shared/lib/i18n'

import { Card } from '@/shared/components/ui/Card'
import { Memoji } from '@/shared/components/ui/Memoji'
import { MemojiVideo } from '@/shared/components/ui/MemojiVideo'

import { RootPresentationLocale } from './RootPresentationLocale'

const RootPresentationMemoji = () => (
  <Memoji className="-mt-18">
    <MemojiVideo
      src="/memoji.mov"
      fallback={
        <Image
          alt=""
          className="scale-150"
          src={memojiFallback}
        />
      }
    />
  </Memoji>
)
const RootPresentationLocales = () => (
  <nav>
    <ul>
      {i18nConfig.locales.map((locale) => (
        <li key={locale}>
          <RootPresentationLocale locale={locale} />
        </li>
      ))}
    </ul>
  </nav>
)

interface RootPresentationProps {
  caption: string
  cta: string
}

export const RootPresentation = (props: RootPresentationProps) => (
  <Card className="m-auto grid w-3xs place-items-center">
    <RootPresentationMemoji />
    <RootPresentationLocales />
    <h1 className="contents">
      <span className="text-caption font-bold tracking-wider text-neutral-secondary uppercase">
        {props.caption}
      </span>
      <span className="text-body font-bold">Victor Nunes</span>
    </h1>
    <Link
      href="/Victor-Nunes_Senior-Software-Engineer_EMEA.pdf"
      className="mt-2 inline-flex h-8 w-full min-w-8 items-center justify-center rounded-lg bg-amber-500/10 pr-2 pl-2 align-middle text-caption font-bold tracking-wide text-amber-600 uppercase hover:bg-amber-500/20 motion-safe:transition-colors dark:text-amber-400">
      {props.cta}
      <span className="-mr-1 ml-auto pl-1">
        <FileUser className="size-5" />
      </span>
    </Link>
  </Card>
)
