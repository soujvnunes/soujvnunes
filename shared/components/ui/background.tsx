import rapportDark from '@/shared/assets/rapport-dark.png'
import rapport from '@/shared/assets/rapport.png'

const HeroBackgroundRapport = ({ className, src }: { className: string; src: string }) => (
  <div
    className={`absolute inset-0 mask-radial-fade bg-repeat opacity-5 ${className}`}
    style={{ backgroundImage: `url(${src})` }}
  />
)

export const HeroBackground = () => (
  <div className="absolute inset-0 -z-10">
    <HeroBackgroundRapport
      className="dark:hidden"
      src={rapport.src}
    />
    <HeroBackgroundRapport
      className="not-dark:hidden"
      src={rapportDark.src}
    />
    <div className="absolute inset-0 bg-linear-to-r from-accent/40 to-main/40 mask-radial-fade [--mask-from:transparent] [--mask-to:white] dark:from-accent/20 dark:to-main/20" />
  </div>
)
