import rapportDark from '@/shared/assets/rapport-dark.png'
import rapport from '@/shared/assets/rapport.png'

import { cn } from '@/shared/utils/shadcn'

const HeroBackgroundRapport = ({ className, src }: React.ComponentProps<'div'> & { src: string }) => (
  <div
    className={cn('h-full mask-radial-fade bg-repeat opacity-5', className)}
    style={{ backgroundImage: `url(${src})` }}
  />
)

export const HeroBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="h-full w-full bg-linear-to-r from-accent/40 to-main/40 dark:from-accent/20 dark:to-main/20">
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-base lg:bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]">
        <HeroBackgroundRapport
          className="dark:hidden"
          src={rapport.src}
        />
        <HeroBackgroundRapport
          className="not-dark:hidden"
          src={rapportDark.src}
        />
      </div>
    </div>
  </div>
)
