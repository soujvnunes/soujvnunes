import Image from 'next/image'
import Link from 'next/link'

import { FileUser } from 'lucide-react'

import memojiFallback from '@/shared/assets/memoji-fallback.svg'

import { Button } from '@/shared/components/ui/Button'
import { Card } from '@/shared/components/ui/Card'
import { Memoji } from '@/shared/components/ui/Memoji'
import { MemojiVideo } from '@/shared/components/ui/MemojiVideo'

const RootPresentationMemoji = () => (
  <Memoji className="-mt-18">
    <MemojiVideo
      src="/memoji.mov"
      fallback={
        <Image
          alt=""
          loading="eager"
          className="absolute w-48 animate-pulse"
          src={memojiFallback}
        />
      }
    />
  </Memoji>
)

interface RootPresentationProps {
  caption: string
  cta: string
}

export const RootPresentation = (props: RootPresentationProps) => (
  <Card className="m-auto grid w-3xs place-items-center">
    <RootPresentationMemoji />
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
