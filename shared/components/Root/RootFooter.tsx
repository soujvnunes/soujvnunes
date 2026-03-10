import { Logotype } from '@/shared/components/ui/Logos'

export const RootFooter = () => (
  <footer className="mx-auto w-full px-4 text-center text-neutral-secondary lg:max-w-5xl lg:px-8">
    <Logotype />
    <span className="text-caption"> © {new Date().getFullYear()}</span>
  </footer>
)
