import { HeroBackground } from '@/shared/components/background'
import { Card } from '@/shared/components/card'

export default function RootPage() {
  return (
    <main className="flex min-h-dvh">
      <Card className="m-auto">Victor Nunes</Card>
      <HeroBackground />
    </main>
  )
}
