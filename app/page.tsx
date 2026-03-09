import Link from 'next/link'

import { FileUser } from 'lucide-react'

import { Memoji } from '@/shared/components/Memoji'
import { HeroBackground } from '@/shared/components/ui/background'
import { Card } from '@/shared/components/ui/card'

export default function RootPage() {
  return (
    <main className="flex min-h-dvh">
      <Card className="m-auto grid w-3xs place-items-center">
        <Memoji className="-mt-18" />
        <h1 className="contents">
          <span className="text-neutral-secondary text-caption font-bold tracking-wider uppercase">
            Senior Frontend Engineer
          </span>
          <span className="text-body font-bold">Victor Nunes</span>
        </h1>
        <Link
          href="/Victor-Nunes_Senior-Software-Engineer_EMEA.pdf"
          className="mt-2 inline-flex h-8 w-full min-w-8 items-center justify-center rounded-lg bg-amber-500/10 pr-2 pl-2 align-middle text-caption font-bold tracking-wide text-amber-600 uppercase hover:bg-amber-500/20 motion-safe:transition-colors dark:text-amber-400">
          View CV
          <span className="-mr-1 ml-auto pl-1">
            <FileUser className="size-5" />
          </span>
        </Link>
      </Card>
      <HeroBackground />
    </main>
  )
}
