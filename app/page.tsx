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
      </Card>
      <HeroBackground />
    </main>
  )
}
