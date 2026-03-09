export const HeroBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="h-full w-full bg-linear-to-r from-accent/40 to-main/40 dark:from-accent/20 dark:to-main/20">
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-base lg:bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]">
        <div className="h-full bg-[url(/rapport.png)] mask-radial-fade bg-repeat opacity-5 dark:bg-[url(/rapport-dark.png)]" />
      </div>
    </div>
  </div>
)
