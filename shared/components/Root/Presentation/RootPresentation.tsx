import Image from 'next/image'
import Link from 'next/link'

import { FileUser } from 'lucide-react'

import memojiFallback from '@/shared/assets/memoji-fallback.svg'

import { i18nConfig } from '@/shared/lib/i18n'

import { Button } from '@/shared/components/ui/Button'
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
          loading="eager"
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
    <Button
      asChild
      kind="full"
      className="mt-2"
      itemEnd={<FileUser className="size-5" />}>
      <Link href="/Victor-Nunes_Senior-Software-Engineer_EMEA.pdf">{props.cta}</Link>
    </Button>
  </Card>
)
