import { RootFooter } from '@/shared/components/Root/RootFooter'
import { RootPresentation } from '@/shared/components/Root/RootPresentation'
import { HeroBackground } from '@/shared/components/ui/Background'

export default function RootPage() {
  return (
    <>
      <main className="flex h-[calc(100dvh-40px)]">
        <RootPresentation />
      </main>
      <RootFooter />
      <HeroBackground />
    </>
  )
}
