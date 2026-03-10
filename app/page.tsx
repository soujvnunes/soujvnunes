import { RootCard } from '@/shared/components/Root/RootCard'
import { RootFooter } from '@/shared/components/Root/RootFooter'
import { HeroBackground } from '@/shared/components/ui/Background'

export default function RootPage() {
  return (
    <>
      <main className="flex h-[calc(100dvh-40px)]">
        <RootCard />
      </main>
      <RootFooter />
      <HeroBackground />
    </>
  )
}
